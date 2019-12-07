# Best Jquery Responsive Tabs
**Best JQuery responsive tabs** is a **lightweight** and **Easy** to implement jQuery responsive tabs plugin. It'll automatically convert to **Collapse** in mobile device. You can define your own device break point and this plugin automatically convert tabs to collapse when window size below or equal of the break point size.

### Features

- Super easy to integrate and auto responsive jQuery tabs
- Fully customizable
- No more restriction to place tabs navigator and content in same Wrapper

**Table of Contents**

[TOC]

### Getting start
#### HTML
```html
<!Doctype html>
<html>
	<head>
		.....
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="dist/best-responsive.js"></script>
		<link rel="stylesheet" href="src/best-responsive.css"/>
		.....
	</head>
	<body>
		....
		<div class="best-responsive-tab" id="myExampleBestResponsiveTab1" role="tablist" data-target-content="#myExampleTabsContent">
		    <div data-target-index="0">One</div>
		    <div data-target-index="1">Two</div>
		    <div data-target-index="2">Three</div>
		</div>
		<div class="best-responsive-tab-contents" id="myExampleTabsContent" aria-labelledby="myExampleBestResponsiveTab">
		    <div class="best-responsive-tab-content" role="tabpanel">Content of one</div>
		    <div class="best-responsive-tab-content" role="tabpanel">Content of two</div>
		    <div class="best-responsive-tab-content" role="tabpanel">Content of three</div>
		</div>
		....
	</body>
</html>
```
#### Use plugin
```js
(function($){
	$(function(){
		$('#myExampleBestResponsiveTab1').laraGemsBestResponsiveTabs();
	});
})(jQuery);
```
### Options
|  Option |  Type | Default | Description |
| ------------ | ------------ | ------------ | ------------ |
| `container`  | `string` or `jQuery element`   | `data-target-container` attribure value| Define tabs container
| `break_point`  | `intiger`  | 764 | Default breakpoint window width to conver tabs to collapse
| `active_tab_index`  | `intiger`   | 0 | Default active content item index number (e.g. - Index number will start from 0)

![](https://repository-images.githubusercontent.com/226507502/92268c80-191c-11ea-8154-6ed683b710cb)
