import { useEffect } from "react";
import { questions } from "../data/faq";
import Hero from "../ui/hero";
import AccordionItem from "../ui/accordion";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import arrowIcon from "../assets/arrow.svg";
import bigArrowIcon from "../assets/arrowBig.svg";

const HomePage = () => {
  useEffect(() => {
    document.title = "Brunel | Home";
  }, []);

  return (
    <main>
      <Navbar />
      <section className="max-w-[50vw] mx-auto mb-28 mt-20">
        <h3 className="font-['Covered_By_Your_Grace'] text-4xl text-center text-green-500 mb-3">
          Success Stories
        </h3>
        <h1 className="text-[3.5rem] text-center leading-[3.75rem] font-semibold">
          Every success journey we’ve encountered.
        </h1>
      </section>

      <div className="flex absolute top-1/2 right-0  z-0">
        <div>
          <div className="size-48 border border-[#f2f2f2] rounded-3xl rounded-tl-[3rem]" />
          <div className="size-48 border border-[#f2f2f2] rounded-3xl" />
          <div className="size-48 border border-[#f2f2f2] rounded-3xl rounded-br-[3rem]" />
        </div>
        <div>
          <div className="size-48 border border-[#f2f2f2] rounded-3xl rounded-tl-[3rem]" />
          <div className="size-48 border border-[#f2f2f2] rounded-3xl" />
          <div className="size-48 border border-[#f2f2f2] rounded-3xl rounded-br-[3rem]" />
        </div>
        <div>
          <div className="h-48 w-24 border border-r-0 border-[#f2f2f2] rounded-l-3xl rounded-tl-[3rem]" />
          <div className="h-48 w-24 border border-r-0 border-[#f2f2f2] rounded-l-3xl" />
          <div className="h-48 w-24 border border-r-0 border-[#f2f2f2] rounded-l-3xl" />
        </div>
      </div>

      <section className="relative flex justify-around ml-20 mb-48 z-10">
        <Hero />

        <div className="flex flex-col justify-between items-center">
          <div>
            <h2 className="max-w-[400px] text-4xl font-semibold mt-24 leading-[3rem] mb-10">
              Enhance fortune 50 company’s insights teams research capabilities
            </h2>
            <div className="self-start flex gap-4">
              <div className="p-[0.35rem] bg-[#2da950] rounded-full cursor-pointer hover:bg-green-700 transition" />
              <div className="p-[0.35rem] bg-[#e4e3e3] rounded-full cursor-pointer hover:bg-[#cad0cb] transition" />
              <div className="p-[0.35rem] bg-[#e4e3e3] rounded-full cursor-pointer hover:bg-[#cad0cb] transition" />
            </div>
          </div>
          <button className="btn-2 text-lg self-start flex items-center gap-5">
            Explore More <img src={arrowIcon} alt="Arrow Icon" />
          </button>
        </div>
      </section>

      <section className="bg-[#e8eee7] flex mx-10 p-5 rounded-[3rem]">
        <div className="flex-1">
          <div className="ml-16 my-16">
            <h3 className="font-['Covered_By_Your_Grace'] text-4xl text-[#9e9d9d] mb-2">
              What's on your mind
            </h3>
            <h2 className="text-6xl font-semibold mb-5">Ask Questions</h2>
          </div>
          <img src={bigArrowIcon} alt="Curved Arrow" />
        </div>
        <div className="flex-1 self-center">
          {questions.map((question, index) => (
            <AccordionItem key={index} title={question.question} ans={question.answer} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
