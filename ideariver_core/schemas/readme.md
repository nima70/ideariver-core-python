# ideariver.schemas

ideariver.schemas is a centralized repository for managing language-independent event schemas used throughout the ideariver ecosystem. These schemas help in standardizing communication between different services in a distributed, event-driven architecture.

## Purpose

This repository provides a common set of JSON schema definitions for various events, ensuring consistency across multiple applications and services within the ideariver platform. The schemas define the structure and validation rules for the events passed between components, independent of the implementation language.

## Features

Standardized JSON Schemas: A collection of schemas for various event-driven communication patterns.
Language-agnostic: Can be used with any language that supports JSON validation.
Validation Ready: Ensures that events adhere to a predefined structure, improving reliability and reducing errors.

## Usage:

To generate code for TypeScript:

```bash
npm run generate:typescript
```

To generate code for Python:

```bash
npm run generate:python
```

To generate code for C#:

```bash
npm run generate:csharp
```

To generate code for C++:

```bash
npm run generate:cpp
```

To generate code for all languages:

```bash
npm run generate:all
```
