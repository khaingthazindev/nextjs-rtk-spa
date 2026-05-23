import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Typography from "@mui/material/Typography";

interface MenuLinkProps {
  url: string;
  label: string;
}

export default function MenuLink({url, label}: MenuLinkProps) {
  return (<>
    <MenuItem
      component={Link}
      href={url}
    >
      <Typography sx={{textAlign: "center"}}>
        {label}
      </Typography>
    </MenuItem>
  </>);
}