import Api from "../Api";

const TICKET_API="/ticket"

const fetchTicket=async()=> {
return await Api.get(TICKET_API);
}


export const TicketService = {
    fetchTicket,
 
    }