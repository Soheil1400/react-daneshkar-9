import {Button, Grid, Typography} from "@mui/material";
import {ProductModel} from "../model/producrModel";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {addProduct} from "../redux/slice/cartSlice";

interface ProductCardProps {
    product: ProductModel
}

const ProductCard = ({product}: ProductCardProps): JSX.Element => {
    const dispatch = useDispatch()

    const handleAddProduct = useCallback(() => {
        dispatch(addProduct(product))
    }, [])

    return (
        <Grid item xs={2} border={2} borderRadius={2} p={2}>
            <Typography>
                {product.name}
            </Typography>
            <Typography>
                {product.price}
            </Typography>
            <Button onClick={handleAddProduct} variant={'contained'}>
                ADD TO CART
            </Button>
        </Grid>
    )
}

export default ProductCard