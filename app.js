let oldNotes = document.querySelector('#d');
let save = document.querySelector('#saveButton');
let text = document.querySelector('textarea');
let fecha = document.querySelector('#date');
let rocket = document.querySelector('#showNotes');
let note = document.querySelector('#newNote');

let notes = [];

let generateDate = () => {
    let date = new Date();
    let minute = date.getMinutes();
    let minutes = minute.toString().padStart(2, 0);
    let hour = date.getHours();
    let hours = hour.toString().padStart(2, 0);
    let day = date.getDate();
    let days = day.toString().padStart(2, 0);
    let month = date.getMonth() + 1;
    let months = month.toString().padStart(2, 0);
    let years = date.getFullYear();

    let fullDate = hours + ":" + minutes + " " + days + "/" + months + "/" + years
    return fullDate;
}


let saveNote = (x) => {
    let note = x;
    let title = note.slice(0, 20) + "...";

    notes.push({
        title: title,
        text: note,
    })

    text.value = "";
    text.focus();
}


let showNoteList = () => {
    notes.forEach((item) => {
        let a = document.createElement('a');
        let p = document.createElement('p');

        p.textContent = item.title;
        let content = item.text;

        oldNotes.appendChild(a);
        a.appendChild(p);

        a.addEventListener('click', function(){
            let texto = content;
            text.value = texto;
            text.focus();
        })
    })
}

let shadowEffect = () => {
    rocket.style.textShadow = "1px 1px 10px white";
    rocket.style.transform = "scale(1.3)";
    rocket.style.color = "white";
    setTimeout(() => {
        rocket.style.textShadow = "0px 0px 0px white";
        rocket.style.transform = "scale(1)";
        rocket.style.color = "#bdbdbd";
    }, 1000)
}

let warning = () => {
    note.style.boxShadow = "0px 0px 10px rgb(167, 167, 167)";
    note.style.transform = "scale(1.05)";
    setTimeout(() => {
        note.style.boxShadow = "0px 0px 3px rgb(167, 167, 167)";
        note.style.transform = "scale(1)";
    }, 300)
}

let newNote = () => {
    let texto = text.value;

    if (texto != "") {
        saveNote(texto);
        shadowEffect();
        showNoteList();
    } else {
        warning();
    }
    
}


save.addEventListener('click', newNote);