import './App.css';
import Navbar1 from './components/Navbar';
import SignupLearner from './pages/SignupLearner';
import SignupSchool from './pages/SignupSchool';
import SignupTeacher from './pages/SignupTeacher';
import Login from './pages/Login';
import {
  Routes,
  Route
} from 'react-router-dom'
import PostJob from './pages/PostJob';
import SearchJobs from './pages/SearchJobs';
import ApplyJob from './pages/ApplyJob';
import PostClassForm from './pages/PostClassForm';
import AvailableClasses from './pages/AvailableClasses';
import ApplyForClass from './pages/ApplyForClass';
import { useState } from 'react';
import Home from './pages/Home';
import ShowPost from './pages/ShowPost';
import PlayGames from './pages/PlayGames';
import Quiz from './pages/Quiz';
import Quiz1 from './pages/Quiz1';
import PostSomething from './pages/PostSomething';
function App() {
  const [classId, setclassId] = useState('')
  return (
    <div className="App">
      <Navbar1/>
      <div className='container'>
      <Routes>
      <Route path='/' element = {  <Home/>}/>      

        <Route path='signuplearner' element = {  <SignupLearner/>}/>
        <Route path='availableclasses' element = {  <AvailableClasses/>}/>      
        <Route path="/applyclass/:id" element={<ApplyForClass classId={classId}/>} />
        <Route path ="post/:id" element = {<ShowPost/>}/>
        <Route path ="postsomething" element = {<PostSomething/>}/>

        <Route path ="playgames" element = {<PlayGames/>}/>
        <Route path ="/quiz" element = {<Quiz/>}/>
        <Route path ="/quiz1" element = {<Quiz1/>}/>

        <Route path='login' element = {  <Login/>}/>

        <Route path='signupteacher' element = {  <SignupTeacher/>}/>
        <Route path='searchjob' element = {  <SearchJobs/>}/>
        <Route path='/apply/:id' element={<ApplyJob />} />
        <Route path='/startclass' element={<PostClassForm />} />


        <Route path='signupschool' element = {  <SignupSchool/>}/>
        <Route path='postjob' element = {  <PostJob/>}/>

      </Routes>
      </div>
    </div>
  );
}

export default App;
