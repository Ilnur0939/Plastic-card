let form = document.querySelector('form')
let number1 = document.querySelector('#number')

let card = {
    title: document.querySelector('.card__title'),
    number: document.querySelector('.card__number'),
    name: document.querySelectorAll('.card__name'),
    date: document.querySelector('.card__date'),
    cvc: document.querySelector('#cvc')

}

let regexXumo = /^\9860+[0-9]{0,12}$/
let regexUz = /^\8600+[0-9]{0,12}$/
let limit = /^[0-9]{0,16}$/
let error = /^[a-zA-Z]$/


form.addEventListener('input', function(evt){
    evt.preventDefault();

    
    document.querySelector('#number').oninput = () =>{
        document.querySelector('.card__number').innerText = document.querySelector('#number').value;
    }
    
    document.querySelector('#cvc').oninput = () =>{
        document.querySelector('.cvc').innerText = document.querySelector('#cvc').value;
    }

    document.querySelector('#firstname').oninput = () =>{
        document.querySelector('.firstname').innerText = document.querySelector('#firstname').value;
    }

    document.querySelector('#name').oninput = () =>{
        document.querySelector('.name').innerText = document.querySelector('#name').value;
    }

    document.querySelector('#monthselect').oninput = () =>{
        document.querySelector('.month').innerText = document.querySelector('#monthselect').value;
    }

    document.querySelector('#yearselect').oninput = () =>{
        document.querySelector('.year').innerText = document.querySelector('#yearselect').value;
    }

    if(regexUz.test(number1.value)){
        document.querySelector('#logo').classList.remove('contact__humo')
        document.querySelector('#logo').classList.add('contact__uzcard')
        document.querySelector('#logo').src = './Uzcard-logo.png'
        document.querySelector('#logo').setAttribute('style' , 'width: 100px' , 'height: 100px')
        // card['number'].innerHTML = number1.value
    }

   
    else if(regexXumo.test(number1.value)){
        document.querySelector('#logo').classList.remove('contact__uzcard')
        document.querySelector('#logo').classList.add('contact__humo')
        document.querySelector('#logo').src = './HUMO-logo.png'
        document.querySelector('#logo').setAttribute('style' , 'width: 80px' , 'height: 50px', 'margin-top: 25px')
    }
   
    else{
        card['title'].innerHTML = ''
    }
})


document.querySelector('#cvc').onmouseenter = () =>{
    document.querySelector('.contact__card').setAttribute('style','transform: perspective(1000px) rotateY(180deg)');
    document.querySelector('.contact__cardback').setAttribute('style','transform: perspective(1000px) rotateY(0deg)');
    // document.querySelector('.cvc').setAttribute('style','transform: perspective(1000px) rotateY(180deg)')
    // document.querySelector('.contact__cardcvc').setAttribute('style','transform: rotateY(45deg)')
    
}
document.querySelector('#cvc').onmouseleave = () =>{
    document.querySelector('.contact__card').setAttribute('style','transform: perspective(1000px) rotateY(360deg)');
    document.querySelector('.contact__cardback').setAttribute('style','transform: perspective(1000px) rotateY(-180deg)');
    document.querySelector('.cvc').setAttribute('style','transform: none')
}

