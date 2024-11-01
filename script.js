const textArea = document.querySelector(".inputName");
console.log(textArea);
textArea.addEventListener("input", function () {
    // Store the input value in localStorage
    localStorage.setItem("textArea", this.value);
});
window.addEventListener("load", function () {
    const storedValue = localStorage.getItem("textArea");
    if (storedValue) {
        textArea.value = storedValue;
    }
});
// inputStudentId
const inputStudentId = document.querySelector(".inputStudentId");
console.log(inputStudentId);
// local storage setup
inputStudentId.addEventListener("input", function () {
    // Store the input value in localStorage
    localStorage.setItem("inputStudentId", this.value);
});
window.addEventListener("load", function () {
    const storedValued = localStorage.getItem("inputStudentId");
    if (storedValued) {
        inputStudentId.value = storedValued;
    }
});
// input Email
const inputClas = document.querySelector(".inputClas");
console.log(inputClas);
// local storage setup
inputClas.addEventListener("input", function () {
    // Store the input value in localStorage
    localStorage.setItem("inputClas", this.value);
});
window.addEventListener("load", function () {
    const storedemail = localStorage.getItem("inputClas");
    if (storedemail) {
        inputClas.value = storedemail;
    }
});

// Inpute Contact
const inputRoll = document.querySelector(".inputRoll");
console.log(inputRoll);
// local storage setup
inputRoll.addEventListener("input", function () {
    // Store the input value in localStorage
    localStorage.setItem("inputRoll", this.value);
});
window.addEventListener("load", function () {
    const storedContact = localStorage.getItem("inputRoll");
    if (storedContact) {
        inputRoll.value = storedContact;
    }
});

const button = document.querySelector(".glow-on-hover");
console.log(button);

const containeSecond = document.querySelector(".containeSecond")
button.addEventListener("click", addStudentData,);

function addStudentData() {
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("dataItem")
    const datas1 = document.createElement("p");
    const datas2 = document.createElement("p");
    const datas3 = document.createElement("p");
    const datas4 = document.createElement("p");
    datas1.classList.add("datas1");
    datas2.classList.add("datas2");
    datas3.classList.add("datas3");
    datas4.classList.add("datas4");
    datas1.innerHTML = textArea.value;
    datas2.innerHTML = inputStudentId.value;
    datas3.innerHTML = inputClas.value;
    datas4.innerHTML = inputRoll.value;
    studentDiv.appendChild(datas1);
    studentDiv.appendChild(datas2);
    studentDiv.appendChild(datas3);
    studentDiv.appendChild(datas4);
    if (textArea.value === '' || inputStudentId.value == '' || inputClas.value === '' || inputRoll.value === '') {
        alert("Pleace fill text area");
        return textArea;
    } else {
        alert("Form submitted successfully!");
    }

    const addingsryle = document.createElement("addingsryle");
    addingsryle.innerHTML = 'Name'
    addingsryle.classList.add("styleResult")
    // delet work
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("trash-button");
    studentDiv.appendChild(deleteButton);

    // clean part
    containeSecond.appendChild(studentDiv);
    textArea.value = '';
    inputStudentId.value = '';
    inputClas.value = '';
    inputRoll.value = '';
}
containeSecond.addEventListener("click", deleteItem)
function deleteItem(e) {
    const item = e.target;
    console.log(item);
    if (item.classList[0] === "trash-button") {
        const parent = item.parentElement;
        parent.remove();
    }
    return confirm("Are you sure you want to delete this list");
}



