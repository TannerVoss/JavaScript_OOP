console.log("Script attached");

class Notebook {
    constructor(propertyOf) {
        this.length = 0;
        this.propertyOf = propertyOf;
        this.subject = subject;
        this.nextId = 1;
        this.notes = [];

    }
    add(note) {
        note.id = this.nextId++;
        this.entries.push(note);
    }
    delete(noteId) {
        this.entries = this.entries.filter(function(entry) {
            if (entry.id == noteId) {
                return false;
                else return true;
            }
        });

    }
    read(noteId) {
        let note = this.entries.find(function(n) {
            if (n.id == noteId) return true;
            else return false;
        });
        alert(note.content);
    }
}

class Note {
    constructor(title, content) {
        this.id = null;
        this.title = title;
        this.content = content;

    }
}

let notebook = new NoteBook("Tanner Voss");

let newNoteTitle = prompt("Title:", "New Note");
let newNote = prompt("Note:");

if (newNote) {
    notebook.add(new Note(newNote));
}

notebook.read(1);
notebook.delete(1);
console.log(notebook);