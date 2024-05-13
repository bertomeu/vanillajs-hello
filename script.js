let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
let action = ['comió', 'orinó', 'rompió', 'aplastó'];
let what = ['mi tarea', 'mi teléfono', 'el auto'];
let when = ['antes de clase', 'mientras dormía', 'haciendo ejercicio', 'durante la comida', 'mientras rezaba'];

window.onload = function() {
    generateExcuse();
  };

function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    document.getElementById('excuse').innerHTML = excuse;
}
