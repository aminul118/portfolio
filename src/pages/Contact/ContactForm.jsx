import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // EmailJS submission handler
  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_Service_ID, // Replace with EmailJS Service ID
        import.meta.env.VITE_Template_ID, // Replace with EmailJS Template ID
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "RvKwnqQ10ee8aGF6d" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          // console.log("Email sent successfully!", response);
          Swal.fire({
            title: "Good job!",
            text: "Successfully send Email",
            icon: "success",
          });
          reset(); // Clear the form after successful submission
        },
        (error) => {
          // console.log(error);
          Swal.fire({
            title: "Oops...",
            text: "Failed to send message, please try again.",
            icon: "error",
          });
        }
      );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from react-hook-form
      className="flex flex-col gap-3"
      noValidate
      autoComplete="off"
    >
      <h1 className="text-2xl font-semibold leading-[35px] ">Contact Form</h1>

      {/* Name Field */}
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        {...register("name", { required: "Name is required" })}
        fullWidth
        placeholder="Your Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      {/* Email Field */}
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
        fullWidth
        placeholder="Your Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      {/* Message Field */}
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        {...register("message", { required: "Message is required" })}
        fullWidth
        placeholder="Your Message"
        multiline
        rows={4}
        error={!!errors.message}
        helperText={errors.message?.message}
      />

      {/* Submit Button */}
      <Button variant="contained" type="submit" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
