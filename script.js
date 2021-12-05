let btn = document.querySelectorAll(".link");
let sections = document.querySelectorAll("section");
let title = document.querySelector(".title");
let theme = document.getElementById("theme");
let menu = document.querySelector(".links-mobile");
let menuChk = document.getElementById("menu-check");

window.onscroll = () => {
    if(window.innerWidth > 666)
    {
        let current = window.scrollY;
        let id = "";
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
            
    
        for(let i = 0; i < sections.length; i++)
        {
            if(current + 300 >= sections[i].offsetTop)
                id = i;
        }
    
        for(let i = 0; i < btn.length; i++)
        {
            btn[i].classList.remove("active");
            if(i == id)
            btn[i].classList.add("active");
        }
    }
    else
    {
        document.querySelector(".sidenav").classList.remove("sidenav-active");
        title.classList.remove("title-scroll");
        theme.classList.remove("theme-scroll");
    }

};

function changeTheme(e)
{
    document.body.classList.toggle('dark-theme'); 
    console.log("Check");

    if(document.body.classList == "dark-theme") 
    theme.src = "./assets/night.svg";
    else
    theme.src = "./assets/day.svg";
}

function openMenu()
{
    console.log("he");
    menu.classList.toggle("menu-active");
    
    if(menuChk.checked)
    menuChk.checked = false;
    else
    menuChk.checked = true;

}