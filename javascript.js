
//  HOME 

window.onload = function () {
                startTab();
            };

            function startTab() {
                document.getElementById("defaultOpen").click();

            }

            function openProcess(evt, processName) {
                
                var i, tabcontent, tablinks;

                
				
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }

               
				
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
				
                document.getElementById(processName).style.display = "block";
                evt.currentTarget.className += " active";
            }
			
			
//	ACCORDION 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// ZOOOM OUT 


$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	$(".card").css({
		transform: 100 + scrollPos + "%"
	})
});


