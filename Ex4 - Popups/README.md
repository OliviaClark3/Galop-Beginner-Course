# Exercise 4

### Section A

Try clicking on some features on you map. You may notice that the trails layer that was originally in the web map has a popup, but the layers you have added through our code doesn't have popups. This is because the trails was configured in the web map from ArcGIS Online, but the huts and the other layer you added were configured in our code, where we haven't added any popup configuration

1. Use this tutorial (https://developers.arcgis.com/javascript/latest/tutorials/display-a-pop-up/) to add a popup with text to the huts layer. You will need to:
    - Create the popup template
    - Look at the huts feature service (https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Huts/FeatureServer) to see what the field names are to use in the popup
    - Add the popup template to the feature layer

2. Have a go at adding a popup template to the layer you added to the map. Look at the layers feature server to see what the fields are to add into the popup

--------

### Section B

We are now going to try something a bit more complicated by making the popup template content change depending on whether there are any facilities in the data for the hut

1. Create a function called hutsPopupContent that takes one arguement

2. Using an if/else statement, output whether the hut is small, medium, or large depending on the capacity

3. From the function, return an html formated string with the original text content plus a new sentence with a variable capacity statement

4. Change the popup template content to instead call the function