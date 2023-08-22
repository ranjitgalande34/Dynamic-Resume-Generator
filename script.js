document.addEventListener("DOMContentLoaded", function () {
    const formInputs = document.querySelectorAll(".resume input, .resume textarea");
    const generatedResumeContainer = document.querySelector(".generated-resume");
 
    formInputs.forEach(input => {
        input.addEventListener("input", function () {
            const name = document.getElementById("name").value;
            const role = document.getElementById("role").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("address").value;
            const github = document.getElementById("git").value;
            const linkedin = document.getElementById("link").value;
            const website = document.getElementById("web").value;
            const summary = document.querySelector(".summ").value;
        
            const generatedResume = `
                <div style="border: 2px solid #333; padding: 20px; width: 80%; height:600px; background-color:#BDE5E1;">
                   <div style="position:relative; left:170px"> 
                   <h1>${name}<h1>
                   </div>
                    <h3>Role :${role}</h3>
                    <h3>Phone: ${phone}</h3>
                    <h3>Email: ${email}</h3>
                    <h3>Address: ${address}</h3>
                    <h3>Github: ${github}</h3>
                    <h3>LinkedIn: ${linkedin}</h3>
                    <h3>Website: ${website}</h3>
                    <h3>Summary:${summary}</h3>
                    </div>
                </div>
            `;

            generatedResumeContainer.innerHTML = generatedResume;
            generatedResumeContainer.style.display = "block";
        });
    });
});