import { styled } from "@mui/material";
import React from "react";

const NavListItem = (props: any) => {
  const { children, fontSize } = props;

  const Nav_ListItem = styled("li")({
    // border: "1px solid red",
    fontSize: fontSize ? fontSize : "",
    listStyle: "none",
    cursor: "pointer",
    marginLeft: 5,
    marginRight: 5,
  });

  return <Nav_ListItem>{children}</Nav_ListItem>;
};

export default NavListItem;
