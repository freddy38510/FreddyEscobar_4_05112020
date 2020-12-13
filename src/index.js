// import styles
import './styles/index.scss'

// import scripts
import 'jquery-touchswipe'
import './js/jqBootstrapValidation'
import 'lazysizes'
import 'lazysizes/plugins/bgset/ls.bgset'
import './js/formHandler'
import './js/blocs'

// import bootstrap components
import 'bootstrap/js/alert'
// import 'bootstrap/js/button'
// import 'bootstrap/js/carousel'
import 'bootstrap/js/collapse'
// import 'bootstrap/js/dropdown'
import 'bootstrap/js/modal'
// import 'bootstrap/js/tooltip'
import 'bootstrap/js/transition'

// Only continue if polyfills are actually needed
if (!('scrollBehavior' in document.documentElement.style)) {
  // Wait until the Polyfills are loaded
  Promise.all([
    import('smoothscroll-polyfill'),
    import('smoothscroll-anchor-polyfill'),
  ])
    // then use the modules however you want
    .then(([smoothscrollPolyfill]) => {
      // (Unlike this package, smoothscroll-polyfill needs to be actively invoked: )
      smoothscrollPolyfill.polyfill()
    })
}

function scrollToTop() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

document.addEventListener('click', (e) => {
  const scrollButton = document.getElementsByClassName('scrollToTop')[0]

  if (e.target === scrollButton) {
    scrollButton.blur()
    scrollToTop()
  }
})
