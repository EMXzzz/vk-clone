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
                marginX={5} 
                marginTop={3}
            >
                <Grid 
                    item 
                    md={2}
                >
                    <Sidebar />
                </Grid>

                <Grid 
                    item 
                    md={10}
                >
                    <Content/>
                </Grid>
            </Grid>
        </>
    )
}