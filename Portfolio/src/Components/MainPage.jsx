import { Box } from "@mui/system";
import Introduction from "./Intoduction";
import Skills from "./Skills";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          overflow: "hidden",
          padding: { sm: "0px", xs: "20px" },
        }}
      >
        <Introduction />
        <Skills />
      </Box>
    </>
  );
};

export default MainPage;
