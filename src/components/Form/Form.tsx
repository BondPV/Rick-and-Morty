import React from 'react';

class Form extends React.Component {
  private nameRef = React.createRef<HTMLInputElement>();
  private locationRef = React.createRef<HTMLSelectElement>();
  private genderRef = React.createRef<HTMLInputElement>();
  private createdRef = React.createRef<HTMLInputElement>();
  private imageRef = React.createRef<HTMLInputElement>();
  private statusRef = React.createRef<HTMLInputElement>();

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.nameRef.current && this.nameRef.current.value.length < 3) {
      console.log('invalid name');
      return;
    }

    console.log('submit');
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Person</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Person`s name"
              id="name"
              required
              ref={this.nameRef}
            />
          </div>

          <div>
            Location
            <select name="location" ref={this.locationRef}>
              <option defaultValue="Earth (C-137)">Earth C-137</option>
              <option value="Citadel of Ricks">Citadel of Ricks</option>
              <option value="Earth (Replacement Dimension)">Earth Replacement Dimension</option>
              <option value="Abadango">Abadango</option>
            </select>
          </div>

          <div>
            Gender
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              defaultChecked
              ref={this.genderRef}
            />
            <label htmlFor="male">male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">female</label>
            <input type="radio" name="gender" id="unknown" value="unknown" />
            <label htmlFor="unknown">unknown</label>
          </div>

          <div>
            <label htmlFor="created">Created</label>
            <input type="date" id="created" name="created" ref={this.createdRef} />
          </div>

          <div>
            Image
            <input name="image" type="file" ref={this.imageRef}></input>
          </div>
          <div>
            <label htmlFor="status">The person is alive?</label>
            <input type="checkbox" id="status" name="alive" ref={this.statusRef} />
          </div>
        </fieldset>
        <button>Create</button>
      </form>
    );
  }
}

export { Form };
