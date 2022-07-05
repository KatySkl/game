import React from "react";
import style from './playing-field.module.css'

const Cell = ({ character }) => {
    return (
        <div className={style.square}>
            <span>{character.toUpperCase()}</span>
        </div>
    )
}


/**
 * Игровое поле
 * 
 * @param {*} param0 
 * @returns 
 */
export const Field = ({ field = [] }) => {
    return (
        <div className={style['playing-field']}>
            {field.map((arrayOfChars, row) =>
                arrayOfChars.map((character, col) =>
                    <Cell key={`row${row}-col${col}${character}`} character={character} />
                )
            )}
            <hr className={style.indent} />
        </div>
    )
}