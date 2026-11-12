$ErrorActionPreference = "Stop"
$destDir = "C:\Users\pcnna\.gemini\antigravity\scratch\tools\mingit"
if (Test-Path "$destDir\cmd\git.exe") {
    Write-Host "MinGit already installed at $destDir"
    exit 0
}

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
$zipPath = "C:\Users\pcnna\.gemini\antigravity\scratch\tools\mingit.zip"

Write-Host "Fetching latest MinGit release url..."
$release = Invoke-RestMethod -Uri "https://api.github.com/repos/git-for-windows/git/releases/latest" -Headers @{ "User-Agent" = "PowerShell" }
$asset = $release.assets | Where-Object { $_.name -match '^MinGit-[0-9\.]+-64-bit\.zip$' } | Select-Object -First 1

if (-not $asset) {
    # Fallback to direct known download URL
    $downloadUrl = "https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/MinGit-2.47.1-64-bit.zip"
} else {
    $downloadUrl = $asset.browser_download_url
}

Write-Host "Downloading from $downloadUrl..."
Invoke-WebRequest -Uri $downloadUrl -OutFile $zipPath

Write-Host "Extracting to $destDir..."
Expand-Archive -Path $zipPath -DestinationPath $destDir -Force

Remove-Item -Path $zipPath -Force
Write-Host "MinGit installed successfully!"
& "$destDir\cmd\git.exe" --version
