import styles from "./Landing.module.css";

const Landing = () => {
	return (
		<>
			<main className={styles.container}>


				<section className={styles.about}>
					<header></header>
					<article>
					<br /><br />
						<h1 style={{fontSize:90, textShadow: "8px 8px 8px black"}}>Welcome, Guest!</h1>

					</article>
				</section>

				<section className={styles.testimonial}>
					<header>
						<h1>about us</h1>
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
				</section>
			</main>

			<footer className={styles.footer}>
			© 2025 AhlanMarket INC. Ahlan RIGHTS RESERVED
			</footer>
		</>
	);
};

export default Landing;
