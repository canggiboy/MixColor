( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "main" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
} () );

btnAbout.addEventListener("click", function() {
	tau.changePage('about');
});

btnBack.addEventListener("click", function() {
	window.history.back();
});

btnMix.addEventListener("click", function() {
	
	var radios0 = document.getElementsByName('color-mix0');
	var radios1 = document.getElementsByName('color-mix1');
	
	for (var i = 0, length = radios0.length; i < length; i++){
		if (radios0[0].checked && radios1[0].checked) {
		    // do whatever you want with the checked radio
			document.getElementById("color-result").className = "color-result-cc red";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[0].checked && radios1[1].checked)||(radios0[1].checked && radios1[0].checked)) {
			document.getElementById("color-result").className = "color-result-cc yellow-red";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[0].checked && radios1[2].checked)||(radios0[2].checked && radios1[0].checked)) {
			document.getElementById("color-result").className = "color-result-cc red-green";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[0].checked && radios1[3].checked)||(radios0[3].checked && radios1[0].checked)) {
			document.getElementById("color-result").className = "color-result-cc red-blue";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[0].checked && radios1[4].checked)||(radios0[4].checked && radios1[0].checked)) {
			document.getElementById("color-result").className = "color-result-cc red-indigo";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[0].checked && radios1[5].checked)||(radios0[5].checked && radios1[0].checked)) {
			document.getElementById("color-result").className = "color-result-cc red-purple";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[0].checked && radios1[6].checked)||(radios0[6].checked && radios1[0].checked)) {
			document.getElementById("color-result").className = "color-result-cc red-white";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[0].checked && radios1[7].checked)||(radios0[7].checked && radios1[0].checked)) {
			document.getElementById("color-result").className = "color-result-cc red-black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if (radios0[1].checked && radios1[1].checked) {
			document.getElementById("color-result").className = "color-result-cc yellow";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[1].checked && radios1[2].checked)||(radios0[2].checked && radios1[1].checked)) {
			document.getElementById("color-result").className = "color-result-cc yellow-green";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[1].checked && radios1[3].checked)||(radios0[3].checked && radios1[1].checked)) {
			document.getElementById("color-result").className = "color-result-cc yellow-blue";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[1].checked && radios1[4].checked)||(radios0[4].checked && radios1[1].checked)) {
			document.getElementById("color-result").className = "color-result-cc yellow-indigo";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[1].checked && radios1[5].checked)||(radios0[5].checked && radios1[1].checked)) {
			document.getElementById("color-result").className = "color-result-cc yellow-purple";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[1].checked && radios1[6].checked)||(radios0[6].checked && radios1[1].checked)) {
			document.getElementById("color-result").className = "color-result-cc yellow-white";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[1].checked && radios1[7].checked)||(radios0[2].checked && radios1[7].checked)) {
			document.getElementById("color-result").className = "color-result-cc yellow-black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if (radios0[2].checked && radios1[2].checked) {
			document.getElementById("color-result").className = "color-result-cc green";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[2].checked && radios1[3].checked)||(radios0[3].checked && radios1[2].checked)) {
			document.getElementById("color-result").className = "color-result-cc blue-green";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[2].checked && radios1[4].checked)||(radios0[4].checked && radios1[2].checked)) {
			document.getElementById("color-result").className = "color-result-cc indigo-green";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[2].checked && radios1[5].checked)||(radios0[5].checked && radios1[2].checked)) {
			document.getElementById("color-result").className = "color-result-cc purple-green";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[2].checked && radios1[6].checked)||(radios0[6].checked && radios1[2].checked)) {
			document.getElementById("color-result").className = "color-result-cc green-white";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[2].checked && radios1[7].checked)||(radios0[7].checked && radios1[2].checked)) {
			document.getElementById("color-result").className = "color-result-cc green-black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if (radios0[3].checked && radios1[3].checked) {
			document.getElementById("color-result").className = "color-result-cc blue";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[3].checked && radios1[4].checked)||(radios0[4].checked && radios1[3].checked)) {
			document.getElementById("color-result").className = "color-result-cc blue-indigo";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[3].checked && radios1[5].checked)||(radios0[5].checked && radios1[3].checked)) {
			document.getElementById("color-result").className = "color-result-cc purple-blue";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[3].checked && radios1[6].checked)||(radios0[6].checked && radios1[3].checked)) {
			document.getElementById("color-result").className = "color-result-cc blue-white";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[3].checked && radios1[7].checked)||(radios0[7].checked && radios1[3].checked)) {
			document.getElementById("color-result").className = "color-result-cc blue-black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if (radios0[4].checked && radios1[4].checked) {
			document.getElementById("color-result").className = "color-result-cc indigo";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[4].checked && radios1[5].checked)||(radios0[5].checked && radios1[4].checked)) {
			document.getElementById("color-result").className = "color-result-cc purple-indigo";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[4].checked && radios1[6].checked)||(radios0[6].checked && radios1[4].checked)) {
			document.getElementById("color-result").className = "color-result-cc indigo-white";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[4].checked && radios1[7].checked)||(radios0[7].checked && radios1[4].checked)) {
			document.getElementById("color-result").className = "color-result-cc indigo-black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if (radios0[5].checked && radios1[5].checked) {
			document.getElementById("color-result").className = "color-result-cc purple";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[5].checked && radios1[6].checked)||(radios0[6].checked && radios1[5].checked)) {
			document.getElementById("color-result").className = "color-result-cc purple-white";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[5].checked && radios1[7].checked)||(radios0[7].checked && radios1[5].checked)) {
			document.getElementById("color-result").className = "color-result-cc purple-black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if (radios0[6].checked && radios1[6].checked) {
			document.getElementById("color-result").className = "color-result-cc white";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if ((radios0[6].checked && radios1[7].checked)||(radios0[7].checked && radios1[6].checked)) {
			document.getElementById("color-result").className = "color-result-cc white-black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} else if (radios0[7].checked && radios1[7].checked) {
			document.getElementById("color-result").className = "color-result-cc black";
			document.getElementById("color-result").style.visibility = "visible";
		    break;
		} 
	}
	
});