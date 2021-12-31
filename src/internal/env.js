/**
 * 获取对应的解析器 Parser
 * @param {CustomOptions} options
 * @returns
 */
function getTargetEnv(options) {
  const { env } = options;
  const targetEnvs = {
    es2020: true,
  };
  if (env && Object.prototype.toString.call(env) === '[object Array]') {
    env.forEach((key) => {
      targetEnvs[key] = true;
    });
  } else {
    targetEnvs.browser = true;
    targetEnvs.node = true;
  }

  return targetEnvs;
}

module.exports = {
  getTargetEnv,
};
