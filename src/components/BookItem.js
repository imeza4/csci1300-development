// TODO: create a component that displays a single bakery item
import BookButton from "./BookButton";

export default function BookItems(props) {

    return (
      <div className="BookItems">
        <div>
        </div>
        <h1>{props.name}</h1> 
        <p>{props.genre}, {props.pages} pages</p>
        <p class="price">{props.price}</p>
        <BookButton cartItems={props.cart} name = {props.name} price={props.price} updateCart={props.updateCart} updatePrice={props.updatePrice} currPrice={props.currPrice}/>
      </div>
    );
  }
