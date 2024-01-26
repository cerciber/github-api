module.exports = {
  enviroment: process.env.ENV || 'develop',
  frameworks: {
    web: {
      express: {
        port: Number(process.env.EXPRESS_PORT) || 3000,
      },
    },
    logger: {
      winston: {
        maxBitsPerFile:
          Number(process.env.WINSTON_MAX_BITS_PER_FILE) || 5120000,
        maxFiles: Number(process.env.WINSTON_MAX_FILES) || 5,
      },
    },
    octokit: {
      gitHubApiKey: process.env.GITHUB_API_KEY,
    },
  },
  application: {},
  entities: {},
};
