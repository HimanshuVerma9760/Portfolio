import { Box } from "@mui/system";
import Introduction from "./Intoduction";
import Skills from "./Skills";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        <Introduction />
        <motion.div>
          <Skills />
        </motion.div>
      </Box>
    </>
  );
};

export default MainPage;
