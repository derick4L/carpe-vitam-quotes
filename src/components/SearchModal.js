import { Button } from "rsuite";

import "../styles/searchModal.scss";

const SearchModal = ({ openSearch, onClose, children }) => {
  if (!openSearch) return null;

  return (
    <>
      <div className="overlay" />
      <div className="search-modal-container">
        <div className="search-modal">
          <Button className="search-modal-close-button" onClick={onClose}>
            Cancel
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};
export default SearchModal;
