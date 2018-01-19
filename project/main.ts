const myFunc = () => {
    const textIn: HTMLInputElement = <HTMLInputElement>document.getElementById('textIn');
    const textOut: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('textOut');
    textIn.onkeyup = () => {
        let text = textIn.value;
        textOut.innerText = text;
    }
};
setTimeout(myFunc, 0);