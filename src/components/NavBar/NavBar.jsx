import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import styles from "./navbar.module.css";
import Swal from "sweetalert2"; // Import SweetAlert2

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  const handleSignoutWithConfirmation = () => {
    Swal.fire({
      title: "Do you want to log out?",
    //   text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        handleSignout(); // Call the signout function if confirmed
        Swal.fire({
          title: "Signed Out!",
          text: "You have been successfully signed out.",
          icon: "success",
        });
      }
    });
  };

  return (
    <main className={styles.container}>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-scroll"
        style={{ backgroundColor: "rgb(255, 255, 255)", padding: "0.5px" }}
      >
        <div className="container-fluid cont">
          <Link className="navbar-brand" to="/">
            <img
              src="src/assets/enhanced_image-8 copy.png"
              width={40}
              height={35}
              alt="the logo"
            />
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
                      to="/"
                      onClick={handleSignoutWithConfirmation} // Use the new confirmation function
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
    </main>
  );
};

export default NavBar;