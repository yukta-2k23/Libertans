const text = "LET'S GET STARTED •";
const circularText = document.getElementById('circularText');
const radius = 100; // Radius of the circle
const textArray = text.split('');
const angleStep = 360 / textArray.length; // Angle between each character

textArray.forEach((char, i) => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.textContent = char;

    const angle = i * angleStep; // Compute the angle for each letter
    span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${angle * -1}deg)`;

    circularText.appendChild(span);
});
