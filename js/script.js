"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleBtn = document.getElementById('toggleBtn');
    const currentTheme = localStorage.getItem('theme') || 'a-mode';
    body.classList.add(currentTheme);
    toggleBtn.textContent = currentTheme === 'a-mode' ? '🍓' : '🐳';

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('a-mode')) {
            body.classList.replace('a-mode', 'm-mode');
            toggleBtn.textContent = '🐳';
            localStorage.setItem('theme', 'm-mode');
        } else {
            body.classList.replace('m-mode', 'a-mode');
            toggleBtn.textContent = '🍓';
            localStorage.setItem('theme', 'a-mode');
        }
    });
});