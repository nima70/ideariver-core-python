const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Directories
const SCHEMA_DIR = "./openapi-schemas"; // Folder containing all schema files
const OUTPUT_DIR = "./generated"; // Base output folder for all generated code

// Ensure the base output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Function to generate code for TypeScript
const generateTypeScriptCode = (schemaPath, schemaName) => {
  const outputDirTS = path.join(OUTPUT_DIR, "typescript", schemaName);
  if (!fs.existsSync(outputDirTS)) {
    fs.mkdirSync(outputDirTS, { recursive: true });
  }

  try {
    execSync(
      `npx openapi-generator-cli generate -i ${schemaPath} -g typescript-fetch -o ${outputDirTS} --skip-validate-spec`,
      { stdio: "inherit" }
    );
    console.log(`TypeScript code generated for ${schemaName}`);
  } catch (error) {
    console.error(
      `Error generating TypeScript code for ${schemaName}:`,
      error.message
    );
  }
};

// Function to generate code for Python
const generatePythonCode = (schemaPath, schemaName) => {
  const outputDirPY = path.join(OUTPUT_DIR, "python", schemaName);
  if (!fs.existsSync(outputDirPY)) {
    fs.mkdirSync(outputDirPY, { recursive: true });
  }

  try {
    execSync(
      `npx openapi-generator-cli generate -i ${schemaPath} -g python -o ${outputDirPY} --skip-validate-spec`,
      { stdio: "inherit" }
    );
    console.log(`Python code generated for ${schemaName}`);
  } catch (error) {
    console.error(
      `Error generating Python code for ${schemaName}:`,
      error.message
    );
  }
};

// Function to generate code for C#
const generateCSharpCode = (schemaPath, schemaName) => {
  const outputDirCS = path.join(OUTPUT_DIR, "csharp", schemaName);
  if (!fs.existsSync(outputDirCS)) {
    fs.mkdirSync(outputDirCS, { recursive: true });
  }

  try {
    execSync(
      `npx openapi-generator-cli generate -i ${schemaPath} -g csharp -o ${outputDirCS} --skip-validate-spec`,
      { stdio: "inherit" }
    );
    console.log(`C# code generated for ${schemaName}`);
  } catch (error) {
    console.error(`Error generating C# code for ${schemaName}:`, error.message);
  }
};

// Function to generate code for C++
const generateCppCode = (schemaPath, schemaName) => {
  const outputDirCPP = path.join(OUTPUT_DIR, "cpp", schemaName);
  if (!fs.existsSync(outputDirCPP)) {
    fs.mkdirSync(outputDirCPP, { recursive: true });
  }

  try {
    execSync(
      `npx openapi-generator-cli generate -i ${schemaPath} -g cpp-restsdk -o ${outputDirCPP} --skip-validate-spec`,
      { stdio: "inherit" }
    );
    console.log(`C++ code generated for ${schemaName}`);
  } catch (error) {
    console.error(
      `Error generating C++ code for ${schemaName}:`,
      error.message
    );
  }
};

// Function to generate code based on selected languages
const generateCodeForLanguages = (schemaFile, languages) => {
  const schemaPath = path.join(SCHEMA_DIR, schemaFile);
  const schemaName = path.basename(schemaFile, ".yaml");

  // Generate code for each selected language
  if (languages.includes("typescript"))
    generateTypeScriptCode(schemaPath, schemaName);
  if (languages.includes("python")) generatePythonCode(schemaPath, schemaName);
  if (languages.includes("csharp")) generateCSharpCode(schemaPath, schemaName);
  if (languages.includes("cpp")) generateCppCode(schemaPath, schemaName);
};

// Parse command-line arguments
const args = process.argv.slice(2);
const selectedLanguages = args.includes("all")
  ? ["typescript", "python", "csharp", "cpp"]
  : args.filter((arg) =>
      ["typescript", "python", "csharp", "cpp"].includes(arg)
    );

// Validate arguments
if (selectedLanguages.length === 0) {
  console.error(
    "Please specify at least one language: typescript, python, csharp, cpp, or 'all'."
  );
  process.exit(1);
}

// Read all YAML files in the schema directory
const schemaFiles = fs
  .readdirSync(SCHEMA_DIR)
  .filter((file) => file.endsWith(".yaml"));

// Generate code for each schema file based on the selected languages
schemaFiles.forEach((schemaFile) => {
  generateCodeForLanguages(schemaFile, selectedLanguages);
});

console.log("Code generation completed for all schemas.");

// const { execSync } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// // Directories
// const SCHEMA_DIR = "./openapi-schemas"; // Folder containing all schema files
// const OUTPUT_DIR = "./generated"; // Base output folder for all generated code

// // Ensure the base output directory exists
// if (!fs.existsSync(OUTPUT_DIR)) {
//   fs.mkdirSync(OUTPUT_DIR);
// }

// // Function to generate TypeScript, Python, C#, and C++ code for each schema
// const generateCode = (schemaFile) => {
//   console.log(`Generating code for ${schemaFile}...`);

//   const schemaPath = path.join(SCHEMA_DIR, schemaFile);

//   // Create subdirectories based on the schema file name (without extension)
//   const schemaName = path.basename(schemaFile, ".yaml");
//   const outputDirTS = path.join(OUTPUT_DIR, "typescript", schemaName);
//   const outputDirPY = path.join(OUTPUT_DIR, "python", schemaName);
//   const outputDirCS = path.join(OUTPUT_DIR, "csharp", schemaName);
//   const outputDirCPP = path.join(OUTPUT_DIR, "cpp", schemaName);

//   // Ensure all subdirectories exist for this schema
//   if (!fs.existsSync(outputDirTS)) {
//     fs.mkdirSync(outputDirTS, { recursive: true });
//   }
//   if (!fs.existsSync(outputDirPY)) {
//     fs.mkdirSync(outputDirPY, { recursive: true });
//   }
//   if (!fs.existsSync(outputDirCS)) {
//     fs.mkdirSync(outputDirCS, { recursive: true });
//   }
//   if (!fs.existsSync(outputDirCPP)) {
//     fs.mkdirSync(outputDirCPP, { recursive: true });
//   }

//   try {
//     // Generate TypeScript code for this schema
//     execSync(
//       `npx openapi-generator-cli generate -i ${schemaPath} -g typescript-fetch -o ${outputDirTS} --skip-validate-spec`,
//       { stdio: "inherit" }
//     );

//     // Generate Python code for this schema
//     execSync(
//       `npx openapi-generator-cli generate -i ${schemaPath} -g python -o ${outputDirPY} --skip-validate-spec`,
//       { stdio: "inherit" }
//     );

//     // Generate C# code for this schema
//     execSync(
//       `npx openapi-generator-cli generate -i ${schemaPath} -g csharp -o ${outputDirCS} --skip-validate-spec`,
//       { stdio: "inherit" }
//     );

//     // Generate C++ code for this schema
//     execSync(
//       `npx openapi-generator-cli generate -i ${schemaPath} -g cpp-restsdk -o ${outputDirCPP} --skip-validate-spec`,
//       { stdio: "inherit" }
//     );

//     console.log(`Code generation completed for ${schemaFile}`);
//   } catch (error) {
//     console.error(`Error generating code for ${schemaFile}:`, error.message);
//   }
// };

// // Read all YAML files in the schema directory
// const schemaFiles = fs
//   .readdirSync(SCHEMA_DIR)
//   .filter((file) => file.endsWith(".yaml"));

// // Generate code for each schema file
// schemaFiles.forEach(generateCode);

// console.log("Code generation completed for all schemas.");

// // const { execSync } = require("child_process");
// // const fs = require("fs");
// // const path = require("path");

// // // Directories
// // const SCHEMA_DIR = "./openapi-schemas"; // Folder containing all schema files
// // const OUTPUT_DIR = "./generated"; // Base output folder for all generated code

// // // Ensure the base output directory exists
// // if (!fs.existsSync(OUTPUT_DIR)) {
// //   fs.mkdirSync(OUTPUT_DIR);
// // }

// // // Function to generate TypeScript and Python code for each schema
// // const generateCode = (schemaFile) => {
// //   console.log(`Generating code for ${schemaFile}...`);

// //   const schemaPath = path.join(SCHEMA_DIR, schemaFile);

// //   // Create subdirectories based on the schema file name (without extension)
// //   const schemaName = path.basename(schemaFile, ".yaml");
// //   const outputDirTS = path.join(OUTPUT_DIR, "typescript", schemaName);
// //   const outputDirPY = path.join(OUTPUT_DIR, "python", schemaName);

// //   // Ensure TypeScript and Python subdirectories exist for this schema
// //   if (!fs.existsSync(outputDirTS)) {
// //     fs.mkdirSync(outputDirTS, { recursive: true });
// //   }
// //   if (!fs.existsSync(outputDirPY)) {
// //     fs.mkdirSync(outputDirPY, { recursive: true });
// //   }

// //   try {
// //     // Generate TypeScript code for this schema
// //     execSync(
// //       `npx openapi-generator-cli generate -i ${schemaPath} -g typescript-fetch -o ${outputDirTS} --skip-validate-spec`,
// //       { stdio: "inherit" }
// //     );

// //     // Generate Python code for this schema
// //     execSync(
// //       `npx openapi-generator-cli generate -i ${schemaPath} -g python -o ${outputDirPY} --skip-validate-spec`,
// //       { stdio: "inherit" }
// //     );

// //     console.log(`Code generation completed for ${schemaFile}`);
// //   } catch (error) {
// //     console.error(`Error generating code for ${schemaFile}:`, error.message);
// //   }
// // };

// // // Read all YAML files in the schema directory
// // const schemaFiles = fs
// //   .readdirSync(SCHEMA_DIR)
// //   .filter((file) => file.endsWith(".yaml"));

// // // Generate code for each schema file
// // schemaFiles.forEach(generateCode);

// // console.log("Code generation completed for all schemas.");
