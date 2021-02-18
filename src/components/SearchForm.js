import React from "react";

// ===COMPONENT GOES HERE===
function SearchForm(props) {
    return (
        
            <form className="text-center" onSubmit={
                props.handleFormSubmit
            }>
                <input type="text" placeholder="Search by name" name="search"/>
                <button type="submit">Search</button>
            </form>
    );
}

export default SearchForm;
