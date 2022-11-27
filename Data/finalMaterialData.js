import wool from '../assets/sheep.png'
import cotton from '../assets/cloud.png'
import hemp from '../assets/Yarn.png'
import bamboo from '../assets/Bamboo.png'
import linen from '../assets/Yarn.png'
import cottonImage from '../assets/cottonImage.jpg'
import woolImage from '../assets/woolImage.jpeg'
import leatherImage from '../assets/leatherImage.jpeg'
import downImage from '../assets/downImage.jpeg'
import cashmereImage from '../assets/cashmereImage.jpeg'
import polyesterImage from '../assets/polyesterImage.jpeg'
import rayonImage from '../assets/rayonImage.jpeg'
import bambooImage from '../assets/bambooImage.jpeg'
import fabricImage from '../assets/fabricImage.jpeg'
import hempImage from '../assets/hempImage.jpeg'
import linenImage from '../assets/linenImage.jpeg'
import ramieImage from '../assets/ramieImage.jpeg'
import rubberImage from '../assets/rubber.jpg'
import silkImage from '../assets/silkImage.jpeg'


export const finalMaterialData = [
    {
        id: 1,
        name: 'COTTON',
        icon:  cotton,
        image: cottonImage,
        description: 'Although it is a natural fiber, conventional cotton is far from environmentally friendly. Cotton is mainly produced in dry and warm regions, but it needs a lot of water to grow. In some places, like India, inefficient water use means that up to 20,000 liters of water are needed to produce 1kg of cotton. In the meantime, 100 million people in India do not have access to drinking water. 99.3% of cotton grown globally is not organic, therefore means uses chemicals and is genetically modified seeds. Cotton represents 10% of the pesticides and 16% of the insecticides used globally. 90% of the world’s cotton farmers are located in developing countries where labor, health, and safety regulations are nonexistent or not enforced most of the time. Child and forced labor are common practices. In Uzbekistan (the 6th largest exporter of cotton in the world), until recently more than 1 million people were forced to pick cotton for little or no pay every year.',
        link: 'https://www.sustainyourstyle.org/en/cotton'
    },
    {
        id: 2,
        name: 'WOOL',
        icon:  wool,
        image: woolImage,
        description: 'Wool as such is a renewable natural fiber, so it could have been considered an environment-friendly option. Unfortunately, the extensive sheep farming practiced to meet the global demand has had disastrous consequences on the environment. Sheep survive by grazing, which can have a positive impact on certain types of ecosystems when it is well managed. But when the land is grazed too heavily, this leads to overgrazing. Overgrazing means that the vegetation does not have enough time to grow back before it is consumed. The soil becomes weak and vulnerable to erosion and desertification. For example, a large part of the region of Patagonia is affected by desertification, mainly due to overgrazing by sheep which are primarily raised for their wool. Sheep also release methane, a gas that is 25 times worse for global warming than CO2. Sheep are often subjected to insecticide baths that contain substances hazardous to the farmers. Residues of those harmful chemicals can remain in the wool and make their way into our clothes.',
        link: 'https://www.sustainyourstyle.org/en/wool'
    },
    {
        id: 3,
        name: 'HEMP',
        icon: hemp,
        image: hempImage,
        description: "Hemp fabric comes from the plant with the same name. It is one of the fastest growing plants and it doesn't need much water, energy, pesticide, or fertilizers. The plant is very good for soil, it can be grown for many years in the same place without exhausting it. This is why hemp is considered to be eco-friendly.",
        link: 'https://www.sustainyourstyle.org/en/hemp'
    },
    {
        id: 4,
        name: 'BAMBOO',
        icon: bamboo,
        image: bambooImage,
        description: "Bamboo is usually sold as an eco-friendly textile. This is partially true, as the bamboo plant is potentially one of the world's most sustainable resources. It grows very quickly and easily, it doesn’t need pesticides or fertilizers, and it doesn’t need to be replanted after harvest because it grows new sprouts from the roots. However, to turn bamboo into fiber, bamboo is processed with strong chemical solvents that are potentially harmful to the health of manufacturing workers, the consumers wearing the garment, and to the environment when chemicals are released in wastewater. Bamboo fabric is a type of rayon often called 'bamboo rayon'.",
        link: 'https://www.sustainyourstyle.org/en/bamboo'
    },
    {
        id: 5,
        name: 'LINEN',
        icon: linen,
        image: linenImage,
        description: 'Linen is a natural fiber which stems from the flax plant. It uses considerably fewer resources than cotton or polyester (such as water, energy, pesticides, insecticides, fertilizers).',
        link: 'https://www.sustainyourstyle.org/en/linen'
    },
    {
        id: 6,
        name: 'LEATHER',
        icon: leatherImage,
        image: leatherImage,
        description: 'Leather is a controversial fiber. First of all, it is not an animal-friendly option, since it is made of dead animal skin. But environmental and social concerns related to leather are mostly linked to the tanning process:  Toxic chemicals are used (chromium in 75% of cases)  to transform the skins into wearable leather. Those substances are often dumped into rivers, polluting freshwater and oceans. Also, most of the tanning factory workers around the world do not wear adequate protection and suffer from skin, eye, and respiratory diseases, cancer, and more due to their exposure to chemical substances. Many children also work in tanneries. "Chrome-free" leather, which usually means aldehyde-tanned or vegetable-tanned, is an alternative to chrome-tanned leather. However, it has been proven that its environmental impact is very similar to chrome-tanned leather. The good news is that some sustainable leather options are starting to appear. ',
        link: 'https://www.sustainyourstyle.org/en/leather'
    },
    {
        id: 7,
        name: 'CASHMERE',
        icon: linen,
        image: cashmereImage,
        description: 'Cashmere wool, usually simply known as cashmere, is a fiber obtained from cashmere goats, pashmina goats, and some other breeds of goat. It has been used to make yarn, textiles and clothing for hundreds of years. Cashmere is closely associated with the Kashmir shawl, the word "cashmere" deriving from an anglicisation of Kashmir, when the Kashmir shawl reached Europe in the 19th century. Both the soft undercoat and the guard hairs may be used; the softer hair is reserved for textiles, while the coarse guard hair is used for brushes and other non-apparel purposes.',
        link: 'https://www.sustainyourstyle.org/en/cashmere'
    },
    {
        id: 8,
        name: 'POLYESTER',
        icon: polyesterImage,
        image: polyesterImage,
        description: 'Polyester is the most common fiber in our garment. We can find it in 52% of our clothes. Polyester is a synthetic fiber derived from petroleum, a nonrenewable fossil fuel.  As we know, the transformation of crude oil into petrochemicals releases toxins into the atmosphere that are dangerous for human and ecosystem health. The production of polyester also highly energy intensive.',
        link: 'https://www.sustainyourstyle.org/en/polyester'
    },
    {
        id: 9,
        name: 'RAYON',
        icon: rayonImage,
        image: rayonImage,
        description: 'Rayon is a fiber from regenerated cellulose, generally derived from wood pulp. Rayon is usually made from eucalyptus trees, but any plant can be used (such as bamboo, soy, cotton, etc). To produce the fiber, the plant cellulose goes through a process involving a lot of chemicals, energy and water.  Solvents used during the process can be very toxic to humans and to the environment. Viscose, modal, lyocell and bamboo are different types of rayon.',
        link: 'https://www.sustainyourstyle.org/en/rayon-viscose-modal'
    },
    {
        id: 10,
        name: 'VISCOSE',
        icon: rayonImage,
        image: rayonImage,
        description: 'Viscose (also called Artificial Silk or Art Silk) is the most common type of rayon. Viscose production involves a lot of chemicals, heavily harmful to the environment when they are released in effluents.',
        link: 'https://www.sustainyourstyle.org/en/rayon-viscose-modal'
    },
    {
        id: 11,
        name: 'VEGAN LEATHER',
        icon: leatherImage,
        image: leatherImage,
        description: 'Vegan leather is usually made of PVC or  polyurethane, which are synthetic fibers that have a similar environmental impact to polyester. It is certainly better for animal welfare, but it is not an eco-friendly option.',
        link: 'https://www.sustainyourstyle.org/en/vegan-leather'
    },
    {
        id: 12,
        name: 'ACRYLIC',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 13,
        name: 'POLYAMIDE',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 14,
        name: 'NYLON',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 15,
        name: 'POLYPROPYLENE',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 16,
        name: 'PVC',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 17,
        name: 'SPANDEX',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 18,
        name: 'LYCRA',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 19,
        name: 'ELASTANE',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acrylic, polyamide, nylon, polypropylene, PVC, spandex (AKA lycra or elastane), aramide, etc, are all different types of synthetic fibers that are derived from petroleum and therefore have a very similar impact on the environment as polyester.',
        link: 'https://www.sustainyourstyle.org/en/other-synthetic-fibers'
    },
    {
        id: 20,
        name: 'ACETATE',
        icon: fabricImage,
        image: fabricImage,
        description: 'Acetate is a human-made, semi-synthetic material derived from cellulose. More precisely, it’s made from wood pulp combined with chemicals like acetic acid (vinegar), acetic anhydride, and sulphuric acid. It is then spun into fibres, sometimes mixed in with other materials, hardened into a sheet, or moulded into shapes.',
        link: 'https://goodonyou.eco/is-acetate-eco-friendly/'
    },
    {
        id: 21,
        name: 'LYOCELL',
        icon: fabricImage,
        image: fabricImage,
        description: 'Lyocell is a manufacturing process of rayon which is much more eco-friendly than its relatives modal and viscose. Lyocell is made in a closed-loop system that recycles almost all of the chemicals used. “Lyocell” is the generic name of the manufacturing process and fiber. Tencel® is the brand name of the lyocell commercialized by the company Lenzing AG. Tencel® is made from eucalyptus from PEFC certified forests. Eucalyptus trees grow quickly without the use of pesticides, fertilizers or irrigation.',
        link: 'https://www.sustainyourstyle.org/en/lyocell-tencel'
    },
    {
        id: 22,
        name: 'DOWN',
        icon:  hemp,
        image: downImage,
        description: 'Down is the layer of the fine feather of birds. Down has been used for a very long time for insulation and pillows and duvet. It is a light and warm material and very long-lasting. The main sustainability issue with down is that part of the world’s supply of down feathers is directly taken (“plucked”) on live birds. This practice has been largely denounced due to the suffering of the animal. It is now banned in some countries but still authorized in others. When buying down, it is essential to look for responsible down. ',
        link: 'https://www.sustainyourstyle.org/en/down'
    },
    {
        id: 23,
        name: 'MODAL',
        icon: rayonImage,
        image: rayonImage,
        description: 'Modal, another type of rayon using beech trees with a similar process to viscose. The company Lenzing, selling modal under Lenzing Modal® only uses trees from sustainably harvested forests (PEFC certified) and employs an eco-friendly bleaching method. However modal is produced by many other manufacturers who don’t necessarily use sustainable processes.',
        link: 'https://www.sustainyourstyle.org/en/rayon-viscose-modal'
    },
    {
        id: 24,
        name: 'RAMIE',
        icon: ramieImage,
        image: ramieImage,
        description: 'Ramie and stinging nettle, or European nettle, are plants used to produced a fiber similar to linen. They are not very common but they are considered sustainable.',
        link: 'https://www.sustainyourstyle.org/en/ramie'
    },
    {
        id: 25,
        name: 'NATURAL RUBBER',
        icon: rubberImage,
        image: rubberImage,
        description: 'Most of the soles of our shoes are nowadays made with synthetic rubber which is a very different thing from natural rubber. Synthetic rubber is basically plastic whereas natural rubber is made from the milk of the Hevea tree.',
        link: 'https://www.sustainyourstyle.org/natural-rubber'
    },
    {
        id: 26,
        name: 'ALPACA',
        icon: linen,
        image: cashmereImage,
        description: 'Alpaca fiber comes from the fleece of the animal bearing the same name. Alpacas are mainly bred in the Peruvian Andes. Alpacas are much more eco-friendly than cashmere goats, because they cut the grass they eat instead of pulling it out, which allows for the grass to keep growing. Additionally, Alpacas have soft padding under their feet, which is more gentle for the soil than goat or sheep hooves.',
        link: 'https://www.sustainyourstyle.org/en/alpaca'
    },
    {
        id: 27,
        name: 'SILK',
        icon: silkImage,
        image: silkImage,
        description: 'Silk is a protein fiber spun by silkworms and is a renewable resource. Silk is also biodegradable. For these reasons, we consider silk a sustainable fiber. However, chemicals are used to produce conventional silk, so we will always consider organic silk to be a better option.',
        link: 'https://www.sustainyourstyle.org/en/silk'
    },
    {
        id: 28,
        name: 'TENCEL',
        icon: fabricImage,
        image: fabricImage,
        description: 'Tencel® is the brand name of the lyocell commercialized by the company Lenzing AG. Tencel® is made from eucalyptus from PEFC certified forests. Eucalyptus trees grow quickly without the use of pesticides, fertilizers or irrigation.',
        link: 'https://www.sustainyourstyle.org/en/lyocell-tencel'
    },
    {
        id: 29,
        name: 'CUPRO',
        icon: fabricImage,
        image: fabricImage,
        description: 'Cupro is an artificial cellulose fiber made from Linter Cotton (or Cotton wastes). In order to obtain the ready to weave yarn, the extracted cellulose is soaked in a bath of a chemical solution called «cuprammonium », hence the Cupro Name.',
        link: 'https://www.sustainyourstyle.org/cupro'
    },
    {
        id: 30,
        name: 'ORANGE FIBER',
        icon: fabricImage,
        image: fabricImage,
        description: 'Orange Fiber is an innovative fabric made from orange skins that comes from the juice industry wastes.  ',
        link: 'https://www.sustainyourstyle.org/en/orange-fiber'
    },
    {
        id: 31,
        name: 'PINEAPPLE FIBER',
        icon: fabricImage,
        image: fabricImage,
        description: 'Piñatex is a fiber that comes from pineapple leaves. It is considered sustainable because it uses the by-products of pineapple harvests, so there is no need for extra resources to produce it. It is used as a substitute for leather. ',
        link: 'https://www.sustainyourstyle.org/en/pineapple-fiber'
    },
    {
        id: 32,
        name: 'SUSTAINABLE VISCOSE',
        icon: rayonImage,
        image: rayonImage,
        description: 'Conventional viscose is usually not very sustainable because its production involves a lot of chemicals, heavily harmful to the environment when they are released in effluents. However, we can find few available sustainable options in the market which worth mentioning such as ENKA®, Eastman Naia™, ECOVERO™.',
        link: 'https://www.sustainyourstyle.org/en/sustainable-viscose'
    },
    {
        id: 33,
        name: 'SUSTAINABLE WOOL',
        icon: wool,
        image: woolImage,
        description: 'Conventional wool is far from being as eco-friendly as we would expect. However, there are some sustainable wool options on the market which make it possible for us to dress warmly and sustainably. So far, we have found the Responsible Wool Standard (RWS), which ensures that farms use best practices to protect the land, and treat the animal decently.',
        link: 'https://www.sustainyourstyle.org/en/sustainable-wool'
    },
    {
        id: 34,
        name: 'SUSTAINABLE CASHMERE',
        icon: linen,
        image: cashmereImage,
        description: 'As we can see in the related section, conventional cashmere has very significant consequences for the environment. The good news is that there are a few sustainable cashmere options addressing these environmental problems and give us the possibility to buy cashmere without a guilty conscience:',
        link: 'https://www.sustainyourstyle.org/en/sustainable-cashmere'
    },
    {
        id: 35,
        name: 'SUSTAINABLE LEATHER',
        icon: leatherImage,
        image: leatherImage,
        description: 'Conventional leather is heavily criticized for the environmental impact of the tanning process.  But leather can also be eco-friendly. There are not many options in the market yet, but they do exist. These include Ecolife™ by Green Hides, which creates eco-friendly, chrome-free leather in Italian tanneries that recycle and purify wastewater.',
        link: 'https://www.sustainyourstyle.org/en/sustainable-leather'
    },
    {
        id: 36,
        name: 'RESPONSIBLE DOWN',
        icon: linen,
        image: downImage,
        description: 'The main issue of conventional down is the live-plucking of birds which is cruel and painful to the animal. For those wanting to use down and enjoy its durability, its lightweight, and warmth, we recommend looking for certified responsible down (Responsible Down Standard) or recycled down. ',
        link: 'https://www.sustainyourstyle.org/responsible-down'
    },
    {
        id: 37,
        name: 'RECYCLED POLYESTER',
        icon: fabricImage,
        image: fabricImage,
        description: 'Recycled polyester, often called rPet, is made from recycled plastic bottles. It is a great way to divert plastic from our landfills. The production of recycled polyester requires far fewer resources than that of new fibers and generates fewer CO2 emissions.',
        link: 'https://www.sustainyourstyle.org/en/recycled-polyester2'
    },
    {
        id: 38,
        name: 'RECYCLED NYLON',
        icon: fabricImage,
        image: fabricImage,
        description: 'Recycled Nylon has the same benefits as recycled polyester: It diverts waste from landfills and its production uses much fewer resources than virgin nylon (including water, energy and fossil fuel).',
        link: 'https://www.sustainyourstyle.org/en/recycled-nylon-'
    },
    {
        id: 39,
        name: 'RECYCLED COTTON',
        icon: cotton,
        image: cottonImage,
        description: 'Recycled cotton prevents additional textile waste and requires far fewer resources than conventional or organic cotton. This makes it a great sustainable option.',
        link: 'https://www.sustainyourstyle.org/en/recycled-cotton-1'
    },
    {
        id: 40,
        name: 'RECYCLED WOOL',
        icon: wool,
        image: woolImage,
        description: 'Recycled wool is also very sustainable option. Apart from diverting used wool garments from landfills, it saves a considerable amount of water, reduces land use for sheep grazing and avoids the use of chemicals for dyeing.',
        link: 'https://www.sustainyourstyle.org/en/recycled-wool-2'
    },
]
