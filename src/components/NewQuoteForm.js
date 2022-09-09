import { useState } from "react";
import { db } from "../firebase.config";
import { doc, setDoc, collection } from "firebase/firestore";
import { Button } from "rsuite";

import NewQuoteImg from "../assets/NewQuoteImg";

import "../styles/newQuoteForm.scss";

const NewQuoteForm = () => {
  const [authorFirstName, setAuthorFirstName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");
  const [quote, setQuote] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [sentQuote, setSentQuote] = useState(false);

  const clearFields = async (e) => {
    e.preventDefault();
    setAuthorFirstName("");
    setAuthorLastName("");
    setQuote("");
  };

  const postQuotes = async (e) => {
    e.preventDefault();

    const quotesDocRef = collection(db, "currentQuotes");

    try {
      if (
        authorFirstName === "" ||
        authorLastName === "" ||
        quote === "" ||
        quote.length < 5
      ) {
        setInvalid(true);
        setTimeout(() => {
          setInvalid(false);
        }, "10000");
      } else {
        await setDoc(doc(quotesDocRef), {
          authorFirstName: authorFirstName,
          authorLastName: authorLastName,
          quote: quote,
        });

        setSentQuote(true);
        setTimeout(() => {
          setSentQuote(false);
        }, "5000");

        clearFields(e);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="new-quote-form-container">
        <div className="new-quote-form-img-container">
          <NewQuoteImg />
        </div>
        <form onSubmit={postQuotes} className="new-quote-form">
          <h3 className="new-quote-form-heading">Add A New Quote</h3>
          <div className="first-last-name-group">
            <div className="first-name">
              <input
                type="text"
                value={authorFirstName}
                onChange={(e) => setAuthorFirstName(e.target.value)}
                required
              />
              <label>First Name & M.I. (opt.)</label>
            </div>
            <div className="last-name">
              <input
                type="text"
                value={authorLastName}
                onChange={(e) => setAuthorLastName(e.target.value)}
                required
              />
              <label>Last Name</label>
            </div>
          </div>
          <div className="quote-input-group">
            <textarea
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Enter the saying here, no quotation marks needed"
              maxLength="256"
              required
            />
            <label>Quote</label>
          </div>
          <div className="new-quote-action-buttons">
            <Button
              className="post-quote-button"
              type="submit"
              onClick={(e) => {
                postQuotes(e);
              }}
            >
              Post Quote
            </Button>
            <Button
              className="post-quote-button"
              type="submit"
              onClick={(e) => {
                clearFields(e);
              }}
            >
              Clear
            </Button>
          </div>
          {sentQuote ? (
            <p className="sent-banner">
              Quote Sent!
              <br />
              Go back to see your quote at random.
            </p>
          ) : null}
          {invalid ? (
            <p className="invalid-banner">
              Enter in the fields above.
              <br />
              Author must have a first and last name.
              <br />
              Quote must be atleast 5 characters long.
            </p>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default NewQuoteForm;
