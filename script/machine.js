let Interviewlist = [];
let RejectedList = [];

//All, interview and rejected button
const allbtn = document.getElementById("All-btn");
const Interviewbtn = document.getElementById("Interview-btn");
const Rejectedbtn = document.getElementById("Rejected-btn");

const mainContainer = document.querySelector("main");
//joblist and job notification
const jobslist= document.getElementById("jobs-list");
const jobnotify = document.getElementById("jobs-notify");



function showonly(id){
    console.log("added machine js");
    
    

    jobslist.classList.add("hidden");
    jobnotify.classList.add("hidden");

    // allbtn.classList.remove("bg-blue-600");
    // Interviewbtn.classList.remove("bg-blue-600");
    // Rejectedbtn.classList.remove("bg-blue-600");


    // allbtn.classList.add("bg-blue-600");
    // Interviewbtn.classList.add("bg-blue-600");
    // Rejectedbtn.classList.add("bg-blue-600");


    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
    

    // selected.classList.remove("bg-blue-600");
    // selected.classList.add("bg-blue-600");
}

mainContainer.addEventListener("click",function(event){

    if(event.target.classList.contains("Interview-btn"))
    {
        const parentnode = event.target.parentNode.parentNode;

    const company = parentnode.querySelector(".job-company").innerText;
    const jobtitle = parentnode.querySelector(".job-title").innerText;
    const jobsalary = parentnode.querySelector(".job-salary").innerText;
    const jobstatus = parentnode.querySelector(".job-status").innerText;
    const jobMotive = parentnode.querySelector(".Job-motive").innerText;

    jobstatus.innerHTML= "INTERVIEW";
    //jobstatus.classList.remove("bg-[#d8dce6]");
    //jobstatus.classList.add("bg-green-500", "text-white");
    //calculateInterview();

    const Interview = {
        company,
        jobtitle,
        jobsalary,
        jobstatus :'Interview',
        jobMotive
    }
   // console.log(Interviewlist);

    const InterviewlistExist = Interviewlist.find(item => item.company == Interview.company)
    if(!InterviewlistExist)
    {
        Interviewlist.push(Interview)
    }
    console.log(Interviewlist)

    renderInterviewlist();
    

    }
    
})
function renderInterviewlist()
{
    jobnotify.innerHTML='';

    for(let interviews of Interviewlist)
    {
        
        console.log(interviews);
        let div = document.createElement('div');
        div.className ='mt-5  rounded-sm bg-[#f1f2f4] p-5 space-y-3 relative';
        div.innerHTML = `
        <h1 class="job-company text-[20px] font-bold">${interviews.company}</h1>
            <p class=" job-title text-gray-600">${interviews.jobtitle}</p>
            <p class="job-salary text-gray-600">${interviews.jobsalary}</p>
            <button  class="Delete-btn"><span class="absolute right-[40px] top-[30px] btn btn-circle bg-[#d8dce6] "><i class="fa-solid fa-trash-can"></i></span></button>

            <div class="status-badge" >
                <div class="job-status badge p-5 bg-green-500">${interviews.jobstatus}</div>
            </div>
            <p class="Job-motive">${interviews.jobMotive}</p>
            <div>
                <button class="Interview-btn btn btn-outline border border-green-600 text-green-600 text-[16px]">INTERVIEW</button>
                <button class="Rejected-btn btn btn-outline border border-red-600 text-red-600">REJECTED</button>
            </div>

        `
         jobnotify.appendChild(div);
    }
   

        
}