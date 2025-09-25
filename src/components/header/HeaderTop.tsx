import { PlayIcon } from "../../assets/icon";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

const HeaderTop = () => {
  return (
    <div className=" flex flex-col">
      <div className="flex-1 flex flex-col pt-10 items-center text-center px-6 md:px-12 lg:px-20 xl:px-32 space-y-6">
        <h1 className="text-black text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
          The{" "}
          <span className="bg-[#30BFAB] text-white px-4 pt-1 pb-2 rounded-md inline-block align-middle mb-2 md:mb-3">
            Operating System
          </span>{" "}
          for Schools,
          <br className="hidden md:inline" />
          Your Window to Your Child’s World.
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-2xl">
          Schoolyft empowers schools to streamline operations and gives parents
          real-time insights into their child’s academic and social growth—all
          in one place.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <ButtonPrimary text="Explore Schoolyft" />
          <ButtonSecondary text="Book a Demo" icon={<PlayIcon />} />
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
