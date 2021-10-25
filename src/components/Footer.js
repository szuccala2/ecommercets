import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
  
export default  function Header({ selected, setSelected, searchTerm, setSearchTerm }) {
    return (
        <Box sx={{ backgroundColor: "darkgray", height: "auto" }} p={4}>
            <Grid container justifyContent="end">
                <Grid item>
                    <a style={{color: "blue"}}>TWITTER</a> | <a style={{color: "blue"}}>FACEBOOK</a>
                </Grid>
            </Grid>
        </Box>
    );
}