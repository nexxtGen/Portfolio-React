export const LEFT_PANEL_SHOW = 'LEFT_PANEL_SHOW';
export const RIGHT_PANEL_SHOW = 'RIGHT_PANEL_SHOW';
export const CHANGE_APP_THEME = 'CHANGE_APP_THEME';

export function leftPanelShow() {
    return {
        type: LEFT_PANEL_SHOW
    }
}

export function rightPanelShow() {
    return {
        type: RIGHT_PANEL_SHOW
    }
}

export function changeAppTheme(theme, wallpaper) {
    return {
        type: CHANGE_APP_THEME,
        theme,
        wallpaper,
    }
}