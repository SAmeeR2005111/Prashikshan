@echo off
:: c:/Users/samee/prashikshan-complete/start.bat

echo =================================================
echo  🚀 Starting Prashikshan App Development Server 🚀
echo =================================================
echo.

echo Navigating to the application directory: prashikshan-app
cd prashikshan-app || (echo Error: Could not navigate to prashikshan-app. Make sure the directory exists. && pause && exit /b 1)

echo.
echo Launching server...
echo You can view the application at http://localhost:5173
echo.
echo Press CTRL+C to stop the server.
echo.

call npm run dev
