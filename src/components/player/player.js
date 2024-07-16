import React from "react";
import { PlayerSize } from "../cfg";
import './player.css';
const Player = (props) => {

    const movimentoImagem = () => {
        switch (props.Direcao) {
            case 'C':
                return "url(./assets/playerTop.png)"
            case 'B':
                return "url(./assets/playerBottom.png)"
            case 'ED':
                return "url(./assets/player.png)"
            case 'S':
                return "url(./assets/playerStop.png)"
            default:
                return "url(./assets/playerStop.png)"
        }


    }
    return (

        <div style={{
            backgroundImage: movimentoImagem(),
            width: PlayerSize,
            height: PlayerSize,
            backgroundRepeat: 'no-repeat',
            animation: 'player-animation 1s infinite steps(6)',
            position: 'absolute',
            zIndex: 1,
            top: props.position.y * 32,
            left: props.position.x * 32,
            transform: props.isLeft ? 'scaleX(-1)' : 'scaleX(1)'


        }}></div>
    );
}

export default Player;