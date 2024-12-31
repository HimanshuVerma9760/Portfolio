import {
  Chat,
  Computer,
  Devices,
  Gamepad,
  Info,
  PictureInPicture,
  School,
  Star,
  Work,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Grid, useMediaQuery } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  const smallScreen = useMediaQuery("(min-width:570px)");
  return (
    <>
      <Box>
        <Grid
          align="center"
          marginBottom="5rem"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          <Typography
            // variant="h2"
            fontSize={smallScreen ? "52px" : "45px"}
            fontWeight={700}
          >
            Projects
          </Typography>
          <Typography
            fontSize={!smallScreen ? "16px" : "22px"}
            color="rgb(177, 178, 179)"
            fontWeight={400}
          >
            Here are some key projects that have shaped my technical skills and
            problem-solving abilities.
          </Typography>
        </Grid>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2024"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<Devices />}
          >
            <h3 className="vertical-timeline-element-title">WorkView -</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Collaboration App for Professionals
            </h4>
            <Typography>
              WorkView is a full-stack Task Manager application developed using
              the MERN stack (MongoDB, Express.js, React.js, Node.js). The
              project focuses on providing a seamless user experience for
              managing tasks, with features like task creation, editing,
              deletion, and categorization. It includes user authentication via
              JWT for secure login and session management, ensuring data
              privacy. On the backend, Node.js and Express handle API requests,
              while MongoDB is used for efficient data storage and retrieval.
              The front end, built with React, offers a responsive and
              interactive UI, with real-time updates to reflect task changes.
              The app is designed for scalability and performance, making it an
              effective tool for personal or team task management.
              <br />
              <br />
              <Typography
                sx={{ textDecoration: "none", color: "whitesmoke" }}
                component={Link}
                to="https://github.com/HimanshuVerma9760/WorkView-Professional-Management-App-"
              >
                GitHub -
              </Typography>
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2024"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<Chat />}
          >
            <h3 className="vertical-timeline-element-title">ChatBook</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Your Personal Chat Space
            </h4>

            <p>
              ChatBook is a real-time messaging application built using Node.js,
              Express, and Socket.IO for seamless communication. The app allows
              users to send and receive messages instantly, with features such
              as message persistence and real-time updates. The front end,
              developed with React, provides a dynamic and interactive user
              interface. Socket.IO enables real-time bidirectional communication
              between the client and server, ensuring instant message delivery.
              The app is designed with scalability in mind, allowing for
              multiple users to engage in conversations simultaneously. ChatBook
              serves as a practical demonstration of WebSocket technology and
              real-time messaging systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2024"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<PictureInPicture />}
          >
            <h3 className="vertical-timeline-element-title">Portfolio</h3>
            <h4 className="vertical-timeline-element-subtitle">
              A Digital Resume - Saving Recruiter's Valuable Time.
            </h4>
            <p>
              Portfolio is a digital resume designed to showcase my skills,
              experience, and projects in a concise and interactive format. It
              serves as an online representation of my professional journey,
              allowing recruiters to quickly assess my technical expertise,
              academic background, and project work. The portfolio is built with
              modern web technologies to ensure a responsive and user-friendly
              experience. By presenting key details in an organized and visually
              appealing manner, it aims to save recruiters' time while
              effectively communicating my qualifications and capabilities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2024"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
              Brain Tumor Detection project using CNN
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Final Year Project at DIT University.
            </h4>
            <p>
              This project utilizes deep learning, specifically Convolutional
              Neural Networks (CNNs), to detect brain tumors in MRI images,
              providing an automated and efficient tool for medical
              professionals. The model is trained on a dataset of brain MRI
              scans categorized into "Tumor" and "No Tumor" classes, with
              preprocessing steps such as image resizing, data augmentation, and
              dataset splitting (70% train, 15% validation, 15% test). Built
              using Keras and TensorFlow, the CNN architecture includes
              convolutional layers, max pooling, dropout, flattening, and dense
              layers to extract and classify features. The model is optimized
              using the Adam optimizer with binary cross-entropy loss,
              incorporating early stopping and model checkpointing to prevent
              overfitting. Evaluation metrics like accuracy, loss, and confusion
              matrix are used to assess performance on the testing dataset. The
              final model predicts the presence or absence of a tumor in new MRI
              images with high accuracy. This tool has the potential to assist
              medical professionals in early tumor detection and treatment
              planning, offering a significant impact on diagnosis, research,
              and education in healthcare.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2023"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<Gamepad />}
          >
            <h3 className="vertical-timeline-element-title">Tic-Tac-Toe</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Your Fun Time Buddy.
            </h4>
            <p>
              Tic-Tac-Toe is an interactive game built entirely with React,
              focusing on fast responses and an engaging user interface. The
              game offers a smooth, real-time playing experience, with players
              taking turns to place their marks on a 3x3 grid. The UI is
              designed to be visually appealing, with modern styling and
              animations that enhance user engagement. React's efficient state
              management ensures quick updates and responsiveness, providing a
              seamless experience for users. This project demonstrates my
              ability to create interactive applications with React, emphasizing
              both functionality and user experience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2021"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<Info />}
          >
            <h3 className="vertical-timeline-element-title">
              Result Management System
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Final Year Project for Diploma.
            </h4>
            <p>
              Result Management Application is a final year project
              developed using PHP, MySQL, and XAMPP. The application allows
              administrators to manage and store student results efficiently,
              offering features such as result entry, modification, and viewing
              in a user-friendly interface. The backend is powered by MySQL for
              secure and structured data storage, while PHP handles the
              server-side logic and user authentication. XAMPP was used as the
              development environment to streamline database management and
              server configuration. The project focuses on simplifying the
              result management process, making it easy for educational
              institutions to track and update student performance data.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </Box>
    </>
  );
};

export default Projects;
