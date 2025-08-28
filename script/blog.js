let blogs = [
  {
    name: "Gatsby Night",
    date: "September 19, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    imageUrl: "./assets/images/blog-1.png",
  },
  {
    name: "Classic Dinner Night",
    date: "September 19, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    imageUrl: "./assets/images/blog-2.png",
  },
  {
    name: "New Restaurant",
    date: "September 19, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    imageUrl: "./assets/images/blog-3.png",
  },
  {
    name: "Romantic Dinner",
    date: "September 19, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    imageUrl: "./assets/images/blog-4.png",
  },
  {
    name: "Brand New Kitchen",
    date: "September 19, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    imageUrl: "./assets/images/blog-5.png",
  },
];

function showBlogs() {
  const blogRightSide = document.querySelector(".blog-page .g-right"); 
 blogRightSide.innerHTML = ""; 

  blogs.forEach((blog) => {
    const blogBox = document.createElement("div");
    blogBox.classList.add("blog-box");

    const group = document.createElement('div');
    group.classList.add('group')

    const uploadDate = document.createElement("p");
    uploadDate.innerText = blog.date;
    uploadDate.classList.add('date')

    const blogName = document.createElement("h2");
    blogName.innerText = blog.name;

    const blogDesc = document.createElement("p");
    blogDesc.innerText = blog.description;
    blogDesc.classList.add('description')

    const blogImg = document.createElement("img");
    blogImg.src = blog.imageUrl;
    blogImg.alt = blog.name;

    // append elements into blogBox
    blogBox.appendChild(blogImg);
    blogBox.appendChild(group)
    group.appendChild(uploadDate);
    group.appendChild(blogName);
    group.appendChild(blogDesc);
    
blogRightSide.dataset.generated = true;
    // append blogBox into existing .g-right
    blogRightSide.appendChild(blogBox);
  });

  const footer = document.querySelector('.footer')
   
  if (footer && blogRightSide) {
    const footerClone = footer.cloneNode(true)
    blogRightSide.appendChild(footerClone);
  }

  blogRightSide.dataset.generated = true;
  

}



