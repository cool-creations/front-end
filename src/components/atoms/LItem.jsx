import React from "react";
import ListItemText from "@material-ui/core/ListItemText";

import { ListItem } from "@material-ui/core";

const LItem = ({ text, onClick }) => {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};

export default LItem;
