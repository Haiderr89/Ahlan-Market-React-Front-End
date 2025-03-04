import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import * as marketService from "../../services/marketService";
import { Link } from "react-router-dom";
import styles from "./ProductDetails.module.css";

// Context
import { AuthedUserContext } from "../../App";

// Components
import CommentForm from "../CommentForm/CommentForm";

const ProductDetails = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const user = useContext(AuthedUserContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await marketService.show(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddComment = async (commentFormData) => {
    try {
      const newComment = await marketService.createComment(
        productId,
        commentFormData
      );
      setProduct((prevProduct) => ({
        ...prevProduct,
        comments: [...(prevProduct.comments || []), newComment],
      }));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!product) return <main>Loading...</main>;

  return (
    <main className={styles.container}>
      <section>
        <header>
          <p>{product.category?.toUpperCase()}</p>
          <h1>{product.name}</h1>

          <img
            src={
              product.image ||
              "https://via.placeholder.com/300" // Default placeholder if no image
            }
            alt={product.name}
            className={styles.productImage}
          />

          <p>{product.description}</p>

          <div>
            {product.author ? (
              <p>
                {product.author.username} posted on{" "}
                {new Date(product.createdAt).toLocaleDateString()}
              </p>
            ) : (
              <p>Unknown Author</p>
            )}
            {product.author?._id === user?._id && (
              <>
                <Link to={`/products/${productId}/edit`}>Edit</Link>
                <button onClick={() => props.handleDeleteProduct(productId)}>
                  Delete
                </button>
              </>
            )}
          </div>
        </header>
      </section>

      <section>
        <h2>Comments</h2>
        <CommentForm handleAddComment={handleAddComment} />

        {product.comments?.length > 0 ? (
          product.comments.map((comment) => (
            <article key={comment._id}>
              <header>
                <div>
                  <p>
                    {comment.author?.username || "Anonymous"} posted on{" "}
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                  {comment.author?._id === user?._id && (
                    <>
                      <Link
                        to={`/products/${productId}/comments/${comment._id}/edit`}
                      >
                        Edit
                      </Link>
                      <button onClick={() => props.handleDeleteComment(comment._id)}>
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </header>
              <p>{comment.text}</p>
            </article>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>
    </main>
  );
};

export default ProductDetails;
