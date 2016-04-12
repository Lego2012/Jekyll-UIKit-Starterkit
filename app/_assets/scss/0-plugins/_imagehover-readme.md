## Basic Usage

1. Include the stylesheet on your document's `<head>`

```html
<head>
  <link rel="stylesheet" href="css/imagehover.min.css">
</head>
```

2. Place the following markup in to your HTML document

```html
<figure class="imghvr-fade">
    <img src="#">
    <figcaption>
        // Hover Content
    </figcaption>
</figure>
```

3. Edit the URL to your image and add your hover content. Then simply set the imagehover.css class of your choice to the containing figure element. In the example above this has been set to 'imghvr-fade'. A full list of hover effects and their classes can be found [here!](http://www.imagehover.io/).

## Adding a Link

To link your image, add an empty `<a>` tag just after the figcaption element of your markup. Set the href attribute to the URL you wish to link your image to.

```html
<figure class="imghvr-fade">
    <img src="#">
    <figcaption>
        // Hover Content
    </figcaption>
    <a href="#"></a>
</figure>
```

## Background Color

All background colors are inherited from the containing `<figure>` element. You can change the background color via some inline CSS added to the figure element like so...

```html
<figure class="imghvr-fade" style="background-color:#D14233;">
  <img src="#">
  <figcaption>
    // Hover Content
  </figcaption>
</figure>
```

Alternatively this can be applied via your CSS files. The following example will effect all elements with a imagehover.css class applied.

```css
[class^='imghvr-'],
[class*=' imghvr-'] {
  background-color: #D14233;
}
```

## Browser Support

Imagehover.css relies heavily on some CSS3 features including pseudo-elements, animations, transitions and transforms. Some older browsers will have limited support of these features.
