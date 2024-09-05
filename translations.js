async function loadTranslations(language) {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const translations = await response.json();
        const langTranslations = translations[language];

        if (!langTranslations) {
            throw new Error('Language not found in translations');
        }

        applyTranslations(langTranslations);
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[key];
            } else {
                element.innerText = translations[key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('language') || 'uk';
    loadTranslations(storedLanguage);

    document.querySelectorAll('[data-lang]').forEach(langElement => {
        langElement.addEventListener('click', (event) => {
            const selectedLang = event.target.getAttribute('data-lang');
            localStorage.setItem('language', selectedLang);
            loadTranslations(selectedLang);
        });
    });
});
