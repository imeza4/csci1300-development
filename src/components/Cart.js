

export default function Cart(props) {
    if (props.cartItems.length === 0) {
      return (
        <div className="Cart">
          <div className="cart">
            <div>
              <h1>Cart</h1>
              <p>Add to Cart to see something in here</p>
            </div>
            <h1>Total: $0.00</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Cart">
          <div className="cart">
            <div>
              <h1>Cart!</h1>
              {props.cartItems.map((cartItem) => (
                <div>
                  <p>{cartItem.number}x {cartItem.name}</p>
                </div>
              ))}
            </div>
            <h1>Total: ${props.cartPrice}</h1>
          </div>
        </div>
      );
    }
  }
  