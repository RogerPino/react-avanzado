import React from "react";
import { Image, Anchor } from "./styles";
const DEFAULT_IMAGE = "https://imgur.com/dJa0Hpl";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);