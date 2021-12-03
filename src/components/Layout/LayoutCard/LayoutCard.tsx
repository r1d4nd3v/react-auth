import React from "react";
import { CustomCard, CustomCardHeader } from "../LayoutStyle";
import {
  CustomCardUser,
  CustomCardQuote,
  CustomQuote,
} from "./LayoutCardStyle";

const LayoutCard = ({ page, content, user }) => {
  return (
    <CustomCard>
      <CustomCardHeader
        title={page === "dashboard" ? "Secret Dashboard" : "Settings"}
      ></CustomCardHeader>
      {page === "dashboard" ? (
        <CustomCardUser>{user}</CustomCardUser>
      ) : (
        <CustomCardQuote>
          <div>{content?.author}</div>
          <CustomQuote>{content?.quote}</CustomQuote>
        </CustomCardQuote>
      )}
    </CustomCard>
  );
};

export default LayoutCard;
