function turing(userInput) {
	var final=""; userInput=userInput.toLowerCase();
  for (var i=0; i<userInput.length; i++) {
  	var current = ((userInput.substring(i, i+1)).charCodeAt(0)-96)
    if (current<10) {current="0"+current}
    final=final+current;
  }
 final="18"+final;
 return(Math.pow(final*51+819, 2))
}

function alan(userInput) {
	var workspace = "" + ((Math.pow((userInput), 1/2)-819)/51);
  workspace = workspace.substring(2)
  var current="";
  while (workspace.length!=0) {
  	//alert(workspace.substring(0,2))
    current = current + String.fromCharCode(96 + Number(workspace.substring(0,2)))
    workspace=workspace.substring(2);
	}
  return(current)
}
