import axios from "axios";
import { encode } from "js-base64";
import GITHUB from "../config/github.js";

const START_DATE = new Date("2023-01-14T00:00:00.000Z");
const UPLOAD_FAIL_OFFSET = 2;

class GithubService {
  async getLatestProblemIndex() {
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

      return data.tree
        .filter((file) => {
          let header = "";
          let isHeader = false;

          for (const chr of file.path) {
            if (chr === "[") {
              isHeader = true;
              continue;
            } else if (chr === "]") {
              break;
            }

            if (isHeader) {
              header += chr;
            }
          }

          const fileDate = new Date(`20${header.slice(0, 2)}-${header.slice(2, 4)}-${header.slice(4, 6)}`);

          if (fileDate === "Invalid Date") {
            return false;
          }

          return START_DATE < new Date(fileDate);
        })
        .length - UPLOAD_FAIL_OFFSET;
    } catch (error) {
      throw new Error(error);
    }
  }

  async uploadFile({ fileName, content, message }) {
    const url = `https://api.github.com/repos/${GITHUB.REPO}/contents/problems/${fileName}`;

    try {
      const { data } = await axios({
        url,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${GITHUB.TOKEN}`,
        },
        data: JSON.stringify({
          branch: GITHUB.BRANCH,
          message,
          content: encode(content),
        }),
      });

      return data.commit?.sha;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default GithubService;
