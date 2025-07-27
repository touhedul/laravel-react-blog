import React, { useEffect, useState } from 'react'
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


const EditBlog = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [html, setHtml] = useState('');
    const [image, setImage] = useState(null);
    const [showImage, setShowImage] = useState(null);

    function onChange(e) {
        setHtml(e.target.value);
    }

    function handleFileChange(e) {
        setImage(e.target.files[0]);
    }

    const editBlog = (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('author', data.author);
        formData.append('description', html);
        formData.append('_method', 'PUT');
        if (image) {
            formData.append('image', image);
        }

        fetch('http://laravel-react-blog.test/laravel-backend/public/api/blogs/' + params.id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData,
        })
        .then(response => response.json())
        .then(result => {
            toast("Blog Updated Successfully");
            // navigate('/');
        })
        .catch(error => {
            toast.error("Error updating blog");
            console.error("Error:", error);
        });
    }

    const params = useParams();
    const fetchBlog = async () => {
        const response  = await fetch(`http://laravel-react-blog.test/laravel-backend/public/api/blogs/${params.id}`)
        const result = await response.json();
        reset(result.data);
        setHtml(result.data.description);
        setShowImage(result.data.image);
    
    }

    useEffect(()=>{
        fetchBlog()
    },[])

    return (
        <div className="container mt-5">
            {/* <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Edit Blog</h3>
                <button className="btn btn-dark">Back</button>
            </div> */}

            <form onSubmit={handleSubmit(editBlog)}>
                {/* Title */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        className={`form-control ${errors.title && 'is-invalid'}`}

                        id="title" placeholder="Title" />
                    {errors.title && <span className="text-danger">Title is required</span>}
                </div>

                {/* Description */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <Editor
                        containerProps={{ style: { height: '300px' } }}
                        value={html} onChange={onChange} />

                </div>

                {/* Image */}
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <br />
                    <img src={showImage} className='w-25' />
                    <input onChange={handleFileChange} className="form-control" type="file" id="image" />
                </div>

                {/* Author */}
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        {...register('author', { required: true })}
                        type="text"
                        className={`form-control ${errors.author && 'is-invalid'}`}
                        id="author" placeholder="Author" />
                    {errors.author && <span>This field is required</span>}

                </div>

                {/* Create Button */}
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};


export default EditBlog