import TitleImg from "../../assets/TitleImg";

const WebLayout = ({ children }) => {
  return (
    <div className="web-layout">
      <div className="web-title-container">
        <TitleImg />
      </div>
      {children}
    </div>
  );
};
export default WebLayout;
