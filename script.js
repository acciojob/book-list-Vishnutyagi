let submit=document.getElementById("submit");
let n=0;
submit.addEventListener('click',function(){
	let title=document.getElementById("title").value;
	let author=document.getElementById("author").value;
	let isbn=document.getElementById("isbn").value;
	let books=document.getElementById("book-list");
	var row=document.createElement('tr');
	row.innerHTML=`
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn} <button class="delete" id="${n}">x</button></td>
	`
	
	books.appendChild(row);
	document.getElementById(`${n}`).addEventListener('click',function(){
		books.removeChild(row);
	});
	n++;
});