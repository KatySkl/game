import React from "react";
import styles from './title.module.css';

export const Title = () => {
 
    return (
        <div>
            <hr className={styles.indent}/>
          <i className="material-icons">help_outline</i>   
        <h4>
            <b>Уровень 1 из 999</b>
        </h4>
        <hr />
        </div>
    )
}