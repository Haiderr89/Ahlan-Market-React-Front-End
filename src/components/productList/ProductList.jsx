import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Link } from "react-router-dom";

const ProductList = (props) => {
	return (
		<main>
			{props.market.map((market) => (
				<div class="album py-5 bg-light">
					<div class="container">
						<div class="row">
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<svg
										class="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
										role="img"
										aria-label="Placeholder: Thumbnail"
									>
										<title>Placeholder</title>
										<rect width="100%" height="100%" fill="#55595c"></rect>
										<text x="50%" y="50%" fill="#eceeef" dy=".3em">
											Thumbnail
										</text>
									</svg>
									<div class="card-body">
										<p key={market._id}>
											<h1>{market.name}</h1>
											<h2>{market.price}</h2>
											{market.category}
										</p>

										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button
													type="button"
													class="btn btn-sm btn-outline-secondary"
												>
													View
												</button>
												<button
													type="button"
													class="btn btn-sm btn-outline-secondary"
												>
													Edit
												</button>
											</div>
											<small class="text-muted">9 mins</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</main>
	);
};

export default ProductList;
