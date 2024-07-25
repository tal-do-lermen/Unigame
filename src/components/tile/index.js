import React from "react";
import { TileSize } from "../cfg";

const Tile = (props) => {

    return (
        <div style={{
            position: 'absolute',
            left: TileSize * props.position.x,
            bottom: TileSize * props.position.y,
            height: TileSize,
            width: TileSize,
            border: '2px solid red'
        }}>
        </div>
    );
}

export default Tile