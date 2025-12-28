// Discord OAuth2 Configuration - Implicit Grant Flow
const DISCORD_CONFIG = {
    clientId: '1454839147163287645',
    redirectUri: 'https://elitestudio11.github.io', // ⚠️ استبدل YOUR-USERNAME باسم المستخدم الخاص بك
    scope: 'identify email',
    authEndpoint: 'https://discord.com/api/oauth2/authorize',
    userEndpoint: 'https://discord.com/api/users/@me'
};

// Multilingual Support
const translations = {
    ar: {
        // Navigation
        home: 'الرئيسية',
        features: 'المميزات',
        portfolio: 'أعمالنا',
        pricing: 'الأسعار',
        contact: 'تواصل معنا',
        buyNow: 'اشترِ الآن',
        
        // Hero Section
        professionalDesigns: 'تصاميم احترافية',
        fastDelivery: 'تسليم سريع',
        joinClients: 'انضم لـ <strong>2,800+</strong> عميل راضي!',
        clickToJoin: 'انقر للانضمام',
        designStudio: 'استوديو التصاميم',
        professional: 'الاحترافي',
        forYourProjects: 'لمشاريعك',
        heroDescription: 'نقدم تصاميم احترافية عالية الجودة لسيرفرات Discord، لوغوهات، بانرات، وكل ما تحتاجه لمشروعك. فريقنا المحترف جاهز لتحويل أفكارك إلى واقع مبهر.',
        happyClients: 'عميل راضي',
        completedDesigns: 'تصميم منجز',
        clientRating: '% تقييم العملاء',
        hourSupport: 'ساعة دعم',
        browsePackages: 'تصفح الباقات',
        viewOurWork: 'شاهد أعمالنا',
        securePayment: 'دفع آمن 100%',
        moneyBackGuarantee: 'ضمان استرجاع المال',
        support247: 'دعم فني 24/7',
        
        // Discord Auth
        connectDiscord: 'ربط Discord',
        profile: 'الملف الشخصي',
        logout: 'تسجيل الخروج',
        connecting: 'جاري الاتصال...',
        connectionFailed: 'فشل الاتصال',
        connectedSuccessfully: 'تم الربط بنجاح!',
        
        // Payment Modal
        completePurchase: 'إتمام عملية الشراء',
        preparingPayment: 'جاري تحضير نظام الدفع...',
        orderSummary: 'ملخص الطلب',
        selectedPackage: 'الباقة المختارة:',
        price: 'السعر:',
        choosePaymentMethod: 'اختر طريقة الدفع',
        secureTransaction: 'جميع المعاملات محمية بتشفير SSL 256-bit',
        afterPayment: 'بعد إتمام الدفع',
        afterPaymentDesc: 'سيتم إنشاء تذكرة Discord تلقائياً لك. يرجى التوجه إلى سيرفرنا وفتح التذكرة لاستلام تصميمك.',
        joinDiscord: 'انضم إلى Discord',
        
        // Success Modal
        paymentSuccessful: 'تم الدفع بنجاح!',
        thankYou: 'شكراً لثقتك في Elite Studio',
        ticketInformation: 'معلومات التذكرة',
        ticketNumber: 'رقم التذكرة:',
        ticketInstruction: 'يرجى الانضمام إلى سيرفر Discord وفتح تذكرتك لبدء العمل على تصميمك',
        openTicket: 'افتح التذكرة في Discord',
        close: 'إغلاق',
        
        // Packages
        basicPackage: 'الباقة الأساسية',
        proPackage: 'الباقة المتقدمة',
        enterprisePackage: 'باقة الأعمال',
        perDesign: 'لكل تصميم',
        perProject: 'لكل مشروع',
        mostPopular: 'الأكثر شعبية'
    },
    en: {
        // Navigation
        home: 'Home',
        features: 'Features',
        portfolio: 'Portfolio',
        pricing: 'Pricing',
        contact: 'Contact',
        buyNow: 'Buy Now',
        
        // Hero Section
        professionalDesigns: 'Professional Designs',
        fastDelivery: 'Fast Delivery',
        joinClients: 'Join <strong>2,800+</strong> satisfied clients!',
        clickToJoin: 'Click to Join',
        designStudio: 'Design Studio',
        professional: 'Professional',
        forYourProjects: 'For Your Projects',
        heroDescription: 'We provide high-quality professional designs for Discord servers, logos, banners, and everything you need for your project. Our professional team is ready to turn your ideas into stunning reality.',
        happyClients: 'Happy Clients',
        completedDesigns: 'Completed Designs',
        clientRating: '% Client Rating',
        hourSupport: 'Hour Support',
        browsePackages: 'Browse Packages',
        viewOurWork: 'View Our Work',
        securePayment: '100% Secure Payment',
        moneyBackGuarantee: 'Money Back Guarantee',
        support247: '24/7 Support',
        
        // Discord Auth
        connectDiscord: 'Connect Discord',
        profile: 'Profile',
        logout: 'Logout',
        connecting: 'Connecting...',
        connectionFailed: 'Connection Failed',
        connectedSuccessfully: 'Successfully Connected!',
        
        // Payment Modal
        completePurchase: 'Complete Purchase',
        preparingPayment: 'Preparing payment system...',
        orderSummary: 'Order Summary',
        selectedPackage: 'Selected Package:',
        price: 'Price:',
        choosePaymentMethod: 'Choose Payment Method',
        secureTransaction: 'All transactions are protected with 256-bit SSL encryption',
        afterPayment: 'After Payment',
        afterPaymentDesc: 'A Discord ticket will be automatically created for you. Please go to our server and open the ticket to receive your design.',
        joinDiscord: 'Join Discord',
        
        // Success Modal
        paymentSuccessful: 'Payment Successful!',
        thankYou: 'Thank you for trusting Elite Studio',
        ticketInformation: 'Ticket Information',
        ticketNumber: 'Ticket Number:',
        ticketInstruction: 'Please join Discord server and open your ticket to start working on your design',
        openTicket: 'Open Ticket in Discord',
        close: 'Close',
        
        // Packages
        basicPackage: 'Basic Package',
        proPackage: 'Pro Package',
        enterprisePackage: 'Enterprise Package',
        perDesign: 'Per Design',
        perProject: 'Per Project',
        mostPopular: 'Most Popular'
    }
};

let currentLang = 'ar';
let currentTheme = 'light';
let selectedPlan = null;
let discordUser = null;
let discordToken = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1000);
    
    // Initialize all features
    initMobileMenu();
    initScrollEffects();
    initCounters();
    initLanguageSwitcher();
    initThemeToggle();
    initPaymentSystem();
    initDiscordAuth();
    
    // Set initial language and theme
    updateLanguage(currentLang);
    loadTheme();
    
    // Check for Discord OAuth callback in URL hash
    checkDiscordCallback();
});

// Mobile Menu
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        // Header effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        // Active navigation
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Back to top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 100;
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        const increment = target / speed;
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCount();
    };
    
    // Intersection Observer for counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.stat-number');
                if (counter && counter.textContent === '0') {
                    animateCounter(counter);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.hero-stats, .stats-section').forEach(section => {
        observer.observe(section);
    });
}

// Language Switcher
function initLanguageSwitcher() {
    const languageBtn = document.getElementById('languageBtn');
    const currentLangSpan = document.getElementById('currentLang');
    
    languageBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        currentLangSpan.textContent = currentLang.toUpperCase();
        updateLanguage(currentLang);
    });
}

function updateLanguage(lang) {
    // Update HTML direction
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with data-ar and data-en attributes
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${lang}`);
        } else {
            element.innerHTML = element.getAttribute(`data-${lang}`);
        }
    });
    
    // Update navigation text
    document.querySelectorAll('.nav-text').forEach((el, index) => {
        const keys = ['home', 'features', 'portfolio', 'pricing', 'contact'];
        el.textContent = translations[lang][keys[index]];
    });
    
    // Update button texts
    document.querySelectorAll('.btn-text').forEach(el => {
        el.textContent = translations[lang].buyNow;
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            toggleTheme();
        });
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (currentTheme === 'dark') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
    
    // Save theme preference
    localStorage.setItem('theme', currentTheme);
    
    // Add CSS variables for dark mode
    updateThemeStyles();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.setAttribute('data-theme', currentTheme);
        
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            if (currentTheme === 'dark') {
                themeIcon.className = 'fas fa-moon';
            } else {
                themeIcon.className = 'fas fa-sun';
            }
        }
        
        updateThemeStyles();
    }
}

function updateThemeStyles() {
    const root = document.documentElement;
    
    if (currentTheme === 'dark') {
        root.style.setProperty('--bg-primary', '#0f0f23');
        root.style.setProperty('--bg-secondary', '#1a1a2e');
        root.style.setProperty('--bg-tertiary', '#16213e');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#b8b8b8');
        root.style.setProperty('--text-muted', '#888888');
        root.style.setProperty('--border-color', '#2a2a3e');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
        
        // Update body background and text colors
        document.body.style.backgroundColor = '#0f0f23';
        document.body.style.color = '#ffffff';
    } else {
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--bg-secondary', '#f8fafc');
        root.style.setProperty('--bg-tertiary', '#f1f5f9');
        root.style.setProperty('--text-primary', '#1e293b');
        root.style.setProperty('--text-secondary', '#475569');
        root.style.setProperty('--text-muted', '#64748b');
        root.style.setProperty('--border-color', '#e2e8f0');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.1)');
        
        // Reset body background and text colors
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
}

// Discord Authentication - Implicit Grant Flow
function initDiscordAuth() {
    // Check if user is already connected
    const savedUser = localStorage.getItem('discord_user');
    const savedToken = localStorage.getItem('discord_token');
    
    if (savedUser && savedToken) {
        try {
            discordUser = JSON.parse(savedUser);
            discordToken = savedToken;
            showDiscordProfile(discordUser);
        } catch (error) {
            console.error('Error parsing saved Discord user:', error);
            localStorage.removeItem('discord_user');
            localStorage.removeItem('discord_token');
        }
    }
}

function connectDiscord() {
    // Generate state for security
    const state = generateRandomString(32);
    sessionStorage.setItem('discord_oauth_state', state);
    
    // Build OAuth URL for Implicit Grant Flow
    const params = {
        client_id: DISCORD_CONFIG.clientId,
        redirect_uri: DISCORD_CONFIG.redirectUri,
        response_type: 'token',
        scope: DISCORD_CONFIG.scope,
        state: state
    };
    
    const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    
    const authUrl = `${DISCORD_CONFIG.authEndpoint}?${queryString}`;
    
    // Show connecting state
    showConnectingState();
    
    // Open Discord OAuth in current window
    window.location.href = authUrl;
}

function checkDiscordCallback() {
    // Check for token in URL hash
    const hash = window.location.hash.substring(1);
    
    if (hash) {
        try {
            // Parse the hash parameters
            const params = new URLSearchParams(hash);
            const token = params.get('access_token');
            const error = params.get('error');
            const errorDescription = params.get('error_description');
            const state = params.get('state');
            
            console.log('OAuth Callback Detected:', { 
                hasToken: !!token, 
                hasError: !!error,
                state: state
            });
            
            if (error) {
                console.error('Discord OAuth error:', error, errorDescription);
                showDiscordError(`خطأ في المصادقة: ${errorDescription || error}`);
                clearUrlHash();
                return;
            }
            
            if (token && state) {
                // Verify state
                const savedState = sessionStorage.getItem('discord_oauth_state');
                console.log('State verification:', { savedState, receivedState: state });
                
                if (state !== savedState) {
                    console.error('State mismatch:', { savedState, receivedState: state });
                    showDiscordError('خطأ في الأمان: معامل الحالة غير صالح');
                    clearUrlHash();
                    return;
                }
                
                // Clear state from session storage
                sessionStorage.removeItem('discord_oauth_state');
                
                // Get user data with token
                getDiscordUserData(token);
                
                // Clear URL hash
                clearUrlHash();
            }
        } catch (error) {
            console.error('Error processing OAuth callback:', error);
            showDiscordError('خطأ في معالجة الاستجابة');
            clearUrlHash();
        }
    }
}

function clearUrlHash() {
    // Remove hash from URL without reloading
    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
}

async function getDiscordUserData(token) {
    try {
        showConnectingState();
        
        // Fetch user data from Discord API
        const response = await fetch(DISCORD_CONFIG.userEndpoint, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Discord API error: ${response.status} - ${errorText}`);
        }
        
        const userData = await response.json();
        console.log('Received user data:', userData);
        
        processDiscordUser(userData, token);
        
    } catch (error) {
        console.error('Failed to get user data:', error);
        showDiscordError('فشل في الحصول على بيانات المستخدم. يرجى المحاولة مرة أخرى.');
        
        // Reset connect button
        resetConnectButton();
    }
}

function processDiscordUser(userData, token) {
    // Process user data
    discordUser = {
        id: userData.id,
        username: userData.username,
        discriminator: userData.discriminator,
        globalName: userData.global_name || userData.username,
        avatar: userData.avatar,
        avatarUrl: userData.avatar 
            ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.${userData.avatar.startsWith('a_') ? 'gif' : 'png'}?size=256`
            : `https://cdn.discordapp.com/embed/avatars/${(parseInt(userData.discriminator) || 0) % 5}.png`,
        email: userData.email || 'غير متاح',
        verified: userData.verified || false,
        connectedAt: new Date().toISOString()
    };
    
    discordToken = token;
    
    // Save user data and token
    localStorage.setItem('discord_user', JSON.stringify(discordUser));
    localStorage.setItem('discord_token', token);
    
    // Show profile
    showDiscordProfile(discordUser);
    
    // Show success notification
    showNotification(translations[currentLang].connectedSuccessfully, 'success');
}

function resetConnectButton() {
    const connectBtn = document.getElementById('discordConnectBtn');
    
    if (connectBtn) {
        connectBtn.innerHTML = `
            <i class="fab fa-discord"></i>
            <span>${translations[currentLang].connectDiscord}</span>
        `;
        connectBtn.disabled = false;
        connectBtn.style.display = 'block';
    }
}

function showConnectingState() {
    const connectBtn = document.getElementById('discordConnectBtn');
    const profile = document.getElementById('discordProfile');
    
    if (connectBtn) {
        connectBtn.innerHTML = `
            <div class="loading-spinner" style="display: inline-block; width: 16px; height: 16px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px;"></div>
            <span>${translations[currentLang].connecting}</span>
        `;
        connectBtn.disabled = true;
    }
    
    if (profile) {
        profile.style.display = 'none';
    }
}

function showDiscordProfile(user) {
    const connectBtn = document.getElementById('discordConnectBtn');
    const profile = document.getElementById('discordProfile');
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const userId = document.getElementById('userId');
    
    if (connectBtn) {
        connectBtn.style.display = 'none';
    }
    
    if (profile) {
        profile.style.display = 'flex';
        
        if (userAvatar) {
            userAvatar.src = user.avatarUrl;
            userAvatar.alt = user.globalName || user.username;
            userAvatar.onerror = function() {
                this.src = `https://cdn.discordapp.com/embed/avatars/${(parseInt(user.discriminator) || 0) % 5}.png`;
            };
        }
        
        if (userName) {
            userName.textContent = user.globalName || user.username;
        }
        
        if (userId) {
            userId.textContent = `#${user.discriminator}`;
        }
    }
    
    // Update modal content if it exists
    updateProfileModal(user);
}

function updateProfileModal(user) {
    const modalUserAvatar = document.getElementById('modalUserAvatar');
    const modalUserName = document.getElementById('modalUserName');
    const modalUsername = document.getElementById('modalUsername');
    const modalUserId = document.getElementById('modalUserId');
    const connectionDate = document.getElementById('connectionDate');
    
    if (modalUserAvatar) {
        modalUserAvatar.src = user.avatarUrl;
        modalUserAvatar.alt = user.globalName || user.username;
        modalUserAvatar.onerror = function() {
            this.src = `https://cdn.discordapp.com/embed/avatars/${(parseInt(user.discriminator) || 0) % 5}.png`;
        };
    }
    
    if (modalUserName) {
        modalUserName.textContent = user.globalName || user.username;
    }
    
    if (modalUsername) {
        modalUsername.textContent = `@${user.username}`;
    }
    
    if (modalUserId) {
        modalUserId.textContent = user.id;
    }
    
    if (connectionDate) {
        const date = new Date(user.connectedAt);
        connectionDate.textContent = date.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US') + ' ' + date.toLocaleTimeString();
    }
}

function showDiscordError(message) {
    const connectBtn = document.getElementById('discordConnectBtn');
    
    if (connectBtn) {
        connectBtn.innerHTML = `
            <i class="fab fa-discord"></i>
            <span>${translations[currentLang].connectDiscord}</span>
        `;
        connectBtn.disabled = false;
        connectBtn.style.display = 'block';
    }
    
    showNotification(message, 'error');
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    if (profileMenu) {
        profileMenu.classList.toggle('show');
    }
}

function showProfileModal() {
    const modal = document.getElementById('discordProfileModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProfileModal() {
    const modal = document.getElementById('discordProfileModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function disconnectDiscord() {
    const confirmMsg = currentLang === 'ar' 
        ? 'هل أنت متأكد من فصل حساب Discord؟'
        : 'Are you sure you want to disconnect your Discord account?';

    if (confirm(confirmMsg)) {
        // Remove user data
        localStorage.removeItem('discord_user');
        localStorage.removeItem('discord_token');
        discordUser = null;
        discordToken = null;
        
        // Reset UI
        const connectBtn = document.getElementById('discordConnectBtn');
        const profile = document.getElementById('discordProfile');
        
        if (connectBtn) {
            connectBtn.style.display = 'block';
            connectBtn.innerHTML = `
                <i class="fab fa-discord"></i>
                <span>${translations[currentLang].connectDiscord}</span>
            `;
            connectBtn.disabled = false;
        }
        
        if (profile) {
            profile.style.display = 'none';
        }
        
        // Close profile menu if open
        const profileMenu = document.getElementById('profileMenu');
        if (profileMenu) {
            profileMenu.classList.remove('show');
        }
        
        showNotification('تم فصل الحساب بنجاح', 'success');
    }
}

// Payment System
function initPaymentSystem() {
    const paymentModal = document.getElementById('paymentModal');
    const successModal = document.getElementById('successModal');
    const closePaymentModal = document.getElementById('closePaymentModal');
    
    if (closePaymentModal) {
        closePaymentModal.addEventListener('click', closePaymentModalFunc);
    }
    
    // Close modals when clicking outside
    [paymentModal, successModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModalFunc(modal);
                }
            });
        }
    });
}

function selectPlan(plan) {
    // Check if user is connected to Discord
    if (!discordUser) {
        showNotification('يرجى ربط حساب Discord أولاً', 'error');
        return;
    }
    
    selectedPlan = plan;
    const paymentModal = document.getElementById('paymentModal');
    const paymentLoading = document.getElementById('paymentLoading');
    const paymentDetails = document.getElementById('paymentDetails');
    const selectedPlanName = document.getElementById('selectedPlanName');
    const selectedPlanPrice = document.getElementById('selectedPlanPrice');
    
    let planInfo = getPlanInfo(plan);
    
    if (selectedPlanName) selectedPlanName.textContent = planInfo.name;
    if (selectedPlanPrice) selectedPlanPrice.textContent = `$${planInfo.price}`;
    
    // Show modal
    if (paymentModal) {
        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Show loading then payment details
    setTimeout(() => {
        if (paymentLoading) paymentLoading.style.display = 'none';
        if (paymentDetails) paymentDetails.style.display = 'block';
        initializePayPal(plan, planInfo.price, planInfo.name);
    }, 1500);
}

function getPlanInfo(plan) {
    const plans = {
        basic: {
            name: currentLang === 'ar' ? 'الباقة الأساسية' : 'Basic Package',
            price: '19.99'
        },
        pro: {
            name: currentLang === 'ar' ? 'الباقة المتقدمة' : 'Pro Package',
            price: '49.99'
        },
        enterprise: {
            name: currentLang === 'ar' ? 'باقة الأعمال' : 'Enterprise Package',
            price: '99.99'
        }
    };
    return plans[plan];
}

function closePaymentModalFunc() {
    const paymentModal = document.getElementById('paymentModal');
    const paymentLoading = document.getElementById('paymentLoading');
    const paymentDetails = document.getElementById('paymentDetails');
    
    if (paymentModal) {
        paymentModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    if (paymentLoading) paymentLoading.style.display = 'flex';
    if (paymentDetails) paymentDetails.style.display = 'none';
}

function closeModalFunc(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// PayPal Integration (Mock)
function initializePayPal(plan, price, planName) {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;
    
    // Clear previous buttons
    container.innerHTML = '';
    
    // Create mock PayPal button
    const paypalBtn = document.createElement('button');
    paypalBtn.className = 'paypal-mock-btn';
    paypalBtn.innerHTML = `
        <div style="background: #0070ba; color: white; padding: 12px 24px; border-radius: 6px; border: none; cursor: pointer; font-weight: bold; width: 100%;">
            Pay with PayPal - $${price}
        </div>
    `;
    
    paypalBtn.addEventListener('click', () => {
        // Simulate payment processing
        paypalBtn.innerHTML = '<div style="text-align: center; padding: 12px;">Processing...</div>';
        
        setTimeout(() => {
            handlePaymentSuccess({
                id: 'MOCK_ORDER_' + Date.now(),
                payer: {
                    email_address: discordUser.email || 'user@example.com',
                    name: { given_name: discordUser.globalName, surname: '' }
                }
            }, plan);
        }, 2000);
    });
    
    container.appendChild(paypalBtn);
}

function handlePaymentSuccess(details, plan) {
    // Close payment modal
    closePaymentModalFunc();
    
    // Generate ticket number
    const ticketNumber = generateTicketNumber();
    
    // Show success modal
    showSuccessModal(ticketNumber);
    
    console.log('Payment successful:', { 
        user: discordUser, 
        plan: plan, 
        ticketNumber: ticketNumber,
        paymentDetails: details 
    });
    
    // Here you would typically send this data to your server
    // to create the Discord ticket
}

function generateTicketNumber() {
    const prefix = 'ELITE';
    const random = Math.floor(10000 + Math.random() * 90000);
    return `${prefix}-${random}`;
}

function showSuccessModal(ticketNumber) {
    const successModal = document.getElementById('successModal');
    const ticketNumberElement = document.getElementById('ticketNumber');
    
    if (ticketNumberElement) {
        ticketNumberElement.textContent = ticketNumber;
    }
    
    if (successModal) {
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Utility Functions
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .modal.active {
        display: flex !important;
    }
    
    .profile-menu.show {
        display: block !important;
    }
    
    [data-theme="dark"] {
        --bg-primary: #0f0f23;
        --bg-secondary: #1a1a2e;
        --text-primary: #ffffff;
        --text-secondary: #b8b8b8;
    }
    
    [data-theme="dark"] .header,
    [data-theme="dark"] .modal-content,
    [data-theme="dark"] .pricing-card,
    [data-theme="dark"] .feature-card {
        background-color: var(--bg-secondary) !important;
        color: var(--text-primary) !important;
    }
    
    [data-theme="dark"] body {
        background-color: var(--bg-primary) !important;
        color: var(--text-primary) !important;
    }
`;
document.head.appendChild(style);

// Export functions for global access
window.connectDiscord = connectDiscord;
window.disconnectDiscord = disconnectDiscord;
window.toggleProfileMenu = toggleProfileMenu;
window.showProfileModal = showProfileModal;
window.closeProfileModal = closeProfileModal;
window.toggleTheme = toggleTheme;
window.selectPlan = selectPlan;
window.closeSuccessModal = closeSuccessModal;

console.log('✅ Elite Studio Script Loaded Successfully');


