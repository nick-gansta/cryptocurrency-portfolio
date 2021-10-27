import { api } from '../Dal/Api';
import { CryptocurrencyListType, DataChartType } from '../Dal/Types';
import { ActionsTypes, AppDispatchType, AppThunk } from '../Store/Store';
import { setAppError, setAppStatus } from './App-reducer';

const initialState = {
    dataAssets: [] as CryptocurrencyListType[],
    timestamp: null as number | null,
    chartData: [] as DataChartType[],
    topAssets: [] as CryptocurrencyListType[]
}

export const cryptocurrencyReducer = (state = initialState, action: ActionsTypes):
    CryptocurrencyInitType => {
    switch (action.type) {
        case 'CRYPT/SET-CURRENT-ASSETS':
            return {...state, dataAssets: action.data, timestamp: action.timestamp}
        case 'CRYPT/SET-DATA-CHART':
            return {...state, chartData: action.data}
        case  'CRYPT/SET-TOP-DATA-ASSETS':
            return {...state, topAssets: action.data.sort((a,b) => {
                    return +a.rank - +b.rank
                }).slice(0,3)}
        default: {
            return state
        }
    }
}
//action
export const setDataAssets = (data: CryptocurrencyListType[], timestamp: number) => {
    return {type: 'CRYPT/SET-CURRENT-ASSETS', data, timestamp} as const
}
export const setDataChart = (data: DataChartType[]) => {
    return {type: 'CRYPT/SET-DATA-CHART', data} as const
}
export const setTopDataAssets = (data:  CryptocurrencyListType[]) => {
    return {type: 'CRYPT/SET-TOP-DATA-ASSETS', data} as const
}
//thunk
export const getDataAssetsTC = ()=> (dispatch:AppDispatchType) => {
    dispatch(setAppStatus('loading'))
    api.getAssets()
        .then((res) => {
            const {data, timestamp} = res.data
            dispatch(setDataAssets(data, timestamp))
            dispatch(setTopDataAssets(data))
            dispatch(setAppStatus('succeeded'))
        }).catch((error) => {
        dispatch(setAppStatus('failed'))
        dispatch(setAppError('system crash, reload the page'))
    })
}
export const getChartDataTC = (id:string)=> (dispatch:AppDispatchType) => {
    dispatch(setAppStatus('loading'))
    api.getChartData(id)
        .then((res) => {
            const {data} = res.data
            dispatch(setDataChart(data))
            dispatch(setAppStatus('succeeded'))
        }).catch((error) => {
        dispatch(setAppStatus('failed'))
        dispatch(setAppError('system crash, reload the page'))
    })
}

//types
export type CryptocurrencyInitType = typeof initialState
