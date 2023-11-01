const ratings = ["1", "2", "3", "4", "5"];

const Rating = ({ activeIndex, handleSetActiveIndex }) => {
  return (
    <div className="ratings-container">
      {ratings.map((rating, i) => (
        <div
          key={i}
          className={`ratings ${activeIndex === i ? "active" : ""}`}
          onClick={() => handleSetActiveIndex(i)}
        >
          {rating}
        </div>
      ))}
    </div>
  );
};

export default Rating;
