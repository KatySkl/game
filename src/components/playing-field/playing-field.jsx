import React from "react";
import style from './playing-field.module.css'

export const Field = () => {

    return(
        <div>
            <div className={style.str}>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
            </div>
            <div className={style.str}>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
            </div>
            <div className={style.str}>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
            </div>
            <div className={style.str}>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
            </div>
            <div className={style.str}>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
            </div>
            <div className={style.str}>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
                <div className={style.square}></div>
            </div>
            <hr className={style.indent}/>
        </div>
        
    )
}