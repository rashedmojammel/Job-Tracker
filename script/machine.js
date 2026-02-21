function showonly(id){
    console.log("added machine js");
    
    const jobslist= document.getElementById("jobs-list");
    const jobnotify = document.getElementById("jobs-notify");

    jobslist.classList.add("hidden");
    jobnotify.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}