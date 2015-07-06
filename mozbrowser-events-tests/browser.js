(function () {

var browserEvents = [
  'mozbrowserasyncscroll',
  'mozbrowserclose',
  'mozbrowsererror',
  'mozbrowsericonchange',
  'mozbrowserloadend',
  'mozbrowserloadstart',
  'mozbrowserlocationchange',
  'mozbrowsermetachange',
  'mozbrowseropentab',
  'mozbrowseropenwindow',
  'mozbrowsersecuritychange',
  'mozbrowsershowmodalprompt',
  'mozbrowsertitlechange',
  'mozbrowservisibilitychange',
];

var $ = function (sel) { return document.querySelector(sel); }
var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

var iframe = $('#iframe');

function log(msg) {
  var li = document.createElement('li');
  li.innerHTML = msg;
  logs.appendChild(li);
}

var mozbrowserEventHandler = function (e) {
  console.log(e.type, e.detail);
  log('<b>' + e.type + '</b> ' + JSON.stringify(e.detail));
};

var linkHandler = function (e) {
  e.preventDefault();
  e.stopPropagation();
  iframe.src = e.target.href;
};

browserEvents.forEach(function (eventName) {
  window.addEventListener(eventName, mozbrowserEventHandler);
});

clearButton.addEventListener('click', function () {
  logs.innerHTML = '';
});

$$('a').forEach(function (el) {
  el.addEventListener('click', linkHandler);
});

})();
