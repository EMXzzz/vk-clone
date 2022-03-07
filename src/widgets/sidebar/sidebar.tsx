import {Friends} from "./menu/friends";
import {Messages} from "./menu/messages";
import {News} from "./menu/news";
import {Profile} from "./menu/profile";
import {UserItems} from "./user-items";

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