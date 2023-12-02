import style from "./Homepage.module.css";
import hero from "../../assets/images/hero.jpeg";
import team from "../../assets/images/team.svg";
import backhand from "../../assets/images/backhand.svg";
import court from "../../assets/images/court.svg";

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
          <h1 className={style.homeWelcome}>Welcome to Dill 'n Dink Social!</h1>
          <br />
					<p>
						At Dill 'n Dink, we're not just about pickleball; we're about
						creating a vibrant community where pickleball enthusiasts of all
						skill levels come together to share the joy of the game. Whether
						you're a seasoned pro or just getting started, our platform is your
						go-to destination for pickleball fun!
					</p>
          <br />

          <h2>Why Dill 'n Dink Social?</h2>
					<p>
						We believe that the true essence of pickleball lies in the
						camaraderie and connections formed on and off the court. That's why
						we've crafted a space where players can effortlessly join or create
						games, connect with like-minded enthusiasts, and discover nearby
						courts. It's more than a game; it's a social experience that brings
						people together.
					</p>

					<h2>What Sets Us Apart:</h2>
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

					<h2>Join the Dill 'n Dink Family:</h2>
					<p>
						Ready to elevate your pickleball experience? Join Dill 'n Dink
						Social today and become a part of a community that values the love
						of the game and the friendships forged along the way. Let's dill,
						dink, and create lasting memories together!
					</p>
				</div>
			</section>
			<section className={style.homeFeatures}>
				<div className={style.homeFeature}>
					<img src={team} className={style.featureImage} />
					<h4>Create or sign up for an event</h4>
				</div>
				<div className={style.homeFeature}>
					<img src={backhand} className={style.featureImage} />
					<h4>Join groups and connect</h4>
				</div>
				<div className={style.homeFeature}>
					<img src={court} className={style.featureImage} />
					<h4>Find a court and schedule a game</h4>
				</div>
			</section>
			<section className={style.homeContact}>
				<div>
					<h3 className={style.homeContactText}>Contact Us</h3>
					<div>Email:</div>
					<div>
						<a
							href="mailto:kyleochata@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							kyleochata@gmail.com
						</a>
						<br />
						<a
							href="mailto:vannaluciano@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							vannaluciano@gmail.com
						</a>
          </div>
          <br />
					<div>Phone:</div>
          <div>1-714-917-9092</div>
          <div>1-949-813-7689</div>
				</div>
			</section>
		</section>
	);
};
export default Homepage;
