import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import Book from "./book";

import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;

        return <Book {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
