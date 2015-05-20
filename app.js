var input = document.getElementById('input');
    output = document.getElementById('output');

var converter= new showdown.Converter();

input.addEventListener('input', function(e) {
  var text = e.target.value;
  html = converter.makeHtml(text);
  output.innerHTML = html;
})
