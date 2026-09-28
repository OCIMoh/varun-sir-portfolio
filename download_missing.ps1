$images = @{
    "portrait_varun.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    "joxy_memory_architecture.jpg" = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
    "joxy_watcher_diagram.jpg" = "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1200&q=80"
    "boostit_matrix.jpg" = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
    "boostit_render_farm.jpg" = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
    "journal_memory.jpg" = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    "journal_pipeline.jpg" = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
}

$destDir = "D:\projects\New folder (2)\portfolio\next-portfolio\public\images\stock"

if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir
}

foreach ($img in $images.GetEnumerator()) {
    $destPath = Join-Path $destDir $img.Key
    if (!(Test-Path -Path $destPath)) {
        Write-Host "Downloading $($img.Key)..."
        Invoke-WebRequest -Uri $img.Value -OutFile $destPath
    } else {
        Write-Host "$($img.Key) already exists."
    }
}
Write-Host "Done downloading extra placeholders."
