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
  "name": "Trollhattan Vanersborg Airport مطار ترولهتان فانرسبرغ",
  "city": "Trollhatan ترولهتان",
  "country": "Sweden السويد"
},
{
  "name": "Thorshofn Airport مطار ثورشوفن",
  "city": "Thorshofn ثورشوفن",
  "country": "Iceland أيسلندا"
},
{
  "name": "Mehrabad International Airport مطار مهرآباد الدولي",
  "city": "Tehran طهران",
  "country": "Iran إيران"
},
{
  "name": "Sukhothai Airport مطار سوكوتاي",
  "city": "Sawankhalok سوانخالو",
  "country": "Thailand تايلاند"
},
{
  "name": "Pituffik مطار بيتوفيك",
  "city": "Pituffik بيتوفيك",
  "country": "Greenland جرينلاند"
},
{
  "name": "Tirane Rinas Airport مطار تيرانا ريناس",
  "city": "Krna كيرنا",
  "country": "Albania ألبانيا"
},
{
  "name": "Taif Airport مطار الطائف",
  "city": "Taif الطائف",
  "country": "Saudi Arabia المملكة العربية السعودية"
},
{
  "name": "French Polynesia بولينيزيا الفرنسية",
  "city": "Tikehau Atoll تيكهاو أتول",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "General Abelardo L Rodriguez International Airport مطار الجنرال أبيلاردو إل رودريغيز الدولي",
  "city": "Tijuana تيخوانا",
  "country": "Mexico المكسيك"
},
{
  "name": "Tembagapura Airport مطار تيمباغابورا",
  "city": "Nabire نابير",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Tindouf Airport مطار تندوف",
  "city": "Tindouf تندوف",
  "country": "Algeria الجزائر"
},
{
  "name": "Tripoli International Airport مطار طرابلس الدولي",
  "city": "Tripoli طرابلس",
  "country": "Libya ليبيا"
},
{
  "name": "Tinian مطار تينيان",
  "city": "Tinian تينيان",
  "country": "Northern Mariana Islands جزر ماريانا الشمالية"
},
{
  "name": "Tirupathi Airport مطار تيروباتي",
  "city": "Renigunta رينيغونتا",
  "country": "India الهند"
},
{
  "name": "Thursday Island Airport مطار جزيرة الخميس",
  "city": "Kubin Village قرية كوبين",
  "country": "Australia أستراليا"
},
{
  "name": "Richard Pearse Airport مطار ريتشارد بيرس",
  "city": "Timaru تيمارو",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Tivat Airport مطار تيفات",
  "city": "Teodo تيودو",
  "country": "Montenegro الجبل الأسود"
},
{
  "name": "Tari Airport مطار تاري",
  "city": "Mendi مندي",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Capitan Oriel Lea Plaza Airport مطار الكابتن أورييل ليا بلازا",
  "city": "Tarija تاريجا",
  "country": "Bolivia بوليفيا"
},
{
  "name": "Tyumen Northwest Airport مطار تومين الشمالي الغربي",
  "city": "Tyumen تومين",
  "country": "Russia روسيا"
},
{
  "name": "Takume Airport مطار تاكومي",
  "city": "Takume تاكومي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Bulutumbang Airport مطار بولوتومبانغ",
  "city": "Tanjungpandan تانجونغباندان",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Tenakee Springs Seaplane Base مطار تينيكي سبرينغز للطائرات المائية",
  "city": "Tenakee Springs تينيكي سبرينغز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Branti Airport مطار برانتي",
  "city": "Tanjungkarang تانجونغكارانغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Tok Airport مطار توك",
  "city": "Tok توك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Truk International Airport مطار تروك الدولي",
  "city": "Weno وينو",
  "country": "Federated States of Micronesia ولايات ميكرونيزيا المتحدة"
},
{
  "name": "Tokunoshima Airport مطار توكونوشيما",
  "city": "Amagi-cho أميجي-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Takapoto Airport مطار تاكابوتو",
  "city": "Takapoto تاكابوتو",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Tanzania تنزانيا",
  "city": "Kigoma كيغوما",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Tokushima Airport مطار توكوشيما",
  "city": "Matsushige-cho ماتسوشيج-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Turku Airport مطار توركو",
  "city": "Turku توركو",
  "country": "Finland فنلندا"
},
{
  "name": "French Polynesia بولينيزيا الفرنسية",
  "city": "Tatakoto تاتاكوتو",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Takaroa تاكاروا",
  "city": "Takaroa تاكاروا",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Teller تيلر",
  "city": "Teller تيلر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Jose Maria Morelos Y Pavon Airport مطار خوسيه ماريا موريلوس إي بافون",
  "city": "Toluca de Lerdo تولوكا دي ليردو",
  "country": "Mexico المكسيك"
},
{
  "name": "Toliara Airport مطار توليارا",
  "city": "Toliara توليارا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Tallahassee Regional Airport مطار تالاهاسي الإقليمي",
  "city": "Tallahassee تالاهاسي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tatalina تاتالينا",
  "city": "Tatalina تاتالينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ulemiste Airport مطار أوليمست",
  "city": "Tallinn تالين",
  "country": "Estonia إستونيا"
},
{
  "name": "Zenata Airport مطار زيناتة",
  "city": "Tlemcen تلمسان",
  "country": "Algeria الجزائر"
},
{
  "name": "Le Palyvestre Airport مطار لو باليفيستر",
  "city": "Hyeres هييريس",
  "country": "France فرنسا"
},
{
  "name": "Blagnac Airport مطار بلانياك",
  "city": "Blagnac بلانياك",
  "country": "France فرنسا"
},
{
  "name": "Tuluksak تولوكساك",
  "city": "Tuluksak تولوكساك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ben Gurion Airport مطار بن غوريون",
  "city": "Petah Tiqwa بتاح تكفا",
  "country": "Israel إسرائيل"
},
{
  "name": "Tambolaka Airport مطار تامبولكا",
  "city": "Tambolaka تامبولكا",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Tame Airport مطار تامي",
  "city": "Tame تامي",
  "country": "Colombia كولومبيا"
},
{
  "name": "Termez Airport مطار ترميز",
  "city": "Termiz ترميز",
  "country": "Uzbekistan أوزبكستان"
},
{
  "name": "Tamale Airport مطار تامالي",
  "city": "Savelugu سافيلوغو",
  "country": "Ghana غانا"
},
{
  "name": "Toamasina Airport مطار تواماسينا",
  "city": "Toamasina تواماسينا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Tampere Pirkkala Airport مطار تامبيري بيركالا",
  "city": "Pitkäniemi بيتكانيمي",
  "country": "Finland فنلندا"
},
{
  "name": "Tamanrasset Airport مطار تمنراست",
  "city": "Tamanrasset تمنراست",
  "country": "Algeria الجزائر"
},
{
  "name": "Sao Tome Salazar Airport مطار ساو تومي سالازار",
  "city": "Sao Tome ساو تومي",
  "country": "Sao Tome and Principe ساو تومي وبرينسيبي"
},
{
  "name": "Trombetas ترومبيتا",
  "city": "Trombetas ترومبيتا",
  "country": "Brazil البرازيل"
},
{
  "name": "Tambor Airport مطار تامبور",
  "city": "Lepanto ليبانتو",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Tamworth Airport مطار تامورث",
  "city": "Barry باري",
  "country": "Australia أستراليا"
},
{
  "name": "Adrar أدرار",
  "city": "Timimoun تيميمون",
  "country": "Algeria الجزائر"
},
{
  "name": "Shandong شاندونغ",
  "city": "Jinan جينان",
  "country": "China الصين"
},
{
  "name": "Tin City AFS تين سيتي إيه إف إس",
  "city": "Tin City تين سيتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Boukhalf Airport مطار بوقالف",
  "city": "Tangiers طنجة",
  "country": "Morocco المغرب"
},
{
  "name": "Kijang Airport مطار كيجانغ",
  "city": "Tanjungpinang تانجونغ بينانغ",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Tununak Airport مطار تينوناك",
  "city": "Tununak تينوناك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tainan Airport مطار تاينان",
  "city": "Tainan City مدينة تاينان",
  "country": "Taiwan تايوان"
},
{
  "name": "Tamarindo Airport مطار تاماريندو",
  "city": "Liberia ليبيريا",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Antananarivo Ivato Airport مطار أنتاناناريفو إيفاتو",
  "city": "Ambohidratrimo أمبوهيدراتريمو",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Hovsgol خوفسغول",
  "city": "Tosontsengel توسونتسينغيل",
  "country": "Mongolia منغوليا"
},
{
  "name": "Tioman Airport مطار تيومان",
  "city": "Kampung Genting كامبونغ جنتنج",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Nefta Airport مطار نفطة",
  "city": "Tawzar توزر",
  "country": "Tunisia تونس"
},
{
  "name": "Tomsk Airport مطار تومسك",
  "city": "Tomsk تومسك",
  "country": "Russia روسيا"
},
{
  "name": "Togiak Village قرية توجياك",
  "city": "Togiak Village قرية توجياك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Vanuatu فاناتو",
  "city": "Torres توريز",
  "country": "Vanuatu فاناتو"
},
{
  "name": "Toledo Express Airport مطار توليدو إكسبريس",
  "city": "Swanton سوانتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tombouctou Airport مطار تمبكتو",
  "city": "Tombouctou تمبكتو",
  "country": "Mali مالي"
},
{
  "name": "Tromso Langnes Airport مطار ترومسو لانغنيس",
  "city": "Tromso ترومسو",
  "country": "Norway النرويج"
},
{
  "name": "Touho Airport مطار توهو",
  "city": "Touho توهو",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "Toyama Airport مطار توياما",
  "city": "Toyama-shi مدينة توياما",
  "country": "Japan اليابان"
},
{
  "name": "Tampa International Airport مطار تامبا الدولي",
  "city": "Tampa تامبا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Taiwan Taoyuan International Airport مطار تايبه الدولي",
  "city": "Taoyuan City مدينة تايبه",
  "country": "Taiwan تايوان"
},
{
  "name": "Taplejung Suketar مطار تابليوجونج سوكيتار",
  "city": "Taplejung تابليوجونج",
  "country": "Nepal نيبال"
},
{
  "name": "Tarapoto Airport مطار تارابوتو",
  "city": "Tarapoto تارابوتو",
  "country": "Peru بيرو"
},
{
  "name": "Tepic Airport مطار تيبيك",
  "city": "Tepic تيبيك",
  "country": "Mexico المكسيك"
},
{
  "name": "Trapani Birgi Airport مطار تراباني بيرجي",
  "city": "Trapani تراباني",
  "country": "Italy إيطاليا"
},
{
  "name": "San Domino Island مطار جزيرة سان دومينو",
  "city": "San Domino Island جزيرة سان دومينو",
  "country": "Italy إيطاليا"
},
{
  "name": "Torreon International Airport مطار Torreon الدولي",
  "city": "Torreón توريرون",
  "country": "Mexico المكسيك"
},
{
  "name": "Trondheim Vaernes Airport مطار تروندهايم فارنيس",
  "city": "Stjordal ستجوردال",
  "country": "Norway النرويج"
},
{
  "name": "Tiree Aerodrome مطار تيري",
  "city": "Crossapol كروسابول",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Torp Airport مطار تورب",
  "city": "Sandefjord سانديفيورد",
  "country": "Norway النرويج"
},
{
  "name": "Tauranga Airport مطار تاورانغا",
  "city": "Tauranga تاورانغا",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Tri-Cities Regional Airport مطار الثلاثة مدن",
  "city": "Blountville بلونتفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tarakan Airport مطار تاركان",
  "city": "Tarakan تاركان",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Turin International Airport مطار تورينو الدولي",
  "city": "Caselle كاسيل",
  "country": "Italy إيطاليا"
},
{
  "name": "Taree Airport مطار تاريني",
  "city": "Taree تاريني",
  "country": "Australia أستراليا"
},
{
  "name": "Ronchi Dei Legionari Airport مطار روتشي دي ليجوني",
  "city": "Ronchi روتشي",
  "country": "Italy إيطاليا"
},
{
  "name": "Cap C Martinez de Pinillos Airport مطار كاب سي مارتينيز دي بينيلوس",
  "city": "Huanchaco هوانتشاكو",
  "country": "Peru بيرو"
},
{
  "name": "Thiruvananthapuram Airport مطار تيروفانانثابورام",
  "city": "Thiruvananthapuram تيروفانانثابورام",
  "country": "India الهند"
},
{
  "name": "Bonriki International Airport مطار بونريكي الدولي",
  "city": "Tarawa تاروا",
  "country": "Kiribati كيريباتي"
},
{
  "name": "Tiruchirapally Airport مطار تيروشيرابالي",
  "city": "Tiruchirapally تيروشيرابالي",
  "country": "India الهند"
},
{
  "name": "Taipei Songshan Airport مطار تايبيه سونغشان",
  "city": "Taipei City مدينة تايبيه",
  "country": "Taiwan تايوان"
},
{
  "name": "Tselinograd South Airport مطار تسيلينوجراد الجنوبي",
  "city": "Aqmola أكmol",
  "country": "Kazakhstan كازاخستان"
},
{
  "name": "Treviso Airport مطار تريفيزو",
  "city": "Treviso تريفيزو",
  "country": "Italy إيطاليا"
},
{
  "name": "Tsushima Airport مطار تسوشيما",
  "city": "Tsushima-shi تسوشيما شي",
  "country": "Japan اليابان"
},
{
  "name": "Tamuin Airport مطار تاموين",
  "city": "Ciudad Valles مدينة فالييس",
  "country": "Mexico المكسيك"
},
{
  "name": "Zhangguizhuang Airport مطار زانغغويزوانغ",
  "city": "Tanggu تانغو",
  "country": "China الصين"
},
{
  "name": "Isles Of Scilly Airport مطار جزر سيلي",
  "city": "Isles Of Scilly جزر سيلي",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Timisoara Northeast Airport مطار تيميشوارا الشمالي الشرقي",
  "city": "Timis تيميش",
  "country": "Romania رومانيا"
},
{
  "name": "East 34th Street Heliport هيلبورت شرق الشارع 34",
  "city": "New York نيويورك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Trang Airport مطار ترانج",
  "city": "Muang Trang موونغ ترانج",
  "country": "Thailand تايلاند"
},
{
  "name": "Townsville Airport مطار تاونسفيل",
  "city": "Townsville تاونسفيل",
  "country": "Australia أستراليا"
},
{
  "name": "Tan-Tan مطار تان-تان",
  "city": "Tan Tan تان تان",
  "country": "Morocco المغرب"
},
{
  "name": "Babullah Airport مطار بابوله",
  "city": "Ternate ترنات",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Tottori Airport مطار توتوري",
  "city": "Tottori-shi توتوري شي",
  "country": "Japan اليابان"
},
{
  "name": "Tortuquero Airport مطار تورتيكيرو",
  "city": "Colorado كولورادو",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Taitung Airport مطار تايتونغ",
  "city": "Taitung City مدينة تايتونغ",
  "country": "Taiwan تايوان"
},
{
  "name": "Sania Ramel Airport مطار سانيا راميل",
  "city": "Tetouan تطوان",
  "country": "Morocco المغرب"
},
{
  "name": "El Rosal Teniente Guerrero Airport مطار إيل روسال تينينتي غيريرو",
  "city": "Urbina أوربينا",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Tubuai Airport مطار توبواي",
  "city": "Tubuai توبواي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Teniente Benjamin Matienzo Airport مطار تينينتي بنجامين ماتيئنزو",
  "city": "Banda del Río Salí باند ديل ريو سالي",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Tambacounda Airport مطار تامباكوندا",
  "city": "Tambacounda تامباكوندا",
  "country": "Senegal السنغال"
},
{
  "name": "St Symphorien Airport مطار سانت سيمفوريان",
  "city": "Tours تور",
  "country": "France فرنسا"
},
{
  "name": "Tuguegarao Airport مطار توجيجاراو",
  "city": "Tuguegarao توجيجاراو",
  "country": "Philippines الفلبين"
},
{
  "name": "Turaif Airport مطار تورايف",
  "city": "Turayf تورايف",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Turbat Airport مطار تربات",
  "city": "Turbat تربات",
  "country": "Pakistan باكستان"
},
{
  "name": "Cherry Capital Airport مطار شيري كابيتال",
  "city": "Traverse City ترافيرس سيتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Thief River Falls Regional Airport مطار شلالات نهر السارق الإقليمي",
  "city": "Thief River Falls شلالات نهر السارق",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Taveuni Airport مطار تافيويني",
  "city": "Taveuni تافيويني",
  "country": "Fiji فيجي"
},
{
  "name": "Dawe Airport مطار داوي",
  "city": "Dawe داوي",
  "country": "Myanmar ميانمار"
},
{
  "name": "Twin Hills Airport مطار التوأم هيلز",
  "city": "Twin Hills التوأم هيلز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Toowoomba Airport مطار توومبا",
  "city": "Toowoomba توومبا",
  "country": "Australia أستراليا"
},
{
  "name": "Twin Falls-Sun Valley Regional Airport مطار توين فولز - وادي الشمس الإقليمي",
  "city": "Twin Falls توين فولز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Tawitawi Airport مطار توفيتوي",
  "city": "Tawitawi توفيتوي",
  "country": "Philippines الفلبين"
},
{
  "name": "Tawau Airport مطار تواو",
  "city": "Tawau تواو",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Texarkana Regional Airport مطار تكساركانا الإقليمي",
  "city": "Texarkana تكساركانا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Berlin-Tegel International Airport مطار برلين-تيغيل الدولي",
  "city": "Berlin برلين",
  "country": "Germany ألمانيا"
},
{
  "name": "Tunxi Airport مطار تونكسي",
  "city": "Haiyang هايانغ",
  "country": "China الصين"
},
{
  "name": "Fryklanda Airport مطار فريكليندا",
  "city": "Torsby تورسبي",
  "country": "Sweden السويد"
},
{
  "name": "Taiyuan Wusu Airport مطار تاييوان ووسو",
  "city": "Taiyuan تاييوان",
  "country": "China الصين"
},
{
  "name": "Tyler Pounds Field Airport مطار تايلر باوندز فيلد",
  "city": "Tyler تايلر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mcghee Tyson Airport مطار مكغي تايسون",
  "city": "Knoxville نوكسفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Belize City Municipal Airport مطار مدينة بليز البلدي",
  "city": "Hattieville هاتيفيل",
  "country": "Belize بليز"
},
{
  "name": "South Andros Airport مطار ساوث أندروس",
  "city": "Mangrove Cay مانغروف كاي",
  "country": "Bahamas البهاما"
},
{
  "name": "Trabzon Air Base قاعدة طرابزون الجوية",
  "city": "Trabzon طرابزون",
  "country": "Turkey تركيا"
},
{
  "name": "French Polynesia مطار بولينزيا الفرنسية",
  "city": "Ua Huka وا هوكا",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "Narsarsuaq Airport مطار نارسارسواك",
  "city": "Narsarssurk نارسارسورك",
  "country": "Greenland غرينلاند"
},
{
  "name": "French Polynesia مطار بولينزيا الفرنسية",
  "city": "Ua Pou وا بو",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "San Juan Airport مطار سان خوان",
  "city": "9 de Julio 9 دي يوليو",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Samburu Airport مطار سامبورو",
  "city": "Samburu سامبورو",
  "country": "Kenya كينيا"
},
{
  "name": "Uberaba Airport مطار أوبرابا",
  "city": "Uberaba أوبرابا",
  "country": "Brazil البرازيل"
},
{
  "name": "Yamaguchi-Ube Airport مطار ياماغوتشي-أوب",
  "city": "Ube-shi أوب-شي",
  "country": "Japan اليابان"
},
{
  "name": "Ubon Airport مطار أوبون",
  "city": "Don Mot Daeng دون موت داينغ",
  "country": "Thailand تايلاند"
},
{
  "name": "Ust Ukhta Airport مطار أوست أوختا",
  "city": "Ukhta أوختا",
  "country": "Russia روسيا"
},
{
  "name": "Coronel Aviador Cesar Bombonato Airport مطار كورونيل أفيادور سيزار بومبونات",
  "city": "Uberlandia أوبرلانديا",
  "country": "Brazil البرازيل"
},
{
  "name": "Uzhgorod Airport مطار أوزغورود",
  "city": "Uzhhorod أوزهورود",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Udaipur Airport مطار أودايبور",
  "city": "Debari ديباري",
  "country": "India الهند"
},
{
  "name": "Quelimane Airport مطار كيلماني",
  "city": "Quelimane كيلماني",
  "country": "Mozambique موزمبيق"
},
{
  "name": "Kumejima Airport مطار كوميجما",
  "city": "Kumejima-cho كوميجما-تشو",
  "country": "Japan اليابان"
},
{
  "name": "Quetta Airport مطار كويتا",
  "city": "",
  "country": "Pakistan باكستان"
},
{
  "name": "Ufa South Airport مطار أوفا الجنوبي",
  "city": "Oufa أوفا",
  "country": "Russia روسيا"
},
{
  "name": "Ugashik Bay Airport مطار خليج أوغاشيك",
  "city": "Pilot Point نقطة الطيار",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Urganch مطار أورغانش",
  "city": "Urgench أورغينش",
  "country": "Uzbekistan أوزبكستان"
},
{
  "name": "Uganik Airport مطار أوغانيك",
  "city": "Kodiak كودياك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "El Carano Airport مطار إل كارانو",
  "city": "Quibdó كويبيدو",
  "country": "Colombia كولومبيا"
},
{
  "name": "Vietnam مطار فيتنام",
  "city": "Qui Nhon كوي نون",
  "country": "Vietnam فيتنام"
},
{
  "name": "Utila Airport مطار يوتيلا",
  "city": "Utila يوتيلا",
  "country": "Honduras هندوراس"
},
{
  "name": "Quincy Municipal Airport-Baldwin Field مطار كوينسي البلدي - حقل بالدوين",
  "city": "Quincy كوينسي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mariscal Sucre International Airport مطار ماريسكال سوكري الدولي",
  "city": "Quito كيتو",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Pluguffan Airport مطار بلوجوفان",
  "city": "Plomelin بلوميلين",
  "country": "France فرنسا"
},
{
  "name": "Kobe Airport مطار كوبه",
  "city": "Kobe-shi كوبه-شي",
  "country": "Japan اليابان"
},
{
  "name": "Ust-kamenogorsk مطار أوست-كامينيغورسك",
  "city": "Ust-kamenogorsk أوست-كامينيغورسك",
  "country": "Kazakhstan كازاخستان"
},
{
  "name": "Ulei Airport مطار أولي",
  "city": "Port-Vato بورت-فاتو",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Ulaanbaatar Southwest Airport مطار أولان باتر الجنوبي الغربي",
  "city": "Ulan Bator أولان باتر",
  "country": "Mongolia منغوليا"
},
{
  "name": "Ulaangom مطار أولانغوم",
  "city": "Ulaangom أولانغوم",
  "country": "Mongolia منغوليا"
},
{
  "name": "Quilpie Aerodrome مطار كويلبي",
  "city": "Quilpie كويلبي",
  "country": "Australia أستراليا"
},
{
  "name": "Gulu Airport مطار غولو",
  "city": "Gulu غولو",
  "country": "Uganda أوغندا"
},
{
  "name": "Ulyanovsk Northeast Airport مطار أوليانوفسك الشمالي الشرقي",
  "city": "Dimitrovgrad ديميتروفغراد",
  "country": "Russia روسيا"
},
{
  "name": "Uummannaq Airport مطار أوماناك",
  "city": "Uummannaq أوماناك",
  "country": "Greenland غرينلاند"
},
{
  "name": "Umea Airport مطار أوميا",
  "city": "Umea أوميا",
  "country": "Sweden السويد"
},
{
  "name": "Kiunga مطار كيونغا",
  "city": "Kiunga كيونغا",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Unalakleet مطار أونالاكلت",
  "city": "Unalakleet أونالاكلت",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ranong Airport مطار رانونغ",
  "city": "Ranong رانونغ",
  "country": "Thailand تايلاند"
},
{
  "name": "Diwopu Airport مطار ديووبو",
  "city": "Urumqi أورومتشي",
  "country": "China الصين"
},
{
  "name": "Kuressarre Airport مطار كويرسار",
  "city": "Kingissepa كينجيسبا",
  "country": "Estonia إستونيا"
},
{
  "name": "Rubem Berta International Airport مطار روبيم بيرتا الدولي",
  "city": "Uruguaiana أوروغوايانا",
  "country": "Brazil البرازيل"
},
{
  "name": "Uraj مطار أوراج",
  "city": "Uraj أوراج",
  "country": "Russian Federation الاتحاد الروسي"
},
{
  "name": "Boos Airport مطار بوس",
  "city": "St-Pierre سانت بيير",
  "country": "France فرنسا"
},
{
  "name": "Kursk مطار كورسك",
  "city": "Kursk كورسك",
  "country": "Russia روسيا"
},
{
  "name": "Surat Thani Airport مطار سورات ثاني",
  "city": "Phun Phin فُون فِين",
  "country": "Thailand تايلاند"
},
{
  "name": "Guriat Airport مطار قريات",
  "city": "Gurayat قريات",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Ushuaia Airport مطار أوشوايا",
  "city": "Ushuaia أوشوايا",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Usinsk مطار أوسينك",
  "city": "Usinsk أوسينك",
  "country": "Russia روسيا"
},
{
  "name": "Koh Samui Airport مطار كوه ساموي",
  "city": "Ko Samui كوه ساموي",
  "country": "Thailand تايلاند"
},
{
  "name": "Ulsan Airport مطار أولسان",
  "city": "Ulsan أولسان",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Usak مطار أوساك",
  "city": "Usak أوساك",
  "country": "Turkey تركيا"
},
{
  "name": "Busuanga Airport مطار بوسوانغا",
  "city": "Coron كورون",
  "country": "Philippines الفلبين"
},
{
  "name": "Udon Airport مطار أودون",
  "city": "Changwat Udon Thani; Udon Thani تشانغوات أودون ثاني",
  "country": "Thailand تايلاند"
},
{
  "name": "Pierre Van Ryneveld Airport مطار بيير فان رينفيلد",
  "city": "Upington أبينغتون",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Rayong Airport مطار رايونغ",
  "city": "Ban Chang بان تشانغ",
  "country": "Thailand تايلاند"
},
{
  "name": "K D Matanzima Airport مطار ك. د. ماتانزما",
  "city": "Umtata أومتابا",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Ulan Ude-Mukhino Airport مطار أولان أود-موخينو",
  "city": "Kabansk كابانسك",
  "country": "Russia روسيا"
},
{
  "name": "Baruun Urt Airport مطار بارون أورت",
  "city": "Baruun-Urt بارون أورت",
  "country": "Mongolia منغوليا"
},
{
  "name": "Yuzhno Sakhalinsk South Airport مطار يوجنو ساخالينسك الجنوبي",
  "city": "Kholmsk خولمسك",
  "country": "Russia روسيا"
},
{
  "name": "Ouloup Airport مطار أولوب",
  "city": "Fayaoué فاياوي",
  "country": "New Caledonia كاليدونيا الجديدة"
},
{
  "name": "Hewanorra International Airport مطار هيفانورا الدولي",
  "city": "Vieux Fort فيو فورت",
  "country": "St. Lucia سانت لوسيا"
},
{
  "name": "Metropolitan Area منطقة متروبوليتان",
  "city": "Wiesbaden فيسبادن",
  "country": "Germany ألمانيا"
},
{
  "name": "Janub Darfur مطار جنوب دارفور",
  "city": "Nyala نيالا",
  "country": "Sudan السودان"
},
{
  "name": "Yulin Airport مطار يولين",
  "city": "Yulin يولين",
  "country": "China الصين"
},
{
  "name": "Vaasa Airport مطار فاسا",
  "city": "Vaasa فاسا",
  "country": "Finland فنلندا"
},
{
  "name": "مطار فانيما Vanuatu",
  "city": "فانيما Vanimo",
  "country": "بابوا غينيا الجديدة Papua New Guinea"
},
{
  "name": "مطار تشيفاك Chevak Airport",
  "city": "هوبر باي Hooper Bay",
  "country": "الولايات المتحدة United States"
},
{
  "name": "مطار فان Van Airport",
  "city": "فان Van",
  "country": "تركيا Turkey"
},
{
  "name": "مطار سوافانوا Suavanao Airstrip",
  "city": "سوافانوا Suavanao",
  "country": "جزر سليمان Solomon Islands"
},
{
  "name": "مطار توبولي Topoli Airport",
  "city": "فارنا Varna",
  "country": "بلغاريا Bulgaria"
},
{
  "name": "مطار سيفاس Sivas Airport",
  "city": "سيفاس Sivas",
  "country": "تركيا Turkey"
},
{
  "name": "مطار لوبيباو Lupepau'u Airport",
  "city": "نيآفو Neiafu",
  "country": "تونغا Tonga"
},
{
  "name": "مطار فاردو Vardoe Airport",
  "city": "فاردو Vardo",
  "country": "النرويج Norway"
},
{
  "name": "مطار ألاسكا Alaska",
  "city": "بلو ماونتن Blue Mountain",
  "country": "الولايات المتحدة United States"
},
{
  "name": "مطار بريشيا مونتيكارى Brescia Montichiari",
  "city": "فيرونا Verona",
  "country": "إيطاليا Italy"
},
{
  "name": "مطار Vanuabalavu",
  "city": "فانوالا فافي Vanuabalavu",
  "country": "فيجي Fiji"
},
{
  "name": "مطار فيسبي Visby Airport",
  "city": "فيسبي Visby",
  "country": "السويد Sweden"
},
{
  "name": "مطار ماركو بولو Marco Polo International Airport",
  "city": "البندقية Venice",
  "country": "إيطاليا Italy"
},
{
  "name": "مطار تشولاي Chulai",
  "city": "تام كي Tamky",
  "country": "فيتنام Vietnam"
},
{
  "name": "مطار فيراكوبوس Viracopos International Airport",
  "city": "كامبيناس Campinas",
  "country": "البرازيل Brazil"
},
{
  "name": "مطار فيتنام Vietnam",
  "city": "كون داو Con Dao",
  "country": "فيتنام Vietnam"
},
{
  "name": "مطار فيكتوريا الإقليمي Victoria Regional Airport",
  "city": "فيكتوريا Victoria",
  "country": "الولايات المتحدة United States"
},
{
  "name": "مطار لوجيستيك الجنوبي Southern California Logistics Airport",
  "city": "فيكتورفيل Victorville",
  "country": "الولايات المتحدة United States"
},
{
  "name": "Ovda Airport مطار عوفدا",
  "city": "Ovda عوفدا",
  "country": "Israel إسرائيل"
},
{
  "name": "Fagernes Leirin Airport مطار فاغيرنس ليرين",
  "city": "Fagernes فاغيرنس",
  "country": "Norway النرويج"
},
{
  "name": "Vitoria da Conquista Airport مطار فيتوريا دا كونكويستا",
  "city": "Vitória da Conquista فيتوريا دا كونكويستا",
  "country": "Brazil البرازيل"
},
{
  "name": "Valverde Airport مطار فالverde",
  "city": "Valverde فالverde",
  "country": "Spain إسبانيا"
},
{
  "name": "Gobernador Castello Airport مطار غوبيرنادور كاستيلو",
  "city": "Viedma فييدما",
  "country": "Argentina الأرجنتين"
},
{
  "name": "Vadso Airport مطار فادسو",
  "city": "Vadso فادسو",
  "country": "Norway النرويج"
},
{
  "name": "Valdez Airport مطار فالدز",
  "city": "Valdez فالدز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Venetie مطار فينيتي",
  "city": "Venetie فينيتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Vernal Airport مطار فيرنال",
  "city": "Vernal فيرنال",
  "country": "United States الولايات المتحدة"
},
{
  "name": "General Heriberto Jara International Airport مطار جنرال هيريبيرتو خارا الدولي",
  "city": "Teocelo تيوسيلو",
  "country": "Mexico المكسيك"
},
{
  "name": "Vestmannaeyjar Airport مطار فيستماناير",
  "city": "Vestmannaeyjar فيستماناير",
  "country": "Iceland أيسلندا"
},
{
  "name": "Victoria Falls Airport مطار شلالات فيكتوريا",
  "city": "",
  "country": "Zimbabwe زيمبابوي"
},
{
  "name": "Vijaywada Airport مطار فيجايوادا",
  "city": "Manthena مانثينا",
  "country": "India الهند"
},
{
  "name": "Vigo Airport مطار فيغو",
  "city": "Vigo فيغو",
  "country": "Spain إسبانيا"
},
{
  "name": "Villagarzon Airport مطار فيليغارزون",
  "city": "Villagarzon فيليغارزون",
  "country": "Colombia كولومبيا"
},
{
  "name": "Saurimo Airport مطار ساوريمو",
  "city": "Saurimo ساوريمو",
  "country": "Angola أنغولا"
},
{
  "name": "Vilhelmina Airport مطار فيلهيلمينا",
  "city": "Vilhelmina فيلهيلمينا",
  "country": "Sweden السويد"
},
{
  "name": "French Polynesia بولينيزيا الفرنسية",
  "city": "Vahitahi فاهيتاهي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Vienna Schwechat International Airport مطار فيينا شفيشات الدولي",
  "city": "Klein-Neusiedl كلاين-نيوسيدل",
  "country": "Austria النمسا"
},
{
  "name": "El Vigia إليجيا",
  "city": "El Vigia إليجيا",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Vinh فينه",
  "city": "Vinh City مدينة فينه",
  "country": "Vietnam فيتنام"
},
{
  "name": "Virgin Gorda Airport مطار فيرجن غوردا",
  "city": "Virgin Gorda فيرجن غوردا",
  "country": "British Virgin Islands جزر فيرجن البريطانية"
},
{
  "name": "Dakhla Airport مطار الداخلة",
  "city": "Ad Dakhla الداخلة",
  "country": "Western Sahara الصحراء الغربية"
},
{
  "name": "Visalia Municipal Airport مطار فيساليا البلدي",
  "city": "Visalia فيساليا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Vitoria Airport مطار فيتوريا",
  "city": "Vitoria فيتوريا",
  "country": "Spain إسبانيا"
},
{
  "name": "Goiabeiras Airport مطار جويابيراس",
  "city": "Vitoria فيتوريا",
  "country": "Brazil البرازيل"
},
{
  "name": "Kien Giang Airport مطار كين غيانغ",
  "city": "Kien Giang كين غيانغ",
  "country": "Vietnam فيتنام"
},
{
  "name": "Ynukovo Airport مطار ينوكوفو",
  "city": "Podol'sk بودولسكي",
  "country": "Russia روسيا"
},
{
  "name": "Vorkuta Airport مطار فوركوتا",
  "city": "Ukhta أوختا",
  "country": "Russia روسيا"
},
{
  "name": "Valencia Airport مطار فالنسيا",
  "city": "Manises مانيسس",
  "country": "Spain إسبانيا"
},
{
  "name": "Valdosta Regional Airport مطار فالدوستا الإقليمي",
  "city": "Valdosta فالدوستا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Port Vila Bauerfield Airport مطار بورت فيلا باورفيلد",
  "city": "Port-Vila بورت فيلا",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Valladolid Airport مطار بلد الوليد",
  "city": "Valladolid بلد الوليد",
  "country": "Spain إسبانيا"
},
{
  "name": "Zim Valencia Airport مطار زيم فالنسيا",
  "city": "Valencia فالنسيا",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Vanuatu فانواتو",
  "city": "Valesdir فالدسير",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Dr Antonio Nicolas Briceno Airport مطار الدكتور أنطونيو نيكولاس بريسينو",
  "city": "Siquisique سيكويسيك",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Wales ويلز",
  "city": "Anglesey أنغليسي",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Vilnius Airport مطار فيلنيوس",
  "city": "Vilnius فيلنيوس",
  "country": "Lithuania ليتوانيا"
},
{
  "name": "Varanasi Airport مطار فاراناسي",
  "city": "Baragaon باراجون",
  "country": "India الهند"
},
{
  "name": "Vilanculos Airport مطار فيلانكولوس",
  "city": "Vilanculos فيلانكولوس",
  "country": "Mozambique موزمبيق"
},
{
  "name": "Gumrak Airport مطار غومراك",
  "city": "Kamyshin كاميشين",
  "country": "Russia روسيا"
},
{
  "name": "Nea Anchialos Airport مطار نيا أنشيالوس",
  "city": "Almiros ألميروس",
  "country": "Greece اليونان"
},
{
  "name": "Voronezh-Chertovitskoye Airport مطار فورونيج-تشيرتوفيتسكو",
  "city": "Semiluki سيميليوكي",
  "country": "Russia روسيا"
},
{
  "name": "Ondjiva أوندجيفا",
  "city": "Ongiva أونجيفا",
  "country": "Angola أنغولا"
},
{
  "name": "Vopnafjordur Airport مطار فوبنافيوردور",
  "city": "Egilsstadir إغيلستادير",
  "country": "Iceland آيسلندا"
},
{
  "name": "Eglin Air Force Base قاعدة إجلين الجوية",
  "city": "Eglin Village قرية إجلين",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Varkaus Airport مطار فركاوس",
  "city": "Varkaus فركاوس",
  "country": "Finland فنلندا"
},
{
  "name": "Verona Airport مطار فيرونا",
  "city": "Sommacampagna سوماتشامبانا",
  "country": "Italy إيطاليا"
},
{
  "name": "Vaeroy Airport مطار فياروي",
  "city": "Varoy فاروي",
  "country": "Norway النرويج"
},
{
  "name": "Villahermosa Airport مطار فيلاهيرموسا",
  "city": "Villahermosa فيلاهيرموسا",
  "country": "Mexico المكسيك"
},
{
  "name": "Lugansk Airport مطار لوهانسك",
  "city": "Luhans'k لوهانس",
  "country": "Ukraine أوكرانيا"
},
{
  "name": "Hasslo Airport مطار هاسلو",
  "city": "Vasteras فاستراس",
  "country": "Sweden السويد"
},
{
  "name": "Vientiane Airport مطار فينتيان",
  "city": "Vientiane فينتيان",
  "country": "Laos لاوس"
},
{
  "name": "Las Tunas Airport مطار لاس توناس",
  "city": "Becerra بيسيرا",
  "country": "Cuba كوبا"
},
{
  "name": "Vishakapatnam Airport مطار فيساكاباتنام",
  "city": "Visakhapatnam فيساكاباتنام",
  "country": "India الهند"
},
{
  "name": "Alfonso Lopez Airport مطار ألفونسو لوبيز",
  "city": "Valledupar فاليدوبار",
  "country": "Colombia كولومبيا"
},
{
  "name": "Vanguardia Airport مطار فanguardia",
  "city": "Villavicencio فيلافيشينتو",
  "country": "Colombia كولومبيا"
},
{
  "name": "Viru Viru International Airport مطار فيرو فيرو الدولي",
  "city": "Santa Cruz سانتا كروز",
  "country": "Bolivia بوليفيا"
},
{
  "name": "Artem North Airport مطار ارتيم الشمالي",
  "city": "Nakhodka ناخودكا",
  "country": "Russia روسيا"
},
{
  "name": "Illizi مطار إليزي",
  "city": "Illizi إليزي",
  "country": "Algeria الجزائر"
},
{
  "name": "Lichinga Airport مطار ليشينغا",
  "city": "Lichinga ليشينغا",
  "country": "Mozambique موزمبيق"
},
{
  "name": "San Pedro Airport مطار سان بيدرو",
  "city": "Mindelo مينديلو",
  "country": "Cape Verde الرأس الأخضر"
},
{
  "name": "Kronoberg Airport مطار كرونوبيرغ",
  "city": "Vaxjo فاكشو",
  "country": "Sweden السويد"
},
{
  "name": "Wales مطار ويلز",
  "city": "Wales ويلز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Saudi Arabia مطار المملكة العربية السعودية",
  "city": "Wadi Ad Dawasir وادي الدواسر",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Wanganui Airport مطار وانغاني",
  "city": "Wanganui وانغاني",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Mahajanga مطار ماهاجانغا",
  "city": "Antsalova أنتسالوفا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Waterford Airport مطار وترفورد",
  "city": "Waterford وترفورد",
  "country": "Ireland أيرلندا"
},
{
  "name": "Okecie International Airport مطار أوكيتي الدولي",
  "city": "Warsaw وارسو",
  "country": "Poland بولندا"
},
{
  "name": "Stebbins مطار ستيبنس",
  "city": "Stebbins ستيبنس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Beaver بييفر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Windhoek Airport مطار ويندهوك",
  "city": "",
  "country": "Namibia ناميبيا"
},
{
  "name": "Shandong مطار شاندونغ",
  "city": "Weifang ويفانغ",
  "country": "China الصين"
},
{
  "name": "Shandong مطار شاندونغ",
  "city": "Weihai ويهاي",
  "country": "China الصين"
},
{
  "name": "Weipa Aerodrome مطار ويبا",
  "city": "Weipa ويبا",
  "country": "Australia أستراليا"
},
{
  "name": "Wagga Wagga Airport مطار واجا واجا",
  "city": "Forest Hill فوريست هيل",
  "country": "Australia أستراليا"
},
{
  "name": "Mau Hau Airport مطار ماو هاو",
  "city": "Waingapu واينغابو",
  "country": "Indonesia إندونيسيا"
},
{
  "name": "Wadi Halfa' مطار وادي حلفا",
  "city": "Wadi Halfa وادي حلفا",
  "country": "Sudan السودان"
},
{
  "name": "Whakatane Airport مطار واكاتاني",
  "city": "Whakatane واكاتاني",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Wick Airport مطار ويك",
  "city": "Wick ويك",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Nairobi Wilson Airport مطار نيروبي ويلسون",
  "city": "Nairobi نيروبي",
  "country": "Kenya كينيا"
},
{
  "name": "Winton Aerodrome مطار وينتون",
  "city": "Corfield كورفيلد",
  "country": "Australia أستراليا"
},
{
  "name": "Woja مطار ووجا",
  "city": "Woja ووجا",
  "country": "Marshall Islands جزر مارشال"
},
{
  "name": "Wonju Airport مطار وونجو",
  "city": "WonJu وونجو",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Wanaka Airport مطار وانكا",
  "city": "Wanaka وانكا",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Wakkanai Airport مطار واككناي",
  "city": "Wakkanai-shi واكناي",
  "country": "Japan اليابان"
},
{
  "name": "Aleknagik مطار أليكناجيك",
  "city": "Aleknagik أليكناجيك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Wellington International Airport مطار ويلينغتون الدولي",
  "city": "Wellington ويلينغتون",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Walaha مطار والها",
  "city": "Walaha والها",
  "country": "Vanuatu فanuatu"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Selawik سيلويك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Wallis Island مطار جزيرة واليس",
  "city": "Wallis Island جزيرة واليس",
  "country": "Wallis and Futuna Islands جزر واليس وفوتونا"
},
{
  "name": "Meyers Chuck مطار مايرز تشوك",
  "city": "Meyers Chuck مايرز تشوك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Maroantsetra Airport مطار ماروانتسيترا",
  "city": "Maroantsetra ماروانتسيترا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "White Mountain مطار وايت ماونتن",
  "city": "White Mountain وايت ماونتن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Mananara مطار مانانارا",
  "city": "Mananara مانانارا",
  "country": "Madagascar مدغشقر"
},
{
  "name": "Napaskiak مطار ناباسكيك",
  "city": "Napakiak ناباكيك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Wunnummin Lake Airport مطار بحيرة ونومين",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Naga Airport مطار ناغا",
  "city": "Pili بيلي",
  "country": "Philippines الفلبين"
},
{
  "name": "Windorah Airport مطار ويندورا",
  "city": "Tanbar تانبار",
  "country": "Australia أستراليا"
},
{
  "name": "Nawabshah Airport مطار نواب شاه",
  "city": "Nawabshah نواب شاه",
  "country": "Pakistan باكستان"
},
{
  "name": "Wenzhou Airport مطار وينزهو",
  "city": "Wenzhou وينزهو",
  "country": "China الصين"
},
{
  "name": "Wipim مطار ويبيم",
  "city": "Wipim ويبيم",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Whangarei Airport مطار وانغاري",
  "city": "Whangarei وانغاري",
  "country": "New Zealand نيوزيلندا"
},
{
  "name": "Wrangell Airport مطار رانغيل",
  "city": "Wrangell رانغيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Worland Municipal Airport مطار ورلاند البلدي",
  "city": "Worland ورلاند",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Strachowice Airport مطار ستراشوفيتس",
  "city": "Wroclaw وروكلاو",
  "country": "Poland بولندا"
},
{
  "name": "Wuchang Nanhu Airport مطار ووشانغ نانهوا",
  "city": "Wuhan ووهان",
  "country": "China الصين"
},
{
  "name": "Wiluna Airport مطار ويلونا",
  "city": "Wiluna ويلونا",
  "country": "Australia أستراليا"
},
{
  "name": "Wuyishan Airport مطار وويشان",
  "city": "Wuyishan وويشان",
  "country": "China الصين"
},
{
  "name": "Wuxi Airport مطار ووشي",
  "city": "Wuxi ووشي",
  "country": "China الصين"
},
{
  "name": "Rooikop مطار رويكوب",
  "city": "Walvis Bay خليج والفيش",
  "country": "South Africa جنوب أفريقيا"
},
{
  "name": "Wewak International Airport مطار ويك الدولي",
  "city": "Wewak ويك",
  "country": "Papua New Guinea بابوا غينيا الجديدة"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Whale Pass وادي الحيتان",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Alaska مطار ألاسكا",
  "city": "Newtok نيوتوک",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Wanxian Airport مطار وانشيان",
  "city": "Wanxian وانشيان",
  "country": "China الصين"
},
{
  "name": "Whyalla Airport مطار وايالا",
  "city": "Whyalla وايالا",
  "country": "Australia أستراليا"
},
{
  "name": "Yellowstone Airport مطار يلوستون",
  "city": "West Yellowstone ويست يلوستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Churchill Rail Station محطة تشرتشل",
  "city": "Oro-Medonte أورو-ميدونتي",
  "country": "Canada كندا"
},
{
  "name": "Chapeco Airport مطار تشابيكو",
  "city": "Chapeco تشابيكو",
  "country": "Brazil البرازيل"
},
{
  "name": "Capreol Rail Service خدمة السكك الحديدية كابريول",
  "city": "Capreol كابريول",
  "country": "Canada كندا"
},
{
  "name": "Dorval Rail Station محطة دورفال",
  "city": "Dorval دورفال",
  "country": "Canada كندا"
},
{
  "name": "Cambellton محطة كامبلتون",
  "city": "Cambellton كامبلتون",
  "country": "Canada كندا"
},
{
  "name": "Bearskin Lake Airport مطار بحيرة بيرسكن",
  "city": "Casummit Lake كازوميت لاك",
  "country": "Canada كندا"
},
{
  "name": "Birjand Airport مطار بيرجند",
  "city": "Birjand بيرجند",
  "country": "Iran إيران"
},
{
  "name": "Brockville Airport مطار بروكفيل",
  "city": "Brockville بروكفيل",
  "country": "Canada كندا"
},
{
  "name": "Christmas Island Airport مطار جزيرة الكريسماس",
  "city": "The Settlement التسوية",
  "country": "Christmas Island جزيرة الكريسماس"
},
{
  "name": "Ontario محطة أونتاريو",
  "city": "Oro-Medonte أورو-ميدونتي",
  "country": "Canada كندا"
},
{
  "name": "Chatham Airport مطار شاثام",
  "city": "Chatham شاثام",
  "country": "Canada كندا"
},
{
  "name": "Europort Vatry مطار يوروبورت فاتري",
  "city": "Coole كول",
  "country": "France فرنسا"
},
{
  "name": "Lille-Europe Railway Station محطة ليل-أوروبا",
  "city": "Lille ليل",
  "country": "France فرنسا"
},
{
  "name": "Railway Station محطة السكك الحديدية",
  "city": "مدينة غير محددة",
  "country": "Canada كندا"
},
{
  "name": "Halifax Rail Service خدمة السكك الحديدية هاليفاكس",
  "city": "Halifax هاليفاكس",
  "country": "Canada كندا"
},
{
  "name": "Railway Station محطة السكك الحديدية",
  "city": "مدينة غير محددة",
  "country": "Canada كندا"
},
{
  "name": "Drummondville Airport مطار دروموندفيل",
  "city": "Drummondville دروموندفيل",
  "country": "Canada كندا"
},
{
  "name": "Moncton Rail Service خدمة السكك الحديدية مونكتون",
  "city": "Moncton مونكتون",
  "country": "Canada كندا"
},
{
  "name": "London Ontario Rail Service خدمة السكك الحديدية لندن أونتاريو",
  "city": "London لندن",
  "country": "Canada كندا"
},
{
  "name": "Ontario أونتاريو",
  "city": "Oro-Medonte أورو-ميدونتي",
  "country": "Canada كندا"
},
{
  "name": "Railway Station محطة السكك الحديدية",
  "city": "مدينة غير محددة",
  "country": "Canada كندا"
},
{
  "name": "Prince George محطة برينس جورج",
  "city": "Prince George برينس جورج",
  "country": "Canada كندا"
},
{
  "name": "Canada كندا",
  "city": "Prince Rupert برينس روبرت",
  "country": "Canada كندا"
},
{
  "name": "Sarina Rail Station محطة سكة حديد سارينا",
  "city": "Sarina سارينا",
  "country": "Canada كندا"
},
{
  "name": "Railway Station محطة السكك الحديدية",
  "city": "Sudbury سادبوري",
  "country": "Canada كندا"
},
{
  "name": "The Pas Rail Service خدمة السكك الحديدية ذا باس",
  "city": "The Pas ذا باس",
  "country": "Canada كندا"
},
{
  "name": "Vancouver Rail Service خدمة السكك الحديدية فانكوفر",
  "city": "Vancouver فانكوفر",
  "country": "Canada كندا"
},
{
  "name": "Windsor Ontario Rail Service خدمة السكك الحديدية وندسور أونتاريو",
  "city": "Windsor وندسور",
  "country": "Canada كندا"
},
{
  "name": "Disneyland Railway Station محطة سكة حديد ديزني لاند",
  "city": "Paris باريس",
  "country": "France فرنسا"
},
{
  "name": "Lac Edouard Rail Service خدمة السكك الحديدية لاك إدوارد",
  "city": "Lac Edouard لاك إدوارد",
  "country": "Canada كندا"
},
{
  "name": "Winnipeg Rail Service خدمة السكك الحديدية وينيبيغ",
  "city": "Winnipeg وينيبيغ",
  "country": "Canada كندا"
},
{
  "name": "Kingston Rail Service خدمة السكك الحديدية كينغستون",
  "city": "Kingston كينغستون",
  "country": "Canada كندا"
},
{
  "name": "Ladysmith Rail Service خدمة السكك الحديدية لاديسميث",
  "city": "Ladysmith لاديسميث",
  "country": "Canada كندا"
},
{
  "name": "Saskatchewan ساسكاتشوان",
  "city": "Melville ميلفيل",
  "country": "Canada كندا"
},
{
  "name": "Quebec كيبيك",
  "city": "New Carlisle نيو كارلايل",
  "country": "Canada كندا"
},
{
  "name": "Strasbourg Bus Station محطة حافلات ستراسبورغ",
  "city": "Strasbourg ستراسبورغ",
  "country": "France فرنسا"
},
{
  "name": "London City Airport مطار لندن سيتي",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Stockholm Central Station محطة ستوكهولم المركزية",
  "city": "Stockholm ستوكهولم",
  "country": "Sweden السويد"
},
{
  "name": "Sodertalje محطة سودرتاليه",
  "city": "Sodertalje سودرتاليه",
  "country": "Sweden السويد"
},
{
  "name": "Stratford محطة ستراتفورد",
  "city": "Stratford ستراتفورد",
  "country": "Canada كندا"
},
{
  "name": "Parent Rail Service خدمة السكك الحديدية بارنت",
  "city": "Parent بارنت",
  "country": "Canada كندا"
},
{
  "name": "Perce Rail Service خدمة السكك الحديدية بيرس",
  "city": "Perce بيرس",
  "country": "Canada كندا"
},
{
  "name": "Eskilstuna Station محطة إسكilstونا",
  "city": "Eskilstuna إسكilstونا",
  "country": "Sweden السويد"
},
{
  "name": "Senneterre Rail Service خدمة السكك الحديدية سينيتيير",
  "city": "Senneterre سينيتيير",
  "country": "Canada كندا"
},
{
  "name": "Malmö Station محطة مالمو",
  "city": "Malmo مالمو",
  "country": "Sweden السويد"
},
{
  "name": "Weymont Rail Service خدمة السكك الحديدية وايمونت",
  "city": "Weymont وايمونت",
  "country": "Canada كندا"
},
{
  "name": "Malmo South Railway سكة حديد مالمو الجنوبية",
  "city": "Malmo مالمو",
  "country": "Sweden السويد"
},
{
  "name": "Alexandria ألكسندريا",
  "city": "Alexandria ألكسندريا",
  "country": "Canada كندا"
},
{
  "name": "Tierp Station محطة تيرب",
  "city": "Tierp تيرب",
  "country": "Sweden السويد"
},
{
  "name": "Brantford برانتفورد",
  "city": "Brantford برانتفورد",
  "country": "Canada كندا"
},
{
  "name": "Finkenwerder Airport مطار فينكنويردر",
  "city": "Hamburg هامبورغ",
  "country": "Germany ألمانيا"
},
{
  "name": "Sainte Foy Rail Service خدمة السكك الحديدية سانت فوي",
  "city": "Quebec كيبيك",
  "country": "Canada كندا"
},
{
  "name": "Charny شارني",
  "city": "Charny شارني",
  "country": "Canada كندا"
},
{
  "name": "Lund لوند",
  "city": "Lund لوند",
  "country": "Sweden السويد"
},
{
  "name": "Cobourg Rail Station محطة السكك الحديدية كوباورغ",
  "city": "Cobourg كوباورغ",
  "country": "Canada كندا"
},
{
  "name": "Coteau Rail Station محطة السكك الحديدية كوتو",
  "city": "Coteau كوتو",
  "country": "Canada كندا"
},
{
  "name": "England إنجلترا",
  "city": "Grantham غرانثام",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Kangiqsualujjuaq Airport مطار كانجيسوالوجواك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Ontario أونتاريو",
  "city": "Grimsby غريمزبي",
  "country": "Canada كندا"
},
{
  "name": "Railway Station محطة السكك الحديدية",
  "city": "Aix La Chapelle آيكس لا شابيل",
  "country": "Germany ألمانيا"
},
{
  "name": "Valence Station محطة فالنس",
  "city": "Valence فالنس",
  "country": "France فرنسا"
},
{
  "name": "Georgetown Rail Station محطة السكك الحديدية جورجتاون",
  "city": "Georgetown جورجتاون",
  "country": "Canada كندا"
},
{
  "name": "Belgium بلجيكا",
  "city": "Liege لييج",
  "country": "Belgium بلجيكا"
},
{
  "name": "British Columbia كولومبيا البريطانية",
  "city": "Chemainus شيمينوس",
  "country": "Canada كندا"
},
{
  "name": "Guelph Airport مطار غويلف",
  "city": "Guelph غويلف",
  "country": "Canada كندا"
},
{
  "name": "Ontario أونتاريو",
  "city": "Ingersoll إنجرسول",
  "country": "Canada كندا"
},
{
  "name": "Xichang North Airport مطار شيشوانغباننا الشمالي",
  "city": "Xichang شيشوانغباننا",
  "country": "China الصين"
},
{
  "name": "Maxville Rail Station محطة السكك الحديدية ماكسفيل",
  "city": "Maxville ماكسفيل",
  "country": "Canada كندا"
},
{
  "name": "Ontario أونتاريو",
  "city": "Napanee ناباني",
  "country": "Canada كندا"
},
{
  "name": "Xilinhot Airport مطار شيلينهوت",
  "city": "Xilin Hot شيليين",
  "country": "China الصين"
},
{
  "name": "Quebec كيبيك",
  "city": "Saint Hyacinthe سانت هياسينث",
  "country": "Canada كندا"
},
{
  "name": "St Marys Rail Station محطة السكك الحديدية سانت ماريز",
  "city": "St Marys سانت ماريز",
  "country": "Canada كندا"
},
{
  "name": "Woodstock Rail Service خدمة السكك الحديدية وودستوك",
  "city": "Woodstock وودستوك",
  "country": "Canada كندا"
},
{
  "name": "London City Airport مطار مدينة لندن",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Hsien Yang Airport مطار شيان يانغ",
  "city": "Xianyang شيان يانغ",
  "country": "China الصين"
},
{
  "name": "Xieng Khouang Xieng Khouang",
  "city": "Xieng Khouang شيانغ خاو",
  "country": "Lao People's Democratic Republic لاو"
},
{
  "name": "Kuala Lumpur Central Station كوالا لمبور المركزية",
  "city": "Kuala Lumpur كوالا لمبور",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Kasabonika Airport مطار كاسابونكا",
  "city": "Casummit Lake بحيرة كاسوميت",
  "country": "Canada كندا"
},
{
  "name": "Sackville Rail Station محطة سكة حديد ساكفيل",
  "city": "Sackville ساكفيل",
  "country": "Canada كندا"
},
{
  "name": "Lac Brochet مطار لاك بروشيه",
  "city": "Lac Brochet لاك بروشيه",
  "country": "Canada كندا"
},
{
  "name": "Quebec Stn. Rail Svce. محطة سكة حديد كيبيك",
  "city": "Quebec كيبيك",
  "country": "Canada كندا"
},
{
  "name": "St Lambert Rail Svce. محطة سكة حديد سانت لامبرت",
  "city": "Montreal مونتريال",
  "country": "Canada كندا"
},
{
  "name": "Guildwood محطة غيلدوود",
  "city": "Guildwood غيلدوود",
  "country": "Canada كندا"
},
{
  "name": "Saint Louis Airport مطار سانت لويس",
  "city": "Saint Louis سانت لويس",
  "country": "Senegal السنغال"
},
{
  "name": "Ontario محطة أونتاريو",
  "city": "Niagara Falls شلالات نياجارا",
  "country": "Canada كندا"
},
{
  "name": "Aldershot Rail Station محطة سكة حديد ألدرشوت",
  "city": "Aldershot ألدرشوت",
  "country": "Canada كندا"
},
{
  "name": "Nova Scotia محطة نوفا سكوتيا",
  "city": "Truro ترو",
  "country": "Canada كندا"
},
{
  "name": "Manihi Airport مطار مانيهي",
  "city": "Manihi مانيهي",
  "country": "French Polynesia بولينيزيا الفرنسية"
},
{
  "name": "Xiamen Airport مطار شيامن",
  "city": "Xiamen شيامن",
  "country": "China الصين"
},
{
  "name": "Macas Airport مطار ماكاس",
  "city": "Zúñac زونياك",
  "country": "Ecuador الإكوادور"
},
{
  "name": "Yam Island مطار جزيرة يام",
  "city": "Yam Island جزيرة يام",
  "country": "Australia أستراليا"
},
{
  "name": "Northwest Arkansas Regional Airport مطار شمال غرب أركنساس الإقليمي",
  "city": "Bentonville بينتونفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sinop Airport مطار سينوب",
  "city": "Santo Antônio do Içá سانتو أنطونيو دو إيسا",
  "country": "Brazil البرازيل"
},
{
  "name": "Nottingham Airport مطار نوتنغهام",
  "city": "Nottingham نوتنغهام",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Xining Airport مطار شينينغ",
  "city": "Xining شينينغ",
  "country": "China الصين"
},
{
  "name": "Northallerton محطة نورثالرتون",
  "city": "Northallerton نورثالرتون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Nuneaton Rail Station محطة سكة حديد نونيتون",
  "city": "Nuneaton نونيتون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "York مطار يورك",
  "city": "New York نيويورك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Ontario محطة أونتاريو",
  "city": "Oakville أوكفيل",
  "country": "Canada كندا"
},
{
  "name": "Poitou-Charentes محطة بواتو شارنتس",
  "city": "Poitiers بواتييه",
  "country": "France فرنسا"
},
{
  "name": "Parksville Rail Service خدمة سكة حديد باركسبيل",
  "city": "Parksville باركسبيل",
  "country": "Canada كندا"
},
{
  "name": "Penrith Rail Station محطة سكة حديد بنريث",
  "city": "Penrith بنريث",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Gare du Nord Rail Stn محطة سكة حديد غار دو نورد",
  "city": "Paris باريس",
  "country": "France فرنسا"
},
{
  "name": "Montpellier Railway Station محطة سكة حديد مونبلييه",
  "city": "Montpellier مونبلييه",
  "country": "France فرنسا"
},
{
  "name": "Brampton محطة برامبتون",
  "city": "Brampton برامبتون",
  "country": "Canada كندا"
},
{
  "name": "Port Klang محطة بورت كلانغ",
  "city": "Port Klang بورت كلانغ",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Quepos Managua Airport مطار كيبوس ماناغوا",
  "city": "Quepos كيبوس",
  "country": "Costa Rica كوستاريكا"
},
{
  "name": "Qualicum Beach Airport مطار كواليكوم بيتش",
  "city": "Qualicum Beach كواليكوم بيتش",
  "country": "Canada كندا"
},
{
  "name": "Runcorn Rail Station محطة رنكورن للسكك الحديدية",
  "city": "Runcorn رنكورن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Marseille Railway محطة مرسيليا للسكك الحديدية",
  "city": "Marseille مرسيليا",
  "country": "France فرنسا"
},
{
  "name": "Pine Ridge Rail Station محطة باين ريدج للسكك الحديدية",
  "city": "Pine Ridge باين ريدج",
  "country": "Canada كندا"
},
{
  "name": "Rugby Rail Station محطة رغبى للسكك الحديدية",
  "city": "Rugby رغبى",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Jerez Airport مطار خيريس",
  "city": "Jerez خيريس",
  "country": "Spain إسبانيا"
},
{
  "name": "South Caicos Airport مطار ساوث كايكوس",
  "city": "Cockburn Harbour كوكبورن هاربر",
  "country": "Turks And Caicos Islands جزر تركس وكايكوس"
},
{
  "name": "Centre محطة مركز",
  "city": "Tours تور",
  "country": "France فرنسا"
},
{
  "name": "South Indian Lake Airport مطار ساوث إنديان ليك",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Seletar Airport مطار سيلتار",
  "city": "Singapore سنغافورة",
  "country": "Singapore سنغافورة"
},
{
  "name": "England إنجلترا",
  "city": "Salisbury سالزبري",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Thargomindah Aerodrome مطار ثارجوميندا",
  "city": "Thargomindah ثارجوميندا",
  "country": "Australia أستراليا"
},
{
  "name": "England إنجلترا",
  "city": "Thirsk ثيرس",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Tadoule Lake Airport مطار تادول ليك",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Strathroy Rail Station محطة ستراثروي للسكك الحديدية",
  "city": "Strathroy ستراثروي",
  "country": "Canada كندا"
},
{
  "name": "Jiangsu مقاطعة جيانغسو",
  "city": "Xuzhou زو",
  "country": "China الصين"
},
{
  "name": "England إنجلترا",
  "city": "Stockport ستوكبورت",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "England إنجلترا",
  "city": "Stafford ستافورد",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "United Kingdom المملكة المتحدة",
  "city": "Crewe كرو",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Longville Municipal Airport مطار لونغفيل",
  "city": "Longville لونغفيل",
  "country": "United States الولايات المتحدة"
},
{
  "name": "United Kingdom المملكة المتحدة",
  "city": "Peterborough بيتر بورو",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Stevenage Rail Station محطة ستيفيناج للسكك الحديدية",
  "city": "Stevenage ستيفيناج",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Durham Rail Station محطة دورهام للسكك الحديدية",
  "city": "Durham دورهام",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Belleville Rail Service خدمة السكك الحديدية في بيلفيل",
  "city": "Belleville بيلفيل",
  "country": "Canada كندا"
},
{
  "name": "Belleville محطة بيلفيل",
  "city": "Belleville بيلفيل",
  "country": "Scotland اسكتلندا"
},
{
  "name": "Wakefield Westgate Rail Station محطة ويكفيلد ويستغيت للسكك الحديدية",
  "city": "Wakefield Westgate ويكفيلد ويستغيت",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Stroke on Trent Rail Station محطة ستروك على ترينت",
  "city": "Stroke on Trent ستروك على ترينت",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Karlskrona Rail Svc. خدمة السكك الحديدية في كارلسكرونا",
  "city": "Karlskrona كارلسكرونا",
  "country": "Sweden السويد"
},
{
  "name": "Gothenburg غوتنبرغ",
  "city": "Gothenburg غوتنبرغ",
  "country": "Sweden السويد"
},
{
  "name": "Hallsberg Rail Station محطة هالسبيرغ",
  "city": "Hallsberg هالسبيرغ",
  "country": "Sweden السويد"
},
{
  "name": "Warrington وارينجتون",
  "city": "Warrington وارينجتون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Hassleholm هاسلهولم",
  "city": "Hassleholm هاسلهولم",
  "country": "Sweden السويد"
},
{
  "name": "Enkoping إنكوبينغ",
  "city": "Enkoping إنكوبينغ",
  "country": "Sweden السويد"
},
{
  "name": "Orebro Railway Station محطة أوريبرو",
  "city": "Orebro أوريبرو",
  "country": "Sweden السويد"
},
{
  "name": "Swindon سويندون",
  "city": "Swindon سويندون",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Varberg Rail Station محطة فاربيريغ",
  "city": "Varberg فاربيريغ",
  "country": "Sweden السويد"
},
{
  "name": "Wyoming Rail Station محطة وايومنغ",
  "city": "Wyoming وايومنغ",
  "country": "Canada كندا"
},
{
  "name": "Nykoping نيكوبينغ",
  "city": "Nykoping نيكوبينغ",
  "country": "Sweden السويد"
},
{
  "name": "Alvesta ألفيستا",
  "city": "Alvesta ألفيستا",
  "country": "Sweden السويد"
},
{
  "name": "Degerfors Rail Station محطة دجيرفورس",
  "city": "Degerfors دجيرفورس",
  "country": "Sweden السويد"
},
{
  "name": "Katrineholm كاترنهولم",
  "city": "Katrineholm كاترنهولم",
  "country": "Sweden السويد"
},
{
  "name": "Mjolby مجولبي",
  "city": "Mjolby مجولبي",
  "country": "Sweden السويد"
},
{
  "name": "Riyadh Air Base قاعدة الرياض الجوية",
  "city": "Riyadh الرياض",
  "country": "Saudi Arabia المملكة العربية السعودية"
},
{
  "name": "Leksand Rail Station محطة ليكسند",
  "city": "Leksand ليكسند",
  "country": "Sweden السويد"
},
{
  "name": "Sophia Antipolis Heliport هليوبورت صوفيا أنتيبوليس",
  "city": "Valbonne فالوبون",
  "country": "France فرنسا"
},
{
  "name": "Hedemora هيديمورا",
  "city": "Hedemora هيديمورا",
  "country": "Sweden السويد"
},
{
  "name": "Sundsvall Railway Station محطة سوندسفال",
  "city": "Sundsvall سوندسفال",
  "country": "Sweden السويد"
},
{
  "name": "Yandina ياندينا",
  "city": "Yandina ياندينا",
  "country": "Solomon Islands جزر سليمان"
},
{
  "name": "Borlange بورلانج",
  "city": "Borlänge بورلانج",
  "country": "Sweden السويد"
},
{
  "name": "Herrljunga هيرليانغ",
  "city": "Herrljunga هيرليانغ",
  "country": "Sweden السويد"
},
{
  "name": "Lyon Part-Dieu Railway Station محطة ليون بارت ديو",
  "city": "Lyon ليون",
  "country": "France فرنسا"
},
{
  "name": "Falkoping Rail Station محطة فالكوبيغ",
  "city": "Falkoping فالكوبيغ",
  "country": "Sweden السويد"
},
{
  "name": "Helsingborg Railway هلسينغبورغ للسكك الحديدية",
  "city": "Helsingborg هلسينغبورغ",
  "country": "Sweden السويد"
},
{
  "name": "Flen فلين",
  "city": "Flen فلين",
  "country": "Sweden السويد"
},
{
  "name": "Norrkoping Railway Service خدمة السكك الحديدية في نوركوبينغ",
  "city": "Norrkoping نوركوبينغ",
  "country": "Sweden السويد"
},
{
  "name": "Kristinehamn كريستينهام",
  "city": "Kristinehamn كريستينهام",
  "country": "Sweden السويد"
},
{
  "name": "Kyrlbo كيرلبو",
  "city": "Avesta Krylbo أفستا كيرلبو",
  "country": "Sweden السويد"
},
{
  "name": "Angelholm Railway Svc. خدمة السكك الحديدية في أنجلشولم",
  "city": "Angelholm/Helsingborg أنجلشولم/هلسينغبورغ",
  "country": "Sweden السويد"
},
{
  "name": "Sala سلا",
  "city": "Sala سلا",
  "country": "Sweden السويد"
},
{
  "name": "Arvika Airport مطار أرفيكا",
  "city": "Arvika أرفيكا",
  "country": "Sweden السويد"
},
{
  "name": "Rail (Generic) محطة السكك الحديدية",
  "city": "Rail (Generic) محطة السكك الحديدية",
  "country": "Japan اليابان"
},
{
  "name": "Edmonton International Airport مطار إدمونتون الدولي",
  "city": "Edmonton إدمونتون",
  "country": "Canada كندا"
},
{
  "name": "Macau Ferry عبارة ماكاو",
  "city": "Macau ماكاو",
  "country": "Macao ماكاو"
},
{
  "name": "Avignon أفينيون",
  "city": "Avignon أفينيون",
  "country": "France فرنسا"
},
{
  "name": "Oslo Central Station محطة أوسلو المركزية",
  "city": "Oslo أوسلو",
  "country": "Norway النرويج"
},
{
  "name": "Off line Point نقطة غير متصلة",
  "city": "Rail (Generic) محطة السكك الحديدية",
  "country": "United States الولايات المتحدة"
},
{
  "name": "TGV Station محطة تي جي في",
  "city": "Toulon تولون",
  "country": "France فرنسا"
},
{
  "name": "Anahim Lake Airport مطار بحيرة أناهيم",
  "city": "Alexis Creek أليكسي كريك",
  "country": "Canada كندا"
},
{
  "name": "Cat Lake Airport مطار كات ليك",
  "city": "Casummit Lake بحيرة كاسوميت",
  "country": "Canada كندا"
},
{
  "name": "Fort Frances Municipal Airport مطار فورت فرانس",
  "city": "Fort Frances فورت فرانس",
  "country": "Canada كندا"
},
{
  "name": "Yakutat Airport مطار ياكوتات",
  "city": "Yakutat ياكوتات",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sault Ste Marie Airport مطار سولت سانت ماري",
  "city": "Sault Ste. Marie سولت سانت ماري",
  "country": "Canada كندا"
},
{
  "name": "Yaounde Airport مطار ياوندي",
  "city": "Yaounde ياوندي",
  "country": "Cameroon الكاميرون"
},
{
  "name": "Yap International Airport مطار ياب الدولي",
  "city": "Colonia كولونيا",
  "country": "Federated States of Micronesia الولايات المتحدة الميكرونية"
},
{
  "name": "Attawapiskat Airport مطار أتاوابيسكات",
  "city": "Winisk وينيسك",
  "country": "Canada كندا"
},
{
  "name": "Angling Lake Airport مطار أنغليغ ليك",
  "city": "Casummit Lake بحيرة كاسوميت",
  "country": "Canada كندا"
},
{
  "name": "St Anthony Airport مطار سانت أنطوني",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Tofino Airport مطار توفينو",
  "city": "Lake Cowichan بحيرة كويتشين",
  "country": "Canada كندا"
},
{
  "name": "Pelly Bay Townsite Airport مطار بيللي باي",
  "city": "Cambridge Bay كامبردج باي",
  "country": "Canada كندا"
},
{
  "name": "Baie Comeau Airport مطار باي كومو",
  "city": "Betsiamites بيتسياميتس",
  "country": "Canada كندا"
},
{
  "name": "Bagotville Airport مطار باجوتفيل",
  "city": "Saguenay ساجوناي",
  "country": "Canada كندا"
},
{
  "name": "Black Tickle Airport مطار بلاك تيكل",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Baker Lake Airport مطار بيكر ليك",
  "city": "Chesterfield Inlet تشيسترفيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Campbell River Airport مطار كامبل ريفر",
  "city": "Gold River غولد ريفر",
  "country": "Canada كندا"
},
{
  "name": "Yibin ييبين",
  "city": "Yibin ييبين",
  "country": "China الصين"
},
{
  "name": "Brandon Airport مطار براندون",
  "city": "Killarney كيلارني",
  "country": "Canada كندا"
},
{
  "name": "Brochet بروشيت",
  "city": "Brochet بروشيت",
  "country": "Canada كندا"
},
{
  "name": "Berens River Airport مطار بيرنز ريفر",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Bedwell Harbor ميناء بدويل",
  "city": "Bedwell Harbor بدويل هاربر",
  "country": "Canada كندا"
},
{
  "name": "Lourdes-De-Blanc-Sablon Airport مطار لورد دي بلانك سابلون",
  "city": "Havre-St-Pierre هافري سانت بيير",
  "country": "Canada كندا"
},
{
  "name": "Toronto Downtown Airport مطار وسط مدينة تورونتو",
  "city": "Toronto تورونتو",
  "country": "Canada كندا"
},
{
  "name": "Cross Lake Airport مطار كروس ليك",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Chesterfield Inlet Airport مطار شستر فيلد إنليت",
  "city": "Chesterfield Inlet شستر فيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Cullaton Lake Airport مطار كولاتون ليك",
  "city": "Chesterfield Inlet شستر فيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Clyde River Airport مطار كليد ريفر",
  "city": "Iqaluit إيكالويت",
  "country": "Canada كندا"
},
{
  "name": "Dawson Airport مطار داوسون",
  "city": "Dawson داوسون",
  "country": "Canada كندا"
},
{
  "name": "Deer Lake Airport مطار دير ليك",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Dauphin Airport مطار دوفين",
  "city": "Dauphin دوفين",
  "country": "Canada كندا"
},
{
  "name": "Nain Airport مطار نين",
  "city": "Happy Valley-Goose Bay هابي فالي غوس باي",
  "country": "Canada كندا"
},
{
  "name": "Dawson Creek Airport مطار داوسون كريك",
  "city": "Dawson Creek داوسون كريك",
  "country": "Canada كندا"
},
{
  "name": "Edmonton International Airport مطار إدمنتون الدولي",
  "city": "Leduc ليدوك",
  "country": "Canada كندا"
},
{
  "name": "Arviat Airport مطار أرفيات",
  "city": "Chesterfield Inlet شستر فيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Fort Severn Airport مطار فورت سيفيرن",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Yonago Airport مطار يوناكو",
  "city": "Sakaiminato-shi ساكايميناتو-شي",
  "country": "Japan اليابان"
},
{
  "name": "Inuvik Airport مطار إنوفيك",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Fort Albany Airport مطار فورت ألباني",
  "city": "Winisk وينيسك",
  "country": "Canada كندا"
},
{
  "name": "Iqaluit Airport مطار إيكالويت",
  "city": "Iqaluit إيكالويت",
  "country": "Canada كندا"
},
{
  "name": "Fredericton Airport مطار فريدريكتون",
  "city": "Fredericton فريدريكتون",
  "country": "Canada كندا"
},
{
  "name": "Fort Hope Airport مطار فورت هوب",
  "city": "Marathon ماراثون",
  "country": "Canada كندا"
},
{
  "name": "Flin Flon Airport مطار فلين فلون",
  "city": "Flin Flon فلين فلون",
  "country": "Canada كندا"
},
{
  "name": "Fort Simpson Airport مطار فورت سيمبسون",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Fox Harbour Aerodrome مطار فوكس هاربر",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Gillies Bay Airport مطار جيلز باي",
  "city": "Gibsons جيبسونز",
  "country": "Canada كندا"
},
{
  "name": "Ganges Harbor Airport مطار غانجيز هاربر",
  "city": "Saltspring Island جزيرة سالت سبرينغ",
  "country": "Canada كندا"
},
{
  "name": "Fort Good Hope Airport مطار فورت جود هوب",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Kingston Airport مطار كينغستون",
  "city": "Kingston كينغستون",
  "country": "Canada كندا"
},
{
  "name": "La Grande Riviere Airport مطار لا غراندي ريفيير",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Gods Lake Narrows Airport مطار غودز ليك ناروز",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Grise Fiord Airport مطار غريز فيورد",
  "city": "Iqaluit إكالويت",
  "country": "Canada كندا"
},
{
  "name": "Port Hope Simpson Aerodrome مطار بورت هوب سيمبسون",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Hudson Bay Airport مطار خليج هدسون",
  "city": "Melfort ميلفورت",
  "country": "Canada كندا"
},
{
  "name": "Dryden Regional Airport مطار درايدن الإقليمي",
  "city": "Dryden درايدن",
  "country": "Canada كندا"
},
{
  "name": "Charlottetown Airport مطار شارلوت تاون",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Holman Airport مطار هولمان",
  "city": "Holman هولمان",
  "country": "Canada كندا"
},
{
  "name": "Gjoa Haven Airport مطار جوا هافن",
  "city": "Cambridge Bay كامبريدج باي",
  "country": "Canada كندا"
},
{
  "name": "Hamilton Airport مطار هاميلتون",
  "city": "Beamsville بيمسفيل",
  "country": "Canada كندا"
},
{
  "name": "Hopedale Airport مطار هوبيديل",
  "city": "Happy Valley-Goose Bay هابي فالي-غوس باي",
  "country": "Canada كندا"
},
{
  "name": "Poplar Hill Airport مطار بوبلار هيل",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Harrington Harbour Airport مطار هارينغتون هاربر",
  "city": "Havre-St-Pierre هافري سانت بيير",
  "country": "Canada كندا"
},
{
  "name": "Sechelt Water Aerodrome مطار سيتشلت المائي",
  "city": "Gibsons جيبسونز",
  "country": "Canada كندا"
},
{
  "name": "Montreal St Hubert Airport مطار مونتريال سانت هوبير",
  "city": "St-Hubert سانت هوبير",
  "country": "Canada كندا"
},
{
  "name": "Hay River Airport مطار هاي ريفر",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Halifax International Airport مطار هالي فاكس الدولي",
  "city": "Fall River فول ريفر",
  "country": "Canada كندا"
},
{
  "name": "Pakuashipi Airport مطار باكواشيبى",
  "city": "Havre-St-Pierre هافري سانت بيير",
  "country": "Canada كندا"
},
{
  "name": "Ivujivik Airport مطار إيفوجيفك",
  "city": "Chisasibi شيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Yining مطار يينينغ",
  "city": "Yining يينينغ",
  "country": "China الصين"
},
{
  "name": "Pond Inlet Airport مطار بوند إنليت",
  "city": "Iqaluit إكالويت",
  "country": "Canada كندا"
},
{
  "name": "Willow Run Airport مطار ويليو رن",
  "city": "Ypsilanti يبسيلانتي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Island Lake-Garden Hill Airport مطار آيلاند ليك-غاردن هيل",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Stephenville International Airport مطار ستيفن فيل الدولي",
  "city": "Stephenville ستيفن فيل",
  "country": "Canada كندا"
},
{
  "name": "Kamloops Airport مطار كاملوپس",
  "city": "Kamloops كاملوپس",
  "country": "Canada كندا"
},
{
  "name": "Kitchener Airport مطار كيتشنر",
  "city": "Kitchener كيتشنر",
  "country": "Canada كندا"
},
{
  "name": "Kangirsuk Airport مطار كانغيرسوك",
  "city": "Chisasibi شيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Schefferville Airport مطار شيفرفيل",
  "city": "Chisasibi شيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Yakima Air Terminal مطار ياكيما",
  "city": "Yakima ياكيما",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Waskaganish Airport مطار واسكاجانيش",
  "city": "Chisasibi شيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Yakutsk Airport مطار ياكوتسك",
  "city": "Yakutsk ياكوتسك",
  "country": "Russia روسيا"
},
{
  "name": "Klemtu Water Aerodrome مطار كليمبتو المائي",
  "city": "Masset ماسيه",
  "country": "Canada كندا"
},
{
  "name": "Chisasibi Aerodrome مطار شيساسيبي",
  "city": "Chisasibi شيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Lake Harbour Airport مطار بحيرة هاربور",
  "city": "Iqaluit إكوالويت",
  "country": "Canada كندا"
},
{
  "name": "Lac la Martre Aerodrome مطار لاك لا مارت",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Lansdowne House Airport مطار لانسداون هاوس",
  "city": "Marathon ماراثون",
  "country": "Canada كندا"
},
{
  "name": "Lloydminster Airport مطار لويدمنستر",
  "city": "Vegreville فيغريفيل",
  "country": "Canada كندا"
},
{
  "name": "La Tuque Airport مطار لا توك",
  "city": "La Tuque لا توك",
  "country": "Canada كندا"
},
{
  "name": "Kelowna International Airport مطار كيلونا الدولي",
  "city": "Kelowna كيلونا",
  "country": "Canada كندا"
},
{
  "name": "Mary's Harbour Airport مطار ماريز هاربر",
  "city": "St. Anthony سانت أنثوني",
  "country": "Canada كندا"
},
{
  "name": "Fort Mcmurray Airport مطار فورت ماكمورى",
  "city": "Fort Chipewyan فورت تشيبيوان",
  "country": "Canada كندا"
},
{
  "name": "Makkovik Airport مطار ماكوفك",
  "city": "Happy Valley-Goose Bay وادي هابي فالي-غوس باي",
  "country": "Canada كندا"
},
{
  "name": "Moosonee Airport مطار مونسوني",
  "city": "Winisk وينيسك",
  "country": "Canada كندا"
},
{
  "name": "Aéroport de Chapais-Chibougamau مطار شابايس-شيبوجاماو",
  "city": "Métabetchouan ميتابتشوان",
  "country": "Canada كندا"
},
{
  "name": "Mirabel International Airport مطار ميرابيل الدولي",
  "city": "Mirabel ميرابيل",
  "country": "Canada كندا"
},
{
  "name": "Downtown Rail Station محطة السكك الحديدية في وسط المدينة",
  "city": "Montreal مونتريال",
  "country": "Canada كندا"
},
{
  "name": "Natashquan Airport مطار ناتاشوان",
  "city": "Havre-St-Pierre هافري سانت بيير",
  "country": "Canada كندا"
},
{
  "name": "Yenbo Airport مطار ينبع",
  "city": "Yanbu al Bahr ينبع البحر",
  "country": "Saudi Arabia السعودية"
},
{
  "name": "Wemindji Airport مطار ويمينجي",
  "city": "Chisasibi شيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Ottawa Gatineau Airport مطار أوتاوا غاتينو",
  "city": "Gatineau غاتينو",
  "country": "Canada كندا"
},
{
  "name": "Norway House Airport مطار نوروي هاوس",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Youngstown-Warren Regional Airport مطار ينجستون-وارين الإقليمي",
  "city": "Vienna فيينا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Yanji مطار يانجي",
  "city": "Yanji يانجي",
  "country": "China الصين"
},
{
  "name": "North Spirit Lake Airport مطار شمال بحيرة سبيريت",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Natuashish مطار ناتوشيش",
  "city": "Natuashish ناتوشيش",
  "country": "Canada كندا"
},
{
  "name": "Nemiscau Airport مطار نيميسكو",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Yantai Airport مطار يانتاى",
  "city": "Yantai يانتاى",
  "country": "China الصين"
},
{
  "name": "Yang Yang International Airport مطار يانغ يانغ الدولي",
  "city": "Sonyang-Myeon سونيانغ مريون",
  "country": "South Korea كوريا الجنوبية"
},
{
  "name": "Yancheng مطار يانشينغ",
  "city": "Yancheng يانشينغ",
  "country": "China الصين"
},
{
  "name": "Old Crow Airport مطار أولد كرو",
  "city": "Dawson داوسون",
  "country": "Canada كندا"
},
{
  "name": "Ogoki Aerodrome مطار أوغوك",
  "city": "Marathon ماراثون",
  "country": "Canada كندا"
},
{
  "name": "Oxford House Airport مطار أكسفورد هاوس",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "High Level Airport مطار هاي ليفيل",
  "city": "Brownvale براونفيل",
  "country": "Canada كندا"
},
{
  "name": "Oshawa Airport مطار أوشاوا",
  "city": "Oshawa أوشاوا",
  "country": "Canada كندا"
},
{
  "name": "Rainbow Lake Airport مطار رينبو ليك",
  "city": "Brownvale براونفيل",
  "country": "Canada كندا"
},
{
  "name": "Ottawa International Airport مطار أوتاوا الدولي",
  "city": "Ottawa أوتاوا",
  "country": "Canada كندا"
},
{
  "name": "Port Alberni Airport مطار بورت ألبرني",
  "city": "Lake Cowichan بحيرة كويتشين",
  "country": "Canada كندا"
},
{
  "name": "Paulatuk Airport مطار باولاتو",
  "city": "Hay River نهر هاي",
  "country": "Canada كندا"
},
{
  "name": "Peace River Airport مطار نهر السلام",
  "city": "Brownvale براونفيل",
  "country": "Canada كندا"
},
{
  "name": "Inukjuak Airport مطار إنوكجواك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Aupaluk Airport مطار أوبالوك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Pickle Lake Airport مطار بيكل ليك",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Pikangikum Airport مطار بيكانجيكوم",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Peawanuck Airport مطار بيوانك",
  "city": "Winisk وينيسك",
  "country": "Canada كندا"
},
{
  "name": "Prince Rupert Airport مطار برنس روبرت",
  "city": "Prince Rupert برنس روبرت",
  "country": "Canada كندا"
},
{
  "name": "Powell River Airport مطار باول ريفر",
  "city": "Powell River باول ريفر",
  "country": "Canada كندا"
},
{
  "name": "Povungnituk Airport مطار بوفونغنيتوك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Burns Lake Airport مطار بيرنز ليك",
  "city": "Smithers سماذرز",
  "country": "Canada كندا"
},
{
  "name": "Quebec Airport مطار كيبيك",
  "city": "Ste-Foy سانت فوي",
  "country": "Canada كندا"
},
{
  "name": "Quaqtaq Airport مطار كواكتاك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "The Pas Airport مطار ذا باس",
  "city": "The Pas ذا باس",
  "country": "Canada كندا"
},
{
  "name": "Red Deer Regional Airport مطار ريد دير الإقليمي",
  "city": "Sylvan Lake سيلفان ليك",
  "country": "Canada كندا"
},
{
  "name": "Windsor Airport مطار وندسور",
  "city": "Windsor ويندسور",
  "country": "Canada كندا"
},
{
  "name": "Kenora Airport مطار كينورا",
  "city": "Kenora كينورا",
  "country": "Canada كندا"
},
{
  "name": "Lethbridge Airport مطار ليذبريدج",
  "city": "Pincher بينشر",
  "country": "Canada كندا"
},
{
  "name": "Greater Moncton International Airport مطار مونكتون الدولي",
  "city": "Moncton مونكتون",
  "country": "Canada كندا"
},
{
  "name": "Nakina Airport مطار ناكينا",
  "city": "Marathon ماراثون",
  "country": "Canada كندا"
},
{
  "name": "Comox Airport مطار كوموكس",
  "city": "Comox كوموكس",
  "country": "Canada كندا"
},
{
  "name": "Regina Airport مطار ريجينا",
  "city": "Regina ريجينا",
  "country": "Canada كندا"
},
{
  "name": "Thunder Bay International Airport مطار ثاندر باي الدولي",
  "city": "Thunder Bay ثاندر باي",
  "country": "Canada كندا"
},
{
  "name": "Grande Prairie Airport مطار غراندي بيري",
  "city": "Brownvale براونفيل",
  "country": "Canada كندا"
},
{
  "name": "Gander International Airport مطار غاندر الدولي",
  "city": "Gander غاندر",
  "country": "Canada كندا"
},
{
  "name": "Sydney Airport مطار سيدني",
  "city": "Sydney سيدني",
  "country": "Canada كندا"
},
{
  "name": "Quesnel Airport مطار كوينسل",
  "city": "Quesnel كوينسل",
  "country": "Canada كندا"
},
{
  "name": "Rae Lakes Aerodrome مطار بحيرات ريه",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Resolute Airport مطار ريزولوت",
  "city": "Iqaluit إيكالويت",
  "country": "Canada كندا"
},
{
  "name": "Cartwright Airport مطار كارترايت",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Rigolet Aerodrome مطار ريجوليت",
  "city": "Happy Valley-Goose Bay وادي السعادة - خليج غوس",
  "country": "Canada كندا"
},
{
  "name": "Roberval Airport مطار روبيرفال",
  "city": "Roberval روبيرفال",
  "country": "Canada كندا"
},
{
  "name": "Red Lake Airport مطار بحيرة حمراء",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "Red Sucker Lake Airport مطار بحيرة رد سوكر",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Rankin Inlet Airport مطار رانكين إنليت",
  "city": "Chesterfield Inlet تشيسترفيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Sudbury Airport مطار سادبوري",
  "city": "Garson جارسن",
  "country": "Canada كندا"
},
{
  "name": "Snowdrift Aerodrome مطار سنودرافت",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Postville Aerodrome مطار بوستفيل",
  "city": "Happy Valley-Goose Bay وادي هابي-غوس",
  "country": "Canada كندا"
},
{
  "name": "Nanisivik Airport مطار نانيسيفيك",
  "city": "Iqaluit إكاليويت",
  "country": "Canada كندا"
},
{
  "name": "Shante Airport مطار شانتي",
  "city": "Meiktila ميكتيلا",
  "country": "Myanmar ميانمار"
},
{
  "name": "Sachs Harbour Airport مطار ساكس هاربر",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Thicket Portage Airport مطار ثيكت بورتاج",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Cape Dorset Airport مطار كيب دورست",
  "city": "Iqaluit إكاليويت",
  "country": "Canada كندا"
},
{
  "name": "Alma مطار ألما",
  "city": "Alma ألما",
  "country": "Canada كندا"
},
{
  "name": "Thompson Airport مطار تومسون",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Big Trout Lake Airport مطار بيغ تروا",
  "city": "Casummit Lake كاسومت ليك",
  "country": "Canada كندا"
},
{
  "name": "La Macaza مطار لا ماكازا",
  "city": "Mont Tremblant مونت تريمبلان",
  "country": "Canada كندا"
},
{
  "name": "Tasiujuaq Airport مطار تاسيوجواك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Timmins Airport مطار تيمينز",
  "city": "South Porcupine ساوث بوركوبين",
  "country": "Canada كندا"
},
{
  "name": "Toronto City Centre Airport مطار مركز مدينة تورونتو",
  "city": "Toronto تورونتو",
  "country": "Canada كندا"
},
{
  "name": "Tuktoyaktuk Airport مطار توكتويكتوك",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Umiujaq Airport مطار أوميوجاك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Aéroport International Pierre-Elliott-Trudeau مطار بيير إليوت ترودو الدولي",
  "city": "Dorval دورفال",
  "country": "Canada كندا"
},
{
  "name": "Yuma International Airport مطار يما الدولي",
  "city": "Yuma يما",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Repulse Bay Airport مطار ريبولس باي",
  "city": "Chesterfield Inlet تشيستر فيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Hall Beach Airport مطار هول بيش",
  "city": "Iqaluit إكاليويت",
  "country": "Canada كندا"
},
{
  "name": "Rouyn Noranda Airport مطار رويون نوراندا",
  "city": "Évain إيفين",
  "country": "Canada كندا"
},
{
  "name": "Moroni Iconi Airport مطار مورووني إكوني",
  "city": "Moroni مورووني",
  "country": "Comoros جزر القمر"
},
{
  "name": "Bonaventure Airport مطار بونافينتشر",
  "city": "Percé بيرس",
  "country": "Canada كندا"
},
{
  "name": "Broughton Island Airport مطار جزيرة بروتون",
  "city": "Iqaluit إكاليويت",
  "country": "Canada كندا"
},
{
  "name": "Val d'or Airport مطار فال دور",
  "city": "Val-d'or فال دور",
  "country": "Canada كندا"
},
{
  "name": "Kuujjuaq Airport مطار كوججوك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Norman Wells Airport مطار نورمان ويلز",
  "city": "Hay River هاي ريفر",
  "country": "Canada كندا"
},
{
  "name": "Vancouver International Airport مطار فانكوفر الدولي",
  "city": "Richmond ريتشموند",
  "country": "Canada كندا"
},
{
  "name": "Deer Lake Airport مطار دير ليك",
  "city": "Casummit Lake كاسومت ليك",
  "country": "Canada كندا"
},
{
  "name": "Kangiqsujuaq Airport مطار كانغيكسوجواك",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Winnipeg International Airport مطار وينيبيغ الدولي",
  "city": "Winnipeg وينيبيغ",
  "country": "Canada كندا"
},
{
  "name": "Inner Harbour Airport مطار الميناء الداخلي",
  "city": "Hay River نهر هاي",
  "country": "Canada كندا"
},
{
  "name": "Fort Franklin Airport مطار فورت فرانكلين",
  "city": "Hay River نهر هاي",
  "country": "Canada كندا"
},
{
  "name": "Wabush Airport مطار وابوش",
  "city": "Wabush وابوش",
  "country": "Canada كندا"
},
{
  "name": "Williams Lake Airport مطار بحيرة ويليامز",
  "city": "Williams Lake بحيرة ويليامز",
  "country": "Canada كندا"
},
{
  "name": "Williams Harbour Airport مطار ويليامز هاربر",
  "city": "St. Anthony سانت أنطوني",
  "country": "Canada كندا"
},
{
  "name": "Webequie Airport مطار ويبيكوي",
  "city": "Marathon ماراثون",
  "country": "Canada كندا"
},
{
  "name": "Green Lake Water Aerodrome مطار غرين ليك المائي",
  "city": "Gibsons غيبسونز",
  "country": "Canada كندا"
},
{
  "name": "Cranbrook Airport مطار كرانبروك",
  "city": "Cranbrook كرانبروك",
  "country": "Canada كندا"
},
{
  "name": "John G Diefenbaker International Airport مطار جون جي ديفنبكر الدولي",
  "city": "Saskatoon ساسكاتشوان",
  "country": "Canada كندا"
},
{
  "name": "Medicine Hat Airport مطار ميديسين هات",
  "city": "Medicine Hat ميديسين هات",
  "country": "Canada كندا"
},
{
  "name": "North Peace Airport مطار نورث بيس",
  "city": "Fort St. John فورت سانت جون",
  "country": "Canada كندا"
},
{
  "name": "Rimouski Airport مطار ريموسكي",
  "city": "Rimouski ريموسكي",
  "country": "Canada كندا"
},
{
  "name": "Sioux Lookout Airport مطار سيو لوك آوت",
  "city": "Sioux Lookout سيو لوك آوت",
  "country": "Canada كندا"
},
{
  "name": "Whale Cove Airport مطار ويل كوف",
  "city": "Chesterfield Inlet تشيسترفيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Pangnirtung Airport مطار بانجنيتيونغ",
  "city": "Iqaluit إيكالويت",
  "country": "Canada كندا"
},
{
  "name": "Prince George Airport مطار برينس جورج",
  "city": "Prince George برينس جورج",
  "country": "Canada كندا"
},
{
  "name": "Terrace Airport مطار تيراس",
  "city": "Terrace تيراس",
  "country": "Canada كندا"
},
{
  "name": "London International Airport مطار لندن الدولي",
  "city": "London لندن",
  "country": "Canada كندا"
},
{
  "name": "Abbotsford International Airport مطار أبوتسفورد الدولي",
  "city": "Abbotsford أبوتسفورد",
  "country": "Canada كندا"
},
{
  "name": "Whitehorse International Airport مطار وايت هورس الدولي",
  "city": "Whitehorse وايت هورس",
  "country": "Canada كندا"
},
{
  "name": "North Bay Airport مطار نورث باي",
  "city": "North Bay نورث باي",
  "country": "Canada كندا"
},
{
  "name": "Calgary International Airport مطار كالجاري الدولي",
  "city": "Calgary كالجاري",
  "country": "Canada كندا"
},
{
  "name": "Smithers Airport مطار سميثرز",
  "city": "Smithers سميثرز",
  "country": "Canada كندا"
},
{
  "name": "Fort Nelson Airport مطار فورت نيلسون",
  "city": "Fort Nelson فورت نيلسون",
  "country": "Canada كندا"
},
{
  "name": "Penticton Airport مطار بينتيكتون",
  "city": "Penticton بينتيكتون",
  "country": "Canada كندا"
},
{
  "name": "Charlottetown Airport مطار شارلوت تاون",
  "city": "Charlottetown شارلوت تاون",
  "country": "Canada كندا"
},
{
  "name": "Taloyoak Airport مطار تالويوك",
  "city": "Cambridge Bay كامبريدج باي",
  "country": "Canada كندا"
},
{
  "name": "Victoria International Airport مطار فيكتوريا الدولي",
  "city": "Sidney سيدني",
  "country": "Canada كندا"
},
{
  "name": "Lynn Lake Airport مطار لين ليك",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Goose Bay Airport مطار غوس باي",
  "city": "Happy Valley-Goose Bay هابي فالي-غوس باي",
  "country": "Canada كندا"
},
{
  "name": "St John's International Airport مطار سانت جون الدولي",
  "city": "St. John's سانت جون",
  "country": "Canada كندا"
},
{
  "name": "Kapuskasing Airport مطار كابوسكاسينغ",
  "city": "Kapuskasing كابوسكاسينغ",
  "country": "Canada كندا"
},
{
  "name": "Mont Joli Airport مطار مونت جولي",
  "city": "Mont-Joli مونت جولي",
  "country": "Canada كندا"
},
{
  "name": "Toronto Lester B Pearson International Airport مطار تورونتو ليستر بييرسون الدولي",
  "city": "Mississauga ميسيساجا",
  "country": "Canada كندا"
},
{
  "name": "Yellowknife Airport مطار ييلو نايف",
  "city": "Yellowknife ييلو نايف",
  "country": "Canada كندا"
},
{
  "name": "Salluit Airport مطار سالويت",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "Sandspit Airport مطار سانسبت",
  "city": "Masset ماسيت",
  "country": "Canada كندا"
},
{
  "name": "Sarnia Airport مطار سارنيا",
  "city": "Sarnia سارنيا",
  "country": "Canada كندا"
},
{
  "name": "Coral Harbour Airport مطار كورال هاربر",
  "city": "Chesterfield Inlet تشيسترفيلد إنليت",
  "country": "Canada كندا"
},
{
  "name": "Port Hardy Airport مطار بورت هاردي",
  "city": "Gibsons جيبسونز",
  "country": "Canada كندا"
},
{
  "name": "Sept Iles Airport مطار سيبت إيل",
  "city": "Sept-Îles سيبت إيل",
  "country": "Canada كندا"
},
{
  "name": "Trail Airport مطار ترايل",
  "city": "Trail ترايل",
  "country": "Canada كندا"
},
{
  "name": "York Landing Airport مطار يورك لاندينغ",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Zadar Airport مطار زادار",
  "city": "Zadar زادار",
  "country": "Croatia كرواتيا"
},
{
  "name": "Zagreb Airport مطار زغرب",
  "city": "Nagygoricza ناغيوريتسا",
  "country": "Croatia كرواتيا"
},
{
  "name": "Zahedan International Airport مطار زاهدان الدولي",
  "city": "Dowzdab داوزداد",
  "country": "Iran إيران"
},
{
  "name": "Pichoy Airport مطار بيتشوي",
  "city": "Pelchuquin بيلتشوكين",
  "country": "Chile تشيلي"
},
{
  "name": "Zamboanga International Airport مطار زامبوانغا الدولي",
  "city": "Zamboanga زامبوانغا",
  "country": "Philippines الفلبين"
},
{
  "name": "Bavaria مطار بافاريا",
  "city": "Nuremberg نورمبرغ",
  "country": "Germany ألمانيا"
},
{
  "name": "Zhaotong مطار زهاوتونغ",
  "city": "Zhaotong زهاوتونغ",
  "country": "China الصين"
},
{
  "name": "Zaragoza Air Base قاعدة Zaragoza الجوية",
  "city": "Zaragoza سراغوسا",
  "country": "Spain إسبانيا"
},
{
  "name": "Switzerland مطار سويسرا",
  "city": "Basel بازل",
  "country": "Switzerland سويسرا"
},
{
  "name": "Bathurst Airport مطار باثورست",
  "city": "Bathurst باثورست",
  "country": "Canada كندا"
},
{
  "name": "Biloela مطار بيلوئلا",
  "city": "Biloela كيندارى",
  "country": "Australia أستراليا"
},
{
  "name": "Baltimore مطار بالتيمور",
  "city": "Baltimore بالتيمور",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Chah Bahar Airport مطار تشاه بهار",
  "city": "Chabahar تشابهار",
  "country": "Iran إيران"
},
{
  "name": "Skopje Airport مطار سكوبيا",
  "city": "Skopje سكوبيا",
  "country": "Macedonia مقدونيا"
},
{
  "name": "Zacatecas Airport مطار زكاتيكاس",
  "city": "Pánuco بانوكو",
  "country": "Mexico المكسيك"
},
{
  "name": "Maquehue Airport مطار ماكوي",
  "city": "Padre Las Casas بادري لاس كاساس",
  "country": "Chile تشيلي"
},
{
  "name": "Basel SBB station محطة بازل",
  "city": "Basel بازل",
  "country": "Switzerland سويسرا"
},
{
  "name": "Kingsford Smith Airport مطار كينغسفورد سميث",
  "city": "Sydney سيدني",
  "country": "Australia أستراليا"
},
{
  "name": "London City Airport مطار لندن سيتي",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Kelsey Airport مطار كيلسي",
  "city": "Kelsey كيلسي",
  "country": "Canada كندا"
},
{
  "name": "Zei مطار زاي",
  "city": "Zei زاي",
  "country": "Nigeria نيجيريا"
},
{
  "name": "Satu Mare Airport مطار ساتو ماري",
  "city": "Satu Mare ساتو ماري",
  "country": "Romania رومانيا"
},
{
  "name": "Bella Bella Airport مطار بيلا بيلا",
  "city": "Masset ماسيت",
  "country": "Canada كندا"
},
{
  "name": "East Main Airport مطار إيست مين",
  "city": "Chisasibi تشيساسيبي",
  "country": "Canada كندا"
},
{
  "name": "London محطة لندن",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Zeu مطار زيو",
  "city": "Zeu زيو",
  "country": "Uganda أوغندا"
},
{
  "name": "Chesterfield محطة تشيسترفيلد",
  "city": "Chesterfield تشيسترفيلد",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Rennes محطة رين",
  "city": "Rennes رين",
  "country": "France فرنسا"
},
{
  "name": "Fort Mcpherson Airport مطار فورت مكفرسون",
  "city": "Hay River هاى ريفر",
  "country": "Canada كندا"
},
{
  "name": "Fort Norman Airport مطار فورت نورمان",
  "city": "Hay River هاى ريفر",
  "country": "Canada كندا"
},
{
  "name": "Bordeaux محطة بوردو",
  "city": "Bordeaux بوردو",
  "country": "France فرنسا"
},
{
  "name": "Philadelphia Rail محطة فيلادلفيا",
  "city": "Philadelphia فيلادلفيا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Buffalo مطار بوفالو",
  "city": "Buffalo بوفالو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "New London محطة نيو لندن",
  "city": "Groton جروتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Glasgow محطة غلاسكو",
  "city": "Glasgow غلاسكو",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Copenhagen Main Station محطة كوبنهاغن الرئيسية",
  "city": "Copenhagen كوبنهاغن",
  "country": "Denmark الدنمارك"
},
{
  "name": "Gods River Airport مطار غودز ريفر",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Zhongshan Ferry Port محطة عبّارات تشونغشان",
  "city": "Zhongshan تشونغشان",
  "country": "China الصين"
},
{
  "name": "Gotha غوثا",
  "city": "Gotha غوثا",
  "country": "Germany ألمانيا"
},
{
  "name": "Gethsemani Airport مطار جثسيماني",
  "city": "Havre-St-Pierre هافري سان بيير",
  "country": "Canada كندا"
},
{
  "name": "Gaua Airport مطار غاوا",
  "city": "Gaua غاوا",
  "country": "Vanuatu فانواتو"
},
{
  "name": "Zhanjiang Airport مطار تشانجيانغ",
  "city": "Zhanjiang تشانجيانغ",
  "country": "China الصين"
},
{
  "name": "Bus Station محطة الحافلات",
  "city": "Houston هيوستن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Fallowfield Railway محطة فالو فيلد للسكك الحديدية",
  "city": "Ottawa أوتاوا",
  "country": "Canada كندا"
},
{
  "name": "Ziguinchor Airport مطار زيغوينشور",
  "city": "Ziguinchor زيغوينشور",
  "country": "Senegal السنغال"
},
{
  "name": "Ixtapa Zihuatanejo International Airport مطار إيكتابا زيهواتانيجو الدولي",
  "city": "Petatlán بيتاتلان",
  "country": "Mexico المكسيك"
},
{
  "name": "Inverness Rail Station محطة إنفيرنيس للسكك الحديدية",
  "city": "Inverness إنفيرنيس",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Tanjung Pelepas مطار تانجونغ بيلابس",
  "city": "Tanjung Pelepas تانجونغ بيلابس",
  "country": "Malaysia ماليزيا"
},
{
  "name": "Kaschechewan Airport مطار كاشيشوان",
  "city": "Winisk وينيسك",
  "country": "Canada كندا"
},
{
  "name": "Kegaska Airport مطار كيغاسكا",
  "city": "Havre-St-Pierre هافري سان بيير",
  "country": "Canada كندا"
},
{
  "name": "Le Mans لي مان",
  "city": "Le Mans لي مان",
  "country": "France فرنسا"
},
{
  "name": "Playa de Oro International Airport مطار بلايا دي أورو الدولي",
  "city": "Manzanillo مانزانيلو",
  "country": "Mexico المكسيك"
},
{
  "name": "England إنجلترا",
  "city": "London لندن",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "La Tabatiere Airport مطار لا تاباتيير",
  "city": "Havre-St-Pierre هافري سان بيير",
  "country": "Canada كندا"
},
{
  "name": "Albany International Airport مطار ألباني الدولي",
  "city": "Albany ألباني",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hamburg Hauptbahnhof محطة هامبورغ الرئيسية",
  "city": "Hamburg هامبورغ",
  "country": "Germany ألمانيا"
},
{
  "name": "New Jersey نيو جيرسي",
  "city": "Newark نيوارك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "General Mitchell International Airport مطار جنرال ميتشل الدولي",
  "city": "Milwaukee ميلووكي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Masset Airport مطار ماسيت",
  "city": "Masset ماسيت",
  "country": "Canada كندا"
},
{
  "name": "Bavaria بافاريا",
  "city": "Munich ميونيخ",
  "country": "Germany ألمانيا"
},
{
  "name": "Huangpu Harbour ميناء هوانغبو",
  "city": "Huangpu هوانغبو",
  "country": "China الصين"
},
{
  "name": "Nanaimo Harbour Airport مطار هاربر نانايمو",
  "city": "Nanaimo نانايمو",
  "country": "Canada كندا"
},
{
  "name": "Sinop Airport مطار سيناو",
  "city": "Santo Antônio do Içá سانتو أنطونيو دو إيشا",
  "country": "Brazil البرازيل"
},
{
  "name": "Newman Airport مطار نيو مان",
  "city": "Newman نيو مان",
  "country": "Australia أستراليا"
},
{
  "name": "Santa Elena Airport مطار سانتا إيلينا",
  "city": "Santa Elena de Uairén سانتا إيلينا دي وايرن",
  "country": "Venezuela فنزويلا"
},
{
  "name": "Zanzibar Airport مطار زنجبار",
  "city": "Stone Town ستون تاون",
  "country": "Tanzania تنزانيا"
},
{
  "name": "Canal Bajo Carlos H Siebert Airport مطار كانال باجو كارلوس اتش سيبرت",
  "city": "Osorno أوسورنو",
  "country": "Chile شيلي"
},
{
  "name": "Round Lake Airport مطار راوند ليك",
  "city": "Casummit Lake كاسومت ليك",
  "country": "Canada كندا"
},
{
  "name": "Lancaster لانكستر",
  "city": "Lancaster لانكستر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Pennsylvania Station محطة بنسلفانيا",
  "city": "Newark نيوارك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Hartford هارتفورد",
  "city": "Hartford هارتفورد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "محطة زرو",
  "city": "Boston بوسطن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Providence بروفيدنس",
  "city": "Providence بروفيدنس",
  "country": "United States الولايات المتحدة"
},
{
  "name": "San Salvador Airport مطار سان سلفادور",
  "city": "Cockburn Town كوكبورن تاون",
  "country": "Bahamas باهاماس"
},
{
  "name": "Réunion ريونون",
  "city": "St Pierre dela Reunion سان بيير دي لا ريونون",
  "country": "Reunion ريونيون"
},
{
  "name": "Springfield MA RR سبرينغفيلد",
  "city": "Springfield سبرينغفيلد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Sandy Lake Airport مطار ساندى ليك",
  "city": "Casummit Lake كاسوميت ليك",
  "country": "Canada كندا"
},
{
  "name": "South Indian Lake Airport مطار ساوث إنديان ليك",
  "city": "South Indian Lake ساوث إنديان ليك",
  "country": "Canada كندا"
},
{
  "name": "Tureira Airport مطار توريهيرا",
  "city": "Tureira توريهيرا",
  "country": "French Polynesia بولينزيا الفرنسية"
},
{
  "name": "Tete-a-la-Baleine Airport مطار تيتي-أ-لا-بالين",
  "city": "Havre-St-Pierre هافري-سانت-بيير",
  "country": "Canada كندا"
},
{
  "name": "Schenectady Railway Station محطة سكينكتادي",
  "city": "Schenectady سكينكتادي",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Rochester Railway Station محطة روتشستر",
  "city": "Rochester روتشستر",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Stamford Railway Station محطة ستامفورد",
  "city": "Stamford ستامفورد",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Zakinthos Airport مطار زاكينثوس",
  "city": "Zante زانتي",
  "country": "Greece اليونان"
},
{
  "name": "Humen Port ميناء هومين",
  "city": "Humen هومين",
  "country": "China الصين"
},
{
  "name": "New Jersey Railway Station محطة نيو جيرسي",
  "city": "Princeton برينستون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Shamattawa Airport مطار شاماتاوا",
  "city": "Nelson House نيلسون هاوس",
  "country": "Canada كندا"
},
{
  "name": "Philadelphia Railway Station محطة فيلادلفيا",
  "city": "Philadelphia فيلادلفيا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Boston Railway Station محطة بوسطن",
  "city": "Boston بوسطن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Utica Railway Station محطة يوتيكا",
  "city": "Utica يوتيكا",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Harrisburg Railway Station محطة هاريسبرغ",
  "city": "Harrisburg هاريسبرغ",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Zhuhai Airport مطار زهوهاي",
  "city": "Zhuhai زهوهاي",
  "country": "China الصين"
},
{
  "name": "Churchill Falls Airport مطار تشرتشل فولز",
  "city": "Wabush وابوش",
  "country": "Canada كندا"
},
{
  "name": "Black Rock Airport مطار بلاك روك",
  "city": "Zuni زوني",
  "country": "United States الولايات المتحدة"
},
{
  "name": "New Haven نيو هيفن",
  "city": "New Haven نيو هيفن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Savannakhet Airport مطار سافاناكيت",
  "city": "Savannakhet سافاناكيت",
  "country": "Laos لاوس"
},
{
  "name": "Hannover Hauptbahnhof محطة هانوفر الرئيسية",
  "city": "Hanover هانوفر",
  "country": "Germany ألمانيا"
},
{
  "name": "Williamsburg Rail ويليامسبورغ للسكك الحديدية",
  "city": "Hampton هامبتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "مطار ZWE",
  "city": "",
  "country": "Zimbabwe زيمبابوي"
},
{
  "name": "Wilmington Rail ويلمنجتون للسكك الحديدية",
  "city": "Wilmington ويلمنجتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Stuttgart Hauptbahnhof محطة شتوتغارت الرئيسية",
  "city": "Stuttgart شتوتغارت",
  "country": "Germany ألمانيا"
},
{
  "name": "Union Station محطة الاتحاد",
  "city": "Washington واشنطن",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Illinois إلينوي",
  "city": "Glenview غلينفيو",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Newport News نيوز نيو بورت",
  "city": "Hampton هامبتون",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Aberdeen railway station محطة أبردين للسكك الحديدية",
  "city": "Aberdeen أبردين",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Waverley station محطة ويفرلي",
  "city": "Edinburgh إدنبرة",
  "country": "United Kingdom المملكة المتحدة"
},
{
  "name": "Amsterdam Central Station محطة أمستردام المركزية",
  "city": "Amsterdam أمستردام",
  "country": "Netherlands هولندا"
},
{
  "name": "Shekou Port ميناء شيكو",
  "city": "Shekou شيكو",
  "country": "China الصين"
},
{
  "name": "Osmany Sylhet Airport مطار عثماني سيلهيت",
  "city": "Sylhet سيلهيت",
  "country": "Bangladesh بنغلاديش"
},
{
  "name": "Nimes Rail Station محطة نيم",
  "city": "Nimes نيم",
  "country": "France فرنسا"
},
{
  "name": "Penn Station محطة بن",
  "city": "New York نيويورك",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Syracuse سيراكيوز",
  "city": "Syracuse سيراكيوز",
  "country": "United States الولايات المتحدة"
},
{
  "name": "Brussels Midi Railway Station محطة بروكسل ميدي",
  "city": "Brussels بروكسل",
  "country": "Belgium بلجيكا"
},
{
  "name": "Berchem Railway Stn. محطة بيرشيم للسكك الحديدية",
  "city": "Antwerp أنتويرب",
  "country": "Belgium بلجيكا"
},
{
  "name": "Teniente R. Marsh Airport مطار تينينتي ر. مارش",
  "city": "Teniente R. Marsh",
  "country": "Antarctica القارة القطبية الجنوبية"
}
  ]
  

module.exports = airports