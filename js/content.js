var checkPopup = setInterval(worker, 0);

function worker() {
  var Popup = document.querySelector('div.fc-ab-root');
  if (Popup) {
    Popup.parentNode.removeChild(Popup);
    var pageLock = document.querySelector('#nv_forum');
    pageLock.removeAttribute("style");
    clearInterval(checkPopup);
  }
}