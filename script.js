(function(){
	const $ = (e) => document.querySelector(e);

	const ajax = new XMLHttpRequest();
	ajax.open("GET","carros.json");
	
	ajax.onreadystatechange = function (){
		if(ajax.readyState === 4 && ajax.status === 200){
			const items = JSON.parse(ajax.responseText);
			for(var i = 0; i < items.cart.length; i++){
				console.log(items.cart[i].nome)
				$(".insert").innerHTML +=`<tr>
											<td>${items.cart[i].nome}</td>
											<td>${items.cart[i].marca}</td>
											<td>${items.cart[i].cor}</td>
											<td>${items.cart[i].ano}</td>
										</tr>`;
			}
		}else{
		 	console.log("error")
		}
	}

	ajax.send();

})();