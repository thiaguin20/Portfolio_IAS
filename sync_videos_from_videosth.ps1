param(
  [string]$SourceRoot = "C:\Users\USER\OneDrive\Documentos\VideosTH",
  [string]$ProjectRoot = $PSScriptRoot
)

$ErrorActionPreference = "Stop"

$categoryMap = [ordered]@{
  "ias" = "videos-ia"
  "x2" = "x2"
  "x3" = "x3"
  "tap" = "tap"
  "heart-me" = "heart-me"
  "glove" = "glove"
  "popular" = "popular"
}

$allowedExt = @(".mp4", ".webm", ".mov", ".m4v")
$outputRoot = Join-Path $ProjectRoot "output"
New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null

$categoriesManifest = [ordered]@{}

foreach ($sourceName in $categoryMap.Keys) {
  $targetName = $categoryMap[$sourceName]
  $sourceDir = Join-Path $SourceRoot $sourceName
  $targetDir = Join-Path $outputRoot $targetName

  New-Item -ItemType Directory -Path $targetDir -Force | Out-Null

  Get-ChildItem -LiteralPath $targetDir -File -ErrorAction SilentlyContinue |
    Where-Object { $allowedExt -contains $_.Extension.ToLowerInvariant() } |
    Remove-Item -Force -ErrorAction SilentlyContinue

  $entries = @()
  if (Test-Path -LiteralPath $sourceDir) {
    $sourceFiles = Get-ChildItem -LiteralPath $sourceDir -File |
      Where-Object { $allowedExt -contains $_.Extension.ToLowerInvariant() } |
      Sort-Object Name

    foreach ($file in $sourceFiles) {
      $destPath = Join-Path $targetDir $file.Name
      Copy-Item -LiteralPath $file.FullName -Destination $destPath -Force

      $baseTitle = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
      $readableTitle = ($baseTitle -replace "[-_]+", " ").Trim()
      if ([string]::IsNullOrWhiteSpace($readableTitle)) {
        $readableTitle = $file.Name
      }

      $entries += [ordered]@{
        src = "./output/$targetName/$($file.Name)"
        title = $readableTitle
        description = if ($targetName -eq "videos-ia") { "Video IA com fundo" } else { "Efeito sem fundo" }
        background = if ($targetName -eq "videos-ia") { "solid" } else { "alpha" }
      }
    }
  }

  $categoriesManifest[$targetName] = $entries
}

$manifest = [ordered]@{
  generatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssK")
  sourceRoot = $SourceRoot
  categories = $categoriesManifest
}

$manifestPath = Join-Path $outputRoot "videos-manifest.json"
$manifest | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $manifestPath -Encoding utf8

foreach ($targetName in $categoryMap.Values) {
  $count = @($categoriesManifest[$targetName]).Count
  Write-Output "$targetName=$count"
}
Write-Output "manifest=$manifestPath"
