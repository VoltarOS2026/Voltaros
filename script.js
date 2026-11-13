
document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            navHome:"Home",navProducts:"Products",navFeatures:"Features",navRelease:"Release",navDownloads:"Downloads",navSupport:"Support",
            heroEyebrow:"AN INDEPENDENT OPERATING SYSTEM",heroTitle:"A new way to experience your PC.",heroText:"Meet VoltarOS: a new operating system designed around performance, creativity, gaming and productivity.",heroButton1:"Explore VoltarOS",heroButton2:"Discover the Release",
            productsTitle:"One vision. Three editions.",productsText:"Different experiences, powered by the VoltarOS core.",allInOneText:"The complete VoltarOS experience for everyday computing.",gamingText:"An edition focused on gaming performance and entertainment.",educationText:"An environment for learning and educational tools.",
            featuresTitle:"Meet the Voltar experience.",featuresText:"A connected ecosystem designed to work together.",desktopText:"A modern desktop with a floating dock and widgets.",hubText:"Your central place for apps, search and files.",controlText:"Quick access to system settings.",storeText:"Discover and manage applications.",cloudText:"Access your files through Voltar services.",connectText:"Connect your smartphone and PC.",updateText:"Manage system updates and security fixes.",aiText:"An intelligent assistant for Voltar.",browserText:"A browser designed for VoltarOS.",
            releaseTitle:"VoltarOS is coming in Early 2027.",releaseText:"Get ready for the first public VoltarOS experience.",dateDisclaimer:"Planned dates. Subject to change.",
            downloadsTitle:"Downloads are coming.",downloadsText:"Public downloads will be announced when ready.",noIso:"No public ISO image is available yet.",
            supportTitle:"Need support?",supportText:"Questions or feedback? Contact the VoltarOS project.",footerNote:"VoltarOS is an independent project."
        },
        de: {
            navHome:"Startseite",navProducts:"Produkte",navFeatures:"Funktionen",navRelease:"Veröffentlichung",navDownloads:"Downloads",navSupport:"Support",
            heroEyebrow:"EIN UNABHÄNGIGES BETRIEBSSYSTEM",heroTitle:"Eine neue Art, deinen PC zu erleben.",heroText:"Lerne VoltarOS kennen: ein neues Betriebssystem für Leistung, Kreativität, Gaming und Produktivität.",heroButton1:"VoltarOS entdecken",heroButton2:"Veröffentlichung ansehen",
            productsTitle:"Eine Vision. Drei Editionen.",productsText:"Unterschiedliche Erlebnisse, basierend auf dem VoltarOS-Kern.",allInOneText:"Das vollständige VoltarOS-Erlebnis für den Alltag.",gamingText:"Eine Edition mit Fokus auf Gaming und Unterhaltung.",educationText:"Eine Umgebung für Lernen und Bildungsprogramme.",
            featuresTitle:"Entdecke das Voltar-Erlebnis.",featuresText:"Ein verbundenes Ökosystem, dessen Bestandteile zusammenarbeiten.",desktopText:"Ein moderner Desktop mit schwebendem Dock und Widgets.",hubText:"Dein zentraler Ort für Apps, Suche und Dateien.",controlText:"Schneller Zugriff auf Systemeinstellungen.",storeText:"Entdecke und verwalte Anwendungen.",cloudText:"Greife über Voltar-Dienste auf deine Dateien zu.",connectText:"Verbinde dein Smartphone mit deinem PC.",updateText:"Verwalte Updates und Sicherheitskorrekturen.",aiText:"Ein intelligenter Assistent für Voltar.",browserText:"Ein Browser für VoltarOS.",
            releaseTitle:"VoltarOS erscheint voraussichtlich Anfang 2027.",releaseText:"Mach dich auf das erste öffentliche VoltarOS-Erlebnis bereit.",dateDisclaimer:"Geplante Termine. Änderungen möglich.",
            downloadsTitle:"Downloads kommen bald.",downloadsText:"Öffentliche Downloads werden angekündigt, sobald sie bereit sind.",noIso:"Es ist noch kein öffentliches ISO-Image verfügbar.",
            supportTitle:"Brauchst du Hilfe?",supportText:"Fragen oder Feedback? Kontaktiere das VoltarOS-Projekt.",footerNote:"VoltarOS ist ein unabhängiges Projekt."
        },
        fr: {
            navHome:"Accueil",navProducts:"Produits",navFeatures:"Fonctionnalités",navRelease:"Sortie",navDownloads:"Téléchargements",navSupport:"Assistance",
            heroEyebrow:"UN SYSTÈME D'EXPLOITATION INDÉPENDANT",heroTitle:"Une nouvelle façon de découvrir votre PC.",heroText:"Découvrez VoltarOS : un système conçu pour les performances, la créativité, les jeux et la productivité.",heroButton1:"Découvrir VoltarOS",heroButton2:"Voir la sortie",
            productsTitle:"Une vision. Trois éditions.",productsText:"Différentes expériences basées sur VoltarOS.",allInOneText:"L'expérience complète pour une utilisation quotidienne.",gamingText:"Une édition axée sur les jeux et le divertissement.",educationText:"Un environnement dédié à l'apprentissage.",
            featuresTitle:"Découvrez l'expérience Voltar.",featuresText:"Un écosystème connecté conçu pour fonctionner ensemble.",desktopText:"Un bureau moderne avec dock flottant et widgets.",hubText:"Votre espace central pour les applications et fichiers.",controlText:"Accès rapide aux paramètres système.",storeText:"Découvrez et gérez vos applications.",cloudText:"Accédez à vos fichiers via les services Voltar.",connectText:"Connectez votre smartphone et votre PC.",updateText:"Gérez les mises à jour et la sécurité.",aiText:"Un assistant intelligent pour Voltar.",browserText:"Un navigateur conçu pour VoltarOS.",
            releaseTitle:"VoltarOS arrive début 2027.",releaseText:"Préparez-vous à découvrir la première version publique.",dateDisclaimer:"Dates prévisionnelles, susceptibles de changer.",
            downloadsTitle:"Les téléchargements arrivent bientôt.",downloadsText:"Les téléchargements seront annoncés lorsque le système sera prêt.",noIso:"Aucune image ISO publique n'est encore disponible.",
            supportTitle:"Besoin d'aide ?",supportText:"Des questions ? Contactez le projet VoltarOS.",footerNote:"VoltarOS est un projet indépendant."
        },
        es: {
            navHome:"Inicio",navProducts:"Productos",navFeatures:"Funciones",navRelease:"Lanzamiento",navDownloads:"Descargas",navSupport:"Soporte",
            heroEyebrow:"UN SISTEMA OPERATIVO INDEPENDIENTE",heroTitle:"Una nueva forma de experimentar tu PC.",heroText:"Descubre VoltarOS: un sistema operativo diseñado para el rendimiento, la creatividad, los videojuegos y la productividad.",heroButton1:"Descubrir VoltarOS",heroButton2:"Ver lanzamiento",
            productsTitle:"Una visión. Tres ediciones.",productsText:"Experiencias diferentes basadas en VoltarOS.",allInOneText:"La experiencia completa de VoltarOS para el uso diario.",gamingText:"Una edición centrada en los videojuegos y el entretenimiento.",educationText:"Un entorno para el aprendizaje y la educación.",
            featuresTitle:"Descubre la experiencia Voltar.",featuresText:"Un ecosistema conectado diseñado para trabajar en conjunto.",desktopText:"Un escritorio moderno con dock flotante y widgets.",hubText:"Tu centro para aplicaciones y archivos.",controlText:"Acceso rápido a los ajustes del sistema.",storeText:"Descubre y administra aplicaciones.",cloudText:"Accede a tus archivos mediante Voltar.",connectText:"Conecta tu smartphone y tu PC.",updateText:"Administra actualizaciones y seguridad.",aiText:"Un asistente inteligente para Voltar.",browserText:"Un navegador diseñado para VoltarOS.",
            releaseTitle:"VoltarOS llegará a principios de 2027.",releaseText:"Prepárate para la primera versión pública.",dateDisclaimer:"Fechas previstas, sujetas a cambios.",
            downloadsTitle:"Las descargas llegarán pronto.",downloadsText:"Las descargas se anunciarán cuando el sistema esté listo.",noIso:"Todavía no hay una imagen ISO pública.",
            supportTitle:"¿Necesitas ayuda?",supportText:"¿Preguntas o comentarios? Contacta con VoltarOS.",footerNote:"VoltarOS es un proyecto independiente."
        },
        it: {
            navHome:"Home",navProducts:"Prodotti",navFeatures:"Funzionalità",navRelease:"Uscita",navDownloads:"Download",navSupport:"Supporto",
            heroEyebrow:"UN SISTEMA OPERATIVO INDIPENDENTE",heroTitle:"Un nuovo modo di vivere il tuo PC.",heroText:"Scopri VoltarOS: un sistema operativo progettato per prestazioni, creatività, gaming e produttività.",heroButton1:"Scopri VoltarOS",heroButton2:"Scopri il lancio",
            productsTitle:"Una visione. Tre edizioni.",productsText:"Esperienze diverse basate su VoltarOS.",allInOneText:"L'esperienza completa per l'uso quotidiano.",gamingText:"Un'edizione dedicata al gaming e all'intrattenimento.",educationText:"Un ambiente dedicato all'apprendimento.",
            featuresTitle:"Scopri l'esperienza Voltar.",featuresText:"Un ecosistema connesso progettato per funzionare insieme.",desktopText:"Un desktop moderno con dock flottante e widget.",hubText:"Il tuo centro per app e file.",controlText:"Accesso rapido alle impostazioni.",storeText:"Scopri e gestisci le applicazioni.",cloudText:"Accedi ai tuoi file tramite Voltar.",connectText:"Collega smartphone e PC.",updateText:"Gestisci aggiornamenti e sicurezza.",aiText:"Un assistente intelligente per Voltar.",browserText:"Un browser progettato per VoltarOS.",
            releaseTitle:"VoltarOS arriverà all'inizio del 2027.",releaseText:"Preparati alla prima versione pubblica.",dateDisclaimer:"Date previste, soggette a modifiche.",
            downloadsTitle:"I download arriveranno presto.",downloadsText:"I download saranno annunciati quando il sistema sarà pronto.",noIso:"Non è ancora disponibile un'immagine ISO pubblica.",
            supportTitle:"Hai bisogno di supporto?",supportText:"Domande o feedback? Contatta il progetto VoltarOS.",footerNote:"VoltarOS è un progetto indipendente."
        },
        nl: {
            navHome:"Home",navProducts:"Producten",navFeatures:"Functies",navRelease:"Release",navDownloads:"Downloads",navSupport:"Ondersteuning",
            heroEyebrow:"EEN ONAFHANKELIJK BESTURINGSSYSTEEM",heroTitle:"Een nieuwe manier om je pc te ervaren.",heroText:"Ontdek VoltarOS: een besturingssysteem voor prestaties, creativiteit, gaming en productiviteit.",heroButton1:"Ontdek VoltarOS",heroButton2:"Bekijk de release",
            productsTitle:"Eén visie. Drie edities.",productsText:"Verschillende ervaringen op basis van VoltarOS.",allInOneText:"De complete VoltarOS-ervaring voor dagelijks gebruik.",gamingText:"Een editie gericht op gaming en entertainment.",educationText:"Een omgeving voor leren en onderwijs.",
            featuresTitle:"Ontdek de Voltar-ervaring.",featuresText:"Een verbonden ecosysteem dat samenwerkt.",desktopText:"Een moderne desktop met zwevend dock en widgets.",hubText:"Je centrale plek voor apps en bestanden.",controlText:"Snelle toegang tot systeeminstellingen.",storeText:"Ontdek en beheer applicaties.",cloudText:"Toegang tot je bestanden via Voltar.",connectText:"Verbind je smartphone en pc.",updateText:"Beheer updates en beveiliging.",aiText:"Een intelligente assistent voor Voltar.",browserText:"Een browser voor VoltarOS.",
            releaseTitle:"VoltarOS verschijnt begin 2027.",releaseText:"Bereid je voor op de eerste openbare versie.",dateDisclaimer:"Geplande datums kunnen veranderen.",
            downloadsTitle:"Downloads komen eraan.",downloadsText:"Downloads worden aangekondigd zodra het systeem klaar is.",noIso:"Er is nog geen openbare ISO-image beschikbaar.",
            supportTitle:"Hulp nodig?",supportText:"Vragen of feedback? Neem contact op met VoltarOS.",footerNote:"VoltarOS is een onafhankelijk project."
        },
        pl: {
            navHome:"Strona główna",navProducts:"Produkty",navFeatures:"Funkcje",navRelease:"Premiera",navDownloads:"Pobieranie",navSupport:"Pomoc",
            heroEyebrow:"NIEZALEŻNY SYSTEM OPERACYJNY",heroTitle:"Nowy sposób korzystania z komputera.",heroText:"Poznaj VoltarOS: system zaprojektowany z myślą o wydajności, kreatywności, grach i produktywności.",heroButton1:"Poznaj VoltarOS",heroButton2:"Zobacz premierę",
            productsTitle:"Jedna wizja. Trzy edycje.",productsText:"Różne doświadczenia oparte na VoltarOS.",allInOneText:"Pełne doświadczenie VoltarOS na co dzień.",gamingText:"Edycja skupiona na grach i rozrywce.",educationText:"Środowisko do nauki i edukacji.",
            featuresTitle:"Poznaj doświadczenie Voltar.",featuresText:"Połączony ekosystem zaprojektowany do współpracy.",desktopText:"Nowoczesny pulpit z pływającym dokiem i widżetami.",hubText:"Centralne miejsce aplikacji i plików.",controlText:"Szybki dostęp do ustawień systemu.",storeText:"Odkrywaj i zarządzaj aplikacjami.",cloudText:"Dostęp do plików przez usługi Voltar.",connectText:"Połącz smartfon z komputerem.",updateText:"Zarządzaj aktualizacjami i bezpieczeństwem.",aiText:"Inteligentny asystent Voltar.",browserText:"Przeglądarka dla VoltarOS.",
            releaseTitle:"VoltarOS pojawi się na początku 2027 roku.",releaseText:"Przygotuj się na pierwsze publiczne wydanie.",dateDisclaimer:"Planowane terminy mogą ulec zmianie.",
            downloadsTitle:"Pobieranie już wkrótce.",downloadsText:"Pliki zostaną udostępnione, gdy system będzie gotowy.",noIso:"Publiczny obraz ISO nie jest jeszcze dostępny.",
            supportTitle:"Potrzebujesz pomocy?",supportText:"Pytania lub uwagi? Skontaktuj się z VoltarOS.",footerNote:"VoltarOS to niezależny projekt."
        },
        tr: {
            navHome:"Ana Sayfa",navProducts:"Ürünler",navFeatures:"Özellikler",navRelease:"Yayın",navDownloads:"İndirmeler",navSupport:"Destek",
            heroEyebrow:"BAĞIMSIZ BİR İŞLETİM SİSTEMİ",heroTitle:"Bilgisayarını deneyimlemenin yeni bir yolu.",heroText:"VoltarOS ile tanışın: performans, yaratıcılık, oyun ve üretkenlik için tasarlanmış yeni bir işletim sistemi.",heroButton1:"VoltarOS'u keşfet",heroButton2:"Yayın bilgilerini gör",
            productsTitle:"Tek bir vizyon. Üç sürüm.",productsText:"VoltarOS çekirdeğiyle güçlendirilen farklı deneyimler.",allInOneText:"Günlük kullanım için eksiksiz VoltarOS deneyimi.",gamingText:"Oyun ve eğlenceye odaklanan sürüm.",educationText:"Öğrenme ve eğitim için özel ortam.",
            featuresTitle:"Voltar deneyimini keşfet.",featuresText:"Birlikte çalışmak üzere tasarlanmış bağlantılı ekosistem.",desktopText:"Yüzen dock ve widget'lara sahip modern masaüstü.",hubText:"Uygulamalar ve dosyalar için merkezi alan.",controlText:"Sistem ayarlarına hızlı erişim.",storeText:"Uygulamaları keşfet ve yönet.",cloudText:"Voltar hizmetleriyle dosyalarına eriş.",connectText:"Akıllı telefonunu bilgisayarına bağla.",updateText:"Güncellemeleri ve güvenliği yönet.",aiText:"Voltar için akıllı asistan.",browserText:"VoltarOS için tasarlanmış tarayıcı.",
            releaseTitle:"VoltarOS 2027 başlarında geliyor.",releaseText:"İlk halka açık sürüme hazır olun.",dateDisclaimer:"Planlanan tarihler değişebilir.",
            downloadsTitle:"İndirmeler yakında geliyor.",downloadsText:"Sistem hazır olduğunda indirmeler duyurulacak.",noIso:"Henüz herkese açık ISO görüntüsü yok.",
            supportTitle:"Yardıma mı ihtiyacınız var?",supportText:"Sorularınız veya geri bildirimleriniz için VoltarOS ile iletişime geçin.",footerNote:"VoltarOS bağımsız bir projedir."
        },
        pt: {
            navHome:"Início",navProducts:"Produtos",navFeatures:"Funcionalidades",navRelease:"Lançamento",navDownloads:"Transferências",navSupport:"Suporte",
            heroEyebrow:"UM SISTEMA OPERATIVO INDEPENDENTE",heroTitle:"Uma nova forma de experimentar o seu PC.",heroText:"Conheça o VoltarOS: um sistema operativo concebido para desempenho, criatividade, jogos e produtividade.",heroButton1:"Explorar VoltarOS",heroButton2:"Descobrir o lançamento",
            productsTitle:"Uma visão. Três edições.",productsText:"Experiências diferentes com base no VoltarOS.",allInOneText:"A experiência completa para utilização diária.",gamingText:"Uma edição focada em jogos e entretenimento.",educationText:"Um ambiente dedicado à aprendizagem.",
            featuresTitle:"Conheça a experiência Voltar.",featuresText:"Um ecossistema conectado concebido para funcionar em conjunto.",desktopText:"Um ambiente moderno com dock flutuante e widgets.",hubText:"O seu espaço central para aplicações e ficheiros.",controlText:"Acesso rápido às definições do sistema.",storeText:"Descubra e gira aplicações.",cloudText:"Aceda aos seus ficheiros através da Voltar.",connectText:"Ligue o smartphone ao PC.",updateText:"Gira atualizações e segurança.",aiText:"Um assistente inteligente para Voltar.",browserText:"Um navegador concebido para VoltarOS.",
            releaseTitle:"O VoltarOS chega no início de 2027.",releaseText:"Prepare-se para a primeira versão pública.",dateDisclaimer:"Datas previstas, sujeitas a alterações.",
            downloadsTitle:"As transferências estão a chegar.",downloadsText:"As transferências serão anunciadas quando o sistema estiver pronto.",noIso:"Ainda não existe uma imagem ISO pública.",
            supportTitle:"Precisa de ajuda?",supportText:"Dúvidas ou comentários? Contacte o projeto VoltarOS.",footerNote:"VoltarOS é um projeto independente."
        },
        zh: {
            navHome:"首页",navProducts:"产品",navFeatures:"功能",navRelease:"发布",navDownloads:"下载",navSupport:"支持",
            heroEyebrow:"独立操作系统",heroTitle:"体验 PC 的全新方式。",heroText:"认识 VoltarOS：一款专为性能、创造力、游戏和生产力打造的新操作系统。",heroButton1:"探索 VoltarOS",heroButton2:"了解发布日期",
            productsTitle:"一个愿景。三个版本。",productsText:"由 VoltarOS 核心驱动的不同体验。",allInOneText:"适用于日常使用的完整 VoltarOS 体验。",gamingText:"专注于游戏和娱乐的版本。",educationText:"专为学习和教育打造的环境。",
            featuresTitle:"体验 Voltar 的世界。",featuresText:"专为协同工作而设计的互联生态系统。",desktopText:"配备悬浮 Dock 和小组件的现代桌面。",hubText:"集中管理应用和文件。",controlText:"快速访问系统设置。",storeText:"发现和管理应用程序。",cloudText:"通过 Voltar 服务访问文件。",connectText:"连接智能手机和 PC。",updateText:"管理系统更新和安全修复。",aiText:"Voltar 智能助手。",browserText:"专为 VoltarOS 设计的浏览器。",
            releaseTitle:"VoltarOS 预计于 2027 年初推出。",releaseText:"准备体验首个公开版本。",dateDisclaimer:"计划日期可能会调整。",
            downloadsTitle:"下载即将推出。",downloadsText:"系统准备就绪后将公布下载。",noIso:"目前尚无公开 ISO 镜像。",
            supportTitle:"需要帮助吗？",supportText:"有问题或建议？欢迎联系 VoltarOS。",footerNote:"VoltarOS 是一个独立项目。"
        }
    };

    const selector = document.getElementById("language");

    function applyLanguage(lang) {
        const dictionary = translations[lang] || translations.en;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                element.textContent = dictionary[key];
            }
        });

        document.documentElement.lang = lang;

        if (selector) selector.value = lang;

        try {
            localStorage.setItem("voltaros-language", lang);
        } catch (error) {
            console.warn("Could not save language preference.");
        }
    }

    if (selector) {
        let savedLanguage = "en";

        try {
            savedLanguage = localStorage.getItem("voltaros-language") || "en";
        } catch (error) {
            console.warn("Could not load saved language.");
        }

        if (!translations[savedLanguage]) savedLanguage = "en";

        applyLanguage(savedLanguage);

        selector.addEventListener("change", event => {
            applyLanguage(event.target.value);
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Scroll animations
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(".product-card, .feature, .section-heading").forEach(element => {
            element.classList.add("reveal");
            observer.observe(element);
        });
    }

    console.log("VoltarOS website initialized.");
});
