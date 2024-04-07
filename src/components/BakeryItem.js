// TODO: create a component that displays a single bakery item
import BakeryButton from "./BakeryButton";

export default function BakeryItems(props) {

    return (
      <div className="BakeryItems">
        <div>
        <img alt="bakery item image" src={props.image}/>
        </div>
        <h1>{props.name}</h1> 
        <p>{props.description}</p>
        <p>{props.price}</p>
        <BakeryButton cartItems={props.cart} name = {props.name} price={props.price} updateCart={props.updateCart} updatePrice={props.updatePrice} currPrice={props.currPrice}/>
      </div>
    );
  }
