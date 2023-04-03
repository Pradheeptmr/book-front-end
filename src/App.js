import React from "react";
//import Header from "./components/Header";
import { Route, Routes,Navigate } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
//import Login from "./components/Login";
function App() {
  const user = localStorage.getItem("token");
  return (
    <React.Fragment>
      <header>
       
      </header>
      <main>
        <Routes>
        {user && <Route path="/" exact element={<Main />} />}
		     	<Route path="/signup" exact element={<Signup />} />
			    <Route path="/login" exact element={<Login/>} />
			    <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/home" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;