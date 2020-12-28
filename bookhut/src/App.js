import React, { useState } from 'react';
import Navbar from "../src/components/Navbar";
import Searchbar from "../src/components/Searchbar"
import { getBooksByTerm } from "../src/api/GoogleBook"
import BookList from "./components/BookList"

const App = () => {
  const [searchTerm, setSearchTerm] = useState({})
  const [books, setBooks] = useState([])


  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks)

  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)

  }
  return (
    <div>
      <Navbar />
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
    </div>
  );
}

export default App;