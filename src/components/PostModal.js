import { Button } from "rsuite";

import "../styles/postModal.scss";

const PostModal = ({ openPost, onClose, children }) => {
  if (!openPost) return null;

  return (
    <>
      <div className="overlay" />
      <div className="post-modal-container">
        <div className="post-modal">
          <Button className="post-modal-close-button" onClick={onClose}>
            Cancel
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};
export default PostModal;
