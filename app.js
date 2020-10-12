let form = document.querySelector('.add');
let list = document.querySelector('.todos');
const search = document.querySelector('.search input');

document.body.style.backgroundColor = "#352f5b";


const template = (todo) =>{
	const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;

      list.innerHTML += html;
}

form.addEventListener('submit', e =>{
	e.preventDefault();

	let todo = form.add.value.trim();
	console.log(todo);

	if(todo.length){
		template(todo);
		form.reset();
	}
})


list.addEventListener('click', e =>{
	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove();
	}
})

const filterTodos = (term) => {

	Array.from(list.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.add('filtered'));

	Array.from(list.children) 
		.filter((todo) => todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.remove('filtered'));
	

		
};


 search.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	filterTodos(term);
});

 /*Digital Clock*/

 const clock = document.querySelector('.clock');


const tick = ()=> {
	const now = new Date();

	

	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();
	
	const html = `
	<span>${h}</span> :
	<span>${m}</span> :
	<span>${s}</span> 
	`;

	clock.innerHTML = html; 
};


setInterval(tick, 1000);
