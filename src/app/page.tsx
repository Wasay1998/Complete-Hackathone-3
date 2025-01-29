import HeroSection from "@/app/component/Hero";
import Editors from "@/app/component/editer";
import CardText from "@/app/component/designer";
import GreenDiv from "@/app/component/green";
import Whitediv from "@/app/component/couple";
import Lastdiv from "@/app/component/upfooter";


export default function Home1() {
  return (
    <div className="w-full flex flex-col gap-8 justify-between">
     
      

      {/* Hero Section */}
      <HeroSection />

      {/* Editors Section */}
      <Editors />

      {/* CardText Section */}
      <CardText />

      {/* Green Div Section */}
      <GreenDiv />

      {/* White Div Section */}
      <Whitediv />

      {/* Lastdiv Section */}
      <Lastdiv />
    </div>
  );
}
