import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, increase, decrease,calculateTotal } from "../store/cartSlice";
const Cart = () => {
  const { cartItems, total} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (key, qty) => {
    if (qty === 1) {
      dispatch(remove(key));
    } else {
      alert("Quantity should be 1");
    }
  };
  const increaseValue = (id) => {
    dispatch(increase(id));
  };

  const decreaseValue = (id, qty) => {
    if (qty > 1) {
      dispatch(decrease(id));
    } else {
      alert("Please press the remove button");
    }
  };
  React.useEffect(() => {
     dispatch(calculateTotal());
  });
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {cartItems.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt=""></img>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button
              className="btn"
              onClick={() => handleRemove(product.id, product.quantity)}
            >
              Remove
            </button>
            <div>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => increaseValue(product.id)}
              >
                +
              </p>
              <p>{product.quantity}</p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => decreaseValue(product.id, product.quantity)}
              >
                -
              </p>
            </div>
          </div>
        ))}
        {total === 0 ? (
          <div>
            <h4 style={{ textAlign: "center" }}>No items in the cart</h4>
          </div>
        ) : (
          <div>
            <h4 style={{ float: "right" }}>Total :{total.toFixed(2)}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
