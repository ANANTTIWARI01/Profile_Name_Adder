let Box = document.querySelector(".box")
let Add = document.querySelector("#add")
let Confirmbutton = document.querySelector("#confirmbutton")
let Cancelbutton =  document.querySelector("#cancelbutton")
let Detail = document.querySelector("#detail")
let Forms = document.querySelector(".forms")
let collect = document.querySelector(".collection")
let Confirmbutton1 = document.querySelector(".confirming")
let Confirmbtn = document.querySelector("#confirmbutton1")
let Cancelbtn = document.querySelector("#cancelbutton1")
let arr=[];


Add.addEventListener('click',function(e){
e.preventDefault()
    Forms.style.display="block"
    Add.style.display="none"
    collect.style.display="none"
})
///////////////////////////////////////,,,,,,,,,,,,,,,,......../////////////////////
Confirmbutton.addEventListener('click',function(e){
  e.preventDefault()
  Forms.style.display="none"
  Add.style.display="block"
  collect.style.display="block"
  collect.style.display="flex"
  collect.style.margin="10px"
if(Detail.value != 0){
  
  ///......................///////////

  let  Avatar = document.createElement("p")  
  Avatar.classList = "circle"
  let  btn = document.createElement("button")
  btn.innerHTML= "x"
  let data = document.createElement("p") 
  data.classList="data"

///////////////////////////////////////////////
    
let values = Detail.value
  
  arr.push( Detail.value) 
  
  data.innerHTML= values[0]
  
    Avatar.append(btn,data) 
    Avatar.style.backgroundColor=getRandomHexColor();
    collect.append(Avatar)
    Detail.value=""

  /////////////////////////////////////////////

    btn.addEventListener('click',function(){
    Add.style.display="none"
    collect.style.display="none"
    Confirmbutton1.style.display="block"
  collect.style.margin="10px"



/////////////////................................///////////////////////////

      Confirmbtn.addEventListener('click',function(){
      Avatar.style.display="none"
      Forms.style.display="none"
      Add.style.display="block"
      collect.style.display="block"
      Confirmbutton1.style.display="none"
      })

//////////////....................................////////////////////////////////

      Cancelbtn.addEventListener('click',function(){
        Forms.style.display="none"
        Add.style.display="block"
        collect.style.display="block"
        Confirmbutton1.style.display="none"
        collect.style.display="flex"

        })
  

    })
  }
  else{
    alert("PLEASE FILL ALL THE DETAILS")
  }

  })


  ////////////////////.............//////////////////////////
 Cancelbutton.addEventListener('click',function(){
  Forms.style.display="none"
  Add.style.display="block"
  collect.style.display="block"
  collect.style.display="flex"
 })


 function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
  return `#${hex.padStart(6, '0')}`; // Ensure 6 digits with padding
}