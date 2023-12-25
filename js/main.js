var btn_up = document.querySelector(".up");

 

function animate() {
    
    if (window.scrollY > 0) {
        scrollBy(0, -40);
        setTimeout(animate,1);
    }
}



btn_up.addEventListener("click", function(e) {
    e.preventDefault();
    
    animate();
    
}, false);


window.addEventListener("scroll", function() {
    
    if (this.scrollY >= 600) {
        btn_up.classList.remove("up-opa");
    } else {
        btn_up.classList.add("up-opa");
    }
    
}, false);






//menu

var btnMenu = document.getElementById("nav-menu");
btnMenu.addEventListener("click", toggleMenu);


function toggleMenu(e) {
    
    var divOverlay = document.getElementsByClassName("overlay")[0];
    var speed = 10;
    var eventTarget = e.target;
    
    if( eventTarget.className == "btn-open" ) {
        fadeIn(divOverlay, speed);
        eventTarget.className = "btn-close";
        
    } else if ( eventTarget.className == "btn-close") {
        fadeOut(divOverlay, speed);
        eventTarget.className = "btn-open";
    }
    
}

function fadeIn(elem, speed) {
    
    var inInterval = setInterval(function(){
        
    elem.style.opacity = Number(elem.style.opacity) + 0.02;
    
    if (elem.style.opacity >= 1) {
        
        elem.style.opacity = 1;
        clearInterval(inInterval);
        
    }    
        
        
    }, speed); // 10ms == .01s
    
    
    
}

function fadeOut(elem, speed) {
    
    var outInterval = setInterval(function(){
        
    elem.style.opacity = Number(elem.style.opacity) - 0.02;
    
    if (elem.style.opacity <= 0) {
        
        elem.style.opacity = 0;
        clearInterval(outInterval);
        
    }    
        
        
    }, speed); // 10ms == .01s
    
    
    
}


// scroll do sekcji


( function( $ ) {
	'use strict';
	
	$( '.scrollTo' ).on( 'click', function(e) {
		e.preventDefault();
		var href = $( this ).attr( 'href' );
		$( 'html, body' ).animate( { 
			scrollTop: $( href ).offset().top + 'px'
		}, 1500, function() {
			location.hash = href;
		} ); 
	} );
	
} ( jQuery ) );


function submitForm() {
    // Form validation
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var membership = document.getElementById("membership").value;

    // Reset previous error messages
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("membership-error").innerText = "";

    // Check if fields are not empty
    if (name === "") {
        document.getElementById("name-error").innerText = "Name is required";
        return;
    }

    if (email === "") {
        document.getElementById("email-error").innerText = "Email is required";
        return;
    }

    if (membership === "Select Membership Package") {
        document.getElementById("membership-error").innerText = "Please select a membership package";
        return;
    }

    // Perform form submission logic here (you can use AJAX, etc.)
    document.getElementById("success-message").style.display = "block";
}
function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
