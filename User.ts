export class User {
  #id: string;
  #firstName: string;
  #lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get id(): string {
    return this.#id;
  }

  get firstName(): string {
    return this.#firstName;
  }

  get lastName(): string {
    return this.#lastName;
  }
}
