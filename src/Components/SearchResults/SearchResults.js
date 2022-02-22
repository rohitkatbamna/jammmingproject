import React from "react";
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

function SearchBar(props){
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks ={props.searchResults} isRemoval={false} onAdd={props.onAdd}/> 
        </div>
    );
}
export default SearchBar