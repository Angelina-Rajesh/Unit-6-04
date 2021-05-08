document.getElementById('button').addEventListener('click', function () {

  let const a = Number(document.getElementById('inputa').value)
  let const b = Number(document.getElementById('inputb').value)
  let const h = Number(document.getElementById('inputh').value)

  alert(((a + b) / 2) * h)
})
