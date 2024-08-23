import { useState } from "react";
import "./App.css";
import backgroundDesktop from "./assets/background-pattern-desktop.svg";
import starIcon from "./assets/icon-star.svg";
import Question from "./components/Question";
import Answer from "./components/Answer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="font-work-sans min-h-screen">
      <div
        className="relative pt-20"
        style={{
          backgroundImage: `url(${backgroundDesktop})`,
          width: "100%",
          height: "320px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center">
          <div className="absolute top-[140px] z-10 p-8 rounded-lg md:rounded-xl bg-white">
            <div className="flex gap-5 items-center mb-10">
              <img src={starIcon} />
              <h1 className="text-4xl md:text-5xl font-bold">FAQs</h1>
            </div>
            <div className="flex flex-col gap-8">
              <div
                className={`w-[270px] md:w-[460px] ${
                  !isOpen ? `pb-8` : ``
                } border-b border-slate-100`}
              >
                <Question
                  content="What is Frontend Mentor, and how will it help me?"
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
                <Answer
                  content="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
                  isOpen={isOpen}
                />
              </div>
              <div
                className={`w-[270px] md:w-[460px] ${
                  !isOpen2 ? `pb-8` : ``
                } border-b border-slate-100`}
              >
                <Question
                  content="Is Frontend Mentor free?"
                  isOpen={isOpen2}
                  setIsOpen={setIsOpen2}
                />
                <Answer
                  content="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
                  isOpen={isOpen2}
                />
              </div>
              <div
                className={`w-[270px] md:w-[460px] ${
                  !isOpen3 ? `pb-8` : ``
                } border-b border-slate-100`}
              >
                <Question
                  content="Can I use Frontend Mentor projects in my portfolio?"
                  isOpen={isOpen3}
                  setIsOpen={setIsOpen3}
                />
                <Answer
                  content="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
                  isOpen={isOpen3}
                />
              </div>
              <div className={`w-[270px] md:w-[460px]`}>
                <Question
                  content="How can I get help if I'm stuck on a Frontend Mentor challenge?"
                  isOpen={isOpen4}
                  setIsOpen={setIsOpen4}
                />
                <Answer
                  content="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
                  isOpen={isOpen4}
                  isLast={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
