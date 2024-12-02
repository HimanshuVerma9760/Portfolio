import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Header() {
  return (
    <>
      <motion.nav
        className="header"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link
              to="/projects"
              style={{ color: "white", textDecoration: "none" }}
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
