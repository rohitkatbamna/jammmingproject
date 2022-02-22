import React from "react";
import './TrackList.css';
import Track from "../Track/Track";

function TrackList(props){
    return(
        <div className="TrackList">
            {
            props.tracks.map((tracks)=>
                    {
                        return <Track track={tracks} key={tracks.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval} /> 
                    }
                )
            }
        </div>
    );
}
export default TrackList;