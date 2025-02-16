import {
  ArrowIcon,
  BulletIcon,
  SchoolLineArrow,
  SchoolStaricon,
} from "../../assets/icon";
import ButtonSecondary from "../ButtonSecondary";
import Iphone from "../../assets/images/iPhone11Pro.png";

const Schools = () => {
  const academicUpdates = [
    {
      title: "Real-Time Academic Updates",
      description:
        "Get instant access to your child’s grades, assignments, and test scores—no more waiting for report cards.",
    },
    {
      title: "Attendance Tracking",
      description:
        "Receive notifications when your child is absent or late, so you’re always in the know.",
    },
    {
      title: "School Announcements",
      description:
        "Stay informed about important school news, holidays, and policy changes.",
    },
    {
      title: "Child’s Timetable Access",
      description:
        "View your child’s daily or weekly schedule to stay aligned with their routine.",
    },
    {
      title: "Behavior and Participation Insights",
      description:
        "Understand how your child is engaging in class—academically, socially, and behaviorally.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-6 text-black w-full px-4 md:px-0">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-3/5 border border-gray-300 rounded-3xl bg-gradient-to-b from-white to-[#FDFFF9] px-6 pt-6">
        <div className="flex justify-between items-start relative">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">
              Never miss a moment of your child’s growth
            </h2>
            <p>
              From grades to extracurriculars, Schoolyft keeps you in the
              loop—because being involved shouldn’t be hard work.
            </p>
          </div>
          <span className="bg-black rounded-full flex items-center justify-center p-2 absolute top-0 right-0">
            <ArrowIcon />
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-10 flex-1">
          {/* Button & Icons Section */}
          <div className="flex flex-col justify-between">
            <div className="flex gap-6 mt-6 justify-center md:justify-start">
              <ButtonSecondary text="See more features" />
            </div>
            <div className="flex gap-6 items-center justify-center md:justify-start">
              <SchoolLineArrow />
              <SchoolStaricon />
            </div>
          </div>

          {/* Image Section (Hidden on Mobile) */}
          <img
            className="w-[20rem] h-[30rem] object-cover object-bottom self-end hidden md:block"
            src={Iphone}
            alt="iPhone Preview"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gradient-to-b w-full md:w-2/5 from-white to-[#FDFFF9] p-6 border border-gray-300 rounded-3xl flex flex-col gap-6">
        {academicUpdates.map((item, index) => (
          <div key={index} className="flex gap-4">
            <BulletIcon className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schools;
