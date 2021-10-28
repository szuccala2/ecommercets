import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
  
const Footer: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "darkgray", height: "auto" }} p={4}>
            <Grid container justifyContent="end">
                <Grid item>
                    <a style={{ color: "blue", textDecoration: "none" }}
                        href='https://static.wikia.nocookie.net/5ef5d627-c162-4309-ab47-e09f6b411883'>TWITTER</a> | 
                    <a style={{ color: "blue", textDecoration: "none" }}
                        href='https://i.pinimg.com/originals/d8/90/92/d890923215813484bdc0f9544aeca1a9.gif'>FACEBOOK</a>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;