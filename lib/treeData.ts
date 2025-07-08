export const treeData: Record<string, string[]> = {
  "/": ["Dir 1", "Dir 2", "Dir 3", "Projects", "Docs"],

  "/Dir 1": ["Assets", "Logs"],
  "/Dir 1/Assets": ["Images", "Videos"],
  "/Dir 1/Assets/Images": ["Logo.png", "Banner.jpg"],
  "/Dir 1/Assets/Videos": ["Intro.mp4"],
  "/Dir 1/Logs": [],

  "/Dir 2": ["Subdir 1.1", "Subdir 1.2", "Subdir 1.3"],
  "/Dir 2/Subdir 1.1": [],
  "/Dir 2/Subdir 1.2": ["Subdir 1.2.1"],
  "/Dir 2/Subdir 1.2/Subdir 1.2.1": ["DeepFile.txt"],
  "/Dir 2/Subdir 1.3": [],

  "/Dir 3": [],

  "/Projects": ["App", "Website", "Tooling"],
  "/Projects/App": ["Android", "iOS"],
  "/Projects/App/Android": ["Main.java", "Utils.kt"],
  "/Projects/App/iOS": ["AppDelegate.swift"],
  "/Projects/Website": ["index.html", "styles.css"],
  "/Projects/Tooling": [],

  "/Docs": ["Readme.md", "License.txt", "Changelog.md"],
};
