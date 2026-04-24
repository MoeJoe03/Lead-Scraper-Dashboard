# LeadFlow — Start backend + ngrok tunnel
# Run this from the repo root: .\start-backend.ps1

$backendDir = Join-Path $PSScriptRoot "backend"

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  LeadFlow Backend + ngrok Tunnel" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# --- Activate virtual environment if it exists ---
$venvPaths = @("venv\Scripts\Activate.ps1", ".venv\Scripts\Activate.ps1")
foreach ($venv in $venvPaths) {
    $fullPath = Join-Path $PSScriptRoot $venv
    if (Test-Path $fullPath) {
        Write-Host "[+] Activating venv: $fullPath" -ForegroundColor Green
        & $fullPath
        break
    }
}

# --- Start ngrok in a new window ---
Write-Host "[+] Starting ngrok tunnel on port 8000..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "ngrok http 8000 --log stdout" -WindowStyle Normal

Start-Sleep -Seconds 2

# --- Start FastAPI in this window ---
Write-Host "[+] Starting FastAPI backend..." -ForegroundColor Green
Write-Host ""
Write-Host "  -> ngrok dashboard: http://127.0.0.1:4040" -ForegroundColor Yellow
Write-Host "  -> Copy the Forwarding URL and set it as VITE_API_URL in Vercel" -ForegroundColor Yellow
Write-Host ""

Set-Location $backendDir
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
