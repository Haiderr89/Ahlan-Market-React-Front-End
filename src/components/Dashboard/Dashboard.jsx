import { AuthedUserContext } from "../../App";
import { useContext } from "react";
import styles from "./Dashboard.module.css";

const Dashboard = ({}) => {
	const user = useContext(AuthedUserContext);
	return (
		<>
			<main className={styles.container}>
				{/* <section className={styles.splash}>
            <img src={Logotype} alt="A cute owl" />
          </section> */}

				<section className={styles.about}>
					<header>
				
					</header>
					<article><br /><br /><br />
						<h1 style={{fontSize:90, textShadow: "8px 8px 8px black"}}>Ahlan, {user.username}!</h1>
						{/* <p>
							Not everyone wants to buy places from different sites and app. So why
							not buy all kinds? That's why AhlanMarket exist! Not only can you buy
							items sold by famous companies. Services? We got it! New products? Yes we got it!
							Used products? You name it! All can be bought today in AhlanMarket
						</p> */}
					</article>
				</section>

				<section className={styles.testimonial}>
					<header>
						<h1>About Us</h1>
						</header>
						<article>
						<p>
							Not everyone wants to buy places from different sites and app. So
							why not buy all kinds? That's why AhlanMarket exist! Not only can
							you buy items sold by famous companies. Services? We got it! New
							products? Yes we got it! Used products? You name it! All can be
							bought today in AhlanMarket
						</p>
					</article>
						{/* <h1 style={{fontSize:80}}>About</h1> */}

						{/* <header>
							<h4>Ben Manley</h4>
							<p>Software Engineer</p>
						</header> */}

						<footer>{/* <img src={Stars} alt="Four blue stars" /> */}</footer>
				</section>
			</main>

			<footer className={styles.footer}>
				© 2025 AhlanMarket INC. Ahlan RIGHTS RESERVED
			</footer>
		</>
	);
};

export default Dashboard;
