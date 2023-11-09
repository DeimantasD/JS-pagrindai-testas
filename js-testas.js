/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log('-------------------')
console.log('PIRMA UZDUOTIS')
// function euraiIDolerius(){
//   let skaicius = Math.floor(Math.random() * 1000) + 1
//   return `${skaicius} EUR * 1.07 = ${skaicius * 1.07} $`
// }
//  console.log(euraiIDolerius())


function euroToDolerius(eurai){
   return `${eurai} EUR * 1.07 = ${eurai * 1.07} $` 
}
let skaicius = Math.floor(Math.random() * 1000) + 1
console.log(euroToDolerius(skaicius))
 console.log('')
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

console.log('-------------------')
console.log('ANTRA UZDUOTIS')

// function dollarsToEuro(){
// let doleriaiSkaic = Math.floor(Math.random() * 1000) +1
// return `${doleriaiSkaic} $ * 0.93 = ${doleriaiSkaic * 0.93} EUR`
// }
// console.log(dollarsToEuro())

function dollarsToEuro(dollars){
  console.log(`${dollars} $ * 0.93 = ${dollars * 0.93} EUR`)
}
doleriaiSkaic = Math.floor(Math.random() * 1000) + 1
dollarsToEuro(doleriaiSkaic)
 

console.log('')
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log('-------------------')
console.log('TRECIA UZDUOTIS')

function countBMI(ugis, svoris){
let bmi = svoris / ugis**2
if(bmi > 25){
  console.log('Viršsvoris')
} else if(bmi >= 18.5 && bmi < 25){
  console.log('Normalu')
} else if(bmi < 18.5){
  console.log('Per mazas svoris')
} else {
  console.log('KlAIDA')
}
}

countBMI(1.79,94)

console.log('')
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log('-------------------')
console.log('KETVIRTA UZDUOTIS')

function metaiAndMore(metai){
  let dienos = metai * 365
  let valandos = dienos * 24
  let minutes = valandos * 60
  let sekundes = minutes * 60
  console.log(`Asmeniui kuris yra ${metai} metų amžiaus:
  Dienomis jam: ${dienos},
  valandomis: ${valandos},
  minutemis: ${minutes},
  sekundemis: ${sekundes}`)
}

metaiAndMore(23)


console.log('')
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log('-------------------')
console.log('PENKTA UZDUOTIS')

function convertTemperature(degrees, unit){
  if(unit === 'C'){
    console.log(`${(degrees * 9 / 5) +32} F`)
  } else if(unit === 'F'){
    console.log(`${(degrees - 32) * 5 / 9} C`)
  } else {
    console.log('KLAIDA')
  }
}

convertTemperature(86, 'F')

console.log('')
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

console.log('-------------------')
console.log('SESTA UZDUOTIS')


// let masyvas = []
// for(let i = 1; i < 11; i++){
//   masyvas.push(i)
// }
// console.log(masyvas.join('-'))

let rezultatas = ''
for(let i = 1; i < 11; i++){
  if(i < 10) {
    rezultatas += i + '-'
  } else {
    rezultatas += i
  }
}
console.log(rezultatas)




console.log('')
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log('-------------------')
console.log('SEPTINTA UZDUOTIS')

for(let i = 1; i <= 5; i++){
  let eile = '';
  for(let k = 1; k <= i; k++){
    eile += '*'
  }
  console.log(eile)
}
 
console.log('')
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log('-------------------')
console.log('ASTUNTA UZDUOTIS')


let dabar = new Date()

let kaledudata = new Date(dabar.getFullYear(), 11, 25)

//console.log(kaledudata)

let skirtumas = kaledudata - dabar
//console.log(Math.ceil(skirtumas / (1000 *60 *60 *24)))

let kieklikodienu = Math.ceil(skirtumas / (1000 * 60 * 60 *24))

console.log('Iki kaledu liko:', kieklikodienu, 'dienos.')

console.log('')

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log('-------------------')
console.log('DEVINTA UZDUOTIS')

let masyvas = ['Tomas', 'Dainius', 'Paulius', 'Jonas']

console.log(masyvas.join(','))
console.log(masyvas.join('+'))

console.log('')
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log('-------------------')
console.log('DESIMTA UZDUOTIS')




const ilgis = 12

const DidRaides = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MazRaides = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '987654321';
const simboliai = '@#$%^&*()_+~|}{></-=';

function createPassword(){
  let password = ''
  password += DidRaides[Math.floor(Math.random() * DidRaides.length)]
  password += MazRaides[Math.floor(Math.random() * MazRaides.length)]
  password += numbers[Math.floor(Math.random() * numbers.length)]
  password += simboliai[Math.floor(Math.random() * simboliai.length)]
  
while(ilgis > password.length){
  password += DidRaides[Math.floor(Math.random() * DidRaides.length)]
  password += MazRaides[Math.floor(Math.random() * MazRaides.length)]
  password += numbers[Math.floor(Math.random() * numbers.length)]
  password += simboliai[Math.floor(Math.random() * simboliai.length)]
}
return password
}

console.log('Sukurtas slaptazodis: ',createPassword())