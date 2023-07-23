/*******************************APPARITION AU DEFILEMENT ************************************/



const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const visible = function (entries){
    entries.forEach(function (entry) {
         if (entry.intersectionRatio > ratio){
            if(entry.target.classList.contains('topDef')){
              entry.target.classList.add('show-from-top')  
            }else if(entry.target.classList.contains('leftDef')){
              entry.target.classList.add('show-from-left')  
            }else if(entry.target.classList.contains('rightDef')){
              entry.target.classList.add('show-from-right')  
            
            }else if(entry.target.classList.contains('bottomDef')){
              entry.target.classList.add('show-from-bottom')  
            }
         }else{
            if(entry.target.classList.contains('topDef')){
              entry.target.classList.remove('show-from-top')  
            }else if(entry.target.classList.contains('leftDef')){
              entry.target.classList.remove('show-from-left')  
            }else if(entry.target.classList.contains('rightDef')){
              entry.target.classList.remove('show-from-right')  
            
            }else if(entry.target.classList.contains('bottomDef')){
              entry.target.classList.remove('show-from-bottom')  
            }
         }
        
    });
}






/******** LOADER ********/

        window.addEventListener('load',()=>{
            const loader = document.querySelector(".loader");
            const showP = document.querySelector('.hidenPioneer');

            setTimeout(() => {
                loader.classList.add('loader_hidden');

                 const observer = new IntersectionObserver(visible, options)
                document.querySelectorAll('[class*="observe-"]').forEach(function (cach) {
                    observer.observe(cach)
                })
            }, 1000);

            setTimeout(() => {
                showP.classList.add('showP');
            }, 1000);
            setTimeout(() => {
                loader.classList.add('stopAnim')
            }, 500);
            
            
            loader.addEventListener('transitionend',()=>{
                        document.body.removeChild(loader);
            })



        })

/**************** ******************/

// parallax ********** //

document.addEventListener('mousemove',parallax);
function parallax(e){
    this.querySelectorAll(".parlx").forEach(layer=>{
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerWidth - e.pageY*speed)/100
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}





/******** CURSOR MOVE *****/

 let cursor = document.querySelector(".cursor");
        let cursor2 = document.querySelector(".cursor2");


            document.addEventListener("mousemove",function(e){
            cursor2.style.cssText = "left:" + e.clientX +
            "px; top:"+e.clientY +"px;";

            var buttons = document.querySelectorAll('button');
            for (let i = 0; i < buttons.length; i++) {
                const btn = buttons[i];

                btn.addEventListener('mouseover', function () {
                    cursor2.classList.add('on-link');
                });

                btn.addEventListener('mouseout', function () {
                    cursor2.classList.remove('on-link');
                })
            }


            var ahov = document.querySelectorAll('li');
            for (let i = 0; i < ahov.length; i++) {
                const a = ahov[i];

                a.addEventListener('mouseover', function () {
                    cursor2.classList.add('on-link');
                });

                a.addEventListener('mouseout', function () {
                    cursor2.classList.remove('on-link');
                })
            }

        })
        


// ***** menu **** //

const closeToggle = document.querySelector('.close');
closeToggle.addEventListener('click',()=>{
    document.querySelector('.menuToggle').classList.remove('activeMenu')
})

const openToggle = document.querySelector('.container .menu');
openToggle.addEventListener('click',()=>{
    document.querySelector('.menuToggle').classList.add('activeMenu')
})





