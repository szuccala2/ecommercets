import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import { prodotti } from '../prodotti';

export default function ProductList() {
  const [selected, setSelected] = React.useState("none");
  const [searchTerm, setSearchTerm] = React.useState("");

  function searchFilter(prod) {
    return prod.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  function selectedFilter(prod) {
    switch(selected) {
      case "in":
        return prod.availability.stock>0;

      case "out":
        return prod.availability.stock<=0;

      default:
        return true;
    }
  }

  return (
    <Grid container wrap="nowrap" sx={{ height: "100vh", flexGrow: 1 }}
      direction="column">
      <Grid item xs={1}>
        <Header selected={selected} setSelected={setSelected}
          setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </Grid>
      <Grid item xs={10}>
        <Grid container
          spacing={2}
          p={2}
          rowSpacing={{ xs: 5, md: 2 }}
        >
          {prodotti?.filter(selectedFilter).filter(searchFilter).map((prod,_) => (
            <Grid item xs={3}>
              <Product prod={prod} key={prod.UPC}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Footer />
      </Grid>
      {/* <Grid item>
        <Avatar>W</Avatar>
      </Grid>
      <Grid item>
        <Avatar>W</Avatar>
      </Grid>
      <Grid item xs zeroMinWidth>
        <Typography noWrap>{message}</Typography>
      </Grid> */}
    </Grid>
  );
}