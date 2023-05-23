import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "./Modal";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { scroller } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log(showModal);
    return <Modal showModal={showModal} />;
  };

  return (
    <div>
      <Navbar className={styles.colorNav} variant="dark">
        <Container className={styles.container}>
          <Navbar.Brand
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              scroller.scrollTo("home", {
                smooth: true,
                offset: -10,
                duration: 500
              })
            }
          >
            LOGO
          </Navbar.Brand>
          <Nav className={styles.meAuto}>
            <Nav.Link
              className={styles.navLink}
              onClick={() =>
                scroller.scrollTo("services", {
                  smooth: true,
                  offset: -80,
                  duration: 500
                })
              }
            >
              services
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              onClick={() =>
                scroller.scrollTo("about", {
                  smooth: true,
                  offset: -50,
                  duration: 500
                })
              }
            >
              about
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              onClick={() =>
                scroller.scrollTo("portfolio", {
                  smooth: true,
                  offset: -50,
                  duration: 100
                })
              }
            >
              portfolio
            </Nav.Link>
            <Nav.Link className={styles.navLink} onClick={openModal}>
              contact
            </Nav.Link>
            <Nav.Link className={styles.navLink}>
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
