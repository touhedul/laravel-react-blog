import React from 'react'

const BlogCard = () => {
    return (
        <div className="col-12 col-md-2 col-lg-3 mb-4">
            <div className="card border-0 shadow-lg">
                <img
                    src="https://placehold.co/600x400"
                    className="card-img-top"
                    alt="Card placeholder"
                />
                <div className="card-body">
                    <h2 className="h5">Dummy Heading</h2>
                    <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-dark">
                            Details
                        </a>
                        <a href="#" className="text-dark">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.146 5.5a.5.5 0 0 1 .708.708l-10 10a.5.5 0 0 1-.708-.708l10-10z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogCard