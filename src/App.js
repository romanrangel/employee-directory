import React from "react";
import Table from "./components/Table"
import Jumbotron from "./components/Jumbotron"
import SearchForm from "./components/SearchForm";
function App() {
    return (
    <>   
    <Jumbotron />
    <SearchForm />
    <Table />
    </>
    );
}

export default App;