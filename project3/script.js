 document.querySelector('.header').addEventListener('click',function(e){
    e.preventDefault();
  if(e.target.className=== 'navlink'){
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({behavior:'smooth'})

 }
});
