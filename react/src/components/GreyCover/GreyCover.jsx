import "./GreyCover.css";

const GreyCover = ({ title, paragraph }) => {
  return (
    <>
      <div className="grey-cover-header">
        <div className="grey-centered-content">
          <h1 className="center-h1">{title}</h1>
          <p className="lead">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default GreyCover;
