# Best Jquery Responsive Tabs
**Best JQuery responsive tabs** is a **lightweight** and **Easy** to implement jQuery responsive tabs plugin. It'll automatically convert to **Collapse** in mobile device. You can define your own device break point and this plugin automatically convert tabs to collapse when window size below or equal of the break point size.

### Features

- Super easy to integrate and auto responsive jQuery tabs
- Fully customizable
- No more restriction to place tabs navigator and content in same Wrapper

### Getting start
#### CDN
- CSS: [https://cdn.jsdelivr.net/gh/NilGems/Best-Jquery-Responsive-Tabs@1.0.1/assets/dist/best-responsive.min.css](https://cdn.jsdelivr.net/gh/NilGems/Best-Jquery-Responsive-Tabs@1.0.1/assets/dist/best-responsive.min.css)
- JavaScript: [https://cdn.jsdelivr.net/gh/NilGems/Best-Jquery-Responsive-Tabs@1.0.1/assets/dist/best-responsive.min.js](https://cdn.jsdelivr.net/gh/NilGems/Best-Jquery-Responsive-Tabs@1.0.1/assets/dist/best-responsive.min.js)
#### HTML
```html
<!Doctype html>
<html>
	<head>
		.....
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/gh/NilGems/Best-Jquery-Responsive-Tabs@1.0.1/assets/dist/best-responsive.min.css"></script>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/NilGems/Best-Jquery-Responsive-Tabs@1.0.1/assets/dist/best-responsive.min.css"/>
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
| --- | --- | --- | --- |
| `container`  | `string` or `element` | `data-target-container` attribure value| Define tabs container |
| `break_point`  | `intiger`  | 764 | Default breakpoint window width to conver tabs to collapse |
| `active_tab_index`  | `intiger`   | 0 | Default active content item index number (e.g. - Index number will start from 0) |

#### Example to set options
##### Define container by Element ID
```js
	$('#myExampleBestResponsiveTab1').laraGemsBestResponsiveTabs({
		container: '#example',
		break_point: 764,
		active_tab_index: 0
	});
```
##### Define container by Element Class
```js
	$('#myExampleBestResponsiveTab1').laraGemsBestResponsiveTabs({
		container: '.example',
		break_point: 764,
		active_tab_index: 0
	});
```
##### Define container by jQuery Element
```javascript
	$('#myExampleBestResponsiveTab1').laraGemsBestResponsiveTabs({
		container: $('#example'),
		break_point: 764,
		active_tab_index: 0
	});
```
```javascript
	$('#myExampleBestResponsiveTab1').laraGemsBestResponsiveTabs({
		container: $('.example'),
		break_point: 764,
		active_tab_index: 0
	});
```
### Events

|  Event | Description |
| --- | --- |
| `lgTabItem:toogle` | This event fires on tab show, but before the new tab has been shown. Use `event`,`previous_items` and `current_items` as per your requirment. `previous_items` and `current_items` are a object of `tabs` element. You can get object following object keys from both of variables 1. `tab` 2. `desktop_tab_panel` 3. `mobile_tab_panel` |

#### Event example
```javascript
$('#myExampleBestResponsiveTab1').on('lgTabItem:toogle', function(event, previous_items, current_items){ 
	var previous_items_tab = previous_items.tab,
	    previous_items_desktop_tabpanel = previous_items.desktop_tab_panel,
	    previous_items_mobile_tabpanel = previous_items.mobile_tab_panel, 
	    current_items_tab = current_items.tab,
	    current_items_desktop_tabpanel = current_items.desktop_tab_panel,
	    current_mobile_tabpanel = current_items.mobile_tab_panel;
	    
	//// Remove 'example-just-add-class' class for just example. You can do any jquery function like to following.
	
	previous_items_tab.removeClass('example-just-add-class');
	previous_items_desktop_tabpanel.removeClass('example-just-add-class');
	previous_items_mobile_tabpanel.removeClass('example-just-add-class');
	
	//// Add 'example-just-add-class' class for just example. You can do any jquery function like to following.
	
	current_items_tab.addClass('example-just-add-class');
	current_items_desktop_tabpanel.addClass('example-just-add-class');
	current_mobile_tabpanel.addClass('example-just-add-class');
	
	/// Print variables for debug (Better understand)
	
	console.log(previous_items);
	console.log(current_items);
})
```
### Live preview

Click to link to get preview: [Live preview](https://codepen.io/nilgems/full/mdyeKWJ)

### Author

- Niladri Shekhar Mondal *- Initial work* -[Pixel Solutionz](https://pixelsolutionz.com)

![](https://repository-images.githubusercontent.com/226507502/92268c80-191c-11ea-8154-6ed683b710cb)
