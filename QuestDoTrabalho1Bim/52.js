function InverterString(str){
    let separar = str.split('');
    let reveter = separar.reverse();
    let juntarR = reveter.join('');
    return juntarR;
}
const ola = 'ola mundo';
console.log(InverterString(ola));