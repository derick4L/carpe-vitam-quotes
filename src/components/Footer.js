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
                rel="noopener"
              >
                Never Give Up! Click Here or Dial 988
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://findtreatment.samhsa.gov/locator"
                alt="Help is available here!"
                target="_blank"
                rel="noopener"
              >
                Find A Provider Near You
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            MACQUIRE DIGITAL SOLUTIONS © <span>{year}</span> | Created by Derick
            McMillian
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
