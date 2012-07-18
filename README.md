cube.js
=======

jQuery plugin which transforms four elements into an auto-resizing fullscreen 3D cube.

This version is working on Chrome, and there is a lot of TODOs on my TODO's List ! 

Demo
----

You can find an almost working version here : http://gulian.fr/cube.js/ 
> Rotate the cube with arrow keys Luke 

How-to
------

1. First include the *.js file : 

```html
<script type="text/javascript" src="js/jquery.cube.js"></script>
```

2. Then create your four elements like this : 

```html
<div id="cube">
	<div id="front" class="face"></div>
	<div id="right" class="face"></div>
	<div id="back"  class="face"></div>
	<div id="left"  class="face"></div>
</div>
```

3. And finally execute the plugin : 

```js
$.Cube("#cube");
```