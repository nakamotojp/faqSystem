import React, { Component } from 'react'
import firebase from "./firestore";

export default class Questions extends Component {
  state = { questions: [] }
  componentDidMount() {
    this.db = firebase.firestore();
    this.watch();
  }
  watch = () => {
    this.db.collection("questions")
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.setState((prevState) => { return { questions: [...prevState.questions, { question: change.doc.data().question, id: change.doc.id } ] } });
        }
      })
    });
  }

  delete = async (id) => {
    await this.db.collection("questions").doc(id).delete();
    this.setState((prevState) => { return { questions: prevState.questions.filter(q => { console.log(q.id); return q.id !== id })}});
  }

  renderQuestions = () => {
    const { questions } = this.state;
    return questions.map(({ question, id }, idx) => {
      return (
        <tr className="stripe-dark" key={id}>
          <td className="pa3">{idx+1}</td>
          <td className="pa3">{question}</td>
          <td className="pa3" style={{ cursor: 'pointer', color: 'red' }} onClick={() => {this.delete(id)}}>Delete</td>
        </tr>
      )
    })
  }

  render() {
    const { questions } = this.state;
    console.log(questions);
    return (
      <div className="pa4">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">ID</th>
                <th className="fw6 tl pa3 bg-white">Întrebare</th>
                <th className="fw6 tl pa3 bg-white">Șterge Întrebarea</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {this.renderQuestions()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
