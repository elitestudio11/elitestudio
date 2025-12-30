/**
 * Elite Studio Website Protection
 * Advanced security measures to protect the website
 * Version: 1.0.0
 */

(function() {
    'use strict';
    
    // ===========================================
    // Configuration
    // ===========================================
    const config = {
        enableDevToolsProtection: true,
        enableRightClickProtection: true,
        enableKeyboardProtection: true,
        enableConsoleProtection: true,
        enableCopyProtection: true,
        enableDragProtection: true,
        enableDebuggerProtection: true,
        showWarningMessage: true,
        redirectOnViolation: false,
        redirectUrl: 'https://elitestudio11.github.io',
        warningMessageAr: '⚠️ هذا الموقع محمي! المحاولات المتكررة سيتم تسجيلها.',
        warningMessageEn: '⚠️ This website is protected! Repeated attempts will be logged.',
        maxViolations: 5
    };

    let violationCount = 0;
    let devToolsOpen = false;

    // ===========================================
    // Utility Functions
    // ===========================================
    
    /**
     * Show warning message
     */
    function showWarning(message) {
        if (!config.showWarningMessage) return;
        
        const lang = document.documentElement.lang || 'ar';
        const warningMsg = lang === 'ar' ? config.warningMessageAr : config.warningMessageEn;
        
        // Create warning overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 0, 0, 0.95);
            color: white;
            padding: 30px 50px;
            border-radius: 15px;
            z-index: 999999;
            font-family: 'Cairo', sans-serif;
            font-size: 18px;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            animation: shake 0.5s;
        `;
        overlay.innerHTML = `
            <i class="fas fa-shield-alt" style="font-size: 48px; margin-bottom: 15px;"></i>
            <div>${warningMsg}</div>
            <div style="margin-top: 10px; font-size: 14px;">${message || ''}</div>
        `;
        
        // Add shake animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
                25% { transform: translate(-50%, -50%) rotate(-5deg); }
                75% { transform: translate(-50%, -50%) rotate(5deg); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.remove();
        }, 3000);
    }

    /**
     * Log violation
     */
    function logViolation(type) {
        violationCount++;
        console.warn(`[Security] Violation detected: ${type} (Count: ${violationCount})`);
        
        if (violationCount >= config.maxViolations && config.redirectOnViolation) {
            window.location.href = config.redirectUrl;
        }
    }

    // ===========================================
    // DevTools Detection
    // ===========================================
    
    if (config.enableDevToolsProtection) {
        // Method 1: Size-based detection
        const devToolsCheck = () => {
            const threshold = 160;
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (widthThreshold || heightThreshold) {
                if (!devToolsOpen) {
                    devToolsOpen = true;
                    showWarning('Developer Tools Detected!');
                    logViolation('DevTools');
                }
            } else {
                devToolsOpen = false;
            }
        };

        // Method 2: Performance-based detection
        let checkStatus = false;
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                checkStatus = true;
                showWarning('Console Access Detected!');
                logViolation('Console');
                throw new Error('DevTools detected');
            }
        });

        setInterval(() => {
            checkStatus = false;
            console.dir(element);
            console.clear();
        }, 1000);

        // Method 3: Debugger statement (optional - can slow down legitimate users)
        if (config.enableDebuggerProtection) {
            setInterval(() => {
                debugger;
            }, 100);
        }

        // Run checks periodically
        setInterval(devToolsCheck, 500);
        window.addEventListener('resize', devToolsCheck);
    }

    // ===========================================
    // Right Click Protection
    // ===========================================
    
    if (config.enableRightClickProtection) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showWarning('Right-click disabled!');
            logViolation('RightClick');
            return false;
        });
    }

    // ===========================================
    // Keyboard Shortcuts Protection
    // ===========================================
    
    if (config.enableKeyboardProtection) {
        document.addEventListener('keydown', function(e) {
            // F12 - DevTools
            if (e.key === 'F12') {
                e.preventDefault();
                showWarning('F12 is disabled!');
                logViolation('F12');
                return false;
            }
            
            // Ctrl+Shift+I - DevTools
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                showWarning('DevTools shortcut disabled!');
                logViolation('Ctrl+Shift+I');
                return false;
            }
            
            // Ctrl+Shift+J - Console
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
                showWarning('Console shortcut disabled!');
                logViolation('Ctrl+Shift+J');
                return false;
            }
            
            // Ctrl+Shift+C - Inspect
            if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                showWarning('Inspect shortcut disabled!');
                logViolation('Ctrl+Shift+C');
                return false;
            }
            
            // Ctrl+U - View Source
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
                showWarning('View source disabled!');
                logViolation('Ctrl+U');
                return false;
            }
            
            // Ctrl+S - Save Page
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                showWarning('Save page disabled!');
                logViolation('Ctrl+S');
                return false;
            }
            
            // Ctrl+A - Select All (optional)
            // if (e.ctrlKey && e.key === 'a') {
            //     e.preventDefault();
            //     return false;
            // }
            
            // Ctrl+C - Copy (when enabled)
            if (config.enableCopyProtection && e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                showWarning('Copy is disabled!');
                logViolation('Copy');
                return false;
            }
        });
    }

    // ===========================================
    // Copy Protection
    // ===========================================
    
    if (config.enableCopyProtection) {
        // Disable text selection
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });

        // Disable copy
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            showWarning('Copying is disabled!');
            logViolation('Copy');
            return false;
        });

        // Disable cut
        document.addEventListener('cut', function(e) {
            e.preventDefault();
            return false;
        });
    }

    // ===========================================
    // Drag & Drop Protection
    // ===========================================
    
    if (config.enableDragProtection) {
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });

        // Protect images specifically
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.getElementsByTagName('img');
            for (let img of images) {
                img.addEventListener('dragstart', function(e) {
                    e.preventDefault();
                    return false;
                });
                img.style.pointerEvents = 'none';
                img.style.userSelect = 'none';
            }
        });
    }

    // ===========================================
    // Console Protection
    // ===========================================
    
    if (config.enableConsoleProtection) {
        // Override console methods
        const noop = function() {};
        const methods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace', 'dir', 'group'];
        
        methods.forEach(method => {
            const original = console[method];
            console[method] = function(...args) {
                // Still log internally but make it harder to debug
                if (Math.random() > 0.7) { // Randomly show some logs
                    original.apply(console, args);
                }
            };
        });

        // Detect console.log usage in page
        window.console.log = function() {
            logViolation('ConsoleLog');
        };
    }

    // ===========================================
    // Additional Protection: Disable Print Screen
    // ===========================================
    
    document.addEventListener('keyup', function(e) {
        if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('');
            showWarning('Screenshot disabled!');
            logViolation('PrintScreen');
        }
    });

    // ===========================================
    // Protection Against iframe embedding
    // ===========================================
    
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // ===========================================
    // Disable Auto-fill for sensitive forms
    // ===========================================
    
    document.addEventListener('DOMContentLoaded', function() {
        const inputs = document.querySelectorAll('input[type="password"], input[type="email"]');
        inputs.forEach(input => {
            input.setAttribute('autocomplete', 'off');
        });
    });

    // ===========================================
    // CSS-based Protection
    // ===========================================
    
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
        }
        
        /* Allow selection for input fields */
        input, textarea {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        
        img {
            pointer-events: none;
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
            user-drag: none;
        }
    `;
    document.head.appendChild(style);

    // ===========================================
    // Obfuscation: Make it harder to read source
    // ===========================================
    
    // Add fake elements to confuse scrapers
    const decoy = document.createElement('div');
    decoy.style.display = 'none';
    decoy.innerHTML = `
        <!-- 
            This website is protected by Elite Studio Security System
            Unauthorized access attempts are logged and may be prosecuted
            Contact: support@elitestudio.com
        -->
        <script>console.log('Security Active');</script>
    `;
    document.body.appendChild(decoy);

    // ===========================================
    // Clear console periodically
    // ===========================================
    
    if (config.enableConsoleProtection) {
        setInterval(() => {
            console.clear();
        }, 2000);
    }

    // ===========================================
    // Log protection initialization
    // ===========================================
    
    console.log('%c🛡️ Elite Studio Protection Active', 'color: #ff0000; font-size: 20px; font-weight: bold;');
    console.log('%cThis website is protected. Unauthorized access attempts are monitored.', 'color: #ff6b6b; font-size: 14px;');


    
    // Only in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.__PROTECTION_CONFIG__ = config;
        console.log('Protection running in development mode. Some features may be disabled.');
    }

})();

