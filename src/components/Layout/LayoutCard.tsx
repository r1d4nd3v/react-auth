import React from "react";
import { CustomCard, CustomCardHeader } from "./LayoutStyle";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

const CustomImage = styled.img`
  height: 500px;
  width: 500px;
  display: flex;
  margin: auto;
`;

const LayoutCard = ({ title, content }) => {
  console.log("content", content);
  return (
    <CustomCard>
      <CustomCardHeader title={title}></CustomCardHeader>
      <CardContent>
        {content && <CustomImage src={content} alt="" />}
      </CardContent>
    </CustomCard>
  );
};

export default LayoutCard;
