export class Formation {
  nom: String = 'House of Code';
  description: String = 'Formation développeur informatique';
  price: String;
  dateStart: String;
  dateEnd: String;

  constructor(nom: String, price: String, dateStart: String, dateEnd: String) {
    this.nom = nom;
    this.price = price;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
  }

  getFormation() {
    return `${this.nom} : ${this.description}`;
  }
}
