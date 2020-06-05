function getOptions() {
    return {
        urlImgMask: './furnace.png',
        topOffset: '65px',
        bottomOffset: '30px',
        levels : [
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
        ]
    };
}