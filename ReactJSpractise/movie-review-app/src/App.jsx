import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
