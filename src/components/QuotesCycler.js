import { useContext, useEffect, useState } from "react";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

import { DataContext } from "../App";

import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Panel } from "rsuite";

const QuotesCycler = () => {
  const { quotes, images } = useContext(DataContext);

  const [{ id, quote, authorFirstName, authorLastName }] = quotes;
  // const { [0] } = images;

  const [signedIn, setSignedIn] = useState("");

  useEffect(() => {
    let currentUser = localStorage.getItem("user");
    setSignedIn(currentUser);

    // eslint-disable-next-line
  }, [signedIn]);

  return (
    <div className="quotes-cycler-container" loading="lazy">
      <Panel bordered>
        <div key={id}>
          <div className="quotes-cycler-quote">{quote}</div>
          <div className="quotes-cycler-quote-author">
            <div className="quotes-cycler-author-first-name">
              {authorFirstName}
            </div>
            <div className="quotes-cycler-author-last-name">
              {authorLastName}
            </div>
            {images !== null ? (
              <img
                src={images[0]}
                alt={`${authorFirstName} ${authorLastName} pic`}
              />
            ) : null}
          </div>
        </div>
      </Panel>
      <div className="quotes-cycler-controls-container">
        <div className="quotes-cycler-actions-container">
          {signedIn === null ? (
            <div className="quotes-cycler-refresh-button">
              <RefreshRoundedIcon
                onClick={() => {
                  window.location.reload();
                }}
              />
              <p>REFRESH</p>
            </div>
          ) : (
            <div className="quotes-cycler-share-container">
              <div className="quotes-cycler-share-buttons">
                <div className="quotes-cycler-refresh-button">
                  <RefreshRoundedIcon
                    onClick={() => {
                      window.location.reload();
                    }}
                  />
                  <p>REFRESH</p>
                </div>
                <div className="quotes-cycler-social-container">
                  <div className="quotes-cycler-social-buttons">
                    <FacebookShareButton
                      url={"https://www.carpevitamquotes.com"}
                      quote={`"${quote}" - ${authorFirstName} ${authorLastName}`}
                    >
                      <FacebookIcon size="39px" />
                    </FacebookShareButton>
                    <TwitterShareButton
                      title={`"${quote}" - ${authorFirstName} ${authorLastName}`}
                      url={"https://www.carpevitamquotes.com"}
                    >
                      <TwitterIcon size="39px" />
                    </TwitterShareButton>
                  </div>
                  <p>SHARE</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuotesCycler;
