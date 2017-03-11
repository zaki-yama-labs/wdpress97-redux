import React from 'react';
import { browserHistory } from 'react-router';
import NoteAction from '../../../actions/NoteAction';
import Button from '../../../components/Button/Button';
import NoteBody from '../../../components/NoteBody/NoteBody';

export default class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    // 編集中のNoteのデータは永続化する必要ないし外でも使わないのでstateで持つ
    this.state = { note: Object.assign({}, props.note) };
  }

  componentWillReceiveProps(props) {
    this.setState({ note: Object.assign({}, props.note) });
  }

  handleSave() {
    const { id, title, body } = this.state.note;
    NoteAction.update(id, { title, body });
  }

  handleDelete() {
    if (window.confirm('Are you sure?')) {
      NoteAction.delete(this.state.note.id);
    }
  }

  handleShow() {
    browserHistory.push(`/notes/${this.state.note.id}`);
  }

  onChangeTitle(e) {
    this.setState({ note: Object.assign({}, this.state.note, { title: e.target.value }) });
  }

  onChangeBody(e) {
    this.setState({ note: Object.assign({}, this.state.note, { body: e.target.value }) });
  }

  render() {
    const note = this.state.note;
    if (!note.id) return null;

    // 変更があったらSaveボタンのところに編集中マークを出す。
    const isChanged = this.props.note.title !== note.title || this.props.note.body !== note.body;

    return <div className="page-NoteEdit">
      <div className="page-NoteEdit-header">
        <input aria-label="タイトル" ref="title" type="text" value={note.title} onChange={this.onChangeTitle.bind(this)} data-page-title />
        <div className="page-NoteEdit-buttons">
          <Button onClick={this.handleSave.bind(this)}>{isChanged ? '* ' : ''}Save</Button>
          <Button onClick={this.handleDelete.bind(this)}>Delete</Button>
          <Button onClick={this.handleShow.bind(this)}>Show</Button>
        </div>
      </div>
      <div className="page-NoteEdit-body">
        <label htmlFor="note-body" className="u-for-at">本文</label>
        <textarea id="note-body" value={note.body} onChange={this.onChangeBody.bind(this)} />
      </div>
      <div className="page-NoteEdit-preview">
        <NoteBody body={note.body} />
      </div>
    </div>;
  }
}
