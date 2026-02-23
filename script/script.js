// Arrays
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// Dashboard counters (match your HTML IDs)
let total = document.getElementById('Jobs-count');
let interviewCount = document.getElementById('Interview-count');
let rejectedCount = document.getElementById('Rejected-count');

// Sections (match your HTML)
const allCardSection = document.getElementById('jobs-list');
const filterSection = document.getElementById('jobs-notify');
const mainContainer = document.querySelector('main');

// Right side job text
const jobCountText = document.querySelector('.text-gray-600');


// ==========================
// COUNT FUNCTION (same logic)
// ==========================
function calculateCount() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

    if (currentStatus === 'interview') {
        jobCountText.innerText = interviewList.length + " jobs"
    } else if (currentStatus === 'rejected') {
        jobCountText.innerText = rejectedList.length + " jobs"
    } else {
        jobCountText.innerText = allCardSection.children.length + " jobs"
    }
}

calculateCount();


// ==========================
// FILTER FUNCTION (same logic)
// ==========================
function showonly(type) {

    if (type === 'jobs-list') {
        currentStatus = 'all'
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

    if (type === 'jobs-interview') {
        currentStatus = 'interview'
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }

    if (type === 'jobs-rejected') {
        currentStatus = 'rejected'
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }

    calculateCount();
}


// ==========================
// EVENT DELEGATION (same logic)
// ==========================
mainContainer.addEventListener('click', function (event) {

    const parentNode = event.target.closest('.job-card');
    if (!parentNode) return;

    const company = parentNode.querySelector('.job-company').innerText;
    const title = parentNode.querySelector('.job-title').innerText;
    const salary = parentNode.querySelector('.job-salary').innerText;
    const motive = parentNode.querySelector('.Job-motive').innerText;

    const jobInfo = {
        company,
        title,
        salary,
        motive
    };

    // ================= INTERVIEW =================
    if (event.target.classList.contains('Interview-btn')) {

        parentNode.querySelector('.job-status').innerText = 'INTERVIEW';

        const exist = interviewList.find(item => item.company == company);
        if (!exist) {
            interviewList.push(jobInfo);
        }

        rejectedList = rejectedList.filter(item => item.company != company);

        if (currentStatus === 'rejected') {
            renderRejected();
        }

        calculateCount();
    }

    // ================= REJECTED =================
    else if (event.target.classList.contains('Rejected-btn')) {

        parentNode.querySelector('.job-status').innerText = 'REJECTED';

        const exist = rejectedList.find(item => item.company == company);
        if (!exist) {
            rejectedList.push(jobInfo);
        }

        interviewList = interviewList.filter(item => item.company != company);

        if (currentStatus === 'interview') {
            renderInterview();
        }

        calculateCount();
    }
});


// ==========================
// RENDER INTERVIEW (same structure)
// ==========================
function renderInterview() {

    filterSection.innerHTML = '';

    if (interviewList.length === 0) {
        filterSection.innerHTML = `
            <h1 class="text-[25px] font-bold">No Interview Jobs</h1>
        `;
        return;
    }

    for (let job of interviewList) {

        let div = document.createElement('div');
        div.className = 'mt-5 rounded-sm bg-[#f1f2f4] p-5 space-y-3';

        div.innerHTML = `
            <h1 class="text-[20px] font-bold">${job.company}</h1>
            <p class="text-gray-600">${job.title}</p>
            <p class="text-gray-600">${job.salary}</p>
            <div class="badge p-5 bg-green-200">INTERVIEW</div>
            <p>${job.motive}</p>
        `;

        filterSection.appendChild(div);
    }
}


// ==========================
// RENDER REJECTED
// ==========================
function renderRejected() {

    filterSection.innerHTML = '';

    if (rejectedList.length === 0) {
        filterSection.innerHTML = `
            <h1 class="text-[25px] font-bold">No Rejected Jobs</h1>
        `;
        return;
    }

    for (let job of rejectedList) {

        let div = document.createElement('div');
        div.className = 'mt-5 rounded-sm bg-[#f1f2f4] p-5 space-y-3';

        div.innerHTML = `
            <h1 class="text-[20px] font-bold">${job.company}</h1>
            <p class="text-gray-600">${job.title}</p>
            <p class="text-gray-600">${job.salary}</p>
            <div class="badge p-5 bg-red-200">REJECTED</div>
            <p>${job.motive}</p>
        `;

        filterSection.appendChild(div);
    }
}