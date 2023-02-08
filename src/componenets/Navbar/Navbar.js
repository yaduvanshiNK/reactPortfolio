import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import image from "../../constants/imageRef";
import "./Navbar.scss";

const Navbar = () => {
  const menuList = [
    {
      name: "About Me",
      link: "#introduction",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Testimonials",
      link: "#tetstimonial",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="app-navbar">
        <a href="/" className="nav-logo">
          <img src={image.logo} />
        </a>

        <ul className="app-navbar-links">
          {menuList.map((menuItem, index) => (
            <motion.li
              whileTap={{
                scale: 0.9,
              }}
              key={`link-${menuItem.name}`}
              id={`menu-item-${index}`}
            >
              <a href={menuItem.link}>{menuItem.name}</a>
            </motion.li>
          ))}
        </ul>
        <div className="app-nav-connect">
          <motion.a href="#" className="nav-github">
            <motion.img
              whileHover={{
                scale: 1.2,
              }}
              src={image.github}
              alt="yaduvanshink-github"
            />
            <motion.span
              whileInView={{
                x: [-50, 0],
                opacity: [0.5, 1],
              }}
            >
              Github
            </motion.span>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileInView={{
              opacity: [0.3, 1],
            }}
            href="#"
            className="nav-mail"
          >
            <img src={image.mail} alt="yaduvasnhink-mail" />
          </motion.a>
        </div>

        <div
          className="app-nav-hamburger"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            className="hamburger"
            color="#64f4ac"
            size={20}
            rounded
          />
        </div>
        {isOpen && (
          <motion.div
            whileInView={{ x: [0, 50] }}
            className="app-nav-sidebar"
            initial={{
              x: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <ul className="app-navbar-links-mobo">
              {menuList.map((menuListMobo) => (
                <motion.li
                  whileHover={{
                    scale: 1.1,
                  }}
                  key={`key-${menuListMobo.name}`}
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <a href={menuListMobo.link}>{menuListMobo.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
