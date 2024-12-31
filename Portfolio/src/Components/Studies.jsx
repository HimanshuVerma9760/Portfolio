import { School, Star, Work } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Grid, useMediaQuery } from "@mui/system";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Studies = () => {
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
          <Typography fontSize={smallScreen ? "52px" : "45px"} fontWeight={700}>
            Education
          </Typography>
          <Typography
            fontSize={!smallScreen ? "16px" : "22px"}
            color="rgb(177, 178, 179)"
            fontWeight={400}
          >
            My educational journey has been one of continuous learning and
            development. Here are the key milestones of my academic path.
          </Typography>
        </Grid>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2021 - 2024"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dehradun, Uttarakhand
            </h4>
            <p>
              During my B.Tech at DIT University, I honed my expertise in core
              computer science concepts, including data structures, algorithms,
              database management, and software engineering. I gained hands-on
              experience with modern technologies like the MERN stack, React.js,
              Node.js, and MongoDB, and explored fields like cloud computing and
              system design. Through academic projects and practical
              assignments, I enhanced my problem-solving skills, developed
              scalable web applications, and collaborated effectively in
              team-based environments, preparing myself for the demands of the
              tech industry.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2018 - 2021"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
              Government Polytechnic College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pithuwala, Dehradun
            </h4>
            <p>
              During my time at Government Polytechnic College, I built a solid
              foundation in core technical subjects, including programming
              fundamentals, computer networks, and hardware concepts. I gained
              hands-on experience with C++, php, sql and Java programming, which
              helped me understand the principles of software development.
              Practical lab sessions and projects enhanced my skills in
              debugging, troubleshooting, and system analysis. This phase of my
              education also introduced me to the basics of database management
              and operating systems, providing a well-rounded technical base for
              further studies in computer science and engineering.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(17, 25, 40, 0.83)",
              color: "rgb(177, 178, 179)",
            }}
            date="2016 - 2018"
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "white",
            }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
              Class 11th - 12th
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shri Guru Ram Rai Public School, Dehradun
            </h4>
            <p>
              From Class 11th to 12th, my academic journey was enriched by a
              strong focus on computer science and programming. Opting for
              Computer Science in Classes 11th and 12th, I delved into the
              basics of Data Structures and Algorithms (DSA) using Java, which
              laid the groundwork for my problem-solving and logical thinking
              skills. Alongside mastering core subjects like Physics, Chemistry,
              and Mathematics, I developed an interest in programming concepts
              such as object-oriented programming, recursion, and basic
              algorithmic strategies. This early exposure to computational
              thinking, combined with hands-on coding practice, played a
              significant role in shaping my technical aptitude and passion for
              software development.
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

export default Studies;
