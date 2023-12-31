import classes from './Card.module.css';

const Card = (props) => {
    // console.log(props);

    return (
        <div className={classes.card}>{props.children}</div>
    );
};

export default Card;
