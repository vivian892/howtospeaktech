import {
  ArrowCurvedIcon,
  FourIcon,
  OneIcon,
  PencilIcon,
  StarIcon,
  ThreeIcon,
  TwoIcon,
} from "../../assets/icon";

const HowItWorks = () => {
  return (
    <section className="bg-[#0169ff] relative rounded-xl mx-6 py-16 px-4 mb-8 md:px-10 overflow-hidden">
      {/* Pencil Icon - Top Right */}
      <div className="absolute top-0 right-0">
        <PencilIcon className="w-40 h-32" />
      </div>

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-6">How it works</h2>
        <p className="text-xl leading-relaxed">
          How Schoolyft Works: Simple, Smart, and Seamless
        </p>
      </div>

      {/* Steps Grid */}
      <div className="flex flex-row items-center justify-center gap-6 flex-wrap px-8 text-center">
        {" "}
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-6 max-w-[250px] mx-auto">
          <OneIcon className="w-16 h-16" />
          <h4 className="text-xl font-semibold">Schools and Teachers Set Up</h4>
          <p className="text-base">
            Schools and teachers set up their systems on the web app
          </p>
        </div>
        <ArrowCurvedIcon className="w-12 h-12 sm:rotate-0 rotate-90 mx-auto" />
        {/* Arrow */}
        {/* Step 2 */}
        <div className="flex flex-col items-center gap-6 max-w-[250px] mx-auto">
          <TwoIcon className="w-16 h-16" />
          <h4 className="text-xl font-semibold">Real-Time Updates</h4>
          <p className="text-base">
            Teachers input data—attendance, grades, and activities—in real time
          </p>
        </div>
        {/* Arrow */}
        <ArrowCurvedIcon className="w-12 h-12 sm:rotate-0 rotate-90 mx-auto" />
        {/* Step 3 */}
        <div className="flex flex-col items-center gap-6 max-w-[250px] mx-auto">
          <ThreeIcon className="w-16 h-16" />
          <h4 className="text-xl font-semibold">Parents Stay in the Loop</h4>
          <p className="text-base">
            Parents access updates and insights through the mobile app
          </p>
        </div>
        {/* Arrow */}
        <ArrowCurvedIcon className="w-12 h-12 sm:rotate-0 rotate-90 mx-auto" />
        {/* Step 4 */}
        <div className="flex flex-col items-center gap-6 max-w-[250px] mx-auto">
          <FourIcon className="w-16 h-16" />
          <h4 className="text-xl font-semibold">A Connected Community</h4>
          <p className="text-base">
            Everyone stays connected, informed, and empowered
          </p>
        </div>
      </div>

      {/* Star Icon - Bottom Left */}
      <div className="absolute bottom-0 left-6">
        <StarIcon className="w-20 h-20" />
      </div>
    </section>
  );
};

export default HowItWorks;
