const myInput = document.querySelector("input[name='mydata']");

myInput.addEventListener('change', (el) => {
    let str = el.target.value;
    if (str.length > 0) {
        render(str);
    } else {
        document.querySelector('.result').innerHTML = '';
    }
});

function render(val) {
    document.querySelector('.result').innerHTML = '';
    document.querySelector('.result').innerHTML = myList(val);
}

function myList(val) {
    let arr = [];
    let li = "";
    arr = val.split(/,|\s/);
    for (const s of arr) {
        if (s.trim().length > 0) {
            li += `<li>${s}</li>`;
        }
    }
    return li.length > 0 ? `<ol>${li}</ol>` : `<span class="error">Data is not correct!</span>`;
}