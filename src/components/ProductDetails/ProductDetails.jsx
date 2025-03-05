import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import * as marketService from "../../services/marketService";
import { Link } from "react-router-dom";
import styles from "./ProductDetails.module.css";

// Context
import { AuthedUserContext } from "../../App";

// Components
import CommentForm from "../CommentForm/CommentForm";
import { Row } from 'react-bootstrap';

const ProductDetails = (props) => {
  const { marketId } = useParams();
  const [product, setProduct] = useState(null);
  const [commentdelete, setCommentdelete] = useState(null);
  const user = useContext(AuthedUserContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await marketService.show(marketId);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [marketId]);

  const handleAddComment = async (commentFormData) => {
    try {
      const newComment = await marketService.createComment(marketId, commentFormData);
      setProduct((prevProduct) => ({
        ...prevProduct,
        comments: [...(prevProduct.comments || []), newComment],
      }));
      Swal.fire("Comment Added!");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    const deletedComment = await marketService.deleteComment(marketId, commentId);
    setProduct((prevProduct) => ({
      ...prevProduct,
      comments: product.comments.filter((comment) => comment._id !== commentId),
    }));
    Swal.fire("Comment Deleted!");
  };

  const handleDeleteProduct = async (marketId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        await props.handleDeleteProduct(marketId);
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error!', 'There was an issue deleting the product.', 'error');
      }
    }
  };

  if (!product) return <main>Loading...</main>;

  return (
	
    <div className="container">
      <div className="row">
        <div className="col-md-5" style={{
			marginTop:50, 
			backgroundColor:"rgb(195, 193, 243)", 
			boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
			borderRadius:8,
			padding:20,
			width: "100%", height:"90%"
			}}>
          <div className="project-info-box mt-0">
            <h1>{product.name || "No Title Available"}</h1> {/* Title Added Here */}
            <h3 style={{marginTop:50, textAlign:"left"}}>product details</h3>
            <p className="mb-20" style={{textAlign:"left"}}>{product.description}</p>
          </div>

          <div className="project-info-box">
            {/* <p style={{textAlign:"left"}}><b>Posted Date:</b> {new Date(product.createdAt).toLocaleDateString()}</p> */}
            {/* <p style={{textAlign:"left"}}><b>Author:</b> {product.author?.username || "Anonymous"}</p> */}
            <p className="mb-0" style={{textAlign:"left"}}><b>Price:</b> ${product.price}</p>
			<p style={{textAlign:"left"}}>Category: {product.category?.toUpperCase()}</p>
          </div>
		  
        </div>

        <div className="col-md-7" style={{marginTop:50, marginLeft:"auto", marginRight:"auto"}}>
          <img src={product.image} alt={product.name} className="rounded" style={{ width: "100%", height:"90%" }} />
          <div className="project-info-box">
            {/* <p><b>Categories:</b> {product.category?.toUpperCase()}</p> */}
			<p className="mb-10" style={{marginTop:15}}><b>Posted on</b> {new Date(product.createdAt).toLocaleDateString()} by {product.author?.username} </p>
			{product.author?._id === user?._id && (
							<>
								<button className="btn btn-warning" style={{margin:20}}>
									<Link
										to={`/market/${marketId}/edit`}
										style={{ color: "white"}}
									>
										Edit
									</Link>
								</button>
								<button
									className="btn btn-danger"
									onClick={() => handleDeleteProduct(marketId)}
								>
									Delete
								</button>
							</>
						)}
          </div>
        </div>
      </div>
<br /><br /><br />
	  <section style={{ marginTop: "20px",
	  display:"flex"
 }}>
  <br />
  <br />
  <CommentForm handleAddComment={handleAddComment} />
  <br />
  <div
    style={{
      maxHeight: "300px", // Set a fixed height for the comments container
      overflowY: "auto", // Enable vertical scrolling
      border: "1px solid #ccc", // Optional: Add a border
      borderRadius: "8px", // Optional: Add rounded corners
      padding: "10px", // Optional: Add padding
	  width:"600px",
	  background:"white"

    }}
  >
    {product.comments?.length > 0 ? (
      product.comments.map((comment) => (
        <article
          key={comment._id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between", // Space out the content
            gap: "20px",
            padding: "10px",
            borderBottom: "1px solid #eee", // Lighter border for separation
          }}
        >
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>
              {comment.author?.username}
            </p>
            <p style={{ margin: 0, color: "#666" }}>
              {new Date(comment.createdAt).toLocaleDateString()}
            </p>
            <p style={{ margin: 0 }}>{comment.text}</p>
          </div>
          {comment.author?._id === user?._id && (
            <div className="buttons">
              {/* <Link
                to={`/market/${marketId}/comments/${comment._id}/edit`}
              >
              </Link> */}
              <button
                onClick={() => handleDeleteComment(comment._id)}
				className='btn btn-danger'
                style={{
                //   background: "red",
                //   color: "white",
                //   border: "none",
                //   padding: "5px 10px",
                //   borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          )}
        </article>
      ))
    ) : (
      <p style={{ textAlign: "center", color: "#666" }}>No comments yet.</p>
    )}
  </div>
</section>
<br /><br />
    </div>
  );
};

export default ProductDetails;
