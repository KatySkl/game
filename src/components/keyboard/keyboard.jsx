import React from "react";
import style from "./keyboard.module.css"

export const Keyboard = () => {

    return (
        
        <div className={style.keyboard}>
                <div className={style.container}>
                <button className={style.letter}>й</button>
                <button className={style.letter}>ц</button>
                <button className={style.letter}>у</button>
                <button className={style.letter}>к</button>
                <button className={style.letter}>е</button>
                <button className={style.letter}>н</button>
                <button className={style.letter}>г</button>
                <button className={style.letter}>ш</button>
                <button className={style.letter}>щ</button>
                <button className={style.letter}>з</button>
                <button className={style.letter}>х</button>
                <button className={style.letter}>ъ</button>
            </div>
            <div className={style.container}>
                <button className={style.letter}>ф</button>
                <button className={style.letter}>ы</button>
                <button className={style.letter}>в</button>
                <button className={style.letter}>а</button>
                <button className={style.letter}>п</button>
                <button className={style.letter}>р</button>
                <button className={style.letter}>о</button>
                <button className={style.letter}>л</button>
                <button className={style.letter}>д</button>
                <button className={style.letter}>ж</button>
                <button className={style.letter}>э</button>
            </div>
            <div className={style.container}>
                <button className={style.backSpace}><i class="material-icons">backspace</i></button>
                <button className={style.letter}>я</button>
                <button className={style.letter}>ч</button>
                <button className={style.letter}>с</button>
                <button className={style.letter}>м</button>
                <button className={style.letter}>и</button>
                <button className={style.letter}>т</button>
                <button className={style.letter}>ь</button>
                <button className={style.letter}>б</button>
                <button className={style.letter}>ю</button>
                <button className={style.backSpace}>ввод</button>
            </div>
        </div>
    )
}