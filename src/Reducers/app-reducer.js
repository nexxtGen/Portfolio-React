import { 
    LEFT_PANEL_SHOW,
    RIGHT_PANEL_SHOW,
    CHANGE_APP_THEME,
 } from '../Actions/actions-app';

 const initialState = {
    leftPanelShowState: true,
    rightPanelShowState: true,
    appTheme: 'app_theme_1',
    appWallpaper: 'background_1_app',
};

const appReducer = function (state = initialState, action) {
    switch (action.type) {
        case LEFT_PANEL_SHOW:
            return Object.assign({}, state, {leftPanelShowState: !state.leftPanelShowState});
        case RIGHT_PANEL_SHOW:        
            return Object.assign({}, state, {rightPanelShowState: !state.rightPanelShowState});
        case CHANGE_APP_THEME:
            return Object.assign({}, state, {appTheme: action.theme, appWallpaper: action.wallpaper});
        default:
            return state;
    }    
};

export default appReducer;
