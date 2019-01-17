var newman = require('newman');

newman.run({
    collection: './Collection/MissionControlAPITest.postman_collection.json',
    environment: './Environment/StageEnvironment.postman_environment.json',
    reporters: ['cli', 'html']


}, process.exit);
