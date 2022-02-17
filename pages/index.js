import Banner from "../components/widgets/Banner";
import Categories from "../components/widgets/Categories";
import Popular from "../components/widgets/Popular";

export default function Home() {
  return (
    <>
      <div className="lg:px-10 lg:py-2 p-4 text-teal-800">
        <Banner />
        <h2 className="font-bold text-3xl my-3">Popular</h2>
        <Popular />
        <h2 className="font-bold text-3xl mt-7 mb-5">Category</h2>
        <Categories />
      </div>
    </>
  );
}
