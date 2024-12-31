import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Engineering,
  FormatListBulleted,
  Inbox,
  Info,
  ListAltOutlined,
  Mail,
  MilitaryTech,
  School,
  Work,
} from "@mui/icons-material";
import { useState } from "react";
export default function Header() {
  const links = [
    { name: "About", icon: <Info /> },
    { name: "Skills", icon: <MilitaryTech /> },
    { name: "Experience", icon: <Work /> },
    { name: "Projects", icon: <Engineering /> },
    { name: "Education", icon: <School /> },
  ];
  const smallScreen = useMediaQuery("(min-width:1090px)");
  const XSmallScreen = useMediaQuery("(max-width:360px)");
  const largerScreen = useMediaQuery("(max-width:1288px)");

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {links.map((link, index) => (
          <ListItem key={index}>
            <ListItemButton sx={{ color: "gray" }}>
              <Typography textAlign="center" sx={{display:'flex', gap:'3rem'}}>
                {link.icon}
                {link.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
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
            gap: "10rem",
            padding: "2rem",
            left: `${largerScreen ? "0rem" : "12rem"}`,
            alignItems: "center",
            maxHeight: "5rem",
          }}
        >
          <Typography variant="h5" fontSize={{xs:XSmallScreen?"12px":"15px",sm:"25px"}} fontWeight={700}>
            Himanshu Verma
          </Typography>
          {smallScreen ? (
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                fontWeight: "500",
              }}
            >
              {links.map((eachLink) => (
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <motion.div whileHover={{ color: "blue" }}>
                    {eachLink.name}
                  </motion.div>
                </Link>
              ))}
            </Typography>
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
