let data = [
    {
        name: 'Mylo',
        age: '12'
    },
    {
        name: 'Mochi',
        age: '2-3'
    },
    {
        name: 'Sarah',
        age: '33'
    },
    {
        name: 'Midnight',
        age: '7 ?'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + 
    'years old' + '</div>';
});

info.innerHTML = details.join('\n');


