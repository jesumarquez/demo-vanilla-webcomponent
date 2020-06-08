class Furnace extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    // get options(){
    //     return eval(this.getAttribute('options'));
    // }

    // set options(val) {
    //     console.log(val);
    //     this.setAttribute('options', val);
    // }

    // static get observedAttributes() {
    //     return ['options'];
    // }

    // attributeChangedCallback(prop, oldVal, newVal) {
    //     if(prop === 'options') this.render();
    // }

    setOptions(options) {
        this.options = options;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(!this.options) return;

        this.shadow.innerHTML = `
        <style>
            :host {
                display: inline-block;
                position: relative;
            } 
            
            .container {
                display: inline-flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }

            .container .top-offset {
                height: ${this.options.topOffset};
            }

            .container .bottom-offset {
                height: ${this.options.bottomOffset};
            }

            .container ul {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                list-style: none;
                padding: 0;
                margin: 0;
                background-attachment: fixed;
            }
            ${
                this.options.levels.map(element => `
                    .container li#item-${element.name} { 
                        flex-grow: ${element.value}; 
                        background-color: ${element.color} 
                    }`)
                    .join('')
            }
            :host img {
                position: absolute;
                max-width: 100%;
                max-height: 100%;
                left: 0;
                top: 0;
            }
        </style>
        <div class="container">
        <div class="top-offset"></div>
        <ul>
        ${ 
            this.options.levels.map(element => `<li id="item-${element.name}" class="${element.color}"></li>`)
            .join('')
        }
        </ul>
        <div class="bottom-offset"></div>
        </div>
        <img src="${this.options.urlImgMask}">
        `;
    }
}

customElements.define('furnace-2d', Furnace);