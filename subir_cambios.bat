@echo off
echo 🔄 Preparando subida a GitHub...
git add .
echo ✅ Archivos listos.
git commit -m "Sincronizacion automatica desde Antigravity"
echo 🚀 Subiendo a la nube (GitHub)...
git push
echo.
echo ✨ ¡TODO LISTO! Tus cambios ya estan en camino a la web.
echo Espera 1 minuto y refresca https://elneno16.github.io/streaming-admin/
echo.
pause
