import useSWR from 'swr'
import * as api from '../service/instance'

export const useFetch = () => {
    return {
        GetProducts: () => {
            useSWR("Products", async () => {
                const response = await api.GetProduct()
                console.log(response);
                return response
            })
        }
    }
}