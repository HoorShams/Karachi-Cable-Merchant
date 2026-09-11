// KCM Cable — Quote form handler
// Sends the filled form to WhatsApp 03225444378 (923225444378)
document.addEventListener('submit', function (e) {
  e.preventDefault();
  var f = e.target, lines = [];
  Array.from(f.elements).forEach(function (el) {
    if (el.tagName === 'BUTTON') return;
    var lab = el.closest('div') ? el.closest('div').querySelector('label') : null;
    var name = lab ? lab.textContent.replace('*', '').trim() : (el.name || el.id || 'Field');
    if (el.value) lines.push(name + ': ' + el.value);
  });
  var msg = 'Quote Request - KCM Cable\n\n' + lines.join('\n');
  window.open('https://wa.me/923225444378?text=' + encodeURIComponent(msg), '_blank');
});
