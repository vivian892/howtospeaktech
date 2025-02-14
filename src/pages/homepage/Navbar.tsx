import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonPrimary from "../../components/ButtonPrimary";
import Logo from "../../assets/images/logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    "Home",
    "About",
    "Features",
    "How it works",
    "Pricing",
    "Contact us",
  ];

  const menuIconProps = {
    size: 28,
    className:
      "cursor-pointer transition-transform duration-300 hover:scale-110",
  };

  // const NavItem = ({ text }: { text: string }) => (
  //   <li className="cursor-pointer hover:text-[#30BFAB] transition-all duration-300">
  //     {text}
  //   </li>
  // );

  // Properly defined renderAuthButtons with your original styles
  const renderAuthButtons = () => (
    <>
      <button className="border-3 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
        Sign up
      </button>
      <ButtonPrimary text="Login" />
    </>
  );

  return (
    <nav className="bg-black text-white w-full py-4 px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
      {" "}
      {/* Animated Logo Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-8 md:gap-14"
      >
        <img src={Logo} alt="Schoolyft Logo" className="h-10 md:h-12 w-auto" />

        {/* Desktop Nav Links */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex gap-6 text-base lg:text-lg"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link}
              variants={itemVariants}
              className="cursor-pointer hover:text-[#30BFAB] transition-all duration-300"
            >
              {link}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      {/* Desktop Auth Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:flex items-center gap-4"
      >
        {renderAuthButtons()}
      </motion.div>
      {/* Mobile Hamburger Icon - Always visible on mobile */}
      <div className="md:hidden relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 transition-all duration-300 hover:bg-white/10 rounded-full"
        >
          {isOpen ? (
            <FiX
              {...menuIconProps}
              className={`${menuIconProps.className} rotate-90`}
            />
          ) : (
            <FiMenu {...menuIconProps} />
          )}
        </button>
      </div>
      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed md:hidden top-16 left-0 w-full flex flex-col items-center gap-4 py-6 z-40
              bg-gradient-to-br from-white/20 via-[#fffafa]/20 to-[#f7fbf9]/20
              backdrop-blur-lg border-t border-white/10"
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full text-lg space-y-4 text-center text-gray-800"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link}
                  variants={itemVariants}
                  className="cursor-pointer hover:text-[#30BFAB] transition-all duration-300"
                >
                  {link}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              {renderAuthButtons()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
