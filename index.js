const calculateBill = (price, vat, tip) => {
    if (
        typeof price !== "number" ||
        typeof vat !== "number" ||
        typeof tip !== "number"
    )
    return "error";
    
return "£" + (price + (price * (vat / 100) + tip)).toString();
};

module.exports = calculateBill;