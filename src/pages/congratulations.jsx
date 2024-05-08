import logoImage from "../assets/logo.svg";
import successTick from "../assets/tick.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CongratulationsPage = () => {
  const navigation = useNavigate();
  const [redirectCounter, setRedirectCounter] = useState(5);

  useEffect(() => {
    document.title = "Brunel | Congrats";
    const timer =
      redirectCounter > 0 && setTimeout(() => setRedirectCounter(redirectCounter - 1), 1000);
    if (redirectCounter === 0) {
      navigation("/");
    }
    return () => clearTimeout(timer);
  }, [redirectCounter, navigation]);

  return (
    <main>
      <nav className="py-9 px-16">
        <img src={logoImage} alt="Logo" />
      </nav>

      <section className="max-w-[720px] mx-auto my-16 sm:my-32">
        <img src={successTick} alt="Success" className="mb-12 mx-auto" />
        <h3 className="font-['Covered_By_Your_Grace'] text-4xl text-center text-green-500 mb-3">
          Success Submitted
        </h3>
        <h1 className="text-4xl md:text-[3.5rem] text-center leading-[3.75rem] font-semibold mb-5">
          Congratulations
        </h1>
        <p className="text-xl md:text-[1.75rem] text-[#727272] text-center px-5">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to you shortly with updates
        </p>
      </section>

      <p className="text-center text-xl text-[#727272] font-light w-[300px] sm:w-full mx-auto">
        Redirecting you to Homepage in{" "}
        <span className="text-black font-bold">{redirectCounter} Seconds</span>
      </p>
    </main>
  );
};

export default CongratulationsPage;
