function graduate(credential) {
  function aFunc(fullName) {
    return fullName + ', ' + credential;
  }
  return aFunc;
}

const medicalSchool = graduate('M.D.');

const lawSchool = graduate('Esq.');

console.log(medicalSchool('Sarah Ocampo'));
console.log(lawSchool('Sarah Ocampo'));
