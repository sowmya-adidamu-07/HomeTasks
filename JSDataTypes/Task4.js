function rentalCarCost(days) {
    var total =  40 * days;
    if(days >= 7)
        total -= 50;
    else if(days >= 3)
        total -= 20;
   
    return total;
    
  }