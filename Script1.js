let sale = "999";

if (sale < "1000") {
    console.log("������ �� �������������");
} else if (sale >= "1000" && sale < "2000") {
    sale = sale * 0.95;
    console.log(sale, "������ 5%");
} else if (sale >= "2000" && sale < "3000") {
    sale = sale * 0.9;
    console.log(sale, "������ 10%");
} else if (sale >= "3000") {
    sale = sale * 0.9;
    console.log(sale, "������ 10% + �������");
}

let month = '���';
switch (month) {
    case '�������':
    case '������':
    case '�������':
        console.log("����");
        break; 
    case '����':
    case '������':
    case '���':
        console.log("�����");
        break;
    case '����':
    case '����':
    case '������':
        console.log("����");
        break;
    case '��������':
    case '�������':
    case '������':
        console.log("�����");
        break;
    default: 
        console.log("���� ���������, 13 ������ ���� ��� ����� �� ��������");
}

let min = 1;
let max = 7;
let random = Math.random() * (+max - +min) + +min;
let num = 1;
if (num === random && num != 0) {
    console.log("�� �������");
} else if (num > random && num != 0) {
    console.log("����� ������");
} else if (num < random && num != 0) {
    console.log("����� ������");
} else if (num === 0) {
    console.log("�����");
}

let numbs = [1, 2, 3, 4, 5, 6, 7];
