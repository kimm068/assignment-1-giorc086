var names = "Jewell Munter:854370;Alden Ehrhard:852014;Chance Hunnewell:158189;Adriana Geffers:17473;Celia Schnieders:746599;Corliss Denk:791623;Sally Zehnpfennig:185749;Jayme Behrends:462289;Jesica Farmsworth:720507;Laree Chime:822125;Henrietta Chandsawangbh:400455;Regine Criado:593497;Louann Rull:437496;Raylene Bodell:230709;Lenora Heidorn:84678;Terica Bacote:53904;Dena Picket:584555;Laurie Arambuia:912065;Freeda Barbar:725347;Arlena Blenden:512319;Toshia Siaperas:623512;Randell Hassig:117809;Denise Litsey:461117;Ron Blankenbecler:147578;Quincy Wileman:626921;Cherish Patz:744193;Burma Erskin:5184;Arron Bulfer:803810;Tiny Pokorski:482737;Mitzie Hadef:253250;Genie Malys:421633;Robbin Steenburg:356368;Delsie Gallegos:76374;Kaycee Leone:924465;Lorna Komar:474375;Joie Warf:448658;Zana Philpot:710606;Caroline Koles:87033;Joey Heine:740998;Pilar Gividen:714223;Kesha Rushforth:157566;Phebe Yournet:979838;Casimira Wohlenhaus:244810;Glenda Prestridge:466791;Bianca Derienzo:510015;Earnest Lapage:888249;Argentina Arnoux:672254;Elva Wieto:786812;Tomi Kirgan:684709;Jacquelynn Drader:666873;Robert Dasen:449309";
'Jewell Munter:854370'

function buildArray(string) {
    let namesArray = [];
    let tempArray = string.split(';');

    for (item of tempArray) {
        let t = item.split(':');
        let obj = {
            name: t[0],
            number: t[1]
        };
        namesArray.push(obj);
    }
    return namesArray;
}
let namesArray = buildArray(names);

function attachListeners(selector) {
    let element = document.querySelector(selector);

    element.addEventListener('input', eventHandler);
}
let resultElement = document.querySelector('.results');

function eventHandler(evnt) {
    let key = evnt.target.value;
    
    let regEx = new RegExp(key, 'i');

    let newArray = [];
    if( key === ''){
        resultElement.innerHTML = '';
        return;
    }

    for (let i = 0; i < namesArray.length; i++) {
        if (regEx.test(namesArray[i].name)) {
            newArray.push(namesArray[i]);
        }
    }
    resultElement.innerHTML = '';
    for (item of newArray) {
        let newLi = document.createElement('li');
        newLi.innerText = item.name + '*' + item.number;

        resultElement.appendChild(newLi);
    }
}
attachListeners('#searchInput');