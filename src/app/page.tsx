import Hero from "@/components/MainPage/Hero/Hero";
import MyExpertise from "@/components/MainPage/MyExpertise/MyExpertise";
import Skills from "@/components/MainPage/Skills/Skills";
import Portfolio from "@/components/MainPage/Portfolio/Portfolio";
import Education from "@/components/MainPage/Education/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <MyExpertise />
      <section className="bg-accent rounded-[50px] my-20 p-4">
        <Skills />
      </section>
      <Portfolio />
      <Education />
    </>
  );
}
