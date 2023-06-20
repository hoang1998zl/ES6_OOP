import Person from "./Person.js";

export default class ListPerson {
    constructor() {
        this.arrPerson = [
            {
                id: '1',
                loai: 'Student',
                name: 'Nguyen Van A',
                address: '123abc',
                email: 'name@gmail.com',
                diemToan: 4,
                diemLy: 4,
                diemHoa: 4,
            },
            {
                id: '2',
                loai: 'Student',
                name: 'Nguyen Van B',
                address: '123abc',
                email: 'name@gmail.com',
                diemToan: 4,
                diemLy: 4,
                diemHoa: 4,
            },
            {
                id: '3',
                loai: 'Employee',
                name: 'Nguyen Van C',
                address: '123abc',
                email: 'name@gmail.com',
                soNgayLamViec: 20,
                luongNgay: 1000,
            },
            {
                id: '4',
                loai: 'Employee',
                name: 'Nguyen Van X',
                address: '123abc',
                email: 'name@gmail.com',
                soNgayLamViec: 20,
                luongNgay: 1500,
            },
            {
                id: '5',
                loai: 'Customer',
                name: 'Nguyen Van Y',
                address: '123abc',
                email: 'name@gmail.com',
                tenCongTy: 'Cty ABC',
                giaTriHoaDon: 3000,
            },
            {
                id: '6',
                loai: 'Customer',
                name: 'Nguyen Van Z',
                address: '123abc',
                email: 'name@gmail.com',
                tenCongTy: 'Cty ABC',
                giaTriHoaDon: 1000,
            },
        ];
    }

    themPerson(person) {
        this.arrPerson.push(person);
    }

    renderLayout() {
        let content = '';
        this.arrPerson.map((item, index) => {
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
        // console.log(content);

        document.getElementById('listPerson').innerHTML = content;
    }

    layGiaTriInput() {
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let address = document.getElementById('address').value;
        let email = document.getElementById('email').value;
        let loai = document.getElementById('loai').value;
        let diemToan = document.getElementById('diemToan').value * 1;
        let diemLy = document.getElementById('diemLy').value * 1;
        let diemHoa = document.getElementById('diemHoa').value * 1;
        let soNgayLamViec = document.getElementById('soNgayLamViec').value * 1;
        let luongNgay = document.getElementById('luongNgay').value * 1;
        let tenCongTy = document.getElementById('tenCongTy').value;
        let giaTriHoaDon = document.getElementById('giaTriHoaDon').value * 1;

        return person[id, name, address, email, loai, diemToan, diemLy, diemHoa, soNgayLamViec, luongNgay, tenCongTy, giaTriHoaDon]
    }

    luuLocal() {
        localStorage.setItem('arrPerson', JSON.stringify(this.arrPerson));
    }

    layLocal() {
        let listLocal = JSON.parse(localStorage.getItem('arrPerson'));
        if (listLocal) {
            this.arrPerson = [...listLocal];
            this.renderLayout();
        }
    }

    xoaPerston(id) {
        let index = this.arrPerson.findIndex((item) => item.id == id);
        if (index != -1) {
            this.arrPerson.splice(index, 1);
            this.renderLayout();
            this.luuLocal();
        }
    }

    layThongTinPerson(id) {
        let person = this.arrPerson.find((item) => item.id == id);
        if (person) {
            let arrInput = document.querySelectorAll(
                '#form input, #form select'
            );

            for (let item of arrInput) {
                let { id } = item;
                item.value = person[id];
            }
        }
        document.getElementById('id').readOnly = 'true';
        document.getElementById('id').style.backgroundColor = '#f2f2f2';
        document.getElementById('btnThem').style.display = "none";
        document.getElementById('btnCapNhat').style.display = "block";
    }

    chinhSuaPerson(person) {
        let index = this.arrPerson.findIndex((item) => item.id == person.id);
        if (index != -1) {
            this.arrPerson[index] = person;
            this.renderLayout();
            this.luuLocal();
        }
        document.getElementById('id').readOnly = 'false';
        document.getElementById('id').style.backgroundColor = 'transparent';
        document.getElementById('btnThem').style.display = "block";
        document.getElementById('btnCapNhat').style.display = "none";
    }

    changeRow() {
        let selectedType = document.getElementById('loai').value;
        let studentRow = document.getElementById('studentRow');
        let employeeRow = document.getElementById('employeeRow');
        let customerRow = document.getElementById('customerRow');

        switch (selectedType) {
            case 'Student':
                studentRow.style.display = 'flex';
                employeeRow.style.display = 'none';
                customerRow.style.display = 'none';
                break;
            case 'Employee':
                studentRow.style.display = 'none';
                employeeRow.style.display = 'flex';
                customerRow.style.display = 'none';
                break;
            case 'Customer':
                studentRow.style.display = 'none';
                employeeRow.style.display = 'none';
                customerRow.style.display = 'flex';
                break;
            default:
                studentRow.style.display = 'none';
                employeeRow.style.display = 'none';
                customerRow.style.display = 'none';
                break;
        }
    }
}