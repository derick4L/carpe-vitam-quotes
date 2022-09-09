import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RefreshRounded } from "@mui/icons-material";

import QuotesCycler from "../components/QuotesCycler";
import HeroMessageCarousel from "../components/HeroMessageCarousel";
import PostModal from "../components/PostModal";
import NewQuoteForm from "../components/NewQuoteForm";
import Footer from "../components/Footer";

import { Button } from "rsuite";

import { DataContext } from "../App";
import SearchModal from "../components/SearchModal";
import QuotesSearch from "../components/QuoteSearch";

const Main = () => {
  let navigate = useNavigate();

  const { user } = useContext(DataContext);

  const [authUser, setAuthUser] = user;

  const [docTitle, setDocTitle] = useState("");

  const [openPost, setOpenPost] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    setDocTitle((document.title = "Home | Quotes To Inspire & Share"));

    let currentUser = localStorage.getItem("user");
    setAuthUser(currentUser);

    // eslint-disable-next-line
  }, [authUser, docTitle]);

  const togglePost = () => {
    setOpenPost(!openPost);
  };

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const signOut = () => {
    setAuthUser(localStorage.removeItem("user"));
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="main-hero-container">
      <HeroMessageCarousel />
      <div className="main-layout-content">
        <QuotesCycler />
      </div>
      <PostModal
        openPost={openPost}
        onClose={() => {
          setOpenPost(false);
        }}
      >
        <NewQuoteForm />
      </PostModal>

      <SearchModal
        openSearch={openSearch}
        onClose={() => {
          setOpenSearch(false);
        }}
      >
        <QuotesSearch />
      </SearchModal>
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
              <Button onClick={() => toggleSearch()}>Quote Search</Button>
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
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Main;
