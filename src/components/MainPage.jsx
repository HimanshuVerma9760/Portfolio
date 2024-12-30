import { Box } from "@mui/system";
import Introduction from "./Intoduction";
import Skills from "./Skills";

const MainPage = () => {
  return (
    <>
      <Box sx={{display:'flex', flexDirection:'column', gap:'4rem'}}>
        <Introduction />
        <Skills />
      </Box>
    </>
  );
};

export default MainPage;
