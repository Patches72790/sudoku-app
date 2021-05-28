import React, { useState, useEffect, MouseEventHandler } from "react";
import Identifer from "./Identifier";

export const Square = (prop: { myNum: Number, onClick: MouseEventHandler }) => {

    return (
        <td>
            <button onClick={prop.onClick}>
                { prop.myNum } 
            </button>
        </td>
    );
}