"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Check the saved theme from local storage and apply it
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(currentTheme);
    toggleBtn.textContent = currentTheme === 'light-mode' ? '🌙' : '☀️';

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            toggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light-mode');
        }
    });
});