import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function Contact() {
  const contactVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={contactVariants}
      style={{ padding: "50px 0", backgroundColor: "#f4f4f4" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: 4 }}
        >
          Contact Me
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 2,
                  backgroundColor: "white",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  himanshu2512verma@gmail.com
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 2,
                  backgroundColor: "white",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Phone/WhatsApp
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  +91 7818906656
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 2,
                  backgroundColor: "white",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Location
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lane C-13, Turner Road, Dehradun, India
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 2,
                  backgroundColor: "white",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  GitHub
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <a
                    href="https://www.github.com/himanshuverma9760"
                    style={{ textDecoration: "none" }}
                  >
                    GitHub/HimanshuVerma9760
                  </a>
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 2,
                  backgroundColor: "white",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  LinkedIn
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <a
                    href="https://www.linkedin.com/in/himanshu-verma-6b1042114"
                    style={{ textDecoration: "none" }}
                  >
                    LinkedIn/HimanshuVerma
                  </a>
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.section>
  );
}
