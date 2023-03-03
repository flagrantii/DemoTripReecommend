function submitFunction(){
    //name value
    let name = document.getElementById("tripname").value;
    let style1 = document.getElementById
    console.log(name);
    document.getElementById("outputname").innerHTML = name;
    
    //datevalue
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const oneDay = 24 * 60 * 60 * 1000;

    let currentDate = new Date(startDate);
    const dates = [];

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setTime(currentDate.getTime() + oneDay);
    }

    const dateList = dates.map((date) => `<li>${date.toDateString()}</li>`).join("");
    document.getElementById("output").innerHTML = dateList;

    //style value
    /*const ratingInputs = document.querySelectorAll('input[name="rating"]');

    ratingInputs.forEach((input) =>{
      input.addEventListener("click",() => {
        const selectedValue = input.value;
        document.getElementById("outputRating").innerHTML = selectedValue;
      });
    });*/

    const selectedValueHistory = document.querySelector('input[name="ratingHistory"]:checked').value;
        document.getElementById("outputRatingHistory").innerHTML = `History ${selectedValueHistory}`;
    
    const selectedValueShopping = document.querySelector('input[name="ratingShopping"]:checked').value;
        document.getElementById("outputRatingShopping").innerHTML = `Shopping ${selectedValueShopping}`;
}