# css-vr-slow-iframe-scrolling-tests

Test cases for a scrolling bug in Firefox's CSS-VR experimental builds.


### Problem

Scrolling an `<iframe>` inside a `preserve-3d` parent makes the `<iframe>` disappear for 5+ seconds while a repaint occurs. (Notice this happens even though "preserve-3d is NOT inherited.")


### Steps to reproduce

1. Place an `<iframe>` inside an element that has a style set of `transform-style: preserve-3d`.
2. From within the `<iframe>` call `document.document.scrollTop` or `window.scrollTo`.
3. Notice it takes at least 5 seconds for the `<iframe>`'s document to be updated (the content actually disappears, but the `<iframe>` container remains).


### Test cases

* [__with an `<iframe>`__](http://cvan.io/css-vr-slow-iframe-scrolling-tests/)
* [__with a `<div>`__](http://cvan.io/css-vr-slow-iframe-scrolling-tests/div.html)
