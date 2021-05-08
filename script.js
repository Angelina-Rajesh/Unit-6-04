document.getElementById('button').addEventListener('click',function() {

  var a = Number(document.getElementById('inputa').value)
  var b = Number(document.getElementById('inputb').value)
  var h = Number(document.getElementById('inputh').value)

  alert(((a+b)/2)*h)
})
