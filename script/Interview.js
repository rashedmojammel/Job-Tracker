const buttonElement = document.querySelectorAll(".Interview-btn");

buttonElement.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log("Button added");

    const badgeElement = document.querySelectorAll(".status-badge");
    badgeElement.innerText = "Applied";

    //Total Jobs count 
     const JobsELement = document.getElementById("Jobs-count");
    const Jobcount = Number(JobsELement.innerText); 
    console.log(Jobcount);

    //Interview count
    const InterviewELement = document.getElementById("Interview-count");
    const count = Number(InterviewELement.innerText); 
     const countnew = count + 1;

     if(countnew >8){
        alert("Not available jobs");
        return;
    }
    InterviewELement.innerText = countnew;
    console.log(countnew);

    });
});

const buttonElement2 = document.querySelectorAll(".Rejected-btn");

buttonElement2.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log("Button added 2");

    //Total Jobs count 
     const JobsELement = document.getElementById("Jobs-count");
    const Jobcount = Number(JobsELement.innerText); 
    console.log(Jobcount);
        
    //Rejected Count 
    const RejectedELement = document.getElementById("Rejected-count");
    const Rejectedcount = Number(RejectedELement.innerText); 
    

    const Rejectedcountnew = Rejectedcount + 1;
    
   
    if( Rejectedcountnew >8){
        alert("Not available jobs");
        return;
    }
    RejectedELement.innerText = Rejectedcountnew;
    });

    
});