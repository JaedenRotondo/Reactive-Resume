# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Lint/Test Commands
- Development: `pnpm dev` - Run all services
- Build: `pnpm build` - Build all apps
- Lint: `pnpm lint` - Run linter on all files
- Lint & Fix: `pnpm lint:fix` - Fix linting issues
- Format Check: `pnpm format` - Check formatting
- Format Fix: `pnpm format:fix` - Fix formatting issues
- Test: `pnpm test` - Run all tests
- Single Test: `pnpm vitest run path/to/test.ts` - Run specific test file

## Code Style Guidelines
- **TypeScript**: Use strict typing, prefer type over interface
- **Imports**: Use `simple-import-sort` ordering, no unused imports
- **Formatting**: 100 char line length, use Prettier
- **Components**: React functional components with hooks
- **State Management**: Zustand for global state
- **CSS**: Tailwind with class variance authority (cva), follow design system
- **Error Handling**: Use proper error boundaries and try/catch blocks
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **File Structure**: Follow NX monorepo conventions and module boundaries