import { AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fontWeight } from "@mui/system";
export default function Header() {
  const links = ["About", "Skills", "Experience", "Projects", "Education"];
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <AppBar
          sx={{
            backgroundColor: "rgb(10, 10, 15)",
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
            gap: "10rem",
            padding: "2rem",
            left: "12rem",
            alignItems: "center",
            maxHeight:"5rem"
          }}
        >
          <Typography variant="h5" fontWeight={700}>Himanshu Verma</Typography>
          <Typography
            variant="h6"
            sx={{ display: "flex", flexDirection: "row", gap: "1rem", fontWeight:"500"}}
          >
            {links.map((eachLink) => (
              <Link style={{ textDecoration: "none", color: "white" }}>
                <motion.div whileHover={{ color: "blue" }}>
                  {eachLink}
                </motion.div>
              </Link>
            ))}
          </Typography>
          <Typography
            component={Link}
            to="https://github.com/himanshuverma9760"
            sx={{
              textDecoration: "none",
              color: "rgb(88, 88, 249)",
              borderRadius: "2rem",
              border: "1.8px solid rgb(88, 88, 249)",
              padding: "0.5rem 1rem",
              fontSize: "16px",
              ":hover": {
                backgroundColor: "rgb(88, 88, 249)",
                color: "white",
                transition: "0.3s",
              },
            }}
            align="center"
          >
            GitHub Profile
          </Typography>
        </AppBar>
      </Box>
    </>
  );
}

{
  /* <motion.div> */
}
{
  /* <Link
                to="https://github.com/himanshuverma9760"
                style={{
                  textDecoration: "none",
                  color: "rgb(88, 88, 249)",
                  borderRadius: "2rem",
                  border: "1.8px solid rgb(88, 88, 249)",
                  padding: "1rem",
                  fontSize: "16px",
                }}
              >
                Github Profile
              </Link> */
}
{
  /* </motion.div> */
}
