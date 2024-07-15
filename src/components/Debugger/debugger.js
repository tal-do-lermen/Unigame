import React from "react";
import Tile from "../tile/tile";
import { canvas } from "../helper/helper";

function getCanvasMap() {
    const tileComponents = [];
    for (let y = 0; y < canvas.length; y++) {
        const canvasY = canvas[y];
        for (let x = 0; x < canvasY.length; x++) {
            const canvasX = canvasY[x];

            const position = { x: x, y: y };
            const tile = canvas[y][x]


            tileComponents.push(<Tile position={position} />)
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