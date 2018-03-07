function inputSearch() {
    var input = document.getElementById('input-search');
    var value = input.value.toUpperCase();
    var lists = document.getElementsByClassName('list');

    console.log('count: ', lists.length);

    for (var i = 0; i < lists.length; i++) {
        const currentLi = lists[i];
        console.log('sdfs:  ', value);
        console.log('sdfsdfsf:  ', currentLi.innerHTML.toUpperCase());
        if (currentLi.innerHTML.toUpperCase().includes(value)) {
            currentLi.style.display = '';
        } else {
            currentLi.style.display = 'none';
        }
    }
}
