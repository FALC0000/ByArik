$content = Get-Content 'src\app\page.tsx' -Raw
$content = $content -replace 'ease: "easeOut"', 'ease: ease.out'
$content = $content -replace 'ease: "easeInOut"', 'ease: ease.inOut'
$content = $content -replace 'ease: "linear"', 'ease: ease.linear'
Set-Content 'src\app\page.tsx' $content
Write-Host "Done"
