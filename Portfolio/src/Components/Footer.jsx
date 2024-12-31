import { IconButton, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

export default function Footer() {
  const email = "himanshu2512verma@gmail.com";
  const subject = "";
  const body = "";
  return (
    <footer
      style={{ backgroundColor: "#f8f9fa", padding: "20px 0", color: "gray" }}
    >
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Grid>
          <Grid>
            <Typography variant="h5" align="center">
              Himanshu Verma
            </Typography>
            <Typography align="center">
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/himanshu-verma-6b1042114"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://github.com/himanshuverma9760"
              >
                <GitHub />
              </IconButton>
              <IconButton
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </IconButton>
            </Typography>
          </Grid>
          <Typography color="textSecondary">
            &copy; 2024 Himanshu Verma. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
