
import Events from "./Events";
import Gallery from "./Gallery";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import PrincipalsTalk from "./PrincipalsTalk";
import Services from "./Services";
import Subscribe from "./Subscribe";
import TopSlider from "./TopSlider";
import TotalCount from "./TotalCount";
import Welcome from "./Welcome";
import Why from "./Why";



const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>

      <div className="max-w-6xl mx-auto">
        <Welcome></Welcome>
        <PrincipalsTalk></PrincipalsTalk>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <Gallery></Gallery>
        <Services></Services>
        </div>
        <Why></Why>
        <div className="max-w-6xl mx-auto">
        <TotalCount></TotalCount>
        <Events></Events>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;