var t,
    e,
    n = function (t) {
  return t / 750 * uni.getSystemInfoSync().windowWidth;
};

exports.title = "随手学算法";

exports.drawLine = function (t, e, r, o, i) {
  var s = uni.createCanvasContext(t),
      x = n(e),
      a = n(r),
      p = n(o),
      u = n(i);
  s.moveTo(x, a), s.setLineWidth(1), s.lineTo(p, u), s.stroke(), s.draw(t);
}, exports.rpxWidthTopx = n, exports.rpxHeightTopx = function (t) {
  return t / 750 * uni.getSystemInfoSync().windowWidth;
}, exports.sleep = function (t) {
  for (var e = new Date().getTime(); new Date().getTime() < e + t;);
}, exports.initTextArray = function (n, r) {
  t = n, e = r;
}, exports.showText = function (n, r) {
  var o = !1;

  if (n < e) {
    var i = t[n].string;
    null != i && r.setData({
      text: i
    }), o = t[n].continue;
  }

  return o;
}, exports.getContinue = function (n, r) {
  var o = !1;
  return n < e && (o = t[n].continue), o;
}, exports.BGCOLOR_GREEN = "7CFC00", exports.BGCOLOR_BLUE = "29B6F6", exports.BGCOLOR_YELLOW = "FFEB3B", exports.BGCOLOR_RED = "FF0000";