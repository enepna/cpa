(function(window) {
    var Blob = window.Blob,
        URL = window.URL,
        JSON = window.JSON,
        navigator = window.navigator,
        document = window.document,
        $ = window.$,
        i18next = window.i18next,
        i18nextChainedBackend = window.i18nextChainedBackend,
        i18nextBrowserLanguageDetector = window.i18nextBrowserLanguageDetector;
    var missingTranslations = {},
        missingTranslationHandler = function(lang, ns, key, fallbackValue) {
            lang = lang[0];
            if ((lang || 'en').split('-')[0] != 'en') {
                if (location.search.match('i18n=highlight')) {
                    $('[data-i18n^="' + key + '"]').addClass('missing-translation');
                }
                missingTranslations[lang] = missingTranslations[lang] || {};
                var pointer = missingTranslations[lang],
                    lastPart = ns;
                $.each(key.split('.'), function(index, part) {
                    pointer[lastPart] = pointer[lastPart] || {};
                    pointer = pointer[lastPart];
                    pointer[part] = pointer[part] || {};
                    lastPart = part;
                });
                pointer[lastPart] = fallbackValue;
            }
        };
    window.downloadMissingTranslations = function(lang, ns) {
        var data = JSON.stringify(missingTranslations[lang][ns], undefined, 4),
            filename = lang + '.' + ns + '.json';
        file = new Blob([data], {
            type: 'application/json'
        });
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(file, filename);
        } else {
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 0);
        }
    };
    if (location.search.match('i18n=highlight')) {
        $('<style type="text/css">' + '[data-i18n] {' + '    border: 1px dashed lime;' + '    background-color: rgba(127, 127, 127, 0.3);' + '}' + '.missing-translation {' + '    border: 1px dashed brown;' + '    background-color: rgba(255, 127, 127, 0.3);' + '}' + '</style>').appendTo('head');
    }
    var downloaded = false;
    var localize = window.localize = function() {
        var $document = $(document);
        if ($document.localize) {
            $document.localize();
            if (!downloaded && location.search.match('i18n=download')) {
                downloaded = true;
                downloadMissingTranslations(i18next.language.split('-')[0], 'translation');
            }
        }
    };
    var ns = ($('meta[name="i18n:ns"]').attr('content') || 'common').split(/[,;\s]/);
    i18next.use(i18nextChainedBackend).use(i18nextBrowserLanguageDetector).init({
        fallbackLng: false,
        load: 'languageOnly',
        lowerCaseLng: true,
        ns: ns,
        defaltNS: ns[0],
        fallbackNS: ns,
        whitelist: ($('meta[name="i18n:lng"]').attr('content') || 'en').split(/[,;\s]/),
        saveMissing: true,
        missingKeyHandler: missingTranslationHandler,
        joinArrays: '\n',
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            lookupQuerystring: 'lang',
            lookupCookie: 'lang',
            lookupLocalStorage: 'lang',
            caches: ['localStorage', 'cookie']
        },
        backend: {
            backends: [i18nextLocalStorageBackend, i18nextXHRBackend],
            backendOptions: [{
                prefix: 'i18n_',
                expirationTime: 60 * 1000,
            }, {
                loadPath: '/themes/{{ns}}/assets/translation/{{lng}}.json',
            }]
        },
    }, function() {
        jqueryI18next.init(i18next, $);
        localize();
        $('.lang-select').change(function() {
            i18next.changeLanguage($(this).val(), localize);
        }).val(i18next.language.split('-')[0]);
    });
})(window);