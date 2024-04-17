function loadNavbar(){
    const navbar = `
    <nav>
   <center>
    <a href="">HOME</a>
    <a href="">ABOUT</a>
    <a href="">CONTACT</a>
   </center>
    </nav>
    `
    document.getElementById('navbar').innerHTML = navbar
}

export {loadNavbar}