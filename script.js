const addBtn = document.querySelector(".add")

addBtn.addEventListener('click', () => addNote())

let noteNo = 0

const allNotes = JSON.parse(localStorage.getItem("notes"))

if(allNotes) {
    allNotes.forEach(note => addNote(note))
}




function addNote(text = "") {

let vectorArt =  document.querySelector(".instruction")
    vectorArt.classList.add("hidden")

    const notes = document.querySelector(".notes")

    // bg = Math.floor(Math.random() * 1000000)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // console.log(bg)

    const g1 = Math.floor(Math.random() * 255);
    const g2 = Math.floor(Math.random() * 255);
    const g3 = Math.floor(Math.random() * 255);
    const g4 = Math.floor(Math.random() * 255);
    const g5 = Math.floor(Math.random() * 255);
    const g6 = Math.floor(Math.random() * 255);

    // background-color: #${randomColor} ;

    const div = document.createElement('div')
    div.classList.add("note")
    noteNo += 1
    div.innerHTML = `

            <div class="tools" style=" background: linear-gradient(90deg, rgba(${g1},${g2},${g3},1) 5%, rgba(${g4},${g5},${g6},1) 90%);">
                <span>${noteNo}</span>
                <button class="editNote"> <i class="fas fa-edit"></i> </button>
                <button class="deleteNote">  <i class="fas fa-trash"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"} " ></div>
            <textarea class = "${text ? "hidden" : ""}" ></textarea>

    `

    const main = div.querySelector(".main");
    const textarea = div.querySelector("textarea");

    textarea.value = text
    main.innerHTML = text

    const deleteBtn = div.querySelector(".deleteNote")

    deleteBtn.addEventListener('click', () => {
        div.remove()
        localS()
        const numberOfNotes = notes.querySelectorAll('.note').length;
        if(numberOfNotes === 0) {
            vectorArt.classList.remove("hidden")
        }
    })
    const editBtn = div.querySelector(".editNote")
    editBtn.addEventListener('click', () => {
        main.classList.toggle("hidden")
        textarea.classList.toggle("hidden")
       
    })
    textarea.addEventListener('input' , (e) => {
        const {value} = e.target;
        main.innerHTML = value
        localS()

    })

    notes.appendChild(div)

}

const deleteAllNotes = document.querySelector(".delete")

deleteAllNotes.addEventListener('click' , () => {

    localStorage.clear()
    location.reload()
})




function localS(){
    // let vectorArt =  document.querySelector(".instruction")
    const textnote = document.querySelectorAll("textarea");
    const saveNote = []
    if(saveNote.length === 0){
        // location.reload()
    }
    textnote.forEach((e) => saveNote.push(e.value))
    localStorage.setItem("notes" , JSON.stringify(saveNote))
}



