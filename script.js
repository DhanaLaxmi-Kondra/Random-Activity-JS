let getActivityBtn = document.getElementById("getActivityBtn");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");
let activityName = document.getElementById("activityName");
let activityType = document.getElementById("activityType");
let activityImg = document.getElementById("activityImg");

function displayresults(search_results) {
    let {
        activity,
        type,
        image
    } = search_results;
    activityName.textContent = activity;
    activityType.textContent = type;
    activityImg.textContent = image;
}

function random() {

    spinner.classList.remove("d-none");
    result.classList.add("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-activity", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {

            spinner.classList.add("d-none");
            result.classList.remove("d-none");
            displayresults(jsondata);
            console.log(jsondata);
        });
}
getActivityBtn.addEventListener("click", random);