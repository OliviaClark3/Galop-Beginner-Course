# Exercise 3

### Section A

Have a go at changing some things on this map with the help of the JavaScript SDK documentation

1. We want our map to be in New Zealand. Update the item id of the map so that this map displays instead (https://eaglelabs.maps.arcgis.com/home/item.html?id=a24d4c9570bf471b9cd839bdff5e6259)

Check to make sure your map is now based in New Zealand before continuing


There are many different components that we can add to our map. Documentation for all these widgets can be found on the Esri Developer website. Here is the documentation for the Map Component (https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/)

On each component documentation page, you can find a live example of the component working, the code for the component, and the properties it accepts

2. On the left of the above page, you can find documentation links to all the different components under the map-components category. Find two more components and add them to your map

Tips:
    - Make sure the components you choose will work for a map and not just a scene
    - If you are unsure, start with a basic component such as the layer list

--------

### Section B

Next we will add another feature layer to our map

1. Using this tutorial (https://developers.arcgis.com/javascript/latest/tutorials/add-a-feature-layer/), add this Nelson Huts feature layer (https://eaglelabs.maps.arcgis.com/home/item.html?id=ba05bf96c42f437799e324591ecfafbf) to your map. You will need to:
    - Import the Feature Layer module
    - Create a variable that defines the feature layer
    - Add the feature layer to the map

2. Find another NZ feature layer and add that to your map. You can source this feature layer from where ever you like, however a public layer will be easiest. Here are some places you could find a feature layer
    - ArcGIS Online
    - Marlborough open data service (https://gis.marlborough.govt.nz/server/rest/services/OpenData)
    - Layers you've used from Galop

    Hint: Think about which of the code we just wrote can be reused and which will have to be written again with the new feature layer

The layers we have added are from existing feature layers, so come with their default data and symbology. We can also add brand new feature layers to the map and add our own data and symbology through the JavaScript. We won't do that for now, but let's change some of the symbology of our existing layers.

----------

### Section C

This tutorial (https://developers.arcgis.com/javascript/latest/tutorials/style-a-feature-layer/) shows you how to create your own renderer for a feature layer. The renderer defines how the feature layer will be displayed on the map, and what symbology it will use.

We are going to change our huts symbology to an Esri web style symbol. Although this is specifically walked through in this tutorial, it may still be a useful reference

3. Choose a symbol from this page (https://developers.arcgis.com/javascript/latest/visualization/symbols-color-ramps/esri-web-style-symbols-2d/) that you want to represent your huts. Click on it to show the code for the symbol

4. Add the code for the symbol to your JavaScript file, and rename the variable

5. Create the renderer, setting the type to 'simple' and the web style symbol you just added as your symbol

6. Add the renderer to your huts feature layer

7. Now on your own, replace the symbology for the feature layer you added yourself. Be sure to choose the correct symbology type for whether it is a point, line, or polygon layer

    Bonus task: Using the Style a Feature Layer documentation from above, set the height and width of your renderer symbol