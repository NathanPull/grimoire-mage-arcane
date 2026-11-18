/* Étapes détaillées du leveling Alliance 30-60 (WoW Forever).
 * src.kind : "zone"  = ordre de quêtes tiré d'un guide de zone Forever (games.gg)
 *            "classic" = quêtes Classic connues, pas encore confirmées dans un guide Forever
 *            "hubs" = zone nouvelle, noms de quêtes pas encore publiés
 * Les noms de quêtes sont en anglais, comme dans les sources. */
window.STEPS = [
{
  id:"austrivage", lv:[30,32], title:"Austrivage et la côte", zone:"Contreforts de Hautebrande",
  tags:[["pvp","Zone contestée"]], src:{kind:"zone",name:"games.gg, guide Hillsbrad Foothills",url:"https://games.gg/world-of-warcraft/guides/wow-forever-hillsbrad-foothills-leveling-guide/"},
  intro:"Petit hub, mais des chaînes rentables sur la côte et des quêtes qui t'envoient dans les montagnes d'Alterac. Les cibles autour d'Austrivage sont niveau 30 et plus, donc c'est pile pour toi.",
  acces:["Nouveau bateau Port de Menethil → Austrivage (il continue vers Auberdine).","Ou à pied depuis Arathi : Refuge de l'Ornière, ouest par le mur de Thoradin, puis la route vers le sud.","Point de vol : Darla Harris, au centre d'Austrivage. Lie ta pierre de foyer à l'auberge."],
  quetes:[
    "Prends le point de vol et lie-toi à l'auberge. Si tu as la quête <b>Southshore</b> (de Stormwind), rends-la à Loremaster Dibbs.",
    "Prends <b>Down the Coast</b> (Lieutenant Farren Orinelle), <b>Soothing Turtle Bisque</b> (Chef Jessen), <b>Bartolo's Yeti Fur Cloak</b> (Bartolo Ginsetti), <b>Syndicate Assassins</b> et <b>Crushridge Bounty</b>.",
    "Prends aussi <b>Costly Menace</b> (Darren Malvew) et <b>Hints of a New Plague?</b> (Phin Odelic), qui ouvre la chaîne de la ferme Go'Shek en Arathi.",
    "Tue les murlocs de la côte ouest pour <b>Down the Coast</b> et rends-la. Les têtes de la suite ne tombent qu'après ce premier rendu.",
    "Retourne sur les mêmes murlocs pour 10 têtes (<b>Farren's Proof</b>), apporte-les au Marshal Redpath, puis reparle à Farren.",
    "Tue les nagas Daggerspine de la côte est pour <b>Stormwind Ho!</b>.",
    "Ramasse de la viande de tortue sur les Snapjaws et achète des Soothing Spices pour la bisque.",
    "Tue des yétis de Darrow Hill pour 10 fourrures, puis apporte à Bartolo un rouleau de tissu de laine, du fil fin et une Hillman's Cloak (hôtel des ventes ou travailleur du cuir).",
    "Monte en Alterac : tue des Syndicate Footpads et Thieves et ramasse les documents qui lancent <b>Foreboding Plans</b> et <b>Encrypted Letter</b>.",
    "Au même endroit, tue des ogres Crushridge (osselets et pages) et des lions des montagnes pour <b>Costly Menace</b>.",
    "Rends tout et prends <b>Noble Deaths</b> (bagues Alterac Signet Ring)."
  ],
  elites:[["Battle of Hillsbrad (Dun Garok)","À faire à 3 : élites niveau 28-32, mais la récompense finale vaut le coup."],["Crushridge Warmongers","En groupe vers 38, sinon à zapper : élites 39-40."],["The Crown of Will","En groupe vers 36."]],
  skip:["<b>Reassignment</b>, sauf si tu passes déjà par Stormwind : un aller-retour pour un seul rendu."],
  ensuite:"Le nord de Strangleronce à 32 (camp rebelle et Nesingwary), ou Désolace si tu préfères éviter la Horde."
},
{
  id:"dalaran", lv:[30,33], title:"Cité de Dalaran (donjon)", zone:"Montagnes d'Alterac",
  tags:[["new","Nouveau donjon"],["dj","Groupe"]], src:{kind:"zone",name:"games.gg, guides Alterac Mountains et Hillsbrad Foothills",url:"https://games.gg/world-of-warcraft/guides/wow-forever-alterac-mountains/"},
  intro:"Nouveau donjon de Forever, calé pour 28-33. Il rapporte le plus tant que ses objets bleus sont encore utiles pour toi : fais-le une ou deux fois avant 33.",
  acces:["Prends la quête Alliance auprès de l'émissaire Jacques à Austrivage.","Pas de point de vol en Alterac : vole jusqu'à Austrivage puis monte à pied vers le nord-ouest, côté Dalaran.","L'entrée se fait par les égouts de Dalaran."],
  quetes:["Prends la quête de l'émissaire Jacques avant de partir.","Cherche un groupe dans le canal de recherche, ou avec des gens croisés à Austrivage.","Une à deux runs entre 29 et 31 suffisent."],
  elites:[],
  skip:["Ne farme pas le donjon en boucle : depuis Forever, les monstres de donjon donnent peu d'XP, ce sont les quêtes qui paient."],
  ensuite:"Montagnes d'Alterac, puis les Rives Claires."
},
{
  id:"arathi1", lv:[36,38], title:"Arathi, première passe", zone:"Hautes-terres d'Arathi",
  tags:[["pvp","Contestée"]], src:{kind:"zone",name:"games.gg, guide Arathi Highlands",url:"https://games.gg/world-of-warcraft/guides/wow-forever-arathi-highlands/"},
  intro:"D'après la base de quêtes, presque toutes les quêtes d'Arathi sont niveau 36 à 40 (Myzrael 37, Go'Shek 36). Viens à 36, fais les chaînes solo, puis la crique de Faldir et Boulderfist Hall vers 38-40.",
  acces:["Depuis les Paluns : au nord par le viaduc de Thandol.","Depuis Austrivage : la grande route vers l'est.","Hub : Refuge de l'Ornière (46, 47). Prends le point de vol tout de suite."],
  avant:["<b>Malin's Request</b> (Archmage Malin, Stormwind) : ouvre la chaîne de Trelane au Refuge.","<b>Hints of a New Plague?</b> (Phin Odelic, Austrivage) : chaîne de la ferme Go'Shek.","<b>Sunken Treasure</b> (Baie-du-Butin) : ouvre la crique de Faldir, si tu passes par là."],
  quetes:[
    "Au Refuge, prends <b>Northfold Manor</b> (Captain Nials), rends <b>Malin's Request</b>, prends <b>Worth Its Weight in Gold</b> (Apprentice Kryten) et le point de vol.",
    "Touche les fragments de Myzrael (63, 34) pour lancer <b>The Princess Trapped</b>.",
    "Tue des kobolds Drywhisker dans la gorge (80, 40) pour 12 Motes of Myzrael et utilise-les sur les fragments à l'intérieur.",
    "Récupère la clé au Circle of East Binding (67, 30).",
    "Va dans la grotte Witherbark : 10 défenses, 4 Medicine Pouches et le couteau des Shadow Hunters (seuls certains le portent).",
    "À la ferme Go'Shek (60, 54), fais les étapes de <b>Hints of a New Plague?</b>, dont le coursier réprouvé et l'escorte de Kinelory.",
    "Récupère la clé au Circle of Outer Binding (52, 51).",
    "Tue 10 Syndicate Highwaymen et 6 Mercenaries au manoir de Northfold, et prends la clé du Circle of West Binding (25, 30) juste à côté."
  ],
  elites:[["Stromgarde (toutes les quêtes du donjon à ciel ouvert)","Uniquement en groupe de 5, tout d'un coup. Seul, zappe tout."]],
  skip:["Toutes les quêtes de Stromgarde si aucun groupe ne se forme en 10 minutes."],
  ensuite:"Arathi, deuxième passe : crique de Faldir et Boulderfist Hall."
},
{
  id:"alterac", lv:[34,37], title:"Montagnes d'Alterac", zone:"Montagnes d'Alterac",
  tags:[["opt","Optionnel"]], src:{kind:"zone",name:"games.gg, guide Alterac Mountains",url:"https://games.gg/world-of-warcraft/guides/wow-forever-alterac-mountains/"},
  intro:"Pas de point de vol ni de village : tout part d'Austrivage. Bonne zone de complément entre Arathi et les Rives Claires.",
  acces:["Vole à Austrivage, prends la route nord, à droite à la première fourche, puis au nord après la tour."],
  quetes:[
    "Prends <b>Syndicate Assassins</b> (Magistrate Henry Maleb) et <b>Crushridge Bounty</b> (Marshal Redpath) à Austrivage.",
    "Tue les Syndicate Footpads et Thieves dans les camps et ramasse les documents à Sofera's Naze (58, 68) : ils lancent <b>Foreboding Plans</b> et <b>Encrypted Letter</b>.",
    "Rends tout, prends <b>Noble Deaths</b> et donne la lettre à Loremaster Dibbs pour obtenir <b>Letter to Stormpike</b>.",
    "Farme les Alterac Signet Ring sur le Syndicat autour de Strahnbrad, et les osselets sur les ogres Crushridge non élites devant les ruines.",
    "Porte la lettre au prospecteur Stormpike à Forgefer, puis rapporte <b>Further Mysteries</b> à Maleb : ça ouvre <b>Dark Council</b>.",
    "Tue l'Argus Shadow Mage (59, 31) et Nagaz à Dandred's Fold (39, 14) pour <b>Dark Council</b>.",
    "Tue le Baron Vardus dans les Uplands (48, 17) si tu as eu le contrat (<b>Baron's Demise</b>).",
    "Ouvre le coffre en bois usé (39, 15) pour <b>The Ensorcelled Parchment</b>, puis apporte <b>Stormpike's Deciphering</b> à Forgefer en repartant."
  ],
  elites:[["Crushridge Warmongers","Groupe uniquement (élites 39-40)."],["The Crown of Will, parties 2 à 4","À 3 joueurs, le talisman final vaut le coup."],["The Perenolde Tiara","À deux vers 38, sinon à zapper."]],
  skip:["Narillasanz, le dragon élite rare niveau 44."],
  ensuite:"Rives Claires."
},
{
  id:"rives1", lv:[35,40], title:"Rives Claires, partie 1", zone:"Rives Claires",
  tags:[["new","Nouvelle zone"],["pvp","Contestée"]], src:{kind:"hubs",name:"leprestore.com, kingboost.net, gamerblurb.com (guides Riverglades)",url:"https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-riverglades-guide/"},
  intro:"La grande nouvelle zone 35-45, près de 200 quêtes. Aucun guide n'a encore publié les noms des quêtes Alliance : suis simplement les fils d'histoire depuis Fort-Lointain et nettoie une zone à la fois.",
  acces:["Va au Comté-du-Lac (Les Carmines) et prends la route nord vers les Steppes ardentes.","À la fourche avec le panneau « Riverglades », prends à droite au lieu de continuer vers les Steppes.","Traverse les Bristle Hills et descends vers le sud jusqu'à Fort-Lointain (Farholde Keep), sur une île au sud-est (60.6, 81.6).","Prends le point de vol (Gretchen Mayberry) : il relie le Comté-du-Lac et Morgan's Vigil."],
  quetes:[
    "Fort-Lointain est la base de la Confrérie du Cheval (Brotherhood of the Horse), menée par le Knight Commander Demar Brant. Prends tout ce qui s'y trouve.",
    "Commence par les fermes et les routes commerciales proches du fort, puis remonte les rivières.",
    "Les fils d'histoire annoncés : la Confrérie du Cheval, les ogres Boulderrock, le Marteau du crépuscule, une opération de pirates, un sauvetage de chevaux et un personnage nommé Jom-Jom.",
    "Regroupe plusieurs objectifs proches avant de rentrer au fort.",
    "Si un objectif est trop dur vers 36, laisse-le et reviens plus tard : la zone va jusqu'à 45."
  ],
  danger:["Approche depuis les Carmines : quelques monstres milieu 30, reste sur la route.","Rivières et Eastwind Shore : murlocs et crocolisques, évite de te battre dans l'eau contre plusieurs.","Sunnyglade et Twilight's Shroud : lanceurs de sorts du Marteau du crépuscule, pas de gros pulls.","Autour de Krol'dok et du Bloodmasters Ring : ogres élites."],
  elites:[],
  skip:[],
  ensuite:"Arathi vers 36 (ses quêtes sont niveau 36-40), puis retour ici après le niveau 40."
},
{
  id:"arathi2", lv:[38,40], title:"Arathi, deuxième passe", zone:"Hautes-terres d'Arathi",
  tags:[["pvp","Contestée"]], src:{kind:"zone",name:"games.gg, guide Arathi Highlands",url:"https://games.gg/world-of-warcraft/guides/wow-forever-arathi-highlands/"},
  intro:"La crique de Faldir est la meilleure XP par minute de la zone, et l'endroit le plus facile pour se noyer. Prends deux Elixirs of Water Breathing.",
  acces:["Vole au Refuge de l'Ornière.","Crique de Faldir : grotte au sud de Stromgarde (21, 75), puis nage vers l'est jusqu'aux quais."],
  quetes:[
    "Entre dans Boulderfist Hall (54, 77) par le chemin de gauche et tue Kor'gresh Coldrage pour <b>Wand over Fist</b>.",
    "Termine <b>Stones of Binding</b> au Circle of Inner Binding (36, 58) avec tes trois clés.",
    "À la crique : parle à Lolo the Lookout pour <b>Land Ho!</b> et va voir Shakes O'Breen.",
    "Prends <b>Deep Sea Salvage</b> (First Mate Nilzlix) et <b>Drowned Sorrows</b> (Captain Steelgut).",
    "Escorte le professeur Phizzlethorpe pour <b>Sunken Treasure</b>. Tue les deux élémentaires d'eau niveau 40 un par un.",
    "Mets les lunettes du Doctor Draxlegauge, plonge jusqu'au récif et ramasse 10 Calcified Elven Gems.",
    "Fouille les épaves Maiden's Folly et Spirit of Silverpine (journaux, cartes) en tuant 10 Daggerspine Raiders et 3 Sorceresses.",
    "Rends les gemmes à O'Breen."
  ],
  elites:[["Trelane's Defenses (39 élite)","À faire : l'Azure Agate tombe sur les chamans Boulderfist."],["Attack on the Tower (39 élite)","Juste après, à la tour d'Arathor (18, 68)."],["Breaking the Keystone (42)","À zapper seul, Fozruk vient avec des gardes."],["Death From Below (44)","À deux, événement de défense au canon."],["Summoning the Princess (50)","Plus tard, à 50."]],
  skip:["Tout Stromgarde sans groupe."],
  ensuite:"Retour en ville pour le niveau 40, puis Rives Claires."
},
{
  id:"citesubmergee", lv:[35,40], title:"La cité Submergée (donjon)", zone:"Strangleronce",
  tags:[["new","Nouveau donjon"],["dj","Groupe"],["pvp","Risqué"]], src:{kind:"zone",name:"Wowcarry et Warcraft Tavern (liste des donjons)",url:"https://www.warcrafttavern.com/forever/guides/dungeons/"},
  intro:"Nouveau donjon au large de Strangleronce, accessible dès 35. À faire en groupe, en profitant du trajet de groupe pour traverser Strangleronce sans te faire camper.",
  acces:["Au large de la côte de Strangleronce, à l'ouest de Grom'gol (camp Horde).","L'entrée est sous l'eau."],
  quetes:["Cherche un groupe avant de descendre en Strangleronce.","Une run suffit, les quêtes du donjon rapportent l'essentiel de l'XP."],
  elites:[], skip:[], ensuite:"Rives Claires."
},
{
  id:"capitale40", lv:[40,40], title:"Niveau 40 en ville", zone:"Hurlevent ou Forgefer",
  tags:[["mile","Palier clé"]], src:{kind:"zone",name:"Wowcarry (guide 1-60)",url:"https://wowcarry.com/blog/wow-forever/leveling/leveling-guide"},
  intro:"Le niveau le plus important après 20.",
  acces:["Pierre de foyer ou portail vers ta capitale."],
  quetes:["Apprends la monte et achète ta monture.","Active la double spécialisation (dispo au 40).","Passe tous tes rangs de sorts chez le maître des mages, dont les portails.","Pouvoir des arcanes arrive au 43 avec ton build."],
  elites:[], skip:[], ensuite:"Rives Claires, partie 2."
},
{
  id:"rives2", lv:[40,44], title:"Rives Claires, partie 2 + Bastion Krol'dok", zone:"Rives Claires",
  tags:[["new","Nouveau donjon"]], src:{kind:"hubs",name:"timesaver.gg, leprestore.com (guides Riverglades)",url:"https://timesaver.gg/blog/wow-forever-riverglades-zone-guide"},
  intro:"Termine les chaînes les plus dangereuses de la zone et fais le donjon des ogres.",
  acces:["Point de vol de Fort-Lointain."],
  quetes:["Continue la campagne de la Confrérie du Cheval et les hubs restants.","Bastion Krol'dok (40-45) : donjon d'ogres. Récupère d'abord toutes ses quêtes dans la zone, puis cherche un groupe.","Laisse de côté ce qui rapporte peu et pars vers 44-45."],
  elites:[["Bloodmasters Ring","Arène d'ogres en extérieur, niveau non confirmé : repère avant de t'engager."]],
  skip:[], ensuite:"Les Hinterlands ou Feralas."
},
{
  id:"hinterlands", lv:[43,49], title:"Les Hinterlands", zone:"Les Hinterlands",
  tags:[], src:{kind:"zone",name:"games.gg, guide Hinterlands",url:"https://games.gg/world-of-warcraft/guides/wow-forever-hinterlands-leveling/"},
  intro:"Arrivée vers 43-44, départ vers 49-50. Hub au Nid-de-l'Aigle.",
  acces:["Point de vol du Nid-de-l'Aigle (Aerie Peak), à l'ouest de la zone."],
  quetes:[
    "Rends <b>To The Hinterlands</b> à Falstad Wildhammer, puis va voir le Gryphon Master Talonaxe sur la volière.",
    "Prends <b>Witherbark Cages</b> et <b>Rhapsody Shindigger</b> (Talonaxe), plus <b>Troll Necklace Bounty</b> et <b>Skulk Rock Clean-up</b> (Fraggar Thundermantle).",
    "Ne prends <b>Rhapsody's Kalimdor Kocktail</b> que si tu vas aussi à Tanaris et Feralas, ses ingrédients viennent de Kalimdor.",
    "Vérifie les trois cages pour <b>Witherbark Cages</b> à Zun'watha (23, 59) et Hiri'watha (32, 57).",
    "Prends <b>Jammal'an the Prophet</b> auprès de l'exilé Atal'ai (34, 75) et garde-la pour le Temple englouti.",
    "Monte à l'Autel de Zul (49, 68) pour <b>The Altar of Zul</b>, puis nettoie les vases de Skulk Rock (58, 39).",
    "Ramasse des colliers sur les trolls Vilebranch au nord-est pour <b>Troll Necklace Bounty</b>.",
    "Termine la côte est avec <b>Cortello's Treasure</b> (sous l'eau, 81, 47) et les bouteilles de <b>Whiskey Slim's Lost Grog</b> sur la côte sud.",
    "Rentre, rends <b>The Altar of Zul</b> et porte <b>Thadius Grimshade</b> aux Terres foudroyées. La suite passe par Zul'Farrak."
  ],
  elites:[["Saving Sharpbeak","À 50, en groupe de trois."]],
  skip:[], ensuite:"Feralas ou Tanaris."
},
{
  id:"feralas", lv:[44,50], title:"Feralas", zone:"Feralas",
  tags:[], src:{kind:"zone",name:"games.gg, guide Feralas",url:"https://games.gg/world-of-warcraft/guides/wow-forever-feralas-leveling-guide/"},
  intro:"Arrivée Alliance vers 44, départ à 50. Hub au Bastion de Plumelune, sur l'île de Sardor. La zone est grande : regroupe tes objectifs.",
  acces:["Point de vol du Bastion de Plumelune (Feathermoon Stronghold)."],
  quetes:[
    "Touche le gazebo des ruines de Solarsal au sud de l'île de Sardor et rends <b>Return to Feathermoon Stronghold</b>.",
    "Prends <b>Against the Hatecrest</b> (Latronicus) et ramasse dix écailles dans les mêmes ruines pour la suite.",
    "Nage jusqu'à l'île de l'Effroi, entre dans le repaire de Shalzaru (25, 65) et tue Lord Shalzaru (<b>Against Lord Shalzaru</b>), puis <b>Delivering the Relic</b>.",
    "Prends la deuxième <b>Missing Courier</b> (Ginro), trouve la barque échouée et enchaîne <b>Boat Wreckage</b>, <b>The Knife Revealed</b> et <b>Psychometric Reading</b>.",
    "Fouille les camps Woodpaw (<b>The Woodpaw Gnolls</b>), entre dans la ruche (<b>The Writhing Deep</b>) et ouvre la cosse Zukk'ash (<b>Freed from the Hive</b>).",
    "Rends <b>A Hero's Welcome</b> à Shandris et prends <b>Rise of the Silithid</b>.",
    "Trouve Kindal et Jer'kai au-dessus du camp Grimtotem (66, 46) : <b>Freedom for All Creatures</b>, puis <b>Doling Justice</b>.",
    "Prends les deux quêtes de Zorbin au quai et escorte Shay (<b>Wandering Shay</b>) près des ruines de Ravenwind.",
    "À 50, termine la chaîne de Troyas avec <b>The Stave of Equinex</b> et <b>The Morrow Stone</b>."
  ],
  elites:[["Freedom for All Creatures","À deux, escorte de six minutes."],["Zapped Giants + Mountain Giant Muisek","Ensemble : le rétrécisseur rend les géants faciles."],["Dark Heart","À 50."]],
  skip:[], ensuite:"Tanaris ou la Gorge des Vents brûlants."
},
{
  id:"tanaris", lv:[44,48], title:"Tanaris + Zul'Farrak", zone:"Tanaris",
  tags:[["opt","Quêtes Classic à vérifier"]], src:{kind:"classic",name:"Quêtes Classic de Gadgetzan (pas de guide de zone Forever trouvé)",url:"https://rankedboost.com/world-of-warcraft/forever/leveling/"},
  intro:"Pas de guide de zone Forever publié pour Tanaris. Voici les quêtes de Gadgetzan du jeu d'origine, qui devraient toujours être là. Vérifie dans ton journal.",
  acces:["Point de vol de Gadgetzan (neutre).","Le bateau Steamwheedle Port → Powderfuse Port relie Tanaris aux Rives Claires."],
  quetes:["Quêtes de l'eau et des voleurs : <b>Water Pouch Bounty</b>, <b>Wastewander Justice</b>.","Pirates de la côte : <b>Southsea Shakedown</b>, <b>Pirate Hats Ahoy!</b>.","<b>Thistleshrub Valley</b>, <b>Gadgetzan Water Survey</b>, <b>Noxious Lair Investigation</b>, <b>Rocket Car Parts</b>.","Escorte <b>Tooga's Quest</b> (la tortue).","Zul'Farrak (44+) : récupère toutes ses quêtes à Gadgetzan avant d'y aller en groupe."],
  elites:[], skip:[], ensuite:"Gorge des Vents brûlants ou Un'Goro."
},
{
  id:"shendralas", lv:[43,53], title:"Shen'dralas", zone:"Shen'dralas",
  tags:[["new","Nouvelle zone"],["opt","Niveau non officiel"]], src:{kind:"hubs",name:"Icy Veins, Gamewave, eXputer",url:"https://www.icy-veins.com/wow-forever/zones-and-maps"},
  intro:"Nouvelle zone cachée entre Mulgore et Désolace, autour des Shen'dralar et des tribus de centaures. Blizzard n'a donné aucun niveau, les guides la placent entre 40 et 55.",
  acces:["Au sud-est de Désolace, par la vallée des Ossements."],
  quetes:["Ses quêtes mènent à Maraudon et aux Souilles de Tranchebauge (Razorfen Downs).","Bonne option si tu es déjà côté Kalimdor (Feralas, Désolace)."],
  elites:[], skip:[], ensuite:"Feralas ou Un'Goro."
},
{
  id:"gorge", lv:[46,50], title:"Gorge des Vents brûlants", zone:"Gorge des Vents brûlants",
  tags:[], src:{kind:"zone",name:"games.gg, guide Searing Gorge",url:"https://games.gg/world-of-warcraft/guides/wow-forever-searing-gorge-leveling-guide/"},
  intro:"Arrivée à 46, boucle principale 47-49, départ 49-50. Hub neutre à Thorium Point.",
  acces:["Point de vol de Thorium Point (neutre)."],
  quetes:[
    "Prends <b>Suntara Stones</b> (Dorius), survis à l'embuscade de l'escorte et ramasse la Singed Letter (74.5, 19.3).",
    "Aux toilettes, prends <b>Caught!</b> : 8 géologues Dark Iron et 15 tissus de soie, garde toute ta soie.",
    "Va voir Velarok Windblade (39, 39), écoute <b>Divine Retribution</b> et prends <b>The Flawless Flame</b>.",
    "À Thorium Point : point de vol, les trois quêtes du tableau, les trois quêtes de Hansel, <b>What the Flux?</b>, et parle à Zamael (29.6, 26.3).",
    "Fais le tour du Chaudron pour les golems, araignées de lave, Heart of Flame et Golem Oil.",
    "Rends la flamme et prends <b>Forging the Shaft</b> (8 dagues plaquées de thorium sur les Dark Iron).",
    "Descends dans le Chaudron pour les Taskmasters, Slavers, la tuyère et la longue-vue.",
    "Entre dans le Slag Pit pour les Incendosaurs et les plans de flux (40.5, 35.7).",
    "Allume les quatre braseros pour <b>Set Them Ablaze!</b>.",
    "Côté Alliance, porte la lettre à Forgefer et reviens avec <b>Dwarven Justice</b> pour l'archéologue mourant (41, 26)."
  ],
  elites:[["Tours, Overseer Maltorius, Obsidion","En groupe vers 49-50."]],
  skip:[], ensuite:"Un'Goro, les Steppes ardentes ou Gangrebois."
},
{
  id:"ungoro", lv:[50,53], title:"Cratère d'Un'Goro", zone:"Cratère d'Un'Goro",
  tags:[["opt","Quêtes Classic à vérifier"]], src:{kind:"classic",name:"Quêtes Classic du Refuge des Marshal (pas de guide de zone Forever trouvé)",url:"https://boostroom.com/blog/wow-forever-best-leveling-zones-where-to-quest-at-every-level"},
  intro:"Objectifs denses et faciles à enchaîner. Pas de guide de zone Forever publié : ce sont les quêtes du jeu d'origine.",
  acces:["Depuis Tanaris par la rampe ouest, ou point de vol du Refuge des Marshal (neutre)."],
  quetes:["Au Refuge : <b>The Apes of Un'Goro</b>, <b>Beware of Pterrordax</b>, <b>Roll the Bones</b>, <b>Alien Ecology</b>, <b>Expedition Salvation</b>.","<b>Crystals of Power</b> : garde tous les cristaux de puissance, ils servent aussi pour le donjon Shaper's Terrace.","Escorte du robot <b>Chasing A-Me 01</b>.","Chaîne <b>Larion and Muigin</b> / atelier de Marvon, et <b>Shizzle's Flyer</b>.","Chaîne de Linken (<b>It's a Secret to Everybody</b>)."],
  elites:[], skip:[], ensuite:"Maleterres de l'Ouest, première passe, ou Gangrebois."
},
{
  id:"wpl1", lv:[51,53], title:"Maleterres de l'Ouest, passe 1", zone:"Maleterres de l'Ouest",
  tags:[], src:{kind:"zone",name:"games.gg, guide Western Plaguelands",url:"https://games.gg/world-of-warcraft/guides/wow-forever-western-plaguelands-leveling-guide/"},
  intro:"Premier passage court pour les chaudrons de Felstone et Dalson, puis départ.",
  acces:["Vole à Austrivage puis monte par Alterac (Strahnbrad, Chillwind Point), ou depuis le Nid-de-l'Aigle par le ravin de Plaguemist.","Prends le point de vol du Camp du Noroît (Chillwind Camp) dès la première visite."],
  quetes:[
    "Rends la quête d'introduction au camp.",
    "<b>Clear the Way</b> à Sorrow Hill : 10 Skeletal Flayers et 10 Slavering Ghouls.",
    "Prends <b>The Scourge Cauldrons</b>, puis <b>Target: Felstone Field</b>.",
    "Tue le Cauldron Lord Bilemaw à Felstone, ouvre le chaudron (37, 57) avec sa clé et remplis la fiole.",
    "Parle à Janice Felstone (<b>Better Late Than Never</b>) et ramasse son colis près du cheval.",
    "Prends <b>Target: Dalson's Tears</b> et tue le Cauldron Lord Malvinious (46, 52).",
    "Lis le journal de Mme Dalson dans la grange (XP gratuite), puis la clé des toilettes, le fermier Dalson et l'armoire pour <b>Locked Away</b>.",
    "Tue 8 loups malades pour <b>The Wildlife Suffers Too</b>, puis pars vers 53."
  ],
  elites:[], skip:[], ensuite:"Steppes ardentes ou Gangrebois."
},
{
  id:"steppes", lv:[52,55], title:"Steppes ardentes", zone:"Steppes ardentes",
  tags:[], src:{kind:"zone",name:"games.gg, guide Burning Steppes",url:"https://games.gg/world-of-warcraft/guides/wow-forever-burning-steppes-leveling-guide/"},
  intro:"Idéal en arrivant à 51-52, la zone s'épuise vers 55. Hub Alliance à Morgan's Vigil.",
  acces:["Point de vol de Morgan's Vigil (aussi relié à Fort-Lointain)."],
  quetes:[
    "<b>Extinguish the Firegut</b> (Oralius) : 15 ogres mages, 7 ogres et 7 brutes à Dreadmaul Rock.",
    "<b>Dragonkin Menace</b> (Helendis Riverhorn) au nord du Vigil.",
    "Vole à Flame Crest pour <b>Broodling Essence</b> et <b>Tablet of the Seven</b> (clic gratuit à 53, 41).",
    "Rends les ogres, prends <b>Gor'tesh the Brute Lord</b> et tue-le dans le camp Blackrock.",
    "Finis avec <b>Ogre Head On A Stick = Party</b> au sommet de Dreadmaul Rock.",
    "<b>Chillwind Horns</b> (Felnok Steelspring) t'enverra à Long-guet plus tard."
  ],
  elites:[["Dragonkin Menace","À deux ou trois, sinon zappe."],["Quêtes de Rochenoire","À faire pendant une run des Profondeurs."]],
  skip:["<b>FIFTY! YEP!</b> (50 médaillons)."], ensuite:"Gangrebois ou Maleterres de l'Est."
},
{
  id:"gangrebois", lv:[50,54], title:"Gangrebois", zone:"Gangrebois",
  tags:[["opt","Quêtes Classic à vérifier"]], src:{kind:"classic",name:"Quêtes Classic de Talonbranch Glade (pas de guide de zone Forever trouvé)",url:"https://rankedboost.com/world-of-warcraft/forever/leveling/"},
  intro:"Alternative à Un'Goro côté Kalimdor. Pas de guide de zone Forever : quêtes du jeu d'origine.",
  acces:["Point de vol Alliance de Talonbranch Glade."],
  quetes:["<b>Forces of Jaedenar</b>, <b>Cleansing Felwood</b>, <b>Corrupted Sabers</b>.","Chaîne neutre des Timbermaw (réputation utile pour Berceau-de-l'Hiver)."],
  elites:[], skip:[], ensuite:"Maleterres de l'Est ou Berceau-de-l'Hiver."
},
{
  id:"epl", lv:[55,58], title:"Maleterres de l'Est", zone:"Maleterres de l'Est",
  tags:[], src:{kind:"zone",name:"games.gg, guide Eastern Plaguelands",url:"https://games.gg/world-of-warcraft/guides/wow-forever-eastern-plaguelands/"},
  intro:"Arrivée à 55, départ 58-59. La chaîne de Tirion s'arrête à Stratholme.",
  acces:["Point de vol de la Chapelle de l'Espoir de Lumière (neutre), à prendre en priorité."],
  quetes:[
    "Avant d'entrer : <b>Little Pamela</b> (Marlene Redpath) et ta version de <b>A Plague Upon Thee</b>.",
    "Chez Tirion (7.6, 43.7) : <b>Demon Dogs</b>, <b>Blood Tinged Skies</b>, <b>Carrion Grubbage</b>.",
    "À Terrordale, le livre (17.4, 31.1) pour <b>Augustus' Receipt Book</b>, et le bocal de termites sur les monticules.",
    "Au sud, Darrowshire : rends <b>Little Pamela</b>, reconstitue la poupée, prends <b>Uncle Carlin</b> et <b>Auntie Marlene</b>.",
    "Clique le parchemin près de l'Undercroft (27.3, 85.2) pour <b>Hameya's Plea</b>.",
    "À la Chapelle : <b>Defenders of Darrowshire</b>, <b>Zaeldarr the Outcast</b>, <b>The Restless Souls</b>, et <b>Argent Dawn Commission</b> pour que les Scourgestones commencent à tomber.",
    "Au nord, Frenzied Plaguehounds (65, 33) et Carrion Devourers (65, 28) pour finir les quêtes de Tirion, et Hameya à Zul'Mashar (70.7, 16.5).",
    "Rends à Tirion, écoute <b>Redemption</b>, prends <b>Of Forgotten Memories</b>, puis l'Undercroft (Mercutio, Zaeldarr, la clé de Hameya).",
    "Libère quinze esprits de Darrowshire, prends <b>Of Lost Honor</b> et le symbole à Northdale (71.3, 34)."
  ],
  elites:[["Of Forgotten Memories","Faisable seul avec tes cooldowns."],["The Corpulent One","À deux ou trois (élite 61)."],["Duskwing","À deux."]],
  skip:["<b>Order Must Be Restored</b> et <b>That's Asking A Lot</b>."], ensuite:"Maleterres de l'Ouest, deuxième passe."
},
{
  id:"wpl2", lv:[55,58], title:"Maleterres de l'Ouest, passe 2", zone:"Maleterres de l'Ouest",
  tags:[], src:{kind:"zone",name:"games.gg, guide Western Plaguelands",url:"https://games.gg/world-of-warcraft/guides/wow-forever-western-plaguelands-leveling-guide/"},
  intro:"Deuxième passage pour Andorhal, les derniers chaudrons et Chromie.",
  acces:["Point de vol du Camp du Noroît."],
  quetes:["Tue le Cauldron Lord Razarch au Writhing Haunt (53, 66).","Finis la chaîne de la faune avec 8 grizzlis malades à l'est.","Marque les quatre tours d'Andorhal pour <b>All Along the Watchtowers</b>.","<b>A Matter of Time</b> et <b>Counting Out Time</b> pour Chromie, et 15 fragments de squelette.","Cauldron Lord Soulwrath à Gahrron's Withering (62.5, 58.5) à 57.","<b>Unfinished Business</b> et ses deux suites, puis <b>Mission Accomplished!</b>."],
  elites:[], skip:["<b>Counting Out Time</b> après le premier rendu (version répétable)."], ensuite:"Berceau-de-l'Hiver."
},
{
  id:"berceau", lv:[56,60], title:"Berceau-de-l'Hiver", zone:"Berceau-de-l'Hiver",
  tags:[["opt","Quêtes Classic à vérifier"]], src:{kind:"classic",name:"Quêtes Classic de Long-guet (pas de guide de zone Forever trouvé)",url:"https://boostroom.com/blog/wow-forever-best-leveling-zones-where-to-quest-at-every-level"},
  intro:"Dernière zone avant 60, avec Long-guet comme base neutre. Pas de guide de zone Forever : quêtes du jeu d'origine.",
  acces:["Point de vol de Long-guet (Everlook), neutre."],
  quetes:["<b>Are We There, Yeti?</b> (chaîne des yétis).","<b>Winterfall Activity</b> et la chaîne des furbolgs Winterfall.","<b>Frostsaber Provisions</b>, <b>Wildkin of Elune</b>.","<b>Chillwind Horns</b> si tu l'as prise aux Steppes ardentes.","Donjons de fin : Blackmaw Hold (55-60, Azshara) et Shaper's Terrace (58-60, Un'Goro)."],
  elites:[], skip:[], ensuite:"Le mont Hyjal à 60."
},
{
  id:"hyjal", lv:[60,60], title:"Mont Hyjal", zone:"Mont Hyjal",
  tags:[["new","Fin de jeu"]], src:{kind:"zone",name:"Icy Veins (zones de Forever)",url:"https://www.icy-veins.com/wow-forever/zones-and-maps"},
  intro:"Zone de fin de jeu niveau 60, avec le raid Hyjal Summit.",
  acces:["Au sud du Berceau-de-l'Hiver, par la gorge de Sombrevent (Darkwhisper Gorge)."],
  quetes:["Repasse ton build en version fin de jeu (double spécialisation).","Raids à partir du 9 décembre."],
  elites:[], skip:[], ensuite:"Bravo !"
}
];

/* Plan niveau par niveau : [niveau, id d'étape principale, texte court, id alternatif éventuel] */
window.LEVELS = [
 [30,"austrivage","Côte d'Austrivage, et la quête de Dalaran"],
 [31,"austrivage","Austrivage : murlocs, nagas, bisque de tortue","dalaran"],
 [32,"austrivage","Austrivage : Farren's Proof, Syndicat","dalaran"],
 [33,"austrivage","Austrivage : yétis de Darrow Hill, Costly Menace","dalaran"],
 [34,"alterac","Alterac depuis Austrivage"],
 [35,"rives1","Entrée aux Rives Claires par les Carmines"],
 [36,"arathi1","Arathi : Refuge de l'Ornière, Northfold, Go'Shek","rives1"],
 [37,"arathi1","Arathi : Myzrael, Witherbark","citesubmergee"],
 [38,"arathi2","Arathi : Boulderfist Hall, crique de Faldir"],
 [39,"arathi2","Arathi : crique de Faldir","rives1"],
 [40,"capitale40","En ville : monture, double spé, portails"],
 [41,"rives2","Rives Claires, campagne de la Confrérie"],
 [42,"rives2","Bastion Krol'dok en groupe"],
 [43,"hinterlands","Hinterlands depuis le Nid-de-l'Aigle","shendralas"],
 [44,"hinterlands","Hinterlands : cages, Autel de Zul","feralas"],
 [45,"feralas","Feralas : Plumelune, Hatecrest, Shalzaru"],
 [46,"feralas","Feralas : ruche Zukk'ash, Woodpaw","tanaris"],
 [47,"gorge","Gorge des Vents brûlants : Thorium Point"],
 [48,"gorge","Gorge : Chaudron et Slag Pit"],
 [49,"hinterlands","Fin des Hinterlands / Feralas","gorge"],
 [50,"ungoro","Un'Goro : Refuge des Marshal"],
 [51,"ungoro","Un'Goro : cristaux, A-Me 01","wpl1"],
 [52,"wpl1","Maleterres de l'Ouest : Felstone, Dalson"],
 [53,"steppes","Steppes ardentes : Morgan's Vigil","gangrebois"],
 [54,"steppes","Steppes ardentes : Dreadmaul Rock","gangrebois"],
 [55,"epl","Maleterres de l'Est : Tirion, Darrowshire"],
 [56,"epl","Maleterres de l'Est : Chapelle, Undercroft"],
 [57,"wpl2","Maleterres de l'Ouest : Andorhal, Chromie"],
 [58,"berceau","Berceau-de-l'Hiver : Long-guet"],
 [59,"berceau","Berceau-de-l'Hiver, donjons de fin"],
 [60,"hyjal","Mont Hyjal"]
];

/* Cartes : id de zone Wowhead (cartes Classic en français), points fixes [x, y, libellé, type].
 * type "hub" = point de vol / base, "danger" = à éviter, sinon point d'intérêt.
 * Les coordonnées écrites « (x, y) » dans les quêtes sont ajoutées automatiquement, numérotées comme la quête. */
window.MAPS = {
  austrivage:{id:267,pins:[[49.3,52.3,"Austrivage, point de vol (Darla Harris)","hub"],[43,68,"Côte ouest : murlocs (Down the Coast, Farren's Proof)"],[57,71,"Côte est : nagas Daggerspine (Stormwind Ho!)"],[44,29,"Darrow Hill : yétis (fourrures de Bartolo)"],[62,20,"Moulin-de-Tarren (Horde)","danger"],[71,79,"Dun Garok : élites (Battle of Hillsbrad)","danger"]]},
  dalaran:{id:36,pins:[[20.5,70,"Dalaran : entrée du donjon par les égouts","hub"],[58.3,67.9,"Sofera's Naze"]]},
  arathi1:{id:45,pins:[[46,47,"Refuge de l'Ornière, point de vol","hub"],[74,33,"Trépas-d'Orgrim (Horde)","danger"],[30,60,"Stromgarde : élites, en groupe seulement","danger"]]},
  alterac:{id:36,pins:[[60,43.7,"Strahnbrad : Syndicat, Alterac Signet Ring"],[39.5,47,"Ruines d'Alterac : ogres Crushridge élites","danger"],[20.5,70,"Dalaran"]]},
  arathi2:{id:45,pins:[[46,47,"Refuge de l'Ornière, point de vol","hub"],[21,75,"Grotte vers la crique de Faldir"],[30,60,"Stromgarde : élites","danger"]]},
  citesubmergee:{id:33,pins:[[32.5,29.2,"Grom'gol (Horde) : l'entrée sous l'eau est à l'ouest","danger"]]},
  rives1:{schema:"rives",pins:[[60.6,81.6,"Fort-Lointain, point de vol (Gretchen Mayberry)","hub"],[59.4,45,"Rog'mar (Horde)","danger"],[12,12,"Entrée depuis les Carmines (Bristle Hills)"]]},
  rives2:{schema:"rives",pins:[[60.6,81.6,"Fort-Lointain, point de vol","hub"],[59.4,45,"Rog'mar (Horde)","danger"]]},
  hinterlands:{id:47,pins:[[11.1,46.2,"Nid-de-l'Aigle, point de vol","hub"],[81.7,81.8,"Village de Revantusk (Horde)","danger"]]},
  feralas:{id:357,pins:[[30.2,43.2,"Bastion de Plumelune, point de vol","hub"],[75.5,44.3,"Mojache (Horde)","danger"]]},
  tanaris:{id:440,pins:[[51,29,"Gadgetzan, point de vol","hub"],[38.7,20,"Zul'Farrak (donjon)"]]},
  gorge:{id:51,pins:[[37.9,30.8,"Thorium Point, point de vol","hub"]]},
  ungoro:{id:490,pins:[[43.5,8.5,"Refuge des Marshal, point de vol","hub"]]},
  wpl1:{id:28,pins:[[42.9,85.1,"Camp du Noroît, point de vol","hub"]]},
  steppes:{id:46,pins:[[84.3,68.3,"Morgan's Vigil, point de vol","hub"],[65.6,24.2,"Flame Crest"],[80,40,"Dreadmaul Rock : ogres"]]},
  gangrebois:{id:361,pins:[[62.5,24.2,"Talonbranch Glade, point de vol","hub"]]},
  epl:{id:139,pins:[[81.6,59.3,"Chapelle de l'Espoir de Lumière, point de vol","hub"]]},
  wpl2:{id:28,pins:[[42.9,85.1,"Camp du Noroît, point de vol","hub"]]},
  berceau:{id:618,pins:[[61.3,38.9,"Long-guet, point de vol","hub"]]}
};

/* ---------- Réorganisation : un seul continent sur le chemin principal ---------- */
window.STEPS.push({
  id:"foudroyees", lv:[47,50], title:"Terres foudroyées", zone:"Terres foudroyées",
  tags:[], src:{kind:"zone",name:"games.gg, guide Blasted Lands",url:"https://games.gg/world-of-warcraft/guides/wow-forever-blasted-lands-leveling-guide/"},
  intro:"Petite zone à faire entre 47 et 50 pour ses cinq quêtes de buffs, puis une seconde visite vers 55-57. Avant 47, les monstres du nord sont déjà à ton niveau.",
  acces:["Par le Marais des Chagrins, puis le col au sud-est.","Point de vol du Rempart-du-Néant (Nethergarde Keep), au nord de la zone."],
  quetes:["Prends les cinq quêtes de buffs (sangliers, basilics, vautours, hyènes, scorpides) : elles se font toutes en tuant les monstres du nord.","Ramasse les fragments de draenéthyste en chemin, ils servent à des récompenses.","Rends tout vers 49-50 et pars.","Retour vers 55-57 pour The Stones That Bind Us, près des pierres du sud."],
  elites:[["Kirith","À 57 avec un ami (élite 55)."],["Uniting the Shattered Amulet","À deux ou trois, avec les armes Felbane."],["You Are Rakh'likh, Demon","À cinq au niveau 60, ou à zapper."]],
  skip:[], ensuite:"Steppes ardentes."
});
window.MAPS.foudroyees={id:4,pins:[[65.5,24.4,"Rempart-du-Néant, point de vol","hub"]]};
window.STEP_ORDER=["austrivage","dalaran","alterac","rives1","citesubmergee","arathi1","arathi2","capitale40","rives2","hinterlands","gorge","foudroyees","steppes","wpl1","epl","wpl2","feralas","tanaris","shendralas","ungoro","gangrebois","berceau","hyjal"];
/* Options Kalimdor : à faire seulement si tu veux changer de décor, chacune coûte un trajet en bateau. */
window.KALIMDOR=["feralas","tanaris","shendralas","ungoro","gangrebois","berceau"];
/* Liste exacte des quêtes (base Questie) : [clé de zone, niveau min, niveau max] */
window.QZ={austrivage:["austrivage",26,40],alterac:["alterac",30,42],arathi1:["arathi",30,37],arathi2:["arathi",38,44],hinterlands:["hinterlands",40,53],gorge:["gorge",42,52],foudroyees:["blasted",44,60],steppes:["steppes",48,60],wpl1:["wpl",48,54],wpl2:["wpl",54,62],epl:["epl",52,62],feralas:["feralas",40,52],tanaris:["tanaris",40,50],ungoro:["ungoro",46,58],gangrebois:["gangrebois",46,58],berceau:["berceau",52,62]};
window.LEVELS = [
 [30,"austrivage","Côte d'Austrivage, et la quête de Dalaran"],
 [31,"austrivage","Austrivage : murlocs, nagas, bisque de tortue","dalaran"],
 [32,"austrivage","Austrivage : Farren's Proof, Syndicat","dalaran"],
 [33,"austrivage","Austrivage : yétis de Darrow Hill, Costly Menace","dalaran"],
 [34,"alterac","Alterac depuis Austrivage"],
 [35,"rives1","Entrée aux Rives Claires par les Carmines"],
 [36,"arathi1","Arathi : Refuge de l'Ornière, Northfold, Go'Shek","rives1"],
 [37,"arathi1","Arathi : Myzrael, Witherbark","citesubmergee"],
 [38,"arathi2","Arathi : Boulderfist Hall, crique de Faldir"],
 [39,"arathi2","Arathi : crique de Faldir","rives1"],
 [40,"capitale40","En ville : monture, double spé, portails"],
 [41,"rives2","Rives Claires : campagne de la Confrérie"],
 [42,"rives2","Bastion Krol'dok en groupe"],
 [43,"rives2","Fin des Rives Claires","shendralas"],
 [44,"hinterlands","Hinterlands : Nid-de-l'Aigle","feralas"],
 [45,"hinterlands","Hinterlands : cages Witherbark","feralas"],
 [46,"hinterlands","Hinterlands : Skulk Rock, colliers","tanaris"],
 [47,"gorge","Gorge des Vents brûlants : Thorium Point"],
 [48,"gorge","Gorge : Chaudron et Slag Pit"],
 [49,"foudroyees","Terres foudroyées : quêtes de buffs"],
 [50,"gorge","Fin de la Gorge et des Hinterlands","ungoro"],
 [51,"steppes","Steppes ardentes : Morgan's Vigil","ungoro"],
 [52,"wpl1","Maleterres de l'Ouest : Felstone, Dalson","gangrebois"],
 [53,"steppes","Steppes ardentes : Dreadmaul Rock","gangrebois"],
 [54,"steppes","Fin des Steppes, Rochenoire en groupe"],
 [55,"epl","Maleterres de l'Est : Tirion, Darrowshire"],
 [56,"epl","Maleterres de l'Est : Chapelle, Undercroft"],
 [57,"wpl2","Maleterres de l'Ouest : Andorhal, Chromie"],
 [58,"epl","Maleterres de l'Est : le nord, Stratholme","berceau"],
 [59,"foudroyees","Retour aux Terres foudroyées","berceau"],
 [60,"hyjal","Mont Hyjal"]
];

/* Correctif du 18 nov. : Austrivage seul ne suffit pas de 30 à 34, Arathi commence à 36 */
window.STEPS.push({
  id:"strangleronce1", lv:[32,35], title:"Strangleronce nord", zone:"Vallée de Strangleronce",
  tags:[["pvp","Très contestée"]], src:{kind:"zone",name:"games.gg, guide Stranglethorn Vale",url:"https://games.gg/world-of-warcraft/guides/wow-forever-stranglethorn-vale-leveling-guide/"},
  intro:"La zone Alliance prévue pour 30-35 : le camp rebelle et l'expédition de Nesingwary ont une dizaine de quêtes à ton niveau. Reste dans le nord, le sud (Grom'gol, Baie-du-Butin) est là où la Horde campe.",
  acces:["Depuis le Bois de la Pénombre, prends la route du sud vers Strangleronce.","Camp rebelle (38, 3) tout au nord, puis le camp de Nesingwary (35, 10) un peu plus bas.","Point de vol le plus proche côté Alliance : Sombre-Comté, au Bois de la Pénombre. Baie-du-Butin (point de vol neutre) est loin au sud."],
  quetes:[
    "Au camp rebelle (38, 3), prends <b>Jungle Secrets</b>, <b>The Second Rebellion</b> et <b>Bad Medicine</b>.",
    "Au camp de Nesingwary (35, 10), prends <b>Welcome to the Jungle</b>, puis <b>Tiger Mastery</b> et <b>Panther Mastery</b>. Ajoute <b>Raptor Mastery</b> au niveau 34.",
    "Tue les Kurzen Jungle Fighters pour <b>The Second Rebellion</b> et ramasse les remèdes pour <b>Bad Medicine</b> dans le même passage.",
    "Fais les tigres et les panthères de la première série, puis rends-les pour avoir la deuxième série.",
    "Commence par les tigres et les raptors, qui se recoupent avec tout le reste au milieu de la zone.",
    "Si tu passes par Baie-du-Butin (point de vol), prends <b>Supply and Demand</b>, <b>Investigate the Camp</b>, <b>Singing Blue Shards</b> et <b>Bloodscalp Ears</b>. <b>Investigate the Camp</b> se rend vite.",
    "Pars vers 35 : la suite de Strangleronce revient vers 36-40, avec la cité Submergée."
  ],
  elites:[["Colonel Kurzen","Groupe uniquement."],["Excelsior","À 40 ou à deux."]],
  skip:[], ensuite:"Rives Claires à 35, puis Arathi à 36."
});
window.STEPS.push({
  id:"desolace", lv:[32,37], title:"Désolace", zone:"Désolace",
  tags:[["opt","Option Kalimdor"]], src:{kind:"zone",name:"games.gg, guide Desolace",url:"https://games.gg/world-of-warcraft/guides/wow-forever-desolace-leveling-guide/"},
  intro:"L'alternative calme à Strangleronce : 17 quêtes niveau 31-35 et beaucoup moins de Horde. Il faut prendre le bateau pour Kalimdor.",
  acces:["Bateau Port de Menethil → Auberdine, puis vol vers les Serres-Rocheuses et route vers le sud.","Hub Alliance : le Poste de Nijel, au nord de la zone. Prends le point de vol."],
  quetes:[
    "Rends la quête d'introduction, puis prends <b>Reagents for Reclaimers Inc.</b>, <b>The Karnitol Shipwreck</b>, <b>Vahlarriel's Search</b> et <b>Centaur Bounty</b>.",
    "Prends <b>Strange Alliance</b> pour les Gelkis.",
    "Tue des satyres Hatefury à Sargeron pour les griffes et les cornes.",
    "Fouille le chariot près de Thunder Axe Fortress, ramasse le pendentif Malem et rends <b>Vahlarriel's Search</b>.",
    "Trouve Dalinda Malem (54.9, 26.1), tue Tyranis Malem (53.0, 29.1) pour <b>Search for Tyranis</b>, puis escorte-la pour <b>Return to Vahlarriel</b>.",
    "Prends <b>Sceptre of Light</b> à Ethel Rethor, tue le Burning Blade Seer (55.2, 30.2) et pille le coffre de Karnitol (36.1, 30.5) dans le même trajet.",
    "Bloc neutre : <b>Kodo Roundup</b> et <b>Bone Collector</b> au cimetière des kodos (50.5, 58.5), escorte <b>Get Me Out of Here!</b> (33.9, 53.5)."
  ],
  elites:[], skip:[], ensuite:"Retour dans les Royaumes de l'Est : Rives Claires ou Arathi à 36."
});
window.MAPS.strangleronce1={id:33,pins:[[38,3.3,"Camp rebelle","hub"],[35.6,10.6,"Camp de Nesingwary","hub"],[32.5,29.2,"Grom'gol (Horde)","danger"],[27,77,"Baie-du-Butin, point de vol neutre"]]};
window.MAPS.desolace={id:405,pins:[[64.7,10.5,"Poste de Nijel, point de vol","hub"]]};
window.STEP_ORDER.splice(window.STEP_ORDER.indexOf("dalaran")+1,0,"strangleronce1");
window.STEP_ORDER.splice(window.STEP_ORDER.indexOf("feralas"),0,"desolace");
window.KALIMDOR.unshift("desolace");
window.QZ.strangleronce1=["stv",30,36]; window.QZ.desolace=["desolace",30,38];
window.LEVELS.splice(0,10,
 [30,"austrivage","Côte d'Austrivage, et la quête de Dalaran"],
 [31,"austrivage","Austrivage : murlocs, nagas, Syndicat","dalaran"],
 [32,"strangleronce1","Strangleronce nord : camp rebelle, Nesingwary","desolace"],
 [33,"strangleronce1","Strangleronce : tigres, panthères, Kurzen","desolace"],
 [34,"strangleronce1","Strangleronce : raptors, Baie-du-Butin","desolace"],
 [35,"rives1","Rives Claires depuis les Carmines","alterac"],
 [36,"arathi1","Arathi : Refuge de l'Ornière, Northfold, Go'Shek","rives1"],
 [37,"arathi1","Arathi : Myzrael, Witherbark","citesubmergee"],
 [38,"arathi2","Arathi : Boulderfist Hall, crique de Faldir"],
 [39,"arathi2","Arathi : crique de Faldir","rives1"]);
