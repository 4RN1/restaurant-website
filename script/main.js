

document.querySelectorAll('.clock-svg').forEach(clock => {
  const hoursBox = clock.closest('section').querySelector('.openHours-container');

  clock.addEventListener('mouseenter', () => {
    hoursBox.style.opacity = 1;
    hoursBox.style.transform = 'translateY(-2rem)';
  });

  clock.addEventListener('mouseleave', () => {
    hoursBox.style.opacity = 0;
    hoursBox.style.transform = 'translateY(0)';
  });
});


// Load Pages

function showPage(pageSelected) {
  const allSections = document.querySelectorAll("main > section"); 
  

    allSections.forEach(section => section.style.display = 'none');
  
    const page = document.querySelector(pageSelected)
    if (!page) return;

    if (pageSelected === ".blog-page") {
      page.style.display = "grid";
      
      showBlogs()
    } else if (pageSelected === ".starting-page") { 
      page.style.display = "block";

    } else  {page.style.display = "grid";
    }
    

}






document.querySelectorAll(".menu , .shop, .blog , .contact").forEach(link => {
  link.addEventListener('click' , () => {
     const targetPage = "." + link.className.split(' ')[0] + "-page"; 
    showPage(targetPage);



  })
  
});



const bookingBtn = document.querySelectorAll('.book-btn')

bookingBtn.forEach(btn => {
  btn.addEventListener('click' , () => {
    showPage('.reservation-page')
  })
})


const toMainPage = document.querySelectorAll('.logo')

toMainPage.forEach(btn => {
  btn.addEventListener('click' , () => {
    showPage('.starting-page')
  })
})