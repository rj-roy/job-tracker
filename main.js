function unhidePage(id) {
    const sections = document.querySelectorAll(
        "#all-jobs, #interview, #rejected"
    )

    for (const section of sections) {
        section.classList.add("hidden");
    }


    const selected = document.getElementById(id);
    if (selected) {
        selected.classList.remove("hidden");
    }
}



// moving jobs
const jobs1 = document.getElementById("jobs-1");

// interview-bbb
document.getElementById("interview-btn").addEventListener('click', function () {
    const target = document.getElementById("interview");
    target.append(jobs1);
})

// rejected-b
document.getElementById("rejected-btn").addEventListener('click', function () {
    const target = document.getElementById("rejected");
    target.append(jobs1);
})

function jobsDefaultPlace() {
    const allJobs = document.getElementById("all-jobs");
    allJobs.append(jobs1);
}




//delete
document.getElementById("delete-btn").addEventListener('click', function () {
    jobs1.remove(jobs1);
})








// bg-eeeee
const buttons = document.querySelectorAll(
    "#all-jobs-btn, #interview-btn, #rejected-btn"
)

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => {
            b.classList.remove("bg-blue-500", "text-white");
            b.classList.add("bg-white", "text-black");
        });

        btn.classList.add("bg-blue-500", "text-white");
        btn.classList.remove("bg-white", "text-black");
    });
});



































// document.getElementById("").addEventListener('click', function () {


//     // clone template
//     // const allJobsTemplate = document.getElementById("all-jobs-template");
//     // const allJobs = document.getElementById("all-jobs");

//     // const clone = allJobsTemplate.content.cloneNode(true);

//     // allJobs.appendChild(clone);
// })