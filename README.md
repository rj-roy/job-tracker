Job Application Tracker

A simple and interactive Job Application Tracker built using HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript.

This application allows users to manage job applications by organizing them into three stages:

All Jobs

Interview

Rejected

🚀 Features

View all job applications

Move jobs to Interview

Move jobs to Rejected

Delete job applications

Automatic job counting per section

Dynamic “No Jobs Available” message when a section becomes empty

Responsive and clean UI

🛠 Technologies Used

HTML5

Tailwind CSS

DaisyUI

Vanilla JavaScript (DOM manipulation & event delegation)


⚙️ How It Works
Section Navigation

Navigation buttons toggle visibility between:

All

Interview

Rejected

Only one section is visible at a time.

Moving Jobs Between Sections

Clicking INTERVIEW moves the job card to the Interview section.

Clicking REJECTED moves the job card to the Rejected section.

Job counters update automatically.

If a section becomes empty, a “No Jobs Available” placeholder appears.

This is handled using event delegation to support dynamic DOM updates.

Deleting Jobs

Clicking Delete removes the job card.

Counts update instantly.

If a section becomes empty, the placeholder message is displayed automatically.

Job Counting Logic

Only elements with the class:

.job-card

are counted.

This prevents counting placeholders or non-job elements