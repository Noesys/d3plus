(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(arr, value) {
  var constructor;
  if (arr instanceof Array) {
    constructor = value === void 0 || value === null ? value : value.constructor;
    return arr.indexOf(value) >= 0 || arr.indexOf(constructor) >= 0;
  } else {
    return false;
  }
};


},{}],2:[function(require,module,exports){
module.exports = function(arr, x) {
  if (x === void 0) {
    return arr;
  }
  if (x === false) {
    return [];
  }
  if (x instanceof Array) {
    return x;
  }
  if (!(arr instanceof Array)) {
    arr = [];
  }
  if (arr.indexOf(x) >= 0) {
    arr.splice(arr.indexOf(x), 1);
  } else {
    arr.push(x);
  }
  return arr;
};


},{}],3:[function(require,module,exports){
var sheet;

sheet = function(name) {
  var css, i, returnBoolean, tested;
  tested = sheet.tested;
  if (name in tested) {
    return tested[name];
  }
  i = 0;
  returnBoolean = false;
  while (i < document.styleSheets.length) {
    css = document.styleSheets[i];
    if (css.href && css.href.indexOf(name) >= 0) {
      returnBoolean = true;
      break;
    }
    i++;
  }
  return returnBoolean;
};

sheet.tested = {};

module.exports = sheet;


},{}],4:[function(require,module,exports){
// Determines if the current browser is Internet Explorer.
module.exports = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);

},{}],5:[function(require,module,exports){
var ie, touch;

ie = require("./ie.js");

touch = require("./touch.coffee");

if (touch) {
  module.exports = {
    click: "touchend",
    down: "touchstart",
    up: "touchend",
    over: ie ? "mouseenter" : "mouseover",
    out: ie ? "mouseleave" : "mouseout",
    move: "mousemove"
  };
} else {
  module.exports = {
    click: "click",
    down: "mousedown",
    up: "mouseup",
    over: ie ? "mouseenter" : "mouseover",
    out: ie ? "mouseleave" : "mouseout",
    move: "mousemove"
  };
}


},{"./ie.js":4,"./touch.coffee":10}],6:[function(require,module,exports){
var prefix;

prefix = function() {
  var val;
  if ("-webkit-transform" in document.body.style) {
    val = "-webkit-";
  } else if ("-moz-transform" in document.body.style) {
    val = "-moz-";
  } else if ("-ms-transform" in document.body.style) {
    val = "-ms-";
  } else if ("-o-transform" in document.body.style) {
    val = "-o-";
  } else {
    val = "";
  }
  prefix = function() {
    return val;
  };
  return val;
};

module.exports = prefix;


},{}],7:[function(require,module,exports){
module.exports = d3.select("html").attr("dir") === "rtl";


},{}],8:[function(require,module,exports){
module.exports = {
  "y": function() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset :
           (document.documentElement || document.body.parentNode || document.body).scrollTop
  },
  "x": function() {
    return (window.pageXOffset !== undefined) ? window.pageXOffset :
           (document.documentElement || document.body.parentNode || document.body).scrollLeft
  }
}

},{}],9:[function(require,module,exports){
var scrollbar;

scrollbar = function() {
  var inner, outer, val, w1, w2;
  inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";
  outer = document.createElement("div");
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);
  document.body.appendChild(outer);
  w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }
  document.body.removeChild(outer);
  val = w1 - w2;
  scrollbar = function() {
    return val;
  };
  return val;
};

module.exports = scrollbar;


},{}],10:[function(require,module,exports){
module.exports = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch ? true : false;


},{}],11:[function(require,module,exports){
module.exports = function(color) {
  var hsl;
  hsl = d3.hsl(color);
  if (hsl.l > .45) {
    if (hsl.s > .8) {
      hsl.s = 0.8;
    }
    hsl.l = 0.45;
  }
  return hsl.toString();
};


},{}],12:[function(require,module,exports){
module.exports = function(color, increment) {
  var c;
  if (increment === void 0) {
    increment = 0.5;
  }
  c = d3.hsl(color);
  increment = (1 - c.l) * increment;
  c.l += increment;
  c.s -= increment;
  return c.toString();
};


},{}],13:[function(require,module,exports){
module.exports = function(c1, c2, o1, o2) {
  var b, g, r;
  if (!o1) {
    o1 = 1;
  }
  if (!o2) {
    o2 = 1;
  }
  c1 = d3.rgb(c1);
  c2 = d3.rgb(c2);
  r = (o1 * c1.r + o2 * c2.r - o1 * o2 * c2.r) / (o1 + o2 - o1 * o2);
  g = (o1 * c1.g + o2 * c2.g - o1 * o2 * c2.g) / (o1 + o2 - o1 * o2);
  b = (o1 * c1.b + o2 * c2.b - o1 * o2 * c2.b) / (o1 + o2 - o1 * o2);
  return d3.rgb(r, g, b).toString();
};


},{}],14:[function(require,module,exports){
var defaultScale;

defaultScale = require("./scale.coffee");

module.exports = function(x, scale) {
  var rand_int;
  rand_int = x || Math.floor(Math.random() * 20);
  scale = scale || defaultScale;
  return scale(rand_int);
};


},{"./scale.coffee":15}],15:[function(require,module,exports){
module.exports = d3.scaleOrdinal().range(["#b22200", "#282F6B", "#EACE3F", "#B35C1E", "#224F20", "#5F487C", "#759143", "#419391", "#993F88", "#e89c89", "#ffee8d", "#afd5e8", "#f7ba77", "#a5c697", "#c5b5e5", "#d1d392", "#bbefd0", "#e099cf"]);


},{}],16:[function(require,module,exports){
module.exports = function(a, b) {
  var aHSL, bHSL;
  aHSL = d3.hsl(a);
  bHSL = d3.hsl(b);
  a = aHSL.s === 0 ? 361 : aHSL.h;
  b = bHSL.s === 0 ? 361 : bHSL.h;
  if (a === b) {
    return aHSL.l - bHSL.l;
  } else {
    return a - b;
  }
};


},{}],17:[function(require,module,exports){
module.exports = function(color) {
  var b, g, r, rgbColor, yiq;
  rgbColor = d3.rgb(color);
  r = rgbColor.r;
  g = rgbColor.g;
  b = rgbColor.b;
  yiq = (r * 299 + g * 587 + b * 114) / 1000;
  if (yiq >= 128) {
    return "#444444";
  } else {
    return "#f7f7f7";
  }
};


},{}],18:[function(require,module,exports){
module.exports = function(color) {
  var blackColors, testColor, userBlack;
  color = color + "";
  color = color.replace(RegExp(" ", "g"), "");
  if (color.indexOf("rgb") === 0) {
    color = color.split("(")[1].split(")")[0].split(",").slice(0, 3).join(",");
  }
  if (color.indexOf("hsl") === 0) {
    color = color.split(",")[2].split(")")[0];
  }
  testColor = d3.rgb(color).toString();
  blackColors = ["black", "#000", "#000000", "0%", "0,0,0"];
  userBlack = blackColors.indexOf(color) >= 0;
  return testColor !== "#000000" || userBlack;
};


},{}],19:[function(require,module,exports){
var ie, print, wiki;

ie = require("../../client/ie.js");

wiki = require("./wiki.coffee");

print = function(type, message, style) {
  style = style || "";
  if (ie || typeof InstallTrigger !== 'undefined') {
    console.log("[ D3plus ] " + message);
  } else if (type.indexOf("group") === 0) {
    console[type]("%c[ D3plus ]%c " + message, "font-weight: 800;" + "color: #b35c1e;" + "margin-left: 0px;", "font-weight:200;" + style);
  } else {
    console[type]("%c" + message, style + "font-weight:200;");
  }
};

print.comment = function(message) {
  this("log", message, "color:#aaa;");
};

print.error = function(message, url) {
  this("groupCollapsed", "ERROR: " + message, "font-weight:800;color:#D74B03;");
  this.stack();
  this.wiki(url);
  this.groupEnd();
};

print.group = function(message) {
  this("group", message, "color:#888;");
};

print.groupCollapsed = function(message) {
  this("groupCollapsed", message, "color:#888;");
};

print.groupEnd = function() {
  if (!ie) {
    console.groupEnd();
  }
};

print.log = function(message) {
  this("log", message, "color:#444444;");
};

print.stack = function() {
  var err, line, message, page, splitter, stack, url;
  if (!ie) {
    err = new Error();
    if (err.stack) {
      stack = err.stack.split("\n");
      stack = stack.filter(function(e) {
        return e.indexOf("Error") !== 0 && e.indexOf("d3plus.js:") < 0 && e.indexOf("d3plus.min.js:") < 0;
      });
      if (stack.length && stack[0].length) {
        splitter = window.chrome ? "at " : "@";
        url = stack[0];
        if (url.indexOf(splitter) >= 0) {
          url = url.split(splitter)[1];
        }
        stack = url.split(":");
        if (stack.length === 3) {
          stack.pop();
        }
        line = stack.pop();
        page = stack.join(":").split("/");
        page = page[page.length - 1];
        message = "line " + line + " of " + page + ": " + url;
        this("log", message, "color:#D74B03;");
      }
    }
  }
};

print.time = function(message) {
  if (!ie) {
    console.time(message);
  }
};

print.timeEnd = function(message) {
  if (!ie) {
    console.timeEnd(message);
  }
};

print.warning = function(message, url) {
  this("groupCollapsed", message, "color:#888;");
  this.stack();
  this.wiki(url);
  this.groupEnd();
};

print.wiki = function(url) {
  if (url) {
    if (url in wiki) {
      url = d3plus.repo + "wiki/" + wiki[url];
    }
    this("log", "documentation: " + url, "color:#aaa;");
  }
};

module.exports = print;


},{"../../client/ie.js":4,"./wiki.coffee":20}],20:[function(require,module,exports){
module.exports = {
  active: "Visualizations#active",
  aggs: "Visualizations#aggs",
  alt: "Forms#alt",
  attrs: "Visualizations#attrs",
  axes: "Visualizations#axes",
  background: "Visualizations#background",
  color: "Visualizations#color",
  cols: "Visualizations#cols",
  config: "Visualizations#config",
  container: "Visualizations#container",
  coords: "Visualizations#coords",
  csv: "Visualizations#csv",
  data: "Visualizations#data",
  depth: "Visualizations#depth",
  descs: "Visualizations#descs",
  dev: "Visualizations#dev",
  draw: "Visualizations#draw",
  edges: "Visualizations#edges",
  error: "Visualizations#error",
  focus: "Visualizations#focus",
  font: "Visualizations#font",
  footer: "Visualizations#footer",
  format: "Visualizations#format",
  height: "Visualizations#height",
  history: "Visualizations#history",
  hover: "Forms#hover",
  icon: "Visualizations#icon",
  id: "Visualizations#id",
  keywords: "Forms#keywords",
  labels: "Visualizations#labels",
  legend: "Visualizations#legend",
  links: "Visualizations#links",
  margin: "Visualizations#margin",
  messages: "Visualizations#messages",
  method: "Methods",
  mouse: "Visualizations#mouse",
  nodes: "Visualizations#nodes",
  open: "Forms#open",
  order: "Visualizations#order",
  remove: "Forms#remove",
  search: "Forms#search",
  select: "Forms#select",
  selectAll: "Forms#selectAll",
  shape: "Visualizations#shape",
  size: "Visualizations#size",
  temp: "Visualizations#temp",
  text: "Visualizations#text",
  time: "Visualizations#time",
  timeline: "Visualizations#timeline",
  timing: "Visualizations#timing",
  title: "Visualizations#title",
  tooltip: "Visualizations#tooltip",
  total: "Visualizations#total",
  type: "Visualizations#type",
  ui: "Visualizations#ui",
  width: "Visualizations#width",
  x: "Visualizations#x",
  y: "Visualizations#y",
  zoom: "Visualizations#zoom"
};


},{}],21:[function(require,module,exports){
module.exports = function(type) {
  var attrs, styles, tester;
  if (["div", "svg"].indexOf(type) < 0) {
    type = "div";
  }
  styles = {
    position: "absolute",
    left: "-9999px",
    top: "-9999px",
    visibility: "hidden",
    display: "block"
  };
  attrs = type === "div" ? {} : {
    position: "absolute"
  };
  tester = d3.select("body").selectAll(type + ".d3plus_tester").data([0]);
  tester.enter().append(type).attr("class", "d3plus_tester").style(styles).attr(attrs);
  return tester;
};


},{}],22:[function(require,module,exports){
module.exports = {
  dev: {
    accepted: "{0} is not an accepted value for {1}, please use one of the following: {2}.",
    deprecated: "the {0} method has been removed, please update your code to use {1}.",
    noChange: "{0} was not updated because it did not change.",
    noContainer: "cannot find a container on the page matching {0}.",
    of: "of",
    oldStyle: "style properties for {0} have now been embedded directly into .{1}().",
    sameEdge: "edges cannot link to themselves. automatically removing self-referencing edge {0}.",
    set: "{0} has been set.",
    setLong: "{0} has been set to {1}.",
    setContainer: "please define a container div using .container()"
  },
  error: {
    accepted: "{0} is not an accepted {1} for {2} visualizations, please use one of the following: {3}.",
    connections: "no connections available for {0}.",
    data: "no data available",
    dataYear: "no data available for {0}.",
    lib: "{0} visualizations require loading the {1} library.",
    libs: "{0} visualizations require loading the following libraries: {1}.",
    method: "{0} visualizations require setting the {1} method.",
    methods: "{0} visualizations require setting the following methods: {1}."
  },
  format: {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    dateTime: "%A, %B %-d, %Y %X",
    date: "%-m/%-d/%Y",
    time: "%I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  lowercase: ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "into", "near", "nor", "of", "on", "onto", "or", "per", "that", "the", "to", "with", "via", "vs", "vs."],
  message: {
    data: "analyzing data",
    draw: "drawing visualization",
    initializing: "initializing {0}",
    loading: "loading data",
    tooltipReset: "resetting tooltips",
    ui: "updating ui"
  },
  method: {
    active: "active segments",
    color: "color",
    depth: "depth",
    dev: "verbose",
    focus: "focus",
    icon: "icon",
    id: "id",
    height: "height",
    labels: "labels",
    legend: "legend",
    margin: "margin",
    messages: "status messages",
    mode: "mode",
    mute: "hide",
    order: "order",
    search: "search",
    shape: "shape",
    size: "size",
    solo: "isolate",
    style: "style",
    temp: "temporary segments",
    text: "text",
    time: "time",
    timeline: "timeline",
    total: "total segments",
    type: "type",
    width: "width",
    x: "x axis",
    y: "y axis",
    zoom: "zoom"
  },
  time: ["date", "day", "month", "time", "year"],
  timeFormat: {
    FullYear: "%Y",
    Month: "%B",
    MonthSmall: "%b",
    Date: "%A %-d",
    DateSmall: "%-d",
    Hours: "%I %p",
    Minutes: "%I:%M",
    Seconds: "%Ss",
    Milliseconds: "%Lms",
    "FullYear-Month": "%b %Y",
    "FullYear-Date": "%-m/%-d/%Y",
    "Month-Date": "%b %-d",
    "Hours-Minutes": "%I:%M %p",
    "Hours-Seconds": "%I:%M:%S %p",
    "Hours-Milliseconds": "%H:%M:%S.%L",
    "Minutes-Seconds": "%I:%M:%S %p",
    "Minutes-Milliseconds": "%H:%M:%S.%L",
    "Seconds-Milliseconds": "%H:%M:%S.%L"
  },
  ui: {
    and: "and",
    back: "back",
    collapse: "click to collapse",
    error: "error",
    expand: "click to expand",
    including: "including",
    iqr: "interquartile range for {0}",
    loading: "loading...",
    max: "maximum",
    median: "median",
    min: "minimum",
    more: "{0} more",
    moreInfo: "click for more info",
    or: "or",
    noResults: "no results matching {0}.",
    percentile: "{0} percentile",
    primary: "primary connections",
    quartile_first: "first quartile",
    quartile_third: "third quartile",
    share: "share",
    total: "total",
    tukey_bottom: "bottom tukey",
    tukey_top: "top tukey",
    values: "values"
  },
  uppercase: ["CEO", "CEOs", "CFO", "CFOs", "CNC", "COO", "COOs", "CPU", "CPUs", "ER", "GDP", "HVAC", "ID", "IT", "PCP", "R&D", "TV", "UI"],
  visualization: {
    bar: "Bar Chart",
    box: "Box Plot",
    bubbles: "Bubbles",
    chart: "Chart",
    geo_map: "Geo Map",
    line: "Line Plot",
    network: "Network",
    paths: "Paths",
    pie: "Pie Chart",
    rings: "Rings",
    scatter: "Scatter Plot",
    stacked: "Stacked Area",
    table: "Table",
    tree_map: "Tree Map"
  }
};


},{}],23:[function(require,module,exports){
module.exports = {
  en_US: require("./languages/en_US.coffee")
};


},{"./languages/en_US.coffee":22}],24:[function(require,module,exports){
var checkObject, copy, createFunction, initialize, print, process, setMethod, stringFormat, validObject;

copy = require("../../util/copy.coffee");

print = require("../console/print.coffee");

process = require("./process/detect.coffee");

setMethod = require("./set.coffee");

stringFormat = require("../../string/format.js");

validObject = require("../../object/validate.coffee");

module.exports = function(vars, methods) {
  var method, obj, results;
  results = [];
  for (method in methods) {
    obj = methods[method];
    vars[method] = copy(obj);
    vars[method].initialized = initialize(vars, vars[method], method);
    results.push(vars.self[method] = createFunction(vars, method));
  }
  return results;
};

initialize = function(vars, obj, method, p) {
  var d, deps, i, len, o;
  obj.previous = false;
  obj.changed = false;
  obj.initialized = false;
  obj.callback = false;
  if ("init" in obj && (!("value" in obj))) {
    obj.value = obj.init(vars);
    delete obj.init;
  }
  if ("process" in obj) {
    obj.value = process(vars, obj, obj.value);
  }
  for (o in obj) {
    if (o === "deprecates") {
      deps = obj[o] instanceof Array ? obj[o] : [obj[o]];
      for (i = 0, len = deps.length; i < len; i++) {
        d = deps[i];
        vars.self[d] = (function(dep, n) {
          return function(x) {
            var doc, rec, str;
            str = vars.format.locale.value.dev.deprecated;
            dep = "." + dep + "()";
            rec = p ? "\"" + n + "\" in ." + p + "()" : "." + n + "()";
            doc = p || n;
            print.error(stringFormat(str, dep, rec), doc);
            return vars.self;
          };
        })(d, method);
      }
    } else if (o === "global") {
      if (!(method in vars)) {
        vars[method] = [];
      }
    } else if (o !== "value") {
      if (validObject(obj[o])) {
        initialize(vars, obj[o], o, method);
      }
    }
  }
  return true;
};

createFunction = function(vars, key) {
  return function(user, callback) {
    var accepted, checkFont, checkValue, fontAttr, fontAttrValue, s, starting, str;
    accepted = "accepted" in vars[key] ? vars[key].accepted : null;
    if (typeof accepted === "function") {
      accepted = accepted(vars);
    }
    if (!(accepted instanceof Array)) {
      accepted = [accepted];
    }
    if (user === Object) {
      return vars[key];
    } else if (!arguments.length && accepted.indexOf(void 0) < 0) {
      if ("value" in vars[key]) {
        return vars[key].value;
      } else {
        return vars[key];
      }
    }
    if (key === "style" && typeof user === "object") {
      str = vars.format.locale.value.dev.oldStyle;
      for (s in user) {
        print.warning(stringFormat(str, "\"" + s + "\"", s), s);
        vars.self[s](user[s]);
      }
    }
    if (key === "font") {
      if (typeof user === "string") {
        user = {
          family: user
        };
      }
      starting = true;
      checkValue = function(o, a, m, v) {
        if (validObject(o[m]) && a in o[m]) {
          if (validObject(o[m][a])) {
            if (o[m][a].process) {
              o[m][a].value = o[m][a].process(v);
            } else {
              o[m][a].value = v;
            }
          } else {
            o[m][a] = v;
          }
        }
      };
      checkFont = function(o, a, v) {
        var m;
        if (validObject(o)) {
          if (starting) {
            for (m in o) {
              checkValue(o, a, m, v);
            }
          } else if ("font" in o) {
            checkValue(o, a, "font", v);
          }
          starting = false;
          for (m in o) {
            checkFont(o[m], a, v);
          }
        }
      };
      for (fontAttr in user) {
        fontAttrValue = user[fontAttr];
        if (fontAttr !== "secondary") {
          if (validObject(fontAttrValue)) {
            fontAttrValue = fontAttrValue.value;
          }
          if (fontAttrValue) {
            checkFont(vars, fontAttr, fontAttrValue);
          }
        }
      }
    }
    checkObject(vars, key, vars, key, user);
    if (typeof callback === "function") {
      vars[key].callback = callback;
    }
    if (vars[key].chainable === false) {
      return vars[key].value;
    } else {
      return vars.self;
    }
  };
};

checkObject = function(vars, method, object, key, value) {
  var approvedObject, d, objectOnly, passingObject;
  if (["accepted", "changed", "initialized", "previous", "process"].indexOf(key) < 0) {
    passingObject = validObject(value);
    objectOnly = validObject(object[key]) && "objectAccess" in object[key] && object[key]["objectAccess"] === false;
    approvedObject = passingObject && (objectOnly || ((!("value" in value)) && ((!validObject(object[key])) || (!(d3.keys(value)[0] in object[key])))));
    if (value === null || !passingObject || approvedObject) {
      setMethod(vars, method, object, key, value);
    } else if (passingObject) {
      for (d in value) {
        checkObject(vars, method, object[key], d, value[d]);
      }
    }
  }
};


},{"../../object/validate.coffee":33,"../../string/format.js":34,"../../util/copy.coffee":65,"../console/print.coffee":19,"./process/detect.coffee":25,"./set.coffee":27}],25:[function(require,module,exports){
var copy, update;

copy = require("../../../util/copy.coffee");

update = require("../../../array/update.coffee");

module.exports = function(vars, object, value) {
  if (object.process === Array) {
    return update(copy(object.value), value);
  } else if (typeof object.process === "object" && typeof value === "string") {
    return object.process[value];
  } else if (typeof object.process === "function") {
    return object.process(value, vars, object);
  } else {
    return value;
  }
};


},{"../../../array/update.coffee":2,"../../../util/copy.coffee":65}],26:[function(require,module,exports){
var contains, format, list, print;

contains = require("../../array/contains.coffee");

format = require("../../string/format.js");

list = require("../../string/list.coffee");

print = require("../console/print.coffee");

module.exports = function(vars, accepted, value, method, text) {
  var a, allowed, app, i, len, recs, str, val;
  if (typeof accepted === "function") {
    accepted = accepted(vars);
  }
  if (!(accepted instanceof Array)) {
    accepted = [accepted];
  }
  allowed = contains(accepted, value);
  if (allowed === false && value !== void 0) {
    recs = [];
    val = JSON.stringify(value);
    if (typeof value !== "string") {
      val = "\"" + val + "\"";
    }
    for (i = 0, len = accepted.length; i < len; i++) {
      a = accepted[i];
      if (typeof a === "string") {
        recs.push("\"" + a + "\"");
      } else if (typeof a === "function") {
        recs.push(a.toString().split("()")[0].substring(9));
      } else if (a === void 0) {
        recs.push("undefined");
      } else {
        recs.push(JSON.stringify(a));
      }
    }
    recs = list(recs, vars.format.locale.value.ui.or);
    if (vars.type && ["mode", "shape"].indexOf(method) >= 0) {
      str = vars.format.locale.value.error.accepted;
      app = vars.format.locale.value.visualization[vars.type.value] || vars.type.value;
      print.warning(format(str, val, method, app, recs), method);
    } else {
      str = vars.format.locale.value.dev.accepted;
      print.warning(format(str, val, text, recs), method);
    }
  }
  return !allowed;
};


},{"../../array/contains.coffee":1,"../../string/format.js":34,"../../string/list.coffee":35,"../console/print.coffee":19}],27:[function(require,module,exports){
var copy, d3selection, mergeObject, print, process, rejected, stringFormat, updateArray, validObject;

copy = require("../../util/copy.coffee");

d3selection = require("../../util/d3selection.coffee");

validObject = require("../../object/validate.coffee");

mergeObject = require("../../object/merge.coffee");

print = require("../console/print.coffee");

process = require("./process/detect.coffee");

rejected = require("./rejected.coffee");

stringFormat = require("../../string/format.js");

updateArray = require("../../array/update.coffee");

module.exports = function(vars, method, object, key, value) {
  var accepted, c, callback, d3object, hasValue, id, k, longArray, n, parentKey, str, text, typeFunction, valString;
  if (key === "value" || !key || key === method) {
    text = "." + method + "()";
  } else {
    text = "\"" + key + "\" " + vars.format.locale.value.dev.of + " ." + method + "()";
  }
  if (key === "value" && "accepted" in object) {
    accepted = object.accepted;
  } else if (validObject(object[key]) && "accepted" in object[key]) {
    accepted = object[key].accepted;
  } else {
    accepted = [value];
  }
  if (!rejected(vars, accepted, value, method, text)) {
    if (validObject(object[key]) && "value" in object[key]) {
      parentKey = key;
      object = object[key];
      key = "value";
    }
    if (key === "value" && "process" in object) {
      value = process(vars, object, value);
    }
    if ((!(object[key] instanceof Array)) && object[key] === value && value !== void 0) {
      str = vars.format.locale.value.dev.noChange;
      if (vars.dev.value) {
        print.comment(stringFormat(str, text));
      }
    } else {
      object.changed = true;
      if (object.loaded) {
        object.loaded = false;
      }
      if ("history" in vars && method !== "draw") {
        c = copy(object);
        c.method = method;
        vars.history.chain.push(c);
      }
      object.previous = object[key];
      if ("id" in vars && key === "value" && "nesting" in object) {
        if (method !== "id") {
          if (typeof object.nesting !== "object") {
            object.nesting = {};
          }
          if (validObject(value)) {
            for (id in value) {
              if (typeof value[id] === "string") {
                value[id] = [value[id]];
              }
            }
            object.nesting = mergeObject(object.nesting, value);
            if (!(vars.id.value in object.nesting)) {
              object.nesting[vars.id.value] = value[d3.keys(value)[0]];
            }
          } else if (value instanceof Array) {
            object.nesting[vars.id.value] = value;
          } else {
            object.nesting[vars.id.value] = [value];
          }
          object[key] = object.nesting[vars.id.value][0];
        } else {
          if (value instanceof Array) {
            object.nesting = value;
            if ("depth" in vars && vars.depth.value < value.length) {
              object[key] = value[vars.depth.value];
            } else {
              object[key] = value[0];
              if ("depth" in vars) {
                vars.depth.value = 0;
              }
            }
          } else {
            object[key] = value;
            object.nesting = [value];
            if ("depth" in vars) {
              vars.depth.value = 0;
            }
          }
        }
      } else if (method === "depth") {
        if (value >= vars.id.nesting.length) {
          vars.depth.value = vars.id.nesting.length - 1;
        } else if (value < 0) {
          vars.depth.value = 0;
        } else {
          vars.depth.value = value;
        }
        vars.id.value = vars.id.nesting[vars.depth.value];
        if (typeof vars.text.nesting === "object") {
          n = vars.text.nesting[vars.id.value];
          if (n) {
            vars.text.nesting[vars.id.value] = typeof n === "string" ? [n] : n;
            vars.text.value = (n instanceof Array ? n[0] : n);
          }
        }
      } else if (validObject(object[key]) && validObject(value)) {
        object[key] = mergeObject(object[key], value);
      } else {
        object[key] = value;
      }
      if (key === "value" && object.global) {
        hasValue = object[key].length > 0;
        k = parentKey || key;
        if (k in vars && ((hasValue && vars.data[k].indexOf(method) < 0) || (!hasValue && vars.data[k].indexOf(method) >= 0))) {
          vars.data[k] = updateArray(vars.data[k], method);
        }
      }
      if (key === "value" && object.dataFilter && vars.data && vars.data.filters.indexOf(method) < 0) {
        vars.data.filters.push(method);
      }
      if (vars.dev.value && object.changed && object[key] !== void 0) {
        longArray = object[key] instanceof Array && object[key].length > 10;
        d3object = d3selection(object[key]);
        typeFunction = typeof object[key] === "function";
        valString = (!longArray && !d3object && !typeFunction ? (typeof object[key] === "string" ? object[key] : JSON.stringify(object[key])) : null);
        if (valString !== null && valString.length < 260) {
          str = vars.format.locale.value.dev.setLong;
          print.log(stringFormat(str, text, "\"" + valString + "\""));
        } else {
          str = vars.format.locale.value.dev.set;
          print.log(stringFormat(str, text));
        }
      }
    }
    if (key === "value" && object.callback && !object.url) {
      callback = typeof object.callback === "function" ? object.callback : object.callback.value;
      if (callback) {
        callback(value, vars.self);
      }
    }
  }
};


},{"../../array/update.coffee":2,"../../object/merge.coffee":32,"../../object/validate.coffee":33,"../../string/format.js":34,"../../util/copy.coffee":65,"../../util/d3selection.coffee":66,"../console/print.coffee":19,"./process/detect.coffee":25,"./rejected.coffee":26}],28:[function(require,module,exports){
var fontTester;

fontTester = require("../core/font/tester.coffee");

module.exports = function(words, style, opts) {
  var attr, getHeight, getWidth, sizes, spacing, tester, tspans;
  if (!opts) {
    opts = {};
  }
  style = style || {};
  tester = opts.parent || fontTester("svg").append("text");
  sizes = [];
  if (!(words instanceof Array)) {
    words = [words];
  }
  tspans = tester.selectAll("tspan").data(words);
  attr = {
    left: "0px",
    position: "absolute",
    top: "0px",
    x: 0,
    y: 0
  };
  spacing = 0;
  if ("letter-spacing" in style) {
    spacing = parseFloat(style["letter-spacing"]);
    delete style["letter-spacing"];
  }
  getWidth = function(elem) {
    var add;
    add = 0;
    if (spacing) {
      add = (d3.select(elem).text().length - 1) * spacing;
    }
    return elem.getComputedTextLength() + add;
  };
  getHeight = function(elem) {
    return elem.parentNode.getBBox().height || elem.getBoundingClientRect().height;
  };
  tspans.enter().append("tspan").text(String).style(style).attr(attr).each(function(d) {
    if (typeof opts.mod === "function") {
      return opts.mod(this);
    }
  }).each(function(d) {
    var children, height, width;
    children = d3.select(this).selectAll("tspan");
    if (children.size()) {
      width = [];
      children.each(function() {
        return width.push(getWidth(this));
      });
      width = d3.max(width);
    } else {
      width = getWidth(this);
    }
    height = getHeight(this);
    return sizes.push({
      height: height,
      text: d,
      width: width
    });
  });
  tspans.remove();
  if (!opts.parent) {
    tester.remove();
  }
  return sizes;
};


},{"../core/font/tester.coffee":21}],29:[function(require,module,exports){
var fontTester, validate;

fontTester = require("../core/font/tester.coffee");

validate = function(fontList) {
  var completed, family, font, fontString, i, j, len, len1, monospace, proportional, testElement, testWidth, tester, valid;
  if (!(fontList instanceof Array)) {
    fontList = fontList.split(",");
  }
  for (i = 0, len = fontList.length; i < len; i++) {
    font = fontList[i];
    font.trim();
  }
  fontString = fontList.join(", ");
  completed = validate.complete;
  if (fontString in completed) {
    return completed[fontString];
  }
  testElement = function(font) {
    return tester.append("span").style("font-family", font).style("font-size", "32px").style("padding", "0px").style("margin", "0px").text("abcdefghiABCDEFGHI_!@#$%^&*()_+1234567890");
  };
  testWidth = function(font, control) {
    var elem, width1, width2;
    elem = testElement(font);
    width1 = elem.node().offsetWidth;
    width2 = control.node().offsetWidth;
    elem.remove();
    return width1 !== width2;
  };
  tester = fontTester("div");
  monospace = testElement("monospace");
  proportional = testElement("sans-serif");
  for (j = 0, len1 = fontList.length; j < len1; j++) {
    family = fontList[j];
    valid = testWidth(family + ",monospace", monospace);
    if (!valid) {
      valid = testWidth(family + ",sans-serif", proportional);
    }
    if (valid) {
      valid = family;
      break;
    }
  }
  if (!valid) {
    valid = "sans-serif";
  }
  monospace.remove();
  proportional.remove();
  completed[fontString] = valid;
  return valid;
};

validate.complete = {};

module.exports = validate;


},{"../core/font/tester.coffee":21}],30:[function(require,module,exports){

/**
 * @class d3plus
 */
var d3plus, message, stylesheet;

d3plus = {};


/**
 * The current version of **D3plus** you are using. Returns a string in
 * [semantic versioning](http://semver.org/) format.
 * @property d3plus.version
 * @for d3plus
 * @type String
 * @static
 */

d3plus.version = "1.9.9 - Noesys";


/**
 * The URL for the repo, used internally for certain error messages.
 * @property d3plus.repo
 * @for d3plus
 * @type String
 * @static
 */

d3plus.repo = "https://github.com/noesys/d3plus/";


/**
 * Utilities related to modifying arrays.
 * @class d3plus.array
 * @for d3plus
 * @static
 */


/**
 * Utilities related to the client's browser.
 * @class d3plus.client
 * @for d3plus
 * @static
 */

d3plus.client = {
  css: require("./client/css.coffee"),
  ie: require("./client/ie.js"),
  pointer: require("./client/pointer.coffee"),
  prefix: require("./client/prefix.coffee"),
  rtl: require("./client/rtl.coffee"),
  scroll: require("./client/scroll.js"),
  scrollbar: require("./client/scrollbar.coffee"),
  touch: require("./client/touch.coffee")
};


/**
 * Utilities related to color manipulation.
 * @class d3plus.color
 * @for d3plus
 * @static
 */

d3plus.color = {
  legible: require("./color/legible.coffee"),
  lighter: require("./color/lighter.coffee"),
  mix: require("./color/mix.coffee"),
  random: require("./color/random.coffee"),
  scale: require("./color/scale.coffee"),
  sort: require("./color/sort.coffee"),
  text: require("./color/text.coffee"),
  validate: require("./color/validate.coffee")
};


/**
 * Utilities related to manipulating data.
 * @class d3plus.data
 * @for d3plus
 * @static
 */


/**
 * Utilities related to fonts.
 * @class d3plus.font
 * @for d3plus
 * @static
 */

d3plus.font = {
  sizes: require("./font/sizes.coffee"),
  validate: require("./font/validate.coffee")
};


/**
 * D3plus Forms
 * @class d3plus.form
 * @for d3plus
 */


/**
 * Utilities related to geometric algorithms.
 * @class d3plus.geom
 * @for d3plus
 * @static
 */


/**
 * Utilities related to network graphs.
 * @class d3plus.network
 * @for d3plus
 * @static
 */


/**
 * Utilities that process numbers.
 * @class d3plus.number
 * @for d3plus
 * @static
 */

d3plus.number = {
  format: require("./number/format.coffee")
};


/**
 * D3plus features a set of methods that relate to various object properties. These methods may be used outside of the normal constraints of the visualizations.
 * @class d3plus.object
 * @for d3plus
 * @static
 */

d3plus.object = {
  merge: require("./object/merge.coffee"),
  validate: require("./object/validate.coffee")
};


/**
 * Utilities that process strings.
 * @class d3plus.string
 * @for d3plus
 * @static
 */

d3plus.string = {
  format: require("./string/format.js"),
  list: require("./string/list.coffee"),
  strip: require("./string/strip.js"),
  title: require("./string/title.coffee")
};


/**
 * D3plus SVG Textwrapping
 * @class d3plus.textwrap
 * @for d3plus
 */

d3plus.textwrap = require("./textwrap/textwrap.coffee");


/**
 * D3plus Tooltips
 * @class d3plus.tooltip
 * @for d3plus
 */

d3plus.tooltip = {
  create: require("./tooltip/create.js"),
  move: require("./tooltip/move.coffee"),
  remove: require("./tooltip/remove.coffee")
};


/**
 * D3plus features Utilities that can be used to help with some common javascript processes.
 * @class d3plus.util
 * @for d3plus
 * @static
 */


/**
 * D3plus Visualizations
 * @class d3plus.viz
 * @for d3plus
 */

stylesheet = require("./client/css.coffee");

message = require("./core/console/print.coffee");

if (stylesheet("d3plus.css")) {
  message.warning("d3plus.css has been deprecated, you do not need to load this file.", d3plus.repo + "releases/tag/v1.4.0");
}

if (typeof window !== "undefined") {
  window.d3plus = d3plus;
}

module.exports = d3plus;


},{"./client/css.coffee":3,"./client/ie.js":4,"./client/pointer.coffee":5,"./client/prefix.coffee":6,"./client/rtl.coffee":7,"./client/scroll.js":8,"./client/scrollbar.coffee":9,"./client/touch.coffee":10,"./color/legible.coffee":11,"./color/lighter.coffee":12,"./color/mix.coffee":13,"./color/random.coffee":14,"./color/scale.coffee":15,"./color/sort.coffee":16,"./color/text.coffee":17,"./color/validate.coffee":18,"./core/console/print.coffee":19,"./font/sizes.coffee":28,"./font/validate.coffee":29,"./number/format.coffee":31,"./object/merge.coffee":32,"./object/validate.coffee":33,"./string/format.js":34,"./string/list.coffee":35,"./string/strip.js":36,"./string/title.coffee":37,"./textwrap/textwrap.coffee":61,"./tooltip/create.js":62,"./tooltip/move.coffee":63,"./tooltip/remove.coffee":64}],31:[function(require,module,exports){
var defaultLocale;

defaultLocale = require("../core/locale/languages/en_US.coffee");

module.exports = function(number, opts) {
  var affixes, format, key, labels, length, locale, ret, sigs, symbol, time, vars, zeros;
  if (number === void 0 || number === null || number === false) {
    return "";
  }
  if (!opts) {
    opts = {};
  }
  if ("locale" in opts) {
    locale = opts.locale;
  } else {
    locale = defaultLocale;
  }
  time = locale.time.slice();
  format = d3.locale(locale.format);
  if (!opts) {
    opts = {};
  }
  vars = opts.vars || {};
  key = opts.key;
  labels = "labels" in opts ? opts.labels : true;
  length = number.toString().split(".")[0].length;
  if (vars.time && vars.time.value) {
    time.push(vars.time.value);
  }
  if (typeof key === "string" && time.indexOf(key.toLowerCase()) >= 0) {
    ret = number;
  } else if (key === "share") {
    if (number === 0) {
      ret = 0;
    } else if (number >= 100) {
      ret = format.numberFormat(",f")(number);
    } else if (number > 99) {
      ret = format.numberFormat(".3g")(number);
    } else {
      ret = format.numberFormat(".2g")(number);
    }
    ret += "%";
  } else if (number < 10 && number > -10) {
    length = number.toString().split(".");
    sigs = 1;
    if (length.length > 1) {
      sigs = d3.min([parseFloat(length[1]).toString().length, 2]);
      if (!((-1 < number && number < 1))) {
        zeros = length[1].length - parseFloat(length[1]).toString().length;
        sigs += 1 + zeros;
      }
    }
    ret = format.numberFormat("." + sigs + "g")(number);
  } else if (length > 3) {
    symbol = d3.formatPrefix(number).symbol;
    symbol = symbol.replace("G", "B");
    number = d3.formatPrefix(number).scale(number);
    number = format.numberFormat(".3g")(number);
    number = number.replace(locale.format.decimal, ".");
    number = parseFloat(number) + "";
    number = number.replace(".", locale.format.decimal);
    ret = number + symbol;
  } else if (length === 3) {
    ret = format.numberFormat(",f")(number);
  } else if (number === 0) {
    ret = 0;
  } else {
    if (number === parseInt(number, 10)) {
      ret = format.numberFormat(".2")(number);
    } else {
      ret = format.numberFormat(".3g")(number);
    }
  }
  if (ret.length > 2 && "" + ret.indexOf(".0") === ret.length - 2) {
    ret = ret.slice(0, ret.length - 2);
  }
  if (labels && key && "format" in vars && key in vars.format.affixes.value) {
    affixes = vars.format.affixes.value[key];
    return affixes[0] + ret + affixes[1];
  } else {
    return ret;
  }
};


},{"../core/locale/languages/en_US.coffee":22}],32:[function(require,module,exports){
var d3selection, validate;

d3selection = require("../util/d3selection.coffee");

validate = require("./validate.coffee");


/**
 * Given any two objects, this method will merge the two objects together, returning a new third object. The values of the second object always overwrite the first.
 * @method d3plus.object.merge
 * @for d3plus.object
 * @param obj1 {Object} The primary object.
 * @param obj2 {Object} The secondary object to merge into the first.
 * @return {Object}
 */

module.exports = function(obj1, obj2) {
  var copyObject, obj3;
  copyObject = function(obj, ret, shallow) {
    var k, results, v;
    results = [];
    for (k in obj) {
      v = obj[k];
      if (typeof v !== "undefined") {
        if (!shallow && validate(v)) {
          if (typeof ret[k] !== "object") {
            ret[k] = {};
          }
          results.push(copyObject(v, ret[k], k.indexOf("d3plus") === 0));
        } else if (!d3selection(v) && v instanceof Array) {
          results.push(ret[k] = v.slice(0));
        } else {
          results.push(ret[k] = v);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  obj3 = {};
  if (obj1) {
    copyObject(obj1, obj3);
  }
  if (obj2) {
    copyObject(obj2, obj3);
  }
  return obj3;
};


},{"../util/d3selection.coffee":66,"./validate.coffee":33}],33:[function(require,module,exports){

/**
 * This function returns true if the variable passed is a literal javascript keyed Object. It's a small, simple function, but it catches some edge-cases that can throw off your code (such as Arrays and `null`).
 * @method d3plus.object.validate
 * @for d3plus.object
 * @param obj {Object} The object to validate.
 * @return {Boolean}
 */
module.exports = function(obj) {
  return obj && obj.constructor === Object;
};


},{}],34:[function(require,module,exports){
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Formats a string similar to Python's "format"
//------------------------------------------------------------------------------
module.exports = function() {

  var args = Array.prototype.slice.call(arguments)
    , str = args.shift()

  str.unkeyed_index = 0;
  return str.replace(/\{(\w*)\}/g, function(match, key) {
      if (key === '') {
          key = str.unkeyed_index;
          str.unkeyed_index++
      }
      if (key == +key) {
          return args[key] !== 'undefined'
              ? args[key]
              : match;
      } else {
          for (var i = 0; i < args.length; i++) {
              if (typeof args[i] === 'object' && typeof args[i][key] !== 'undefined') {
                  return args[i][key];
              }
          }
          return match;
      }
  }.bind(str));

}

},{}],35:[function(require,module,exports){
var format, locale;

format = require("./format.js");

locale = require("../core/locale/languages/en_US.coffee").ui;

module.exports = function(list, andText, max, moreText) {
  var amount;
  if (!(list instanceof Array)) {
    return list;
  } else {
    list = list.slice(0);
  }
  if (!andText) {
    andText = locale.and;
  }
  if (!moreText) {
    moreText = locale.moreText;
  }
  if (list.length === 2) {
    return list.join(" " + andText + " ");
  } else {
    if (max && list.length > max) {
      amount = list.length - max + 1;
      list = list.slice(0, max - 1);
      list[max - 1] = format(moreText, amount);
    }
    if (list.length > 1) {
      list[list.length - 1] = andText + " " + list[list.length - 1];
    }
    return list.join(", ");
  }
};


},{"../core/locale/languages/en_US.coffee":22,"./format.js":34}],36:[function(require,module,exports){
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Removes all non ASCII characters
//------------------------------------------------------------------------------
module.exports = function(value) {

  // great unicode list: http://asecuritysite.com/coding/asc2
  var diacritics = [
    [/[\300-\305]/g, "A"], [/[\340-\345]/g, "a"],
    [/[\306]/g, "AE"], [/[\346]/g, "ae"],
    [/[\337]/g, "B"],
    [/[\307]/g, "C"], [/[\347]/g, "c"],
    [/[\320\336\376]/g, "D"], [/[\360]/g, "d"],
    [/[\310-\313]/g, "E"], [/[\350-\353]/g, "e"],
    [/[\314-\317]/g, "I"], [/[\354-\357]/g, "i"],
    [/[\321]/g, "N"], [/[\361]/g, "n"],
    [/[\322-\326\330]/g, "O"], [/[\362-\366\370]/g, "o"],
    [/[\331-\334]/g, "U"], [/[\371-\374]/g, "u"],
    [/[\327]/g, "x"],
    [/[\335]/g, "Y"], [/[\375\377]/g, "y"]
  ];

  return "" + value.replace(/[^A-Za-z0-9\-_]/g, function(char) {

    if (char === " ") return "-";

    var ret = false;
    for (var d = 0; d < diacritics.length; d++) {
      if (new RegExp(diacritics[d][0]).test(char)) {
        ret = diacritics[d][1];
        break;
      }
    }

    return ret || "";

  });

};

},{}],37:[function(require,module,exports){
var defaultLocale;

defaultLocale = require("../core/locale/languages/en_US.coffee");

module.exports = function(text, opts) {
  var biglow, bigs, key, locale, smalls;
  if (!text) {
    return "";
  }
  if (!opts) {
    opts = {};
  }
  key = opts.key;
  if (text.charAt(text.length - 1) === ".") {
    return text.charAt(0).toUpperCase() + text.substr(1);
  }
  locale = "locale" in this ? this.locale.value : defaultLocale;
  smalls = locale.lowercase.map(function(b) {
    return b.toLowerCase();
  });
  bigs = locale.uppercase;
  bigs = bigs.concat(bigs.map(function(b) {
    return b + "s";
  }));
  biglow = bigs.map(function(b) {
    return b.toLowerCase();
  });
  return text.replace(/[^\s!-#%&(-\x2A,-:;\x3F@\x5B-\x5D_\x7B}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]*/g, function(txt, i) {
    var bigindex, new_txt;
    if (txt) {
      bigindex = biglow.indexOf(txt.toLowerCase());
      if (bigindex >= 0) {
        return new_txt = bigs[bigindex];
      } else if (smalls.indexOf(txt.toLowerCase()) >= 0 && i !== 0 && i !== text.length - 1) {
        return new_txt = txt.toLowerCase();
      } else {
        return new_txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    } else {
      return "";
    }
  });
};


},{"../core/locale/languages/en_US.coffee":22}],38:[function(require,module,exports){
var foreign, tspan;

foreign = require("./foreign.coffee");

tspan = require("./tspan.coffee");

module.exports = function(vars) {
  if (vars.text.html.value) {
    foreign(vars);
  } else {
    tspan(vars);
  }
};


},{"./foreign.coffee":39,"./tspan.coffee":42}],39:[function(require,module,exports){
module.exports = function(vars) {
  var anchor, color, family, opacity, text;
  text = vars.container.value;
  family = text.attr("font-family") || text.style("font-family");
  anchor = vars.align.value || text.attr("text-anchor") || text.style("text-anchor");
  color = text.attr("fill") || text.style("fill");
  opacity = text.attr("opacity") || text.style("opacity");
  anchor = anchor === "end" ? "right" : (anchor === "middle" ? "center" : "left");
  d3.select(text.node().parentNode).append("foreignObject").attr("width", vars.width.value + "px").attr("height", vars.height.value + "px").attr("x", "0px").attr("y", "0px").append("xhtml:div").style("font-family", family).style("font-size", vars.size.value[1] + "px").style("color", color).style("text-align", anchor).style("opacity", opacity).text(vars.text.current);
};


},{}],40:[function(require,module,exports){
module.exports = function(vars) {
  var diff, elem, height, prev, radius, shape, size, width, x, y;
  elem = vars.container.value;
  prev = elem.node().previousElementSibling;
  shape = prev ? prev.tagName.toLowerCase() : "";
  if (prev) {
    prev = d3.select(prev);
  }
  vars.container.x = vars.x.value || parseFloat(elem.attr("x"), 10);
  vars.container.y = vars.y.value || parseFloat(elem.attr("y"), 10);
  if (prev) {
    if (vars.shape.accepted.indexOf(shape) >= 0) {
      vars.self.shape(shape);
    }
    if (shape === "rect") {
      x = parseFloat(prev.attr("x"), 10) || 0;
      y = parseFloat(prev.attr("y"), 10) || 0;
      if (vars.padding.value === false) {
        diff = Math.abs(x - vars.container.x);
        if (diff) {
          vars.self.padding(diff);
        }
      }
      if (!vars.container.x) {
        vars.container.x = x + vars.padding.value;
      }
      if (!vars.container.y) {
        vars.container.y = y + vars.padding.value;
      }
      if (!vars.width.value) {
        width = parseFloat(prev.attr("width" || prev.style("width", 10)));
        vars.self.width(width);
      }
      if (!vars.height.value) {
        height = parseFloat(prev.attr("height" || prev.style("height", 10)));
        vars.self.height(height);
      }
    } else if (shape === "circle") {
      radius = parseFloat(prev.attr("r"), 10);
      x = parseFloat(prev.attr("cx"), 10) || 0;
      x -= radius;
      y = parseFloat(prev.attr("cy"), 10) || 0;
      y -= radius;
      if (vars.padding.value === false) {
        diff = Math.abs(x - vars.container.x);
        if (diff) {
          vars.self.padding(diff);
        }
      }
      if (!vars.container.x) {
        vars.container.x = x + vars.padding.value;
      }
      if (!vars.container.y) {
        vars.container.y = y + vars.padding.value;
      }
      if (!vars.width.value) {
        vars.self.width(radius * 2, 10);
      }
      if (!vars.height.value) {
        vars.self.height(radius * 2, 10);
      }
    } else {
      if (!vars.width.value) {
        vars.self.width(500);
      }
      if (!vars.height.value) {
        vars.self.height(500);
      }
    }
  }
  if (!vars.container.x) {
    vars.container.x = 0;
  }
  if (!vars.container.y) {
    vars.container.y = 0;
  }
  vars.width.inner = vars.width.value - vars.padding.value * 2;
  vars.height.inner = vars.height.value - vars.padding.value * 2;
  size = elem.attr("font-size") || elem.style("font-size");
  size = parseFloat(size, 10);
  vars.container.fontSize = size;
  vars.container.dy = parseFloat(elem.attr("dy"), 10);
  if (!vars.size.value) {
    if (vars.resize.value) {
      return vars.self.size([4, 80]);
    } else {
      return vars.self.size([size / 2, size]);
    }
  }
};


},{}],41:[function(require,module,exports){
module.exports = function(vars) {
  var text;
  if (!vars.text.value) {
    text = vars.container.value.text();
    if (text) {
      if (text.indexOf("tspan") >= 0) {
        text.replace(/\<\/tspan\>\<tspan\>/g, " ");
        text.replace(/\<\/tspan\>/g, "");
        text.replace(/\<tspan\>/g, "");
      }
      text = text.replace(/(\r\n|\n|\r)/gm, "");
      text = text.replace(/^\s+|\s+$/g, "");
      vars.self.text(text);
    }
  }
  if (vars.text.value instanceof Array) {
    vars.text.phrases = vars.text.value.filter(function(t) {
      return ["string", "number"].indexOf(typeof t) >= 0;
    });
  } else {
    vars.text.phrases = [vars.text.value + ""];
  }
  if (!vars.align.value) {
    return vars.container.align = vars.container.value.style("text-anchor") || vars.container.value.attr("text-anchor");
  }
};


},{}],42:[function(require,module,exports){
var rtl;

rtl = require("../../client/rtl.coffee");

module.exports = function(vars) {
  var anchor, dy, ellipsis, fontSize, h, height, line, lineWidth, lines, mirror, newLine, placeWord, progress, reverse, rmod, rotate, rx, ry, space, start, textBox, translate, truncate, valign, width, words, wrap, x, xOffset, y, yOffset;
  newLine = function(first) {
    var tspan;
    if (!reverse || first) {
      tspan = vars.container.value.append("tspan");
    } else {
      tspan = vars.container.value.insert("tspan", "tspan");
    }
    return tspan.attr("x", x + "px").attr("dy", dy + "px").style("baseline-shift", "0%").attr("dominant-baseline", "alphabetic");
  };
  mirror = vars.rotate.value === -90 || vars.rotate.value === 90;
  width = mirror ? vars.height.inner : vars.width.inner;
  height = mirror ? vars.width.inner : vars.height.inner;
  if (vars.shape.value === "circle") {
    anchor = "middle";
  } else {
    anchor = vars.align.value || vars.container.align || "start";
  }
  if (anchor === "end" || (anchor === "start" && rtl)) {
    xOffset = width;
  } else if (anchor === "middle") {
    xOffset = width / 2;
  } else {
    xOffset = 0;
  }
  valign = vars.valign.value || "top";
  x = vars.container.x + xOffset;
  fontSize = vars.resize.value ? vars.size.value[1] : vars.container.fontSize || vars.size.value[0];
  dy = vars.container.dy || fontSize * 1.1;
  textBox = null;
  progress = null;
  words = null;
  reverse = false;
  yOffset = 0;
  if (vars.shape.value === "circle") {
    if (valign === "middle") {
      yOffset = ((height / dy % 1) * dy) / 2;
    } else if (valign === "end") {
      yOffset = (height / dy % 1) * dy;
    }
  }
  vars.container.value.attr("text-anchor", anchor).attr("font-size", fontSize + "px").style("font-size", fontSize + "px").attr("x", vars.container.x).attr("y", vars.container.y);
  truncate = function() {
    textBox.remove();
    if (reverse) {
      line++;
      textBox = vars.container.value.select("tspan");
    } else {
      line--;
      textBox = d3.select(vars.container.value.node().lastChild);
    }
    if (!textBox.empty()) {
      words = textBox.text().match(/[^\s-]+-?/g);
      return ellipsis();
    }
  };
  lineWidth = function() {
    var b;
    if (vars.shape.value === "circle") {
      b = ((line - 1) * dy) + yOffset;
      if (b > height / 2) {
        b += dy;
      }
      return 2 * Math.sqrt(b * ((2 * (width / 2)) - b));
    } else {
      return width;
    }
  };
  ellipsis = function() {
    var lastChar, lastWord;
    if (words && words.length) {
      lastWord = words.pop();
      lastChar = lastWord.charAt(lastWord.length - 1);
      if (lastWord.length === 1 && vars.text.split.value.indexOf(lastWord) >= 0) {
        return ellipsis();
      } else {
        if (vars.text.split.value.indexOf(lastChar) >= 0) {
          lastWord = lastWord.substr(0, lastWord.length - 1);
        }
        textBox.text(words.join(" ") + " " + lastWord + "...");
        if (textBox.node().getComputedTextLength() > lineWidth()) {
          return ellipsis();
        }
      }
    } else {
      return truncate();
    }
  };
  placeWord = function(word) {
    var current, i, joiner, next_char;
    current = textBox.text();
    next_char = "";
    if (reverse) {
      next_char = vars.text.current.charAt(vars.text.current.length - progress.length - 1);
      if (next_char === " ") {
        joiner = "";
        i = 2;
        while (next_char === " ") {
          joiner += " ";
          next_char = vars.text.current.charAt(vars.text.current.length - progress.length - i);
          i++;
        }
      } else {
        joiner = "";
      }
      progress = word + joiner + progress;
      textBox.text(word + joiner + current);
    } else {
      next_char = vars.text.current.charAt(progress.length);
      if (next_char === " ") {
        joiner = "";
        i = 1;
        while (next_char === " ") {
          joiner += " ";
          next_char = vars.text.current.charAt(progress.length + i);
          i++;
        }
      } else {
        joiner = "";
      }
      progress += joiner + word;
      textBox.text(current + joiner + word);
    }
    if (Math.floor(textBox.node().getComputedTextLength()) > lineWidth() || next_char === "\n") {
      textBox.text(current);
      if (current.length) {
        textBox = newLine();
      }
      textBox.text(word);
      if (reverse) {
        return line--;
      } else {
        return line++;
      }
    }
  };
  start = 1;
  line = null;
  lines = null;
  wrap = function() {
    var i, j, len, next_char, unsafe, word;
    vars.container.value.text("").html("");
    words = vars.text.words.slice();
    if (reverse) {
      words.reverse();
    }
    progress = "";
    textBox = newLine(true);
    line = start;
    for (j = 0, len = words.length; j < len; j++) {
      word = words[j];
      if (line * dy > height) {
        truncate();
        break;
      }
      placeWord(word);
      unsafe = true;
      while (unsafe) {
        next_char = vars.text.current.charAt(progress.length);
        i = 1;
        while (next_char === " ") {
          next_char = vars.text.current.charAt(progress.length + i);
          i++;
        }
        unsafe = vars.text.split.value.indexOf(next_char) >= 0;
        if (unsafe) {
          placeWord(next_char);
        }
      }
    }
    if (line * dy > height) {
      truncate();
    }
    return lines = Math.abs(line - start) + 1;
  };
  wrap();
  lines = 0;
  vars.container.value.selectAll("tspan").each(function() {
    if (d3.select(this).text().length) {
      return lines++;
    }
  });
  if (vars.shape.value === "circle") {
    space = height - lines * dy;
    if (space > dy) {
      if (valign === "middle") {
        start = (space / dy / 2 >> 0) + 1;
        wrap();
      } else if (valign === "bottom") {
        reverse = true;
        start = height / dy >> 0;
        wrap();
      }
    }
  }
  lines = 0;
  vars.container.value.selectAll("tspan").each(function() {
    if (d3.select(this).text().length) {
      return lines++;
    }
  });
  if (valign === "top") {
    y = 0;
  } else {
    h = lines * dy;
    y = valign === "middle" ? height / 2 - h / 2 : height - h;
  }
  y -= dy * 0.2;
  translate = "translate(0," + y + ")";
  if (vars.rotate.value === 180 || vars.rotate.value === -180) {
    rx = vars.container.x + width / 2;
    ry = vars.container.y + height / 2;
  } else {
    rmod = vars.rotate.value < 0 ? width : height;
    rx = vars.container.x + rmod / 2;
    ry = vars.container.y + rmod / 2;
  }
  rotate = "rotate(" + vars.rotate.value + ", " + rx + ", " + ry + ")";
  return vars.container.value.attr("transform", rotate + translate);
};


},{"../../client/rtl.coffee":7}],43:[function(require,module,exports){
var flow, fontSizes, resize, wrap;

flow = require("./flow.coffee");

fontSizes = require("../../font/sizes.coffee");

wrap = function(vars) {
  var firstChar;
  if (vars.text.phrases.length) {
    vars.text.current = vars.text.phrases.shift() + "";
    vars.text.words = vars.text.current.match(vars.text.split["break"]);
    firstChar = vars.text.current.charAt(0);
    if (firstChar !== vars.text.words[0].charAt(0)) {
      vars.text.words[0] = firstChar + vars.text.words[0];
    }
    vars.container.value.html("");
    if (vars.resize.value) {
      resize(vars);
    } else {
      flow(vars);
    }
  }
};

module.exports = wrap;

resize = function(vars) {
  var addon, areaMod, areaRatio, boxArea, height, heightMax, i, lineWidth, maxWidth, mirror, sizeMax, sizeRatio, sizes, textArea, width, widthRatio, words;
  words = [];
  i = 0;
  while (i < vars.text.words.length) {
    addon = (i === vars.text.words.length - 1 ? "" : " ");
    words.push(vars.text.words[i] + addon);
    i++;
  }
  mirror = vars.rotate.value === -90 || vars.rotate.value === 90;
  width = mirror ? vars.height.inner : vars.width.inner;
  height = mirror ? vars.width.inner : vars.height.inner;
  sizeMax = Math.floor(vars.size.value[1]);
  lineWidth = vars.shape.value === "circle" ? width * 0.75 : width;
  sizes = fontSizes(words, {
    "font-size": sizeMax + "px"
  }, {
    parent: vars.container.value
  });
  maxWidth = d3.max(sizes, function(d) {
    return d.width;
  });
  areaMod = 1.165 + (width / height * 0.11);
  textArea = d3.sum(sizes, function(d) {
    var h;
    h = vars.container.dy || sizeMax * 1.2;
    return d.width * h;
  }) * areaMod;
  if (vars.shape.value === "circle") {
    boxArea = Math.PI * Math.pow(width / 2, 2);
  } else {
    boxArea = lineWidth * height;
  }
  if (maxWidth > lineWidth || textArea > boxArea) {
    areaRatio = Math.sqrt(boxArea / textArea);
    widthRatio = lineWidth / maxWidth;
    sizeRatio = d3.min([areaRatio, widthRatio]);
    sizeMax = d3.max([vars.size.value[0], Math.floor(sizeMax * sizeRatio)]);
  }
  heightMax = Math.floor(height * 0.8);
  if (sizeMax > heightMax) {
    sizeMax = heightMax;
  }
  if (maxWidth * (sizeMax / vars.size.value[1]) <= lineWidth) {
    if (sizeMax !== vars.size.value[1]) {
      vars.self.size([vars.size.value[0], sizeMax]);
    }
    flow(vars);
  } else {
    wrap(vars);
  }
};


},{"../../font/sizes.coffee":28,"./flow.coffee":38}],44:[function(require,module,exports){
module.exports = {
  accepted: [false, "start", "middle", "end", "left", "center", "right"],
  process: function(value) {
    var css;
    css = ["left", "center", "right"].indexOf(value);
    if (css >= 0) {
      value = this.accepted[css + 1];
    }
    return value;
  },
  value: false
};


},{}],45:[function(require,module,exports){
module.exports = {
  accepted: [Object],
  objectAccess: false,
  process: function(value, vars) {
    var method, setting;
    for (method in value) {
      setting = value[method];
      if (method in vars.self) {
        vars.self[method](setting);
      }
    }
    return value;
  },
  value: {}
};


},{}],46:[function(require,module,exports){
var d3selection;

d3selection = require("../../util/d3selection.coffee");

module.exports = {
  accepted: [false, Array, Object, String],
  element: false,
  id: "default",
  process: function(value) {
    if (value === false) {
      return false;
    } else if (d3selection(value)) {
      return value;
    } else if (value instanceof Array) {
      return d3.select(value[0][0]);
    } else {
      this.selector = value;
      return d3.select(value);
    }
  },
  value: false
};


},{"../../util/d3selection.coffee":66}],47:[function(require,module,exports){
module.exports = {
  accepted: [Boolean],
  value: false
};


},{}],48:[function(require,module,exports){
var print, stringFormat;

print = require("../../core/console/print.coffee");

stringFormat = require("../../string/format.js");

module.exports = {
  accepted: [void 0],
  process: function(value, vars) {
    var selector, str;
    if (this.initialized === false) {
      return value;
    }
    if (vars.container.value === false) {
      str = vars.format.locale.value.dev.setContainer;
      print.warning(str, "container");
    } else if (vars.container.value.empty()) {
      str = vars.format.locale.value.dev.noContainer;
      selector = vars.container.selector || "";
      print.warning(stringFormat(str, "\"" + selector + "\""), "container");
    } else {
      if (vars.dev.value) {
        print.time("total draw time");
      }
      vars.container.value.call(vars.self);
    }
    return value;
  },
  value: void 0
};


},{"../../core/console/print.coffee":19,"../../string/format.js":34}],49:[function(require,module,exports){
var locale, mergeObject;

locale = require("../../core/locale/locale.coffee");

mergeObject = require("../../object/merge.coffee");

module.exports = {
  accepted: [Function, String],
  locale: {
    accepted: function() {
      return d3.keys(locale);
    },
    process: function(value) {
      var defaultLocale, returnObject;
      defaultLocale = "en_US";
      returnObject = locale[defaultLocale];
      if (value !== defaultLocale) {
        returnObject = mergeObject(returnObject, locale[value]);
      }
      this.language = value;
      return returnObject;
    },
    value: "en_US"
  },
  process: function(value, vars) {
    if (this.initialized && typeof value === "string") {
      vars.self.format({
        locale: value
      });
    } else {
      if (typeof value === "function") {
        return value;
      }
    }
    return this.value;
  },
  value: "en_US"
};


},{"../../core/locale/locale.coffee":23,"../../object/merge.coffee":32}],50:[function(require,module,exports){
module.exports = {
  accepted: [false, Number],
  value: false
};


},{}],51:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"dup":50}],52:[function(require,module,exports){
arguments[4][47][0].apply(exports,arguments)
},{"dup":47}],53:[function(require,module,exports){
module.exports = {
  accepted: [-180, -90, 0, 90, 180],
  value: 0
};


},{}],54:[function(require,module,exports){
module.exports = {
  accepted: ["circle", "square"],
  value: false
};


},{}],55:[function(require,module,exports){
module.exports = {
  accepted: [Array, false],
  value: false
};


},{}],56:[function(require,module,exports){
module.exports = {
  accepted: [false, Array, Number, String],
  html: {
    accepted: [Boolean],
    value: false
  },
  init: function(vars) {
    var s;
    s = this.split.value;
    this.split["break"] = new RegExp("[^\\s\\" + s.join("\\") + "]+\\" + s.join("?\\") + "?", "g");
    return false;
  },
  split: {
    accepted: [Array],
    process: function(s) {
      this["break"] = new RegExp("[^\\s\\" + s.join("\\") + "]+\\" + s.join("?\\") + "?", "g");
      return s;
    },
    value: ["-", "/", ";", ":", "&"]
  }
};


},{}],57:[function(require,module,exports){
module.exports = {
  accepted: [false, "top", "middle", "bottom"],
  value: false
};


},{}],58:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"dup":50}],59:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"dup":50}],60:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"dup":50}],61:[function(require,module,exports){
var attach, print, sizes, text, wrap;

attach = require("../core/methods/attach.coffee");

sizes = require("./helpers/parseSize.coffee");

print = require("../core/console/print.coffee");

text = require("./helpers/parseText.coffee");

wrap = require("./helpers/wrap.coffee");

module.exports = function() {
  var vars;
  vars = {
    self: function(selection) {
      selection.each(function() {
        sizes(vars);
        if (vars.size.value[0] <= vars.height.inner) {
          text(vars);
          wrap(vars);
        } else {
          vars.container.value.html("");
        }
        if (vars.dev.value) {
          print.timeEnd("total draw time");
        }
      });
      return vars.self;
    }
  };
  attach(vars, {
    align: require("./methods/align.coffee"),
    config: require("./methods/config.coffee"),
    container: require("./methods/container.coffee"),
    dev: require("./methods/dev.coffee"),
    draw: require("./methods/draw.coffee"),
    format: require("./methods/format.coffee"),
    height: require("./methods/height.coffee"),
    padding: require("./methods/padding.coffee"),
    resize: require("./methods/resize.coffee"),
    rotate: require("./methods/rotate.coffee"),
    text: require("./methods/text.coffee"),
    shape: require("./methods/shape.coffee"),
    size: require("./methods/size.coffee"),
    valign: require("./methods/valign.coffee"),
    width: require("./methods/width.coffee"),
    x: require("./methods/x.coffee"),
    y: require("./methods/y.coffee")
  });
  return vars.self;
};


},{"../core/console/print.coffee":19,"../core/methods/attach.coffee":24,"./helpers/parseSize.coffee":40,"./helpers/parseText.coffee":41,"./helpers/wrap.coffee":43,"./methods/align.coffee":44,"./methods/config.coffee":45,"./methods/container.coffee":46,"./methods/dev.coffee":47,"./methods/draw.coffee":48,"./methods/format.coffee":49,"./methods/height.coffee":50,"./methods/padding.coffee":51,"./methods/resize.coffee":52,"./methods/rotate.coffee":53,"./methods/shape.coffee":54,"./methods/size.coffee":55,"./methods/text.coffee":56,"./methods/valign.coffee":57,"./methods/width.coffee":58,"./methods/x.coffee":59,"./methods/y.coffee":60}],62:[function(require,module,exports){
var defaultLocale = require("../core/locale/languages/en_US.coffee"),
    events        = require("../client/pointer.coffee"),
    legible       = require("../color/legible.coffee"),
    move          = require("./move.coffee"),
    prefix        = require("../client/prefix.coffee"),
    rtl           = require("../client/rtl.coffee"),
    removeTooltip = require("./remove.coffee"),
    scroll        = require("../client/scroll.js"),
    scrollBar     = require("../client/scrollbar.coffee"),
    stringList    = require("../string/list.coffee"),
    textColor     = require("../color/text.coffee")

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Create a Tooltip
//-------------------------------------------------------------------
module.exports = function(params) {

  var default_width = params.fullscreen ? 250 : 200
    , vendor = prefix()
  params.width = params.width || default_width
  params.max_width = params.max_width || 386
  params.id = params.id || "default"
  params.size = params.fullscreen || params.html ? "large" : "small"
  params.offset = params.offset || 0
  params.arrow_offset = params.arrow ? 8 : 0
  params.x = params.x || 0
  params.y = params.y || 0
  params.parent = params.parent || d3.select("body")
  params.curtain = params.curtain || "#fff"
  params.curtainopacity = params.curtainopacity || 0.8
  params.background = params.background || "#fff"
  params.fontcolor = params.fontcolor || "#444"
  params.fontfamily = params.fontfamily || "sans-serif"
  params.fontweight = params.fontweight || "normal"
  params.fontsize = params.fontsize || "12px"
  params.style = params.style || "default"
  params.zindex = params.size == "small" ? 2000 : 500
  params.locale = params.locale || defaultLocale
  params.stacked = params.stacked || false;


  var parentHeight = params.parent ? params.parent.node().offsetHeight
                  || params.parent.node().getBoundingClientRect().height : 0

  if (!params.iconsize) {
    params.iconsize = params.size == "small" ? 22 : 50
  }

  if (params.parent.node() === document.body) {
    params.limit = [window.innerWidth + scroll.x(), window.innerHeight + scroll.y()];
    var sb = scrollBar();
    if (document.body.scrollHeight > window.innerHeight) params.limit[0] -= sb;
  }
  else {
    params.limit = [
      parseFloat(params.parent.style("width"),10),
      parseFloat(params.parent.style("height"),10)
    ];
  }

  if ( params.title instanceof Array ) {

    var and = params.locale.ui.and
      , more = params.locale.ui.more

    params.title = stringList( params.title , and , 3 , more )

  }

  removeTooltip(params.id)

  params.anchor = {}
  if (params.fullscreen) {
    params.anchor.x = "center"
    params.anchor.y = "center"
    params.x = params.parent ? params.parent.node().offsetWidth/2 : window.innerWidth/2
    params.y = params.parent ? parentHeight/2 : window.innerHeight/2
  }
  else if (params.align) {
    var a = params.align.split(" ")
    params.anchor.y = a[0]
    if (a[1]) params.anchor.x = a[1]
    else params.anchor.x = "center"
  }
  else {
    params.anchor.x = "center"
    params.anchor.y = "top"
  }

  var title_width = params.width - 30

  if (params.fullscreen) {
    var curtain = params.parent.append("div")
      .attr("id","d3plus_tooltip_curtain_"+params.id)
      .attr("class","d3plus_tooltip_curtain")
      .style("background-color",params.curtain)
      .style("opacity",params.curtainopacity)
      .style("position","absolute")
      .style("z-index",499)
      .style("top","0px")
      .style("right","0px")
      .style("bottom","0px")
      .style("left","0px")
      .on(events.click,function(){
        removeTooltip(params.id)
      })
  }

  var tooltip = params.parent.append("div")
    .datum(params)
    .attr("id","d3plus_tooltip_id_"+params.id)
    .attr("class","d3plus_tooltip d3plus_tooltip_"+params.size)
    .style("color",params.fontcolor)
    .style("font-family",params.fontfamily)
    .style("font-weight",params.fontweight)
    .style("font-size",params.fontsize+"px")
    .style(vendor+"box-shadow","0px 1px 3px rgba(0, 0, 0, 0.25)")
    .style("position","absolute")
    // .style("z-index",params.zindex)
    .on(events.out, close_descriptions)

  if (params.max_height) {
    tooltip.style("max-height",params.max_height+"px")
  }

  if (params.fixed) {
    tooltip.style("z-index",500)
    params.mouseevents = true
  }
  else {
    tooltip.style("z-index",2000)
  }

  var container = tooltip.append("div")
    .datum(params)
    .attr("class","d3plus_tooltip_container")
    .style("background-color",params.background)
    .style("padding","6px")

  if (params.fullscreen && params.html && !params.stacked) {

    w = params.parent ? params.parent.node().offsetWidth*0.75 : window.innerWidth*0.75
    h = params.parent ? parentHeight*0.75 : window.innerHeight*0.75

    container
      .style("width",w+"px")
      .style("height",h+"px")

    var body = container.append("div")
      .attr("class","d3plus_tooltip_body")
      .style("padding-right","6px")
      .style("display","inline-block")
      .style("z-index",1)
      .style("width",params.width+"px")

  }
  else {

    if (params.width == "auto") {
      var w = "auto"
      container.style("max-width",params.max_width+"px")
    }
    else var w = params.width-14+"px"

    var body = container
      .style("width",w)

  }

  if (params.title || params.icon) {
    var header = body.append("div")
      .attr("class","d3plus_tooltip_header")
      .style("position","relative")
      .style("z-index",1)
  }

  if (params.fullscreen) {
    var close = tooltip.append("div")
      .attr("class","d3plus_tooltip_close")
      .style("background-color",params.color)
      .style("color",textColor(params.color))
      .style("position","absolute")
      .style(vendor+"box-shadow","0 1px 3px rgba(0, 0, 0, 0.25)")
      .style("font-size","20px")
      .style("height","18px")
      .style("line-height","14px")
      .style("text-align","center")
      .style("right","16px")
      .style("top","-10px")
      .style("width","18px")
      .style("z-index",10)
      .html("\&times;")
      .on(events.over,function(){
        d3.select(this)
          .style("cursor","pointer")
          .style(vendor+"box-shadow","0 1px 3px rgba(0, 0, 0, 0.5)")
      })
      .on(events.out,function(){
        d3.select(this)
          .style("cursor","auto")
          .style(vendor+"box-shadow","0 1px 3px rgba(0, 0, 0, 0.25)")
      })
      .on(events.click,function(){
        removeTooltip(params.id)
      })

    d3.select("body").on("keydown.esc_" + params.id, function(){
      if (d3.event.keyCode === 27) {
        removeTooltip(params.id);
        d3.select("body").on("keydown.esc_" + params.id, null);
      }
    })

  }

  if (!params.mouseevents) {
    tooltip.style("pointer-events","none")
  }
  else if (params.mouseevents !== true) {

    var oldout = d3.select(params.mouseevents).on(events.out)

    var newout = function() {

      var target = d3.event.toElement || d3.event.relatedTarget
      if (target) {
        var c = typeof target.className == "string" ? target.className : target.className.baseVal
        var istooltip = c.indexOf("d3plus_tooltip") == 0
      }
      else {
        var istooltip = false
      }
      if (!target || (!ischild(tooltip.node(),target) && !ischild(params.mouseevents,target) && !istooltip)) {
        oldout(d3.select(params.mouseevents).datum())
        close_descriptions()
        d3.select(params.mouseevents).on(events.out,oldout)
      }
    }

    var ischild = function(parent, child) {
       var node = child.parentNode;
       while (node !== null) {
         if (node == parent) {
           return true;
         }
         node = node.parentNode;
       }
       return false;
    }

    d3.select(params.mouseevents).on(events.out,newout)
    tooltip.on(events.out,newout)

    var move_event = d3.select(params.mouseevents).on(events.move)
    if (move_event) {
      tooltip.on(events.move,move_event)
    }

  }

  if (params.arrow) {
    var arrow = tooltip.append("div")
      .attr("class","d3plus_tooltip_arrow")
      .style("background-color",params.background)
      .style(vendor+"box-shadow","0px 1px 3px rgba(0, 0, 0, 0.25)")
      .style("position","absolute")
      .style("bottom","-5px")
      .style("height","10px")
      .style("left","50%")
      .style("margin-left","-5px")
      .style("width","10px")
      .style(vendor+"transform","rotate(45deg)")
      .style("z-index",-1)
  }

  if (params.icon) {

    var title_icon = header.append("div")
      .attr("class","d3plus_tooltip_icon")
      .style("width",params.iconsize+"px")
      .style("height",params.iconsize+"px")
      .style("z-index",1)
      .style("background-position","50%")
      .style("background-size","100%")
      .style("background-image","url("+params.icon+")")
      .style("display","inline-block")
      .style("margin","0px 3px 3px 0px")

    if (params.style == "knockout") {
      title_icon.style("background-color",params.color)
    }

    title_width -= title_icon.node().offsetWidth
  }

  if (params.title) {
    var mw = params.max_width-6
    if ( params.icon ) mw -= (params.iconsize+6)
    mw += "px"

    var title = header.append("div")
      .attr("class","d3plus_tooltip_title")
      .style("max-width",mw)
      .style("color",!params.icon ? legible(params.color) : params.fontcolor)
      .style("vertical-align","top")
      .style("width",title_width+"px")
      .style("display","inline-block")
      .style("overflow","hidden")
      .style("text-overflow","ellipsis")
      .style("word-wrap","break-word")
      .style("z-index",1)
      .style("font-size",params.size === "large" ? "18px" : "16px")
      .style("line-height",params.size === "large" ? "20px" : "17px")
      .style("padding",params.size === "large" ? "3px 6px" : "3px")
      .text(params.title)
  }

  if (params.description) {
    var description = body.append("div")
      .attr("class","d3plus_tooltip_description")
      .style("font-size","12px")
      .style("padding","6px")
      .text(params.description)
  }

  if (params.data || params.html && !params.fullscreen) {

    var data_container = body.append("div")
      .attr("class","d3plus_tooltip_data_container")
      .style("overflow-y","auto")
      .style("z-index",-1)
  }

  if (params.data) {

    var val_width = 0, val_heights = {}

    var last_group = null
    params.data.forEach(function(d,i){

      if (d.group) {
        if (last_group != d.group) {
          last_group = d.group
          data_container.append("div")
            .attr("class","d3plus_tooltip_data_title")
            .style("font-size","12px")
            .style("font-weight","bold")
            .style("padding","6px 3px 0px 3px")
            .text(d.group)
        }
      }

      var block = data_container.append("div")
        .attr("class","d3plus_tooltip_data_block")
        .style("font-size","12px")
        .style("padding","3px 6px")
        .style("position","relative")
        .datum(d)

      if ( d.highlight === true ) {
        block.style("color",legible(params.color))
      }
      else if ( d.allColors || d.highlight !== params.color ) {
        block.style("color",legible(d.highlight))
      }

      var name = block.append("div")
          .attr("class","d3plus_tooltip_data_name")
          .style("display","inline-block")
          .html(d.name)
          .on(events.out,function(){
            d3.event.stopPropagation()
          })

      if (d.link) {
        name
          .style("cursor","pointer")
          .on(events.click,d.link)
      }

      if ( d.value instanceof Array ) {

        var and = params.locale.ui.and
          , more = params.locale.ui.more

        d.value = list( d.value , and , 3 , more )

      }

      var val = block.append("div")
          .attr("class","d3plus_tooltip_data_value")
          .style("display","block")
          .style("position","absolute")
          .style("text-align","right")
          .style("top","3px")
          .html(d.value)
          .on(events.out,function(){
            d3.event.stopPropagation()
          })

      if (rtl) {
        val.style("left","6px")
      }
      else {
        val.style("right","6px")
      }

      if (params.mouseevents && d.desc) {
        var desc = block.append("div")
          .attr("class","d3plus_tooltip_data_desc")
          .style("color","#888")
          .style("overflow","hidden")
          .style(vendor+"transition","height 0.5s")
          .style("width","85%")
          .text(d.desc)
          .on(events.out,function(){
            d3.event.stopPropagation()
          })

        var dh = desc.node().offsetHeight || desc.node().getBoundingClientRect().height

        desc.style("height","0px")

        var help = name.append("div")
          .attr("class","d3plus_tooltip_data_help")
          .style("background-color","#ccc")
          .style(vendor+"border-radius","5px")
          .style("color","#fff")
          .style("cursor","pointer")
          .style("display","inline-block")
          .style("font-size","8px")
          .style("font-weight","bold")
          .style("height","10px")
          .style("margin","3px 0px 0px 3px")
          .style("padding-right","1px")
          .style("text-align","center")
          .style("width","10px")
          .style("vertical-align","top")
          .style(prefix+"transition","background-color 0.5s")
          .text("?")
          .on(events.over,function(){
            var c = d3.select(this.parentNode.parentNode).style("color")
            d3.select(this).style("background-color",c)
            desc.style("height",dh+"px")
          })
          .on(events.out,function(){
            d3.event.stopPropagation()
          })

        name
          .style("cursor","pointer")
          .on(events.over,function(){
            close_descriptions()
            var c = d3.select(this.parentNode).style("color")
            help.style("background-color",c)
            desc.style("height",dh+"px")
          })

        block.on(events.out,function(){
          d3.event.stopPropagation()
          close_descriptions()
        })
      }

      var w = parseFloat(val.style("width"),10)
      if (w > params.width/2) w = params.width/2
      if (w > val_width) val_width = w

      if (i != params.data.length-1) {
        if ((d.group && d.group == params.data[i+1].group) || !d.group && !params.data[i+1].group)
        data_container.append("div")
          .attr("class","d3plus_tooltip_data_seperator")
          .style("background-color","#ddd")
          .style("display","block")
          .style("height","1px")
          .style("margin","0px 3px")
      }

    })

    data_container.selectAll(".d3plus_tooltip_data_name")
      .style("width",function(){
        var w = parseFloat(d3.select(this.parentNode).style("width"),10)
        return (w-val_width-30)+"px"
      })

    data_container.selectAll(".d3plus_tooltip_data_value")
      .style("width",val_width+"px")
      .each(function(d){
        var h = parseFloat(d3.select(this).style("height"),10)
        val_heights[d.name] = h
      })

    data_container.selectAll(".d3plus_tooltip_data_name")
      .style("min-height",function(d){
        return val_heights[d.name]+"px"
      })

  }

  if (params.html && (!params.fullscreen || params.stacked)) {
    data_container.append("div")
      .html(params.html)
    if (params.js) {
      params.js(container)
    }
  }

  var footer = body.append("div")
    .attr("class","d3plus_tooltip_footer")
    .style("font-size","10px")
    .style("position","relative")
    .style("text-align","center")

  if (params.footer) {
    footer.html(params.footer)
  }

  params.height = tooltip.node().offsetHeight || tooltip.node().getBoundingClientRect().height

  if (params.html && params.fullscreen && !params.stacked) {
    var h = params.height-12
    var w = tooltip.node().offsetWidth-params.width-44
    container.append("div")
      .attr("class","d3plus_tooltip_html")
      .style("width",w+"px")
      .style("height",h+"px")
      .style("display","inline-block")
      .style("vertical-align","top")
      .style("overflow-y","auto")
      .style("padding","0px 12px")
      .style("position","absolute")
      .html(params.html)
    if (params.js) {
      params.js(container)
    }
  }

  params.width = tooltip.node().offsetWidth

  if (params.anchor.y != "center") params.height += params.arrow_offset
  else params.width += params.arrow_offset

  if (params.data || ((!params.fullscreen || params.stacked) && params.html)) {

    if (!params.fullscreen || params.stacked) {
      var limit = params.fixed ? parentHeight-params.y-10 : parentHeight-10
      var h = params.height < limit ? params.height : limit
    }
    else {
      var h = params.height
    }
    h -= parseFloat(container.style("padding-top"),10)
    h -= parseFloat(container.style("padding-bottom"),10)
    if (header) {
      h -= header.node().offsetHeight || header.node().getBoundingClientRect().height
      h -= parseFloat(header.style("padding-top"),10)
      h -= parseFloat(header.style("padding-bottom"),10)
    }
    if (footer) {
      h -= footer.node().offsetHeight || footer.node().getBoundingClientRect().height
      h -= parseFloat(footer.style("padding-top"),10)
      h -= parseFloat(footer.style("padding-bottom"),10)
    }

    data_container
      .style("max-height",h+"px")
  }

  params.height = tooltip.node().offsetHeight || tooltip.node().getBoundingClientRect().height

  move(params.x, params.y, params.id);

}



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Function that closes ALL Descriptions
//-------------------------------------------------------------------
function close_descriptions() {
  d3.selectAll("div.d3plus_tooltip_data_desc").style("height","0px");
  d3.selectAll("div.d3plus_tooltip_data_help").style("background-color","#ccc");
}

},{"../client/pointer.coffee":5,"../client/prefix.coffee":6,"../client/rtl.coffee":7,"../client/scroll.js":8,"../client/scrollbar.coffee":9,"../color/legible.coffee":11,"../color/text.coffee":17,"../core/locale/languages/en_US.coffee":22,"../string/list.coffee":35,"./move.coffee":63,"./remove.coffee":64}],63:[function(require,module,exports){
var arrowStyle, scroll;

scroll = require("../client/scroll.js");

module.exports = function(x, y, id) {
  var d, mins, tooltip;
  if (!id) {
    id = "default";
  }
  tooltip = d3.select("div#d3plus_tooltip_id_" + id);
  if (tooltip.node()) {
    d = tooltip.datum();
    d.cx = x;
    d.cy = y;
    if (!d.fixed) {
      if (d.parent.node().tagName.toLowerCase() === "body") {
        mins = [scroll.x(), scroll.y()];
      } else {
        mins = [0, 0];
      }
      if (d.anchor.y !== "center") {
        if (d.anchor.x === "right") {
          d.x = d.cx - d.arrow_offset - 4;
        } else if (d.anchor.x === "center") {
          d.x = d.cx - d.width / 2;
        } else {
          if (d.anchor.x === "left") {
            d.x = d.cx - d.width + d.arrow_offset + 2;
          }
        }
        if (d.anchor.y === "bottom") {
          d.flip = d.cy + d.height + d.offset <= d.limit[1];
        } else {
          if (d.anchor.y === "top") {
            d.flip = d.cy - d.height - d.offset < mins[1];
          }
        }
        if (d.flip) {
          d.y = d.cy + d.offset + d.arrow_offset;
        } else {
          d.y = d.cy - d.height - d.offset - d.arrow_offset;
        }
      } else {
        d.y = d.cy - d.height / 2;
        if (d.anchor.x === "right") {
          d.flip = d.cx + d.width + d.offset <= d.limit[0];
        } else {
          if (d.anchor.x === "left") {
            d.flip = d.cx - d.width - d.offset < mins[0];
          }
        }
        if (d.anchor.x === "center") {
          d.flip = false;
          d.x = d.cx - d.width / 2;
        } else if (d.flip) {
          d.x = d.cx + d.offset + d.arrow_offset;
        } else {
          d.x = d.cx - d.width - d.offset;
        }
      }
      if (d.x < mins[0]) {
        d.x = mins[0];
      } else {
        if (d.x + d.width > d.limit[0]) {
          d.x = d.limit[0] - d.width;
        }
      }
      if (d.y < mins[1]) {
        d.y = mins[1];
      } else {
        if (d.y + d.height > d.limit[1]) {
          d.y = d.limit[1] - d.height;
        }
      }
    }
    tooltip.style("top", d.y + "px").style("left", d.x + "px");
    if (d.arrow) {
      tooltip.selectAll(".d3plus_tooltip_arrow").call(arrowStyle);
    }
  }
  return tooltip;
};

arrowStyle = function(arrow) {
  return arrow.style("bottom", function(d) {
    if (d.anchor.y !== "center" && !d.flip) {
      return "-5px";
    } else {
      return "auto";
    }
  }).style("right", function(d) {
    if (d.anchor.y === "center" && !d.flip) {
      return "-5px";
    } else {
      return "auto";
    }
  }).style("top", function(d) {
    if (d.anchor.y !== "center" && d.flip) {
      return "-5px";
    } else if (d.anchor.y === "center") {
      return "50%";
    } else {
      return "auto";
    }
  }).style("left", function(d) {
    if (d.anchor.y === "center" && d.flip) {
      return "-5px";
    } else if (d.anchor.y !== "center") {
      return "50%";
    } else {
      return "auto";
    }
  }).style("margin-left", function(d) {
    var arrow_x;
    if (d.anchor.y === "center") {
      return "auto";
    } else {
      if (d.anchor.x === "right") {
        arrow_x = -d.width / 2 + d.arrow_offset / 2;
      } else if (d.anchor.x === "left") {
        arrow_x = d.width / 2 - d.arrow_offset * 2 - 5;
      } else {
        arrow_x = -5;
      }
      if (d.cx - d.width / 2 - 5 < arrow_x) {
        arrow_x = d.cx - d.width / 2 - 5;
        if (arrow_x < 2 - d.width / 2) {
          arrow_x = 2 - d.width / 2;
        }
      } else if (-(d.limit[0] - d.cx - d.width / 2 + 5) > arrow_x) {
        arrow_x = -(d.limit[0] - d.cx - d.width / 2 + 5);
        if (arrow_x > d.width / 2 - 11) {
          arrow_x = d.width / 2 - 11;
        }
      }
      return arrow_x + "px";
    }
  }).style("margin-top", function(d) {
    var arrow_y;
    if (d.anchor.y !== "center") {
      return "auto";
    } else {
      if (d.anchor.y === "bottom") {
        arrow_y = -d.height / 2 + d.arrow_offset / 2 - 1;
      } else if (d.anchor.y === "top") {
        arrow_y = d.height / 2 - d.arrow_offset * 2 - 2;
      } else {
        arrow_y = -9;
      }
      if (d.cy - d.height / 2 - d.arrow_offset < arrow_y) {
        arrow_y = d.cy - d.height / 2 - d.arrow_offset;
        if (arrow_y < 4 - d.height / 2) {
          arrow_y = 4 - d.height / 2;
        }
      } else if (-(d.limit[1] - d.cy - d.height / 2 + d.arrow_offset) > arrow_y) {
        arrow_y = -(d.limit[1] - d.cy - d.height / 2 + d.arrow_offset);
        if (arrow_y > d.height / 2 - 22) {
          arrow_y = d.height / 2 - 22;
        }
      }
      return arrow_y + "px";
    }
  });
};


},{"../client/scroll.js":8}],64:[function(require,module,exports){
module.exports = function(id) {
  if (id) {
    d3.selectAll("div#d3plus_tooltip_curtain_" + id).remove();
    return d3.selectAll("div#d3plus_tooltip_id_" + id).remove();
  } else {
    d3.selectAll("div.d3plus_tooltip_curtain").remove();
    return d3.selectAll("div.d3plus_tooltip").remove();
  }
};


},{}],65:[function(require,module,exports){
var copy, objectMerge, objectValidate;

objectMerge = require("../object/merge.coffee");

objectValidate = require("../object/validate.coffee");

copy = function(variable) {
  var ret;
  if (objectValidate(variable)) {
    return objectMerge(variable);
  } else if (variable instanceof Array) {
    ret = [];
    variable.forEach(function(o) {
      return ret.push(copy(o));
    });
    return ret;
  } else {
    return variable;
  }
};

module.exports = copy;


},{"../object/merge.coffee":32,"../object/validate.coffee":33}],66:[function(require,module,exports){
var ie;

ie = require("../client/ie.js");

module.exports = function(elem) {
  if (ie) {
    return typeof elem === "object" && elem instanceof Array && "size" in elem && "select" in elem;
  } else {
    return elem instanceof d3.selection;
  }
};


},{"../client/ie.js":4}]},{},[30]);
