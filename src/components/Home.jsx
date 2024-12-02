import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.section
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 15 }}
      >
        <CssBaseline />
        <Container maxWidth="xl">
          <Box
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: "background.paper",
              boxShadow: 3,
            }}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Hello, I’m{" "}
                <span style={{ color: "#1976D2" }}>Himanshu Verma</span>
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  mb: 4,
                  fontStyle: "italic",
                }}
              >
                MERN Stack Developer | React Enthusiast | Tech Innovator
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              <Grid item xs={12} md={9}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <Typography variant="body1" component="p" paragraph>
                    Welcome to my digital portfolio!
                    <br />
                    <br /> I’m Himanshu Verma, a passionate and driven software
                    developer specializing in the MERN stack (MongoDB,
                    Express.js, React, Node.js). I’ve always been fascinated by
                    the endless possibilities that technology offers to
                    transform ideas into impactful solutions. From designing
                    intuitive interfaces to building robust backend systems, I
                    thrive on crafting seamless digital experiences that solve
                    real-world problems.
                  </Typography>
                  <Typography variant="body1" component="p" paragraph>
                    As a fresher graduate of the Class of 2024, I’m stepping
                    into the professional world with a solid foundation of
                    knowledge, a sharp eye for innovation, and a relentless
                    drive to contribute to projects that leave a meaningful
                    impact. My approach to development is not just about solving
                    problems but about designing solutions that resonate with
                    the people who use them.
                  </Typography>
                  <Typography variant="body1" component="p" paragraph>
                    This portfolio serves as a canvas that captures my journey
                    as a developer. Here, you’ll find not only my projects and
                    technical skills but also the story of my growth,
                    challenges, and achievements. Through this, I aim to share
                    my passion, inspire collaborations, and connect with
                    like-minded individuals and organizations.
                  </Typography>
                  <Typography variant="body1" component="p" paragraph>
                    Whether you’re a recruiter looking for talent, a fellow
                    developer seeking collaboration, or someone curious about my
                    journey, I’m glad you’re here. Let’s build something
                    incredible together!
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={3}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  <Box
                    component="img"
                    src="/himanshu.jpg"
                    alt="Himanshu Verma"
                    sx={{
                      maxWidth: "100%",
                      borderRadius: 2,
                      boxShadow: 3,
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4 }} />
          </Box>
        </Container>
      </motion.section>
    </>
  );
}
