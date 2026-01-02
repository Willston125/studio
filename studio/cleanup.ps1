# Script de Nettoyage Automatique - Cineworld V2 Reset
# Exécutez ce fichier dans PowerShell avec : .\cleanup.ps1

Write-Host "🧹 NETTOYAGE COMPLET EN COURS..." -ForegroundColor Yellow

# Chemin de base
$basePath = "c:\Users\hp\Documents\CINEWORDL DJIBOUTI SITE\studio\src"

# ÉTAPE 1 : Suppression des dossiers de pages
Write-Host "`n📁 SUPPRESSION DES PAGES NON UTILISÉES..." -ForegroundColor Cyan

$foldersToDelete = @(
    "$basePath\app\formations",
    "$basePath\app\association",
    "$basePath\app\entreprises",
    "$basePath\app\a-propos",
    "$basePath\app\contact"
)

foreach ($folder in $foldersToDelete) {
    if (Test-Path $folder) {
        Remove-Item -Path $folder -Recurse -Force
        Write-Host "  ✅ Supprimé : $folder" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Déjà absent : $folder" -ForegroundColor Gray
    }
}

# ÉTAPE 2 : Suppression des composants obsolètes
Write-Host "`n🧩 SUPPRESSION DES COMPOSANTS OBSOLÈTES..." -ForegroundColor Cyan

$componentsToDelete = @(
    "$basePath\components\cine-enroll\hero-section.tsx",
    "$basePath\components\cine-enroll\premium-footer.tsx",
    "$basePath\components\cine-enroll\photo-gallery.tsx",
    "$basePath\components\cine-enroll\institution-section.tsx",
    "$basePath\components\cine-enroll\pricing-grid-section.tsx",
    "$basePath\components\cine-enroll\pathfinder-section.tsx",
    "$basePath\components\cine-enroll\experience-section.tsx",
    "$basePath\components\cine-enroll\alumni-section.tsx",
    "$basePath\components\cine-enroll\next-steps-section.tsx",
    "$basePath\components\cine-enroll\curriculum-section.tsx"
)

foreach ($component in $componentsToDelete) {
    if (Test-Path $component) {
        Remove-Item -Path $component -Force
        Write-Host "  ✅ Supprimé : $(Split-Path $component -Leaf)" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Déjà absent : $(Split-Path $component -Leaf)" -ForegroundColor Gray
    }
}

Write-Host "`n✨ NETTOYAGE TERMINÉ ! Base propre." -ForegroundColor Green
Write-Host "⚡ Vous pouvez maintenant reconstruire progressivement." -ForegroundColor Yellow
