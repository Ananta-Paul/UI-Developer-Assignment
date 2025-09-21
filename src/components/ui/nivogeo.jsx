import { ResponsiveChoropleth } from "@nivo/geo";
import { React, useEffect, useState } from "react";
import countries from "./world_countries.json";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveChoropleth = ({ data /* see data tab */ }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      setContainerWidth(container.clientWidth);
    }
    const handleResize = () => {
      setContainerWidth(
        parseInt(document.getElementById("container").clientWidth)
      );
      console.log("cw", document.getElementById("container").clientWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const ps = containerWidth / (2 * Math.PI);
  return (
    <div id="container" className=" w-[150px] h-[90px]">
      <ResponsiveChoropleth
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        projectionScale={ps}
        colors="nivo"
        domain={[0, 1000000]}
        projectionTranslation={[0.5, 0.65]}
        unknownColor="#cecfcf"
        label="properties.name"
        valueFormat=".2s"
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
      />
    </div>
  );
};
