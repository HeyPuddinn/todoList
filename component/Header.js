import html from "../core.js";


function Header(){
  const valueInput = document.querySelector('.new-todo')
  return html`
    <header class="header">
      <h1>Todo List</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus
      onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim(), this)">
      <button onclick="dispatch('add', document.querySelector('.new-todo').value.trim())" id="btn-add">Add</button>
    </header>
    `
}

export default Header