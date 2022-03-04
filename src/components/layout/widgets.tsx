import {Grid} from "@mui/material";

import {Header} from "../widgets/header";
import {Sidebar} from "../widgets/sidebar";

interface Props {
    children: undefined
}

export const Widgets = ({children}: Props) => {

    return (
        <div>
            <Header />
            <Grid container spacing={2} marginX={5} marginTop={3}>
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10}>
                    {children}
                </Grid>
            </Grid>
        </div>
    )
}