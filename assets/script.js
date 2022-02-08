console.log('JavaScript code has loaded!')

let yourName = "Nic Ystad" 
// cookie count
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

credit.textContent = `Created by ${yourName}`


//Gingerbread-----------------------------------------------------------------------------------------------
// + LISTEN
gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')
})
gbPlusBtn.addEventListener('click', function () {
    gb++;
    console.log('gb++', gb);
// ORDER SUMMARY + 
    const gbPlusBtn = document.querySelector('#add-gb');
const gbValue = document.querySelector('#qty-gb');
gbPlusBtn.addEventListener('click', function () {
  gbValue.innerText = gb;
});
  });
// - LISTEN
gbMinusBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
    })
gbMinusBtn.addEventListener('click', function () {
        gb--;
        console.log('gb--', gb);
      
        const gbMinusBtn = document.querySelector('#minus-gb');
        const gbValue = document.querySelector('#qty-gb');
        gbMinusBtn.addEventListener('click', function () {
          gbValue.innerText = gb;
        });
    });


//Chocolate chip---------------------------------------------------------------------------------------------
// plus listener
ccPlusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')
    })
    ccPlusBtn.addEventListener('click', function () {
        cc++;
        console.log('cc++', cc);
        
        const ccPlusBtn = document.querySelector('#add-cc');
const ccValue = document.querySelector('#qty-cc');
ccPlusBtn.addEventListener('click', function () {
  ccValue.innerText = cc;
});
      });
    
    
    // minus listener
    ccMinusBtn.addEventListener('click', function() {
    
        console.log('Chocolate Chip - button was clicked!')
        })
    ccMinusBtn.addEventListener('click', function () {
            cc--;
            console.log('cc--', cc);

            const ccMinusBtn = document.querySelector('#minus-cc');
            const ccValue = document.querySelector('#qty-cc');
            ccMinusBtn.addEventListener('click', function () {
              ccValue.innerText = cc;
            });
          });

// Sugar Cookies
// plus listener
sugarPlusBtn.addEventListener('click', function() {
    console.log('Sugar Cookie + button was clicked!')
    })
    sugarPlusBtn.addEventListener('click', function () {
        sugar++;
        console.log('sugar++', sugar);

        const sugarPlusBtn = document.querySelector('#add-sugar');
        const sugarValue = document.querySelector('#qty-sugar');
        sugarPlusBtn.addEventListener('click', function () {
          sugarValue.innerText = sugar;
        });
      });
    
    
    // minus listener
    sugarMinusBtn.addEventListener('click', function() {
    
        console.log('Sugar Cookie - button was clicked!')
        })
    sugarMinusBtn.addEventListener('click', function () {
            sugar--;
            console.log('sugar--', sugar);

            const sugarMinusBtn = document.querySelector('#minus-sugar');
            const sugarValue = document.querySelector('#qty-sugar');
            sugarMinusBtn.addEventListener('click', function () {
              sugarValue.innerText = sugar;
            });
          });