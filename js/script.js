const gridContainer = document.getElementById('gridContainer');
const playBtn = document.querySelector('.playBtn');
const difficult = document.querySelector('#difficult');


playBtn.addEventListener('click', showContainer);


function showContainer() {
        if (difficult.value == 'easy'){
            easy();
        }
        else if (difficult.value == 'medium'){
            medium();
        }
        else if (difficult.value == 'hard') {
            hard();
        }
}


const myArray = [];
numeroCasuale = '';

for (let i = 1; i < 18; i++) {
const numeroCasuale = Math.floor(Math.random() * 100);
//console.log(numeroCasuale);
myArray.push(numeroCasuale);
console.log(myArray);


function easy() {
    document.getElementById('punteggio').innerHTML = '';
    document.getElementById('copri').classList.add('hidden');
   /* const myArray = [];
    numeroCasuale = '';

    for (let i = 1; i < 18; i++) {
    const numeroCasuale = Math.floor(Math.random() * 100);
    //console.log(numeroCasuale);
    myArray.push(numeroCasuale);
    console.log(myArray);
 }*/

    if(!myArray.includes(numeroCasuale)) {
        myArray.push(numeroCasuale);
    } 

    gridContainer.innerHTML = '';
    for (let i = 1; i < 101; i++) {

    const newBox = document.createElement('div');
    newBox.classList.add('box');

    gridContainer.classList.remove('hidden'); 
   //  gridContainer.classList.add('d-flex');

    newBox.addEventListener('click',

        function () {
            console.log(i);
            
            newBox.innerHTML += i;

            if( /*this*/newBox.classList.contains('clicked')){
                /*this*/newBox.classList.remove('clicked');
                /*this*/newBox.innerHTML = '';
            }
            else{
                /*this*/newBox.classList.add('clicked');
            }

            for (let x = 0; x < myArray.length; x++) {
                if(myArray[x] === i) {
                    newBox.style.backgroundColor = 'red';
                    document.getElementById('punteggio').innerHTML = 'Hai perso - clicca play per ritentare';
                    document.getElementById('copri').classList.remove('hidden');
                }
            }
        }
);
    gridContainer.append(newBox);
    }
}



function medium() {
    document.getElementById('punteggio').innerHTML = '';
    document.getElementById('copri').classList.add('hidden');

   /* const myArray = [];
    numeroCasuale = '';

    for (let i = 1; i < 18; i++) {
    const numeroCasuale = Math.floor(Math.random() * 100);
    //console.log(numeroCasuale);
    myArray.push(numeroCasuale);
    console.log(myArray);
 }*/

    if(!myArray.includes(numeroCasuale)) {
        myArray.push(numeroCasuale);
    } 

    gridContainer.innerHTML = '';
    for (let i = 1; i < 82; i++) {
    
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.classList.add('boxMediumContainer');
    gridContainer.classList.remove('hidden');
    //gridContainer.classList.add('d-flex');

    newBox.addEventListener('click',

    function () {
        console.log(i);
        
        newBox.innerHTML += i;

        if( /*this*/newBox.classList.contains('clicked')){
            /*this*/newBox.classList.remove('clicked');
            /*this*/newBox.innerHTML = '';
        }
        else{
            /*this*/newBox.classList.add('clicked');
        }
        for (let x = 0; x < myArray.length; x++) {
            if(myArray[x] === i) {
                newBox.style.backgroundColor = 'red';
                document.getElementById('punteggio').innerHTML = 'Hai perso, clicca play per ritentare';
                document.getElementById('copri').classList.remove('hidden');
            }
        }
    }
);
    gridContainer.append(newBox);

    }
    
}



function hard() {
    document.getElementById('punteggio').innerHTML = '';
    document.getElementById('copri').classList.add('hidden');

    /* const myArray = [];
    numeroCasuale = '';

    for (let i = 1; i < 18; i++) {
    const numeroCasuale = Math.floor(Math.random() * 100);
    //console.log(numeroCasuale);
    myArray.push(numeroCasuale);
    console.log(myArray);
 }*/

    if(!myArray.includes(numeroCasuale)) {
        myArray.push(numeroCasuale);
    } 

    gridContainer.innerHTML = '';
    for (let i = 1; i < 50; i++) {
    
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.classList.add('boxHardContainer');
    gridContainer.classList.remove('hidden');
    //gridContainer.classList.add('d-flex');

    newBox.addEventListener('click',

    function () {
        console.log(i);
        
        newBox.innerHTML += i;

        if( /*this*/newBox.classList.contains('clicked')){
            /*this*/newBox.classList.remove('clicked');
            /*this*/newBox.innerHTML = '';
        }
        else{
            /*this*/newBox.classList.add('clicked');
        }
        for (let x = 0; x < myArray.length; x++) {
            if(myArray[x] === i) {
                newBox.style.backgroundColor = 'red';
                document.getElementById('punteggio').innerHTML = "Hai perso - clicca play per ritentare";
                document.getElementById('copri').classList.remove('hidden');
            }
        }
    }
);
    gridContainer.append(newBox);

    }
    
}

}



