//Get the Middle Character
// https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)

{

  if (s.length < 3) 

    return s;



  if (s.length > 2) {

    if (s.length % 2 === 0) {

        var middleIndex1 = (s.length/2)-1;

        var middleIndex2 = s.length/2;
    

        return s[middleIndex1] + s[middleIndex2]

      } 
      else {

          var middleIndex = Math.floor(s.length/2);

          return s[middleIndex];

      }

  }

}
//Output
// describe("GetMiddle", function() {
//   it("Tests", function() {
//     Test.assertEquals(getMiddle("test"),"es");
//     Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });