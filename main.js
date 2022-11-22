let form = document.querySelector('form')
let number1 = document.querySelector('#number')

let card = {
    title: document.querySelector('.card__title'),
    number: document.querySelector('.card__number'),
    name: document.querySelectorAll('.card__name'),
    date: document.querySelector('.card__date'),
    cvc: document.querySelector('.cvc')

}

let regexXumo = /^\9860+[0-9]{0,12}$/
let regexUz = /^\8600+[0-9]{0,12}$/
let limit = /^[0-9]{0,16}$/
let error = /^[a-zA-Z]$/



// function mouse(){
//     document.querySelector('#card').Style.transform = 'perspective(1000px) rotateY(-180deg)';
//     document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(0deg)';
//     console.log(hello);
// }
// function mouse1(){
//     document.querySelector('#card').Style.transform = 'perspective(1000px) rotateY(0deg)';
//     document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(180deg)';
//     console.log(hello);
// }

form.addEventListener('input', function(evt){
    evt.preventDefault();

    
    document.querySelector('#number').oninput = () =>{
        document.querySelector('.card__number').innerText = document.querySelector('#number').value;
    }
    
    document.querySelector('#cvc').onmouseenter = () =>{
        document.querySelector('#card').Style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(0deg)';
    }
    document.querySelector('#cvc').onmouseleave = () =>{
        document.querySelector('#card').Style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(180deg)';
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
        // let live = form[0].value
        // let car = regex.test(card['number'])
        // card['title'].innerHTML = 'Uzcard'
        document.querySelector('#logo').classList.add('contact__uzcard')
        document.querySelector('#logo').src = './Uzcard-logo.png'
        // card['number'].innerHTML = number1.value
    }

    // else if(document.querySelector('#cvc').onmouseenter){
    //     document.querySelector('#card').Style.transform = 'perspective(1000px) rotateY(-180deg)';
    //     document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(0deg)';
    // }
    // else if(document.querySelector('#cvc').onmouseleave){
    //     document.querySelector('#card').Style.transform = 'perspective(1000px) rotateY(0deg)';
    //     document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(180deg)';
    // }

   
    else if(regexXumo.test(number1.value)){
        // card['title'].innerHTML = 'Xumo'
        document.querySelector('#logo').classList.add('contact__humo')
        document.querySelector('#logo').src = './HUMO-logo.png'
        // card['number'].innerHTML = form[0].value
    }
   
    // else if(limit.test(form[0].value)){
    //     card['title'].innerHTML = 'Aniqlanmadi'
    //     // card['number'].innerHTML = form[0].value
    // }
    else{
        card['title'].innerHTML = ''
    }
    // else if(regexUz.test(form[0].value)){
    //     card['title'].innerHTML = 'Nomalum'
    // }


})


// document.querySelector('input[type="number"]').forEach(input =>{
//     input.oninput = () =>{
//         if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
//     };
// });

// document.querySelector('#number').oninput = () =>{
//     document.querySelector('.card__number').innerText = document.querySelector('#number').value;
// }

document.querySelector('#cvc').onmouseenter = () =>{
    document.querySelector('.contact__card').Style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('#cvc').onmouseleave = () =>{
    document.querySelector('.contact__card').Style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.contact__cardback').Style.transform = 'perspective(1000px) rotateY(180deg)';
}

// document.querySelector('#firstname').oninput = () =>{
//     document.querySelector('.firstname').innerText = document.querySelector('#firstname').value;
// }

// document.querySelector('#name').oninput = () =>{
//     document.querySelector('.name').innerText = document.querySelector('#name').value;
// }

// document.querySelector('#monthselect').oninput = () =>{
//     document.querySelector('.month').innerText = document.querySelector('#monthselect').value;
// }
// document.querySelector('#yearselect').oninput = () =>{
//     document.querySelector('.year').innerText = document.querySelector('#yearselect').value;
// }


// // document.querySelector('.card__name[0]')
// console.log(document.querySelector('.name'));