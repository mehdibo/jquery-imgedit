# jquery-imgedit
This is a small plugin to edit an inline image, what does this plugin do is make an image editable by clicking on it and uploading a new one with a preview (it replaces the original clicked image) then the plugin adds a file input to the target form.

# Example
the `index.html` page shows a simple example

# Documentation
First you need to load the jQuery library and then the **imgEdit** plugin.

`<script src='./src/imgEdit.js'></script>`

then add this code

    $("YOUR IMG TAG SELECTOR").imgEdit({
        inputName : "THE CREATED INPUT'S NAME",
        form : "THE TARGET FORM WHERE THE INPUT WILL BE CREATED",
    });
    
# Contributing
All contributions are welcome
