import React from 'react'

function Footer() {
  return (
      <footer className="">

          <div className="links">

              <a href="/" target="_blank" >
                  About
              </a>
              <a href="/" target="_blank">
                  Contact
              </a>
              <a href="/" target="_blank">
                  Help
              </a>

          </div>


          <div className="socials">
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-dribbble"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-twitter"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-instagram"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-pinterest"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                  <span className="text-lg fab fa-github"></span>
              </a>
          </div>


          <p className="copyright text-secondary">
              Copyright © <script>
                  document.write(new Date().getFullYear())
              </script> Dsoftsolutions.
          </p>
          

      </footer>
  )
}

export default Footer