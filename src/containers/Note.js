import React from 'react';
import { connect } from 'react-redux';
import NoteHeader from '../components/NoteHeader/NoteHeader';
import NoteBody from '../components/NoteBody/NoteBody';
import StarAction from '../actions/StarAction';
import {
  fetchNote,
} from '../actions/note';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeStar = this.handleChangeStar.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchNote(Number(this.props.params.id)));
  }

  handleChangeStar(starred) {
    const note = Object.assign({}, this.state.note, { starred });
    this.setState({ note });

    if (starred) {
      StarAction.create(note.id);
    } else {
      StarAction.delete(note.id);
    }
  }

  render() {
    const note = this.props.note;
    if (!note || !note.id) { return null; }

    return (<div className="page-Note">
      <NoteHeader note={note} onChangeStar={this.handleChangeStar} />
      <NoteBody body={note.body} />
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps)(Note);
