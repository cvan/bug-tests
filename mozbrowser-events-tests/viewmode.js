(function () {

// Remove all `<meta>` tags so `mozbrowsermetachange` actually gets called.
window.addEventListener('beforeunload', function () {
  var metaTags = Array.prototype.slice.call(document.head.querySelectorAll('meta'));
  metaTags.forEach(function (meta) {
    meta.parentNode.removeChild(meta);
  });
});

})();
