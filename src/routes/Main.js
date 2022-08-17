import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RefreshRounded } from "@mui/icons-material";
import {
  RedditShareButton,
  RedditIcon,
  TwitterIcon,
  TwitterShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";

import QuotesCycler from "../components/QuotesCycler";
import HeroMessageCarousel from "../components/HeroMessageCarousel";
import PostModal from "../components/PostModal";
import NewQuoteForm from "../components/NewQuoteForm";
// import Footer from "../components/Footer";

import { Button } from "rsuite";

import { DataContext } from "../App";

const Main = () => {
  let navigate = useNavigate();

  const { quotes, user } = useContext(DataContext);

  const [docTitle, setDocTitle] = useState("");

  const [authUser, setAuthUser] = user;

  const [openPost, setOpenPost] = useState(false);

  const [{ quote, authorFirstName, authorLastName }] = quotes;

  const togglePost = () => {
    setOpenPost(!openPost);
  };

  const signOut = () => {
    setAuthUser(localStorage.removeItem("user"));
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    setDocTitle((document.title = "Home | Quotes To Inspire & Share"));

    let currentUser = localStorage.getItem("user");
    setAuthUser(currentUser);

    // eslint-disable-next-line
  }, [authUser, docTitle]);

  return (
    <div className="main-hero-container">
      <HeroMessageCarousel />
      <div className="main-layout-content">
        <QuotesCycler user={user} />
        <PostModal
          openPost={openPost}
          onClose={() => {
            setOpenPost(false);
          }}
        >
          <NewQuoteForm />
        </PostModal>
      </div>
      <div className="main-action-buttons-container">
        {authUser === undefined || authUser === null ? (
          <div className="main-action-buttons-null">
            <Button onClick={() => navigate("/auth")}>Sign In To Share</Button>
            <div className="main-action-refresh-group">
              <RefreshRounded
                onClick={() => {
                  window.location.reload();
                }}
              />
              <p>REFRESH</p>
            </div>
          </div>
        ) : (
          <div className="main-action-buttons-signedin">
            <div className="main-action-buttons-first-group">
              <Button onClick={() => togglePost()}>Post New Quote</Button>
              <Button onClick={() => alert("I work!")}>Quote Search</Button>
              <Button
                onClick={() =>
                  window.confirm("Are you sure you want to sign out?") &&
                  signOut()
                }
              >
                Sign Out
              </Button>
            </div>
            <div className="main-action-buttons-second-group">
              <div className="main-action-refresh-group">
                <RefreshRounded
                  onClick={() => {
                    window.location.reload();
                  }}
                />
                <p>REFRESH</p>
              </div>
              <div className="main-action-social-share-group">
                <div className="main-action-share-buttons">
                  <TwitterShareButton
                    title={`${quote} - ${authorFirstName} ${authorLastName}`}
                    url={`https://carpevitamquotes.com`}
                  >
                    <TwitterIcon size={60} borderRadius={10} />
                  </TwitterShareButton>
                  <RedditShareButton
                    title={`${quote} - ${authorFirstName} ${authorLastName}`}
                    url={`https://carpevitamquotes.com`}
                  >
                    <RedditIcon size={60} borderRadius={10} />
                  </RedditShareButton>
                  <FacebookMessengerShareButton
                    quote={`${quote} - ${authorFirstName} ${authorLastName}`}
                    url={`https://carpevitamquotes.com`}
                  >
                    <FacebookMessengerIcon size={60} borderRadius={10} />
                  </FacebookMessengerShareButton>
                </div>
                <p className="main-action-share-text">SHARE</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Main;
