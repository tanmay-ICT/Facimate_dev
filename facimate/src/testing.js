var obj1 = JSON.parse('{"firstName":"Elon", "hobby1":"football", "hobby2":"cars", "hobby3":"space"}');
var obj2 = JSON.parse('{"firstName":"Cristiano","hobby1":"football","hobby2":"shopping","hobby3":"music"}');

if (obj1.hobby1 == obj2.hobby1 || obj2.hobby2 || obj2.hobby3) {
    txt = "It's a match"
} else {
    txt = "No match"
}

var obj1 = JSON.parse('{"firstName":"Elon", "hobby1":"football", "hobby2":"cars", "hobby3":"space"}');
var obj2 = JSON.parse('{"firstName":"Cristiano","hobby1":"football","hobby2":"shopping","hobby3":"music"}');

if (obj1.hobby1 == obj2.hobby1 || obj1.hobby1 == obj2.hobby2 || obj1.hobby1 == obj2.hobby3){
    txt = "It's a match"
    } else if (obj1.hobby2 == obj2.hobby1 || obj1.hobby2 == obj2.hobby2 || obj1.hobby2 == obj2.hobby3){
    txt = "It's a match"
    } else if (obj1.hobby3 == obj2.hobby1 || obj1.hobby3 == obj2.hobby2 || obj1.hobby3 == obj2.hobby3){
    txt = "It's a match"
    } else {
    txt = "No match"
    }