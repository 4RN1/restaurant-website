const blogRightSide = document.querySelector('.shop-page .g-right');
const footer = document.querySelector('.footer')
   
  if (footer && blogRightSide) {
    const footerClone = footer.cloneNode(true)
    blogRightSide.appendChild(footerClone);
  }

