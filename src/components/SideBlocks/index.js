import React, { Fragment } from "react";
import Block from "./Block";

const SideBlocks = ({ sideblockItems }) => (
  <Fragment>
    <div style={{ height: 112, textAlign: "center", alignItems: "center" }}>
      <h2>Conheça nossas linhas de produtos</h2>
    </div>
    {sideblockItems.map((block, index) => (
      <Block key={block.key} info={block} emergeFromRight={index % 2 === 0} />
    ))}
  </Fragment>
);

export default SideBlocks;
