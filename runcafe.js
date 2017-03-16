var createTestCafe = require('testcafe');
const testCafe       = await createTestCafe('localhost', 1337, 1338);

const failed = await testCafe
    .createRunner()
    .src(['simpletest.js'])
    .browsers(['chrome'])
    .run();

console.log('Tests failed: ' + failed);
