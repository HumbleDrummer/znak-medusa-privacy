(() => {
  "use strict";

  const translations = {
    pl: {
      pageTitle: "Polityka prywatności — ZNAK MEDUSA Store 1.0",
      pageDescription: "Lokalny podgląd polityki ZNAK MEDUSA Store 1.0. Aplikacja nie przesyła zapisanych danych; kopie systemowe pozostają poza jej kontrolą.",
      skipLink: "Przejdź do treści",
      brandAria: "ZNAK MEDUSA — początek strony",
      languageLabel: "Wybór języka",
      tocLabel: "Spis treści",
      tocTitle: "Na tej stronie",
      tocData: "Jakie dane",
      tocPurpose: "Cel przetwarzania",
      tocStorage: "Przechowywanie i transmisja",
      tocIntegrity: "Integralność i poufność",
      tocRetention: "Retencja",
      tocDeletion: "Usuwanie danych",
      tocSharing: "Udostępnianie",
      tocContact: "Kontakt",
      tocNote: "Treść dla Store 1.0 — bez modułu Local AI Preview.",
      title: "Polityka prywatności",
      lead: "ZNAK MEDUSA Store 1.0 działa lokalnie na urządzeniu z Windows. Aplikacja może przechowywać tekst wpisany przez użytkownika, w tym dane osobowe podane dobrowolnie, ale nie zawiera funkcji przesyłania tych danych wydawcy ani stronom trzecim.",
      rightsLabel: "Właściciel praw",
      developedLabel: "Opracował",
      updatedLabel: "Ostatnia aktualizacja",
      updatedDate: "20 lipca 2026",
      summaryTitle: "W skrócie",
      summaryLocal: "Dane są przetwarzane i zapisywane lokalnie na urządzeniu.",
      summaryNetwork: "Store 1.0 nie ma kont, telemetrii, reklam, chmury ani funkcji AI.",
      summaryPersonal: "Dowolny tekst wpisany przez użytkownika może zawierać dane osobowe.",
      summaryDelete: "Funkcja usuwania wykonuje logiczny reset lokalnych danych aplikacji.",
      dataTitle: "Jakie dane przetwarza aplikacja",
      dataP1: "ZNAK MEDUSA Store 1.0 zapisuje na urządzeniu tekst następnego kroku wpisany przez użytkownika. Pole Human Review przyjmuje od 1 do 512 znaków. Lokalny checkpoint zawiera również poprzednią i bieżącą wartość tekstu, znaczniki czasu UTC, informacje o operacji i autoryzacji oraz skróty SHA-256 służące do kontroli integralności. Historia może zawierać wcześniejsze teksty także po zapisaniu nowszego kroku.",
      dataP2: "Aplikacja nie prosi o imię, adres e-mail, numer telefonu ani identyfikator konta. Ponieważ pole przyjmuje dowolny tekst, nie wpisuj danych osobowych, których nie chcesz przechowywać lokalnie.",
      purposeTitle: "Cel przetwarzania",
      purposeP1: "Dane służą wyłącznie do utrzymania lokalnego checkpointu orientacji, pokazania jednego następnego kroku, Recovery Card oraz historii integralności decyzji.",
      storageTitle: "Miejsce przechowywania i transmisja",
      storageP1: "Dane są zapisywane jako lokalne pliki JSON w formie jawnego tekstu w magazynie aplikacji Windows (ApplicationData.LocalFolder). Store 1.0 nie ma kont, logowania, telemetrii, reklam, usług chmurowych ani funkcji AI. Zweryfikowany pakiet nie deklaruje uprawnień sieciowych.",
      storageP2: "Aplikacja nie przesyła zapisanych tekstów do ZNAK MEDUSA ani do stron trzecich. Kopie tworzone przez system operacyjny, administratora urządzenia, narzędzia kopii zapasowej lub inne oprogramowanie pozostają poza kontrolą aplikacji.",
      integrityTitle: "Integralność a poufność",
      integrityP1: "Łańcuch SHA-256 służy do wykrywania niespójności lokalnego stanu. Nie jest szyfrowaniem i nie chroni poufności treści. Aplikacja nie szyfruje treści checkpointu.",
      retentionTitle: "Retencja",
      retentionP1: "Aplikacja utrzymuje dwa rotacyjne checkpointy i historię: jeden rekord początkowy oraz maksymalnie 128 zatwierdzonych aktualizacji. Dane pozostają lokalnie do czasu użycia funkcji usuwania, odinstalowania aplikacji albo działania systemu operacyjnego lub administratora urządzenia.",
      deletionTitle: "Usuwanie danych",
      deletionP1: "Funkcja „Usuń wszystkie dane lokalne” wymaga potwierdzenia. Czyści lokalny magazyn aplikacji i tworzy nowy pusty checkpoint. Jest to logiczny reset danych aplikacji; funkcja nie deklaruje fizycznego wymazania sektorów nośnika ani kopii pozostających poza kontrolą aplikacji.",
      sharingTitle: "Udostępnianie danych",
      sharingP1: "Store 1.0 nie udostępnia danych wydawcy, reklamodawcom, dostawcom analityki, dostawcom AI ani innym użytkownikom. Aplikacja nie zawiera funkcji komunikacji społecznościowej ani publikowania treści.",
      contactTitle: "Kontakt",
      contactP1: "Publiczny kanał kontaktowy został wskazany przez właściciela i jest pokazany poniżej. Ten lokalny podgląd nie jest jeszcze publicznym adresem polityki prywatności.",
      pendingLabel: "Status przygotowania do publikacji",
      contactUrlStatus: "Stabilny publiczny URL HTTPS",
      contactChannelStatus: "Publiczny kanał kontaktowy",
      contactReviewStatus: "Przegląd właścicielski",
      footerScope: "ZNAK MEDUSA Store 1.0 · lokalny podgląd · bez publikacji"
    },
    en: {
      pageTitle: "Privacy Policy — ZNAK MEDUSA Store 1.0",
      pageDescription: "Local preview of the ZNAK MEDUSA Store 1.0 policy. The app does not transmit stored data; system copies remain outside its control.",
      skipLink: "Skip to content",
      brandAria: "ZNAK MEDUSA — start of page",
      languageLabel: "Language selection",
      tocLabel: "Table of contents",
      tocTitle: "On this page",
      tocData: "Data processed",
      tocPurpose: "Purpose",
      tocStorage: "Storage and transmission",
      tocIntegrity: "Integrity and confidentiality",
      tocRetention: "Retention",
      tocDeletion: "Data deletion",
      tocSharing: "Data sharing",
      tocContact: "Contact",
      tocNote: "Content for Store 1.0 — excludes the Local AI Preview module.",
      title: "Privacy Policy",
      lead: "ZNAK MEDUSA Store 1.0 operates locally on a Windows device. The app may store text entered by the user, including personal information provided voluntarily, but it has no feature for transmitting that data to the publisher or third parties.",
      rightsLabel: "Rights holder",
      developedLabel: "Developed by",
      updatedLabel: "Last updated",
      updatedDate: "20 July 2026",
      summaryTitle: "At a glance",
      summaryLocal: "Data is processed and stored locally on the device.",
      summaryNetwork: "Store 1.0 has no accounts, telemetry, advertising, cloud services, or AI features.",
      summaryPersonal: "Free-form text entered by the user may contain personal information.",
      summaryDelete: "The deletion function performs a logical reset of the app's local data.",
      dataTitle: "What data the app processes",
      dataP1: "ZNAK MEDUSA Store 1.0 stores the next-step text entered by the user on the device. The Human Review field accepts between 1 and 512 characters. The local checkpoint also contains the previous and current text values, UTC timestamps, operation and authorization information, and SHA-256 hashes used for integrity checking. The history may retain earlier text after a newer step is saved.",
      dataP2: "The app does not ask for a name, email address, phone number, or account identifier. Because the field accepts free-form text, do not enter personal information that you do not want stored locally.",
      purposeTitle: "Purpose of processing",
      purposeP1: "The data is used only to maintain a local orientation checkpoint, show one next step, provide a Recovery Card, and preserve a decision-integrity history.",
      storageTitle: "Storage location and transmission",
      storageP1: "Data is stored as local plaintext JSON files in the Windows app storage area (ApplicationData.LocalFolder). Store 1.0 has no accounts, sign-in, telemetry, advertising, cloud services, or AI features. The verified package declares no network capabilities.",
      storageP2: "The app does not transmit stored text to ZNAK MEDUSA or third parties. Copies created by the operating system, a device administrator, backup tools, or other software remain outside the app's control.",
      integrityTitle: "Integrity versus confidentiality",
      integrityP1: "The SHA-256 chain is used to detect inconsistencies in local state. It is not encryption and does not protect the confidentiality of the content. The app does not encrypt checkpoint content.",
      retentionTitle: "Retention",
      retentionP1: "The app maintains two rotating checkpoints and a history consisting of one initial record and up to 128 approved updates. Data remains local until the deletion function is used, the app is uninstalled, or the operating system or device administrator takes action.",
      deletionTitle: "Data deletion",
      deletionP1: "The “Delete all local data” function requires confirmation. It clears the app's local storage and creates a new empty checkpoint. This is a logical reset of app data; the function does not claim to physically erase storage sectors or copies outside the app's control.",
      sharingTitle: "Data sharing",
      sharingP1: "Store 1.0 does not share data with the publisher, advertisers, analytics providers, AI providers, or other users. The app has no social communication or content-publishing features.",
      contactTitle: "Contact",
      contactP1: "A public contact channel has been provided by the owner and is shown below. This local preview is not yet a public privacy-policy address.",
      pendingLabel: "Publication readiness status",
      contactUrlStatus: "Stable public HTTPS URL",
      contactChannelStatus: "Public contact channel",
      contactReviewStatus: "Owner review",
      footerScope: "ZNAK MEDUSA Store 1.0 · local preview · not published"
    }
  };

  const description = document.querySelector('meta[name="description"]');
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const translatableNodes = [...document.querySelectorAll("[data-i18n]")];
  const ariaNodes = [...document.querySelectorAll("[data-i18n-aria]")];
  const mobileToc = document.querySelector(".toc-mobile");

  function setLanguage(language) {
    const copy = translations[language];
    if (!copy) return;

    document.documentElement.lang = language;
    document.title = copy.pageTitle;
    description.setAttribute("content", copy.pageDescription);

    translatableNodes.forEach((node) => {
      const key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(copy, key)) {
        node.textContent = copy[key];
      }
    });

    ariaNodes.forEach((node) => {
      const key = node.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(copy, key)) {
        node.setAttribute("aria-label", copy[key]);
      }
    });

    languageButtons.forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  document.querySelectorAll('.toc-mobile a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      const target = document.querySelector(hash);
      const targetHeading = target?.querySelector("h2");
      if (!target || !targetHeading) return;

      event.preventDefault();
      if (mobileToc) mobileToc.open = false;
      targetHeading.setAttribute("tabindex", "-1");
      target.scrollIntoView({ block: "start" });
      targetHeading.focus({ preventScroll: true });
      window.history.pushState(null, "", hash);
      setCurrentSection(target.id);
    });
  });

  const sections = [...document.querySelectorAll(".policy-section[id]")];
  const tocLinks = [
    ...document.querySelectorAll('.toc a[href^="#"], .toc-mobile a[href^="#"]'),
  ];

  function setCurrentSection(sectionId) {
    tocLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${sectionId}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setCurrentSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -66% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
  } else if (sections[0]) {
    setCurrentSection(sections[0].id);
  }

  setLanguage("pl");
})();
