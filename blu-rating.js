(function( $ ) {

    // init jquery plugin 
    $.fn.bluRating = function (userOptions) {

        // set defult options
        var options = {
            editable: true,
            starCount: 5
        };

        // override default options by user options 
        options = $.extend(options, userOptions);


        // set local container object
        var container = $(this);
        var rating = container.attr('rating');

        var starCount = options.starCount;
        var editable = options.editable;

        // set container styles
        container.css({
            direction: 'rtl'
        });

        // create elements contain rating stars  
        for (var i = starCount; i > 0; i--) {
            $('<i class="blu-star fa fa-star-o" data-blustar-num="' + i + '"></i>').appendTo(container);
        }

        if(!editable && rating) {
            var selectedStar = container.children("[data-blustar-num='" + rating + "']");
            return selectStar(container, selectedStar);
        }

        // add selection & clear selection events
        container.children()
        
        // select amount of stars depending on mouse hovers
        .mouseenter(function () {
            selectStar(container, this);
        })
        
        // clear any star selection if the mouse not hovering rating stars
        .mouseleave(function () {
            clearSelection(container);
        })
        
        // keep the star selection and remove all selection events
        // then trigger rating:selected contains rating value 
        .click(function() {
            container.children().off('mouseenter mouseleave');
            container.trigger('rating:selected', this.id);
        });

        // return container object for seek of Chaining
        return this;

    };

    // select amount of stars depending on selected star position
    function selectStar(container, selected) {
        
        var starNum = $(selected).attr('data-blustar-num');
        var selectQuery = '[data-blustar-num="' + starNum + '"] ~ ,' + '[data-blustar-num="' + starNum + '"]';

        clearSelection(container);

        container
            .children(selectQuery)
            .removeClass("fa-star-o").addClass("fa-star");

    }

    // clear stars selection
    function clearSelection(container) {
        
        container.children()
            .removeClass("fa-star").addClass("fa-star-o");

    }


})( jQuery );