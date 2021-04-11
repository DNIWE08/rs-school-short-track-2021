/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const name = names;
  const newName = [];
  let checkArr = [];
  const checkObj = {};
  for (let j = 0; j <= name.length; j++) {
    checkObj[name[j]] = 0;
  }
  for (let i = 0; i <= name.length; i++) {
    checkArr = newName.slice(0, i);
    if (!checkArr.includes(name[i])) {
      newName.push(name[i]);
    } else {
      checkObj[name[i]]++;
      newName.push(`${name[i]}(${checkObj[name[i]]})`);
    }
  }
  newName.splice(newName.length - 1, 1);
  return newName;
}

module.exports = renameFiles;
