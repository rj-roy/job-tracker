function unhidePage(id) {
    const sections = document.querySelectorAll(
        "#all-jobs, #interview, #rejected"
    )

    for (const section of sections) {
        section.classList.add("hidden");
    };


    const selected = document.getElementById(id);
    if (selected) {
        selected.classList.remove("hidden")
    }
};


// bg of butn-eeeee
const buttons = document.querySelectorAll(
    "#all-jobs-btn, #interview-btn, #rejected-btn"
)

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(clickedd => {
            clickedd.classList.remove("bg-blue-500", "text-white")
            clickedd.classList.add("bg-white", "text-black");
        });

        btn.classList.add("bg-blue-500", "text-white")
        btn.classList.remove("bg-white", "text-black");
    });
})




const sections = ["all-jobs", "interview", "rejected"];
const noJobsTemplate = document.getElementById("no-jobs");

for (const id of sections) {
    const section = document.getElementById(id);
    if (section && !section.hasChildNodes()) {
        const clone = noJobsTemplate.cloneNode(true);

        clone.classList.remove("hidden");
        section.appendChild(clone);
    }
};


function emptyJobs() {
    for (const id of sections) {
        const section = document.getElementById(id);

        const NoJobs = section.querySelector("#no-jobs");
        if (NoJobs) {
            NoJobs.remove();
        }

        if (section.querySelectorAll(".job-card").length === 0) {
            const cloneTemplate = noJobsTemplate.cloneNode(true);
            cloneTemplate.classList.remove("hidden");
            section.appendChild(cloneTemplate);
        }
    };

}


// counting
function jobsCount() {
    const tAllJobs = document.querySelectorAll("#all-jobs > .job-card").length;
    const tInterview = document.querySelectorAll("#interview > .job-card").length;
    const tRejected = document.querySelectorAll("#rejected > .job-card").length;

    document.getElementById("total-all").textContent = tAllJobs;
    document.getElementById("total-interview").textContent = tInterview;
    document.getElementById("total-rejected").textContent = tRejected;
};

window.addEventListener("DOMContentLoaded", () => {
    jobsCount();
})


// inter.. & reject
document.addEventListener("click", function (clicked) {
    if (clicked.target.classList.contains("interview-btn")) {
        const jobs = clicked.target.closest(".job-card");
        const interviewSection = document.getElementById("interview");

        if (jobs && interviewSection) {
            interviewSection.appendChild(jobs);
            jobsCount();
            emptyJobs();
        }
    };

    if (clicked.target.classList.contains("rejected-btn")) {
        const jobs = clicked.target.closest(".job-card");
        const rejectedSection = document.getElementById("rejected");
        
        if (jobs && rejectedSection) {
            rejectedSection.appendChild(jobs);
            jobsCount();
            emptyJobs();
        }
    }

});




// delete btn
document.addEventListener('click', function(del){
    if(del.target.classList.contains("delete-btn")){
        const jobs = del.target.closest(".job-card");

        if(jobs){
            jobs.remove()

            jobsCount();
            emptyJobs();
        }
    }
})























// // moving jobs
// const jobs1 = document.getElementById("jobs-1");

// // interview-bbb
// document.getElementById("interview-btn").addEventListener('click', function () {
//     const target = document.getElementById("interview");
//     target.append(jobs1);
// })

// // rejected-b
// document.getElementById("rejected-btn").addEventListener('click', function () {
//     const target = document.getElementById("rejected");
//     target.append(jobs1);
// })

// function jobsDefaultPlace() {
//     const allJobs = document.getElementById("all-jobs");
//     allJobs.append(jobs1);
// }




// //delete
// document.getElementById("delete-btn").addEventListener('click', function () {
//     jobs1.parentNode.removeChild(jobs1);
// })












































// document.getElementById("").addEventListener('click', function () {


//     // clone template
//     const allJobsTemplate = document.getElementById("all-jobs-template");
//     const allJobs = document.getElementById("all-jobs");

//     const clone = allJobsTemplate.content.cloneNode(true);

//     allJobs.appendChild(clone);
// })