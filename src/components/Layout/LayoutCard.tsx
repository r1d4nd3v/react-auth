import React from "react";
import { CustomCard, CustomCardHeader } from "./LayoutStyle";
import CardContent from "@mui/material/CardContent";

const LayoutCard = ({title, content}) => {
  return (
    <CustomCard>
      <CustomCardHeader title={title}></CustomCardHeader>
      <CardContent>{content}</CardContent>
    </CustomCard>
  );
};

export default LayoutCard;
