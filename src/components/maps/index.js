import React from "react";
import { MapSize } from "../cfg";
import Player from "../player/player";

const QuizMaps = () => {



    return (
        <div style={{
            backgroundImage: "url(./assets/lgpd.png)",
            width: MapSize,
            height: MapSize / 2,
            backgroundPositionY: 512
        }}
            className="map"
        >
            <Player position={{ x: 3, y: 26 }} Direcao={'S'} isLeft={true} />
            <Player position={{ x: 3, y: 30 }} Direcao={'S'} isLeft={true} />
        </div>

    )
}

export default QuizMaps