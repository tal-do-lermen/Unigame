import React from "react";
import { MapSize } from "../cfg";
import Debugger from "../Debugger/debugger";
import Player from "../player/player";

const posicaoInicial = { x: 0, y: 9 }

const Board = () => {
    const [playerPosicao,setPlayerPosicao] = React.useState(posicaoInicial);
    const refElement = React.useRef()
    
    const mouseClick = (x, y) => {

        let map = refElement.current.getBoundingClientRect();
        let clickX = Math.trunc((x - map.left)/32) 
        let clickY = Math.trunc((y - map.top)/32)
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


        }, 100)
       
    }
    
    return (
        <div>
            
            <div ref={refElement} style={{
                width: MapSize,
                height: MapSize,
                position:'relative',
                backgroundImage: "url(./assets/mapa.jpg)",
                margin: 0
            }}
            onClick={e => {mouseClick(e.clientX,e.clientY)}}>
                    <Debugger/>

            <Player position={ playerPosicao } />
            </div>
        </div>
    );
}

export default Board;