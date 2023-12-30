"use client";
import React from "react";
import BeenhereSharpIcon from "@mui/icons-material/BeenhereSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import { Button, Tooltip } from "@mui/material";
import Link from "next/link";

type ActionButtonType = {
  type: "download" | "view" | "link" | "course" | "certificate";
  action?: string;
  tooltip?: string;
};

const flexBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  margin: "2px",
  borderRadius: "50px",
};

const iconStyle = {
  fontSize: 13,
};

const RenderIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "certificate":
      return (
        <div style={{ backgroundColor: "#392F5A", ...flexBoxStyle }}>
          <BeenhereSharpIcon sx={{ color: "#FFFFFF", ...iconStyle }} />
        </div>
      );
    case "course":
      return (
        <div style={{ backgroundColor: "#F4D06F", ...flexBoxStyle }}>
          <MenuBookSharpIcon sx={{ color: "#FFFFFF", ...iconStyle }} />
        </div>
      );
    case "view":
      return (
        <div style={{ ...flexBoxStyle }}>
          <RemoveRedEyeSharpIcon sx={{ color: "#FFFFFF", ...iconStyle }} />
        </div>
      );
    case "download":
      return (
        <div style={{ backgroundColor: "#FF8811", ...flexBoxStyle }}>
          <DownloadSharpIcon sx={{ color: "#FFFFFF", ...iconStyle }} />
        </div>
      );
    default:
      break;
  }
};

const ActionButton = (props: ActionButtonType) => {
  const { type, action, tooltip = "" } = props;

  return (
    <Tooltip title={tooltip}>
      <Button
        sx={{ cursor: "pointer", minWidth: 0, padding: 0, margin: 0 }}
        // target={"_blank"}
        href={action}
        LinkComponent={Link}
      >
        <RenderIcon type={type} />
      </Button>
    </Tooltip>
  );
};

export default ActionButton;
