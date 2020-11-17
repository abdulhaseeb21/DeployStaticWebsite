var main = document.getElementById("mainField");

let body = document.body
main.addEventListener("click", () => {
  if(main.value === "0"){
    main.value = ""
  }
})
body.addEventListener("keydown", (e) => {
    if(e.keyCode === 13){
      ok()
    };
})
if(main.value === ""){
  writeThis()
}
function writeThis(value){
  if(main.value.charAt(0) === "0"){
     main.value = value
  }
  else{
    main.value += value
  }
}
function clearThis(){
  main.value = "0"
}
function cutLast(){
    var last = main.value.length - 1
    main.value = main.value.slice(0,last)
}
function ok(){
  main.value = eval(main.value);
}