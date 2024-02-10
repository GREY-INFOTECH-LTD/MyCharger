function createNavbar () {
    container = document.getElementById("navbar-container")
    container.innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top shadow-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
        <i class="fas fa-bolt"></i>
        MyCharger</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-dark" href="index.html#mission">Mission</a>
            </li>
            <li class="nav-item" id="cta-nav">
            <a class="nav-link" href="questions.html">Evaluator</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
}

function createFooter () {
    container = document.getElementById("footer-container")
    container.innerHTML = `
    <footer class="flex-wrap d-none d-md-flex justify-content-center align-items-center py-3 border-0 my-0 mx-auto">
    <div class="col-xs-8 col-sm-4 d-flex align-items-center">
    <h6 class="text-dark footer-brand ms-3 ms-md-5"><i class="fas fa-bolt"></i> MyCharger
    <span class="text-muted">&copy; 2022</span>
    </h6>
      </div>
      <div class="col-xs-8 col-sm-4 justify-content-center d-flex">
        <ul class="list-group list-unstyled list-group-horizontal-md" id="footer-links">
          <li class="ms-3 p-1"><a class="link-secondary" href="index.html">Home</a></li>
          <li class="ms-3 p-1"><a class="link-secondary" href="index.html#mission">Mission</a></li>
          <li class="ms-3 p-1"><a class="link-secondary" href="team.html">Team</a></li>
          <li class="ms-3 p-1" id="footer-cta"><a class="footer-link link-light" href="questions.html">Evaluator</a></li>
        </ul>
      </div>
      <div class="col-xs-8 col-sm-4 justify-content-center d-flex">
        <ul class="nav list-unstyled ms-auto">
          <li class="mx-2 mx-lg-3"><a class="link-secondary" href="https://www.earthday.org/" target="_blank"><i class="fas fa-globe-africa"></i></a></li>
          <li class="mx-2 mx-lg-3"><a class="link-secondary" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li class="mx-2 mx-lg-3"><a class="link-secondary" href="https://facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a></li>
          <li class="mx-2 mx-lg-3"><a class="link-secondary" href="https://github.com/gpaul988/MyCharger" target="_blank"><i class="fab fa-github"></i></a></li>
          </ul>
      </div>
    </footer>
    `
}

createNavbar()
createFooter()