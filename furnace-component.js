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

        
            .furnace-component ul {
                list-style: none;
            }
        
                .furnace-component li {
                    border: 1px solid lightgray;
                }
                ${
                    this.options.items.map(element => `.furnace-component li#item-${element.name} { height: ${element.value}px; }`)
                        .join('')
                }
        
                    .furnace-component li.lightgray {
                        background-color: lightgray;
                    }
        
                    .furnace-component li.yellow {
                        background-color: yellow;
                    }
                    
                    .furnace-component li.gray {
                        background-color: gray;
                    }
        
                    .furnace-component li.red {
                        background-color: red;
                    }
        </style>
        <div class="furnace-component" role="furnace">
            <ul>
            ${ 
                this.options.items.map(element => `<li id="item-${element.name}" class="${element.color}">${element.value}%</li>`)
                .join('')
            }
            </ul>
        </div>`;
    }
}

customElements.define('furnace-2d', Furnace);