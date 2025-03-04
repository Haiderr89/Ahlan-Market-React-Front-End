// import { Link } from "react-router-dom";
// import { AuthedUserContext } from "../../App";
// import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as marketService from "../../services/marketService";
import styles from "./marketService.module.css";

const addProduct = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const { marketId } = useParams();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await marketService.show(marketId);
      setFormData(productData);
    };
    if (marketId) fetchProduct();
  }, [marketId]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (marketId) {
      props.handleUpdateProduct(marketId, formData);
    } else {
      props.handleAddProduct(formData);
    }
  };

  return (
    <main className={styles.container}>
      <h1>{marketId ? "Edit Product" : "New Product"}</h1>
      <form onSubmit={handleSubmit} class="needs-validation">
        <div class="row">
          <div class="col-md-7 mb-3">
            <label htmlFor="title-input">Product Name</label>
            <input
              required
              type="text"
              name="name"
              id="title-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div class="col-md-5 mb-3">
            <label htmlFor="text-input">Product Price ($)</label>
            <input
              required
              type="number"
              name="price"
              id="text-input"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label htmlFor="text-input">Product Image</label>
            <input
              required
              type="text"
              name="image"
              id="text-input"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div class="col-md-6 mb-3">
            <label htmlFor="category-input">Category</label>
            <select
              required
              name="category"
              id="category-input"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="New Product">New Product</option>
              <option value="Used Product">Used Product</option>
              <option value="Service">Service</option>
            </select>
          </div>
        </div>
        <label htmlFor="text-input">Add Description</label>
        <textarea
          required
          type="text"
          name="description"
          id="text-input"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default addProduct;
