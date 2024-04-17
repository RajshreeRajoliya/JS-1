function loadNavbar(){
    const navbar = `
    
    <center>
    <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
    </nav>
</center>

    `

    document.getElementById('navbar').innerHTML = navbar
}

export{ loadNavbar}