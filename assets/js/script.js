var Pokemons = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise",
"Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate",
"Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","NidoranH","Nidorina","Nidoqueen",
"Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat",
"Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian",
"Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra",
"Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel",
"Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d",
"Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee",
"Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan",
"Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking",
"Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Magikarp","Gyarados","Lapras","Ditto","Eevee",
"Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Articuno","Zapdos","Moltres",
"Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
            
        
        
    var PokemonsJuego = [],indice,item,tiempo,Puntos=0;
    $(document).ready(function(){ IniciarJuego();});
        
        function IniciarJuego(){
            Pokemons = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise",
            "Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate",
            "Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","NidoranH","Nidorina","Nidoqueen",
            "Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat",
            "Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian",
            "Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra",
            "Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel",
            "Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d",
            "Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee",
            "Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan",
            "Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking",
            "Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Magikarp","Gyarados","Lapras","Ditto","Eevee",
            "Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Articuno","Zapdos","Moltres",
            "Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
            PokemonsJuego = [];
            indice=0;
            item=0;
           
        for(i=0;i<3;i++){
            indice=Math.floor(Math.random()*Pokemons.length);
            item = Pokemons[indice];
            PokemonsJuego.push(item);
            Pokemons.splice(indice,1);
        }
        indice=Math.floor(Math.random()*PokemonsJuego.length);
        item = PokemonsJuego[indice];
            
           $("#pokemons").empty();
           $("#DragPokemons").empty();
            
           clearInterval(tiempo);
            
           $.each(PokemonsJuego, function( i, val ) {
               
            $("#pokemons").append('<div class="col-xs-4 col-md-4" ><a href="#" class="thumbnail"><img src="assets/img/'+val+'.png" id='+val+' draggable="true" ondragstart="drag(event)" style="cursor:move" /></a></div>');
               
        });
        $("#DragPokemons").append('<a href="#" class="thumbnail"></a><h3><span class="label label-danger">'+item+"</span></h3><br>");
         
        }
function allowDrop(ev) { ev.preventDefault();}
function drag(ev) {ev.dataTransfer.setData("text", ev.target.id);}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data==item){
    ev.target.appendChild(document.getElementById(data));      
            Puntos++;
            $("#Puntaje").html('<span class="label-puntos">Puntos: '+Puntos+'</span>');
           tiempo=setInterval(function(){ IniciarJuego(); }, 800);
    }else{
        alert("Fallaste tu puntaje fue: "+Puntos); Puntos=0;
        $("#Puntaje").html('Puntos:'+Puntos+'');
        tiempo=setInterval(function(){ IniciarJuego(); }, 800);
    }
}