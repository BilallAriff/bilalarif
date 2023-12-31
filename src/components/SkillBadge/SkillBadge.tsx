import skill_badges from "@/app/store/skill_badges";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const SkillBadge = ({ name, tooltip }: { name: string; tooltip?: string }) => {
  const Icon = (): string => {
    switch (name) {
      case "bootstrap":
        return "/skillbadges/bootstrap_round.png";
      case "css":
        return "/skillbadges/css_round.png";
      case "expressjs":
        return "/skillbadges/express_round.png";
      case "html":
        return "/skillbadges/html_round.png";
      case "javascript":
        return "/skillbadges/javascript_round.png";
      case "materialui":
        return "/skillbadges/material_ui_round.png";
      case "nestjs":
        return "/skillbadges/nestjs_round.png";
      case "nodejs":
        return "/skillbadges/nodejs_round.png";
      case "react":
        return "/skillbadges/react_round.png";
      case "tailwindCSS":
        return "/skillbadges/tailwindcss_round.png";
      case "mysql":
        return "/skillbadges/mysql_round.png";
      case "postgresssql":
        return "/skillbadges/postgress_round.png";
      case "mongodb":
        return "/skillbadges/mongodb_round.png";
      case "figma":
        return "/skillbadges/figma_round.png";
      case "adobexd":
        return "/skillbadges/xd_round.png";
      case "ui":
        return "/skillbadges/ui_round.png";
      case "ux":
        return "/skillbadges/ux_round.png";
      case "jira":
        return "/skillbadges/jira_round.png";
      case "agile Project Development":
        return "/skillbadges/agile_round.png";
      default:
        return "";
    }
  };

  return (
    <Box>
      <Tooltip title={tooltip ? tooltip : name}>
        <Box>
          <img width={"100%"} alt={name} src={`${Icon()}`} />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default SkillBadge;
