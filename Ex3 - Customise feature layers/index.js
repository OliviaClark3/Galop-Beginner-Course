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

    const hutSymbol = new WebStyleSymbol({
      name: "Turtle",
      styleUrl:
        "https://cdn.arcgis.com/sharing/rest/content/items/1fbb242c54e4415d9b8e8a343ca7a9d0/data",
    });

    const hutsRenderer = {
      type: "simple",
      symbol: hutSymbol,
    };

    const hutsLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Huts/FeatureServer",
      renderer: hutsRenderer,
    });

    viewElement.map.add(hutsLayer);
  });
}

initializeMap();
