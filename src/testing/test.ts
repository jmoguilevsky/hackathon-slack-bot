import { runHistoryToBlocks } from "../services/blocksTransformer";
import { getRunHistory } from "../services/citizenApi";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

async function run() {
  const flowId = "02fb7bdb-f1f3-4de3-a3b0-a2be9f205380";
  const runHistory = await getRunHistory(flowId);
  console.log(runHistory);
  console.log(JSON.stringify(runHistoryToBlocks(runHistory), null, 2));
}

run();
