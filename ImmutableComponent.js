'use strict'

import React, {
    Component
} from 'react';

import Immutable from 'immutable';

export default class ImmutableComponent extends Component {
    persistentCurrentDatas(props, state) {
        this.immutableProps = Immutable.fromJS(props);
        this.immutableState = Immutable.fromJS(state);
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.persistentCurrentDatas(this.props, this.state);
        if (!Immutable.is(Immutable.fromJS(nextProps), this.immutableProps)) {
            return true;
        }
        if (!Immutable.is(Immutable.fromJS(nextState), this.immutableState)) {
            return true;
        }
        return false;
    }
}