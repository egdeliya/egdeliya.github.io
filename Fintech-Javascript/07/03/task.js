function throttle(time, callback) {
  let lastTimeCalled = new Date();
  let firstTimeCalled = true;

  function callbackWrapper(args) {
    const currentTime = Date.now();

    if (firstTimeCalled) {
      firstTimeCalled = false;
      lastTimeCalled = currentTime;
      return callback(args);
    } else if (currentTime - lastTimeCalled >= time) {
      lastTimeCalled = currentTime;
      return callback(args);
    }
  }
  return callbackWrapper;
}

module.exports = { throttle };
