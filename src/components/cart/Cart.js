import classes from './Cart.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeCart } from '../../cart/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
  const closeCartHandler = () => {
    dispatch(closeCart());
  };
  const totalAmount = cartItems.reduce((accumulator, item) => {
    return accumulator + item.amount * item.price;
  }, 0);
  console.log(cartItems)

  return (
    <div className={classes.cart}>
      <div className={classes.header}>
        <div className={classes.title}>CART</div>
        <button onClick={closeCartHandler} type='button'>x</button>
      </div>
      <div className={classes.list}>
          {cartItems.map((element) => (
            <CartItem
              key={element.id}
              id ={element.id}
              name={element['name']}
              price={element['price'].toFixed(2) + '$'}
              amount={element['amount']}
              number={element['number']}
            />
          ))}
        </div>
      <div className={classes.total}>
        TOTAL: {totalAmount.toFixed(2)}$
      </div>
      <div className={classes.checkoutDiv}>
        <button>TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
