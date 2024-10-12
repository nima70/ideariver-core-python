## Scripts for generating code
To generate TypeScript:

```bash
npm start --typescript
```
To generate Python:

```bash
npm start --python
```
To generate C#:

```bash
npm start --csharp
```
To generate C++:
```bash
npm start --cpp
```
To generate for all (default):
```bash
npm start
```
---

## Option 1: Git Submodules

Git submodules allow you to keep another Git repository as a subdirectory in your current repository. This can be useful if you want to store your generated code in a separate repository (e.g., ideariver.generated) and include it in both your ideariver.core TypeScript and Python packages.

## Steps:

Create a separate repository for your generated code: You can create a repository called ideariver.generated to store the generated TypeScript and Python files.

Example repository structure:

```javascript
/ideariver.generated
  /typescript
    /plugin_metadata
    /event_sourcing
  /python
    /plugin_metadata
    /event_sourcing;
```

Add the generated repository as a submodule to both the TypeScript and Python projects.

In your TypeScript package (ideariver.core for npm):

```bash
cd /path/to/ideariver.core
git submodule add https://github.com/nima70/ideariver.schemas.git src/models/generated
git submodule update --init --recursive
```

In your Python package (ideariver.core for PyPI):

```bash
cd /path/to/ideariver.core
git submodule add https://github.com/nima70/ideariver.schemas.git ideariver_core/models/generated
git submodule update --init --recursive
```

## Update the submodules when the generated code changes.

Whenever you regenerate the code in the ideariver.generated repository, you can update the submodule references in your ideariver.core repositories by running:

```bash
git submodule update --remote
```

Commit the changes: After updating the submodules, commit the changes in your ideariver.core repository.

```bash
git commit -am "Updated generated code"
git push
```

## TypeScript:

After running the script, TypeScript DTOs will be generated in the ./generated/typescript/{schema-name}/ folder.
Example:

```bash

/generated
  /typescript
    /schema1
      /models
      ...
    /schema2
      /models
      ...
```

DTO Files: Typically, these will be inside the models folder within each schema’s output directory.

## Python:

For Python, the DTOs will be generated in the ./generated/python/{schema-name}/ folder.
Example:

```bash

/generated
  /python
    /schema1
      /openapi_client
        /models
            schema
      ...
    /schema2
      /openapi_client
      ...
```

DTO Files: Python models are usually located in the openapi_client folder.

## C#:

C# DTOs will be generated in the ./generated/csharp/{schema-name}/ folder.
Example:

```bash
/generated
  /csharp
    /schema1
      /src
        /Org.schema
            /models
                /schema
        ...
    /schema2
      /src
        /models
        ...
```

DTO Files: C# models are typically located in the src/models folder.

## C++:

For C++, the generated DTOs will be found in ./generated/cpp/{schema-name}/.
Example:

```bash
/generated
  /cpp
    /src
      /model
        /schema
        ...
```

DTO Files: In C++, models are usually in the client/model folder.
