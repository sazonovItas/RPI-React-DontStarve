import React from "react";

export interface ErrorPageProps {
  Title: string;
  SubTitle: string;
  Description: string;
  Img: string;
  BackImg: string;
  children?: React.ReactNode;
}
