function initializeEncryptionEnv(string) {
  let arr = string.split("");
  let encryptedArr = [];
  let upperCaseStart = "A".charCodeAt(0);
  let upperCaseEnd = "Z".charCodeAt(0);
  let lowerCaseStart = "a".charCodeAt(0);
  let lowerCaseEnd = "z".charCodeAt(0);

  return {
    arr,
    encryptedArr,
    upperCaseStart,
    upperCaseEnd,
    lowerCaseStart,
    lowerCaseEnd
  };
}

var encrypt = function(string, shiftAmount) {
  let {
    arr,
    encryptedArr,
    upperCaseStart,
    upperCaseEnd,
    lowerCaseStart,
    lowerCaseEnd
  } = initializeEncryptionEnv(string);
  let lookupTable = {};

  arr.forEach(element => {
    if (element.match(/[^a-z]/i)) {
      encryptedArr.push(element);
    } else {
      // it's an alphabet -
      let addedToArr = false;

      // it's upper case
      if (element.match(/[A-Z]/)) {
        if (element.charCodeAt(0) + shiftAmount > upperCaseEnd) {
          let tmpCharCode = element.charCodeAt(0) + shiftAmount - upperCaseEnd;
          encryptedArr.push(
            String.fromCharCode(upperCaseStart + tmpCharCode - 1)
          );
          addedToArr = true;
        }
      } else {
        // it's lower case
        if (element.charCodeAt(0) + shiftAmount > lowerCaseEnd) {
          let tmpCharCode = element.charCodeAt(0) + shiftAmount - lowerCaseEnd;
          encryptedArr.push(
            String.fromCharCode(lowerCaseStart + tmpCharCode - 1)
          );
          addedToArr = true;
        }
      }
      if (!addedToArr) {
        encryptedArr.push(
          String.fromCharCode(element.charCodeAt(0) + shiftAmount)
        );
      }
    }

    // generate lookup table to facilitate decryption later
    lookupTable[element] = encryptedArr[encryptedArr.length - 1];
  });
  return encryptedArr.join("");
};

var decrypt = function(string, shiftAmount) {
  // YOUR SOLUTION HERE
};

// DO NOT TOUCH THIS PART OF THE CODE!
if (
  process.argv[2] ===
  "Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx"
) {
  console.log(decrypt(process.argv[2], 19));
}
module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};
