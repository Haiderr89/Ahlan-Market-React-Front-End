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
					<header>
						<h3>HOO WE ARE</h3>
						<h1>ABOUT US</h1>
					</header>
					<article>
						<p>
							Not everyone is a morning person. That's why we're building Hoot,
							an open and inclusive place for night owls to share their ideas,
							thoughts, and knowledge with one another. We provide a platform
							for people to share ideas in the early hours of the morning when
							owl brains work best. Hoot is a community of self-identifying owls
							like you, that wants to make sure you always have something
							interesting to say no matter what time of day it is. You no longer
							have to worry about your troubles keeping you up during the day.
							You can now blog about your favorite topics and connect with other
							owls at night. With Hoot, it's never too late to post.
						</p>
					</article>
				</section>

				<section className={styles.testimonial}>
					<header>
						<h3>WHO GIVES A HOOT?</h3>
						<h1>TESTIMONIALS</h1>
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
				© 2024 HOOT INC. OWL RIGHTS RESERVED
			</footer>
		</>
	);
};

export default Landing;
