import React, { useState } from 'react';
import Navbar from "../src/components/Navbar";
import Searchbar from "../src/components/Searchbar"
import { getBooksByTerm } from "../src/api/GoogleBook"
import BookList from "./components/BookList"
import Pagination from "./components/Pagination"

const App = () => {
  const [searchTerm, setSearchTerm] = useState({})
  const [books, setBooks] = useState([])
  const [currentPage, setCurrrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0);


  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)

  }

  const nextPage = async (pageNumber) => {
    setCurrrentPage(pageNumber);
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages)

  }
  return (
    <div>
      <Navbar />
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
      {totalPages > 1 ? <Pagination
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      /> : ""}
    </div>
  );
}

export default App;