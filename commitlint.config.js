module.exports = {
  extends: ["@commitlint/cli", "@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "Feature",
        "BugFix",
        "HotFix",
        "TypoFix",
        "StyleChange",
        "Refactoring",
        "Docs",
        "PerformanceImprovement",
        "ConfigurationChanges",
        "Test",
        "Chore",
        "Revert",
        "Build",
        "CI",
      ],
    ],
    "type-case": [2, "always", "pascal-case"],
    "scope-case": [2, "always", "pascal-case"],
    "subject-case": [2, "always", "sentence-case"],
  },
};
