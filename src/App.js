import React from "react";
import Table from "./components/Table"
import Jumbotron from "./components/Jumbotron"
import SearchForm from "./components/SearchForm";
import TableDescriptions from "./components/TableDescriptions"
function App() {
    return (
    <>   
    <Jumbotron />
    <SearchForm />
    <div className="container">
    <TableDescriptions />
    <Table />
    </div>
    </>
    );
}

export default App;