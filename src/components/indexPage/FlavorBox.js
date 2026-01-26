import classes from './FlavorBox.module.css';

const FlavorBox = (props) => {
  const isLeft = props.position.includes('left');
  const hoverHandler = () => {
    props.chooseImageHandler(props.name)
  }
  return (
    <div onMouseOver={hoverHandler} className={`${classes.flavor} ${classes[props.position]}`}>
      {isLeft ? (
        <>
          {props.name} <span>{props.arrow}</span>
        </>
      ) : (
        <>
          <span>{props.arrow}</span> {props.name}
        </>
      )}
    </div>
  );
};

export default FlavorBox;
