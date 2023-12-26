import skill_badges from "@/app/store/skill_badges";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const SkillBadges = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {skill_badges.map((badge, index) => {
        return (
          <>
            <Tooltip title={badge?.name}>
              <Box sx={{ marginRight: 2 }} key={index}>
                <img width={"100%"} src={badge?.icon} />
              </Box>
            </Tooltip>
          </>
        );
      })}
      <Box>
        <Tooltip title={"Learning more . . . "}>
          <CircularProgress size={30} />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SkillBadges;
