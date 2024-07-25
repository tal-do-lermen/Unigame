import React from "react";
import { MapSize, TileSize } from "../cfg";
import Tile from "../tile";

function getCanvasMap() {
    const tileComponents = [];
    let canvasY = [];
    let canvasX = [];

    for (let i = 0; i < MapSize / TileSize; i++) {
        canvasX.push(0)
        canvasY.push(0)
    }
    let position = { x: 0, y: 0 }
    for (let y = 0; y < canvasY.length; y++) {
        for (let x = 0; x < canvasX.length; x++) {
            position = { x: x, y: y }
            tileComponents.push(<Tile position={position}>X{x}Y{y} </Tile>)
        }

    }



    return tileComponents;
}


const Debugger = () => {
    const tiles = getCanvasMap();


    return (
        <div>
            {tiles}
        </div>
    );
}

export default Debugger;