import React from "react";
import './SearchBar.css';
import { useState } from "react";

function SearchBar(props){
    const [searchTerm, setSearchterm] = useState("")
    function search(){
        props.onSearch(searchTerm);
        console.log(searchTerm);
    }
    function handleTermChange(event){
        setSearchterm(event.target.value);
    }
    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    );
}
export default SearchBar;