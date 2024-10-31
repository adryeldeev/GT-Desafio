import React, { useState } from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  }
  return (
    <div className="layout">
      <Header  onSearchChange={handleSearchChange}  />
      <main className="content"> {React.cloneElement(children, { searchTerm })}</main>
      <Footer />
    </div>
  );
};

export default Layout;
