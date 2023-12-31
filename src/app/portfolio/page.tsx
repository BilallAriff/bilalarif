"use client";
import CommingSoon from "@/components/CommingSoon/CommingSoon";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { portfolios } from "../store/portfolio";
import Link from "next/link";
import SkillBadges from "@/components/SkillBadges/SkillBadges";
import SkillBadge from "@/components/SkillBadge/SkillBadge";

const page = () => {
  return (
    <Box className="flex-all-center" sx={{ flexDirection: "column" }}>
      <Typography mt={5} variant={"h3"}>
        Portfolio
      </Typography>
      <Box>
        {portfolios?.map((portfolio, index) => {
          return (
            <>
              <Box className={"flex-row-center width-100 portfolio-card"}>
                <Box className="portfolio-card-image-container">
                  <img width="200px" src={portfolio?.image} />
                </Box>
                <Box className="portfolio-card-body" sx={{ marginLeft: 2 }}>
                  <Button
                    variant={"text"}
                    href={portfolio?.link}
                    target={"_blank"}
                    LinkComponent={Link}
                    sx={{
                      fontSize: 32,
                      fontWeight: 400,
                      padding: 0,
                      textTransform: "none",
                    }}
                  >
                    {portfolio?.title}
                  </Button>
                  <Typography sx={{ fontSize: 18, color: "#000000" }}>
                    {portfolio?.sub_description}
                  </Typography>
                  <Typography sx={{ fontSize: 16, color: "#0000006a" }}>
                    {portfolio?.description}
                  </Typography>
                  <Box className={"flex-center-justify-between"}>
                    <Typography sx={{ fontSize: 14, mt: 2 }} key={index}>
                      {portfolio?.skills.map((skill, index) => {
                        return `${skill}${
                          index + 1 === portfolio?.skills?.length ? "" : ", "
                        }`;
                      })}
                    </Typography>
                    <Typography
                      sx={{
                        borderRadius: "50px",
                        paddingX: 5,
                        paddingY: 0.5,
                        fontWeight: 600,
                        fontSize: 18,
                        backgroundColor: "#F0F3BD",
                      }}
                    >
                      {portfolio?.company}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default page;
