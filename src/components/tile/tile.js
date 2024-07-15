import React from "react";

const Tile = (props) => {

    return (
        <div style={{
            position: 'absolute',
            left: 32 * props.position.x,
            bottom: 32 * props.position.y,
            height: 32,
            width: 32,
            border: '2px solid red'
        }}>
        </div>
    );
}

export default Tile