import ParticlesComponent from "@/components/Particles/Particles.js";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { aboutMe } from "./store/about_me";
import DownloadResume from "@/components/DownloadResume/DownloadResume";
import SocialContacts from "@/components/SocialContacts/SocialContacts";
import BusinessLogos from "@/components/BusinessLogos/BusinessLogos";
import PulsatingButton from "@/components/PulsatingButton/PulsatingButton";
import SkillBadges from "@/components/SkillBadges/SkillBadges";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

export default function Home() {
  return (
    <Box className={"full-screen flex-all-center flex-column"}>
      <LoadingScreen />
      <Box sx={{ paddingX: 15 }}>
        <Box>
          <Typography textAlign={"center"} className="hero-heading">
            {aboutMe.title}
          </Typography>
          <Box my={2} className="flex-all-center">
            <SocialContacts variant="color" hoverEffect />
          </Box>
          <Typography textAlign={"center"} className="hero-sub-heading">
            {aboutMe.subTitle}
          </Typography>
          <Box my={2}>
            <SkillBadges />
          </Box>
          <Box my={2}>
            <BusinessLogos />
          </Box>
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
