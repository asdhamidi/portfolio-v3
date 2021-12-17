let btn = document.querySelectorAll(".link");
let sections = document.querySelectorAll("section");
let front = document.querySelectorAll(".front");
let title = document.querySelector(".title");
let theme = document.getElementById("theme");
let menu = document.querySelector(".links-mobile");
let menuChk = document.getElementById("menu-check");
let socials = document.querySelectorAll(".social ul li");
let nav = document.querySelector("nav");
let contents = document.querySelectorAll(".content");
let headings = document.querySelectorAll(".heading");
let hamb = document.querySelector(".hamb");
let root = document.querySelector(":root");

// Fade-in on scroll functionality.
window.onscroll = () => {
    let current = window.scrollY;
    let id = "";

    // Looping through the sections list.
    for(let i = 0; i < sections.length; i++)
    {
        /** This will end up with the last section 
         * which is within the limit (current + 300) 
            after looping through all the sections.**/
        if(current + (window.innerHeight * 0.75) >= sections[i].offsetTop)
            id = i;
    }

    for(let i = 0; i < btn.length; i++)
    {
        // Removes the active class from all sidenav buttons.
        btn[i].classList.remove("active");

        // And puts it on the current visible section.
        if(i == id)
        btn[i].classList.add("active");
    }

    if(current > window.innerHeight * 0.75) 
    document.querySelector(".sidenav").classList.add("sidenav-active");
    else
    document.querySelector(".sidenav").classList.remove("sidenav-active");

    if(window.innerWidth > 666)
    {
        // Displaying sidenav and title as we pass the front page.
        if(current > 300) 
        {
            document.querySelector(".sidenav").classList.add("sidenav-active");
            title.classList.add("title-scroll");
            theme.classList.add("theme-scroll");
            
        }
        else
        {
            document.querySelector(".sidenav").classList.remove("sidenav-active");
            title.classList.remove("title-scroll");
            theme.classList.remove("theme-scroll");
        } 
    }
    else
    {
        // Removing sidenav, title, and theme button from left side when on front page.
        title.classList.remove("title-scroll");
        theme.classList.remove("theme-scroll");

        if(window.scrollY < 300)
        nav.classList.remove("mobile-nav")
        else
        nav.classList.add("mobile-nav")

        let projects = document.querySelectorAll(".project");

        for(let i = 0; i < projects.length; i++)
        {
            /** This will fade-in the projects
             * as they scroll into view and fade-out them as they scroll out.**/
            if(current + (window.innerHeight * 0.75) >= projects[i].offsetTop + contents[2].offsetTop )
            {
                projects[i].style.right = "0";
                projects[i].style.opacity = "1";
            }
            else
            {
                projects[i].style.right = "5vw";
                projects[i].style.opacity = "0";
            }
        }
    }
        
        for(let i = 0; i < contents.length; i++)
        {
            /** This will fade-in the sections and headings
             * as they scroll into view and fade-out them as they scroll out.**/
            if(current + (window.innerHeight * 0.9) >= contents[i].offsetTop)
            {
                contents[i].style.left = "0";
                contents[i].style.opacity = "1";
                headings[i].style.right = "0";
                headings[i].style.opacity = "1";
            }
            else
            {
                contents[i].style.left = "3vw";
                contents[i].style.opacity = "0";
                headings[i].style.right = "3vw";
                headings[i].style.opacity = "0";
            }
        }
};

// Fade-in for nav-bar, front page & front-page socials.
nav.style.opacity = "1";
nav.style.top = "0";
front[0].style.opacity = "1";
socials.forEach((social) => {
    social.style.opacity = "1";
    social.style.bottom = "0";
});

// Theme changing function.
function changeTheme(e)
{
    document.body.classList.toggle('dark-theme'); 

    if(document.body.classList == "dark-theme") 
    theme.src = "./assets/night.svg";
    else
    theme.src = "./assets/day.svg";
}

// Function to open nav menu on smaller screens.
function openMenu()
{
    menu.classList.toggle("menu-active");
    hamb.classList.toggle("active");
    document.querySelector(".sidenav").classList.toggle("sidenav-active");
    
    if(menuChk.checked)
    menuChk.checked = false;
    else
    menuChk.checked = true;

}

// Heart color function
function heart(e)
{
    root.style.setProperty("--heart", `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
}