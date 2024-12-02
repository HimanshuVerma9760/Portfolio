import React from "react";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#f5f5f5",
            boxShadow: 3,
          }}
        >
          {/* Title */}
          <motion.div variants={fadeIn}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              color="primary"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Who Am I?
            </Typography>
          </motion.div>

          {/* Intro */}
          <motion.div variants={fadeIn}>
            <Typography
              variant="body1"
              color="textSecondary"
              paragraph
              align="center"
              sx={{ mb: 4 }}
            >
              I am a 2024 graduate with a strong specialization in MERN stack
              development. My passion for coding stems from my curiosity to
              uncover the mechanisms behind websites and my journey of crafting
              seamless web applications.
            </Typography>
          </motion.div>

          {/* Content Grid */}
          <Grid container spacing={4}>
            {/* Frontend Development */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "white",
                    boxShadow: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="secondary"
                  >
                    Frontend Development
                  </Typography>
                  <Typography variant="body1">
                    I specialize in crafting responsive, user-centric interfaces
                    using React.js. My goal is to deliver visually stunning and
                    performance-driven web applications.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Backend Development */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "white",
                    boxShadow: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="secondary"
                  >
                    Backend Expertise
                  </Typography>
                  <Typography variant="body1">
                    I develop secure, scalable, and high-performance solutions
                    with Node.js and Express.js, ensuring efficiency in API
                    design and business logic.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Database Management */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "white",
                    boxShadow: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="secondary"
                  >
                    Database Management
                  </Typography>
                  <Typography variant="body1">
                    Proficient in MongoDB, I design and manage flexible
                    databases, optimizing queries and ensuring data consistency
                    for dynamic applications.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Continuous Learning */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "white",
                    boxShadow: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="secondary"
                  >
                    A Learner at Heart
                  </Typography>
                  <Typography variant="body1">
                    Exploring new technologies like Next.js and Redux, I thrive
                    on learning and adapting to the evolving landscape of web
                    development.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "white",
                    boxShadow: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="secondary"
                  >
                    A Problem Solver
                  </Typography>
                  <Typography variant="body1">
                    Beyond the code, I bring a problem-solving mindset to the
                    table. I enjoy breaking down complex challenges into
                    manageable solutions, ensuring every project I work on not
                    only meets but exceeds its goals.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "white",
                    boxShadow: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color="secondary"
                  >
                    Driven by Impact
                  </Typography>
                  <Typography variant="body1">
                    For me, coding is more than just a profession; it’s a medium
                    to create impactful solutions that make life better,
                    simpler, and more connected. Each project I undertake is an
                    opportunity to innovate, grow, and contribute meaningfully
                    to the digital world.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          <motion.div variants={fadeIn} style={{display:"flex", justifyContent:"center"}}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://drive.google.com/file/d/1XqDOrflcL4sJwWK3pvTfKsDB22QWedSp/view?usp=sharing"
              download="Himanshu_Verna_Resume.pdf"
              sx={{
                marginTop: 3,
                padding: "12px 30px",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#3f51b5",
                "&:hover": {
                  backgroundColor: "#283593",
                },
              }}
            >
              Download My Resume
            </Button>
          </motion.div>
        </Box>
      </Container>
    </motion.section>
  );
};

export default About;
