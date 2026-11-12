$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$fileId = '1ShfcaKhlsBT4qDw7RRznSPeqcipHL-Hm'
$dest = 'C:\Users\pcnna\.gemini\antigravity\scratch\meenal-portfolio\public\resume.pdf'

$urls = @(
    "https://drive.usercontent.google.com/download?id=$fileId&export=download",
    "https://drive.google.com/uc?export=download&id=$fileId"
)

foreach ($url in $urls) {
    try {
        Write-Host "Attempting download from $url..."
        Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent 'Mozilla/5.0'
        $item = Get-Item $dest
        if ($item.Length -gt 2000) {
            Write-Host "Success! File size: $($item.Length) bytes"
            break
        }
    } catch {
        Write-Host "Failed: $_"
    }
}
