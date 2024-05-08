import { useState, useEffect } from "react";
import companyLogo from "../assets/logo.svg";
import { IoCloseOutline } from "react-icons/io5";
import { BsExclamationCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailValidationError, setEmailValidationError] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailAddress)) {
      setEmailValidationError("Enter a valid email address");
    } else {
      setEmailValidationError("");
      navigate("/success");
    }
  };

  useEffect(() => {
    document.title = "Brunel | Registration";
  }, []);

  return (
    <main>
      <nav className="flex justify-between items-center py-5 px-16">
        <img src={companyLogo} alt="Company Logo" />
        <Link to="/">
          <div className="text-2xl md:text-4xl p-2 md:p-3 border border-[#cacaca] rounded-full cursor-pointer hover:bg-[#f1f1f1] transition duration-300">
            <IoCloseOutline />
          </div>
        </Link>
      </nav>

      <section className="md:max-w-[50vw] mx-auto mb-20 mt-16">
        <h3 className="font-['Covered_By_Your_Grace'] text-4xl text-center text-green-500 mb-3">
          Registration Form
        </h3>
        <h1 className="text-4xl md:text-[3.5rem] text-center leading-[3.75rem] font-semibold">
          Start your success journey here!
        </h1>
      </section>

      <section className="mx-10">
        <form
          className="flex flex-col gap-5 max-w-[420px] mx-auto"
          onSubmit={handleFormSubmit}
        >
          <input
            placeholder="Enter your full name"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            placeholder="Enter your email address"
            type="text"
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
          {emailValidationError && (
            <p className="text-red-500 flex items-center gap-3 ml-2">
              <BsExclamationCircleFill /> {emailValidationError}
            </p>
          )}
          <button
            className={`p-7 rounded-full mt-5 text-white ${
              fullName !== "" && emailAddress !== "" ? "bg-black" : "bg-[#c9c9c9]"
            } transition duration-300`}
            disabled={fullName === "" || emailAddress === ""}
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default RegistrationForm;
