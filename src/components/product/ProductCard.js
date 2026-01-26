import classes from './ProductCard.module.css';
import wildberry from '../../images/berry.png';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../cart/cartSlice';

const ProductCard = (props) => {
  const [isChosenFirstButton, setIsChosenFirstButton] = useState(true);
  const [isChosenSecondButton, setIsChosenSecondButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canNumber, setCanNumber] = useState(6);
  const [price, setPrice] = useState(10);
  const dispatch = useDispatch();

  const chooseFirstButtonHandler = () => {
    setIsChosenFirstButton(true)
    setIsChosenSecondButton(false)
    setCanNumber(6)
    setPrice(10)
  }
  const chooseSecondButtonHandler = () =>{
    setIsChosenFirstButton(false)
    setIsChosenSecondButton(true)
    setCanNumber(12)
    setPrice(18)
  }

  const hoverHandler = () => {
    setIsHovered(true)
  }

  const unHoverHandler = () => {
    setIsHovered(false)
  }

  const addItemHandler = () => {
    dispatch(addItem({id:props.id, name: props.name, number: canNumber, price: price , amount: 1}))
  }

  return (
    <div
      onMouseOver={hoverHandler}
      onMouseLeave={unHoverHandler}
      className={classes.productCard}
    >
      <Link to={`/product/${props.id}`} className={classes.cardLink}>
        <div className={isHovered ? classes.hoveredTopCard : classes.topCard}>
          <img
            className={isHovered ? classes.hoveredImage : classes.unHoveredImage}
            src={props.source}
            alt={props.name}
          />
        </div>

        <div className={classes.cardName}>{props.name}</div>
      </Link>

      <div className={classes.bottomCard}>
        <div className={classes.cansSection}>
          <div className={classes.cansSectionTitle}># OF CANS</div>
          <div className={classes.cansOptions}>
            <button
              onClick={chooseFirstButtonHandler}
              type="button"
              className={isChosenFirstButton ? classes.firstButton : classes.firstButtonUnchosen}
            >
              6
            </button>
            <button
              onClick={chooseSecondButtonHandler}
              type="button"
              className={isChosenSecondButton ? classes.secondButton : classes.secondButtonUnchosen}
            >
              12
            </button>
          </div>
        </div>

        <div className={classes.totalSection}>
          <div className={classes.totalSum}>
            PRICE <span style={{ color: '#ffb4c4' }}>{isChosenFirstButton ? '$10.00' : '$18.00'}</span>
          </div>
          <div className={classes.totalButton}>
            <button onClick={addItemHandler} className={classes.cartButton}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default ProductCard;
