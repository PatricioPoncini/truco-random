const btnTruco = document.getElementById("btn-truco");
const btnRetruco = document.getElementById("btn-retruco");
const btnQuieroVale4 = document.getElementById("btn-quiero-vale4");
const btnEnvido = document.getElementById("btn-envido");
const btnRealEnvido = document.getElementById("btn-real-envido");
const btnFaltaEnvido = document.getElementById("btn-falta-envido");
const btnFlor = document.getElementById("btn-flor");
const phraseText = document.getElementById("phrase");

const arrTruco = [
    "Jugaron una carrera el sapo y la comadreja. El sapo al aventajarla le dijo 'Truco' en la oreja",
    "Te noto muy asustado, no ha de ser que viste al cuco? Y aunque parezca apuradote vi cantar el Truco",
    "Tengo un vagon en la mano, por eso no puedo jugar, y aunque te parezca en vano, Truco tengo que cantar",
    "Pa pintar una pared tuve que usar mameluco, y pa ganarle a usted tengo que hacerle algún truco",
    "Cuando me pongo a rimar muchas veces me trabuco, si el tanto quiero cantar a veces me sale truco",
    "Pa poder salir del bosque muchas plantas yo machuco. Pa ganarle a usted no hay otra que cantar truco",
    "Si queres jugar conmigo no te hagas el pitucoyo, te quiero ganar porque estoy jugando al Truco",
    "No me importa si sos tan bruto con tal que me aceptes mi modesto truco",
    "Turco... este...Bueno ! Digo Truco !!",
    "Dejame pensar... Bah Ni siquiera merece esto ser pensado...Vas a ver que inspiracion la mia: Te digo Truco, y a otra cosa, che",
    "Jugas como un viejo caduco. Yo te voy a sacudir con mi 'Quiero Retruco'"
];

const arrRetruco = [
    "Viene muy facilla cosa...me lo llevo al campo Santo. Me queda una carta hermosa y 'quiero Retruco' canto ...",
    "Me parece que esté frito, eso espero...y como yo tengo el quiero, quiero Retruco le grito !",
    "Espero que no me dé sino la va apasar mal y grito de buena Fé: Quiero Retruco... Qué tal...?",
    "Tengo poca inspiracion. Cuando tengo que mentir, me traiciona la pasion: Quiero Retruco, y morir",
    "A mi esposa quiero. A mi hijo educo. Y a vos companero, quiero Retruco",
    "En mi casa de verano se come fideos con tuco, y el partido yo te gano con este 'quiero Retruco'",
    "Pensaste que me achicaba o que iba a salir corriendo. Te voy a dar flor de biaba quiero Retruco mintiendo",
    "Barrunto que esté mintiendo, no le tengo miedo al cucoy en sus ojos estoy viendo ansias de un Quiero Retruco !!",
    "No temas al Diablo... No temas al Cuco... Si tenes naipes buenos, quereme este quiero Retruco",
    "A ver... A ver... Mi olfato me dice te gasto si me aceptas un Quiero Retruco, che",
    "Amargo y Retruco, ¡Carajo!"
];

const arrQuieroVale4 = [
    "Que  bronca. Que maltrato. Ya te voy a dar... digo Quiero Vale Cuatro",
    "Mi china se recostó con un sospechoso sapo y cuando despertó le dijo: Mi amor ¡Quiero Vale Cuatro!",
    "Usté... que juega conmigo me va'  pinta de aparato. Tengo adentro un enano que chiya: Mi amigo, quiero Vale Cuatro",
    "Ya cayó el chivo en el lazo, y el rival no es para tanto. Te vi' dar con un hachazo quiero Vale Cuatro canto",
    "Esta guitarra gastada fue encontrada en un teatro y aunque no he ligado nada, canto quiero Vale Cuatro",
    "Ganarme esta partida te dar mucho trabajo. Te va' costar mas todavia sí yo Quiero Vale Cuatro",
    "Te enterraste hasta el espanto. No vas a poder salir, Quiero vale cuatro canto y me voy a divertir",
    "Este alardede guapeza se me haceque es teatro,la cosa recien----empieza.Quiero....Quiero vale cuatro",
];

const arrEnvido = [
    "Pa el amor soy atrevido y bravo como as de espada, yo nunca grito el envido exponiendo la jugada.",
    "Amalaya con las penas cuando flaquea elcorazon. Yo le canto Envido apenas pues no tengo pal rabon",
    "Atienda la relación que hace un gaucho perseguido: Ahorita le vi' ganar con este grandioso Envido",
    "A este humano reprimido le vi' cantar el envido ...",
    "A este rival tan bandido le vi' cantar el Envido ...",
    "A este humano compungido lo achico con un ...ENVIDO",
    "Aunque lo creas indebido te vi' cantar un envido",
    "Aunque yo tenga pinta de computadora, hay un enano aqui metido que me esta delesoplar: Dale que tenes Envido",
    "El humano me ha herido: Dijo que yo no sé jugar al Envido",
    "Vea Vea Vea ! Que cosa mas bonita. Salí a afanar, Envido la famosa Teresita",
    "Si no me convidas con cerveza, por lo menos ofreceme un Envido",
    "Cuando vine de La Isla traiba un lazo retorcido; con él enlacé dos cartas y con dos le digo Envido"
];

const arrRealEnvido = [
    "No piense en un descuido si no es pa tanto la cosa... yo le digo Real Envido que es lo mesmo que olorosa",
    "Con su boquita de grana y su pelo renegrido no envidia a la mañana este hermoso Real Envido",
    "Tenes Real Envido?",
    "Tomala vos. Damela a mí. Con Real Envidote te vas a divertir...",
    "Si la computadora te ha aturdido, habrás de perdonarla: Es que vino cargada con un esplendoroso Real Envido",
    "Que  coraje... Que  atrevido. Andar comiendo electrones y escupiendo Real Envido",
    "Aunque suene presumido yo te canto el Real Envido",
    "Un gaucho baja del cielo en un plato volador, al pasar junto a una vaca, Real Envido le gritó",
    "Me llenaste de bronca. Ahora el partido te lo gano con Real Envido y con toda pompa",
    "Che, humanoide: Quedaste tan resentido que hace mucho que no me gritas el Real Envido",
    "No sé si arriesgarme tanto... No sé  si tengo que tirarme el lance... y bue te lo digo nomas: Real Envido"
];

const arrFaltaEnvido = [
    "Pido gancho gancho pido. Chupate esta Falta Envido !",
    "No todo está perdido contesto esta Falta Envido",
    "Si queres ganarme el partido, quereme esta Falta Envido",
    "A este rival comedido lo hecho con Falta Envido",
    "A este neurotico compungido lo corro con la falta envido",
    "Sos un adversario dormido. No importa: yo te despierto con un Falta Envido",
    "No creas que me has vencido: Atajate esta Falta Envido",
    "A que te achicas: Falta Envido",
    "Para el tanto yo no tengo nada pero vos menos... asi que Falta Envido",
    "Cuando vine de La Isla traiba un lazo retorcido; con él enlacé dos cartas y con dos le digo Envido",
    "No se ponga tan contento por el envite que ha echao, porque escuchará al momento: Falta envido, cuñao"
];

const arrFlor = [
    "En la estancia del remanso a una vaca medio loca la seguia un toro manso con una Flor en la boca",
    "Que cartas fuleras. Que bronca, que dolor. No tengo otro consuelo que esta hermosa Flor",
    "Ayer pasé por tu casa y metiraste con una Flor. Hoy cuando pase de nuevo: Sin maceta, por favor!",
    "Tengo en la mano un misterio. Tengo en el alma un dolor. No se me ponga tan serio. En la mano tengo Flor",
    "De los bichos: la cigarra, el verde como color en instrumentos: la guitarra..., y elijo al malvon de Flor",
    "El paisano anda de negro, aspero y facon. Los domingos va de blanco y en su sonrisa una Flor",
    "Tengo un chancho color verde, un caballo volador, una gallina que muerde y en la mano tengo Flor",
    "Por recostarme a tu reja tuve que ver al dotor para sacarme la Flor que me clavaste en la oreja",
    "Todo gaucho que presume de haber tenido un amor se queda con el perfume si se le pianta la Flor",
    "Yo nunca he sido pintor, pero algo sé de colores, y para pintar las flores le doy amor a la Flor",
];

btnTruco.addEventListener("click", () => {
    const index = Math.floor(Math.random() * arrTruco.length)
    const randomFrase = arrTruco[index];
    phraseText.textContent = randomFrase;
});

btnRetruco.addEventListener("click", () => {
    const index = Math.floor(Math.random() * arrRetruco.length)
    const randomFrase = arrRetruco[index];
    phraseText.textContent = randomFrase;

});

btnQuieroVale4.addEventListener("click", () => {
    const index = Math.floor(Math.random() * arrQuieroVale4.length)
    const randomFrase = arrQuieroVale4[index];
    phraseText.textContent = randomFrase;
});

btnEnvido.addEventListener("click", () => {
    const index = Math.floor(Math.random() * arrEnvido.length)
    const randomFrase = arrEnvido[index];
    phraseText.textContent = randomFrase;
});

btnRealEnvido.addEventListener("click", () => {
    const index = Math.floor(Math.random() * arrRealEnvido.length)
    const randomFrase = arrRealEnvido[index];
    phraseText.textContent = randomFrase;
});

btnFaltaEnvido.addEventListener("click", () => {
    const index = Math.floor(Math.random() * arrFaltaEnvido.length)
    const randomFrase = arrFaltaEnvido[index];
    phraseText.textContent = randomFrase;
});

btnFlor.addEventListener("click", () => {
    const index = Math.floor(Math.random() * arrFlor.length)
    const randomFrase = arrFlor[index];
    phraseText.textContent = randomFrase;
});