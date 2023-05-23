import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.css";
import ContactForm from "./ContactForm";

const backdropVariant = {
  visible: { opcacity: 1 },
  hidden: { opacity: 0 }
};

const modalVariant = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 }
  }
};

const Modal = ({ showModal }) => {
  return <div>{showModal && <ContactForm />}</div>;
  // return (
  //   <AnimatePresence>
  //     {showModal && (
  //       <motion.div
  //         className={styles.backdrop}
  //         variants={backdropVariant}
  //         initial="hidden"
  //         animate="visible"
  //         exit="hidden"
  //       >
  //         <motion.div className={styles.modal} variants={modalVariant}>
  //           <ContactForm />
  //         </motion.div>
  //       </motion.div>
  //     )}
  //   </AnimatePresence>
  // );
};

export default Modal;
