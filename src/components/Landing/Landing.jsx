// src/components/Landing/Landing.jsx
import styles from "./Landing.module.css";
// import Stars from '../../assets/images/stars.svg';
// import Logotype from '../../assets/images/logotype.svg';

const Landing = () => {
	return (
		<>
			<main className={styles.container}>
				{/* <section className={styles.splash}>
          <img src={Logotype} alt="A cute owl" />
        </section> */}

				<section className={styles.about}>
					<header></header>
					<article>
						<h1>ABOUT US</h1>
						<p>
							Not everyone wants to buy places from different sites and app. So
							why not buy all kinds? That's why AhlanMarket exist! Not only can
							you buy items sold by famous companies. Services? We got it! New
							products? Yes we got it! Used products? You name it! All can be
							bought today in AhlanMarket
						</p>
					</article>
				</section>

				<section className={styles.testimonial}>
					<header>
						<h1>Latest Products</h1>
					</header>
					<article>
						<header>
							<h4>Ben Manley</h4>
							<p>Software Engineer</p>
						</header>
						<p>
							I found Hoot through a friend of mine, and I'm so glad I did. As a
							night owl, I have a hard time finding blogging apps that fit my
							lifestyle. The interface is so easy to use and makes it really
							convenient for me to write my blog posts at night.
						</p>
						<footer>{/* <img src={Stars} alt="Four blue stars" /> */}</footer>
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
