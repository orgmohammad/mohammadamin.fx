document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: 'fa',
        debug: true,
        resources: {
            fa: { translation: fetchTranslation('locales/fa.json') },
            en: { translation: fetchTranslation('locales/en.json') },
            ar: { translation: fetchTranslation('locales/ar.json') }
        }
    }, function(err, t) {
        updateContent();
    });

    const switcher = document.getElementById('languageSwitcher');
    switcher.addEventListener('change', function () {
        i18next.changeLanguage(this.value, updateContent);
    });

    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = i18next.t(key);
        });
    }

    function fetchTranslation(url) {
        let result;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function () {
            if (xhr.status === 200) {
                result = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
        return result;
    }
});
