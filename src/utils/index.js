export function convertMoney(numb) {
    return numb.toLocaleString('en-ID', {
        style: 'currency',
        currency: 'IDR',
    });
}