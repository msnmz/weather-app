import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

function CityDetailList(props) {
  return (
    <List>
      {props.details.map((detail, idx) => (
        <ListItem key={"city_detail_" + idx}>
          <ListItemText
            primary={detail.name}
            secondary={
              <Typography variant="body2" component="span">
                {detail.value}
              </Typography>
            }
          />
          <Divider variant="inset" component="li" />
        </ListItem>
      ))}
    </List>
  );
}

export default CityDetailList;
