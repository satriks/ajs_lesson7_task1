export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const simbol = /^[a-zA-Z-_0-9]+$/g;

    if (/^[0-9\-_]+/.test(this.name) || /[0-9\-_]+$/.test(this.name)) {
      return false;
    }
    if (/\d{3,}/.test(this.name)) {
      return false;
    }

    return simbol.test(this.name);
  }
}

// Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
// Имя не должно содержать подряд более трёх цифр,
// а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
