import axios from "axios"

const GoogleBook = axios.create(
    {
        baseURL: "https://www.googleapis.com/books/v1"
    }
);

const getBooksByTerm = (SearchTerm, setBooks, pageNumber, setTotalPages) => {
    let max_results = 20
    GoogleBook.get("/volumes", {
        params: {
            q: SearchTerm,
            key: "AIzaSyA7zFgg8TFZ8RfmeOSl-ap7IGJiuKuPwCE",
            max_results: max_results,
            start_index: ((pageNumber - 1) * max_results) + 1
        }
    }
    ).then((response) => {
        console.log(response)
        setBooks(response.data.items)
        setTotalPages(Math.ceil(response.data.totalItems / max_results))
    }
    )

}
export { getBooksByTerm }