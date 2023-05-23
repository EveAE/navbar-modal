import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

const ContactForm = ({ setShowModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      query: ""
    }
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.gridContainer} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.h2}>Contact Form</h2>

        <input
          className={styles.firstName}
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />

        <input
          className={styles.lastName}
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />

        <input
          className={styles.email}
          type="text"
          placeholder="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i
          })}
        />

        <input
          className={styles.query}
          type="text"
          placeholder="Please enter your query (max 500 characters):"
          {...register("query", {
            required: true,
            maxLength: 500
          })}
        />

        <input
          className={styles.submit}
          type="submit"
          onClick={() => setShowModal(false)}
        />
      </form>
    </div>
  );
};

export default ContactForm;
