var cuvinte = [
"Alex Bara333", 
"Onanist434", 
"Zeu354",
"Faraon344",
"Marijuanna333",
"Uite alune464",
"Avort verbal476",
"Prezervativ263",
"Lăcătuș345",
"Cocktail344",
"Scurtmetraj386", 
"Taxidermie608",
"5gang144", 
"Șoricioaica364", 
"Unicorn Turbat374",
"Spânzurătoare343",
"Durabil366",
"Cursor342",
"Echipament Acvatic454",
"Joc energic367",
"Execuție în public462",
"Holșuruburi353",
"Corona Virus405",
"Tenia475", //parazit
"Test neanunțat365",
"Krunker355",
"Fizică Cuantică407",
"Mesteacăn304",
"Persoană materialistă365",
"Dubițar343",
"Dubstep450",
"Cretinozaur600",
"Cioban253",
"Siguranță365",
"Concurență perfectă476",
"Egalitate între sexe574",
"Bere blondă354",
"Forțe inegale464",
"Monopol306",
"Stemă locală475",
"Fulgi de ovăz406",
"Sunetul vântului466",
"Picant233",
"Fibră de sticlă506",
"Teren Minat354",
"Cameră curată ca lacrima486",
"Bancnotă de o sută462",
"Ulei de masaj345",
"Telegraf506",
"Receptor364",
"Data nașterii305",
"Bârfitor545", //răspândac
"Cumpărături053",
"Zonă de nefumători365",
"Mobilă Tapițată406",
"Cruciulițe344",
"Piolet455",
"Cuarț305",
"Vizită Medicală356",
"Macetă355",
"Mașina timpului405",
"Test oftalmologic366",
"Pânză004",
"Ventricul400",
"Poimarți570",
"Ghilotină465",
"Scara Richter470",
"Sforăit045",
"Joc dublu045",
"Șaradă455",
"Detector de radiații365",
"A abandona064",
"Izvor Subteran375",
"Peruș354",
"Propolis405",
"Răspândac777",
"Hartă Meteo354",
"Demipensiune305",
"Brațe Lungi054",
"Boxeri034",
"Aluniță044",
"Boabe de cafea453",
"Arhitectură056",
"Arcuș de vioară344",
"Blocatar007",
"Coloană sonoră366",
"Țigle055",
"Anvelopă044",
"Gheișă507",
"Licoare de dragoste345",
"Casă de schimb valutar500",
"Goana după aur056",
"Mobilier De Grădină345",
"Cuib de barză404",
"CNP405",
"Apă rece044",
"Bolovan453",
"File de pește405",
"Ochelari de sudor053",
"Bariera sunetului405",
"Masterat165",
"Picioroange245",
"Cuvânt cheie465",
"copoi466",
"Biblie043",
"Pod de cale ferată405",
"Urechea mijlocie565",
"Bombă cu ceas354",
"Mișcări Reflexe344",
"Supă de linte405",
"Râșniță053",
"Numărul paginii064",
"Delicatese565",
"Teatru de marionete455",
"Hârtie Manuală366",
"Tastatură mecanică466",
"Hârciog364",
"A-ți pica fisa565",
"Aparat de ras354",
"Frunză de stejar365",
"Plug354",
"Sens orar474",
"Șampon anti mătreață445",
"Vatman405",
"Luptător Grecesc403",
"Javascript366",
"Sinucidere în masă364",
"abcdefghijklmnopqrstuvwxyz306",
"Virgin243"];
var audio = new Audio('sunet.mp3');
function firstRun()
{
    document.getElementById("p1").style.fontFamily = "Roboto,Charcoal,sans-serif";
    var xhReq = new XMLHttpRequest();
    xhReq.open("HEAD", "activity.js", false);
    xhReq.send(null);
    var lastModified = xhReq.getResponseHeader("Last-Modified");
    document.getElementById('modified').textContent = "Last updated: " + lastModified;
    var foo = "Momentan sunt " + cuvinte.length + " cuvinte";
    document.getElementById("nrCuvinte").textContent = foo;
}
var valoareSlider = 60;
function updateTextInput(val) {
    valoareSlider=val;
    document.getElementById('textInput').textContent=val; 
  }

function timer()
{
    audio.play();
}
function start()
{    
    document.getElementById("p1").innerHTML = "";
var joc = 0;
var punctaj = 0;
if (document.getElementById("explicat").checked == false && document.getElementById("mimat").checked==false && document.getElementById("desenat").checked == false)
    {
        //alert("Trebuie bifata macar o casuta");
        document.getElementById("p1").innerHTML = "Trebuie bifata macar o casuta";
        return 0; //ca sa iesim
    }
var iesim=false;
while (true && iesim==false)
{
    var casuta = Math.floor(Math.random() * 3);
    if (casuta==0 && document.getElementById("explicat").checked == true)
    {
        joc = 0;
        iesim=true;
    }
    else if (casuta==1 && document.getElementById("mimat").checked == true)
    {
        joc = 1;
        iesim=true;
    }
    else if (casuta==2 && document.getElementById("desenat").checked == true)
    {
        joc = 2;
        iesim=true;
    }
}
var cuvantCurent = Math.floor(Math.random() * cuvinte.length); //from 0 to nr-1
var temp = cuvinte[cuvantCurent].substring(0, cuvinte[cuvantCurent].length - 3) //cuvant fara punctaj
var culoare = "black";
var rand = Math.floor(Math.random() * 10) + 1; //de la 1 pana la 10
var mesaj = "";
if (rand==1)
    culoare="red";
document.getElementById("p1").innerHTML += temp.fontcolor(culoare).bold()
if (joc==0)
    {
        punctaj = parseInt(cuvinte[cuvantCurent].substring(cuvinte[cuvantCurent].length - 3, cuvinte[cuvantCurent].length - 2)); //scor pt explicat
        if (punctaj)
            mesaj+= "\n Explicat";
    }
if (joc==1)
    {
        punctaj = parseInt(cuvinte[cuvantCurent].substring(cuvinte[cuvantCurent].length - 2, cuvinte[cuvantCurent].length - 1));
        if (punctaj)
            mesaj+= "\n Mimat";
    }
if (joc==2)
    {
        punctaj = parseInt(cuvinte[cuvantCurent].substring(cuvinte[cuvantCurent].length,cuvinte[cuvantCurent].length-1)); //scor pt desenat
        if (punctaj)
            mesaj+= "\n Desenat";
    }
if (punctaj==0)
    {
        start();
    }
else
    {
    mesaj += " " + punctaj;
    document.getElementById("p1").innerHTML += mesaj.fontcolor(culoare);
    }
}