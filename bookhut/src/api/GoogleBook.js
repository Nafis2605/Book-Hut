import axios from "axios"

const GoogleBook = axios.create(
    {
        baseURL: "https://www.googleapis.com/books/v1"
    }
);

const getBooksByTerm = (SearchTerm, setBooks) => {
    GoogleBook.get("/volumes", {
        params: {
            q: SearchTerm,
            key: "AIzaSyA7zFgg8TFZ8RfmeOSl-ap7IGJiuKuPwCE"
        }
    }
    ).then((response) => {
        console.log(response)
        setBooks(response.data.items)
    }
    )

}

export { getBooksByTerm }