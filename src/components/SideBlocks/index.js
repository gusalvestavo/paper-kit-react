import React from "react";
import Block from "./Block";

const blocks = [
  {
    title: "Titulo A",
    caption: "Descrição do bloco A",
    img: "assets/img/examples/product-line.jpg",
  },
  {
    title: "Titulo B",
    caption: "Descrição do bloco B",
    img: "assets/img/examples/product-line.jpg",
  },
];

const SideBlocks = () =>
  blocks.map((block, index) => (
    <Block info={block} emergeFromRight={index % 2 === 1} />
  ));

export default SideBlocks;
