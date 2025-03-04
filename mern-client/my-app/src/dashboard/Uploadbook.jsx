import React from "react";

export const Uploadbook = () => {
  return (
    <div className="my-12 px-4">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form className='p-4'>
  
        <div className="form-group mb-3">
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            className='form-control'
            id='authorName'
            placeholder='Author Name'
            required
          />
        </div>
        

        <div className="form-group mb-3">
          <label htmlFor="bookTitle">Book Title</label>
          <input
            type="text"
            className='form-control'
            id='bookTitle'
            placeholder='Book Name'
            required
          />
        </div>
        

        <div className="form-group mb-3">
          <label htmlFor="imageUrl">Book Image URL</label>
          <input
            type="text"
            className='form-control'
            id='imageUrl'
            placeholder='Book Image'
            required
          />
          </div>
          

<div className="form-group mb-3">
          <label htmlFor="bookDescription">Book Description</label>
          <input
            type="text"
            className='form-control'
            id='bookDescription'
            placeholder='Book Description'
            required
          />
        </div>
        

        <div className="form-group mb-3">
          <label htmlFor="pdfUrl">Book PDF URL</label>
          <input
            type="text"
            className='form-control'
            id='pdfUrl'
            placeholder='Book PDF URL'
            required
          />
          </div>
          
          <button type='submit' className='btn btn-danger'>Upload Book</button>
      </form>
    </div>
  );
};
