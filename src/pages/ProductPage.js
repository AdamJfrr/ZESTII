import {useParams} from 'react-router-dom';
import classes from './ProductPage.module.css';
import cans from '../utilities/cans.js';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import { useSelector } from 'react-redux';
import Cart from '../components/cart/Cart';

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params.productId);
  const showCart = useSelector((state) => state.cart.showCart);
  const targetedCan = cans.filter(element=>element.id==params.productId);
  console.log(targetedCan)
  const [isFirstButtonClicked, setIsClickedFirstButton] = useState(false);
  const [isSecondButtonClicked, setIsClickedSecondButton] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [canNumber,setCanNumber] = useState(0);
  const [price, setPrice] = useState(0);

  const clickFirstButtonHandler = () => {
    setIsClickedFirstButton(true)
    setIsClickedSecondButton(false)
    setCanNumber(6)
    setPrice(10)
  }

  const clickSecondButtonHandler = () => {
    setIsClickedFirstButton(false)
    setIsClickedSecondButton(true)
    setCanNumber(12)
    setPrice(18)
  }

  const addQuantityHandler = () => {
    setQuantity(prev=>prev+1)
  }

  const decreaseQuantityHandler = () => {
    setQuantity(prev=>prev-1)
  }

  const isDisabledMinusButton = quantity === 0;
  const isDisabledAddToCartButton = quantity === 0 || (!isFirstButtonClicked && !isSecondButtonClicked);

  const addToCartHandler = () => {
    dispatch(addItem({id:params.productId, name:targetedCan[0]['name'], number: canNumber, amount: quantity, price: price}))
  }

  return (
    <div className={classes.productPage}>
      <div className={classes.leftSide}><img src={targetedCan[0]['source']}/></div>
      <div className={classes.rightSide}>
        <div className={classes.title}>{targetedCan[0]['name']}</div>
        <div className={classes.description}>{targetedCan[0]['description']}</div>
        <div className={classes.canOptions}>
          <div className={classes.canOptionsHeader}># OF CANS</div>
          <div className={classes.canOptionsButtons}>
            <button onClick={clickFirstButtonHandler} type='button' className={isFirstButtonClicked? classes.button1Clicked:classes.button1}>6 ($10.00)</button>
            <button onClick={clickSecondButtonHandler} type='button' className={isSecondButtonClicked?classes.button2Clicked:classes.button2}>12 ($18.00)</button>
          </div>
        </div>
        <div className={classes.addToCart}>
          <div className={classes.quantitySection}>
            <button onClick={addQuantityHandler} className={classes.addButton} type='button'>+</button>
            <span className={classes.quantity}>{quantity}</span>
            <button disabled={isDisabledMinusButton} onClick={decreaseQuantityHandler} className={classes.minusButton} type='button'>-</button>
          </div>
          <div className={classes.cartButtonSection}><button onClick={addToCartHandler} disabled={isDisabledAddToCartButton} type='button' className={classes.cartButton}>ADD TO CART</button></div>
        </div>
      </div>
      {showCart&&<Cart/>}
    </div>
  )
}
export default ProductPage;
