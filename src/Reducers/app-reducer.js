import { 
    LEFT_PANEL_SHOW,
    RIGHT_PANEL_SHOW,
 } from '../Actions/actions-app';

 const initialState = {
    leftPanelShowState: true,
    rightPanelShowState: true,
};

const appReducer = function (state = initialState, action) {
    switch (action.type) {
        case LEFT_PANEL_SHOW:
            return Object.assign({}, state, {leftPanelShowState: !state.leftPanelShowState});
        case RIGHT_PANEL_SHOW:        
            return Object.assign({}, state, {rightPanelShowState: !state.rightPanelShowState});
        default:
            return state;
    }    
};

export default appReducer;
