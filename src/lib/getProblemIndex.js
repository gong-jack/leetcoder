import axios from "axios";

import GITHUB from "../config/github.js";
import { PROBLEMS } from "../config/problems.js";

async function getLatestProblem() {
  const url = `https://api.github.com/repos/${GITHUB.REPO}/git/trees/${GITHUB.BRANCH}?recursive=1`;

  try {
    const { data } = await axios({
      url,
      method: "GET",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${GITHUB.TOKEN}`,
      },
    });

    return data.tree[data.tree.length - 1].path;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProblemIndex() {
  const latestproblem = await getLatestProblem();
  const [header, index, ...fileName] = latestproblem.split(" ");
  const problemTitle = fileName.join(" ").replace(".js", "");
  const uploadedProblemIndex = PROBLEMS.findIndex(
    (problem) => problem === problemTitle
  );
  const problemIndex =
    uploadedProblemIndex !== PROBLEMS.length - 1 ? uploadedProblemIndex + 1 : 0;

  return problemIndex;
}
