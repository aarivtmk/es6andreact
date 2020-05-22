function isFullAge5() {

    var arrArgs = Array.prototype.slice.call(arguments);

    arrArgs.forEach(element => {
        console.log((2020 - element) >= 18);

    });

    for (var i = 0; i < arrArgs.length; i++) {
        console.log('ages list', (2020 - arrArgs[i]) >= 18);

    }

}

isFullAge5(1990, 2020, 2000, 2011);