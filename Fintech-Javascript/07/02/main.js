const btnClickMe = document.querySelector('.btn-click-me');
const checkList = document.querySelector('.check-list');

function doubleClick(element, doubleClickHandler, timeDistance) {
  let lastTimeClicked = new Date();
  let firstTimeClicked = false;

  function doubleClickHandlerWrapper(event) {
    const currentTimeClicked = Date.now();

    firstTimeClicked = !firstTimeClicked;

    if (firstTimeClicked) {
      lastTimeClicked = currentTimeClicked;
    } else if (currentTimeClicked - lastTimeClicked < timeDistance) {
      doubleClickHandler(event);
    }
  }

  element.addEventListener('click', doubleClickHandlerWrapper);
}

function onClick() {
  const newLiElement = document.createElement('li');
  const curDate = new Date();

  newLiElement.classList = ['check-list__item'];
  newLiElement.textContent = '2xClick - ' + curDate.toString()
    .split(' ')
    .slice(0, -4)
    .join(' ');

  checkList.appendChild(newLiElement);
}

// ------------ test -------------------
doubleClick(btnClickMe, onClick, 500);
