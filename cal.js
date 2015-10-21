$( document ).ready(function() {
		var array = [];
		var selop = null;

		var value1=0;
		var value2=0;
		var i =0;
		var temp =0;
		$(".btn").click(function(){
			i =$(this).attr("value");
			if(!isNaN(i)){
				if(selop == null){
					if(value1 == 0){
						value1 = i;
						setResult(value1);
					}else{
						value1 = value1 + ""+i;
						setResult(value1);
					}
				}else{
					if(value2 == 0){
						value2 = i;
						var display = value1 + " " + selop + " " + value2;
						setResult(display);
					}else{
						value2 = value2 + ""+i;
						var display = value1 + " " + selop + " " + value2;
						setResult(display);
					}
				}
			}else if(i == '='){
				getresult(value1,value2, selop);
				value1 = 0;
				value2 = 0;
				selop = null;
			}else{
				selop = i;
				var display = value1 + " " + selop;
				setResult(display);
			}
		});
		function setResult(result){
			$("#calResult").val(result);
		}
		function getresult(value1,value2, selop){
			if(selop == '+'){
					setResult(sum(value1,value2));
				}else if(selop == '-'){
					setResult(subtract(value1,value2));
					}else if(selop == '/'){
					setResult(divide(value1,value2));
				}else if(selop == '*'){
					setResult(multiple(value1,value2));
				}
		}
		function sum(a,b){
			return parseInt(a)+parseInt(b);
		}
		function subtract(a,b){
			return parseInt(a)-parseInt(b);

		}
		function divide(a,b){
			return parseInt(a)/parseInt(b);

		}
		function multiple(a,b){
			return parseInt(a)*parseInt(b);

		}
	});