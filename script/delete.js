let JobsCount = document.getElementById("Jobs-count");
let InterviewCount = document.getElementById("Interview-count");
let RejectedCount = document.getElementById("Rejected-count");

let InterviewList = [];
let RejectedList = [];

const filterSection = document.getElementById("filtered-section");
const jobNotify = document.getElementById("jobs-notify");

const allFilterBtn = document.getElementById('All-btn');
const InterviewFilterBtn = document.getElementById('Interview-btn');
const RejectedFilterBtn = document.getElementById('Rejected-btn');

const Alljob = document.getElementById("jobs-list");
const rightJobCount = document.querySelector(".text-gray-600");
const jobslist = document.getElementById("jobs-countlist");




// ================= TOTAL COUNT =================
function TotalCount() {
    JobsCount.innerText = Alljob.children.length;
    InterviewCount.innerText = InterviewList.length;
    RejectedCount.innerText = RejectedList.length;
    //jobslist.innerText = Alljob.children.length + " jobs";

    if (!Alljob.classList.contains("hidden")) {
        jobslist.innerText = Alljob.children.length + " jobs";
    } 
    else if (InterviewFilterBtn.classList.contains("bg-blue-500")) {
        jobslist.innerText = InterviewList.length + " of " + Alljob.children.length + " jobs";
    } 
    else if (RejectedFilterBtn.classList.contains("bg-blue-500")) {
        jobslist.innerText = RejectedList.length + " of " + Alljob.children.length + " jobs";
    }
}
TotalCount();


// ================= Button toggle=================
function toggleStyle(id) {

    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    InterviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    RejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    InterviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    RejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id === 'All-btn') {
        Alljob.classList.remove('hidden');
        filterSection.classList.add('hidden');
        jobNotify.classList.add('hidden');
       // rightJobCount.innerText = Alljob.children.length + " jobs";
    }

    else if (id === 'Interview-btn') {
        Alljob.classList.add('hidden');
        renderInterviewlist();
        jobslist.innerText = InterviewList.length + " of " + Alljob.children.length + " jobs";
    }

    else if (id === 'Rejected-btn') {
        Alljob.classList.add('hidden');
        renderRejected();
        jobslist.innerText = RejectedList.length + " of " + Alljob.children.length + " jobs";
    }
}


// ================= Main Conainer =================
const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function(event){

    // ===== INTERVIEW BUTTON =====
    if(event.target.classList.contains("Interview-btn")) {

        const parentnode = event.target.closest(".job-item");

        const company = parentnode.querySelector(".job-company").innerText;
        const jobtitle = parentnode.querySelector(".job-title").innerText;
        const jobsalary = parentnode.querySelector(".job-salary").innerText;
        const jobstatusElement = parentnode.querySelector(".job-status");
        const jobMotive = parentnode.querySelector(".Job-motive").innerText;

        parentnode.style.borderLeft = "8px solid #22c55e";

        // Change status 
        jobstatusElement.innerText = "INTERVIEW";
        jobstatusElement.classList.remove("bg-[#d8dce6]", "bg-red-500");
        jobstatusElement.classList.add("bg-green-500", "text-white");

        // Remove from Rejected list if exists
        RejectedList = RejectedList.filter(item => item.company !== company);

        // Add to Interview list if not exists
        const InterviewExist = InterviewList.find(item => item.company === company);
        if(!InterviewExist) {
            InterviewList.push({
                company,
                jobtitle,
                jobsalary,
                jobstatus: "INTERVIEW",
                jobMotive
            });
        }

      TotalCount();
      if (!Alljob.classList.contains("hidden")) {
        } 
        else {
            if (InterviewFilterBtn.classList.contains("bg-blue-500")) {
                renderInterviewlist();
            } 
            else if (RejectedFilterBtn.classList.contains("bg-blue-500")) {
                renderRejected();
            }
        }
   
    }


    // ===== REJECTED BUTTON =====
    if(event.target.classList.contains("Rejected-btn")) {

        const parentnode = event.target.parentNode.parentNode;

        const company = parentnode.querySelector(".job-company").innerText;
        const jobtitle = parentnode.querySelector(".job-title").innerText;
        const jobsalary = parentnode.querySelector(".job-salary").innerText;
        const jobstatusElement = parentnode.querySelector(".job-status");
        const jobMotive = parentnode.querySelector(".Job-motive").innerText;

        parentnode.style.borderLeft = "8px solid #ef4444";

        // Change badge in ALL tab
        jobstatusElement.innerText = "REJECTED";
        jobstatusElement.classList.remove("bg-[#d8dce6]", "bg-green-500");
        jobstatusElement.classList.add("bg-red-500", "text-white");

        // Remove from Interview list if exists
        InterviewList = InterviewList.filter(item => item.company !== company);

        // Add to Rejected list if not exists
        const RejectedExist = RejectedList.find(item => item.company === company);
        if(!RejectedExist) {
            RejectedList.push({
                company,
                jobtitle,
                jobsalary,
                jobstatus: "REJECTED",
                jobMotive
            });
        }

        TotalCount();
        if (!Alljob.classList.contains("hidden")) {
        } 
        else {
            if (InterviewFilterBtn.classList.contains("bg-blue-500")) {
                renderInterviewlist();
            } 
            else if (RejectedFilterBtn.classList.contains("bg-blue-500")) {
                renderRejected();
            }
        }
        
    }
    // ===== DELETE BUTTON =====
if (event.target.closest(".Delete-btn")) {

    // get whole job card
    const card = event.target.closest(".job-item");

    if (!card) 
    {
        return;
    }

    const company = card.querySelector(".job-company").innerText;
    // remove from interview & rejected lists also
    InterviewList = InterviewList.filter(item => item.company !== company);
    RejectedList = RejectedList.filter(item => item.company !== company);
    // remove from DOM
    card.remove();
    // update counts
    TotalCount();
    if (!Alljob.classList.contains("hidden")) {
        } 
        else {
            if (InterviewFilterBtn.classList.contains("bg-blue-500")) {
                renderInterviewlist();
            } 
            else if (RejectedFilterBtn.classList.contains("bg-blue-500")) {
                renderRejected();
            }
        }
}

});

// ================= RENDER INTERVIEW =================
function renderInterviewlist() {

    filterSection.innerHTML = '';

    if(InterviewList.length === 0){
        jobNotify.classList.remove('hidden');
        filterSection.classList.add('hidden');
        return;
    }

    jobNotify.classList.add('hidden');
    filterSection.classList.remove('hidden');

    InterviewList.forEach(interviews => {

        let div = document.createElement('div');
        div.className ='job-item mt-5 rounded-sm bg-[#f1f2f4] p-5 space-y-3 relative';
        div.style.borderLeft = "8px solid #22c55e";

        div.innerHTML = `
            <h1 class="job-company text-[20px] font-bold">${interviews.company}</h1>
            <p class="job-title text-gray-600">${interviews.jobtitle}</p>
            <p class="job-salary text-gray-600">${interviews.jobsalary}</p>

            <div class="status-badge">
                <div class="job-status badge p-5 bg-green-500 text-white">
                    INTERVIEW
                </div>
            </div>

            <p class="Job-motive">${interviews.jobMotive}</p>

            <div>
                <button class="Interview-btn btn btn-outline border border-green-600 text-green-600 text-[16px]">
                    INTERVIEW
                </button>
                <button class="Rejected-btn btn btn-outline border border-red-600 text-red-600">
                    REJECTED
                </button>
            </div>
        `;

        filterSection.appendChild(div);
    });
}


// ================= RENDER REJECTED =================
function renderRejected() {

    filterSection.innerHTML = '';

    if(RejectedList.length === 0){
        jobNotify.classList.remove('hidden');
        filterSection.classList.add('hidden');
        return;
    }

    jobNotify.classList.add('hidden');
    filterSection.classList.remove('hidden');

    RejectedList.forEach(rejected => {

        let div = document.createElement('div');
        div.className ='job-item mt-5 rounded-sm bg-[#f1f2f4] p-5 space-y-5 relative border border-none border-l-8 border-l-green-500';
        div.style.borderLeft = "8px solid red";
        


        div.innerHTML = `
            <h1 class="job-company text-[20px] font-bold">${rejected.company}</h1>
            <p class="job-title text-gray-600">${rejected.jobtitle}</p>
            <p class="job-salary text-gray-600">${rejected.jobsalary}</p>

            <div class="status-badge">
                <div class="job-status badge p-5 bg-red-500 text-white">
                    REJECTED
                </div>
            </div>

            <p class="Job-motive">${rejected.jobMotive}</p>

            <div>
                <button class="Interview-btn btn btn-outline border border-green-600 text-green-600 text-[16px]">
                    INTERVIEW
                </button>
                <button class="Rejected-btn btn btn-outline border border-red-600 text-red-600">
                    REJECTED
                </button>
            </div>
        `;

        filterSection.appendChild(div);
    });
}
