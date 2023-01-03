import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
const Products = () => {
    const [products, setProducts] = React.useState([]);
    const dispatch = useDispatch();
    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://fakestoreapi.com/products");
            const res = await data.json();
            setProducts(res);
            console.log(res);
        };
        fetchData();
    }, []);
    const handleAdd = (product) => {
     dispatch(add(product))
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt=""></img>
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className="btn" onClick={()=>handleAdd(product)}>Add to cart </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
