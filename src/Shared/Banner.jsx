import TabSystem from "../Components/TabSystem";
import airlineImg from "../assets/airline.jpeg";

const Banner = () => {
  return (
    <div>
      <div
        className=" w-full h-[500px] bg-cover bg-center text-white flex justify-center items-center"
        style={{ backgroundImage: `url(${airlineImg})` }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-semibold ">Welcome to Jekfly</h3>
          <p className="ml-auto text-base font-bold">
            Where Every Journey Begins
          </p>
          <p className="text-lg font-semibold">Find Flight, Hotel & Holiday</p>
        </div>
      </div>

      {/* tab system */}
      <div className="-mt-40">
        <TabSystem />
      </div>
    </div>
  );
};

export default Banner;
