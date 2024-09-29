const airports = [
  {
    "name": "مطار آنا Anaa Airport",
    "city": "آنا Anaa",
    "country": "بولينيزيا الفرنسية French Polynesia"
  },
  {
    "name": "مطار الملح El Mellah Airport",
    "city": "الطارف El Tarf",
    "country": "الجزائر Algeria"
  },
  {
    "name": "مطار آلبورغ Aalborg Airport",
    "city": "نوريسوندي Norresundby",
    "country": "الدنمارك Denmark"
  },
  {
    "name": "مطار مالا مالا Mala Mala",
    "city": "مالا مالا Mala Mala",
    "country": "جنوب أفريقيا South Africa"
  },
  {
    "name": "مطار العين Al Ain Airport",
    "city": "عين الفايضة Ayn al Faydah",
    "country": "الإمارات العربية المتحدة United Arab Emirates"
  },
  {
    "name": "مطار أولكهوفكا Olkhovka Airport",
    "city": "نوفوروسييسك Novorossiysk",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار تيرستروب Tirstrup Airport",
    "city": "كوليند Kolind",
    "country": "الدنمارك Denmark"
  },
  {
    "name": "مطار ألتاي Altay Airport",
    "city": "ألتاي Altay",
    "country": "الصين China"
  },
  {
    "name": "مطار روميو زوما Romeu Zuma Airport",
    "city": "أراخا Araxá",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار الغيضة Al Gaidah Airport",
    "city": "الغيضة Al Ghaydah",
    "country": "اليمن Yemen"
  },
  {
    "name": "مطار أبكان Abakan",
    "city": "أبكان Abakan",
    "country": "الاتحاد الروسي Russian Federation"
  },
  {
    "name": "مطار لوس لليانوس Los Llanos",
    "city": "ألباسيتي Albacete",
    "country": "إسبانيا Spain"
  },
  {
    "name": "",
    "city": "أبادان Abadan",
    "country": "إيران Iran"
  },
  {
    "name": "مطار ليهاي فالي الدولي Lehigh Valley International Airport",
    "city": "ألينتاون Allentown",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أبيلين الإقليمي Abilene Regional Airport",
    "city": "أبيلين Abilene",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أبيدجان بورت بوهوت Abidjan Port Bouet Airport",
    "city": "أبيدجان Abidjan",
    "country": "ساحل العاج Ivory Coast"
  },
  {
    "name": "مطار كابري دار Kabri Dar",
    "city": "كابري دار Kabri Dar",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "مطار أمبلر Ambler Airport",
    "city": "كيانا Kiana",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار باماغا Bamaga Airport",
    "city": "سيسيا Seisia",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار ألبوكيركي الدولي Albuquerque International Airport",
    "city": "ألبوكيركي Albuquerque",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أبردين الإقليمي Aberdeen Regional Airport",
    "city": "أبردين Aberdeen",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أبو سمبل Abu Simbel Airport",
    "city": "أبو سمبل Abu Simbel",
    "country": "مصر Egypt"
  },
  {
    "name": "مطار الباحة Al Baha Airport",
    "city": "العقيق Al Aqiq",
    "country": "المملكة العربية السعودية Saudi Arabia"
  },
  {
    "name": "مطار أبوجا الدولي Abuja International Airport",
    "city": "غواجوا Gwagwa",
    "country": "نيجيريا Nigeria"
  },
  {
    "name": "مطار ألبروري Albury Airport",
    "city": "ألبروري Albury",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار جنوب جورجيا الإقليمي Southwest Georgia Regional Airport",
    "city": "ألباني Albany",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أبردين دايس الدولي Aberdeen Dyce International Airport",
    "city": "أبردين Aberdeen",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار الجنرال خوان ن ألڤاريز الدولي General Juan N Alvarez International Airport",
    "city": "أكابولكو Acapulco",
    "country": "المكسيك Mexico"
  },
  {
    "name": "مطار كوتوكا الدولي Kotoka International Airport",
    "city": "أكرا Accra",
    "country": "غانا Ghana"
  },
  {
    "name": "مطار أريسييڤ Arrecife Airport",
    "city": "سان بارتولومي San Bartolomé",
    "country": "إسبانيا Spain"
  },
  {
    "name": "مطار ألتيـنراين Altenrhein Airport",
    "city": "ألتيـنراين Altenrhein",
    "country": "سويسرا Switzerland"
  },
  {
    "name": "مطار بلاي The Blaye Airport",
    "city": "سانت بيتر بورت St. Peter Port",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار نانتوكيت التذكاري Nantucket Memorial Airport",
    "city": "نانتوكيت Nantucket",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار ساهاند Sahand Airport",
    "city": "ساهاند Sahand",
    "country": "إيران Iran"
  },
  {
    "name": "مطار واسو الإقليمي Waco Regional Airport",
    "city": "واكو Waco",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أركاتا Arcata Airport",
    "city": "ماكينليڤيل McKinleyville",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار شينغيي Xingyi",
    "city": "شينغيي Xingyi",
    "country": "الصين China"
  },
  {
    "name": "مطار أتلانتيك سيتي الدولي Atlantic City International Airport",
    "city": "مدينة إيجر هاربر Egg Harbor City",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار زابول Zabol A/P",
    "city": "زابول Zabol",
    "country": "إيران Iran"
  },
  {
    "name": "مطار ساكيرباة Sakirpasa Airport",
    "city": "أضنة Adana",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار غازي إمير Gaziemir Airport",
    "city": "أزمير Izmir",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار بول Bole International Airport",
    "city": "أديس أبابا Addis Ababa",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "مطار عدن الدولي Aden International Airport",
    "city": "الشيخ عثمان Ash Shaykh Uthman",
    "country": "اليمن Yemen"
  },
  {
    "name": "مطار أديامان Adiyaman Airport",
    "city": "أديامان Adiyaman",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار المطار Al Matar Airport",
    "city": "عمان Amman",
    "country": "الأردن Jordan"
  },
  {
    "name": "مطار أداك Adak Airport",
    "city": "أداك Adak",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أديلايد الدولي Adelaide International Airport",
    "city": "أديلايد Adelaide",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار كودياك Kodiak Airport",
    "city": "كودياك Kodiak",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أردبيل Ardabil Airport",
    "city": "أردبيل Ardabil",
    "country": "إيران Iran"
  },
  {
    "name": "مطار لوخارس Leuchars Airport",
    "city": "سانت أندروز St. Andrews",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار سيسكوينتيناريو Sesquicentenario Airport",
    "city": "سان أندريس San Andrés",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار آبيشي Abeche Airport",
    "city": "أبيشي Abéché",
    "country": "تشاد Chad"
  },
  {
    "name": "مطار خورخي نيوبيري Aeroparque Jorge Newbery",
    "city": "بوينس آيرس Buenos Aires",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "مطار أدلر Adler Airport",
    "city": "سوتشي Sochi",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار فيغرا Vigra Airport",
    "city": "فيغرا Vigra",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار ألاكيت Allakaket Airport",
    "city": "ألاكيت Allakaket",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار الإسكندرية الدولي Alexandria International Airport",
    "city": "الإسكندرية Alexandria",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أكوريري Akureyri Airport",
    "city": "أكوريري Akureyri",
    "country": "أيسلندا Iceland"
  },
  {
    "name": "مطار سان رافائيل San Rafael Airport",
    "city": "سان رافائيل San Rafael",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "مطار ألتافلوريستا Alta Floresta Airport",
    "city": "ألتافلوريستا Alta Floresta",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار زرابشان Zarafshan Airport",
    "city": "زرابشان Zarafshan",
    "country": "أوزبكستان Uzbekistan"
  },
  {
    "name": "مطار أفوتارا Afutara Aerodrome",
    "city": "أفوتارا Afutara",
    "country": "جزر سليمان Solomon Islands"
  },
  {
    "name": "مطار سبزوار Sabzevar Airport",
    "city": "سبزوار Sabzevar",
    "country": "إيران Iran"
  },
  {
    "name": "مطار المسيرة Almassira Airport",
    "city": "أغادير Agadir",
    "country": "المغرب Morocco"
  },
  {
    "name": "مطار لا غارين La Garenne Airport",
    "city": "لابلوم Laplume",
    "country": "فرنسا France"
  },
  {
    "name": "مطار أنغلهولم Angelholm Airport",
    "city": "أنغلهولم Angelholm",
    "country": "السويد Sweden"
  },
  {
    "name": "مطار وانغيلا Wanigela",
    "city": "وانغيلا Wanigela",
    "country": "بابوا غينيا الجديدة Papua New Guinea"
  },
  {
    "name": "مطار أنغماساليك Angmagssalik Airport",
    "city": "أنغماساليك Angmassalik",
    "country": "غرينلاند Greenland"
  },
  {
    "name": "مطار أنغون Angoon Airport",
    "city": "أنغون Angoon",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار مالقة Malaga Airport",
    "city": "مالقة Malaga",
    "country": "إسبانيا Spain"
  },
  {
    "name": "مطار أغرا Agra Airport",
    "city": "أغرا Agra",
    "country": "الهند India"
  },
  {
    "name": "مطار بوش فيلد Bush Field Airport",
    "city": "أوغوستا Augusta",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أليخو غارسيا Alejo Garcia Airport",
    "city": "رئيس فرانكو Presidente Franco",
    "country": "باراغواي Paraguay"
  },
  {
    "name": "مطار أguascalientes Aguascalientes Airport",
    "city": "أغواس كاليينتس Aguascalientes",
    "country": "المكسيك Mexico"
  },
  {
    "name": "مطار أكاريغوا Acarigua",
    "city": "أكاريغوا Acarigua",
    "country": "فنزويلا Venezuela"
  },
  {
    "name": "مطار جزيرة أغاتي Agatti Island Airport",
    "city": "جزيرة أغاتي Agatti Island",
    "country": "الهند India"
  },
  {
    "name": "مطار أبها Abha Airport",
    "city": "حجلح Hajlah",
    "country": "السعودية Saudi Arabia"
  },
  {
    "name": "مطار أمدي Amedee Army Air Field",
    "city": "هيرلون Herlong",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار آهي Ahe Airport",
    "city": "آهي Ahe",
    "country": "بولينيزيا الفرنسية French Polynesia"
  },
  {
    "name": "مطار ألغيرو Alghero Airport",
    "city": "ألغيرو Alghero",
    "country": "إيطاليا Italy"
  },
  {
    "name": "مطار أهوأس Ahuas Airport",
    "city": "أهواس Auas",
    "country": "هندوراس Honduras"
  },
  {
    "name": "مطار كوت دو ريف Cote du Rif Airport",
    "city": "الحسيمة Al Hoceima",
    "country": "المغرب Morocco"
  },
  {
    "name": "مطار أليانس Alliance Municipal Airport",
    "city": "أليانس Alliance",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار وينرايت Wainwright Airport",
    "city": "وينرايت Wainwright",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار آيتوتاكي Aitutaki Airport",
    "city": "آيتوتاكي Aitutaki",
    "country": "جزر كوك Cook Islands"
  },
  {
    "name": "مطار جزيرة آتي Atui Island",
    "city": "جزيرة آتي Atiu Island",
    "country": "جزر كوك Cook Islands"
  },
  {
    "name": "مطار كامبو ديل أورو Campo Dell Oro Airport",
    "city": "أجاكسيو Ajaccio",
    "country": "فرنسا France"
  },
  {
    "name": "مطار الجوف Al Jouf Airport",
    "city": "سكاكا Sakakah",
    "country": "السعودية Saudi Arabia"
  },
  {
    "name": "مطار أغري Agri Airport",
    "city": "أغري Ağrı",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار أزوال Aizwal Airport",
    "city": "أزوال Aizawl",
    "country": "الهند India"
  },
  {
    "name": "مطار جزر القمر Comoros",
    "city": "أنجوان Anjouan",
    "country": "جزر القمر Comoros"
  },
  {
    "name": "مطار أرفيدسياور Arvidsjaur Airport",
    "city": "أرفيدسياور Arvidsjaur",
    "country": "السويد Sweden"
  },
  {
    "name": "مطار سانتا ماريا Santa Maria Airport",
    "city": "أراكاجو Aracaju",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار أنكانغ Ankang Airport",
    "city": "أنكانغ Ankang",
    "country": "الصين China"
  },
  {
    "name": "مطار أتكه Atka Airport",
    "city": "أتكه Atka",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار الكفرة Kufra Airport",
    "city": "الكفرة Kufrah",
    "country": "ليبيا Libya"
  },
  {
    "name": "مطار أكيك Akiak Airport",
    "city": "بيثل Bethel",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار آسايكاوا Asahikawa Airport",
    "city": "أسايكاوا Asahikawa-shi",
    "country": "اليابان Japan"
  },
  {
    "name": "مطار آخيوق Akhiok Airport",
    "city": "كوديّاك Kodiak",
    "country": "الولايات المتحدة United States"
  },
   {
    "name": "مطار أوكلاند الدولي Auckland International Airport",
    "city": "مدينة مانوكو Manukau City",
    "country": "نيوزيلندا New Zealand"
  },
  {
    "name": "مطار كينغ سالم King Salmon Airport",
    "city": "كينغ سالم King Salmon",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أناكتوفوك باس Anaktuvuk Pass Airport",
    "city": "أناكتوفوك باس Anaktuvuk Pass",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار كروونستاد Kroonstad Airport",
    "city": "كروونستاد Kroonstad",
    "country": "جنوب أفريقيا South Africa"
  },
  {
    "name": "مطار أكسو Aksu Airport",
    "city": "أكسو Aksu",
    "country": "الصين China"
  },
  {
    "name": "مطار أكولي فيك Akulivik Airport",
    "city": "شيساسيبي Chisasibi",
    "country": "كندا Canada"
  },
  {
    "name": "مطار أكتيوبينسكي Aktyubinsk Airport",
    "city": "أكتوبى Aqtobe",
    "country": "كازاخستان Kazakhstan"
  },
  {
    "name": "مطار سيتوي Sittwe Airport",
    "city": "سيتوي Sittwe",
    "country": "ميانمار Myanmar"
  },
  {
    "name": "مطار ألماتي Alma Ata Airport",
    "city": "ألماتي Almaty",
    "country": "كازاخستان Kazakhstan"
  },
  {
    "name": "مطار ألباني الدولي Albany International Airport",
    "city": "لاتهام Latham",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أليكانتي Alicante Airport",
    "city": "إلش Elx",
    "country": "إسبانيا Spain"
  },
  {
    "name": "مطار ألتَا Alta Airport",
    "city": "ألتَا Alta",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار هواري بومدين Houari Boumediene Airport",
    "city": "الجزائر Algiers",
    "country": "الجزائر Algeria"
  },
  {
    "name": "مطار ألباني Albany Airport",
    "city": "ألباني Albany",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار ألاموغوردو وايت ساندز Alamogordo White Sands Regional Airport",
    "city": "ألاموغوردو Alamogordo",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار ووترلو Waterloo Municipal Airport",
    "city": "ووترلو Waterloo",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار حلب الدولي Aleppo International Airport",
    "city": "جبيرين Djibrine",
    "country": "سوريا Syria"
  },
  {
    "name": "مطار وادي سان لويس San Luis Valley Regional Airport",
    "city": "ألاموسا Alamosa",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار وalla Walla Walla Regional Airport",
    "city": "والا والا Walla Walla",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار النزهة An-Nuzhah Airport",
    "city": "الإسكندرية Alexandria",
    "country": "مصر Egypt"
  },
  {
    "name": "قاعدة أليتاك البحرية Alitak Seaplane Base",
    "city": "أليتاك Alitak",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أماريلو Amarillo International Airport",
    "city": "أماريلو Amarillo",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار سردار فالابهاي باتيل الدولي Sardar Vallabhbhai Patel International Airport",
    "city": "أحمد آباد Ahmedabad",
    "country": "الهند India"
  },
  {
    "name": "مطار أربا مينش Ethiopia",
    "city": "أربا مينش Arba Mintch",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "مطار سيلاباران Selaparang",
    "city": "ماتارام Mataram",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار الملكة علياء الدولي Queen Alia International Airport",
    "city": "عمان Amman",
    "country": "الأردن Jordan"
  },
  {
    "name": "مطار باتيمورا Pattimura Airport",
    "city": "أمبون Ambon",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار سخيبول Schiphol Airport",
    "city": "سخيبول زويد Schiphol Zuid",
    "country": "هولندا Netherlands"
  },
  {
    "name": "مطار أمديرما Amderma Airport",
    "city": "ناريان-مار Nar'yan-Mar",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار أمباتوماتينتي Ambatomainty",
    "city": "أمباتوماتينتي Ambatomainty",
    "country": "مدغشقر Madagascar"
  },
  {
    "name": "مطار أنكوراج الدولي Anchorage International Airport",
    "city": "أنكوراج Anchorage",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أنجيه ماركيه Aéroport d'Angers-Marcé",
    "city": "سيش سور لوار Seiches-sur-le-Loir",
    "country": "فرنسا France"
  },
  {
    "name": "مطار سيرو موريينو Cerro Moreno International Airport",
    "city": "أنتوفاغاستا Antofagasta",
    "country": "شيلي Chile"
  },
  {
    "name": "مطار بري شامبنيير Brie Champniers Airport",
    "city": "شامبنيير Champniers",
    "country": "فرنسا France"
  },
  {
    "name": "مطار أنياك Aniak Airport",
    "city": "بيثل Bethel",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أنتالاه Madagascar",
    "city": "أنتالاها Antalaha",
    "country": "مدغشقر Madagascar"
  },
  {
    "name": "مطار ديرني Deurne Airport",
    "city": "أنتويرب Antwerp",
    "country": "بلجيكا Belgium"
  },
  {
    "name": "مطار V C بيرد الدولي V C Bird International Airport",
    "city": "كارلايل Carlisle",
    "country": "أنتيغوا وبربودا Antigua and Barbuda"
  },
  {
    "name": "مطار أنفيك Anvik Airport",
    "city": "أنفيك Anvik",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أندونيا Andoya Airport",
    "city": "أندينيس Andenes",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار ألتيبورغ نوبيتز Altenburg Nobitz",
    "city": "ألتيبورغ Altenburg",
    "country": "ألمانيا Germany"
  },
  {
    "name": "مطار جامعة الأناضول Anadolu University Airport",
    "city": "إسكي شهير Eskişehir",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار فالكونارا Falconara Airport",
    "city": "فالكونارا ماريتيما Falconara Marittima",
    "country": "إيطاليا Italy"
  },
  {
    "name": "مطار أوموري Aomori Airport",
    "city": "أوموري-شي Aomori-shi",
    "country": "اليابان Japan"
  },
  {
    "name": "مطار كارباتوس Karpathos Airport",
    "city": "كارباتوس Karpathos",
    "country": "اليونان Greece"
  },
  {
    "name": "مطار ألتونا-بلير Altoona-Blair County Airport",
    "city": "مارتينسبورغ Martinsburg",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار السلطان عبد الحليم Sultan Abdul Halim Airport",
    "city": "كيبالا باتاس Kepala Batas",
    "country": "ماليزيا Malaysia"
  },
  {
    "name": "قاعدة طائرات أموق Bay Seaplane Base",
    "city": "أموق Amook",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار سنتينيال Centennial Airport",
    "city": "إنغل وود Englewood",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار نابلس Naples Municipal Airport",
    "city": "نابلس Naples",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بولينيسيا الفرنسية French Polynesia",
    "city": "أباتاكي Apataki",
    "country": "بولينيسيا الفرنسية French Polynesia"
  },
  {
    "name": "مطار نامبولا Nampula Airport",
    "city": "نامبولا Nampula",
    "country": "موزمبيق Mozambique"
  },
  {
    "name": "مطار ألبيانا كاونتي الإقليمي Alpena County Regional Airport",
    "city": "ألبيانا Alpena",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أبارتادو Apartado Airport",
    "city": "أبارتادو Apartadó",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار فاليولو Faleolo Airport",
    "city": "أبيا Apia",
    "country": "ساموا Samoa"
  },
  {
    "name": "مطار أنكينج Anqing Airport",
    "city": "أنكينج Anqing",
    "country": "الصين China"
  },
  {
    "name": "مطار حفر الباطن Hafr Al Batin Airport",
    "city": "قيسومة Qaisumah",
    "country": "المملكة العربية السعودية Saudi Arabia"
  },
  {
    "name": "مطار العقبة الدولي Aqaba International Airport",
    "city": "العقبة Aqaba",
    "country": "الأردن Jordan"
  },
  {
    "name": "مطار رودريغيز بالون Rodriguez Ballon Airport",
    "city": "أريكويبا Arequipa",
    "country": "بيرو Peru"
  },
  {
    "name": "مطار القرية القطبية Arctic Village Airport",
    "city": "القرية القطبية Arctic Village",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار جزيرة ألور Alor Island",
    "city": "جزيرة ألور Alor Island",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار أرخانجيلس Arkhangelsk Airport",
    "city": "أرخانجيلس Arkhangel'sk",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار تشاكالوتا Chacalluta Airport",
    "city": "أريكا Arica",
    "country": "شيلي Chile"
  },
  {
    "name": "مطار أروشا Arusha Airport",
    "city": "أروشا Arusha",
    "country": "تنزانيا Tanzania"
  },
  {
    "name": "مطار أرميدال Armidale Airport",
    "city": "أرميدال Armidale",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار أرلندا Arlanda Airport",
    "city": "مارست Märst",
    "country": "السويد Sweden"
  },
  {
    "name": "مطار واتر تاون الدولي Watertown International Airport",
    "city": "ديكستر Dexter",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أراكاتوبا Aracatuba Airport",
    "city": "أراكاتوبا Araçatuba",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار لاكلان-نوبل ف. لي ميموريال فيلد Lakelan-Noble F. Lee Memorial Field Airport",
    "city": "وودروف Woodruff",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار سيالا Ceala Airport",
    "city": "أراد Arad",
    "country": "رومانيا Romania"
  },
  {
    "name": "مطار أسا Assab",
    "city": "أسا Assab",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "مطار عشق آباد شمالي Ashkhabad Northwest Airport",
    "city": "عشق آباد Ashgabat",
    "country": "تركمانستان Turkmenistan"
  },
  {
    "name": "مطار أندروس تاون Andros Town Airport",
    "city": "فريش كريك Fresh Creek",
    "country": "الباهاما Bahamas"
  },
  {
    "name": "مطار آسبن بيتكين كاونتي Aspen Pitkin County Airport-Sardy Field",
    "city": "آسبن Aspen",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أستراخان الجنوبي Astrakhan Southeast Airport",
    "city": "أستراخان Astrakhan'",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار وايدواك Wideawake Field",
    "city": "جورج تاون Georgetown, Ascension Island",
    "country": "سانت هيلينا St. Helena"
  },
  {
    "name": "مطار أماني Amami Airport",
    "city": "أماني أو شيمة Amami O Shima",
    "country": "اليابان Japan"
  },
  {
    "name": "مطار يوهانس الرابع الدولي Yohannes Iv International Airport",
    "city": "أسمرة Asmara",
    "country": "إريتريا Eritrea"
  },
  {
    "name": "إثيوبيا Ethiopia",
    "city": "أسوسا Asosa",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "مطار أليس سبرينغز Alice Springs Airport",
    "city": "أليس سبرينغز Alice Springs",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار إركيليت Erkilet Airport",
    "city": "قيصري Kayseri",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار سيلفيو بيتي روسي Silvio Pettirossi International Airport",
    "city": "كولونيا ماريانو روكي ألونسو Colonia Mariano Roque Alonso",
    "country": "باراغواي Paraguay"
  },
  {
    "name": "مطار أمبوسيلي Amboseli",
    "city": "أمبوسيلي Amboseli",
    "country": "كينيا Kenya"
  },
  {
    "name": "مطار أسوان Aswan Airport",
    "city": "أسوان Aswan",
    "country": "مصر Egypt"
  },
  {
    "name": "مطار عطبرة Atbara",
    "city": "عطبرة Atbara",
    "country": "السودان Sudan"
  },
  {
    "name": "مطار آرثر تاون Arthur's Town Airport",
    "city": "آرثر تاون Arthur Town",
    "country": "الباهاما Bahamas"
  },
  {
    "name": "مطار أتوفي Atoifi",
    "city": "أتوفي Atoifi",
    "country": "جزر سليمان Solomon Islands"
  },
  {
    "name": "مطار إلفثيريوس فينيزيلوس الدولي Eleftherios Venizelos International Airport",
    "city": "أثينا Athens",
    "country": "اليونان Greece"
  },
  {
    "name": "مطار أتكوسك Atqasuk Airport",
    "city": "أتكوسك Atqasuk",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار هارتسفيلد-جاكسون أتلانتا الدولي Hartsfield-Jackson Atlanta International Airport",
    "city": "أتلانتا Atlanta",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار ألتاميرا Altamira Airport",
    "city": "ألتاميرا Altamira",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار راجا سانسي Raja Sansi Airport",
    "city": "راجا سانسي Raja Sansi",
    "country": "الهند India"
  },
  {
    "name": "مطار آتار Atar Airport",
    "city": "آتار Atar",
    "country": "موريتانيا Mauritania"
  },
  {
    "name": "مطار أتماوتلاك Atmautluak Airport",
    "city": "أتماوتلاك Atmautluak",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار مقاطعة أوتاجامي Outagamie County Airport",
    "city": "أپلنتون Appleton",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار ووتertown Watertown Municipal Airport",
    "city": "واتر تاون Watertown",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أسيوط Asyut Airport",
    "city": "أسيوط Asyut",
    "country": "مصر Egypt"
  },
  {
    "name": "مطار رينا بياتريكس الدولي Reina Beatrix International Airport",
    "city": "أروبا Aruba",
    "country": "أروبا Aruba"
  },
  {
    "name": "مطار سانتياغو بيريز Santiago Perez Airport",
    "city": "أراوكا Arauca",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار أوغستا ولاية Augusta State Airport",
    "city": "أوغستا Augusta",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أبوظبي الدولي Abu Dhabi International Airport",
    "city": "أبوظبي Abu Dhabi",
    "country": "الإمارات العربية المتحدة United Arab Emirates"
  },
  {
    "name": "مطار ألاكانيك Alakanuk Airport",
    "city": "ألاكانيك Alakanuk",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أتوونا Atuona Airport",
    "city": "أتوونا Atuona",
    "country": "بولينزيا الفرنسية French Polynesia"
  },
  {
    "name": "مطار أوريلاك Aurillac Airport",
    "city": "أوريلاك Aurillac",
    "country": "فرنسا France"
  },
  {
    "name": "مطار أوستن-بيرغستروم الدولي Austin-Bergstrom International Airport",
    "city": "أوستن Austin",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أراجوانا Araguaina Airport",
    "city": "أراجوانا Araguaina",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار فانواتو Vanuatu",
    "city": "أنيتيوم Aneityum",
    "country": "فانواتو Vanuatu"
  },
  {
    "name": "مطار آشفيل الإقليمي Asheville Regional Airport",
    "city": "فليتشر Fletcher",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أفينيون-كوموت Avignon-Caumont Airport",
    "city": "أفينيون Avignon",
    "country": "فرنسا France"
  },
  {
    "name": "مطار ويلكس بار Scranton الدولي Wilkes Barre Scranton International Airport",
    "city": "بيتيستون Pittston",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار أفو أفو Avu Avu",
    "city": "أفو أفو Avu Avu",
    "country": "جزر سليمان Solomon Islands"
  },
  {
    "name": "مطار أفالون Avalon Airport",
    "city": "لارا Lara",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار أوابا Awaba",
    "city": "أوابا Awaba",
    "country": "بابوا غينيا الجديدة Papua New Guinea"
  },
  {
    "name": "مطار أنيوا Aniwa Airport",
    "city": "أنيوا Aniwa",
    "country": "فانواتو Vanuatu"
  },
  {
    "name": "مطار الأهواز Ahvaz Airport",
    "city": "الأهواز Ahvaz",
    "country": "إيران Iran"
  },
  {
    "name": "مطار والبلك Wallblake Airport",
    "city": "أنغويلا Anguilla",
    "country": "أنغويلا Anguilla"
  },
  {
    "name": "مطار ألكسندروبوليس Alexandroupolis Airport",
    "city": "ألكسندروبوليس Alexandroupolis",
    "country": "اليونان Greece"
  },
  {
    "name": "مطار إيل إيدن El Eden Airport",
    "city": "لا تيبايدا La Tebaida",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار سبرينغ بوينت Spring Point Airport",
    "city": "سبرينغ بوينت Spring Point",
    "country": "الباهاما Bahamas"
  },
  {
    "name": "مطار بولينيسيا الفرنسية French Polynesia",
    "city": "أروتوآ Arutua",
    "country": "بولينيسيا الفرنسية French Polynesia"
  },
  {
    "name": "مطار أكيتا Akita Airport",
    "city": "أكيتا Akita-shi",
    "country": "اليابان Japan"
  },
  {
    "name": "مطار أكسوم Axum",
    "city": "أكسوم Axum",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "مطار آيرز روك Ayers Rock Airport",
    "city": "أيرز روك Ayers Rock",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار أنطاليا Antalya Airport",
    "city": "أنطاليا Antalya",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار فينيكس ميسا غيت واي Phoenix-Mesa Gateway Airport",
    "city": "فينيكس Phoenix",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار يزد Yazd Airport",
    "city": "يزد Yezd",
    "country": "إيران Iran"
  },
  {
    "name": "مطار أنديجان Andizhan Airport",
    "city": "أنديجان Andijon",
    "country": "أوزبكستان Uzbekistan"
  },
  {
    "name": "مطار كالامازو باتل كريك Kalamazoo-Battle Creek International Airport",
    "city": "كالامازو Kalamazoo",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار توات Touat Airport",
    "city": "أدرار Adrar",
    "country": "الجزائر Algeria"
  },
  {
    "name": "مطار سامانا إل كاتي Samana El Catey International Airport",
    "city": "سامانا Samana",
    "country": "جمهورية الدومينيكان Dominican Republic"
  },
  {
    "name": "مطار باغيو Baguio Airport",
    "city": "مدينة باغيو Baguio City",
    "country": "الفلبين Philippines"
  },
  {
    "name": "مطار البحرين الدولي Bahrain International Airport",
    "city": "المحرق Al Muharraq",
    "country": "البحرين Bahrain"
  },
  {
    "name": "مطار باتمان Batman Airport",
    "city": "باتمان Batman",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار إرنستو كورتيسوز Ernesto Cortissoz Airport",
    "city": "سوليداد Soledad",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار بالالا Balalae",
    "city": "بالالا Balalae",
    "country": "جزر سليمان Solomon Islands"
  },
  {
    "name": "مطار بauru Bauru Airport",
    "city": "باورو Bauru",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار باوتو Baotou Airport",
    "city": "باوتو Baotou",
    "country": "الصين China"
  },
  {
    "name": "مطار بارناول Barnaui West Airport",
    "city": "بارناول Barnaul",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار بايا ماري Baia Mare",
    "city": "بايا ماري Baia Mare",
    "country": "رومانيا Romania"
  },
  {
    "name": "مطار بالماسييدا Balmaceda Airport",
    "city": "بالمسييدا Balmaceda",
    "country": "شيلي Chile"
  },
  {
    "name": "مطار بوبانيشوار Bhubaneswar Airport",
    "city": "بوبانيشوار Bhubaneswar",
    "country": "الهند India"
  },
  {
    "name": "مطار كاسان كاساني Kasane Airport",
    "city": "كاسان Kasane",
    "country": "بوتسوانا Botswana"
  },
  {
    "name": "مطار باريو Nanga Medamit",
    "city": "ناتا ميداميت Nanga Medamit",
    "country": "ماليزيا Malaysia"
  },
  {
    "name": "مطار بربرة Berbera Airport",
    "city": "بربرة Berbera",
    "country": "الصومال Somalia"
  },
  {
    "name": "مطار بلاكبوش Blackbushe Airport",
    "city": "كامبرلي Camberley",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بوخارست-باناسيست Aeroportul National Bucuresti-Baneasa",
    "city": "بوخارست Bucharest",
    "country": "رومانيا Romania"
  },
  {
    "name": "مطار باراكو Baracoa Airport",
    "city": "باراكو Baracoa",
    "country": "كوبا Cuba"
  },
  {
    "name": "مطار باكولود Bacolod Airport",
    "city": "مدينة باكولود Bacolod City",
    "country": "الفلبين Philippines"
  },
  {
    "name": "مطار باركالداين Barcaldine Aerodrome",
    "city": "باركالداين Barcaldine",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بارا كولورادو Barra Colorado Airport",
    "city": "كولورادو Colorado",
    "country": "كوستاريكا Costa Rica"
  },
  {
    "name": "مطار لويسي كالوغارا Luizi Calugara Airport",
    "city": "باكيو Bac\u00e6u",
    "country": "رومانيا Romania"
  },
  {
    "name": "مطار برشلونة الدولي Barcelona International Airport",
    "city": "إل برات دي لليوبريغات El Prat de Llobregat",
    "country": "إسبانيا Spain"
  },
  {
    "name": "مطار برمودا الدولي Bermuda International Airport",
    "city": "سانت جورج St. George",
    "country": "برمودا Bermuda"
  },
  {
    "name": "مطار بوندابيرغ Bundaberg Airport",
    "city": "بوندابيرغ Bundaberg",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار جزيرة بادو Badu Island Airport",
    "city": "جزيرة بادو Badu Island",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بندر لنجه Bandar Lengeh Airport",
    "city": "بندر عباس Bandar Abbas",
    "country": "إيران Iran"
  },
  {
    "name": "مطار سيامسودين نور Syamsuddin Noor Airport",
    "city": "بانجارماسين Banjarmasin",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار برادلي الدولي Bradley International Airport",
    "city": "ويندسور لوكس Windsor Locks",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار حسين سسترانغارا Husein Sastranegara Airport",
    "city": "باندونغ Bandung",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار بهادرا بور Bhadrapur",
    "city": "بهادرا بور Bhadrapur",
    "country": "نيبال Nepal"
  },
  {
    "name": "مطار فادودارا Vadodara Airport",
    "city": "فادودارا Vadodara",
    "country": "الهند India"
  },
  {
    "name": "مطار إيغور إي سيكورسكي التذكاري Igor I Sikorsky Memorial Airport",
    "city": "ستراتفورد Stratford",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار كاسالي Casale Airport",
    "city": "برينديسي Brindisi",
    "country": "إيطاليا Italy"
  },
  {
    "name": "مطار باردفوس Bardufoss Airport",
    "city": "باردفوس Bardufoss",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار بنبيكولا Benbecula Airport",
    "city": "باليفانيش Balivanich",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار سورشين Surcin Airport",
    "city": "سورشين Sur\u010din",
    "country": "صربيا Serbia"
  },
  {
    "name": "مطار فالد كايس الدولي Val de Caes International Airport",
    "city": "بيلم Belem",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار بنينا الدولي Benina Intl",
    "city": "بنغازي Benghazi",
    "country": "ليبيا Libya"
  },
  {
    "name": "مطار غويبافاس Guipavas Airport",
    "city": "غويبافاس Guipavas",
    "country": "فرنسا France"
  },
  {
    "name": "مطار بيتhel Bethel Airport",
    "city": "بيثيل Bethel",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بدوري Bedourie Aerodrome",
    "city": "بدوري Bedourie",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بيرا Beira Airport",
    "city": "بيرا Beira",
    "country": "موزمبيق Mozambique"
  },
  {
    "name": "مطار بيروت الدولي Beirut International Airport",
    "city": "بيروت Beirut",
    "country": "لبنان Lebanon"
  },
  {
    "name": "مطار برادفورد الإقليمي Bradford Regional Airport",
    "city": "لويس رن Lewis Run",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بيليفيلد Bielefeld",
    "city": "بيليفيلد Bielefeld",
    "country": "ألمانيا Germany"
  },
  {
    "name": "مطار ويليام ب هيليغ فيلد William B Heilig Field Airport",
    "city": "سكوتسبلافس Scottsbluff",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار كينغ كاونتي الدولي-مطار بوينغ King County International Airport-Boeing Field",
    "city": "سياتل Seattle",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار مقاطعة كيرن-ميدوز فيلد Kern County-Meadows Field Airport",
    "city": "باكرسفيلد Bakersfield",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار جي بي إم هيرتسوج J B M Hertzog Airport",
    "city": "بلومفونتين Bloemfontein",
    "country": "جنوب أفريقيا South Africa"
  },
  {
    "name": "مطار ألديرغروف Aldergrove Airport",
    "city": "كرملين Crumlin",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بوري رام Buri Ram",
    "city": "بوري رام Buri Ram",
    "country": "تايلاند Thailand"
  },
  {
    "name": "مطار بالونغرو Palonegro Airport",
    "city": "بوكارامانغا Bucaramanga",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار بانغي إم بوكو Bangui M Poko Airport",
    "city": "بانغي Bangui",
    "country": "جمهورية أفريقيا الوسطى Central African Republic"
  },
  {
    "name": "مطار غرانتلي آدامز الدولي Grantley Adams International Airport",
    "city": "بريدجتاون Bridgetown",
    "country": "باربادوس Barbados"
  },
  {
    "name": "مطار غريتر بينغهامتون إدوين أ لينك فيلد Greater Binghamton Edwin A Link Field Airport",
    "city": "مدينة جونسون Johnson City",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بيرغن فليسلاند Bergen Flesland Airport",
    "city": "بلومسترالدين Blomsterdalen",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار بانغور الدولي Bangor International Airport",
    "city": "بانغور Bangor",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار المثنى Al Muthana Airport",
    "city": "بغداد Baghdad",
    "country": "العراق Iraq"
  },
  {
    "name": "مطار أوريوا Al Serio Airport",
    "city": "غراسوبيو Grassobbio",
    "country": "إيطاليا Italy"
  },
  {
    "name": "مطار هانوك كاونتي-بار هاربور Hancock County-Bar Harbor Airport",
    "city": "إلسورث Ellsworth",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار جورج بيست بلفاست سيتي George Best Belfast City Airport",
    "city": "بلفاست Belfast",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار وودبورن Woodbourne Airport",
    "city": "بلينهيم Blenheim",
    "country": "نيوزيلندا New Zealand"
  },
  {
    "name": "مطار بروس لاغونا Brus Laguna Airport",
    "city": "بروس لاغونا Brus Laguna",
    "country": "هندوراس Honduras"
  },
  {
    "name": "مطار بيشة Bisha Airport",
    "city": "بيشة Bisha",
    "country": "السعودية Saudi Arabia"
  },
  {
    "name": "مطار باهيا بلانكا Cte Espora Naval Air Base",
    "city": "بونتا ألتا Punta Alta",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "مطار بهوج Bhuj Airport",
    "city": "بهوج Bhuj",
    "country": "الهند India"
  },
  {
    "name": "مطار بخارى Bukhara Airport",
    "city": "بخارى Bukhara",
    "country": "أوزبكستان Uzbekistan"
  },
  {
    "name": "مطار برمنغهام الدولي Birmingham International Airport",
    "city": "برمنغهام Birmingham",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بايراجاره Bairagarh Airport",
    "city": "بهو بال Madhya Pradesh",
    "country": "الهند India"
  },
  {
    "name": "مطار بروكن هيل Broken Hill Airport",
    "city": "بروكن هيل Broken Hill",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بهاراتبور Bharatpur",
    "city": "بهاراتبور Bharatpur",
    "country": "نيبال Nepal"
  },
  {
    "name": "مطار باتهورست Bathurst Airport",
    "city": "باتهورست Bathurst",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بهفانغار Bhavnagar Airport",
    "city": "بهفانغار Bhavnagar",
    "country": "الهند India"
  },
  {
    "name": "مطار بهاوالبور Bahawalpur Airport",
    "city": "بهاوالبور Bahawalpur",
    "country": "باكستان Pakistan"
  },
  {
    "name": "مطار برمنغهام الدولي Birmingham International Airport",
    "city": "برمنغهام Birmingham",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بيهاي Beihai Airport",
    "city": "بيهاي Beihai",
    "country": "الصين China"
  },
  {
    "name": "مطار بوريتا Poretta Airport",
    "city": "بورجو Borgo",
    "country": "فرنسا France"
  },
  {
    "name": "مطار بلوك آيلاند Block Island State Airport",
    "city": "جزيرة بلوك Block Island",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار إنيو Enyu Airfield",
    "city": "بيكيني أتول Bikini Atoll",
    "country": "جزر مارشال Marshall Islands"
  },
  {
    "name": "مطار فرانس كايسيبو Frans Kaisiepo Airport",
    "city": "بياك Biak",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار لوغان الدولي Logan International Airport",
    "city": "بيلينغز Billings",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار ساوث بيميني South Bimini Airport",
    "city": "بلدة بايلي Bailey's Town",
    "country": "البهاما Bahamas"
  },
  {
    "name": "مطار بلباو Bilbao Airport",
    "city": "لويو Loiu",
    "country": "إسبانيا Spain"
  },
  {
    "name": "مطار أنغليت Anglet Airport",
    "city": "أنغليت Anglet",
    "country": "فرنسا France"
  },
  {
    "name": "مطار بيراتناغار Biratnagar Airport",
    "city": "بيراتناغار Biratnagur",
    "country": "نيبال Nepal"
  },
  {
    "name": "مطار بسمارك البلدي Bismarck Municipal Airport",
    "city": "بسمارك Bismarck",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار صومام Soummam Airport",
    "city": "بجاية Bejaia",
    "country": "الجزائر Algeria"
  },
  {
    "name": "مطار بوجنورد Bojnord Airport",
    "city": "بوجنورد Bojnord",
    "country": "إيران Iran"
  },
  {
    "name": "مطار باتسفجورد Batsfjord Airport",
    "city": "باسفجورد Baasfjord",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار بيميدجي مقاطعة بيلترامي Bemidji-Beltrami County Airport",
    "city": "بيميدجي Bemidji",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار يوندوم الدولي Yundum International Airport",
    "city": "يوندوم Yundum",
    "country": "غامبيا Gambia"
  },
  {
    "name": "مطار بوجمبورا Bujumbura Airport",
    "city": "بوجمبورا Bujumbura",
    "country": "بوروندي Burundi"
  },
  {
    "name": "مطار بحردار Bahar Dar Airport",
    "city": "بحردار Bahar Dar",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "مطار ميلاس Milas Airport",
    "city": "بودروم Bodrum",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار باجاوا Bajawa Airport",
    "city": "إندي Ende",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار سيلانو Silao Airport",
    "city": "سيلانو Silao",
    "country": "المكسيك Mexico"
  },
  {
    "name": "مطار تالافيرا لا ريال Talavera la Real Airport",
    "city": "باداخوز Badajoz",
    "country": "إسبانيا Spain"
  },
  {
    "name": "مطار بيكوفو Bykovo Airport",
    "city": "ليوبيرتسي Lyubertsy",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار باكلاند Buckland Airport",
    "city": "باكلاند Buckland",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار كوتا كينابالو Kota Kinabalu Airport",
    "city": "كوتا كينابالو Kota Kinabalu",
    "country": "ماليزيا Malaysia"
  },
  {
    "name": "مطار بانكوك الدولي Bangkok International Airport",
    "city": "لاك سي Lak Si",
    "country": "تايلاند Thailand"
  },
  {
    "name": "مطار بيرك ليكفرونت Burke Lakefront Airport",
    "city": "كليفلاند Cleveland",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار باكالالان Bakalalan Airport",
    "city": "باكالالان Bakalalan",
    "country": "ماليزيا Malaysia"
  },
  {
    "name": "مطار باماكو سينو Bamako Senou Airport",
    "city": "كالابان Kalaban",
    "country": "مالي Mali"
  },
  {
    "name": "مطار بلاكال Blackall Aerodrome",
    "city": "ماونت إنيسكيلين Mount Enniskillen",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بادانجكيميليج Padangkemiling Airport",
    "city": "بنجكولو Bengkulu",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار مقاطعة رالي التذكاري Raleigh County Memorial Airport",
    "city": "بيفر Beaver",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بوكافو كافومو Bukavu Kavumu Airport",
    "city": "بوكافو Bukavu",
    "country": "الكونغو Congo"
  },
  {
    "name": "مطار خوسيه أنطونيو أنزواتيجي Jose Antonio Anzoategui Airport",
    "city": "بارياجوين Pariaguán",
    "country": "فنزويلا Venezuela"
  },
  {
    "name": "مطار دالا Dala Airport",
    "city": "بورلانج Borlange",
    "country": "السويد Sweden"
  },
  {
    "name": "مطار برومما Bromma Airport",
    "city": "برومما Bromma",
    "country": "السويد Sweden"
  },
  {
    "name": "مطار بروم الدولي Broome International Airport",
    "city": "بروم Broome",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بلومنجتون نورمال Bloomington Normal Airport",
    "city": "بلومنجتون Bloomington",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بوركوم Borkum Airport",
    "city": "بوركوم Borkum",
    "country": "ألمانيا Germany"
  },
  {
    "name": "مطار بامو Bhamo Airport",
    "city": "بامو Bhamo",
    "country": "ميانمار Myanmar"
  },
  {
    "name": "مطار محمد صلاح الدين Mohammad Salahuddin Airport",
    "city": "رابا Raba",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار بان مي ثاوت Ban Me Thaut",
    "city": "بانمتهوت Banmethuot",
    "country": "فيتنام Vietnam"
  },
  {
    "name": "مطار بوردج بادجي مختار Bordj Badji Mokhtar Airport",
    "city": "بوردج بادجي مختار Bordj Badji Mokhtar",
    "country": "الجزائر Algeria"
  },
  {
    "name": "مطار جزيرة بيليب Belep Island Airport",
    "city": "جزيرة بيليب Belep Island",
    "country": "كاليدونيا الجديدة New Caledonia"
  },
  {
    "name": "مطار ناشفيل الدولي Nashville International Airport",
    "city": "ناشفيل Nashville",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بندر عباس الدولي Bandar Abbass International Airport",
    "city": "بندر عباس Bandar Abbas",
    "country": "إيران Iran"
  },
  {
    "name": "مطار بريسبان الدولي Brisbane International Airport",
    "city": "بريسبان Brisbane",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بنين Benin Airport",
    "city": "بنين Benin City",
    "country": "نيجيريا Nigeria"
  },
  {
    "name": "مطار هانغلار Hangelar Airport",
    "city": "بون Bonn",
    "country": "ألمانيا Germany"
  },
  {
    "name": "مطار بالينا Ballina Airport",
    "city": "بالينا Ballina",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بروني Bronnoy Airport",
    "city": "برونوي Bronnoysund",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار باريناس Barinas Airport",
    "city": "باريناس Barinas",
    "country": "فنزويلا Venezuela"
  },
  {
    "name": "مطار بانيا لوكا Banja Luka Airport",
    "city": "بانيا لوكا Banja Luka",
    "country": "البوسنة والهرسك Bosnia and Herzegovina"
  },
  {
    "name": "مطار بيلونا Bellona Airport",
    "city": "بيلونا Bellona",
    "country": "جزر سليمان Solomon Islands"
  },
  {
    "name": "مطار موتو موتي Motu-Mute Airport",
    "city": "بابيتي Papeete",
    "country": "بولينيزيا الفرنسية French Polynesia"
  },
  {
    "name": "مطار بوكاس ديل تورو Bocas del Toro Airport",
    "city": "بوكاس ديل تورو Bocas del Toro",
    "country": "بنما Panama"
  },
  {
    "name": "مطار بوردو Bordeaux Airport",
    "city": "ميرانياك Merignac",
    "country": "فرنسا France"
  },
  {
    "name": "مطار إلدورادو الدولي Eldorado International Airport",
    "city": "فونتيبون Fontibón",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار بورنموث الدولي Bournemouth International Airport",
    "city": "كرايستشيرش Christchurch",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بويز Boise Air Terminal",
    "city": "بويز Boise",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بورغاس Burgas Airport",
    "city": "بورغاس Burgas",
    "country": "بلغاريا Bulgaria"
  },
  {
    "name": "مطار شاتراباتي شيفاجي الدولي Chhatrapati Shivaji International Airport",
    "city": "مومباي Mumbai",
    "country": "الهند India"
  },
  {
    "name": "مطار فلامنغو Flamingo Airport",
    "city": "كرالينديك Kralendijk",
    "country": "جزر الأنتيل الهولندية Netherlands Antilles"
  },
  {
    "name": "مطار بودو Bodo Airport",
    "city": "بودو Bodo",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار لوجان الدولي Logan International Airport",
    "city": "بوسطن Boston",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بارتو Bartow Municipal Airport",
    "city": "بارتو Bartow",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بوبو ديولاسو Bobo Dioulasso Airport",
    "city": "بوبو ديولاسو Bobo-Dioulasso",
    "country": "بوركينا فاسو Burkina Faso"
  },
  {
    "name": "مطار سيبينغان Sepinggan Airport",
    "city": "باليكبابان Balikpapan",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار بورتو سيغورو Porto Seguro Airport",
    "city": "بورتو سيغورو Porto Seguro",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار مقاطعة جيفرسون Jefferson County Airport",
    "city": "بيومونت Beaumont",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بانغدا Bangda Airport",
    "city": "كامدو Qamdo",
    "country": "الصين China"
  },
  {
    "name": "مطار بيسالامبي Besalampy Airport",
    "city": "بيسالامبي Besalampy",
    "country": "مدغشقر Madagascar"
  },
  {
    "name": "مطار جلينكو جيت بورت Glynco Jetport Airport",
    "city": "برونزويك Brunswick",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بوليا Boulia Aerodrome",
    "city": "بوليا Boulia",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار رافائيل هيرنانديز Rafael Hernandez Airport",
    "city": "أغواديا Aguadilla",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بلاغوفيشينسك الشمالي Blagoveshchensk Northwest Airport",
    "city": "بلاغوفيشينسك Blagoveshchensk",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار بارييراس Barreiras Airport",
    "city": "بارييراس Barreiras",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار سان كارلوس دي باريلوتشي San Carlos de Bariloche Airport",
    "city": "سان كارلوس دي باريلوتشي San Carlos DeBariloche",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "مطار برينرد كرو وينغ Brainerd-Crow Wing County Regional Airport",
    "city": "برينرد Brainerd",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بريمن Bremen Airport",
    "city": "بريمن Bremen",
    "country": "ألمانيا Germany"
  },
  {
    "name": "محطة قطار برادفورد Bradford Railway Station",
    "city": "برادفورد Bradford",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار باليزي ماكيه Palese Macchie Airport",
    "city": "باري Bari",
    "country": "إيطاليا Italy"
  },
  {
    "name": "مطار بورك Bourke Airport",
    "city": "بورك Bourke",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار برلنغتون البلدي Burlington Municipal Airport",
    "city": "برلنغتون Burlington",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار باركيسيميتو Barquisimeto Airport",
    "city": "باركيسيميتو Barquisimeto",
    "country": "فنزويلا Venezuela"
  },
  {
    "name": "مطار برن بيلب Bern Belp Airport",
    "city": "بيلب Belp",
    "country": "سويسرا Switzerland"
  },
  {
    "name": "مطار براونسفيل Brownsville-South Padre Island International Airport",
    "city": "براونسفيل Brownsville",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار توراني Turany Airport",
    "city": "برنو Brno",
    "country": "جمهورية التشيك Czech Republic"
  },
  {
    "name": "مطار نورث باي North Bay Airport",
    "city": "بارا Barra",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بريستول الدولي Bristol International Airport",
    "city": "بريستول Bristol",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بروكسل Brussels Airport",
    "city": "بروكسل Bruxelles",
    "country": "بلجيكا Belgium"
  },
  {
    "name": "مطار بريمرهافن Bremerhaven Airport",
    "city": "باد بيدركيسا Bad Bederkesa",
    "country": "ألمانيا Germany"
  },
  {
    "name": "مطار وايلي بوست ويل روجرز Wiley Post Will Rogers Memorial Airport",
    "city": "بارو Barrow",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بوصاصو Bossaso Airport",
    "city": "بوصاصو Bossaso",
    "country": "الصومال Somalia"
  },
  {
    "name": "مطار جوسيلينو كوبيتشيك الدولي Juscelino Kubitschek International Airport",
    "city": "لاغو سول Lago Sul",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار خوسيه سيليستينو موتيس Jose Celestino Mutis Airport",
    "city": "باهيا سولانو Bahía Solano",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار باوشان Baoshan Airport",
    "city": "باوشان Baoshan",
    "country": "الصين China"
  },
  {
    "name": "مطار باتا Bata Airport",
    "city": "باتا Bata",
    "country": "غينيا الاستوائية Equatorial Guinea"
  },
  {
    "name": "مطار برايتون Brighton Airport",
    "city": "برايتون Brighton",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بسكرة Biskra Airport",
    "city": "بسكرة Biskra",
    "country": "الجزائر Algeria"
  },
  {
    "name": "مطار يورو بازل-مولهاوس-فرايبورغ EuroAirport Basel-Mulhouse-Freiburg",
    "city": "سانت لويس St-Ludwig",
    "country": "فرنسا France"
  },
  {
    "name": "مطار باسكو Basco Airport",
    "city": "باسكو Basco",
    "country": "الفلبين Philippines"
  },
  {
    "name": "مطار البصرة الدولي Basrah International Airport",
    "city": "الجوادر Gawad",
    "country": "العراق Iraq"
  },
  {
    "name": "مطار باسين Bassein Airport",
    "city": "باسين Bassein",
    "country": "ميانمار Myanmar"
  },
  {
    "name": "مطار هانغ ناديم Hang Nadim Airport",
    "city": "باتام Batam",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار جزيرة بارتر Barter Island Airport",
    "city": "كاكتوفيك Kaktovik",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بلانغبنتنغ Blangbintang Airport",
    "city": "باندا آتشيه Banda Aceh",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "مطار براتسك Bratsk Airport",
    "city": "براتسك Bratsk",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار كي كي كيلوغ W K Kellogg Airport",
    "city": "باتل كريك Battle Creek",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بيرت موني Bert Mooney Airport",
    "city": "بوت Butte",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار باتون روج متروبوليتان Baton Rouge Metropolitan Airport",
    "city": "باتون روج Baton Rouge",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار براتيسلافا الدولي Bratislava Airport",
    "city": "براتيسلافا Bratislava",
    "country": "سلوفاكيا Slovakia"
  },
  {
    "name": "مطار بيتلز Bettles Airport",
    "city": "بيتلز Bettles",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بينتولو Bintulu Airport",
    "city": "بينتولو Bintulu",
    "country": "ماليزيا Malaysia"
  },
  {
    "name": "مطار برلينغتون الدولي Burlington International Airport",
    "city": "ساوث برلينغتون South Burlington",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بورصة Bursa Airport",
    "city": "بورصة Bursa",
    "country": "تركيا Turkey"
  },
  {
    "name": "مطار بوكا Buka",
    "city": "بوكا Buka",
    "country": "بابوا غينيا الجديدة Papua New Guinea"
  },
  {
    "name": "مطار بيرك تاون Burketown Aerodrome",
    "city": "بيرك تاون Burketown",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار فيريهيج Ferihegy Airport",
    "city": "بودابست Budapest",
    "country": "المجر Hungary"
  },
  {
    "name": "مطار غريت بافالو الدولي Greater Buffalo International Airport",
    "city": "باوفالو Buffalo",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بولولو Bulolo",
    "city": "بولولو Bulolo",
    "country": "بابوا غينيا الجديدة Papua New Guinea"
  },
  {
    "name": "مطار بوانافنتورا Buenaventura Airport",
    "city": "بوانافنتورا Buenaventura",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "مطار بوراو Burao",
    "city": "بوراو Burao",
    "country": "الصومال Somalia"
  },
  {
    "name": "مطار بولاوايو Bulawayo Airport",
    "city": "بولاوايو Bulawayo",
    "country": "زيمبابوي Zimbabwe"
  },
  {
    "name": "مطار بوربانك غلينديل باسادينا Burbank Glendale Pasadena Airport",
    "city": "بوربانك Burbank",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار باتومي Batumi",
    "city": "باتومي Batumi",
    "country": "جورجيا Georgia"
  },
  {
    "name": "مطار بونيا Bunia Airport",
    "city": "بونيا Bunia",
    "country": "جمهورية الكونغو الديمقراطية Democratic Republic of the Congo"
  },
  {
    "name": "مطار بوشهر Bushehr Airport",
    "city": "بندر بوشهر Bandar-e Bushehr",
    "country": "إيران Iran"
  },
  {
    "name": "مطار بوفوا Beauvais-Tille Airport",
    "city": "بوفوا Beauvais",
    "country": "فرنسا France"
  },
  {
    "name": "مطار بوينت فيستا Boa Vista International Airport",
    "city": "بوينت فيستا Boa Vista",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار بوينت فيستا Boa Vista Airport",
    "city": "بوينت فيستا Boa Vista",
    "country": "الرأس الأخضر Cape Verde"
  },
  {
    "name": "مطار لا روش Brive-la-Gaillarde Airport",
    "city": "بريف لا غايلارد Brive-la-Gaillarde",
    "country": "فرنسا France"
  },
  {
    "name": "مطار برليفا Berlevag Airport",
    "city": "برليفا Berlevaag",
    "country": "النرويج Norway"
  },
  {
    "name": "مطار براكيدير كاماراو Brigadeiro Camarao Airport",
    "city": "فيلينا Vilhena",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار بيردزفيل Birdsville Airport",
    "city": "بيردزفيل Birdsville",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار بهيرافا Bhairawa Airport",
    "city": "بهيرافا Bhairawa",
    "country": "نيبال Nepal"
  },
  {
    "name": "مطار براونشفايغ Braunschweig Airport",
    "city": "براونشفايغ Braunschweig",
    "country": "ألمانيا Germany"
  },
  {
    "name": "مطار جزيرة والني Walney Island Airport",
    "city": "بارو فيرنس Barrow in Furness",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بالتيمور واشنطن الدولي Baltimore-Washington International Thurgood Mars",
    "city": "بالتيمور Baltimore",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار بول Bol",
    "city": "بول Bol",
    "country": "كرواتيا Croatia"
  },
  {
    "name": "مطار بروني Brunei International Airport",
    "city": "باندا سيري بيغوان Bandar Seri Begawan",
    "country": "بروناي Brunei"
  },
  {
    "name": "مطار بيرني وينارد Burnie Wynyard Airport",
    "city": "دوكتورز روكس Doctors Rocks",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار سانتا كلارا Santa Clara Airport",
    "city": "سانتا كلارا Santa Clara",
    "country": "كوبا Cuba"
  },
  {
    "name": "",
    "city": "بام Bam",
    "country": "إيران Iran"
  },
  {
    "name": "مطار بوتوان Butuan Airport",
    "city": "بوتوان Butuan",
    "country": "الفلبين Philippines"
  },
  {
    "name": "مطار بايامو Bayamo Airport",
    "city": "بايامو Bayamo",
    "country": "كوبا Cuba"
  },
  {
    "name": "مطار بريز نورتون Brize Norton Airport",
    "city": "كارترتون Carterton",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار كابندا Cabinda Airport",
    "city": "كابندا Cabinda",
    "country": "أنغولا Angola"
  },
  {
    "name": "مطار كاسكافيل Cascavel Airport",
    "city": "كاسكافيل Cascavel",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار كولومبيا متروبوليتان Columbia Metropolitan Airport",
    "city": "ويست كولومبيا West Columbia",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار إلمس Elmas Airport",
    "city": "ساردر Sardara",
    "country": "إيطاليا Italy"
  },
  {
    "name": "مطار كامو Camo",
    "city": "كا ماو Ca Mau",
    "country": "فيتنام Vietnam"
  },
  {
    "name": "مطار القاهرة الدولي Cairo International Airport",
    "city": "القاهرة Cairo",
    "country": "مصر Egypt"
  },
  {
    "name": "مطار آكرون كانتون Akron Canton Regional Airport",
    "city": "كانتون Canton",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار كامبلتاون Campbeltown Airport",
    "city": "كامبلتاون Campbeltown",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار باييون Baiyun Airport",
    "city": "غوانغتشو Guangzhou",
    "country": "الصين China"
  },
  {
    "name": "مطار كاب هايتيين Cap Haitien Airport",
    "city": "كاب هايتيين Cap-Haïtien",
    "country": "هايتي Haiti"
  },
  {
    "name": "مطار كارلايل Carlisle Airport",
    "city": "كارلايل Carlisle",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار روشامبو Rochambeau",
    "city": "كايين Cayenne",
    "country": "غويانا الفرنسية French Guiana"
  },
  {
    "name": "مطار كوبر Cobar Airport",
    "city": "كانبيليغو Canbelego",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار خورخي ويلستيمان Jorge Wilsterman Airport",
    "city": "كوتشابامبا Cochabamba",
    "country": "بوليفيا Bolivia"
  },
  {
    "name": "مطار كامبريدج Cambridge Airport",
    "city": "كامبريدج Cambridge",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "مطار بشار Bechar Airport",
    "city": "بشار Bechar",
    "country": "الجزائر Algeria"
  },
  {
    "name": "مطار كوتاباتو Cotabato Airport",
    "city": "سلطان قدرات Sultan Kudarat",
    "country": "الفلبين Philippines"
  },
  {
    "name": "مطار كاليبار Calabar Airport",
    "city": "دوك تاون Duke Town",
    "country": "نيجيريا Nigeria"
  },
  {
    "name": "مطار كانبيرا الدولي Canberra International Airport",
    "city": "كانبيرا Canberra",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار أنغولا Angola",
    "city": "كاتومبيلا Catumbela",
    "country": "أنغولا Angola"
  },
  {
    "name": "مطار كوبا Cuba",
    "city": "كايو كويو Cayo Coco",
    "country": "كوبا Cuba"
  },
  {
    "name": "مطار سلفازا Salvaza Airport",
    "city": "كاركاسون Carcassonne",
    "country": "فرنسا France"
  },
  {
    "name": "مطار كوزيكود Kozhikode Airport",
    "city": "بالليكال Pallikkal",
    "country": "الهند India"
  },
  {
    "name": "مطار كوكوس Cocos Airport",
    "city": "ويست آيلاند West Island",
    "country": "جزر كوكوس (كيلينغ) Cocos (Keeling) Islands"
  },
  {
    "name": "مطار كريسيما Criciuma Airport",
    "city": "فوركيليها Forquilhinha",
    "country": "البرازيل Brazil"
  },
  {
    "name": "مطار كاريل سور Carriel Sur International Airport",
    "city": "هوالبينسيلو Hualpencillo",
    "country": "شيلي Chile"
  },
  {
    "name": "مطار سيمون بوليفار Simon Bolivar International Airport",
    "city": "كاتيا لا مار Catia la Mar",
    "country": "فنزويلا Venezuela"
  },
  {
    "name": "مطار نيتاجي سوبهاس تشاندرا بوس Netaji Subhash Chandra Bose International Airport",
    "city": "كولكاتا Kolkata",
    "country": "الهند India"
  },
  {
    "name": "مطار فانواتو Vanuatu",
    "city": "كريغ كوف Craig Cove",
    "country": "فانواتو Vanuatu"
  },
  {
    "name": "مطار تشوب كاي Chub Cay Airport",
    "city": "تشوب كاي Chub Cay",
    "country": "الباهاماس Bahamas"
  },
  {
    "name": "مطار كولد باي Cold Bay Airport",
    "city": "كولد باي Cold Bay",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار سيدار سيتي Cedar City Municipal Airport",
    "city": "سيدار سيتي Cedar City",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار شارل ديغول Charles de Gaulle International Airport",
    "city": "لو ميسنيل أميليوت Le Mesnil-Amelot",
    "country": "فرنسا France"
  },
  {
    "name": "مطار تشادرون Chadron Municipal Airport",
    "city": "تشادرون Chadron",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار ميرل ك مدهول سميث Merle K Mudhole Smith Airport",
    "city": "كوردوفا Cordova",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار مقاطعة إسيكس Essex County Airport",
    "city": "فيرفيلد Fairfield",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار لاهوغ Lahug Airport",
    "city": "سيبو Cebu",
    "country": "الفلبين Philippines"
  },
  {
    "name": "مطار جاك مكنمارا فيلد Jack Mcnamara Field Airport",
    "city": "كريسنت سيتي Crescent City",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "مطار سيدونا Ceduna Airport",
    "city": "سيدونا Ceduna",
    "country": "أستراليا Australia"
  },
  {
    "name": "مطار تشيريبوفيتس Cherepovets Airport",
    "city": "تشيريبوفيتس Cherepovets",
    "country": "روسيا Russia"
  },
  {
    "name": "مطار هاواردن Hawarden Airport",
    "city": "تشستر Chester",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "Chiang Rai Airport",
    "city": "شيانغ راي Chiang Rai",
    "country": "تايلاند Thailand"
  },
  {
    "name": "Chelyabinsk Balandino Airport",
    "city": "زلاتوست Zlatoust",
    "country": "روسيا Russia"
  },
  {
    "name": "Central Airport",
    "city": "سيركل Circle",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Ciudad Obregón Airport",
    "city": "سيوداد أوبريغون Ciudad Obregón",
    "country": "المكسيك Mexico"
  },
  {
    "name": "Cortez-Montezuma County Airport",
    "city": "كورتيز Cortez",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Cacador Airport",
    "city": "كاشادور Caçador",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Aulnat Airport",
    "city": "أولنات Aulnat",
    "country": "فرنسا France"
  },
  {
    "name": "Abou Bakr Belkaid",
    "city": "شلف Chlef",
    "country": "الجزائر Algeria"
  },
  {
    "name": "Carrickfin Airport",
    "city": "مولاغداف Mullaghduff",
    "country": "أيرلندا Ireland"
  },
  {
    "name": "Carpiquet Airport",
    "city": "كاربكيت Carpiquet",
    "country": "فرنسا France"
  },
  {
    "name": "Coffs Harbour Airport",
    "city": "كوفز هاربر Coffs Harbour",
    "country": "أستراليا Australia"
  },
  {
    "name": "Kerkira Airport",
    "city": "كوركيرا Corcyra",
    "country": "اليونان Greece"
  },
  {
    "name": "Craig Seaplane Base",
    "city": "كريغ Craig",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Marechal Rondon International Airport",
    "city": "كويابا Cuiabá",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Changde Airport",
    "city": "تشانغدي Changde",
    "country": "الصين China"
  },
  {
    "name": "Congonhas International Airport",
    "city": "ساو باولو São Paulo",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Cape Girardeau Municipal Airport",
    "city": "سكوت سيتي Scott City",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Jakarta International Airport",
    "city": "تانغرانغ Tangerang",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "Camiguin Airport",
    "city": "كاميغوين Camiguin",
    "country": "الفلبين Philippines"
  },
  {
    "name": "Cologne Bonn Airport",
    "city": "كولونيا Cologne",
    "country": "ألمانيا Germany"
  },
  {
    "name": "Zhengzhou Airport",
    "city": "تشنغتشو Zhengzhou",
    "country": "الصين China"
  },
  {
    "name": "Chittagong Airport",
    "city": "تشيتاجونغ Chittagong",
    "country": "بنغلاديش Bangladesh"
  },
  {
    "name": "Dafang Shen Airport",
    "city": "تشangchun Changchun",
    "country": "الصين China"
  },
  {
    "name": "Campo Grande International Airport",
    "city": "كامبو غراندي Campo Grande",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Cagayan de Oro Airport",
    "city": "كاجايان دي أورو Cagayan de Oro",
    "country": "الفلبين Philippines"
  },
  {
    "name": "Chattanooga Metropolitan Airport",
    "city": "تشاتانوغا Chattanooga",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Christchurch International Airport",
    "city": "كرايستشيرش Christchurch",
    "country": "نيوزيلندا New Zealand"
  },
  {
    "name": "Charlottesville Albemarle Airport",
    "city": "تشارلوتسفيل Charlottesville",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Souda Airport",
    "city": "سودا Souda",
    "country": "اليونان Greece"
  },
  {
    "name": "Charleston International Airport",
    "city": "شارلستون Charleston",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Karewa",
    "city": "تشاتام آيلاند Chatham Island",
    "country": "نيوزيلندا New Zealand"
  },
  {
    "name": "Chuathbaluk",
    "city": "تشواتبالوك Chuathbaluk",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Choiseul Bay",
    "city": "خليج تشويسول Choiseul Bay",
    "country": "جزر سليمان Solomon Islands"
  },
  {
    "name": "Ciampino Airport",
    "city": "روما Rome",
    "country": "إيطاليا Italy"
  },
  {
    "name": "Chico Municipal Airport",
    "city": "تشيكو Chico",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Cedar Rapids Municipal Airport",
    "city": "سيدار رابيدز Cedar Rapids",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Chifeng",
    "city": "تشي feng Chifeng",
    "country": "الصين China"
  },
  {
    "name": "Changzhi",
    "city": "تشانغ تشي Changzhi",
    "country": "الصين China"
  },
  {
    "name": "E. Beltram Airport",
    "city": "كوبخا Cobija",
    "country": "بوليفيا Bolivia"
  },
  {
    "name": "Chalkyitsik Airport",
    "city": "تشالكيتسكي Chalkyitsik",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "",
    "city": "شيباتا Chipata",
    "country": "زامبيا Zambia"
  },
  {
    "name": "",
    "city": "شيمكنت Shimkent",
    "country": "كازاخستان Kazakhstan"
  },
  {
    "name": "Chippewa County International Airport",
    "city": "كينشول Kincheloe",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Canouan Airport",
    "city": "جزيرة كانوان Canouan Island",
    "country": "سانت فنسنت وجزر غرينادين Saint Vincent and the Grenadines"
  },
  {
    "name": "Cap J A Quinones Gonzales Airport",
    "city": "شيكلايو Chiclayo",
    "country": "بيرو Peru"
  },
  {
    "name": "Maj Gen Fap A R Iglesias Airport",
    "city": "كاجاماركا Cajamarca",
    "country": "بيرو Peru"
  },
  {
    "name": "Peelamedu Airport",
    "city": "كويمباتور Coimbatore",
    "country": "الهند India"
  },
  {
    "name": "El Loa Airport",
    "city": "كالاما Calama",
    "country": "شيلي Chile"
  },
  {
    "name": "Cheongju International Airport",
    "city": "نايسو-أوب Naesu-Eup",
    "country": "كوريا الجنوبية South Korea"
  },
  {
    "name": "Chitral Airport",
    "city": "شترال Chitral",
    "country": "باكستان Pakistan"
  },
  {
    "name": "Ciudad Juarez International Airport",
    "city": "سيوداد خواريز Ciudad Juarez",
    "country": "المكسيك Mexico"
  },
  {
    "name": "Cheju International Airport",
    "city": "جيجو-سي Jeju-Si",
    "country": "كوريا الجنوبية South Korea"
  },
  {
    "name": "Benedum Airport",
    "city": "كلاركسبرغ Clarksburg",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Crooked Creek Airport",
    "city": "أنيك Aniak",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Chongqing Jiangbei International",
    "city": "تشونغتشينغ Chongqing",
    "country": "الصين China"
  },
  {
    "name": "Russia",
    "city": "تشوكورداه Chokurdah",
    "country": "روسيا Russia"
  },
  {
    "name": "Carajas Airport",
    "city": "كاراجاس Carajas",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Chicken Airport",
    "city": "توك Tok",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Conakry Airport",
    "city": "كوناكري Conakry",
    "country": "غينيا Guinea"
  },
  {
    "name": "Abydus",
    "city": "تشاناكالي Canakkale",
    "country": "تركيا Turkey"
  },
  {
    "name": "Mcclellan Palomar Airport",
    "city": "كارلسباد Carlsbad",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Hopkins International Airport",
    "city": "كليفلاند Cleveland",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Someseni Airport",
    "city": "كلاوج Cluj",
    "country": "رومانيا Romania"
  },
  {
    "name": "Easterwood Field Airport",
    "city": "كوليدج ستيشن College Station",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "William R Fairchild International Airport",
    "city": "بورت أنجيليس Port Angeles",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Alfonso Bonilla Aragon International Airport",
    "city": "أوباندو Obando",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "Clarks Point Airport",
    "city": "كلاركس بوينت Clarks Point",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Colima Airport",
    "city": "كواوتيموك Cuauhtémoc",
    "country": "المكسيك Mexico"
  },
  {
    "name": "Douglas International Airport",
    "city": "شارلوت Charlotte",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Ste Catherine Airport",
    "city": "كالينزانا Calenzana",
    "country": "فرنسا France"
  },
  {
    "name": "Cunnamulla",
    "city": "Cunnamulla",
    "country": "أستراليا Australia"
  },
  {
    "name": "Katunayake International Airport",
    "city": "غامبها Gampaha",
    "country": "سريلانكا Sri Lanka"
  },
  {
    "name": "Ciudad del Carmen Airport",
    "city": "كارمن أولورون Carmen Olorón",
    "country": "المكسيك Mexico"
  },
  {
    "name": "Aix les Bains Airport",
    "city": "لا موت La Motte",
    "country": "فرنسا France"
  },
  {
    "name": "Corumba International Airport",
    "city": "كورومبا Corumba",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Port Columbus International Airport",
    "city": "كولومبوس Columbus",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "University of Illinois-Willard Airport",
    "city": "سافوي Savoy",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Mohamed V Airport",
    "city": "كازابلانكا Casablanca",
    "country": "المغرب Morocco"
  },
  {
    "name": "Chimbu Airport",
    "city": "كونديوا Kundiawa",
    "country": "بابوا غينيا الجديدة Papua New Guinea"
  },
  {
    "name": "Ignacio Agramonte Airport",
    "city": "كاماغوي Camagüey",
    "country": "كوبا Cuba"
  },
  {
    "name": "Houghton County Memorial Airport",
    "city": "هانكوك Hancock",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Coonamble Airport",
    "city": "كونامبل Coonamble",
    "country": "أستراليا Australia"
  },
  {
    "name": "Australia",
    "city": "جزيرة جوز الهند Coconut Island",
    "country": "أستراليا Australia"
  },
  {
    "name": "Constanta Mihail Kogalniceanu Airport",
    "city": "كوستينجي Kustenje",
    "country": "رومانيا Romania"
  },
  {
    "name": "Tancredo Neves International Airport",
    "city": "كونفينس Confins",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Cloncurry Aerodrome",
    "city": "كلونكوري Cloncurry",
    "country": "أستراليا Australia"
  },
  {
    "name": "Cavern City Air Terminal Airport",
    "city": "كارلسباد Carlsbad",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Neerlerit Inaat",
    "city": "نييرليريت إينات Neerlerit Inaat",
    "country": "غرينلاند Greenland"
  },
  {
    "name": "Corrientes Airport",
    "city": "كورينتس Corrientes",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "Cairns International Airport",
    "city": "كيرنز Cairns",
    "country": "أستراليا Australia"
  },
  {
    "name": "Chiang Mai International Airport",
    "city": "شيانغ ماي Chiang Mai",
    "country": "تايلاند Thailand"
  },
  {
    "name": "Canyonlands Field Airport",
    "city": "ثومبسون Thompson",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Yellowstone Regional Airport",
    "city": "Cody/Yellowstone",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Kochi Airport",
    "city": "Kochi",
    "country": "الهند India"
  },
  {
    "name": "Coll Island Airport",
    "city": "Isle of coll",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "Cotonou Cadjehon Airport",
    "city": "Cotonou",
    "country": "بينين Benin"
  },
  {
    "name": "Choybalsan Northeast Airport",
    "city": "Choibalsan",
    "country": "منغوليا Mongolia"
  },
  {
    "name": "Ingeniero Ambrosio L.V. Taravella International",
    "city": "Cordoba",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "City of Colorado Springs Municipal Airport",
    "city": "Colorado Springs",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Columbia Regional Airport",
    "city": "Columbia",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Chapelco Airport",
    "city": "San Martin DeLos Andes",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "Coober Pedy Aerodrome",
    "city": "Coober Pedy",
    "country": "أستراليا Australia"
  },
  {
    "name": "Ignacio Alberto Acuna Ongay Airport",
    "city": "Campeche",
    "country": "المكسيك Mexico"
  },
  {
    "name": "Copenhagen Airport",
    "city": "Kastrup",
    "country": "الدنمارك Denmark"
  },
  {
    "name": "Chamonate Airport",
    "city": "Copiapó",
    "country": "شيلي Chile"
  },
  {
    "name": "Campinas International Airport",
    "city": "Campinas",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Natrona County International Airport",
    "city": "Casper",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "D F Malan Airport",
    "city": "Cape Town",
    "country": "جنوب أفريقيا South Africa"
  },
  {
    "name": "Presidente Joao Suassuna Airport",
    "city": "Campina Grande",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Culebra Airport",
    "city": "Culebra",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Shahre-Kord",
    "city": "Shahre-Kord",
    "country": "إيران Iran"
  },
  {
    "name": "Craiova Airport",
    "city": "Croiova",
    "country": "رومانيا Romania"
  },
  {
    "name": "General Enrique Mosconi Airport",
    "city": "Comodoro Rivadavia",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "Colonel Hill Airport",
    "city": "Colonel Hill",
    "country": "الباهاماس Bahamas"
  },
  {
    "name": "Clark Field Airport",
    "city": "Mabalacat",
    "country": "الفلبين Philippines"
  },
  {
    "name": "Gosselies Airport",
    "city": "Charleroi",
    "country": "بلجيكا Belgium"
  },
  {
    "name": "Catarman Airport",
    "city": "Catarman",
    "country": "الفلبين Philippines"
  },
  {
    "name": "Corpus Christi International Airport",
    "city": "Corpus Christi",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Yeager Airport",
    "city": "Charleston",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Isle Of Colonsay",
    "city": "Isle Of Colonsay",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "Columbus Metropolitan Airport",
    "city": "Columbus",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Solovky",
    "city": "Solovetsky",
    "country": "الاتحاد الروسي Russian Federation"
  },
  {
    "name": "Dubbo Airport مطار دابو",
    "city": "دابو Dubbo",
    "country": "أستراليا Australia"
  },
  {
    "name": "Dubuque Regional Airport مطار دوبوك الإقليمي",
    "city": "دوبوك Dubuque",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Dubrovnik Airport مطار دوبروفنيك",
    "city": "دوبروفنيك Dubrovnik",
    "country": "كرواتيا Croatia"
  },
  {
    "name": "Washington National Airport مطار واشنطن الوطني",
    "city": "أرلينغتون Arlington",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Cane Field Airport مطار كان فيلد",
    "city": "بورتسموث Portsmouth",
    "country": "دومينيكا Dominica"
  },
  {
    "name": "Mazamet Airport مطار مازاميت",
    "city": "لابروغيير Labruguière",
    "country": "فرنسا France"
  },
  {
    "name": "Dodge City Regional Airport مطار مدينة دودج الإقليمي",
    "city": "مدينة دودج Dodge City",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Dandong Airport مطار داندونغ",
    "city": "داندونغ Dandong",
    "country": "الصين China"
  },
  {
    "name": "Dera Ghazi Khan Airport مطار ديرا غازي خان",
    "city": "ديرا غازي خان Dera Ghazi Khan",
    "country": "باكستان Pakistan"
  },
  {
    "name": "Decatur Airport مطار ديكاتور",
    "city": "ديكاتور Decatur",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Dehra Dun مطار دهرادون",
    "city": "Dehra Dun ديهرادون",
    "country": "الهند India"
  },
  {
    "name": "Dezful Airport مطار دزفول",
    "city": "Dezful دزفول",
    "country": "إيران Iran"
  },
  {
    "name": "Indira Gandhi International Airport مطار إنديرا غاندي الدولي",
    "city": "New Delhi نيو دلهي",
    "country": "الهند India"
  },
  {
    "name": "Denver International Airport مطار دنفر الدولي",
    "city": "Denver دنفر",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Deir Zzor Airport مطار دير الزور",
    "city": "Dayr az Zawr دير الزور",
    "country": "سوريا Syria"
  },
  {
    "name": "Fort Worth International Airport مطار فورت وورث الدولي",
    "city": "Dallas دالاس",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Dangriga Airport مطار دانغريغا",
    "city": "Dangriga دانغريغا",
    "country": "بليز Belize"
  },
  {
    "name": "Mudgee Aerodrome مطار مادي",
    "city": "Apple Tree Flat أبل تري فلات",
    "country": "أستراليا Australia"
  },
  {
    "name": "Dongguan مطار دونغقوان",
    "city": "Dongguan دونغقوان",
    "country": "الصين China"
  },
  {
    "name": "Durango Airport مطار دورانغو",
    "city": "Durango دورانغو",
    "country": "المكسيك Mexico"
  },
  {
    "name": "Dumaguete Airport مطار دوماغويتي",
    "city": "Sibulan سيبولان",
    "country": "الفلبين Philippines"
  },
  {
    "name": "Gaggal Airport مطار جاجال",
    "city": "Dharamsala دارامسالا",
    "country": "الهند India"
  },
  {
    "name": "Dothan Airport مطار داثان",
    "city": "Dothan داثان",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Mohanbari Airport مطار موهانباري",
    "city": "Dikhari ديخاري",
    "country": "الهند India"
  },
  {
    "name": "Antsiranana Arrachart Airport مطار أنتسيرانا",
    "city": "Antseranana أنتسيرانا",
    "country": "مدغشقر Madagascar"
  },
  {
    "name": "Diqing مطار ديكينغ",
    "city": "Diqing ديكينغ",
    "country": "الصين China"
  },
  {
    "name": "Dickinson Municipal Airport مطار ديكنسون البلدي",
    "city": "Dickinson ديكنسون",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Comoro مطار كومورو",
    "city": "Dili ديلي",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "Dien Bien مطار دين بيان",
    "city": "Dien Bien Phu دين بيان فو",
    "country": "فيتنام Vietnam"
  },
  {
    "name": "Aba Tenna Dejazmatch Yilma Airport مطار آبا تينا ديجازماتش ييلما",
    "city": "Dire Dawa دير داوا",
    "country": "إثيوبيا Ethiopia"
  },
  {
    "name": "Loubomo مطار لووبومو",
    "city": "Loubomo لووبومو",
    "country": "الكونغو Congo"
  },
  {
    "name": "Diu Airport مطار ديو",
    "city": "Diu ديو",
    "country": "الهند India"
  },
  {
    "name": "Diyarbakir Airport مطار ديار بكر",
    "city": "Diyaribakir ديار بكر",
    "country": "تركيا Turkey"
  },
  {
    "name": "Sultan Taha Airport مطار السلطان طه",
    "city": "Jambi جامبي",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "Zarzis Airport مطار زارزيس",
    "city": "Hawmat as Suq حومة السوق",
    "country": "تونس Tunisia"
  },
  {
    "name": "Tiska Airport مطار تيكا",
    "city": "Illizi إليزي",
    "country": "الجزائر Algeria"
  },
  {
    "name": "Sentani Airport مطار سينتاني",
    "city": "Jayapura جايا بور",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "Dakar Yoff Airport مطار داكار يوف",
    "city": "Ngor نغور",
    "country": "السنغال Senegal"
  },
  {
    "name": "Douala Airport مطار دوالا",
    "city": "Douala دوالا",
    "country": "الكاميرون Cameroon"
  },
  {
    "name": "Chou Shui Tzu Airport مطار تشو شواي تسو",
    "city": "Dalian داليان",
    "country": "الصين China"
  },
  {
    "name": "Dillingham Municipal Airport مطار ديلينغهام",
    "city": "Dillingham ديلينغهام",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Duluth International Airport مطار دولوث الدولي",
    "city": "Duluth دولوث",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Lien Khuong Airport مطار ليين كوهونغ",
    "city": "Lam Dong لام دونغ",
    "country": "فيتنام Vietnam"
  },
  {
    "name": "Dalaman Airport مطار دالامان",
    "city": "Ortaca أورطاشا",
    "country": "تركيا Turkey"
  },
  {
    "name": "Dali مطار دالي",
    "city": "Dali City مدينة دالي",
    "country": "الصين China"
  },
  {
    "name": "Vanuatu مطار فanuatu",
    "city": "Dillons Bay خليج ديلونز",
    "country": "فanuatu"
  },
  {
    "name": "Dalanzadgad مطار دالانزادغاد",
    "city": "Dalanzadgad دالانزادغاد",
    "country": "منغوليا Mongolia"
  },
  {
    "name": "Doomadgee مطار دومادجي",
    "city": "Doomadgee دومادجي",
    "country": "أستراليا Australia"
  },
  {
    "name": "Domodedovo Airport مطار دوموديدوفو",
    "city": "Podol'sk بودولسْك",
    "country": "روسيا Russia"
  },
  {
    "name": "Don Mueang مطار دون موانغ",
    "city": "Don Muang دون موانغ",
    "country": "تايلاند Thailand"
  },
  {
    "name": "King Fahd International Airport مطار الملك فهد الدولي",
    "city": "Khuwaylidiyah خُوالديّة",
    "country": "السعودية Saudi Arabia"
  },
  {
    "name": "Dimapur Airport مطار ديمابور",
    "city": "Dimapur ديمابور",
    "country": "الهند India"
  },
  {
    "name": "Dundee Airport مطار دندي",
    "city": "Dundee دندي",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "Dunhuang مطار دونغوانغ",
    "city": "Dunhuang دونغوانغ",
    "country": "الصين China"
  },
  {
    "name": "Voloskoye Airport مطار فولوسكوي",
    "city": "Dnipropetrovs'k دنيبروبتروفسك",
    "country": "أوكرانيا Ukraine"
  },
  {
    "name": "Pleurtuit Airport مطار بلورتي",
    "city": "Pleurtuit بلورتي",
    "country": "فرنسا France"
  },
  {
    "name": "Cardak Airport مطار كارداك",
    "city": "Denizli دينيزلي",
    "country": "تركيا Turkey"
  },
  {
    "name": "Dongola Airport مطار دنقلا",
    "city": "Dongola دنقلا",
    "country": "السودان Sudan"
  },
  {
    "name": "Doha International Airport مطار الدوحة الدولي",
    "city": "Doha الدوحة",
    "country": "قطر Qatar"
  },
  {
    "name": "Donetsk Airport مطار دونيتسك",
    "city": "Donets'k دونيتسْك",
    "country": "أوكرانيا Ukraine"
  },
  {
    "name": "Melville Hall Airport مطار هول ملڤيل",
    "city": "Marigot ماريغوت",
    "country": "دومينيكا Dominica"
  },
  {
    "name": "Nepal مطار نيبال",
    "city": "Dolpa دولبا",
    "country": "نيبال Nepal"
  },
  {
    "name": "Dourados Airport مطار دورادوس",
    "city": "Dourados دورادوس",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Dongying مطار دونغيينغ",
    "city": "Dongying دونغيينغ",
    "country": "الصين China"
  },
  {
    "name": "Dipolog Airport مطار ديبولوج",
    "city": "Polanco بولانكو",
    "country": "الفلبين Philippines"
  },
  {
    "name": "Devonport Airport مطار ديفونبورت",
    "city": "Devonport ديفونبورت",
    "country": "أستراليا Australia"
  },
  {
    "name": "Bali International Airport مطار بالي الدولي",
    "city": "Denpasar دينباسار",
    "country": "إندونيسيا Indonesia"
  },
  {
    "name": "Deering Airport مطار ديرينغ",
    "city": "Deering ديرينغ",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Durango la Plata County Airport مطار دورانغو لا بلاتا",
    "city": "Durango دورانغو",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Ottendorf Okrilla Highway Strip Airport مطار أوتندورف أوكريلا",
    "city": "Ottendorf-Okrilla أوتندورف-أوكريلا",
    "country": "Germany ألمانيا"
  },
  {
    "name": "Del Rio International Airport مطار ديل ريو الدولي",
    "city": "Del Rio ديل ريو",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Darwin International Airport مطار داروين الدولي",
    "city": "Darwin داروين",
    "country": "Australia أستراليا"
  },
  {
    "name": "Sheffield Airport مطار شيفيلد",
    "city": "Doncaster Sheffield دونكاستر شيفيلد",
    "country": "United Kingdom المملكة المتحدة"
  },
  {
    "name": "Des Moines International Airport مطار ديس موينز الدولي",
    "city": "Des Moines ديس موينز",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Dongsheng Airport مطار دونغشينغ",
    "city": "Dongsheng دونغشينغ",
    "country": "China الصين"
  },
  {
    "name": "Dortmund Airport مطار دورتموند",
    "city": "Dortmund دورتموند",
    "country": "Germany ألمانيا"
  },
  {
    "name": "Detroit Metropolitan Wayne County Airport مطار ديترويت ميتروبوليتان وين كاونتي",
    "city": "Detroit ديترويت",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Dublin Airport مطار دبلن",
    "city": "Cloghran كلوجران",
    "country": "Ireland أيرلندا"
  },
  {
    "name": "Dunedin Airport مطار دنيدن",
    "city": "Outram أوترام",
    "country": "New Zealand نيوزيلندا"
  },
  {
    "name": "Dundo Airport مطار دundo",
    "city": "Dundo دundo",
    "country": "Angola أنغولا"
  },
  {
    "name": "Du Bois Jefferson County Airport مطار دو بواي جيفرسون كاونتي",
    "city": "Reynoldsville رينولدسفيل",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Duncan-Quamichan Lake Airport مطار دونكان-كواميشان",
    "city": "Duncan دونكان",
    "country": "Canada كندا"
  },
  {
    "name": "Louis Botha Airport مطار لويس بوثا",
    "city": "Durban دوربان",
    "country": "South Africa جنوب أفريقيا"
  },
  {
    "name": "Dusseldorf International Airport مطار دوسلدورف الدولي",
    "city": "Dusseldorf دوسلدورف",
    "country": "Germany ألمانيا"
  },
  {
    "name": "Unalaska Airport مطار أونالاسكا",
    "city": "Unalaska أونالاسكا",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Devils Lake Municipal Airport مطار ديفلز ليك",
    "city": "Devils Lake ديفلز ليك",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Francisco Bangoy International Airport مطار فرانسيسكو بانغوي الدولي",
    "city": "Davao City مدينة دافاو",
    "country": "Philippines الفلبين"
  },
  {
    "name": "Soalala مطار سؤالا",
    "city": "Soalala سؤالا",
    "country": "Madagascar مدغشقر"
  },
  {
    "name": "Saudi Arabia مطار السعودية",
    "city": "Dawadmi ديوادمي",
    "country": "Saudi Arabia السعودية"
  },
  {
    "name": "Dubai International Airport مطار دبي الدولي",
    "city": "Dubai دبي",
    "country": "United Arab Emirates الإمارات العربية المتحدة"
  },
  {
    "name": "Dayong مطار دايونغ",
    "city": "Dayong دايونغ",
    "country": "China الصين"
  },
  {
    "name": "Anadyr-Ugolnyye Kopi Airport مطار أنادير-أوغولنيي كويبي",
    "city": "Anadyr' أنادير",
    "country": "Russia روسيا"
  },
  {
    "name": "Tajikistan مطار طاجيكستان",
    "city": "Dushanbe دوشنبه",
    "country": "Tajikistan طاجيكستان"
  },
  {
    "name": "Dzaoudzi Pamanzi Airport مطار دزاودزي بامانزي",
    "city": "Mamoudzou مامودزو",
    "country": "Mayotte مايوت"
  },
  {
    "name": "Dzhezkazgan South Airport مطار جيزكازجان الجنوبي",
    "city": "Zhezqazghan جيزكازغان",
    "country": "Kazakhstan كازاخستان"
  },
  {
    "name": "Eagle Airport مطار إيغل",
    "city": "Tok توك",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Vanuatu مطار فanuatu",
    "city": "Emae إيميه",
    "country": "Vanuatu فanuatu"
  },
  {
    "name": "Esbjerg Airport مطار إسبيرغ",
    "city": "Esbjerg إسبيرغ",
    "country": "الدنمارك Denmark"
  },
  {
    "name": "Erbil مطار أربيل",
    "city": "Erbil أربيل",
    "country": "العراق Iraq"
  },
  {
    "name": "Ercan Airport مطار إركان",
    "city": "Nicosia نيقوسيا",
    "country": "قبرص Cyprus"
  },
  {
    "name": "Edna Bay Seaplane Base مطار إدنا باي البحري",
    "city": "Ketchikan كيتشيكان",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Edinburgh International Airport مطار إدنبرة الدولي",
    "city": "Edinburgh إدنبرة",
    "country": "المملكة المتحدة United Kingdom"
  },
  {
    "name": "Eldoret Airport مطار إلدوريت",
    "city": "Nakuru ناكورو",
    "country": "كينيا Kenya"
  },
  {
    "name": "Edremit-Korfez Airport مطار إدرميت كوريز",
    "city": "Edremit إدرميت",
    "country": "تركيا Turkey"
  },
  {
    "name": "Edward River مطار إدوارد ريفر",
    "city": "Edward River إدوارد ريفر",
    "country": "أستراليا Australia"
  },
  {
    "name": "Eek Airport مطار إيك",
    "city": "Eek إيك",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Kefallinia Airport مطار كيفالينيا",
    "city": "Dhilianata ذيلياناتا",
    "country": "اليونان Greece"
  },
  {
    "name": "Bergerac-Roumaniere Airport مطار بيرجراك-رومانير",
    "city": "Bergerac بيرجراك",
    "country": "فرنسا France"
  },
  {
    "name": "Eagle County Regional Airport مطار إيغلي كاونتي الإقليمي",
    "city": "Gypsum جيسم",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Geneina مطار جينيينا",
    "city": "Geneina جينيينا",
    "country": "السودان Sudan"
  },
  {
    "name": "Belgorod North Airport مطار بلغورود الشمالي",
    "city": "Belgorod بلغورود",
    "country": "روسيا Russia"
  },
  {
    "name": "Egilsstadir Airport مطار إيغيلستادير",
    "city": "Egilsstadir إيغيلستادير",
    "country": "أيسلندا Iceland"
  },
  {
    "name": "Eagle River Union Airport مطار اتحاد إيغلي ريفر",
    "city": "Eagle River إيغلي ريفر",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Egegik Airport مطار إيجك",
    "city": "Egegik إيجك",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Haina Airport مطار هاينا",
    "city": "Eisenach آيزيناخ",
    "country": "Germany ألمانيا"
  },
  {
    "name": "Russia روسيا",
    "city": "Eniseysk إينيسيسك",
    "country": "Russia روسيا"
  },
  {
    "name": "مطار غير متوفر",
    "city": "Tonsberg تونسبيرغ",
    "country": "Norway النرويج"
  },
  {
    "name": "Eindhoven Airport مطار أيندهوفن",
    "city": "Eindhoven أيندهوفن",
    "country": "Netherlands هولندا"
  },
  {
    "name": "Beef Island-Roadtown Airport مطار بيف آيلاند-رودتاون",
    "city": "Beef Island جزيرة بيف",
    "country": "British Virgin Islands جزر العذراء البريطانية"
  },
  {
    "name": "Yariguies Airport مطار ياريغويز",
    "city": "Barrancabermeja بارانكابيرمخا",
    "country": "Colombia كولومبيا"
  },
  {
    "name": "Wejh Airport مطار وجه",
    "city": "Wedjh وجه",
    "country": "Saudi Arabia السعودية"
  },
  {
    "name": "Elko Municipal Airport-J C Harris Field مطار إلكو البلدي - جي سي هاريس فيلد",
    "city": "Elko إلكو",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Ennis Big Sky Airport مطار إينيس بيغ سكاي",
    "city": "غير متوفر",
    "country": "غير متوفر"
  },
  {
    "name": "Elcho Island Airport مطار إلكو آيلاند",
    "city": "Darwin داروين",
    "country": "Australia أستراليا"
  },
  {
    "name": "مطار غير متوفر",
    "city": "El Fasher الفاشر",
    "country": "Sudan السودان"
  },
  {
    "name": "El Golea Airport مطار الجولاء",
    "city": "El Golea الجولاء",
    "country": "Algeria الجزائر"
  },
  {
    "name": "North Eleuthera Airport مطار نورث إليوثيرا",
    "city": "The Bluff البلَف",
    "country": "Bahamas البهاماس"
  },
  {
    "name": "Elim Airport مطار إليم",
    "city": "Elim إليم",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Elmira Corning Regional Airport مطار إلميرا كورنينغ الإقليمي",
    "city": "Horseheads هورس هيدز",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "El Paso International Airport مطار إل باسو الدولي",
    "city": "El Paso إل باسو",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Gassim Airport مطار القصيم",
    "city": "Al Qara' القرى",
    "country": "Saudi Arabia السعودية"
  },
  {
    "name": "Ben Schoeman Airport مطار بن شومان",
    "city": "East London شرق لندن",
    "country": "South Africa جنوب أفريقيا"
  },
  {
    "name": "Guemar Airport مطار غومار",
    "city": "El Oued الواحة",
    "country": "Algeria الجزائر"
  },
  {
    "name": "Elfin Cove Airport مطار إلفين كوف",
    "city": "Elfin Cove إلفين كوف",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Yelland Field Airport مطار ييلاند فيلد",
    "city": "Ely إلي",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "East Midlands International Airport مطار شرق ميدلاندز الدولي",
    "city": "Derby ديربي",
    "country": "United Kingdom المملكة المتحدة"
  },
  {
    "name": "Emerald Aerodrome مطار إيميرالد",
    "city": "Emerald إيميرالد",
    "country": "Australia أستراليا"
  },
  {
    "name": "Emden Airport مطار إمدن",
    "city": "Emden إمدن",
    "country": "Germany ألمانيا"
  },
  {
    "name": "Emmonak Airport مطار إيموناك",
    "city": "Alakanuk ألاكناك",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Kenai Municipal Airport مطار كيناي البلدي",
    "city": "Kenai كيناي",
    "country": "United States الولايات المتحدة"
  },
  {
    "name": "Ende Airport مطار إندي",
    "city": "Ende إندي",
    "country": "Indonesia إندونيسيا"
  },
  {
    "name": "Enontekio Airport مطار إينونتيكيو",
    "city": "Leppäjärvi ليباجارفي",
    "country": "Finland فنلندا"
  },
  {
    "name": "Enshi Airport مطار إنشي",
    "city": "Enshi إنشي",
    "country": "الصين China"
  },
  {
    "name": "El Nido Airport مطار إل نيدو",
    "city": "El Nido إل نيدو",
    "country": "الفلبين Philippines"
  },
  {
    "name": "Enschede Twente مطار إنشخيده توينتي",
    "city": "Enschede إنشخيده",
    "country": "هولندا Netherlands"
  },
  {
    "name": "Enugu Airport مطار إنوجو",
    "city": "Enugu إنوجو",
    "country": "نيجيريا Nigeria"
  },
  {
    "name": "Kenosha Regional Airport مطار كينوشا الإقليمي",
    "city": "Kenosha كينوشا",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Yan'an Airport مطار يان'an",
    "city": "Yan'an يان'an",
    "country": "الصين China"
  },
  {
    "name": "Olaya Herrera Airport مطار أولايا هيريرا",
    "city": "Medellin ميديلين",
    "country": "كولومبيا Colombia"
  },
  {
    "name": "Elorza Airport مطار إلورزا",
    "city": "Elorza إلورزا",
    "country": "فنزويلا Venezuela"
  },
  {
    "name": "Esperance Aerodrome مطار إسبيرانس",
    "city": "Gibson غيبسون",
    "country": "أستراليا Australia"
  },
  {
    "name": "Esquel Airport مطار إيسكيل",
    "city": "Esquel إيسكيل",
    "country": "الأرجنتين Argentina"
  },
  {
    "name": "Erzincan Airport مطار إرزينجان",
    "city": "Erzincan إرزينجان",
    "country": "تركيا Turkey"
  },
  {
    "name": "Erfurt Airport مطار إرفورت",
    "city": "Erfurt إرفورت",
    "country": "ألمانيا Germany"
  },
  {
    "name": "Er Rachidia Airport مطار الرشيدية",
    "city": "Errachidia الرشيدية",
    "country": "المغرب Morocco"
  },
  {
    "name": "Erie International Airport مطار إيري الدولي",
    "city": "Erie إيري",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Comandante Kraemer Airport مطار كوماندانتي كرايمر",
    "city": "Erechim إيريشيم",
    "country": "البرازيل Brazil"
  },
  {
    "name": "Eros Airport مطار إيروس",
    "city": "Windhoek ويندهوك",
    "country": "ناميبيا Namibia"
  },
  {
    "name": "Erzurum Airport مطار إرزورم",
    "city": "Erzurum إرزورم",
    "country": "تركيا Turkey"
  },
  {
    "name": "Esenboga Airport مطار إيسنبوغا",
    "city": "Çubuk تشوبوك",
    "country": "تركيا Turkey"
  },
  {
    "name": "Delta County Airport مطار مقاطعة دلتا",
    "city": "Escanaba إسكندابا",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "Orcas Island Airport مطار جزيرة أوركاس",
    "city": "Eastsound إيستساوند",
    "country": "الولايات المتحدة United States"
  },
  {
    "name": "General Rivadeneira Airport مطار الجنرال ريفادينييرا",
    "city": "Tachina تاشينا",
    "country": "الإكوادور Ecuador"
  },
  {
    "name": "El Salvador Bajo Airport مطار إل سلفادور باخو",
    "city": "Diego de Almagro دييغو دي الماغرو",
    "country": "شيلي Chile"
  },
  {
    "name": "Essen-Mulheim Airport مطار إيسن-مولهايم",
    "city": "Mulheim-on-Ruhr ملهايم-على-الرور",
    "country": "ألمانيا Germany"
},
{
    "name": "Essaouira مطار الصويرة",
    "city": "Essaouira الصويرة",
    "country": "المغرب Morocco"
},
{
    "name": "J Hozman Airport مطار ج. حوزمان",
    "city": "Elat إيلات",
    "country": "إسرائيل Israel"
},
{
    "name": "Lorraine Airport مطار لورين",
    "city": "Verny فيرني",
    "country": "فرنسا France"
},
{
    "name": "Eua Island مطار جزيرة إوا",
    "city": "Eua إوا",
    "country": "تونغا Tonga"
},
{
    "name": "Mahlon Sweet Field Airport مطار مهلون سويت فيلد",
    "city": "Eugene يوجين",
    "country": "الولايات المتحدة United States"
},
{
    "name": "Wasbek Airport مطار وازبيك",
    "city": "Bordesholm بوردسولم",
    "country": "ألمانيا Germany"
},
{
    "name": "Hassan I مطار حسن الأول",
    "city": "Laayoune العيون",
    "country": "المغرب Morocco"
},
{
    "name": "St. Eustatius Airport مطار سانت أوستاتيوس",
    "city": "Oranjestad أورنجستاد",
    "country": "جزر الأنتيل الهولندية Netherlands Antilles"
},
{
    "name": "Evenes Airport مطار إيفينيس",
    "city": "Tarnstad تارنسداد",
    "country": "النرويج Norway"
},
{
    "name": "Sveg Airport مطار سفيغ",
    "city": "Sveg سفيغ",
    "country": "السويد Sweden"
},
{
    "name": "Yerevan-Parakar Airport مطار يريفان-باراكار",
    "city": "Yerevan يريفان",
    "country": "أرمينيا Armenia"
},
{
    "name": "Evansville Regional Airport مطار إيفانسفيل الإقليمي",
    "city": "Evansville إيفانسفيل",
    "country": "الولايات المتحدة United States"
},
{
    "name": "New Bedford Municipal Airport مطار نيو بدفورد البلدي",
    "city": "New Bedford نيو بدفورد",
    "country": "الولايات المتحدة United States"
},
{
    "name": "Wildman Lake مطار بحيرة وايلدمان",
    "city": "Wildman Lake بحيرة وايلدمان",
    "country": "الولايات المتحدة United States"
},
{
    "name": "Craven County Regional Airport مطار مقاطعة كرافن الإقليمي",
    "city": "New Bern نيو برن",
    "country": "الولايات المتحدة United States"
},
{
    "name": "Newark International Airport مطار نيوارك الدولي",
    "city": "Newark نيوارك",
    "country": "الولايات المتحدة United States"
},
{
    "name": "Exeter Airport مطار إكستر",
    "city": "Exeter إكستر",
    "country": "المملكة المتحدة United Kingdom"
},
{
    "name": "El Yopal Airport مطار إل يوبال",
    "city": "Yopal يوبال",
    "country": "كولومبيا Colombia"
},
{
    "name": "Key West International Airport مطار كي ويست الدولي",
    "city": "Key West كي ويست",
    "country": "الولايات المتحدة United States"
},
{
    "name": "Ministro Pistarini International Airport مطار مينسترو بيستاريني الدولي",
    "city": "Ezeiza إزيزا",
    "country": "الأرجنتين Argentina"
},
{
    "name": "Elazig Airport مطار إلازيغ",
    "city": "Elazığ إلازيغ",
    "country": "تركيا Turkey"
},
{
  "name": "Farnborough Airport مطار فارنبورو",
  "city": "Farnborough فارنبورو",
  "country": "المملكة المتحدة United Kingdom"
},
{
  "name": "Vagar Airport مطار فاغار",
  "city": "Faroe Islands جزر فارو",
  "country": "جزر فارو Faroe Islands"
},
{
  "name": "Fairbanks International Airport مطار فيربانكس الدولي",
  "city": "Fairbanks فيربانكس",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Faro Airport مطار فارو",
  "city": "Faro فارو",
  "country": "البرتغال Portugal"
},
{
  "name": "Hector International Airport مطار هيكتور الدولي",
  "city": "Fargo فارغو",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Fresno Yosemite International Airport مطار فريسنو يوسمايت الدولي",
  "city": "Fresno فريسنو",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Fakarava Airport مطار فاكارافا",
  "city": "Fakarava فاكارافا",
  "country": "بولينيزيا الفرنسية French Polynesia"
},
{
  "name": "Fayetteville Regional Airport مطار فيayetteville الإقليمي",
  "city": "Fayetteville فيايتفيل",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Lubumbashi Luano International Airport مطار لوبومباشي لوانو الدولي",
  "city": "Lubumbashi لوبومباشي",
  "country": "جمهورية الكونغو الديمقراطية Democratic Republic of Congo"
},
{
  "name": "Glacier Park International Airport مطار غلاسير بارك الدولي",
  "city": "Kalispell كاليسبيل",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Nordholz مطار نوردهولز",
  "city": "Cuxhaven كوكسايفن",
  "country": "ألمانيا Germany"
},
{
  "name": "Leonardo da Vinci International Airport مطار ليوناردو دا فينشي الدولي",
  "city": "Rome روما",
  "country": "إيطاليا Italy"
},
{
  "name": "Bringeland Airport مطار برينجيلاند",
  "city": "Bygstad بيغستاد",
  "country": "النرويج Norway"
},
{
  "name": "Le Lamentin Airport مطار لو لامنتين",
  "city": "Ducos دوكوس",
  "country": "مارتينيك Martinique"
},
{
  "name": "Friedrichshafen Airport مطار فريدريشهافن",
  "city": "Meckenbeuren ميكنبيورين",
  "country": "ألمانيا Germany"
},
{
  "name": "Fergana مطار فرغانة",
  "city": "Fergana فرغانة",
  "country": "أوزبكستان Uzbekistan"
},
{
  "name": "Fernando de Noronha Airport مطار فرناندو دي نورونها",
  "city": "Vila dos Remédios فيلا دوس ريميديوس",
  "country": "البرازيل Brazil"
},
{
  "name": "Saiss Airport مطار سايس",
  "city": "Fez فاس",
  "country": "المغرب Morocco"
},
{
  "name": "Fangatau مطار فنجاتا",
  "city": "Fangatau فنجاتا",
  "country": "بولينيزيا الفرنسية French Polynesia"
},
{
  "name": "Fakahina مطار فاكهينا",
  "city": "Fakahina فاكهينا",
  "country": "بولينيزيا الفرنسية French Polynesia"
},
{
  "name": "Kinshasa N Djili International Airport مطار كينشاسا ن دجيلي الدولي",
  "city": "Kinshasa كينشاسا",
  "country": "جمهورية الكونغو الديمقراطية Democratic Republic of Congo"
},
{
  "name": "Fujairah Airport مطار الفجيرة",
  "city": "Al Fujayrah الفجيرة",
  "country": "الإمارات العربية المتحدة United Arab Emirates"
},
{
  "name": "Baden-Airpark مطار بادين-أيربارك",
  "city": "Rheinmünster راينمنستر",
  "country": "ألمانيا Germany"
},
{
  "name": "Kisangani Bangoka International Airport مطار كيسانغاني بانغوك الدولي",
  "city": "Kisangani كيسانغاني",
  "country": "جمهورية الكونغو الديمقراطية Democratic Republic of Congo"
},
{
  "name": "Chess Lamberton Airport مطار شيس لامبرتون",
  "city": "Franklin فرانكلين",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Fak Fak مطار فاك فاك",
  "city": "Fak Fak فاك فاك",
  "country": "إندونيسيا Indonesia"
},
{
  "name": "Fukushima Airport مطار فوكوشيما",
  "city": "Sukagawa-shi سوكاغاوا",
  "country": "اليابان Japan"
},
{
  "name": "Gustavo Artunduaga Paredes Airport مطار غوستافو أرتوندواج باريديس",
  "city": "Florencia فلورينسيا",
  "country": "كولومبيا Colombia"
},
{
  "name": "Flagstaff Pulliam Airport مطار فلاجستاف بوليام",
  "city": "Flagstaff فلاجستاف",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Fort Lauderdale Hollywood International Airport مطار فورت لودرديل هوليوود الدولي",
  "city": "Dania Beach دانيه بيتش",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Flores Airport مطار فلوريس",
  "city": "Flores Island جزيرة فلوريس",
  "country": "Portugal البرتغال"
},
{
  "name": "Formosa Airport مطار فورموسا",
  "city": "Formosa فورموسا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Memmingen-Allgäu Airport مطار ميمينجن - ألغوي",
  "city": "Memmingen ميمينجن",
  "country": "Germany ألمانيا"
},
{
  "name": "Four Corners Regional Airport مطار فور كورنرز الإقليمي",
  "city": "Farmington فارمنجتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Munster-Osnabruck International Airport مطار مونستر - أوزنابروك الدولي",
  "city": "Greven غريفن",
  "country": "Germany ألمانيا"
},
{
  "name": "Page Field Airport مطار بيج فيلد",
  "city": "Fort Myers فورت مايرز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Freetown Lungi Airport مطار فريتاون لونجي",
  "city": "Freetown فريتاون",
  "country": "Sierra Leone سيراليون"
},
{
  "name": "Funchal Airport مطار فونشال",
  "city": "Madeira ماديرا",
  "country": "Portugal البرتغال"
},
{
  "name": "Garons Airport مطار جارون",
  "city": "St-Gilles-du-Gard سانت-غيل دو غار",
  "country": "France فرنسا"
},
{
  "name": "Sunan Airport مطار سونان",
  "city": "Sunan سونان",
  "country": "North Korea كوريا الشمالية"
},
{
  "name": "Fort Collins Loveland Municipal Airport مطار فورت كولينز لوفلاند البلدي",
  "city": "Loveland لوفلاند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Bishop International Airport مطار بيشوب الدولي",
  "city": "Flint فلينت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Fuzhou Airport مطار فوزهو",
  "city": "Fuzhou فوزهو",
  "country": "China الصين"
},
{
  "name": "Fort Dodge Regional Airport مطار فورت دوج الإقليمي",
  "city": "Fort Dodge فورت دوج",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Gino Lisa Airport مطار جينو ليزا",
  "city": "Foggia فوكيا",
  "country": "Italy إيطاليا"
},
{
  "name": "Pinto Martins International Airport مطار بينتو مارتينز الدولي",
  "city": "Fortaleza فورتاليزا",
  "country": "Brazil البرازيل"
},
{
  "name": "Freeport International Airport مطار فري بورت الدولي",
  "city": "Freeport City مدينة فري بورت",
  "country": "Bahamas البهاما"
},
{
  "name": "Frankfurt International Airport مطار فرانكفورت الدولي",
  "city": "Frankfurt فرانكفورت",
  "country": "Germany ألمانيا"
},
{
  "name": "Franca Airport مطار فرانكا",
  "city": "Franca فرانكا",
  "country": "Brazil البرازيل"
},
{
  "name": "Friday Harbor Airport مطار فريدية هاربر",
  "city": "Friday Harbor فريدية هاربر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Fera Island Airport مطار جزيرة فيرا",
  "city": "Fera Island جزيرة فيرا",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Forli Airport مطار فورلي",
  "city": "Forli فورلي",
  "country": "Italy إيطاليا"
},
{
  "name": "Flora Airport مطار فلورا",
  "city": "Floro فلورو",
  "country": "Norway النرويج"
},
{
  "name": "Santa Elena Airport مطار سانتا إيلينا",
  "city": "Flores فلوريس",
  "country": "Guatemala غواتيمالا"
},
{
  "name": "Vasilyevka Airport مطار فاسيلييفكا",
  "city": "Bishkek بشكيك",
  "country": "Kyrgyzstan قيرغيزستان"
},
{
  "name": "Francistown Airport مطار فرانسيستاون",
  "city": "Francistown فرانسيستاون",
  "country": "Botswana بتسوانا"
},
{
  "name": "Sud Corse Airport مطار سود كورس",
  "city": "Figari فيغاري",
  "country": "France فرنسا"
},
{
  "name": "Sioux Falls Regional Airport مطار سيوكس فولز الإقليمي",
  "city": "Sioux Falls سيوكس فولز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Smith Field Airport مطار سميث فيلد",
  "city": "Fort Smith فورت سميث",
  "country": "United States الولايات المتحدة"
},
{
  "name": "St Pierre Airport مطار سان بيير",
  "city": "St Pierre سان بيير",
  "country": "Saint Pierre and Miquelon سانت بيير وميكلون"
},
{
  "name": "Futuna فتون",
  "city": "Futuna Island جزيرة فتون",
  "country": "Vanuatu فانواتو"
},
{
  "name": "El Calafate International Airport مطار إلكالفاتي الدولي",
  "city": "El Calafate إلكالفاتي",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Tolagnaro Airport مطار تولاغنارو",
  "city": "Faradofay فارادوفاي",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Puerto del Rosario Airport مطار بويرتو ديل روساريو",
  "city": "Antigua أنتيغوا",
  "country": "Spain إسبانيا"
},
{
  "name": "Fuyang Airport مطار فويانغ",
  "city": "Fuyang فويانغ",
  "country": "China الصين"
},
{
  "name": "Fukue Airport مطار فوكوي",
  "city": "Goto-shi غوتو-شي",
  "country": "Japan اليابان"
},
{
  "name": "Fukuoka Airport مطار فوكوكا",
  "city": "Fukuoka-shi فوكوكا-شي",
  "country": "Japan اليابان"
},
{
  "name": "Funafuti International Airport مطار فونا فوتي الدولي",
  "city": "Funafuti فونا فوتي",
  "country": "Tuvalu توفالو"
},
{
  "name": "Futuna Island جزيرة فتون",
  "city": "Futuna Island جزيرة فتون",
  "country": "Wallis and Futuna Islands جزر واليس وفوتونا"
},
{
  "name": "Fort Wayne Municipal Airport-Baer Field مطار فورت وين municipal-باير فيلد",
  "city": "Fort Wayne فورت وين",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Fort William Heliport مطار هيلوبورت فورت ويليام",
  "city": "Fort William فورت ويليام",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Fort Yukon Airport مطار فورت يوكون",
  "city": "Fort Yukon فورت يوكون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Filton Airport مطار فيلتون",
  "city": "Bristol بريستول",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Gabes Airport مطار قابس",
  "city": "Gabes قابس",
  "country": "Tunisia تونس"
},
{
  "name": "Gafsa مطار قفصة",
  "city": "Gafsa قفصة",
  "country": "Tunisia تونس"
},
{
  "name": "Yamagata Airport مطار ياماجاتا",
  "city": "Higashine-shi هيغاشيني-شي",
  "country": "Japan اليابان"
},
{
  "name": "Galena Airport مطار غالينا",
  "city": "Galena غالينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Gambell Airport مطار غامبل",
  "city": "Gambell غامبل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Gan Island Airport مطار جزيرة غان",
  "city": "Hithadhoo هيثادو",
  "country": "Maldives جزر المالديف"
},
{
  "name": "Cuba كوبا",
  "city": "Guantanamo غوانتانامو",
  "country": "Cuba كوبا"
},
{
  "name": "Borjhar مطار بورجهار",
  "city": "Gawahati غواهاتي",
  "country": "India الهند"
},
{
  "name": "Gamba مطار غامبا",
  "city": "Gamba غامبا",
  "country": "Gabon الغابون"
},
{
  "name": "Gaya Airport مطار غايا",
  "city": "Gaya غايا",
  "country": "India الهند"
},
{
  "name": "Great Bend Municipal Airport مطار غريت بند البلدي",
  "city": "Great Bend غريت بند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sir Seretse Khama International Airport مطار سير سيريتسي خاما الدولي",
  "city": "Tlokweng تلوكوانغ",
  "country": "Botswana بوتسوانا"
},
{
  "name": "Marie Galante Airport مطار ماري غالانتي",
  "city": "Grand-Bourg غران-بورغ",
  "country": "Guadeloupe غواديلوب"
},
{
  "name": "Iran إيران",
  "city": "Gorgan جرجان",
  "country": "Iran إيران"
},
{
  "name": "Gillette Campbell County Airport مطار جيلت كامبل كاونتي",
  "city": "Gillette جيلت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Guernsey Airport مطار جيرنسي",
  "city": "St. Peter Port سانت بيتر بورت",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Garden City Regional Airport مطار جاردن سيتي الإقليمي",
  "city": "Pierceville بيرسفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Owen Roberts International Airport مطار أوين روبرتس الدولي",
  "city": "Georgetown جورج تاون",
  "country": "Cayman Islands جزر كايمان"
},
{
  "name": "Ididole مطار إيديدول",
  "city": "Gode/Iddidole جود/إيديدول",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Don Miguel Hidalgo International Airport مطار دون ميغيل إيدالغو الدولي",
  "city": "Tlajomulco de Zúñiga تلاخومولكو دي زونيغا",
  "country": "Mexico المكسيك"
},
{
  "name": "Rebiechowo Airport مطار ربيتشوو",
  "city": "Gdansk غدانسك",
  "country": "Poland بولندا"
},
{
  "name": "Vare Maria Airport مطار فاري ماريا",
  "city": "Barinas باريناس",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Gondar Airport مطار غوندار",
  "city": "Azezo أزيزو",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Grand Turk International Airport مطار غراند ترك الدولي",
  "city": "Grand Turk غراند ترك",
  "country": "Turks And Caicos Islands جزر تركس وكايكوس"
},
{
  "name": "Magadan Northwest Airport مطار ماغادان الشمالي الغربي",
  "city": "Magadan ماغادان",
  "country": "Russia روسيا"
},
{
  "name": "Magenta Airport مطار ماغينتا",
  "city": "Noumea نوميا",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "Spokane International Airport مطار سبوكين الدولي",
  "city": "Spokane سبوكين",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Santo Angelo Airport مطار سانتو أنجيلو",
  "city": "Santo Angelo سانتو أنجيلو",
  "country": "Brazil البرازيل"
},
{
  "name": "Timehri International Airport مطار تيمهري الدولي",
  "city": "Hyde Park هايد بارك",
  "country": "Guyana غيانا"
},
{
  "name": "Nueva Gerona Airport مطار نويفا جيرونا",
  "city": "Nueva Gerona نويفا جيرونا",
  "country": "Cuba كوبا"
},
{
  "name": "General Santos Airport مطار جنرال سانتوس",
  "city": "General Santos City مدينة جنرال سانتوس",
  "country": "Philippines الفلبين"
},
{
  "name": "Geraldton Airport مطار جيرالدتون",
  "city": "Geraldton جيرالدتون",
  "country": "Australia أستراليا"
},
{
  "name": "Lappland Airport مطار لابلاند",
  "city": "Koskullskulle كوسكولسكيولي",
  "country": "Sweden السويد"
},
{
  "name": "Griffith Airport مطار غريفيث",
  "city": "Griffith غريفيث",
  "country": "Australia أستراليا"
},
{
  "name": "Grand Forks Mark Andrews International Airport مطار غراند فوركس مارك أندروز الدولي",
  "city": "Grand Forks غراند فوركس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Grafton Airport مطار غرافتون",
  "city": "Grafton غرافتون",
  "country": "Australia أستراليا"
},
{
  "name": "Gregg County Airport مطار مقاطعة غريغ",
  "city": "Longview لونغفيو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Exuma International Airport مطار إكزومة الدولي",
  "city": "George Town جورج تاون",
  "country": "Bahamas الباهاماس"
},
{
  "name": "Noumerate Airport مطار نوميرت",
  "city": "Ghardaia غرداية",
  "country": "Algeria الجزائر"
},
{
  "name": "Governors Harbour Airport مطار غفرنر هاربور",
  "city": "Governor Harbour حاكم هاربور",
  "country": "Bahamas الباهاماس"
},
{
  "name": "Ghat Airport مطار غات",
  "city": "Ghat غات",
  "country": "Libya ليبيا"
},
{
  "name": "Gibraltar Airport مطار جبل طارق",
  "city": "Gibraltar جبل طارق",
  "country": "Gibraltar جبل طارق"
},
{
  "name": "Boigu Island Airport مطار جزيرة بويغو",
  "city": "Kubin Village قرية كوبين",
  "country": "Australia أستراليا"
},
{
  "name": "Rio de Janeiro-Antonio Carlos Jobim International Airport مطار ريو دي جانيرو - أنطونيو كارلوس جوبيم الدولي",
  "city": "Rio de Janeiro ريو دي جانيرو",
  "country": "Brazil البرازيل"
},
{
  "name": "Gilgit Airport مطار غيلغيت",
  "city": "Gilgit غيلغيت",
  "country": "Pakistan باكستان"
},
{
  "name": "Gisborne Airport مطار غيسبورن",
  "city": "Gisborne غيسبورن",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Gizan Airport مطار جازان",
  "city": "Jizan جازان",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Guanaja Airport مطار جواناجا",
  "city": "Guanaja جواناجا",
  "country": "Honduras هندوراس"
},
{
  "name": "Taher Airport مطار الطاهر",
  "city": "Jijel جيجل",
  "country": "Algeria الجزائر"
},
{
  "name": "Walker Field Airport مطار ووكر فيلد",
  "city": "Grand Junction غراند جنكشن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Goroka Airport مطار غوروكا",
  "city": "Goroka غوروكا",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Glasgow International Airport مطار غلاسكو الدولي",
  "city": "Paisley بايسلي",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Golfito Airport مطار غولفيتو",
  "city": "Palmar Sur بالمير سور",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Mid Delta Regional Airport مطار ميد دلتا الإقليمي",
  "city": "Greenville غرينفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Galcaio Airport مطار غالكاي",
  "city": "Gaalkacyo غالكاي",
  "country": "Somalia الصومال"
},
{
  "name": "Guelmim Airport مطار غلميم",
  "city": "Goulimime غلميم",
  "country": "Morocco المغرب"
},
{
  "name": "Gloucestershire Airport مطار غلوسيترشير",
  "city": "Cheltenham شلتنهام",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Gladstone Airport مطار غلادستون",
  "city": "Gladstone غلادستون",
  "country": "Australia أستراليا"
},
{
  "name": "Golovin Airport مطار غولوفين",
  "city": "Golovin غولوفين",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Gemena Airport مطار جيمينا",
  "city": "Gemena جيمينا",
  "country": "Congo جمهورية الكونغو"
},
{
  "name": "Gambela Airport مطار غامبيلا",
  "city": "Gambela غامبيلا",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Gimpo International Airport مطار غيمبو الدولي",
  "city": "Seoul سول",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Gambier Is Airport مطار غامبيير",
  "city": "Gambier Is غامبيير",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "La Gomera Airport مطار لا غوميرا",
  "city": "Alajeró ألاخيرو",
  "country": "Spain إسبانيا"
},
{
  "name": "St Geoirs Airport مطار سان جير",
  "city": "Sillans سيلان",
  "country": "France فرنسا"
},
{
  "name": "Point Salines International Airport مطار بوينت سالينز الدولي",
  "city": "Grenada غرينادا",
  "country": "Grenada غرينادا"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Goodnews Bay غودنيوز باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Gainesville Regional Airport مطار غينسفيل الإقليمي",
  "city": "Gainesville غينسفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Genoa Cristoforo Colombo Airport مطار جنوة كريستوفورو كولومبو",
  "city": "Genoa جنوة",
  "country": "Italy إيطاليا"
},
{
  "name": "Godthaab Airport مطار غودثاب",
  "city": "Nuuk نواكشوط",
  "country": "Greenland غرينلاند"
},
{
  "name": "Dabolim Airport مطار دابوليم",
  "city": "Vasco Da Gama فاسكو دا غاما",
  "country": "India الهند"
},
{
  "name": "Strigino Airport مطار سترجينو",
  "city": "Dzerzinsk دزرزينسك",
  "country": "Russia روسيا"
},
{
  "name": "Goma International Airport مطار غوما الدولي",
  "city": "Goma غوم",
  "country": "Congo جمهورية الكونغو"
},
{
  "name": "Gorakhpur مطار غوراخبور",
  "city": "Gorakhpur غوراخبور",
  "country": "India الهند"
},
{
  "name": "Golmud Airport مطار غولمود",
  "city": "Golmud غولمود",
  "country": "China الصين"
},
{
  "name": "Gothenburg Airport مطار غوتنبورغ",
  "city": "Härryda هاريتا",
  "country": "Sweden السويد"
},
{
  "name": "Garoua Airport مطار غاروا",
  "city": "Garoua غاروا",
  "country": "Cameroon الكاميرون"
},
{
  "name": "Gove Aerodrome مطار غوف",
  "city": "Gove غوف",
  "country": "Australia أستراليا"
},
{
  "name": "Araxos Airport مطار أراكسوس",
  "city": "Lakkopetra لاكوبترا",
  "country": "Greece اليونان"
},
{
  "name": "Guapi Airport مطار غوابي",
  "city": "Guapí غوابي",
  "country": "Colombia كولومبيا"
},
{
  "name": "Seymour Airport مطار سي مور",
  "city": "Puerto Ayora بورتو أيوارا",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Gulfport Biloxi Regional Airport مطار غلفبورت بيلوكسي الإقليمي",
  "city": "Gulfport غلفبورت",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Austin Straubel International Airport مطار أوستن ستراوبل الدولي",
  "city": "Green Bay غرين باي",
  "country": "الولايات المتحدة United States"
},
{
  "name": "P W Botha Airport مطار ب. و. بوثا",
  "city": "George جورج",
  "country": "جنوب أفريقيا South Africa"
},
{
  "name": "Killeen-Fort Hood Regional Airport مطار كيلين - فورت هود الإقليمي",
  "city": "Killeen كيلين",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Gerona Airport مطار جيرونا",
  "city": "Vilobí d'Onyar فيلوبى دونيار",
  "country": "إسبانيا Spain"
},
{
  "name": "Groningen Eelde مطار غروينجن إيلدي",
  "city": "Eelde إيلدي",
  "country": "هولندا Netherlands"
},
{
  "name": "Gerald R. Ford International Airport مطار جيرالد ر. فورد الدولي",
  "city": "Grand Rapids غراند رابيدز",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Governador Andre Franco Montoro International Ai مطار غوفنادور أندريه فرانكو مونتورو الدولي",
  "city": "Guarulhos غواروليوس",
  "country": "البرازيل Brazil"
},
{
  "name": "Groznyy Airport مطار غروزني",
  "city": "Groznyy غروزني",
  "country": "روسيا Russia"
},
{
  "name": "Graciosa Airport مطار غراسيوا",
  "city": "Graciosa Island جزيرة غراسيوا",
  "country": "البرتغال Portugal"
},
{
  "name": "Granada Airport مطار غرناطة",
  "city": "Chauchina تشوشينا",
  "country": "إسبانيا Spain"
},
{
  "name": "Grimsey Airport مطار غريمسي",
  "city": "Akureyri أكيوريري",
  "country": "أيسلندا Iceland"
},
{
  "name": "Graz Airport مطار غراتس",
  "city": "Feldkirchen فيلدكيرخن",
  "country": "النمسا Austria"
},
{
  "name": "Save Airport مطار سيف",
  "city": "Kyrkobyn كيركوبين",
  "country": "السويد Sweden"
},
{
  "name": "Triad International Airport مطار ترياد الدولي",
  "city": "Greensboro غرينسبورو",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Greenville Spartanburg International Airport مطار غرينفيل سبارتنبورغ الدولي",
  "city": "Greer غرير",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Gustavus Airport مطار غوستافوس",
  "city": "Gustavus غوستافوس",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Binbrook Airport مطار بينبروك",
  "city": "Market Rasen ماركت راسين",
  "country": "المملكة المتحدة United Kingdom"
},
{
  "name": "Solomon Islands Airport مطار جزر سليمان",
  "city": "Gatokae جاتوكاي",
  "country": "جزر سليمان Solomon Islands"
},
{
  "name": "Groote Eylandt Airport مطار غروتي إيلاندت",
  "city": "Darwin داروين",
  "country": "أستراليا Australia"
},
{
  "name": "Great Falls International Airport مطار غريت فولز الدولي",
  "city": "Great Falls غريت فولز",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Jalaluddin Airport مطار جلال الدين",
  "city": "Gorontalo غورونتالو",
  "country": "إندونيسيا Indonesia"
},
{
  "name": "Golden Triangle Regional Airport مطار المثلث الذهبي الإقليمي",
  "city": "Columbus كولومبوس",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Australia Airport مطار أستراليا",
  "city": "Granites غرانيتس",
  "country": "أستراليا Australia"
},
{
  "name": "La Aurora Airport مطار لا أورورا",
  "city": "Guatemala City مدينة غواتيمالا",
  "country": "غواتيمالا Guatemala"
},
{
  "name": "Gunnison County Airport مطار غونيسون كاونتي",
  "city": "Gunnison غونيسون",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Antonio B Won Pat International Airport مطار أنطونيو ب وون بات الدولي",
  "city": "Hagåtña هاغاتنيا",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Gurney Airport مطار غورني",
  "city": "Alotau ألوطاو",
  "country": "بابوا غينيا الجديدة Papua New Guinea"
},
{
  "name": "Guryev Airport مطار غورييف",
  "city": "Atyrau أكتاو",
  "country": "كازاخستان Kazakhstan"
},
{
  "name": "Geneva Airport مطار جنيف",
  "city": "Geneva جنيف",
  "country": "سويسرا Switzerland"
},
{
  "name": "Governador Valadares Airport مطار غوفنادر فالادارس",
  "city": "Governador Valadares غوفنادر فالادارس",
  "country": "البرازيل Brazil"
},
{
  "name": "Gwadar Airport مطار غوادر",
  "city": "Gawadar غوادر",
  "country": "باكستان Pakistan"
},
{
  "name": "Gwalior Airport مطار غواليو",
  "city": "Gwalior غواليو",
  "country": "الهند India"
},
{
  "name": "Westerland Airport مطار ويستلان",
  "city": "Westerland ويستلان",
  "country": "ألمانيا Germany"
},
{
  "name": "Carnmore Airport مطار كارمنور",
  "city": "Carnmore كارمنور",
  "country": "أيرلندا Ireland"
},
{
  "name": "Sayun Airport مطار سيئون",
  "city": "Seiyun سيئون",
  "country": "اليمن Yemen"
},
{
  "name": "Negage Airport مطار نغاج",
  "city": "Negage نغاج",
  "country": "أنغولا Angola"
},
{
  "name": "Guayaramerin Airport مطار غواراميرين",
  "city": "Guayaramerín غواراميرين",
  "country": "بوليفيا Bolivia"
},
{
  "name": "Azerbaijan مطار أذربيجان",
  "city": "Baku باكو",
  "country": "أذربيجان Azerbaijan"
},
{
  "name": "Simon Bolivar International Airport مطار سيمون بوليفار الدولي",
  "city": "Guayaquil غواياكيل",
  "country": "الإكوادور Ecuador"
},
{
  "name": "Argyle Airport مطار أرجايل",
  "city": "Argyle أرجايل",
  "country": "أستراليا Australia"
},
{
  "name": "General Jose Maria Yanez in Airport مطار الجنرال خوسيه ماريا يانيز",
  "city": "Guaymas غويماس",
  "country": "المكسيك Mexico"
},
{
  "name": "Santa Genoveva Airport مطار سانتا جينوفيفا",
  "city": "Goiania جويانيا",
  "country": "البرازيل Brazil"
},
{
  "name": "Nusatupe Airport مطار نوساتوبي",
  "city": "Gizo غيزو",
  "country": "جزر سليمان Solomon Islands"
},
{
  "name": "Gaziantep Airport مطار غازي عنتاب",
  "city": "Oğuzeli أوجوزيلي",
  "country": "تركيا Turkey"
},
{
  "name": "Hasvik Airport مطار هاسفيك",
  "city": "Hasvik هاسفيك",
  "country": "النرويج Norway"
},
{
  "name": "Hachijojima Airport مطار هاتشيوجيما",
  "city": "Hachijo-machi هاتشيوجو",
  "country": "اليابان Japan"
},
{
  "name": "Halmstad Airport مطار هالمستاد",
  "city": "Hamstad هالمستاد",
  "country": "السويد Sweden"
},
{
  "name": "Havasupai Airport مطار هافاسوبي",
  "city": "Havasupai هافاسوبي",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Moroni Hahaia Airport مطار مورووني هاهيا",
  "city": "Hahaia هاهيا",
  "country": "جزر القمر Comoros"
},
{
  "name": "Hannover International Airport مطار هانوفر الدولي",
  "city": "Langenhagen لانغنهاجن",
  "country": "ألمانيا Germany"
},
{
  "name": "Haikou Airport مطار هايكو",
  "city": "Haikou هايكو",
  "country": "الصين China"
},
{
  "name": "Hamburg Airport مطار هامبورغ",
  "city": "Hamburg هامبورغ",
  "country": "ألمانيا Germany"
},
{
  "name": "Noi Bai Airport مطار نوي باي",
  "city": "Hanoi هانوي",
  "country": "فيتنام Vietnam"
},
{
  "name": "Hanimadu مطار هانيمادو",
  "city": "Hanimaadhoo هانيمادهو",
  "country": "مالديف Maldives"
},
{
  "name": "Hail Airport مطار حائل",
  "city": "Ha'il حائل",
  "country": "السعودية Saudi Arabia"
},
{
  "name": "Haugesund Karmoy Airport مطار هاوغسند كارمو",
  "city": "Avaldsnes أفالدسنس",
  "country": "النرويج Norway"
},
{
  "name": "Jose Marti International Airport مطار خوسيه مارتي الدولي",
  "city": "Wajay واجة",
  "country": "كوبا Cuba"
},
{
  "name": "Hobart International Airport مطار هوبارت الدولي",
  "city": "Hobart هوبارت",
  "country": "أستراليا Australia"
},
{
  "name": "Borg El Arab International Airport مطار برج العرب الدولي",
  "city": "Alexandria الإسكندرية",
  "country": "مصر Egypt"
},
{
  "name": "Hafr Albatin مطار حفر الباطن",
  "city": "Hafr Albatin حفر الباطن",
  "country": "السعودية Saudi Arabia"
},
{
  "name": "Hubli Airport مطار هوبلي",
  "city": "Hubli هوبلي",
  "country": "الهند India"
},
{
  "name": "Hengchun Airport مطار هنغتشون",
  "city": "Hengchun هنغتشون",
  "country": "تايوان Taiwan"
},
{
  "name": "Holy Cross Airport مطار هولي كروس",
  "city": "Holy Cross هولي كروس",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Heidelberg Airport مطار هايدلبرغ",
  "city": "Heidelberg هايدلبرغ",
  "country": "ألمانيا Germany"
},
{
  "name": "Hyderabad Airport مطار حيدر أباد",
  "city": "Hyderabad حيدر أباد",
  "country": "باكستان Pakistan"
},
{
  "name": "Heringsdorf مطار هيرنجسدورف",
  "city": "Heringsdorf هيرنجسدورف",
  "country": "ألمانيا Germany"
},
{
  "name": "Hamadan Airport مطار همدان",
  "city": "Hamadan همدان",
  "country": "إيران Iran"
},
{
  "name": "Yampa Valley Airport مطار يامبا فالي",
  "city": "Hayden هيدن",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Hoedspruit Afs Airport مطار هويدسبرود أفس",
  "city": "Phalaborwa فالابوروا",
  "country": "جنوب أفريقيا South Africa"
},
{
  "name": "Hat Yai International Airport مطار هات ياي الدولي",
  "city": "Hat Yai هات ياي",
  "country": "تايلاند Thailand"
},
{
  "name": "Herat Airport مطار هرات",
  "city": "Herat هرات",
  "country": "أفغانستان Afghanistan"
},
{
  "name": "Heho Airport مطار هيوهو",
  "city": "Heho هيوهو",
  "country": "ميانمار Myanmar"
},
{
  "name": "Heide-Busum Airport مطار هايد-بوسوم",
  "city": "Heide-Buesum هايد-بوسوم",
  "country": "ألمانيا Germany"
},
{
  "name": "Heihe Airport مطار هيهي",
  "city": "Heihe هيهي",
  "country": "الصين China"
},
{
  "name": "Helsinki Vantaa Airport مطار هلسنكي فانتّا",
  "city": "Vantaa فانتّا",
  "country": "فنلندا Finland"
},
{
  "name": "Iraklion Airport مطار إيراكليو",
  "city": "Iraklio إيراكليو",
  "country": "اليونان Greece"
},
{
  "name": "Huhehaote Airport مطار هوتشو",
  "city": "Hohhot هوتشو",
  "country": "الصين China"
},
{
  "name": "U Michaeli Airport مطار ميخائيل",
  "city": "Hefa حيفا",
  "country": "إسرائيل Israel"
},
{
  "name": "Hefei-Luogang Airport مطار هيفي لوغانغ",
  "city": "Hefei هيفي",
  "country": "الصين China"
},
{
  "name": "Hagfors Airport مطار هاجفورس",
  "city": "Hagfors هاجفورس",
  "country": "السويد Sweden"
},
{
  "name": "Hammerfest Airport مطار هامر فيست",
  "city": "Hammerfest هامر فيست",
  "country": "النرويج Norway"
},
{
  "name": "Hargeisa Airport مطار هرجيسا",
  "city": "Hargeysa هرجيسا",
  "country": "الصومال Somalia"
},
{
  "name": "Hughenden Aerodrome مطار هيوغندن",
  "city": "Hughenden هيوغندن",
  "country": "أستراليا Australia"
},
{
  "name": "Jianoiao Airport مطار جيانواو",
  "city": "Hangzhou هانغتشو",
  "country": "الصين China"
},
{
  "name": "Helgoland Airport مطار هيلغولاند",
  "city": "Helgoland هيلغولاند",
  "country": "ألمانيا Germany"
},
{
  "name": "Mae Hongson Airport مطار ماي هونغ سون",
  "city": "Mae Hong Son ماي هونغ سون",
  "country": "تايلاند Thailand"
},
{
  "name": "Mount Hagen Airport مطار ماونت هاكن",
  "city": "Mount Hagen ماونت هاكن",
  "country": "بابوا غينيا الجديدة Papua New Guinea"
},
{
  "name": "Hilton Head Airport مطار هيلتون هيد",
  "city": "Hilton Head Island جزيرة هيلتون هيد",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Frankfurt-Hahn Airport مطار فرانكفورت هان",
  "city": "Dickenschied ديكنشيد",
  "country": "ألمانيا Germany"
},
{
  "name": "Hua Hin Airport مطار هوا هين",
  "city": "Hua Hin هوا هين",
  "country": "تايلاند Thailand"
},
{
  "name": "Hikueru Airport مطار هيكويرو",
  "city": "Hikueru هيكويرو",
  "country": "بولينيزيا الفرنسية French Polynesia"
},
{
  "name": "Chisholm Hibbing Airport مطار شيشولم هيبينغ",
  "city": "Hibbing هيبينغ",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Horn Island Airport مطار هورن آيلاند",
  "city": "Horn Island هورن آيلاند",
  "country": "أستراليا Australia"
},
{
  "name": "Hiroshima Airport مطار هيروشيما",
  "city": "Mihara-shi ميرا ش",
  "country": "اليابان Japan"
},
{
  "name": "Sacheon Airport مطار ساخيون",
  "city": "Sacheon-Si ساخيون",
  "country": "كوريا الجنوبية South Korea"
},
{
  "name": "Henderson Airport مطار هيندرسون",
  "city": "Honiara هونيارا",
  "country": "جزر سليمان Solomon Islands"
},
{
  "name": "Hayman Island Airport مطار هيمان آيلاند",
  "city": "Hayman Island هيمان آيلاند",
  "country": "أستراليا Australia"
},
{
  "name": "Zhi Jiang Airport مطار زهي جيانغ",
  "city": "Zhi Jiang زهي جيانغ",
  "country": "الصين China"
},
{
  "name": "Khajuraho Airport مطار خاجوراهو",
  "city": "Khajuraho خاجوراهو",
  "country": "الهند India"
},
{
  "name": "Healy Lake Airport مطار هالي ليك",
  "city": "Healy Lake هالي ليك",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Hakodate Airport مطار هاكوداته",
  "city": "Hakodate-shi هاكوداته",
  "country": "Japan اليابان"
},
{
  "name": "Hong Kong International Airport مطار هونغ كونغ الدولي",
  "city": "Hong Kong هونغ كونغ",
  "country": "Hong Kong هونغ كونغ"
},
{
  "name": "Hokitika Airport مطار هوكيتكا",
  "city": "Hokitika هوكيتكا",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Hoskins Airport مطار هوسكينز",
  "city": "Kimbe كيمبي",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Phuket International Airport مطار فوكيت الدولي",
  "city": "Thalang تالانغ",
  "country": "Thailand تايلاند"
},
{
  "name": "Lanseria Airport مطار لانسرia",
  "city": "Johannesburg جوهانسبرغ",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Hailar مطار هايلار",
  "city": "Hailar هايلار",
  "country": "China الصين"
},
{
  "name": "Ulanhot Airport مطار أولانهوت",
  "city": "Ulan Hot أولانهوت",
  "country": "China الصين"
},
{
  "name": "Helena Regional Airport مطار هيلينا الإقليمي",
  "city": "Helena هيلينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Holyhead Airport مطار هوليهاد",
  "city": "Holyhead هوليهاد",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Hamilton Airport مطار هاملتون",
  "city": "Hamilton هاملتون",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Khanty-Nansiysk مطار خانتين مانسييسك",
  "city": "Khanty-Mansiysk خانتين مانسييسك",
  "country": "Russian Federation الاتحاد الروسي"
},
{
  "name": "Oued Irara Airport مطار واد إيرارا",
  "city": "Ouargla ورقلة",
  "country": "Algeria الجزائر"
},
{
  "name": "Gen Ignacio P Garcia International Airport مطار خين إغناسيو بي غارسيا الدولي",
  "city": "Hermosillo إرموسيلو",
  "country": "Mexico المكسيك"
},
{
  "name": "Hemavan مطار هيمفان",
  "city": "Hemavan هيمفان",
  "country": "Sweden السويد"
},
{
  "name": "Hanamaki Airport مطار هانماكي",
  "city": "Hanamaki-shi هانماكي",
  "country": "Japan اليابان"
},
{
  "name": "Tokyo International Airport مطار طوكيو الدولي",
  "city": "Tokyo طوكيو",
  "country": "Japan اليابان"
},
{
  "name": "Hoonah Airport مطار هوناه",
  "city": "Hoonah هوناه",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Honolulu International Airport مطار هونولولو الدولي",
  "city": "Honolulu هونولولو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hana Airport مطار هانا",
  "city": "Hana هانا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Haines Airport مطار هاينز",
  "city": "Haines هاينز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lea County Regional Airport مطار لي كاونتي الإقليمي",
  "city": "Hobbs هوبز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hodeidah Airport مطار الحديدة",
  "city": "Al Hudaydah الحديدة",
  "country": "Yemen اليمن"
},
{
  "name": "Houeisay مطار هويساي",
  "city": "Houeisay هويساي",
  "country": "Lao People's Democratic Republic لاوس"
},
{
  "name": "Alahsa مطار الأحساء",
  "city": "Alahsa الأحساء",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Holguin Airport مطار هولغوين",
  "city": "San Pedro de Cacocum سان بيدرو دي كاكوكوم",
  "country": "Cuba كوبا"
},
{
  "name": "Hohenems Airport مطار هوهنمس",
  "city": "Hohenems هوهنمس",
  "country": "Austria النمسا"
},
{
  "name": "Hao Airport مطار هاو",
  "city": "Papeete بابيتي",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "Homer Airport مطار هومر",
  "city": "Homer هومر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Howes مطار هاوز",
  "city": "Huron هيرون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hof-Plauen Airport مطار هوف-بلاوين",
  "city": "Hof هوف",
  "country": "Germany ألمانيا"
},
{
  "name": "Horta Airport مطار هورتا",
  "city": "Horta هورتا",
  "country": "Portugal البرتغال"
},
{
  "name": "William P Hobby Airport مطار ويليام بي هوبى",
  "city": "Houston هيوستن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hovden Airport مطار هوفدن",
  "city": "Hovdebygda هوفديبيغدا",
  "country": "Norway النرويج"
},
{
  "name": "Salote Pilolevu Airport مطار سالوتي بيلوليفو",
  "city": "Pangai بانغاي",
  "country": "Tonga تونغا"
},
{
  "name": "Hooper Bay Airport مطار هوبر باي",
  "city": "Hooper Bay هوبر باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hai Phong Cat Bi Airport مطار هاي فونغ كات بي",
  "city": "HäI Phòng هاي فونغ",
  "country": "Vietnam فيتنام"
},
{
  "name": "Westchester County Airport مطار ويستشستر كاونتي",
  "city": "Purchase بيرتشاس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Harbin Yangjiagang Airport مطار هاربين يانغجياغانغ",
  "city": "Harbin هاربين",
  "country": "China الصين"
},
{
  "name": "Harare International Airport مطار هاراري الدولي",
  "city": "Harare هاراري",
  "country": "Zimbabwe زيمبابوي"
},
{
  "name": "Hurghada Airport مطار الغردقة",
  "city": "Bor Safajah بور سفاجا",
  "country": "Egypt مصر"
},
{
  "name": "Kharkov Airport مطار خاركوف",
  "city": "Kharkiv خاركيف",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Grande Valley International Airport مطار وادي غراند الدولي",
  "city": "Harlingen هارلينجن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Linton-On-Ouse مطار لينتون-أون-أوز",
  "city": "Harrogate هاروجيت",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Saga Airport مطار ساگا",
  "city": "Saga ساگا",
  "country": "Japan اليابان"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Huslia هوسليا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Zhoushan Airport مطار تشوشان",
  "city": "Shenjiamen Town شنججيامن تاون",
  "country": "China الصين"
},
{
  "name": "Huntsville International Airport مطار هنتسفيل الدولي",
  "city": "Huntsville هنتسفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Chita Airport مطار تشيتا",
  "city": "Chita تشيتا",
  "country": "Russia روسيا"
},
{
  "name": "Hatanga Airport مطار هاتانغا",
  "city": "Dudinka دودينكا",
  "country": "Russia روسيا"
},
{
  "name": "Hamilton Island Airport مطار جزيرة هاملتون",
  "city": "Hamilton Island جزيرة هاملتون",
  "country": "Australia أستراليا"
},
{
  "name": "Hotan مطار هوتان",
  "city": "Hotan هوتان",
  "country": "China الصين"
},
{
  "name": "Tri State Walker Long Field Airport مطار تري ستايت ووكر لونغ فيلد",
  "city": "Huntington هنتنغتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Huahine Airport مطار هوهيني",
  "city": "Papeete بابيتي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Hue-Phu Bai Airport مطار هوي-فوا باي",
  "city": "Hue هوي",
  "country": "Vietnam فيتنام"
},
{
  "name": "Hwmlien Airport مطار هوي ميلين",
  "city": "Hualien City هويليان سيتي",
  "country": "Taiwan تايوان"
},
{
  "name": "Hon Airport مطار هون",
  "city": "Houn هون",
  "country": "Libya ليبيا"
},
{
  "name": "Hughes مطار هيوز",
  "city": "Hughes هيوز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hudiksvall Airport مطار هوديكسفول",
  "city": "Hudiksvall هوديكسفول",
  "country": "Sweden السويد"
},
{
  "name": "Bahias de Huatulco International Airport مطار باهيا دي هواتولكو الدولي",
  "city": "Santo Domingo de Morelos سانتو دومينغو دي موريلوس",
  "country": "Mexico المكسيك"
},
{
  "name": "Humberside International Airport مطار هامبرسايد الدولي",
  "city": "Ulceby أولسبي",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Huizhou مطار هويزهو",
  "city": "Huizhou هويزهو",
  "country": "China الصين"
},
{
  "name": "Analalava Airport مطار أنالافا",
  "city": "Analalava أنالافا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Hervey Bay Airport مطار هيرفي باي",
  "city": "Hervey Bay هيرفي باي",
  "country": "Australia أستراليا"
},
{
  "name": "Mongolia مطار منغوليا",
  "city": "Khovd كهوفد",
  "country": "Mongolia منغوليا"
},
{
  "name": "Valan Airport مطار فالان",
  "city": "Honningsvåg هونينغسفاغ",
  "country": "Norway النرويج"
},
{
  "name": "Tweed New Haven Airport مطار تويد نيو هافن",
  "city": "East Haven إيست هافن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Havre City-County Airport مطار هافري سيتي-كاونتي",
  "city": "Havre هافري",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Barnstable Boardman Polando Airport مطار بارنستابل بوردمان بولاندو",
  "city": "Hyannis هاينس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Begumpet Airport مطار بيغومبت",
  "city": "Hyderabad حيدر أباد",
  "country": "India الهند"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Hydaburg هيدابورغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "SPB مطار إس بي بي",
  "city": "Hollis هوليس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Huangyan Airport مطار هوانغيان",
  "city": "Huangyan هوانغيان",
  "country": "China الصين"
},
{
  "name": "Hays Municipal Airport مطار هيس البلدي",
  "city": "Hays هيس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hanzhong Airport مطار هانزحونغ",
  "city": "Hanzhong هانزحونغ",
  "country": "China الصين"
},
{
  "name": "Liping مطار ليبينغ",
  "city": "Liping City مدينة ليبينغ",
  "country": "China الصين"
},
{
  "name": "Igarka مطار إيغاركا",
  "city": "Igarka إيغاركا",
  "country": "Russia روسيا"
},
{
  "name": "Dulles International Airport مطار دولس الدولي",
  "city": "Washington واشنطن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Niagara Falls International Airport مطار شلالات نياجارا الدولي",
  "city": "Niagara Falls شلالات نياجارا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "George Bush Intercontinental Airport مطار جورج بوش الدولي",
  "city": "Houston هيوستن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "In Amenas Airport مطار إن أمناس",
  "city": "Illizi إيليزي",
  "country": "Algeria الجزائر"
},
{
  "name": "Kiana مطار كيانا",
  "city": "Kiana كيانا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Iasi North Airport مطار ياشي الشمالي",
  "city": "Ilasi ياش",
  "country": "Romania رومانيا"
},
{
  "name": "Ibadan Airport مطار إبادان",
  "city": "Ibadan إبادان",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Perales Airport مطار بيراليس",
  "city": "Ibague إيباغي",
  "country": "Colombia كولومبيا"
},
{
  "name": "Ibiza Airport مطار إيبيزا",
  "city": "San José سان خوسيه",
  "country": "Spain إسبانيا"
},
{
  "name": "Cicia Airport مطار سيسيا",
  "city": "Cicia سيسيا",
  "country": "Fiji فيجي"
},
{
  "name": "New Incheon International Airport مطار إنشيون الدولي الجديد",
  "city": "Incheon إنشيون",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Wichita Mid-Continent Airport مطار ويتشيتا",
  "city": "Wichita ويتشيتا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Fanning Field Airport مطار فانونغ فيلد",
  "city": "Idaho Falls شلالات أيداهو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Devi Ahilyabai Holkar International Airport مطار ديفي أهلياباي هولكار الدولي",
  "city": "Indore إندور",
  "country": "India الهند"
},
{
  "name": "Babimost Airport مطار ببابيموست",
  "city": "Babimost ببابيموست",
  "country": "Poland بولندا"
},
{
  "name": "Zhulyany Airport مطار جولاني",
  "city": "Kiev كييف",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Isafjordur Airport مطار إيسافجوردور",
  "city": "Isafjordur إيسافجوردور",
  "country": "Iceland آيسلندا"
},
{
  "name": "Esfahan International Airport مطار أصفهان الدولي",
  "city": "Esfahan أصفهان",
  "country": "Iran إيران"
},
{
  "name": "Ivano-Frankovsk Airport مطار إيفانو-فرانكيفسكي",
  "city": "Ivano-Frankivs'k إيفانو-فرانكيفسكي",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Laughlin-Bullhead International Airport مطار لافلين-بولهد الدولي",
  "city": "Bullhead City مدينة بولهد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Great Inagua Airport مطار غريت إيناغوا",
  "city": "Matthew Town مدينة ماثيو",
  "country": "Bahamas باهاماس"
},
{
  "name": "Igiugig مطار إيغيوغيغ",
  "city": "Igiugig إيغيوغيغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kingman Airport مطار كينغمان",
  "city": "Kingman كينغمان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Cataratas del Iguazu Airport مطار كاتاراتاس ديل إيغواسو",
  "city": "Puerto Esperanza بورتو إسبيرانزا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Ingolstadt-Manching مطار إنغولشتات-مانشينغ",
  "city": "Ingolstadt-Manching إنغولشتات-مانشينغ",
  "country": "Germany ألمانيا"
},
{
  "name": "Cataratas International Airport مطار كاتاراتاس الدولي",
  "city": "Foz do Iguacu فوز دو إيغواسو",
  "country": "Brazil البرازيل"
},
{
  "name": "Iran مطار إيران",
  "city": "Iran Shahr إيران شهر",
  "country": "Iran إيران"
},
{
  "name": "Iran مطار إيران",
  "city": "Ilaam إيلام",
  "country": "Iran إيران"
},
{
  "name": "Russia مطار روسيا",
  "city": "Izhevsk إيزhevsk",
  "country": "Russia روسيا"
},
{
  "name": "Imam Khomeini International Airport مطار الإمام الخميني الدولي",
  "city": "Tehran طهران",
  "country": "Iran إيران"
},
{
  "name": "Nikolski مطار نيكولسكي",
  "city": "Nikolski نيكولسكي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tiksi Airport مطار تيكسي",
  "city": "Tiksi تيكسي",
  "country": "Russia روسيا"
},
{
  "name": "Ilford Airport مطار إلفورد",
  "city": "Nelson House نيلسون هاوس",
  "country": "كندا Canada"
},
{
  "name": "Iliamna Airport مطار إليمنا",
  "city": "Iliamna إليمنا",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Wilmington International Airport مطار ويلمنجتون الدولي",
  "city": "Wilmington ويلمنجتون",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Airborne Airpark مطار إيربورن",
  "city": "Wilmington ويلمنجتون",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Iloilo Airport مطار إيلويلو",
  "city": "Iloilo إيلويلو",
  "country": "الفلبين Philippines"
},
{
  "name": "Moue Airport مطار مو",
  "city": "Vao فاو",
  "country": "كاليدونيا الجديدة New Caledonia"
},
{
  "name": "Ilorin Airport مطار إلورين",
  "city": "Ilorin إلورين",
  "country": "نيجيريا Nigeria"
},
{
  "name": "Islay Airport مطار إيسلاي",
  "city": "Glenegedale غلينغيدال",
  "country": "المملكة المتحدة United Kingdom"
},
{
  "name": "Kotesovo Airport مطار كوتيسوفو",
  "city": "Bytča بايتشا",
  "country": "سلوفاكيا Slovakia"
},
{
  "name": "Imphal Airport مطار إمفال",
  "city": "Lilong (Imphal West) ليلونغ",
  "country": "الهند India"
},
{
  "name": "Nepal مطار نيبال",
  "city": "Simikot سيميكوت",
  "country": "نيبال Nepal"
},
{
  "name": "Prefeito Renato Moreira Airport مطار بريفيتو ريناتو مورييرا",
  "city": "Imperatriz إمبراطير",
  "country": "البرازيل Brazil"
},
{
  "name": "Ford Airport مطار فورد",
  "city": "Kingsford كينغسفورد",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Yinchuan Airport مطار ينشوان",
  "city": "Yinchuan ينشوان",
  "country": "الصين China"
},
{
  "name": "Indianapolis International Airport مطار إنديانابوليس الدولي",
  "city": "Indianapolis إنديانابوليس",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Inhambane Airport مطار إينهامباني",
  "city": "Inhambane إينهامباني",
  "country": "موزمبيق Mozambique"
},
{
  "name": "Nis Airport مطار نيس",
  "city": "Nis نيس",
  "country": "صربيا Serbia"
},
{
  "name": "Falls International Airport مطار فولز الدولي",
  "city": "International Falls فولز الدولي",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Innsbruck Airport مطار إنسبروك",
  "city": "Innsbruck إنسبروك",
  "country": "النمسا Austria"
},
{
  "name": "Smith Reynolds Airport مطار سميث رينولدز",
  "city": "Winston-Salem وينستون-ساليم",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Nauru International Airport مطار ناورو الدولي",
  "city": "Yaren يارين",
  "country": "ناورو Nauru"
},
{
  "name": "Inverness Airport مطار إنفيرنيس",
  "city": "Inverness إنفيرنيس",
  "country": "المملكة المتحدة United Kingdom"
},
{
  "name": "In Salah Airport مطار إن صلاح",
  "city": "In Salah إن صلاح",
  "country": "الجزائر Algeria"
},
{
  "name": "Ioannina Airport مطار يوانينا",
  "city": "Ioannina يوانينا",
  "country": "اليونان Greece"
},
{
  "name": "Ronaldsway Airport مطار رونالدسواي",
  "city": "Castletown كاسلتاون",
  "country": "المملكة المتحدة United Kingdom"
},
{
  "name": "Impfondo Airport مطار إمبفوند",
  "city": "Impfondo إمبفوند",
  "country": "الكونغو Congo"
},
{
  "name": "Jorge Amado Airport مطار خورخي أمدو",
  "city": "Ilhéus إيليوس",
  "country": "البرازيل Brazil"
},
{
  "name": "Ipota Airport مطار إيبوتا",
  "city": "Ipota إيبوتا",
  "country": "فانواتو Vanuatu"
},
{
  "name": "Mataveri International Airport مطار ماتافيري الدولي",
  "city": "Easter Island جزيرة إيستر",
  "country": "تشيلي Chile"
},
{
  "name": "Ipoh Airport مطار إيبوه",
  "city": "Ipoh إيبوه",
  "country": "ماليزيا Malaysia"
},
{
  "name": "Diego Aracena International Airport مطار دييغو أراسينا الدولي",
  "city": "Alto Hospicio ألتو هوسبيسيو",
  "country": "Chile تشيلي"
},
{
  "name": "Cnl Fap Fran Seca Vignetta Airport مطار سي إن إل فاب فران سيكا فينيتا",
  "city": "Iquitos إيكيكوس",
  "country": "Peru بيرو"
},
{
  "name": "Kirakira مطار كيراكيرا",
  "city": "Kirakira كيراكيرا",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Circle مطار سيركل",
  "city": "Circle سيركل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Capitan Vicente A Almonacid Airport مطار كابيتان فيسنتي أ ألفونسيد",
  "city": "Chamical تشاميكال",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Irma مطار إيرما",
  "city": "Irma إيرما",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mount Isa Airport مطار ماونت إيزا",
  "city": "Mount Isa ماونت إيزا",
  "country": "Australia أستراليا"
},
{
  "name": "Islamabad International Airport مطار إسلام أباد الدولي",
  "city": "Rāwalpindi راولبندي",
  "country": "Pakistan باكستان"
},
{
  "name": "Saint Mary's Airport مطار سانت ماري",
  "city": "Rams Valley وادي رامس",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Ishigaki Airport مطار إيشيغاكي",
  "city": "Ishigaki-shi مدينة إيشيغاك",
  "country": "Japan اليابان"
},
{
  "name": "Sloulin Field International Airport مطار سلاولين فيلد الدولي",
  "city": "Williston ويلستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kinston Jetport Stallings Airport مطار كينستون جت بورت ستالينغز",
  "city": "Kinston كينستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Long Island Macarthur Airport مطار لونغ آيلند ماكارثر",
  "city": "Ronkonkoma رونكونكوما",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ataturk Hava Limani Airport مطار أتاتورك",
  "city": "Bakırköy بكركوي",
  "country": "Turkey تركيا"
},
{
  "name": "Tompkins County Airport مطار مقاطعة تومبكنز",
  "city": "Ithaca إيثاكا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Osaka International Airport مطار أوساكا الدولي",
  "city": "Itami-shi إيتامي",
  "country": "Japan اليابان"
},
{
  "name": "Hilo International Airport مطار هيلو الدولي",
  "city": "Hilo هيلو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Niue مطار نيي",
  "city": "Niue Island جزيرة نيي",
  "country": "Niue نيي"
},
{
  "name": "Invercargill Airport مطار إنvercargill",
  "city": "Invercargill إنvercargill",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Ivalo Airport مطار إيفالو",
  "city": "Ivalo إيفالو",
  "country": "Finland فنلندا"
},
{
  "name": "Inverell Airport مطار إنverell",
  "city": "Inverell إنverell",
  "country": "Australia أستراليا"
},
{
  "name": "Gogebic-Iron County Airport مطار جوجيبك-مقاطعة إيرون",
  "city": "Ironwood إيرونوود",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Iwami Airport مطار إيوامي",
  "city": "Iwami إيوامي",
  "country": "Japan اليابان"
},
{
  "name": "Agartala Airport مطار أجادالا",
  "city": "Gandhigram غاندهيغرام",
  "country": "India الهند"
},
{
  "name": "Bagdogra Airport مطار باغدورا",
  "city": "Bagdogra باغدورا",
  "country": "India الهند"
},
{
  "name": "Chandigarh Airport مطار تشاندغار",
  "city": "Bhabat بهابات",
  "country": "India الهند"
},
{
  "name": "Bamrauli Airport مطار بامراولي",
  "city": "Allahabad الله أباد",
  "country": "India الهند"
},
{
  "name": "Mangalore Airport مطار مانجالور",
  "city": "Mulur مولور",
  "country": "India الهند"
},
{
  "name": "Belgaum Airport مطار بلغاوم",
  "city": "Kangrali كانغرا لي",
  "country": "India الهند"
},
{
  "name": "India مطار الهند",
  "city": "Lilabari ليلا باري",
  "country": "India الهند"
},
{
  "name": "Jammu Airport مطار جامو",
  "city": "Jammu Cantt جامو",
  "country": "India الهند"
},
{
  "name": "Leh Airport مطار ليه",
  "city": "Leh ليه",
  "country": "India الهند"
},
{
  "name": "Madurai Airport مطار مادوراي",
  "city": "Harveypatti هارفايباتي",
  "country": "India الهند"
},
{
  "name": "Birsa Munda Airport مطار بيرسا موند",
  "city": "Ranchi رانشي",
  "country": "India الهند"
},
{
  "name": "Kumbhirgram Airport مطار كومبهيرغرام",
  "city": "Tarapur تارا بور",
  "country": "India الهند"
},
{
  "name": "Aurangabad Airport مطار أورا نج آباد",
  "city": "Aurangabad أورا نج آباد",
  "country": "India الهند"
},
{
  "name": "Sonari Airport مطار سوناري",
  "city": "Jamshedpur جامشيد بور",
  "country": "India الهند"
},
{
  "name": "Kandla Airport مطار كاندلا",
  "city": "Gandhidham غانديدام",
  "country": "India الهند"
},
{
  "name": "Vir Savarkar Airport مطار فير سافاركار",
  "city": "Port Blair بورت بلير",
  "country": "India الهند"
},
{
  "name": "Inyokern Airport مطار إنيوكيرن",
  "city": "Inyokern إنيوكيرن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Izumo Airport مطار إيزومو",
  "city": "Hikawa-cho هيكاوا-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Jackson Hole Airport مطار جاكسون هول",
  "city": "Jackson جاكسون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sanganer Airport مطار سانغانيير",
  "city": "Jaipur جايبور",
  "country": "India الهند"
},
{
  "name": "Jalapa Airport مطار خالابا",
  "city": "Jalapa خالابا",
  "country": "Mexico المكسيك"
},
{
  "name": "Jackson International Airport مطار جاكسون الدولي",
  "city": "Pearl بيرل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ilulissat Airport مطار إيلوليسات",
  "city": "Ilulissat إيلوليسات",
  "country": "Greenland غرينلاند"
},
{
  "name": "Jacksonville International Airport مطار جاكسونفيل الدولي",
  "city": "Jacksonville جاكسونفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Joacaba Airport مطار جواكابا",
  "city": "Joaçaba جواكابا",
  "country": "Brazil البرازيل"
},
{
  "name": "Christianshab Airport مطار كريستيانشهاب",
  "city": "Qasigiannguit قاسجيانغويت",
  "country": "Greenland غرينلاند"
},
{
  "name": "Julia Creek Aerodrome مطار جوليا كريك",
  "city": "Julia Creek جوليا كريك",
  "country": "Australia أستراليا"
},
{
  "name": "Ceuta Heliport مطار سبتة الهيلوكوبتر",
  "city": "Ceuta سبتة",
  "country": "Spain إسبانيا"
},
{
  "name": "Francisco de Assis Airport مطار فرانسيسكو دي أسيز",
  "city": "Juiz de Fora جويز دي فورا",
  "country": "Brazil البرازيل"
},
{
  "name": "Jodhpur Airport مطار جودبور",
  "city": "Jodhpur جودبور",
  "country": "India الهند"
},
{
  "name": "Cariri Regional Airport مطار كاريلي الإقليمي",
  "city": "Juazeiro do Norte جوازييرو دو نورتي",
  "country": "Brazil البرازيل"
},
{
  "name": "Jingde Town مطار جينغدي",
  "city": "Jingdezhen جينغدي تشن",
  "country": "China الصين"
},
{
  "name": "King Abdul Aziz International Airport مطار الملك عبد العزيز الدولي",
  "city": "Jeddah جدة",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Jefferson City Memorial Airport مطار ذاكرة جيفرسون سيتي",
  "city": "Holts Summit هولترز سومات",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Auisiait Airport مطار أويسيايت",
  "city": "Aasiaat آسيات",
  "country": "Greenland غرينلاند"
},
{
  "name": "Jeh مطار جيه",
  "city": "Jeh جيه",
  "country": "Marshall Islands جزر مارشال"
},
{
  "name": "Jersey Airport مطار جيرسي",
  "city": "St. Peter سانت بيتر",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "John F Kennedy International Airport مطار جون ف. كينيدي الدولي",
  "city": "Jamaica جامايكا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Paamiut مطار باموت",
  "city": "Paamiut باموت",
  "country": "Greenland غرينلاند"
},
{
  "name": "Jamnagar Airport مطار جامناغار",
  "city": "Jamnagar جامناغار",
  "country": "India الهند"
},
{
  "name": "Grand Canyon Heliport",
  "city": "Williams",
  "country": "United States"
},
{
  "name": "Jiayuguan Airport مطار جيايوغوان",
  "city": "Jiayuguan مدينة جيايوغوان",
  "country": "الصين China"
},
{
  "name": "Godhavn Airport مطار غودهافن",
  "city": "Qeqertarsuaq مدينة كيكيرتارسواك",
  "country": "Greenland غرينلاند"
},
{
  "name": "Ji An/Jing Gang Shan مطار جي آن/جينغ غانغ شان",
  "city": "Ji An مدينة جي آن",
  "country": "الصين China"
},
{
  "name": "Sultan Ismail Airport مطار السلطان إسماعيل",
  "city": "Senai مدينة سنغاي",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Gasa مطار غاسا",
  "city": "Jinghong مدينة جينغهونغ",
  "country": "الصين China"
},
{
  "name": "Kapalua West Maui Airport مطار كابالو و است ماوي",
  "city": "Lahaina مدينة لاهينا",
  "country": "United States"
},
{
  "name": "Holsteinsborg Airport مطار هولستينسبورغ",
  "city": "Sisimiut مدينة سيسيميوت",
  "country": "Greenland غرينلاند"
},
{
  "name": "Chautauqua County-Jamestown Airport مطار شوتوكوا مقاطعة-جاميستون",
  "city": "Jamestown مدينة جاميستون",
  "country": "United States"
},
{
  "name": "Djibouti Ambouli Airport مطار جيبوتي أمبولي",
  "city": "Djibouti City مدينة جيبوتي",
  "country": "Djibouti جيبوتي"
},
{
  "name": "Jijiga مطار جيجيغا",
  "city": "Jijiga مدينة جيجيغا",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Ikaria Island Airport مطار جزيرة إيكاريا",
  "city": "Evdilos مدينة إيفديليوس",
  "country": "Greece اليونان"
},
{
  "name": "Jimma مطار جيمما",
  "city": "Jimma مدينة جيمما",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Jiujiang مطار جيوجيانغ",
  "city": "Jiujiang مدينة جيوجيانغ",
  "country": "الصين China"
},
{
  "name": "Jinjiang مطار جينجيانغ",
  "city": "Jinjiang مدينة جينجيانغ",
  "country": "الصين China"
},
{
  "name": "Julianehab Heliport مطار جوليانهوب",
  "city": "Qaqortoq مدينة كاكوورتوك",
  "country": "Greenland غرينلاند"
},
{
  "name": "Joplin Regional Airport مطار جوبلين الإقليمي",
  "city": "Webb City مدينة ويب سيتي",
  "country": "United States"
},
{
  "name": "Jabalpur Airport مطار جابالبور",
  "city": "Bilpura مدينة بيلبورا",
  "country": "India الهند"
},
{
  "name": "Mikonos Airport مطار ميكونوس",
  "city": "Mikonos مدينة ميكونوس",
  "country": "Greece اليونان"
},
{
  "name": "Jamestown Municipal Airport مطار جاميستون البلدي",
  "city": "Jamestown مدينة جاميستون",
  "country": "United States"
},
{
  "name": "Jiamusi مطار جياوماوسي",
  "city": "Jiamusi مدينة جياوماوسي",
  "country": "الصين China"
},
{
  "name": "OR Tambo International Airport مطار OR تامبو الدولي",
  "city": "Johannesburg جوهانسبرغ",
  "country": "جنوب أفريقيا South Africa"
},
{
  "name": "Nanortalik Airport مطار نانورتاليك",
  "city": "Nanortalik نانورتاليك",
  "country": "غرينلاند Greenland"
},
{
  "name": "Narsaq Heliport مطار نارساق الهليكوبتر",
  "city": "Narsaq نارساق",
  "country": "غرينلاند Greenland"
},
{
  "name": "Juneau International Airport مطار جونيو الدولي",
  "city": "Juneau يونيو",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Naxos Airport مطار نكسوس",
  "city": "Naxos نكسوس",
  "country": "اليونان Greece"
},
{
  "name": "Jinzhou مطار جينزهو",
  "city": "Jinzhou جينزهو",
  "country": "الصين China"
},
{
  "name": "Joensuu Airport مطار جوينسوا",
  "city": "Ylämylly يلاميلي",
  "country": "فنلندا Finland"
},
{
  "name": "Adisucipto Airport مطار أديسوكبتو",
  "city": "Yogyakarta يوجياكرتا",
  "country": "إندونيسيا Indonesia"
},
{
  "name": "Lauro Carneiro de Loyola Airport مطار لاورو كارنييرو دي لويولا",
  "city": "Joinville جويفيل",
  "country": "البرازيل Brazil"
},
{
  "name": "Jolo Airport مطار جولو",
  "city": "Jolo جولو",
  "country": "الفلبين Philippines"
},
{
  "name": "Presidente Castro Pinto International Airport مطار الرئيس كاسترو بينتو الدولي",
  "city": "Santa Rita سانتا ريتا",
  "country": "البرازيل Brazil"
},
{
  "name": "Ji Parana Airport مطار جي بارانا",
  "city": "Ji-Paraná جي بارانا",
  "country": "البرازيل Brazil"
},
{
  "name": "Greenland مطار غرينلاند",
  "city": "Qaarsut قارسوت",
  "country": "غرينلاند Greenland"
},
{
  "name": "Downtown Manhattan Heliport مطار مانهاتن المركزي",
  "city": "New York نيويورك",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Jorhat Airport مطار جورهات",
  "city": "Senchoa Gaon سنشوا غاون",
  "country": "الهند India"
},
{
  "name": "Kilimanjaro International Airport مطار كليمنجارو الدولي",
  "city": "Sanya سانيا",
  "country": "تنزانيا Tanzania"
},
{
  "name": "Jaisalmer Airport مطار جايسالمير",
  "city": "Jaisalmer جايسالمير",
  "country": "الهند India"
},
{
  "name": "Sitia Airport مطار سيتيا",
  "city": "Seteia سيتيا",
  "country": "اليونان Greece"
},
{
  "name": "Skiathos Airport مطار سكياثوس",
  "city": "Skiathos سكياثوس",
  "country": "اليونان Greece"
},
{
  "name": "Jessore Airport مطار جيسور",
  "city": "Jessore جيسور",
  "country": "Bangladesh بنغلاديش"
},
{
  "name": "Johnstown Cambria County Airport مطار جونستاون كامبريا كاونتي",
  "city": "Johnstown جونستاون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Maniitsoq Heliport مهبط مروحيات مانيتسوك",
  "city": "Maitsoq مانيتسوك",
  "country": "Greenland جرينلاند"
},
{
  "name": "Syros Island Airport مطار جزيرة سيروس",
  "city": "Ano Siros أنو سيروس",
  "country": "Greece اليونان"
},
{
  "name": "Santorini Airport مطار سانتوريني",
  "city": "Emborion إمبوريون",
  "country": "Greece اليونان"
},
{
  "name": "Astypalaia Island Airport مطار جزيرة أستي باليا",
  "city": "Astypalaea أستي باليا",
  "country": "Greece اليونان"
},
{
  "name": "Juba Airport مطار جوبا",
  "city": "Juba جوبا",
  "country": "Sudan السودان"
},
{
  "name": "Jujuy Airport مطار خوخوي",
  "city": "Santa Catalina سانتا كاتالينا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Juliaca Airport مطار جولياكا",
  "city": "Juliaca جولياكا",
  "country": "Peru بيرو"
},
{
  "name": "Jumla Airport مطار جملة",
  "city": "Jumla جملة",
  "country": "Nepal نيبال"
},
{
  "name": "Upernavik Heliport مهبط مروحيات أبرنافك",
  "city": "Upernavik أبرنافك",
  "country": "Greenland جرينلاند"
},
{
  "name": "Juzhou Airport مطار جوزهون",
  "city": "Juzhou جوزهون",
  "country": "China الصين"
},
{
  "name": "Toliara Airport مطار توليارا",
  "city": "Ankavandra أنكافاندرا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Jiroft Airport مطار جيرفت",
  "city": "Jiroft جيرفت",
  "country": "Iran إيران"
},
{
  "name": "Jyvaskyla Airport مطار جيفاسكيلا",
  "city": "Tikkakoski تيكاكوكي",
  "country": "Finland فنلندا"
},
{
  "name": "Jiu Zhai Huang Long Airport مطار جيو زهاي هوانغ لونغ",
  "city": "Song Pan سونغ بان",
  "country": "China الصين"
},
{
  "name": "Kariba Airport مطار كاريبا",
  "city": "Kariba كاريبا",
  "country": "Zimbabwe زيمبابوي"
},
{
  "name": "Kamishly Airport مطار القامشلي",
  "city": "Al Qamishli القامشلي",
  "country": "Syria سوريا"
},
{
  "name": "Kaduna Airport مطار كادونا",
  "city": "Afaka أفاكا",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Kajaani Airport مطار كاجاني",
  "city": "Paltaniemi بالتانيمي",
  "country": "Finland فنلندا"
},
{
  "name": "Kaltag مطار كالتاج",
  "city": "Kaltag كالتاج",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kano Mallam Aminu International Airport مطار كانو مالام أمينو الدولي",
  "city": "Kano كانو",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Kuusamo Airport مطار كوووسامو",
  "city": "Kuusamo كوووسامو",
  "country": "Finland فنلندا"
},
{
  "name": "Kaitaia Aerodrome مطار كايتايا",
  "city": "Kaitaia كايتايا",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Kawthaung Airport مطار كاوثونغ",
  "city": "Kawthaung كاوثونغ",
  "country": "Myanmar ميانمار"
},
{
  "name": "Kalbarri مطار كالباري",
  "city": "Kalbarri كالباري",
  "country": "Australia أستراليا"
},
{
  "name": "Birch Creek Airport مطار بيرش كريك",
  "city": "Birch Creek بيرش كريك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kabul International Airport مطار كابول الدولي",
  "city": "Kabul كابول",
  "country": "Afghanistan أفغانستان"
},
{
  "name": "Borispol Airport مطار بوريسبول",
  "city": "Kiev كييف",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Sultan Ismail Petra Airport مطار سلطان إسماعيل بترا",
  "city": "Kota Baharu كوتا بهارو",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Thailand مطار تايلاند",
  "city": "Krabi كرابي",
  "country": "Thailand تايلاند"
},
{
  "name": "Kuqa مطار كوقا",
  "city": "Kuqa كوقا",
  "country": "China الصين"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Coffman Cove كوفمان كوف",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pakistan مطار باكستان",
  "city": "Kadanwari كادانوري",
  "country": "Pakistan باكستان"
},
{
  "name": "Chignik Fisheries Airport مطار تشيجنيك فيشرز",
  "city": "Chignik Lagoon تشيجنيك لاجون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kuching Airport مطار كوتشينغ",
  "city": "Kuching كوتشينغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Chignik Lagoon Airport مطار تشيجنيك لاجون",
  "city": "Chignik Lagoon تشيجنيك لاجون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kahramanmaras Airport مطار كهرمان مرعش",
  "city": "Kahramanmaraş كهرمان مرعش",
  "country": "Turkey تركيا"
},
{
  "name": "Chignik Lake Airport مطار بحيرة تشيجنيك",
  "city": "Chignik تشيجنيك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kochi Airport مطار كوتشي",
  "city": "Nankoku-shi نانكوكو-شي",
  "country": "Japan اليابان"
},
{
  "name": "Kandahar International Airport مطار قندهار الدولي",
  "city": "Alaqadari Daman علاقداري دمان",
  "country": "Afghanistan أفغانستان"
},
{
  "name": "Wolter Monginsidi Airport مطار وولتر منغينسيدي",
  "city": "Kendari كيندارى",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Kardla East Airport مطار كاردلا إيست",
  "city": "Kerdlya كيردليا",
  "country": "Estonia إستونيا"
},
{
  "name": "Kaadedhdhoo مطار كعادهدهو",
  "city": "Kaadedhdhoo كعادهدهو",
  "country": "Maldives جزر المالديف"
},
{
  "name": "Kudadu مطار كودادو",
  "city": "Kadhdhoo كادهو",
  "country": "Maldives جزر المالديف"
},
{
  "name": "Skardu Airport مطار سکردو",
  "city": "Skardu سکردو",
  "country": "Pakistan باكستان"
},
{
  "name": "Kandavu Airport مطار كاندافو",
  "city": "Kandavu كاندافو",
  "country": "Fiji فيجي"
},
{
  "name": "Nanwalek مطار نانوالك",
  "city": "Nanwalek نانوالك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Keflavik International مطار كيفلافيك الدولي",
  "city": "Reykjavik ريكيافيك",
  "country": "Iceland آيسلندا"
},
{
  "name": "Kemerovo Airport مطار كيميروفو",
  "city": "Kemerovo كيميروفو",
  "country": "Russia روسيا"
},
{
  "name": "Ekwok مطار إكووك",
  "city": "Ekwok إكووك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kemi Airport مطار كيمي",
  "city": "Kemi كيمي",
  "country": "Finland فنلندا"
},
{
  "name": "Nepalganj مطار نيبالغنج",
  "city": "Nepalganj نيبالغنج",
  "country": "Nepal نيبال"
},
{
  "name": "Kerman Airport مطار كرمان",
  "city": "Kerman كرمان",
  "country": "Iran إيران"
},
{
  "name": "Kengtung Airport مطار كينغتونغ",
  "city": "Keng Tung كينغ تونغ",
  "country": "Myanmar ميانمار"
},
{
  "name": "Keewaywin مطار كيوي وين",
  "city": "Keewaywin كيوي وين",
  "country": "Canada كندا"
},
{
  "name": "Kiffa Airport مطار كيفة",
  "city": "Kiffa كِيفَة",
  "country": "Mauritania موريتانيا"
},
{
  "name": "False Pass Airport مطار فالس باس",
  "city": "False Pass فالس باس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kananga Airport مطار كانانغا",
  "city": "Kananga كانانغا",
  "country": "Congo الكونغو"
},
{
  "name": "Kingscote Airport مطار كينغس كوت",
  "city": "Kingscote كينغس كوت",
  "country": "Australia أستراليا"
},
{
  "name": "Kaliningradskaya Oblast مطار كالينينغراد",
  "city": "Kaliningrad كالينينغراد",
  "country": "Russia روسيا"
},
{
  "name": "Kagau مطار كاجاو",
  "city": "Kagau كاجاو",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Karaganda Airport مطار كاراغاندا",
  "city": "Qaraghandy كاراغاندي",
  "country": "Kazakhstan كازاخستان"
},
{
  "name": "Kalgoorlie Bolder Airport مطار كالغورلي بولدر",
  "city": "Kalgoorlie كالغورلي",
  "country": "Australia أستراليا"
},
{
  "name": "Koliganek Airport مطار كوليغانك",
  "city": "New Koliganek كوليغانك الجديدة",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kigali Airport مطار كيغالي",
  "city": "Kigali كيغالي",
  "country": "Rwanda رواندا"
},
{
  "name": "Kogalym International مطار كوغالم",
  "city": "Kogalym كوغالم",
  "country": "Russian Federation الاتحاد الروسي"
},
{
  "name": "Kos Airport مطار كوس",
  "city": "Antimacheia أنتيماخيا",
  "country": "Greece اليونان"
},
{
  "name": "Grayling Airport مطار غرايلينغ",
  "city": "Grayling غرايلينغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kashi Airport مطار كاشغر",
  "city": "Kashi كاشغر",
  "country": "China الصين"
},
{
  "name": "Kaohsiung International Airport مطار كاوشيونغ الدولي",
  "city": "Kaohsiung City مدينة كاوشيونغ",
  "country": "Taiwan تايوان"
},
{
  "name": "Karachi Civil Airport مطار كراتشي المدني",
  "city": "Karachi كراتشي",
  "country": "Pakistan باكستان"
},
{
  "name": "Khamti Airport مطار خامتي",
  "city": "Khamti خامتي",
  "country": "Myanmar ميانمار"
},
{
  "name": "Nanchang New Airport مطار نانتشانغ الجديد",
  "city": "Nanchang نانتشانغ",
  "country": "China الصين"
},
{
  "name": "Khasab Airport مطار خصب",
  "city": "Khasab خصب",
  "country": "Oman عمان"
},
{
  "name": "Khabarovsk Northeast Airport مطار خاباروفسك الشمالي الشرقي",
  "city": "Khabarovsk خاباروفسك",
  "country": "Russia روسيا"
},
{
  "name": "Khoy Airport مطار خوي",
  "city": "Khoy خوي",
  "country": "Iran إيران"
},
{
  "name": "Kauehi Airport مطار كاويهي",
  "city": "Kauehi كاويهي",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "Kristianstad Airport مطار كريستيانستاد",
  "city": "Tollarp تولارب",
  "country": "Sweden السويد"
},
{
  "name": "Kingfisher Lake Airport مطار بحيرة كينغ فيشر",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Kish Island Airport مطار كيش",
  "city": "Bandar Abbas بندر عباس",
  "country": "Iran إيران"
},
{
  "name": "Niigata Airport مطار نيغاتا",
  "city": "Niigata-shi نيغاتا",
  "country": "Japan اليابان"
},
{
  "name": "Kirkuk Airport مطار كركوك",
  "city": "Kirkuk كركوك",
  "country": "Iraq العراق"
},
{
  "name": "B J Vorster Airport مطار ب. ج. فورستر",
  "city": "Kimberley كيمبرلي",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Norman Manley مطار نورمان مانلي",
  "city": "Kingston كينغستون",
  "country": "Jamaica جامايكا"
},
{
  "name": "Kerry County Airport مطار مقاطعة كيري",
  "city": "Farranfore فارانفور",
  "country": "Ireland أيرلندا"
},
{
  "name": "Kisumu Airport مطار كيسومو",
  "city": "Kisumu كيسومو",
  "country": "Kenya كينيا"
},
{
  "name": "Kithira Airport مطار كيثيرا",
  "city": "Potamos Kythiron بوتاموس كيثيرون",
  "country": "Greece اليونان"
},
{
  "name": "Kishinev Southeast Airport مطار كيشينيف الجنوب الشرقي",
  "city": "Chisinau كيشيناو",
  "country": "Moldova مولدوفا"
},
{
  "name": "Kansai International Airport مطار كانساي الدولي",
  "city": "Tajiri-cho تاجيري",
  "country": "Japan اليابان"
},
{
  "name": "Yelovaya Airport مطار يلوفايا",
  "city": "Kansk كانسك",
  "country": "Russia روسيا"
},
{
  "name": "Koyuk مطار كويوك",
  "city": "Koyuk كويوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kitoi Seaplane Base قاعدة كيتوي للطائرات المائية",
  "city": "Kitoi Bay خليج كيتوي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Khon Kaen Airport مطار خون كاين",
  "city": "Khon Kaen خون كاين",
  "country": "Thailand تايلاند"
},
{
  "name": "Northern مطار نورثرن",
  "city": "Kokoda كوكودا",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Bay of Islands Airport مطار خليج الجزر",
  "city": "Kerikeri كيريكيري",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Kongiganak كونجيغاناك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Akiachak مطار أكياشاك",
  "city": "Akiachak أكياشاك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "New Kitakyushu Airport مطار كيتاكيوشو الجديد",
  "city": "Kita Kyushu كيتا كيوشو",
  "country": "Japan اليابان"
},
{
  "name": "Kirkenes Hoybuktmoen Airport مطار كيركنيس هويلبوكتموين",
  "city": "Hesseng هيسينغ",
  "country": "Norway النرويج"
},
{
  "name": "French Polynesia مطار بولينزيا الفرنسية",
  "city": "Kaukura Atoll كوكورا أتول",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "Ekuk Airport مطار إيكوك",
  "city": "Clarks Point نقطة كلارك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kalskag مطار كالسكاك",
  "city": "Kalskag كالسكاك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kolhapur Airport مطار كولهابور",
  "city": "Kolhapur كولهابور",
  "country": "India الهند"
},
{
  "name": "Levelock مطار ليفلوك",
  "city": "Levelock ليفلوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Larsen Bay مطار لارسن باي",
  "city": "Larsen Bay لارسن باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kalibo Airport مطار كاليبو",
  "city": "Kalibo كاليبو",
  "country": "Philippines الفلبين"
},
{
  "name": "Kalmar Airport مطار كالمار",
  "city": "Kalmar كالمار",
  "country": "Sweden السويد"
},
{
  "name": "Klagenfurt Airport مطار كلاجنفورت",
  "city": "Celovec سلوفنسك",
  "country": "Austria النمسا"
},
{
  "name": "Karlovy Vary Airport مطار كارلوفي فاري",
  "city": "Carlsbad كارلسباد",
  "country": "Czech Republic جمهورية التشيك"
},
{
  "name": "Klawock Seaplane Base قاعدة طائرات كلووك",
  "city": "Klawock كلووك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kalamata Airport مطار كالماتا",
  "city": "Kalamae كالماتاي",
  "country": "Greece اليونان"
},
{
  "name": "Kerema Airport مطار كيريمه",
  "city": "Kerema كيريمه",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "King Khalid Military قاعدة الملك خالد العسكرية",
  "city": "King Khalid Mil. City مدينة الملك خالد العسكرية",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kamembe Airport مطار كاميمبي",
  "city": "Kamembe كاميمبي",
  "country": "Rwanda رواندا"
},
{
  "name": "Wuchia Pa Airport مطار ووتشيا با",
  "city": "Kunming كونمينغ",
  "country": "China الصين"
},
{
  "name": "Miyazaki Airport مطار ميازاكي",
  "city": "Miyazaki-shi مدينة ميازاكي",
  "country": "Japan اليابان"
},
{
  "name": "Kumamoto Airport مطار كوماموتو",
  "city": "Kikuyo-machi كيكيو ماتشي",
  "country": "Japan اليابان"
},
{
  "name": "Manokotak مطار مانوكوتاك",
  "city": "Manokotak مانوكوتاك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Komatsu Airport مطار كوماتسو",
  "city": "Komatsu-shi مدينة كوماتسو",
  "country": "Japan اليابان"
},
{
  "name": "Kumasi Airport مطار كومسي",
  "city": "New Tafo نيو تافو",
  "country": "Ghana غانا"
},
{
  "name": "Kalemyo Airport مطار كالميه",
  "city": "Kalemyo كالميه",
  "country": "Myanmar ميانمار"
},
{
  "name": "Moser Bay مطار موزر باي",
  "city": "Moser Bay موزر باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kindu Airport مطار كيندو",
  "city": "Kindu كيندو",
  "country": "Congo الكونغو"
},
{
  "name": "Kings Lynn مطار كينجز لين",
  "city": "Kings Lynn كينجز لين",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "West Irian Jaya مطار ويست إيريان جايا",
  "city": "Kaimana كايمان",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Kinmen County مطار كينمن",
  "city": "Kinmen كينمن",
  "country": "Taiwan تايوان"
},
{
  "name": "Kakhonak مطار كاخونك",
  "city": "Kakhonak كاخونك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kone مطار كوني",
  "city": "Kone كوني",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "King Island Airport مطار جزيرة الملك",
  "city": "King Island جزيرة الملك",
  "country": "Australia أستراليا"
},
{
  "name": "Kanpur Airport مطار كانبور",
  "city": "Kanpur كانبور",
  "country": "India الهند"
},
{
  "name": "New Stuyahok مطار نيو ستويهوك",
  "city": "New Stuyahok نيو ستويهوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kununurra Airport مطار كونونورا",
  "city": "Durack دوراك",
  "country": "Australia أستراليا"
},
{
  "name": "Kailua-Kona International Airport مطار كايلوا-كونا الدولي",
  "city": "Kailua Kona كايلوا كون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Koumac مطار كوامك",
  "city": "Koumac كوامك",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "El Tari Airport مطار إيل تاري",
  "city": "Kupang كوابانغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Kirkwall Airport مطار كيركوال",
  "city": "Kirkwall كيركوال",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Kotlik كوتليك",
  "city": "Kotlik كوتليك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Koulamoutou كولاموتو",
  "city": "Koulamoutou كولاموتو",
  "country": "Gabon الغابون"
},
{
  "name": "Ganzhou Airport مطار غانزو",
  "city": "Ganzhou غانزو",
  "country": "China الصين"
},
{
  "name": "Olga Bay أولغا باي",
  "city": "Olga Bay أولغا باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska ألاسكا",
  "city": "Ouzinkie أوزينك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Point Baker Seaplane Base قاعدة طائرات مائية في بوينت بيكر",
  "city": "Point Baker بوينت بيكر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Port Clarence Coast Guard Station محطة خفر السواحل في بورت كلارنس",
  "city": "Brevig Mission بريفيغ ميسن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kipnuk كيپنوك",
  "city": "Kipnuk كيپنوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pohang Airport مطار بوهانغ",
  "city": "Pohang-Si بوهانغ",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Port Williams بورت ويليامز",
  "city": "Port Williams بورت ويليامز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska ألاسكا",
  "city": "Perryville بيري فيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska ألاسكا",
  "city": "Port Bailey بورت بايلي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Akutan Airport مطار أكوتان",
  "city": "Akutan أكوتان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kramfors Airport مطار كرامفورس",
  "city": "Nyland نيلاند",
  "country": "Sweden السويد"
},
{
  "name": "Papua New Guinea بابوا غينيا الجديدة",
  "city": "Kikori كيكوري",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Balice Airport مطار باليتس",
  "city": "Zabierzów زابيرزو",
  "country": "Poland بولندا"
},
{
  "name": "Korla كورلا",
  "city": "Korla كورلا",
  "country": "China الصين"
},
{
  "name": "Kiruna Airport مطار كيرونا",
  "city": "Kiruna كيرونا",
  "country": "Sweden السويد"
},
{
  "name": "Karup Airport مطار كاروب",
  "city": "Karup كاروب",
  "country": "Denmark الدنمارك"
},
{
  "name": "Krasnodar-Pashovskiy Airport مطار كراسنودار-باشوفسكي",
  "city": "Krasnodar كراسنودار",
  "country": "Russia روسيا"
},
{
  "name": "Kristiansand Airport مطار كريستيانساند",
  "city": "Kjevic كيفيك",
  "country": "Norway النرويج"
},
{
  "name": "Khartoum Airport مطار الخرطوم",
  "city": "Khartoum الخرطوم",
  "country": "Sudan السودان"
},
{
  "name": "Karamay Airport مطار كاراماي",
  "city": "Karamay كاراماي",
  "country": "China الصين"
},
{
  "name": "Kosrae Island Airport مطار جزيرة كوسراي",
  "city": "Tofol توفول",
  "country": "Federated States of Micronesia الولايات المتحدة الفيدرالية لميكرونيزيا"
},
{
  "name": "Barca Airport مطار باركا",
  "city": "Kosice كوسيس",
  "country": "Slovakia سلوفاكيا"
},
{
  "name": "Karlstad Airport مطار كارلستاد",
  "city": "Karlstad كارلستاد",
  "country": "Sweden السويد"
},
{
  "name": "Kassel Calden Airport مطار كاسل كالدن",
  "city": "Kalden كالدن",
  "country": "Germany ألمانيا"
},
{
  "name": "Bakhtaran Airport مطار باختاران",
  "city": "Kermanshah كرمانشاه",
  "country": "Iran إيران"
},
{
  "name": "Kasos Airport مطار كاسوس",
  "city": "St. Marina سانت مارينا",
  "country": "Greece اليونان"
},
{
  "name": "Kassala Airport مطار كسلا",
  "city": "Kassala كسلا",
  "country": "Sudan السودان"
},
{
  "name": "Kastoria Airport مطار كاستوريا",
  "city": "Argos Orestiko أرجوس أوريستيكو",
  "country": "Greece اليونان"
},
{
  "name": "Karshi South Airport مطار كارس الجنوبي",
  "city": "Qarshi قرشي",
  "country": "Uzbekistan أوزبكستان"
},
{
  "name": "Kristiansund Kvernberget Airport مطار كريستيانسوند كفربيرجيت",
  "city": "Kristiansund Nord كريستيانسوند نورد",
  "country": "Norway النرويج"
},
{
  "name": "Kars (abandoned) Airport مطار كارس (مهجور)",
  "city": "Kars كارس",
  "country": "Turkey تركيا"
},
{
  "name": "Kotlas Southeast Airport مطار كوتلاس جنوب شرق",
  "city": "Vel'sk فيل'Sك",
  "country": "Russia روسيا"
},
{
  "name": "Karratha Airport مطار كاراثا",
  "city": "Karratha كاراثا",
  "country": "Australia أستراليا"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Thorne Bay ثورن باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kerteh Airport مطار كيرتيه",
  "city": "Kerteh كيرتيه",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Tribhuvan International Airport مطار تريبووان الدولي",
  "city": "Kathmandu كاتماندو",
  "country": "Nepal نيبال"
},
{
  "name": "Ketchikan International Airport مطار كيتشيكان الدولي",
  "city": "Ketchikan كيتشيكان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Teller Mission Airport مطار تلر ميشن",
  "city": "Teller Mission تلر ميشن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kittila Airport مطار كيتلا",
  "city": "Kittila كيتلا",
  "country": "Finland فنلندا"
},
{
  "name": "Zendek Airport مطار زينديك",
  "city": "Ożarowice أوزارويتش",
  "country": "Poland بولندا"
},
{
  "name": "Kuantan Airport مطار كوانتان",
  "city": "Gambang غامبانغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Kudat Airport مطار كودات",
  "city": "Kudat كودات",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Kurumoch Airport مطار كوروماش",
  "city": "Syzran' سيزران",
  "country": "Russia روسيا"
},
{
  "name": "Australia مطار أستراليا",
  "city": "Kubin Island جزيرة كويبن",
  "country": "Australia أستراليا"
},
{
  "name": "Kushiro Airport مطار كوشيرو",
  "city": "Kushiro كوشيرو",
  "country": "Japan اليابان"
},
{
  "name": "Kasigluk Airport مطار كاسغلوك",
  "city": "Kasigluk كاسغلوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kuala Lumpur International Airport مطار كوالا لمبور الدولي",
  "city": "Sepang سبانغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Karmilava Airport مطار كارميلافا",
  "city": "Kovno كوفنو",
  "country": "Lithuania ليتوانيا"
},
{
  "name": "Kuopio Airport مطار كويوبيو",
  "city": "Toivala تويفالا",
  "country": "Finland فنلندا"
},
{
  "name": "Kulusuk Airport مطار كولوسوك",
  "city": "Kulusuk كولوسوك",
  "country": "Greenland غرينلاند"
},
{
  "name": "Kopitnari مطار كوبتناري",
  "city": "Kutaisi كوتايسي",
  "country": "Georgia جورجيا"
},
{
  "name": "Bhuntar Airport مطار بونتر",
  "city": "Bhuntar بونتر",
  "country": "India الهند"
},
{
  "name": "Gunsan Airport مطار غونسون",
  "city": "Gunsan-Si غونسون-سي",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Chrisoupolis Airport مطار كريسوبوليس",
  "city": "Khrysoupolis خريسوبوليس",
  "country": "Greece اليونان"
},
{
  "name": "Skovde Airport مطار سكوفي",
  "city": "Väring فارينغ",
  "country": "Sweden السويد"
},
{
  "name": "Elisavetpol مطار إليسافيتبول",
  "city": "Gyandzha غيانجا",
  "country": "Azerbaijan أذربيجان"
},
{
  "name": "Kavieng Airport مطار كافيينغ",
  "city": "Kavieng كافيينغ",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Kirovsk Airport مطار كيروفيسك",
  "city": "Kirovsk كيروفيسك",
  "country": "Russia روسيا"
},
{
  "name": "Kivalina مطار كفالينا",
  "city": "Kivalina كفالينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Carpiquet Airport مطار كاربكي",
  "city": "Carpiquet كاربكي",
  "country": "France فرنسا"
},
{
  "name": "Bucholz Army Air Field مطار بوكهولز",
  "city": "Kwajalein كواجالين",
  "country": "Marshall Islands جزر مارشال"
},
{
  "name": "Guizhou مطار غويزهو",
  "city": "Guiyang غويانغ",
  "country": "China الصين"
},
{
  "name": "Kuwait International Airport مطار الكويت الدولي",
  "city": "Kuwait City مدينة الكويت",
  "country": "Kuwait الكويت"
},
{
  "name": "Gwangju Airport مطار غوانغجو",
  "city": "Gwangju غوانغجو",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Kwigillingok مطار كويغيلينغوك",
  "city": "Kwigillingok كويغيلينغوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Li Chia Tsun Airport مطار لي تشيا تسون",
  "city": "Guilin غويلين",
  "country": "China الصين"
},
{
  "name": "Kowanyama مطار كوانياما",
  "city": "Kowanyama كوانياما",
  "country": "Australia أستراليا"
},
{
  "name": "Quinhagak مطار كوينهاك",
  "city": "Quinhagak كوينهاك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Village Seaplane Base-West Point مطار قاعدة الطائرات المائية في القرية - ويست بوينت",
  "city": "West Point ويست بوينت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kwethluk Airport مطار كويذلوك",
  "city": "Kwethluk كويذلوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kolwezi Airport مطار كولوزي",
  "city": "Kolwezi كولوزي",
  "country": "Congo جمهورية الكونغو"
},
{
  "name": "Kasaan SPB مطار كاسان SPB",
  "city": "Kasaan كاسان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Koro Island مطار جزيرة كورو",
  "city": "Koro Island جزيرة كورو",
  "country": "Fiji فيجي"
},
{
  "name": "Komsomolsk South Airport مطار كومي سومولسك الجنوبي",
  "city": "Komsomol'sk-na-Amure كومي سومولسك-نا-أمور",
  "country": "Russia روسيا"
},
{
  "name": "Katiu مطار كاتيو",
  "city": "Katiu كاتيو",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{"name": "Kyaukpyu Airport مطار كياوكبيو", "city": "Kyaukpyu كياوكبيو", "country": "Myanmar ميانمار"},
{"name": "Kayes Airport مطار كايس", "city": "Kayes كايس", "country": "Mali مالي"},
{"name": "Koyukuk مطار كويكووك", "city": "Koyukuk كويكووك", "country": "United States الولايات المتحدة"},
{"name": "Tyva مطار تيڤا", "city": "Kyzyl كيزيل", "country": "Russia روسيا"},
{"name": "Zachar Bay مطار زاتشار باي", "city": "Zachar Bay زاتشار باي", "country": "United States الولايات المتحدة"},
{"name": "Kozani Airport مطار كوزاني", "city": "Kozani كوزاني", "country": "Greece اليونان"},
{"name": "Kirbi Airport مطار كيربي", "city": "Zelenodol'sk زيلينودولسك", "country": "Russia روسيا"},
{"name": "Kzyl Orda Airport مطار كيزيل أوردا", "city": "Kzyl-Orda كيزيل أوردا", "country": "Kazakhstan كازاخستان"},
{"name": "Kastelorizo Airport مطار كاستيلوريسو", "city": "Kastelorizo كاستيلوريسو", "country": "Greece اليونان"},
{"name": "Luanda 4 de Fevereiro Airport مطار لواندا 4 فيفيري", "city": "Luanda لواندا", "country": "Angola أنغولا"},
{"name": "Nadzab Airport مطار نادزاب", "city": "Lae لاي", "country": "Papua New Guinea بابوا غينيا الجديدة"},
{"name": "Servel Airport مطار سيرفيل", "city": "Lannion لانيون", "country": "France فرنسا"},
{"name": "Lajes Airport مطار لاجيش", "city": "Lages لاجيس", "country": "Brazil البرازيل"},
{"name": "Aklavik Airport مطار أكلافيك", "city": "Hay River هاي ريفر", "country": "Canada كندا"},
{"name": "Lansing Capital City Airport مطار لانسينغ كابيتال سيتي", "city": "Lansing لانسينغ", "country": "United States الولايات المتحدة"},
{"name": "Laoag International Airport مطار لاواج الدولي", "city": "San Nicolas سان نيكولاس", "country": "Philippines الفلبين"},
{"name": "General Manuel Marquez de Leon International Air مطار الجنرال مانويل ماركيز دي ليون الدولي", "city": "La Paz لا باز", "country": "Mexico المكسيك"},
{"name": "Al Bayda' مطار البيضاء", "city": "Beida بيدا", "country": "Libya ليبيا"},
{"name": "General Brees Field مطار الجنرال بريز", "city": "Laramie لaramى", "country": "United States الولايات المتحدة"},
{"name": "Mccarran International Airport مطار مكارين الدولي", "city": "Las Vegas لاس فيغاس", "country": "United States الولايات المتحدة"},
{"name": "Lamu Airport مطار لامو", "city": "Lamu لامو", "country": "Kenya كينيا"},
{"name": "Lawton Municipal Airport مطار لوتون البلدي", "city": "Lawton لوتون", "country": "United States الولايات المتحدة"},
{"name": "Los Angeles International Airport مطار لوس أنجلوس الدولي", "city": "Los Angeles لوس أنجلوس", "country": "United States الولايات المتحدة"},
{"name": "Leeds Bradford Airport مطار ليدز برادفورد", "city": "Leeds ليدز", "country": "United Kingdom المملكة المتحدة"},
{"name": "Lubbock International Airport مطار لابوك الدولي", "city": "Lubbock لابوك", "country": "United States الولايات المتحدة"},
{"name": "Lubeck Airport مطار لوبيك", "city": "Lubeque لوبيك", "country": "Germany ألمانيا"},
{"name": "Khujand مطار خوجند", "city": "Khudzhand خوجند", "country": "Tajikistan طاجيكستان"},
{"name": "Westmoreland County Airport مطار مقاطعة ويستمورلاند", "city": "Latrobe لاتروب", "country": "United States الولايات المتحدة"},
{"name": "Lee Bird Field Airport مطار لي بيرد فيلد", "city": "North Platte نورث بلات", "country": "United States الولايات المتحدة"},
{"name": "Mutiara Airport مطار موتيارا", "city": "Ende إندي", "country": "Indonesia إندونيسيا"}
,
{
  "name": "Long Banga مطار لونغ بانغ",
  "city": "Long Banga لونغ بانغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Northern مطار نورثرن",
  "city": "Labasa لاباسا",
  "country": "Fiji فيجي"
},
{
  "name": "Labuan Airport مطار لابوان",
  "city": "Victoria فيكتوريا",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Libreville Leon M Ba Airport مطار ليبرفيل ليون م با",
  "city": "Libreville ليبرفيل",
  "country": "Gabon الغابون"
},
{
  "name": "Larnaca Airport مطار لارنكا",
  "city": "Larnaca لارنكا",
  "country": "Cyprus قبرص"
},
{
  "name": "Goloson International Airport مطار غولوسون الدولي",
  "city": "La Ceiba لا سيبا",
  "country": "Honduras هندوراس"
},
{
  "name": "La Coruna Airport مطار لا كورونيا",
  "city": "S Esteban إس إستيبا",
  "country": "Spain إسبانيا"
},
{
  "name": "Lake Charles Regional Airport مطار بحيرة تشارلز الإقليمي",
  "city": "Lake Charles بحيرة تشارلز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lodz Lublinek مطار لودز لوبيليك",
  "city": "Lodz لودز",
  "country": "Poland بولندا"
},
{
  "name": "Rickenbacker International Airport مطار ريكينباكر الدولي",
  "city": "Columbus كولومبوس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "La Chorrera Airport مطار لا تشوريرا",
  "city": "La Chorrera لا تشوريرا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Longyan مطار لونغيان",
  "city": "Longyan لونغيان",
  "country": "China الصين"
},
{
  "name": "London City Airport مطار مدينة لندن",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Londrina Airport مطار لندنرينا",
  "city": "Londrina لندنرينا",
  "country": "Brazil البرازيل"
},
{
  "name": "Ossun Airport مطار أوسون",
  "city": "Juillan جويان",
  "country": "France فرنسا"
},
{
  "name": "Leshukonskoye Airport مطار ليشوكونسكي",
  "city": "Leshukonskoye ليشوكونسكي",
  "country": "Russia روسيا"
},
{
  "name": "Lord Howe Island Airport مطار جزيرة لورد هاو",
  "city": "Lord Howe Island جزيرة لورد هاو",
  "country": "Australia أستراليا"
},
{
  "name": "Lamidanda Airport مطار لاميدندا",
  "city": "Lamidanda لاميدندا",
  "country": "Nepal نيبال"
},
{
  "name": "Lahad Datu Airport مطار لاهاد داتو",
  "city": "Lahad Datu لاهاد داتو",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Landivisiau Airport مطار لانديفيزيو",
  "city": "Landivisiau لانديفيزيو",
  "country": "France فرنسا"
},
{
  "name": "City of Derry Airport مطار مدينة ديري",
  "city": "Londonderry لندن ديري",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Learmonth Airport مطار ليرمونث",
  "city": "Learmonth ليرمونث",
  "country": "Australia أستراليا"
},
{
  "name": "Lebanon Municipal Airport مطار لبنان البلدي",
  "city": "West Lebanon غرب لبنان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pulkuvo 2 Airport مطار بولكوفو 2",
  "city": "St. Petersburg سانت بطرسبرغ",
  "country": "Russia روسيا"
},
{
  "name": "Le Havre مطار لو هافر",
  "city": "Le Havre لو هافر",
  "country": "France فرنسا"
},
{
  "name": "Almeria Airport مطار الميريا",
  "city": "Almeria الميريا",
  "country": "Spain إسبانيا"
},
{
  "name": "Leipzig-Halle Airport مطار لايبزيغ-هاله",
  "city": "Schkeuditz شكويديتس",
  "country": "Germany ألمانيا"
},
{
  "name": "Aeropuero de Bajio مطار باخيو",
  "city": "Leon ليون",
  "country": "Spain إسبانيا"
},
{
  "name": "Leinster Airport مطار لاينستر",
  "city": "Sir Samuel سير صموئيل",
  "country": "Australia أستراليا"
},
{
  "name": "Gen. A.V. Cobo مطار جنرال أ.ف. كوبو",
  "city": "Leticia ليتيسيا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Bureta Airport مطار بوريطا",
  "city": "Bureta بوريطا",
  "country": "Fiji فيجي"
},
{
  "name": "Blue Grass Field مطار بلو غراس فيلد",
  "city": "Lexington ليكسيغتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lamerd Airport مطار لامرد",
  "city": "Lamerd لامرد",
  "country": "Iran إيران"
},
{
  "name": "Lafayette Regional Airport مطار لافاييت الإقليمي",
  "city": "Lafayette لافاييت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lome Tokoin Airport مطار لومي توكوان",
  "city": "Lome لومي",
  "country": "Togo توغو"
},
{
  "name": "LaGuardia Airport مطار لا غارديا",
  "city": "Flushing فلاشينغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Long Beach Daugherty Field Airport مطار لونغ بيتش دورتيفيلد",
  "city": "Long Beach لونغ بيتش",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Bierset Airport مطار بييرسيت",
  "city": "Velroux فيلرو",
  "country": "Belgium بلجيكا"
},
{
  "name": "Deadmans Cay Airport مطار كاي موتى",
  "city": "Deadmans Cay كاي موتى",
  "country": "Bahamas جزر البهاما"
},
{
  "name": "Langkawi International Airport مطار لنكاوي الدولي",
  "city": "Kuah كواه",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Long Lellang مطار لونغ ليلا",
  "city": "Long Lellang لونغ ليلا",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Legazpi Airport مطار ليغازبي",
  "city": "Daraga داراغا",
  "country": "Philippines الفلبين"
},
{
  "name": "Lago Agrio Airport مطار لاجوا أغريو",
  "city": "Lago Agrio لاجوا أغريو",
  "country": "Ecuador الإكوادور"
},
{
  "name": "London Gatwick Airport مطار لندن غاتويك",
  "city": "Horley هورلي",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Lahore Airport مطار لاهور",
  "city": "Lahore لاهور",
  "country": "Pakistan باكستان"
},
{
  "name": "New South Wales مطار نيو ساوث ويلز",
  "city": "Lightning Ridge لايتنينغ ريدج",
  "country": "Australia أستراليا"
},
{
  "name": "London Heathrow Airport مطار لندن هيثرو",
  "city": "Hounslow هونسلوي",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Lanzhou Airport مطار لانزهو",
  "city": "Lanzhou لانزهو",
  "country": "China الصين"
},
{
  "name": "Loyalty Islands Airport مطار جزر الولاء",
  "city": "Wé وي",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "Bellegarde Airport مطار بيلغارد",
  "city": "Limoges ليموج",
  "country": "France فرنسا"
},
{
  "name": "Lihue Airport مطار ليهوي",
  "city": "Lihue ليهوي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lesquin Airport مطار ليسكين",
  "city": "Fretin فريتين",
  "country": "France فرنسا"
},
{
  "name": "Jorge Chavez Airport مطار خورخي شافيز",
  "city": "Ventanilla فينتانيلا",
  "country": "Peru بيرو"
},
{
  "name": "Linate Airport مطار ليناتي",
  "city": "Peschiera Borromeo بيسكويرا بوروميو",
  "country": "Italy إيطاليا"
},
{
  "name": "Limon International Airport مطار ليمن الدولي",
  "city": "Pto. Limon بورتو ليمن",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Tomas Guardia International Airport مطار توماس غارثيا الدولي",
  "city": "Liberia ليبرية",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Lisbon Airport مطار لشبونة",
  "city": "Lisbon لشبونة",
  "country": "Portugal البرتغال"
},
{
  "name": "Adams Field Airport مطار آدامز فيلد",
  "city": "Little Rock ليتل روك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Loikaw Airport مطار لوياو",
  "city": "Loi-kaw لوياو",
  "country": "Myanmar ميانمار"
},
{
  "name": "Lijiang مطار ليجيانغ",
  "city": "Lijiang City مدينة ليجيانغ",
  "country": "China الصين"
},
{
  "name": "Ljubljana Airport مطار ليوبليانا",
  "city": "Ljubljana ليوبليانا",
  "country": "Slovenia سلوفينيا"
},
{
  "name": "Larantuka مطار لارنتوكا",
  "city": "Larantuka لارنتوكا",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Lakemba Island مطار لاكيما",
  "city": "Lakeba ليكيمبا",
  "country": "Fiji فيجي"
},
{
  "name": "Lake Union Seaplane Base قاعدة الطائرات المائية بحيرة يونيون",
  "city": "Seattle سياتل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lokichoggio Airport مطار لوكيتشوجيو",
  "city": "Lokichoggio لوكيتشوجيو",
  "country": "Kenya كينيا"
},
{
  "name": "Long Akah مطار لونغ آكاه",
  "city": "Long Akah لونغ آكاه",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Banak Airport مطار بانك",
  "city": "Lakeselv ليكسيليف",
  "country": "Norway النرويج"
},
{
  "name": "Leknes Airport مطار ليكنيس",
  "city": "Leknes ليكنيس",
  "country": "Norway النرويج"
},
{
  "name": "Amausi International Airport مطار أماوسي الدولي",
  "city": "Lucknow لوكنو",
  "country": "India الهند"
},
{
  "name": "Kallax Airport مطار كالكسي",
  "city": "Lulea لوليا",
  "country": "Sweden السويد"
},
{
  "name": "Lingling Airport مطار لينغ لينغ",
  "city": "LingLing لينغ لينغ",
  "country": "China الصين"
},
{
  "name": "Ethiopia مطار إثيوبيا",
  "city": "Lalibela لاليبيلا",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Alluitsup Paa Airport مطار ألوويتاب با",
  "city": "Alluitsup Paa ألوويتاب با",
  "country": "Greenland غرينلاند"
},
{
  "name": "Kamuzu International Airport مطار كاموزو الدولي",
  "city": "Lumbadzi لومبادزي",
  "country": "Malawi مالاوي"
},
{
  "name": "Lake Minchumina مطار بحيرة مينتشومينا",
  "city": "Lake Minchumina بحيرة مينتشومينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lamacarena Airport مطار لاماكارينا",
  "city": "San Juan de Arama سان خوان دي أراما",
  "country": "Colombia كولومبيا"
},
{
  "name": "Los Mochis Airport مطار لوس موتشيس",
  "city": "Ahome أهوم",
  "country": "Mexico المكسيك"
},
{
  "name": "Sarawak مطار ساراواك",
  "city": "Limbang ليمبانغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Lampedusa Airport مطار لامبيدوزا",
  "city": "Caltabellotta كالتابيلوتا",
  "country": "Italy إيطاليا"
},
{
  "name": "Klamath Falls International Airport مطار كلماث فالز الدولي",
  "city": "Klamath Falls كلماث فالز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Western مطار ويسترن",
  "city": "Lake Murray بحيرة موري",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Lamen Bay Airport مطار لامين باي",
  "city": "Lamen Bay لامين باي",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Lonorore Airport مطار لونورور",
  "city": "Panngi بانغي",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Yunnan مطار يunnan",
  "city": "Lincang لينكانغ",
  "country": "China الصين"
},
{
  "name": "Lincoln Municipal Airport مطار لينكولن البلدي",
  "city": "Lincoln لينكولن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Leonora Aerodrome مطار ليونورا",
  "city": "Leonora ليونورا",
  "country": "Australia أستراليا"
},
{
  "name": "Gerrit Denys Island مطار جيريت دينيس",
  "city": "Lihir Island جزيرة ليهير",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Lanai Airport مطار لاناى",
  "city": "Lanai City مدينة لاناى",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Linz Airport مطار لينز",
  "city": "Hoersching هورشينغ",
  "country": "Austria النمسا"
},
{
  "name": "Longana مطار لونغانا",
  "city": "Longana لونغانا",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Loja Airport مطار لوخا",
  "city": "Loja لوجا",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Lagos Murtala Muhammed Airport مطار لاجوس مورتالا محمد",
  "city": "Ikeja إيكيجا",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Bowman Field Airport مطار بومان فيلد",
  "city": "Louisville لويزفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Monclova Airport مطار مونكلوفا",
  "city": "Frontera فرونتيرا",
  "country": "Mexico المكسيك"
},
{
  "name": "Las Palmas Airport مطار لاس بالماس",
  "city": "Telde تيلد",
  "country": "Spain إسبانيا"
},
{
  "name": "El Alto International Airport مطار إلتو الدولي",
  "city": "La Paz لا باز",
  "country": "Bolivia بوليفيا"
},
{
  "name": "La Pedrera Airport مطار لا بيدريرا",
  "city": "La Pedrera لا بيدريرا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Saab Airport مطار ساب",
  "city": "Linkoping لينكوبينغ",
  "country": "Sweden السويد"
},
{
  "name": "Russia مطار روسيا",
  "city": "Lipetsk ليبيستك",
  "country": "Russia روسيا"
},
{
  "name": "Liverpool John Lennon Airport مطار ليفربول جون لينون",
  "city": "Liverpool ليفربول",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Lamap Airport مطار لاماب",
  "city": "Lamap لاماب",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Lappeenranta Airport مطار لابيينرانتا",
  "city": "Lappeenranta لابيينرانتا",
  "country": "Finland فنلندا"
},
{
  "name": "Louangphrabang Airport مطار لوانغفربانغ",
  "city": "Louangphrabang لوانغفربانغ",
  "country": "Laos لاوس"
},
{
  "name": "Lopez Island Airport مطار جزيرة لوبيز",
  "city": "Lopez Island جزيرة لوبيز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lampang Airport مطار لامبونغ",
  "city": "Lampang لامبونغ",
  "country": "Thailand تايلاند"
},
{
  "name": "Liepaja East Airport مطار ليبايا الشرقي",
  "city": "Liepaya ليبايا",
  "country": "Latvia لاتفيا"
},
{
  "name": "Loudes Airport مطار لود",
  "city": "Le Puy لو بوي",
  "country": "France فرنسا"
},
{
  "name": "Puerto Leguizamo Airport مطار بورتو ليغويزمو",
  "city": "Puerto Leguízamo بورتو ليغويزمو",
  "country": "Colombia كولومبيا"
},
{
  "name": "Laredo International Airport مطار لاريتو الدولي",
  "city": "Laredo لاريتو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Longreach Aerodrome مطار لونغريتش",
  "city": "Longreach لونغريتش",
  "country": "Australia أستراليا"
},
{
  "name": "Laleu Airport مطار لالي",
  "city": "La Rochelle لا روشيل",
  "country": "France فرنسا"
},
{
  "name": "La Romana Airport مطار لا رومانا",
  "city": "La Romana لا رومانا",
  "country": "Dominican Republic جمهورية الدومينيكان"
},
{
  "name": "Lar مطار لار",
  "city": "Lar لار",
  "country": "Iran إيران"
},
{
  "name": "Leros Airport مطار ليروس",
  "city": "Lero ليروس",
  "country": "Greece اليونان"
},
{
  "name": "Lann Bihoue Airport مطار لان بيهوا",
  "city": "Ploemeur بليمور",
  "country": "France فرنسا"
},
{
  "name": "Papua New Guinea مطار بابوا غينيا الجديدة",
  "city": "Losuia لوسويا",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "La Florida Airport مطار لا فلوريدا",
  "city": "Compañía Alta كومبانيه ألت",
  "country": "Chile تشيلي"
},
{
  "name": "La Crosse Municipal Airport مطار لا كروس",
  "city": "La Crosse لا كروس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lashio Airport مطار لاشيو",
  "city": "Lashio لاشيو",
  "country": "Myanmar ميانمار"
},
{
  "name": "Sumburgh Airport مطار سونبورغ",
  "city": "Shetland شيتلاند",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Josefa Camejo Airport مطار خوسيفا كاميجو",
  "city": "Las Piedras لاس بييدراس",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Terre-De-Haut Airport مطار تير دي أو",
  "city": "Trois-Rivières ثلاث نهر",
  "country": "Guadeloupe غواديلوب"
},
{
  "name": "Launceston Airport مطار لونسستون",
  "city": "Blessington بليسنجتون",
  "country": "Australia أستراليا"
},
{
  "name": "Lismore Airport مطار ليسمور",
  "city": "Lismore ليسمور",
  "country": "Australia أستراليا"
},
{
  "name": "Ghadames مطار غدامس",
  "city": "Ghadames غدامس",
  "country": "Libya ليبيا"
},
{
  "name": "Altay مطار ألتاي",
  "city": "Altai ألتاي",
  "country": "Mongolia منغوليا"
},
{
  "name": "Latakia Airport مطار اللاذقية",
  "city": "Djeble جبلة",
  "country": "Syria سوريا"
},
{
  "name": "London Luton Airport مطار لندن لوتون",
  "city": "Luton لوتون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Loreto Airport مطار لوريتو",
  "city": "Comondú كومونديو",
  "country": "Mexico المكسيك"
},
{
  "name": "La Mole Airport مطار لا مول",
  "city": "Grimaud جريماود",
  "country": "France فرنسا"
},
{
  "name": "Latacunga Airport مطار لاتاكونغا",
  "city": "Latacunga لاتاكونغا",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Lukla Airport مطار لوكلا",
  "city": "Solukhumbu سولوكومبو",
  "country": "Nepal نيبال"
},
{
  "name": "Luderitz Airport مطار لوديريتز",
  "city": "Luderitz لوديريتز",
  "country": "Namibia ناميبيا"
},
{
  "name": "Luke Air Force Base قاعدة لوك الجوية",
  "city": "Webb ويب",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lugano Airport مطار لوغانو",
  "city": "Agno أغنو",
  "country": "Switzerland سويسرا"
},
{
  "name": "Mangshi Airport مطار مانغشي",
  "city": "Luxi لوكسي",
  "country": "China الصين"
},
{
  "name": "Lusaka International Airport مطار لوساكا الدولي",
  "city": "Lusaka لوساكا",
  "country": "Zambia زامبيا"
},
{
  "name": "Luena Airport مطار لويينا",
  "city": "Luena لويينا",
  "country": "Angola أنغولا"
},
{
  "name": "Kalaupapa Airport مطار كالوا باپا",
  "city": "Kalaupapa كالوا باپا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "San Luis Airport مطار سان لويس",
  "city": "Villa General Roca فيلا جنرال روكا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Cape Lisburne Long-Range Radar Station محطة رادار كيب ليسبورن الطويلة",
  "city": "Point Hope بوينت هوب",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Indonesia Airport مطار إندونيسيا",
  "city": "Langgur لانجغور",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Luxembourg Airport مطار لوكسمبورغ",
  "city": "Sandweiler ساندويلر",
  "country": "Luxembourg لوكسمبورغ"
},
{
  "name": "Livingstone Airport مطار ليفينغستون",
  "city": "Livingstone ليفينغستون",
  "country": "Zambia زامبيا"
},
{
  "name": "Laverton Aerodrome مطار لافرتون",
  "city": "Laverton لافرتون",
  "country": "Australia أستراليا"
},
{
  "name": "Greenbrier Valley Airport مطار غرينباير فالي",
  "city": "Lewisburg لويسبرغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Indonesia Airport مطار إندونيسيا",
  "city": "Lewoleba لووليباه",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Gyumri Airport مطار جومري",
  "city": "Gyumri جومري",
  "country": "Armenia أرمينيا"
},
{
  "name": "Sknilov Airport مطار سكنيلوف",
  "city": "L'viv لفيف",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Lewiston Nez Perce County Airport مطار لوستون نيز بيرس",
  "city": "Lewiston لوستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lewistown Municipal Airport مطار لوستون البلدي",
  "city": "Lewistown لوستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lawas Airport مطار لواس",
  "city": "Lawas لواس",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Lhasa لاسا",
  "city": "Lhasa لاسا",
  "country": "China الصين"
},
{
  "name": "Luang Namtha لوانغ نامثا",
  "city": "Luang Namtha لوانغ نامثا",
  "country": "Lao People's Democratic Republic لاو"
},
{
  "name": "Luxor Airport مطار الأقصر",
  "city": "Luxor الأقصر",
  "country": "Egypt مصر"
},
{
  "name": "Limnos Airport مطار ليمnos",
  "city": "Moudhros مودروس",
  "country": "Greece اليونان"
},
{
  "name": "Luoyang Airport مطار لويانغ",
  "city": "Luoyang لويانغ",
  "country": "China الصين"
},
{
  "name": "Boddenfield Airport مطار بودينفيلد",
  "city": "Little Cayman كايمان الصغير",
  "country": "Cayman Islands جزر كايمان"
},
{
  "name": "Lycksele Airport مطار ليكسله",
  "city": "Lyoksele ليكسيلي",
  "country": "Sweden السويد"
},
{
  "name": "Lianyungang مطار ليانيونغانغ",
  "city": "Lianyungang ليانيونغانغ",
  "country": "China الصين"
},
{
  "name": "Lynchburg Regional Airport مطار لينشبرغ الإقليمي",
  "city": "Lynchburg لينشبرغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Linyi مطار ليني",
  "city": "Linyi ليني",
  "country": "China الصين"
},
{
  "name": "Faisalabad Airport مطار فيصل آباد",
  "city": "Shah Faisalabad شاه فيصل آباد",
  "country": "Pakistan باكستان"
},
{
  "name": "Svalbard Longyear Airport مطار سفالبارد لونغيار",
  "city": "Longyearbyen لونغياربيين",
  "country": "Norway النرويج"
},
{
  "name": "Lyon Airport مطار ليون",
  "city": "Colombier كولومبيير",
  "country": "France فرنسا"
},
{
  "name": "Lazaro Cardenas Airport مطار لازارو كارديناس",
  "city": "Arteaga أرتياغا",
  "country": "Mexico المكسيك"
},
{
  "name": "Liuzhou Airport مطار ليوزهو",
  "city": "Linzhou لينتشو",
  "country": "China الصين"
},
{
  "name": "Nankan مطار نانكان",
  "city": "Nangan نانغان",
  "country": "Taiwan تايوان"
},
{
  "name": "Luzhou Airport مطار لوتشو",
  "city": "Luzhou لوتشو",
  "country": "China الصين"
},
{
  "name": "Chennai International Airport مطار تشيناي الدولي",
  "city": "Kanchipuram كانشيبورام",
  "country": "India الهند"
},
{
  "name": "Maraba Airport مطار مارابا",
  "city": "Marabá مارابا",
  "country": "Brazil البرازيل"
},
{
  "name": "Barajas Airport مطار باراخاس",
  "city": "Madrid مدريد",
  "country": "Spain إسبانيا"
},
{
  "name": "Midland International Airport مطار ميدلاند الدولي",
  "city": "Midland ميدلاند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Madang Airport مطار مادانغ",
  "city": "Madang مادانغ",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Menorca Airport مطار منوركا",
  "city": "Mao ماو",
  "country": "Spain إسبانيا"
},
{
  "name": "Marshall Islands International Airport مطار جزر مارشال الدولي",
  "city": "Majuro مجورو",
  "country": "Marshall Islands جزر مارشال"
},
{
  "name": "Malakal Airport مطار مالاكل",
  "city": "Malakal مالاكل",
  "country": "Sudan السودان"
},
{
  "name": "General Sevando Canales Airport مطار الجنرال سيباندو كاناليس",
  "city": "Matamoros ماتاموروس",
  "country": "Mexico المكسيك"
},
{
  "name": "Manchester International Airport مطار مانشستر الدولي",
  "city": "Manchester مانشستر",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Eduardo Gomes International Airport مطار إدواردو غوميز الدولي",
  "city": "Manaus ماناوس",
  "country": "Brazil البرازيل"
},
{
  "name": "La Chinita International Airport مطار لا تشينيتا الدولي",
  "city": "Maracaibo ماراكايبو",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Manus Island Airport مطار جزيرة مانو",
  "city": "Lorengau لورينغو",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Society Islands Airport مطار جزر المجتمع",
  "city": "Papeete بابيتي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Eugenio Maria de Hostos Airport مطار يوجينيو ماريا دي هوستوس",
  "city": "Mayaguez ماياوجيز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Moi International Airport مطار موى الدولي",
  "city": "Mombasa مومباسا",
  "country": "Kenya كينيا"
},
{
  "name": "Mmabatho International Airport مطار ممباتو الدولي",
  "city": "Mmabatho ممباتو",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Okhotsk-Monbetsu Airport مطار أوخوتسك-مونبيستو",
  "city": "Monbetsu-shi مومبيستو",
  "country": "Japan اليابان"
},
{
  "name": "Maryborough Airport مطار ماريبوروه",
  "city": "Maryborough ماريبوروه",
  "country": "Australia أستراليا"
},
{
  "name": "Sangster International Airport مطار سانغستر الدولي",
  "city": "Montego Bay مونتيغو باي",
  "country": "Jamaica جامايكا"
},
{
  "name": "Manistee County-Blacker Airport مطار مقاطعة مانستي-بلاكير",
  "city": "Manistee مانستي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "MBS International Airport مطار إم بي إس الدولي",
  "city": "Freeland فري لاند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Masbate Airport مطار ماسبات",
  "city": "Masbate ماسبات",
  "country": "Philippines الفلبين"
},
{
  "name": "Mbambanakira مطار مابامباناكير",
  "city": "Mbambanakira مابامباناكير",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Merced Municipal Airport-Macready Field مطار مرسيد البلدي - حقل ماكريدي",
  "city": "Merced مرسيد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mcgrath Airport مطار مكغرات",
  "city": "Mcgrath مكغرات",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kansas City International Airport مطار كانساس سيتي الدولي",
  "city": "Kansas City كانساس سيتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mccook Municipal Airport مطار مكلوك البلدي",
  "city": "Mccook مكلوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Monte Carlo Heliport مطار مروحية مونت كارلو",
  "city": "Monaco-Ville موناكو-فيل",
  "country": "Monaco موناكو"
},
{
  "name": "Middle Georgia Regional Airport مطار منطقة جورجيا الوسطى",
  "city": "Macon مكون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Orlando International Airport مطار أورلاندو الدولي",
  "city": "Orlando أورلاندو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Macapa International Airport مطار ماكابا الدولي",
  "city": "Macapá ماكابا",
  "country": "Brazil البرازيل"
},
{
  "name": "Seeb International Airport مطار سيب الدولي",
  "city": "Muscat مسقط",
  "country": "Oman عمان"
},
{
  "name": "Mcarthur River Airport مطار نهر مكارثر",
  "city": "Mcarthur River نهر مكارثر",
  "country": "Australia أستراليا"
},
{
  "name": "Mason City Municipal Airport مطار ميسون سيتي البلدي",
  "city": "Clear Lake بحيرة كلير",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Makhachkala-Uytash Airport مطار مخاتشقلاء-أويتايش",
  "city": "Khasavyurt خسافيورت",
  "country": "Russia روسيا"
},
{
  "name": "Maroochydore Aerodrome مطار مروتشيدور",
  "city": "Mudjimba موديجمبا",
  "country": "Australia أستراليا"
},
{
  "name": "Sam Ratulangi Airport مطار سام راتولانجي",
  "city": "Manado مانادو",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Jose Maria Cordova Airport مطار خوسيه ماريا كوردوفا",
  "city": "Ríonegro ريونغرو",
  "country": "Colombia كولومبيا"
},
{
  "name": "Mudanjiang مطار موضانيانغ",
  "city": "Mudanjiang موضانيانغ",
  "country": "China الصين"
},
{
  "name": "Mbandaka Airport مطار مبانداكا",
  "city": "Mbandaka مبانداكا",
  "country": "Congo الكونغو"
},
{
  "name": "Mandalay Airport مطار ماندلاي",
  "city": "Mandalay ماندلاي",
  "country": "Myanmar ميانمار"
},
{
  "name": "Mar del Plata Airport مطار مار ديل بلاتا",
  "city": "Mar del Plata مار ديل بلاتا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Middle Caicos Airport مطار ميدل كايكوس",
  "city": "Lorimers لوريمر",
  "country": "Turks And Caicos Islands جزر تركس وكايكوس"
},
{
  "name": "Harrisburg International Airport مطار هاريسبرغ الدولي",
  "city": "Middletown ميدلتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Papua New Guinea مطار بابوا غينيا الجديدة",
  "city": "Mendi مندي",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Chicago Midway International Airport مطار شيكاغو ميدواي الدولي",
  "city": "Chicago شيكاغو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "El Plumerillo Airport مطار بلوميريلو",
  "city": "Mendoza مندوزا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Macae Airport مطار ماكاي",
  "city": "Macae ماكاي",
  "country": "Brazil البرازيل"
},
{
  "name": "Eloy Alfaro Airport مطار إيلوي ألفارو",
  "city": "Manta مانتا",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Madinah International Airport مطار المدينة المنورة الدولي",
  "city": "Al Madinah المدينة المنورة",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Loyalty Islands Airport مطار جزر الولاء",
  "city": "Tadine تادين",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "Malanje Airport مطار مالانجي",
  "city": "Malanje مالانجي",
  "country": "Angola أنغولا"
},
{
  "name": "Mehamn Airport مطار مهوهامن",
  "city": "Mehavn مهفان",
  "country": "Norway النرويج"
},
{
  "name": "Key Field Airport مطار كي فيلد",
  "city": "Meridian مريديان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Melbourne International Airport مطار ملبورن الدولي",
  "city": "Melbourne ملبورن",
  "country": "Australia أستراليا"
},
{
  "name": "Memphis International Airport مطار ممفيس الدولي",
  "city": "Memphis ممفيس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Polonia Airport مطار بولونيا",
  "city": "Medan ميدان",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Lic Benito Juarez International Airport مطار ليك بينيتو هويارز الدولي",
  "city": "Mexico City مكسيكو سيتي",
  "country": "Mexico المكسيك"
},
{
  "name": "Meghauli Airport مطار ميغوالي",
  "city": "Meghauli ميغوالي",
  "country": "Nepal نيبال"
},
{
  "name": "Miller International Airport مطار ميلر الدولي",
  "city": "Mcallen مكالين",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Moala Airport مطار موالا",
  "city": "Moala موالا",
  "country": "Fiji فيجي"
},
{
  "name": "Taiwan مطار تايوان",
  "city": "Matsu ماتسو",
  "country": "Taiwan تايوان"
},
{
  "name": "Macau Airport مطار ماكاو",
  "city": "Macau ماكاو",
  "country": "Macau ماكاو"
},
{
  "name": "Rogue Valley International-Medford Airport مطار روج فالي الدولي - ميدفورد",
  "city": "Central Point نقطة الوسط",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mfuwe Airport مطار ميفوي",
  "city": "Mfuwe ميفوي",
  "country": "Zambia زامبيا"
},
{
  "name": "Augusto Cesar Sandino International Airport مطار أوغستو سزار ساندين الدولي",
  "city": "Tipitapa تيبيتابا",
  "country": "Nicaragua نيكاراغوا"
},
{
  "name": "Margate Airport مطار مارغيت",
  "city": "Port Shepstone بورت شيبستون",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Montgomery Regional Airport مطار مونتغومري الإقليمي",
  "city": "Montgomery مونتغومري",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mogadishu Airport مطار مقديشو",
  "city": "Mogadishu مقديشو",
  "country": "Somalia الصومال"
},
{
  "name": "Mangaia مطار مانغاي",
  "city": "Mangaia Island جزيرة مانغاي",
  "country": "Cook Islands جزر كوك"
},
{
  "name": "Northern Territory مطار الإقليم الشمالي",
  "city": "Milingimbi ميلينغيمبي",
  "country": "Australia أستراليا"
},
{
  "name": "Morgantown Municipal Airport-Hart Field مطار مورغنتاون البلدي - حقل هارت",
  "city": "Morgantown مورغنتاون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mergui Airport مطار مَرْجُوي",
  "city": "Mergui مَرْجُوي",
  "country": "Myanmar ميانمار"
},
{
  "name": "Mashhad Airport مطار مشهد",
  "city": "Mashhad مشهد",
  "country": "Iran إيران"
},
{
  "name": "Mannheim City Airport مطار مانهايم سيتي",
  "city": "Mannheim مانهايم",
  "country": "Germany ألمانيا"
},
{
  "name": "Marsh Harbour Airport مطار مارش هاربر",
  "city": "Marsh Harbour مارش هاربر",
  "country": "Bahamas البهاما"
},
{
  "name": "Manhattan Municipal Airport مطار مانهاتن البلدي",
  "city": "Manhattan مانهاتن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Minsk International 1 مطار مينسك الدولي 1",
  "city": "Minsk مينسك",
  "country": "Belarus بيلاروس"
},
{
  "name": "Mariehamn Airport مطار ماريهامن",
  "city": "Maarianhamina ماريهامن",
  "country": "Finland فنلندا"
},
{
  "name": "Mather Airport مطار ماذر",
  "city": "Mather ماذر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Manchester-Boston Regional Airport مطار مانشستر-بوسطن الإقليمي",
  "city": "Manchester مانشستر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Miami International Airport مطار ميامي الدولي",
  "city": "Miami ميامي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Lic M Crecencio Rejon International Airport مطار ليك م كريسينسيو ريجون الدولي",
  "city": "Mérida مِرِيدا",
  "country": "Mexico المكسيك"
},
{
  "name": "Mian Yang مطار ميان يانغ",
  "city": "Mian Yang ميان يانغ",
  "country": "China الصين"
},
{
  "name": "Dr Gastao Vidigal Airport مطار الدكتور غاستاو فيديغال",
  "city": "Marilia ماريلية",
  "country": "Brazil البرازيل"
},
{
  "name": "Merimbula Aerodrome مطار مريمبولا",
  "city": "Merimbula مريمبولا",
  "country": "Australia أستراليا"
},
{
  "name": "Habib Bourguiba International Airport مطار الحبيب بورقيبة الدولي",
  "city": "Sidi al Ghudamisi سيدي الغضاميسي",
  "country": "Tunisia تونس"
},
{
  "name": "Saint Aignan Island مطار سانت آينيان",
  "city": "Misima Island جزيرة ميسما",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Toliara مطار توليارا",
  "city": "Manja مانجا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Moenjodaro Airport مطار موينجدرو",
  "city": "Mohenjodaro موهينجو دارو",
  "country": "Pakistan باكستان"
},
{
  "name": "Kjaerstad Airport مطار كجارستاد",
  "city": "Mosjoen موشين",
  "country": "Norway النرويج"
},
{
  "name": "Libya ليبيا",
  "city": "Mitiga ميتيغا",
  "country": "Libya ليبيا"
},
{
  "name": "Shark Bay Airport مطار شاطئ القرش",
  "city": "Monkey Mia مونيكي ميا",
  "country": "Australia أستراليا"
},
{
  "name": "Ngounie نغوني",
  "city": "Mouila مويلا",
  "country": "Gabon الغابون"
},
{
  "name": "Mbuji Mayi Airport مطار مبوحي ماي",
  "city": "Mbuji Mayi مبوحي ميا",
  "country": "Congo الكونغو"
},
{
  "name": "Mahajanga Amborovy Airport مطار مهاجانغا أمبوروفي",
  "city": "Mahajanga مهاجانغا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Mitilini Airport مطار ميتيليني",
  "city": "Mitilini ميتيليني",
  "country": "Greece اليونان"
},
{
  "name": "Murcia San Javier Airport مطار مورسيا سان خافيير",
  "city": "San Javier سان خافيير",
  "country": "Spain إسبانيا"
},
{
  "name": "Mirnyy ميرني",
  "city": "Mirnyj ميرني",
  "country": "Russia روسيا"
},
{
  "name": "Kansas City Downtown Airport مطار وسط مدينة كانساس",
  "city": "Kansas City كانساس سيتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "General Mitchell International Airport مطار جنرال ميتشل الدولي",
  "city": "Milwaukee ميلووكي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Muskegon County Airport مطار مقاطعة موسكيغون",
  "city": "Muskegon موسكيغون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Molokai Airport مطار مولوكاي",
  "city": "Hoolehua هولوهوا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sarawak مطار ساراواك",
  "city": "Mukah موكاه",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Makemo Airport مطار ماكيما",
  "city": "Makemo ماكيما",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Mopah Airport مطار موفاه",
  "city": "Merauke ميروكي",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Meekatharra Airport مطار ميكاتارا",
  "city": "Kumarina كومارينا",
  "country": "Australia أستراليا"
},
{
  "name": "Makokou Airport مطار ماكوكو",
  "city": "Makokou ماكوكو",
  "country": "Gabon الغابون"
},
{
  "name": "Rendani Airport مطار رينداني",
  "city": "Manokwari مانوكوار",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Mackay Airport مطار ماكاي",
  "city": "Mackay ماكاي",
  "country": "Australia أستراليا"
},
{
  "name": "Luqa Airport مطار لوكا",
  "city": "Curmi كورمي",
  "country": "Malta مالطا"
},
{
  "name": "Melbourne International Airport مطار ملبورن الدولي",
  "city": "Melbourne ملبورن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Male International Airport مطار ماليه الدولي",
  "city": "Male ماليه",
  "country": "Maldives المالديف"
},
{
  "name": "Malang مطار مالانغ",
  "city": "Malang مالانغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Bale Mulhouse Airport مطار بال ملهاوس",
  "city": "Basel Mulhouse Freiburg بازل ملهاوس فريبورغ",
  "country": "France فرنسا"
},
{
  "name": "Quad City Airport مطار كواد سيتي",
  "city": "Coal Valley كول فالي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Marshall مطار مارشال",
  "city": "Marshall مارشال",
  "country": "United States الولايات المتحدة"
},
{
  "name": "General Francisco J Mujica Airport مطار الجنرال فرانسيسكو خ. موجيكا",
  "city": "Álvaro Obregón ألفارو أوبريغون",
  "country": "Mexico المكسيك"
},
{
  "name": "Melilla Airport مطار مليلة",
  "city": "Melilla مليلة",
  "country": "Spain إسبانيا"
},
{
  "name": "Milos Island Airport مطار جزيرة ميلوس",
  "city": "Apollonia أبولونيا",
  "country": "Greece اليونان"
},
{
  "name": "Monroe Regional Airport مطار مونرو الإقليمي",
  "city": "Monroe مونرو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Monrovia Spriggs Payne Airport مطار مونروفيا سبريغز باين",
  "city": "Monrovia مونروفيا",
  "country": "Liberia ليبيريا"
},
{
  "name": "Erhac Airport مطار إرهق",
  "city": "Arga أرجا",
  "country": "Turkey تركيا"
},
{
  "name": "Manley Hot Springs مطار مانلي هوت سبرينغز",
  "city": "Manley Hot Springs مانلي هوت سبرينغز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Memanbetsu Airport مطار ميمانبسوتسو",
  "city": "Ozora-cho أوزورا-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Durham Tees Valley Airport مطار دورهام تيز فالي",
  "city": "Darlington دارلينغتون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Western Australia مطار أستراليا الغربية",
  "city": "Mount Magnet ماونت ماغنيت",
  "country": "Australia أستراليا"
},
{
  "name": "Mammoth June Lakes Airport مطار ماموث يونيو ليكس",
  "city": "Mammoth Lakes ماموث ليكس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Murmashi Airport مطار مورماشي",
  "city": "Apatity أبابتيني",
  "country": "Russia روسيا"
},
{
  "name": "Maio Airport مطار مايو",
  "city": "Vila do Maio فيلا دو مايو",
  "country": "Cape Verde كاب فيردي"
},
{
  "name": "Sturup Airport مطار ستوروب",
  "city": "Svedala سفيدالا",
  "country": "Sweden السويد"
},
{
  "name": "Miyako Airport مطار مياكو",
  "city": "Miyako Jima مياكو جيما",
  "country": "Japan اليابان"
},
{
  "name": "Mana Island Airstrip مطار مانا آيلاند",
  "city": "Mana Island مانا آيلاند",
  "country": "Fiji فيجي"
},
{
  "name": "Maningrida Airport مطار مانينجريدا",
  "city": "Maningrida مانينجريدا",
  "country": "Australia أستراليا"
},
{
  "name": "Mananjary Airport مطار ماننجاري",
  "city": "Mananjary ماننجاري",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Ninoy Aquino International Airport مطار نينوي أكينو الدولي",
  "city": "Parańaque باراناكي",
  "country": "Philippines الفلبين"
},
{
  "name": "Minto مطار مينتو",
  "city": "Minto مينتو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Moulmein Airport مطار موليمن",
  "city": "Moulmein موليمن",
  "country": "Myanmar ميانمار"
},
{
  "name": "Moa Airport مطار موآ",
  "city": "Moa موآ",
  "country": "Cuba كوبا"
},
{
  "name": "Mobile Regional Airport مطار موبيل الإقليمي",
  "city": "Mobile موبيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Montes Claros Airport مطار مونتيس كلاروس",
  "city": "Montes Claros مونتيس كلاروس",
  "country": "Brazil البرازيل"
},
{
  "name": "Modesto City County Airport-Harry Sham Field مطار مودستو",
  "city": "Modesto مودستو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Wai Oti Airport مطار واي أوتي",
  "city": "Maumere ماومير",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Mong Hsat Airport مطار مونغ سات",
  "city": "Mong Hsat مونغ سات",
  "country": "Myanmar ميانمار"
},
{
  "name": "Mitiaro Island Airport مطار ميتيارو",
  "city": "Mitiaro Island جزيرة ميتيارو",
  "country": "Cook Islands جزر كوك"
},
{
  "name": "Aro Airport مطار أرو",
  "city": "Bolsøya بولسوجا",
  "country": "Norway النرويج"
},
{
  "name": "Morondava Airport مطار موروندافا",
  "city": "Morondava موروندافا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Minot International Airport مطار مينو الدولي",
  "city": "Minot مينو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mountain Village Airport مطار ماونتن فيلج",
  "city": "Mountain Village قرية الجبل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Moranbah Airport مطار مورانبا",
  "city": "Moranbah مورانبا",
  "country": "Australia أستراليا"
},
{
  "name": "Society Islands Airport مطار جزر المجتمع",
  "city": "Papeete بابيتي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Mpacha Airport مطار مباتشا",
  "city": "Mpacha مباتشا",
  "country": "Namibia ناميبيا"
},
{
  "name": "Malay Airport مطار مالاي",
  "city": "Caticlan كاتيكلا",
  "country": "Philippines الفلبين"
},
{
  "name": "Frejorgues Airport مطار فريجورغ",
  "city": "Mauguio موغيو",
  "country": "France فرنسا"
},
{
  "name": "Maputo Airport مطار مابوتو",
  "city": "Maputo مابوتو",
  "country": "Mozambique موزمبيق"
},
{
  "name": "Mount Pleasant Airport مطار ماونت بليزنت",
  "city": "Mount Pleasant ماونت بليزنت",
  "country": "Falkland Islands جزر فوكلاند"
},
{
  "name": "Magnitogorsk Airport مطار ماغنيتوجورسك",
  "city": "Chelyabinsk تشيليابنسك",
  "country": "Russian Federation روسيا"
},
{
  "name": "Mildura Airport مطار ميلدورا",
  "city": "Mildura ميلدورا",
  "country": "Australia أستراليا"
},
{
  "name": "Mardin Airport مطار ماردين",
  "city": "Mardin ماردين",
  "country": "Turkey تركيا"
},
{
  "name": "Rossvoll Airport مطار روسفول",
  "city": "Skonseng سكونسينغ",
  "country": "Norway النرويج"
},
{
  "name": "Nelspruit Airport مطار نيلسبرايت",
  "city": "Nelspruit نيلسبرايت",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Sawyer International Airport مطار ساوير الدولي",
  "city": "Marquette ماركيت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Makale Airport مطار مكالي",
  "city": "Makale مكالي",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Misurata Airport مطار مصراتة",
  "city": "Misratah مصراتة",
  "country": "Libya ليبيا"
},
{
  "name": "Alberto Carnevalli Airport مطار ألبرتو كارنيفالي",
  "city": "Ejido إخيذو",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Mara Serena Airport مطار مَرا سيرينا",
  "city": "Mara Lodges مَرا لودجز",
  "country": "Kenya كينيا"
},
{
  "name": "Marignane Airport مطار ماريغنان",
  "city": "Marignane ماريغنان",
  "country": "France فرنسا"
},
{
  "name": "Plaisance International Airport مطار بلايزانس الدولي",
  "city": "Mahebourg ماهيبورغ",
  "country": "Mauritius موريشيوس"
},
{
  "name": "Mineral'nyye Vody Airport مطار مينيرالنيي فودي",
  "city": "Mineralnye Vody مينيرالني فودي",
  "country": "Russia روسيا"
},
{
  "name": "Monterey Peninsula Airport مطار شبه جزيرة مونتيري",
  "city": "Monterey مونتيري",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Moree Airport مطار موري",
  "city": "Moree موري",
  "country": "Australia أستراليا"
},
{
  "name": "Muskrat Dam مطار ماسكرات دام",
  "city": "Muskrat Dam ماسكرات دام",
  "country": "Canada كندا"
},
{
  "name": "Kent International Airport مطار كينت الدولي",
  "city": "Manston مانستون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Misawa Airport مطار ميساوا",
  "city": "Misawa-shi ميساوا",
  "country": "Japan اليابان"
},
{
  "name": "Muscle Shoals Regional Airport مطار ماسل شولز الإقليمي",
  "city": "Muscle Shoals ماسل شولز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Dane County Regional Airport-Truax Field مطار مقاطعة دين الإقليمي - حقل تروكس",
  "city": "Madison ماديسون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Missoula International Airport مطار ميسولا الدولي",
  "city": "Missoula ميسولا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Minneapolis St Paul International Airport مطار مينيابوليس سانت بول الدولي",
  "city": "St. Paul سانت بول",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Velikiydvor Airport مطار فيليكي دور",
  "city": "Minsk مينسك",
  "country": "Belarus بيلاروس"
},
{
  "name": "Mus Airport مطار ميوس",
  "city": "Mush موش",
  "country": "Turkey تركيا"
},
{
  "name": "Massena International Airport مطار ماسينا الدولي",
  "city": "Massena ماسينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Maastricht Airport مطار ماستريخت",
  "city": "Maastricht-Airport ماستريخت - مطار",
  "country": "Netherlands هولندا"
},
{
  "name": "Maseru Moshoeshoe Airport مطار ماسيرو موشويشوي",
  "city": "Maseru ماسيرو",
  "country": "Lesotho ليسوتو"
},
{
  "name": "Massawa مطار مصاوة",
  "city": "Massawa مصاوة",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "New Orleans International Airport مطار نيو أورليانز الدولي",
  "city": "Kenner كينر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Namibe مطار ناميبي",
  "city": "Namibe ناميبي",
  "country": "Angola أنغولا"
},
{
  "name": "Montrose Regional Airport مطار مونتروز الإقليمي",
  "city": "Montrose مونتروز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Metlakatla Sea Plane Base مطار متلاكاتلا البحري",
  "city": "Metlakatla متلاكاتلا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Los Garzones Airport مطار لوس غارزونيس",
  "city": "Los Garzones لوس غارزونيس",
  "country": "Colombia كولومبيا"
},
{
  "name": "Matsapa International Airport مطار ماتسابا الدولي",
  "city": "Manzini مانزيني",
  "country": "Swaziland سوازيلند"
},
{
  "name": "Minatitlan Airport مطار مينيتيتلان",
  "city": "Minatitlan مينيتيتلان",
  "country": "Mexico المكسيك"
},
{
  "name": "Mota Lava مطار موطا لافا",
  "city": "Mota Lava موطا لافا",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Gen Mariano Escobedo International Airport مطار جن مارiano إسكوبيدو الدولي",
  "city": "Pesquería بيسكيريا",
  "country": "Mexico المكسيك"
},
{
  "name": "Munda Airport مطار موند",
  "city": "Munda موند",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Maun Airport مطار موان",
  "city": "Maun موان",
  "country": "Botswana بوتسوانا"
},
{
  "name": "Franz-Josef-Strauss Airport مطار فرانز جوزيف شتراوس",
  "city": "Oberding أوبردينغ",
  "country": "Germany ألمانيا"
},
{
  "name": "Waimea Kohala Airport مطار وايميا كوهالا",
  "city": "Kamuela كامويلا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mersa Matruh Airport مطار مرسى مطروح",
  "city": "Marsa Matruh مرسى مطروح",
  "country": "Egypt مصر"
},
{
  "name": "Mauke Island مطار جزيرة موكي",
  "city": "Mauke Island جزيرة موكي",
  "country": "Cook Islands جزر كوك"
},
{
  "name": "Maturin Airport مطار ماتورين",
  "city": "Aguasay أوجاساي",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Marudi Airport مطار مارودي",
  "city": "Miri ميري",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Multan Airport مطار ملتان",
  "city": "Multan ملتان",
  "country": "Pakistan باكستان"
},
{
  "name": "Mara مطار مارا",
  "city": "Musoma موسوما",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Franceville Mvengue Airport مطار فرانسفيل مفيينغ",
  "city": "Franceville فرانسفيل",
  "country": "Gabon الغابون"
},
{
  "name": "Carrasco International Airport مطار كاراسكو الدولي",
  "city": "Montevideo مونتيفيديو",
  "country": "Uruguay أوروغواي"
},
{
  "name": "Mitu Airport مطار ميتو",
  "city": "Mitu ميتو",
  "country": "Colombia كولومبيا"
},
{
  "name": "Maroua Salak Airport مطار مروى سلاك",
  "city": "Maroua مروى",
  "country": "Cameroon الكاميرون"
},
{
  "name": "Aeroporto Max Feffer مطار ماكس فيفر",
  "city": "Mucuri موكوري",
  "country": "Brazil البرازيل"
},
{
  "name": "French Polynesia بولينيزيا الفرنسية",
  "city": "Mataiva ماتيفا",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Marthas Vineyard Airport مطار مارتاز فينيارد",
  "city": "Vineyard Haven فينيارد هافن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Williamson County Regional Airport مطار وليامسون الإقليمي",
  "city": "Marion ماريون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Vanuatu فانواتو",
  "city": "Maewo مايو",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Mwadui مطار مواندي",
  "city": "Mwadui مواندي",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Magwe مطار ماجوي",
  "city": "Magwe ماجوي",
  "country": "Myanmar ميانمار"
},
{
  "name": "Mwanza Airport مطار Mwanza",
  "city": "Ilemera إليميرا",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Papua New Guinea بابوا غينيا الجديدة",
  "city": "Moro مورو",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Gen Rodolfo Sanchez T International Airport مطار الجنرال رودولفو سانشيز تي الدولي",
  "city": "Mexicali ميكسيكالي",
  "country": "Mexico المكسيك"
},
{
  "name": "Morombe Airport مطار مورومبي",
  "city": "Morombe مورومبي",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Ploujean Airport مطار بلوجان",
  "city": "Morlaix مولايس",
  "country": "France فرنسا"
},
{
  "name": "Malpensa International Airport مطار مالبينسا الدولي",
  "city": "Cardano al Campo كاردانو ال كامبو",
  "country": "Italy إيطاليا"
},
{
  "name": "Maintirano مطار ماينتينار",
  "city": "Maintirano ماينتينار",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Moron Airport مطار مورن",
  "city": "Mörön كيندارى",
  "country": "Mongolia منغوليا"
},
{
  "name": "Siljan Airport مطار سيلجان",
  "city": "Mora مورا",
  "country": "Sweden السويد"
},
{
  "name": "Meixian مطار ميتشيان",
  "city": "Meixian ميتشيان",
  "country": "China الصين"
},
{
  "name": "Moruya Aerodrome مطار مورويا",
  "city": "Bingie بينجي",
  "country": "Australia أستراليا"
},
{
  "name": "Malindi Airport مطار ماليندي",
  "city": "Mombasa مومباسا",
  "country": "Kenya كينيا"
},
{
  "name": "Miyakejima Airport مطار مياكجيما",
  "city": "Miyake-mura مياكي مورا",
  "country": "Japan اليابان"
},
{
  "name": "Miltary & Civil Airport مطار عسكري ومدني",
  "city": "Abraham Bay أبراهام باي",
  "country": "Bahamas الباهاماس"
},
{
  "name": "Murray Island مطار موري جزيرة",
  "city": "Murray Island جزيرة موري",
  "country": "Australia أستراليا"
},
{
  "name": "Matsuyama Airport مطار ماتسوياما",
  "city": "Matsuyama-shi ماتسوياما شي",
  "country": "Japan اليابان"
},
{
  "name": "Mccall Airport مطار مكال",
  "city": "Mccall مكال",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Myrtle Beach International Airport مطار ميرتل بيتش الدولي",
  "city": "Myrtle Beach ميرتل بيتش",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Myitkyina Airport مطار ميتكيانا",
  "city": "Myitkyina ميتكيانا",
  "country": "Myanmar ميانمار"
},
{
  "name": "Mekoryuk مطار ميكوريك",
  "city": "Mekoryuk ميكوريك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mtwara Airport مطار متوارا",
  "city": "Ziwani زيواني",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Miri Airport مطار ميري",
  "city": "Miri ميري",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Magong Airport مطار ماغونغ",
  "city": "Makung City مدينة ماكونغ",
  "country": "Taiwan تايوان"
},
{
  "name": "Merzifon مطار مرزيفون",
  "city": "Merzifon مرزيفون",
  "country": "Turkey تركيا"
},
{
  "name": "Mopti Barbe Airport مطار مابتي باربي",
  "city": "Mopti مابتي",
  "country": "Mali مالي"
},
{
  "name": "La Nubia Airport مطار لا نوبيا",
  "city": "Villamaría فيلاماريا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Manzanillo Airport مطار مانزانيلو",
  "city": "Manzanillo مانزانيلو",
  "country": "Cuba كوبا"
},
{
  "name": "Mazar I Sharif Airport مطار مزار الشريف",
  "city": "Mazar-i-Sharif مزار الشريف",
  "country": "Afghanistan أفغانستان"
},
{
  "name": "General Rafael Buelna International Airport مطار الجنرال رافائيل بويلنا الدولي",
  "city": "Mazatlán مازاتلان",
  "country": "Mexico المكسيك"
},
{
  "name": "Mulu Airport مطار مولو",
  "city": "Mulu مولو",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Narrabri Airport مطار نارا بري",
  "city": "Bohena Creek بوهنه كريك",
  "country": "Australia أستراليا"
},
{
  "name": "Naracoorte Airport مطار نارا كورت",
  "city": "Naracoorte نارا كورت",
  "country": "Australia أستراليا"
},
{
  "name": "Sonegaon Airport مطار سونيجون",
  "city": "Nagpur ناغبور",
  "country": "India الهند"
},
{
  "name": "Nakhichevan Airport مطار ناخيشيفان",
  "city": "Nakhichevan ناخيشيفان",
  "country": "Azerbaijan أذربيجان"
},
{
  "name": "Nadi International Airport مطار نادى الدولى",
  "city": "Nadi نادى",
  "country": "Fiji فيجي"
},
{
  "name": "Nanchong Airport مطار نانتشونغ",
  "city": "Nanchong نانتشونغ",
  "country": "China الصين"
},
{
  "name": "Naples International Airport مطار نابولي الدولي",
  "city": "Naples نابولي",
  "country": "Italy إيطاليا"
},
{
  "name": "Qaanaaq مطار كواناق",
  "city": "Qaanaaq كواناق",
  "country": "Greenland غرينلاند"
},
{
  "name": "Nassau International Airport مطار ناساو الدولي",
  "city": "Nassau ناساو",
  "country": "Bahamas البهاماس"
},
{
  "name": "Augusto Severo International Airport مطار أوغستو سيفيرو الدولي",
  "city": "Natal ناتال",
  "country": "Brazil البرازيل"
},
{
  "name": "Napuka Island مطار نابوكا",
  "city": "Napuka Island جزيرة نابوكا",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Nevsehir Airport مطار نيفشهير",
  "city": "Nevsehir نيفشهير",
  "country": "Turkey تركيا"
},
{
  "name": "Narathiwat Airport مطار ناراتيوات",
  "city": "Narathiwat ناراتيوات",
  "country": "Thailand تايلند"
},
{
  "name": "Naberevnye Chelny Airport مطار نابريني تشيلني",
  "city": "Naberevnye Chelny نابريني تشيلني",
  "country": "Russia روسيا"
},
{
  "name": "Jomo Kenyatta International Airport مطار جومو كينياتا الدولي",
  "city": "Nairobi نيروبي",
  "country": "Kenya كينيا"
},
{
  "name": "Guantanamo Bay Naval Air Station قاعدة غوانتانامو الجوية",
  "city": "Caimanera كايمانيرا",
  "country": "Cuba كوبا"
},
{
  "name": "Nabire Airport مطار نابيري",
  "city": "Nabire نابيري",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "North Caicos Airport مطار شمال كايكوس",
  "city": "Bottle Creek Settlements مستوطنات بوتل كريك",
  "country": "Turks And Caicos Islands جزر تركس وكايكوس"
},
{
  "name": "Nice-Cote d'Azur Airport مطار نيس كوت دازور",
  "city": "Nice نيس",
  "country": "France فرنسا"
},
{
  "name": "Newcastle International Airport مطار نيوكاسل الدولي",
  "city": "Newcastle نيوكاسل",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Chenega مطار تشينيغا",
  "city": "New Chenega نيو تشينيغا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "مطار",
  "city": "Nukus نوكوس",
  "country": "Uzbekistan أوزبكستان"
},
{
  "name": "Meythet Airport مطار ميثيه",
  "city": "Pringy برينجي",
  "country": "France فرنسا"
},
{
  "name": "Nouadhibou Airport مطار نواذيبو",
  "city": "Port-Etienne بورت إتيان",
  "country": "Mauritania موريتانيا"
},
{
  "name": "Qiqihar مطار تشيكيهار",
  "city": "Qiqihar تشيكيهار",
  "country": "China الصين"
},
{
  "name": "Ndjamena Airport مطار نجامينا",
  "city": "N'Djamena نجامينا",
  "country": "Chad تشاد"
},
{
  "name": "Nador Airport مطار الناظور",
  "city": "Nador الناظور",
  "country": "Morocco المغرب"
},
{
  "name": "مطار",
  "city": "Neryungri نيريونغري",
  "country": "Russia روسيا"
},
{
  "name": "Newcastle Airport مطار نيوكاسل",
  "city": "Nevis نيفيس",
  "country": "Saint Kitts and Nevis سانت كيتس ونيفيس"
},
{
  "name": "Niuafo'ou Airport مطار نوافو",
  "city": "",
  "country": "Tonga تونغا"
},
{
  "name": "Ningbo Airport مطار نينغبو",
  "city": "Jiangshan جيانغشان",
  "country": "China الصين"
},
{
  "name": "Ngaoundere Airport مطار نغاوندري",
  "city": "Ngaoundéré نغاوندري",
  "country": "Cameroon الكاميرون"
},
{
  "name": "Ngau Island Airport مطار نغو آيلاند",
  "city": "Ngau Island نغو آيلاند",
  "country": "Fiji فيجي"
},
{
  "name": "Chubu International Airport مطار تشوبو الدولي",
  "city": "Tokoname-shi توكونامي",
  "country": "Japan اليابان"
},
{
  "name": "Nagasaki Airport مطار ناغازاكي",
  "city": "Omura-shi أومورا",
  "country": "Japan اليابان"
},
{
  "name": "Nha-Trang Airport مطار نها ترانغ",
  "city": "Nha Trang نها ترانغ",
  "country": "Vietnam فيتنام"
},
{
  "name": "Marquesas Islands Airport مطار جزر ماركيساس",
  "city": "Nuku Hiva نوكو هيفا",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Nikolai Airport مطار نيكولاي",
  "city": "Nikolai نيكولاي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Niamey Airport مطار نيامي",
  "city": "Niamey نيامي",
  "country": "Niger النيجر"
},
{
  "name": "Jacksonville Naval Air Station قاعدة جاكسونفيل الجوية",
  "city": "Jacksonville جاكسونفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Honolulu International Airport مطار هونولولو الدولي",
  "city": "Honolulu هونولولو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Nizhnevartovsk Northwest Airport مطار نيجني فارتوفسك الشمالي الغربي",
  "city": "Nizhnevartovsk نيجني فارتوفسك",
  "country": "Russia روسيا"
},
{
  "name": "Nouakchott Airport مطار نواكشوط",
  "city": "Nouakchott نواكشوط",
  "country": "Mauritania موريتانيا"
},
{
  "name": "Nanjing Lukou International Airport مطار نانجينغ لوكو الدولي",
  "city": "Nanjing نانجينغ",
  "country": "China الصين"
},
{
  "name": "Naukiti Airport مطار ناوكتي",
  "city": "Naukiti ناوكتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Nagoya Airport مطار ناغويا",
  "city": "Toyoyama-cho تويوياما-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Ndola Airport مطار ندولا",
  "city": "Ndola ندولا",
  "country": "Zambia زامبيا"
},
{
  "name": "Quetzalcoatl International Airport مطار كويتزالكواتل الدولي",
  "city": "Nuevo Laredo نيو لاردو",
  "country": "Mexico المكسيك"
},
{
  "name": "Darnley Island Airport مطار جزيرة دارنلي",
  "city": "Kubin Village قرية كوبين",
  "country": "Australia أستراليا"
},
{
  "name": "Nelson Lagoon Airport مطار خليج نيلسون",
  "city": "Nelson Lagoon نيلسون لاجون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Norfolk Island Airport مطار جزيرة نورفولك",
  "city": "Kingston كينغستون",
  "country": "Norfolk Island جزيرة نورفولك"
},
{
  "name": "Nikolaev Airport مطار نيكولايف",
  "city": "Mykolayiv ميكولايف",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Namangan Airport مطار نامانغان",
  "city": "Namangan نامانغان",
  "country": "Uzbekistan أوزبكستان"
},
{
  "name": "Nightmute Airport مطار نايت ميوت",
  "city": "Nightmute نايت ميوت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Makira Airport مطار مكيرا",
  "city": "Santa Ana سانتا آنا",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Nanning-Wuyu Airport مطار ناننينغ-ويو",
  "city": "Wuxu ووكسي",
  "country": "China الصين"
},
{
  "name": "Nondalton Airport مطار نوندالتون",
  "city": "Nondalton نوندالتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "مطار ناريان-مار",
  "city": "Naryan-Mar ناريان-مار",
  "country": "روسيا"
},
{
  "name": "مطار نان",
  "city": "نان",
  "country": "تايلاند"
},
{
  "name": "مطار نانيانغ",
  "city": "نانجيانغ",
  "country": "الصين"
},
{
  "name": "مطار نوسارا بيتش",
  "city": "نوسارا",
  "country": "كوستاريكا"
},
{
  "name": "مطار كونوت",
  "city": "نوك",
  "country": "أيرلندا"
},
{
  "name": "مطار نوجابريسك",
  "city": "نوجابريسك",
  "country": "روسيا"
},
{
  "name": "مطار نوزي بي فاسيني",
  "city": "هيل-فيل",
  "country": "مدغشقر"
},
{
  "name": "مطار لا تونتوتا",
  "city": "",
  "country": "كاليدونيا الجديدة"
},
{
  "name": "مطار هوا mbo",
  "city": "هوانغو",
  "country": "أنغولا"
},
{
  "name": "مطار كيميروفو",
  "city": "نوفوكوزنيتسكو",
  "country": "روسيا"
},
{
  "name": "مطار هاوكسباي",
  "city": "نابير",
  "country": "نيوزيلندا"
},
{
  "name": "مطار نيو بليموث",
  "city": "نيو بليموث",
  "country": "نيوزيلندا"
},
{
  "name": "مطار نيوكوين",
  "city": "نيوكوين",
  "country": "الأرجنتين"
},
{
  "name": "مطار نوكي",
  "city": "نوقي",
  "country": "كولومبيا"
},
{
  "name": "مطار سانت ماوجان",
  "city": "نيوكواي",
  "country": "المملكة المتحدة"
},
{
  "name": "مطار ناراندر",
  "city": "ناراندر",
  "country": "أستراليا"
},
{
  "name": "مطار كونغسانجن",
  "city": "نورشوبينغ",
  "country": "السويد"
},
{
  "name": "مطار ويزي",
  "city": "ويزي",
  "country": "ألمانيا"
},
{
  "name": "مطار ناريتا الدولي",
  "city": "ناريتا",
  "country": "اليابان"
},
{
  "name": "مطار نوشهر",
  "city": "نوشهر",
  "country": "إيران"
},
{
  "name": "مطار نسيمالين",
  "city": "ياوندي",
  "country": "الكاميرون"
},
{
  "name": "مطار نوريلسك أليكيل",
  "city": "كانسك",
  "country": "روسيا"
},
{
  "name": "مطار نيلسون",
  "city": "نيلسون",
  "country": "نيوزيلندا"
},
{
  "name": "Nakhon Si Thammarat Airport مطار ناخون سي ثمارات",
  "city": "Phra Phrom فْرَا فْرُوم",
  "country": "Thailand تايلاند"
},
{
  "name": "Chateau Bougon Airport مطار شاتو بوجون",
  "city": "Bouguenais بوجيناي",
  "country": "France فرنسا"
},
{
  "name": "Nantong Airport مطار نانتونغ",
  "city": "Nantong نانتونغ",
  "country": "China الصين"
},
{
  "name": "Williamtown Airport مطار ويليامتون",
  "city": "Ferodale فيرودال",
  "country": "Australia أستراليا"
},
{
  "name": "Normanton مطار نورمانتون",
  "city": "Normanton نورمانتون",
  "country": "Australia أستراليا"
},
{
  "name": "Noto Airport مطار نوتو",
  "city": "Anamizu-machi أناميزو",
  "country": "Japan اليابان"
},
{
  "name": "Niuatoputapu Airport مطار نيعوتوبوتابو",
  "city": "Niuatoputapu نيعوتوبوتابو",
  "country": "Tonga تونغا"
},
{
  "name": "Nurnberg Airport مطار نورنبرغ",
  "city": "Nuremberg نورنبرغ",
  "country": "Germany ألمانيا"
},
{
  "name": "Nuiqsut مطار نويكست",
  "city": "Nuiqsut نويكست",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Nukutavake مطار نوكوتافاكي",
  "city": "Nukutavake نوكوتافاكي",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "Nulato Airport مطار نولايتو",
  "city": "Nulato نولايتو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Nunapitchuk نونابيتشوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Norsup مطار نورسوب",
  "city": "Norsup نورسوب",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Urengoy Airport مطار أوريغوي",
  "city": "Novy Urengoy نوفى أوريغوي",
  "country": "Russia روسيا"
},
{
  "name": "Neiva Lamarguita Airport مطار نيفا لامارجويتا",
  "city": "Neiva نيفا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Navoi Airport مطار نافي",
  "city": "Navoi نافي",
  "country": "Uzbekistan أوزبكستان"
},
{
  "name": "Framnes Airport مطار فرامنيس",
  "city": "Narvik نارفيك",
  "country": "Norway النرويج"
},
{
  "name": "Novgorod مطار نوفغورود",
  "city": "Novgorod نوفغورود",
  "country": "Russia روسيا"
},
{
  "name": "Ministro Victor Konder International Airport مطار مينسترو فيكتور كوندر الدولي",
  "city": "Navegantes نافيجانتس",
  "country": "Brazil البرازيل"
},
{
  "name": "Moheli مطار موهيلي",
  "city": "Moheli موهيلي",
  "country": "Comoros جزر القمر"
},
{
  "name": "Norwich Airport مطار نورويتش",
  "city": "Norwich نورويتش",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Nanyuki Airport مطار نانيوكي",
  "city": "Nyeri نيري",
  "country": "Kenya كينيا"
},
{
  "name": "Nadym Airport مطار ناديم",
  "city": "Nadym ناديم",
  "country": "Russia روسيا"
},
{
  "name": "Skavsta Airport مطار سكافستا",
  "city": "Nykoping نيكوبينج",
  "country": "Sweden السويد"
},
{
  "name": "Nyaung U Airport مطار نياونج يو",
  "city": "Nyaung-u نياونج-يو",
  "country": "Myanmar ميانمار"
},
{
  "name": "Manzhouli مانتشولي",
  "city": "Manzhouli مانتشولي",
  "country": "China الصين"
},
{
  "name": "Springhill Airport مطار سبرينغهيل",
  "city": "Arthurville آرثرڤيل",
  "country": "Australia أستراليا"
},
{
  "name": "Albert J Ellis Airport مطار ألبرت جاي إليس",
  "city": "Richlands ريتشلاندز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Yorke Island جزيرة يورك",
  "city": "Yorke Island جزيرة يورك",
  "country": "Australia أستراليا"
},
{
  "name": "Oakey Aerodrome مطار أوكي",
  "city": "Oakey أوكي",
  "country": "Australia أستراليا"
},
{
  "name": "Orland Airport مطار أورلاند",
  "city": "Orland أورلاند",
  "country": "Norway النرويج"
},
{
  "name": "Olbia Costa Smeralda Airport مطار أولبيا كوستا سميرالدا",
  "city": "Terranova تيرانوفا",
  "country": "Italy إيطاليا"
},
{
  "name": "L. M. Clayton Airport مطار إل إم كلايتون",
  "city": "Wolf Point وولف بوينت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska ألاسكا",
  "city": "Old Harbor أولد هاربور",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Malampa مالامبا",
  "city": "Olpoi أولبوي",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Olympic Dam Aerodrome مطار أوليمبيك دام",
  "city": "Roxby Downs روكسباي داونز",
  "country": "Australia أستراليا"
},
{
  "name": "Eppley Airfield مطار إيبلي",
  "city": "Omaha أوماها",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Omboué أومبو",
  "city": "Omboue أومبو",
  "country": "Gabon الغابون"
},
{
  "name": "Ormoc Airport مطار أورموك",
  "city": "Ormoc أورموك",
  "country": "Philippines الفلبين"
},
{
  "name": "Oranjemund Airport مطار أورانجيموند",
  "city": "Oranjemund أورانجيموند",
  "country": "Namibia ناميبيا"
},
{
  "name": "Nome Airport مطار نوم",
  "city": "Nome نوم",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Uromiyeh Airport مطار أورميه",
  "city": "Urmieh أورميه",
  "country": "Iran إيران"
},
{
  "name": "Mostar Airport مطار موستار",
  "city": "Mostar موستار",
  "country": "Bosnia and Herzegovina البوسنة والهرسك"
},
{
  "name": "Oradea Airport مطار أوراديا",
  "city": "Oradea-Mare أوراديا مار",
  "country": "Romania رومانيا"
},
{
  "name": "Omsk Southwest Airport مطار أومسك الجنوبي الغربي",
  "city": "Omsk أومسك",
  "country": "Russia روسيا"
},
{
  "name": "Ondangwa Airport مطار أوندانجوا",
  "city": "Ondangwa أوندانجوا",
  "country": "Namibia ناميبيا"
},
{
  "name": "Mornington Island Airport مطار جزيرة مورنينغتون",
  "city": "Mornington مورنينغتون",
  "country": "Australia أستراليا"
},
{
  "name": "Odate-Noshiro Airport مطار أواتي-نوشيرو",
  "city": "Kitakita-shi كيتاكيتا-شي",
  "country": "Japan اليابان"
},
{
  "name": "The Oneill Municipal Airport مطار أونيل البلدي",
  "city": "O'neill أونيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ontario International Airport مطار أونتاريو الدولي",
  "city": "Ontario أونتاريو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Toksook Bay مطار توكسوك باي",
  "city": "Toksook Bay توكسوك باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Gold Coast (Coolangatta) جولد كوست (كولانجاتا)",
  "city": "Gold Coast جولد كوست",
  "country": "Australia أستراليا"
},
{
  "name": "Opa Locka Airport مطار أوبا لوكا",
  "city": "Opa-Locka أوبا لوكا",
  "state": "Florida فلوريدا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Porto Airport مطار بورتو",
  "city": "Maia مايا",
  "state": "Porto بورتو",
  "country": "Portugal البرتغال"
},
{
  "name": "Sinop Airport مطار سينوب",
  "city": "Sinop سينوب",
  "state": "Mato Grosso ماتو غروسو",
  "country": "Brazil البرازيل"
},
{
  "name": "Balimo مطار باليمو",
  "city": "Balimo باليمو",
  "state": "Western الغربية",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Orebro Airport مطار أوبسالا",
  "city": "Orebro أوبسالا",
  "state": "Orebro أوبسالا",
  "country": "Sweden السويد"
},
{
  "name": "Chicago O'Hare International Airport مطار شيكاغو أوهير الدولي",
  "city": "Chicago شيكاغو",
  "state": "Illinois إلينوي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Norfolk International Airport مطار نورفولك الدولي",
  "city": "Norfolk نورفولك",
  "state": "Virginia فرجينيا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Worcester Municipal Airport مطار ووستر البلدي",
  "city": "Worcester ووستر",
  "state": "Massachusetts ماساتشوستس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Port Lions Airport مطار بورت ليونز",
  "city": "Port Lions بورت ليونز",
  "state": "Alaska ألاسكا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Orinduik Airport مطار أريندوك",
  "city": "Rera ريرا",
  "state": "Roraima رورايما",
  "country": "Brazil البرازيل"
},
{
  "name": "Cork Airport مطار كورك",
  "city": "Fivemilebridge فيفمايلبريدج",
  "state": "",
  "country": "Ireland أيرلندا"
},
{
  "name": "Sywell Airport مطار سايويل",
  "city": "Northampton نورثهامبتون",
  "state": "England إنجلترا",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Es Senia Airport مطار سنية",
  "city": "Oran Rp وهران",
  "state": "Oran وهران",
  "country": "Algeria الجزائر"
},
{
  "name": "Curtis Memorial مطار كيرتس ميموريال",
  "city": "Noorvik نورفيك",
  "state": "Alaska ألاسكا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Paris Orly Airport مطار باريس أورلي",
  "city": "Paris باريس",
  "state": "Ile-de-France إيل دو فرانس",
  "country": "France فرنسا"
},
{
  "name": "Ostersunds Airport مطار أوسيرسوند",
  "city": "Frösö فروسو",
  "state": "Jamtland يامتلاند",
  "country": "Sweden السويد"
},
{
  "name": "Osijek Airport مطار أوسييك",
  "city": "Osijek أوسييك",
  "state": "Osječko-baranjska أوسييكو بارانيسكا",
  "country": "Croatia كرواتيا"
},
{
  "name": "Oskarshamn Airport مطار أوسكارشامن",
  "city": "Fårbo فاربو",
  "state": "Kalmar كالمار",
  "country": "Sweden السويد"
},
{
  "name": "Oslo Gardermoen Airport مطار أوسلو غارديرموين",
  "city": "Gardermoen غارديرموين",
  "state": "Akershus Fylke آكيرشوس فيلكي",
  "country": "Norway النرويج"
},
{
  "name": "Mosul Airport مطار الموصل",
  "city": "Mosul الموصل",
  "state": "Ninawa نينوى",
  "country": "Iraq العراق"
},
{
  "name": "Mosnov Airport مطار موستوف",
  "city": "Mošnov موستوف",
  "state": "Moravskoslezský مورافسكي سوزلسكي",
  "country": "Czech Republic جمهورية التشيك"
},
{
  "name": "Osh Airport مطار أوش",
  "city": "Osh أوش",
  "state": "Osh أوش",
  "country": "Kyrgyzstan قيرغيزستان"
},
{
  "name": "Oostende Airport مطار أوستند",
  "city": "Oostende أوستند",
  "state": "West-Vlaanderen ويست فلاماندر",
  "country": "Belgium بلجيكا"
},
{
  "name": "Orsk مطار أورسك",
  "city": "Orsk أورسك",
  "state": "Orenburgskaya Oblast أوبلاست أوريبورغ",
  "country": "Russia روسيا"
},
{
  "name": "Namsos Airport مطار نامسوس",
  "city": "Namsos نامسوس",
  "country": "Norway النرويج"
},
{
  "name": "Koszalin Airport مطار كوسزالين",
  "city": "Sianów سيانوف",
  "country": "Poland بولندا"
},
{
  "name": "North Bend Municipal Airport مطار نورث بند البلدي",
  "city": "North Bend نورث بند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Otopeni Airport مطار أوتوبيني",
  "city": "Bucharest بوخارست",
  "country": "Romania رومانيا"
},
{
  "name": "Coto 47 Airport مطار كوتو 47",
  "city": "Coto 47 كوتو 47",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Ralph Wien Memorial Airport مطار رالف وين التذكاري",
  "city": "Kotzebue كوتزيبو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ouagadougou Airport مطار واغادوغو",
  "city": "Ouagadougou واغادوغو",
  "country": "Burkina Faso بوركينا فاسو"
},
{
  "name": "Angads Airport مطار أنجاد",
  "city": "Oujda وجدة",
  "country": "Morocco المغرب"
},
{
  "name": "Ouesso Airport مطار أويسو",
  "city": "Ouesso أويسو",
  "country": "Congo الكونغو"
},
{
  "name": "Oulu Airport مطار أولو",
  "city": "Oulunsalo أولونسال",
  "country": "Finland فنلندا"
},
{
  "name": "Mauritania Airport مطار موريتانيا",
  "city": "Zouerate زويرات",
  "country": "Mauritania موريتانيا"
},
{
  "name": "Tolmachevo Airport مطار تولماشيفو",
  "city": "Novosibirsk نوفوسيبيرسك",
  "country": "Russia روسيا"
},
{
  "name": "Asturias Airport مطار أستورياس",
  "city": "Castrillón كاستريليون",
  "country": "Spain إسبانيا"
},
{
  "name": "Boscobel Airport مطار بوسكوبل",
  "city": "Boscobel بوسكوبل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Bissau Oswaldo Vieira Airport مطار بيساو أوسوالدو فييرا",
  "city": "Bissau بيساو",
  "country": "Guinea-Bissau غينيا بيساو"
},
{
  "name": "Oxford Airport مطار أكسفورد",
  "city": "Kidlington كيدلينجتون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Oxnard Airport مطار أوكسنارد",
  "city": "Oxnard أوكسنارد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Oyem Airport مطار أوييم",
  "city": "Oyem أوييم",
  "country": "Gabon الغابون"
},
{
  "name": "Moyo مطار مويو",
  "city": "Moyo مويو",
  "country": "Uganda أوغندا"
},
{
  "name": "Ozamis-Mindanao Island Airport مطار أوزاميس - جزيرة مينداناو",
  "city": "Ozamis City مدينة أوزاميس",
  "country": "Philippines الفلبين"
},
{
  "name": "Zaporozhye East Airport مطار زابوروجيا الشرقي",
  "city": "Zaporizhzhya زابوروجيا",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Ouarzazate Airport مطار ورزازات",
  "city": "Ouarzazate ورزازات",
  "country": "Morocco المغرب"
},
{
  "name": "Paderborn-Lippstadt Airport مطار بادربورن-ليبستادت",
  "city": "Büren بويرن",
  "country": "Germany ألمانيا"
},
{
  "name": "Barkley Regional Airport مطار باركلي الإقليمي",
  "city": "West Paducah ويست بادوكاه",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pailin Airport مطار بايلين",
  "city": "Pailin بايلين",
  "country": "Cambodia كمبوديا"
},
{
  "name": "Port Au Prince Airport مطار بورت أو برنس",
  "city": "Port Au Prince بورت أو برنس",
  "country": "Haiti هايتي"
},
{
  "name": "Paros Island Airport مطار جزيرة باروس",
  "city": "Levkai ليفكاي",
  "country": "Greece اليونان"
},
{
  "name": "Lok Nayak Jaiprakash Airport مطار لوك ناياك جايا بركاش",
  "city": "Patna باتنا",
  "country": "India الهند"
},
{
  "name": "Tajin Airport مطار تاجين",
  "city": "Castillo de Teayo كاستييو دي تيايو",
  "country": "Mexico المكسيك"
},
{
  "name": "Puebla Airport مطار بويبلا",
  "city": "Tlaltenango تلاتينانغو",
  "country": "Mexico المكسيك"
},
{
  "name": "Porbandar Airport مطار بربندر",
  "city": "Porbandar بربندر",
  "country": "India الهند"
},
{
  "name": "Plattsburgh Air Force Base قاعدة بلاتسبورغ الجوية",
  "city": "Plattsburgh بلاتسبورغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Paro Airport مطار بارو",
  "city": "Paro بارو",
  "country": "Bhutan بوتان"
},
{
  "name": "Palm Beach International Airport مطار بالم بيتش الدولي",
  "city": "West Palm Beach ويست بالم بيتش",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Malampa مطار مالامبا",
  "city": "Paama بامَا",
  "country": "Vanuatu فanuatu"
},
{
  "name": "Zandery Airport مطار زانديري",
  "city": "Sabakoe ساباكو",
  "country": "Suriname سورينام"
},
{
  "name": "Paraburdoo Airport مطار بارابوردو",
  "city": "Paraburdoo بارابوردو",
  "country": "Australia أستراليا"
},
{
  "name": "Punta Islita Airport مطار بونتا إيسليتا",
  "city": "Punta Islita بونتا إيسليتا",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Putao Airport مطار بوتاو",
  "city": "Putao بوتاو",
  "country": "Myanmar ميانمار"
},
{
  "name": "Painter Creek مطار باينتر كريك",
  "city": "Painter Creek باينتر كريك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pucallpa Airport مطار بوكالبا",
  "city": "Callaria كاليا",
  "country": "Peru بيرو"
},
{
  "name": "Puerto Carreno Airport مطار بورتو كاريينيو",
  "city": "Puerto Carreño بورتو كاريينيو",
  "country": "Colombia كولومبيا"
},
{
  "name": "Puerto Inirida Airport مطار بورتو إينيريدا",
  "city": "Guaviare غافيا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Pedro Bay مطار بيدرو باي",
  "city": "Pedro Bay بيدرو باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tabing Airport مطار تابينغ",
  "city": "Padang بادانغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Ponta Delgada Airport مطار بونتا ديلغادا",
  "city": "Ponta Delgada بونتا ديلغادا",
  "country": "Portugal البرتغال"
},
{
  "name": "Maldonado Airport مطار مالدونادو",
  "city": "Punta del Este بونتا ديل إستي",
  "country": "Uruguay الأوروغواي"
},
{
  "name": "Piedras Negras International Airport مطار بيدراس نغراس الدولي",
  "city": "Piedras Negras بيدراس نغراس",
  "country": "Mexico المكسيك"
},
{
  "name": "Eastern Oregon Regional Airport مطار شرق أوريغون الإقليمي",
  "city": "Pendleton بندلتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Portland International Airport مطار بورتلاند الدولي",
  "city": "Portland بورتلاند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pelican Sea Plane Base مطار بيليكان سي بلين",
  "city": "Pelican بيلكان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pardubice مطار باردوبيتش",
  "city": "Pardubice باردوبيتش",
  "country": "Czech Republic جمهورية التشيك"
},
{
  "name": "Bolshesavino Airport مطار بولشسافينو",
  "city": "Perm' بيرم",
  "country": "Russia روسيا"
},
{
  "name": "Perugia Airport مطار بيروجيا",
  "city": "Assisi أسيزي",
  "country": "Italy إيطاليا"
},
{
  "name": "Matecana Airport مطار ماتيكانا",
  "city": "Pereira بيرييرا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Beijing Capital Airport مطار بكين الدولي",
  "city": "Shunyi شوني",
  "country": "China الصين"
},
{
  "name": "Padre Aldamiz Airport مطار بادري ألداميز",
  "city": "Puerto Maldonado بورتو مالدونادو",
  "country": "Peru بيرو"
},
{
  "name": "Penang International Airport مطار بينانج الدولي",
  "city": "Batu Maung باتو ماونغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Perth International Airport مطار بيرث الدولي",
  "city": "Perth بيرث",
  "country": "Australia أستراليا"
},
{
  "name": "Petrozavodsk Northwest Airport مطار بتروزافودسك الشمالي الغربي",
  "city": "Petrozavodsk بتروزافودسك",
  "country": "Russia روسيا"
},
{
  "name": "Pelotas Airport مطار بيليتاس",
  "city": "Pelotas بيليتاس",
  "country": "Brazil البرازيل"
},
{
  "name": "Puerto Lempira Airport مطار بورتو لمبيرة",
  "city": "Puerto Lempira بورتو لمبيرة",
  "country": "Honduras هندوراس"
},
{
  "name": "Peshawar Airport مطار بيشاور",
  "city": "Peshawar بيشاور",
  "country": "Pakistan باكستان"
},
{
  "name": "Pechora Southwest Airport مطار بيشورا الجنوبي الغربي",
  "city": "Ukhta أختا",
  "country": "Russia روسيا"
},
{
  "name": "Penza مطار بينزا",
  "city": "Penza بينزا",
  "country": "Russian Federation الاتحاد الروسي"
},
{
  "name": "Lauro Kurtz Airport مطار لور كورتز",
  "city": "Passo Fundo باسو فاندو",
  "country": "Brazil البرازيل"
},
{
  "name": "Panama City Bay County Airport مطار باي كاونتي في مدينة بنما",
  "city": "Panama City مدينة بنما",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Paphos International Airport مطار بافوس الدولي",
  "city": "Paphos بافوس",
  "country": "Cyprus قبرص"
},
{
  "name": "Parsabad مطار بارساباد",
  "city": "Parsabad بارساباد",
  "country": "Iran إيران"
},
{
  "name": "Page Municipal Airport مطار صفحة البلدي",
  "city": "Page صفحة",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rivesaltes Airport مطار ريفسالت",
  "city": "Perpignan بيربينيا",
  "country": "France فرنسا"
},
{
  "name": "Pangkalpinang Airport مطار بانجكال بينغ",
  "city": "Pangkalpinang بانجكال بينغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Port Graham مطار بورت غراهام",
  "city": "Port Graham بورت غراهام",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Page Municipal Airport مطار صفحة البلدي",
  "city": "Asalouyeh أسالوياه",
  "country": "Iran إيران"
},
{
  "name": "Pitt Greenville Airport مطار بيت غرينفيل",
  "city": "Greenville غرينفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Bassillac Airport مطار باسيلاك",
  "city": "St-Pierre سانت بيير",
  "country": "France فرنسا"
},
{
  "name": "Port Harcourt International Airport مطار بورت هاركورت الدولي",
  "city": "Port Harcourt بورت هاركورت",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Port Hedland Airport مطار بورت هيدلاند",
  "city": "Port Hedland بورت هيدلاند",
  "country": "Australia أستراليا"
},
{
  "name": "Newport News-Williamsburg International Airport مطار نيو بورت نيوز-ويليامزبرغ الدولي",
  "city": "Newport News نيو بورت نيوز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Port Harcourt City مطار مدينة بورت هاركورت",
  "city": "Port Harcourt بورت هاركورت",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Philadelphia International Airport مطار فيلادلفيا الدولي",
  "city": "Philadelphia فيلادلفيا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Point Hope Airport مطار بوينت هوب",
  "city": "Point Hope بوينت هوب",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Phitsanulok Airport مطار فيتسانولوك",
  "city": "Phitsanulok فيتسانولوك",
  "country": "Thailand تايلاند"
},
{
  "name": "Hendrik Van Eck Airport مطار هندريك فان إيك",
  "city": "Phalaborwa فالا بوروا",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Sky Harbor International Airport مطار سكاي هاربر الدولي",
  "city": "Phoenix فينيكس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Greater Peoria Regional Airport مطار غريتر بيوريا الإقليمي",
  "city": "Peoria بيوريا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pine Belt Regional Airport مطار منطقة بين",
  "city": "Moselle موازيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "St. Petersburg-Clearwater International Airport مطار سانت بيترسبيرغ-كلير ووتر الدولي",
  "city": "Clearwater كلير ووتر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pingdong Airport مطار بينغدونغ",
  "city": "Pingtung بينغتونغ",
  "country": "Taiwan تايوان"
},
{
  "name": "Pocatello Municipal Airport مطار بوكاتيلو البلدي",
  "city": "Pocatello بوكاتيلو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Glasgow Prestwick International Airport مطار غلاسكو بريستويك الدولي",
  "city": "Prestwick بريستويك",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Parintins Airport مطار بارينتينس",
  "city": "Parintins بارينتينس",
  "country": "Brazil البرازيل"
},
{
  "name": "Pilot Point Airport مطار بايلوت بوينت",
  "city": "Pilot Point بايلوت بوينت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pierre Municipal Airport مطار بيير البلدي",
  "city": "Pierre بيير",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Biard Airport مطار بيارد",
  "city": "Vouneuil-sous-Biard فونيه-سوز بيارد",
  "country": "France فرنسا"
},
{
  "name": "Pittsburgh International Airport مطار بيتسبرغ الدولي",
  "city": "Coraopolis كوروبوليس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Capitan Concha Airport مطار كابيتان كونشا",
  "city": "Piura بيورا",
  "country": "Peru بيرو"
},
{
  "name": "Pikwitonei Airport مطار بيكويتوني",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Pico Airport مطار بيكو",
  "city": "Madalena مادالينا",
  "country": "Portugal البرتغال"
},
{
  "name": "Dew Station محطة ديو",
  "city": "Point Lay بوينت لاي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sweden مطار السويد",
  "city": "Pajala بايال",
  "country": "Sweden السويد"
},
{
  "name": "Panjgur Airport مطار بانجكور",
  "city": "Panjgur بانجكور",
  "country": "Pakistan باكستان"
},
{
  "name": "Puerto Jimenez Airport مطار بورتو خيمينيز",
  "city": "Puerto Jiménez بورتو خيمينز",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Napaskiak ناباسكيك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Wood County Airport-Gill Robb Wilson Field مطار وود كاونتي - غيل روب ويلسون فيلد",
  "city": "Williamstown ويليامستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Petropavlovsk Yelizovo Airport مطار بيتروبافلوفسك يلزييفو",
  "city": "Elizovo إليزوفو",
  "country": "Russia روسيا"
},
{
  "name": "Parkes Airport مطار باركس",
  "city": "Parkes باركس",
  "country": "Australia أستراليا"
},
{
  "name": "Pangkor Airport مطار بانكور",
  "city": "Pangkor بانكور",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Pakokku مطار باكوكو",
  "city": "Pakokku باكوكو",
  "country": "Myanmar ميانمار"
},
{
  "name": "Puka Puka مطار بوكو بوكو",
  "city": "Puka Puka بوكو بوكو",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "Pokhara Airport مطار بوكهارا",
  "city": "Pokhara بوكهارا",
  "country": "Nepal نيبال"
},
{
  "name": "Simpang Tiga Airport مطار سيمبانغ تيغا",
  "city": "Pekanbaru بيكانبارو",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Tjilik Riwut Airport مطار تجيليك ريووت",
  "city": "Buntok بونتوك",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Pakse Airport مطار باكسي",
  "city": "Pakxe باكسي",
  "country": "Laos لاوس"
},
{
  "name": "Playa Samara Airport مطار بلايا سامارا",
  "city": "Nicoya نيكويا",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Roborough Airport مطار روبرون",
  "city": "Plymouth بليموث",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Belize مطار بليز",
  "city": "Placencia بلاسينسيا",
  "country": "Belize بليز"
},
{
  "name": "Sultan Mahmud Badaruddin Ii Airport مطار السلطان محمود بدار الدين الثاني",
  "city": "Palembang باليمبانغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Pellston Regional Airport مطار بيلستون الإقليمي",
  "city": "Pellston بيلستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Port Lincoln Airport مطار بورت لينكولن",
  "city": "Port Lincoln بورت لينكولن",
  "country": "Australia أستراليا"
},
{
  "name": "Palanga International مطار بالانغا الدولي",
  "city": "Klaipeda\/Palanga كلايبيدا\/بالانغا",
  "country": "Lithuania ليتوانيا"
},
{
  "name": "Providenciales Airport مطار بروفيدنسيالز",
  "city": "The Bight Settlements المستوطنات بيث",
  "country": "Turks And Caicos Islands جزر تركس وكايكوس"
},
{
  "name": "Pampulha Airport مطار بامبولها",
  "city": "Belo Horizonte بيلو هوريزونتي",
  "country": "Brazil البرازيل"
},
{
  "name": "Mutiara Airport مطار موتيارا",
  "city": "Palu بالو",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Semipalatinsk Airport مطار سيميبالاتنسك",
  "city": "Semipalatinsk سيميبالاتنسك",
  "country": "Kazakhstan كازاخستان"
},
{
  "name": "H F Verwoerd Airport مطار إتش إف فيرفورد",
  "city": "Port Elizabeth بورت إليزابيث",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Pemba Airport مطار بيمبا",
  "city": "Pemba بيمبا",
  "country": "Tanzania تنزانيا"
},
{
  "name": "El Tepual International Airport مطار إيل تيبوال الدولي",
  "city": "Los Quemas لوس كيماس",
  "country": "Chile شيلي"
},
{
  "name": "Air Force Plant Nr 42 Palmdale مصنع الطائرات العسكرية رقم 42 بالمديل",
  "city": "Palmdale بالماديل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Portsmouth Airport مطار بورتسموث",
  "city": "Portsmouth بورتسموث",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Parma Airport مطار بارما",
  "city": "Parma بارما",
  "country": "Italy إيطاليا"
},
{
  "name": "Palma de Mallorca Airport مطار بالما دي مايوركا",
  "city": "Palma بالما",
  "country": "Spain إسبانيا"
},
{
  "name": "Port Moller Airport مطار بورت مولر",
  "city": "Port Moller بورت مولر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Palermo Airport مطار باليرمو",
  "city": "Cinisi شينيسي",
  "country": "Italy إيطاليا"
},
{
  "name": "Palmerston North Airport مطار بالمرستون نورث",
  "city": "Palmerston North بالمرستون نورث",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Del Caribe International Airport مطار ديل كاريبي الدولي",
  "city": "Pampatar بامباتار",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Palmas Airport مطار بالماس",
  "city": "Palmas بالماس",
  "country": "Brazil البرازيل"
},
{
  "name": "El Tehuelche Airport مطار إلت تاهويلشي",
  "city": "Puerto Madryn بويرتو مادryn",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Palmar Sur Airport مطار بالمار سور",
  "city": "Palmar Sur بالمار سور",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Pamplona Airport مطار بامبلونا",
  "city": "Noáin نوايين",
  "country": "Spain إسبانيا"
},
{
  "name": "Punta Gorda Airport مطار بونتا غوردى",
  "city": "Punta Gorda بونتا غوردى",
  "country": "Belize بليز"
},
{
  "name": "Pochentong Airport مطار بوتشينتونغ",
  "city": "Phnom Penh بنوم بنه",
  "country": "Cambodia كمبوديا"
},
{
  "name": "Pohnpei International Airport مطار بونهاي الدولي",
  "city": "Palikir باليكير",
  "country": "Federated States of Micronesia الولايات المتحدة الفيدرالية للميكرونيزيا"
},
{
  "name": "Supadio Airport مطار سو باديو",
  "city": "Pontianak بونتياناك",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Pantelleria Airport مطار بانتيليريا",
  "city": "Pantelleria بانتيليريا",
  "country": "Italy إيطاليا"
},
{
  "name": "Girua Airport مطار جيرو",
  "city": "Popondetta بوبوندتا",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Pune Airport مطار بوني",
  "city": "Pune بوني",
  "country": "India الهند"
},
{
  "name": "Pointe Noire Airport مطار بوانت نوار",
  "city": "Pointe-Noire بوانت نوار",
  "country": "Congo الكونغو"
},
{
  "name": "Pensacola Regional Airport مطار بنساكولا الإقليمي",
  "city": "Pensacola بنساكولا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Senador Nilo Coelho Airport مطار سينادور نيلو كويلو",
  "city": "Petrolina بترولينا",
  "country": "Brazil البرازيل"
},
{
  "name": "Salgado Filho International Airport مطار سالغادو فيلهو الدولي",
  "city": "Porto Alegre بورتو أليغري",
  "country": "Brazil البرازيل"
},
{
  "name": "Port Gentil Airport مطار بورت غنتيل",
  "city": "Port-Gentil بورت غنتيل",
  "country": "Gabon الغابون"
},
{
  "name": "Pemba Airport مطار بيمبا",
  "city": "Pemba بيمبا",
  "country": "Mozambique موزمبيق"
},
{
  "name": "Port Moresby International Airport مطار بورت مورسبي الدولي",
  "city": "Port Moresby بورت مورسبي",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Puerto Plata International Airport مطار بورتو بلاتا الدولي",
  "city": "San Felipe de Puerto Plata سان فيليبي دي بورتو بلاتا",
  "country": "Dominican Republic جمهورية الدومينيكان"
},
{
  "name": "Pori Airport مطار بوري",
  "city": "Pori بوري",
  "country": "Finland فنلندا"
},
{
  "name": "Piarco Airport مطار بياركو",
  "city": "Trinidad ترينيداد",
  "country": "Trinidad and Tobago ترينيداد وتوباغو"
},
{
  "name": "Lawica Airport مطار لويكا",
  "city": "Poznan بوزنان",
  "country": "Poland بولندا"
},
{
  "name": "Presidente Prudente Airport مطار رئيس بلدية برودنتي",
  "city": "Presidente Prudente رئيس بلدية برودنتي",
  "country": "Brazil البرازيل"
},
{
  "name": "Punta Penasco Airport مطار بونتا بيناسكو",
  "city": "Pto. Penasco بورتو بيناسكو",
  "country": "Mexico المكسيك"
},
{
  "name": "Pago Pago International Airport مطار باجو باجو الدولي",
  "city": "Pago Pago باجو باجو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Petropavlovsk مطار بيتروبافلوفسك",
  "city": "Petropavlovsk بيتروبافلوفسك",
  "country": "Kazakhstan كازاخستان"
},
{
  "name": "Nepal مطار نيبال",
  "city": "Phaplu فافلو",
  "country": "Nepal نيبال"
},
{
  "name": "Guillermo Leon Valencia Airport مطار غييرمو ليون فالنسيا",
  "city": "Popayán بوبايان",
  "country": "Colombia كولومبيا"
},
{
  "name": "Proserpine Aerodrome مطار بروسر باين",
  "city": "Brandy Creek براندي كريك",
  "country": "Australia أستراليا"
},
{
  "name": "Puerto Princesa International Airport مطار بورتو برينسيسا الدولي",
  "city": "Puerto Princesa بورتو برينسيسا",
  "country": "Philippines الفلبين"
},
{
  "name": "Tahiti Faaa Airport مطار تاهيتي فايا",
  "city": "Papeete بابيتي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Port Protection بورت بروتيكشن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Duong Dong Airport مطار دوينغ دونغ",
  "city": "Kien Giang كين جيانغ",
  "country": "Vietnam فيتنام"
},
{
  "name": "Northern Maine Regional Airport مطار نورثرن مين الإقليمي",
  "city": "Presque Isle بريسكي آيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Port Macquarie Airport مطار بورت ماكوارى",
  "city": "Port Macquarie بورت ماكوارى",
  "country": "Australia أستراليا"
},
{
  "name": "Pilot Station مطار بايلوت ستيشن",
  "city": "Pilot Station بايلوت ستيشن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ernest A Love Field Airport مطار إرنست إيه لوف فيلد",
  "city": "Prescott بريسكت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Prague Ruzyne Airport مطار براغ روجين",
  "city": "Prague 6 براغ 6",
  "country": "Czech Republic جمهورية التشيك"
},
{
  "name": "Praslin Airport مطار براسلين",
  "city": "Praslin Island جزيرة براسلين",
  "country": "Seychelles سيشيل"
},
{
  "name": "Pristina Airport مطار بريشتينا",
  "city": "Prishtina بريشتينا",
  "country": "Serbia صربيا"
},
{
  "name": "Pisa Airport مطار بيزا",
  "city": "Pisa بيزا",
  "country": "Italy إيطاليا"
},
{
  "name": "Tri Cities Airport مطار الثلاث مدن",
  "city": "Pasco باسكو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mercedita Airport مطار ميرسيديتا",
  "city": "Coto Laurel كوتو لوريل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Petersburg James A Johnson Airport مطار بيترسبورغ جيمس إيه جونسون",
  "city": "Petersburg بيترسبورغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Antonio Narino Airport مطار أنطونيو نارينو",
  "city": "Chachagüí تشاتشاجوي",
  "country": "Colombia كولومبيا"
},
{
  "name": "Palm Springs International Airport مطار بالم سبرينغز الدولي",
  "city": "Palm Springs بالم سبرينغز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pescara Airport مطار بسكارا",
  "city": "Pescara بسكارا",
  "country": "Italy إيطاليا"
},
{
  "name": "Port Heiden Airport مطار بورت هيدن",
  "city": "Port Heiden بورت هيدن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Le Raizet Airport مطار لو رايزيت",
  "city": "Les Abymes ليه أبايم",
  "country": "Guadeloupe غوادلوب"
},
{
  "name": "Platinum مطار بلاتينيوم",
  "city": "Platinum بلاتينيوم",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tocumen International Airport مطار توكومين الدولي",
  "city": "Tocumen توكومين",
  "country": "Panama بنما"
},
{
  "name": "Pueblo Memorial Airport مطار بويبليو التذكاري",
  "city": "Pueblo بويبليو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pont Long Uzein Airport مطار بونت لونغ أوزين",
  "city": "Lescar ليسكار",
  "country": "France فرنسا"
},
{
  "name": "Punta Cana Airport مطار بونتا كانا",
  "city": "Salvaleón de Higüey سالفاليون دي هيغوي",
  "country": "Dominican Republic جمهورية الدومينيكان"
},
{
  "name": "Pukarua مطار بوكاروا",
  "city": "Pukarua بوكاروا",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Carlos Ibanez de Campo International Airport مطار كارلوس إيبانيز دي كامبو الدولي",
  "city": "Punta Arenas بونتا أريناس",
  "country": "Chile شيلي"
},
{
  "name": "Kimhae International Airport مطار كيمهاي الدولي",
  "city": "Busan بوسان",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Puerto Asis Airport مطار بورتو آسي",
  "city": "Puerto Asís بورتو آسي",
  "country": "Colombia كولومبيا"
},
{
  "name": "Pullman-Moscow Regional Airport مطار بولمان موسكو الإقليمي",
  "city": "Pullman بولمان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pula Airport مطار بولا",
  "city": "Pluj بلوج",
  "country": "Croatia كرواتيا"
},
{
  "name": "Providencia Island Airport مطار جزيرة بروفيدنسيا",
  "city": "San Andrés سان أندريس",
  "country": "Colombia كولومبيا"
},
{
  "name": "Provincetown Municipal Airport مطار بلدية بروفينستاون",
  "city": "Provincetown بروفينستاون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Theodore Francis Green State Airport مطار ثيودور فرانسيس غرين",
  "city": "Warwick وورويك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pudong International Airport مطار بودونغ الدولي",
  "city": "Huinan هوانان",
  "country": "China الصين"
},
{
  "name": "Governador Jorge Teixeira de Oliveira International Airport مطار غوفيرنادور جورج تيكسييرا دي أوليفيرا الدولي",
  "city": "Pôrto Velho بورتو فيلهو",
  "country": "Brazil البرازيل"
},
{
  "name": "Preveza Airport مطار بريفزا",
  "city": "Paliambela باليامبيلا",
  "country": "Greece اليونان"
},
{
  "name": "Lic Gustavo Diaz Ordaz International Airport مطار ليك غوستافو دياز أورداز الدولي",
  "city": "Puerto Vallarta بويرتو فاليارتا",
  "country": "Mexico المكسيك"
},
{
  "name": "Under Construction Pevek Airport مطار بيك تحت الإنشاء",
  "city": "Anadyr' أنادير",
  "country": "Russia روسيا"
},
{
  "name": "Pal Waukee Airport مطار بال واوكي",
  "city": "Wheeling ويلينغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Jetport International Airport مطار جيت بورت الدولي",
  "city": "Portland بورتلاند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pavlodar South Airport مطار بافلودار الجنوبي",
  "city": "Pavlodar بافلودار",
  "country": "Kazakhstan كازاخستان"
},
{
  "name": "Puerto Escondido Airport مطار بورتو إيسكونديدو",
  "city": "San Pedro Juchatengo سان بيدرو جوتشاتينغو",
  "country": "Mexico المكسيك"
},
{
  "name": "Porto Santo Airport مطار بورتو سانتو",
  "city": "Porto Santo بورتو سانتو",
  "country": "Portugal البرتغال"
},
{
  "name": "Pleiku Area Airport مطار منطقة بليكو",
  "city": "Gia Lai غيا لاي",
  "country": "Vietnam فيتنام"
},
{
  "name": "Puerto Ayacucho Airport مطار بورتو أيالا كوتشو",
  "city": "Maroa ماروا",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Russia مطار روسيا",
  "city": "Polyarnyj بوليارني",
  "country": "Russia روسيا"
},
{
  "name": "Pietermaritzburg Airport مطار بيترماريتزبيرغ",
  "city": "Pietermaritzburg بيترماريتزبيرغ",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Bella Coola Airport مطار بيلا كولا",
  "city": "Masset ماسيت",
  "country": "Canada كندا"
},
{
  "name": "Ashford International Rail Station محطة أشبورد الدولية",
  "city": "Ashford أشبورد",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Germany ألمانيا",
  "city": "Dusseldorf دوسلدورف",
  "country": "Germany ألمانيا"
},
{
  "name": "Freiburg Hauptbahnhof محطة فرايبورغ الرئيسية",
  "city": "Freiburg فرايبورغ",
  "country": "Germany ألمانيا"
},
{
  "name": "Saarbruecken Rail Station محطة ساربروكن",
  "city": "Sarrebruck سارابروك",
  "country": "Germany ألمانيا"
},
{
  "name": "Cheju International Airport مطار جيجو الدولي",
  "city": "Jeju-Si جيجو سي",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "France فرنسا",
  "city": "Nantes نانت",
  "country": "France فرنسا"
},
{
  "name": "Koeln Hauptbahnhof محطة كولون الرئيسية",
  "city": "Cologne كولونيا",
  "country": "Germany ألمانيا"
},
{
  "name": "Owerri مطار أويري",
  "city": "Owerri أويري",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Dover Rail Station محطة دوفر",
  "city": "Dover دوفر",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Harwich Rail Station محطة هارويتش",
  "city": "Harwich هارويتش",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "England إنجلترا",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Manchester International Airport مطار مانشستر الدولي",
  "city": "Manchester مانشستر",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Birmingham International Airport مطار برمنغهام الدولي",
  "city": "Birmingham برمنغهام",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Paddington Station محطة بادينغتون",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "St Pancras International محطة سانت بانكراس الدولية",
  "city": "Britrail Rail Zone S منطقة بريتريل",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Birmingham International Airport مطار برمنغهام الدولي",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Waterloo Railway Station محطة ووترلو",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Bath Rail Service خدمة قطار باث",
  "city": "Bath باث",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Birmingham International Airport مطار برمنغهام الدولي",
  "city": "York يورك",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Rotterdam Airport مطار روتردام",
  "city": "Rotterdam روتردام",
  "country": "Netherlands هولندا"
},
{
  "name": "Queretaro Airport مطار كيريتارو",
  "city": "Queretaro كيريتارو",
  "country": "Mexico المكسيك"
},
{
  "name": "Delta دلتا",
  "city": "Warri واري",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Setif سطيف",
  "city": "Setif سطيف",
  "country": "Algeria الجزائر"
},
{
  "name": "Qulin كولين",
  "city": "Qulin كولين",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Afonso Pena International Airport مطار أفونسو بينا الدولي",
  "city": "Sao Jose dos Pinhais ساو خوسيه دوس بينهايس",
  "country": "Brazil البرازيل"
},
{
  "name": "Aix Les Milles Airport مطار إكس ليه ميل",
  "city": "Aix-les-milles أكس ليه ميل",
  "country": "France فرنسا"
},
{
  "name": "Pays de la Loire محطة السكك الحديدية باي دو لا لوار",
  "city": "Angers أنجيه",
  "country": "France فرنسا"
},
{
  "name": "Gavleborg محطة السكك الحديدية غافليبورغ",
  "city": "Gefle غيفلي",
  "country": "Sweden السويد"
},
{
  "name": "Uppsala Station محطة أبسالا",
  "city": "Uppsala أبسالا",
  "country": "Sweden السويد"
},
{
  "name": "Rabaul Airport مطار رباول",
  "city": "Rabaul رباول",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Arar Airport مطار عرعر",
  "city": "Arar عرعر",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Rafha Airport مطار رفحاء",
  "city": "Rafha رفحاء",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Francisco Mendes Airport مطار فرانسيسكو مينديز",
  "city": "Praia برايا",
  "country": "Cape Verde كاب فيردي"
},
{
  "name": "Rajkot Airport مطار راجكوت",
  "city": "Rajkot راجكوت",
  "country": "India الهند"
},
{
  "name": "Menara Airport مطار منارة",
  "city": "Marrakesh مراكش",
  "country": "Morocco المغرب"
},
{
  "name": "Leite Lopes Airport مطار ليت لوبيس",
  "city": "Ribeirão Preto ريبيراو بريتو",
  "country": "Brazil البرازيل"
},
{
  "name": "Rapid City Regional Airport مطار مدينة رابيد الإقليمي",
  "city": "Rapid City رابيد سيتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rarotonga International Airport مطار راروتونغا الدولي",
  "city": "Avarua أفاروا",
  "country": "Cook Islands جزر كوك"
},
{
  "name": "Rasht Airport مطار رشت",
  "city": "Rasht رشت",
  "country": "Iran إيران"
},
{
  "name": "Sale Airport مطار سلا",
  "city": "Rabat الرباط",
  "country": "Morocco المغرب"
},
{
  "name": "Brooks Lodge مطار بروكس لودج",
  "city": "Brooks Lodge بروكس لودج",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rurrenabaque Airport مطار روريناباك",
  "city": "Rurrenabaque روريناباك",
  "country": "Bolivia بوليفيا"
},
{
  "name": "Presidente Medici International Airport مطار الرئيس ميديسي الدولي",
  "city": "Rio Branco ريو برانكو",
  "country": "Brazil البرازيل"
},
{
  "name": "Ramata مطار راماتا",
  "city": "Ramata راماتا",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Roundup Airport مطار راوند أب",
  "city": "Roundup راوند أب",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ruby Airport مطار روبي",
  "city": "Ruby روبي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Richards Bay Airport مطار ريتشارد باي",
  "city": "Empangeni إمبانغيني",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Roche Harbor Airport مطار روش هاربور",
  "city": "Friday Harbor فريدهاي هاربور",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Almirante Padilla Airport مطار ألميرانتي باديا",
  "city": "Ríohacha ريوهاشا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Redcliffe مطار ريدكليف",
  "city": "Redcliffe ريدكليف",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Richmond Aerodrome مطار ريتشموند",
  "city": "Bellfield بيلفيلد",
  "country": "Australia أستراليا"
},
{
  "name": "Cinder River مطار سيندر ريفر",
  "city": "Cinder River سيندر ريفر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Red Dog مطار ريد دوغ",
  "city": "Red Dog ريد دوغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Redding Municipal Airport مطار ريدينغ البلدي",
  "city": "Redding ريدينغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Roberts Field Airport مطار روبرتس فيلد",
  "city": "Redmond ريدموند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Malaysia مطار ماليزيا",
  "city": "Redang ريدانغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Durham International Airport مطار دورهام الدولي",
  "city": "Raleigh/Durham رالي/درم",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Red Devil مطار ريد ديفل",
  "city": "Red Devil ريد ديفل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Marcillac Airport مطار مارسيلاك",
  "city": "Marcillac مارسيلاك",
  "country": "France فرنسا"
},
{
  "name": "Reao مطار رياو",
  "city": "Reao رياو",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Gilberto Freyre International Airport مطار جيلبرتو فريير الدولي",
  "city": "Recife ريسيفي",
  "country": "Brazil البرازيل"
},
{
  "name": "Reggio Calabria Airport مطار ريجو كالابريا",
  "city": "Reggio di Calabria ريجو دي كالابريا",
  "country": "Italy إيطاليا"
},
{
  "name": "Trelew Almirante Zar Airport مطار تريلو ألمينت زار",
  "city": "Trelew تريلو",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Orenburg East Airport مطار أوريينبورغ الشرقي",
  "city": "Orenburg أوريينبورغ",
  "country": "Russia روسيا"
},
{
  "name": "Siem Reap Airport مطار سييم ريب",
  "city": "Siemrap سييمراب",
  "country": "Cambodia كمبوديا"
},
{
  "name": "Resistencia Airport مطار ريسيتنسيا",
  "city": "Makallé مكالي",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Reus Airport مطار ريوس",
  "city": "Reus ريوس",
  "country": "Spain إسبانيا"
},
{
  "name": "Reynosa International Airport مطار رينوسا الدولي",
  "city": "Reynosa رينوسا",
  "country": "Mexico المكسيك"
},
{
  "name": "Greater Rockford Airport مطار غريتر روكفورد",
  "city": "Rockford روكفورد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Raiatea Island Airport مطار راييتا آيلاند",
  "city": "Papeete بابيتي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Rio Grande Airport مطار ريو غراندي",
  "city": "Río Grande ريو غراندي",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Rangiroa Airport مطار رانجيرو",
  "city": "Papeete بابيتي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Rio Gallegos Airport مطار ريو غاليغوس",
  "city": "Río Gallegos ريو غاليغوس",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Mingaladon Airport مطار مينغالا دون",
  "city": "Insein إينسين",
  "country": "Myanmar ميانمار"
},
{
  "name": "Rhinelander-Oneida County Airport مطار راينلاندر-أونيدا",
  "city": "Rhinelander راينلاندر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Paradisi Airport مطار باراديسي",
  "city": "Rodhos رودس",
  "country": "Greece اليونان"
},
{
  "name": "Santa Maria Airport مطار سانتا ماريا",
  "city": "Santa Maria سانتا ماريا",
  "country": "Brazil البرازيل"
},
{
  "name": "Gen. Buech Airport مطار جنرال بيوش",
  "city": "Riberalta ريبيرالتا",
  "country": "Bolivia بوليفيا"
},
{
  "name": "Richmond International Airport مطار ريتشموند الدولي",
  "city": "Richmond ريتشموند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rio Grande Airport مطار ريو غراندي",
  "city": "Rio Grande ريو غراندي",
  "country": "Brazil البرازيل"
},
{
  "name": "Rishiri Airport مطار ريشيري",
  "city": "Rishirifuji-cho ريشيريفوجي-تشو",
  "country": "Japan اليابان"
},
{
  "name": "March Air Force Base قاعدة مارس الجوية",
  "city": "Alessandro أليساندرو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Riverton Regional Airport مطار ريفرتون الإقليمي",
  "city": "Riverton ريفرتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Riga Airport مطار ريغا",
  "city": "Marupe ماريوب",
  "country": "Latvia لاتفيا"
},
{
  "name": "Riyan Airport مطار رييان",
  "city": "Shuhayr شوهر",
  "country": "Yemen اليمن"
},
{
  "name": "Rajahmundry Airport مطار راجهوندري",
  "city": "Kapavaram كابافارام",
  "country": "India الهند"
},
{
  "name": "Rijeka Krk Airport مطار ريجكا كرك",
  "city": "Rijeka رييكا",
  "country": "Croatia كرواتيا"
},
{
  "name": "Agoncillo مطار أغانسيو",
  "city": "Logrono لوغرونو",
  "country": "Spain إسبانيا"
},
{
  "name": "Kerman مطار كيرمان",
  "city": "Rafsanjan رفسنجان",
  "country": "Iran إيران"
},
{
  "name": "Knox County Regional Airport مطار مقاطعة نوكس الإقليمي",
  "city": "Owls Head أوولز هيد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rock Springs-Sweetwater County Airport مطار روك سبرينغز-سويت ووتر",
  "city": "Rock Springs روك سبرينغز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ras Al Khaimah International Airport مطار رأس الخيمة الدولي",
  "city": "",
  "country": "United Arab Emirates الإمارات العربية المتحدة"
},
{
  "name": "Reykjavik Airport مطار ريكيافيك",
  "city": "Reykjavik ريكيافيك",
  "country": "Iceland أيسلندا"
},
{
  "name": "Rostock-laage مطار روستوك-لاجي",
  "city": "Rostock-laage روستوك-لاجي",
  "country": "Germany ألمانيا"
},
{
  "name": "Roma Aerodrome مطار روما",
  "city": "Blythdale بلايثديل",
  "country": "Australia أستراليا"
},
{
  "name": "Marsa Alam International مطار مرسى علم الدولي",
  "city": "Marsa Alam مرسى علم",
  "country": "Egypt مصر"
},
{
  "name": "Rimini Airport مطار ريميني",
  "city": "Rimini ريميني",
  "country": "Italy إيطاليا"
},
{
  "name": "Rampart مطار رامبارت",
  "city": "Rampart رامبارت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Taiwan مطار تايوان",
  "city": "Taichung تايشونغ",
  "country": "Taiwan تايوان"
},
{
  "name": "Remada Airport مطار رمادة",
  "city": "Tatawin تطاوين",
  "country": "Tunisia تونس"
},
{
  "name": "Ulawa Airport مطار أولوا",
  "city": "Arona أرونا",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Ronneby Airport مطار رونيبي",
  "city": "Kallinge كالينغ",
  "country": "Sweden السويد"
},
{
  "name": "Rennell مطار رينيل",
  "city": "Rennell رينيل",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Bornholm Airport مطار بورنهولم",
  "city": "Ronne روني",
  "country": "Denmark الدنمارك"
},
{
  "name": "Reno-Tahoe International Airport مطار رينو-تاهو الدولي",
  "city": "Reno رينو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "St Jacques Airport مطار سانت جاك",
  "city": "St-Jacques سانت جاك",
  "country": "France فرنسا"
},
{
  "name": "Roanoke Regional Airport-Woodrum Field مطار رونوك الإقليمي - وودرم فيلد",
  "city": "Roanoke رونوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Roberts International Airport مطار روبرتس الدولي",
  "city": "Harbelville هاربلفيل",
  "country": "Liberia ليبيريا"
},
{
  "name": "Greater Rochester International Airport مطار غreater روتشستر الدولي",
  "city": "Rochester روتشستر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mueang Poi Et مطار موينغ بوي إت",
  "city": "Roi Et روي إت",
  "country": "Thailand تايلاند"
},
{
  "name": "Rockhampton Airport مطار روكهامبتون",
  "city": "Rockhampton روكهامبتون",
  "country": "Australia أستراليا"
},
{
  "name": "Rondonopolis Airport مطار رندونوبوليس",
  "city": "Rondonópolis رندونوبوليس",
  "country": "Brazil البرازيل"
},
{
  "name": "Rota International Airport مطار روتا الدولي",
  "city": "Rota روتا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Koror Airport مطار كورو",
  "city": "Koror كورو",
  "country": "Palau بالاو"
},
{
  "name": "Rosario Airport مطار روساريو",
  "city": "Rosario روساريو",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Rotorua Airport مطار روتوروا",
  "city": "Rotorua روتوروا",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Rostov East Airport مطار روستوف الشرقي",
  "city": "Taganrog تاجانروغ",
  "country": "Russia روسيا"
},
{
  "name": "Roswell Industrial Air Center مركز روزويل الصناعي للطيران",
  "city": "Roswell روزويل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Raipur Airport مطار رايبور",
  "city": "Banarsi بانارسي",
  "country": "India الهند"
},
{
  "name": "Mauritius مطار موريشيوس",
  "city": "Rodrigues Is رودريغس",
  "country": "Mauritius موريشيوس"
},
{
  "name": "Roeros Airport مطار روروس",
  "city": "Roros روروس",
  "country": "Norway النرويج"
},
{
  "name": "Santa Rosa Airport مطار سانتا روزا",
  "city": "Santa Rosa سانتا روزا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Rock Sound Airport مطار روك ساوند",
  "city": "Rock Sound روك ساوند",
  "country": "Bahamas جزر البهاما"
},
{
  "name": "Russian مطار الروسي",
  "city": "Russian Mission مهمة روسية",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rosario Seaplane Base قاعدة الطائرات المائية في روساريو",
  "city": "Olga أولغا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rochester International Airport مطار روتشستر الدولي",
  "city": "Rochester روتشستر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Yeosu Airport مطار يوسو",
  "city": "Yeosu-Si يوسو",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Southwest Florida International Airport مطار جنوب غرب فلوريدا الدولي",
  "city": "Fort Myers فورت مايرز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rotuma مطار روتوما",
  "city": "Rotuma Island جزيرة روتوما",
  "country": "Fiji فيجي"
},
{
  "name": "Roatan Island Airport مطار جزيرة رواتان",
  "city": "Roatán رواتان",
  "country": "Honduras هندوراس"
},
{
  "name": "Satartacik Airport مطار ساتارتشيك",
  "city": "Ruteng روتنج",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Rotterdam Airport مطار روتردام",
  "city": "Rotterdam روتردام",
  "country": "Netherlands هولندا"
},
{
  "name": "Saratov Airport مطار ساراتوف",
  "city": "Saratov ساراتوف",
  "country": "Russia روسيا"
},
{
  "name": "Arua Airport مطار أروا",
  "city": "Arua أروا",
  "country": "Uganda أوغندا"
},
{
  "name": "Oslo Airport مطار أوسلو",
  "city": "Oslo أوسلو",
  "country": "Norway النرويج"
},
{
  "name": "King Khalid International Airport مطار الملك خالد الدولي",
  "city": "Riyadh الرياض",
  "country": "Saudi Arabia المملكة العربية السعودية"
},
{
  "name": "Nepal مطار نيبال",
  "city": "Rukumkot روكمكوت",
  "country": "Nepal نيبال"
},
{
  "name": "Rumjatar Airport مطار رومجاتار",
  "city": "Rumjatar رومجاتار",
  "country": "Nepal نيبال"
},
{
  "name": "Saint Denis Gillot Airport مطار سانت دينيس غيو",
  "city": "Sainte-Marie سانت ماري",
  "country": "Reunion ريونيون"
},
{
  "name": "Rurutu Airport مطار روروتو",
  "city": "Rurutu روروتو",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Rutland State Airport مطار روتلاند",
  "city": "North Clarendon شمال كلاريندون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Farafangana Airport مطار فارافانجانا",
  "city": "Farafangana فارافانجانا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Saravena El Eden Airport مطار سرافينا إل إيدن",
  "city": "Saravena سرافينا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Ryumsjoen Airport مطار ريامسجن",
  "city": "Rorvik رورفيك",
  "country": "Norway النرويج"
},
{
  "name": "Rovaniemi Airport مطار روفانيمي",
  "city": "Saarenkylä سارانكيل",
  "country": "Finland فنلندا"
},
{
  "name": "Western Australia مطار أستراليا الغربية",
  "city": "Ravensthorpe رافينستهورب",
  "country": "Australia أستراليا"
},
{
  "name": "Raivavae Airport مطار ريفافي",
  "city": "Rairua ريفاروا",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Roxas Airport مطار روكاس",
  "city": "Ivisan إيفيسان",
  "country": "Philippines الفلبين"
},
{
  "name": "Moss Airport مطار موس",
  "city": "Rygge ريج",
  "country": "Norway النرويج"
},
{
  "name": "Rahim Yar Khan Airport مطار رحيم يار خان",
  "city": "Rahim Yar Khan رحيم يار خان",
  "country": "Pakistan باكستان"
},
{
  "name": "Jasionka Airport مطار ياسيونكا",
  "city": "Trzebownisko تريبيونيسكو",
  "country": "Poland بولندا"
},
{
  "name": "Philippines مطار الفلبين",
  "city": "Taytay Sandoval تايتاي ساندوفال",
  "country": "Philippines الفلبين"
},
{
  "name": "Ramsar Airport مطار رامسر",
  "city": "Ramsar رامسر",
  "country": "Iran إيران"
},
{
  "name": "Sawan Airport مطار سوان",
  "city": "Sawan سوان",
  "country": "Pakistan باكستان"
},
{
  "name": "Yrausquin Airport مطار يراوسكين",
  "city": "Saba سابا",
  "country": "Netherlands Antilles جزر الأنتيل الهولندية"
},
{
  "name": "Sanaa International Airport مطار صنعاء الدولي",
  "city": "Ar Raudha الرودة",
  "country": "Yemen اليمن"
},
{
  "name": "El Salvador International Airport مطار السلفادور الدولي",
  "city": "San Luis سان لويس",
  "country": "El Salvador السلفادور"
},
{
  "name": "San Diego International Airport مطار سان دييغو الدولي",
  "city": "San Diego سان دييغو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "La Mesa International Airport مطار لا ميسا الدولي",
  "city": "San Pedro Sula سان بيدرو سولا",
  "country": "Honduras هندوراس"
},
{
  "name": "San Andros Municipal Airport مطار سان أندروس البلدي",
  "city": "San Andros سان أندروس",
  "country": "Bahamas الباهاماس"
},
{
  "name": "San Antonio International Airport مطار سان أنطونيو الدولي",
  "city": "San Antonio سان أنطونيو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Savannah International Airport مطار سافانا الدولي",
  "city": "Savannah سافانا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Istanbul Sabiha Gokcen Airport مطار إسطنبول صبيحة كوكجن",
  "city": "Umraniye عمرانية",
  "country": "Turkey تركيا"
},
{
  "name": "Santa Barbara Municipal Airport مطار سانتا باربرا البلدي",
  "city": "Goleta غوليتا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Gustavia Airport مطار غوستافيا",
  "city": "Gustavia غوستافيا",
  "country": "Guadeloupe غوادلوب"
},
{
  "name": "Santa Ana de Yacuma Airport مطار سانتا آنا دي ياكوم",
  "city": "Santa Ana سانتا آنا",
  "country": "Bolivia بوليفيا"
},
{
  "name": "South Bend Regional Airport مطار ساوث بند الإقليمي",
  "city": "South Bend ساوث بند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "San Luis Obispo County Airport مطار مقاطعة سان لويس أوبيسبو",
  "city": "San Luis Obispo سان لويس أوبيسبو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Saibai Island Airport مطار جزيرة سايبai",
  "city": "Saibai Island جزيرة سايبai",
  "country": "Australia أستراليا"
},
{
  "name": "Sibu Airport مطار سيبو",
  "city": "Sibu سيبو",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Salisbury-Wicomico County Regional Airport مطار ساليسبري - ويكوميكو الإقليمي",
  "city": "Salisbury ساليسبري",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Turnisor Airport مطار ترونيسور",
  "city": "Sibiu سيبيو",
  "country": "Romania رومانيا"
},
{
  "name": "Deadhorse Airport مطار ديدهورس",
  "city": "Prudhoe Bay بروده باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "University Park Airport مطار جامعة بارك",
  "city": "State College ولاية الكلية",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Stockton Metropolitan Airport مطار ستوكطن متروبوليتان",
  "city": "Stockton ستوكطن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Arturo Merino Benitez International Airport مطار أرتورو ميرينو بينيتز الدولي",
  "city": "Lo Amor لو آمور",
  "country": "Chile تشيلي"
},
{
  "name": "Scammon Bay مطار سكاملون باي",
  "city": "Scammon Bay سكاملون باي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Saarbrucken Airport مطار ساربركن",
  "city": "Sarrebruck سارربروك",
  "country": "Germany ألمانيا"
},
{
  "name": "Aktau مطار أكتاو",
  "city": "Aktau أكتاو",
  "country": "Kazakhstan كازاخستان"
},
{
  "name": "Santiago Airport مطار سانتياغو",
  "city": "Santiago سانتياغو",
  "country": "Spain إسبانيا"
},
{
  "name": "Socotra مطار سقطرى",
  "city": "Socotra سقطرى",
  "country": "Yemen اليمن"
},
{
  "name": "Antonio Maceo Airport مطار أنطونيو ماسيو",
  "city": "Santiago de Cuba سانتياغو دي كوبا",
  "country": "Cuba كوبا"
},
{
  "name": "Suceava Salcea Airport مطار سوتشيفا سالسيا",
  "city": "Suceava سوتشيفا",
  "country": "Romania رومانيا"
},
{
  "name": "Russia مطار روسيا",
  "city": "Syktyvkar سيكتيفكار",
  "country": "Russia روسيا"
},
{
  "name": "Salina Cruz مطار سالينا كروز",
  "city": "Salina Cruz سالينا كروز",
  "country": "Mexico المكسيك"
},
{
  "name": "San Cristobal Airport مطار سان كريستوبال",
  "city": "Puerto Baquerizo Moreno بورتو باكيريزو مورينو",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Santa Cruz Is مطار سانتا كروز",
  "city": "Santa Cruz Is سانتا كروز",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Lubango Airport مطار لو بانغو",
  "city": "Lubango لو بانغو",
  "country": "Angola أنغولا"
},
{
  "name": "Santiago del Estero Airport مطار سانتياغو ديل استيرو",
  "city": "Frías فرياس",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Louisville International Airport مطار لويزفيل الدولي",
  "city": "Louisville لويزفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sanandaj Airport مطار سنندج",
  "city": "Sanandaj سنندج",
  "country": "Iran إيران"
},
{
  "name": "Sendai Airport مطار سنداي",
  "city": "Natori-shi ناتوري شي",
  "country": "Japan اليابان"
},
{
  "name": "Sandakan Airport مطار ساندكان",
  "city": "Sandakan ساندكان",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Sundsvall Harnosand Airport مطار سوندسفال هارنوساند",
  "city": "Bergeforsen بيرغيفورسن",
  "country": "Sweden السويد"
},
{
  "name": "Sandane Airport مطار ساندان",
  "city": "Sandene ساندين",
  "country": "Norway النرويج"
},
{
  "name": "Sand Point Airport مطار ساند بوينت",
  "city": "Sand Point ساند بوينت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "De Las Americas International Airport مطار دي لاس الأمريكتين الدولي",
  "city": "Santo Domingo سانتو دومينغو",
  "country": "Dominican Republic جمهورية الدومينيكان"
},
{
  "name": "Santander Airport مطار سانتاندر",
  "city": "Santander سانتاندر",
  "country": "Spain إسبانيا"
},
{
  "name": "Saidu Sharif Airport مطار سايدو شريف",
  "city": "Saidu سايدو",
  "country": "Pakistan باكستان"
},
{
  "name": "Santos Dumont Airport مطار سانتوس دومون",
  "city": "Rio de Janeiro ريو دي جانيرو",
  "country": "Brazil البرازيل"
},
{
  "name": "Sde Dov Airport مطار سدي دوف",
  "city": "Tel Aviv Yafo تل أبيب يافو",
  "country": "Israel إسرائيل"
},
{
  "name": "Sidney Richland Municipal Airport مطار سيدني ريتشلاند",
  "city": "Sidney سيدني",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tacoma International Airport مطار تاكويما الدولي",
  "city": "Seattle سياتل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sebha Airport مطار سبها",
  "city": "Sabha سبها",
  "country": "Libya ليبيا"
},
{
  "name": "Southend Airport مطار ساوث إند",
  "city": "Southend on Sea ساوث إند على البحر",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Siwa Airport مطار سيوة",
  "city": "Siwa سيوة",
  "country": "Egypt مصر"
},
{
  "name": "Seychelles International Airport مطار سيشل الدولي",
  "city": "Victoria فيكتوريا",
  "country": "Seychelles سيشل"
},
{
  "name": "El Maou Airport مطار الماو",
  "city": "Safaqis صفاقس",
  "country": "Tunisia تونس"
},
{
  "name": "Orlando Sanford International Airport مطار أورلاندو سانفورد الدولي",
  "city": "Sanford سانفورد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "San Fernando de Apure Airport مطار سان فيراندو دي أبور",
  "city": "San Fernando de Apure سان فيراندو دي أبور",
  "country": "Venezuela فنزويلا"
},
{
  "name": "San Fernando Airport مطار سان فيراندو",
  "city": "San Fernando سان فيراندو",
  "country": "Philippines الفلبين"
},
{
  "name": "Grand Case-Esperance Airport مطار غراند كايس-إيسبيرانس",
  "city": "Saint-Martin et Saint-Barthélemy سانت مارتن وسانت بارتيليمي",
  "country": "Guadeloupe غواديلوب"
},
{
  "name": "Kangerlussuaq مطار كانجرلوسواك",
  "city": "Kangerlussuaq كانجرلوسواك",
  "country": "Greenland غرينلاند"
},
{
  "name": "Sao Filipe مطار ساو فيليبي",
  "city": "Sao Filipe ساو فيليبي",
  "country": "Cape Verde الرأس الأخضر"
},
{
  "name": "Sauce Viejo Airport مطار صوص فيجو",
  "city": "Santa Fe سانتا في",
  "country": "Argentina الأرجنتين"
},
{
  "name": "San Francisco International Airport مطار سان فرانسيسكو الدولي",
  "city": "San Francisco سان فرانسيسكو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Skelleftea Airport مطار سكليفتيا",
  "city": "Skelleftea سكليفتيا",
  "country": "Sweden السويد"
},
{
  "name": "Surgut North Airport مطار سورغوت شمال",
  "city": "Khanty-Mansiysk خانتي مانسيسك",
  "country": "Russia روسيا"
},
{
  "name": "Sonderborg Airport مطار سوندر بورغ",
  "city": "Sonderborg سوندر بورغ",
  "country": "Denmark الدنمارك"
},
{
  "name": "Springfield Regional Airport مطار سبرينغفيلد الإقليمي",
  "city": "Springfield سبرينغفيلد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tan Son Nhut Airport مطار تان سون نهوات",
  "city": "Ho Chi Minh City مدينة هوشي منه",
  "country": "Vietnam فيتنام"
},
{
  "name": "St George مطار سانت جورج",
  "city": "St George سانت جورج",
  "country": "Australia أستراليا"
},
{
  "name": "St George Municipal Airport مطار سانت جورج البلدي",
  "city": "St. George سانت جورج",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ruvuma مطار روفوما",
  "city": "Songea سونغيا",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Skagway Airport مطار سكاكواي",
  "city": "Skagway سكاكواي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hongqiao Airport مطار هونغ تشياو",
  "city": "Shanghai شنغهاي",
  "country": "China الصين"
},
{
  "name": "Nakashibetsu Airport مطار ناكاشيبي تسو",
  "city": "Nakashibetsu-cho ناكاشيبي تسو-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Indaselassie مطار إنداسلاس",
  "city": "Indaselassie إنداسلاس",
  "country": "Ethiopia إثيوبيا"
},
{
  "name": "Shenandoah Valley Regional Airport مطار وادي شيناندواه الإقليمي",
  "city": "Weyers Cave كهوف ويرز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Dongta Airport مطار دونغتا",
  "city": "Shenyang شنيانغ",
  "country": "China الصين"
},
{
  "name": "Shungnak Airport مطار شونغناك",
  "city": "Shungnak شونغناك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Shishmaref مطار شيشماريف",
  "city": "Shishmaref شيشماريف",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sharjah International Airport مطار الشارقة الدولي",
  "city": "Ajman عجمان",
  "country": "United Arab Emirates الإمارات العربية المتحدة"
},
{
  "name": "Shillong Airport مطار شيلونغ",
  "city": "Shillong شيلونغ",
  "country": "India الهند"
},
{
  "name": "Nanki-Shirahama Airport مطار نانكي-شيراهاما",
  "city": "Shirahama-cho شيراهاما-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Qinhuangdao مطار تشينهوانغداو",
  "city": "Qinhuangdao تشينهوانغداو",
  "country": "China الصين"
},
{
  "name": "Sheridan County Airport مطار مقاطعة شيريدان",
  "city": "Sheridan شيريدان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Shreveport Regional Airport مطار شريفبورت الإقليمي",
  "city": "Shreveport شريفبورت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sharurah Airport مطار شرورة",
  "city": "As-Saraura الشرورة",
  "country": "Saudi Arabia المملكة العربية السعودية"
},
{
  "name": "Shageluk مطار شاجلوك",
  "city": "Shageluk شاجلوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Shinyanga مطار شينيانغا",
  "city": "Shinyanga شينيانغا",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Xiguan Airport مطار شيغوان",
  "city": "Xi'an شيان",
  "country": "China الصين"
},
{
  "name": "Sinop مطار سينوب",
  "city": "Sinop سينوب",
  "country": "Turkey تركيا"
},
{
  "name": "Amilcar Cabral International Airport مطار أميليكار كابرال الدولي",
  "city": "Santa Maria سانتا ماريا",
  "country": "Cape Verde الرأس الأخضر"
},
{
  "name": "Simara Airport مطار سيمارا",
  "city": "Simara سيمارا",
  "country": "Nepal نيبال"
},
{
  "name": "Isla Grande Airport مطار إيسلا غراندي",
  "city": "San Juan سان خوان",
  "country": "Puerto Rico بورتو ريكو"
},
{
  "name": "Singapore Changi Airport مطار سنغافورة شانغي",
  "city": "Singapore سنغافورة",
  "country": "Singapore سنغافورة"
},
{
  "name": "Simferopol North Airport مطار سيمفيروبول الشمالي",
  "city": "Simferopol' سيمفيروبول",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Sitka Airport مطار سيتكا",
  "city": "Sitka سيتكا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Norman Y Mineta San Jose International Airport مطار نورمان واي مينيتا الدولي في سان خوسيه",
  "city": "San Jose سان خوسيه",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Los Cabos International Airport مطار لوس كابوس الدولي",
  "city": "S. Jose del Cabo سان خوسيه ديل كابو",
  "country": "Mexico المكسيك"
},
{
  "name": "San Jose del Guaviaro Airport مطار سان خوسيه ديل غوافيرو",
  "city": "San Jose del Guaviaro سان خوسيه ديل غوافيرو",
  "country": "Colombia كولومبيا"
},
{
  "name": "San Jose Airport مطار سان خوسيه",
  "city": "San Jose سان خوسيه",
  "country": "Philippines الفلبين"
},
{
  "name": "Sarajevo Airport مطار سراييفو",
  "city": "Ilidža إيلدجا",
  "country": "Bosnia and Herzegovina البوسنة والهرسك"
},
{
  "name": "Sao Jose dos Campos Airport مطار ساو خوسيه دو كامبوس",
  "city": "Sao Jose dos Campos ساو خوسيه دو كامبوس",
  "country": "Brazil البرازيل"
},
{
  "name": "Juan Santamaria International Airport مطار خوان سانتاماريا الدولي",
  "city": "Heredia هيريديا",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Sao Jose do Rio Preto Airport مطار ساو خوسيه دو ريو بريتو",
  "city": "São José do Rio Preto ساو خوسيه دو ريو بريتو",
  "country": "Brazil البرازيل"
},
{
  "name": "Mathis Field Airport مطار ماثيس فيلد",
  "city": "San Angelo سان أنجلو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Luis Munoz Marin Airport مطار لويس مونيز ماريين",
  "city": "Carolina كارولينا",
  "country": "Puerto Rico بورتو ريكو"
},
{
  "name": "Surkhet سورخيت",
  "city": "Surkhet سورخيت",
  "country": "Nepal نيبال"
},
{
  "name": "Shaktoolik شاك توليك",
  "city": "Shaktoolik شاك توليك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Stokmarknes Airport مطار ستوك ماركنيس",
  "city": "Stokkmarknes ستوكماركنس",
  "country": "Norway النرويج"
},
{
  "name": "Sadiq Abubakar III Airport مطار صادق أبو بكر الثالث",
  "city": "Shunni شني",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Petrovec بيتروفيك",
  "city": "Skopje سكوبي",
  "country": "Macedonia مقدونيا"
},
{
  "name": "Sialkot سيالكوت",
  "city": "Sialkot سيالكوت",
  "country": "Pakistan باكستان"
},
{
  "name": "Skiros Airport مطار سكييروس",
  "city": "Skiros سكييروس",
  "country": "Greece اليونان"
},
{
  "name": "Sukkur Airport مطار Sukkur",
  "city": "Sukkur Sukkur",
  "country": "Pakistan باكستان"
},
{
  "name": "Salta Airport مطار سالتا",
  "city": "La Caldera لا كالدييرا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Salt Lake City International Airport مطار مدينة سالت ليك الدولي",
  "city": "Salt Lake City سالت ليك سيتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mcnary Field Airport مطار ماكناري فيلد",
  "city": "Salem سالم",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Torba طوربا",
  "city": "Sola سولا",
  "country": "Vanuatu فanuatu"
},
{
  "name": "Solwezi Airport مطار سولويزي",
  "city": "Solwezi سولويزي",
  "country": "Zambia زامبيا"
},
{
  "name": "Adirondack Regional Airport مطار أديرونداك الإقليمي",
  "city": "Saranac Lake سارانك ليك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Salalah Airport مطار صلالة",
  "city": "Salalah صلالة",
  "country": "Oman عمان"
},
{
  "name": "Salamanca Airport مطار سالامانكا",
  "city": "Villagonzalo de Tormes فيلا غونزالو دي تيرميس",
  "country": "Spain إسبانيا"
},
{
  "name": "Salina Municipal Airport مطار سالينا البلدي",
  "city": "Salina سالينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "San Luis Potosi Airport مطار سان لويس بوتوسي",
  "city": "S. Luis Potosi سان لويس بوتوسي",
  "country": "Mexico المكسيك"
},
{
  "name": "Sleetmute Airport مطار سليتميوت",
  "city": "Sleetmute سليتميوت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Vigie Airport مطار فيجي",
  "city": "St Lucia سانت لوسيا",
  "country": "St. Lucia سانت لوسيا"
},
{
  "name": "Simla Airport مطار شيملا",
  "city": "Jutogh جوتوغ",
  "country": "India الهند"
},
{
  "name": "Plan de Guadalupe Airport مطار بلان دي غوادالوبي",
  "city": "General Cepeda جنرال سيبد",
  "country": "Mexico المكسيك"
},
{
  "name": "Salt Cay Airport مطار سالت كاي",
  "city": "Salt Cay سالت كاي",
  "country": "Turks And Caicos Islands جزر تركس وكايكوس"
},
{
  "name": "Russia مطار روسيا",
  "city": "Salekhard ساليخار",
  "country": "Russia روسيا"
},
{
  "name": "Marechal Cunha Machado International Airport مطار مارشال كونها ماشادو الدولي",
  "city": "Salvador سلفادور",
  "country": "Brazil البرازيل"
},
{
  "name": "Santa Maria Airport مطار سانتا ماريا",
  "city": "Vila do Porto فيلا دو بورتو",
  "country": "Portugal البرتغال"
},
{
  "name": "Sacramento International Airport مطار ساكرامنتو الدولي",
  "city": "Sacramento ساكرامنتو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Samos Airport مطار ساموس",
  "city": "Pithagorion فيثاغور",
  "country": "Greece اليونان"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "St Michael سانت ميخائيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Stella Maris Airport مطار ستلا ماريس",
  "city": "Simms سيمس",
  "country": "Bahamas البهاماس"
},
{
  "name": "Lemhi County Airport مطار مقاطعة ليمهي",
  "city": "Salmon سالمون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Simon Bolivar Airport مطار سيمون بوليفار",
  "city": "Magdalena ماغدالينا",
  "country": "Colombia كولومبيا"
},
{
  "name": "Sainte Marie Airport مطار سانت ماري",
  "city": "Toamasina تواماسينا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Santa Maria Public Airport مطار سانتا ماريا العام",
  "city": "Santa Maria سانتا ماريا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "John Wayne Airport مطار جون واين",
  "city": "Santa Ana سانتا آنا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "General Ulpiano Paez Airport مطار الجنرال أولبيانو بايز",
  "city": "Salinas ساليناس",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Preguica Airport مطار بريغويكا",
  "city": "Ribeira Brava ريبيرا برافا",
  "country": "Cape Verde كاب فيردي"
},
{
  "name": "Shannon Airport مطار شانون",
  "city": "Shannon Airport مطار شانون",
  "country": "Ireland أيرلندا"
},
{
  "name": "Sakon Nakhon Airport مطار ساكون ناكون",
  "city": "Sakon Nakhon ساكون ناكون",
  "country": "Thailand تايلاند"
},
{
  "name": "Saint Paul Island مطار سانت بول آيلاند",
  "city": "Saint Paul Island سانت بول آيلاند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Montoir Airport مطار مونوتر",
  "city": "Montoir-de-Bretagne مونوتر-دو-بريتان",
  "country": "France فرنسا"
},
{
  "name": "Santa Clara Airport مطار سانتا كلارا",
  "city": "Esperanza إسبيرانزا",
  "country": "Cuba كوبا"
},
{
  "name": "Myanmar مطار ميانمار",
  "city": "Thandwe ثاندوي",
  "country": "Myanmar ميانمار"
},
{
  "name": "Sarmellek Airport مطار سارملليك",
  "city": "Zalavár زالافار",
  "country": "Hungary هنغاريا"
},
{
  "name": "Adi Sumarmo Wiryokusumo Airport مطار آدي سوما مورو ويريوكوسومو",
  "city": "Surakarta سوراكرتا",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Vrazhdebna Airport مطار فراجدبنا",
  "city": "Sofia صوفيا",
  "country": "Bulgaria بلغاريا"
},
{
  "name": "Haukasen Airport مطار هاوكاسن",
  "city": "Kaupanger كاوبانجر",
  "country": "Norway النرويج"
},
{
  "name": "Sorkjosen Airport مطار سوركيوسن",
  "city": "Sørkjosen سوركيوسن",
  "country": "Norway النرويج"
},
{
  "name": "San Tome Airport مطار سان توميه",
  "city": "Cantaura كانتورا",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Santo Pekoa International Airport مطار سانتو بيكوا الدولي",
  "city": "مطار سانتو بيكوا الدولي",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Soderhamn Airport مطار سودرهامن",
  "city": "Soderhamn سودرهامن",
  "country": "Sweden السويد"
},
{
  "name": "Jefman Airport مطار جيفمان",
  "city": "Sorong سورونغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Southampton International Airport مطار ساوثهامبتون الدولي",
  "city": "Southampton ساوثهامبتون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "مطار سلدوفيا",
  "city": "Seldovia سلدوفيا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Show Low Municipal Airport مطار شو لو",
  "city": "Show Low شو لو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "St Thomas Seaplane Base قاعدة الطائرات المائية سانت توماس",
  "city": "Charlotte Amalie تشارلوت أمالي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Santa Cruz de la Palma Airport مطار سانتا كروز دي لا بالما",
  "city": "Breña Alta برينيا ألتو",
  "country": "Spain إسبانيا"
},
{
  "name": "Saidpur Airport مطار سيدبور",
  "city": "Dinajpur دينا جبور",
  "country": "Bangladesh بنغلاديش"
},
{
  "name": "Capital Airport مطار العاصمة",
  "city": "Springfield سبرينغفيلد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Santa Maria Airport مطار سانتا ماريا",
  "city": "Vila do Porto فيلا دو بورتو",
  "country": "Portugal البرتغال"
},
{
  "name": "Saipan International Airport مطار سايبان الدولي",
  "city": "Saipan سايبان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Menongue East Airport مطار مينونغ شرق",
  "city": "Menongue مينونغ",
  "country": "Angola أنغولا"
},
{
  "name": "San Pedro Airport مطار سان بيدرو",
  "city": "San Pedro سان بيدرو",
  "country": "Belize بليز"
},
{
  "name": "Sheppard Air Force Base قاعدة شيفرد الجوية",
  "city": "Wichita Falls ويتشيتا فولز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Split Airport مطار سبليت",
  "city": "Split سبليت",
  "country": "Croatia كرواتيا"
},
{
  "name": "Sweden سويد",
  "city": "Storuman ستورومان",
  "country": "Sweden السويد"
},
{
  "name": "Santa Rosa Airport مطار سانتا روزا",
  "city": "Santa Rosa سانتا روزا",
  "country": "Brazil البرازيل"
},
{
  "name": "Juana Azurduy de Padilla Airport مطار جوانا أزوردي",
  "city": "Sucre سوكر",
  "country": "Bolivia بوليفيا"
},
{
  "name": "Achmad Yani Airport مطار أحمد ياني",
  "city": "Semarang سمارانغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Capitan G Q Guardia مطار كابيتان جي كيو غارديا",
  "city": "San Borja سان بوجا",
  "country": "Bolivia بوليفيا"
},
{
  "name": "Sorstukken Airport مطار سورستوكين",
  "city": "Skjold سكيولد",
  "country": "Norway النرويج"
},
{
  "name": "Sarasota Bradenton Airport مطار ساراسوتا برادنتون",
  "city": "Sarasota ساراسوتا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska ألاسكا",
  "city": "Stony River ستوني ريفر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Surt سرت",
  "city": "Sert سرت",
  "country": "Libya ليبيا"
},
{
  "name": "Sary ساري",
  "city": "Sary ساري",
  "country": "Iran إيران"
},
{
  "name": "El Trompillo Airport مطار الترامبيلو",
  "city": "Santa Cruz de la Sierra سانتا كروز دي لا سيرا",
  "country": "Bolivia بوليفيا"
},
{
  "name": "Deputado Luis Eduardo Magalhaes International Ai مطار ديواتو لويس إدواردو مغالهايس الدولي",
  "city": "Salvador سالفادور",
  "country": "Brazil البرازيل"
},
{
  "name": "Christiansted Harbor Seaplane Base قاعدة الطائرات المائية في كريستيانستيد",
  "city": "Christiansted كريستيانستيد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Malabo Airport مطار مالابو",
  "city": "Malabo مالابو",
  "country": "Equatorial Guinea غينيا الاستوائية"
},
{
  "name": "Ras Nasrani Airport مطار رأس نصراني",
  "city": "Al Arish العريش",
  "country": "Egypt مصر"
},
{
  "name": "Stokka Airport مطار ستوكا",
  "city": "Sandnessjoen ساندنسجون",
  "country": "Norway النرويج"
},
{
  "name": "Vanuatu فانواتو",
  "city": "Sara سارا",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Mbanza Congo Airport مطار مانزا كونغو",
  "city": "M'banza Congo م'bنز كونغو",
  "country": "Angola أنغولا"
},
{
  "name": "St Cloud Regional Airport مطار سانت كلاود الإقليمي",
  "city": "St. Cloud سانت كلاود",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mayor Buenaventura Vivas Airport مطار مايور بوينفينتورا فيفاس",
  "city": "Santa Ana del Tachira سانتا آنا ديل تاشيرا",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Alaska ألاسكا",
  "city": "St George Island جزيرة سانت جورج",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Cibao International Airport مطار سيباو الدولي",
  "city": "La Lomota لا لوموتا",
  "country": "Dominican Republic جمهورية الدومينيكان"
},
{
  "name": "Lambert St Louis International Airport مطار لامبرت سانت لويس الدولي",
  "city": "St. Louis سانت لويس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Santarem International Airport مطار سانتاريم الدولي",
  "city": "Santarém سانتاريم",
  "country": "Brazil البرازيل"
},
{
  "name": "London Stansted International Airport مطار لندن ستانستيد الدولي",
  "city": "Stansted Mountfitchet ستانستيد ماونتفيتشيت",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Stuttgart Airport مطار شتوتغارت",
  "city": "Stuttgart شتوتغارت",
  "country": "Germany ألمانيا"
},
{
  "name": "Sonoma County Airport مطار مقاطعة سونوما",
  "city": "Windsor ويندسور",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Cyril E King International Airport مطار سيريل إي كينغ الدولي",
  "city": "Charlotte Amalie تشارلوت أماليا",
  "country": "United States الولايات المتحدة"
},
{"name": "مطار سورات Surat Airport", "city": "أن Un", "country": "الهند India"},
{"name": "مطار ميخايلوفسكو ف Mikhaylovskoye Airport", "city": "ستافروبول Stavropol'", "country": "روسيا Russia"},
{"name": "مطار هنري إ. روهلسون الدولي Henry E Rohlson International Airport", "city": "فريدريكستيد Frederiksted", "country": "الولايات المتحدة United States"},
{"name": "مطار جواندا Juanda Airport", "city": "سيدوارجو Sidoarjo", "country": "إندونيسيا Indonesia"},
{"name": "مطار لاميزيا تيرمي Lamezia Terme Airport", "city": "كاز سيرفي Case Cervi", "country": "إيطاليا Italy"},
{"name": "مطار سوريغاو Surigao Airport", "city": "مدينة سوريغاو Surigao City", "country": "الفلبين Philippines"},
{"name": "مطار ساتو ماري Satu Mare Airport", "city": "ساتو ماري Satu Mare", "country": "رومانيا Romania"},
{"name": "مطار فريدمان ميموريال Friedman Memorial Airport", "city": "هايلي Hailey", "country": "الولايات المتحدة United States"},
{"name": "مطار صيفرب بييف Summer Beaver", "city": "صيفرب بييف Summer Beaver", "country": "كندا Canada"},
{"name": "مطار نوسوري الدولي Nausori International Airport", "city": "نوسوري Nausori", "country": "فيجي Fiji"},
{"name": "مطار سيوكس غيتواي Sioux Gateway Airport", "city": "سي Sioux City", "country": "الولايات المتحدة United States"},
{"name": "مطار ألاسكا Alaska", "city": "سافوونجا Savoonga", "country": "الولايات المتحدة United States"},
{"name": "مطار سامبا سافا Sambava", "city": "سامبا Sambava", "country": "مدغشقر Madagascar"},
{"name": "مطار سيلفر سيتي - غرانت Silver City-Grant County Airport", "city": "سيلفر سيتي Silver City", "country": "الولايات المتحدة United States"},
{"name": "مطار إ. ت. جوشوا E T Joshua Airport", "city": "كينغستون Kingstown", "country": "سانت فنسنت وجزر غرينادين Saint Vincent and the Grenadines"},
{"name": "مطار ستافانغر سولا Stavanger Sola Airport", "city": "راج Rage", "country": "النرويج Norway"},
{"name": "مطار سان فيسنتي دل كاجوان San Vicente del Caguan Airport", "city": "سان فيسنتي del كاجوان San Vicente del Caguán", "country": "كولومبيا Colombia"},
{"name": "مطار هيل Helle Airport", "city": "سفولفار Svolvar", "country": "النرويج Norway"},
{"name": "مطار سافونلينا Savonlinna Airport", "city": "سافونلينا Savonlinna", "country": "فنلندا Finland"},
{"name": "مطار شيريميتيفو Sheremtyevo Airport", "city": "زيلينغراد Zelenograd", "country": "روسيا Russia"},
{"name": "مطار إشبيلية Sevilla Airport", "city": "إشبيلية Seville", "country": "إسبانيا Spain"},
{"name": "مطار ستيفنز فيلج Stevens Village", "city": "ستيفنز فيلج Stevens Village", "country": "الولايات المتحدة United States"},
{"name": "مطار سافوسافو Savusavu Airport", "city": "لاباسا Labasa", "country": "فيجي Fiji"},
{"name": "مطار كولتسوفو Koltsovo Airport", "city": "يكاتيرينبورغ Yekaterinburg", "country": "روسيا Russia"},
{"name": "مطار سان أنطونيو ديل تاتشيرا San Antonio del Tachira Airport", "city": "تاربا Táriba", "country": "فنزويلا Venezuela"},
{"name": "مطار شانتو شوا Northeastern Shantou Airport", "city": "تشينغهاي Chenghai", "country": "الصين China"},
{"name": "مطار ستيوارت الدولي Stewart International Airport", "city": "نيو ويندسور New Windsor", "country": "الولايات المتحدة United States"},
{"name": "مطار ساوث ويست باي South West Bay Airport", "city": "ساوث ويست باي South West Bay", "country": "فانواتو Vanuatu"},
{"name": "مطار سيغرياتي Segrate Airport", "city": "تريزان سولا Naviglio Trezzano", "country": "إيطاليا Italy"},
{"name": "مطار ستيل ووتر Stillwater Municipal Airport", "city": "ستيل ووتر Stillwater", "country": "الولايات المتحدة United States"},
{
  "name": "Entzheim Airport مطار إنتزهايم",
  "city": "Entzheim إنتزهايم",
  "country": "France فرنسا"
},
{
  "name": "Berlin-Schonefeld International Airport مطار برلين شونفيلد الدولي",
  "city": "Schönefeld شونفيلد",
  "country": "Germany ألمانيا"
},
{
  "name": "Sligo Airport مطار سليغو",
  "city": "Larass لاراس",
  "country": "Ireland إيرلندا"
},
{
  "name": "Prinses Juliana International Airport مطار برينسيس جوليانا الدولي",
  "city": "St Maarten سانت مارتن",
  "country": "Netherlands Antilles أنتيغوا"
},
{
  "name": "Sheldon SPB مطار شيلدون",
  "city": "Sheldon Point شيلدون بوينت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Srinagar Airport مطار سريناغار",
  "city": "Srinagar سريناغار",
  "country": "India الهند"
},
{
  "name": "Seal Bay Airport مطار خليج السيال",
  "city": "Kodiak كودياك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Kingsford Smith Airport مطار كينغسفورد سميث",
  "city": "Sydney سيدني",
  "country": "Australia أستراليا"
},
{
  "name": "Sirjan Airport مطار سيرجان",
  "city": "Sirjan سيرجان",
  "country": "Iran إيران"
},
{
  "name": "Simao Airport مطار سيمان",
  "city": "Simao سيمان",
  "country": "China الصين"
},
{
  "name": "Shonai Airport مطار شوناي",
  "city": "Shonai شوناي",
  "country": "Japan اليابان"
},
{
  "name": "Hancock International Airport مطار هانكوك الدولي",
  "city": "Syracuse سيراكيوز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Australia Airport مطار أستراليا",
  "city": "Sue Island جزيرة سو",
  "country": "Australia أستراليا"
},
{
  "name": "Sanya Airport مطار سانيا",
  "city": "Sanya سانيا",
  "country": "China الصين"
},
{
  "name": "Stornoway Airport مطار ستورنووي",
  "city": "Isle of Lewis جزيرة لويس",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Shiraz International Airport مطار شيراز الدولي",
  "city": "Shiraz شيراز",
  "country": "Iran إيران"
},
{
  "name": "Soyo Airport مطار سوي",
  "city": "Santo Antônio do Zaire سانتو أنطونيو دو زايير",
  "country": "Angola أنغولا"
},
{
  "name": "Sultan Abdul Aziz Shah Airport مطار السلطان عبد العزيز شاه",
  "city": "Kampong Baru Subang كامبونغ بارو سوبانغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Sheffield City Airport مطار مدينة شيفيلد",
  "city": "Sheffield شيفيلد",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Çarşamba Airport مطار تشارسامبا",
  "city": "Samsun سامسون",
  "country": "Turkey تركيا"
},
{
  "name": "Salzburg Airport مطار سالزبورغ",
  "city": "Salzburg سالزبورغ",
  "country": "Austria النمسا"
},
{
  "name": "Suzhou Airport مطار سوتشو",
  "city": "Suzhou سوتشو",
  "country": "China الصين"
},
{
  "name": "Shenzhen Airport مطار شنتشن",
  "city": "Shenzhen شنتشن",
  "country": "China الصين"
},
{
  "name": "Golenow Airport مطار غولنيو",
  "city": "Goleniów غولينو",
  "country": "Poland بولندا"
},
{
  "name": "Crown Point Airport مطار كراون بوينت",
  "city": "Plymouth بليموث",
  "country": "Trinidad and Tobago ترينيداد وتوباغو"
},
{"name": "Daniel Z Romualdez Airport مطار دانييل ز رومولديز", "city": "Tacloban City تاكلوبان", "country": "Philippines الفلبين"},
{"name": "Daegu International Airport مطار داegu الدولي", "city": "Daegu داegu", "country": "South Korea كوريا الجنوبية"},
{"name": "Tagbilaran Airport مطار تاجبيلاران", "city": "Tagbilaran City تاجبيلاران", "country": "Philippines الفلبين"},
{"name": "Tanna Airport مطار تانا", "city": "Isangel إيسنغيل", "country": "Vanuatu فانواتو"},
{"name": "Taiz Ganed Airport مطار تعز قانيد", "city": "Al-Ganad الجناد", "country": "Yemen اليمن"},
{"name": "Japan مطار اليابان", "city": "Takamatsu تاكاماتسو", "country": "Japan اليابان"},
{"name": "Ralph Calhoun مطار رالف كالهون", "city": "Tanana تانا", "country": "United States الولايات المتحدة"},
{"name": "Gen Francisco J Mina International Airport مطار جين فرانسيسكو ج ميناء الدولي", "city": "Tampico تامبيكو", "country": "Mexico المكسيك"},
{"name": "Liuting Airport مطار ليوتينغ", "city": "Wanggezhuang وانغغيزوانغ", "country": "China الصين"},
{"name": "Tapachula International Airport مطار تاباشولا الدولي", "city": "Tapachula تاباشولا", "country": "Mexico المكسيك"},
{"name": "Tashkent South Airport مطار طشقند الجنوبي", "city": "Tashkent طشقند", "country": "Uzbekistan أوزبكستان"},
{"name": "Poprad Tatry Airport مطار بوبراد تاتري", "city": "Poprad بوبراد", "country": "Slovakia سلوفاكيا"},
{"name": "Tuy Hoa Airport مطار توي هوى", "city": "Tuy Hoa توي هوى", "country": "Vietnam فيتنام"},
{"name": "Western مطار ويسترن", "city": "Tabubil تابوبيل", "country": "Papua New Guinea بابوا غينيا الجديدة"},
{"name": "Romblon Airport مطار رومبلون", "city": "Alcantara ألكانترا", "country": "Philippines الفلبين"},
{"name": "The Bight Airport مطار ذا بايت", "city": "New Bight نيو بايت", "country": "Bahamas الباهاما"},
{"name": "Tabarka Airport مطار تاباركا", "city": "Jundobah جندوبة", "country": "Tunisia تونس"},
{"name": "Waynesville Regional Airport At Forney Field مطار واينسفيل الإقليمي في فورني فيلد", "city": "Fort Leonard Wood فورت ليونارد وود", "country": "United States الولايات المتحدة"},
{"name": "Tabora Airport مطار تابورا", "city": "Tabora تابورا", "country": "Tanzania تنزانيا"},
{"name": "Pedro Canga Airport مطار بيدرو كانغا", "city": "Tumbes تومباس", "country": "Peru بيرو"},
{"name": "Tbilisi-Noyo Alekseyevka Airport مطار تبليسي-نوي أليكسيفكا", "city": "Tbilisi تبليسي", "country": "Georgia جورجيا"},
{"name": "Fua'amotu International Airport مطار فوااموتو الدولي", "city": "Nuku'alofa نوكوالوفا", "country": "Tonga تونغا"},
{"name": "Tambov Airport مطار تامبوف", "city": "Tambov تامبوف", "country": "Russia روسيا"},
{"name": "Tabriz Airport مطار تبريز", "city": "Tabriz تبريز", "country": "Iran إيران"},
{"name": "Treasure Cay Airport مطار تريشر كاي", "city": "Green Turtle Cay غرين تيرتل كاي", "country": "Bahamas الباهاما"},
{"name": "Cataloi Airport مطار كاتالوي", "city": "Tulcea تولتشا", "country": "Romania رومانيا"},
{"name": "Tchibanga Airport مطار تشيباڭا", "city": "Tchibanga تشيباڭا", "country": "Gabon غابون"},
{"name": "La Florida Airport مطار لا فلوريدا", "city": "Tumaco تومكو", "country": "Colombia كولومبيا"},
{"name": "Taba مطار طابا", "city": "Taba طابا", "country": "Egypt مصر"},
{"name": "Cor Fap Carlos C Santa Rosa Airport مطار كور فاب كارلوس سانتا روزا", "city": "Tacna تاكنا", "country": "Peru بيرو"},
{"name": "Tuticorin Airport مطار توتيكورين", "city": "Tuticorin توتيكورين", "country": "India الهند"},
{
  "name": "Mueang Trat مطار موانغ ترات",
  "city": "Trat ترات",
  "country": "Thailand تايلاند"
},
{
  "name": "Teterboro Airport مطار تيتيربورو",
  "city": "Teterboro تيتيربورو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tebessa Airport مطار تبسة",
  "city": "Tebessa تبسة",
  "country": "Algeria الجزائر"
},
{
  "name": "Tatitlek Seaplane Base قاعدة طائرات سيتبلات تاتيليك",
  "city": "Valdez فالديز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tongren مطار تونغرين",
  "city": "Tongren تونغرين",
  "country": "China الصين"
},
{
  "name": "Lajes Airport مطار لاجيس",
  "city": "Praia da Vitória برايا دا فيتوريا",
  "country": "Portugal البرتغال"
},
{
  "name": "Tete Chingozi Airport مطار تيت شينغوزي",
  "city": "Tete تيت",
  "country": "Mozambique موزمبيق"
},
{
  "name": "Telluride Regional Airport مطار تيلوريد الإقليمي",
  "city": "Telluride تيلوريد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tufi مطار توفي",
  "city": "Tufi توفي",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Norte-Los Rodeos Airport مطار نورتي-لوس روديوس",
  "city": "Tegueste تيغويست",
  "country": "Spain إسبانيا"
},
{
  "name": "Sur-Reina Sofia Airport مطار سور-ريينا صوفيا",
  "city": "Granadilla غرانديا",
  "country": "Spain إسبانيا"
},
{
  "name": "Gibson County Airport مطار غيبسون كاونتي",
  "city": "Milan ميلان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Titograd Airport مطار تيتوغراد",
  "city": "Podgorica بودغوريتسا",
  "country": "Montenegro الجبل الأسود"
},
{
  "name": "Sultan Mahmud Airport مطار السلطان محمود",
  "city": "Kuala Terengganu كوالا ترنجانو",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Tongoa Airport مطار تونغوا",
  "city": "Tongoa تونغوا",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Loyaute مطار لويتي",
  "city": "Tiga تيغا",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "Vidrasau Airport مطار فيدرساو",
  "city": "Vidrasau فيدرساو",
  "country": "Romania رومانيا"
},
{
  "name": "Tongliao مطار تونغلياو",
  "city": "Tongliao تونغلياو",
  "country": "China الصين"
},
{
  "name": "Touggourt Airport مطار توغورت",
  "city": "Ouargla ورقلة",
  "country": "Algeria الجزائر"
},
{
  "name": "Toncontin International Airport مطار تونكونتين الدولي",
  "city": "Tegucigalpa تيغوسيغالبا",
  "country": "Honduras هندوراس"
},
{
  "name": "Tuxtla Gutierrez Airport مطار توكستلا غوتيريز",
  "city": "San Fernando سان فرناندو",
  "country": "Mexico المكسيك"
},
{
  "name": "Senador Petronio Portella Airport مطار سينادور بيترونيو بورتلا",
  "city": "Teresina تيريسينا",
  "country": "Brazil البرازيل"
},
{
  "name": "Tempelhof Central Airport مطار تيمبلهوف المركزي",
  "city": "Berlin برلين",
  "country": "Germany ألمانيا"
},
{
  "name": "Tachilek Airport مطار تاتشيلك",
  "city": "Tachilek تاتشيلك",
  "country": "Myanmar ميانمار"
},
    {
      "code": "THN",
      "lat": "58.3161",
      "lon": "12.3507",
      "name": "Trollhattan Vanersborg Airport",
      "city": "Trollhatan",
      "state": "Vastra Gotaland",
      "country": "Sweden",
      "woeid": "12517685",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.fyrstadsflyget.se\/",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "THO",
      "lat": "66.2",
      "lon": "-15.3333",
      "name": "Thorshofn Airport",
      "city": "Thorshofn",
      "state": "Nordur-Tingeyjarsysla",
      "country": "Iceland",
      "woeid": "12523905",
      "tz": "Atlantic\/Reykjavik",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "THR",
      "lat": "35.6908",
      "lon": "51.3144",
      "name": "Mehrabad International Airport",
      "city": "Tehran",
      "state": "Tehran",
      "country": "Iran",
      "woeid": "12513746",
      "tz": "Asia\/Tehran",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "OIII",
      "direct_flights": "55",
      "carriers": "11"
    },
    {
      "code": "THS",
      "lat": "17.2167",
      "lon": "99.8167",
      "name": "Sukhothai Airport",
      "city": "Sawankhalok",
      "state": "Sukhothai",
      "country": "Thailand",
      "woeid": "12523370",
      "tz": "Asia\/Bangkok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "THU",
      "lat": "76.53",
      "lon": "-68.7058",
      "name": "Pituffik",
      "city": "Pituffik",
      "state": "Nordgronland",
      "country": "Greenland",
      "woeid": "12513033",
      "tz": "America\/Thule",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "BGTL",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TIA",
      "lat": "41.4247",
      "lon": "19.7147",
      "name": "Tirane Rinas Airport",
      "city": "Krna",
      "state": "Durr\u00ebs",
      "country": "Albania",
      "woeid": "12510418",
      "tz": "Europe\/Tirane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "www.tirana-airport.com",
      "runway_length": null,
      "elev": null,
      "icao": "LATI",
      "direct_flights": "33",
      "carriers": "17"
    },
    {
      "code": "TIF",
      "lat": "21.4831",
      "lon": "40.5439",
      "name": "Taif Airport",
      "city": "",
      "state": "Makka",
      "country": "Saudi Arabia",
      "woeid": "12517372",
      "tz": "Asia\/Riyadh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTIF",
      "direct_flights": "8",
      "carriers": "1"
    },
    {
      "code": "TIH",
      "lat": "-17.6902",
      "lon": "-149.376",
      "name": "French Polynesia",
      "city": "Tikehau Atoll",
      "state": "",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TIJ",
      "lat": "32.5411",
      "lon": "-116.972",
      "name": "General Abelardo L Rodriguez International Airpo",
      "city": "Tijuana",
      "state": "Baja California",
      "country": "Mexico",
      "woeid": "12514874",
      "tz": "America\/Tijuana",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9711",
      "elev": "489",
      "icao": "MMTJ",
      "direct_flights": "25",
      "carriers": "12"
    },
    {
      "code": "TIM",
      "lat": "-4.5347",
      "lon": "136.888",
      "name": "Tembagapura Airport",
      "city": "Nabire",
      "state": "Irian Jaya",
      "country": "Indonesia",
      "woeid": "12513519",
      "tz": "Asia\/Jayapura",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "TIN",
      "lat": "39.5354",
      "lon": "-93.4399",
      "name": "",
      "city": "Tindouf",
      "state": "Tindouf",
      "country": "Algeria",
      "woeid": "1257822",
      "tz": "Africa\/Algiers",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TIP",
      "lat": "31",
      "lon": "15",
      "name": "International",
      "city": "Tripoli",
      "state": "Sawfajjin",
      "country": "Libyan Arab Jamahiriya",
      "woeid": "1352663",
      "tz": "Africa\/Tripoli",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "HLLT",
      "direct_flights": "53",
      "carriers": "27"
    },
    {
      "code": "TIQ",
      "lat": "45.0039",
      "lon": "12.2686",
      "name": "Tinian",
      "city": "Tinian",
      "state": "Veneto",
      "country": "Northern Mariana Islands",
      "woeid": "12846096",
      "tz": "Europe\/Rome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TIR",
      "lat": "13.6319",
      "lon": "79.5444",
      "name": "Tirupathi Airport",
      "city": "Renigunta",
      "state": "Andhra Pradesh",
      "country": "India",
      "woeid": "12513685",
      "tz": "Asia\/Kolkata",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.airportsindia.org",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "4"
    },
    {
      "code": "TIS",
      "lat": "-10.586",
      "lon": "142.293",
      "name": "Thursday Island Airport",
      "city": "Kubin Village",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510795",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TIU",
      "lat": "-44.3015",
      "lon": "171.223",
      "name": "Richard Pearse Airport",
      "city": "Timaru",
      "state": "Canterbury",
      "country": "New Zealand",
      "woeid": "12515170",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "NZTU",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TIV",
      "lat": "42.4047",
      "lon": "18.7233",
      "name": "Tivat Airport",
      "city": "Teodo",
      "state": "Tivat",
      "country": "Montenegro",
      "woeid": "12517593",
      "tz": "Europe\/Belgrade",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.aptivat.com\/",
      "runway_length": "8208",
      "elev": "20",
      "icao": "LYTV",
      "direct_flights": "8",
      "carriers": "5"
    },
    {
      "code": "TIZ",
      "lat": "-5.83333",
      "lon": "142.95",
      "name": "Tari Airport",
      "city": "Mendi",
      "state": "Southern Highlands",
      "country": "Papua New Guinea",
      "woeid": "12523242",
      "tz": "Pacific\/Port_Moresby",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TJA",
      "lat": "-21.5503",
      "lon": "-64.7044",
      "name": "Capitan Oriel Lea Plaza Airport",
      "city": "Tarija",
      "state": "Tarija",
      "country": "Bolivia",
      "woeid": "12510904",
      "tz": "America\/La_Paz",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "SLTJ",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TJM",
      "lat": "57.1704",
      "lon": "65.3561",
      "name": "Tyumen Northwest Airport",
      "city": "Tyumen'",
      "state": "Tyumenskaya Oblast",
      "country": "Russia",
      "woeid": "12517062",
      "tz": "Asia\/Yekaterinburg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "29",
      "carriers": "10"
    },
    {
      "code": "TJN",
      "lat": "-17.6902",
      "lon": "-149.376",
      "name": "French Polynesia",
      "city": "Takume",
      "state": "",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TJQ",
      "lat": "-2.7494",
      "lon": "107.763",
      "name": "Bulutumbang Airport",
      "city": "Tanjungpandan",
      "state": "Bangka-Belitung",
      "country": "Indonesia",
      "woeid": "12513459",
      "tz": "Asia\/Jakarta",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TKE",
      "lat": "57.7773",
      "lon": "-135.208",
      "name": "Tenakee Springs",
      "city": "Tenakee Springs",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2504726",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Sea Plane Base",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TKG",
      "lat": "-5.2403",
      "lon": "105.178",
      "name": "Branti Airport",
      "city": "Tanjungkarang",
      "state": "Lampung",
      "country": "Indonesia",
      "woeid": "12513457",
      "tz": "Asia\/Jakarta",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4986",
      "elev": "282",
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "TKJ",
      "lat": "48.1205",
      "lon": "21.4125",
      "name": "",
      "city": "Tok",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2506862",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "PATJ",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TKK",
      "lat": "7.4569",
      "lon": "151.84",
      "name": "Truk International Airport",
      "city": "Weno",
      "state": "Chuuk",
      "country": "Federated States of Micronesia",
      "woeid": "12512817",
      "tz": "Pacific\/Efate",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TKN",
      "lat": "27.834",
      "lon": "128.882",
      "name": "Tokunoshima Airport",
      "city": "Amagi-cho",
      "state": "Kagoshima Prefecture",
      "country": "Japan",
      "woeid": "12514026",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TKP",
      "lat": "-17.6902",
      "lon": "-149.376",
      "name": "French Polynesia",
      "city": "Takapoto",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TKQ",
      "lat": "-4.88005",
      "lon": "29.628",
      "name": "Tanzania",
      "city": "Kigoma",
      "state": "Kigoma",
      "country": "Tanzania",
      "woeid": "23424973",
      "tz": "Africa\/Dar_es_Salaam",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5797",
      "elev": "2700",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TKS",
      "lat": "34.1339",
      "lon": "134.603",
      "name": "Tokushima Airport",
      "city": "Matsushige-cho",
      "state": "Tokushima Prefecture",
      "country": "Japan",
      "woeid": "12514027",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6560",
      "elev": "26",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "TKU",
      "lat": "60.5138",
      "lon": "22.272",
      "name": "Turku Airport",
      "city": "Turku",
      "state": "Western Finland",
      "country": "Finland",
      "woeid": "12523801",
      "tz": "Europe\/Helsinki",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "161",
      "icao": "EFTU",
      "direct_flights": "4",
      "carriers": "10"
    },
    {
      "code": "TKV",
      "lat": "-17.3371",
      "lon": "-138.408",
      "name": "French Polynesia",
      "city": "Tatakoto",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTKV",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TKX",
      "lat": "-14.4667",
      "lon": "-1.96667",
      "name": "Takaroa",
      "city": "Takaroa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "28743703",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTKX",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TLA",
      "lat": "65.2413",
      "lon": "-166.331",
      "name": "Teller",
      "city": "Teller",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2504609",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "PATE",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "TLC",
      "lat": "19.3356",
      "lon": "-99.565",
      "name": "Jose Maria Morelos Y Pavon Airport",
      "city": "Toluca de Lerdo",
      "state": "Mexico",
      "country": "Mexico",
      "woeid": "12514900",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "13780",
      "elev": "8448",
      "icao": "MMTO",
      "direct_flights": "26",
      "carriers": "6"
    },
    {
      "code": "TLE",
      "lat": "-23.3864",
      "lon": "43.7264",
      "name": "Toliara Airport",
      "city": "Toliara",
      "state": "Toliara",
      "country": "Madagascar",
      "woeid": "12514710",
      "tz": "Indian\/Antananarivo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "TLH",
      "lat": "30.3964",
      "lon": "-84.3503",
      "name": "Tallahassee Regional Airport",
      "city": "Tallahassee",
      "state": "Florida",
      "country": "United States",
      "woeid": "12522075",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.talgov.com\/citytlh\/aviation\/",
      "runway_length": "8000",
      "elev": "81",
      "icao": "KTLH",
      "direct_flights": "10",
      "carriers": "10"
    },
    {
      "code": "TLJ",
      "lat": "44.2044",
      "lon": "23.5396",
      "name": "",
      "city": "Tatalina",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2347560",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Military Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "PATL",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TLL",
      "lat": "59.4121",
      "lon": "24.8297",
      "name": "Ulemiste Airport",
      "city": "Tallinn",
      "state": "Harjumaa",
      "country": "Estonia",
      "woeid": "12512744",
      "tz": "Europe\/Tallinn",
      "phone": "+372 605 8701",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.tallinn-airport.ee\/",
      "runway_length": "3070",
      "elev": "131",
      "icao": "EETN",
      "direct_flights": "31",
      "carriers": "25"
    },
    {
      "code": "TLM",
      "lat": "35.0139",
      "lon": "-1.4572",
      "name": "Zenata Airport",
      "city": "Tlemcen",
      "state": "Tlemcen",
      "country": "Algeria",
      "woeid": "12510357",
      "tz": "Africa\/Algiers",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "TLN",
      "lat": "43.093",
      "lon": "6.15712",
      "name": "Le Palyvestre Airport",
      "city": "Hyeres",
      "state": "Provence-alpes-cote d'Azur",
      "country": "France",
      "woeid": "12512920",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6955",
      "elev": "7",
      "icao": "",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "TLS",
      "lat": "43.6294",
      "lon": "1.3747",
      "name": "Blagnac Airport",
      "city": "Blagnac",
      "state": "Midi-Pyrenees",
      "country": "France",
      "woeid": "12512856",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "LFBO",
      "direct_flights": "47",
      "carriers": "43"
    },
    {
      "code": "TLT",
      "lat": "61.0959",
      "lon": "-160.968",
      "name": "Tuluksak",
      "city": "Tuluksak",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2508578",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "TLV",
      "lat": "32.0117",
      "lon": "34.8861",
      "name": "Ben Gurion Airport",
      "city": "Petah\u0331 Tiqwa",
      "state": "HaMerkaz",
      "country": "Israel",
      "woeid": "12513775",
      "tz": "Asia\/Jerusalem",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.iaa.gov.il\/Rashat\/en-US\/Airports\/BenGurion",
      "runway_length": "11998",
      "elev": "135",
      "icao": "LLBG",
      "direct_flights": "87",
      "carriers": "56"
    },
    {
      "code": "TMC",
      "lat": "-9.4117",
      "lon": "119.25",
      "name": "Tambolaka Airport",
      "city": "Tambolaka",
      "state": "Nusa Tengarra Timur",
      "country": "Indonesia",
      "woeid": "12513516",
      "tz": "Asia\/Jakarta",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "TME",
      "lat": "6.4536",
      "lon": "-71.7614",
      "name": "Tame Airport",
      "city": "Tame",
      "state": "Arauca",
      "country": "Colombia",
      "woeid": "12512419",
      "tz": "America\/Bogota",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TMJ",
      "lat": "37.2808",
      "lon": "67.3064",
      "name": "Termez Airport",
      "city": "Termiz",
      "state": "Surkhondaryo",
      "country": "Uzbekistan",
      "woeid": "12522727",
      "tz": "Asia\/Samarkand",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "TML",
      "lat": "9.5636",
      "lon": "-0.8625",
      "name": "Tamale Airport",
      "city": "Savelugu",
      "state": "Northern",
      "country": "Ghana",
      "woeid": "12513026",
      "tz": "Africa\/Accra",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TMM",
      "lat": "-18.1064",
      "lon": "49.3919",
      "name": "Toamasina Airport",
      "city": "Toamasina",
      "state": "Toamasina",
      "country": "Madagascar",
      "woeid": "12514708",
      "tz": "Indian\/Antananarivo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "2"
    },
    {
      "code": "TMP",
      "lat": "61.4166",
      "lon": "23.615",
      "name": "Tampere Pirkkala Airport",
      "city": "Pitk\u00e4niemi",
      "state": "Western Finland",
      "country": "Finland",
      "woeid": "12512800",
      "tz": "Europe\/Helsinki",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2700",
      "elev": "120",
      "icao": "EFTP",
      "direct_flights": "9",
      "carriers": "8"
    },
    {
      "code": "TMR",
      "lat": "22.8147",
      "lon": "5.4592",
      "name": "Tamanrasset Airport",
      "city": "Tamanrasset",
      "state": "Tamanghasset",
      "country": "Algeria",
      "woeid": "12510350",
      "tz": "Africa\/Algiers",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "TMS",
      "lat": "0.3783",
      "lon": "6.725",
      "name": "Sao Tome Salazar Airport",
      "city": "Sao Tome",
      "state": "Sao Tome",
      "country": "Sao Tome and Principe",
      "woeid": "12517853",
      "tz": "Africa\/Sao_Tome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7284",
      "elev": "33",
      "icao": "",
      "direct_flights": "5",
      "carriers": "5"
    },
    {
      "code": "TMT",
      "lat": "-1.48667",
      "lon": "-56.3961",
      "name": "Trombetas",
      "city": "Trombetas",
      "state": "Para",
      "country": "Brazil",
      "woeid": "12511352",
      "tz": "America\/Manaus",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "TMU",
      "lat": "9.73167",
      "lon": "-85.0251",
      "name": "Tambor Airport",
      "city": "Lepanto",
      "state": "Puntarenas",
      "country": "Costa Rica",
      "woeid": "12524321",
      "tz": "America\/Costa_Rica",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "TMW",
      "lat": "-31.0839",
      "lon": "150.849",
      "name": "Tamworth Airport",
      "city": "Barry",
      "state": "New South Wales",
      "country": "Australia",
      "woeid": "12510789",
      "tz": "Australia\/Sydney",
      "phone": "(02) 6760 7611",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.tamworth.nsw.gov.au\/asp\/index.asp?pgid=9279&cid=24735",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "TMX",
      "lat": "27.8676",
      "lon": "-0.28984",
      "name": "Adrar",
      "city": "Timimoun",
      "state": "Adrar",
      "country": "Algeria",
      "woeid": "1252933",
      "tz": "Africa\/Algiers",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "TNA",
      "lat": "36.3306",
      "lon": "118.761",
      "name": "Shandong",
      "city": "Jinan",
      "state": "Shandong",
      "country": "China",
      "woeid": "12578014",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "32",
      "carriers": "14"
    },
    {
      "code": "TNC",
      "lat": "65.5639",
      "lon": "-167.919",
      "name": "Tin City AFS",
      "city": "Tin City",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2506552",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Military Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "PATC",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TNG",
      "lat": "35.7283",
      "lon": "-5.9175",
      "name": "Boukhalf Airport",
      "city": "Tangiers",
      "state": "Tanger",
      "country": "Morocco",
      "woeid": "12514783",
      "tz": "Africa\/Casablanca",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "GMTT",
      "direct_flights": "13",
      "carriers": "8"
    },
    {
      "code": "TNJ",
      "lat": "0.9192",
      "lon": "104.536",
      "name": "Kijang Airport",
      "city": "Tanjungpinang",
      "state": "Riau",
      "country": "Indonesia",
      "woeid": "12513478",
      "tz": "Asia\/Jakarta",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TNK",
      "lat": "60.5813",
      "lon": "-165.253",
      "name": "Tununak Airport",
      "city": "Tununak",
      "state": "Alaska",
      "country": "United States",
      "woeid": "29388569",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "4"
    },
    {
      "code": "TNN",
      "lat": "22.9634",
      "lon": "120.216",
      "name": "Tainan Airport",
      "city": "Tainan City",
      "state": "Taiwan Province",
      "country": "Taiwan",
      "woeid": "12517957",
      "tz": "Asia\/Taipei",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "RCNN",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TNO",
      "lat": "10.9333",
      "lon": "-85.4667",
      "name": "Tamarindo Airport",
      "city": "Liberia",
      "state": "Guanacaste",
      "country": "Costa Rica",
      "woeid": "12523332",
      "tz": "America\/Costa_Rica",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "TNR",
      "lat": "-18.7953",
      "lon": "47.4861",
      "name": "Antananarivo Ivato Airport",
      "city": "Ambohidratrimo",
      "state": "Antananarivo",
      "country": "Madagascar",
      "woeid": "12514691",
      "tz": "Indian\/Antananarivo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10171",
      "elev": "4196",
      "icao": "FMMI",
      "direct_flights": "26",
      "carriers": "11"
    },
    {
      "code": "TNZ",
      "lat": "50.2394",
      "lon": "99.8604",
      "name": "Hovsgol",
      "city": "Tosontsengel",
      "state": "Hovsgol",
      "country": "Mongolia",
      "woeid": "2346167",
      "tz": "Asia\/Ulaanbaatar",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "0",
      "carriers": "0"
    },
    {
      "code": "TOD",
      "lat": "2.8",
      "lon": "104.167",
      "name": "Tioman Airport",
      "city": "Kampung Genting",
      "state": "Pahang",
      "country": "Malaysia",
      "woeid": "12523243",
      "tz": "Asia\/Kuala_Lumpur",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3255",
      "elev": "15",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TOE",
      "lat": "33.9308",
      "lon": "8.1042",
      "name": "Nefta Airport",
      "city": "Tawzar",
      "state": "Tawzar",
      "country": "Tunisia",
      "woeid": "12517861",
      "tz": "Africa\/Tunis",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "4"
    },
    {
      "code": "TOF",
      "lat": "56.3833",
      "lon": "85.2",
      "name": "",
      "city": "Tomsk",
      "state": "Tomskaya Oblast",
      "country": "Russia",
      "woeid": "2123927",
      "tz": "Asia\/Krasnoyarsk",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "182",
      "icao": "",
      "direct_flights": "5",
      "carriers": "6"
    },
    {
      "code": "TOG",
      "lat": "37.1198",
      "lon": "-89.8786",
      "name": "Togiak Village",
      "city": "Togiak Village",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2512308",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "PATG",
      "direct_flights": "3",
      "carriers": "4"
    },
    {
      "code": "TOH",
      "lat": "-15.1468",
      "lon": "167.038",
      "name": "Vanuatu",
      "city": "Torres",
      "state": "",
      "country": "Vanuatu",
      "woeid": "23424907",
      "tz": "Pacific\/Efate",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TOL",
      "lat": "41.5923",
      "lon": "-83.8072",
      "name": "Toledo Express Airport",
      "city": "Swanton",
      "state": "Ohio",
      "country": "United States",
      "woeid": "12522152",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTOL",
      "direct_flights": "56",
      "carriers": "17"
    },
    {
      "code": "TOM",
      "lat": "16.7314",
      "lon": "-3.0053",
      "name": "Tombouctou Airport",
      "city": "",
      "state": "Tombouctou",
      "country": "Mali",
      "woeid": "12514779",
      "tz": "Africa\/Bamako",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TOS",
      "lat": "69.6787",
      "lon": "18.9096",
      "name": "Tromso Langnes Airport",
      "city": "Tromso",
      "state": "Troms Fylke",
      "country": "Norway",
      "woeid": "12515127",
      "tz": "Europe\/Oslo",
      "phone": "+ 47 77 64 84 00",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.avinor.no\/English\/Airports\/Tromso_Airport\/",
      "runway_length": "2392",
      "elev": "31",
      "icao": "ENTC",
      "direct_flights": "20",
      "carriers": "4"
    },
    {
      "code": "TOU",
      "lat": "41.1258",
      "lon": "-96.832",
      "name": "",
      "city": "Touho",
      "state": "Nord",
      "country": "New Caledonia",
      "woeid": "24551429",
      "tz": "Pacific\/Noumea",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TOY",
      "lat": "36.6495",
      "lon": "137.187",
      "name": "Toyama Airport",
      "city": "Toyama-shi",
      "state": "Toyama Prefecture",
      "country": "Japan",
      "woeid": "2345891",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "5"
    },
    {
      "code": "TPA",
      "lat": "27.9744",
      "lon": "-82.5356",
      "name": "Tampa International Airport",
      "city": "Tampa",
      "state": "Florida",
      "country": "United States",
      "woeid": "12522077",
      "tz": "America\/New_York",
      "phone": "1(813)870-8770",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.tampaairport.com\/",
      "runway_length": "11002",
      "elev": "26",
      "icao": "KTPA",
      "direct_flights": "74",
      "carriers": "48"
    },
    {
      "code": "TPE",
      "lat": "25.081",
      "lon": "121.237",
      "name": "Taiwan Taoyuan International Airport",
      "city": "Taoyuan City",
      "state": "Taiwan Province",
      "country": "Taiwan",
      "woeid": "2306254",
      "tz": "Asia\/Taipei",
      "phone": "+886 (03) 398-2036",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.cksairport.gov.tw\/",
      "runway_length": "3660",
      "elev": "33",
      "icao": "RCTP",
      "direct_flights": "52",
      "carriers": "43"
    },
    {
      "code": "TPJ",
      "lat": "27.2999",
      "lon": "87.7011",
      "name": "Taplejung Suketar",
      "city": "Taplejung",
      "state": "Central",
      "country": "Nepal",
      "woeid": "2268915",
      "tz": "Asia\/Katmandu",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TPP",
      "lat": "-6.5058",
      "lon": "-76.3714",
      "name": "Tarapoto Airport",
      "city": "Tarapoto",
      "state": "San Martin",
      "country": "Peru",
      "woeid": "12515220",
      "tz": "America\/Lima",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "TPQ",
      "lat": "21.4758",
      "lon": "-104.881",
      "name": "Tepic Airport",
      "city": "Tepic",
      "state": "Nayarit",
      "country": "Mexico",
      "woeid": "12514975",
      "tz": "America\/Mazatlan",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "MMEP",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "TPS",
      "lat": "37.9021",
      "lon": "12.4994",
      "name": "Trapani Birgi Airport",
      "city": "Trapani",
      "state": "Sicily",
      "country": "Italy",
      "woeid": "12513863",
      "tz": "Europe\/Rome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "LICT",
      "direct_flights": "11",
      "carriers": "2"
    },
    {
      "code": "TQR",
      "lat": "43.2667",
      "lon": "10.9333",
      "name": "",
      "city": "San Domino Island",
      "state": "Trentino-Alto Adige",
      "country": "Italy",
      "woeid": "20142146",
      "tz": "Europe\/Rome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TRC",
      "lat": "25.5683",
      "lon": "-103.411",
      "name": "Torreon International Airport",
      "city": "Torre\u00f3n",
      "state": "Coahuila de Zaragoza",
      "country": "Mexico",
      "woeid": "12514978",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9022",
      "elev": "3688",
      "icao": "MMTC",
      "direct_flights": "11",
      "carriers": "10"
    },
    {
      "code": "TRD",
      "lat": "63.4578",
      "lon": "10.9229",
      "name": "Trondheim Vaernes Airport",
      "city": "Stjordal",
      "state": "Nord-Trondelag",
      "country": "Norway",
      "woeid": "12515128",
      "tz": "Europe\/Oslo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.avinor.no\/Norsk\/Lufthavner\/Trondheim_lufthavn,_Varnes",
      "runway_length": "2900",
      "elev": null,
      "icao": "ENVA",
      "direct_flights": "26",
      "carriers": "11"
    },
    {
      "code": "TRE",
      "lat": "56.4998",
      "lon": "-6.87066",
      "name": "Tiree Aerodrome",
      "city": "Crossapol",
      "state": "Scotland",
      "country": "United Kingdom",
      "woeid": "22486802",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "TRF",
      "lat": "59.182",
      "lon": "10.2509",
      "name": "Torp Airport",
      "city": "Sandefjord",
      "state": "Vestfold Fylke",
      "country": "Norway",
      "woeid": "12515126",
      "tz": "Europe\/Oslo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9809",
      "elev": "285",
      "icao": "ENTO",
      "direct_flights": "23",
      "carriers": "11"
    },
    {
      "code": "TRG",
      "lat": "-37.6738",
      "lon": "176.19",
      "name": "Tauranga Airport",
      "city": "Tauranga",
      "state": "Bay Of Plenty",
      "country": "New Zealand",
      "woeid": "12515169",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "NZTG",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "TRI",
      "lat": "36.4805",
      "lon": "-82.4087",
      "name": "Tri-Cities Regional Airport",
      "city": "Blountville",
      "state": "Tennessee",
      "country": "United States",
      "woeid": "12522192",
      "tz": "America\/New_York",
      "phone": "423-325-6000",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.triflight.com\/",
      "runway_length": null,
      "elev": null,
      "icao": "KTRI",
      "direct_flights": "9",
      "carriers": "12"
    },
    {
      "code": "TRK",
      "lat": "3.3258",
      "lon": "117.567",
      "name": "Tarakan Airport",
      "city": "Tarakan",
      "state": "Kalimantan Timur",
      "country": "Indonesia",
      "woeid": "12513517",
      "tz": "Asia\/Jakarta",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTRK",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "TRN",
      "lat": "45.1975",
      "lon": "7.64937",
      "name": "Turin International Airport",
      "city": "Caselle",
      "state": "Piedmont",
      "country": "Italy",
      "woeid": "12513862",
      "tz": "Europe\/Rome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.aeroportoditorino.it\/",
      "runway_length": null,
      "elev": null,
      "icao": "LIMF",
      "direct_flights": "37",
      "carriers": "42"
    },
    {
      "code": "TRO",
      "lat": "-31.8887",
      "lon": "152.518",
      "name": "Taree Airport",
      "city": "Taree",
      "state": "New South Wales",
      "country": "Australia",
      "woeid": "12510790",
      "tz": "Australia\/Sydney",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TRS",
      "lat": "45.8234",
      "lon": "13.4841",
      "name": "Ronchi Dei Legionari Airport",
      "city": "Ronchi",
      "state": "Friuli-Venezia Giulia",
      "country": "Italy",
      "woeid": "12513859",
      "tz": "Europe\/Rome",
      "phone": "0039 0481 773224",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.aeroporto.fvg.it",
      "runway_length": "3",
      "elev": null,
      "icao": "LIPQ",
      "direct_flights": "17",
      "carriers": "23"
    },
    {
      "code": "TRU",
      "lat": "-8.09",
      "lon": "-79.115",
      "name": "Cap C Martinez de Pinillos Airport",
      "city": "Huanchaco",
      "state": "La Libertad",
      "country": "Peru",
      "woeid": "12515191",
      "tz": "America\/Lima",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "SPRU",
      "direct_flights": "2",
      "carriers": "5"
    },
    {
      "code": "TRV",
      "lat": "8.47824",
      "lon": "76.9215",
      "name": "Thiruvananthapuram Airport",
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "country": "India",
      "woeid": "12513686",
      "tz": "Asia\/Kolkata",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "VOTV",
      "direct_flights": "17",
      "carriers": "18"
    },
    {
      "code": "TRW",
      "lat": "1.38",
      "lon": "173.151",
      "name": "Bonriki International Airport",
      "city": "Tarawa",
      "state": "",
      "country": "Kiribati",
      "woeid": "12514189",
      "tz": "Pacific\/Tarawa",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TRZ",
      "lat": "10.7645",
      "lon": "78.7396",
      "name": "",
      "city": "Tiruchirapally",
      "state": "",
      "country": "India",
      "woeid": "12513684",
      "tz": "Asia\/Kolkata",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "5"
    },
    {
      "code": "TSA",
      "lat": "25.0637",
      "lon": "121.552",
      "name": "Taipei Songshan Airport",
      "city": "Taipei City",
      "state": "Taipei City",
      "country": "Taiwan",
      "woeid": "12517954",
      "tz": "Asia\/Taipei",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "RCSS",
      "direct_flights": "13",
      "carriers": "9"
    },
    {
      "code": "TSE",
      "lat": "51.0266",
      "lon": "71.4782",
      "name": "Tselinograd South Airport",
      "city": "Aqmola",
      "state": "Aqmola",
      "country": "Kazakhstan",
      "woeid": "12514494",
      "tz": "Asia\/Almaty",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "30",
      "carriers": "18"
    },
    {
      "code": "TSF",
      "lat": "45.6513",
      "lon": "12.2022",
      "name": "Treviso Airport",
      "city": "Treviso",
      "state": "Veneto",
      "country": "Italy",
      "woeid": "22321438",
      "tz": "Europe\/Rome",
      "phone": "(0039)0422315111",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.trevisoairport.it",
      "runway_length": "7940",
      "elev": "59",
      "icao": "LIPH",
      "direct_flights": "20",
      "carriers": "6"
    },
    {
      "code": "TSJ",
      "lat": "34.2856",
      "lon": "129.33",
      "name": "Tsushima Airport",
      "city": "Tsushima-shi",
      "state": "Nagasaki Prefecture",
      "country": "Japan",
      "woeid": "12514032",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TSL",
      "lat": "22.0458",
      "lon": "-98.8042",
      "name": "Tamuin Airport",
      "city": "Ciudad Valles",
      "state": "San Luis Potosi",
      "country": "Mexico",
      "woeid": "12514969",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TSN",
      "lat": "39.1333",
      "lon": "117.35",
      "name": "Zhangguizhuang Airport",
      "city": "Tanggu",
      "state": "Tianjin",
      "country": "China",
      "woeid": "12523246",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "39",
      "carriers": "26"
    },
    {
      "code": "TSO",
      "lat": "49.9502",
      "lon": "-6.32874",
      "name": "",
      "city": "Isles Of Scilly",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "12695899",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTSO",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TSR",
      "lat": "45.8047",
      "lon": "21.3377",
      "name": "Timisoara Northeast Airport",
      "city": "",
      "state": "Timis",
      "country": "Romania",
      "woeid": "12515586",
      "tz": "Europe\/Bucharest",
      "phone": "+40 256 493 123",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.aerotim.ro",
      "runway_length": "3500",
      "elev": "106",
      "icao": "LRTR",
      "direct_flights": "30",
      "carriers": "9"
    },
    {
      "code": "TSS",
      "lat": "40.7474",
      "lon": "-73.9912",
      "name": "East 34th Street Heliport",
      "city": "New York",
      "state": "New York",
      "country": "United States",
      "woeid": "12523248",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Heliport2",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "TST",
      "lat": "7.5081",
      "lon": "99.625",
      "name": "Trang Airport",
      "city": "Muang Trang",
      "state": "Trang",
      "country": "Thailand",
      "woeid": "12517789",
      "tz": "Asia\/Bangkok",
      "phone": "075-218-224, 211-150",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TSV",
      "lat": "-19.2542",
      "lon": "146.764",
      "name": "Townsville Airport",
      "city": "Townsville",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510800",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.townsvilleairport.com.au",
      "runway_length": "2436",
      "elev": "18",
      "icao": "YBTL",
      "direct_flights": "10",
      "carriers": "5"
    },
    {
      "code": "TTA",
      "lat": "28.4294",
      "lon": "-11.098",
      "name": "Tan-Tan",
      "city": "Tan Tan",
      "state": "Tan-Tan",
      "country": "Morocco",
      "woeid": "1540902",
      "tz": "Africa\/Casablanca",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTTA",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TTE",
      "lat": "0.8308",
      "lon": "127.377",
      "name": "Babullah Airport",
      "city": "Ternate",
      "state": "Maluku Utara",
      "country": "Indonesia",
      "woeid": "12513452",
      "tz": "Asia\/Jayapura",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "TTJ",
      "lat": "35.5298",
      "lon": "134.166",
      "name": "Tottori Airport",
      "city": "Tottori-shi",
      "state": "Tottori Prefecture",
      "country": "Japan",
      "woeid": "12514029",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TTQ",
      "lat": "10.5667",
      "lon": "-83.5167",
      "name": "Tortuquero Airport",
      "city": "Colorado",
      "state": "Limon",
      "country": "Costa Rica",
      "woeid": "12524322",
      "tz": "America\/Costa_Rica",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "TTT",
      "lat": "22.7561",
      "lon": "121.107",
      "name": "Taitung Airport",
      "city": "Taitung City",
      "state": "Taiwan Province",
      "country": "Taiwan",
      "woeid": "12517928",
      "tz": "Asia\/Taipei",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TTU",
      "lat": "35.5953",
      "lon": "-5.3261",
      "name": "Sania Ramel Airport",
      "city": "Tetouan",
      "state": "Tetouan",
      "country": "Morocco",
      "woeid": "12514792",
      "tz": "Africa\/Casablanca",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "0",
      "carriers": "0"
    },
    {
      "code": "TUA",
      "lat": "0.8111",
      "lon": "-77.7069",
      "name": "El Rosal Teniente Guerrero Airport",
      "city": "Urbina",
      "state": "Carchi",
      "country": "Ecuador",
      "woeid": "12512628",
      "tz": "America\/Guayaquil",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TUB",
      "lat": "31.6123",
      "lon": "-111.052",
      "name": "",
      "city": "Tubuai",
      "state": "Austral Islands",
      "country": "French Polynesia",
      "woeid": "28743674",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "TUC",
      "lat": "-26.8397",
      "lon": "-65.1019",
      "name": "Teniente Benjamin Matienzo Airport",
      "city": "Banda del R\u00edo Sal\u00ed",
      "state": "Tucuman",
      "country": "Argentina",
      "woeid": "12510566",
      "tz": "America\/Buenos_Aires",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TUD",
      "lat": "13.7347",
      "lon": "-13.6561",
      "name": "Tambacounda Airport",
      "city": "Tambacounda",
      "state": "Tambacounda",
      "country": "Senegal",
      "woeid": "12517510",
      "tz": "Africa\/Dakar",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TUF",
      "lat": "47.428",
      "lon": "0.72414",
      "name": "St Symphorien Airport",
      "city": "Tours",
      "state": "Centre",
      "country": "France",
      "woeid": "12512976",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "LFOT",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TUG",
      "lat": "17.6417",
      "lon": "121.731",
      "name": "Tuguegarao Airport",
      "city": "Tuguegarao",
      "state": "Cagayan Valley",
      "country": "Philippines",
      "woeid": "12515652",
      "tz": "Asia\/Manila",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "TUI",
      "lat": "31.6917",
      "lon": "38.7289",
      "name": "Turaif Airport",
      "city": "Turayf",
      "state": "Al Hudud ash Shamaliyah",
      "country": "Saudi Arabia",
      "woeid": "12517375",
      "tz": "Asia\/Riyadh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "TUK",
      "lat": "25.9833",
      "lon": "63.0319",
      "name": "Turbat Airport",
      "city": "Turbat",
      "state": "Balochistan",
      "country": "Pakistan",
      "woeid": "12515273",
      "tz": "Asia\/Karachi",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "TUL",
      "lat": "36.1877",
      "lon": "-95.8892",
      "name": "Tulsa International Airport",
      "city": "Tulsa",
      "state": "Oklahoma",
      "country": "United States",
      "woeid": "12522219",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTUL",
      "direct_flights": "26",
      "carriers": "21"
    },
    {
      "code": "TUN",
      "lat": "36.8435",
      "lon": "10.2348",
      "name": "Aeroport Tunis",
      "city": "Tunis",
      "state": "Tunis",
      "country": "Tunisia",
      "woeid": "23388364",
      "tz": "Africa\/Tunis",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "DTTA",
      "direct_flights": "62",
      "carriers": "26"
    },
    {
      "code": "TUO",
      "lat": "-38.7383",
      "lon": "176.088",
      "name": "Taupo Aerodrome",
      "city": "Taupo",
      "state": "Waikato",
      "country": "New Zealand",
      "woeid": "12523249",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "NZAP",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "TUP",
      "lat": "34.2662",
      "lon": "-88.766",
      "name": "Tupelo Municipal-C D Lemons Airport",
      "city": "Tupelo",
      "state": "Mississippi",
      "country": "United States",
      "woeid": "12522222",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTUP",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "TUR",
      "lat": "-3.7767",
      "lon": "-49.7192",
      "name": "Tucurui Airport",
      "city": "Tucuru\u00ed",
      "state": "Para",
      "country": "Brazil",
      "woeid": "12511353",
      "tz": "America\/Belem",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TUS",
      "lat": "32.1204",
      "lon": "-110.936",
      "name": "Tucson International Airport",
      "city": "Tucson",
      "state": "Arizona",
      "country": "United States",
      "woeid": "12522214",
      "tz": "America\/Phoenix",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": "2643",
      "icao": "KTUS",
      "direct_flights": "25",
      "carriers": "26"
    },
    {
      "code": "TUU",
      "lat": "28.3722",
      "lon": "36.6253",
      "name": "Tabuk Airport",
      "city": "Tabuk",
      "state": "Tabuk",
      "country": "Saudi Arabia",
      "woeid": "12517371",
      "tz": "Asia\/Riyadh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTUU",
      "direct_flights": "10",
      "carriers": "1"
    },
    {
      "code": "TVC",
      "lat": "44.7365",
      "lon": "-85.5796",
      "name": "Cherry Capital Airport",
      "city": "Traverse City",
      "state": "Michigan",
      "country": "United States",
      "woeid": "12519167",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.tvcairport.com\/",
      "runway_length": "6501",
      "elev": "624",
      "icao": "KTVC",
      "direct_flights": "6",
      "carriers": "9"
    },
    {
      "code": "TVF",
      "lat": "48.0655",
      "lon": "-96.1791",
      "name": "Thief River Falls Regional Airport",
      "city": "Thief River Falls",
      "state": "Minnesota",
      "country": "United States",
      "woeid": "12522121",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTVF",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "TVU",
      "lat": "-16.8494",
      "lon": "-179.97",
      "name": "Taveuni Airport",
      "city": "Taveuni",
      "state": "Northern",
      "country": "Fiji",
      "woeid": "12512812",
      "tz": "Pacific\/Fiji",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "TVY",
      "lat": "14.1017",
      "lon": "98.2067",
      "name": "",
      "city": "Dawe",
      "state": "",
      "country": "Myanmar",
      "woeid": "23424763",
      "tz": "Asia\/Rangoon",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4593",
      "elev": "84",
      "icao": "KTVY",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "TWA",
      "lat": "36.8259",
      "lon": "-83.3212",
      "name": "Twin Hills",
      "city": "Twin Hills",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2509121",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "TWB",
      "lat": "-27.5444",
      "lon": "151.914",
      "name": "Toowoomba Airport",
      "city": "Toowoomba",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510799",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/tcc.toowoomba.qld.gov.au\/index.php?option=com_content&tas",
      "runway_length": "1121",
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TWF",
      "lat": "42.4838",
      "lon": "-114.485",
      "name": "Twin Falls-Sun Valley Regional Airport",
      "city": "Twin Falls",
      "state": "Idaho",
      "country": "United States",
      "woeid": "12522233",
      "tz": "America\/Denver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTWF",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TWT",
      "lat": "7.1",
      "lon": "124.65",
      "name": "Tawitawi",
      "city": "Tawitawi",
      "state": "Soccsksargen",
      "country": "Philippines",
      "woeid": "12747940",
      "tz": "Asia\/Manila",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "TWU",
      "lat": "4.2642",
      "lon": "117.885",
      "name": "Tawau Airport",
      "city": "Tawau",
      "state": "Sabah",
      "country": "Malaysia",
      "woeid": "12515013",
      "tz": "Asia\/Kuala_Lumpur",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "TXK",
      "lat": "33.457",
      "lon": "-93.9943",
      "name": "Texarkana Regional Airport",
      "city": "Texarkana",
      "state": "Arkansas",
      "country": "United States",
      "woeid": "12522107",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KTXK",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "TXL",
      "lat": "52.5548",
      "lon": "13.289",
      "name": "Berlin-Tegel International Airport",
      "city": "Berlin",
      "state": "Berlin",
      "country": "Germany",
      "woeid": "22164086",
      "tz": "Europe\/Berlin",
      "phone": "0180 5000 186 (0,12 Euro",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.berlin-airport.de\/PubEnglish\/PubTegel\/index.php?",
      "runway_length": "9918",
      "elev": "121",
      "icao": "EDDT",
      "direct_flights": "101",
      "carriers": "70"
    },
    {
      "code": "TXN",
      "lat": "29.7354",
      "lon": "118.262",
      "name": "Tunxi Airport",
      "city": "Haiyang",
      "state": "Anhui",
      "country": "China",
      "woeid": "12512221",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "6"
    },
    {
      "code": "TYF",
      "lat": "60.154",
      "lon": "12.9958",
      "name": "Fryklanda Airport",
      "city": "Torsby",
      "state": "Varmland",
      "country": "Sweden",
      "woeid": "12517627",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TYN",
      "lat": "37.774",
      "lon": "112.614",
      "name": "Taiyuan Wusu Airport",
      "city": "Taiyuan",
      "state": "Shanxi",
      "country": "China",
      "woeid": "12512207",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "31",
      "carriers": "14"
    },
    {
      "code": "TYR",
      "lat": "32.3506",
      "lon": "-95.4118",
      "name": "Tyler Pounds Field Airport",
      "city": "Tyler",
      "state": "Texas",
      "country": "United States",
      "woeid": "12522238",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7200",
      "elev": "544",
      "icao": "KTYR",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "TYS",
      "lat": "35.8064",
      "lon": "-83.9889",
      "name": "Mcghee Tyson Airport",
      "city": "Knoxville",
      "state": "Tennessee",
      "country": "United States",
      "woeid": "12520857",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9008",
      "elev": "981",
      "icao": "KTYS",
      "direct_flights": "25",
      "carriers": "25"
    },
    {
      "code": "TZA",
      "lat": "17.5347",
      "lon": "-88.3028",
      "name": "Belize City Municipal Airport",
      "city": "Hattieville",
      "state": "Belize",
      "country": "Belize",
      "woeid": "12523291",
      "tz": "America\/Belize",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1740",
      "elev": "5",
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "TZN",
      "lat": "24.1543",
      "lon": "-77.5885",
      "name": "South Andros Airport",
      "city": "Mangrove Cay",
      "state": "Mangrove Cay",
      "country": "Bahamas",
      "woeid": "12524026",
      "tz": "America\/Nassau",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "15",
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "TZX",
      "lat": "41",
      "lon": "39.7167",
      "name": "Trabzon Air Base",
      "city": "Trabzon",
      "state": "Trabzon",
      "country": "Turkey",
      "woeid": "12523250",
      "tz": "Europe\/Istanbul",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2640",
      "elev": "104",
      "icao": "LTCD",
      "direct_flights": "12",
      "carriers": "4"
    },
    {
      "code": "UAH",
      "lat": "-8.91445",
      "lon": "-139.548",
      "name": "French Polynesia",
      "city": "Ua Huka",
      "state": "Marquesas Islands",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2477",
      "elev": "151",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "UAK",
      "lat": "61.1611",
      "lon": "-45.4278",
      "name": "Narsarsuaq Airport",
      "city": "Narsarssurk",
      "state": "Vestgronland",
      "country": "Greenland",
      "woeid": "12513031",
      "tz": "America\/Godthab",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/iserit.greennet.gl\/bgbw",
      "runway_length": "6004",
      "elev": "112",
      "icao": "",
      "direct_flights": "8",
      "carriers": "3"
    },
    {
      "code": "UAP",
      "lat": "-9.41207",
      "lon": "-140.068",
      "name": "French Polynesia",
      "city": "Ua Pou",
      "state": "Marquesas Islands",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2723",
      "elev": "112",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "UAQ",
      "lat": "-31.6024",
      "lon": "-68.5472",
      "name": "San Juan Airport",
      "city": "9 de Julio",
      "state": "San Juan",
      "country": "Argentina",
      "woeid": "12510552",
      "tz": "America\/Buenos_Aires",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8070",
      "elev": "1959",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "UAS",
      "lat": "0.466667",
      "lon": "37.5667",
      "name": "Samburu Airport",
      "city": "Samburu",
      "state": "Eastern",
      "country": "Kenya",
      "woeid": "12732896",
      "tz": "Africa\/Nairobi",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3280",
      "elev": "3300",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "UBA",
      "lat": "-19.75",
      "lon": "-47.95",
      "name": "Uberaba",
      "city": "Uberaba",
      "state": "Sudeste",
      "country": "Brazil",
      "woeid": "455916",
      "tz": "America\/Sao_Paulo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5905",
      "elev": "2648",
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "UBJ",
      "lat": "33.931",
      "lon": "131.276",
      "name": "Yamaguchi-Ube Airport",
      "city": "Ube-shi",
      "state": "Yamaguchi Prefecture",
      "country": "Japan",
      "woeid": "12514036",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6560",
      "elev": "23",
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "UBP",
      "lat": "15.2489",
      "lon": "104.873",
      "name": "Ubon Airport",
      "city": "Don Mot Daeng",
      "state": "Ubon Ratchathani",
      "country": "Thailand",
      "woeid": "12517791",
      "tz": "Asia\/Bangkok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9848",
      "elev": "406",
      "icao": "",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "UCT",
      "lat": "63.5577",
      "lon": "53.7894",
      "name": "Ust Ukhta Airport",
      "city": "Ukhta",
      "state": "Komi",
      "country": "Russia",
      "woeid": "12517120",
      "tz": "Europe\/Moscow",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "UDI",
      "lat": "-18.8833",
      "lon": "-48.2247",
      "name": "Coronel Aviador Cesar Bombonato Airport",
      "city": "Uberlandia",
      "state": "Minas Gerais",
      "country": "Brazil",
      "woeid": "12511358",
      "tz": "America\/Sao_Paulo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6365",
      "elev": "3094",
      "icao": "",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "UDJ",
      "lat": "48.636",
      "lon": "22.2738",
      "name": "Uzhgorod Airport",
      "city": "Uzhhorod",
      "state": "Zakarpats\u00b4ka Oblast\u00b4",
      "country": "Ukraine",
      "woeid": "12518458",
      "tz": "Europe\/Kiev",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "UDR",
      "lat": "24.6041",
      "lon": "73.7726",
      "name": "Udaipur Airport",
      "city": "Debari",
      "state": "Rajasthan",
      "country": "India",
      "woeid": "12513688",
      "tz": "Asia\/Kolkata",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "1670",
      "icao": "",
      "direct_flights": "5",
      "carriers": "3"
    },
    {
      "code": "UEL",
      "lat": "-17.8569",
      "lon": "36.8556",
      "name": "Quelimane Airport",
      "city": "Quelimane",
      "state": "Zambezia",
      "country": "Mozambique",
      "woeid": "12515029",
      "tz": "Africa\/Maputo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5905",
      "elev": "36",
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "UEO",
      "lat": "26.3677",
      "lon": "126.716",
      "name": "Kumejima Airport",
      "city": "Kumejima-cho",
      "state": "Okinawa Prefecture",
      "country": "Japan",
      "woeid": "12513982",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3940",
      "elev": "22",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UET",
      "lat": "30.2536",
      "lon": "66.9389",
      "name": "Quetta Airport",
      "city": "",
      "state": "Balochistan",
      "country": "Pakistan",
      "woeid": "12515260",
      "tz": "Asia\/Karachi",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "12000",
      "elev": "5250",
      "icao": "",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "UFA",
      "lat": "54.5569",
      "lon": "55.8893",
      "name": "Ufa South Airport",
      "city": "Oufa",
      "state": "Bashkortostan",
      "country": "Russia",
      "woeid": "12517068",
      "tz": "Asia\/Yekaterinburg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "UWUU",
      "direct_flights": "21",
      "carriers": "15"
    },
    {
      "code": "UGB",
      "lat": "57.4253",
      "lon": "-157.74",
      "name": "Ugashik Bay Airport",
      "city": "Pilot Point",
      "state": "Alaska",
      "country": "United States",
      "woeid": "12523252",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1245",
      "elev": "25",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UGC",
      "lat": "41.5434",
      "lon": "60.6368",
      "name": "Urganch",
      "city": "Urgench",
      "state": "Qoraqalpoghiston",
      "country": "Uzbekistan",
      "woeid": "2272233",
      "tz": "Asia\/Samarkand",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "UGI",
      "lat": "57.8838",
      "lon": "-153.369",
      "name": "Uganik Airport",
      "city": "Kodiak",
      "state": "Alaska",
      "country": "United States",
      "woeid": "12522240",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UIB",
      "lat": "5.6903",
      "lon": "-76.6464",
      "name": "El Carano Airport",
      "city": "Quibd\u00f3",
      "state": "Choco",
      "country": "Colombia",
      "woeid": "12512373",
      "tz": "America\/Bogota",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3870",
      "elev": "220",
      "icao": "",
      "direct_flights": "6",
      "carriers": "3"
    },
    {
      "code": "UIH",
      "lat": "13.7673",
      "lon": "109.256",
      "name": "Vietnam",
      "city": "Qui Nhon",
      "state": "Binh Dinh",
      "country": "Vietnam",
      "woeid": "23424984",
      "tz": "Asia\/Ho_Chi_Minh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5081",
      "elev": "25",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "UII",
      "lat": "16.0969",
      "lon": "-86.9337",
      "name": "Utila Airport",
      "city": "Utila",
      "state": "Islas de la Bah\u00eda",
      "country": "Honduras",
      "woeid": "12513366",
      "tz": "America\/Tegucigalpa",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2000",
      "elev": "16",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UIN",
      "lat": "39.9348",
      "lon": "-91.196",
      "name": "Quincy Municipal Airport-Baldwin Field",
      "city": "Quincy",
      "state": "Illinois",
      "country": "United States",
      "woeid": "12521511",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7097",
      "elev": "769",
      "icao": "KUIN",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "UIO",
      "lat": "-0.1381",
      "lon": "-78.4833",
      "name": "Mariscal Sucre International Airport",
      "city": "Quito",
      "state": "Pichincha",
      "country": "Ecuador",
      "woeid": "12512643",
      "tz": "America\/Guayaquil",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.quitoairport.com\/",
      "runway_length": "10240",
      "elev": "9223",
      "icao": "SEQU",
      "direct_flights": "20",
      "carriers": "22"
    },
    {
      "code": "UIP",
      "lat": "47.9751",
      "lon": "-4.17416",
      "name": "Pluguffan Airport",
      "city": "Plomelin",
      "state": "Brittany",
      "country": "France",
      "woeid": "12512952",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6234",
      "elev": "302",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "UKB",
      "lat": "34.6356",
      "lon": "135.22",
      "name": "Kobe Airport",
      "city": "Kobe-shi",
      "state": "Hyogo Prefecture",
      "country": "Japan",
      "woeid": "12523307",
      "tz": "Asia\/Tokyo",
      "phone": "078-306-4195",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.city.kobe.jp",
      "runway_length": "8202",
      "elev": "22",
      "icao": "",
      "direct_flights": "6",
      "carriers": "4"
    },
    {
      "code": "UKK",
      "lat": "47.0436",
      "lon": "17.2142",
      "name": "",
      "city": "Ust-kamenogorsk",
      "state": "",
      "country": "Kazakhstan",
      "woeid": "23424871",
      "tz": "Asia\/Qyzylorda",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "4"
    },
    {
      "code": "ULB",
      "lat": "-16.3333",
      "lon": "168.294",
      "name": "Ulei Airport",
      "city": "Port-Vato",
      "state": "Malampa",
      "country": "Vanuatu",
      "woeid": "12523334",
      "tz": "Pacific\/Efate",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2789",
      "elev": "126",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ULN",
      "lat": "47.8458",
      "lon": "106.759",
      "name": "Ulaanbaatar Southwest Airport",
      "city": "Ulan Bator",
      "state": "Tov",
      "country": "Mongolia",
      "woeid": "12514761",
      "tz": "Asia\/Ulaanbaatar",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "ZMUB",
      "direct_flights": "16",
      "carriers": "7"
    },
    {
      "code": "ULO",
      "lat": "49.9674",
      "lon": "92.0767",
      "name": "Ulaangom",
      "city": "Ulaangom",
      "state": "Uvs",
      "country": "Mongolia",
      "woeid": "12514762",
      "tz": "Asia\/Hovd",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ULP",
      "lat": "-26.6087",
      "lon": "144.255",
      "name": "Quilpie Aerodrome",
      "city": "Quilpie",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510769",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4900",
      "elev": "655",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ULU",
      "lat": "2.81",
      "lon": "32.2683",
      "name": "Gulu Airport",
      "city": "Gulu",
      "state": "Gulu",
      "country": "Uganda",
      "woeid": "12518025",
      "tz": "Africa\/Kampala",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10203",
      "elev": "3510",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ULY",
      "lat": "54.4145",
      "lon": "48.8063",
      "name": "Ulyanovsk Northeast Airport",
      "city": "Dimitrovgrad",
      "state": "Ulryanovskaya Oblast",
      "country": "Russia",
      "woeid": "12517077",
      "tz": "Asia\/Yekaterinburg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UMD",
      "lat": "70.6801",
      "lon": "-52.1221",
      "name": "Uummannaq Airport",
      "city": "Uummannaq",
      "state": "Vestgronland",
      "country": "Greenland",
      "woeid": "12523852",
      "tz": "America\/Godthab",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": "2",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UME",
      "lat": "63.7932",
      "lon": "20.2848",
      "name": "Umea Airport",
      "city": "Umea",
      "state": "Vasterbotten",
      "country": "Sweden",
      "woeid": "12517687",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6562",
      "elev": "22",
      "icao": "ESNU",
      "direct_flights": "6",
      "carriers": "7"
    },
    {
      "code": "UNG",
      "lat": "-23.4941",
      "lon": "-46.5488",
      "name": "",
      "city": "Kiunga",
      "state": "Western",
      "country": "Papua New Guinea",
      "woeid": "1061752",
      "tz": "Pacific\/Port_Moresby",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3690",
      "elev": "102",
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "UNK",
      "lat": "63.8833",
      "lon": "-160.783",
      "name": "Unalakleet",
      "city": "Unalakleet",
      "state": "Alaska",
      "country": "United States",
      "woeid": "12799735",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6004",
      "elev": "21",
      "icao": "PAUN",
      "direct_flights": "4",
      "carriers": "8"
    },
    {
      "code": "UNN",
      "lat": "9.85278",
      "lon": "98.6292",
      "name": "Ranong Airport",
      "city": "Ranong",
      "state": "Ranong",
      "country": "Thailand",
      "woeid": "12523324",
      "tz": "Asia\/Bangkok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3529",
      "elev": "115",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UPB",
      "lat": "23.0805",
      "lon": "-82.517",
      "name": "Playa Baracoa",
      "city": "Havana",
      "state": "Ciudad de la Habana",
      "country": "Cuba",
      "woeid": "66179",
      "tz": "America\/Havana",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "UPG",
      "lat": "-5.0694",
      "lon": "119.55",
      "name": "Hasanuddin Airport",
      "city": "Maros",
      "state": "Sulawesi Selatan",
      "country": "Indonesia",
      "woeid": "12513470",
      "tz": "Asia\/Makassar",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8202",
      "elev": "47",
      "icao": "",
      "direct_flights": "17",
      "carriers": "8"
    },
    {
      "code": "URA",
      "lat": "51.1526",
      "lon": "51.5336",
      "name": "Podstepnyy Airport",
      "city": "Oral",
      "state": "Batys Qazaqstan",
      "country": "Kazakhstan",
      "woeid": "12514438",
      "tz": "Asia\/Aqtobe",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "5"
    },
    {
      "code": "URC",
      "lat": "43.9333",
      "lon": "87.4667",
      "name": "Diwopu Airport",
      "city": "Urumqi",
      "state": "Xinjiang",
      "country": "China",
      "woeid": "12523254",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10496",
      "elev": "2129",
      "icao": "ZWWW",
      "direct_flights": "47",
      "carriers": "18"
    },
    {
      "code": "URE",
      "lat": "58.2432",
      "lon": "22.5041",
      "name": "Kuressarre Airport",
      "city": "Kingissepa",
      "state": "Saaremaa",
      "country": "Estonia",
      "woeid": "12512737",
      "tz": "Europe\/Tallinn",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.eeke.ee",
      "runway_length": null,
      "elev": null,
      "icao": "EEKE",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "URG",
      "lat": "-29.7817",
      "lon": "-57.0383",
      "name": "Rubem Berta International Airport",
      "city": "Uruguaiana",
      "state": "Rio Grande do Sul",
      "country": "Brazil",
      "woeid": "12511295",
      "tz": "America\/Sao_Paulo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "243",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "URJ",
      "lat": "60.1167",
      "lon": "64.8333",
      "name": "Uraj",
      "city": "Uraj",
      "state": "Khanty-Mansiyskiy Avtonomnyy Okr",
      "country": "Russian Federation",
      "woeid": "2124077",
      "tz": "Asia\/Yekaterinburg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "URO",
      "lat": "49.3827",
      "lon": "1.26106",
      "name": "Boos Airport",
      "city": "St-Pierre",
      "state": "Haute-Normandie",
      "country": "France",
      "woeid": "12523827",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4101",
      "elev": "515",
      "icao": "",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "URS",
      "lat": "42.7756",
      "lon": "1.73213",
      "name": "",
      "city": "Kursk",
      "state": "Kurskaya Oblast",
      "country": "Russia",
      "woeid": "2121788",
      "tz": "Europe\/Moscow",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "URT",
      "lat": "9.1367",
      "lon": "99.1417",
      "name": "Surat Thani Airport",
      "city": "Phun Phin",
      "state": "Surat Thani",
      "country": "Thailand",
      "woeid": "12517786",
      "tz": "Asia\/Bangkok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8202",
      "elev": "19",
      "icao": "VTSB",
      "direct_flights": "2",
      "carriers": "4"
    },
    {
      "code": "URY",
      "lat": "31.415",
      "lon": "37.2744",
      "name": "Guriat Airport",
      "city": "Gurayat",
      "state": "",
      "country": "Saudi Arabia",
      "woeid": "12517336",
      "tz": "Asia\/Riyadh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10007",
      "elev": "1671",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "USH",
      "lat": "-54.8176",
      "lon": "-68.326",
      "name": "Ushuaia Airport",
      "city": "Ushuaia",
      "state": "Tierra del Fuego",
      "country": "Argentina",
      "woeid": "12510571",
      "tz": "America\/Buenos_Aires",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4763",
      "elev": "33",
      "icao": "SAWH",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "USK",
      "lat": "48.3136",
      "lon": "-117.281",
      "name": "",
      "city": "Usinsk",
      "state": "Komi",
      "country": "Russia",
      "woeid": "2101023",
      "tz": "Europe\/Moscow",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "3"
    },
    {
      "code": "USM",
      "lat": "9.55",
      "lon": "100.067",
      "name": "Koh Samui Airport",
      "city": "Ko Samui",
      "state": "Surat Thani",
      "country": "Thailand",
      "woeid": "12517782",
      "tz": "Asia\/Bangkok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4724",
      "elev": "44",
      "icao": "",
      "direct_flights": "9",
      "carriers": "4"
    },
    {
      "code": "USN",
      "lat": "35.5906",
      "lon": "129.357",
      "name": "Ulsan Airport",
      "city": "Ulsan",
      "state": "Ulsan",
      "country": "South Korea",
      "woeid": "12514234",
      "tz": "Asia\/Seoul",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "30",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "USQ",
      "lat": "38.681",
      "lon": "29.4716",
      "name": "",
      "city": "Usak",
      "state": "U\u015fak",
      "country": "Turkey",
      "woeid": "2347315",
      "tz": "Europe\/Istanbul",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "USU",
      "lat": "12.1",
      "lon": "120.167",
      "name": "Busuanga Airport",
      "city": "Coron",
      "state": "Western Visayas",
      "country": "Philippines",
      "woeid": "12523295",
      "tz": "Asia\/Manila",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3937",
      "elev": "148",
      "icao": "",
      "direct_flights": "3",
      "carriers": "4"
    },
    {
      "code": "UTH",
      "lat": "17.3831",
      "lon": "102.794",
      "name": "Udon Airport",
      "city": "Changwat Udon Thani; Udon Thani",
      "state": "Udon Thani",
      "country": "Thailand",
      "woeid": "12517792",
      "tz": "Asia\/Bangkok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10000",
      "elev": "579",
      "icao": "",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "UTN",
      "lat": "-28.3986",
      "lon": "21.2528",
      "name": "Pierre Van Ryneveld Airport",
      "city": "Upington",
      "state": "Northern Cape",
      "country": "South Africa",
      "woeid": "12517458",
      "tz": "Africa\/Johannesburg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "16076",
      "elev": "2791",
      "icao": "FAUP",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "UTP",
      "lat": "12.6778",
      "lon": "101.009",
      "name": "Rayong Airport",
      "city": "Ban Chang",
      "state": "Rayong",
      "country": "Thailand",
      "woeid": "12517790",
      "tz": "Asia\/Bangkok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "11500",
      "elev": "59",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "UTT",
      "lat": "-31.5472",
      "lon": "28.6694",
      "name": "K D Matanzima Airport",
      "city": "Umtata",
      "state": "Eastern Cape",
      "country": "South Africa",
      "woeid": "12517426",
      "tz": "Africa\/Johannesburg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6650",
      "elev": "2400",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UUD",
      "lat": "51.8063",
      "lon": "107.443",
      "name": "Ulan Ude-Mukhino Airport",
      "city": "Kabansk",
      "state": "Buryatiya",
      "country": "Russia",
      "woeid": "12517073",
      "tz": "Asia\/Irkutsk",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8943",
      "elev": "1690",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "UUN",
      "lat": "46.663",
      "lon": "113.287",
      "name": "Baruun Urt Airport",
      "city": "Baruun-Urt",
      "state": "Suhbaatar",
      "country": "Mongolia",
      "woeid": "12514734",
      "tz": "Asia\/Choibalsan",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "UUS",
      "lat": "46.8885",
      "lon": "142.724",
      "name": "Yuzhno Sakhalinsk South Airport",
      "city": "Kholmsk",
      "state": "Sakhalinskaya Oblast",
      "country": "Russia",
      "woeid": "12517272",
      "tz": "Asia\/Vladivostok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8858",
      "elev": "56",
      "icao": "UHSS",
      "direct_flights": "14",
      "carriers": "9"
    },
    {
      "code": "UVE",
      "lat": "-20.5542",
      "lon": "166.571",
      "name": "Ouloup Airport",
      "city": "Fayaou\u00e9",
      "state": "Loyaute",
      "country": "New Caledonia",
      "woeid": "12515040",
      "tz": "Pacific\/Noumea",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3608",
      "elev": "23",
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "UVF",
      "lat": "13.7336",
      "lon": "-60.9542",
      "name": "Hewanorra International Airport",
      "city": "Vieux Fort",
      "state": "Vieux Fort",
      "country": "St. Lucia",
      "woeid": "12517595",
      "tz": "America\/St_Lucia",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9000",
      "elev": "11",
      "icao": "TLPL",
      "direct_flights": "15",
      "carriers": "11"
    },
    {
      "code": "UWE",
      "lat": "51.4997",
      "lon": "-2.54595",
      "name": "Metropolitan Area",
      "city": "Wiesbaden",
      "state": "Hesse",
      "country": "Germany",
      "woeid": "706329",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "UYL",
      "lat": "10.9342",
      "lon": "25.3411",
      "name": "Janub Darfur",
      "city": "Nyala",
      "state": "Janub Darfur",
      "country": "Sudan",
      "woeid": "20069893",
      "tz": "Africa\/Khartoum",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5300",
      "elev": "2149",
      "icao": "",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "UYN",
      "lat": "38.2768",
      "lon": "109.769",
      "name": "Yulin Airport",
      "city": "Yulin",
      "state": "Shaanxi",
      "country": "China",
      "woeid": "12512286",
      "tz": "Asia\/Chongqing",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "VAA",
      "lat": "63.0396",
      "lon": "21.7691",
      "name": "Vaasa Airport",
      "city": "Vaasa",
      "state": "Western Finland",
      "country": "Finland",
      "woeid": "12512804",
      "tz": "Europe\/Helsinki",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6562",
      "elev": "15",
      "icao": "EFVA",
      "direct_flights": "2",
      "carriers": "7"
    },
    {
      "code": "VAI",
      "lat": "35.253",
      "lon": "26.2538",
      "name": "",
      "city": "Vanimo",
      "state": "Sandaun",
      "country": "Papua New Guinea",
      "woeid": "1060345",
      "tz": "Pacific\/Port_Moresby",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5250",
      "elev": "10",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "VAK",
      "lat": "61.5338",
      "lon": "-165.584",
      "name": "Chevak Airport",
      "city": "Hooper Bay",
      "state": "Alaska",
      "country": "United States",
      "woeid": "29388570",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2689",
      "elev": "75",
      "icao": "PAVA",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "VAN",
      "lat": "38.4681",
      "lon": "43.3308",
      "name": "Van Airport",
      "city": "Van",
      "state": "Van",
      "country": "Turkey",
      "woeid": "12517920",
      "tz": "Europe\/Istanbul",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8990",
      "elev": "5474",
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "VAO",
      "lat": "7.56667",
      "lon": "154.667",
      "name": "Suavanao Airstrip",
      "city": "Suavanao",
      "state": "",
      "country": "Solomon Islands",
      "woeid": "23424766",
      "tz": "Pacific\/Noumea",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VAR",
      "lat": "43.2416",
      "lon": "27.8137",
      "name": "Topoli Airport",
      "city": "Varna",
      "state": "Varna",
      "country": "Bulgaria",
      "woeid": "12511529",
      "tz": "Europe\/Sofia",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.varna-airport.bg\/",
      "runway_length": "8202",
      "elev": "230",
      "icao": "LBWN",
      "direct_flights": "20",
      "carriers": "19"
    },
    {
      "code": "VAS",
      "lat": "39.8147",
      "lon": "36.9039",
      "name": "Sivas Airport",
      "city": "Sivas",
      "state": "Sivas",
      "country": "Turkey",
      "woeid": "12517914",
      "tz": "Europe\/Istanbul",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "12500",
      "elev": "5222",
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "VAV",
      "lat": "-18.65",
      "lon": "-173.967",
      "name": "Lupepau'u Airport",
      "city": "Neiafu",
      "state": "Vava'eu",
      "country": "Tonga",
      "woeid": "12523256",
      "tz": "Pacific\/Tongatapu",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "VAW",
      "lat": "70.3569",
      "lon": "31.0471",
      "name": "Vardoe Airport",
      "city": "Vardo",
      "state": "Finnmark Fylke",
      "country": "Norway",
      "woeid": "12523953",
      "tz": "Europe\/Oslo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3281",
      "elev": "20",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "VBM",
      "lat": "62.8903",
      "lon": "-149.054",
      "name": "Alaska",
      "city": "Blue Mountain",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2347560",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VBS",
      "lat": "45.4343",
      "lon": "10.3214",
      "name": "Brescia Montichiari",
      "city": "Verona",
      "state": "Lombardy",
      "country": "Italy",
      "woeid": "711410",
      "tz": "Europe\/Rome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "LIPO",
      "direct_flights": "13",
      "carriers": "7"
    },
    {
      "code": "VBV",
      "lat": "16.4843",
      "lon": "73.746",
      "name": "",
      "city": "Vanuabalavu",
      "state": "",
      "country": "Fiji",
      "woeid": "23424813",
      "tz": "Pacific\/Fiji",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3018",
      "elev": "156",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VBY",
      "lat": "57.6603",
      "lon": "18.3397",
      "name": "Visby Airport",
      "city": "Visby",
      "state": "Gotland",
      "country": "Sweden",
      "woeid": "12517692",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.lfv.se\/visby",
      "runway_length": "6562",
      "elev": "167",
      "icao": "",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "VCE",
      "lat": "45.505",
      "lon": "12.3433",
      "name": "Marco Polo International Airport",
      "city": "Venice",
      "state": "Veneto",
      "country": "Italy",
      "woeid": "23095516",
      "tz": "Europe\/Rome",
      "phone": "+39 041 2606111",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.veniceairport.it",
      "runway_length": "10827",
      "elev": "7",
      "icao": "LIPZ",
      "direct_flights": "70",
      "carriers": "51"
    },
    {
      "code": "VCL",
      "lat": "15.9742",
      "lon": "107.868",
      "name": "Chulai",
      "city": "Tamky",
      "state": "",
      "country": "Vietnam",
      "woeid": "23424984",
      "tz": "Asia\/Vientiane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "VCP",
      "lat": "-23.0067",
      "lon": "-47.1344",
      "name": "Viracopos International Airport",
      "city": "Campinas",
      "state": "Sao Paulo",
      "country": "Brazil",
      "woeid": "12511374",
      "tz": "America\/Sao_Paulo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10630",
      "elev": "2169",
      "icao": "SBKP",
      "direct_flights": "14",
      "carriers": "11"
    },
    {
      "code": "VCS",
      "lat": "15.9742",
      "lon": "107.868",
      "name": "Vietnam",
      "city": "Con Dao",
      "state": "Ca Mau",
      "country": "Vietnam",
      "woeid": "23424984",
      "tz": "Asia\/Ho_Chi_Minh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "VCT",
      "lat": "28.8449",
      "lon": "-96.9201",
      "name": "Victoria Regional Airport",
      "city": "Victoria",
      "state": "Texas",
      "country": "United States",
      "woeid": "12522283",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9102",
      "elev": "115",
      "icao": "KVCT",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VCV",
      "lat": "34.588",
      "lon": "-117.373",
      "name": "Southern California Logistics Airport",
      "city": "Victorville",
      "state": "California",
      "country": "United States",
      "woeid": "12519884",
      "tz": "America\/Los_Angeles",
      "phone": "",
      "type": "Military Airport",
      "email": "",
      "url": "",
      "runway_length": "15050",
      "elev": "2885",
      "icao": "KVCV",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VDA",
      "lat": "29.9528",
      "lon": "34.9583",
      "name": "Ovda Airport",
      "city": "Ovda",
      "state": "HaDarom",
      "country": "Israel",
      "woeid": "12513788",
      "tz": "Asia\/Jerusalem",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9843",
      "elev": "1490",
      "icao": "LLOV",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VDB",
      "lat": "61.0105",
      "lon": "9.29374",
      "name": "Fagernes Leirin Airport",
      "city": "Fagernes",
      "state": "Oppland Fylke",
      "country": "Norway",
      "woeid": "12515108",
      "tz": "Europe\/Oslo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VDC",
      "lat": "-14.8633",
      "lon": "-40.8628",
      "name": "Vitoria da Conquista Airport",
      "city": "Vit\u00f3ria da Conquista",
      "state": "Bahia",
      "country": "Brazil",
      "woeid": "12511375",
      "tz": "America\/Belem",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5827",
      "elev": "2998",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VDE",
      "lat": "27.8145",
      "lon": "-17.885",
      "name": "Valverde Airport",
      "city": "Valverde",
      "state": "Canary Islands",
      "country": "Spain",
      "woeid": "12523969",
      "tz": "Atlantic\/Canary",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3609",
      "elev": "105",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VDM",
      "lat": "-40.8697",
      "lon": "-62.9994",
      "name": "Gobernador Castello Airport",
      "city": "Viedma",
      "state": "Rio Negro",
      "country": "Argentina",
      "woeid": "12510503",
      "tz": "America\/Buenos_Aires",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8431",
      "elev": "20",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VDS",
      "lat": "70.0653",
      "lon": "29.8416",
      "name": "Vadso Airport",
      "city": "Vadso",
      "state": "Finnmark Fylke",
      "country": "Norway",
      "woeid": "12523954",
      "tz": "Europe\/Oslo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2625",
      "elev": "127",
      "icao": "ENVD",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "VDZ",
      "lat": "61.1294",
      "lon": "-146.256",
      "name": "Valdez Airport",
      "city": "Valdez",
      "state": "Alaska",
      "country": "United States",
      "woeid": "12522264",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "120",
      "icao": "PAVD",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "VEE",
      "lat": "67.009",
      "lon": "-146.406",
      "name": "Venetie",
      "city": "Venetie",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2511598",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4100",
      "elev": "550",
      "icao": "",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "VEL",
      "lat": "40.4485",
      "lon": "-109.514",
      "name": "Vernal Airport",
      "city": "Vernal",
      "state": "Utah",
      "country": "United States",
      "woeid": "12522278",
      "tz": "America\/Denver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6601",
      "elev": "5274",
      "icao": "KVEL",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "VER",
      "lat": "19.145",
      "lon": "-96.1878",
      "name": "General Heriberto Jara International Airport",
      "city": "Teocelo",
      "state": "Veracruz-Llave",
      "country": "Mexico",
      "woeid": "12514880",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7874",
      "elev": "95",
      "icao": "KVER",
      "direct_flights": "8",
      "carriers": "11"
    },
    {
      "code": "VEY",
      "lat": "63.4273",
      "lon": "-20.2682",
      "name": "Vestmannaeyjar Airport",
      "city": "Vestmannaeyjar",
      "state": "Vestmannaeyjar",
      "country": "Iceland",
      "woeid": "12513447",
      "tz": "Atlantic\/Reykjavik",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3904",
      "elev": "328",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VFA",
      "lat": "-18.0931",
      "lon": "25.8403",
      "name": "Victoria Falls Airport",
      "city": "",
      "state": "Matabeleland North",
      "country": "Zimbabwe",
      "woeid": "12523039",
      "tz": "Africa\/Harare",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7500",
      "elev": "3490",
      "icao": "FVFA",
      "direct_flights": "5",
      "carriers": "4"
    },
    {
      "code": "VGA",
      "lat": "16.5167",
      "lon": "80.8",
      "name": "Vijaywada Airport",
      "city": "Manthena",
      "state": "Andhra Pradesh",
      "country": "India",
      "woeid": "12513694",
      "tz": "Asia\/Kolkata",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "82",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VGO",
      "lat": "42.2258",
      "lon": "-8.63269",
      "name": "Vigo Airport",
      "city": "Vigo",
      "state": "Galicia",
      "country": "Spain",
      "woeid": "12517579",
      "tz": "Europe\/Madrid",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7218",
      "elev": "866",
      "icao": "LEVX",
      "direct_flights": "10",
      "carriers": "17"
    },
    {
      "code": "VGZ",
      "lat": "1.06667",
      "lon": "-76.7167",
      "name": "Villagarzon Airport",
      "city": "Villagarzon",
      "state": "Putumayo",
      "country": "Colombia",
      "woeid": "12523760",
      "tz": "America\/Bogota",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3412",
      "elev": "2622",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VHC",
      "lat": "-9.6889",
      "lon": "20.43",
      "name": "Saurimo Airport",
      "city": "Saurimo",
      "state": "Lunda Sul",
      "country": "Angola",
      "woeid": "12510452",
      "tz": "Africa\/Luanda",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "11154",
      "elev": "3576",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VHM",
      "lat": "64.5797",
      "lon": "16.8374",
      "name": "Vilhelmina Airport",
      "city": "Vilhelmina",
      "state": "Vasterbotten",
      "country": "Sweden",
      "woeid": "12517691",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3330",
      "elev": "1138",
      "icao": "",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "VHZ",
      "lat": "-17.6902",
      "lon": "-149.376",
      "name": "French Polynesia",
      "city": "Vahitahi",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VIE",
      "lat": "48.1036",
      "lon": "16.5804",
      "name": "Vienna Schwechat International Airport",
      "city": "Klein-Neusiedl",
      "state": "Lower Austria",
      "country": "Austria",
      "woeid": "22022012",
      "tz": "Europe\/Vienna",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.viennaairport.com",
      "runway_length": "11811",
      "elev": "600",
      "icao": "LOWW",
      "direct_flights": "183",
      "carriers": "96"
    },
    {
      "code": "VIG",
      "lat": "39.2505",
      "lon": "-82.7916",
      "name": "",
      "city": "El Vigia",
      "state": "M\u00e9rida",
      "country": "Venezuela",
      "woeid": "468413",
      "tz": "America\/Caracas",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10630",
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VII",
      "lat": "18.6688",
      "lon": "105.672",
      "name": "Vinh",
      "city": "Vinh City",
      "state": "Nghe An",
      "country": "Vietnam",
      "woeid": "1252662",
      "tz": "Asia\/Ho_Chi_Minh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "VIJ",
      "lat": "18.4728",
      "lon": "-64.418",
      "name": "Virgin Gorda Airport",
      "city": "Virgin Gorda",
      "state": "",
      "country": "British Virgin Islands",
      "woeid": "12522861",
      "tz": "America\/Tortola",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3160",
      "elev": "12",
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "VIL",
      "lat": "23.7333",
      "lon": "-15.9167",
      "name": "Dakhla Airport",
      "city": "Ad Dakhla",
      "state": "Oued Ed-Dahab",
      "country": "Western Sahara",
      "woeid": "12514785",
      "tz": "Africa\/El_Aaiun",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9842",
      "elev": "33",
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "VIS",
      "lat": "36.3253",
      "lon": "-119.394",
      "name": "Visalia Municipal Airport",
      "city": "Visalia",
      "state": "California",
      "country": "United States",
      "woeid": "12522291",
      "tz": "America\/Los_Angeles",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6556",
      "elev": "292",
      "icao": "KVIS",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VIT",
      "lat": "42.8844",
      "lon": "-2.73051",
      "name": "Vitoria Airport",
      "city": "Vitoria",
      "state": "Basque Country",
      "country": "Spain",
      "woeid": "12517580",
      "tz": "Europe\/Madrid",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "11483",
      "elev": "1683",
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "VIX",
      "lat": "-20.2578",
      "lon": "-40.2864",
      "name": "Goiabeiras Airport",
      "city": "Vitoria",
      "state": "Espirito Santo",
      "country": "Brazil",
      "woeid": "12511159",
      "tz": "America\/Sao_Paulo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6138",
      "elev": "11",
      "icao": "SBVT",
      "direct_flights": "6",
      "carriers": "7"
    },
    {
      "code": "VKG",
      "lat": "9.945",
      "lon": "105.135",
      "name": "Kien Giang Airport",
      "city": "Kien Giang",
      "state": "Kien Giang",
      "country": "Vietnam",
      "woeid": "12522921",
      "tz": "Asia\/Ho_Chi_Minh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3767",
      "elev": "13",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VKO",
      "lat": "55.5978",
      "lon": "37.285",
      "name": "Ynukovo Airport",
      "city": "Podol'sk",
      "state": "Moskovskaya Oblast",
      "country": "Russia",
      "woeid": "12517260",
      "tz": "Europe\/Moscow",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10007",
      "elev": "669",
      "icao": "UUWW",
      "direct_flights": "79",
      "carriers": "24"
    },
    {
      "code": "VKT",
      "lat": "67.491",
      "lon": "63.995",
      "name": "Vorkuta Airport",
      "city": "Ukhta",
      "state": "Komi",
      "country": "Russia",
      "woeid": "12517192",
      "tz": "Europe\/Moscow",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "VLC",
      "lat": "39.4929",
      "lon": "-0.47617",
      "name": "Valencia Airport",
      "city": "Manises",
      "state": "Valencia",
      "country": "Spain",
      "woeid": "12517577",
      "tz": "Europe\/Madrid",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.aena.es",
      "runway_length": "8858",
      "elev": "226",
      "icao": "LEVC",
      "direct_flights": "75",
      "carriers": "36"
    },
    {
      "code": "VLD",
      "lat": "30.7892",
      "lon": "-83.2787",
      "name": "Valdosta Regional Airport",
      "city": "Valdosta",
      "state": "Georgia",
      "country": "United States",
      "woeid": "12522265",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6302",
      "elev": "204",
      "icao": "KVLD",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "VLI",
      "lat": "-17.7039",
      "lon": "168.312",
      "name": "Port Vila Bauerfield Airport",
      "city": "Port-Vila",
      "state": "Shefa",
      "country": "Vanuatu",
      "woeid": "12515052",
      "tz": "Pacific\/Efate",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8530",
      "elev": "66",
      "icao": "NVVV",
      "direct_flights": "22",
      "carriers": "7"
    },
    {
      "code": "VLL",
      "lat": "41.7077",
      "lon": "-4.84504",
      "name": "Valladolid Airport",
      "city": "Valladolid",
      "state": "Castille and Leon",
      "country": "Spain",
      "woeid": "12517578",
      "tz": "Europe\/Madrid",
      "phone": "00 34 983 415 500",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.aena.es",
      "runway_length": "9843",
      "elev": "2785",
      "icao": "KVLL",
      "direct_flights": "13",
      "carriers": "5"
    },
    {
      "code": "VLN",
      "lat": "10.1556",
      "lon": "-67.9319",
      "name": "Zim Valencia Airport",
      "city": "Valencia",
      "state": "Carabobo",
      "country": "Venezuela",
      "woeid": "12522858",
      "tz": "America\/Caracas",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6562",
      "elev": "1410",
      "icao": "",
      "direct_flights": "8",
      "carriers": "10"
    },
    {
      "code": "VLS",
      "lat": "-15.1468",
      "lon": "167.038",
      "name": "Vanuatu",
      "city": "Valesdir",
      "state": "Shefa",
      "country": "Vanuatu",
      "woeid": "23424907",
      "tz": "Pacific\/Efate",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1968",
      "elev": "36",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VLV",
      "lat": "9.3414",
      "lon": "-70.5844",
      "name": "Dr Antonio Nicolas Briceno Airport",
      "city": "Siquisique",
      "state": "Trujillo",
      "country": "Venezuela",
      "woeid": "12522773",
      "tz": "America\/Caracas",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6726",
      "elev": "2060",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VLY",
      "lat": "52.3685",
      "lon": "-3.98509",
      "name": "Wales",
      "city": "Anglesey",
      "state": "Wales",
      "country": "United Kingdom",
      "woeid": "12578049",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VNO",
      "lat": "54.64",
      "lon": "25.2803",
      "name": "Vilnius Airport",
      "city": "Vilnius",
      "state": "Vilniaus apskritis",
      "country": "Lithuania",
      "woeid": "12523042",
      "tz": "Europe\/Vilnius",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.vilnius-airport.lt\/",
      "runway_length": "8202",
      "elev": "623",
      "icao": "EYVI",
      "direct_flights": "39",
      "carriers": "27"
    },
    {
      "code": "VNS",
      "lat": "25.4541",
      "lon": "82.8642",
      "name": "Varanasi Airport",
      "city": "Baragaon",
      "state": "Uttar Pradesh",
      "country": "India",
      "woeid": "12513693",
      "tz": "Asia\/Kolkata",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5880",
      "elev": "262",
      "icao": "",
      "direct_flights": "5",
      "carriers": "6"
    },
    {
      "code": "VNX",
      "lat": "-22.0142",
      "lon": "35.3119",
      "name": "Vilanculos Airport",
      "city": "Vilanculos",
      "state": "Inhambane",
      "country": "Mozambique",
      "woeid": "12515033",
      "tz": "Africa\/Maputo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4823",
      "elev": "46",
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "VOG",
      "lat": "48.7788",
      "lon": "44.3382",
      "name": "Gumrak Airport",
      "city": "Kamyshin",
      "state": "Volgogradskaya Oblast",
      "country": "Russia",
      "woeid": "12516023",
      "tz": "Asia\/Yekaterinburg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": "476",
      "icao": "",
      "direct_flights": "5",
      "carriers": "6"
    },
    {
      "code": "VOL",
      "lat": "39.2203",
      "lon": "22.7947",
      "name": "Nea Anchialos Airport",
      "city": "Almiros",
      "state": "Thessalia",
      "country": "Greece",
      "woeid": "12513314",
      "tz": "Europe\/Athens",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "3937",
      "elev": "90",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VOZ",
      "lat": "51.8089",
      "lon": "39.2242",
      "name": "Voronezh-Chertovitskoye Airport",
      "city": "Semiluki",
      "state": "Voronezhskaya Oblast",
      "country": "Russia",
      "woeid": "12517197",
      "tz": "Europe\/Moscow",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "11",
      "carriers": "3"
    },
    {
      "code": "VPE",
      "lat": "-17.0704",
      "lon": "15.7258",
      "name": "Ondjiva",
      "city": "Ongiva",
      "state": "Cunene",
      "country": "Angola",
      "woeid": "1263141",
      "tz": "Africa\/Luanda",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8120",
      "elev": "3641",
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "VPN",
      "lat": "65.7177",
      "lon": "-14.8348",
      "name": "Vopnafjordur Airport",
      "city": "Egilsstadir",
      "state": "Nordur-Mulasysla",
      "country": "Iceland",
      "woeid": "12523906",
      "tz": "Atlantic\/Reykjavik",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3268",
      "elev": "31",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VPS",
      "lat": "30.496",
      "lon": "-86.55",
      "name": "Eglin Air Force Base",
      "city": "Eglin Village",
      "state": "Florida",
      "country": "United States",
      "woeid": "12519601",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "12000",
      "elev": "85",
      "icao": "KVPS",
      "direct_flights": "8",
      "carriers": "12"
    },
    {
      "code": "VPY",
      "lat": "-19.1506",
      "lon": "33.4311",
      "name": "Chimoio Airport",
      "city": "Chimoio",
      "state": "Manica",
      "country": "Mozambique",
      "woeid": "12515015",
      "tz": "Africa\/Maputo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VQS",
      "lat": "18.1355",
      "lon": "-65.487",
      "name": "Aeropuerto Antonio Rivera Rodr\u00edguez",
      "city": "Puerto Ferro",
      "state": "Puerto Rico",
      "country": "United States",
      "woeid": "12524420",
      "tz": "America\/Puerto_Rico",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "46",
      "icao": "TJVQ",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "VRA",
      "lat": "23.0306",
      "lon": "-81.4367",
      "name": "Varadero Airport",
      "city": "Varadero",
      "state": "Matanzas",
      "country": "Cuba",
      "woeid": "12512489",
      "tz": "America\/Havana",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7382",
      "elev": "39",
      "icao": "MUVR",
      "direct_flights": "17",
      "carriers": "10"
    },
    {
      "code": "VRC",
      "lat": "13.5792",
      "lon": "124.204",
      "name": "Virac Airport",
      "city": "Virac",
      "state": "Bicol Region",
      "country": "Philippines",
      "woeid": "12515654",
      "tz": "Asia\/Manila",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5118",
      "elev": "121",
      "icao": "",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "VRK",
      "lat": "62.1742",
      "lon": "27.8658",
      "name": "Varkaus Airport",
      "city": "Varkaus",
      "state": "Eastern Finland",
      "country": "Finland",
      "woeid": "12512805",
      "tz": "Europe\/Helsinki",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.ilmailulaitos.fi\/airport_varkaus",
      "runway_length": "6562",
      "elev": "286",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VRN",
      "lat": "45.4033",
      "lon": "10.9053",
      "name": "Verona Airport",
      "city": "Sommacampagna",
      "state": "Veneto",
      "country": "Italy",
      "woeid": "22592277",
      "tz": "Europe\/Rome",
      "phone": "+39 045 8095666",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.aeroportoverona.it",
      "runway_length": "9794",
      "elev": "238",
      "icao": "",
      "direct_flights": "38",
      "carriers": "28"
    },
    {
      "code": "VRY",
      "lat": "67.6667",
      "lon": "12.6833",
      "name": "Vaeroy Airport",
      "city": "Varoy",
      "state": "Nordland Fylke",
      "country": "Norway",
      "woeid": "12523955",
      "tz": "Europe\/Oslo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2625",
      "elev": "36",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VSA",
      "lat": "17.9958",
      "lon": "-92.8189",
      "name": "Villahermosa Airport",
      "city": "Villahermosa",
      "state": "Tabasco",
      "country": "Mexico",
      "woeid": "12514984",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7218",
      "elev": "43",
      "icao": "MMVA",
      "direct_flights": "7",
      "carriers": "15"
    },
    {
      "code": "VSG",
      "lat": "48.5667",
      "lon": "39.3333",
      "name": "Lugansk Airport",
      "city": "Luhans'k",
      "state": "Luhans\u00b4ka Oblast\u00b4",
      "country": "Ukraine",
      "woeid": "12524015",
      "tz": "Europe\/Kiev",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "UKCW",
      "direct_flights": "2",
      "carriers": "4"
    },
    {
      "code": "VST",
      "lat": "59.6007",
      "lon": "16.6367",
      "name": "Hasslo Airport",
      "city": "Vasteras",
      "state": "Vastmanland",
      "country": "Sweden",
      "woeid": "12517636",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8202",
      "elev": "20",
      "icao": "",
      "direct_flights": "8",
      "carriers": "3"
    },
    {
      "code": "VTE",
      "lat": "17.9833",
      "lon": "102.565",
      "name": "Vientiane Airport",
      "city": "Vientiane",
      "state": "Viangchan",
      "country": "Laos",
      "woeid": "12514560",
      "tz": "Asia\/Vientiane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10499",
      "elev": "559",
      "icao": "VLVT",
      "direct_flights": "12",
      "carriers": "6"
    },
    {
      "code": "VTU",
      "lat": "20.9894",
      "lon": "-76.9361",
      "name": "Las Tunas Airport",
      "city": "Becerra",
      "state": "Las Tunas",
      "country": "Cuba",
      "woeid": "12512470",
      "tz": "America\/Havana",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5906",
      "elev": "312",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VTZ",
      "lat": "17.7214",
      "lon": "83.2201",
      "name": "Vishakapatnam Airport",
      "city": "Visakhapatnam",
      "state": "Andhra Pradesh",
      "country": "India",
      "woeid": "12513695",
      "tz": "Asia\/Kolkata",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "14",
      "icao": "",
      "direct_flights": "5",
      "carriers": "6"
    },
    {
      "code": "VUP",
      "lat": "10.4433",
      "lon": "-73.245",
      "name": "Alfonso Lopez Airport",
      "city": "Valledupar",
      "state": "Cesar",
      "country": "Colombia",
      "woeid": "12512361",
      "tz": "America\/Bogota",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6890",
      "elev": "453",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "VVC",
      "lat": "4.1708",
      "lon": "-73.6117",
      "name": "Vanguardia Airport",
      "city": "Villavicencio",
      "state": "Meta",
      "country": "Colombia",
      "woeid": "12512423",
      "tz": "America\/Bogota",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5576",
      "elev": "1388",
      "icao": "",
      "direct_flights": "5",
      "carriers": "3"
    },
    {
      "code": "VVI",
      "lat": "-17.6411",
      "lon": "-63.1339",
      "name": "Viru Viru International Airport",
      "city": "Santa Cruz",
      "state": "Santa Cruz",
      "country": "Bolivia",
      "woeid": "12510911",
      "tz": "America\/La_Paz",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "11483",
      "elev": "1224",
      "icao": "SLVR",
      "direct_flights": "14",
      "carriers": "9"
    },
    {
      "code": "VVO",
      "lat": "43.3972",
      "lon": "132.156",
      "name": "Artem North Airport",
      "city": "Nakhodka",
      "state": "Primorskiy Kray",
      "country": "Russia",
      "woeid": "12515734",
      "tz": "Asia\/Vladivostok",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.vladavia.ru\/avia_eng\/company_airport.php3",
      "runway_length": null,
      "elev": null,
      "icao": "UHWW",
      "direct_flights": "29",
      "carriers": "14"
    },
    {
      "code": "VVZ",
      "lat": "26.5001",
      "lon": "8.47094",
      "name": "Illizi",
      "city": "Illizi",
      "state": "Illizi",
      "country": "Algeria",
      "woeid": "1255066",
      "tz": "Africa\/Algiers",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5889",
      "elev": "1778",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "VXC",
      "lat": "-13.2761",
      "lon": "35.2533",
      "name": "Lichinga Airport",
      "city": "Lichinga",
      "state": "Niassa",
      "country": "Mozambique",
      "woeid": "12515019",
      "tz": "Africa\/Maputo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8200",
      "elev": "4505",
      "icao": "FQLC",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "VXE",
      "lat": "16.8306",
      "lon": "-25.0636",
      "name": "San Pedro Airport",
      "city": "Mindelo",
      "state": "Sao Vicente",
      "country": "Cape Verde",
      "woeid": "12512495",
      "tz": "Atlantic\/Cape_Verde",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3937",
      "elev": "66",
      "icao": "GVSV",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "VXO",
      "lat": "56.9242",
      "lon": "14.7318",
      "name": "Kronoberg Airport",
      "city": "Vaxjo",
      "state": "Kronoberg",
      "country": "Sweden",
      "woeid": "12517654",
      "tz": "Europe\/Stockholm",
      "phone": "+46(0)470758500",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.smalandairport.se",
      "runway_length": "7546",
      "elev": "610",
      "icao": "ESMX",
      "direct_flights": "9",
      "carriers": "5"
    },
    {
      "code": "WAA",
      "lat": "65.6112",
      "lon": "-168.098",
      "name": "Wales",
      "city": "Wales",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2513417",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2600",
      "elev": "25",
      "icao": "",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "WAE",
      "lat": "23.9175",
      "lon": "45.1202",
      "name": "Saudi Arabia",
      "city": "Wadi Ad Dawasir",
      "state": "",
      "country": "Saudi Arabia",
      "woeid": "23424938",
      "tz": "Asia\/Riyadh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WAG",
      "lat": "-39.9635",
      "lon": "175.029",
      "name": "Wanganui Airport",
      "city": "Wanganui",
      "state": "Manawatu Wanganui",
      "country": "New Zealand",
      "woeid": "12515174",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4500",
      "elev": "28",
      "icao": "NZWU",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WAQ",
      "lat": "-15.7137",
      "lon": "46.3155",
      "name": "Mahajanga",
      "city": "Antsalova",
      "state": "Mahajanga",
      "country": "Madagascar",
      "woeid": "1361960",
      "tz": "Indian\/Antananarivo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3018",
      "elev": "551",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WAT",
      "lat": "52.1972",
      "lon": "-7.0889",
      "name": "Waterford Airport",
      "city": "Waterford",
      "state": "",
      "country": "Ireland",
      "woeid": "12512728",
      "tz": "Europe\/Dublin",
      "phone": "+35351875589",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.flywaterford.com",
      "runway_length": "4701",
      "elev": "122",
      "icao": "EIWF",
      "direct_flights": "8",
      "carriers": "1"
    },
    {
      "code": "WAW",
      "lat": "52.17",
      "lon": "20.9725",
      "name": "Okecie International Airport",
      "city": "Warsaw",
      "state": "Mazowieckie",
      "country": "Poland",
      "woeid": "12515363",
      "tz": "Europe\/Warsaw",
      "phone": "+48 (22) 650 42 20",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.lotnisko-chopina.pl\/",
      "runway_length": "9852",
      "elev": "354",
      "icao": "EPWA",
      "direct_flights": "102",
      "carriers": "60"
    },
    {
      "code": "WBB",
      "lat": "63.52",
      "lon": "-162.279",
      "name": "Stebbins",
      "city": "Stebbins",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2499397",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2800",
      "elev": "26",
      "icao": "",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "WBQ",
      "lat": "66.359",
      "lon": "-147.396",
      "name": "Alaska",
      "city": "Beaver",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2347560",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3800",
      "elev": "365",
      "icao": "PAWB",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "WDH",
      "lat": "-22.4792",
      "lon": "17.4722",
      "name": "Windhoek Airport",
      "city": "",
      "state": "Khomas",
      "country": "Namibia",
      "woeid": "12522994",
      "tz": "Africa\/Windhoek",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "15010",
      "elev": "5640",
      "icao": "FYWH",
      "direct_flights": "9",
      "carriers": "7"
    },
    {
      "code": "WEF",
      "lat": "36.3306",
      "lon": "118.761",
      "name": "Shandong",
      "city": "Weifang",
      "state": "Shandong",
      "country": "China",
      "woeid": "12578014",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "WEH",
      "lat": "36.3306",
      "lon": "118.761",
      "name": "Shandong",
      "city": "Weihai",
      "state": "Shandong",
      "country": "China",
      "woeid": "12578014",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "7"
    },
    {
      "code": "WEI",
      "lat": "-12.6773",
      "lon": "141.923",
      "name": "Weipa Aerodrome",
      "city": "Weipa",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510809",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5400",
      "elev": "59",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WGA",
      "lat": "-35.159",
      "lon": "147.467",
      "name": "Wagga Wagga Airport",
      "city": "Forest Hill",
      "state": "New South Wales",
      "country": "Australia",
      "woeid": "12510802",
      "tz": "Australia\/Sydney",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5800",
      "elev": "726",
      "icao": "YSWG",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "WGE",
      "lat": "-30.0331",
      "lon": "148.118",
      "name": "Walgett Airport",
      "city": "Walgett",
      "state": "New South Wales",
      "country": "Australia",
      "woeid": "12510803",
      "tz": "Australia\/Sydney",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5335",
      "elev": "439",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "WGP",
      "lat": "-9.6722",
      "lon": "120.308",
      "name": "Mau Hau Airport",
      "city": "Waingapu",
      "state": "Nusa Tengarra Timur",
      "country": "Indonesia",
      "woeid": "12513482",
      "tz": "Asia\/Makassar",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "39",
      "icao": "WRRW",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "WHF",
      "lat": "21.7929",
      "lon": "31.3713",
      "name": "Wadi Halfa'",
      "city": "Wadi Halfa",
      "state": "Ash Shamaliyah",
      "country": "Sudan",
      "woeid": "1437351",
      "tz": "Africa\/Khartoum",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WHK",
      "lat": "-37.9213",
      "lon": "176.919",
      "name": "Whakatane Airport",
      "city": "Whakatane",
      "state": "Bay Of Plenty",
      "country": "New Zealand",
      "woeid": "12515177",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4200",
      "elev": "20",
      "icao": "NZWK",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WIC",
      "lat": "58.4538",
      "lon": "-3.08767",
      "name": "Wick Airport",
      "city": "Wick",
      "state": "Scotland",
      "country": "United Kingdom",
      "woeid": "22494239",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5279",
      "elev": "127",
      "icao": "",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "WIL",
      "lat": "-1.31888",
      "lon": "36.8157",
      "name": "Nairobi Wilson Airport",
      "city": "Nairobi",
      "state": "Nairobi Area",
      "country": "Kenya",
      "woeid": "12514078",
      "tz": "Africa\/Nairobi",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4800",
      "elev": "5536",
      "icao": "HKNW",
      "direct_flights": "9",
      "carriers": "2"
    },
    {
      "code": "WIN",
      "lat": "-22.3635",
      "lon": "143.082",
      "name": "Winton Aerodrome",
      "city": "Corfield",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510815",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4600",
      "elev": "638",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WJA",
      "lat": "7.46667",
      "lon": "168.567",
      "name": "Woja",
      "city": "Woja",
      "state": "Ailinglaplap",
      "country": "Marshall Islands",
      "woeid": "22503997",
      "tz": "Pacific\/Kwajalein",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WJU",
      "lat": "37.4904",
      "lon": "127.989",
      "name": "Wonju Airport",
      "city": "WonJu",
      "state": "Kangwon-Do",
      "country": "South Korea",
      "woeid": "28808960",
      "tz": "Asia\/Seoul",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WKA",
      "lat": "-44.725",
      "lon": "169.243",
      "name": "Wanaka Airport",
      "city": "Wanaka",
      "state": "Otago",
      "country": "New Zealand",
      "woeid": "12515173",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2545",
      "elev": "1143",
      "icao": "NZWF",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WKJ",
      "lat": "45.4041",
      "lon": "141.801",
      "name": "Wakkanai Airport",
      "city": "Wakkanai-shi",
      "state": "Hokkaido Prefecture",
      "country": "Japan",
      "woeid": "28360512",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3940",
      "elev": "24",
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "WKK",
      "lat": "59.2667",
      "lon": "-158.633",
      "name": "Aleknagik",
      "city": "Aleknagik",
      "state": "Alaska",
      "country": "United States",
      "woeid": "12799627",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1800",
      "elev": "75",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WLG",
      "lat": "-41.3295",
      "lon": "174.806",
      "name": "Wellington International Airport",
      "city": "Wellington",
      "state": "Wellington",
      "country": "New Zealand",
      "woeid": "12515175",
      "tz": "Pacific\/Auckland",
      "phone": "+64 4 385 5100",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.wellington-airport.co.nz\/",
      "runway_length": "6350",
      "elev": "40",
      "icao": "NZWN",
      "direct_flights": "26",
      "carriers": "14"
    },
    {
      "code": "WLH",
      "lat": "-15.1468",
      "lon": "167.038",
      "name": "Vanuatu",
      "city": "Walaha",
      "state": "",
      "country": "Vanuatu",
      "woeid": "23424907",
      "tz": "Pacific\/Efate",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2165",
      "elev": "151",
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "WLK",
      "lat": "62.8903",
      "lon": "-149.054",
      "name": "Alaska",
      "city": "Selawik",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2347560",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1900",
      "elev": "25",
      "icao": "PASK",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "WLS",
      "lat": "-13.3",
      "lon": "-176.167",
      "name": "Wallis Island",
      "city": "Wallis Island",
      "state": "Hahake",
      "country": "Wallis and Futuna Islands",
      "woeid": "22503938",
      "tz": "Pacific\/Wallis",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6561",
      "elev": "75",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "WMK",
      "lat": "55.7389",
      "lon": "-132.258",
      "name": "Meyers Chuck",
      "city": "Meyers Chuck",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2449996",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WMN",
      "lat": "-15.4367",
      "lon": "49.6883",
      "name": "Maroantsetra Airport",
      "city": "Maroantsetra",
      "state": "Toamasina",
      "country": "Madagascar",
      "woeid": "12514702",
      "tz": "Indian\/Antananarivo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4265",
      "elev": "13",
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "WMO",
      "lat": "64.6811",
      "lon": "-163.408",
      "name": "White Mountain",
      "city": "White Mountain",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2519364",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1900",
      "elev": "262",
      "icao": "",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "WMR",
      "lat": "-16.167",
      "lon": "49.7556",
      "name": "Mananara",
      "city": "Mananara",
      "state": "Toamasina",
      "country": "Madagascar",
      "woeid": "1362331",
      "tz": "Indian\/Antananarivo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2543",
      "elev": "10",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WNA",
      "lat": "60.7049",
      "lon": "-161.766",
      "name": "Napaskiak",
      "city": "Napakiak",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2456992",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2142",
      "elev": "20",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "WNN",
      "lat": "52.9228",
      "lon": "-89.1934",
      "name": "Wunnummin Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524051",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "WNP",
      "lat": "13.5872",
      "lon": "123.27",
      "name": "Naga Airport",
      "city": "Pili",
      "state": "Bicol Region",
      "country": "Philippines",
      "woeid": "12515636",
      "tz": "Asia\/Manila",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4205",
      "elev": "141",
      "icao": "",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "WNR",
      "lat": "-25.4104",
      "lon": "142.67",
      "name": "Windorah Airport",
      "city": "Tanbar",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510814",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4508",
      "elev": "452",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WNS",
      "lat": "26.2194",
      "lon": "68.3922",
      "name": "Nawabshah Airport",
      "city": "Nawabshah",
      "state": "Sindh",
      "country": "Pakistan",
      "woeid": "12515254",
      "tz": "Asia\/Karachi",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "9022",
      "elev": "93",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WNZ",
      "lat": "28.0025",
      "lon": "120.648",
      "name": "Wenzhou Airport",
      "city": "Wenzhou",
      "state": "Zhejiang",
      "country": "China",
      "woeid": "12523455",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "27",
      "carriers": "14"
    },
    {
      "code": "WPM",
      "lat": "-8.79133",
      "lon": "142.869",
      "name": "Wipim",
      "city": "Wipim",
      "state": "Western",
      "country": "Papua New Guinea",
      "woeid": "1061923",
      "tz": "Pacific\/Port_Moresby",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1640",
      "elev": "100",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WRE",
      "lat": "-35.7705",
      "lon": "174.36",
      "name": "Whangarei Airport",
      "city": "Whangarei",
      "state": "Northland",
      "country": "New Zealand",
      "woeid": "12515178",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3600",
      "elev": "133",
      "icao": "NZWR",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WRG",
      "lat": "56.4876",
      "lon": "-132.378",
      "name": "Wrangell Airport",
      "city": "Wrangell",
      "state": "Alaska",
      "country": "United States",
      "woeid": "12522517",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Sea Plane Base",
      "email": "",
      "url": "",
      "runway_length": "6003",
      "elev": "44",
      "icao": "PAWG",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "WRL",
      "lat": "43.9747",
      "lon": "-107.953",
      "name": "Worland Municipal Airport",
      "city": "Worland",
      "state": "Wyoming",
      "country": "United States",
      "woeid": "12522515",
      "tz": "America\/Denver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7004",
      "elev": "4245",
      "icao": "KWRL",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "WRO",
      "lat": "51.1039",
      "lon": "16.8985",
      "name": "Strachowice Airport",
      "city": "Wroclaw",
      "state": "Dolnosl\u0105skie",
      "country": "Poland",
      "woeid": "12515390",
      "tz": "Europe\/Warsaw",
      "phone": "+48 713581100",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.airport.wroclaw.pl",
      "runway_length": null,
      "elev": null,
      "icao": "EPWR",
      "direct_flights": "26",
      "carriers": "12"
    },
    {
      "code": "WSN",
      "lat": "58.7285",
      "lon": "-157.014",
      "name": "Naknek",
      "city": "South Naknek",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2456884",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2200",
      "elev": "130",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WST",
      "lat": "41.3492",
      "lon": "-71.8115",
      "name": "Westerly State Airport",
      "city": "Westerly",
      "state": "Rhode Island",
      "country": "United States",
      "woeid": "12522397",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "81",
      "icao": "KWST",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WSX",
      "lat": "48.8907",
      "lon": "-116.982",
      "name": "United States",
      "city": "Westsound",
      "state": "Washington",
      "country": "United States",
      "woeid": "23424977",
      "tz": "America\/Los_Angeles",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "WSZ",
      "lat": "-41.7383",
      "lon": "171.58",
      "name": "Westport Airport",
      "city": "Westport",
      "state": "West Coast",
      "country": "New Zealand",
      "woeid": "12515176",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4200",
      "elev": "13",
      "icao": "NZWS",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WTK",
      "lat": "62.8903",
      "lon": "-149.054",
      "name": "Alaska",
      "city": "Noatak",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2347560",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2200",
      "elev": "99",
      "icao": "PAWN",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "WTL",
      "lat": "60.3432",
      "lon": "-162.664",
      "name": "Tuntutuliak",
      "city": "Tuntutuliak",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2508647",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "4"
    },
    {
      "code": "WTS",
      "lat": "-18.9076",
      "lon": "47.5277",
      "name": "Antananarivo",
      "city": "Tsiroanomandidy",
      "state": "Antananarivo",
      "country": "Madagascar",
      "woeid": "1358594",
      "tz": "Indian\/Antananarivo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "WUA",
      "lat": "34.668",
      "lon": "104.166",
      "name": "Wu Hai",
      "city": "Wu Hai",
      "state": "",
      "country": "China",
      "woeid": "23424781",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WUH",
      "lat": "30.5069",
      "lon": "114.31",
      "name": "Wuchang Nanhu Airport",
      "city": "Wuhan",
      "state": "Hubei",
      "country": "China",
      "woeid": "12512230",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "ZHHH",
      "direct_flights": "42",
      "carriers": "19"
    },
    {
      "code": "WUN",
      "lat": "20.0564",
      "lon": "78.9567",
      "name": "",
      "city": "Wiluna",
      "state": "Western Australia",
      "country": "Australia",
      "woeid": "1106702",
      "tz": "Australia\/Perth",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5308",
      "elev": "1635",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "WUS",
      "lat": "34.668",
      "lon": "104.166",
      "name": "Wuyishan",
      "city": "Wuyishan",
      "state": "",
      "country": "China",
      "woeid": "23424781",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "11",
      "carriers": "5"
    },
    {
      "code": "WUX",
      "lat": "31.574",
      "lon": "120.288",
      "name": "Wuxi",
      "city": "Wuxi",
      "state": "Jiangsu",
      "country": "China",
      "woeid": "2137083",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "13",
      "carriers": "5"
    },
    {
      "code": "WVB",
      "lat": "22.9667",
      "lon": "14.4833",
      "name": "Rooikop",
      "city": "Walvis Bay",
      "state": "Murzuq",
      "country": "South Africa",
      "woeid": "1353302",
      "tz": "Africa\/Windhoek",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7000",
      "elev": "290",
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "WWK",
      "lat": "-3.5858",
      "lon": "143.667",
      "name": "Wewak International Airport",
      "city": "Wewak",
      "state": "East Sepik",
      "country": "Papua New Guinea",
      "woeid": "12515480",
      "tz": "Pacific\/Port_Moresby",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "19",
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "WWP",
      "lat": "62.8903",
      "lon": "-149.054",
      "name": "Alaska",
      "city": "Whale Pass",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2347560",
      "tz": "America\/Juneau",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WWT",
      "lat": "62.8903",
      "lon": "-149.054",
      "name": "Alaska",
      "city": "Newtok",
      "state": "Alaska",
      "country": "United States",
      "woeid": "2347560",
      "tz": "America\/Nome",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2153",
      "elev": "25",
      "icao": "",
      "direct_flights": "3",
      "carriers": "4"
    },
    {
      "code": "WXN",
      "lat": "30.811",
      "lon": "108.375",
      "name": "Wanxian",
      "city": "Wanxian",
      "state": "Chongqing",
      "country": "China",
      "woeid": "2158443",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "WYA",
      "lat": "-33.0608",
      "lon": "137.516",
      "name": "Whyalla Airport",
      "city": "Whyalla",
      "state": "South Australia",
      "country": "Australia",
      "woeid": "12510812",
      "tz": "Australia\/Adelaide",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5530",
      "elev": "41",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "WYS",
      "lat": "44.6876",
      "lon": "-111.114",
      "name": "Yellowstone Airport",
      "city": "West Yellowstone",
      "state": "Montana",
      "country": "United States",
      "woeid": "12522531",
      "tz": "America\/Denver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8399",
      "elev": "6644",
      "icao": "KWYS",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XAD",
      "lat": "44.4547",
      "lon": "-79.5139",
      "name": "Churchill Rail Station",
      "city": "Oro-Medonte",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "23397643",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XAP",
      "lat": "-27.1325",
      "lon": "-52.6611",
      "name": "Chapeco Airport",
      "city": "Chapeco",
      "state": "Santa Catarina",
      "country": "Brazil",
      "woeid": "12511090",
      "tz": "America\/Sao_Paulo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "2133",
      "icao": "SBCH",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "XAW",
      "lat": "46.7052",
      "lon": "-80.9219",
      "name": "Capreol Rail Service",
      "city": "Capreol",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "232",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XAX",
      "lat": "45.4389",
      "lon": "-73.7302",
      "name": "Dorval Rail Station",
      "city": "Dorval",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "417",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XAZ",
      "lat": "47.9955",
      "lon": "-66.6672",
      "name": "Cambellton",
      "city": "Cambellton",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "4392",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XBE",
      "lat": "53.9214",
      "lon": "-90.985",
      "name": "Bearskin Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524054",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3600",
      "elev": "826",
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XBJ",
      "lat": "32.8983",
      "lon": "59.2631",
      "name": "Birjand Airport",
      "city": "Birjand",
      "state": "Khorasan",
      "country": "Iran",
      "woeid": "12513708",
      "tz": "Asia\/Tehran",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6890",
      "elev": "4823",
      "icao": "OIMB",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "XBR",
      "lat": "44.6353",
      "lon": "-75.7502",
      "name": "Brockville Airport",
      "city": "Brockville",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511588",
      "tz": "",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3516",
      "elev": "398",
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XCH",
      "lat": "-10.4503",
      "lon": "105.689",
      "name": "Christmas Island Airport",
      "city": "The Settlement",
      "state": "",
      "country": "Christmas Island",
      "woeid": "12514237",
      "tz": "Indian\/Christmas",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XCI",
      "lat": "49.3771",
      "lon": "-84.7493",
      "name": "Ontario",
      "city": "Oro-Medonte",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "2344922",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XCM",
      "lat": "42.4",
      "lon": "-82.1833",
      "name": "Chatham Airport",
      "city": "Chatham",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524057",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3838",
      "elev": "650",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XCR",
      "lat": "48.7761",
      "lon": "4.1917",
      "name": "Europort Vatry",
      "city": "Coole",
      "state": "Champagne-Ardenne",
      "country": "France",
      "woeid": "12512984",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XDB",
      "lat": "50.6333",
      "lon": "3.06667",
      "name": "Lille-Europe Railway Station",
      "city": "Lille",
      "state": "Nord-Pas-de-Calais",
      "country": "France",
      "woeid": "12725933",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "11"
    },
    {
      "code": "XDD",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "",
      "city": "",
      "state": "",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XDG",
      "lat": "44.6462",
      "lon": "-63.5739",
      "name": "Halifax Rail Service",
      "city": "Halifax",
      "state": "Nova Scotia",
      "country": "Canada",
      "woeid": "4177",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XDH",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "",
      "city": "",
      "state": "",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XDM",
      "lat": "45.8527",
      "lon": "-72.3912",
      "name": "Drummondville Airport",
      "city": "Drummondville",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511642",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XDP",
      "lat": "46.0884",
      "lon": "-64.7783",
      "name": "Moncton Rail Service",
      "city": "Moncton",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "3796",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XDQ",
      "lat": "42.9869",
      "lon": "-81.2462",
      "name": "London Ontario Rail Service",
      "city": "London",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4063",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "1"
    },
    {
      "code": "XDS",
      "lat": "49.3771",
      "lon": "-84.7493",
      "name": "Ontario",
      "city": "Oro-Medonte",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "2344922",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "4"
    },
    {
      "code": "XDU",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "",
      "city": "",
      "state": "",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XDV",
      "lat": "53.9167",
      "lon": "-1.76667",
      "name": "",
      "city": "Prince George",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "9537",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XDW",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "Canada",
      "city": "Prince Rupert",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XDX",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "Sarina Rail Station",
      "city": "Sarina",
      "state": "",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XDY",
      "lat": "46.5",
      "lon": "-80.9667",
      "name": "",
      "city": "Sudbury",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "3198",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XDZ",
      "lat": "53.8134",
      "lon": "-101.25",
      "name": "The Pas Rail Service",
      "city": "The Pas",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "2331",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XEA",
      "lat": "49.2604",
      "lon": "-123.114",
      "name": "Vancouver Rail Service",
      "city": "Vancouver",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "9807",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XEC",
      "lat": "42.3178",
      "lon": "-83.0339",
      "name": "Windsor Ontario Rail Service",
      "city": "Windsor",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4079",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XED",
      "lat": "48.8669",
      "lon": "2.78194",
      "name": "Disneyland Railway Station",
      "city": "Paris",
      "state": "\u00cele-de-France",
      "country": "France",
      "woeid": "615702",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XEE",
      "lat": "47.6602",
      "lon": "-72.2718",
      "name": "Lac Edouard Rail Service",
      "city": "Lac Edouard",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "788",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XEF",
      "lat": "49.8994",
      "lon": "-97.1407",
      "name": "Winnipeg Rail Service",
      "city": "Winnipeg",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "4079",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XEG",
      "lat": "44.2315",
      "lon": "-76.4793",
      "name": "Kingston Rail Service",
      "city": "Kingston",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4145",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "XEH",
      "lat": "48.9974",
      "lon": "-123.821",
      "name": "Ladysmith Rail Service",
      "city": "Ladysmith",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "9830",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XEK",
      "lat": "54.4994",
      "lon": "-105.684",
      "name": "Saskatchewan",
      "city": "Melville",
      "state": "Saskatchewan",
      "country": "Canada",
      "woeid": "2344925",
      "tz": "America\/Regina",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XEL",
      "lat": "53.8901",
      "lon": "-68.4293",
      "name": "Quebec",
      "city": "New Carlisle",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "2344924",
      "tz": "America\/Montreal",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XER",
      "lat": "48.5851",
      "lon": "7.73643",
      "name": "Strasbourg Bus Station",
      "city": "Strasbourg",
      "state": "Alsace",
      "country": "France",
      "woeid": "627791",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Bus Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XET",
      "lat": "51.5039",
      "lon": "0.04981",
      "name": "London City Airport",
      "city": "London",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "22475376",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XEV",
      "lat": "59.3322",
      "lon": "18.0624",
      "name": "Stockholm Central Station",
      "city": "Stockholm",
      "state": null,
      "country": "Sweden",
      "woeid": "906057",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "11",
      "carriers": "2"
    },
    {
      "code": "XEZ",
      "lat": "59.1972",
      "lon": "17.624",
      "name": "Sodertalje",
      "city": "Sodertalje",
      "state": "Stockholm",
      "country": "Sweden",
      "woeid": "905000",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "10",
      "carriers": "1"
    },
    {
      "code": "XFD",
      "lat": "43.3701",
      "lon": "-80.9819",
      "name": "Stratford",
      "city": "Stratford",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4054",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XFE",
      "lat": "47.9204",
      "lon": "-74.6246",
      "name": "Parent Rail Service",
      "city": "Parent",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "3418",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XFG",
      "lat": "48.5247",
      "lon": "-64.2139",
      "name": "Perce Rail Service",
      "city": "Perce",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "3729",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XFJ",
      "lat": "59.3723",
      "lon": "16.5165",
      "name": "Eskilstuna Station",
      "city": "Eskilstuna",
      "state": null,
      "country": "Sweden",
      "woeid": "889077",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XFK",
      "lat": "48.3907",
      "lon": "-77.2423",
      "name": "Senneterre Rail Service",
      "city": "Senneterre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "3259",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XFL",
      "lat": "46.5657",
      "lon": "-72.7254",
      "name": "Shawinigan Rail Station",
      "city": "Shawinigan",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12697118",
      "tz": "America\/Montreal",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XFM",
      "lat": "48.6537",
      "lon": "-123.615",
      "name": "Shawnigan Rail Service",
      "city": "Cowichan Valley",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "23405345",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XFN",
      "lat": "32.05",
      "lon": "112.017",
      "name": "Xiangfan",
      "city": "Xiangfan",
      "state": "\u6e56\u5317\u7701",
      "country": "China",
      "woeid": "12713146",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "XFP",
      "lat": "55.5966",
      "lon": "13.0016",
      "name": "Malm\u00f6 Station",
      "city": "Malmo",
      "state": null,
      "country": "Sweden",
      "woeid": "898091",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XFQ",
      "lat": "47.9",
      "lon": "-73.75",
      "name": "Weymont Rail Service",
      "city": "Weymont",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "23395517",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XFR",
      "lat": "55.6034",
      "lon": "13.0008",
      "name": "Malmo South Railway",
      "city": "Malmo",
      "state": "",
      "country": "Sweden",
      "woeid": "898091",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XFS",
      "lat": "45.3116",
      "lon": "-74.6366",
      "name": "Alexandria",
      "city": "Alexandria",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "3557",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "XFU",
      "lat": "60.3432",
      "lon": "17.5143",
      "name": "Tierp Station",
      "city": "Tierp",
      "state": null,
      "country": "Sweden",
      "woeid": "907416",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XFV",
      "lat": "43.1414",
      "lon": "-80.2617",
      "name": "Brantford",
      "city": "Brantford",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4059",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XFW",
      "lat": "53.5356",
      "lon": "9.8342",
      "name": "Finkenwerder Airport",
      "city": "Hamburg",
      "state": "Hamburg",
      "country": "Germany",
      "woeid": "12513120",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "EDHI",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XFY",
      "lat": "46.7869",
      "lon": "-71.3708",
      "name": "Sainte Foy Rail Service",
      "city": "Quebec",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "4384",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XFZ",
      "lat": "46.7137",
      "lon": "-71.2715",
      "name": "Charny",
      "city": "Charny",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "268",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XGC",
      "lat": "55.7062",
      "lon": "13.1876",
      "name": "Lund",
      "city": "Lund",
      "state": null,
      "country": "Sweden",
      "woeid": "897819",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XGJ",
      "lat": "39.8753",
      "lon": "20.005",
      "name": "Cobourg Rail Station",
      "city": "Cobourg",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4367",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XGK",
      "lat": "47.8382",
      "lon": "-64.5545",
      "name": "Coteau Rail Station",
      "city": "Coteau",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "23392633",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XGM",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "Grantham",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XGR",
      "lat": "58.5344",
      "lon": "-65.8892",
      "name": "Kangiqsualujjuaq Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524059",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XGY",
      "lat": "49.3771",
      "lon": "-84.7493",
      "name": "Ontario",
      "city": "Grimsby",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "2344922",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XHJ",
      "lat": "50.7781",
      "lon": "6.08849",
      "name": "Railway Station",
      "city": "Aix La Chapelle",
      "state": "North-Rhine-Westphalia",
      "country": "Germany",
      "woeid": "633175",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XHK",
      "lat": "44.9913",
      "lon": "4.97828",
      "name": "Valence Station",
      "city": "Valence",
      "state": "Midi-Pyr\u00e9n\u00e9es",
      "country": "France",
      "woeid": "22885996",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "8"
    },
    {
      "code": "XHM",
      "lat": "46.1847",
      "lon": "-62.5339",
      "name": "Georgetown Rail Station",
      "city": "Georgetown",
      "state": "Prince Edward Island",
      "country": "Canada",
      "woeid": "3793",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XHN",
      "lat": "50.501",
      "lon": "4.47677",
      "name": "Belgium",
      "city": "Liege",
      "state": "Wallonie",
      "country": "Belgium",
      "woeid": "23424757",
      "tz": "Europe\/Brussels",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XHS",
      "lat": "54.4857",
      "lon": "-126.556",
      "name": "British Columbia",
      "city": "Chemainus",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "2344916",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XIA",
      "lat": "43.5661",
      "lon": "-80.1989",
      "name": "Guelph Airport",
      "city": "Guelph",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511904",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XIB",
      "lat": "49.3771",
      "lon": "-84.7493",
      "name": "Ontario",
      "city": "Ingersoll",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "2344922",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XIC",
      "lat": "27.9935",
      "lon": "102.179",
      "name": "Xichang North Airport",
      "city": "Xichang",
      "state": "Sichuan",
      "country": "China",
      "woeid": "12512245",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "ZUXC",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "XID",
      "lat": "45.2906",
      "lon": "-74.8516",
      "name": "Maxville Rail Station",
      "city": "Maxville",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "3559",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XIF",
      "lat": "49.3771",
      "lon": "-84.7493",
      "name": "Ontario",
      "city": "Napanee",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "2344922",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XIL",
      "lat": "43.9667",
      "lon": "116.067",
      "name": "Xilinhot Airport",
      "city": "Xilin Hot",
      "state": "Nei Mongol",
      "country": "China",
      "woeid": "12512248",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XIM",
      "lat": "53.8901",
      "lon": "-68.4293",
      "name": "Quebec",
      "city": "Saint Hyacinthe",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "2344924",
      "tz": "America\/Montreal",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XIO",
      "lat": "46.1445",
      "lon": "-66.6164",
      "name": "St Marys Rail Station",
      "city": "St Marys",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "29374756",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XIP",
      "lat": "43.1301",
      "lon": "-80.7566",
      "name": "Woodstock Rail Service",
      "city": "Woodstock",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4060",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XIT",
      "lat": "51.5039",
      "lon": "0.04981",
      "name": "London City Airport",
      "city": "London",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "22475376",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "XIY",
      "lat": "34.3667",
      "lon": "108.7",
      "name": "Hsien Yang Airport",
      "city": "Xianyang",
      "state": "Shaanxi",
      "country": "China",
      "woeid": "12512075",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "ZLXY",
      "direct_flights": "44",
      "carriers": "23"
    },
    {
      "code": "XJL",
      "lat": "53.8901",
      "lon": "-68.4293",
      "name": "Quebec",
      "city": "Joliette",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "2344924",
      "tz": "America\/Montreal",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XJQ",
      "lat": "48.4339",
      "lon": "-71.3432",
      "name": "Jonquiere Rail Station",
      "city": "Jonquiere",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "3404",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XKH",
      "lat": "19.5",
      "lon": "103",
      "name": "Xieng Khouang",
      "city": "Xieng Khouang",
      "state": "Xiangkhoang",
      "country": "Lao People's Democratic Republic",
      "woeid": "12848854",
      "tz": "Asia\/Vientiane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10500",
      "elev": "3500",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XKL",
      "lat": "3.13636",
      "lon": "101.689",
      "name": "Kuala Lumpur Central Station",
      "city": "Kuala Lumpur",
      "state": "Wilayah Persekutuan",
      "country": "Malaysia",
      "woeid": "22342065",
      "tz": "Asia\/Kuala_Lumpur",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XKS",
      "lat": "53.513",
      "lon": "-88.6475",
      "name": "Kasabonika Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524061",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "630",
      "icao": "CYAQ",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "XKV",
      "lat": "45.8997",
      "lon": "-64.3746",
      "name": "Sackville Rail Station",
      "city": "Sackville",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "3798",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XLB",
      "lat": "58.65",
      "lon": "-97.3667",
      "name": "Lac Brochet",
      "city": "Lac Brochet",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524062",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3480",
      "elev": "1200",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XLJ",
      "lat": "46.8",
      "lon": "-71.25",
      "name": "Quebec Stn. Rail Svce.",
      "city": "Quebec",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12697028",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XLM",
      "lat": "45.5",
      "lon": "-73.5833",
      "name": "St Lambert Rail Svce.",
      "city": "Montreal",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12697167",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XLQ",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "",
      "city": "Guildwood",
      "state": "",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XLS",
      "lat": "16.0503",
      "lon": "-16.4603",
      "name": "Saint Louis Airport",
      "city": "",
      "state": "St-Louis",
      "country": "Senegal",
      "woeid": "12517509",
      "tz": "Africa\/Dakar",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6372",
      "elev": "13",
      "icao": "GOSS",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XLV",
      "lat": "49.3771",
      "lon": "-84.7493",
      "name": "Ontario",
      "city": "Niagara Falls",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "2344922",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XLY",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "Aldershot Rail Station",
      "city": "Aldershot",
      "state": "",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XLZ",
      "lat": "44.7274",
      "lon": "-63.5876",
      "name": "Nova Scotia",
      "city": "Truro",
      "state": "Nova Scotia",
      "country": "Canada",
      "woeid": "2344921",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XMH",
      "lat": "-14.4252",
      "lon": "-146.068",
      "name": "Manihi Airport",
      "city": "Manihi",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "12512825",
      "tz": "Pacific\/Gambier",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3937",
      "elev": "10",
      "icao": "NTGI",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XMN",
      "lat": "24.5333",
      "lon": "118.117",
      "name": "Xiamen Airport",
      "city": "Xiamen",
      "state": "Fujian",
      "country": "China",
      "woeid": "12523266",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7054",
      "elev": "59",
      "icao": "ZSAM",
      "direct_flights": "55",
      "carriers": "33"
    },
    {
      "code": "XMS",
      "lat": "-2.335",
      "lon": "-78.1669",
      "name": "Macas Airport",
      "city": "Z\u00fa\u00f1ac",
      "state": "Morona Santiago",
      "country": "Ecuador",
      "woeid": "12512640",
      "tz": "America\/Guayaquil",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8366",
      "elev": "3281",
      "icao": "SEMC",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XMY",
      "lat": "-10.4833",
      "lon": "142.45",
      "name": "Yam Island",
      "city": "Yam Island",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "28645136",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XNA",
      "lat": "36.2756",
      "lon": "-94.2955",
      "name": "Northwest Arkansas Regional Airport",
      "city": "Bentonville",
      "state": "Arkansas",
      "country": "United States",
      "woeid": "29388192",
      "tz": "America\/Chicago",
      "phone": "479-205-1000",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.nwara.com\/",
      "runway_length": "8800",
      "elev": "1286",
      "icao": "KXNA",
      "direct_flights": "15",
      "carriers": "13"
    },
    {
      "code": "XNB",
      "lat": "-3.08333",
      "lon": "-67.9333",
      "name": "Sinop Airport",
      "city": "Santo Ant\u00f4nio do I\u00e7\u00e1",
      "state": "Amazonas",
      "country": "Brazil",
      "woeid": "12523221",
      "tz": "America\/Porto_Velho",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XNM",
      "lat": "52.9206",
      "lon": "-1.075",
      "name": "Nottingham Airport",
      "city": "Nottingham",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "12518136",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "XNN",
      "lat": "36.5678",
      "lon": "101.862",
      "name": "Xining Airport",
      "city": "Xining",
      "state": "Qinghai",
      "country": "China",
      "woeid": "12512251",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "11",
      "carriers": "8"
    },
    {
      "code": "XNO",
      "lat": "54.2",
      "lon": "-1.26",
      "name": "",
      "city": "Northallerton",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "30597",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KXNO",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XNV",
      "lat": "52.5214",
      "lon": "-1.46445",
      "name": "Nuneaton Rail Station",
      "city": "Nuneaton",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "30733",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "XNY",
      "lat": "42.8767",
      "lon": "-77.8826",
      "name": "York",
      "city": "New York",
      "state": "New York",
      "country": "United States",
      "woeid": "2524848",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XOK",
      "lat": "49.3771",
      "lon": "-84.7493",
      "name": "Ontario",
      "city": "Oakville",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "2344922",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XOP",
      "lat": "46.1325",
      "lon": "-0.17616",
      "name": "Poitou-Charentes",
      "city": "Poitiers",
      "state": "Poitou-Charentes",
      "country": "France",
      "woeid": "7153327",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "10"
    },
    {
      "code": "XPB",
      "lat": "49.3203",
      "lon": "-124.322",
      "name": "Parksville Rail Service",
      "city": "Parksville",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12523349",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XPF",
      "lat": "54.6643",
      "lon": "-2.75747",
      "name": "Penrith Rail Station",
      "city": "Penrith",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "31772",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XPG",
      "lat": "48.8805",
      "lon": "2.35459",
      "name": "Gare du Nord Rail Stn",
      "city": "Paris",
      "state": "\u00cele-de-France",
      "country": "France",
      "woeid": "20068147",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "XPJ",
      "lat": "45.6333",
      "lon": "-0.75",
      "name": "Montpellier Railway Station",
      "city": "Montpellier",
      "state": "Poitou-Charentes",
      "country": "France",
      "woeid": "12723386",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "8"
    },
    {
      "code": "XPN",
      "lat": "43.6843",
      "lon": "-79.7588",
      "name": "",
      "city": "Brampton",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4431",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XPQ",
      "lat": "3",
      "lon": "101.4",
      "name": "",
      "city": "Port Klang",
      "state": "Selangor",
      "country": "Malaysia",
      "woeid": "1152513",
      "tz": "Asia\/Kuala_Lumpur",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XPT",
      "lat": "53.758",
      "lon": "-2.70573",
      "name": "Preston Rail Station",
      "city": "Preston",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "32566",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "9",
      "carriers": "1"
    },
    {
      "code": "XPX",
      "lat": "45.6585",
      "lon": "-73.5484",
      "name": "Pointe-aux-Trembles Rail Station",
      "city": "Pointe-aux-Trembles",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "1217",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XQE",
      "lat": "54.3139",
      "lon": "-2.23218",
      "name": "United Kingdom",
      "city": "London",
      "state": null,
      "country": "United Kingdom",
      "woeid": "23424975",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XQG",
      "lat": "55.7714",
      "lon": "-2.00702",
      "name": "Berwick Station",
      "city": "Berwick",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "12444",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XQH",
      "lat": "54.3139",
      "lon": "-2.23218",
      "name": "United Kingdom",
      "city": "Nottingham",
      "state": null,
      "country": "United Kingdom",
      "woeid": "23424975",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "XQL",
      "lat": "54.0445",
      "lon": "-2.79903",
      "name": "Lancaster Rail Station",
      "city": "Lancaster",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "25701",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XQP",
      "lat": "9.4442",
      "lon": "-84.1311",
      "name": "Quepos Managua Airport",
      "city": "Quepos",
      "state": "Puntarenas",
      "country": "Costa Rica",
      "woeid": "12512440",
      "tz": "America\/Costa_Rica",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3600",
      "elev": "105",
      "icao": "MRQP",
      "direct_flights": "7",
      "carriers": "2"
    },
    {
      "code": "XQU",
      "lat": "49.3384",
      "lon": "-124.392",
      "name": "Qualicum Beach Airport",
      "city": "Qualicum Beach",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12524067",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2900",
      "elev": "200",
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "XRC",
      "lat": "53.3304",
      "lon": "-2.70902",
      "name": "Runcorn Rail Station",
      "city": "Runcorn",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "33759",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XRF",
      "lat": "43.4844",
      "lon": "5.37588",
      "name": "Marseille Railway",
      "city": "Marseille",
      "state": "Centre",
      "country": "France",
      "woeid": "610264",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "9"
    },
    {
      "code": "XRP",
      "lat": "46.4864",
      "lon": "-65.0255",
      "name": "Pine Ridge Rail Station",
      "city": "Pine Ridge",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "23393083",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XRU",
      "lat": "52.3703",
      "lon": "-1.26071",
      "name": "Rugby Rail Station",
      "city": "Rugby",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "33744",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "9",
      "carriers": "1"
    },
    {
      "code": "XRY",
      "lat": "36.7497",
      "lon": "-6.06054",
      "name": "Jerez Airport",
      "city": "Jerez",
      "state": "Andalucia",
      "country": "Spain",
      "woeid": "12517549",
      "tz": "Europe\/Madrid",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7546",
      "elev": "85",
      "icao": "LEJR",
      "direct_flights": "16",
      "carriers": "14"
    },
    {
      "code": "XSC",
      "lat": "21.5158",
      "lon": "-71.5297",
      "name": "South Caicos Airport",
      "city": "Cockburn Harbour",
      "state": "South and East Caicos",
      "country": "Turks And Caicos Islands",
      "woeid": "12517846",
      "tz": "America\/Grand_Turk",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "5",
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "XSH",
      "lat": "47.6441",
      "lon": "1.59046",
      "name": "Centre",
      "city": "Tours",
      "state": "Centre",
      "country": "France",
      "woeid": "7153314",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "10"
    },
    {
      "code": "XSI",
      "lat": "56.7819",
      "lon": "-98.9558",
      "name": "South Indian Lake Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524069",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2600",
      "elev": "948",
      "icao": "",
      "direct_flights": "1",
      "carriers": "2"
    },
    {
      "code": "XSP",
      "lat": "1.4167",
      "lon": "103.869",
      "name": "Seletar Airport",
      "city": "Singapore",
      "state": "Central Singapore",
      "country": "Singapore",
      "woeid": "12517523",
      "tz": "Asia\/Singapore",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5354",
      "elev": "35",
      "icao": "WSSL",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XSR",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "Salisbury",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XTG",
      "lat": "-27.9829",
      "lon": "143.812",
      "name": "Thargomindah Aerodrome",
      "city": "Thargomindah",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "12510794",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "YTGM",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XTK",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "Thirsk",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XTL",
      "lat": "58.5999",
      "lon": "-98.349",
      "name": "Tadoule Lake Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524070",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYBQ",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XTY",
      "lat": "42.9432",
      "lon": "-81.6198",
      "name": "Strathroy Rail Station",
      "city": "Strathroy",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12697816",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XUZ",
      "lat": "32.9444",
      "lon": "119.119",
      "name": "Jiangsu",
      "city": "Xuzhou",
      "state": "Jiangsu",
      "country": "China",
      "woeid": "12577994",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "13",
      "carriers": "7"
    },
    {
      "code": "XVA",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "Stockport",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XVB",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "Stafford",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "10",
      "carriers": "1"
    },
    {
      "code": "XVC",
      "lat": "54.3139",
      "lon": "-2.23218",
      "name": "United Kingdom",
      "city": "Crewe",
      "state": null,
      "country": "United Kingdom",
      "woeid": "23424975",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "15",
      "carriers": "1"
    },
    {
      "code": "XVG",
      "lat": "46.9929",
      "lon": "-94.2075",
      "name": "Longville Municipal Airport",
      "city": "Longville",
      "state": "Minnesota",
      "country": "United States",
      "woeid": "12520699",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KXVG",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XVH",
      "lat": "54.3139",
      "lon": "-2.23218",
      "name": "United Kingdom",
      "city": "Peterborough",
      "state": null,
      "country": "United Kingdom",
      "woeid": "23424975",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "11",
      "carriers": "1"
    },
    {
      "code": "XVJ",
      "lat": "51.9056",
      "lon": "-0.18868",
      "name": "Stevenage Rail Station",
      "city": "Stevenage",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "36094",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XVU",
      "lat": "54.7775",
      "lon": "-1.57461",
      "name": "Durham Rail Station",
      "city": "Durham",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "18760",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XVV",
      "lat": "44.161",
      "lon": "-77.3819",
      "name": "Belleville Rail Service",
      "city": "Belleville",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4107",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XVW",
      "lat": "57.0988",
      "lon": "-3.99274",
      "name": "",
      "city": "Belleville",
      "state": "Scotland",
      "country": "United Kingdom",
      "woeid": "11627",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XWD",
      "lat": "54.7447",
      "lon": "-2.14264",
      "name": "Wakefield Westgate Rail Station",
      "city": "Wakefield Westgate",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "39929",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XWH",
      "lat": "53.0294",
      "lon": "-2.17507",
      "name": "Stroke on Trent Rail Station",
      "city": "Stroke on Trent",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "36240",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "XWK",
      "lat": "56.2667",
      "lon": "15.2667",
      "name": "Karlskrona Rail Svc.",
      "city": "Karlskrona",
      "state": null,
      "country": "Sweden",
      "woeid": "902730",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XWL",
      "lat": "57.7013",
      "lon": "11.9669",
      "name": "Gothenburg",
      "city": "Gothenburg",
      "state": "",
      "country": "Sweden",
      "woeid": "890869",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "XWM",
      "lat": "59.0667",
      "lon": "15.1126",
      "name": "Hallsberg Rail Station",
      "city": "Hallsberg",
      "state": "",
      "country": "Sweden",
      "woeid": "892152",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "1"
    },
    {
      "code": "XWN",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "Warrington",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XWP",
      "lat": "62.1984",
      "lon": "17.5514",
      "name": "Sweden",
      "city": "Hassleholm",
      "state": null,
      "country": "Sweden",
      "woeid": "23424954",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "XWQ",
      "lat": "62.1984",
      "lon": "17.5514",
      "name": "Sweden",
      "city": "Enkoping",
      "state": null,
      "country": "Sweden",
      "woeid": "23424954",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XWR",
      "lat": "59.2707",
      "lon": "15.2175",
      "name": "Orebro Railway Station",
      "city": "Orebro",
      "state": "Orebro",
      "country": "Sweden",
      "woeid": "900751",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XWS",
      "lat": "54.3139",
      "lon": "-2.23218",
      "name": "United Kingdom",
      "city": "Swindon",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "23424975",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XWV",
      "lat": "57.1079",
      "lon": "12.249",
      "name": "Varberg Rail Station",
      "city": "Varberg",
      "state": "",
      "country": "Sweden",
      "woeid": "909053",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XWY",
      "lat": "42.9414",
      "lon": "-82.1204",
      "name": "Wyoming Rail Station",
      "city": "Wyoming",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "1964",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XWZ",
      "lat": "62.1984",
      "lon": "17.5514",
      "name": "Sweden",
      "city": "Nykoping",
      "state": null,
      "country": "Sweden",
      "woeid": "23424954",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XXA",
      "lat": "62.1984",
      "lon": "17.5514",
      "name": "Sweden",
      "city": "Alvesta",
      "state": "",
      "country": "Sweden",
      "woeid": "23424954",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "XXD",
      "lat": "59.2359",
      "lon": "14.4305",
      "name": "Degerfors Rail Station",
      "city": "Degerfors",
      "state": "",
      "country": "Sweden",
      "woeid": "888282",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XXK",
      "lat": "59.0167",
      "lon": "16.2167",
      "name": "Katrineholm",
      "city": "Katrineholm",
      "state": "",
      "country": "Sweden",
      "woeid": "895148",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XXM",
      "lat": "58.3259",
      "lon": "15.1313",
      "name": "",
      "city": "Mjolby",
      "state": "Ostergotland",
      "country": "Sweden",
      "woeid": "898538",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XXN",
      "lat": "46.4931",
      "lon": "-90.4134",
      "name": "Riyadh Air Base",
      "city": "Riyadh",
      "state": "",
      "country": "Saudi Arabia",
      "woeid": "1939753",
      "tz": "Asia\/Riyadh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "OERY",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XXO",
      "lat": "60.7313",
      "lon": "14.9974",
      "name": "Leksand Rail Station",
      "city": "Leksand",
      "state": "",
      "country": "Sweden",
      "woeid": "896880",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XXT",
      "lat": "43.6167",
      "lon": "7.05",
      "name": "Sophia Antipolis Heliport",
      "city": "Valbonne",
      "state": "Provence-alpes-cote d'Azur",
      "country": "France",
      "woeid": "12523829",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XXU",
      "lat": "62.1984",
      "lon": "17.5514",
      "name": "Sweden",
      "city": "Hedemora",
      "state": "",
      "country": "Sweden",
      "woeid": "23424954",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XXZ",
      "lat": "62.3889",
      "lon": "17.3069",
      "name": "Sundsvall Railway Station",
      "city": "Sundsvall",
      "state": "",
      "country": "Sweden",
      "woeid": "906742",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XYA",
      "lat": "-9.06667",
      "lon": "159.233",
      "name": "Yandina",
      "city": "Yandina",
      "state": "Guadalcanal",
      "country": "Solomon Islands",
      "woeid": "1020497",
      "tz": "Pacific\/Guadalcanal",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5921",
      "elev": "20",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XYB",
      "lat": "60.4838",
      "lon": "15.4344",
      "name": "Borlange",
      "city": "Borl\u00e4nge",
      "state": null,
      "country": "Sweden",
      "woeid": "887274",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XYC",
      "lat": "62.1984",
      "lon": "17.5514",
      "name": "Sweden",
      "city": "Herrljunga",
      "state": "",
      "country": "Sweden",
      "woeid": "23424954",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "900",
      "elev": "480",
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XYD",
      "lat": "45.75",
      "lon": "4.85",
      "name": "Lyon Part-Dieu Railway Station",
      "city": "Lyon",
      "state": "Rhone-Alpes",
      "country": "France",
      "woeid": "55863207",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "10"
    },
    {
      "code": "XYF",
      "lat": "58.1621",
      "lon": "13.5548",
      "name": "Falkoping Rail Station",
      "city": "Falkoping",
      "state": "Vastra Gotaland",
      "country": "Sweden",
      "woeid": "889227",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "XYH",
      "lat": "56.0439",
      "lon": "12.6959",
      "name": "Helsingborg Railway",
      "city": "Helsingborg",
      "state": "",
      "country": "Sweden",
      "woeid": "892828",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XYI",
      "lat": "62.1984",
      "lon": "17.5514",
      "name": "Sweden",
      "city": "Flen",
      "state": "",
      "country": "Sweden",
      "woeid": "23424954",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XYK",
      "lat": "58.5844",
      "lon": "16.1925",
      "name": "Norrkoping Railway Service",
      "city": "Norrkoping",
      "state": "Ostergotland",
      "country": "Sweden",
      "woeid": "899981",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "XYN",
      "lat": "59.3091",
      "lon": "14.1061",
      "name": "Kristinehamn",
      "city": "Kristinehamn",
      "state": "",
      "country": "Sweden",
      "woeid": "895938",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XYP",
      "lat": "60.1269",
      "lon": "16.2161",
      "name": "Kyrlbo",
      "city": "Avesta Krylbo",
      "state": "Dalarna",
      "country": "Sweden",
      "woeid": "896048",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XYQ",
      "lat": "59.6833",
      "lon": "15.8167",
      "name": "Angelholm Railway Svc.",
      "city": "Angelholm\/Helsingborg",
      "state": null,
      "country": "Sweden",
      "woeid": "892828",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XYX",
      "lat": "59.92",
      "lon": "16.606",
      "name": "Sala",
      "city": "Sala",
      "state": "",
      "country": "Sweden",
      "woeid": "892828",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "XYY",
      "lat": "59.6767",
      "lon": "12.6425",
      "name": "Arvika Airport",
      "city": "Arvika",
      "state": "",
      "country": "Sweden",
      "woeid": "12517611",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XYZ",
      "lat": "62.6335",
      "lon": "17.9377",
      "name": "Harnosand Rail Station",
      "city": "Harnosand",
      "state": "Vasternorrland",
      "country": "Sweden",
      "woeid": "892478",
      "tz": "Europe\/Stockholm",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XZB",
      "lat": "45.3135",
      "lon": "-75.089",
      "name": "Casselman Rail Station",
      "city": "Casselman",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "3372",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XZC",
      "lat": "42.7425",
      "lon": "-81.7128",
      "name": "",
      "city": "Glencoe",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "4073",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XZJ",
      "lat": "37.7167",
      "lon": "28.9667",
      "name": "",
      "city": "Rail (Generic)",
      "state": "",
      "country": "Japan",
      "woeid": "23424856",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XZL",
      "lat": "53.3078",
      "lon": "-113.584",
      "name": "Edmonton International Airport",
      "city": "Edmonton",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511646",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XZM",
      "lat": "-7.45",
      "lon": "-70.55",
      "name": "Macau Ferry",
      "city": "Macau",
      "state": "Amazonas",
      "country": "Macao",
      "woeid": "12824753",
      "tz": "America\/Rio_Branco",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "XZN",
      "lat": "43.9487",
      "lon": "4.80601",
      "name": "Avignon",
      "city": "Avignon",
      "state": "Provence-alpes-cote d'Azur",
      "country": "France",
      "woeid": "577605",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "8"
    },
    {
      "code": "XZO",
      "lat": "59.9123",
      "lon": "10.75",
      "name": "Oslo Central Station",
      "city": "Oslo",
      "state": "",
      "country": "Norway",
      "woeid": "862592",
      "tz": "Europe\/Oslo",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XZU",
      "lat": "37.2997",
      "lon": "-92.3047",
      "name": "Off line Point",
      "city": "Rail (Generic)",
      "state": "Missouri",
      "country": "United States",
      "woeid": "2478178",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Off-line Point",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "XZV",
      "lat": "46.4833",
      "lon": "-0.633333",
      "name": "TGV Station",
      "city": "Toulon",
      "state": "Pays de la Loire",
      "country": "France",
      "woeid": "624561",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "YAA",
      "lat": "52.4539",
      "lon": "-125.304",
      "name": "Anahim Lake Airport",
      "city": "Alexis Creek",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511568",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3346",
      "elev": "3700",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YAC",
      "lat": "51.6667",
      "lon": "-91.8333",
      "name": "Cat Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524072",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "1343",
      "icao": "CYAC",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YAG",
      "lat": "48.6498",
      "lon": "-93.4279",
      "name": "Fort Frances Municipal Airport",
      "city": "Fort Frances",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511663",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4500",
      "elev": "1122",
      "icao": "CYAG",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YAK",
      "lat": "59.5103",
      "lon": "-139.668",
      "name": "Yakutat Airport",
      "city": "Yakutat",
      "state": "Alaska",
      "country": "United States",
      "woeid": "12522527",
      "tz": "America\/Anchorage",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7813",
      "elev": "33",
      "icao": "PAYA",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "YAM",
      "lat": "46.4853",
      "lon": "-84.5002",
      "name": "Sault Ste Marie Airport",
      "city": "Sault Ste. Marie",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511827",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "630",
      "icao": "CYAM",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YAO",
      "lat": "3.8336",
      "lon": "11.5236",
      "name": "Yaounde Airport",
      "city": "Yaounde",
      "state": "Centre",
      "country": "Cameroon",
      "woeid": "12512354",
      "tz": "Africa\/Douala",
      "phone": "+2372.2233602",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "6562",
      "elev": "2464",
      "icao": "FKKY",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YAP",
      "lat": "9.48333",
      "lon": "138.083",
      "name": "Yap International Airport",
      "city": "Colonia",
      "state": "Yap",
      "country": "Federated States of Micronesia",
      "woeid": "12523267",
      "tz": "Pacific\/Ponape",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4820",
      "elev": "51",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YAT",
      "lat": "52.9338",
      "lon": "-82.392",
      "name": "Attawapiskat Airport",
      "city": "Winisk",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524078",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "30",
      "icao": "CYAT",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YAX",
      "lat": "53.2519",
      "lon": "-89.565",
      "name": "Angling Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524079",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYAX",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YAY",
      "lat": "51.3883",
      "lon": "-56.0901",
      "name": "St Anthony Airport",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511843",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "15",
      "icao": "CYAY",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YAZ",
      "lat": "49.0797",
      "lon": "-125.769",
      "name": "Tofino Airport",
      "city": "Lake Cowichan",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511879",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYAZ",
      "direct_flights": "0",
      "carriers": "0"
    },
    {
      "code": "YBB",
      "lat": "68.5333",
      "lon": "-89.8167",
      "name": "Pelly Bay Townsite Airport",
      "city": "Cambridge Bay",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12523269",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4590",
      "elev": "50",
      "icao": "KGRK",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YBC",
      "lat": "49.1368",
      "lon": "-68.1995",
      "name": "Baie Comeau Airport",
      "city": "Betsiamites",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511572",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "71",
      "icao": "CYBC",
      "direct_flights": "5",
      "carriers": "3"
    },
    {
      "code": "YBG",
      "lat": "48.3368",
      "lon": "-70.9998",
      "name": "Bagotville Airport",
      "city": "Saguenay",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511571",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10000",
      "elev": "521",
      "icao": "CYBG",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YBI",
      "lat": "53.4552",
      "lon": "-55.7653",
      "name": "Black Tickle Airport",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524082",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "67",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YBK",
      "lat": "64.3003",
      "lon": "-96.0846",
      "name": "Baker Lake Airport",
      "city": "Chesterfield Inlet",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524243",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4200",
      "elev": "59",
      "icao": "CYBK",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "YBL",
      "lat": "49.954",
      "lon": "-125.27",
      "name": "Campbell River Airport",
      "city": "Gold River",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511597",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "346",
      "icao": "CYBL",
      "direct_flights": "3",
      "carriers": "4"
    },
    {
      "code": "YBP",
      "lat": "28.766",
      "lon": "104.623",
      "name": "Yibin",
      "city": "Yibin",
      "state": "Sichuan",
      "country": "China",
      "woeid": "2158444",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "3"
    },
    {
      "code": "YBR",
      "lat": "49.9036",
      "lon": "-99.943",
      "name": "Brandon Airport",
      "city": "Killarney",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511586",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "http:\/\/www.brandon.ca\/welcome.nsf\/0be477a354605b4d86256b6500798d",
      "runway_length": "6500",
      "elev": "1343",
      "icao": "CYBR",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YBT",
      "lat": "57.8833",
      "lon": "-101.683",
      "name": "Brochet",
      "city": "Brochet",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "169",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYBT",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YBV",
      "lat": "52.4333",
      "lon": "-97.0333",
      "name": "Berens River Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524086",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "728",
      "icao": "CYBV",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YBW",
      "lat": "48.7512",
      "lon": "-123.225",
      "name": "",
      "city": "Bedwell Harbor",
      "state": "",
      "country": "Canada",
      "woeid": "12524103",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Harbours",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YBX",
      "lat": "51.4436",
      "lon": "-57.1861",
      "name": "Lourdes-De-Blanc-Sablon Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511736",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4500",
      "elev": "117",
      "icao": "CYBX",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YBZ",
      "lat": "43.6382",
      "lon": "-79.3466",
      "name": "Toronto Downtown Airport",
      "city": "Toronto",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12523339",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "2"
    },
    {
      "code": "YCA",
      "lat": "49.6833",
      "lon": "-125",
      "name": "Courtenay Airport",
      "city": "Courtenay",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12523298",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "1974",
      "elev": "9",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YCB",
      "lat": "69.0981",
      "lon": "-105.134",
      "name": "Cambridge Bay Airport",
      "city": "Cambridge Bay",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12523271",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "90",
      "icao": "CYCB",
      "direct_flights": "6",
      "carriers": "3"
    },
    {
      "code": "YCC",
      "lat": "45.092",
      "lon": "-74.56",
      "name": "Cornwall Regional Airport",
      "city": "Moose Creek",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511626",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "175",
      "icao": "CYCC",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YCD",
      "lat": "49.0521",
      "lon": "-123.874",
      "name": "Nanaimo Airport",
      "city": "Nanaimo",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511768",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "99",
      "icao": "CYCD",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YCG",
      "lat": "49.3002",
      "lon": "-117.637",
      "name": "Castlegar Airport",
      "city": "Castlegar",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511602",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5300",
      "elev": "1624",
      "icao": "CYCG",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YCK",
      "lat": "67.0454",
      "lon": "-125.853",
      "name": "Colville Lake Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524090",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2400",
      "elev": "900",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YCM",
      "lat": "43.1893",
      "lon": "-79.1709",
      "name": "St Catharines Airport",
      "city": "Fonthill",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511845",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "321",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YCO",
      "lat": "67.8182",
      "lon": "-115.147",
      "name": "Coppermine Airport",
      "city": "Cambridge Bay",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524091",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "74",
      "icao": "CYCO",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YCR",
      "lat": "54.6042",
      "lon": "-97.7607",
      "name": "Cross Lake Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524092",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "709",
      "icao": "CYCR",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YCS",
      "lat": "63.3358",
      "lon": "-90.734",
      "name": "Chesterfield Inlet Airport",
      "city": "Chesterfield Inlet",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524093",
      "tz": "America\/Winnipeg",
      "phone": "867-898-9940",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "35",
      "icao": "CYCS",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YCU",
      "lat": "61.3167",
      "lon": "-98.5",
      "name": "Cullaton Lake Airport",
      "city": "Chesterfield Inlet",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524094",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "8",
      "carriers": "5"
    },
    {
      "code": "YCY",
      "lat": "70.4833",
      "lon": "-68.5167",
      "name": "Clyde River Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524096",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "100",
      "icao": "CYCY",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YDA",
      "lat": "64.0448",
      "lon": "-139.126",
      "name": "Dawson Airport",
      "city": "Dawson",
      "state": "Yukon Territory",
      "country": "Canada",
      "woeid": "12524097",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "1211",
      "icao": "CYDA",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YDF",
      "lat": "49.2085",
      "lon": "-57.3999",
      "name": "Deer Lake Airport",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511635",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "72",
      "icao": "CYDF",
      "direct_flights": "8",
      "carriers": "5"
    },
    {
      "code": "YDN",
      "lat": "51.1025",
      "lon": "-100.06",
      "name": "Dauphin Airport",
      "city": "Dauphin",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511630",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "999",
      "icao": "CYDN",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YDP",
      "lat": "56.5333",
      "lon": "-61.6667",
      "name": "Nain Airport",
      "city": "Happy Valley-Goose Bay",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524102",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2000",
      "elev": "500",
      "icao": "CYDP",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "YDQ",
      "lat": "55.739",
      "lon": "-120.187",
      "name": "Dawson Creek Airport",
      "city": "Dawson Creek",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511631",
      "tz": "America\/Dawson_Creek",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "2148",
      "icao": "CYDQ",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YEG",
      "lat": "53.3078",
      "lon": "-113.584",
      "name": "Edmonton International Airport",
      "city": "Leduc",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511646",
      "tz": "America\/Edmonton",
      "phone": "(780) 890-8900",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.edmontonairports.com",
      "runway_length": "11000",
      "elev": "2373",
      "icao": "CYEG",
      "direct_flights": "44",
      "carriers": "27"
    },
    {
      "code": "YEI",
      "lat": "40.2546",
      "lon": "29.5629",
      "name": "",
      "city": "Bursa",
      "state": "Bursa",
      "country": "Turkey",
      "woeid": "2347273",
      "tz": "Europe\/Istanbul",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "9818",
      "elev": "764",
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "YEK",
      "lat": "61.1019",
      "lon": "-94.0622",
      "name": "Arviat Airport",
      "city": "Chesterfield Inlet",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524110",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "32",
      "icao": "CYEK",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YER",
      "lat": "56",
      "lon": "-87.6333",
      "name": "Fort Severn Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524113",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "40",
      "icao": "CYER",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YES",
      "lat": "34.4382",
      "lon": "-104.611",
      "name": "",
      "city": "Yasouj",
      "state": "",
      "country": "Iran",
      "woeid": "23424851",
      "tz": "Asia\/Tehran",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YEV",
      "lat": "68.3063",
      "lon": "-133.497",
      "name": "Inuvik Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12511705",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "224",
      "icao": "CYEV",
      "direct_flights": "11",
      "carriers": "5"
    },
    {
      "code": "YFA",
      "lat": "52.2417",
      "lon": "-81.5917",
      "name": "Fort Albany Airport",
      "city": "Winisk",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524115",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "10",
      "icao": "CYFA",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YFB",
      "lat": "63.7514",
      "lon": "-68.5353",
      "name": "Iqaluit Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12511707",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8200",
      "elev": "110",
      "icao": "CYFB",
      "direct_flights": "12",
      "carriers": "3"
    },
    {
      "code": "YFC",
      "lat": "45.873",
      "lon": "-66.5296",
      "name": "Fredericton Airport",
      "city": "Fredericton",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "12511671",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "67",
      "icao": "CYFC",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YFH",
      "lat": "51.5466",
      "lon": "-87.9859",
      "name": "Fort Hope Airport",
      "city": "Marathon",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524118",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "905",
      "icao": "CYFH",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YFJ",
      "lat": "64.1904",
      "lon": "-114.183",
      "name": "Snare Lake",
      "city": "Snare Lake",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "29374024",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YFO",
      "lat": "54.7483",
      "lon": "-101.83",
      "name": "Flin Flon Airport",
      "city": "Flin Flon",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511657",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "997",
      "icao": "CYFO",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YFS",
      "lat": "61.7556",
      "lon": "-121.238",
      "name": "Fort Simpson Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12511667",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "554",
      "icao": "CYFS",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YFX",
      "lat": "52.3598",
      "lon": "-55.6684",
      "name": "Fox Harbour Aerodrome",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524121",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Harbours",
      "email": "",
      "url": "",
      "runway_length": "2200",
      "elev": "77",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YGB",
      "lat": "49.6942",
      "lon": "-124.516",
      "name": "Gillies Bay Airport",
      "city": "Gibsons",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511870",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "300",
      "icao": "CYGB",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YGG",
      "lat": "48.85",
      "lon": "-123.5",
      "name": "Ganges Harbor Airport",
      "city": "Saltspring Island",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12524124",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Harbours",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YGH",
      "lat": "66.2653",
      "lon": "-128.617",
      "name": "Fort Good Hope Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524125",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "215",
      "icao": "CYGH",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YGJ",
      "lat": "35.4943",
      "lon": "133.237",
      "name": "Yonago Airport",
      "city": "Sakaiminato-shi",
      "state": "Tottori Prefecture",
      "country": "Japan",
      "woeid": "12513987",
      "tz": "Asia\/Tokyo",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4920",
      "elev": "20",
      "icao": "",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "YGK",
      "lat": "44.2333",
      "lon": "-76.5833",
      "name": "Kingston Airport",
      "city": "Kingston",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511717",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.cityofkingston.ca\/residents\/transportation\/airport\/in",
      "runway_length": "5000",
      "elev": "305",
      "icao": "CYGK",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YGL",
      "lat": "53.6256",
      "lon": "-77.705",
      "name": "La Grande Riviere Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511720",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6500",
      "elev": "638",
      "icao": "CYGL",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YGO",
      "lat": "54.55",
      "lon": "-94.4833",
      "name": "Gods Lake Narrows Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524127",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2280",
      "elev": "620",
      "icao": "CYGO",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YGP",
      "lat": "48.7782",
      "lon": "-64.4738",
      "name": "Gaspe Airport",
      "city": "Gasp\u00e9",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511674",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYGP",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YGR",
      "lat": "47.42",
      "lon": "-61.7743",
      "name": "Iles de la Madeleine Airport",
      "city": "Fatima",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511701",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3725",
      "elev": "34",
      "icao": "CYGR",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "YGT",
      "lat": "69.3674",
      "lon": "-81.8254",
      "name": "Igloolik Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524129",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3700",
      "elev": "174",
      "icao": "CYGT",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YGV",
      "lat": "50.2811",
      "lon": "-63.6111",
      "name": "Harve-St-Pierre Airport",
      "city": "Havre St Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511691",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "108",
      "icao": "CYGV",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YGW",
      "lat": "55.2825",
      "lon": "-77.7583",
      "name": "Kuujjuarapik Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524130",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "60",
      "icao": "CYGW",
      "direct_flights": "7",
      "carriers": "2"
    },
    {
      "code": "YGX",
      "lat": "56.35",
      "lon": "-94.7167",
      "name": "Gillam Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524131",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "475",
      "icao": "CYGX",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YGZ",
      "lat": "76.425",
      "lon": "-82.9458",
      "name": "Grise Fiord Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524133",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2000",
      "elev": "146",
      "icao": "CYGZ",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YHA",
      "lat": "52.5333",
      "lon": "-56.3",
      "name": "Port Hope Simpson Aerodrome",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524134",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "353",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YHB",
      "lat": "52.8208",
      "lon": "-102.324",
      "name": "Hudson Bay Airport",
      "city": "Melfort",
      "state": "Saskatchewan",
      "country": "Canada",
      "woeid": "12511698",
      "tz": "America\/Regina",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "1175",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YHD",
      "lat": "49.8284",
      "lon": "-92.7465",
      "name": "Dryden Regional Airport",
      "city": "Dryden",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511643",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "1354",
      "icao": "CYHD",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YHG",
      "lat": "52.7667",
      "lon": "-56.1",
      "name": "Charlottetown Airport",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12523297",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "165",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YHI",
      "lat": "70.7766",
      "lon": "-117.831",
      "name": "Holman Airport",
      "city": "Holman",
      "state": "",
      "country": "Canada",
      "woeid": "12524137",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4300",
      "elev": "117",
      "icao": "CYHI",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YHK",
      "lat": "68.6337",
      "lon": "-95.8561",
      "name": "Gjoa Haven Airport",
      "city": "Cambridge Bay",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524138",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4400",
      "elev": "150",
      "icao": "CYHK",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YHM",
      "lat": "43.1632",
      "lon": "-79.9266",
      "name": "Hamilton Airport",
      "city": "Beamsville",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511688",
      "tz": "America\/Toronto",
      "phone": "(905) 679-1999",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.flyhi.ca",
      "runway_length": "8000",
      "elev": "780",
      "icao": "CYHM",
      "direct_flights": "15",
      "carriers": "4"
    },
    {
      "code": "YHO",
      "lat": "55.4667",
      "lon": "-60.2167",
      "name": "Hopedale Airport",
      "city": "Happy Valley-Goose Bay",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524139",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYHO",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YHP",
      "lat": "52.0801",
      "lon": "-94.3094",
      "name": "Poplar Hill Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524140",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YHR",
      "lat": "50.5013",
      "lon": "-59.4799",
      "name": "Harrington Harbour Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524141",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4500",
      "elev": "30",
      "icao": "CYHR",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "YHS",
      "lat": "49.4735",
      "lon": "-123.747",
      "name": "Sechelt Water Aerodrome",
      "city": "Gibsons",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12524142",
      "tz": "America\/Vancouver",
      "phone": "604-885-9017",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2400",
      "elev": "250",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YHU",
      "lat": "45.5087",
      "lon": "-73.4302",
      "name": "Montreal St Hubert Airport",
      "city": "St-Hubert",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511759",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "7840",
      "elev": "90",
      "icao": "CYHU",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YHY",
      "lat": "60.8392",
      "lon": "-115.781",
      "name": "Hay River Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12511692",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "543",
      "icao": "CYHY",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YHZ",
      "lat": "44.8868",
      "lon": "-63.5154",
      "name": "Halifax International Airport",
      "city": "Fall River",
      "state": "Nova Scotia",
      "country": "Canada",
      "woeid": "12511686",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.hiaa.ca",
      "runway_length": "8800",
      "elev": "477",
      "icao": "CYHZ",
      "direct_flights": "41",
      "carriers": "23"
    },
    {
      "code": "YIF",
      "lat": "51.2117",
      "lon": "-58.6592",
      "name": "Pakuashipi Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511844",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3900",
      "elev": "15",
      "icao": "CYIF",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YIH",
      "lat": "30.9007",
      "lon": "111.06",
      "name": "China",
      "city": "Yichang",
      "state": "Hubei",
      "country": "China",
      "woeid": "23424781",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "10",
      "carriers": "8"
    },
    {
      "code": "YIK",
      "lat": "62.4137",
      "lon": "-77.9323",
      "name": "Ivujivik Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524146",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": "139",
      "icao": "CYIK",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YIN",
      "lat": "43.9375",
      "lon": "81.3029",
      "name": "Yining",
      "city": "Yining",
      "state": "Xinjiang",
      "country": "China",
      "woeid": "23424781",
      "tz": "Asia\/Urumqi",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YIO",
      "lat": "72.6806",
      "lon": "-77.9981",
      "name": "Pond Inlet Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524147",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "188",
      "icao": "CYIO",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YIP",
      "lat": "42.2385",
      "lon": "-83.5467",
      "name": "Willow Run Airport",
      "city": "Ypsilanti",
      "state": "Michigan",
      "country": "United States",
      "woeid": "12522472",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "7522",
      "elev": "716",
      "icao": "KYIP",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YIV",
      "lat": "53.859",
      "lon": "-94.6296",
      "name": "Island Lake-Garden Hill Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524148",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "776",
      "icao": "CYIV",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YIW",
      "lat": "0.688365",
      "lon": "129.154",
      "name": "",
      "city": "Yiwu",
      "state": "Zhejiang",
      "country": "China",
      "woeid": "2132647",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "3"
    },
    {
      "code": "YJT",
      "lat": "48.5456",
      "lon": "-58.5626",
      "name": "Stephenville International Airport",
      "city": "Stephenville",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511856",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10000",
      "elev": "84",
      "icao": "CYJT",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YKA",
      "lat": "50.7054",
      "lon": "-120.442",
      "name": "Kamloops Airport",
      "city": "Kamloops",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511710",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "1134",
      "icao": "CYKA",
      "direct_flights": "6",
      "carriers": "5"
    },
    {
      "code": "YKF",
      "lat": "43.45",
      "lon": "-80.4833",
      "name": "Kitchener Airport",
      "city": "Kitchener",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524154",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.waterlooairport.ca\/",
      "runway_length": "5200",
      "elev": "1040",
      "icao": "CYKF",
      "direct_flights": "5",
      "carriers": "5"
    },
    {
      "code": "YKG",
      "lat": "60.0199",
      "lon": "-69.9964",
      "name": "Kangirsuk Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524155",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YKL",
      "lat": "54.8056",
      "lon": "-66.8067",
      "name": "Schefferville Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511828",
      "tz": "America\/Iqaluit",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "1712",
      "icao": "CYKL",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YKM",
      "lat": "46.5703",
      "lon": "-120.54",
      "name": "Yakima Air Terminal",
      "city": "Yakima",
      "state": "Washington",
      "country": "United States",
      "woeid": "12522526",
      "tz": "America\/Los_Angeles",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7603",
      "elev": "1095",
      "icao": "KYKM",
      "direct_flights": "2",
      "carriers": "7"
    },
    {
      "code": "YKQ",
      "lat": "51.485",
      "lon": "-78.7483",
      "name": "Waskaganish Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524158",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": null,
      "icao": "CYKQ",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "YKS",
      "lat": "62.0953",
      "lon": "129.767",
      "name": "Yakutsk Airport",
      "city": "Yakutsk",
      "state": "Sakha",
      "country": "Russia",
      "woeid": "12517227",
      "tz": "Asia\/Yakutsk",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1155",
      "elev": "322",
      "icao": "",
      "direct_flights": "21",
      "carriers": "7"
    },
    {
      "code": "YKT",
      "lat": "52.5995",
      "lon": "-128.529",
      "name": "Klemtu Water Aerodrome",
      "city": "Masset",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12524159",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YKU",
      "lat": "53.8167",
      "lon": "-79",
      "name": "Chisasibi Aerodrome",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524160",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "22",
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YLC",
      "lat": "62.85",
      "lon": "-69.8833",
      "name": "Lake Harbour Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524162",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1700",
      "elev": "200",
      "icao": "CYLC",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YLE",
      "lat": "63.15",
      "lon": "-117.267",
      "name": "Lac la Martre Aerodrome",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524163",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2200",
      "elev": "890",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YLH",
      "lat": "52.2069",
      "lon": "-87.9102",
      "name": "Lansdowne House Airport",
      "city": "Marathon",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524165",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "822",
      "icao": "CYLH",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YLL",
      "lat": "53.3122",
      "lon": "-110.073",
      "name": "Lloydminster Airport",
      "city": "Vegreville",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511734",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5577",
      "elev": "2194",
      "icao": "CYLL",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YLQ",
      "lat": "47.4149",
      "lon": "-72.7872",
      "name": "La Tuque Airport",
      "city": "La Tuque",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511724",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "548",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YLW",
      "lat": "49.9509",
      "lon": "-119.382",
      "name": "Kelowna International Airport",
      "city": "Kelowna",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511712",
      "tz": "America\/Vancouver",
      "phone": "(250) 765-5125",
      "type": "Airports",
      "email": "",
      "url": "www.ylw.aero",
      "runway_length": "5350",
      "elev": "1128",
      "icao": "CYLW",
      "direct_flights": "9",
      "carriers": "7"
    },
    {
      "code": "YMH",
      "lat": "52.3",
      "lon": "-55.8333",
      "name": "Mary's Harbour Airport",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524173",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYMH",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YMM",
      "lat": "56.6512",
      "lon": "-111.246",
      "name": "Fort Mcmurray Airport",
      "city": "Fort Chipewyan",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511665",
      "tz": "America\/Edmonton",
      "phone": "780 791-2448",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.fortmcmurrayairport.com\/",
      "runway_length": "6000",
      "elev": "1211",
      "icao": "CYMM",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YMN",
      "lat": "55.0872",
      "lon": "-59.1714",
      "name": "Makkovik Airport",
      "city": "Happy Valley-Goose Bay",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524175",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "234",
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YMO",
      "lat": "51.2855",
      "lon": "-80.6131",
      "name": "Moosonee Airport",
      "city": "Winisk",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511762",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "26",
      "icao": "CYMO",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YMT",
      "lat": "49.7793",
      "lon": "-74.5295",
      "name": "A\u00e9roport de Chapais-Chibougamau",
      "city": "M\u00e9tabetchouan",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511612",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3850",
      "elev": "1318",
      "icao": "CYMT",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YMX",
      "lat": "45.6667",
      "lon": "-74.03",
      "name": "Mirabel International Airport",
      "city": "Mirabel",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511753",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "12000",
      "elev": "270",
      "icao": "CYMX",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YMY",
      "lat": "45.4825",
      "lon": "-73.5486",
      "name": "Downtown Rail Station",
      "city": "Montreal",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524177",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YNA",
      "lat": "50.1903",
      "lon": "-61.79",
      "name": "Natashquan Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511769",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "35",
      "icao": "CYNA",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YNB",
      "lat": "24.145",
      "lon": "38.0636",
      "name": "Yenbo Airport",
      "city": "Yanbu al Bahr",
      "state": "Al Madinah",
      "country": "Saudi Arabia",
      "woeid": "12517379",
      "tz": "Asia\/Riyadh",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10531",
      "elev": "26",
      "icao": "OEYN",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YNC",
      "lat": "52.9972",
      "lon": "-78.8333",
      "name": "Wemindji Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524178",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2300",
      "elev": "30",
      "icao": "CYNC",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YND",
      "lat": "45.5179",
      "lon": "-75.5618",
      "name": "Ottawa Gatineau Airport",
      "city": "Gatineau",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511778",
      "tz": "America\/Toronto",
      "phone": "(819)-663-0737",
      "type": "Other Airport",
      "email": "infos@ego-airport.ca",
      "url": "http:\/\/www.ego-airport.ca",
      "runway_length": "6000",
      "elev": "192",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YNE",
      "lat": "53.9833",
      "lon": "-97.8",
      "name": "Norway House Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524179",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3940",
      "elev": "730",
      "icao": "CYNE",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YNG",
      "lat": "41.2576",
      "lon": "-80.6648",
      "name": "Youngstown-Warren Regional Airport",
      "city": "Vienna",
      "state": "Ohio",
      "country": "United States",
      "woeid": "12522541",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7492",
      "elev": "1196",
      "icao": "KYNG",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YNJ",
      "lat": "42.65",
      "lon": "129.5",
      "name": "Yanji",
      "city": "Yanji",
      "state": "\u5409\u6797\u7701",
      "country": "China",
      "woeid": "12712349",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "7"
    },
    {
      "code": "YNO",
      "lat": "52.4953",
      "lon": "-92.8807",
      "name": "North Spirit Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524184",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YNP",
      "lat": "62.3587",
      "lon": "-96.5821",
      "name": "",
      "city": "Natuashish",
      "state": "",
      "country": "Canada",
      "woeid": "23424775",
      "tz": "America\/Resolute",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "26",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YNS",
      "lat": "51.6896",
      "lon": "-76.1421",
      "name": "Nemiscau Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524186",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YNT",
      "lat": "37.55",
      "lon": "121.333",
      "name": "Yantai Airport",
      "city": "Yantai",
      "state": "Shandong",
      "country": "China",
      "woeid": "12523272",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "20",
      "carriers": "9"
    },
    {
      "code": "YNY",
      "lat": "38.0481",
      "lon": "128.656",
      "name": "Yang Yang International Airport",
      "city": "Sonyang-Myeon",
      "state": "Kangwon-Do",
      "country": "South Korea",
      "woeid": "28808959",
      "tz": "Asia\/Seoul",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YNZ",
      "lat": "33.3856",
      "lon": "120.125",
      "name": "",
      "city": "Yancheng",
      "state": "Jiangsu",
      "country": "China",
      "woeid": "2137091",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YOC",
      "lat": "67.5734",
      "lon": "-139.849",
      "name": "Old Crow Airport",
      "city": "Dawson",
      "state": "Yukon Territory",
      "country": "Canada",
      "woeid": "12524187",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "824",
      "icao": "CYOC",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YOG",
      "lat": "51.6291",
      "lon": "-85.954",
      "name": "Ogoki Aerodrome",
      "city": "Marathon",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524189",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2000",
      "elev": "602",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YOH",
      "lat": "54.9357",
      "lon": "-95.2757",
      "name": "Oxford House Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524190",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "672",
      "icao": "CYOH",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YOJ",
      "lat": "58.6137",
      "lon": "-117.163",
      "name": "High Level Airport",
      "city": "Brownvale",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511694",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "1110",
      "icao": "CYOJ",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YOO",
      "lat": "43.9263",
      "lon": "-78.8959",
      "name": "Oshawa Airport",
      "city": "Oshawa",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511777",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3476",
      "elev": "458",
      "icao": "CYOO",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "YOP",
      "lat": "58.4906",
      "lon": "-119.402",
      "name": "Rainbow Lake Airport",
      "city": "Brownvale",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511807",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4500",
      "elev": "1759",
      "icao": "CYOP",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YOW",
      "lat": "45.3248",
      "lon": "-75.6666",
      "name": "Ottawa International Airport",
      "city": "Ottawa",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511779",
      "tz": "America\/Toronto",
      "phone": "(613) 248-2000",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.ottawa-airport.ca",
      "runway_length": "10000",
      "elev": "374",
      "icao": "CYOW",
      "direct_flights": "43",
      "carriers": "32"
    },
    {
      "code": "YPB",
      "lat": "49.2618",
      "lon": "-124.836",
      "name": "Port Alberni Airport",
      "city": "Lake Cowichan",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12524192",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2100",
      "elev": "8",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YPC",
      "lat": "69.3499",
      "lon": "-124.085",
      "name": "Paulatuk Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524250",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3200",
      "elev": "50",
      "icao": "CYPC",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YPE",
      "lat": "56.2314",
      "lon": "-117.448",
      "name": "Peace River Airport",
      "city": "Brownvale",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511783",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "1873",
      "icao": "CYPE",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YPH",
      "lat": "58.4575",
      "lon": "-78.1327",
      "name": "Inukjuak Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524196",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2000",
      "elev": "9",
      "icao": "CYPH",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YPJ",
      "lat": "58.8566",
      "lon": "-69.3528",
      "name": "Aupaluk Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524198",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YPL",
      "lat": "51.4503",
      "lon": "-90.2155",
      "name": "Pickle Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511790",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4500",
      "elev": "1267",
      "icao": "CYPL",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "YPM",
      "lat": "51.8117",
      "lon": "-93.9886",
      "name": "Pikangikum Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524199",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "1114",
      "icao": "CYPM",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "YPO",
      "lat": "54.9906",
      "lon": "-85.4393",
      "name": "Peawanuck Airport",
      "city": "Winisk",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524200",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "174",
      "icao": "CYPO",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YPR",
      "lat": "54.292",
      "lon": "-130.446",
      "name": "Prince Rupert Airport",
      "city": "Prince Rupert",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511802",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "111",
      "icao": "CYPR",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YPW",
      "lat": "49.8369",
      "lon": "-124.496",
      "name": "Powell River Airport",
      "city": "Powell River",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511799",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3760",
      "elev": "425",
      "icao": "CYPW",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YPX",
      "lat": "59.8141",
      "lon": "-77.2512",
      "name": "Povungnituk Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524203",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2800",
      "elev": "48",
      "icao": "CYPX",
      "direct_flights": "6",
      "carriers": "1"
    },
    {
      "code": "YPZ",
      "lat": "54.2526",
      "lon": "-125.773",
      "name": "Burns Lake Airport",
      "city": "Smithers",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511591",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "2340",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YQB",
      "lat": "46.791",
      "lon": "-71.3837",
      "name": "Quebec Airport",
      "city": "Ste-Foy",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511805",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9000",
      "elev": "243",
      "icao": "CYQB",
      "direct_flights": "22",
      "carriers": "16"
    },
    {
      "code": "YQC",
      "lat": "61.0495",
      "lon": "-69.6207",
      "name": "Quaqtaq Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524204",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YQD",
      "lat": "53.8234",
      "lon": "-101.205",
      "name": "The Pas Airport",
      "city": "The Pas",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511871",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYQD",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YQF",
      "lat": "52.1786",
      "lon": "-113.883",
      "name": "Red Deer Regional Airport",
      "city": "Sylvan Lake",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511809",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "5528",
      "elev": "2968",
      "icao": "CYQF",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YQG",
      "lat": "42.2657",
      "lon": "-82.9602",
      "name": "Windsor Airport",
      "city": "Windsor",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511916",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7900",
      "elev": "622",
      "icao": "CYQG",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YQK",
      "lat": "49.7893",
      "lon": "-94.3676",
      "name": "Kenora Airport",
      "city": "Kenora",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511713",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "1342",
      "icao": "CYQK",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YQL",
      "lat": "49.6344",
      "lon": "-112.787",
      "name": "Lethbridge Airport",
      "city": "Pincher",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511730",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.lethbridgecountyairport.com\/",
      "runway_length": "6500",
      "elev": "3047",
      "icao": "CYQL",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YQM",
      "lat": "46.1166",
      "lon": "-64.6883",
      "name": "Greater Moncton International Airport",
      "city": "Moncton",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "12511754",
      "tz": "America\/Halifax",
      "phone": "(506) 856-5455",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.gmia.ca",
      "runway_length": "8000",
      "elev": "232",
      "icao": "CYQM",
      "direct_flights": "7",
      "carriers": "6"
    },
    {
      "code": "YQN",
      "lat": "50.1667",
      "lon": "-86.7",
      "name": "Nakina Airport",
      "city": "Marathon",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524206",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "3800",
      "elev": "1050",
      "icao": "CYQN",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YQQ",
      "lat": "49.7083",
      "lon": "-124.897",
      "name": "Comox Airport",
      "city": "Comox",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511624",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10000",
      "elev": "80",
      "icao": "CYQQ",
      "direct_flights": "5",
      "carriers": "5"
    },
    {
      "code": "YQR",
      "lat": "50.4345",
      "lon": "-104.655",
      "name": "Regina Airport",
      "city": "Regina",
      "state": "Saskatchewan",
      "country": "Canada",
      "woeid": "23388227",
      "tz": "America\/Regina",
      "phone": "+1 306 761 7555",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.yqr.ca",
      "runway_length": "7900",
      "elev": "1894",
      "icao": "CYQR",
      "direct_flights": "8",
      "carriers": "4"
    },
    {
      "code": "YQT",
      "lat": "48.3718",
      "lon": "-89.3118",
      "name": "Thunder Bay International Airport",
      "city": "Thunder Bay",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511875",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYQT",
      "direct_flights": "11",
      "carriers": "8"
    },
    {
      "code": "YQU",
      "lat": "55.1787",
      "lon": "-118.872",
      "name": "Grande Prairie Airport",
      "city": "Brownvale",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511684",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6500",
      "elev": "2195",
      "icao": "CYQU",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YQX",
      "lat": "48.9465",
      "lon": "-54.5802",
      "name": "Gander International Airport",
      "city": "Gander",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511673",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10500",
      "elev": "496",
      "icao": "CYQX",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YQY",
      "lat": "46.1675",
      "lon": "-60.0473",
      "name": "Sydney Airport",
      "city": "Sydney",
      "state": "Nova Scotia",
      "country": "Canada",
      "woeid": "12511865",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7070",
      "elev": "203",
      "icao": "CYQY",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YQZ",
      "lat": "53.0275",
      "lon": "-122.507",
      "name": "Quesnel Airport",
      "city": "Quesnel",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511806",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5500",
      "elev": "1789",
      "icao": "CYQZ",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YRA",
      "lat": "64.1111",
      "lon": "-117.353",
      "name": "Rae Lakes Aerodrome",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524207",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2800",
      "elev": "700",
      "icao": "CYRA",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YRB",
      "lat": "74.7167",
      "lon": "-94.9667",
      "name": "Resolute Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12523273",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6500",
      "elev": "221",
      "icao": "CYRB",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YRF",
      "lat": "53.7084",
      "lon": "-57.0014",
      "name": "Cartwright Airport",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524210",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "153",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YRG",
      "lat": "54.2102",
      "lon": "-58.4141",
      "name": "Rigolet Aerodrome",
      "city": "Happy Valley-Goose Bay",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524211",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "180",
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YRJ",
      "lat": "48.52",
      "lon": "-72.2661",
      "name": "Roberval Airport",
      "city": "Roberval",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511816",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "586",
      "icao": "CYRJ",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YRL",
      "lat": "51.0683",
      "lon": "-93.8015",
      "name": "Red Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511811",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "1257",
      "icao": "CYRL",
      "direct_flights": "7",
      "carriers": "2"
    },
    {
      "code": "YRS",
      "lat": "54.1623",
      "lon": "-93.5887",
      "name": "Red Sucker Lake Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524214",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "729",
      "icao": "CYRS",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YRT",
      "lat": "62.8042",
      "lon": "-92.1026",
      "name": "Rankin Inlet Airport",
      "city": "Chesterfield Inlet",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524215",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "106",
      "icao": "CYRT",
      "direct_flights": "11",
      "carriers": "5"
    },
    {
      "code": "YSB",
      "lat": "46.6229",
      "lon": "-80.7953",
      "name": "Sudbury Airport",
      "city": "Garson",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511859",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6600",
      "elev": "1140",
      "icao": "CYSB",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "YSG",
      "lat": "62.4009",
      "lon": "-110.693",
      "name": "Snowdrift Aerodrome",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524218",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2240",
      "elev": "575",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YSH",
      "lat": "44.9289",
      "lon": "-75.9706",
      "name": "Smiths Falls Montague Township Russ Beach Airpor",
      "city": "Smiths Falls",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511834",
      "tz": "America\/Montreal",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "416",
      "icao": "CYSH",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YSJ",
      "lat": "45.3294",
      "lon": "-65.8903",
      "name": "Saint John Airport",
      "city": "St. John",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "12511822",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7000",
      "elev": "356",
      "icao": "CYSJ",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YSK",
      "lat": "56.2385",
      "lon": "-78.8122",
      "name": "Sanikiluaq Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524220",
      "tz": "America\/Iqaluit",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3800",
      "elev": "107",
      "icao": "CYSK",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YSM",
      "lat": "60.0208",
      "lon": "-111.963",
      "name": "Fort Smith Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12511668",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "666",
      "icao": "CYSM",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YSO",
      "lat": "54.9119",
      "lon": "-59.7708",
      "name": "Postville Aerodrome",
      "city": "Happy Valley-Goose Bay",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524221",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "193",
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YSR",
      "lat": "72.9833",
      "lon": "-84.6333",
      "name": "Nanisivik Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12523274",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6400",
      "elev": "2098",
      "icao": "CYSR",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YST",
      "lat": "20.9417",
      "lon": "95.9181",
      "name": "Shante Airport",
      "city": "Meiktila",
      "state": "Mandalay",
      "country": "Myanmar",
      "woeid": "12510935",
      "tz": "Asia\/Rangoon",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "773",
      "icao": "CYST",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YSY",
      "lat": "72",
      "lon": "-125.267",
      "name": "Sachs Harbour Airport",
      "city": "Hay River",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12523262",
      "tz": "America\/Inuvik",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "281",
      "icao": "CYSY",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YTD",
      "lat": "55.3167",
      "lon": "-97.7",
      "name": "Thicket Portage Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524225",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CZLQ",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YTE",
      "lat": "64.2228",
      "lon": "-76.5337",
      "name": "Cape Dorset Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524226",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "158",
      "icao": "CYTE",
      "direct_flights": "3",
      "carriers": "4"
    },
    {
      "code": "YTF",
      "lat": "48.55",
      "lon": "-71.65",
      "name": "Alma",
      "city": "Alma",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511566",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4300",
      "elev": "445",
      "icao": "CYTF",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YTH",
      "lat": "55.7999",
      "lon": "-97.8598",
      "name": "Thompson Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511873",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYTH",
      "direct_flights": "16",
      "carriers": "4"
    },
    {
      "code": "YTL",
      "lat": "53.7767",
      "lon": "-89.9697",
      "name": "Big Trout Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524229",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3300",
      "elev": "740",
      "icao": "CYTL",
      "direct_flights": "7",
      "carriers": "1"
    },
    {
      "code": "YTM",
      "lat": "46.25",
      "lon": "-74.5833",
      "name": "La Macaza",
      "city": "Mont Tremblant",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "23707674",
      "tz": "America\/Montreal",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YTQ",
      "lat": "53.6833",
      "lon": "-69.9333",
      "name": "Tasiujuaq Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524231",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYTQ",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YTS",
      "lat": "48.5655",
      "lon": "-81.3718",
      "name": "Timmins Airport",
      "city": "South Porcupine",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511877",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYTS",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YTZ",
      "lat": "43.6321",
      "lon": "-79.3962",
      "name": "Toronto City Centre Airport",
      "city": "Toronto",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511882",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYTZ",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "YUB",
      "lat": "69.4335",
      "lon": "-133.02",
      "name": "Tuktoyaktuk Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524233",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYUB",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YUD",
      "lat": "56.4835",
      "lon": "-76.4426",
      "name": "Umiujaq Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524234",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YUL",
      "lat": "45.4562",
      "lon": "-73.7473",
      "name": "A\u00e9roport International Pierre-Elliott-Trudeau d",
      "city": "Dorval",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511638",
      "tz": "America\/Toronto",
      "phone": "514 394 7377",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.admtl.com",
      "runway_length": "11000",
      "elev": "117",
      "icao": "CYUL",
      "direct_flights": "104",
      "carriers": "57"
    },
    {
      "code": "YUM",
      "lat": "32.6685",
      "lon": "-114.599",
      "name": "Yuma International Airport",
      "city": "Yuma",
      "state": "Arizona",
      "country": "United States",
      "woeid": "12522544",
      "tz": "America\/Phoenix",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "13299",
      "elev": "213",
      "icao": "KYUM",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YUT",
      "lat": "66.5333",
      "lon": "-86.25",
      "name": "Repulse Bay Airport",
      "city": "Chesterfield Inlet",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524241",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3400",
      "elev": "80",
      "icao": "CYUT",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YUX",
      "lat": "68.7804",
      "lon": "-81.2429",
      "name": "Hall Beach Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524245",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5400",
      "elev": "27",
      "icao": "CYUX",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YUY",
      "lat": "48.2135",
      "lon": "-78.8287",
      "name": "Rouyn Noranda Airport",
      "city": "\u00c9vain",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511819",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7500",
      "elev": "988",
      "icao": "CYUY",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "YVA",
      "lat": "-11.7075",
      "lon": "43.2342",
      "name": "Moroni Iconi Airport",
      "city": "Moroni",
      "state": "Grande Comore",
      "country": "Comoros",
      "woeid": "12512358",
      "tz": "Indian\/Comoro",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "4445",
      "elev": "33",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YVB",
      "lat": "48.0717",
      "lon": "-65.4614",
      "name": "Bonaventure Airport",
      "city": "Perc\u00e9",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511580",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "120",
      "icao": "CYVB",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YVM",
      "lat": "67.5412",
      "lon": "-63.9855",
      "name": "Broughton Island Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524254",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3475",
      "elev": "15",
      "icao": "CYVM",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "YVO",
      "lat": "48.0623",
      "lon": "-77.7896",
      "name": "Val d'or Airport",
      "city": "Val-d'or",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511891",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYVO",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YVP",
      "lat": "58.102",
      "lon": "-68.4333",
      "name": "Kuujjuaq Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511719",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "122",
      "icao": "CYVP",
      "direct_flights": "8",
      "carriers": "2"
    },
    {
      "code": "YVQ",
      "lat": "65.2825",
      "lon": "-126.798",
      "name": "Norman Wells Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12511772",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "241",
      "icao": "CYVQ",
      "direct_flights": "5",
      "carriers": "3"
    },
    {
      "code": "YVR",
      "lat": "49.1931",
      "lon": "-123.172",
      "name": "Vancouver International Airport",
      "city": "Richmond",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511894",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.yvr.ca\/",
      "runway_length": "11500",
      "elev": "9",
      "icao": "CYVR",
      "direct_flights": "92",
      "carriers": "54"
    },
    {
      "code": "YVZ",
      "lat": "52.6528",
      "lon": "-94.1569",
      "name": "Deer Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524256",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYVZ",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YWB",
      "lat": "61.6013",
      "lon": "-71.9503",
      "name": "Kangiqsujuaq Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524258",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YWG",
      "lat": "49.9045",
      "lon": "-97.2253",
      "name": "Winnipeg International Airport",
      "city": "Winnipeg",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511918",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "11000",
      "elev": "783",
      "icao": "CYWG",
      "direct_flights": "38",
      "carriers": "17"
    },
    {
      "code": "YWH",
      "lat": "70.9166",
      "lon": "-109.985",
      "name": "Inner Harbour Airport",
      "city": "Hay River",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12511702",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYWH",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "YWJ",
      "lat": "65.1994",
      "lon": "-123.431",
      "name": "Fort Franklin Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524259",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "550",
      "icao": "CYWJ",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YWK",
      "lat": "52.9261",
      "lon": "-66.873",
      "name": "Wabush Airport",
      "city": "Wabush",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511902",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "1806",
      "icao": "CYWK",
      "direct_flights": "5",
      "carriers": "4"
    },
    {
      "code": "YWL",
      "lat": "52.1866",
      "lon": "-122.068",
      "name": "Williams Lake Airport",
      "city": "Williams Lake",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511915",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7000",
      "elev": "3085",
      "icao": "CYWL",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "YWM",
      "lat": "52.3333",
      "lon": "-56",
      "name": "Williams Harbour Airport",
      "city": "St. Anthony",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12524260",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Harbours",
      "email": "",
      "url": "",
      "runway_length": "2000",
      "elev": "70",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YWP",
      "lat": "52.978",
      "lon": "-87.3578",
      "name": "Webequie Airport",
      "city": "Marathon",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524263",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "650",
      "icao": "CYWP",
      "direct_flights": "7",
      "carriers": "2"
    },
    {
      "code": "YWS",
      "lat": "50.1333",
      "lon": "-122.95",
      "name": "Green Lake Water Aerodrome",
      "city": "Gibsons",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12523277",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YXC",
      "lat": "49.6148",
      "lon": "-115.786",
      "name": "Cranbrook Airport",
      "city": "Cranbrook",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511628",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "3082",
      "icao": "CYXC",
      "direct_flights": "3",
      "carriers": "3"
    },
    {
      "code": "YXE",
      "lat": "52.1703",
      "lon": "-106.689",
      "name": "John G Diefenbaker International Airport",
      "city": "Saskatoon",
      "state": "Saskatchewan",
      "country": "Canada",
      "woeid": "12511826",
      "tz": "America\/Regina",
      "phone": "+1 306 9758900",
      "type": "Airports",
      "email": "comments@saskatoonairport.ca",
      "url": "http:\/\/www.yxe.ca",
      "runway_length": "8300",
      "elev": "1650",
      "icao": "CYXE",
      "direct_flights": "12",
      "carriers": "8"
    },
    {
      "code": "YXH",
      "lat": "50.0219",
      "lon": "-110.722",
      "name": "Medicine Hat Airport",
      "city": "Medicine Hat",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511748",
      "tz": "America\/Edmonton",
      "phone": "403-526-4664",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.medicinehat.ca\/cityservices\/airport",
      "runway_length": "5000",
      "elev": "2352",
      "icao": "CYXH",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YXJ",
      "lat": "56.2464",
      "lon": "-120.737",
      "name": "North Peace Airport",
      "city": "Fort St. John",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511669",
      "tz": "America\/Dawson_Creek",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6900",
      "elev": "2280",
      "icao": "CYXJ",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "YXK",
      "lat": "48.4727",
      "lon": "-68.5044",
      "name": "Rimouski Airport",
      "city": "Rimouski",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511814",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": "4600",
      "elev": "82",
      "icao": "CYXK",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YXL",
      "lat": "50.1153",
      "lon": "-91.9056",
      "name": "Sioux Lookout Airport",
      "city": "Sioux Lookout",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511831",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4400",
      "elev": "1280",
      "icao": "CYXL",
      "direct_flights": "22",
      "carriers": "3"
    },
    {
      "code": "YXN",
      "lat": "62.2273",
      "lon": "-92.5948",
      "name": "Whale Cove Airport",
      "city": "Chesterfield Inlet",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524268",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3405",
      "elev": "66",
      "icao": "CYXN",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YXP",
      "lat": "66.1349",
      "lon": "-65.7142",
      "name": "Pangnirtung Airport",
      "city": "Iqaluit",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524269",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "2500",
      "elev": "82",
      "icao": "CYXP",
      "direct_flights": "2",
      "carriers": "3"
    },
    {
      "code": "YXS",
      "lat": "53.8805",
      "lon": "-122.676",
      "name": "Prince George Airport",
      "city": "Prince George",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511801",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7400",
      "elev": "2268",
      "icao": "CYXS",
      "direct_flights": "7",
      "carriers": "6"
    },
    {
      "code": "YXT",
      "lat": "54.4727",
      "lon": "-128.577",
      "name": "Terrace Airport",
      "city": "Terrace",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511868",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYXT",
      "direct_flights": "5",
      "carriers": "4"
    },
    {
      "code": "YXU",
      "lat": "43.0285",
      "lon": "-81.1497",
      "name": "London International Airport",
      "city": "London",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511735",
      "tz": "America\/Toronto",
      "phone": "(519) 452-4015",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.londonairport.on.ca",
      "runway_length": "8800",
      "elev": "912",
      "icao": "CYXU",
      "direct_flights": "6",
      "carriers": "4"
    },
    {
      "code": "YXX",
      "lat": "49.0221",
      "lon": "-122.382",
      "name": "Abbotsford International Airport",
      "city": "Abbotsford",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511565",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8000",
      "elev": "190",
      "icao": "CYXX",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "YXY",
      "lat": "60.7141",
      "lon": "-135.076",
      "name": "Whitehorse International Airport",
      "city": "Whitehorse",
      "state": "Yukon Territory",
      "country": "Canada",
      "woeid": "12511913",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9497",
      "elev": "2317",
      "icao": "CYXY",
      "direct_flights": "6",
      "carriers": "5"
    },
    {
      "code": "YYB",
      "lat": "46.3564",
      "lon": "-79.4285",
      "name": "North Bay Airport",
      "city": "North Bay",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511774",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10000",
      "elev": "1215",
      "icao": "CYYB",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YYC",
      "lat": "51.1343",
      "lon": "-114.007",
      "name": "Calgary International Airport",
      "city": "Calgary",
      "state": "Alberta",
      "country": "Canada",
      "woeid": "12511594",
      "tz": "America\/Edmonton",
      "phone": "403-735-1200",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.yyc.com",
      "runway_length": "12675",
      "elev": "3557",
      "icao": "CYYC",
      "direct_flights": "64",
      "carriers": "33"
    },
    {
      "code": "YYD",
      "lat": "54.8247",
      "lon": "-127.181",
      "name": "Smithers Airport",
      "city": "Smithers",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511833",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "1717",
      "icao": "CYYD",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "YYE",
      "lat": "58.8429",
      "lon": "-122.579",
      "name": "Fort Nelson Airport",
      "city": "Fort Nelson",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511666",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6400",
      "elev": "1253",
      "icao": "CYYE",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YYF",
      "lat": "49.4614",
      "lon": "-119.606",
      "name": "Penticton Airport",
      "city": "Penticton",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511788",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "1129",
      "icao": "CYYF",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YYG",
      "lat": "46.2833",
      "lon": "-63.1333",
      "name": "Charlottetown Airport",
      "city": "Charlottetown",
      "state": "Prince Edward Island",
      "country": "Canada",
      "woeid": "12511608",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.flypei.com",
      "runway_length": "7000",
      "elev": "178",
      "icao": "CYYG",
      "direct_flights": "7",
      "carriers": "6"
    },
    {
      "code": "YYH",
      "lat": "69.5466",
      "lon": "-93.5751",
      "name": "Taloyoak Airport",
      "city": "Cambridge Bay",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524271",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYYH",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YYJ",
      "lat": "48.6402",
      "lon": "-123.43",
      "name": "Victoria International Airport",
      "city": "Sidney",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511899",
      "tz": "America\/Vancouver",
      "phone": "(250) 953-7500",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.victoriaairport.com",
      "runway_length": "7000",
      "elev": "63",
      "icao": "CYYJ",
      "direct_flights": "9",
      "carriers": "11"
    },
    {
      "code": "YYL",
      "lat": "56.8617",
      "lon": "-101.071",
      "name": "Lynn Lake Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511737",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "1170",
      "icao": "CYYL",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "YYQ",
      "lat": "58.7557",
      "lon": "-94.0678",
      "name": "Churchill Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12511615",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYYQ",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "YYR",
      "lat": "53.3263",
      "lon": "-60.4106",
      "name": "Goose Bay Airport",
      "city": "Happy Valley-Goose Bay",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511679",
      "tz": "America\/Goose_Bay",
      "phone": "709-896-5445",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.goosebayairport.com\/index1.htm",
      "runway_length": "11050",
      "elev": "160",
      "icao": "CYYR",
      "direct_flights": "11",
      "carriers": "3"
    },
    {
      "code": "YYT",
      "lat": "47.6124",
      "lon": "-52.7425",
      "name": "St John's International Airport",
      "city": "St. John's",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511848",
      "tz": "America\/St_Johns",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.stjohnsairport.com\/",
      "runway_length": null,
      "elev": "462",
      "icao": "CYYT",
      "direct_flights": "11",
      "carriers": "9"
    },
    {
      "code": "YYU",
      "lat": "49.4098",
      "lon": "-82.4618",
      "name": "Kapuskasing Airport",
      "city": "Kapuskasing",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511711",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5500",
      "elev": "743",
      "icao": "CYYU",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YYY",
      "lat": "48.6069",
      "lon": "-68.2111",
      "name": "Mont Joli Airport",
      "city": "Mont-Joli",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511755",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6000",
      "elev": "172",
      "icao": "CYYY",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "YYZ",
      "lat": "43.685",
      "lon": "-79.6142",
      "name": "Toronto Lester B Pearson International Airport",
      "city": "Mississauga",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511883",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.gtaa.com\/",
      "runway_length": "11120",
      "elev": "569",
      "icao": "CYYZ",
      "direct_flights": "176",
      "carriers": "66"
    },
    {
      "code": "YZF",
      "lat": "62.4699",
      "lon": "-114.433",
      "name": "Yellowknife Airport",
      "city": "Yellowknife",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12511922",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7500",
      "elev": "674",
      "icao": "CYZF",
      "direct_flights": "18",
      "carriers": "6"
    },
    {
      "code": "YZG",
      "lat": "62.1853",
      "lon": "-75.6685",
      "name": "Salluit Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524276",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CYZG",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "YZP",
      "lat": "53.2528",
      "lon": "-131.814",
      "name": "Sandspit Airport",
      "city": "Masset",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511824",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5120",
      "elev": "21",
      "icao": "CYZP",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YZR",
      "lat": "42.9965",
      "lon": "-82.3078",
      "name": "Sarnia Airport",
      "city": "Sarnia",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12511825",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5100",
      "elev": "594",
      "icao": "CYZR",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "YZS",
      "lat": "64.2",
      "lon": "-83.3667",
      "name": "Coral Harbour Airport",
      "city": "Chesterfield Inlet",
      "state": "Nunavut",
      "country": "Canada",
      "woeid": "12524279",
      "tz": "America\/Coral_Harbour",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "210",
      "icao": "CYZS",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "YZT",
      "lat": "50.6843",
      "lon": "-127.377",
      "name": "Port Hardy Airport",
      "city": "Gibsons",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12511795",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": "71",
      "icao": "CYZT",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "YZV",
      "lat": "50.2169",
      "lon": "-66.2654",
      "name": "Sept Iles Airport",
      "city": "Sept-\u00celes",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12511829",
      "tz": "America\/Montreal",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6572",
      "elev": "180",
      "icao": "CYZV",
      "direct_flights": "8",
      "carriers": "5"
    },
    {
      "code": "YZZ",
      "lat": "37.0625",
      "lon": "-95.6771",
      "name": "Trail Airport",
      "city": "Trail",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "9923",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZAC",
      "lat": "56.0763",
      "lon": "-96.09",
      "name": "York Landing Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524282",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "609",
      "icao": "CZAC",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZAD",
      "lat": "44.0978",
      "lon": "15.3567",
      "name": "Zadar Airport",
      "city": "Zadar",
      "state": "Zadarsko-Kninska",
      "country": "Croatia",
      "woeid": "12513375",
      "tz": "Europe\/Zagreb",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.zadar-airport.hr\/eng\/",
      "runway_length": "8202",
      "elev": "269",
      "icao": "LDZD",
      "direct_flights": "10",
      "carriers": "5"
    },
    {
      "code": "ZAG",
      "lat": "45.7402",
      "lon": "16.0704",
      "name": "Zagreb Airport",
      "city": "Nagygoricza",
      "state": "Zagreba\u010dka",
      "country": "Croatia",
      "woeid": "12513376",
      "tz": "Europe\/Belgrade",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.zagreb-airport.hr\/",
      "runway_length": "10663",
      "elev": "351",
      "icao": "LDZA",
      "direct_flights": "37",
      "carriers": "25"
    },
    {
      "code": "ZAH",
      "lat": "29.4764",
      "lon": "60.9044",
      "name": "Zahedan International Airport",
      "city": "Dowzdab",
      "state": "Sistan va Baluchestan",
      "country": "Iran",
      "woeid": "12513773",
      "tz": "Asia\/Tehran",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.Iranairports.com",
      "runway_length": "14000",
      "elev": "4517",
      "icao": "",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "ZAL",
      "lat": "-39.6458",
      "lon": "-73.0847",
      "name": "Pichoy Airport",
      "city": "Pelchuquin",
      "state": "Los Lagos",
      "country": "Chile",
      "woeid": "12512336",
      "tz": "America\/Santiago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4199",
      "elev": "13",
      "icao": "SCVL",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "ZAM",
      "lat": "6.9244",
      "lon": "122.061",
      "name": "Zamboanga International Airport",
      "city": "Zamboanga",
      "state": "Zamboanga Peninsula",
      "country": "Philippines",
      "woeid": "12515655",
      "tz": "Asia\/Manila",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8560",
      "elev": "30",
      "icao": "",
      "direct_flights": "7",
      "carriers": "5"
    },
    {
      "code": "ZAQ",
      "lat": "48.9174",
      "lon": "11.408",
      "name": "Bavaria",
      "city": "Nuremberg",
      "state": "Bavaria",
      "country": "Germany",
      "woeid": "2345482",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "ZAT",
      "lat": "27.3167",
      "lon": "103.8",
      "name": "Zhaotong",
      "city": "Zhaotong",
      "state": "Yunnan",
      "country": "China",
      "woeid": "2160703",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZAZ",
      "lat": "41.6607",
      "lon": "-1.0078",
      "name": "Zaragoza Air Base",
      "city": "Zaragoza",
      "state": "Aragon",
      "country": "Spain",
      "woeid": "12517581",
      "tz": "Europe\/Madrid",
      "phone": "",
      "type": "Military Airport",
      "email": "",
      "url": "",
      "runway_length": "12197",
      "elev": "863",
      "icao": "LEZG",
      "direct_flights": "20",
      "carriers": "6"
    },
    {
      "code": "ZBA",
      "lat": "47.5487",
      "lon": "7.58768",
      "name": "Switzerland",
      "city": "Basel",
      "state": "Canton of Basel-City",
      "country": "Switzerland",
      "woeid": "23424957",
      "tz": "Europe\/Zurich",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "0",
      "carriers": "0"
    },
    {
      "code": "ZBF",
      "lat": "47.6325",
      "lon": "-65.74",
      "name": "Bathurst Airport",
      "city": "Bathurst",
      "state": "New Brunswick",
      "country": "Canada",
      "woeid": "12511575",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "194",
      "icao": "CZBF",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "ZBL",
      "lat": "-24.3903",
      "lon": "150.519",
      "name": "Australia",
      "city": "Biloela",
      "state": "Queensland",
      "country": "Australia",
      "woeid": "23424748",
      "tz": "Australia\/Brisbane",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZBP",
      "lat": "39.3117",
      "lon": "-76.6183",
      "name": "",
      "city": "Baltimore",
      "state": "Maryland",
      "country": "United States",
      "woeid": "2358820",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZBR",
      "lat": "25.445",
      "lon": "60.3819",
      "name": "Chah Bahar Airport",
      "city": "Chabahar",
      "state": "Sistan va Baluchestan",
      "country": "Iran",
      "woeid": "12513711",
      "tz": "Asia\/Tehran",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "12630",
      "elev": "23",
      "icao": "",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "ZCB",
      "lat": "41.9619",
      "lon": "21.6181",
      "name": "Skopje Airport",
      "city": "",
      "state": "Ilinden",
      "country": "Macedonia",
      "woeid": "12514772",
      "tz": "Europe\/Skopje",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZCL",
      "lat": "22.8972",
      "lon": "-102.685",
      "name": "Zacatecas Airport",
      "city": "P\u00e1nuco",
      "state": "Zacatecas",
      "country": "Mexico",
      "woeid": "12514987",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "9640",
      "elev": "7021",
      "icao": "MMZC",
      "direct_flights": "7",
      "carriers": "3"
    },
    {
      "code": "ZCO",
      "lat": "-38.7639",
      "lon": "-72.6378",
      "name": "Maquehue Airport",
      "city": "Padre Las Casas",
      "state": "Araucania",
      "country": "Chile",
      "woeid": "12512332",
      "tz": "America\/Santiago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "SCTC",
      "direct_flights": "4",
      "carriers": "5"
    },
    {
      "code": "ZDH",
      "lat": "47.5487",
      "lon": "7.58768",
      "name": "Basel SBB station",
      "city": "Basel",
      "state": "Basel-Stadt",
      "country": "Switzerland",
      "woeid": "781739",
      "tz": "Europe\/Zurich",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZDN",
      "lat": "-33.9344",
      "lon": "151.168",
      "name": "Kingsford Smith Airport",
      "city": "Sydney",
      "state": "New South Wales",
      "country": "Australia",
      "woeid": "23388205",
      "tz": "Australia\/Sydney",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "ZDU",
      "lat": "51.5039",
      "lon": "0.04981",
      "name": "London City Airport",
      "city": "London",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "22475376",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZEE",
      "lat": "30.754",
      "lon": "-91.3415",
      "name": "Kelsey Airport",
      "city": "Kelsey",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524044",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CZEE",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZEI",
      "lat": "12.9794",
      "lon": "11.8559",
      "name": "",
      "city": "Zei",
      "state": "Yobe",
      "country": "Nigeria",
      "woeid": "1511177",
      "tz": "Africa\/Lagos",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZEJ",
      "lat": "47.7134",
      "lon": "22.8887",
      "name": "Satu Mare Airport",
      "city": "",
      "state": "Satu Mare",
      "country": "Romania",
      "woeid": "12515569",
      "tz": "Europe\/Bucharest",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "0",
      "carriers": "0"
    },
    {
      "code": "ZEL",
      "lat": "52.152",
      "lon": "-128.155",
      "name": "Bella Bella Airport",
      "city": "Masset",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12524283",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1500",
      "elev": "100",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZEM",
      "lat": "52.2399",
      "lon": "-78.5077",
      "name": "East Main Airport",
      "city": "Chisasibi",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524284",
      "tz": "America\/Nipigon",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "1900",
      "elev": "20",
      "icao": "CZEM",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZEP",
      "lat": "39.0804",
      "lon": "-78.4233",
      "name": "",
      "city": "London",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "44418",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "ZEU",
      "lat": "2.51769",
      "lon": "30.7978",
      "name": "",
      "city": "Zeu",
      "state": "Nebbi",
      "country": "Uganda",
      "woeid": "1455541",
      "tz": "Africa\/Kampala",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "ZFI",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "Chesterfield",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Bus Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "ZFJ",
      "lat": "46.7124",
      "lon": "1.71832",
      "name": "France",
      "city": "Rennes",
      "state": null,
      "country": "France",
      "woeid": "23424819",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "8"
    },
    {
      "code": "ZFM",
      "lat": "67.4024",
      "lon": "-134.849",
      "name": "Fort Mcpherson Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524289",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "142",
      "icao": "CZFM",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZFN",
      "lat": "64.9",
      "lon": "-125.583",
      "name": "Fort Norman Airport",
      "city": "Hay River",
      "state": "Northwest Territories",
      "country": "Canada",
      "woeid": "12524290",
      "tz": "America\/Edmonton",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3000",
      "elev": "320",
      "icao": "CZFN",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZFQ",
      "lat": "46.7124",
      "lon": "1.71832",
      "name": "France",
      "city": "Bordeaux",
      "state": null,
      "country": "France",
      "woeid": "23424819",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "9"
    },
    {
      "code": "ZFV",
      "lat": "40.9946",
      "lon": "-77.6045",
      "name": "Philadelphia Rail",
      "city": "Philadelphia",
      "state": "Pennsylvania",
      "country": "United States",
      "woeid": "2347597",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "ZFZ",
      "lat": "40.7145",
      "lon": "-74.0071",
      "name": "New York",
      "city": "Buffalo",
      "state": "New York",
      "country": "United States",
      "woeid": "2459115",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZGD",
      "lat": "41.3564",
      "lon": "-72.0965",
      "name": "New London",
      "city": "Groton",
      "state": "Connecticut",
      "country": "United States",
      "woeid": "2458689",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZGG",
      "lat": "54.3139",
      "lon": "-2.23218",
      "name": "United Kingdom",
      "city": "Glasgow",
      "state": "Scotland",
      "country": "United Kingdom",
      "woeid": "23424975",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZGH",
      "lat": "55.6205",
      "lon": "12.6495",
      "name": "Copenhagen Main Station",
      "city": "Copenhagen",
      "state": "",
      "country": "Denmark",
      "woeid": "22851127",
      "tz": "Europe\/Copenhagen",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZGI",
      "lat": "54.6768",
      "lon": "-94.1459",
      "name": "Gods River Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524291",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4000",
      "elev": "600",
      "icao": "CZGI",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "ZGN",
      "lat": "22.5167",
      "lon": "113.367",
      "name": "Zhongshan Ferry Port",
      "city": "Zhongshan",
      "state": "Guangdong",
      "country": "China",
      "woeid": "2161664",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZGO",
      "lat": "50.9496",
      "lon": "10.7087",
      "name": "Gotha",
      "city": "Gotha",
      "state": "Thuringia",
      "country": "Germany",
      "woeid": "653514",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZGS",
      "lat": "50.3016",
      "lon": "-60.6776",
      "name": "Gethsemani Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524293",
      "tz": "America\/Blanc-Sablon",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZGU",
      "lat": "-14.25",
      "lon": "167.5",
      "name": "Gaua Airport",
      "city": "Gaua",
      "state": "",
      "country": "Vanuatu",
      "woeid": "23424907",
      "tz": "Pacific\/Efate",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZHA",
      "lat": "21.2151",
      "lon": "110.362",
      "name": "Zhanjiang Airport",
      "city": "Zhanjiang",
      "state": "Guangdong",
      "country": "China",
      "woeid": "12512295",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "5"
    },
    {
      "code": "ZHO",
      "lat": "29.7605",
      "lon": "-95.3698",
      "name": "Bus Station",
      "city": "Houston",
      "state": "Texas",
      "country": "United States",
      "woeid": "2424766",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Bus Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZIF",
      "lat": "45.4167",
      "lon": "-75.7",
      "name": "Fallowfield Railway",
      "city": "Ottawa",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12697427",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZIG",
      "lat": "12.5561",
      "lon": "-16.2758",
      "name": "Ziguinchor Airport",
      "city": "Ziguinchor",
      "state": "Ziguinchor",
      "country": "Senegal",
      "woeid": "12517511",
      "tz": "Africa\/Dakar",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4413",
      "elev": "82",
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZIH",
      "lat": "17.6025",
      "lon": "-101.458",
      "name": "Ixtapa Zihuatanejo International Airport",
      "city": "Petatl\u00e1n",
      "state": "Guerrero",
      "country": "Mexico",
      "woeid": "12514897",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "8202",
      "elev": "10",
      "icao": "MMZH",
      "direct_flights": "12",
      "carriers": "15"
    },
    {
      "code": "ZIV",
      "lat": "57.48",
      "lon": "-4.22347",
      "name": "Inverness Rail Station",
      "city": "Inverness",
      "state": "Scotland",
      "country": "United Kingdom",
      "woeid": "24502",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZJT",
      "lat": "1.58333",
      "lon": "110.483",
      "name": "",
      "city": "Tanjung Pelepas",
      "state": "",
      "country": "Malaysia",
      "woeid": "23424901",
      "tz": "Asia\/Kuala_Lumpur",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZKE",
      "lat": "52.3117",
      "lon": "-81.6078",
      "name": "Kaschechewan Airport",
      "city": "Winisk",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524116",
      "tz": "America\/Toronto",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "35",
      "icao": "CZKE",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZKG",
      "lat": "50.1937",
      "lon": "-61.2817",
      "name": "Kegaska Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524295",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZLN",
      "lat": "48.0081",
      "lon": "0.19784",
      "name": "Le Mans",
      "city": "Le Mans",
      "state": "Pays de la Loire",
      "country": "France",
      "woeid": "603413",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "10"
    },
    {
      "code": "ZLO",
      "lat": "19.1478",
      "lon": "-104.56",
      "name": "Playa de Oro International Airport",
      "city": "Manzanillo",
      "state": "Jalisco",
      "country": "Mexico",
      "woeid": "12514936",
      "tz": "America\/Mexico_City",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "7218",
      "elev": "26",
      "icao": "MMZO",
      "direct_flights": "5",
      "carriers": "6"
    },
    {
      "code": "ZLS",
      "lat": "52.8833",
      "lon": "-1.97685",
      "name": "England",
      "city": "London",
      "state": "England",
      "country": "United Kingdom",
      "woeid": "24554868",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "ZLT",
      "lat": "50.833",
      "lon": "-58.9902",
      "name": "La Tabatiere Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524296",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Other Airport",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZLY",
      "lat": "42.7426",
      "lon": "-73.809",
      "name": "Albany International Airport",
      "city": "Albany",
      "state": "New York",
      "country": "United States",
      "woeid": "12518554",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZMB",
      "lat": "-13.1519",
      "lon": "27.8525",
      "name": "Hamburg Hauptbahnhof",
      "city": "Hamburg",
      "state": "Hamburg",
      "country": "Germany",
      "woeid": "656958",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "4"
    },
    {
      "code": "ZME",
      "lat": "40.1428",
      "lon": "-74.7267",
      "name": "New Jersey",
      "city": "Newark",
      "state": "New Jersey",
      "country": "United States",
      "woeid": "2347589",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "2"
    },
    {
      "code": "ZML",
      "lat": "42.9471",
      "lon": "-87.9051",
      "name": "General Mitchell International Airport",
      "city": "Milwaukee",
      "state": "Wisconsin",
      "country": "United States",
      "woeid": "12519880",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZMT",
      "lat": "54.012",
      "lon": "-132.134",
      "name": "Masset Airport",
      "city": "Masset",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12524297",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5000",
      "elev": null,
      "icao": "CZMT",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZMU",
      "lat": "48.9174",
      "lon": "11.408",
      "name": "Bavaria",
      "city": "Munich",
      "state": "Bavaria",
      "country": "Germany",
      "woeid": "2345482",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "6",
      "carriers": "4"
    },
    {
      "code": "ZMY",
      "lat": "43.8321",
      "lon": "4.36677",
      "name": "Huangpu Harbour",
      "city": "Huangpu",
      "state": "Shanghai",
      "country": "China",
      "woeid": "22726048",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Harbours",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "0",
      "carriers": "0"
    },
    {
      "code": "ZNA",
      "lat": "49.1617",
      "lon": "-123.893",
      "name": "Nanaimo Harbour Airport",
      "city": "Nanaimo",
      "state": "British Columbia",
      "country": "Canada",
      "woeid": "12523278",
      "tz": "America\/Vancouver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZNB",
      "lat": "-3.08333",
      "lon": "-67.9333",
      "name": "Sinop Airport",
      "city": "Santo Ant\u00f4nio do I\u00e7\u00e1",
      "state": "Amazonas",
      "country": "Brazil",
      "woeid": "12523221",
      "tz": "America\/Porto_Velho",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZNE",
      "lat": "-23.4169",
      "lon": "119.803",
      "name": "Newman Airport",
      "city": "Newman",
      "state": "Western Australia",
      "country": "Australia",
      "woeid": "12510751",
      "tz": "Australia\/Perth",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6800",
      "elev": "1724",
      "icao": "YNWN",
      "direct_flights": "1",
      "carriers": "3"
    },
    {
      "code": "ZNV",
      "lat": "4.6",
      "lon": "-61.1",
      "name": "Santa Elena Airport",
      "city": "Santa Elena de Uair\u00e9n",
      "state": "Bolivar",
      "country": "Venezuela",
      "woeid": "12524549",
      "tz": "America\/Caracas",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZNZ",
      "lat": "-6.2203",
      "lon": "39.2228",
      "name": "Zanzibar Airport",
      "city": "Stone Town",
      "state": "Zanzibar Urban\/West",
      "country": "Tanzania",
      "woeid": "12518023",
      "tz": "Africa\/Dar_es_Salaam",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "6562",
      "elev": "54",
      "icao": "HTZA",
      "direct_flights": "11",
      "carriers": "13"
    },
    {
      "code": "ZOS",
      "lat": "-40.6072",
      "lon": "-73.0567",
      "name": "Canal Bajo Carlos H Siebert Airport",
      "city": "Osorno",
      "state": "Los Lagos",
      "country": "Chile",
      "woeid": "12512307",
      "tz": "America\/Santiago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5577",
      "elev": "190",
      "icao": "SCJO",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "ZPB",
      "lat": "53.8648",
      "lon": "-92.1915",
      "name": "Sachigo Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524301",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "885",
      "icao": "CZPB",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZQN",
      "lat": "-45.0217",
      "lon": "168.737",
      "name": "Frankton Airport",
      "city": "Queenstown",
      "state": "Otago",
      "country": "New Zealand",
      "woeid": "12515166",
      "tz": "Pacific\/Auckland",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4400",
      "elev": "1173",
      "icao": "NZQN",
      "direct_flights": "6",
      "carriers": "6"
    },
    {
      "code": "ZQW",
      "lat": "49.9545",
      "lon": "7.31024",
      "name": "Rheinland-Pfalz",
      "city": "Zweibrucken",
      "state": "Rheinland-Pfalz",
      "country": "Germany",
      "woeid": "2345488",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "13",
      "carriers": "2"
    },
    {
      "code": "ZRB",
      "lat": "50.0483",
      "lon": "8.57041",
      "name": "Frankfurt International Airport",
      "city": "Frankfurt",
      "state": "Hesse",
      "country": "Germany",
      "woeid": "22981759",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZRD",
      "lat": "37.5406",
      "lon": "-77.4334",
      "name": "Richmond",
      "city": "Richmond",
      "state": "Virginia",
      "country": "United States",
      "woeid": "2480894",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZRH",
      "lat": "47.454",
      "lon": "8.56137",
      "name": "Zurich International Airport",
      "city": "Kloten",
      "state": "Canton of Zurich",
      "country": "Switzerland",
      "woeid": "22442771",
      "tz": "Europe\/Zurich",
      "phone": "+41 43 816 22 11",
      "type": "Airports",
      "email": "",
      "url": "http:\/\/www.zurich-airport.com",
      "runway_length": "12139",
      "elev": "1416",
      "icao": "LSZH",
      "direct_flights": "161",
      "carriers": "79"
    },
    {
      "code": "ZRJ",
      "lat": "52.95",
      "lon": "-91.3167",
      "name": "Round Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524304",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "974",
      "icao": "CZRJ",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "ZRL",
      "lat": "40.038",
      "lon": "-76.3013",
      "name": "Lancaster",
      "city": "Lancaster",
      "state": "Pennsylvania",
      "country": "United States",
      "woeid": "2436076",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZRP",
      "lat": "40.7333",
      "lon": "-74.1667",
      "name": "Pennsylvania Station",
      "city": "Newark",
      "state": "New Jersey",
      "country": "United States",
      "woeid": "12760686",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "7",
      "carriers": "2"
    },
    {
      "code": "ZRT",
      "lat": "41.7633",
      "lon": "-72.674",
      "name": "Hartford",
      "city": "Hartford",
      "state": "Connecticut",
      "country": "United States",
      "woeid": "2418244",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZRU",
      "lat": "42.322",
      "lon": "-71.0918",
      "name": "",
      "city": "Boston",
      "state": "Massachusetts",
      "country": "United States",
      "woeid": "2367105",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZRV",
      "lat": "41.8238",
      "lon": "-71.412",
      "name": "Providence",
      "city": "Providence",
      "state": "Rhode Island",
      "country": "United States",
      "woeid": "2477058",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "ZSA",
      "lat": "24.06",
      "lon": "-74.5331",
      "name": "San Salvador Airport",
      "city": "Cockburn Town",
      "state": "San Salvador",
      "country": "Bahamas",
      "woeid": "12510879",
      "tz": "America\/Nassau",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4500",
      "elev": "10",
      "icao": "",
      "direct_flights": "4",
      "carriers": "3"
    },
    {
      "code": "ZSE",
      "lat": "-20.8833",
      "lon": "55.5333",
      "name": "R\u00e9union",
      "city": "St Pierre dela Reunion",
      "state": "St-Denis",
      "country": "Reunion",
      "woeid": "1511237",
      "tz": "Indian\/Reunion",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4920",
      "elev": "52",
      "icao": "FMEP",
      "direct_flights": "5",
      "carriers": "3"
    },
    {
      "code": "ZSF",
      "lat": "42.1039",
      "lon": "-72.592",
      "name": "Springfield MA RR",
      "city": "Springfield",
      "state": "Massachusetts",
      "country": "United States",
      "woeid": "12758361",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZSJ",
      "lat": "53.0513",
      "lon": "-93.2491",
      "name": "Sandy Lake Airport",
      "city": "Casummit Lake",
      "state": "Ontario",
      "country": "Canada",
      "woeid": "12524306",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "3500",
      "elev": "937",
      "icao": "CZSJ",
      "direct_flights": "4",
      "carriers": "1"
    },
    {
      "code": "ZSN",
      "lat": "56.7819",
      "lon": "-98.9558",
      "name": "South Indian Lake Airport",
      "city": "South Indian Lake",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524069",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "CZSN",
      "direct_flights": "0",
      "carriers": "0"
    },
    {
      "code": "ZTA",
      "lat": "41.3",
      "lon": "-6.46667",
      "name": "",
      "city": "Tureira",
      "state": "",
      "country": "French Polynesia",
      "woeid": "23424817",
      "tz": "Pacific\/Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "NTGY",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZTB",
      "lat": "50.6876",
      "lon": "-59.3545",
      "name": "Tete-a-la-Baleine Airport",
      "city": "Havre-St-Pierre",
      "state": "Quebec",
      "country": "Canada",
      "woeid": "12524309",
      "tz": "America\/Halifax",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZTD",
      "lat": "42.8161",
      "lon": "-73.9442",
      "name": "",
      "city": "Schenectady",
      "state": "New York",
      "country": "United States",
      "woeid": "2489634",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZTE",
      "lat": "43.1531",
      "lon": "-77.6177",
      "name": "",
      "city": "Rochester",
      "state": "New York",
      "country": "United States",
      "woeid": "2482949",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZTF",
      "lat": "41.0464",
      "lon": "-73.5429",
      "name": "",
      "city": "Stamford",
      "state": "Connecticut",
      "country": "United States",
      "woeid": "2498846",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "2"
    },
    {
      "code": "ZTH",
      "lat": "37.7522",
      "lon": "20.8847",
      "name": "Zakinthos Airport",
      "city": "Zante",
      "state": "Nisia Ionioy",
      "country": "Greece",
      "woeid": "12513332",
      "tz": "Europe\/Athens",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5971",
      "elev": "10",
      "icao": "LGZA",
      "direct_flights": "15",
      "carriers": "7"
    },
    {
      "code": "ZTI",
      "lat": "22.8267",
      "lon": "113.672",
      "name": "Humen Port",
      "city": "Humen",
      "state": "Guangdong",
      "country": "China",
      "woeid": "2161939",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZTJ",
      "lat": "40.1428",
      "lon": "-74.7267",
      "name": "New Jersey",
      "city": "Princeton",
      "state": "New Jersey",
      "country": "United States",
      "woeid": "2347589",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZTM",
      "lat": "55.8667",
      "lon": "-92.0833",
      "name": "Shamattawa Airport",
      "city": "Nelson House",
      "state": "Manitoba",
      "country": "Canada",
      "woeid": "12524310",
      "tz": "America\/Winnipeg",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4170",
      "elev": "295",
      "icao": "CZTM",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "ZTN",
      "lat": "40.217",
      "lon": "-74.7551",
      "name": "",
      "city": "Philadelphia",
      "state": "New Jersey",
      "country": "United States",
      "woeid": "2347589",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "ZTO",
      "lat": "42.3374",
      "lon": "-71.0591",
      "name": "",
      "city": "Boston",
      "state": "Massachusetts",
      "country": "United States",
      "woeid": "2367105",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZTV",
      "lat": "38.1865",
      "lon": "-85.7462",
      "name": "Louisville International Airport",
      "city": "Louisville",
      "state": "Kentucky",
      "country": "United States",
      "woeid": "12521983",
      "tz": "America\/Kentucky\/Louisville",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZTY",
      "lat": "42.3433",
      "lon": "-71.0506",
      "name": "",
      "city": "Boston",
      "state": "Massachusetts",
      "country": "United States",
      "woeid": "2367105",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZUA",
      "lat": "43.0958",
      "lon": "-75.2428",
      "name": "Utica",
      "city": "Utica",
      "state": "New York",
      "country": "United States",
      "woeid": "2510530",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZUG",
      "lat": "47.1715",
      "lon": "8.51622",
      "name": "",
      "city": "Harrisburg",
      "state": "Pennsylvania",
      "country": "United States",
      "woeid": "2418046",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZUH",
      "lat": "22.277",
      "lon": "113.557",
      "name": "Zhuhai Airport",
      "city": "Zhuhai",
      "state": "Guangdong",
      "country": "China",
      "woeid": "2161856",
      "tz": "Asia\/Chongqing",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "10",
      "carriers": "7"
    },
    {
      "code": "ZUM",
      "lat": "53.5619",
      "lon": "-64.1072",
      "name": "Churchill Falls Airport",
      "city": "Wabush",
      "state": "Newfoundland and Labrador",
      "country": "Canada",
      "woeid": "12511616",
      "tz": "America\/Goose_Bay",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5500",
      "elev": "1442",
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZUN",
      "lat": "35.0843",
      "lon": "-108.789",
      "name": "Black Rock Airport",
      "city": "Zuni",
      "state": "New Mexico",
      "country": "United States",
      "woeid": "12518848",
      "tz": "America\/Denver",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "KZUN",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZVE",
      "lat": "41.3071",
      "lon": "-72.9249",
      "name": "New Haven",
      "city": "New Haven",
      "state": "Connecticut",
      "country": "United States",
      "woeid": "2458410",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "2"
    },
    {
      "code": "ZVK",
      "lat": "16.5536",
      "lon": "104.763",
      "name": "Savannakhet Airport",
      "city": "Savannakhet",
      "state": "Savannahkhet",
      "country": "Laos",
      "woeid": "12514556",
      "tz": "Asia\/Vientiane",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "5350",
      "elev": "509",
      "icao": "VLSK",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZVR",
      "lat": "52.3778",
      "lon": "9.74213",
      "name": "Hannover Hauptbahnhof",
      "city": "Hanover",
      "state": "Lower-Saxony",
      "country": "Germany",
      "woeid": "20065987",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "10",
      "carriers": "4"
    },
    {
      "code": "ZWB",
      "lat": "37.0294",
      "lon": "-76.3467",
      "name": "Williamsburg Rail",
      "city": "Hampton",
      "state": "Virginia",
      "country": "United States",
      "woeid": "12767461",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZWE",
      "lat": "-19.0133",
      "lon": "29.1467",
      "name": "",
      "city": "",
      "state": "",
      "country": "Zimbabwe",
      "woeid": "23425004",
      "tz": "Africa\/Harare",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "2"
    },
    {
      "code": "ZWI",
      "lat": "41.1418",
      "lon": "-80.3211",
      "name": "Wilmington Rail",
      "city": "Wilmington",
      "state": "Pennsylvania",
      "country": "United States",
      "woeid": "28744866",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "ZWS",
      "lat": "48.7831",
      "lon": "9.18139",
      "name": "Stuttgart Hauptbahnhof",
      "city": "Stuttgart",
      "state": "Baden-W\u00fcrttemberg",
      "country": "Germany",
      "woeid": "698064",
      "tz": "Europe\/Berlin",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "6"
    },
    {
      "code": "ZWU",
      "lat": "38.9",
      "lon": "-77.25",
      "name": "Union Station",
      "city": "Washington",
      "state": "Virginia",
      "country": "United States",
      "woeid": "12766844",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "3",
      "carriers": "1"
    },
    {
      "code": "ZWV",
      "lat": "39.7393",
      "lon": "-89.5041",
      "name": "Illinois",
      "city": "Glenview",
      "state": "Illinois",
      "country": "United States",
      "woeid": "2347572",
      "tz": "America\/Chicago",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZWW",
      "lat": "36.9805",
      "lon": "-76.4295",
      "name": "Newport News",
      "city": "Hampton",
      "state": "Virginia",
      "country": "United States",
      "woeid": "2459618",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZXA",
      "lat": "57.1538",
      "lon": "-2.10679",
      "name": "Aberdeen railway station",
      "city": "Aberdeen",
      "state": "Scotland",
      "country": "United Kingdom",
      "woeid": "10243",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZXE",
      "lat": "55.9521",
      "lon": "-3.189",
      "name": "Waverley station",
      "city": "Edinburgh",
      "state": "Scotland",
      "country": "United Kingdom",
      "woeid": "19344",
      "tz": "Europe\/London",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "10",
      "carriers": "1"
    },
    {
      "code": "ZYA",
      "lat": "52.3784",
      "lon": "4.90016",
      "name": "Amsterdam Central Station",
      "city": "Amsterdam",
      "state": "",
      "country": "Netherlands",
      "woeid": "15003814",
      "tz": "Europe\/Amsterdam",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "2"
    },
    {
      "code": "ZYK",
      "lat": "30.7",
      "lon": "114.35",
      "name": "Shekou Port",
      "city": "Shekou",
      "state": "\u6e56\u5317\u7701",
      "country": "China",
      "woeid": "12713102",
      "tz": "Asia\/Shanghai",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "ZYL",
      "lat": "24.9589",
      "lon": "91.8744",
      "name": "Osmany Sylhet Airport",
      "city": "Sylhet",
      "state": "Sylhet",
      "country": "Bangladesh",
      "woeid": "12510892",
      "tz": "Asia\/Dhaka",
      "phone": "0821-714243, 718459",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "10500",
      "elev": "50",
      "icao": "VGSY",
      "direct_flights": "1",
      "carriers": "8"
    },
    {
      "code": "ZYN",
      "lat": "43.8321",
      "lon": "4.36677",
      "name": "Nimes Rail Station",
      "city": "Nimes",
      "state": "Languedoc-Roussillon",
      "country": "France",
      "woeid": "614326",
      "tz": "Europe\/Paris",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "4",
      "carriers": "7"
    },
    {
      "code": "ZYP",
      "lat": "40.7501",
      "lon": "40.7501",
      "name": "Penn Station",
      "city": "New York",
      "state": "New York",
      "country": "United States",
      "woeid": "23682829",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "5",
      "carriers": "1"
    },
    {
      "code": "ZYQ",
      "lat": "43.05",
      "lon": "-76.1474",
      "name": "Syracuse",
      "city": "Syracuse",
      "state": "New York",
      "country": "United States",
      "woeid": "2503418",
      "tz": "America\/New_York",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "ZYR",
      "lat": "50.8346",
      "lon": "4.33628",
      "name": "Brussels Midi Railway Station",
      "city": "Brussels",
      "state": "Vlaams Brabant",
      "country": "Belgium",
      "woeid": "968019",
      "tz": "Europe\/Brussels",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "9",
      "carriers": "7"
    },
    {
      "code": "ZYZ",
      "lat": "51.1992",
      "lon": "4.43246",
      "name": "Berchem Railway Stn.",
      "city": "Antwerp",
      "state": "Flanders",
      "country": "Belgium",
      "woeid": "12817574",
      "tz": "Europe\/Brussels",
      "phone": "",
      "type": "Railway Stations",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "1",
      "carriers": "1"
    },
    {
      "code": "TNM",
      "lat": "-81.5",
      "lon": "0",
      "name": "Teniente R. Marsh Airport",
      "city": "Teniente R. Marsh",
      "state": "",
      "country": "Antarctica",
      "woeid": "28289409",
      "tz": "Antarctica\/South_Pole",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": null,
      "elev": null,
      "icao": "",
      "direct_flights": "0",
      "carriers": "0"
    }
  ]
  

module.exports = airports