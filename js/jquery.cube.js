(function($){
    $.Cube = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("Cube", base);
        
        base.init = function(){
            
            base.options = $.extend({},$.Cube.defaultInitOptions, options);
            base.position = 0 ; 
            base.angle = 90 ; 

            $('body').keyup(function (event) {
                if (event.keyCode == 37) {
                    event.preventDefault(); 
                    base.rotate("left"); 
                } else if (event.keyCode == 39) {
                    event.preventDefault(); 
                    base.rotate("right"); 
                } 
            });

            $(window).resize(base.resize);
            base.resize(); 

            base.$el.find("#back").css(  "-webkit-transform", "translateZ( -"+$(window).width()+"px )");
            base.$el.find("#left").css(  "-webkit-transform", "translateZ( -"+$(window).width()+"px )");
            base.$el.find("#right").css( "-webkit-transform", "rotateY(  90deg ) translateZ( -"+$(window).width()/2+"px ) translateX( "+$(window).width()/2+"px ) ");
            base.$el.find("#left").css(  "-webkit-transform", "rotateY( -90deg ) translateZ( -"+$(window).width()/2+"px ) translateX(-"+$(window).width()/2+"px )");




            base.$el.find(".face").css({
                "background-color" : "red", 
                "float": "left"
            });

            base.$el.find(".face").each(function(indice){
                $(this).data("face", indice); 
               // $(this).css("-webkit-transform","rotateY( "+base.angle*indice+"deg ) ") ;
            });

            //base.$el.find(".face").first().css("background-color", "green");

        };
        
        base.rotate = function(options){
            if(options == "right") base.position++ ;
            if(options == "left") base.position-- ;
            
            base.$el.css("-webkit-transform","rotateY( -"+base.angle*base.position+"deg ) translateZ(600px)  ")

            return base ;
        };
    
        base.resize = function(){
            base.$el.find(".face").height($(window).height());
            base.$el.find(".face").width($(window).width());
        }

        base.init();
        return base ; 
    };
    
    $.Cube.defaultInitOptions = {
        loop: true
    };    

    $.Cube.defaultRotateOptions = {
        easing: "ease in out",
        time: 1000 
    };
    
    $.fn.cube = function(start, options){
        return this.each(function(){
            (new $.Cube(this, start, options));
        });
    };
    
    $.fn.getCube = function(){
        this.data("Cube");
    };
    
})(jQuery);
