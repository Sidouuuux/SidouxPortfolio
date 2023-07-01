import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  // Animations on slide init
  Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 200,
  });

  return (
    <section
      className="about section bd-container bd-grid"
      id="about"
      data-aos="fade-down"
    >
      {/* <div>
        <span className="section-subtitle">Who am I ?</span>
        <h2 className="section-title">About me</h2>
      </div> */}

      <div className="about__container bd-grid">
        <img
          src="/img/pictures/pp.jpg"
          alt="profile"
          className="about__img"
        />
        <div className="about__data bd-grid">
          <p className="about__description">
            <span>
              GM !
              <br />
            </span>
            With 5+ years of experience as a Blockchain developer, I acquired a solid knowledge of Blockchain and Dapp
            development.<br />
            I am currently looking for a job as a Blockchain developer.
          </p>
          <div>
            <span className="about__number">5+ years</span>
            <span className="about__achievement">Blockchain Experience</span>
          </div>
          {/* <div>
            <span className="about__number">10+ techs</span>
            <span className="about__achievement">Web Dev Technologies</span>
          </div>

          <div>
            <span className="about__number">7+ years</span>
            <span className="about__achievement">
              Transferable skills experience
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
