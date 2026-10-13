let todo=["sleep", "bath", "breakfast", "tution", "coding"];


while(true){
  request=prompt("Please enter your request:");
  if(request==="quit"){
    console.log("exit the app");   
    break; 
  }
  else if(request==="list"){
    for(element of todo){
      console.log(element);
    }
  }
  else if(request==="add"){
    let add=prompt("add item, which you want to add:");
    todo.push(add);
       
  }
  else if(request==="delete"){
    let deleteTask=prompt("enter which you want to delete");
    let delIdx;
    let i=0;
    while(todo[i]!==deleteTask){
      i++;
    }
    if(todo[i]===deleteTask){
      delIdx=i;
      todo.splice(delIdx,1);
    }
  }
  else{
    console.log("unknown command");
    
  }
   
}