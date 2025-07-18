import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogCard from './components/BlogCard';
import { Routes,Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import CreateBlog from './components/CreateBlog';



function App() {

  return (
    <>
      <div className='bg-dark text-center py-2 shadow-lg'>
        <h1 className='text-white'>
          React & Laravel Blog App
        </h1>
      </div>

    <Routes>
      <Route path='/' element={<Blogs />}/>
      <Route path='/create-blog' element={<CreateBlog />}/>
    </Routes>
      

    </>
  )
}

export default App
