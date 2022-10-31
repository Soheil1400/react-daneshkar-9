import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import Products from "../components/Products";


const Home = (): JSX.Element => {
    return(
        <Grid container>
            <Header/>
            <Products/>
        </Grid>
    )
}

export default Home