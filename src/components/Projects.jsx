import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "WorkView: A Team Collaboration Platform",
      description:
        "WorkView is a professional team collaboration app designed to streamline task management and enhance productivity. It combines robust features like real-time updates, task prioritization, and secure authentication to deliver a seamless experience for teams.",
      techStack: "MERN Stack (MongoDB, Express, React, Node.js)",
      image: "workview.png",
      link: "https://github.com/HimanshuVerma9760/WorkView-Professional-Management-App-",
    },
    {
      id: 2,
      title: "Tic-Tac-Toe: A Full React-Based Game",
      description:
        "A classic Tic-Tac-Toe game built entirely with React. This project showcases the use of React's state management and component-based design for an interactive gaming experience.",
      techStack: "React.js",
      image: "tictactoe.png",
      link: "https://github.com/HimanshuVerma9760/Tic-Tac-Toe",
    },
    {
      id: 3,
      title: "Food-Order-App: Nasty Tasty Food",
      description:
        "A food-ordering app that enables users to explore and order delicious meals. Currently in development, it features a file-system-based data storage system for menu and order tracking.",
      techStack: "File System, React.js",
      image: "food.png",
      link: "https://github.com/HimanshuVerma9760/Food-Order-App",
    },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CssBaseline />
        <Container maxWidth="lg">
          <Box
            sx={{
              py: 6,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              My Projects
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 6 }}>
              Here are some of the exciting projects I’ve worked on!
            </Typography>

            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} key={project.id}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                    }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: "background.paper",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: { xs: "100%", sm: "40%" },
                          borderRadius: 2,
                          height: { xs: "200px", sm: "auto" },
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          textAlign: "left",
                          flex: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", mb: 1 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            mb: 2,
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontStyle: "italic",
                            color: "text.secondary",
                            mb: 2,
                          }}
                        >
                          <b>Tech Stack:</b> {project.techStack}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          href={project.link}
                          target="_blank"
                          sx={{ textTransform: "none", fontWeight: "bold" }}
                        >
                          View on GitHub
                        </Button>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </motion.section>
    </>
  );
}
