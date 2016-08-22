'use strict';

export default function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var destDistanceFromTop = getNodePosition(to)[0]
    var difference = destDistanceFromTop - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to.scrollTop) {
          return;
        }
        scrollTo(element, to, duration - 10);
    }, 10);
}


function getNodePosition(node) {
    var top = 0;
    var left = 0;
    while (node) {
       if (node.tagName) {
           top = top + node.offsetTop;
           left = left + node.offsetLeft;
           node = node.offsetParent;
       } else {
           node = node.parentNode;
       }
    }
    return [top, left];
}
