import React from "react";
import './Track.css';
import { useCallback } from 'react';

function Track({ track, onAdd, onRemove, isRemoval }){
    const addTrack = () => {
        onAdd(track);
      };
    
      const removeTrack = () => {
        onRemove(track);
      };
    
      const renderAction = (isRemoval) =>
        isRemoval ? (
          <button onClick={removeTrack} className="Track-action">
            -
          </button>
        ) : (
          <button onClick={addTrack} className="Track-action">
            +
          </button>
        );

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button className="Track-action">{renderAction(isRemoval)}</button>
        </div>
    );
}
export default Track;