import React from "react";
import { motion } from "framer-motion";
import { Grid2, Typography } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";

const Hover3DCard = ({ skills, name }) => {
  const smallScreen = useMediaQuery("(max-width:520px)");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * -20;

    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      className="hover-3d-card"
      style={{
        maxWidth: `${smallScreen ? "25rem" : "32rem"}`,
        minHeight: "12rem",
        background: "rgba(17, 25, 40, 0.83)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: `${smallScreen ? "10px" : "18px"}`,
        fontWeight: "bold",
        borderRadius: "15px",
        cursor: "pointer",
        border: "0.8px solid rgb(48, 48, 83)",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
        overflow: "hidden",
        padding: "18px 36px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        padding={{ xs: `${smallScreen ? "0px" : "15px"}`, sm: "10px" }}
        maxWidth="100%"
        color="rgb(177, 178, 179)"
      >
        <Grid2>
          <Typography fontSize={{ xs: "25px", sm: "30px" }} fontWeight={600}>
            {name}
          </Typography>
        </Grid2>
        <Grid2
          display="flex"
          flexWrap="wrap"
          gap="10px"
          justifyContent="center"
        >
          {skills.map((eachSkill, index) => (
            <Typography
              key={index}
              sx={{
                border: "1px solid rgba(242, 243, 244, 0.5)",
                padding: "10px 18px",
                borderRadius: "5px",
                fontSize: { xs: "13px", sm: "16px" },
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {eachSkill}
            </Typography>
          ))}
        </Grid2>
      </Box>
    </motion.div>
  );
};

const Card = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ y: 150 }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        }}
      >
        <Hover3DCard skills={data.skills} name={data.name} />
      </motion.div>
    </div>
  );
};

export default Card;
