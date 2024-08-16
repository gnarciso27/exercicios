function intercalateStrings(str1, str2){
    if (str1 !== str2){
        return null;
    }
    let str3 = "";
    for (i = 0; i < str1.length;i++){
        str3 = str3 + str1[i] + str2[i];
    }
    return str3;
}
console.log(intercalateStrings("abc", "123"));