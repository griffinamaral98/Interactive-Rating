import star from "../assets/icon-star.svg";
import Rating from "./Rating";

const RatingPage = ({
  activeIndex,
  handleSetActiveIndex,
  handleShowThanks,
}) => {
  return (
    <div className="rating-card">
      <div>
        <div className="star-container">
          <img src={star} alt="star" />
        </div>

        <div className="heading">How did we do?</div>
        <div className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
        <Rating
          activeIndex={activeIndex}
          handleSetActiveIndex={handleSetActiveIndex}
        />
        <div className="btn-div">
          <button onClick={handleShowThanks}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
