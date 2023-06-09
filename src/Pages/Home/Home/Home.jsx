
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import TopSlider from "./TopSlider";
import Welcome from "./Welcome";



const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>

      <div className="max-w-6xl mx-auto">
        <Welcome></Welcome>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
      </div>
    </div>
  );
};

export default Home;