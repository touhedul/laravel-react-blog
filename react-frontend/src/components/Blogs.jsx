import { useEffect, useState } from 'react';
import BlogCard from './BlogCard'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async()=>{
        const response = await fetch('http://laravel-react-blog.test/laravel-backend/public/api/blogs');
        const result = await response.json();
        console.log(result);
        setBlogs(result.data)
    }

    useEffect(()=>{
        fetchBlogs();
    },[])

    return (

        <div className='container my-5'>

            <div className="row">
                {
                (blogs) && blogs.map((blog)=>{

                    return (<BlogCard blog={blog} />)
                })
                }
            </div>
        </div>
    )
}

export default Blogs