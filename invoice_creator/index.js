const CAR_EL = document.querySelector("#car-btn");
const LAWN_EL = document.querySelector("#lawn-btn");
const WEEDS_EL = document.querySelector("#weeds-btn");
const ITEMS_EL = document.querySelector(".items");
const RESET_EL = document.querySelector("#reset-btn");
const SUM_EL = document.querySelector("#sum-el");
const NOTE_EL = document.querySelector("#note-el");
const BTN_ARR = [CAR_EL, LAWN_EL, WEEDS_EL]
const ITEMS_ARR = [
    {
        item: "Wash Car",
        type: "wash-row",
        amount: 10,
    },
    {
        item: "Mow Lawn",
        type: "lawn-row",
        amount: 20,
    },
    {
        item: "Pull Weeds",
        type: "weeds-row",
        amount: 30,
    }
]

let sum = 0;
let array = [];
for (let i = 0; i < BTN_ARR.length; i++) {
    BTN_ARR[i].addEventListener("click", () => {
        BTN_ARR[i].setAttribute("disabled", "");
        addedArray.push(i);
        console.log(addedArray);
        render();
    })
}

let addedArray = [];
function render() {
    ITEMS_EL.innerHTML = "";
    for (let i = 0; i < addedArray.length; i++) {
        let item = addedArray[i];
        let name = ITEMS_ARR[item].item;
        let type = ITEMS_ARR[item].type;
        let amount = ITEMS_ARR[item].amount;
        let div = document.createElement("div");
        div.setAttribute("class", "row");
        div.setAttribute("id", type);
        let string = `
            <div class="group"><span class="item">${name}</span><button class="remove-btn" data-type=${type} onclick="remove(${item})">Remove</button>
            </div>
            <div><span class="large">$</span><span class="large dark">${amount}</span></div>
            `;
        div.innerHTML = string;
        ITEMS_EL.append(div);
    }
    displaySum();
    displayNote();
}

function remove(index) {
    let toDelete = addedArray.indexOf(index);
    addedArray.splice(toDelete, 1);
    let attr = BTN_ARR[index].getAttributeNode("disabled");
    BTN_ARR[index].removeAttributeNode(attr);
    render();
}

RESET_EL.addEventListener("click", function () {
    addedArray = [];
    render();
    for (let i = 0; i < BTN_ARR.length; i++) {
        let attr = BTN_ARR[i].getAttributeNode("disabled");
        if (attr) {
            BTN_ARR[i].removeAttributeNode(attr);
        }
    }
})

function displaySum() {

    sum = 0;
    if (addedArray.length !== 0) {
        for (let i = 0; i < addedArray.length; i++) {
            sum += ITEMS_ARR[addedArray[i]].amount;
        }
    }
    SUM_EL.textContent = sum;
}

function displayNote() {
    if (addedArray.length !== 0) {
        NOTE_EL.style.visibility = "visible";
    } else {
        NOTE_EL.style.visibility = "hidden";
    }
}