import {Header} from "./header/header"
import {Sidebar} from "./sidebar/sidebar"

export const Layout = ({children}) => {

    return (
        <div>
            <Header />
            <Sidebar />
            {children}
        </div>
    )
}