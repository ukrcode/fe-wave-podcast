import { NodeHtmlMarkdown } from "node-html-markdown";
import fs from "fs/promises";
import path from "path";
import minimist from "minimist";
import { fileURLToPath } from "url";

async function readFile() {
  const args = minimist(process.argv.slice(2));

  // Resolve the directory of the current file
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Resolve the full file path
  const fullFilePath = path.resolve(__dirname, args.file);
  const fullResultPath = path.resolve(__dirname, args.result);

  const file = await fs.readFile(fullFilePath, "utf8");

  const mdContent = NodeHtmlMarkdown.translate(file);

  await fs.writeFile(fullResultPath, mdContent, "utf8");
}

readFile();

// Single file
NodeHtmlMarkdown.translate(
  /* html */ `<b>hello</b>`,
  /* options (optional) */ {},
  /* customTranslators (optional) */ undefined,
  /* customCodeBlockTranslators (optional) */ undefined
);

// Multiple files
NodeHtmlMarkdown.translate(
  /* FileCollection */ {
    "file1.html": `<b>hello</b>`,
    "file2.html": `<b>goodbye</b>`,
  },
  /* options (optional) */ {},
  /* customTranslators (optional) */ undefined,
  /* customCodeBlockTranslators (optional) */ undefined
);

/* ********************************************************* *
 * Re-use
 * If using it several times, creating an instance saves time
 * ********************************************************* */

const nhm = new NodeHtmlMarkdown(
  /* options (optional) */ {},
  /* customTransformers (optional) */ undefined,
  /* customCodeBlockTranslators (optional) */ undefined
);

// Single file
nhm.translate(/* html */ `<b>hello</b>`);

// Multiple Files
nhm.translate(
  /* FileCollection */ {
    "file1.html": `<b>hello</b>`,
    "file2.html": `<b>goodbye</b>`,
  }
);
