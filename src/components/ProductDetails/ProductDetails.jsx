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
			const newComment = await marketService.createComment(
				marketId,
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


  const handleDeleteComment = async (commentId) => {
    console.log('commentId:', commentId);
    // Eventually the service function will be called upon here
	const deletedComment = await marketService.deleteComment(marketId, commentId)

	setProduct((prevProduct) => ({
		...prevProduct,
		comments: product.comments.filter((comment) => comment._id !== commentId),
	}));


    // setProduct({
    //   ...marketId,
    //   comments: product.comments.filter((comment) => comment._id !== commentId),
    // });
  };

  // Handle product deletion with confirmation
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
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        );
      } catch (error) {
        Swal.fire(
          'Error!',
          'There was an issue deleting the product.',
          'error'
        );
      }
    }
  };

	if (!product) return <main>Loading...</main>;

	return (
		<main className={styles.container}>
			<section>
				<header>
					<h1>{product.name}</h1>
					<p>{product.category?.toUpperCase()}</p>

					<img
						src={product.image}
						alt={product.name}
						className={styles.productImage}
						style={{ height: "60%" }}
					/>

					<h2>${product.price}</h2>

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
								<button className="btn btn-warning">
									<Link
										to={`/market/${marketId}/edit`}
										style={{ color: "white" }}
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
												to={`/market/${marketId}/comments/${comment._id}/edit`}
											></Link>
											<button
												onClick={() => handleDeleteComment(comment._id)}
											>
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
