import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import QuotesCycler from "../components/QuotesCycler";
import HeroMessageCarousel from "../components/HeroMessageCarousel";
import PostModal from "../components/PostModal";

import { DataContext } from "../App";
import NewQuoteForm from "../components/NewQuoteForm";
import Footer from "../components/Footer";

const Main = () => {
  let navigate = useNavigate();

  const { user } = useContext(DataContext);

  const [authUser, setAuthUser] = user;

  const [openPost, setOpenPost] = useState(false);

  const togglePost = () => {
    setOpenPost(!openPost);
  };

  const signOut = () => {
    setAuthUser(localStorage.removeItem("user"));
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    let currentUser = localStorage.getItem("user");
    setAuthUser(currentUser);
    // eslint-disable-next-line
  }, [authUser]);

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
          <button onClick={() => navigate("/auth")}>Sign In To Post</button>
        ) : (
          <>
            <button onClick={() => togglePost()}>Post New Quote</button>
            <button onClick={() => alert("I work!")}>Quote Search</button>
            <button
              onClick={() =>
                window.confirm("Are you sure you want to sign out?") &&
                signOut()
              }
            >
              Sign Out
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Main;
