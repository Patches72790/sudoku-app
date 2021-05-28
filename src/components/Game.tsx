import React, { useState, MouseEvent } from "react";
import { Board } from "./Board";

export const Game = () => {
    const [ gameBoard, setGameBoard ] = useState(
        Array.from({length: 9},() => Array.from( {length: 9} ,() => 0))
    ); 



    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        let currentBoard = gameBoard;

        setGameBoard(
            [
            ]
        );
    }

    return (
        <Board gameBoard={gameBoard} onClick={handleClick} />
    );
}