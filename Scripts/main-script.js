function sendTo(target)
    {
        window.location.href = `${target}.html`
    }

    document.addEventListener("scroll", ()=> {
        if(document.body.getBoundingClientRect().top <= -636)
        {
            document.querySelector('.header-container').style.backgroundColor = 'var(--background-color)'
        } 
        else
        {
            document.querySelector('.header-container').style.backgroundColor = 'transparent'
        }
    })

    const closeButton = document.querySelector('.close')
    const openButton = document.querySelector('.open')
     const exploreOptions = document.querySelector('.explore-options')

    function getMenu() 
    {
        if(closeButton.style.visibility == 'hidden')
        {
            closeButton.style.visibility = 'visible'
            openButton.style.visibility = 'hidden'
            exploreOptions.style.visibility = 'visible'
        }
        else 
        {
            closeButton.style.visibility = 'hidden'
            openButton.style.visibility = 'visible'
            exploreOptions.style.visibility = 'hidden'
        }
    }

function closeMenu()
    {
        document.querySelector('.site-control-menu-main').style.display = 'none'
    }
function callOptionsMenu() 
    {
        document.querySelector('.site-control-menu-main').style.display = 'block'
    }