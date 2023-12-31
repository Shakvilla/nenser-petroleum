import WhoWeAre from "@/components/home/Who/WhoWeAre";
import Experience from "@/components/home/experience/Experience";
import Explore from "@/components/home/explore/explore";
import Gallery from "@/components/home/gallery/Gallery";
import Hero from "@/components/home/hero/hero";
import LetsTalk from "@/components/home/letstalk/LetsTalk";
import Products from "@/components/home/products/Products";
import ShortDescription from "@/components/home/short-description/ShortDescription";
import Team from "@/components/home/team/Team";
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ShortDescription />
      <WhoWeAre />
      <Explore />
      <Experience />
      <Products />
      <Gallery />
      <Team />
      <LetsTalk />
    </main>
  );
}
