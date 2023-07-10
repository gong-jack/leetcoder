import { CronJob as Schedule } from "cron";

import { PROBLEMS } from "../config/problems.js";
import { getProblemIndex, getProblem, uploadFile } from "../lib/index.js";
import { toFileName, toFileContent, state } from "../utils/index.js";

export const uploader = new Schedule(
  "*/5 * * * *",
  async () => {
    try {
      const problemIndex = await getProblemIndex();
      let problem = null;

      for await (const problemTitle of PROBLEMS.slice(problemIndex)) {
        problem = await getProblem(problemTitle);

        if (!problem.isPaidOnly) {
          break;
        }
      }

      const { title, titleSlug, codeSnippets } = problem;
      const url = `https://leetcode.com/problems/${titleSlug}`;
      const code = codeSnippets.find(({ lang }) => lang === "JavaScript").code;

      state.setUrl(url);
      state.setProblem(title);

      console.log("content - ", toFileContent(code, url));

      const uploadResult = await uploadFile({
        fileName: toFileName(title),
        content: toFileContent(code, url),
        message: `(auto upload) ${title}`,
      });

      if (!uploadResult) {
        throw new Error("Fail to upload.");
      }

      console.log(`${new Date().toISOString()}: problem upload completed.`);
    } catch (error) {
      console.error(error);
      console.log(`${new Date().toISOString()}: problem upload failed.`);
      state.setProblem("fail");
    }
  },
  null,
  false,
  "Asia/Seoul"
);
