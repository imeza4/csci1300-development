// TODO: create a component that displays a single bakery item
import BookButton from "./BookButton";

export default function BookItems(props) {

    return (
      <div className="BookItems">
        <div>
        <img alt="book item image" src={props.image}/>
        </div>
        <h1>{props.name}</h1> 
        <p>{props.description}</p>
        <p>{props.price}</p>
        <BookButton cartItems={props.cart} name = {props.name} price={props.price} updateCart={props.updateCart} updatePrice={props.updatePrice} currPrice={props.currPrice}/>
      </div>
    );
  }
