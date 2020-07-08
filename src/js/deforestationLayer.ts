import CSVLayer from "esri/layers/CSVLayer";
import { UniqueValueRenderer } from "esri/renderers";
import OpacityVariable from "esri/renderers/visualVariables/OpacityVariable";
import SizeVariable from "esri/renderers/visualVariables/SizeVariable";
// import partyCodes from "./partyCodes";
import yearCodes from "./yearCodes";
import { SimpleMarkerSymbol } from "esri/symbols";

function createSymbol(color: string) {
  return new SimpleMarkerSymbol({
    color: color,
    outline: {
      width: 0,
      color: [255, 255, 255, 0.5]
    }
  });
}

// const uniqueValueInfos = partyCodes.map(party => {
//   return {
//     value: party.field,
//     symbol: createSymbol(party.color)
//   };
// });

const uniqueValueInfos = yearCodes.map(year => {
  return {
    value: year.field,
    symbol: createSymbol(year.color)
  };
});

const renderer = new UniqueValueRenderer({
  valueExpression: "$feature.pred_party",
  defaultSymbol: createSymbol("green"),
  uniqueValueInfos,
  visualVariables: [
    new OpacityVariable({
      valueExpression: "$feature.pred_percent",
      stops: [
        // { value: 40, opacity: 0.3, label: "< 40%" },
        // { value: 70, opacity: 1.0, label: "> 70%" }
        { value: 40, opacity: 1.0, label: "< 40%" },
        { value: 70, opacity: 1.0, label: "> 70%" }
      ]
    }),
    new SizeVariable({
      valueExpression: "$feature.pred_absolute",
      minDataValue: 100,
      maxDataValue: 15000,
      // minSize: "10px",
      // maxSize: "40px"
      minSize: "40px",
      maxSize: "40px"
    })
  ]
});

const deforestationLayer = new CSVLayer({
  url: "./data/deforestation.csv",
  copyright: "Global Forest Watch",
  title: "Deforestation in Romania",
  renderer: renderer
});

export default deforestationLayer;
