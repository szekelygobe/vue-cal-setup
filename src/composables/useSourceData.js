import axios from "axios";
import {ref} from "vue"
import useBaseUrl from "@/composables/useBaseUrl.js";

export function useSourceData(){
    const { baseURL } = useBaseUrl();

    async function getData (endPoint){
        let response = {}

        try {
            response = await axios.get(baseURL+endPoint);
        }
        catch (error){
            console.log('error', error);
        }

        return response.data
    }

    async function updateData (endPoint, data){
        let response = {}

        try {
            response = await axios.put(baseURL+endPoint+'/'+data.id, data);
        }
        catch (error){
            console.log('error', error);
        }

        return response.data
    }

    async function deleteData (endPoint, id){
        let response = {}

        try {
            response = await axios.delete(baseURL+endPoint+'/'+id);
        }
        catch (error){
            console.log('error', error);
        }

        return response.data
    }

    async function addData (endPoint, data){
        let response = {}

        try {
            response = await axios.post(baseURL+endPoint, data);
        }
        catch (error){
            console.log('error', error);
        }

        return response.data
    }

    return { getData , updateData , deleteData , addData }
}