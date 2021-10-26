import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function BasicChips() {
    return (
        <Stack direction="row" spacing={1}>
            <Chip label="In stock" />
        </Stack>
    );
}

export default function ActionAreaCard({ prod, det }) {
    return (
        <Card sx={det ? { maxWidth: 500 } : {}} >
            <CardActionArea href={det ? "/ecommerce" : `/ecommerce/prod/${prod.UPC}`}>
                <CardMedia
                component="img"
                height="auto"
                image="https://via.placeholder.com/350"
                alt="product"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {prod.name}
                        <Typography variant="subtitle1" color="text.secondary">
                            €{prod.price.current.value}
                        </Typography>
                    </Typography>
                    {prod.availability.stock > 0 && <BasicChips />}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}