import { useEffect, useState } from 'react';
import BlogCard from './BlogCard'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');

    const fetchBlogs = async () => {
        const response = await fetch('http://laravel-react-blog.test/laravel-backend/public/api/blogs?search=' + search,);
        const result = await response.json();
        console.log(result);
        setBlogs(result.data)
    }


    useEffect(() => {
        fetchBlogs();
    }, [])

    return (

        <div className='container my-5'>

            <div className='row'>
                <div className='col-md-3'>
                    <a href={`/create-blog`} className='btn btn-primary'>Create</a>
                </div>

                <div className='col-md-9 d-flex'>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='form-control' placeholder='Search Blogs' />
                    <button onClick={() => fetchBlogs()} className='btn btn-dark ms-2'>Search</button>
                </div>
            </div>
            <br />
            <div className="row">
                {
                    (blogs) && blogs.map((blog) => {

                        return (<BlogCard blogs={blogs} setBlogs={setBlogs} blog={blog} />)
                    })
                }
            </div>
        </div>
    )
}

export default Blogs