let add = document.querySelector('.add')
let inputText = document.querySelector('.inputText')
let inputDate = document.querySelector('.inputDate')
let display = document.querySelector('.display')

let arr1 = JSON.parse(localStorage.getItem('memory')) || []
console.log(JSON.parse(localStorage.getItem('memory')))

render()

function render() {
let deacum = '';

for (let i = 0; i < arr1.length; i++) {
  let todolist = arr1[i]
  let {name, dueDate} = todolist
  let genHtml = `
  
  <div class="border-right">${name}</div> 
  <div class="border-right">${dueDate}</div>
  <button title="Delete" onclick="
  arr1.splice(${i}, 1)
  render()
  " class="column"><i class="fa fa-trash" aria-hidden="true"></i></button>
  `
  deacum += genHtml
}
display.innerHTML = deacum
}



added = () => {
  let name = inputText.value
  let dueDate = inputDate.value
  let erromassage = document.querySelector('.erromassage')

if (inputText.value.length === 0 && inputDate.value.length === 0) {
  erromassage.innerHTML = 'NO INPUT'
} else if (inputText.value.length >= 1 && inputDate.value.length === 0){
  erromassage.innerHTML = 'NO DATE INPUT'
} else if (inputText.value.length === 0 && inputDate.value.length >= 1){
  erromassage.innerHTML = 'NO TEXT INPUT'
} else if (inputText.value.length >= 1 && inputDate.value.length >= 1) {
  arr1.push({name, dueDate})
  render()
inputText.value = ''
inputDate.value = ''
erromassage.innerHTML = null
localStorage.setItem('memory', JSON.stringify(arr1))
}
}



add.addEventListener('click', added)

console.log(1000 - '100')

