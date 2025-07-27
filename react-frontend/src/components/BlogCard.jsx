import React from 'react'
import { toast } from 'react-toastify';

const BlogCard = ({ blogs, setBlogs, blog }) => {

    const setImage = (image) => {
        return image ? image : "https://placehold.co/600x400";
    }

    const deleteBlog = async (id) => {

        if (confirm('Are You Sure?')) {
            const response = fetch('http://laravel-react-blog.test/laravel-backend/public/api/blogs/' + id, {
                method: 'DELETE'
            }
            )
            const newBlogs = blogs.filter((blog) => blog.id != id);
            setBlogs(newBlogs);
            toast('Delete successful');
        }
    }
    return (
        <div className="col-12 col-md-2 col-lg-3 mb-4">
            <div className="card border-0 shadow-lg">
                <img
                    src={setImage(blog.image)}
                    className="card-img-top"
                    alt="Card placeholder"
                />
                <div className="card-body">
                    <h2 className="h5">{blog.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: blog.description }}>
                    </p>
                    <div className="d-flex justify-content-between">
                        <a href={`/blog/${blog.id}`} className="btn btn-dark">
                            Details
                        </a>
                        <a href={`/blog-edit/${blog.id}`} className="text-dark"> Edit
                        </a>
                        <a href="#" onClick={() => { deleteBlog(blog.id) }} className="text-danger">
                            Delete
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogCard