import { createSelector } from 'reselect'
const selectmenu= state => state.menu

export const selectMenuData= createSelector(
    [selectmenu],
    data => data.MenuData
);