import React from "react";
import { MapSize, TileSize } from "../cfg";
import Player from "../player/player";

const posicaoInicial = { x: 0, y: 46 }

const Board = () => {
    const [playerPosicao, setPlayerPosicao] = React.useState(posicaoInicial);
    const [isLeft, setIsLeft] = React.useState(false);
    const [animacaoAndamento, setAnimacaoAndamento] = React.useState(0);
    const [direcao, setDirecao] = React.useState(null);
    const refElement = React.useRef()
    const [map, setMap] = React.useState();

    const mouseClick = async (x, y) => {
        // setCountAnimacao(countAnimacao + 1);
        let map = refElement.current.getBoundingClientRect();
        let clickX = Math.trunc((x - map.left) / TileSize)
        let clickY = Math.trunc((y - map.top) / TileSize)
        let posicaoAtualX = Math.trunc((playerPosicao.x));
        let posicaoAtualY = Math.trunc((playerPosicao.y));
        let animacao = undefined
        let posicaoFinalX;
        let posicaoFinalY;
        
            clearInterval(animacaoAndamento)
        
            animacao = setInterval((e) => {

                console.log(animacao)
            if (posicaoAtualX === clickX) {


                if (clickY < posicaoAtualY) {
                    posicaoAtualY-= 0.5
                    setDirecao('C')
                }
                else {
                    posicaoAtualY+= 0.5
                    setDirecao('B')
                }
                setPlayerPosicao({ x: posicaoAtualX, y: posicaoAtualY })
            } else {

                setDirecao('ED')
                if (clickX < posicaoAtualX) {
                    posicaoAtualX-= 0.5
                    setIsLeft(true)
                }
                else {
                    posicaoAtualX+= 0.5
                    setIsLeft(false)
                }
                setPlayerPosicao({ x: posicaoAtualX, y: posicaoAtualY })
            }
            if (posicaoAtualY === clickY && posicaoAtualX === clickX) {
                clearInterval(animacao)
                setDirecao('S')
                posicaoFinalX = posicaoAtualX
                posicaoFinalY =posicaoAtualY
                
            }
            //ToDo fazer dinamicamente com retorno banco. Array?
            if ((posicaoFinalX > 12 && posicaoFinalX < 17) && (posicaoFinalY > 35 && posicaoFinalY < 45)) {
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
            90
            , [setIsLeft, setDirecao, setPlayerPosicao, posicaoAtualY, posicaoAtualX, clickX, clickY])
      
      setAnimacaoAndamento(animacao)
      

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
                {/* <Debugger></Debugger> */}
                <Player position={playerPosicao} Direcao={direcao} isLeft={isLeft} />
            </div>
        </div>
    );
}

export default Board;