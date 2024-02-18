import React from "react";
import Typography from '@mui/material/Typography'
import { AppBar , Toolbar } from "@mui/material";

const Header = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="body1" color="initial" sx={{color: "red"}}>
                        MY self
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;