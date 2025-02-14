import { AboutUsIcon } from "../../assets/icon";
import AboutUsButtom from "./AboutUsButtom";

const About = () => {
  return (
    <div className="mt-10 px-6 md:px-12 lg:px-20 xl:px-0">
      <div className="flex flex-col md:flex-row items-start gap-36 mb-12">
        {/* Left Side */}
        <div className="flex flex-col items-start space-y-4 md:w-1/3">
          <AboutUsIcon className="w-12 h-12" />
          <h3 className="text-black text-2xl font-bold">
            Who we are at Schoolyft?
          </h3>
          <p className="text-black text-lg font-semibold">
            Transforming Education, One School at a Time
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-black text-lg leading-8 font-semibold">
            At Schoolyft, we believe education should be seamless, transparent,
            and collaborative. Our platform bridges the gap between schools,
            teachers, and parents, creating a connected ecosystem where everyone
            thrives. From automating school operations to giving parents
            real-time updates, we’re redefining how education works.
          </p>
          <p className="text-black text-sm leading-relaxed">
            Imagine a world where schools run smoother, teachers teach smarter,
            and parents stay closer to their child’s journey. That’s the future
            we’re building—one update, one connection, one success story at a
            time!
          </p>
        </div>
      </div>
      <AboutUsButtom />
    </div>
  );
};

export default About;
