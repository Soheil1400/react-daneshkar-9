import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {Typography, Button} from "@mui/material";
import {CartModel} from "../model/cartModel";
import {useCallback} from "react";
import {addProduct, decreaseProduct, deleteProduct} from "../redux/slice/cartSlice";

const Cart = (): JSX.Element => {
    const cart: CartModel[] = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleDecrease = useCallback((product: CartModel) => {
        dispatch(decreaseProduct(product))
    }, [cart])

    const handleAddProduct = useCallback((product: CartModel) => {
        dispatch(addProduct(product))
    }, [cart])

    const handleDeleteCartItem = useCallback((product: CartModel) => {
        dispatch(deleteProduct(product))
    }, [cart])

    return (
        <Grid>
            {cart.map(c => (
                <Grid>
                    <Typography>
                        {c.name}
                    </Typography>
                    <Typography>
                        {c.price}
                    </Typography>
                    <Button onClick={() => handleAddProduct(c)}>
                        +
                    </Button>
                    <Typography>
                        {c.count}
                    </Typography>
                    {c.count === 1
                        ?
                        <button onClick={() => handleDeleteCartItem(c)}>
                            delete
                        </button>
                        :
                        <Button onClick={() => handleDecrease(c)}>
                            -
                        </Button>
                    }

                </Grid>
            ))}
        </Grid>
    )
}

export default Cart