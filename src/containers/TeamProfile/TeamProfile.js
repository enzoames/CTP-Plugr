import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeagueTable, TeamList } from 'components';

class TeamProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-profile container">
        <Helmet title="Team Name" />
        <span>Team Profile Here</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ }, dispatch)
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile);
