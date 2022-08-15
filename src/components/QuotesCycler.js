import { useContext, useEffect, useState } from "react";

import { RedditShareButton, TwitterShareButton } from "next-share";
import { RedditIcon, TwitterIcon } from "next-share";

import { DataContext } from "../App";

import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Panel } from "rsuite";

const QuotesCycler = () => {
  const { quotes } = useContext(DataContext);

  const [{ id, quote, authorFirstName, authorLastName, image }] = quotes;

  const [signedIn, setSignedIn] = useState("");

  useEffect(() => {
    let currentUser = localStorage.getItem("user");
    setSignedIn(currentUser);

    // eslint-disable-next-line
  }, [signedIn]);

  return (
    <>
      <Panel bordered>
        <div className="quotes-cycler-container">
          <div className="quotes-cycler-quote-author-image-container" key={id}>
            {image !== null || image !== "" ? (
              <img
                className="quotes-cycler-author-image"
                src={image}
                alt={`${authorFirstName} ${authorLastName} pic`}
              />
            ) : null}
            <div className="quotes-cycler-quote-author-group">
              <div className="quotes-cycler-quote">{quote}</div>
              <div className="quotes-cycler-quote-author">
                <div className="quotes-cycler-author-first-name">
                  {authorFirstName}
                </div>
                <div className="quotes-cycler-author-last-name">
                  {authorLastName}
                </div>
              </div>
            </div>
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
                    <RedditShareButton
                      title={`"${quote}" - ${authorFirstName} ${authorLastName}.`}
                      url={"https://www.carpevitamquotes.com"}
                    >
                      <RedditIcon size={39} borderRadius={10} />
                    </RedditShareButton>
                    <TwitterShareButton
                      title={`"${quote}" - ${authorFirstName} ${authorLastName}`}
                      url={"https://www.carpevitamquotes.com"}
                    >
                      <TwitterIcon size={39} borderRadius={10} />
                    </TwitterShareButton>
                  </div>
                  <p>SHARE</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default QuotesCycler;
