var universities = [
    "/wiki/University_of_Pennsylvania",
"/wiki/Princeton_University",
"/wiki/Harvard_University",
"/wiki/University_of_Illinois_Urbana-Champaign",
"/wiki/University_of_Chicago",
"/wiki/Ecole_polytechnique",
"/wiki/University_of_Nebraska-Lincoln",
"/wiki/Columbia_University",
"/wiki/University_of_Michigan",
"/wiki/Stanford_University",
"/wiki/University_of_Maryland,_College_Park",
"/wiki/University_of_Arkansas",
"/wiki/Johns_Hopkins_University",
"/wiki/Oregon_State_University",
"/wiki/University_of_Texas_at_Austin",
"/wiki/Trinity_University_(Texas)",
"/wiki/Dhirubhai_Ambani_International_School",
"/wiki/St._Xavier's_College,_Mumbai",
"/wiki/Institute_of_Chemical_Technology",
"/wiki/National_Autonomous_University_of_Mexico",
"/wiki/University_of_Central_Arkansas",
"/wiki/Massachusetts_Institute_of_Technology",
"/wiki/Nankai_University",
"/wiki/McGill_University",
"/wiki/Sheth_Chimanlal_Nagindas_Vidyalaya",
"/wiki/Binghamton_University",
"/wiki/New_York_University",
"/wiki/Shenzhen_University",
"/wiki/Yale_University",
"/wiki/Zhejiang_University",
"/wiki/University_of_Wisconsin",
"/wiki/Waseda_University",
"/wiki/Wuhan_University",
"/wiki/Bryn_Mawr_College",
"/wiki/European_Schools",
"/wiki/Lebanon_Valley_College",
"/wiki/Shanghai_Jiaotong_University",
"/wiki/South_China_University_of_Technology",
"/wiki/Institute_of_Physics,_Chinese_Academy_of_Sciences",
"/wiki/Journeys_School",
"/wiki/Colorado_College",
"/wiki/PSG_College_of_Technology",
"/wiki/University_of_Paris",
"/wiki/Hobart_and_William_Smith_Colleges",
"/wiki/University_of_Oregon",
"/wiki/University_of_Electronic_Science_and_Technology_of_China",
"/wiki/University_of_California,_Berkeley",
"/wiki/Hebrew_University_of_Jerusalem",
"/wiki/Tel_Aviv_University",
"/wiki/Duke_University",
"/wiki/St_Hilda's_Anglican_School_for_Girls",
"/wiki/Moscow_State_University_of_Railway_Engineering",
"/wiki/Azerbaijan_State_Oil_and_Industry_University",
"/wiki/ENGECON",
"/wiki/Northumbria_University",
"/wiki/Hangzhou_Normal_University",
"/wiki/Bhawanipur_Education_Society_College",
"/wiki/University_of_Calcutta",
"/wiki/Central_South_University",
"/wiki/Vanderbilt_University",
"/wiki/Washington_University_in_St._Louis",
"/wiki/Siberian_Metallurgic_Institute",
"/wiki/Russian_Presidential_Academy_of_National_Economy_and_Public_Administration",
"/wiki/Moscow_Institute_of_Steel_and_Alloys",
"/wiki/Michigan_State_University",
"/wiki/Wayne_State_University_Law_School",
"/wiki/Brihan_Maharashtra_College_of_Commerce",
"/wiki/ISG_Business_School",
"/wiki/International_Institute_for_Management_Development",
"/wiki/Lausanne",
"/wiki/Moscow_State_Institute_of_International_Relations",
"/wiki/Finance",
"/wiki/Ministry_of_Foreign_Affairs_(Russia)",
"/wiki/Al-Azhar_University",
"/wiki/Government_College,_Birnin_Kudu",
"/wiki/Karlsruhe_Institute_of_Technology",
"/wiki/University_of_Haifa",
"/wiki/London_Business_School",
"/wiki/University_of_Oxford",
"/wiki/University_of_Mumbai",
"/wiki/BCom",
"/wiki/University_of_Wisconsin-Eau_Claire",
"/wiki/University_of_Pittsburgh",
"/wiki/Carnegie_Mellon_University",
"/wiki/Diponegoro_University",
"/wiki/University_of_California,_Los_Angeles",
"/wiki/Scots_College_(Sydney)",
"/wiki/University_of_Leeds",
"/wiki/University_of_Washington",
"/wiki/London_School_of_Economics",
"/wiki/St._Xavier's_College,_Kolkata",
"/wiki/Wayne_State_University",
"/wiki/University_of_Missouri",
"/wiki/Moscow_State_University",
"/wiki/Plekhanov_Russian_Economic_University",
"/wiki/Stockholm_University",
"/wiki/Technical_University_of_Munich",
"/wiki/Fudan_University",
"/wiki/University_of_the_Philippines_Diliman",
"/wiki/Hefei_University_of_Technology",
"/wiki/Saint_Petersburg_State_University",
"/wiki/Sun_Yat-sen_University",
"/wiki/Drexel_University",
"/wiki/University_of_Kansas",
"/wiki/Moscow_Institute_of_International_Relations",
"/wiki/Dagestan_State_University",
"/wiki/University_of_California_Los_Angeles",
"/wiki/University_of_Birmingham",
"/wiki/Dartmouth_College",
"/wiki/University_of_California,_San_Diego",
"/wiki/Harvard_College",
"/wiki/Meerut_College",
"/wiki/Henan_Agricultural_University",
"/wiki/University_of_Arizona",
"/wiki/University_of_Karlsruhe",
"/wiki/Claremont_McKenna_College",
"/wiki/University_of_California,_Hastings_College_of_the_Law",
"/wiki/Peking_University",
"/wiki/Arizona_State_University",
"/wiki/Byam_Shaw_School_of_Art",
"/wiki/Royal_College_of_Art",
"/wiki/Cranbrook_School,_Sydney",
"/wiki/University_of_New_South_Wales",
"/wiki/School_of_the_Air",
"/wiki/Christ_Church_Grammar_School",
"/wiki/Hale_School",
"/wiki/University_of_Western_Australia",
"/wiki/Technical_University_of_Darmstadt",
"/wiki/Tatung_University",
"/wiki/James_Ruse_Agricultural_High_School",
"/wiki/LIU_Post",
"/wiki/Rijnlands_Lyceum_Wassenaar",
"/wiki/Leiden_University",
"/wiki/University_of_British_Columbia",
"/wiki/University_of_Waterloo",
"/wiki/University_of_Memphis",
"/wiki/Syracuse_University",
"/wiki/Stellenbosch_University",
"/wiki/Cornell_University",
"/wiki/University_of_Windsor",
"/wiki/Tsinghua_University",
"/wiki/University_of_Delaware",
"/wiki/Rice_University",
"/wiki/Northwestern_University",
"/wiki/Milton_Academy",
"/wiki/Tabor_Academy,_Massachusetts",
"/wiki/St._Gregory's_University",
"/wiki/College_of_Saint_Benedict_and_Saint_John's_University",
"/wiki/University_of_Oklahoma",
"/wiki/Kielce_University_of_Technology",
"/wiki/University_of_California,_Santa_Barbara",
"/wiki/Punjab_University,_Chandigarh",
"/wiki/Chalmers_University_of_Technology",
"/wiki/Anglia_Ruskin_University",
"/wiki/University_of_Science_and_Technology_of_China",
"/wiki/Northfield_Mount_Hermon_School",
"/wiki/Bennington_College",
"/wiki/Brown_University",
"/wiki/Lincoln_University_(Missouri)",
"/wiki/Raffles_Institution",
"/wiki/Wofford_College",
"/wiki/University_of_Maryland",
"/wiki/J._D.",
"/wiki/University_of_Cincinnati",
"/wiki/Columbia_Business_School",
"/wiki/IIT_(BHU)_Varanasi",
"/wiki/National_Taiwan_University",
"/wiki/Babson_College",
"/wiki/Sauder_School_of_Business",
"/wiki/Central_Missouri_State_University",
"/wiki/Liaoning_University",
"/wiki/California_State_Polytechnic_University,_Humboldt",
"/wiki/University_of_Milan",
"/wiki/Xihua_University",
"/wiki/Georgetown_University",
"/wiki/Jiangsu_Normal_University",
"/wiki/Nanjing_University",
"/wiki/Texas_Tech_University",
"/wiki/University_of_Houston",
"/wiki/Georgia_Southern_University",
"/wiki/Samford_University",
"/wiki/De_La_Salle_University",
"https%253A//fr.wikipedia.org/wiki/Ecole_superieure_libre_des_sciences_commerciales_appliquees",
"/wiki/Pantheon-Assas_University",
"/wiki/University_of_California,_Davis",
"/wiki/Finance_University_under_the_Government_of_the_Russian_Federation",
"/wiki/Georgia_Tech",
"/wiki/Villanova_University",
"/wiki/University_of_St._Gallen",
"/wiki/Baruch_College",
"/wiki/Taipei_University_of_Marine_Technology",
"/wiki/INSEAD",
"/wiki/University_of_Gothenburg",
"/wiki/Harrow_School",
"/wiki/Purdue_University",
"/wiki/University_of_Iowa",
"/wiki/McPherson_College",
"/wiki/University_of_Santiago_de_Compostela",
"/wiki/Vassar_College",
"/wiki/Bachelor_in_Law",
"/wiki/University_of_Jodhpur",
"/wiki/Gaelscoil_Aonach_Urmhumhan",
"/wiki/Castletroy_College",
"/wiki/Huazhong_University_of_Science_and_Technology",
"/wiki/Upper_Canada_College",
"/wiki/Selwyn_College,_Cambridge",
"/wiki/Stanford_Law_School",
"/wiki/Stanford_Graduate_School_of_Business",
"/wiki/Haverford_College",
"/wiki/North_Carolina_State_University",
"/wiki/Lycee_Janson-de-Sailly",
"/wiki/Paris_Nanterre_University",
"https%253A//ru.wikipedia.org/wiki/Vologodskii_gosudarstvennyi_pedagogicheskii_universitet",
"/wiki/University_of_Southern_California",
"/wiki/Magnitogorsk_State_Technical_University",
"/wiki/University_of_Genoa",
"/wiki/Russian_State_University_of_Physical_Education,_Sport,_Youth_and_Tourism",
"/wiki/Moscow_Aviation_Institute",
"/wiki/Norwegian_Institute_of_Technology",
"/wiki/University_of_Georgia",
"/wiki/Hyde_Park_High_School_(South_Africa)",
"/wiki/University_of_Witwatersrand",
"/wiki/Deutsche_Evangelische_Oberschule",
"/wiki/China_Pharmaceutical_University",
"/wiki/Masaryk_University",
"/wiki/University_of_Southampton",
"/wiki/Mount_Roskill_Grammar_School",
"/wiki/University_of_Otago",
"/wiki/Kutafin_Moscow_State_Law_University",
"/wiki/Gubkin_Russian_State_University_of_Oil_and_Gas",
"/wiki/Qingdao_University_of_Science_and_Technology",
"/wiki/Houston_Community_College",
"/wiki/Ludwig_Maximilian_University_of_Munich",
"/wiki/Instituto_Tecnologico_Autonomo_de_Mexico",
"/wiki/Technische_Universitat_Darmstadt",
"/wiki/Ampleforth_College",
"/wiki/University_of_Grenoble",
"/wiki/Cranbrook_Kingswood_School",
"/wiki/Drury_University",
"/wiki/California_State_Polytechnic_University,_Pomona",
"/wiki/University_of_Minnesota",
"/wiki/Bucknell_University",
"/wiki/Rhode_Island_School_of_Design",
"/wiki/Goethe_University",
"/wiki/University_of_Hamburg",
"/wiki/University_of_Munich",
"/wiki/Seoul_National_University",
"/wiki/Keio_University",
"/wiki/Santa_Monica_College",
"/wiki/University_of_Miami",
"/wiki/College_of_William_%2526_Mary",
"/wiki/University_of_Delhi",
"/wiki/University_of_Tennessee",
"/wiki/University_of_Northern_Colorado",
"/wiki/Western_Michigan_University",
"/wiki/Tufts_University",
"/wiki/Zurich_Polytechnic",
"/wiki/San_Francisco_State_University",
"/wiki/Licentiate_(degree)",
"/wiki/DePauw_University",
"/wiki/American_University",
"/wiki/China_Europe_International_Business_School",
"/wiki/Southern_Methodist_University",
"/wiki/Bellarmine_College_Preparatory",
"/wiki/University_of_Virginia",
"/wiki/Indian_Institute_of_Technology_Kanpur",
"/wiki/Williams_College",
"/wiki/National_University_of_Colombia",
"/wiki/Czech_Technical_University_in_Prague",
"/wiki/IIT_Delhi",
"/wiki/Ohio_State_University",
"/wiki/HEC_Lausanne",
"/wiki/Stockholm_School_of_Economics",
"/wiki/Renmin_University",
"/wiki/Universidade_Federal_do_Rio_de_Janeiro",
"/wiki/Concordia_University",
"/wiki/Monash_University",
"/wiki/Dickinson_College",
"/wiki/University_of_Wisconsin-Madison",
"/wiki/Chartered_Accountant",
"/wiki/Sydenham_College_of_Commerce_and_Economics",
"/wiki/The_Institute_of_Chartered_Accountants_of_India",
"/wiki/Pennsylvania_State_University",
"/wiki/New_York_Law_School",
"/wiki/Salisbury_University",
"/wiki/Federal_University_of_Rio_de_Janeiro",
"/wiki/Sholokhov_Moscow_State_University_for_Humanities",
"/wiki/White_Oak_High_School_(Texas)",
"/wiki/University_of_Texas_at_Arlington",
"/wiki/University_of_Lyon",
"/wiki/Andres_Bello_Catholic_University",
"/wiki/Tashkent_University_of_Information_Technologies",
"/wiki/Citrus_College",
"/wiki/People's_University_of_China",
"/wiki/Tianjin_University",
"/wiki/Northwestern_University_Pritzker_School_of_Law",
"/wiki/Konkuk_University",
"/wiki/Gujarat_University",
"/wiki/New_Economic_School",
"/wiki/Aarhus_University",
"/wiki/Aarhus_Business_College",
"/wiki/Shanghai_Jiao_Tong_University",
"/wiki/Hanoi_University_of_Mining_and_Geology",
"/wiki/Moscow_Geological_Prospecting_Institute",
"/wiki/University_of_Rochester",
"/wiki/M.B.A.",
"/wiki/University_of_Sheffield",
"/wiki/Saint_Louis_University",
"/wiki/Potchefstroom_High_School_for_Boys",
"/wiki/University_of_the_Witwatersrand",
"/wiki/Businessperson",
"/wiki/Tulane_University",
"/wiki/Colegio_Santa_Maria_del_Pilar",
"/wiki/Amherst_College",
"/wiki/Bowdoin_College",
"/wiki/University_of_Tennessee_at_Chattanooga",
"/wiki/LL.B.",
"/wiki/LL.M.",
"/wiki/Fundacao_Getulio_Vargas",
"/wiki/Ibadan_Grammar_School",
"/wiki/Northwestern_Oklahoma_State_University",
"/wiki/Pace_University",
"/wiki/University_of_Calgary",
"/wiki/Seton_Hall_University",
"/wiki/Institut_Le_Rosey",
"/wiki/Saint_Mary's_College_(Indiana)",
"/wiki/La_Pietra",
"/wiki/University_of_West_Bohemia",
"/wiki/Alfred_State_College",
"/wiki/Associate_Degree",
"/wiki/University_of_Denver",
"/wiki/George_Washington_University",
"/wiki/Illinois_Institute_of_Technology",
"/wiki/Creston_High_School_(Michigan)",
"/wiki/Northwestern_Polytechnical_University",
"/wiki/Rutgers_University",
"/wiki/Ecole_Polytechnique",
"/wiki/Telecom_Paris",
"/wiki/National_Cheng_Kung_University",
"/wiki/Columbia_College_(South_Carolina)",
"/wiki/Heidelberg_University",
"/wiki/University_of_Valencia",
"/wiki/University_of_Navarra",
"/wiki/Worcester_Academy",
"/wiki/Middlebury_College",
"/wiki/Creighton_University",
"/wiki/Northwestern_University_School_of_Law",
"/wiki/University_of_Utah",
"/wiki/University_of_New_Orleans",
"/wiki/Moscow_Institute_of_Physics_and_Technology",
"/wiki/University_of_Pune",
"/wiki/University_of_Warwick",
"/wiki/College_of_Engineering,_Pune",
"/wiki/Miami_Dade_College",
"/wiki/Polytechnic_University_of_Milan",
"/wiki/United_States_Military_Academy",
"/wiki/University_of_Alberta",
"/wiki/University_of_Florence",
"/wiki/Bologna_University",
"/wiki/Christian_Albrechts_University",
"/wiki/Lund_University",
"/wiki/EHESS",
"/wiki/Pepperdine_University",
"/wiki/Queen's_University_at_Kingston",
"/wiki/Financial_University_under_the_Government_of_the_Russian_Federation",
"/wiki/MBBCh",
"/wiki/Queensland_University_of_Technology",
"/wiki/Moscow_State_Aviation_Technological_University",
"/wiki/Indiana_University_Bloomington",
"/wiki/University_at_Buffalo",
"/wiki/University_of_Manitoba",
"/wiki/Santa_Clara_University",
"/wiki/Victor_Valley_College",
"/wiki/University_of_California",
"/wiki/Chinese_Culture_University",
"/wiki/National_Chengchi_University",
"/wiki/Kalamazoo_College",
"/wiki/Lesgaft_National_State_University_of_Physical_Education,_Sport_and_Health",
"/wiki/University_of_Cambridge",
"/wiki/University_of_Illinois",
"/wiki/Loyola_University_Chicago_School_of_Law",
"/wiki/Hong_Kong_University_of_Science_and_Technology",
"/wiki/Wikipedia%253APlease_clarify",
"/wiki/Bogazici_University",
"/wiki/American_Institute_of_Baking",
"/wiki/Norwegian_School_of_Management",
"/wiki/Highland_Park_High_School_(University_Park,_Texas)",
"/wiki/Dedman_School_of_Law",
"/wiki/Clark_University",
"/wiki/Boston_University",
"/wiki/Brandeis_University",
"/wiki/Texarkana_College",
"/wiki/United_States_Naval_Academy",
"/wiki/California_State_University,_Long_Beach",
"/wiki/Cathedral_%2526_John_Connon_School",
"/wiki/Russian_Institute_of_Theatre_Arts",
"/wiki/KIMEP_University",
"/wiki/University_of_Canterbury",
"/wiki/Redwood_High_School_(Larkspur)",
"/wiki/San_Diego_State_University",
"/wiki/Beijing_University_of_Aeronautics_and_Astronautics",
"/wiki/Emory_University",
"/wiki/St_Paul's_School,_London",
"/wiki/City_University_London",
"/wiki/University_of_Toronto",
"/wiki/University_of_Vienna",
"/wiki/University_of_Connecticut",
"/wiki/Ca'_Foscari_University_of_Venice",
"/wiki/City_College_of_New_York",
"/wiki/University_of_San_Francisco",
"/wiki/San_Francisco_Conservatory_of_Music",
"/wiki/ETH_Zurich",
"/wiki/Modesto_Junior_College",
"/wiki/Georgia_Institute_of_Technology",
"/wiki/IIT_Bombay",
"/wiki/Tecnologico_de_Monterrey",
"/wiki/Nanyang_Technological_University",
"/wiki/Golden_Gate_University",
"/wiki/Vanderbilt_University_School_of_Law",
"/wiki/St._John_Fisher_College",
"/wiki/College_of_the_Holy_Cross",
"/wiki/University_of_Buenos_Aires",
"/wiki/University_of_Rhode_Island",
"/wiki/Montclair_High_School_(New_Jersey)",
"/wiki/Midtown_High_School_(Atlanta)",
"/wiki/University_of_Bridgeport",
"/wiki/Shandong_University_of_Science_and_Technology",
"/wiki/China_University_of_Mining_and_Technology",
"/wiki/Vrije_Universiteit_Brussel",
"/wiki/Wake_Forest_University",
"/wiki/Washburn_University",
"/wiki/Wichita_State_University",
"/wiki/National_Institute_of_Engineering",
"/wiki/IIT_Kanpur",
"/wiki/M.Tech.",
"/wiki/University_of_Florida",
"/wiki/Southern_College_of_Optometry",
"/wiki/Pontifical_Catholic_University_of_Rio_de_Janeiro",
"/wiki/Kellogg_School_of_Management",
"/wiki/College_of_Engineering,_Guindy",
"/wiki/Soochow_University_(Taiwan)",
"/wiki/Tennessee_Technological_University",
"/wiki/Mount_Vernon_Seminary_and_College",
"/wiki/Washington,_DC",
"/wiki/University_High_School_(Los_Angeles)",
"/wiki/Bard_College",
"/wiki/California_State_University,_Los_Angeles",
"/wiki/Southwestern_Law_School",
"/wiki/Hitotsubashi_University",
"/wiki/Hanyang_University",
"/wiki/Ecole_nationale_d'administration",
"/wiki/Miami_University",
"/wiki/Massachusetts_Institute_of_Technology_Sloan_School_of_Management",
"/wiki/East_China_Normal_University",
"/wiki/Cheung_Kong_Graduate_School_of_Business",
"/wiki/University_of_Indonesia",
"/wiki/Imperial_College_London",
"/wiki/Belgaum_Military_School",
"/wiki/Birla_Institute_of_Technology_and_Science,_Pilani",
"/wiki/Universidad_Nacional_Autonoma_de_Mexico",
"/wiki/Hebrew_University",
"/wiki/Montana_State_University",
"/wiki/University_of_Nevada,_Reno",
"/wiki/Trinity_College_(Connecticut)",
"/wiki/St._Xavier's_College,_Calcutta",
"/wiki/Yale_School_of_Management",
"/wiki/Zhuangyuan",
"/wiki/Imperial_examination",
"/wiki/HEC_Paris",
"/wiki/University_of_Baltimore",
"/wiki/Hasmonean_High_School",
"/wiki/Holy_Cross_High_School_(River_Grove,_Illinois)",
"/wiki/Loyola_University_Chicago",
"/wiki/Baylor_University",
"/wiki/Plekhanov_Russian_University_of_Economics",
"/wiki/Long_Island_University",
"/wiki/Faculty_of_Medicine_Siriraj_Hospital,_Mahidol_University",
"/wiki/University_of_Cologne",
"/wiki/Medicine",
"/wiki/Washington_%2526_Lee_University",
"/wiki/Brooklyn_College",
"/wiki/University_of_Liverpool",
"/wiki/Diocesan_Boys'_School",
"/wiki/Vienna_University_of_Economics_and_Business_Administration",
"/wiki/Cochin_University_of_Science_and_Technology",
"/wiki/Colby_College",
"/wiki/The_Governor's_Academy",
"/wiki/Rollins_College",
"/wiki/Government_Arts_College,_Thiruvananthapuram",
"/wiki/University_College_Thiruvananthapuram",
"/wiki/IIT_Madras",
"/wiki/IESE_Business_School",
"/wiki/National_Technical_University_of_Athens",
"/wiki/Wusong_Merchant_Marine_College",
"/wiki/St._John's_University_(New_York_City)",
"/wiki/Far_Eastern_University",
"/wiki/The_Buckley_School_(New_York_City)",
"/wiki/Hamilton_College_(New_York)",
"/wiki/Iowa_State_University",
"/wiki/Lawrence_School,_Lovedale",
"/wiki/Hunter_College",
"/wiki/Wheaton_College_(Massachusetts)",
"/wiki/University_of_Zurich",
"/wiki/Brigham_Young_University",
"/wiki/Baker_University",
"/wiki/University_of_Notre_Dame",
"/wiki/Yonsei_University",
"/wiki/Universite_de_Montreal",
"/wiki/Sree_Kerala_Varma_College",
"/wiki/University_of_Economics_in_Bratislava",
"/wiki/University_of_Mannheim",
"/wiki/Yerevan_Polytechnic_Institute",
"/wiki/Korea_University",
"/wiki/Technical_University_of_Madrid",
"/wiki/Temple_University",
"/wiki/St._Stephen's_College,_Delhi",
"/wiki/IIM_Ahmedabad",
"/wiki/Clitheroe_Royal_Grammar_School",
"/wiki/Victoria_University,_Australia",
"/wiki/Northern_Michigan_University",
"/wiki/Phoenix_Country_Day_School",
"/wiki/Universidade_Presbiteriana_Mackenzie",
"/wiki/Ural_Polytechnic_Institute",
"/wiki/Wits_University",
"/wiki/Lanzhou_University",
"/wiki/Xi'an_Jiaotong_University",
"/wiki/Washington_and_Lee_University",
"/wiki/Berry_Hill_High_School_and_Sports_College",
"/wiki/Auburn_University",
"/wiki/University_of_Glasgow",
"/wiki/Aquinas_College,_Southport",
"/wiki/Southport_State_High_School",
"/wiki/Toowoomba_Grammar_School",
"/wiki/University_of_Queensland",
"/wiki/Paris_Dauphine_University",
"/wiki/Indian_Institute_of_Technology_Madras",
"/wiki/Chapman_University",
"/wiki/Parsons_School_of_Design",
"/wiki/Utah_Valley_University",
"/wiki/JD/MBA",
"/wiki/Complutense_University_of_Madrid",
"/wiki/Colegio_del_Pilar_(Madrid)",
"/wiki/Cranbrook_School_Sydney",
"/wiki/Dnipropetrovsk_Metallurgical_Institute",
"/wiki/Bangalore_University",
"/wiki/Melbourne_University",
"/wiki/University_of_Western_Ontario",
"/wiki/Ricks_College",
"/wiki/Stetson_University",
"/wiki/University_of_Sussex",
"/wiki/Stanley_Medical_College",
"/wiki/American_University_of_Beirut",
"/wiki/Lebanon",
"/wiki/RWTH_Aachen_University",
"/wiki/Oak_Ridge_High_School_(Tennessee)",
"/wiki/Saint_Petersburg_Mining_University",
"/wiki/East_Carolina_University",
"/wiki/Indian_Institute_of_Management_Ahmedabad",
"/wiki/Tata_Institute_of_Social_Sciences",
"/wiki/Fort_Hunt_High_School",
"/wiki/University_of_Swaziland",
"/wiki/University_of_San_Diego",
"/wiki/Stern_School_of_Business",
"/wiki/Oakton_High_School",
"/wiki/Chantilly_High_School",
"/wiki/University_of_Auckland",
"/wiki/USC_Marshall_School_of_Business",
"/wiki/The_High_School,_Dublin",
"/wiki/University_College_Dublin",
"/wiki/Boston_College",
"/wiki/Chiang_Kai_Shek_College",
"/wiki/University_of_Saskatchewan",
"/wiki/Delhi_University",
"/wiki/Otis_College_of_Art_and_Design",
"/wiki/Victoria_and_Albert_Museum",
"/wiki/Minnesota_State_University,_Mankato",
"/wiki/Nanjing_University_of_Aeronautics_and_Astronautics",
"/wiki/Central_Party_School_of_the_Chinese_Communist_Party",
"/wiki/Schule_Schloss_Salem",
"/wiki/London_School_of_Economics_and_Political_Science",
"/wiki/The_Harley_School",
"/wiki/Skidmore_College",
"/wiki/Tennessee_State_University",
"/wiki/Gothenburg_School_of_Business,_Economics_and_Law",
"/wiki/Thornbury_Grammar_School",
"/wiki/Christ's_College,_Cambridge",
"/wiki/University_of_Chicago_Graduate_School_of_Business",
"/wiki/Loyola_College,_Chennai",
"/wiki/University_of_Scranton",
"/wiki/University_of_Madras",
"/wiki/Escuela_Bancaria_y_Comercial",
"/wiki/Springdale_High_School",
"/wiki/Hohai_University",
"/wiki/Chung_Wah_Middle_School",
"/wiki/University_of_Paris-Sud",
"/wiki/Stony_Brook_University",
"/wiki/Reed_College",
"/wiki/University_College_London",
"/wiki/Kasturba_Medical_College,_Manipal",
"/wiki/Fellowship",
"/wiki/Hospital_Administration",
"/wiki/United_States",
"/wiki/College_Stanislas_de_Paris",
"/wiki/Erasmus_University_Rotterdam",
"/wiki/The_Collegiate_School",
"/wiki/University_of_Washington_School_of_Law",
"/wiki/Ecole_de_l'air",
"/wiki/ESCP_Europe",
"/wiki/Robert_College",
"/wiki/D._Mendeleev_University_of_Chemical_Technology_of_Russia",
"/wiki/Melbourne_High_School",
"/wiki/University_of_Deusto",
"/wiki/KTH_Royal_Institute_of_Technology",
"/wiki/Tbilisi_State_University",
"/wiki/Menlo_College",
"/wiki/Technical_University,_Sofia",
"/wiki/University_of_Erlangen",
"/wiki/Swarthmore_College",
"/wiki/University_of_Graz",
"/wiki/St_Leo's_Catholic_College",
"/wiki/University_of_Sydney",
"/wiki/St._Paul's_School,_Darjeeling",
"/wiki/Dunman_High_School",
"/wiki/Sogang_University",
"/wiki/Polytechnic_University_of_Turin",
"/wiki/Bocconi_University",
"/wiki/American_InterContinental_University",
"/wiki/Kasturba_Medical_College,_Mangalore",
"/wiki/MBBS",
"/wiki/Royal_College_of_Surgeons_of_England",
"/wiki/FRCS",
"/wiki/BI_Norwegian_Business_School",
"/wiki/San_Jose_State_University",
"/wiki/California_State_University,_Chico",
"/wiki/University_of_Southern_Denmark",
"/wiki/University_of_Chemistry_and_Technology,_Prague",
"/wiki/Zhongnan_University_of_Economics_and_Law",
"/wiki/Ashland_University",
"/wiki/Bristol_University",
"/wiki/Selwyn_House_School",
"/wiki/Trinity_College_School",
"/wiki/Southeastern_Louisiana_University",
"/wiki/Rider_University",
"/wiki/Moscow_Institute_of_Electronic_Machine_Building",
"/wiki/Susi_Earnshaw_Theatre_School",
"/wiki/University_College_School",
"/wiki/King's_College_London",
"/wiki/Eastern_Illinois_University",
"/wiki/University_of_Virginia_School_of_Law",
"/wiki/University_of_Nice_Sophia_Antipolis",
"/wiki/University_at_Albany",
"/wiki/Ankara_University",
"/wiki/Wikipedia%253ACitation_needed",
"/wiki/Israeli_Naval_Academy",
"/wiki/University_of_Bamberg",
"/wiki/Eton_College",
"/wiki/University_of_Oxford_University",
"/wiki/Higher_School_of_Economics",
"/wiki/University_of_North_Florida",
"/wiki/Saint_Petersburg_Academy_of_Sciences",
"/wiki/National_Taiwan_University_of_Science_and_Technology",
"/wiki/Istituto_Superiore_per_le_Industrie_Artistiche",
"/wiki/Technion_-_Israel_Institute_of_Technology",
"/wiki/King's_College,_Lagos",
"/wiki/Hunan_University",
"/wiki/University_of_Caxias_do_Sul",
"/wiki/Lake_Forest_College",
"/wiki/Central_Academy_of_Drama",
"/wiki/Shandong_University",
"/wiki/Wuhan_University_of_Science_and_Technology",
"/wiki/University_of_Adelaide",
"/wiki/Phillips_Exeter_Academy",
"/wiki/Nanjing_Normal_University",
"/wiki/Jesuit_High_School_(Beaverton,_Oregon)",
"/wiki/Armed_Forces_Academies_Preparatory_School",
"/wiki/Royal_Thai_Police",
"/wiki/Eastern_Kentucky_University",
"/wiki/Sam_Houston_State_University",
"/wiki/Ph.D.",
"/wiki/Manipal_Academy_of_Higher_Education",
"/wiki/St._Thomas_College,_Kozhencherry",
"/wiki/College_Jean-de-Brebeuf",
"/wiki/Universite_du_Quebec_a_Montreal",
"/wiki/Albert_Einstein_College_of_Medicine",
"/wiki/Novosibirsk_State_Technical_University",
"/wiki/Mount_Scopus_Memorial_College",
"/wiki/Fu_Jen_Catholic_University",
"/wiki/University_of_Amsterdam",
"/wiki/University_of_Exeter",
"/wiki/Adam_Mickiewicz_University",
"/wiki/St._Bernard's_School",
"/wiki/Hotchkiss_School",
"/wiki/St_Richard_Gwyn_Catholic_High_School,_Flint",
"/wiki/University_of_Nottingham",
"/wiki/Bentley_University",
"/wiki/Phillips_Academy",
"/wiki/Robert_Gordon's_College",
"/wiki/University_of_Aberdeen",
"/wiki/Sri_Ramachandra_Medical_College_and_Research_Institute",
"/wiki/Moskovskij_gosudarstvennyj_institut_mezdunarodnych_otnosenij",
"/wiki/Pekinska_univerzita",
"/wiki/State_University_of_New_York_at_Binghamton",
"/wiki/Norwich_School",
"/wiki/Royal_Grammar_School,_High_Wycombe",
"/wiki/York_University",
"/wiki/University_of_Ottawa",
"/wiki/Maharaja's_College,_Ernakulam",
"/wiki/Texas_A%2526M_University",
"/wiki/University_of_Colorado_Boulder",
"/wiki/University_of_Rajasthan",
"/wiki/M.Sc",
"/wiki/Physics",
"/wiki/Ghaziabad,_India",
"/wiki/Wenzhou_University",
"/wiki/Thomas_Jefferson_School_of_Law",
"/wiki/Fordham_University",
"/wiki/Imperial_College",
"/wiki/University_of_Helsinki",
"/wiki/Sapienza_University_of_Rome",
"/wiki/University_of_London",
"/wiki/Gazi_University",
"/wiki/Brisbane_State_High_School",
"/wiki/University_of_Central_Oklahoma",
"/wiki/Lehigh_University",
"/wiki/Budapest_Business_School",
"/wiki/Corvinus_University_of_Budapest",
"/wiki/Indiana_University_Indianapolis",
"/wiki/Immaculate_Conception_Academy_(disambiguation)",
"/wiki/Assumption_College_San_Lorenzo",
"/wiki/Ecole_superieure_des_sciences_commerciales_d'Angers",
"/wiki/Universite_de_Sherbrooke",
"/wiki/University_of_Rennes",
"/wiki/Keele_University",
"/wiki/Buffalo_State_College",
"/wiki/Istanbul_Technical_University",
"/wiki/Maharaja_Sayajirao_University_of_Baroda",
"/wiki/Dulwich_College",
"/wiki/Florida_Southern_College",
"/wiki/Vienna_University_of_Economics_and_Business",
"/wiki/Tel-Aviv_University",
"/wiki/Weizmann_Institute_of_Science",
"/wiki/Hahnemann_Medical_College",
"/wiki/Canford_School",
"/wiki/Taras_Shevchenko_National_University_of_Kyiv",
"/wiki/University_of_Verona",
"/wiki/College_of_William_and_Mary",
"/wiki/Weber_State_College",
"/wiki/Universidad_Anahuac",
"/wiki/Universite_Laval",
"/wiki/Institute_of_Chartered_Accountants_of_India",
"/wiki/People's_Liberation_Army_National_Defense_University",
"/wiki/Institute_of_Cryptography,_Telecommunications_and_Computer_Science",
"/wiki/Long_Island_University_C.W._Post_Campus",
"/wiki/London_Film_School",
"/wiki/University_of_Victoria",
"/wiki/Clare_College,_Cambridge",
"/wiki/Middle_East_Technical_University",
"/wiki/European_Business_School_London",
"/wiki/Ecole_Polytechnique_de_Lausanne",
"/wiki/Brooklyn_Law_School",
"/wiki/Universidade_Federal_de_Minas_Gerais",
"/wiki/Warrington_College_of_Business",
"/wiki/Masters_in_Business_Administration",
"/wiki/Cheonan_National_Technical_College",
"/wiki/National_Taipei_University",
"/wiki/Southern_Federal_University",
"/wiki/Rostov-on-Don",
"/wiki/Plymouth_University",
"/wiki/Adelphi_University",
"/wiki/Swansea_University",
"/wiki/Samara_State_Economic_University",
"/wiki/National_University_of_Singapore",
"/wiki/Alagappa_College_of_Technology",
"/wiki/Indian_Institute_of_Technology,_Bombay",
"/wiki/Osmania_University",
"/wiki/Camberwell_Grammar_School",
"/wiki/Thomas_More_Institute",
"/wiki/Carleton_University",
"/wiki/Vermont_Law_School",
"/wiki/Charles_University",
"/wiki/Paarl_Boys'_High_School",
"/wiki/College_Royal_(Rabat)",
"/wiki/Mohammed_V_University",
"/wiki/Lomonosov_Moscow_State_University",
"/wiki/Guru_Nanak_Khalsa_College_of_Arts,_Science_%2526_Commerce",
"/wiki/Bombay_University",
"/wiki/California_State_University",
"/wiki/Pembroke_College,_Cambridge",
"/wiki/University_of_the_East",
"/wiki/CFO",
"/wiki/Met_Film_School",
"/wiki/Pontifical_Catholic_University_of_Argentina",
"/wiki/University_of_East_Anglia",
"/wiki/Olivet_Baptist_High_School",
"/wiki/University_of_Sao_Paulo",
"/wiki/Rochester_Institute_of_Technology",
"/wiki/National_Institute_of_Technology_Kurukshetra",
"/wiki/Marion_Military_Institute",
"/wiki/Jewish_Free_School",
"/wiki/University_of_North_London",
"/wiki/Calcutta_University",
"/wiki/Institute_of_Company_Secretaries_of_India",
"/wiki/Radford_University",
"/wiki/Vita-Salute_San_Raffaele_University",
"/wiki/St._Joseph's_College,_Hong_Kong",
"/wiki/Korea_Advanced_Institute_of_Science_and_Technology",
"/wiki/Christ_College,_Irinjalakuda",
"/wiki/St._Thomas_College,_Thrissur",
"/wiki/Northeastern_University_(China)",
"/wiki/University_of_Wollongong",
"/wiki/CentraleSupelec",
"/wiki/University_of_California,_Irvine",
"/wiki/Pui_Kiu_Middle_School",
"/wiki/Ben_Gurion_University_of_the_Negev",
"/wiki/Marmara_University",
"/wiki/University_of_Bologna",
"/wiki/National_Central_University",
"/wiki/Chinese_Academy_of_Social_Sciences",
"/wiki/South_Bromsgrove_High_School",
"/wiki/Aston_University",
"/wiki/Pomona_College",
"/wiki/Lviv_Academy_of_Commerce",
"/wiki/King_George's_Medical_University",
"/wiki/Chinese_Academy_of_Sciences",
"/wiki/National_University_%253C%253COdesa_Maritime_Academy%253E%253E",
"/wiki/Blake_School_(Minneapolis)",
"/wiki/Berkshire_School",
"/wiki/Ivey_School_of_Business",
"/wiki/Beijing_Foreign_Studies_University",
"/wiki/University_of_Bucharest",
"/wiki/Bayes_Business_School",
"/wiki/Moscow_Power_Engineering_Institute",
"/wiki/Moscow_International_University",
"/wiki/Alexandria_University",
"/wiki/University_of_Bradford",
"/wiki/Indian_Institute_of_Technology_Delhi",
"/wiki/Cleveland_State_University_College_of_Law",
"/wiki/University_of_Santo_Tomas",
"/wiki/North_Central_College",
"/wiki/The_University_of_Utah",
"/wiki/University_of_Wales",
"/wiki/Ecole_Speciale_d'Architecture",
"/wiki/Deutsche_Schule_Istanbul",
"/wiki/Leningrad_Academy_of_Civil_Aviation",
"/wiki/Moscow_Institute_for_Railway_Engineering",
"/wiki/West_Virginia_University",
"/wiki/Uppsala_University",
"/wiki/Le_Rosey",
"/wiki/Goethe_University_Frankfurt",
"/wiki/Paul_H._Nitze_School_of_Advanced_International_Studies",
"/wiki/Fuller_Theological_Seminary",
"/wiki/Arizona_State_University_Tempe_campus",
"/wiki/Walla_Walla_College",
"/wiki/Kyungbock_High_School",
"/wiki/Kyiv_National_Economic_University",
"/wiki/Masters_School",
"/wiki/American_School_in_Switzerland",
"/wiki/Manhattanville_College",
"/wiki/St_Peter's_College,_Chelmsford",
"/wiki/University_of_California,_Los_Angeles_Extension",
"/wiki/University_of_Wisconsin-Superior",
"/wiki/Literature",
"/wiki/Madras_Christian_College",
"/wiki/Suzhou_University_of_Science_and_Technology",
"/wiki/Kodolanyi_Janos_University",
"/wiki/Beijing_Film_Academy",
"/wiki/Cornell_University_at_Cornell_University",
"/wiki/University_of_International_Business_and_Economics_(Beijing)",
"/wiki/Queens_College",
"/wiki/Florida_State_University",
"/wiki/M.B.A",
"/wiki/Barts_and_The_London_School_of_Medicine_and_Dentistry",
"/wiki/Ph.D",
"/wiki/University_Malaya",
"/wiki/Sul_Ross_State_University",
"/wiki/University_of_Selangor",
"/wiki/University_of_New_Mexico",
"/wiki/Trinity_Grammar_School,_Kew",
"/wiki/Western_Australian_Academy_of_Performing_Arts",
"/wiki/Institute_of_Business_Administration,_University_of_Dhaka",
]