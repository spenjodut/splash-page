const { body } = document;

function changeBackground(number) {
    // Check if custom background already showing
    let previousBackground = body.className ? body.className : null;
    // Reset CSS class for body
    body.className = '';
    // Switch to desired background or switch back to default if same background selected twice
    return (previousBackground === `background-${number}` ? false : body.classList.add(`background-${number}`));
}