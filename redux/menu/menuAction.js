import { menuActionTypes } from './menuActionTypes'
import Axios from 'axios';
import {API_PATH } from '../../Global';

export const setMenuData = data => ({
    type: menuActionTypes.SET_MENU_DATA,
    payload: data

})
export const setMissionData = data => ({
    type: menuActionTypes.SET_MISSION_DATA,
    payload: data

})

        export const fetchMenuData = () => {
            return async dispatch => {
                const res = await fetch(`${process.env.API_PATH}/tasks`)
                const data = await res.json()   
                dispatch(setMenuData(data))
                /*Axios.get(API_PATH + 'fetch-org-data.php')
                    .then(({ data }) => {
                        dispatch(setMenuData(data))
                        
                    })*/
                    

            }
        }
        export const fetchMissionData = () => {
            return dispatch => {
                Axios.get(API_PATH + 'fetch-mission-data.php')
                    .then(({ data }) => {
                        dispatch(setMissionData(data))
                        
                    })
                    

            }
        }
