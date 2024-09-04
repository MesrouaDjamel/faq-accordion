import FaqAccordion from "@/components/FaqAccordion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="min-h-[232px] md:max-h-[320px] relative">
        <Image
          src={"/background-pattern-mobile.svg"}
          alt="Background Image"
          fill
          className="w-full md:hidden object-cover"
        />

        <Image
          src={"/background-pattern-desktop.svg"}
          alt="Background Image"
          fill
          className="hidden md:block  object-cover "
        />
      </div>
      <FaqAccordion />
    </main>
  );
}
