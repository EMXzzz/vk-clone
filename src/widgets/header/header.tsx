import { useState } from "react";

import {Search} from "@mui/icons-material";

import logoImg from './logo.png';

import styles from './header.module.css';


export const Header = () => {

    const [isSearchActive, setIsSearchActive] = useState(false)

    return (
        <div className={styles.header}>
            <div className={styles.imgWrapper}>
                <img src={logoImg} alt="logo" />
            </div>
            
            <div className={styles.wrapper}>
                {!isSearchActive &&
                    <Search/>
                }
                
                <input 
                    type="text"
                    onClick={() => 
                        setIsSearchActive(true)
                    }    
                />
            </div>
            
        </div>
    )
}