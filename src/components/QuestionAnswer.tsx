"use client";
import Image from "next/image";
import Separator from "./Separator";
import { useState } from "react";
type QuestionAnswerProps = {
  title: string;
  desc: string;
};
const QuestionAnswer = ({ title, desc }: QuestionAnswerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div>
        {/* Questions */}
        <Separator />
        <div
          className="flex items-center justify-between  cursor-pointer"
          onClick={handleClick}
        >
          <h2 className="text-[1rem] font-semibold text-darkPurple hover:text-hoverPurple transition-colors ease-in-out duration-200">
            {title}
          </h2>
          {isVisible ? (
            <Image
              src={"/icon-minus.svg"}
              alt=""
              width={30}
              height={30}
              className=" "
            />
          ) : (
            <Image
              src={"/icon-plus.svg"}
              alt=""
              width={30}
              height={30}
              className=""
            />
          )}
        </div>
        <Separator />

        {/* Answers */}
        {isVisible && <p className="text-sm text-grayishPurple ">{desc}</p>}
      </div>
    </>
  );
};

export default QuestionAnswer;
