import { useState } from "react";

import RatingPage from "./components/RatingPage";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

function App() {
  const [showThanks, setShowThanks] = useState(false);
  const [activeIndex, setActiveIndex] = useState(4);

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const handleShowThanks = () => {
    setShowThanks(!showThanks);
  };

  return (
    <div className="App">
      {showThanks ? (
        <ThankYou activeIndex={activeIndex} />
      ) : (
        <RatingPage
          activeIndex={activeIndex}
          handleSetActiveIndex={handleSetActiveIndex}
          handleShowThanks={handleShowThanks}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
