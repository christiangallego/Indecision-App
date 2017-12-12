
class OldSyntax {
  constructor() {
    this.name = "Mike"
  }
}

const me = new OldSyntax();
console.log(OldSyntax); // output: {name: "Mike"}

// ----

class NewSyntax{
  name = "Jen";
}
class NewSyntax = new NewSyntax();
console.log(NewSyntax); // output NewSyntax {}
