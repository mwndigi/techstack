class Certification{

    setCertDetails(title, id, _user, _result, resultLimit){
        this.title = title;
        this.id = id;
        this._user = _user;
        this._result = _result;
        this.resultLimit = 100;
    }
    getCertTitle(){
        return this.title;
    }
    getCertId(){
        return this.id;
    }
    getCertUser(){
        return this._user;
    }
    getCertResult(){
        return this._result;
    }
    getCertResultLimit(){
        return this.resultLimit;
    }

}

let cert1 = new Certification();

cert1.setCertDetails('JavaScript Master Level', 1001, 'Mikkel Wessel Nielsen', 92);

console.log('Code works: ');
console.log(cert1.getCertTitle());
console.log(cert1.getCertId());
console.log(cert1.getCertUser());
console.log(cert1.getCertResult());
console.log(cert1.getCertResultLimit());

document.getElementById("myCert1").innerHTML = cert1.getCertUser() + " scored " + cert1.getCertResult() + " out of " + cert1.getCertResultLimit() + " for the certification " + cert1.getCertTitle() + " (ID: " + cert1.getCertId() + ").";
