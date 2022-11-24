const appOpenEvent = () => {
  console.log("appOpen event");
  eventFired = true;
};
function Start() {
    
  getListener();

  addAppOpenListener(appOpenEvent);

  getListener();

  removeAppOpenListener(appOpenEvent);

  getListener();

  setTimeout(addAppOpenListener(appOpenEvent), 2000);
  setTimeout(getListener(), 3000);
  //   listListener();
}

function removeAppOpenListener(appOpen) {
  const listenerCount = getListener();
  console.log("listener count is " + listenerCount);
  if (listenerCount > 0) {
    console.log("removing open event listener");
    nw.App.onOpen.removeListener(appOpen);
  }
}

function addAppOpenListener(appOpen) {
  const listenerCount = getListener();
  console.log("listener count is " + listenerCount);
  if (listenerCount == 0) {
    console.log("adding open listener");
    nw.App.onOpen.addListener(appOpen);
  }
}

function getListener() {
  var len = 0;
  console.log("listing listeners");
  const listeners = nw.App.onOpen.getListeners();

  //   console.log(listeners);

  if (listeners) {
    len = listeners.length;
    console.log("length of listeners " + len);
  }
  return len;
}
