import './App.css';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Students from './Components/Students'
import Courses from './Components/Courses'
import Grades from './Components/Grades'
import StudentDetails from './Components/StudentDetails';
import Login from './Components/Login'
import PagenotFound from './Components/PagenotFound';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="students" element={<Students />} >
          <Route path=":id" element={<StudentDetails/>}/>
        </Route>
        <Route path="courses" element={<Courses />} />
        <Route path="grades" element={<Grades />} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </div>
  );
}

export default App;
