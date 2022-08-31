import WebImg from "../../assets/WebImg";

const WebLayout = ({ children }) => {
  return (
    <div className="web-layout">
      <div className="web-title-container">
        <WebImg />
      </div>
      {children}
    </div>
  );
};
export default WebLayout;
