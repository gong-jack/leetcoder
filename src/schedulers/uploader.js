import { CronJob as Schedule } from "cron";

import PROBLEMS from "../config/problems.js";
import TEMPLATES from "../config/templates.js";
import GithubService from "../services/github.js";
import toFileName from "../utils/toFileName.js";
import state from "../utils/state.js";

const uploader = new Schedule(
  "00 10 * * 1,4",
  async () => {
    try {
      const github = new GithubService();
      const problemIndex = await github.getLatestProblemIndex();
      const url = PROBLEMS[problemIndex];
      const { name, code } = TEMPLATES.find((problem) => problem.url === url);

      state.setUrl(url);

      const uploadResult = await github.uploadFile({
        fileName: toFileName(name),
        content: code,
        message: `(auto upload) ${name}`,
      });

      if (!uploadResult) throw new Error();

      state.setProblem(name);
    } catch (error) {
      console.error(error);
      state.setProblem("fail");
    }
  },
  null,
  false,
  "Asia/Seoul",
);

export default uploader;
