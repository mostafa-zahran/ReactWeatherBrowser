/**
 * Created by mostafazahran on 9/13/17.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class DispatchWire {
    constructor(container, action) {
        this.action = action;
        let addedDispatch = this.action ? this.mapDispatchToProp : null;
        return connect(null, addedDispatch)(container);
    }

    mapDispatchToProp = (dispatch) => bindActionCreators(this.createDispatcher(), dispatch);

    createDispatcher () {
        let binds ={};
        binds[this.action.name] = this.action;
        return binds;
    }

}