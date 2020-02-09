import React from "react";
import BookListContainer from "../book-list/book-list";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
  return (
      <div>
        <BookListContainer/>
        <ShoppingCartTable></ShoppingCartTable>
      </div>
  )
};

export default HomePage;