import React from 'react';
import { connect } from 'react-redux';
import NoteHeader from '../components/NoteHeader/NoteHeader';
import NoteBody from '../components/NoteBody/NoteBody';
import {
  fetchNote,
} from '../actions/note';
import {
  createStar,
  deleteStar,
} from '../actions/star';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeStar = this.handleChangeStar.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchNote(Number(this.props.params.id)));
  }

  handleChangeStar(starred) {
    const note = Object.assign({}, this.props.note, { starred });
    this.setState({ note });

    if (starred) {
      this.props.dispatch(createStar(note.id));
    } else {
      this.props.dispatch(deleteStar(note.id));
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
