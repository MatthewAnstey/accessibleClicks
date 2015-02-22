(function($) {
    "use strict";
    $.fn.oldOn = jQuery.fn.on;
    $.fn.extend({
        on: function() {
            var args = Array.prototype.slice.call(arguments),
                newArgs = args.slice(0),
                i = 0,
                enterKey = 13,
                spaceBar = 32,
                callBackPosition;

            $.fn.oldOn.apply(this, args);

            for (; i < args.length; i++) {
                if (typeof args[i] === 'function') {
                    callBackPosition = i;
                    break;
                }
            }

            if (args[0] === 'click') {
                newArgs[0] = 'keydown';
                newArgs[callBackPosition] = function(evt) {
                    if (evt.which === enterKey ||
                        evt.keyCode === enterKey ||
                        evt.which === spaceBar ||
                        evt.keyCode === spaceBar) {
                        args[callBackPosition](evt);
                    }
                };
                $.fn.oldOn.apply(this, newArgs);
            }
        }

    });


}(jQuery));