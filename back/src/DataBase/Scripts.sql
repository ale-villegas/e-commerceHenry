CREATE DATABASE luthiers;

INSERT INTO "Categorias" (id, nombre) VALUES (1, 'electrica'),  (2,'acustica'), (3, 'criolla');

INSERT INTO "Productos" (id, nombre, descripcion, "CategoriasId", precio, image) VALUES
(1, 'Fender Stratocaster', 'Guitarra eléctrica icónica con cuerpo de aliso y tres pastillas simples.', 1, 1200, 'images/Electricas/fender_stratocaster.jpeg'),
(2, 'Gibson Les Paul', 'Guitarra eléctrica con cuerpo de caoba y dos pastillas Humbucker.', 1, 1800, 'images/Electricas/gibson_les_paul.jpeg'),
(3, 'Taylor 214ce', 'Guitarra acústica con tapa de abeto y aros y fondo de palisandro.', 2, 1500, 'images/Acusticas/taylor_214ce.jpeg'),
(4, 'Yamaha C40', 'Guitarra clásica con tapa de abeto y fondo y aros de meranti.', 3, 250, 'images/Criollas/yamaha_c40.jpeg'),
(5, 'Ibanez RG550', 'Guitarra eléctrica con cuerpo de tilo y pastillas DiMarzio.', 1, 1000, 'images/Electricas/ibanez_rg550.jpeg'),
(6, 'Martin D-28', 'Guitarra acústica de lujo con tapa de abeto y aros y fondo de palisandro macizo.', 2, 3000, 'images/Acusticas/martin_d28.jpeg'),
(7, 'Cordoba C5', 'Guitarra clásica con tapa de cedro y aros y fondo de caoba.', 3, 350, 'images/Criollas/cordoba_c5.jpeg'),
(8, 'PRS Custom 24', 'Guitarra eléctrica con cuerpo de caoba y tapa de arce flameado.', 1, 2200, 'images/Electricas/prs_custom_24.jpeg'),
(9, 'Gretsch G5420T', 'Guitarra eléctrica hollow body con pastillas Filter Tron.', 1, 1300, 'images/Electricas/gretsch_g5420t.jpeg'),
(10, 'Epiphone Hummingbird', 'Guitarra acústica con tapa de pícea y aros y fondo de caoba.', 2, 600, 'images/Acusticas/epiphone_hummingbird.jpeg'),
(11, 'Alhambra 3C', 'Guitarra clásica con tapa de cedro macizo y aros y fondo de sapeli.', 3, 500, 'images/Criollas/alhambra_3c.jpeg'),
(12, 'Gibson SG Standard', 'Guitarra eléctrica con cuerpo de caoba y dos pastillas Humbucker.', 1, 1600, 'images/Electricas/gibson_sg_standard.jpeg'),
(13, 'Taylor 814ce', 'Guitarra acústica con tapa de abeto y aros y fondo de palisandro macizo.', 2, 2500, 'images/Acusticas/taylor_814ce.jpeg'),
(14, 'Cordoba GK Studio', 'Guitarra flamenca con tapa de abeto y aros y fondo de ciprés.', 3, 700, 'images/Criollas/cordoba_gk_studio.jpeg'),
(15, 'Ibanez Artcore AS73', 'Guitarra eléctrica semi-hollow con pastillas Classic Elite.', 1, 550, 'images/Electricas/ibanez_artcore_as73.jpeg'),
(16, 'Martin OM-28', 'Guitarra acústica con cuerpo tipo orquesta, tapa de abeto y aros y fondo de palisandro.', 2, 2800, 'images/Acusticas/martin_om28.jpeg'),
(17, 'Fender Telecaster', 'Guitarra eléctrica con cuerpo de fresno y dos pastillas single-coil.', 1, 1100, 'images/Electricas/fender_telecaster.jpeg'),
(18, 'Gibson J-45', 'Guitarra acústica con tapa de abeto y aros y fondo de caoba.', 2, 2000, 'images/Acusticas/gibson_j45.jpeg'),
(19, 'Yamaha CG122MCH', 'Guitarra clásica con tapa de cedro y aros y fondo de nato.', 3, 300, 'images/Criollas/yamaha_cg122mch.jpeg'),
(20, 'Epiphone Les Paul Standard', 'Guitarra eléctrica con cuerpo de aliso y dos pastillas Humbucker.', 1, 500, 'images/Electricas/epiphone_les_paul_standard.jpeg'),
(21, 'Taylor GS Mini', 'Guitarra acústica de viaje con tapa de pícea y aros y fondo de sapeli.', 2, 800, 'images/Acusticas/taylor_gs_mini.jpeg'),
(22, 'Alhambra 5P', 'Guitarra clásica con tapa de cedro y aros y fondo de palosanto.', 3, 900, 'images/Criollas/alhambra_5p.jpeg'),
(23, 'Gretsch Streamliner G2622', 'Guitarra eléctrica semi-hollow con pastillas Broad Tron.', 1, 700, 'images/Electricas/gretsch_streamliner_g2622.jpeg'),
(24, 'Martin HD-28', 'Guitarra acústica con tapa de abeto y aros y fondo de palisandro macizo.', 2, 3200, 'images/Acusticas/martin_hd28.jpeg'),
(25, 'Cordoba C7', 'Guitarra clásica con tapa de abeto y aros y fondo de palisandro.', 3, 400, 'images/Criollas/cordoba_c7.jpeg');


