import { ArrowIcon } from "../../assets/icon";
import child1 from "../../assets/images/child1.png";
import child2 from "../../assets/images/child2.png";

const AboutUsButtom = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black px-4 md:px-8">
      <div className="w-full h-full">
        <img className="object-cover w-full h-full" src={child1} alt="" />
      </div>
      <div className="bg-gray-100 p-4 flex flex-col justify-between w-full h-full gap-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-2xl">10+</h3>
          <span className="bg-black rounded-full flex items-center justify-center p-2">
            <ArrowIcon />
          </span>
        </div>
        <div className="flex flex-col mt-2 w-full gap-6">
          <h5 className="w-full font-bold">Years of Innovation</h5>
          <p className="w-full">
            Imagine a world where schools run smoother, teachers teach smarter,
            and parents stay closer to their child’s journey.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <img className="object-cover w-full h-full" src={child2} alt="" />
      </div>
      <div className="bg-[#DAFF72] p-4 flex flex-col justify-between w-full h-full gap-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-2xl">10+</h3>
          <span className="bg-black rounded-full flex items-center justify-center p-2">
            <ArrowIcon />
          </span>
        </div>
        <div className="flex flex-col mt-2 w-full gap-6">
          <h5 className="w-full font-bold">Years of Innovation</h5>
          <p className="w-full">
            Imagine a world where schools run smoother, teachers teach smarter,
            and parents stay closer to their child’s journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsButtom;
