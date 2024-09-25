document.addEventListener('DOMContentLoaded', () => {
    const previewBox = document.getElementById('preview-box');
    const cssOutput = document.getElementById('css-output');
    const copyButton = document.getElementById('copy-css');
    const colorPicker = document.getElementById('color-picker');
    const unitSelector = document.getElementById('unit');

    const inputs = {
        topLeft: document.getElementById('top-left'),
        topLeft2: document.getElementById('top-left-2'),
        topRight: document.getElementById('top-right'),
        topRight2: document.getElementById('top-right-2'),
        bottomRight: document.getElementById('bottom-right'),
        bottomRight2: document.getElementById('bottom-right-2'),
        bottomLeft: document.getElementById('bottom-left'),
        bottomLeft2: document.getElementById('bottom-left-2')
    };


    function updateBorderRadius() {
        const unit = unitSelector.value;
        const topLeft = inputs.topLeft.value || '0';
        const topLeft2 = inputs.topLeft2.value || '0';
        const topRight = inputs.topRight.value || '0';
        const topRight2 = inputs.topRight2.value || '0';
        const bottomRight = inputs.bottomRight.value || '0';
        const bottomRight2 = inputs.bottomRight2.value || '0';
        const bottomLeft = inputs.bottomLeft.value || '0';
        const bottomLeft2 = inputs.bottomLeft2.value || '0';

        const borderRadius = `${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit} / ${topLeft2}${unit} ${topRight2}${unit} ${bottomRight2}${unit} ${bottomLeft2}${unit}`;
        previewBox.style.borderRadius = borderRadius;
        cssOutput.textContent = `border-radius: ${borderRadius};`;
    }


    Object.values(inputs).forEach(input => {
        input.addEventListener('input', updateBorderRadius);
    });


    unitSelector.addEventListener('change', updateBorderRadius);

    
    colorPicker.addEventListener('input', () => {
        previewBox.style.backgroundColor = colorPicker.value;
    });

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(cssOutput.textContent).then(() => {
            alert('CSS copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});
