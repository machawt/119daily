let cnt=-1;
let txt=["*ויבאני*חסדך*יהוה*תשועתך*כאמרך׃*41","42*ואענה*חרפי*דבר*כי־בטחתי*בדברך׃","43*ואל־תצל*מפי*דבר־אמת*עד־מאד*כי*למשפטך*יחלתי׃","44*ואשמרה*תורתך*תמיד*לעולם*ועד׃","45*ואתהלכה*ברחבה*כי*פקדיך*דרשתי׃","46*ואדברה*בעדתיך*נגד*מלכים*ולא*אבוש׃","47*ואשתעשע*במצותיך*אשר*אהבתי׃","48*ואשא־כפי*אל־מצותיך*אשר*אהבתי*ואשיחה*בחקיך׃"];
let engs=[" (41) ϝʹ ουαυ καὶ ἔλθοι ἐπ᾽ ἐμὲ τὸ ἔλεός σου κύριε τὸ σωτήριόν σου κατὰ τὸ λόγιόν σου","(42) καὶ ἀποκριθήσομαι τοῗς ὀνειδίζουσί με λόγον ὅτι ἤλπισα ἐπὶ τοὺς λόγους σου","(43) καὶ μὴ περιέλῃς ἐκ τοῦ στόματός μου λόγον ἀληθείας ἕως σφόδρα ὅτι ἐπὶ τὰ κρίματά σου ἐπήλπισα","(44) καὶ φυλάξω τὸν νόμον σου διὰ παντός εἰς τὸν αἰῶνα καὶ εἰς τὸν αἰῶνα τοῦ αἰῶνος","(45) καὶ ἐπορευόμην ἐν πλατυσμῷ ὅτι τὰς ἐντολάς σου ἐξεζήτησα","(46) καὶ ἐλάλουν ἐν τοῗς μαρτυρίοις σου ἐναντίον βασιλέων καὶ οὐκ ᾐσχυνόμην","(47) καὶ ἐμελέτων ἐν ταῗς ἐντολαῗς σου αἷς ἠγάπησα σφόδρα“,”(48) καὶ ἦρα τὰς χεῗράς μου πρὸς τὰς ἐντολάς σου ἃς ἠγάπησα καὶ ἠδολέσχουν ἐν τοῗς δικαιώμασίν σου"];
function next1(){
let test=document.getElementById("echo");
re= document.getElementById("read");
if(test.innerText===re.innerText){cnt=cnt+1;
    if (cnt>txt.length){cnt=cnt-1;}};
 update();}
                                  
function update(){                                  
clean=txt[cnt].replaceAll('*','');
re.innerText=clean;
let test=document.getElementById("echo");
test.innerText="";
engdiv=document.getElementById("english");
engdiv.innerText=engs[cnt];
keys();}

function keys(){
line1=document.getElementById("key1");
line1.innerHTML="";
myArray = txt[cnt].split("*");
butset = new Set(myArray);
let butArray = Array.from(butset);
butArray.sort();
for (let loop1= 0; loop1< butArray.length; loop1++) 
{ let btn = document.createElement("button");
btn.innerHTML = butArray[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');
etext.innerHTML = etext.innerHTML+ butArray[loop1];};
btn.classList.add("b");
line1.appendChild(btn);}
};


function fd(){cnt=cnt+1;if (cnt>txt.length){cnt=cnt-1};
update();}
    
function bk1(){ cnt=cnt-1;if (cnt<0){cnt=0};
    update(); }

function hd() {if (re.style.visibility==="visible"){re.style.visibility="hidden";}
else{re.style.visibility="visible";}}

function engvis() {if (engdiv.style.visibility==="visible"){engdiv.style.visibility="hidden";}
else{engdiv.style.visibility="visible";}}

function clr(){let str=document.getElementById("echo");
del= str.innerText.slice(0, -1);
str.innerText=del;}
