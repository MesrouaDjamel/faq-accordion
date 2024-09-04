import Image from "next/image";
import QuestionAnswer from "./QuestionAnswer";

const FaqAccordion = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-lightPink ">
      <div className="bg-white -translate-y-24 max-w-[375px] px-7 py-8 rounded-3xl md:min-w-[600px] md:px-11 md:py-12 md:-translate-y-36">
        {/* Title */}
        <div className="flex items-center gap-7 pb-7">
          <Image
            src={"/icon-star.svg"}
            alt=""
            width={40}
            height={41}
            className=""
          />
          <h1 className="text-[2.5rem] text-darkPurple font-bold">FAQs</h1>
        </div>
        {/* Question Answer */}
        <div>
          <QuestionAnswer
            title="What is Frontend Mentor, and how will it help me?"
            desc="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
          />
          <QuestionAnswer
            title="Is Frontend Mentor free?"
            desc="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
          />
          <QuestionAnswer
            title="Can I use Frontend Mentor projects in my portfolio?"
            desc="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          />
          <QuestionAnswer
            title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            desc="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          />
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
