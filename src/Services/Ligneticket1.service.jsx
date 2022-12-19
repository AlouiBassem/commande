import Api from "../Api";

const LIGNETICKET1_API="/ligneticket1"

const fetchligne1=async()=> {
return await Api.get(LIGNETICKET1_API);
}
const fetchligne1Bynum=async(numbl)=> {
    return await Api.get(LIGNETICKET1_API + '/' + numbl);
    }

export const ligneticket1 = {
    fetchligne1,
    fetchligne1Bynum,
 
    }


    

