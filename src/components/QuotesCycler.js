import { useEffect, useState, useContext } from "react";
import { Panel } from "rsuite";
import { collection, getDocs } from "firebase/firestore";
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

import { db } from "../firebase.config";
import { DataContext } from "../App";

const QuotesCycler = () => {
  const { user } = useContext(DataContext);
  const dbReference = collection(db, "currentQuotes");

  const [quotesInfo, setQuotesInfo] = useState("");
  const [loading, setLoading] = useState(true);

  const { id, quote, authorFirstName, authorLastName, image } = quotesInfo;

  useEffect(() => {
    const getQuotesFromDB = async () => {
      const quotesData = await getDocs(dbReference);
      const quotesArray = quotesData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setQuotesInfo(
        quotesArray[Math.floor(Math.random() * quotesArray.length)]
      );
      setLoading(false);
    };

    getQuotesFromDB();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Panel bordered>
        <div className="quotes-cycler-container">
          <div className="quotes-cycler-quote-author-image-container" key={id}>
            {image === null || image === "" ? null : (
              <>
                {loading ? (
                  <div className="loading-container">
                    <div className="loading-spinner"></div>
                  </div>
                ) : (
                  <img
                    className="quotes-cycler-author-image"
                    src={image}
                    alt={`${authorFirstName} ${authorLastName} pic`}
                  />
                )}
              </>
            )}
            {loading ? (
              <div className="loading-text-container">
                <div className="loading-quote-text"></div>
                <div className="loading-quote-text"></div>
                <div className="loading-author-text"></div>
              </div>
            ) : (
              <>
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
              </>
            )}
            <>
              {user[0] === null ? null : (
                <div className="quotes-cycler-social-share">
                  <TwitterShareButton
                    title={`${quote} - ${authorFirstName} ${authorLastName}`}
                    url={`https://carpevitamquotes.com`}
                  >
                    <TwitterIcon size={63} borderRadius={10} />
                  </TwitterShareButton>
                  <RedditShareButton
                    title={`${quote} - ${authorFirstName} ${authorLastName}`}
                    url={`https://carpevitamquotes.com`}
                  >
                    <RedditIcon size={63} borderRadius={10} />
                  </RedditShareButton>
                  <FacebookMessengerShareButton
                    appId={"455528796477801"}
                    url={`https://carpevitamquotes.com`}
                  >
                    <FacebookMessengerIcon size={63} borderRadius={10} />
                  </FacebookMessengerShareButton>
                </div>
              )}
            </>
          </div>
        </div>
      </Panel>
    </>
  );
};
export default QuotesCycler;
