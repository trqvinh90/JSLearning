class CustomError extends Error {
    constructor(errorCode, errorMessage) {
        super(errorMessage);
        this.errorCode = errorCode;
    }
}

function badFunc() {
    throw new CustomError(500, "Internal error");
}

try { 
    badFunc();
} catch(exception) {
    console.log(exception);
}
