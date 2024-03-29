import { NavLink } from "react-router-dom";

import "../styles/footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
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
            <li className="footer-link">
              <NavLink to="privacy-policy">Privacy Policy</NavLink>
            </li>
            <li className="footer-link">
              <NavLink to="terms">Terms & Conditions</NavLink>
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
