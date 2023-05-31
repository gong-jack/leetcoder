import axios from "axios";
import { CronJob as Schedule } from "cron";

import CONFIG from "../config/index.js";
import { state } from "../utils/index.js";

export const awaker = new Schedule(
  "*/10 * * * *",
  async () => {
    try {
      const { data } = await axios.get(CONFIG.BASE_URL);

      if (!!data) {
        state.wakeUp();
      }
    } catch {
      state.setProblem("sleep");
    }
  },
  null,
  false,
  "Asia/Seoul"
);
