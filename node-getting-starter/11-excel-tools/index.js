var Excel = require('exceljs');

function readExcel() {
    let fileName = './Sample-Data-Inventory-Tracker.xlsx';
    let inserts = [];

    let workbook = new Excel.Workbook();
    workbook.xlsx.readFile(fileName).then(() => {
        let worksheet = workbook.getWorksheet(1);
        worksheet.eachRow({ includeEmpty: true}, function(row, rowNumber) {
            let data = `INSERT INTO Productos VALUES (${rowNumber}, "${row.getCell(1).value}", "${row.getCell(2).value}", "${row.getCell(3).value}"`
            inserts.push(data);
        });
        console.log(inserts);
    });
};

readExcel();

