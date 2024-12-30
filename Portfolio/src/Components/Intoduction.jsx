import { Button, duration, Grid2, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Header from "./Header";
import { animate, motion } from "framer-motion";
import { Download } from "@mui/icons-material";

const Introduction = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        marginLeft: "14rem",
      }}
    >
      <Grid2>
        <Header />
      </Grid2>
      <Grid2
        marginTop="7rem"
        marginRight="15rem"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid2
          maxWidth="50%"
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Grid2>
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", damping: 6 }}
            >
              <Typography variant="h2" fontWeight={600}>
                Hi, I am&nbsp;
                <br /> Himanshu Verma
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                A&nbsp;
                <span style={{ color: "#00BFFF" }}>
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "MERN Developer",
                      "React Enthusiast",
                      "Java Programmer",
                      "Cloud Enthusiast",
                      "Tech Learner",
                      "Node.js Specialist",
                      "Frontend Innovator",
                      "Backend Engineer",
                      "Problem Solver",
                      "Coding Mentor",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </Typography>
            </motion.div>
          </Grid2>
          <Grid2>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, damping: 8 }}
            >
              <Typography
                variant="p"
                sx={{ color: "grey", fontSize: "17px", fontWeight: "500" }}
              >
                With a strong foundation in the MERN stack (MongoDB, Express.js,
                React, and Node.js), expertise is centered around building
                dynamic, responsive, and user-friendly web applications. A deep
                interest in problem-solving, coding, and crafting applications
                that enhance user experiences drives every project. From backend
                architecture with Node.js to creating interactive frontends with
                React, attention to detail and a commitment to delivering
                high-quality results define the approach.
                <br />
                <br />
                Explore the projects and feel free to reach out for any
                collaboration or inquiries!
                <br />
              </Typography>
              <Button
                href="https://drive.google.com/file/d/1Asw9ZDcNldc1mNfvOSkBed56WckAn_JA/view?usp=drive_link"
                startIcon={<Download />}
                sx={{
                  padding: "8px 15px",
                  marginTop: "1rem",
                  backgroundColor: "rgba(17, 25, 40, 0.83)",
                  ":hover": {
                    backgroundColor: "rgb(88, 88, 249)",
                    color: "white",
                  },
                  transition: "0.3s",
                }}
              >
                Resume
              </Button>
            </motion.div>
          </Grid2>
        </Grid2>
        <Grid2>
          <Grid2>
            <img
              src="/himanshu.jpg"
              height="500rem"
              style={{
                borderRadius: "15rem",
                border: "1px solid whitesmoke",
                boxShadow: "0px 4px 24px rgb(113, 52, 170)",
              }}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Introduction;
