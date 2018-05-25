const fs = require('fs');
const expectedResult = '[{"GroupName":"System Administrators","Groupcode ":"sysadmin","GroupOwner":"13456","GroupCategoryID ":"100"},{"GroupName":"Independence High Teachers","Groupcode ":"HS Teachers","GroupOwner":"","GroupCategoryID ":"101"},{"GroupName":"John Glenn Middle Teachers","Groupcode ":"MS Teachers","GroupOwner":"13458","GroupCategoryID ":"102"},{"GroupName":"Liberty Elementary Teachers","Groupcode ":"Elem Teachers","GroupOwner":"13559","GroupCategoryID ":"103"},{"GroupName":"1st Grade Teachers","Groupcode ":"1stgrade","GroupOwner":"","GroupCategoryID ":"104"},{"GroupName":"2nd Grade Teachers","Groupcode ":"2nsgrade","GroupOwner":"13561","GroupCategoryID ":"105"},{"GroupName":"3rd Grade Teachers","Groupcode ":"3rdgrade","GroupOwner":"13562","GroupCategoryID ":"106"},{"GroupName":"Guidance Department","Groupcode ":"guidance","GroupOwner":"","GroupCategoryID ":"107"},{"GroupName":"Independence Math Teachers","Groupcode ":"HS Math","GroupOwner":"13660","GroupCategoryID ":"108"},{"GroupName":"Independence English Teachers","Groupcode ":"HS English","GroupOwner":"13661","GroupCategoryID ":"109"},{"GroupName":"John Glenn 8th Grade Teachers","Groupcode ":"8thgrade","GroupOwner":"","GroupCategoryID ":"110"},{"GroupName":"John Glenn 7th Grade Teachers","Groupcode ":"7thgrade","GroupOwner":"13452","GroupCategoryID ":"111"},{"GroupName":"Elementary Parents","Groupcode ":"Elem Parents","GroupOwner":"","GroupCategoryID ":"112"},{"GroupName":"Middle School Parents","Groupcode ":"MS Parents","GroupOwner":"18001","GroupCategoryID ":"113"},{"GroupName":"High School Parents","Groupcode ":"HS Parents","GroupOwner":"18002","GroupCategoryID ":"114"}]';

fs.readFile('sample.csv', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const result = [];
  const lines = data.split('\r\n');
  const tabKey = lines[0].split(',')

  for (let i = 1; i < lines.length - 1; i++) {
    const tabValue = lines[i].split(',');
    const monObj = {};

    for (let j = 0; j < tabValue.length; j++) {
      monObj[tabKey[j]] = tabValue[j]
    }
    
    result.push(monObj)
  }

  console.log(finalResult)
});