let btn = document.querySelectorAll(".link");
let sections = document.querySelectorAll("section");
let title = document.querySelector(".title");
let theme = document.getElementById("theme");
let menu = document.querySelector(".links-mobile");
let menuChk = document.getElementById("menu-check");


// Sidenav functionality.
window.onscroll = () => {
    if(window.innerWidth > 666)
    {
        let current = window.scrollY;
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
    }

};

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