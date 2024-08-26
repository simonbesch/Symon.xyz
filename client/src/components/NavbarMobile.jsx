import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";
import { useRef, useState } from "react";
import { useAdmin } from "../contexts/AdminContext";
import routes from "../datas/navbarRoutes";
import "../styles/Navbar.scss";
import "../styles/anim.css";

function NavbarMobile() {
  const { isAdmin } = useAdmin();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  return (
    <div className="GlobalContainer">
      <div ref={ref} className="HamburgerNav">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence className="anim">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="motionDiv"
            >
              <ul className="ulHearder">
                {routes.map((route, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: 0.01 + idx / 100,
                    }}
                    key={route.title}
                    className="ilHearder"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className=""
                      href={route.href}
                    >
                      <span className="linkHeader">
                        <Link to={route.path}>- {route.title}</Link>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="linkPlusDiv">
        {isAdmin ? (
          <Link to="/editInfos">
            <img
              src="https://img.icons8.com/?size=100&id=118624&format=png&color=000000"
              alt=""
              className="logoImgAdmin"
            />
          </Link>
        ) : null}
        <Link to="/projets" className="linkProjets">
          <button className="glowing-btn">
            <span className="glowing-txt">
              Pr<span className="faulty-letter">o</span>jets
            </span>
          </button>
        </Link>
        <Link to="/contact" className="linkContact">
          Contacts
        </Link>
      </div>
    </div>
  );
}

export default NavbarMobile;
