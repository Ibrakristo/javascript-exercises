const findTheOldest = function(x) {
return x.reduce(function(old,person){
    if(!person.yearOfDeath) person.yearOfDeath = 2022;
    if(!old.yearOfDeath) old.yearOfDeath = 2022;
    let fage = person.yearOfDeath - person.yearOfBirth;
    let eage = old.yearOfDeath - old.yearOfBirth;
    return eage>fage? old: person;
} );
};

// Do not edit below this line
module.exports = findTheOldest;
