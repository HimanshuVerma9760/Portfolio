import { Box } from "@mui/system";
import Introduction from "./Intoduction";
import Skills from "./Skills";
import { motion } from "framer-motion";
import Studies from "./Studies";
import Projects from "./Projects";
import Footer from "./Footer";
import Header from "./Header";

const MainPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        overflow: "hidden",
        padding: { sm: "0px", xs: "20px" },
      }}
    >
      <section>
        <Header />
      </section>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Studies />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </Box>
  );
};

export default MainPage;
