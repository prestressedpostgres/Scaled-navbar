const fake = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

 const generateFakeData = () => {
    let fakeData = [];
    for (let i = 0; i < 200000; i++) {
        let fakeDataObject = {
            name: fake.lorem.word() + ' ' + fake.lorem.word(),
            city: fake.address.city(),
            state: fake.address.state()
        }
        fakeData.push(fakeDataObject);
    }
    return fakeData;
 }

 const csvWrite1MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data0-1MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite2MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data1MM-2MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite3MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data2MM-3MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite4MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data3-4MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite5MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data4MM-5MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite6MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data5MM-6MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite7MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data6MM-7MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite8MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data7MM-8MM.csv'),
    header: ['name', 'city','state']
});

 const csvWrite9MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data8MM-9MM.csv'),
    header: ['name', 'city','state']
});

const csvWrite10MM = createCsvWriter({
    path: path.join(__dirname, './csvData/data9MM-10MM.csv'),
    header: ['name', 'city','state']
});
csvWrite1MM.writeRecords(generateFakeData())       // returns a promise
    .then(() => {
        console.log('...Done with first 200,000');
    });

    Promise.resolve()
    .then(() => csvWrite1MM.writeRecords(generateFakeData()))
    .then(() => csvWrite1MM.writeRecords(generateFakeData()))
    .then(() => csvWrite1MM.writeRecords(generateFakeData()))
    .then(() => csvWrite1MM.writeRecords(generateFakeData()))
    .then(()=> console.log("1MM records!"))
    .then(() => csvWrite2MM.writeRecords(generateFakeData()))
    .then(() => csvWrite2MM.writeRecords(generateFakeData()))
    .then(() => csvWrite2MM.writeRecords(generateFakeData()))
    .then(() => csvWrite2MM.writeRecords(generateFakeData()))
    .then(() => csvWrite2MM.writeRecords(generateFakeData()))
    .then(()=> console.log("2MM records!"))
    .then(() => csvWrite3MM.writeRecords(generateFakeData()))
    .then(() => csvWrite3MM.writeRecords(generateFakeData()))
    .then(() => csvWrite3MM.writeRecords(generateFakeData()))
    .then(() => csvWrite3MM.writeRecords(generateFakeData()))
    .then(() => csvWrite3MM.writeRecords(generateFakeData()))
    .then(()=> console.log("3MM records!"))
    .then(() => csvWrite4MM.writeRecords(generateFakeData()))
    .then(() => csvWrite4MM.writeRecords(generateFakeData()))
    .then(() => csvWrite4MM.writeRecords(generateFakeData()))
    .then(() => csvWrite4MM.writeRecords(generateFakeData()))
    .then(() => csvWrite4MM.writeRecords(generateFakeData()))
    .then(()=> console.log("4MM records!"))
    .then(() => csvWrite5MM.writeRecords(generateFakeData()))
    .then(() => csvWrite5MM.writeRecords(generateFakeData()))
    .then(() => csvWrite5MM.writeRecords(generateFakeData()))
    .then(() => csvWrite5MM.writeRecords(generateFakeData()))
    .then(() => csvWrite5MM.writeRecords(generateFakeData()))
    .then(()=> console.log("5MM records!"))
    .then(() => csvWrite6MM.writeRecords(generateFakeData()))
    .then(() => csvWrite6MM.writeRecords(generateFakeData()))
    .then(() => csvWrite6MM.writeRecords(generateFakeData()))
    .then(() => csvWrite6MM.writeRecords(generateFakeData()))
    .then(() => csvWrite6MM.writeRecords(generateFakeData()))
    .then(()=> console.log("6MM records!"))
    .then(() => csvWrite7MM.writeRecords(generateFakeData()))
    .then(() => csvWrite7MM.writeRecords(generateFakeData()))
    .then(() => csvWrite7MM.writeRecords(generateFakeData()))
    .then(() => csvWrite7MM.writeRecords(generateFakeData()))
    .then(() => csvWrite7MM.writeRecords(generateFakeData()))
    .then(()=> console.log("7MM records!"))
    .then(() => csvWrite8MM.writeRecords(generateFakeData()))
    .then(() => csvWrite8MM.writeRecords(generateFakeData()))
    .then(() => csvWrite8MM.writeRecords(generateFakeData()))
    .then(() => csvWrite8MM.writeRecords(generateFakeData()))
    .then(() => csvWrite8MM.writeRecords(generateFakeData()))
    .then(()=> console.log("8MM records!"))
    .then(() => csvWrite9MM.writeRecords(generateFakeData()))
    .then(() => csvWrite9MM.writeRecords(generateFakeData()))
    .then(() => csvWrite9MM.writeRecords(generateFakeData()))
    .then(() => csvWrite9MM.writeRecords(generateFakeData()))
    .then(() => csvWrite9MM.writeRecords(generateFakeData()))
    .then(()=> console.log("9MM records!"))
    .then(() => csvWrite10MM.writeRecords(generateFakeData()))
    .then(() => csvWrite10MM.writeRecords(generateFakeData()))
    .then(() => csvWrite10MM.writeRecords(generateFakeData()))
    .then(() => csvWrite10MM.writeRecords(generateFakeData()))
    .then(() => csvWrite10MM.writeRecords(generateFakeData()))
    .then(()=> console.log("10MM records!"))