document.getElementById('button').addEventListener('click', function () {

  const a = Number(document.getElementById('inputa').value)
  const b = Number(document.getElementById('inputb').value)
  const h = Number(document.getElementById('inputh').value)

  alert(((a + b) / 2) * h)
})
