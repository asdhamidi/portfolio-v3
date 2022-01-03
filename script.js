let btn = document.querySelectorAll(".sidenav button");
let sections = document.querySelectorAll("section");
let front = document.querySelectorAll(".front");
let title = document.querySelector(".title");
let theme = document.getElementById("theme");
let menu = document.querySelector(".links-mobile");
let menuChk = document.getElementById("menu-check");
let socials = document.querySelectorAll(".social ul li");
let social = document.querySelector(".social ul");
let links = document.querySelectorAll(".links li");
let nav = document.querySelector("nav");
let contents = document.querySelectorAll(".content");
let headings = document.querySelectorAll(".heading");
let hamb = document.querySelector(".hamb");
let blur = document.querySelector(".blur-wrapper");
let root = document.querySelector(":root");
let main = document.querySelector("main");

// Fade-in on scroll functionality.
main.onscroll = () => {
    let current = main.scrollTop;
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
            social.classList.add("social-hide")
            if(current > 500)
            social.classList.add("social-scroll")
        }
        else
        {
            document.querySelector(".sidenav").classList.remove("sidenav-active");
            title.classList.remove("title-scroll");
            theme.classList.remove("theme-scroll");
            social.classList.remove("social-hide")
            if(current < 500)
            social.classList.remove("social-scroll")
        } 
    }
    else
    {
        // Removing sidenav, title, and theme button from left side when on front page.
        title.classList.remove("title-scroll");
        theme.classList.remove("theme-scroll");

        if(main.scrollTop < 300)
        nav.classList.remove("mobile-nav")
        else
        nav.classList.add("mobile-nav")

        let projects = document.querySelectorAll(".project");

        for(let i = 0; i < projects.length; i++)
        {
            /** This will fade-in the projects
             * as they scroll into view and fade-out them as they scroll out.**/
            if(current + (window.innerHeight * 0.5) >= projects[i].offsetTop + contents[2].offsetTop )
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
         * as they scroll into view.**/
        if(current + (window.innerHeight * 0.6) >= contents[i].offsetTop)
        {
            contents[i].classList.add("content-active");
            headings[i].classList.add("heading-active");
        }
    }
};

// Loading animation for the front page and nav-bar.
setTimeout(loading_animation, 100);
function loading_animation()
{
    socials.forEach((social) => {
        social.style.opacity = "1";
        social.style.bottom = "0";
    });
    links.forEach((social) => {
        social.style.opacity = "1";
        social.style.left = "0";
    });
    let fronts = [document.getElementById("front1"),
    document.getElementById("front2"),
    document.getElementById("front3")];
    
    front[0].style.opacity = "1";
    fronts.forEach((fr) => {
        fr.style.opacity = "1";
        fr.style.top = "0";                
    });
    fronts[2].style.opacity = "0.5";
}

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
    blur.classList.toggle("blur-active");
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