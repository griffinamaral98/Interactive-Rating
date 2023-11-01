import ThankYouImg from "../assets/illustration-thank-you.svg";

const ThankYou = ({ activeIndex }) => {
  return (
    <div className="thank-you-card">
      <img src={ThankYouImg} alt="thank you" className="thank-you-img" />
      <div className="selected-rating">
        <span>You selected {activeIndex + 1} out of 5</span>
      </div>
      <p className="thanks-header">Thank you!</p>
      <p className="thanks-para">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
