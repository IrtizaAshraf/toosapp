 

let img =document.querySelector('img');
let p =document.querySelector('p') 

function masjid() {
      const remdomNumber = Math.ceil(Math.random()*2)
      console.log(remdomNumber)    
      if (remdomNumber ===1) {
            p.innerHTML ="you won the Toos"
            img.src = './accets/massjid.jpg'     
      } 
      else{
            p.innerHTML='you loss the Toss'
            img.src = './accets/chand.png' 
      }
}


function chand() {
      const remdomNumber = Math.ceil(Math.random()*2)
      console.log(remdomNumber)    
      if (remdomNumber ===2) {
            p.innerHTML ="you won the Toos"
            img.src = './accets/chand.png'     
      } 
      else{
            p.innerHTML='you loss the Toss'
            img.src = './accets/massjid.jpg' 
      }
}