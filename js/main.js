/* =========================================================
   ArcheAge Classic Guide — scripts
   You normally never need to edit this file.
   What it does automatically:
     1. Builds the sidebar from every <section class="guide-section">
     2. Turns  <div class="combo">A -> B -> C</div>  into chips
     3. Click-to-zoom on images inside <figure>
     4. Highlights the current section in the sidebar
   ========================================================= */
(function () {
  "use strict";

  /* 1. Sidebar ---------------------------------------------------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main .guide-section"));
  var navList = document.getElementById("nav-list");
  var links = [];

  sections.forEach(function (sec) {
    var h2 = sec.querySelector("h2");
    if (!h2 || !sec.id) return;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#" + sec.id;
    a.textContent = h2.textContent.trim();
    li.appendChild(a);
    navList.appendChild(li);
    links.push({ a: a, sec: sec });
  });

  /* Mobile menu */
  var sidebar = document.getElementById("sidebar");
  var menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", function () { sidebar.classList.toggle("open"); });
  navList.addEventListener("click", function () { sidebar.classList.remove("open"); });

  /* 2. Combo chips ------------------------------------------------ */
  document.querySelectorAll(".combo").forEach(function (box) {
    var title = box.getAttribute("data-title");
    var raw = box.textContent.trim();
    var parts = raw.split(/\s*(?:->|→)\s*/).filter(Boolean);
    box.textContent = "";
    if (title) {
      var t = document.createElement("span");
      t.className = "combo-title";
      t.textContent = title;
      box.appendChild(t);
    }
    var chain = document.createElement("div");
    chain.className = "chain";
    parts.forEach(function (p, i) {
      if (i > 0) {
        var ar = document.createElement("span");
        ar.className = "arrow";
        ar.textContent = "→";
        chain.appendChild(ar);
      }
      var s = document.createElement("span");
      s.className = "step";
      s.textContent = p;
      chain.appendChild(s);
    });
    box.appendChild(chain);
  });

  /* 3. Lightbox --------------------------------------------------- */
  var lb = document.createElement("div");
  lb.className = "lightbox";
  var lbImg = document.createElement("img");
  lb.appendChild(lbImg);
  document.body.appendChild(lb);
  lb.addEventListener("click", function () { lb.classList.remove("open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("open"); });
  document.querySelectorAll("figure img").forEach(function (img) {
    img.addEventListener("click", function () {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add("open");
    });
  });

  /* 4. Scroll-spy + back-to-top ----------------------------------- */
  var toTop = document.getElementById("to-top");
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  function onScroll() {
    var y = window.scrollY + 120;
    var current = links.length ? links[0] : null;
    links.forEach(function (l) { if (l.sec.offsetTop <= y) current = l; });
    links.forEach(function (l) { l.a.classList.toggle("active", l === current && window.scrollY > 200); });
    toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
