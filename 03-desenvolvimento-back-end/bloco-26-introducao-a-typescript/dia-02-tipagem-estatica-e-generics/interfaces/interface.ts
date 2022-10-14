interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "Flávio",
  lastName: "Félix",
  subject: "Back-end",
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  },
};

let teacher1: Teacher = {
  lastName: "Félix",
};
// Type '{ lastName: string; }' is missing the following properties from type 'Teacher': subject, sayHello, firstName, fullNamets(2739)