import {Home} from "../../pages/home";

export const routes = [{
    path: '/',
    components: Home,
    auth: true,
},
{
    path: '/profile/:id',
    components: Home,
    auth: true,
},
{
    path: '/messages',
    components: Home,
    auth: true,
},
{
    path: '/message/:id',
    components: Home,
    auth: true,
},
{
    path: '/friends/:id',
    components: Home,
    auth: true,
},
{
    path: '/auth',
    components: Home,
    auth: false,
},]