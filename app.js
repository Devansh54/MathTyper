const form = document.querySelector('.input');
const output = document.querySelector('.formatted');
const copyButton = document.querySelector('.copybtn');
form.rawtext.addEventListener('keyup', e => {
    let text = e.target.value;
    //Check for square root
    if (text.includes('.r')){
        const pieces = text.split('.r');
        text = pieces.join('√');
    }
    //Check for cube root
    if (text.includes('.3r')){
        const pieces = text.split('.3r');
        text = pieces.join('∛');
    }
    //Check for root 4
    if (text.includes('.4r')){
        const pieces = text.split('.4r');
        text = pieces.join('∜');
    }
    //Check for subtraction
    if (text.includes('-')){
        const pieces = text.split('-');
        text = pieces.join('−');
    }
    //Check for multiplication
    if (text.includes('*')){
        const pieces = text.split('*');
        text = pieces.join('∗');
    }
    //Check for division
    if (text.includes('./')){
        const pieces = text.split('./');
        text = pieces.join('÷');
    }
    //Check for congruency
    if (text.includes('..c..')){
        const pieces = text.split('..c..');
        text = pieces.join('≅');
    }
    //Check for triangles
    if (text.includes('tri ')){
        const pieces = text.split('tri ');
        text = pieces.join('∆');
    }

    //Finally, output formatted string
    output.edited.value = text;
});

copyButton.addEventListener('click', () => {
    if (output.edited.value === '') return;
    output.edited.select();
    output.edited.setSelectionRange(0, 99999);
    document.execCommand('copy');
    //styling
    copyButton.classList.remove('btn-primary');
    copyButton.classList.add('btn-success');
    setTimeout(() => {
        copyButton.classList.remove('btn-success');
        copyButton.classList.add('btn-primary');
    }, 500);
})