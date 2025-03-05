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
							I found Hoot through a friend of mine, and I'm so glad I did. As a
							night owl, I have a hard time finding blogging apps that fit my
							lifestyle. The interface is so easy to use and makes it really
							convenient for me to write my blog posts at night.
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
