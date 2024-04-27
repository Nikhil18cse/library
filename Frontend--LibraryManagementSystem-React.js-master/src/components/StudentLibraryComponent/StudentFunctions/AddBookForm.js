import React, { useState } from 'react';

function AddBookForm() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    isbn: '',
    genre: '',
    publicationDate: '',
    description: '',
    quantity: 1,
  });

  const handleChange = (event) => {
    setBookData({ ...bookData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement your form submission logic here
    // This example logs the book data to the console for illustration
    console.log(bookData);

    // You can replace the above with an API call to your backend to add the book
  };

  return (
    <div className="container mt-3">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookTitle">Book Title:</label>
          <input
            type="text"
            className="form-control"
            id="bookTitle"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookAuthor">Author(s):</label>
          <input
            type="text"
            className="form-control"
            id="bookAuthor"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookIsbn">ISBN (optional):</label>
          <input
            type="text"
            className="form-control"
            id="bookIsbn"
            name="isbn"
            value={bookData.isbn}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookGenre">Genre:</label>
          <input
            type="text"
            className="form-control"
            id="bookGenre"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookPublicationDate">Publication Date (optional):</label>
          <input
            type="date"
            className="form-control"
            id="bookPublicationDate"
            name="publicationDate"
            value={bookData.publicationDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookDescription">Description (optional):</label>
          <textarea
            className="form-control"
            id="bookDescription"
            name="description"
            value={bookData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookQuantity">Quantity:</label>
          <input
            type="number"
            className="form-control"
            id="bookQuantity"
            name="quantity"
            value={bookData.quantity}
            onChange={handleChange}
            min="1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;
