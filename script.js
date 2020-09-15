const btn = document.getElementById('luckyBtn');
const lucky = document.getElementById('lucky');

btn.addEventListener('mouseover', function() {
    lucky.textContent = pickWord();
});

btn.addEventListener('mouseout', function() {
    lucky.textContent = 'Lucky';
});

function pickWord() {
    const rand = Math.floor(Math.random() * 8);
    const words = ['Doodly', 'Playful', 'Artistic', 'Hungry', 'Puzzled', 'Trendy', 'Stellar', 'Wonderful'];
    
    return words[rand];
}