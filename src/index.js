import React from "react";
import ReactDom from "react-dom";

import './index.css'

function Booklist() {
  return (
    <section className ="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className ="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://images-eu.ssl-images-amazon.com/images/I/516yRDtSdUL._AC_UL200_SR200,200_.jpg" />
);

const Title = () => <h1>Complete Classnotes Arithmetic (Bilingual)</h1>;

const Author = () => <h1>Gagan Pratap Sir</h1>;

ReactDom.render(<Booklist />, document.getElementById("root"));
