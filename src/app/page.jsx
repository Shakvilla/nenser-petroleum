import WhoWeAre from "@/components/home/Who/WhoWeAre";
import Hero from "@/components/home/hero/hero";
import ShortDescription from "@/components/home/short-description/ShortDescription";
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ShortDescription />
      <WhoWeAre />
    </main>
  );
}
