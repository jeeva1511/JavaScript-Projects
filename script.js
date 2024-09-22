// hex value container
const hexbtn = document.querySelector('.hexbtn');
const hexColorValue = document.querySelector('.hexvalue');
const hexContainer = document.querySelector('.hexcontainer');
const hexCopyBtn = document.querySelector('#hexcopy');
// create random hex color
hexbtn.addEventListener('click',()=>{
    let charset = '0123456789ABCDEF';
    let hexoutput = '';

    for(let i =0 ,charsetlength=charset.length;i<6;++i){
        hexoutput += charset.charAt(Math.floor(Math.random()*charsetlength))
    }

    hexColorValue.innerHTML= `#${ hexoutput}`;
    hexContainer.style.backgroundColor = `#${ hexoutput}`;
    hexbtn.style.color = `#${ hexoutput}`;


    // console.log('===================')
    // console.log(hexoutput)
    // console.log('===================')
})

// RGB COLOR

const rgbBtn = document.querySelector('#rbgbtn');
const getRedValue = document.getElementById('red');
const getGreenValue = document.getElementById('green');
const getBlueValue = document.getElementById('blue');
const rgbContainer = document.querySelector('.rbgcontainer');
const rgbCopyBtn = document.querySelector('#rbgcopy');
const rgbValue = document.querySelector('.rgbvalue')

rgbBtn.addEventListener('click',()=>{
    let redOutput = getRedValue.value;
    let greenOutput = getGreenValue.value;
    let blueOutput = getBlueValue.value;
     


    // console.log('===================')
    //  console.log(redOutput,blueOutput,greenOutput)
    //  console.log('===================')
    rgbValue.innerHTML = `RGB(${redOutput},${ greenOutput},${blueOutput})`
     rgbContainer.style.backgroundColor=`rgb(${redOutput},${ greenOutput},${blueOutput})`;
     rgbBtn.style.color=`rgb(${redOutput},${ greenOutput},${blueOutput})`
})

// hex copy to clipboard;;
 hexCopyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(hexColorValue.innerHTML)
    alert('Hex Value is copied')
})

// rgb copy to clipboard;;

rgbCopyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(rgbValue.innerHTML )
    alert('RGB Value is copied')
})
