import {Grid} from "@mui/material";

import {Header} from "../../widgets/header";
import {Sidebar} from "../../widgets/sidebar";
import {Content} from "../content";

export const Layout = () => {
    return (
        <>
            <Header />
            
            <Grid 
                container 
                spacing={2} 
                paddingX={5} 
                marginTop={2}
            >
                <Grid 
                    item 
                    md={3}
                >
                    <Sidebar />
                </Grid>

                <Grid 
                    item 
                    md={9}
                >
                    <Content/>
                </Grid>
            </Grid>
        </>
    )
}