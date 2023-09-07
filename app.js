 

let img =document.querySelector('img');
let p =document.querySelector('p') 

// function masjid() {
//       const remdomNumber = Math.ceil(Math.random()*2)
//       console.log(remdomNumber)    
//       if (remdomNumber ===1) {
//             p.innerHTML =`"you won the Toos"<img src=./accets/win.png><img/>img .style d-flex justify-content-center`
//             img.src = './accets/massjid.png.png'     
//       } 
//       else{
//             p.innerHTML=`'you loss the Toss'<img src=./accets/loss2.png><img/>`
//             img.src = './accets/chand.png'
//       }
// }
function masjid() {
      const remdomNumber = Math.ceil(Math.random() * 2);
      console.log(remdomNumber);
  
      if (remdomNumber === 1) {
          p.innerHTML = `
              <div style="text-align: center;">
                  "You won the Toss"<br>
                  <img src="./accets/win.png" style="display: block; margin: 0 auto;">
              </div>
          `;
          img.src = './accets/massjid.png.png';
          img.style.width ='300px'
          
      } else {
          p.innerHTML = `
              <div style="text-align: center;">
                  'You lost the Toss'<br>
                  <img src="./accets/loss2.png" style="display: block; margin: 0 auto;">
              </div>
          `;
          img.src = './accets/chand.png';
          img.style.width ='300px'
      }
}
  
  
// function chand() {
//       const remdomNumber = Math.ceil(Math.random()*2)
//       console.log(remdomNumber)    
//       if (remdomNumber ===2) {
//             p.innerHTML ="you won the Toos"
//             img.src = './accets/chand.png'     
//       } 
//       else{
//             p.innerHTML='you loss the Toss'
//             img.src = './accets/massjid.png.png'
             
//       }
// }

function chand() {
      const remdomNumber = Math.ceil(Math.random() * 2);
      console.log(remdomNumber);
  
      if (remdomNumber === 2) {
            p.innerHTML = `
            <div style="text-align: center;">
                "You won the Toss"<br>
                <img src="./accets/loss2.png" style="display: block; margin: 0 auto;">
            </div>`;
          img.src = './accets/chand.png';
          img.style.width ='300px'

      } else {
            p.innerHTML = `
            <div style="text-align: center;">
                  'You lost the Toss'<br>
                  <img src="./accets/win.png" style="display: block; margin: 0 auto;">
            </div>`;
          img.src = './accets/massjid.png.png';
          img.style.width ='300px'
      }
}