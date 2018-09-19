export class Formation {
  nom: String = 'House of Code';
  description: String = 'Formation développeur informatique';

  getFormation() {
    return `${this.nom} : ${this.description}`;
  }
}
