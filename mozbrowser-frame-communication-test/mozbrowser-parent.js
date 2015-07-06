(function () {

if ('BroadcastChannel' in window) {
  var bc = new BroadcastChannel('channel');
  bc.addEventListener('message', function (e) {
    console.log('[parent][BroadcastChannel] received message:', e.data);
  });
} else {
  console.warn('[parent] BroadcastChannel not supported');
}


iframe.onload = function () {
  console.log('[parent] iframe loaded');

  iframe.contentWindow.postMessage('hi from parent', '*');

  console.log('[parent] localStorage value set by child:', window.localStorage.getItem('child'));
};

window.addEventListener('message', function (e) {
  console.log('[child][postMessage] received message:', e.data);
});

})();
