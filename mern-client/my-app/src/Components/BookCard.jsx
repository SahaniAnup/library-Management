import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';


export default function BookCard({ headline }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);
  return (
    <>
   

    
      <div className="container mt-5">
        <h1 align="center">{headline}</h1>
        <div className="row">
        {books.map((book,index)=>(
          <div className="col-md-4">
            <div className="card" style={{ width: "100%" }}>
              <img src={book.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{book.bookTitle}</h5>
                <p className="card-text">
                  {book.bookDescription}
                </p>
                <Link to="/singlebook" className="btn btn-danger">See Details</Link>
                {/* <a href="#" className="btn btn-primary">
                  See Details
                </a> */}
              </div>
            </div>
          </div>
          ))}
          {/* <div className="col-md-4"> <div class="card" style={{width:'100%'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
      <div className="col-md-4"> <div class="card" style={{width:'100%'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */}
        </div>
      </div>
    </>
  );
}
