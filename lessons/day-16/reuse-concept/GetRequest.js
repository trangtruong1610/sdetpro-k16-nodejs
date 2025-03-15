const Request = require('./Request');

// Child class / Sub class / Derived class
class GetRequest extends Request {

    // class variable
    static id = 1;

    constructor(url, method='GET') {
        super();
        this._url = url;
        super.setMethod(method);
    }

    // Overriding the parent class method
    setMethod() {
        super.setMethod('GET');
    }

    myNewMethod(){
        console.log(GetRequest.id);
        console.log("This is my new method");
    }

    static doSomething() {
        console.log(GetRequest.id);
        console.log("This is static method");
    }
}

let getRequest = new GetRequest();
getRequest.setMethod();
getRequest.sendRequest()
getRequest.verifyResponse()
getRequest.myNewMethod()
GetRequest.doSomething()