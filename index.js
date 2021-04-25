const driver = {
    name: "Sam",
    stressAddress: "11 Broadway"
};

function updateDriverWithKeyAndValue(driver, key, value){
    const newObj = {...driver};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const newObj2 = {...driver}
    delete newObj2[key];
    return newObj2;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}

