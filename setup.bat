@echo off
:: c:/Users/samee/prashikshan-complete/setup.bat

echo =================================================
echo  🚀 Prashikshan App - Initial Setup Script 🚀
echo =================================================
echo.

echo Navigating to the application directory: prashikshan-app
cd prashikshan-app || (echo Error: Could not navigate to prashikshan-app. Make sure the directory exists. && pause && exit /b 1)

echo.
echo Installing Node.js dependencies... This may take a few minutes.
call npm install || (echo Error: npm install failed. Please check your Node.js and npm installation. && pause && exit /b 1)

echo.
echo =================================================
echo  ✅ Setup Complete!
echo =================================================
echo.
echo To start the development server:
echo   1. Run the 'start.bat' file in the root directory, OR
echo   2. Open your terminal, navigate to 'prashikshan-complete/prashikshan-app', and run:
echo      npm run dev
echo.
echo Then open your web browser to:
echo   http://localhost:5173
echo.
echo =================================================
pause
