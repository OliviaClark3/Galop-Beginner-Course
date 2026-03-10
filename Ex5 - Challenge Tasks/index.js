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
  viewElement.addEventListener("arcgisViewReadyChange", () => {

    const campSitesRenderer = {
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
      return (
        contentString +
        "This campsite has <b>" +
        spacesAvailableString +
        "</b> availability with <b>" +
        feature.graphic.attributes.SpacesAvailable +
        "</b> spaces available."
      );
    }

    const campSitesPopupTemplate = {
      title: "{Name}",
      content: (feature) => campingSitesPopupContent(feature),
    };

    const campSitesLabels = {
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

    const campSitesLayer = new FeatureLayer({
      url: "https://gis.marlborough.govt.nz/server/rest/services/OpenData/OpenData2/MapServer/8",
      renderer: campSitesRenderer,
      popupTemplate: campSitesPopupTemplate,
      outFields: ["*"],
      labelingInfo: campSitesLabels,
    });

    viewElement.map.add(campSitesLayer);

    viewElement.addEventListener("arcgisViewDoubleClick", () => {
      console.log("double click");
      if (viewElement.map.layers.length > 1) {
        viewElement.map.remove(campSitesLayer);
      } else {
        viewElement.map.add(campSitesLayer);
      }
    });
  });
}

initialiseMap();
