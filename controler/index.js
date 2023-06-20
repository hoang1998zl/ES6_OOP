import ListPerson from "../models/ListPerson.js";
import Person from "../models/Person.js";

let listPerson = new ListPerson();

listPerson.layLocal();

document.getElementById('btnThem').addEventListener('click', () => {
    let arrInput = document.querySelectorAll(
        '#form input, #form select'
    );

    let person = new Person();

    for (let item of arrInput) {
        let { id, value } = item;
        person[id] = value;
    }

    listPerson.themPerson(person);
    listPerson.renderLayout();
    listPerson.luuLocal();
});
window.xoaPerson = (id) => {
    listPerson.xoaPerston(id);
}

window.layThongTinPerson = (id) => {
    listPerson.layThongTinPerson(id);
    listPerson.changeRow();
}

listPerson.arrPerson.sort((a, b) => a.id.localeCompare(b.id));
listPerson.renderLayout();

document.getElementById('btnCapNhat').addEventListener('click', () => {
    let arrInput = document.querySelectorAll(
        '#form input, #form select'
    );

    let person = new Person();

    for (let item of arrInput) {
        let { id, value } = item;
        person[id] = value;
    }

    listPerson.chinhSuaPerson(person);
    document.getElementById('btnReset').click();
});

document.getElementById('btnSapXepTheoTen').addEventListener('click', () => {
    listPerson.arrPerson.sort((a, b) => a.name.localeCompare(b.name));
    console.log(listPerson.arrPerson);
    listPerson.renderLayout();
});

document.getElementById('btnSapXepTheoLoai').addEventListener('change', () => {
    let filterArr = listPerson.arrPerson.filter(person => person.loai === document.getElementById('btnSapXepTheoLoai').value);

    let content = '';
    filterArr.map((item, index) => {
        let person = new Person();
        Object.assign(person, item);

        let {
            id,
            loai,
            name,
            address,
            email,
            diemTrungBinh,
            tongLuong,
            danhGia,
        } = person;

        let contentRieng = (loai) => {
            if (loai == "Student") {
                return `Điểm trung bình: ${diemTrungBinh()}`;
            } else if (loai == "Employee") {
                return tongLuong();
            } else if (loai == "Customer") {
                return danhGia();
            } else {
                return 'Lỗi';
            };
        }

        content += `<tr>
                        <td>${id}</td>
                        <td>${loai}</td>
                        <td>${name}</td>
                        <td>${address}</td>
                        <td>${email}</td>
                        <td>${contentRieng(loai)}</td>
                        <td>
                            <button class="btn btn-danger" onclick="xoaPerson('${id}');">Xoá</button>
                            <button class="btn btn-warning" onclick="layThongTinPerson('${id}')">Sửa</button>
                        </td>
                    </tr>`;
    });

    document.getElementById('listPerson').innerHTML = content;
});

document.getElementById('btnSapXepTheoId').addEventListener('click', () => {
    listPerson.arrPerson.sort((a, b) => a.id.localeCompare(b.id));
    console.log(listPerson.arrPerson);
    listPerson.renderLayout();
});

document.getElementById('loai').addEventListener('change', () => {
    listPerson.changeRow();
});