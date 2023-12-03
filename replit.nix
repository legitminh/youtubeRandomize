{ pkgs }: {
  deps = [
    pkgs.python39Packages.pip
    pkgs.python39Full
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}