import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const [blog, setBlog] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const fetchBlog = async () => {
        const response = await fetch(`http://laravel-react-blog.test/laravel-backend/public/api/blogs/${params.id}`);
        const result = await response.json();
        setBlog(result.data);
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    const setImage = (image) => {
        return image ? image : "https://placehold.co/600x400";
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {/* Back Button */}
                    <button className="btn btn-outline-primary mb-4" onClick={() => navigate(-1)}>
                        ← Back
                    </button>

                    {/* Blog Card */}
                    <div className="card border-0 shadow-lg">
                        <img
                            src={setImage(blog.image)}
                            className="card-img-top rounded-top"
                            alt={blog.title}
                        />
                        <div className="card-body">
                            <h1 className="card-title mb-3">{blog.title}</h1>
                            <div
                                className="card-text"
                                dangerouslySetInnerHTML={{ __html: blog.description }}
                            ></div>
                        </div>
                        <div className="card-footer bg-white text-end">
                            <small className="text-muted">
                                {/* Optional footer content like author or date */}
                                {blog.created_at && `Published on ${new Date(blog.created_at).toLocaleDateString()}`}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
