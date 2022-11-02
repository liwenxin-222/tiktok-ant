const fs = require("fs");
const colors = require("colors/safe");
const child_process = require("child_process");
const prompt = require("prompt");

const tag_split_reg = /^(\d+)\.(\d+)\.(\d+)$/;
const quit_process = () => process.exit(1);

const promptPropsSchema = {
  properties: {
    confirm_info: {
      description: "确认? - (Enter/NO)",
      // required: true,
      // pattern: /^[0-9]{1,6}$/,
      // message: "'tenantId' 必须是数字",
      ask: function(){
        // 可以在此建立条件，是否询问输入，有些值可能会在别的输入中一并处理了
        return true;
      }
    },
  }
};

prompt.message = colors.cyan("\nRelease Confirm");

const DIFF = child_process.execSync(`git diff`).toString().trim();

if (DIFF) {
  console.log("ERROR-->", colors.red('您有未暂存的变更。请提交或贮藏它们'));
  process.exit(1);
}

child_process.execSync(`git pull`);

console.log("");

// 查询上一个版本，验证指定的版本号，尾部 +1
let lastReleaseVer = getLastReleaseTag({ last_release_check: true });

// 版本号尾部 + 1
let newReleaseVer = lastReleaseVer.replace(tag_split_reg, function(match, $1, $2, $3){
  return $1 + "." + $2 + "." + ($3 * 1 + 1);
});
console.log("new TAG", colors.cyan(newReleaseVer));
confirm().then(
  () => release(newReleaseVer),
  quit_process
);

function getLastReleaseTag( opt={} ){

  // 最新tag
  const lastReleaseVer = child_process.execSync('git describe --tags `git rev-list --tags --max-count=1`').toString().trim();
  const BRANCH_NAME = child_process.execSync(`git rev-parse --abbrev-ref HEAD`).toString().trim();

  console.log("LAST RELEASE", lastReleaseVer ? colors.cyan(lastReleaseVer) : colors.red("undefined"));
  console.log("BRANCH_NAME", colors.cyan(BRANCH_NAME));

  return lastReleaseVer;
}

async function release(tag){
  console.log(colors.cyan(`tag=${tag} ...ok`));
  console.log(colors.green("执行中，请稍后"));
  try{

    const curReleaseVer = await fs.readFileSync('./release_tag', 'utf8');

    fs.writeFileSync("./release_tag", tag, {
      encoding: "utf8",
      flag: "w"
    });

    if (curReleaseVer !== tag) {
      child_process.execSync(`git add ./release_tag`);
      child_process.execSync(`git commit -m ${tag} ./release_tag --force`);
      child_process.execSync(`git tag ${tag}`);
    }
    // const IS_clear = child_process.execSync(`git diff`).toString().trim();
    // console.log(IS_clear);
    child_process.execSync(`git push`);
    child_process.execSync(`git push --tags`);
  }
  catch(error){
    console.log(error);
  }
}

function confirm(){
  return new Promise(function(resolve, reject){
    prompt.start();
    prompt.get(
      promptPropsSchema,
      function(err, res){
        if(res.confirm_info && res.confirm_info.toLowerCase() === "no"){
          reject();
        }
        else if(err){
          reject();
        }
        else{
          resolve();
        }
      }
    );
  });
};
