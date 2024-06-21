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
		<td>${isbn}</td>
		<td><button class="delete">x</button><td>
	`
	books.appendChild(row);
	document.getElementById('book-list').addEventListener('click', function(e) {
	    if (e.target.classList.contains('delete')) {
	            const row = e.target.closest('tr'); // Correctly find the closest row
		        if (row) {
		            row.remove(); // Directly remove the row
		        }
	    }
	});
});