class Framework extends Technology {
    constructor(name, type, library){
        super(name, type);
        this.library = library;
    }

    writeFramework(){
        document.getElementById("myFramework").innerHTML = this.library
            + " is extending " + this.name + " in a package for "
            + this.type + " development.";
    }
}

let angular = new Framework('JavaScript', 'frontend', 'Angular');

angular.writeFramework();