import React, { useState } from 'react'
import  Editor  from 'react-simple-wysiwyg';

const CreateBlog = () => {

    const [html, setHtml] = useState('');
  
    function onChange(e) {
        setHtml(e.target.value);
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Create Blog</h3>
                <button className="btn btn-dark">Back</button>
            </div>

            <form>
                {/* Title */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title" />
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
                    <input className="form-control" type="file" id="image" />
                </div>

                {/* Author */}
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" placeholder="Author" />
                </div>

                {/* Create Button */}
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};


export default CreateBlog