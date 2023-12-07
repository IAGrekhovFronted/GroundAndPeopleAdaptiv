const radio = document.querySelector(".radioButton")
const AllRadio = document.querySelectorAll(".radioButton")
const procent = document.querySelector(".offer__procent")
const contain = document.querySelector(".contain")

contain.addEventListener("click", function (event) {
    let obj = event.target
    console.log(obj)
    if (obj.classList.contains('radioButton') == true) {
        procent.innerHTML = "10%"
        let parent = obj.parentElement
        for (n=0; n<4; n++) {
            let oneItem = AllRadio[n].parentElement
            oneItem.style.scale = "1"
        }
        parent.style.scale = "1.2"
    }
})