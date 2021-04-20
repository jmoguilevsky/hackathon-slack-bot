import StepTypesEnum from "../common/enums/StepTypes.enum";
import { FlowProject, Step } from "../common/types/FlowProject";

const bucketName = "https://s3.amazonaws.com/tedxvicentelopez.com";

const styles =
  ".flow-decision-tree{box-sizing:border-box;outline:0;margin:0;padding:0;list-style:none;display:flex;align-items:flex-start;justify-content:space-around;width:100%;text-align:center;font-size:2vw}.flow-decision-tree *,.flow-decision-tree ::after,.flow-decision-tree ::before{box-sizing:border-box;outline:0;margin:0;padding:0;list-style:none}.flow-decision-tree ul{display:flex;align-items:flex-start;justify-content:space-around;position:relative;padding:0}.flow-decision-tree ul:after{content:'';position:absolute;top:0;left:50%;height:10px;border-left:1px solid #d3d3d3}.flow-decision-tree>ul{padding:0}.flow-decision-tree li{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;padding:20px 10px 0 10px}.flow-decision-tree li:before{content:'';position:absolute;top:10px;width:100%;border-top:1px solid #d3d3d3}.flow-decision-tree li:after{content:'';position:absolute;top:10px;left:50%;height:10px;border-left:1px solid #d3d3d3}.flow-decision-tree li:first-child:before{left:50%;width:50%}.flow-decision-tree li:last-child:before{right:50%;width:50%}.flow-decision-tree li:only-child:before{display:none}.flow-decision-tree>li{padding:0}.flow-decision-tree>li:after,.flow-decision-tree>li:before{display:none}.icon{width:50px;height:50px;background-size:contain;background-repeat:no-repeat;background-position:center;margin:5px}";

function getFlowHTMLStructure(flow: FlowProject) {
  return `<html><style>${styles}</style><body><ul class="flow-decision-tree">${getStepHTMLStructure([
    flow.trigger,
    ...flow.steps,
  ])}</ul></body></html>`;
}

function getStepHTMLStructure(stepList: Array<Step>): string {
  if (!stepList || stepList.length < 1) {
    return "";
  }
  const [step, ...nextSteps] = stepList;
  if (step?.type === StepTypesEnum.ACTION || step?.type === StepTypesEnum.TRIGGER) {
    const nextStepsImages = nextSteps.length ? `<ul>${getStepHTMLStructure(nextSteps)}</ul>` : "";
    return `<li><div role="img" class="icon" style="background-image: url(${bucketName}/${step.connector}.png);"></div>${nextStepsImages}</li>`;
  }
  if (step?.type === StepTypesEnum.CONDITIONAL) {
    const branches = step.elseBranch ? [...step.conditionsBranches, step.elseBranch] : step.conditionsBranches;
    const branchesHTML = branches.map((branch) => getStepHTMLStructure(branch.steps)).join("");
    return `<li><div role="img" class="icon" style="background-image: url(${bucketName}/choice.png);"></div><ul>${branchesHTML}</ul></li>`;
  }
  return "";
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require("puppeteer");

export async function createFlowImage(flow: FlowProject): Promise<void> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const content = getFlowHTMLStructure(flow);
  await page.setContent(content);
  await page.screenshot({ path: `./public/${flow.name?.replace(/ /g, "_")}.png` });
  await browser.close();
}
