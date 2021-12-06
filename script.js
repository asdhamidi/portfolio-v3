let btn = document.querySelectorAll(".link");
let sections = document.querySelectorAll("section");
let title = document.querySelector(".title");
let theme = document.getElementById("theme");
let menu = document.querySelector(".links-mobile");
let menuChk = document.getElementById("menu-check");
let nav = document.querySelector("nav");
let contents = document.querySelectorAll(".content");
let headings = document.querySelectorAll(".heading");

// Fade-in on scroll functionality.
window.onscroll = () => {
    let current = window.scrollY;
    if(window.innerWidth > 666)
    {
        let id = "";

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
            
        // Looping through the sections list.
        for(let i = 0; i < sections.length; i++)
        {
            /** This will end up with the last section 
             * which is within the limit (current + 300) 
                after looping through all the sections.**/
            if(current + 300 >= sections[i].offsetTop)
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
    }
    else
    {
        // Removing sidenav, title, and theme button from left side when on front page.
        document.querySelector(".sidenav").classList.remove("sidenav-active");
        title.classList.remove("title-scroll");
        theme.classList.remove("theme-scroll");

        if(window.scrollY < 300)
        nav.classList.remove("mobile-nav")
        else
        nav.classList.add("mobile-nav")
    }

    for(let i = 0; i < contents.length; i++)
        {
            /** This will fade-in the sections and headings
             * as they scroll into view and fade-out them as they scroll out.**/
            if(current + (window.innerHeight * 0.80) >= contents[i].offsetTop)
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

// Fade-in for nav-bar
nav.style.opacity = "1";
nav.style.top = "0";


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

    if(menuChk.checked)
    menuChk.checked = false;
    else
    menuChk.checked = true;

}