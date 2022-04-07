
//Can you keep a secret
//https://www.codewars.com/kata/can-you-keep-a-secret
function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (val) {
      secret = val;
    }

  }
}

//Output


// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });
