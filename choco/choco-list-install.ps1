# Path to your packages list
$packagesFile = "C:\code\packages.txt"

# Read the package names from the file
$packages = Get-Content -Path $packagesFile

# Loop through each package
foreach ($package in $packages) {
    try {
        # Check if the package is already installed
        $isInstalled = choco list --local-only | Select-String -Pattern $package

        if ($isInstalled) {
            # If installed, upgrade the package
            Write-Host "Upgrading $package..."
            choco upgrade $package -y
        } else {
            # If not installed, install the package
            Write-Host "Installing $package..."
            choco install $package -y
        }
    } catch {
        # Handle any errors during the process
        Write-Host "Failed to process $package" -ForegroundColor Red
    }
}