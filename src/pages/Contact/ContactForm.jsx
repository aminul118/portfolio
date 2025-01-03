import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        fullWidth
        required
        placeholder="Your Name"
      />

      {/* Email Field */}
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        required
        placeholder="Your Email"
      />

      {/* Message Field */}
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        fullWidth
        required
        placeholder="Your Message"
        multiline
        rows={4}
      />

      {/* Submit Button */}
      <Button variant="contained" type="submit" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
