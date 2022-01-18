import Banner from "../components/widgets/Banner";
import Cards from "../components/widgets/Cards";

export default function Home() {
  return (
    <>
      <div className="lg:px-10 lg:py-2 p-4 text-teal-800">
        <Banner />
        <Cards />
      </div>
    </>
  );
}
