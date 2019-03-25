var form =  document.getElementById("form");

form.addEventListener("submit", function(event) {
	/* Act on the event */
	event.preventDefault();
	var name = form.name.value;
	var decrpt = form.Project_Description.value;
	var date = new Date(form.due_date.value);

	let arr = [name, decrpt, date];

	localStorage.setItem("1", arr);

	var display = document.getElementById("display");
	var links = document.createElement("A");
	links.setAttribute("href", "project.html");
	links.setAttribute("class", "link");
	var project = document.createTextNode(name);
	links.appendChild(project);
	display.appendChild(links);
	form.reset();


});