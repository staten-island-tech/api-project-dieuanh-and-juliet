import { async } from "q";
import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          "https://api.nytimes.com/svc/books/v3/reviews.json?title=${searchParams}&api-key=IjOw569tP2k0fNoFgXAAiEG4R2g1C3fm"
        );
        const data = await response.json();
        console.log(data);
        data.results.forEach((book) => {
          console.log(book);
        });
        data.results.forEach((book) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="book-info">
            <h3 class="name">${book.title}</h3>
            <h4 class="author">Written By: ${book.author}</h4>
            <h4 class="description">Description: ${book.description}</h4>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("Hey, something went wrong.");
      }
    };
    searchQuery();
  });
};

listen();
