@echo off
echo ========================================
echo Building React App for cPanel Deployment
echo ========================================
echo.

echo Step 1: Cleaning previous build...
if exist build rmdir /s /q build
echo Previous build cleaned.
echo.

echo Step 2: Building production version...
call npm run build
echo.

if exist build (
    echo ========================================
    echo Build completed successfully!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Go to the 'build' folder
    echo 2. Select all files and folders
    echo 3. Create a ZIP file
    echo 4. Upload to cPanel File Manager
    echo 5. Extract in public_html directory
    echo.
    echo Or use FTP to upload the contents of the 'build' folder
    echo to your public_html directory on cPanel.
    echo.
    echo ========================================
    pause
) else (
    echo ========================================
    echo Build failed! Please check for errors above.
    echo ========================================
    pause
)

