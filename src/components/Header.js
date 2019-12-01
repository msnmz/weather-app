import React from "react";
import Typography from "@material-ui/core/Typography";

function Header(props) {
  return (
    <Typography variant="h1" component="h2" align="center" paragraph>
      {props.title}
    </Typography>
  );
}

export default Header;
