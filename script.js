function addition() {
  a = Number(parseInt(document.getElementById('inputa').value))
  b = Number(parseInt(document.getElementById('inputb').value))
  h = Number(parseInt(document.getElementById('inputh').value))
  areaOfTrapezoid = ((a + b) / 2) * h
  alert('Area of trapezoid = ' + Number(areaOfTrapezoid))
}

document.getElementById('button').addEventListener ('click', addition)
