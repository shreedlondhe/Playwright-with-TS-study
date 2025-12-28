import { test, expect } from '@playwright/test'



test('Logger', () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const time = now.toTimeString().split(' ')[0];
    const log = (msg: string, level: 'info' | 'error' | 'warn' | 'debug' = 'info') => {
        console.log(`[PyxTech Lenovo] [${level.toUpperCase()}] [${date} ${time}] ${msg}`);
    };
    log('xxxxxxxxxxx')
})
//install-dependencies.bat

// @echo off
// echo Installing project dependencies...
// echo.

// npm install @faker-js/faker@^10.1.0 exceljs@^4.4.0 xlsx@^0.18.5

// echo.
// echo All dependencies installed successfully!
// pause
