const normalizeDivinity = (divinity) => divinity.charAt(0).toUpperCase() + divinity.slice(1);
const withAutor = (obj, author) => author ? Object.assign(obj, { subtitle: `- ${author}`}) : obj;        
const possessivise = (divinity) => {
  const isEndingInS = (divinity.charAt(divinity.length-1) === 's');
  return `${divinity}'${ (isEndingInS) ? '' : 's' }`;
}

const swear = params => {
  const divinity = normalizeDivinity(params.divinity);
  const animal = normalizeDivinity(params.animal);

  return withAutor({
    message: `${divinity} ${animal}!`
  }, params.author);
};
 
const sake = params => {
  const divinity = normalizeDivinity(params.divinity);

  return withAutor({
    message: `For ${possessivise(divinity)} sake!`
  }, params.author);
};
    
const holy = params => {
  const divinity = normalizeDivinity(params.divinity);

  return withAutor({
    message: `Holy ${divinity}!`
  }, params.author);
};

const ohmy = params => {
  const divinity = normalizeDivinity(params.divinity);

  return withAutor({
    message: `Oh my fucking ${divinity}!`
  }, params.author);
};

const bloody = params => {
  const divinity = normalizeDivinity(params.divinity);

  return withAutor({
    message: `Bloody ${divinity}!`
  }, params.author);
};

const blood = params => {
  const divinity = normalizeDivinity(params.divinity);

  return withAutor({
    message: `By the blood of ${divinity}!`
  }, params.author);
};

const nails = params => {
  const divinity = normalizeDivinity(params.divinity);

  return withAutor({
    message: `By ${possessivise(divinity)} nails!`
  }, params.author);
};

module.exports = {
  blood,
  bloody,
  holy,
  nails,
  ohmy,
  sake,
  swear
};

