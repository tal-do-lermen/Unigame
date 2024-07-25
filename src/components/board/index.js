import React from "react";
import { MapSize, TileSize } from "../cfg";
import Debugger from "../Debugger";
import Player from "../player/player";

const posicaoInicial = { x: 0, y: 23 }

const Board = () => {
    const [playerPosicao, setPlayerPosicao] = React.useState(posicaoInicial);
    const [isLeft, setIsLeft] = React.useState(false);
    const [direcao, setDirecao] = React.useState(null);
    const refElement = React.useRef()
    const [map, setMap] = React.useState();

    const mouseClick = async (x, y) => {

        let map = refElement.current.getBoundingClientRect();
        let clickX = Math.trunc((x - map.left) / TileSize)
        let clickY = Math.trunc((y - map.top) / TileSize)
        console.log("x", clickX)
        console.log("Y", clickY)
        let posicaoAtualX = Math.trunc((playerPosicao.x));
        let posicaoAtualY = Math.trunc((playerPosicao.y));

        let animacao = setInterval((e) => {

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
            console.log(posicaoAtualX, posicaoAtualY)
            //ToDo fazer dinamicamente com retorno banco. Array?
            if ((posicaoAtualX > 12 && posicaoAtualX < 17) && (posicaoAtualY > 38 && posicaoAtualX < 44)) {
                return setMap(<div style={{
                    backgroundImage: "url(./assets/lgpd.png)",
                    width: MapSize,
                    height: MapSize / 2,
                    backgroundPositionY: 512
                }}
                    className="map"
                ></div>)
            } else setMap()

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
                {map}
                <Debugger />
                <Player position={playerPosicao} Direcao={direcao} isLeft={isLeft} />
            </div>
        </div>
    );
}

export default Board;