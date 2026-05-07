import { useState } from "react";
import Welcome from "./components/Welcome.jsx";
import PuzzleBoots from "./components/PuzzleBoots.jsx";
import GuessSong from "./components/GuessSong.jsx";
import KissGame from "./components/KissGame.jsx";
import Countdown from "./components/Countdown.jsx";
import FinalGift from "./components/FinalGift.jsx";

function App() {
  const [step, setStep] = useState(0);

  const goNext = () => {
    setStep((currentStep) => currentStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="app">
      {step === 0 && <Welcome onNext={goNext} />}
      {step === 1 && <PuzzleBoots onNext={goNext} />}
      {step === 2 && <GuessSong onNext={goNext} />}
      {step === 3 && <KissGame onNext={goNext} />}
      {step === 4 && <Countdown onNext={goNext} />}
      {step === 5 && <FinalGift />}
    </main>
  );
}

export default App;
