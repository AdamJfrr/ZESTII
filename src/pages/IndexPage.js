import classes from './IndexPage.module.css';
import { useEffect, useRef, useState } from 'react';
import outline from '../images/outline.png';
import  wildberry from '../images/berry.png';
import tropicalpineapple from '../images/pineapple.png';
import lemonandlime from '../images/lime.png';
import rubygrapefruit from '../images/grapefruit.png';
import {Link} from 'react-router-dom';
import FlavorBox from '../components/indexPage/FlavorBox';
import ProductCard from '../components/product/ProductCard';
import { useSelector } from 'react-redux';
import Cart from '../components/cart/Cart';

const IndexPage = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  const imagesObject = {wildberry: wildberry, tropicalpineapple: tropicalpineapple, lemonandlime: lemonandlime, rubygrapefruit: rubygrapefruit}
  const [imageName,setImageName] = useState(outline);
  const hoverHandler = (name) => {
    const lowerCaseName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log()
    setImageName(prev=>imagesObject[lowerCaseName]);
  }
  return (
    <div className={classes.indexPage}>
      <div className={classes.headerSection}>
        <div className={classes.headerImage}>
          <div className={classes.image}><img src={imageName}/></div>
          <FlavorBox chooseImageHandler={hoverHandler} position='leftTop' name='Wild Berry' arrow='&#8594;'/>
          <FlavorBox chooseImageHandler={hoverHandler} position='rightTop' name='Tropical Pineapple' arrow='&#8592;'/>
          <FlavorBox chooseImageHandler={hoverHandler} position='leftBottom' name='Lemon And Lime' arrow='&#8594;'/>
          <FlavorBox chooseImageHandler={hoverHandler} position='rightBottom' name='Ruby Grapefruit' arrow='&#8592;'/>
        </div>
        <div className={classes.headerText}> MEANT TO TICKLE YOUR SENSES </div>
      </div>
      <div className={classes.products}>
        <ProductCard id = '1' source={wildberry} name='Wild Berry'/>
        <ProductCard id = '2' source={tropicalpineapple} name='Tropical Pineapple'/>
        <ProductCard id = '3' source={lemonandlime} name='Lemon & Lime'/>
        <ProductCard id = '4' source={rubygrapefruit} name='Ruby Grapefruit'/>
      </div>
      {showCart&&<Cart/>}
    </div>
  );
};

export default IndexPage;
