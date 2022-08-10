import MentalHealthAwarenessRibbon from "../assets/MentalHealthAwarenessRibbon";
import SuicideAwarenessRibbon from "../assets/SuicideAwarenessRibbon";
import "../styles/footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="awareness-content">
            <>
              <span className="awareness-icon">
                <SuicideAwarenessRibbon />
              </span>
              <p>Suicide & Mental Health Resources</p>
              <span className="awareness-icon">
                <MentalHealthAwarenessRibbon />
              </span>
            </>
          </div>
          <p>Speak with someone now - dial 988 (USA)</p>
          <ul className="footer-links">
            <li className="footer-link">
              <a
                href="https://988lifeline.org/"
                alt="Help is available here!"
                target="_blank"
                rel="noreferrer"
              >
                Never Give Up! Click Here
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://findtreatment.samhsa.gov/locator"
                alt="Help is available here!"
                target="_blank"
                rel="noreferrer"
              >
                Find A Provider Near You
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            <p>
              By Derick McMillian © <span>{year}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
