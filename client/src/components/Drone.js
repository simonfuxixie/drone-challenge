import React from 'react';
import {BasicForm} from './BasicForm';
import {connect} from 'react-redux';
import Actions from "../redux/actions/Actions";

const droneActions = new Actions('/api/v1/drone');


export function Drone (props) {

  return (
    <React.Fragment>
      <BasicForm
        title={'Drone Challenge'}
        label={'Drone Instructions'}
        {...props}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    tab_selector: state.drone.tab_selector,
    instructions: state.drone.instructions,
    drone_counts: state.drone.drone_counts,
    message: state.drone.message,
    execution: state.drone.execution,
    singleShots: state.drone.singleShots,
    loading: state.drone.loading
  };
};

const mapDispachToProps = dispatch => {
  return {
    handleTabChange: (val) => dispatch(droneActions.handleTabChange(val)),
    updateInput: (input) => dispatch(droneActions.updateInput(input)),    
    updateDroneCounts: (e) => dispatch(droneActions.updateDroneCounts(e)),
    updateExecution: (ts) => dispatch(droneActions.updateExecution(ts)),
    fetchResult: (e, ins, counts) => dispatch(droneActions.fetchResult(e, ins, counts))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Drone);
