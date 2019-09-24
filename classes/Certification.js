class Certification {
    setCertDetails(title, id, _user, _result) {
    this.title = title;
    this.id = id;
    this._user = _user;
    this._result = _result;
    this.resultLimit = 100;
    }
    getCertTitle() {
        return this.title;
    }
    getCertId() {
        return this.id;
    }
    getCertUser() {
         return this._user;
    }
    getCertResult() {
         return this._result;
        }
     getCertResultLimit() {
        return this.resultLimit;
    }
    getMyCert() {
      document.getElementById("myCert").innerHTML = this._user + ' scored ' + this._result + ' out of ' + this.resultLimit + ' for the certification ' + this.title + ' (ID: ' + this.id + ').';
    }
}

let cert1 = new Certification();
let cert2 = new Certification();

cert1.setCertDetails('JavaScript Beginner Level', 1001, 'Mikkel Wessel Nielsen', 92);
cert2.setCertDetails('JavaScript Master Level', 1002, 'Mikkel Wessel Nielsen', 78);

console.log('Code works: ');
console.log(cert2.getCertTitle());
console.log(cert2.getCertId());
console.log(cert1.getCertUser());
console.log(cert2.getCertResult());
console.log(cert1.getCertResultLimit());

cert2.getMyCert();

