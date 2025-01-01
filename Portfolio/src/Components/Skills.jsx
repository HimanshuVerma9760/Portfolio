import { Grid2, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from "./Card";
import {
  Api,
  Css,
  DataObject,
  EnhancedEncryption,
  GitHub,
  Html,
  Javascript,
} from "@mui/icons-material";
import {
  FaBootstrap,
  FaDatabase,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiRender,
  SiSession,
  SiSocketdotio,
  SiSqlite,
} from "react-icons/si";
import { SiMaterialdesign as SiMaterialUi } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { DiVisualstudio } from "react-icons/di";

export default function Skills() {
  const frontend = {
    name: "Frontend",
    skills: [
      { skill: "HTML5", icon: <Html /> },
      { skill: "CSS3", icon: <Css /> },
      { skill: "JavaScript (ES6+)", icon: <Javascript /> },
      { skill: "React.js", icon: <FaReact /> },
      { skill: "Redux-Toolkit", icon: <SiRedux /> },
      { skill: "React Router", icon: <SiReactrouter /> },
      { skill: "Material-UI (MUI)", icon: <SiMaterialUi /> },
      { skill: "Bootstrap", icon: <FaBootstrap /> },
      { skill: "Framer Motion", icon: <FiFramer /> },
      { skill: "CryptoJs", icon: <EnhancedEncryption /> },
    ],
  };
  const backend = {
    name: "Backend",
    skills: [
      { skill: "Node.js", icon: <FaNodeJs /> },
      { skill: "Express.js", icon: <SiExpress /> },
      { skill: "MongoDB", icon: <SiMongodb /> },
      { skill: "Mongoose", icon: <SiMongoose /> },
      { skill: "REST APIs", icon: <Api /> },
      { skill: "JWT (JSON Web Token)", icon: <SiJsonwebtokens /> },
      { skill: "Session and Cookies", icon: <SiSession /> },
      { skill: "Socket.IO", icon: <SiSocketdotio /> },
      { skill: "Bcrypt.js", icon: <EnhancedEncryption /> },
      { skill: "MVC Architechture", icon: <FaNodeJs /> },
    ],
  };

  const More = {
    name: "Other",
    skills: [
      { skill: "Java", icon: <FaJava /> },
      { skill: "Data Structures", icon: <DataObject /> },
      { skill: "Algorithims", icon: <FaDatabase /> },
      { skill: "Deployment", icon: <AiOutlineDeploymentUnit /> },
      { skill: "Postman", icon: <SiPostman /> },
      { skill: "My Sql Server", icon: <SiSqlite /> },
      { skill: "VS Code", icon: <DiVisualstudio /> },
      { skill: "Netlify", icon: <SiNetlify /> },
      { skill: "Render", icon: <SiRender /> },
      { skill: "GitHub", icon: <GitHub /> },
    ],
  };

  return (
    <>
      <Box>
        <Grid2
          display="flex"
          flexDirection="column"
          gap={{ xs: "2rem", sm: "5rem" }}
        >
          <Grid2>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "45px", sm: "52px" } }}
              align="center"
              marginBottom="1rem"
              fontWeight={700}
            >
              Skills
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "gray", fontSize: { xs: "16px", sm: "22px" } }}
            >
              Here is the collection of my skills, I have been working and have
              Expertise on!
            </Typography>
          </Grid2>
          <Grid2>
            <Grid2 container alignContent="center" justifyContent="center">
              <Card data={frontend} />
              <Card data={backend} />
              <Card data={More} />
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
