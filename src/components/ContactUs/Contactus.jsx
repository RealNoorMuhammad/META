import * as React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import "./Form.css";

import { BiArrowBack } from "react-icons/bi";

import WelcomeScreen from "./WelcomeScreen";
import { Grid } from "@mui/material";

import "./cons.scss";
import { useForm } from "react-hook-form";
const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.example.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        // Show success message or redirect to a success page
        alert("Email sent successfully");
        // Reset the form fields
        reset();
      } else {
        console.log("Failed to send email");
        // Show error message or handle the error accordingly
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.log("Error occurred while sending email", error);
      // Show error message or handle the error accordingly
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  return (
    <div>
      <WelcomeScreen>
        <div className="container">
          {" "}
          <Grid container direction="column" justify="center" className="full">
            <br />
            <br />
            <h1
              style={{
                textAlign: "start",
                fontSize: "40px",
                fontWeight: "900",
              }}
            >
              <a href="./">
                <BiArrowBack />
              </a>
            </h1>
            <h1
              style={{
                textAlign: "center",
               
                fontWeight: "600",
                color: "#fff",
              }}
              className='contact_head'
            >
              Contact Us
            </h1>
            <br />
            <p
              style={{
                textAlign: "center",
                
                fontWeight: "200",
                color: "#fff",
              }}
              className="contact_under"
            >
              Feel free to send any questions or proposals you might have and
              we'll get back to you.
            </p>
           

            <Box
              sx={{
                my: 6,
                mx: 6,
              }}
            >
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <label
                  style={{
                    color: " #fff",
                    fontSize: "200",
                    marginTop: "20px",
                  
                  }}
                  className='label_font'
                >
                  Your name :
                </label>
                <br />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  name="name"
                  autoComplete="email"
                  autoFocus
                  className="field"
                  style={{color:"#fff"}}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>
                    This name field is required
                  </span>
                )}
                <br />
                <label
                  style={{
                    color: "#fff",
                    fontSize: "800",
                    marginTop: "20px",
                   
                  }}
                  className='label_font'
                >
                  What is your Email Address ?
                </label>
                <br />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  style={{color:"#fff"}}
                  autoFocus
                  className="field"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
                <br />
                <label
                  style={{
                    color: "#fff",
                    fontSize: "800",
                    marginTop: "20px",
                   
                  }}
                  className='label_font'
                >
                  What is your Phone Number ?
                </label>
                <br />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  style={{color:"#fff"}}
                  name="phone"
                  autoComplete="tel"
                  autoFocus
                  className="field"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <span style={{ color: "red" }}>{errors.phone.message}</span>
                )}

                <br />
                <label
                  style={{
                    color: "#fff",
                    fontSize: "800",
                    marginTop: "20px",
                  }}
                  className='label_font'
                >
                  What is your Company ?
                </label>
                <br />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="company"
                  name="company"
                  autoComplete="organization"
                  autoFocus
                  style={{color:"#fff"}}
                  className="field"
                  {...register("company", {
                    required: "Company name is required",
                  })}
                />
                {errors.company && (
                  <span style={{ color: "red" }}>{errors.company.message}</span>
                )}

                <br />
                <label
                  style={{
                    color: "#fff",
                    fontSize: "800",
                    marginTop: "20px",
                  }}
                  className='label_font'
                >
                  Enter your Comment
                </label>
                <br />

                <textarea
                  margin="normal"
                  required
                  fullWidth
                  name="message"
                  label="Message ?"
                  style={{color:"#fff"}}
                  type="text"
                  id="number"
                  rows="6"
                  className="form-control field"
                  {...register("message", {
                    required: "Comment is required",
                  })}
                />
                {errors.message && (
                  <span style={{ color: "red" }}>{errors.message.message}</span>
                )}

                <Button
                  type="submit"
                  fullWidth
                  value="Send"
                  sx={{ mt: 3, mb: 4 }}
                  className="btn-grad"
                  style={{
                    color: "#fff",
                    padding: "14px",
                    backgroundColor: "#000",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </div>
      </WelcomeScreen>
    </div>
  );
};

export default Contactus;
