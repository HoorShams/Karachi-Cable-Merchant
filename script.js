/* KCM Cable® — site JavaScript */
var WHATSAPP = "923225444378";
document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Hamburger menu ---------- */
  var btn = document.querySelector('button[aria-label="Toggle menu"]');
  if (btn) {
    var bar = btn.parentElement;
    var links = [["index.html","Home"],["about.html","About"],["companies.html","Companies"],["quality.html","Quality"],["contact.html","Contact"]];
    var menu = document.createElement("div");
    menu.id = "mobile-menu";
    menu.className = "border-t border-border bg-background lg:hidden";
    menu.style.display = "none";
    var html = '<nav class="mx-auto flex max-w-7xl flex-col px-6 py-4">';
    links.forEach(function (l) {
      html += '<a href="' + l[0] + '" class="border-b border-border py-3 text-sm font-semibold text-foreground">' + l[1] + "</a>";
    });
    html += '<a href="quote.html" class="mt-4 rounded-md bg-accent px-5 py-3 text-center text-sm font-bold text-accent-foreground">Get a Quote</a></nav>';
    menu.innerHTML = html;
    bar.parentElement.appendChild(menu);
    var openIcon = btn.innerHTML;
    var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      var isOpen = menu.style.display !== "none";
      menu.style.display = isOpen ? "none" : "block";
      btn.innerHTML = isOpen ? openIcon : closeIcon;
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  /* ---------- FAQ accordion ---------- */
  var answers = {
    "What sizes of cable do you stock?": "We stock copper and silver/aluminum wire from 0.5mm to 630mm, and all standard coil sizes including 3/29, 7/29, 7/36, 7/44 and more.",
    "Do you deliver outside Lahore and Karachi?": "Yes, we offer home delivery all over Pakistan. Please note delivery is paid (not free) — charges depend on your city, order size and weight. Contact us for an exact quote and timeline.",
    "Is there a minimum order quantity?": "We accept orders of all sizes — from small contractor jobs to bulk industrial supply. Contact us with your requirement for the best price.",
    "Are your cables certified?": "KCM Cable® is a registered Pakistani trademark. Every cable is built with 99.99% pure copper, full gauge conductors and premium-grade PVC insulation.",
    "Can you make custom wire orders?": "Absolutely. We manufacture custom cable solutions for special projects. Send us your specifications via the quote form or WhatsApp."
  };
  document.querySelectorAll("button").forEach(function (b) {
    var span = b.querySelector("span");
    if (!span || !answers[span.textContent.trim()]) return;
    var ans = document.createElement("div");
    ans.className = "border-t border-border px-5 py-4 text-sm text-muted-foreground";
    ans.textContent = answers[span.textContent.trim()];
    ans.style.display = "none";
    b.after(ans);
    var icon = b.querySelector("svg");
    b.addEventListener("click", function () {
      var show = ans.style.display === "none";
      ans.style.display = show ? "block" : "none";
      if (icon) icon.style.transform = show ? "rotate(45deg)" : "";
    });
  });

  /* ---------- Quote form -> WhatsApp ---------- */
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lines = ["*New Quote Request — KCM Cable®*"];
      form.querySelectorAll("input, select, textarea").forEach(function (el) {
        var label = el.closest("label") || el.parentElement;
        var name = (label.querySelector("span") || label).childNodes[0];
        var key = name && name.textContent ? name.textContent.trim().replace(/\*$/, "") : el.type;
        var val = el.type === "checkbox" ? (el.checked ? "Yes" : "") : el.value.trim();
        if (val) lines.push(key + ": " + val);
      });
      window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");
    });
  }
});
