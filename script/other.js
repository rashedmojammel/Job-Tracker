let thrivingList = [];
let strugglingList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const thrivingFilterBtn = document.getElementById('thriving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {
    total.innerText = allCardSection.children.length //3
    thrivingCount.innerText = thrivingList.length
    strugglingCount.innerText = strugglingList.length
}

calculateCount()

// step 1;
function toggleStyle(id) {
    // adding gray bg for all
    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    thrivingFilterBtn.classList.add('bg-gray-300', 'text-black')
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black')

    // if any button has black then remove
    allFilterBtn.classList.remove('bg-black', 'text-white')
    thrivingFilterBtn.classList.remove('bg-black', 'text-white')
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')

    // console.log(id);
    const selected = document.getElementById(id)//this is the button that clicked for filter

    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')
    // step 1 finish

    // show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, Thriving, Struggling)
    if (id == 'thriving-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderThriving()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'struggling-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderStruggling()
    }
}


// step 2 delegation
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('thriving-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText
        const light = parenNode.querySelector('.light').innerText
        const water = parenNode.querySelector('.water').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Thrive'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Thrive',
            notes
        }

        const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExist) {
            thrivingList.push(cardInfo)
        }

        // step 2 finish
        // removing the plant from struggling list
        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName)

        // after remove rerender the html
        if (currentStatus == 'struggling-filter-btn') {
            renderStruggling()
        }

         calculateCount()


    } else if (event.target.classList.contains('struggling-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText
        const light = parenNode.querySelector('.light').innerText
        const water = parenNode.querySelector('.water').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Struggle'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Struggle',
            notes
        }

        const plantExist = strugglingList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExist) {
            strugglingList.push(cardInfo)
        }

        // removing the plant from thriving list
        thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName)

        // console.log(thrivingList);

        // after remove rerender the html
        if (currentStatus == "thriving-filter-btn") {
            renderThriving();
        }
        calculateCount()

    }

})

// step 3  html file create
function renderThriving() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let thrive of thrivingList) {
        console.log(thrive);

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
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
        filterSection.appendChild(div)
    }
}

function renderRejected() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''
    // crating innerHtml
    for (let struggle of strugglingList) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
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
        filterSection.appendChild(div)
    }
}
