const json1 = '{"name": "Bruce", "lastname": "Wayne", "city": "Gotham"}';
const json2 = '{name: "Bruce", lastname: "Wayne", city: "Gotham"}';


try {
  console.log(JSON.parse(json1));
  console.log(JSON.parse(json2));
} catch (error) {
  console.error('JSON non valide');
  console.log("erreur: ", error);
}
console.log('termine');
