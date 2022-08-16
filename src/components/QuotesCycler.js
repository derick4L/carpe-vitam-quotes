import { useContext } from "react";

import { DataContext } from "../App";

import { Panel } from "rsuite";

const QuotesCycler = () => {
  const { quotes } = useContext(DataContext);

  const [{ id, quote, authorFirstName, authorLastName, image }] = quotes;

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
    </>
  );
};
export default QuotesCycler;
