export default class Person {
    constructor() {
        this.id = '';
        this.name = '';
        this.address = '';
        this.email = '';
        this.loai = '';
        this.diemToan = '';
        this.diemLy = '';
        this.diemHoa = '';
        this.soNgayLamViec = '';
        this.luongNgay = '';
        this.tenCongTy = '';
        this.giaTriHoaDon = '';
    }
    diemTrungBinh = () => {
        return ((this.diemToan) * 1 + (this.diemLy) * 1 + (this.diemHoa) * 1) / 3;
    };

    danhGia = () => {
        if (this.giaTriHoaDon < 1000) {
            return `
            Công ty ${this.tenCongTy} <br/>
            Khách hàng vãng lai <br/>
            Giá trị hóa đơn: ${this.giaTriHoaDon}
            `;
        } else if (this.giaTriHoaDon < 3000 && this.giaTriHoaDon >= 1000) {
            return `
            Công ty ${this.tenCongTy} <br/>
            Khách hàng thân thiết <br/>
            Giá trị hóa đơn: ${this.giaTriHoaDon}
            `;
        } else if (this.giaTriHoaDon >= 3000) {
            return `
            Công ty ${this.tenCongTy} <br/>
            Khách hàng VIP <br/>
            Giá trị hóa đơn: ${this.giaTriHoaDon}
            `;
        }
    };

    tongLuong = () => {
        return `
        Số ngày làm việc: ${this.soNgayLamViec} <br/>
        Lương 1 ngày: ${this.luongNgay} <br/>
        Tổng lương: ${this.soNgayLamViec * 1 * this.luongNgay * 1}
        `;
    };
}