function NamedOne(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function (newValue) {
        if (newValue) {
            const array = newValue.split(' ');
            if (array.length === 2) {
                this.firstName = array[0];
                this.lastName = array[1];
            }
        }
        return `${this.firstName} ${this.lastName}`;
    }
}

var	namedOne = new NamedOne("Naomi","Wang");
namedOne.firstName = "John";
namedOne.lastName = "Doe";
namedOne.fullName(); // John Doe

namedOne.fullName('Bill Smith');
namedOne.firstName; // Bill
namedOne.lastName; // Smith
