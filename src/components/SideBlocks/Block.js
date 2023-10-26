import React, { useEffect, useRef, useState } from "react";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { isMobile } from "react-device-detect";

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
        display: "flex",
        position: "relative",
        justifyContent: emergeFromRight ? "flex-end" : "flex-start",
        height: isMobile ? 800 : 500,
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "white",
          height: "inherit",
          transition: "width 1s",
          width: isInViewport || alreadyEmerged ? 0 : "100%",
        }}
      ></div>
      <img
        style={{
          objectFit: isMobile ? "contain" : "cover",
          width: isMobile ? "unset" : "100%",
        }}
        alt="..."
        src={info.src}
      />
    </div>
  );
};

export default Block;
