document.querySelectorAll(".faq-item-box").forEach(item => { 
    item.addEventListener("click", () => { 
        const currentlyActiveItem = document.querySelector(".faq-item-box.active"); 


        if (currentlyActiveItem && currentlyActiveItem !== item) { 
            currentlyActiveItem.classList.remove("active"); 
            currentlyActiveItem.nextElementSibling.style.maxHeight = "0"; 
            currentlyActiveItem.querySelector(".faq-toggle img").src = "assets/images/icon-plus.svg";
            currentlyActiveItem.nextElementSibling.classList.remove("active"); 
        } 
        
        // Toggle active class on the clicked item
        item.classList.toggle("active"); 
        const answer = item.nextElementSibling;
        answer.classList.toggle("active"); 
     
        
        if (item.classList.contains("active")) { 
            answer.style.maxHeight = answer.scrollHeight + "px";
            item.querySelector(".faq-toggle img").src = "assets/images/icon-minus.svg";
            answer.style.padding = "15px";
        } else { 
            answer.style.maxHeight = "0";
            item.querySelector(".faq-toggle img").src = "assets/images/icon-plus.svg";
            answer.style.padding = "0 15px";
        }
    });

});