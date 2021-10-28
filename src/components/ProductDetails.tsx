import * as React from 'react';
import Product from './Product';
import { useParams } from "react-router-dom";
import { prodotti } from '../model/Product';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id : string }>();
    const prod = prodotti.find(prod=>prod.UPC===id);
    return prod ? <Product prod={prod} det={true} /> : null;
}

export default ProductDetails;