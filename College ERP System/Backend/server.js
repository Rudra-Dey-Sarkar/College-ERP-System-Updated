const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

//MongoDB Connection
const dbURI = 'mongodb+srv://rudradeysarkar2002:Rudra9595@college-erp-system.2y8uzyb.mongodb.net/College-ERP-System?retryWrites=true&w=majority';
mongoose.connect(dbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(function () {
        console.log("DB Connected")
    }).catch(function (err) {
        console.log(err)
    })

const app = express();
app.use(express.json());
app.use(cors({
origin: [""],
method: ["POST", "GET", "PUT", "DELETE"],
credentials: true
}));
app.use(express.urlencoded({ extended: false }))

const mydb = new mongoose.Schema({
    user: String,
    name: String,
    email: String,
    password: String,
    streamordep: String,
    gender: String

})
const collection = mongoose.model('collection', mydb);

//File Upload For Notice
const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload-notice');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //cb(null, `${Date.now()}-${file.originalname}`);
        cb(null, `${file.originalname}`);
    },
});
const upload1 = multer({ storage: storage1 })

app.post("/upload-notice", upload1.single("pdfnoticeupload"), (req, res) => {
    res.json("File Uploaded")
})

//File Upload For Attendance
const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload-attendance');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //cb(null, `${Date.now()}-${file.originalname}`);
        cb(null, `${file.originalname}`);
    },
});
const upload2 = multer({ storage: storage2 })

app.post("/upload-attendance", upload2.single("pdfattendanceupload"), (req, res) => {
    res.json("File Uploaded")
})


//File Download For Notice
const pdfDirectory1 = path.join(__dirname, 'upload-notice');

app.get('/download-notice', (req, res) => {
    fs.readdir(pdfDirectory1, (err, files) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read directory' });
            return;
        }
        const pdfFiles = files.filter(file => file.endsWith('.pdf'));
        res.json(pdfFiles);
    });
});

app.get('/download-notice/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(pdfDirectory1, filename);

    res.download(filePath, err => {
        if (err) {
            res.status(500).json({ error: 'Failed to download file' });
        }
    });
});

//File Download For Attendance
const pdfDirectory2 = path.join(__dirname, 'upload-attendance');

app.get('/download-attendance', (req, res) => {
    fs.readdir(pdfDirectory2, (err, files) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read directory' });
            return;
        }
        const pdfFiles = files.filter(file => file.endsWith('.pdf'));
        res.json(pdfFiles);
    });
});
app.get('/download-attendance/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(pdfDirectory2, filename);

    res.download(filePath, err => {
        if (err) {
            res.status(500).json({ error: 'Failed to download file' });
        }
    });
});



//login
app.post("/login", async (req, res) => {
    const { user, email, password } = req.body

    try {
        const check = await collection.find({ user: user, email: email, password: password })
        if (check.length > 0) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})

//get user login data  for user page
app.post("/getdata", async (req, res) => {
    const { email, password } = req.body

    try {

        const check = await collection.find({ email: email, password: password })

        if (check.length > 0) {
            collection.find({ "email": email }).then(data => res.json(data)).catch(err => res.json({ error: err.message }))
        }
        else {
            res.json("notexist")
        }
    }
    catch (e) {
        res.json("fail")
    }


})


//get method
app.get("/getsfdata", (req, res) => {
    try {
        collection.find().then(data => res.json(data)).catch(err => res.json({ error: err.message }))
    }
    catch (e) {
        res.json("fail")
    }


})

//signup
app.post("/signup", async (req, res) => {
    const { name, email, password, user, streamordep, gender } = req.body

    const data = {
        user: user,
        name: name,
        email: email,
        password: password,
        streamordep: streamordep,
        gender: gender
    }

    try {
        const check = await collection.findOne({ email: email })
        if (check === null || check.length <= 0) {
            res.json("notexist")
            await collection.insertMany([data])
        }
        else {
            res.json("exist")
        }
    }
    catch (e) {
        res.json("fail")
    }

})

// Define the UPDATE Route
app.put('/update', async (req, res) => {
    const { email, name } = req.body.data;

    if (!email) {
        return res.json('Email is required');
    }
    else {
        try {
            const result = await collection.findOneAndUpdate(
                { email: email },
                { name: name },
                { new: true } // Update with name and any other fields provided
            );
            if (result) {
                res.json("User name updated.");
            } else {
                res.json("User name not updated.");
            }
        } catch (error) {
            res.json("Internal server error " + error);
        }
    }
});

//delete the document
app.delete("/delete", async (req, res) => {
    const email = req.body.email;
    if (!email) {
        res.json("email not exist")
    }
    else {
        try {
            const result = await collection.findOneAndDelete({ email });
            if (result) {
                res.json("Data Deleted")
            }
            else {
                res.json("Data Not Deleted Due To An Error")
            }
        }
        catch (e) {
            res.json(e + " Server Error")
        }
    }
})

app.listen(5001, function () {
    console.log("Port is active")
})
