import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const NavBar = ({ handleSignout }) => {
	const user = useContext(AuthedUserContext);
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid cont">
				<Link className="navbar-brand" to="/">
					/
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						{user ? (
							<>
								<li className="nav-item">
									<Link className="nav-link" to={`/market/new`}>
										Add Product
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={`/market`}>
										View Products
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/auth/sign-out"
										onClick={handleSignout}
									>
										Sign Out
									</Link>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/signup">
										Sign Up
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/signin">
										Sign In
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
