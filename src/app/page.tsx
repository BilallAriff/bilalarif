import ParticlesComponent from "@/components/Particles/Particles.js";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { aboutMe } from "./store/about_me";
import DownloadResume from "@/components/DownloadResume/DownloadResume";

export default function Home() {
  return (
    <Box className={"full-screen flex-all-center flex-column"}>
      <Box sx={{ paddingX: 15 }}>
        <Box>
          <Typography textAlign={"center"} className="hero-heading">
            {aboutMe.title}
          </Typography>
          <Typography textAlign={"center"} className="hero-sub-heading">
            {aboutMe.subTitle}
          </Typography>
          <Typography mt={5} textAlign={"center"} className="paragraph">
            {aboutMe.description}
          </Typography>
        </Box>
        <Box mt={5} className="flex-all-center">
          <DownloadResume />
        </Box>
      </Box>
    </Box>
  );
}
