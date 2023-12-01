import style from './Homepage.module.css'

const Homepage = () => {
  return (
    <section className={style.homeMain}>
      <div className={style.hero}>Hero</div>
      <section className={style.homeSlogan}>
        <div>Slogan here?</div>
      </section>
      <section className={style.homeAbout}>
        <div>about us</div>
      </section>
      <section className={style.homeFeatures}>
        <div>features</div>
      </section>
      <section className={style.homeContact}>
        <div>contact us</div>
      </section>
    </section>
  )
}
export default Homepage
