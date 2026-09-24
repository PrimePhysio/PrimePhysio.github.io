const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const subject=encodeURIComponent('Prime Physio enquiry from '+d.get('name'));const body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'));location.href='mailto:YOUR-EMAIL@example.com?subject='+subject+'&body='+body;});
/* Navigation dropdowns */
document.querySelectorAll(".dropbtn").forEach(button => {
    button.addEventListener("click", () => {
        const dropdown = button.closest(".dropdown");
        const isOpen = dropdown.classList.contains("open");

        document.querySelectorAll(".dropdown").forEach(item => {
            item.classList.remove("open");
            item.querySelector(".dropbtn")
                .setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
            dropdown.classList.add("open");
            button.setAttribute("aria-expanded", "true");
        }
    });
});

/* Close dropdowns when clicking outside */
document.addEventListener("click", event => {
    if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(item => {
            item.classList.remove("open");
            item.querySelector(".dropbtn")
                .setAttribute("aria-expanded", "false");
        });
    }
});

/* Close dropdowns when selecting a link */
document.querySelectorAll(".dropdown-content a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".dropdown").forEach(item => {
            item.classList.remove("open");
            item.querySelector(".dropbtn")
                .setAttribute("aria-expanded", "false");
        });
    });
});
