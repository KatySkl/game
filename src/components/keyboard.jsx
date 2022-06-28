import React from "react";

export const Keyboard = () => {

    return (
        
        <div className="keyboard">
            <div>
                <button className="letter">й</button>
                <button className="letter">ц</button>
                <button className="letter">у</button>
                <button className="letter">к</button>
                <button className="letter">е</button>
                <button className="letter">н</button>
                <button className="letter">г</button>
                <button className="letter">ш</button>
                <button className="letter">щ</button>
                <button className="letter">з</button>
                <button className="letter">х</button>
                <button className="letter">ъ</button>
            </div>
            <div>
                <button className="letter">ф</button>
                <button className="letter">ы</button>
                <button className="letter">в</button>
                <button className="letter">а</button>
                <button className="letter">п</button>
                <button className="letter">р</button>
                <button className="letter">о</button>
                <button className="letter">л</button>
                <button className="letter">д</button>
                <button className="letter">ж</button>
                <button className="letter">э</button>
            </div>
            <div>
                <button className="backSpace"><i class="material-icons">backspace</i></button>
                <button className="letter">я</button>
                <button className="letter">ч</button>
                <button className="letter">с</button>
                <button className="letter">м</button>
                <button className="letter">и</button>
                <button className="letter">т</button>
                <button className="letter">ь</button>
                <button className="letter">б</button>
                <button className="letter">ю</button>
                <button className="letter">ввод</button>
            </div>
        </div>
    )
}