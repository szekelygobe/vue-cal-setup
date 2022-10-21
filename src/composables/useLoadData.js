import axios from "axios";
import {ref} from "vue"
import useBaseUrl from "@/composables/useBaseUrl.js";

export function useLoadData(){
    const { baseURL } = useBaseUrl();
    const bb = ref([]);

    function fff(endPoint) {
        axios.get(baseURL+endPoint)
            .then((r) => {
                bb.value = r.data;
                console.log(bb)
            })
            .catch(error => console.log(error.value));
    }


    function ggg(endpoint, data) {
        return 'ole';
    }

    return { bb, fff , ggg} ;
}