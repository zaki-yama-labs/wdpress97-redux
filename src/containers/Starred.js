import React from 'react';
import { connect } from 'react-redux';
import StarredNoteList from '../components/StarredNoteList/StarredNoteList';
import {
  fetchStarred,
} from '../actions/note';

class Starred extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStarred());
  }

  render() {
    return (<div className="page-Stars">
      <h1>Starred Notes</h1>
      <StarredNoteList notes={this.props.notes} />
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(Starred);
