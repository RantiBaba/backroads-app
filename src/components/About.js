import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Title title="about" subTitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImg} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              We are a team of professionals that will take you to the most beautiful places on earth. We've been doing this for 10 years
              and we've been awarded the best travel agency in the world consecutively for 5 years.
            </p>
            <p>Our award winning team will make sure you have the best experience of your life.</p>
            <a href="#about" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  )
}
export default About
