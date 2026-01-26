import {Link} from 'react-router-dom';
import classes from './NavLink.module.css';

const NavLink = (props) => {
  return (
    <Link className={classes.navlink} to={props.destination}>{props.linkName}</Link>
  )
}

export default NavLink;
