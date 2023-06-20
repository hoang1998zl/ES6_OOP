import Person from '../models/Person.js';
// import ListPerson from '../models/ListPerson.js';
import Helper from '../controler/helper.js';



function xoaPerson(id) {
    let index = arrPerson.findIndex((item) => item.id == id);
    if (index != -1) {
        arrPerson.splice(index, 1);
        RenderGiaoDien();
    }
}

function RenderGiaoDien() {
    let content = '';
    arrPerson.map((item) => {
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
        // console.log(person);

        let contentRieng = (loai) => {
            if (loai == "Student") {
                return `Điểm trung bình: ${diemTrungBinh()}`;
            } else if (loai == "Employee") {
                return `Tổng lương: ${tongLuong()}`;
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
    console.log(content);

    document.getElementById('listPerson').innerHTML = content;
}

function RenderLoai() {
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

function ganGiaTriInput(
    id,
    name,
    address,
    email,
    loai,
    diemToan,
    diemLy,
    diemHoa,
    soNgayLamViec,
    luongNgay,
    tenCongTy,
    giaTriHoaDon,
) {
    document.getElementById('id').value = id;
    document.getElementById('name').value = name;
    document.getElementById('address').value = address;
    document.getElementById('email').value = email;
    document.getElementById('loai').value = loai;
    document.getElementById('diemToan').value = diemToan;
    document.getElementById('diemLy').value = diemLy;
    document.getElementById('diemHoa').value = diemHoa;
    document.getElementById('soNgayLamViec').value = soNgayLamViec;
    document.getElementById('luongNgay').value = luongNgay;
    document.getElementById('tenCongTy').value = tenCongTy;
    document.getElementById('giaTriHoaDon').value = giaTriHoaDon;
}

function layGiaTriInput() {
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

    if (loai == 'Student') {
        let Student = new Person();
        Student.id = id;
        Student.name = name;
        Student.address = address;
        Student.email = email;
        Student.loai = loai;
        Student.diemToan = diemToan;
        Student.diemLy = diemLy;
        Student.diemHoa = diemHoa;
        arrPerson.push(Student);
    } else if (loai == 'Employee') {
        let Employee = new Person();
        Employee.id = id;
        Employee.name = name;
        Employee.address = address;
        Employee.email = email;
        Employee.loai = loai;
        Employee.soNgayLamViec = soNgayLamViec;
        Employee.luongNgay = luongNgay;
        arrPerson.push(Employee);
    } else if (loai == 'Customer') {
        let Customer = new Person();
        Customer.id = id;
        Customer.name = name;
        Customer.address = address;
        Customer.email = email;
        Customer.loai = loai;
        Customer.tenCongTy = tenCongTy;
        Customer.giaTriHoaDon = giaTriHoaDon;
        arrPerson.push(Customer);
    }
}

function themPerson() {
    layGiaTriInput();
    RenderGiaoDien();
    document.getElementById('btnReset').click();
    // ganGiaTriInput('', '', '', '', '', '', '', '', '', '', '', '');
};

RenderGiaoDien();

document.getElementById('loai').onchange = RenderLoai;
document.getElementById('btnThem').onclick = themPerson;