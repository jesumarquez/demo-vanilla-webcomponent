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
        this.shadow.innerHTML = `
        <style>
        .furnace-component {
            width: 100px;
            height: 300px;
            background-color: bisque;
        }
        
            .furnace-component ul {
                list-style: none;
            }
        
                .furnace-component li {
                    border: 1px solid lightgray;
                }
        
                    .furnace-component li.level-lightgray {
                        background-color: lightgray;
                    }
        
                    .furnace-component li.level-yellow {
                        background-color: yellow;
                    }
                    
                    .furnace-component li.level-gray {
                        background-color: gray;
                    }
        
                    .furnace-component li.level-red {
                        background-color: red;
                    }
        </style>
        <div class="furnace-component" role="furnace">
            <ul>
            ${ 
                this.options.items.map(element => `<li class="level-lightgray">${element.value}%</li>`)
                .join('')
            }
            </ul>
        </div>`;
    }
}
{/* <div class="furnace-component" role="furnace">
            <ul>
                <li class="level level-lightgray" data-value="30">30%</li>
                <li class="level level-yellow" data-value="20">20%</li>
                <li class="level level-gray" data-value="10">10%</li>
                <li class="level level-red" data-value="40">40%</li>
            </ul>
        </div> */}
customElements.define('furnace-2d', Furnace);