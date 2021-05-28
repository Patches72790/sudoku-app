import React, { useState, useEffect, MouseEventHandler } from "react";
import { Square } from "./Square";
import Identifier from "./Identifier";


export const Board = (gameBoard: { gameBoard: Number[][], onClick: MouseEventHandler }) => {
    let board = gameBoard.gameBoard;
    let clickFunc = gameBoard.onClick;

    

    return (
        <table className="board_table">
            <tbody>
                {board.map((row) => {
                    return (
                        <tr key={row.toString() }>
                            {row.map((col) => {
                                return <Square key={col.toString()} myNum={col} onClick={clickFunc} />; })} 
                        </tr>);})
                }
            </tbody>
        </table>
    );
}