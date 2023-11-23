
const guitarras = [
    {
      "id": 1,
      "nombre": "Fender Stratocaster",
      "descripcion": "Guitarra eléctrica icónica con cuerpo de aliso y tres pastillas simples.",
      "categorias": "eléctrica",
      "precio": 1200,
      "imagen": "fender_stratocaster.jpg"
    },
    {
      "id": 2,
      "nombre": "Gibson Les Paul",
      "descripcion": "Guitarra eléctrica con cuerpo de caoba y dos pastillas Humbucker.",
      "categorias": "eléctrica",
      "precio": 1800,
      "imagen": "gibson_les_paul.jpg"
    },
    {
      "id": 3,
      "nombre": "Taylor 214ce",
      "descripcion": "Guitarra acústica con tapa de abeto y aros y fondo de palisandro.",
      "categorias": "acústica",
      "precio": 1500,
      "imagen": "taylor_214ce.jpg"
    },
    {
      "id": 4,
      "nombre": "Yamaha C40",
      "descripcion": "Guitarra clásica con tapa de abeto y fondo y aros de meranti.",
      "categorias": "criolla",
      "precio": 250,
      "imagen": "yamaha_c40.jpg"
    },
    {
      "id": 5,
      "nombre": "Ibanez RG550",
      "descripcion": "Guitarra eléctrica con cuerpo de tilo y pastillas DiMarzio.",
      "categorias": "eléctrica",
      "precio": 1000,
      "imagen": "ibanez_rg550.jpg"
    },
    {
      "id": 6,
      "nombre": "Martin D-28",
      "descripcion": "Guitarra acústica de lujo con tapa de abeto y aros y fondo de palisandro macizo.",
      "categorias": "acústica",
      "precio": 3000,
      "imagen": "martin_d28.jpg"
    },
    {
      "id": 7,
      "nombre": "Cordoba C5",
      "descripcion": "Guitarra clásica con tapa de cedro y aros y fondo de caoba.",
      "categorias": "criolla",
      "precio": 350,
      "imagen": "cordoba_c5.jpg"
    },
    {
      "id": 8,
      "nombre": "PRS Custom 24",
      "descripcion": "Guitarra eléctrica con cuerpo de caoba y tapa de arce flameado.",
      "categorias": "eléctrica",
      "precio": 2200,
      "imagen": "prs_custom_24.jpg"
    },
    {
      "id": 9,
      "nombre": "Gretsch G5420T",
      "descripcion": "Guitarra eléctrica hollow body con pastillas Filter'Tron.",
      "categorias": "eléctrica",
      "precio": 1300,
      "imagen": "gretsch_g5420t.jpg"
    },
    {
      "id": 10,
      "nombre": "Epiphone Hummingbird",
      "descripcion": "Guitarra acústica con tapa de pícea y aros y fondo de caoba.",
      "categorias": "acústica",
      "precio": 600,
      "imagen": "epiphone_hummingbird.jpg"
    },
    {
      "id": 11,
      "nombre": "Alhambra 3C",
      "descripcion": "Guitarra clásica con tapa de cedro macizo y aros y fondo de sapeli.",
      "categorias": "criolla",
      "precio": 500,
      "imagen": "alhambra_3c.jpg"
    },
    {
      "id": 12,
      "nombre": "Gibson SG Standard",
      "descripcion": "Guitarra eléctrica con cuerpo de caoba y dos pastillas Humbucker.",
      "categorias": "eléctrica",
      "precio": 1600,
      "imagen": "gibson_sg_standard.jpg"
    },
    {
      "id": 13,
      "nombre": "Taylor 814ce",
      "descripcion": "Guitarra acústica con tapa de abeto y aros y fondo de palisandro macizo.",
      "categorias": "acústica",
      "precio": 2500,
      "imagen": "taylor_814ce.jpg"
    },
    {
      "id": 14,
      "nombre": "Cordoba GK Studio",
      "descripcion": "Guitarra flamenca con tapa de abeto y aros y fondo de ciprés.",
      "categorias": "criolla",
      "precio": 700,
      "imagen": "cordoba_gk_studio.jpg"
    },
    {
      "id": 15,
      "nombre": "Ibanez Artcore AS73",
      "descripcion": "Guitarra eléctrica semi-hollow con pastillas Classic Elite.",
      "categorias": "eléctrica",
      "precio": 550,
      "imagen": "ibanez_artcore_as73.jpg"
    },
    {
      "id": 16,
      "nombre": "Martin OM-28",
      "descripcion": "Guitarra acústica con cuerpo tipo orquesta, tapa de abeto y aros y fondo de palisandro.",
      "categorias": "acústica",
      "precio": 2800,
      "imagen": "martin_om28.jpg"
    },
    {
      "id": 17,
      "nombre": "Fender Telecaster",
      "descripcion": "Guitarra eléctrica con cuerpo de fresno y dos pastillas single-coil.",
      "categorias": "eléctrica",
      "precio": 1100,
      "imagen": "fender_telecaster.jpg"
    },
    {
      "id": 18,
      "nombre": "Gibson J-45",
      "descripcion": "Guitarra acústica con tapa de abeto y aros y fondo de caoba.",
      "categorias": "acústica",
      "precio": 2000,
      "imagen": "gibson_j45.jpg"
    },
    {
      "id": 19,
      "nombre": "Yamaha CG122MCH",
      "descripcion": "Guitarra clásica con tapa de cedro y aros y fondo de nato.",
      "categorias": "criolla",
      "precio": 300,
      "imagen": "yamaha_cg122mch.jpg"
    },
    {
      "id": 20,
      "nombre": "Epiphone Les Paul Standard",
      "descripcion": "Guitarra eléctrica con cuerpo de aliso y dos pastillas Humbucker.",
      "categorias": "eléctrica",
      "precio": 500,
      "imagen": "epiphone_les_paul_standard.jpg"
    },
    {
      "id": 21,
      "nombre": "Taylor GS Mini",
      "descripcion": "Guitarra acústica de viaje con tapa de pícea y aros y fondo de sapeli.",
      "categorias": "acústica",
      "precio": 800,
      "imagen": "taylor_gs_mini.jpg"
    },
    {
      "id": 22,
      "nombre": "Alhambra 5P",
      "descripcion": "Guitarra clásica con tapa de cedro y aros y fondo de palosanto.",
      "categorias": "criolla",
      "precio": 900,
      "imagen": "alhambra_5p.jpg"
    },
    {
      "id": 23,
      "nombre": "Gretsch Streamliner G2622",
      "descripcion": "Guitarra eléctrica semi-hollow con pastillas Broad'Tron.",
      "categorias": "eléctrica",
      "precio": 700,
      "imagen": "gretsch_streamliner_g2622.jpg"
    },
    {
      "id": 24,
      "nombre": "Martin HD-28",
      "descripcion": "Guitarra acústica con tapa de abeto y aros y fondo de palisandro macizo.",
      "categorias": "acústica",
      "precio": 3200,
      "imagen": "martin_hd28.jpg"
    },
    {
      "id": 25,
      "nombre": "Cordoba C7",
      "descripcion": "Guitarra clásica con tapa de abeto y aros y fondo de palisandro.",
      "categorias": "criolla",
      "precio": 400,
      "imagen": "cordoba_c7.jpg"
    }
  ];
  
  module.exports = guitarras;
  