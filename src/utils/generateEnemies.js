// @flow

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
}

const generateEnemies = (n: number) => {
  if(!n) return {}

  const result = {}
  const ids = Array(n).fill(null).map((_,i) => '' + (i + 1))
  ids.forEach(id => result[id] = [])
  Object.keys(result).forEach(id => {
    const enemies = result[id]
    const needed = 3 - enemies.length
    let availables = ids.filter(otherId =>
      id !== otherId &&
      !enemies.includes(otherId) &&
      result[otherId].length < 3
    )
    if (needed > 0 && availables.length > 0) {
      const toAdd = shuffle(availables).slice(0, needed)
      result[id] = result[id].concat(toAdd)
      toAdd.forEach(idToAdd => result[idToAdd].push(id))
    }
  })

  return result
}


export default generateEnemies
