class Furnace extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observerAttributes() {
        return ["options"];
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if(prop === 'options') this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.options = eval(this.getAttribute('options'));
        console.log(this.shadow);
        this.shadow.innerHTML = `
        <style>
            :host {
                display: inline-flex;
                flex-direction: column;
            }
        
            :host ul {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                list-style: none;
                padding: 0;
                margin: 0;
            }
            ${
                this.options.items.map(element => `
                    :host li#item-${element.name} { 
                        flex-grow: ${element.value}; 
                        background-color: ${element.color} 
                    }`)
                    .join('')
            }
        </style>
        <ul>
            <li id="item-empty"></li>
        ${ 
            this.options.items.map(element => `<li id="item-${element.name}" class="${element.color}"></li>`)
            .join('')
        }
        </ul>`;
    }
}

customElements.define('furnace-2d', Furnace);