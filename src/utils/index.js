export const formatingRupiah = (rupiah) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(rupiah);
}

export const calculateDate = (date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date);
    const secondDate = new Date();
    const res = Math.floor(Math.abs((firstDate - secondDate) / oneDay))
    return res > 7 ? firstDate.toLocaleDateString("en-US") : res <= 0 ? 'Baru Saja' : res + ' Hari yang lalu';
}