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
import 'bootstrap/js/button'
// import 'bootstrap/js/carousel'
import 'bootstrap/js/collapse'
import 'bootstrap/js/dropdown'
import 'bootstrap/js/modal'
import 'bootstrap/js/tooltip'
import 'bootstrap/js/transition'


function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('click', (e) => {
    const scrollButton = document.getElementsByClassName('scrollToTop')[0]

    if(e.target === scrollButton) {
        scrollButton.blur()
        scrollToTop()
    }
})
