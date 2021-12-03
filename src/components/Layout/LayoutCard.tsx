import React from "react";
import { CustomCard, CustomCardHeader } from "./LayoutStyle";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

const CustomAuthor = styled.div`
  font-size: 24px;
`;

const CustomQuote = styled.div`
  font-size: 24px;
  margin-top: 10px;
`;

const CustomCardContent = styled(CardContent)`
  width: 80%;
  margin: auto;
  text-align: center;
	font-style: italic;
`;

const LayoutCard = ({ title, content }) => {
  return (
    <CustomCard>
      <CustomCardHeader title={title}></CustomCardHeader>
      <CustomCardContent>
        <CustomAuthor>{content?.author}</CustomAuthor>
        <CustomQuote>{content?.quote}</CustomQuote>
      </CustomCardContent>
    </CustomCard>
  );
};

export default LayoutCard;
