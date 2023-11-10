const imgs=document.querySelectorAll('.img a');
let imgId=1;

const imgDiv=document.querySelectorAll('.img');

imgs.forEach((img)=>{
  img.addEventListener('click',(e)=>{
    e.preventDefault();
    imgId=img.dataset.id;

    imgDiv.forEach((img)=>{
      img.classList.remove('active');
    });

    img.parentElement.classList.add('active');

    moveImage();
  });
});
