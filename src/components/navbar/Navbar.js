import NavLink from './NavLink';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {showCart} from '../../cart/cartSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  const showCartHandler = ()=>{
    dispatch(showCart())
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.links}>
        <NavLink linkName='Shop'/>
        <NavLink linkName='About'/>
      </div>
      <Link className={classes.logo} to='/'>ZESTII</Link>
      <div className={classes.cartButtonDiv}><button onClick={showCartHandler} type='button' className={classes.cartButton}>Cart ({cartItems.length})</button></div>
    </div>
  )
}

export default Navbar;
