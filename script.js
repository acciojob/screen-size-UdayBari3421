let div = document.createElement("div");
window.onresize = () => {
	div.innerHTML = `<h1>Width: ${window.innerWidth } and Height: ${window.innerHeight}</h1>`
}; 
document.body.append(div);