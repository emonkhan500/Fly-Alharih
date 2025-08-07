import "./Loader.css";

const Loader = ({ size = "medium", message = "Loading..." }) => {
  return (
    <div className="loader-wrapper" role="status" aria-live="polite">
      <div className={`spinner ${size}`}></div>
      <span className="loader-message">{message}</span>
    </div>
  );
};

export default Loader;
