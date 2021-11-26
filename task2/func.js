function NamedOne(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            if (value) {
                const array = value.split(' ');
                if (array.length === 2) {
                    this.firstName = array[0];
                    this.lastName = array[1];
                }
            }
        }
    });
}

const namedOne = new NamedOne("Naomi","Wang");
namedOne.firstName = "John";
namedOne.lastName = "Doe";
namedOne.fullName; // John Doe

namedOne.fullName = "Bill Smith";
namedOne.firstName; // Bill
namedOne.lastName; // Smith
