/*
 * "312" => "333122"
 * "42054" => "444422555554444";
 */

const digitExplode = (_digit) => {
  let result = "";
  for (let i = 0; i < _digit.length; i++) {
    for (let j = 0; j < _digit[i]; j++) {
      result += _digit[i];
    }
  }
  return result;
}

const digitExplode2 = (_d) => _d.split("").map(d => d.repeat(d)).join("");
