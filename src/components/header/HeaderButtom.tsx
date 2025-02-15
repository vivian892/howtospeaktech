import { HeaderIcon1, HeaderIcon2 } from "../../assets/icon";
// import Iphone from "../../assets/images/iphone.png";
// import Notification from "../../assets/images/Notifications_1.png";
// import Notification2 from "../../assets/images/Notifications_2.png";

const HeaderButtom = () => {
  return (
    <div className="w-full flex justify-center md:justify-between items-center gap-4 md:gap-8 px-4 md:px-8 relative min-h-[400px] overflow-hidden">
      {/* Left Icon - Increased Size x2 and positioned absolutely */}
      <div className="absolute top-[6rem] left-0 -ml-4 md:-ml-8 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center hover:scale-105 transition-transform z-10">
        <HeaderIcon1 className="w-full h-full" />
      </div>

      {/* Notifications Container */}
      <div className="relative flex-1 max-w-3xl mx-8">
        {/* iPhone Container centered using flex */}
        <div className="relative z-0 h-[500px] flex items-center justify-center overflow-hidden">
          {/* <img
            src={Iphone}
            alt="iPhone"
            className="w-60 md:w-72 lg:w-80 hover:scale-105 transition-transform"
          /> */}

          {/* Left Notification - Closer and Larger */}
          {/* <img
        src={Notification}
        alt="Notification"
        className="absolute w-32 md:w-40 -left-16 md:-left-20 top-1/2 -translate-y-1/2 hover:scale-105 transition-transform"
        /> */}

          {/* Right Notification - Closer and Larger */}
          {/* <img
        src={Notification2}
        alt="Notification"
        className="absolute w-32 md:w-40 -right-16 md:-right-20 top-[40%] -translate-y-1/2 hover:scale-105 transition-transform"
        /> */}
        </div>
      </div>

      {/* Right Icon - Increased Size x2 and positioned absolutely */}
      <div className="absolute right-0 -mr-4 md:-mr-8 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center hover:scale-105 transition-transform z-10">
        <HeaderIcon2 className="w-full h-full" />
      </div>
    </div>
  );
};

export default HeaderButtom;
