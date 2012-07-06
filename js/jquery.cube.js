(function($){
    $.Cube = function(el, start, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("Cube", base);
        
        base.init = function(){
            base.start = start;
            
            base.options = $.extend({},$.Cube.defaultOptions, options);
            
            // Put your initialization code here
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        base.init();
    };
    
    $.Cube.defaultOptions = {
        easing: "ease in out",
        loop: true
    };
    
    $.fn.cube = function(start, options){
        return this.each(function(){
            (new $.Cube(this, start, options));
        });
    };
    
    // This function breaks the chain, but returns
    // the Cube if it has been attached to the object.
    $.fn.getCube = function(){
        this.data("Cube");
    };
    
})(jQuery);
