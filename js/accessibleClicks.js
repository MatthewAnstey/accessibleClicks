(function($) {
    "use strict";
    $.fn.oldOn = jQuery.fn.on;
    $.fn.oldOff = jQuery.fn.off;

    $.fn.extend({
        on: function() {
            var args = Array.prototype.slice.call(arguments),
                newArgs = args.slice(0),
                i = 0,
                enterKey = 13,
                spaceBar = 32,
                callBackPosition;

                $.fn.oldOnOriginalCallbacks = $.fn.oldOnOriginalCallbacks ? 
                    $.fn.oldOnOriginalCallbacks : {};

            $.fn.oldOn.apply(this, args);

            for (; i < args.length; i++) {
                if (typeof args[i] === 'function') {
                    callBackPosition = i;
                    break;
                }
            }

            if (args[0] === 'click' && 
                typeof callBackPosition !== 'undefined') {
                newArgs[0] = 'keydown';
                newArgs[callBackPosition] = function(evt) {
                    if (evt.which === enterKey ||
                        evt.keyCode === enterKey ||
                        evt.which === spaceBar ||
                        evt.keyCode === spaceBar) {
                        args[callBackPosition](evt);
                    }
                };

                $.fn.oldOnOriginalCallbacks[newArgs[callBackPosition].toString()] = 
                    args[callBackPosition];

                $.fn.oldOn.apply(this, newArgs);
            }
        },

        off: function () {
            var args = Array.prototype.slice.call(arguments),
                newArgs = args.slice(0), 
                callBackPosition,
                i = 0;

                $.fn.oldOff.apply(this, args);

                for (; i < args.length; i++) {
                    if (typeof args[i] === 'function') {
                        callBackPosition = i;
                        break;
                    }
                }

                if (typeof callBackPosition !== 'undefined') {
                    newArgs[callBackPosition] =  
                        $.fn.oldOnOriginalCallbacks[args[callBackPosition].toString()];
                }

                if (args[0] === 'click') {
                    newArgs[0] = 'keydown';
                    $.fn.oldOff.apply(this, newArgs);
                }
        }
    });


}(jQuery));