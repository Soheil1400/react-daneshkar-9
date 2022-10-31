import {Button, Grid, Typography} from "@mui/material";
import ProductCard from "./ProductCard";
import {ProductModel} from "../model/producrModel";

const products: ProductModel[] = [
    {id: 1, name: 'milk', price: 29},
    {id: 2, name: 'car', price: 1129},
    {id: 3, name: 'television', price: 129},
    {id: 4, name: 'cellphone', price: 229},
]

const Products = (): JSX.Element => {
    return (
        <Grid container>
            {products.map(p => <ProductCard product={p}/>)}
        </Grid>
    )
}

export default Products
