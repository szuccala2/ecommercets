import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

type ToggleProps = {
  selected: string,
  setSelected: (selected: SelectedType) => void
}

type SearchProps = {
  searchTerm: string,
  setSearchTerm: (searchTerm: string) => void
}

const ToggleButtons: React.FC<ToggleProps> = ({ selected, setSelected }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          m: 2,
        },
      }}
    >
      <ButtonGroup aria-label="outlined button group">
        <Button sx={{ boxShadow: 2 }} variant={selected==="in" ? "contained" : "outlined"}
          onClick={()=>{if(selected==="in") {
            setSelected("none");
          } else {
            setSelected("in");
          }}} >
          IN STOCK</Button>
        <Button sx={{ boxShadow: 2 }} variant={selected==="out" ? "contained" : "outlined"}
          onClick={()=>{if(selected==="out") {
            setSelected("none");
          } else {
            setSelected("out");
          }}} >
          OUT OF STOCK</Button>
      </ButtonGroup>
    </Box>
  );
}
  
const SearchBox: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { 
        },
        display: "flex"
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container direction="row" spacing={{xs: 1}}>
        <Grid item xs={11} md={8}>
          <TextField label="search" variant="outlined" value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            sx={{ mt: 1, ml: 1, width: "22vw" }} />
        </Grid>
        <Grid item xs={1} md={4}>
          <Button variant="contained" onClick={()=>{setSearchTerm("")}}
            sx={{ mt: 2.3,ml: 2 }}>
            RESET</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

type SelectedType = "none" | "in" | "out";

type Props = {
  selected: string,
  setSelected: (selected: SelectedType) => void,
  searchTerm: string,
  setSearchTerm: (searchTerm: string) => void
}

const Header: React.FC<Props> = ({ selected, setSelected, searchTerm, setSearchTerm }) => {
  return (
    <Box sx={{ height: 80, borderBottom: "1px solid black" }}>
      <Grid container direction="row">
        <Grid item xs={4}>
            <img src="https://via.placeholder.com/150x80" alt="logo" />
          </Grid>
          <Grid item xs={5} md={4}>
            <ToggleButtons selected={selected} setSelected={setSelected} />
          </Grid>
          <Grid item xs={3} md={4}>
            <SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;