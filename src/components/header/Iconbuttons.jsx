import { Box, Button, makeStyles, Badge } from "@material-ui/core";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const useStyle = makeStyles({
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "3%",
  },
});

export const Iconbuttons = () => {
//const dispatch=useDispatch();
const cartproducts=useSelector((state)=>state.data.cart);
console.log("nav",cartproducts.length)
let cartitems=cartproducts.length
    const classes = useStyle();
  
  return (
    <>
      <Box className={classes.buttons}>
        <div className="dropdown">
          <button className="dropbtn">
            <PersonIcon />
          </button>
          <div className="dropdown-content">
            <h5>Welcome</h5>

            <p>To access account and manage orders</p>
           
            

            
          </div>
        </div>
      </Box>

      <Box>
        <Button className={classes.buttons}>
          
            <Link to="/favourites">
              <FavoriteIcon />
            </Link>
         
        </Button>
      </Box>

      
      <Box>
        <Button className={classes.buttons}>
          
            <Badge color="primary">
              <Link to="/cart">
                <ShoppingBagIcon/>
              </Link>
              <span style={{color:"black"}}>{cartproducts.length}</span>
            </Badge>
          
        </Button>
      </Box>

      
    </>
  );
};