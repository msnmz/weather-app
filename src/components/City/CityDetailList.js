import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

function CityDetailList(props) {
  return (
    <List>
      {props.details.map((detail, idx, details) => (
        <Container key={"city_detail_" + idx}>
          <ListItem>
            <ListItemText
              primary={detail.name}
              secondary={
                <Typography variant="body2" component="h3">
                  {detail.value}
                </Typography>
              }
            />
          </ListItem>
          {idx < details.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </Container>
      ))}
    </List>
  );
}

export default CityDetailList;
