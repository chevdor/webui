import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'

import {loadPeersPage} from '../actions'
import PeersViewer from '../components/peers-viewer'
import World from '../components/world'

class Peers extends Component {
  static propTypes = {
    loadPeersPage: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    details: PropTypes.object.isRequired,
    locations: PropTypes.object.isRequired
  };

  componentWillMount () {
    this.props.loadPeersPage()
  }

  render () {
    return (
      <Row>
        <Col sm={12}>
          <World locations={this.props.locations}/>
          <PeersViewer
            ids={this.props.ids}
            details={this.props.details}
            locations={this.props.locations}/>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps (state) {
  return state.peers
}

export default connect(mapStateToProps, {
  loadPeersPage
})(Peers)
