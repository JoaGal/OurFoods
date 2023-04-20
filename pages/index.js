import Meals from "@/components/Meals";
import Areas from "@/components/Areas";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="shadow-inner flex flex-col items-center bg-[#fffffff1]">
      <Hero />
      <Areas />
      <Meals />
    </div>
  );
}
