import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import { Link } from 'react-router-dom';


const ProductList = (props) => {
    // console.log(props)
    return (
      <main>
        {props.market.map((market) => (
          <p key={market._id}>{market.name}</p>
        ))}
      </main>
    );
  };

export default ProductList