(function () {
  var internships = {
    "/employment/2012-07-01-uav": true,
    "/employment/2013-07-01-samsung": true,
    "/employment/2014-07-01-ni": true,
    "/employment/2017-07-01-hyperloop": true,
    "/employment/2018-04-01-hyperloop": true
  };

  var COLORS = { main: "#5b8def", intern: "#e09a4a" };
  var STROKE = 6;
  var DOT = 9;

  function ns(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }

  function draw() {
    var svg = document.getElementById("emp-graph");
    var entries = document.getElementById("emp-entries");
    if (!svg || !entries) return;

    var rows = [].slice.call(entries.querySelectorAll(".emp-row"));
    if (!rows.length) return;

    var height = entries.offsetHeight;
    var width = svg.clientWidth || 72;
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.style.height = height + "px";
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var x0 = Math.round(width * 0.28);
    var x1 = Math.round(width * 0.72);
    var xs = [x0, x1];
    var box = entries.getBoundingClientRect();

    var nodes = rows.map(function (row) {
      var lane = internships[row.getAttribute("data-permalink")] ? 1 : 0;
      var title = row.querySelector("h2") || row;
      var rect = title.getBoundingClientRect();
      return {
        lane: lane,
        y: rect.top - box.top + rect.height / 2
      };
    });

    function paint(el, color) {
      el.setAttribute("stroke", color);
      el.setAttribute("stroke-width", STROKE);
      el.setAttribute("stroke-linecap", "round");
      el.setAttribute("stroke-linejoin", "round");
      svg.appendChild(el);
    }

    function line(x1, y1, x2, y2, color) {
      var el = ns("line");
      el.setAttribute("x1", x1);
      el.setAttribute("y1", y1);
      el.setAttribute("x2", x2);
      el.setAttribute("y2", y2);
      paint(el, color);
    }

    function curve(xFrom, yFrom, xTo, yTo, color) {
      var el = ns("path");
      var mid = (yFrom + yTo) / 2;
      el.setAttribute(
        "d",
        "M " + xFrom + " " + yFrom + " C " + xFrom + " " + mid + ", " + xTo + " " + mid + ", " + xTo + " " + yTo
      );
      el.setAttribute("fill", "none");
      paint(el, color);
    }

    var mains = nodes.filter(function (n) { return n.lane === 0; });
    if (mains.length) {
      line(x0, mains[0].y, x0, mains[mains.length - 1].y, COLORS.main);
    }

    var i = 0;
    while (i < nodes.length) {
      if (nodes[i].lane !== 1) {
        i += 1;
        continue;
      }
      var start = i;
      while (i < nodes.length && nodes[i].lane === 1) i += 1;
      var end = i - 1;
      line(x1, nodes[start].y, x1, nodes[end].y, COLORS.intern);
      if (start > 0 && nodes[start - 1].lane === 0) {
        curve(x1, nodes[start].y, x0, nodes[start - 1].y, COLORS.intern);
      }
      if (end + 1 < nodes.length && nodes[end + 1].lane === 0) {
        curve(x1, nodes[end].y, x0, nodes[end + 1].y, COLORS.intern);
      }
    }

    nodes.forEach(function (n) {
      var c = ns("circle");
      c.setAttribute("cx", xs[n.lane]);
      c.setAttribute("cy", n.y);
      c.setAttribute("r", DOT);
      c.setAttribute("fill", "#fff");
      c.setAttribute("stroke", n.lane ? COLORS.intern : COLORS.main);
      c.setAttribute("stroke-width", STROKE);
      svg.appendChild(c);
    });
  }

  function boot() {
    draw();
    if (window.ResizeObserver) {
      var entries = document.getElementById("emp-entries");
      if (entries) new ResizeObserver(draw).observe(entries);
    }
    window.addEventListener("resize", draw);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
