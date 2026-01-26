import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { removeItem, increment, decrement } from '../../cart/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeItem({id:props.id, number:props.number}))
  }
  const addItemHandler = () => {
    dispatch(increment({id:props.id,name:props.name,amount:props.amount,price: props.price, number: props.number}))
  }
  const decreaseItemHandler = () => {
    dispatch(decrement({id:props.id,name:props.name,amount:props.amount,price: props.price, number: props.number}))
  }

  return (
    <div className={classes.cartItem}>
      <div className={classes.left}>
        <div className={classes.info}>
          <div className={classes.name}>{props.name} ({props.number} Cans)</div>
          <div className={classes.price}>{props.price}</div>
        </div>
        <div className={classes.deleteItem}>
          <button onClick={deleteHandler} type='button'> DELETE </button>
        </div>
      </div>
      <div className={classes.right}>
        <button onClick = {addItemHandler} className={classes.addButton} type='button'> + </button>
        <div className={classes.amount}>{props.amount}</div>
        <button onClick = {decreaseItemHandler} className={classes.subtractButton} type='button'> - </button>
      </div>
    </div>
  )
}

export default CartItem;
