import { Grid2, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from "./Card";

export default function Skills() {
  const frontend = {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Redux-Toolkit",
      "React Router",
      "Material-UI (MUI)",
      "Bootstrap",
      "Tailwind CSS",
      "Framer Motion",
      "CryptoJs",
      "Fetch API",
    ],
  };
  const backend = {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT (JSON Web Token)",
      "Session and Cookies",
      "Socket.IO",
      "Bcrypt.js",
      "MVC Architechture",
    ],
  };

  const More = {
    name: "Other",
    skills: [
      "Java",
      "Data Structures",
      "Algorithims",
      "Deployment",
      "Postman",
      "My Sql Server",
      "VS Code",
      "Netlify",
      "Render",
      "GitHub",
    ],
  };

  return (
    <>
      <Box>
        <Grid2 display="flex" flexDirection="column" gap={{xs:'2rem',sm:"5rem"}}>
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
