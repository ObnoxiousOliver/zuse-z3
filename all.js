var list = document.getElementById('pages')

document.addEventListener('keydown', keydown)

function keydown (e) {
  if (e.key === 'ArrowRight') nextPage()
  else if (e.key === 'ArrowLeft') prevPage()
  else if (e.key === 'ArrowUp') list.setAttribute('data-lmkl', false)
  else if (e.key === 'ArrowDown') list.setAttribute('data-lmkl', true)
  else if (e.key === 'o') list.setAttribute('data-or-nand', list.getAttribute('data-or-nand') === 'true' ? false : true)
}

function nextPage () {
  list.setAttribute('data-state',
  parseInt(list.getAttribute('data-state')) + 1)
}
function prevPage () {
  list.setAttribute('data-state',
    Math.max(1, parseInt(list.getAttribute('data-state')) - 1))
}

function updateBinResult () {
  var bin1 = parseInt(document.getElementById('bin-1').textContent)
  var bin2 = parseInt(document.getElementById('bin-2').textContent)
  var bin4 = parseInt(document.getElementById('bin-4').textContent)
  var bin8 = parseInt(document.getElementById('bin-8').textContent)
  document.getElementById('bin-result').textContent = bin1 + bin2 * 2 + bin4 * 4 + bin8 * 8

  
  var bin1 = parseInt(document.getElementById('bin-tc-1').textContent)
  var bin2 = parseInt(document.getElementById('bin-tc-2').textContent)
  var bin4 = parseInt(document.getElementById('bin-tc-4').textContent)
  var bin8 = parseInt(document.getElementById('bin-tc-8').textContent)
  document.getElementById('bin-tc-result').textContent = bin1 + bin2 * 2 + bin4 * 4 + bin8 * -8
}

function binClick (e) {
  e.target.textContent = e.target.textContent === '1' ? '0' : '1'
  updateBinResult()
}

document.getElementById('bin-1').addEventListener('click', binClick)
document.getElementById('bin-2').addEventListener('click', binClick)
document.getElementById('bin-4').addEventListener('click', binClick)
document.getElementById('bin-8').addEventListener('click', binClick)

document.getElementById('bin-tc-1').addEventListener('click', binClick)
document.getElementById('bin-tc-2').addEventListener('click', binClick)
document.getElementById('bin-tc-4').addEventListener('click', binClick)
document.getElementById('bin-tc-8').addEventListener('click', binClick)
