(function () {

console.log('[child] window:', window, 'window.top:', window.top);


if ('BroadcastChannel' in window) {
  var bc = new BroadcastChannel('channel');
  bc.postMessage('hi from child');
  bc.addEventListener('message', function (e) {
    console.log('[child][BroadcastChannel] received message:', e.data);
  });
} else {
  console.warn('[child] BroadcastChannel not supported');
}


if (window !== window.top) {
  window.top.postMessage('hi from child', '*');
}

window.addEventListener('message', function (e) {
  console.log('[child][postMessage] received message:', e.data);
});


window.localStorage.setItem('child', 'c3d');

console.log('[child] localStorage value set by parent:', window.localStorage.getItem('parent'));

})();
