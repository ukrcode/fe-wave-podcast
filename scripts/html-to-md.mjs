import { NodeHtmlMarkdown } from "node-html-markdown";
import fs from "fs/promises";
import path from "path";
import minimist from "minimist";
import { fileURLToPath } from "url";

async function convertHtmlFileToMd() {
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

  console.log(`CONVERED HTML FILE TO MD FILE
    FROM 
    ${fullFilePath} 
    TO 
    ${fullResultPath}`);
}

convertHtmlFileToMd();
