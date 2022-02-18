import Banner from "../components/widgets/Banner";
import Fisheries from "../components/widgets/Fisheries";
import Spices from "../components/widgets/Spices";

export default function Home() {
  return (
    <>
      <div className="lg:px-10 lg:py-2 p-4 text-teal-800">
        <Banner />
        <div className="w-40">
          <h2 className="capitalize font-bold cursor-pointer text-3xl mt-7 border-4 border-pink-700 py-2 px-3 rounded-full bg-pink-100 text-center mb-5 hover:bg-pink-500 hover:border-pink-200 hover:text-pink-100">
            fisheries
          </h2>
        </div>
        <Fisheries />
        <div className="w-32">
          <h2 className="capitalize font-bold cursor-pointer text-3xl mt-7 border-4 border-teal-700 py-2 px-3 rounded-full bg-teal-100 text-center mb-5 hover:bg-teal-600 hover:border-teal-200 hover:text-teal-100">
            spices
          </h2>
        </div>
        <Spices />
      </div>
    </>
  );
}
