import {ChangeEvent, useState} from "react";

import {Search} from "@mui/icons-material";

import vkLogo from '../../images/vk-logo.png';

import classes from './header.module.css';

export const Header = () => {
    const [isSearchActive, setIsSearchActive] = useState<boolean>(true)
    const [searchData, setSearchData] = useState<string>('') 

    const onCloseSearchIcon = (text: string) => {
        if (text) {
            setIsSearchActive(false)
        } else {
            setIsSearchActive(true)
        }
    }

    const handleChangeSearchData = (event: ChangeEvent<HTMLInputElement>) => {
        onCloseSearchIcon(event.target.value)
        setSearchData(event.target.value)
    }

    return (
        <div className={classes.header}>
            <div className={classes['img-container']}>
                <img 
                    src={vkLogo} 
                    alt="logo" 
                />
            </div>
            
            <div className={classes['search-container']}>
                {isSearchActive && <Search/>}
                
                <input 
                    type="text"
                    onChange={handleChangeSearchData}  
                />
            </div>
            
        </div>
    )
}