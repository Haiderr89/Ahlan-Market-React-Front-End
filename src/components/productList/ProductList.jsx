import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

const ProductList = (props) => {
  // Filter products by category
  const newProducts = props.market.filter((item) => item.category === "New Product");
  const usedProducts = props.market.filter((item) => item.category === "Used Product");
  const services = props.market.filter((item) => item.category === "Service");

  // Function to render a scrollable product list
  const renderScrollableList = (products, categoryName) => {
    if (products.length === 0) {
      return (
        <div className="mb-5">
          <h2 className="mb-4 text-center">{categoryName}</h2>
          <p className="text-center">No products available in this category.</p>
        </div>
      );
    }

    return (
      <div className="mb-5">
        <h2 className="mb-4 text-center">{categoryName}</h2>
        <div className={`${styles.scrollableContainer} d-flex overflow-auto`}>
          {products.map((market) => (
            <div key={market._id} className={`${styles.productCard} flex-shrink-0 me-4`}>
              {/* Make the entire card clickable */}
              <Link to={`/market/${market._id}`} className="text-decoration-none text-dark">
                <div className={`${styles.cardWrapper} card mb-4 shadow-sm`}>
                  <div className={styles.imageBox}>
                    <img
                      src={market.image || "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"}
                      alt={market.name}
                      className="card-img-top"
                    />
                    <div className={styles.overlay}>
                      <h3>${market.price}</h3>
                      <br />
                      <span className="btn btn-sm btn-outline-light">View</span>
                    </div>
                  </div>
                </div>
                {/* Display the name below the card */}
                <h1 className="h5 mt-2 text-center">{market.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="py-5 bg-light">
		<h1 style={{color:'rgb(98, 0, 235)', fontSize:"1000"}}>Shop</h1><br /><br />
      <div className="container">
        {renderScrollableList(newProducts, "New Products")}
        {renderScrollableList(usedProducts, "Used Products")}
        {renderScrollableList(services, "Services")}
      </div>
    </main>
  );
};

export default ProductList;