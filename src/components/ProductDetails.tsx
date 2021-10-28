import * as React from 'react';
import Product from './Product';
import { useParams } from "react-router-dom";
import { prodotti } from '../model/Product';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id : string }>();
    return <Product prod={prodotti.find(prod=>prod.UPC===id)} det={true} />;
}

export default ProductDetails;