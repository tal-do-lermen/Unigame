import React from "react";
import { MapSize } from "../cfg";
import Debugger from "../Debugger/debugger";
import Player from "../player/player";

const posicaoInicial = { x: 0, y: 23 }

const Board = () => {
    const [playerPosicao, setPlayerPosicao] = React.useState(posicaoInicial);
    const [isLeft, setIsLeft] = React.useState(false);
    const [direcao, setDirecao] = React.useState(null);
    const refElement = React.useRef()


    const mouseClick = async (x, y) => {

        let map = refElement.current.getBoundingClientRect();
        let clickX = Math.trunc((x - map.left) / 32)
        let clickY = Math.trunc((y - map.top) / 32)
        console.log("x", clickX)
        console.log("Y", clickY)
        let posicaoAtualX = Math.trunc((playerPosicao.x));
        let posicaoAtualY = Math.trunc((playerPosicao.y));

        let animacao = setInterval((e) => {
            console.log('posicaoAtualY', posicaoAtualY)
            console.log('clickY', clickY)
            console.log('posicaoAtualX', posicaoAtualX)
            console.log('clickX', clickX)

            if (posicaoAtualX === clickX) {



                if (clickY < posicaoAtualY) {
                    posicaoAtualY--
                    setDirecao('C')
                }
                else {
                    posicaoAtualY++
                    setDirecao('B')
                }
                setPlayerPosicao({ x: posicaoAtualX, y: posicaoAtualY })
            } else {

                setDirecao('ED')
                if (clickX < posicaoAtualX) {
                    posicaoAtualX--
                    setIsLeft(true)
                }
                else {
                    posicaoAtualX++
                    setIsLeft(false)
                }
                setPlayerPosicao({ x: posicaoAtualX, y: posicaoAtualY })
            }
            if (posicaoAtualY === clickY && posicaoAtualX === clickX) {
                clearInterval(animacao)
                setDirecao('S')
            }
        },
            200
            , [setIsLeft, setDirecao, setPlayerPosicao, posicaoAtualY, posicaoAtualX, clickX, clickY])


    }

    return (
        <div>

            <div ref={refElement} style={{
                width: MapSize,
                height: MapSize,
                position: 'relative',
                backgroundImage: "url(./assets/mapa.jpg)",
                margin: 0
            }}
                onClick={e => { mouseClick(e.clientX, e.clientY) }}>
                <Debugger />

                <Player position={playerPosicao} Direcao={direcao} isLeft={isLeft} />
            </div>
        </div>
    );
}

export default Board;