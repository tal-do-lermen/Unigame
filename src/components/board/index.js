import React from "react";
import Player from "../player/player";
import { MapSize } from "../cfg";
import Debugger from "../Debugger/debugger";
import useEventListener from '@use-it/event-listener'

const posicaoInicial = { x: 0, y: 9 }

const Board = () => {
    const [playerPosicao,setPlayerPosicao] = React.useState(posicaoInicial);
    const mouseClick = (x, y) => {
        let clickX = Math.abs(Math.trunc(x  /32)-10);
        let clickY = Math.abs(Math.trunc(y /32));
        console.log("x", clickX)
        console.log("Y", clickY)
        let posicaoAtualX = playerPosicao.x;
        let posicaoAtualY = playerPosicao.y;
        setInterval(() => {

            if (posicaoAtualX === clickX) {
                if(posicaoAtualY === clickY)
                    return;

                if (clickY < posicaoAtualY)
                    posicaoAtualY --
                else
                    posicaoAtualY ++
                setPlayerPosicao({ x: posicaoAtualX, y: posicaoAtualY })
            } else {
                
                if (clickX < posicaoAtualX)
                    posicaoAtualX --
                else
                    posicaoAtualX ++ 
                setPlayerPosicao({ x: posicaoAtualX, y: posicaoAtualY })
            }


        }, 150)
       
    }
    
    return (
        <div>
            {/* <Debugger/> */}
            <Player position={ playerPosicao } />
            <div style={{
                backgroundImage: "url(./assets/mapa.jpg)",
                width: MapSize,
                height: MapSize,
            }}
                onClick={e => {mouseClick(e.clientX,e.clientY)}}>

            </div>
        </div>
    );
}

export default Board;