class Technology {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    writeTechnology() {
        document.getElementById("myTechnology").innerHTML = this.name
            + " is a technology for " + this.type + " development.";
    }
}

let javascript = new Technology('HTML', 'frontend');

javascript.writeTechnology();