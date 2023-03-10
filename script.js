let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn')

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

let subbut=document.getElementById('butt')
subbut.addEventListener('click',function(e){
    email=document.getElementById('box1')
    password=document.getElementById('box2')
    let notes=localStorage.getItem("notes")
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
    let myobj={
        email:email.value,
        password:password.value
    }
    notesobj.push(myobj)
    email.value="";
    password.value="";
    localStorage.setItem("notes",JSON.stringify(notesobj))
    console.log(notesobj)
    let t=0;
    for (let index = 0; index < notesobj.length-1; index++) {
        if(notesobj[index].email==myobj.email && notesobj[index].password==myobj.password)
        {
            console.log(notesobj[index].email);
            console.log(myobj.email);
            console.log(notesobj[index].password);
            console.log(myobj.password);
            alert('you are already logged in')
            t=1
            window.location.assign("index2.html");
            break
        } 
    }
    if(t==1)
    {
        alert('You are successfully logged in !')
        window.location.assign("index2.html");
    }
})
