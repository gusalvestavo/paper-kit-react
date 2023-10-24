import React, { useEffect, useRef, useState } from "react";
import { useIsInViewport } from "../../hooks/useIsInViewport";

const Block = ({ info, emergeFromRight }) => {
  const [alreadyEmerged, setAlreadyEmerged] = useState(false);

  const blockRef = useRef();
  const isInViewport = useIsInViewport(blockRef);

  useEffect(() => {
    if (isInViewport) {
      setAlreadyEmerged(true);
    }
  }, [isInViewport]);

  return (
    <div
      ref={blockRef}
      style={{
        overflow: "hidden",
        height: 500,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          transition: "margin 1s",
          ...(emergeFromRight
            ? { marginLeft: isInViewport || alreadyEmerged ? 0 : "-100vw" }
            : { marginLeft: isInViewport || alreadyEmerged ? 0 : "100vw" }),
        }}
        alt="..."
        src={require("assets/img/examples/product-line.jpg")}
      />
    </div>
  );
};

export default Block;
