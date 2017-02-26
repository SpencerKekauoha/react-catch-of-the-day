import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // create constructor of Component
  // constructor() {
  //   //run super to create a react Component and then creates StorePicker.
  //   super();
  //   // Looks for goToStore method and sets itself to itself and binds it to this which inside the constructor, this is equal to the StorePicker Components.
  //   this.goToStore = this.gotToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log('you changed the url');
    // first grab the text from the box

    //this is not referencing the StorePicker component in ES6 classes.  To access it, create a constructor with super() or onSubmit={ (e) => this.goToStore(e) } or this.goToStore.bind(this)
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    //second we're going to transition from / to /store/:store
    this.context.router.transitionTo(`/store/${storeId}`);

  }
  render() {
    return (
      <form className="store-selector" onSubmit={ this.goToStore.bind(this) }>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => {this.storeInput = input} } />
        <button type="Submit">Vist Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
