let wrap = document.getElementById("wrap");

wrap.onscroll = () => {
  let diff = wrap.scrollHeight - wrap.clientHeight;
  let scrollpos = wrap.scrollTop;
  if (diff - scrollpos <= 2) {
    addMore();
  }
};

function addMore() {
  var itemCount = document.getElementById("wrap").childElementCount;
  const itemLimit = 25;
  console.log(itemLimit);
  var nextItems = getNextItem(itemCount);
  nextItems.forEach(function (item) {
    document.getElementById("wrap").innerHTML += "<p>" + item + "</p>";
  });
}

function getNextItem(currentItem) {
  const dummyCount = 500;
  var dummyItems = [];
  var nextDummyItems = [];

  for (var i = 1; i <= dummyCount; i++) {
    dummyItems.push("Masai" + " " + "School" + " " + i);
  }
  var countTwentyFive = 25;
  var nextItem = currentItem + 1;
  for (var i = nextItem; i <= dummyItems.length; i++) {
    nextDummyItems.push(dummyItems[i - 1]);
    countTwentyFive--;
    if (countTwentyFive == 0) break;
  }
  return nextDummyItems;
}

console.log(wrap.scrollTop, wrap.scrollHeight, wrap.clientHeight);
