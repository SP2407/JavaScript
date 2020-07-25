// console.log("Hello")
let colors = ['blue', 'green', 'yellow','black'];

function iterate(item) {
	setInterval(function(){
		document.body.style.background= item;
	},5000)
  }
  
  for(let i=0;i<colors.length;i++){
	  iterate(colors[i]);
  }

 