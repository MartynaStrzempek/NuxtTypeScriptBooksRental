export const sortByDate = (rental, nextRental) => {
    const dateFrom = rental.dateFrom, 
        nextDateFrom = nextRental.dateFrom;
        
    if (dateFrom < nextDateFrom) return -1;
    else if (dateFrom > nextDateFrom) return 1;
    else return 0;
}