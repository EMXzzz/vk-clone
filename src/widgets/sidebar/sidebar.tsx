import {
    Friends, 
    Messages, 
    News, 
    Profile,
} from "./components/menu";
import { LogOut } from "./components/menu/log-out/log-out";

import {UserItems} from './user-items';

export const Sidebar = () => {
    return (
        <>
            <UserItems />
            <Profile />
            <News />
            <Messages />
            <Friends />
            <LogOut />
        </>
    )
}