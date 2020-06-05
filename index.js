let levels = [
    { 
        name: 'vacio', 
        color: 'transparent', 
        value: 50 
    },
    { 
        name: 'espuma', 
        color: 'yellow', 
        value: 8 
    },
    { 
        name: 'solido', 
        color: 'gray', 
        value: 12
    },
    { 
        name: 'liquido', 
        color: 'red', 
        value: 50 
    }
];

options = {
        urlImgMask: './furnace.png',
        topOffset: '65px',
        bottomOffset: '30px',
        levels : levels
}

update = () => {
    levels[1].value = parseInt(document.getElementById('txtEspuma').value);
    levels[2].value = parseInt(document.getElementById('txtAceroSolido').value);
    levels[3].value = parseInt(document.getElementById('txtAceroLiquido').value);

    let furnace1 = document.querySelector('#furnace1');
    furnace1.setAttribute('options', 'options');
}
