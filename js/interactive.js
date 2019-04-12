function mainFunction(){

var className = document.getElementsByClassName('thumbnailImage');

function zoom(){
	removerBorda();
	var src = this.getAttribute('src');
	this.style.border = 'solid white 1px';
	document.getElementById('imagemAmpliada').firstElementChild.setAttribute('src',src);
}
	
	Array.from(className).forEach(function(element){

		element.addEventListener('click',zoom);

	});

	function removerBorda(){
		Array.from(className).forEach(function(element){

			element.removeAttribute("style");

		});
	}
	
	
}

