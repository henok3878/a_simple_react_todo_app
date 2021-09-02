import {getCurrentId, saveCurrentId} from "../services/local_storage";


let currentId = getCurrentId();
export default function uniqueId(prefix="id"){
        const formattedId = prefix + ": " +currentId++;
        saveCurrentId(currentId);
        return formattedId;

}