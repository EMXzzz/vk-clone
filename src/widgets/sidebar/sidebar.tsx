import {
    Friends, 
    Messages, 
    News, 
    Profile,
} from "./components/menu";

import {UserItems} from './user-items';

export const Sidebar = () => {
    return (
        <>
            <UserItems />
            <Profile />
            <News />
            <Messages />
            <Friends />
        </>
    )
}