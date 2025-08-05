var esriConfig = {
  apiKey:
    "AAPTxy8BH1VEsoebNVZXo8HurFKHGR7OAFTVnQjDIePHLSpus9E23E2CfOJzFdeNHdCqYy60gqYoD6_YjS1WkLZoH59mhdkkG2StMsOA2ApH1EcNsqmvRNVV_EBTRBrMfewQ1bvaEX1NK8kqG_s0q9atboYGAgzZF5h0dcX6MgCrMbueSY-RmiEXTYf686kWJJmelcOtIDg6n6z2wB0yevql1VWuG3IaiOIDl2TJ7jDFuLs.AT1_0qXMiN3B",
};

async function initializeMap() {
  const FeatureLayer = await $arcgis.import(
    "@arcgis/core/layers/FeatureLayer.js"
  );
  const WebStyleSymbol = await $arcgis.import(
    "@arcgis/core/symbols/WebStyleSymbol.js"
  );

  const viewElement = document.querySelector("arcgis-map");
  viewElement.addEventListener("arcgisViewReadyChange", () => {

    const hutsRenderer = {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "#5E8D74",
        outline: {
          color: "#FFFFFF",
          width: 1,
        },
        size: 10,
      },
    };

    function hutsPopupContent(feature) {
      console.log(feature);
      const defaultString =
        "This is a <b>{Category}</b> located in <b>{Area}</b>.<br/>";
      let capacityString;
      if (feature.graphic.attributes.Capacity < 6) {
        capacityString = "small";
      } else if (feature.graphic.attributes.Capacity < 12) {
        capacityString = "medium";
      } else {
        capacityString = "large";
      }
      return (
        defaultString +
        "This is a <b>" +
        capacityString +
        "</b> sized hut with a capacity of <b>" +
        feature.graphic.attributes.Capacity +
        "</b>."
      );
    }

    const hutsPopupTemplate = {
      title: "{Name}",
      content: (feature) => hutsPopupContent(feature),
    };

    const hutsLabels = {
      symbol: {
        type: "text",
        color: "#FFFFFF",
        haloColor: "#5E8D74",
        haloSize: "2px",
        font: {
          size: "12px",
          family: "Noto Sans",
          style: "italic",
          weight: "normal",
        },
      },

      labelPlacement: "above-center",
      labelExpressionInfo: {
        expression: "$feature.Name",
      },
    };

    const hutsLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Huts/FeatureServer",
      renderer: hutsRenderer,
      popupTemplate: hutsPopupTemplate,
      outFields: ["*"],
      labelingInfo: hutsLabels,
    });

    viewElement.map.add(hutsLayer);

    viewElement.addEventListener("arcgisViewDoubleClick", () => {
      console.log("double click");
      if (viewElement.map.layers.length > 1) {
        viewElement.map.remove(hutsLayer);
      } else {
        viewElement.map.add(hutsLayer);
      }
    });
  });
}

initializeMap();
