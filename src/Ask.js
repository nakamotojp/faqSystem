import React, { Component } from 'react'
import firebase from "./firestore";


export default class Ask extends Component {
  state = { question: '' };
  render() {
    const { question } = this.state;
    return (
      <div className="pa4-l">
        <form
          className="bg-light-red mw7 center pa4 br2-ns ba b--black-10"
          onSubmit={(e) => {
            e.preventDefault(); 
            // firebase stuff
            const db = firebase.firestore();
            db.collection("questions").add({
              question: this.state.question
            })
            this.setState({ question: '' })
          }}
        >
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 black-80">Pune o întrebare</legend>
            <div className="cf">
              <label className="clip" htmlFor="question">Întrebare:</label>
              <input type="text" className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                placeholder="Întrebarea ta" onChange={({ target: { value }}) => this.setState({ question: value}) } value={question} name="question" id="question"
              />
              <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Întreabă" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
