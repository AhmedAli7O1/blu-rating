# Dependencies

* [jQuery](https://jquery.com/)

* [Font Awesome](fontawesome.io/)

# Usage

1. place a div somewhere in your html, than give it reasonable id.
2. init the plugin on this div with your preferred options.

`

        <div id="container"></div>
        <div id="container2" rating="4"></div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="blu-rating.js"></script>
        <script>
            $('#container').bluRating();
            
            $('#container2').bluRating({
                editable: false
            });
        </script>

`