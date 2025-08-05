# Exercise 5

Using the skills you have learnt today, try out these challenges on your own

If something is not working, try using Ctrl+Shift+I in the browser to pull up the console where errors may show

Use google and ask questions when needed!

### Challenge Task 1

Make it so that when you double click the map, if the huts layer is on the map then remove it, and if the huts layer is not on the map then add it

Try this out yourself from scratch, or follow the steps below to help

1. Find the map event that will allow you to recognise a double click (https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/)

2. Add an event listener to listen for this event to your JavaScript. This should only happen once the map view is ready

3. Use the view element to find the number of layers in the map (look at the map property of the viewElement)

4. Assuming your map has three layers (trails, huts, and the extra one you added), use an if/else statement to check if the number of layers is equal to 3

5. If the number of layers is 3, remove the huts layer from the map. Else add the huts layer to the map
    - Find the map property in the map component documentation and click on the Map type (https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/#properties)
    - Look at the methods in the Map documentation to find the method to remove a layer like how we added layers

-------

### Challenge Task 2

Add a header to your website. This should be a bar across the top of the webpage with a title in it, with the map sitting below

1. Create a div in your HTML above the arcgis-map and give it a relevant id

2. Add some text in your header div to give your webpage a title

3. In the CSS, give the div and the arcgis-map appropriate heights, e.g. header div height of 5% and arcgis map height of 95%. Adjust these if needed

4. You may notice that your webpage now has a scroll bar, we can better set the placement of components using flex. Give the body element a display type of flex and a flex direction of column

5. Add some other styles to your header to improve how it looks

------

### Challenge Task 3

Using this tutorial from earlier (https://developers.arcgis.com/javascript/latest/tutorials/style-a-feature-layer/) update the huts symbol to be a symbol of type simple-marker, and add labels the the huts layer which show the name of the hut