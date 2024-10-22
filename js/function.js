
function flattenAndShuffle(array) {
  const flatArray = array.flat(); // Aplatir le tableau 2D
  for (let i = flatArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Échange des éléments
    [flatArray[i], flatArray[j]] = [flatArray[j], flatArray[i]];
  }
  return flatArray; // Retourner le tableau mélangé
}
export { flattenAndShuffle };
