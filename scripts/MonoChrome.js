(function(document, body) {
    var isGrayScale = ('true' == document.body.getAttribute('gray-scale'));
    body.style['-webkit-filter'] = isGrayScale? 'none' : 'grayscale()';
    body.setAttribute('gray-scale', !isGrayScale);
})(document, document.body);
