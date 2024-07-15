import React from "react";
import { PlayerSize } from "../cfg";
import './player.css';
const Player = (props) => {
    
    return (
        <div style={{
            backgroundImage: "url(./assets/player.png)",
            width: PlayerSize,
            height: PlayerSize,
            backgroundRepeat: 'no-repeat',
            animation: 'player-animation 1s infinite steps(6)',
            position: 'absolute',
            zIndex:1,
            top: props.position.y * 32,
            left: props.position.x *32,
            

        }}></div>
    );
}

export default Player;