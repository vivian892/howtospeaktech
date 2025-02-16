import { ArrowIcon, BulletIcon, TeacherIcon } from "../../assets/icon";
import ButtonSecondary from "../ButtonSecondary";
import Iphone from "../../assets/images/iPhoneTeachers.png";

const Teachers = () => {
  const academicUpdates = [
    {
      title: "Easy Grade Management",
      description:
        "Input, track, and analyze student grades effortlessly with an intuitive gradebook",
    },
    {
      title: "Assignment Creation and Tracking",
      description:
        "Create, distribute, and grade assignments online, with automatic tracking of submissions",
    },
    {
      title: "Behavior and Participation Tracking",
      description:
        "Monitor student behavior and participation to provide holistic feedback",
    },
    {
      title: "Parent Communication",
      description:
        "Send instant updates, announcements, and feedback to parents—all from one platform",
    },
    {
      title: "Classroom Analytics",
      description:
        "Gain insights into class performance and identify areas where students need extra support",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-6 text-black w-full px-4 md:px-0">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-3/5 border border-gray-300 rounded-3xl bg-gradient-to-b from-white to-[#FDFFF9] px-6 pt-6">
        <div className="flex justify-between items-start relative">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">
              Spend less on admin and more on inspiring young minds{" "}
            </h2>
            <p>
              Your time is precious. With Schoolyft, grading, tracking progress,
              and communicating with parents is as easy as a few clicks
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
              <TeacherIcon />
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

export default Teachers;
