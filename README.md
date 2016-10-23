# Dependencies

* [jQuery](https://jquery.com/)

* [Font Awesome](fontawesome.io/)

# Usage

1. place a div somewhere in your html, than give it reasonable id.

    * for readonly mode add "rating" attribute to this div 

```html

<div id="container"></div>

<!-- or add rating attribute -->

<div id="container" rating="4"></div>

```


2. init the plugin on this div with your preferred options.


* with default options

```javascript

$('#container').bluRating();

```

* with editable option set to false 

```javascript

$('#container').bluRating({ editable: false });

```

3. now you can style them in your css

```css

#container {
    padding-left: 10px;
}

.blu-star {
    font-size: 2em;
    color: red;
}

```

## full example

### index.html

```html

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <!-- include font-awesome -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" 
            rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
        
        <style>
        
            /* style the container e.g add padding, margin ...etc */ 
            #container {
                padding-left: 10px;
            }

            /* use this to style font-awesome stars just like any font styling */
            .blu-star {
                font-size: 2em;
                color: red;
            }

        </style>
    
    </head>
    <body>

        <!-- rating box with pre predefined rating value to view  --> 
        <div id="container" rating="4"></div>

        <!-- include jquery and blu-rating plugin --> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="blu-rating.js"></script>
        
        <!-- init blu-rating plugin and listen to user selection -->
        <script>

            $('#container').bluRating({
                editable: true
            })
            
            .on('rating:selected', function (e, rate) {
                alert('Your rate is: ' + rate);
            });

        </script>
    </body>
</html>

```





