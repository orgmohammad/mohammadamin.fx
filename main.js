document.addEventListener("DOMContentLoaded", async function () {

    // بارگذاری JSON ترجمه‌ها
    const resources = {
        fa: { translation: await fetchJSON('locales/fa.json') },
        en: { translation: await fetchJSON('locales/en.json') },
        ar: { translation: await fetchJSON('locales/ar.json') }
    };

    // مقداردهی i18next
    await i18next.init({
        lng: 'fa', // زبان پیش‌فرض
        debug: true,
        resources: resources
    });

    // بروزرسانی محتوا
    updateContent();

    // سوئیچ زبان
    const switcher = document.getElementById('languageSwitcher');
    switcher.addEventListener('change', function () {
        i18next.changeLanguage(this.value, updateContent);
    });

    // تابع بروزرسانی متن‌ها
    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = i18next.t(key);
        });
    }

    // تابع بارگذاری JSON با fetch
    async function fetchJSON(url) {
        const response = await fetch(url);
        return await response.json();
    }

});
