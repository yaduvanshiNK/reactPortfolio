import React from "react";
import { AnimatedSocialIcon } from "react-animated-social-icons";
import { motion } from "framer-motion";
import images from "../../constants/imageRef";
import "./Contact.scss";

const Contact = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
        delay: 0.1,
      },
    },
  };
  const eachFooter = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="contact">
      <div className="contact-main-container">
        <div className="contact-main-content">
          <div className="contact-heading">
            <motion.span
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { type: "linear" },
              }}
            >
              What's Next
            </motion.span>
            <motion.h1
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { type: "linear", delay: 0.05 },
              }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { type: "linear", delay: 0.08 },
              }}
            >
              I embrace opportunities and am open to new connections. I am
              confident in my ability to respond to all inquiries, whether they
              are questions or simply greetings, with promptness and positivity.
            </motion.p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView={"show"}
            className="footer-socials"
          >
            <a href="mailto:yneerajkumar221@gmail.com">
              <motion.button variants={eachFooter} className="email-footer">
                <img src={images.mail} /> Say Hello
              </motion.button>
            </a>
            <a href="https://www.instagram.com/yaduvanshink_/" target="_blank">
              <motion.button variants={eachFooter}>
                <AnimatedSocialIcon
                  brandName="instagram"
                  defaultColor="#64f4ac"
                  width="1rem"
                  animationDuration={0.8}
                  style={{ paddingRight: "1.5rem" }}
                />
                Instagram
              </motion.button>
            </a>
            <a href="https://www.linkedin.com/in/yaduvanshink/" target="_blank">
              <motion.button variants={eachFooter}>
                <AnimatedSocialIcon
                  brandName="linkedin"
                  defaultColor="#64f4ac"
                  width="1rem"
                  animationDuration={0.8}
                  style={{ paddingRight: "1.5rem" }}
                />
                LinkedIn
              </motion.button>
            </a>
            <a href="https://www.youtube.com/c/nktechofficial" target="_blank">
              <motion.button variants={eachFooter}>
                <AnimatedSocialIcon
                  brandName="youtube"
                  defaultColor="#64f4ac"
                  width="1rem"
                  animationDuration={0.8}
                  style={{ paddingRight: "1.5rem" }}
                />
                YouTube
              </motion.button>
            </a>
          </motion.div>
          <div className="footer-copyright">
            Designed & Built by Neeraj Kumar Yadav
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
