function byName( a, b ) { 
  if (a.name == b.name) {
    return 0;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
};

exports.byName = byName;

function byExp( a, b ) { 
  return a.experience - b.experience;
};

exports.byExperience = byExp;
exports.byExp = byExp;
