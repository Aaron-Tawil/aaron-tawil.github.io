import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../static/favicon3.png";
import { useLocation } from "react-router-dom";
import { links } from "./links";
import { taglines } from "./taglines";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  const cvUrl = `${process.env.PUBLIC_URL || ''}/cv/Aaron-Tawil-CV.pdf`;
  const [taglineIndex, setTaglineIndex] = useState<number>(() =>
    Math.floor(Math.random() * Math.max(taglines.length, 1))
  );
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  useEffect(() => {
    if (taglines.length <= 1) return;
    const id = window.setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
        <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ width: 140, height: "auto", flexShrink: 0 }}
            />
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="h3">{process.env.REACT_APP_NAME}</Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {taglines[taglineIndex] || ""}
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Stack direction="row" spacing={0.4}>
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              sx={{ mt: 1.5 }}
            >
              <Tooltip title="Opens PDF in a new tab" arrow>
                <Button
                  variant="contained"
                  color="primary"
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<PictureAsPdfOutlinedIcon />}
                >
                  Download CV
                </Button>
              </Tooltip>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
