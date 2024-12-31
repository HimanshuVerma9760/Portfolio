import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ContactMail,
  Engineering,
  FormatListBulleted,
  Info,
  MilitaryTech,
  School,
} from "@mui/icons-material";
import { useState } from "react";
import { Grid } from "@mui/system";
export default function Header() {
  const links = [
    { name: "About", icon: <Info />, link: "#introduction" },
    { name: "Skills", icon: <MilitaryTech />, link: "#skills" },
    { name: "Projects", icon: <Engineering />, link: "#projects" },
    { name: "Education", icon: <School />, link: "#education" },
    { name: "Contact", icon: <ContactMail />, link: "#footer" },
  ];
  const smallScreen = useMediaQuery("(min-width:1090px)");
  const XSmallScreen = useMediaQuery("(max-width:360px)");

  const [toggleDrawer, setToggleDrawer] = useState(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {links.map((link, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={() => setToggleDrawer(false)}>
              <Typography align="center">
                <a
                  href={link.link}
                  style={{
                    display: "flex",
                    gap: "3rem",
                    color: "gray",
                    textDecoration: "none",
                  }}
                >
                  {link.icon}
                  {link.name}
                </a>
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
            gap: "1.5rem",
            padding: "2rem",
            alignItems: "center",
            maxHeight: "5rem",
            justifyContent: `${smallScreen ? "space-evenly" : "space-between"}`,
          }}
        >
          <Typography
            fontSize={{ xs: XSmallScreen ? "12px" : "15px", sm: "25px" }}
            fontWeight={700}
          >
            Himanshu Verma
          </Typography>
          {smallScreen ? (
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                fontWeight: "500",
                fontSize: "1.3rem",
              }}
            >
              {links.map((eachLink) => (
                <a
                  href={eachLink.link}
                  style={{ textDecoration: "none", color: "white" }}
                  key={Math.random()}
                >
                  <motion.div whileHover={{ color: "rgb(0, 102, 204)" }}>
                    {eachLink.name}
                  </motion.div>
                </a>
              ))}
            </Grid>
          ) : (
            <>
              <IconButton onClick={() => setToggleDrawer(true)}>
                <FormatListBulleted sx={{ color: "whitesmoke" }} />
              </IconButton>
              <Drawer
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
              >
                {DrawerList}
              </Drawer>
            </>
          )}
          {smallScreen && (
            <Typography
              component={Link}
              to="https://github.com/himanshuverma9760"
              target="_blank"
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
          )}
        </AppBar>
      </Box>
    </>
  );
}
