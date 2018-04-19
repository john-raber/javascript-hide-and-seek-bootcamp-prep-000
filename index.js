function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  let current = 'div#grand-node';
  while (document.querySelector(current + ' div')) {
    current = current + ' div';
  }
  return document.querySelector(current);
}