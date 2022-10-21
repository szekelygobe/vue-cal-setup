import axios from "axios";
export function loadData(){

    const urlBase = 'http://localhost:3001/';

    function loadData(endPoint){
        axios.get(urlBase+endPoint)
              .then((r) => {return r.data})
              .catch(error => (console.log(error)));
    }

    function updateData(endPoint, data){
        let updatedData = null;

        axios.patch(urlBase + data.id, data)
            .then(response  => updatedData = response.data)
            .catch(error => console.log(error))
        return updatedData;
    }

    return { loadData , updateData}
}