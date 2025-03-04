import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

const ProductList = (props) => {
	return (
		<main className="py-5 bg-light">
			<div className="container">
				<div className={`row ${styles.productList}`}>
					{props.market.map((market) => (
						<div key={market._id} className="col-md-3">
							<div className={`${styles.cardWrapper} card mb-4 shadow-sm`}>
								<div className={styles.imageBox}>
									<img
										src={market.image || "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"}
										alt={market.name}
										className="card-img-top"
									/>
									<div className={styles.overlay}>
										<h1 className="h5">{market.name}</h1>
										<h2 className="h6">${market.price}</h2>
										<p>{market.category}</p><br />
										<Link to={`/market/${market._id}`} className="btn btn-sm btn-outline-light">
											View
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default ProductList;
