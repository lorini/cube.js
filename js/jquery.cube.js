(function($){
    $.Cube = function(el, options){
        
        var base = this;
        base.$el = $(el);
        base.el  = el;

        base.$el.data("Cube", base);
        
        base.init = function(){
            base.options  = $.extend({},$.Cube.defaultOptions, options);
            
            // TODO : Make this initial position as an option  
            base.position = 0  ; 

            /* Key binding for using the arrowkeys to rotate the cube */
            // TODO : propose options for key binding 
            // TODO : Test if defaultOptions.loop == true, and maybe a better way to do this
            // TODO : Error when first left 
            $('body').keyup(function (event) {
                if (event.keyCode == 37) {
                    event.preventDefault(); 
                    base.position = base.position > 0 ? --base.position : 3 ; 
                    base.rotate(); 
                } else if (event.keyCode == 39) {
                    event.preventDefault(); 
                    base.position++; 
                    base.rotate(); 
                } 
            });

            // TODO : Replace "-webkit-transform" by generic attribute "transform" 
            // TODO : Find a better way to do that (without CSS file)
            $('body').css({"-webkit-perspective" : 800});
            base.$el.css({ "-webkit-transform-style": "preserve-3d","-webkit-transition": "-webkit-transform 1s"});
            base.$el.find(".face").css({ "position":"absolute", "-webkit-backface-visibility": "hidden"});
            $('*').css({margin : 0 ,padding: 0});
            
            /* Event binding for resizing the cube when the windows size is modified */
            $(window).resize(base.resize);
            base.resize(); 
        };
        
        base.rotate = function(direction){

            var windowsWidth = $(window).width() ; 
            var deg2radians = Math.PI * 2 / 360;

            var rotateY    = - 90 * base.position ; 
            var translateX = windowsWidth * Math.round(5 * Math.sin((rotateY*deg2radians)))/10 ;  
            var translateY = windowsWidth * Math.round(Math.sin(rotateY*deg2radians/2)*Math.sin(rotateY*deg2radians/2)*10)/10 ;  

            var transform = "rotateY("+rotateY+"deg) translateX("+translateX+"px ) translateZ("+translateY+"px)"; 

            // TODO : Remplace "-webkit-transform" by generic attribute "transform" 
            base.$el.css("-webkit-transform", transform );
            return base ;
        };
    
        base.resize = function(){
            var windowsWidth = $(window).width() ; 
            var cubeAngle    = 90 ;
            base.rotate() ;

            base.$el.find(".face").height($(window).height()).width(windowsWidth);
            // TODO : Find a simply function 
            base.$el.find("#right").css( "-webkit-transform", "rotateY("+1*cubeAngle+"deg) translateX(  "+windowsWidth/2+"px ) translateZ( "+windowsWidth/2+"px )");
            base.$el.find("#back" ).css( "-webkit-transform", "rotateY("+2*cubeAngle+"deg) translateX(                   0px ) translateZ( "+windowsWidth + "px )");
            base.$el.find("#left" ).css( "-webkit-transform", "rotateY("+3*cubeAngle+"deg) translateX( -"+windowsWidth/2+"px ) translateZ( "+windowsWidth/2+"px )");
        }

        base.init();
        return base ; 
    };
    
    // TODO : Find usefull options 
    $.Cube.defaultOptions = {
        loop    : true, 
        sleep   : '1s',
        easing  : "ease in out"
    };    

    $.fn.cube = function(start, options){
        return this.each(function(){
            (new $.Cube(this, start, options));
        });
    };
    
})(jQuery);
