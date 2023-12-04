let vis=document.querySelector('#visage');
vis.addEventListener('click',(e)=>{
    e.preventDefault();
    if(document.querySelector('.flexbox').style.backgroundColor=='black'){
        document.querySelector('.flexbox').style.backgroundColor='white';
        document.querySelectorAll('.cola').forEach(e=>{
            e.style.color='black';
        });
        document.querySelector('#visage').style.color='rgb(67, 67, 67)';
    }
    else{
        document.querySelector('.flexbox').style.backgroundColor = 'black';
        document.querySelectorAll('.cola').forEach(e=>{
            e.style.color='white';
        });
    }
});


let btn = document.querySelectorAll('.add-btn');
btn.forEach(e=>{
    e.addEventListener('click',daba);
});
// function daba()
// {
//     alert('Item added to cart');
// }

function daba(){
    toastr.success ("Item added to cart");
    document.getElementById('toast-container').classList.add('toast-bottom-right');
    document.getElementById('toast-container').classList.remove('toast-top-right');
};
