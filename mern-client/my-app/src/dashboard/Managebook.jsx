import React, { useEffect, useState } from "react";

export const Managebook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-book/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        setBooks(books.filter(book => book._id !== id))
      })
  }
  return (
    <div>
      <h2 className="mb-8 font-bold">Manage Your Books</h2>
      <table className="table tavle-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.bookTitle}</td>
              <td>{book.authorName}</td>
              <td>{book.category}</td>
              <td>1000</td>
              <td>
                <button className="btn btn-danger"
                onClick={()=>handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
