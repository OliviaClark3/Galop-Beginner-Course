# Exercise 2

### Section A

Now that we've learnt a bit of basic HTML and CSS, let's move on to adding a map to our website.

We will be creating a new website that will be used for all exercises from this point one

1. Create a new folder separate from your previous one name "MyArcGISWebsite" or something similar

2. Open a new window of VS Code and open this folder in the VS Code window

3. Create three files with the following names (do not deviate from these names)
    - index.html
    - style.css
    - index.js

------------

### Section B

To get any of the ArcGIS elements on our page, we will need to link our website with the ArcGIS JavaScript SDK. To access the ArcGIS SDK, we first need to create an API key.

1. Go to the content tab in your GaLOP ArcGIS Online

2. Click New Item in the top left of the content page, then select Developer Credentials

3. Select API Key Credentials and click Next

4. Click Next on the Settings page

5. On the Privileges page, enable everything and click next

6. Click skip on the Restrict Item Access page

7. Add a title for your API key and other information you want and click next

8. Tick the checkbox on the Summary page and click next

9. Click next on the Generate API key page

10. Copy your API key and paste it somewhere safe where you will be able to find it again late. Once you close this window you will not be able to get the API key again and will have to create a new one if you lose it

The API key acts as a license to be able to access the JavaScript SDK and should be treated like a password. In this case we have given it full access to privileges and content. If using this for work purposes you may wish to create a more secure API key for just the functionality that is required

-------

### Section C

In order for the JavaScript SDK to work, we need to run our website on an http/https server. We can do this easily with a VS Code extension

1. In VS Code, go to the Extensions tab on the left

2. Search for "Live Server", the correct result should be the top option with the purple logo

3. Click on the extension and install it

4. Once installed, there should be a "Go Live" button in the bottom right of VS Code. Click this and your webpage will open automatically

A perk of this extension is that you know longer have to refresh the page to see your latest code changes, the page will refresh automatically

-------------

### Section D

Now that we know how to make a website and have access to the ArcGIS JavaScript SDK, we can add a map to our website

1. In your index.html file, add in this base code

```
<!DOCTYPE html>
<html>
    <head>
        <title>My ArcGIS Website</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h1>My Website Header</h1>
    </body>
</html>
```

2. Add some CSS to give the body element a height of 100% and margins of 0.

3. Using this tutorial for guidance (https://developers.arcgis.com/javascript/latest/tutorials/display-a-web-map/) display a map on your website. You will need to:
    - Add references to the JavaScript SDK
    - Add the map component
    - Add the legend and zoom components