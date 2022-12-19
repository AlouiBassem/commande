import Api from "../Api";

const TICKET1_API="/ticket1"

const fetchTicket1=async()=> {
return await Api.get(TICKET1_API);
}


export const TicketService = {
    fetchTicket1,
 
    }