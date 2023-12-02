import style from './Homepage.module.css'
import hero from '../../assets/images/hero.jpeg'

const Homepage = () => {
  return (
		<section className={style.homeMain}>
			<div className={style.hero}>
				<img src={hero} className={style.heroImage} />
			</div>
			<section className={style.homeSlogan}>
				<div>Slogan here?</div>
			</section>
			<section className={style.homeAbout}>
				<div>
					<h2>Welcome to Dill 'n Dink Social!</h2>
					<p>
						At Dill 'n Dink, we're not just about pickleball; we're about
						creating a vibrant community where pickleball enthusiasts of all
						skill levels come together to share the joy of the game. Whether
						you're a seasoned pro or just getting started, our platform is your
						go-to destination for pickleball fun!
					</p>

					<h3>Why Dill 'n Dink Social?</h3>
					<p>
						We believe that the true essence of pickleball lies in the
						camaraderie and connections formed on and off the court. That's why
						we've crafted a space where players can effortlessly join or create
						games, connect with like-minded enthusiasts, and discover nearby
						courts. It's more than a game; it's a social experience that brings
						people together.
					</p>

					<h3>What Sets Us Apart:</h3>
					<ul>
						<li>
							Inclusive Community: No matter your skill level, everyone is
							welcome at Dill 'n Dink. We celebrate the diversity of players,
							from the casual dill-dabbler to the seasoned dink-master.
						</li>
						<p />
						<li>
							Easy Game Setup: Want to play a spontaneous game or organize a
							group session? Our user-friendly interface makes it a breeze. Just
							a few clicks, and you're on your way to pickleball paradise!
						</li>
						<p />
						<li>
							Connect and Play: Find fellow players in your area, join existing
							groups, or create your own. The power to tailor your pickleball
							experience is in your hands, and we're here to make it as simple
							as a well-executed dink shot.
						</li>
						<p />
						<li>
							Court Locator: Discover the best places to play near you. Our
							court locator feature ensures you spend less time searching and
							more time playing.
						</li>
					</ul>

					<h3>Join the Dill 'n Dink Family:</h3>
					<p>
						Ready to elevate your pickleball experience? Join Dill 'n Dink
						Social today and become a part of a community that values the love
						of the game and the friendships forged along the way. Let's dill,
						dink, and create lasting memories together!
					</p>
				</div>
			</section>
			<section className={style.homeFeatures}>
				<div className={style.homeFeature}>Create or sign up for an event</div>
				<div className={style.homeFeature}>Join groups and connect</div>
				<div className={style.homeFeature}>Find a nearby court</div>
			</section>
			<section className={style.homeContact}>
				<div>contact us</div>
			</section>
		</section>
	);
}
export default Homepage
