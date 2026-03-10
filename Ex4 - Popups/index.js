async function initialiseMap() {
    const esriConfig = await $arcgis.import("@arcgis/core/config.js");
    esriConfig.apiKey =
      "AAPTa8r5Ol6QhzgeUeeZ-ONX_Vg..NJLv-_HO_DGZMIW2-oguK0yT-GLIOlTyMEW4boC8XPt3HT1xlKcXlQdIUlKBgIb43okwMMPYSwIQqFRlmpGwCIZ6X3_5JTmhwRnDFLjhkLEYwAI7yA1XHgi2nE4qpv1lmJjYR4GuVUgOopt04yeTLvic3HJjfKKf4dg8NAmMtPaSdJkI1KgOdRDogX9tlfrM_5_5e5ONUtXOBW-eowqwMK6ZV5MRU1HyGdlJLuifBf0vOBcSC4lyB1UJAT1_sThPbpJe";

  const FeatureLayer = await $arcgis.import(
    "@arcgis/core/layers/FeatureLayer.js"
  );
  const WebStyleSymbol = await $arcgis.import(
    "@arcgis/core/symbols/WebStyleSymbol.js"
  );

  const viewElement = document.querySelector("arcgis-map");
  await viewElement.viewOnReady();
  // viewElement.addEventListener("arcgisViewReadyChange", () => {

    const campSitesSymbol = new WebStyleSymbol({
      name: "Elephant",
      styleUrl:
        "https://cdn.arcgis.com/sharing/rest/content/items/1fbb242c54e4415d9b8e8a343ca7a9d0/data",
    });

    const campSitesRenderer = {
      type: "simple",
      symbol: campSitesSymbol,
    };

    function campingSitesPopupContent(feature) {
      console.log(feature);
      const contentString =
        "This is a <b>{Type}</b> campsite. Link: {HyperLink}<br/>";
      let spacesAvailableString;
      if (feature.graphic.attributes.SpacesAvailable < 6) {
        spacesAvailableString = "small";
      } else if (feature.graphic.attributes.SpacesAvailable < 20) {
        spacesAvailableString = "typical";
      } else {
        spacesAvailableString = "large";
      }
      return contentString + "This campsite has <b>" + spacesAvailableString + "</b> availability with <b>" + feature.graphic.attributes.SpacesAvailable + "</b> spaces available.";
    }

    const campSitesPopupTemplate = {
      title: "{Name}",
      content: (feature) => campingSitesPopupContent(feature),
    };

    const campSitesLayer = new FeatureLayer({
      url: "https://gis.marlborough.govt.nz/server/rest/services/OpenData/OpenData2/MapServer/8",
      renderer: campSitesRenderer,
      popupTemplate: campSitesPopupTemplate,
      outFields: ["*"],
    });

    viewElement.map.add(campSitesLayer);
  // });
}

initialiseMap();
