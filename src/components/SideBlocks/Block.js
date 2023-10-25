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
        justifyContent: emergeFromRight ? "flex-end" : "flex-start",
        height: isMobile ? 800 : 500,
      }}
    >
      <img
        style={{
          objectFit: isMobile ? "contain" : "cover",
          width: isMobile ? "unset" : "100%",
          transition: "margin 0.5s",
          ...(emergeFromRight
            ? { marginRight: isInViewport || alreadyEmerged ? 0 : "100vw" }
            : {
                marginLeft: isInViewport || alreadyEmerged ? 0 : "100vw",
              }),
        }}
        alt="..."
        src={info.src}
      />
    </div>
  );
};

export default Block;
