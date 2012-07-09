cube.js
=======

jQuery plugin which transforms four elements into an auto-resizing fullscreen 3D cube.

> This version is working on Chrome, and there is a lot of TODOs on my TODO's List ! 

How-to
------

1. First include the *.js file : 

<script type="text/javascript" src="js/jquery.cube.js"></script>

2. Then create your four elements like this : 

<div id="cube">

	<div id="front" class="face">
		<h1>Face #1</h1>
	</div>
	<div id="right" class="face">
		<h1>Face #2</h1>
	</div>
	<div id="back" class="face">
		<h1>Face #3</h1>
	</div>
	<div id="left" class="face">
		<h1>Face #4</h1>
	</div>

</div>

3. And finally execute the plugin : 

<script type="text/javascript">
	$.Cube("#cube");
</script>