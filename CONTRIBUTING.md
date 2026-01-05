# Contributing to Docusaurus Theme Yun

Thank you for considering contributing to Docusaurus Theme Yun! This document provides guidelines for contributing.

## Code of Conduct

Please be respectful and constructive in your interactions with the community.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Environment details** (OS, Node version, Docusaurus version)
- **Screenshots** if applicable

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case and motivation**
- **Proposed solution**
- **Alternatives considered**
- **Additional context**

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** with clear commit messages
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Submit a pull request**

#### Pull Request Guidelines

- Follow the existing code style
- Write clear commit messages
- Include tests for new features
- Update documentation
- Keep changes focused and atomic
- Reference relevant issues

## Development Setup

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/hexo-theme-yun-unofficial.git
cd hexo-theme-yun-unofficial

# Install dependencies
npm install

# Create a branch
git checkout -b feature/your-feature-name
```

### Testing

Test your changes in a real Docusaurus site:

```bash
# Link your local theme
npm link

# In a test Docusaurus site
npm link docusaurus-theme-yun

# Start development
npm start
```

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Follow existing patterns
- Comment complex logic

### Commit Messages

Format: `<type>: <subject>`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat: add sunset mode support
fix: correct theme toggle button position
docs: update installation guide
```

## Component Development

### Adding a New Component

1. Create component file: `src/theme/components/YourComponent.js`
2. Create styles: `src/theme/components/YourComponent.css`
3. Export from appropriate location
4. Update documentation
5. Add example usage

### Component Guidelines

- Keep components small and focused
- Use functional components with hooks
- Include PropTypes or TypeScript types
- Make components accessible (ARIA labels)
- Support responsive design
- Follow theme config patterns
- Include CSS for styling

Example component:

```jsx
import React from 'react';
import './YourComponent.css';

export default function YourComponent({ 
  title, 
  description,
  ...props 
}) {
  return (
    <div className="yun-your-component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

## Documentation

### Documentation Updates

When adding features:
- Update README.md
- Add to CHANGELOG.md
- Update relevant guides in /docs
- Include examples
- Update docusaurus.config.example.js if needed

### Documentation Style

- Use clear, concise language
- Include code examples
- Add screenshots for UI features
- Use proper markdown formatting
- Link to related documentation

## Testing

Currently, the theme doesn't have automated tests, but manual testing is important:

- Test in multiple browsers
- Test responsive design
- Test light/dark/sunset modes
- Test all interactive features
- Test with different configurations

## Review Process

1. Maintainers will review your PR
2. Feedback may be provided
3. Make requested changes
4. Once approved, it will be merged

## Release Process

Releases are managed by maintainers:

1. Version bump in package.json
2. Update CHANGELOG.md
3. Create git tag
4. Publish to npm
5. Create GitHub release

## Questions?

- Check existing documentation
- Search closed issues
- Ask in GitHub Discussions
- Open a new issue

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Thank You!

Every contribution helps make this theme better. Thank you for being part of the community! 🙏
