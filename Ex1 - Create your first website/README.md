# Exercise 1

### Section A

Before we work with the ArcGIS JavaScript SDK, let's learn how to make your own web page. First let's set up our coding environment

1. Create a folder for your website called "MyFirstWebsite" or something similar
This folder will contain all your code and files for your website

2. Open a new window of VSCode

3. Choose open folder, and select your newly created folder

4. Create four new files and call them the following (please do not deviate from these names)
    a. index.html
    b. style.css

These files will be all you need for all your code

Now you're ready to get started!

----------

### Section B

First we are going to add the basic building blocks of any HTML website.

HTML files use elements, in the format of an opening tag, a closing tag, and content in the middle, to define what should appear on the webpage.

1. Add the following code to your index.html file

```
<!DOCTYPE html>
<html>
    <head>
        <title>My Website Title</title>
    </head>
    <body>
        <h1>My Website Header</h1>
    </body>
</html>
```

This is all you need to create a very basic website. Below are some explanations of the elements you just added

<!DOCTYPE html> - This is a declaration that this file is an html file. When the web browser reads this page, it will first read this declaration and know to process the rest of the page as HTML. (required)

<html> - The root element of an HTML page that contains all the HTML in the file. (required)

<head> - An element that contains the meta information about the HTML page. (required)

<title> - The title of the HTML page that will appear in the browser tab.

<body> - An element that contains all the content that will be visible on the web page. (required)

2. Save your file and open it in your browser. You should see some text on the page and the title in the browser tab

---------

### Section C

1. With the help of Google, try adding the following components to your website. Remember you can also ask for help if you need!

    - Large heading
    - Bolded text
    - Bullet point list
    - Numbered list
    - Link
    - Image
    - Table

To help you get started, here is how you can add a heading in HTML

```
<h1>This is a heading! There are different sizes of headings, h1 through to h6</h1>
```

--------

### Section D

Next we are going to make our websites a bit prettier using CSS

We are going to add the CSS to the styles.css file. To allow our index.html file to know to read the CSS, we have to add a link to our CSS file in our HTML file

1. In the head element of the HTML file add the following line

```
<link rel="stylesheet" href="style.css" />
```

This link element tells our HTML file to find the style.css and read it as a style sheet

The simplist way to add CSS is to assign it to the element. This will mean that all elements of that type will have the styles. We can also add CSS universially using an *

```
* {
    font-family: Arial;
}

h1 {
    text-decoration: underline
}
```

Another way we can add CSS is to give the HTML elements a class or id. For example:

```
<div class="contentBlock">This div has a class</div>

<div id="navidation">This div has an id</div>
```

We can add CSS for this using . for class names and # for id names

```
.contentBlock {
    background-color: "pink"
}

#navigation {
    color: "green"
}
```

2. Using Google to help, try changing the following styles using CSS on your website
    - Text colour
    - Background colour
    - Font family
    - Font size
    - Padding
    - Margins

Hint: CSS (unfortunately) uses American spelling, so remember to check how you are spelling color