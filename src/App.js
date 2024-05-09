import "./App.css";
import { useState } from "react";
import bookData from "./assets/book-data.json";
import BookItem from "./components/BookItem";
import Cart from "./components/Cart";
import ClearButton from "./components/ClearButton";
import SortButton from "./components/SortButton";
import FilterButton from "./components/FilterButton";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bookData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */






function App() {
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0.0);
  const [sortedBooks, setSortedBooks] = useState(bookData);
  const [filteredBooks, setFilteredBooks] = useState(bookData);

  const clearChanges = () => {
    setSortedBooks(bookData);
    setFilteredBooks(bookData);
  };

  const clearCart = () => {
    setCart([]);
    setCartPrice(0.0);
  };

  const sortByPriceLow = () => {
    const sorted = [...filteredBooks].sort((a, b) => a.price - b.price);
    setFilteredBooks(sorted);
  };

  const sortByPriceHigh = () => {
    const sorted = [...filteredBooks].sort((a, b) => b.price - a.price);
    setFilteredBooks(sorted);
  };

  const sortByName = () => {
    const sorted = [...filteredBooks].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredBooks(sorted);
  };

  const filterByGenre = (genre) => {
    const filtered = genre ? bookData.filter((book) => book.genre === genre) : bookData;
    setFilteredBooks(filtered);
  };
  
  const filterByPages = (minPages, maxPages) => {
    const filtered = (minPages && maxPages) ? bookData.filter((book) => book.pages >= minPages && book.pages <= maxPages) : bookData;
    setFilteredBooks(filtered);
  };

  return (
    <div className="App">
      <h1 id="title">Books for Sale </h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="changeBar">
        <SortButton onClick={sortByPriceLow} text="Sort Price Low to High" />
        <SortButton onClick={sortByPriceHigh} text="Sort Price High to Low" />
        <SortButton onClick={sortByName} text="Sort by Name a-z" />
        
        <FilterButton onClick={() => filterByGenre("Children's Books")} text="Children's Books" />
        <FilterButton onClick={() => filterByGenre("Horror")} text="Horror" />
        <FilterButton onClick={() => filterByGenre("Textbook")} text="Textbooks" />
        <FilterButton onClick={() => filterByGenre("Science Fiction")} text="Science Fiction" />
        <FilterButton onClick={() => filterByGenre("Fantasy")} text="Fantasy" />
        <FilterButton onClick={() => filterByPages(1, 50)} text="Pages <= 50" />
        <FilterButton onClick={() => filterByPages(51, 100)} text="Pages 51-100" />
        <FilterButton onClick={() => filterByPages(100, 200)} text="Pages 100-300" />
        <FilterButton onClick={() => filterByPages(200, 10000)} text="Pages 300+" />
      </div>

      <div class="clearSection">
      <ClearButton onClick={clearChanges} text="Clear All Changes" />
      </div>
      <div class="bookSection">
      {filteredBooks.map((item, index) => (
        <BookItem
          key={index}
          name={item.name}
          genre={item.genre}
          pages={item.pages}
          price={item.price}
          image={item.image}
          updateCart={setCart}
          cart={cart}
          updatePrice={setCartPrice}
          currPrice={cartPrice}
        />
      ))}

      </div>

<div id="line"></div>

      <div class="cartSection">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <Cart cartItems={cart} cartPrice={cartPrice} curPrice={cartPrice}/>
        <ClearButton onClick={clearCart} text="Clear Cart"/>
      </div>
    </div>
  );
}

export default App;
