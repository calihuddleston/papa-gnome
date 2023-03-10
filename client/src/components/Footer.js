import React from "react";
import { BsFacebook } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"


const Footer = () => {
  return (
    <div>
      <footer>
      <div id="social-links">
            <BsFacebook />
            <FaTiktok />
          </div>
        <div id="footer-links">
          <div id="overview">
            <h4 className="font-bold">Overview</h4>

            <a href="#pricing" className="text-decoration-line: underline">
              Pricing
            </a>
            <a href="#services" className="text-decoration-line: underline">
              Services
            </a>
            <a href="#contact" className="text-decoration-line: underline">
              Contact Us
            </a>
          </div>
          <div id="resources">
            <h4 className="font-bold">Resources</h4>

            <a href="#about" className="text-decoration-line: underline">
              About
            </a>
            <a href="#help" className="text-decoration-line: underline">
              Help Center
            </a>
            <a href="#careers" className="text-decoration-line: underline">
              Careers
            </a>
            <a href="#testimonials" className="text-decoration-line: underline">
              Testimonials
            </a>
          </div>
        </div>
        <div id="info">
          <p id="copyright">Copyright &copy; 2022</p>
          <p>
            {" "}
            Designed and Developed by{" "}
            <a
              href="https://www.facebook.com/dreamsite.dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              DreamSite Dev
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
