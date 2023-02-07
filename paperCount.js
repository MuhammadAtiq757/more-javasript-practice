function paperCount(book1, book2, book3){
       const book1paper = 100;
       const book2paper = 200;
       const book3paper = 300;
       
       
       const totalBook1Paper = book1 * 100;
       const totalBook2Paper = book2 * 200;
       const totalBook3paper = book3 * 300;

       const totalPaper = totalBook1Paper + totalBook2Paper + totalBook3paper;

       return totalPaper;

}

const totalPapers = paperCount(0, 5, 0);
console.log(totalPapers);