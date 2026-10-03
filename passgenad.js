const genBtn = document.querySelector(".gen-btn");

genBtn.addEventListener('click',function(e){
    const width = document.querySelector(".nbr-caracters");
    const number = document.getElementById('numbers').checked;
    const letter = document.getElementById('letters').checked;
    const symbol = document.getElementById('symbols').checked;
    const lowercase = document.getElementById('miniscule-only').checked;

    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";     
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    generate(width.value,number,letter,symbol,lowercase);
})

function generate(width,number,letter,symbol,lowercas){
    const password ;
    for(int i=0;i<width;i++){
        
    }

}
