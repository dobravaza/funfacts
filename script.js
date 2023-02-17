const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')
const button = document.querySelector('button')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
	'Koty potrafią wydać ponad 100 różnych dźwięków.',
	,
	'Kameleon może zmienić kolor swojej skóry w ciągu kilku sekund.',
	'Najmniejszy kraj na świecie to Watykan - zajmuje on powierzchnię zaledwie 0,44 km².',
	'Największy ssak na świecie to nie słoń, a płetwal błękitny - może on osiągnąć długość ponad 30 metrów.',
	'W ciągu swojego życia człowiek produkuje wystarczającą ilość śliny, aby napełnić dwa baseny olimpijskie.',
	'Mars jest czwartą planetą w układzie słonecznym i jest porównywany z Czerwoną Planetą z powodu koloru swojej powierzchni.',
	'Ludzie są jedynymi ssakami, którzy potrafią produkować emocjonalne łzy.',
	'Największym zwierzęciem na lądzie jest słoń afrykański, który może ważyć ponad 5 ton.',
	'Mrówki potrafią unosić rzeczy, które ważą do 50 razy więcej niż one same.',
	'Kosmonauci na Międzynarodowej Stacji Kosmicznej muszą ćwiczyć co najmniej 2 godziny dziennie, aby zachować swoją siłę i zdrowie.',
	'Jednym z największych oceanów na Ziemi jest Ocean Indyjski, który zajmuje powierzchnię około 73,5 mln km².',
	'Rybki z gatunku o nazwie pirania są uważane za niebezpieczne dla człowieka, ale w rzeczywistości są one bardzo ostrożne i rzadko atakują ludzi.',
	'Najdłuższa rzeka na Ziemi to Nil, który ma długość ponad 6 650 km.',
	'Lodowiec Vatnajökull na Islandii jest największym lodowcem w Europie.',
	'Męski nosorożec ma około 1,5 metra długości i waży ponad 2 tony.',
	'Największym ptakiem na świecie jest kondor andyjski, który ma rozpiętość skrzydeł ponad 3 metry.',
	'Ważący ponad 9 ton dinozaur o nazwie argentynozaur był jednym z największych zwierząt, jakie kiedykolwiek żyły na Ziemi.',
	'Woda na Ziemi jest stale recyklingowana przez procesy naturalne takie jak parowanie, deszcz i wchłanianie przez rośliny.',
	'Pszczoły są niezwykle ważne dla ekosystemu, ponieważ zapylają one rośliny, co umożliwia im wytwarzanie owoców i nasion.',
	'Niektóre gatunki żyraf mają nieparzystą liczbę kończyn.',
	'Woda może istnieć w trzech stanach skupienia: stałym, ciekłym i gazowym.',
	'Woda lodowa jest lżejsza od wody płynnej, dlatego pływa na jej powierzchni.',
	'Pierwszy samochód został zbudowany w 1885 roku.',
	'Wszystkie orły mają dziób, który jest krótszy od ich głowy.',
	'Trzęsienie ziemi w Chinach w 1556 roku było największym w historii - zginęło wtedy ponad 830 000 osób.',
	'Wiele gatunków delfinów potrafi wyemitować dźwięki o częstotliwości powyżej 200 kHz, co jest znacznie wyższe niż zakres słyszalny dla ludzkiego ucha.',
	'Świnie są bardzo inteligentne i potrafią rozwiązywać proste zagadki.',
	'Najstarsza znana piramida została zbudowana około 2650 roku p.n.e. w Sakkarze, w Egipcie.',
	'Słońce to gwiazda, a Ziemia krąży wokół niego.',
	'Największym kontynentem na Ziemi jest Azja.',
	'Jedno z najgłębszych miejsc na Ziemi to Row Mariański w Oceanie Spokojnym - jego głębokość wynosi ponad 11 km.',
	'Najwyższym szczytem na Ziemi jest Mount Everest, który ma wysokość 8848 m.',
	'Jeden z największych gatunków dinozaurów to tytanozaur, który miał długość około 30 metrów.',
	'Pierwszy lot balonem odbył się w 1783 roku.',
	'W ciągu jednej doby serce człowieka bije około 100 000 razy.',
	'Najwięcej ludzi na świecie mieszka w Chinach - ich liczba wynosi ponad 1,4 miliarda.',
	'Na Księżycu nie ma atmosfery, dlatego na jego powierzchni nie ma powietrza.',
	'Największe oceaniczne fale mają wysokość ponad 30 metrów.',
	'Około 70% powierzchni Ziemi pokrywają oceany.',
	'Każdy śnieżynka ma unikalny wzór, nie ma dwóch identycznych śnieżek.',
	'Zebra ma białe paski na czarnym tle.',
	'Dżdżownice potrafią regenerować swoje ciała.',
	'Pies to jeden z najsłynniejszych i najstarszych zwierząt domowych.',
]

const weekday = ['Niedziela', 'Ponidzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piątek', 'Sobota']

const d = new Date()
let day = weekday[d.getDay()]

const random = Math.floor(Math.random() * facts.length)

currentDay.textContent = day
funFact.textContent = facts[random]

button.addEventListener('click', () => {
	const random = Math.floor(Math.random() * facts.length)
	funFact.textContent = facts[random]
})
