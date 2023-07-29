import './Card.css'



function Card (props) {

    const classes = 'card ' + props.className;

    return(
        <div className={classes}>{props.children}</div>
    )
}

export default Card;

//the Card as child prop is used for wrapping;
//