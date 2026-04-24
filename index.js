function taxables (state,taxExempt) {
    if (state === "IA" && taxExempt === false) {
        return "is taxable";
    }
}
function isVehicle (hasWheels,canFLy,canSwim) {
    if (hasWheels == true|| canSwim == true) { 
        return "is vehicle";
    }
}
