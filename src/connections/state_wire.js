/**
 * Created by mostafazahran on 9/13/17.
 */
import { connect } from 'react-redux';

export default class StateWire {
    constructor(container, state) {
        this.state = state;
        let addedState = this.state ? this.mapStateToProps : null;
        return connect(addedState, null)(container);
    }

    mapStateToProps = (state) => this.createState(state);

    createState (state) {
        let binds = {};
        binds.WeatherReducer = state.WeatherReducer;
        return binds;
    }
}