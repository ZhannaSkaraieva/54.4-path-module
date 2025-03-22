//Модуль Path в Node.js предоставляет утилиты для работы с путями к файлам и каталогам.

//1.импортируется модуль path
const path = require('node:path');
//это позволяет использовать его методы в дальнейшей работе с путями 
// абсолютными или относительными в операционных ситемах (Windows, Linux, macOS)

//Абсолютный путь — это полный путь от корня файловой системы до файла или папки. (/Users/////...)
// Он не зависит от текущей рабочей директории. 

// Относительный путь — это путь относительно текущей рабочей директории. Он зависит от того, где запущен скрипт. 
// Примеры относительных путей:
// './file.txt' → файл в той же папке, где выполняется код
// '../file.txt' → файл на уровень выше
//  folder/file.txt → файл в подпапке folder


//основные возможности этого модуля: 


// 1.path.join([...paths]) — объединяет части пути. 

// Независимо от операционной системы на которой запускается node.js- приложение т.к. позволяет неучитывать различные /.
const joinPath = path.join('folder', 'file.txt');
console.log(joinPath);

// node.js есть глобальная переменная __direname,
const joinPath1 = path.join(__dirname, 'folder', 'file.txt'); //получаем абсолютный путь
console.log('Пуль к текущей директории: ' + joinPath1);

//можем перемещаться между папками '..'
const joinPath2 = path.join(__dirname, '..', '..'); //получаем абсолютный путь
console.log('Пуль к папкам: ' + joinPath2);


// 2.path.resolve([...paths]) — всегда формирует абсолютный путь.

const resolvePath = path.resolve('folder', 'file.txt'); //получаем абсолютный путь
console.log('Абсолютный путь: ' + resolvePath);
//не использовать если не уверен в какой системе как правильно писать
const resolvePath1 = path.resolve('\folder', 'file.txt');  
console.log('Абсолютный путь: ' + resolvePath1);

// 3.path.parse(path) — разбор пути на структурные части  (распаршивание)
const parsePath = path.join(__dirname, 'folder', 'file.txt');//можно убрать __dirname и будет указана только дирректория (папка)
console.log('Парсинг пути:', path.parse(parsePath));  
//path.format(object) — создать путь из объекта

//МЕТОДЫ ПОЗВОЛЯЮЩИЕ ИЗВЛЕКАТЬ ИНФОРМАЦИЮ ИЗ ПУТИ

// 4.path.basename(path, [extension]); — получает имя файла из пути, [extension] - необязательно
console.log('Имя файла:', path.basename(joinPath1));
console.log('Имя файла:', path.basename(joinPath1, '.txt'));

// 5.path.extname(path) — получает расширение файла
console.log('Расширение файла:', path.extname(joinPath1));

// 6.path.dirname(path) — получает родительскую папку файла
console.log('Родительская папка файла:', path.dirname(joinPath1));

// 7.path.normalize()—  метод который попытается вычислить фактический путь,
// если он содержит относительные спецификаторы, такие как .или .., или двойные слеши:
console.log(path.normalize('Исправленный путь:' + '/users/zhannaskaraieva/..//file.txt')); // '/users/test.txt'


