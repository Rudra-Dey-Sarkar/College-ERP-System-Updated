import './App.css';
import { BrowserRouter, Route, Routes, }  from 'react-router-dom';

import Home from './Components/Home/Home';
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import Department from './Components/Department/Department';
import AdminLogin from './Components/Login/AdminLogin';
import StudentLogin from './Components/Login/StudentLogin';
import FacultyLogin from './Components/Login/FacultyLogin';
import StudentSignUp from './Components/SignUp/StudentSignUp';
import FacultySignUp from './Components/SignUp/FacultySignUp';
import User from './Components/User/User';
import Training from './Components/Training/Training';
import FileUpload from './Components/FileUpload/FileUpload';

function App() {
  return (
    <div>
     
     <Header/>
     <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/courses" element={<Courses/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      <Route path='/studentlogin' element={<StudentLogin/>}></Route>
      <Route path='/facultylogin' element={<FacultyLogin/>}></Route>
      <Route path='/studentsignup' element={<StudentSignUp/>}></Route>
      <Route path='/facultysignup' element={<FacultySignUp/>}></Route>
      <Route path='/department' element={<Department/>}></Route>
      <Route path='/training' element={<Training/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/fileupload' element={<FileUpload/>}></Route>

     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
