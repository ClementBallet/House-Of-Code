export class User {
  private _email: String;
  private _password: String;

  constructor(_email?: String, _password?: String) {
    this._email = _email;
    this._password = _password;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    console.log("SET EMAIL", value);
    this._email = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    console.log("SET PASSWORD", value);
    this._password = value;
  }
}
