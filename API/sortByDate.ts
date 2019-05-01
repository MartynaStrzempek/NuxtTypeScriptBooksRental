import { Borrowing } from "~/types";

export const sortByDate = (rental: Borrowing, nextRental: Borrowing) => {
    const dateFrom = rental.dateFrom, 
        nextDateFrom = nextRental.dateFrom;
        
    if (dateFrom < nextDateFrom) return -1;
    else if (dateFrom > nextDateFrom) return 1;
    else return 0;
};