import Grid from "@mui/material/Grid";
import {Badge, Typography} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {CartModel} from "../model/cartModel";
import {Link} from "react-router-dom";


const Header = (): JSX.Element => {
    const cart = useSelector(state => state.cart)
    const cartNumber: number = useMemo(() => cart.reduce((count: number, item: CartModel) => {
        return count = count + item.count
    }, 0), [cart])

    return (
        <Grid container item xs={12} mt={2}>
            <Grid item xs={6}>
                <Typography>
                    Digikala
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Link to={'/cart'}>
                    <Badge badgeContent={cartNumber} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Header