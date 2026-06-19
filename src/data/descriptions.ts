// ============================================================
// Unit descriptions for SEO content enrichment
// Each description is 2-3 sentences, informative, and unique
// ============================================================

export interface UnitDescription {
  en: string;
  zh: string;
  es?: string;
  fr?: string;
  de?: string;
  ja?: string;
  pt?: string;
  it?: string;
  ko?: string;
  ru?: string;
  hi?: string;
  tr?: string;
}

// Key: categoryId, then unitId
export const unitDescriptions: Record<string, Record<string, UnitDescription>> = {
  length: {
    mm: {
      en: "The millimeter (mm) is the smallest commonly used metric unit of length, equal to one-thousandth of a meter. It is widely used in engineering drawings, manufacturing tolerances, and rainfall measurements where precision matters. One millimeter equals roughly 0.0394 inches, making it ideal for describing thin materials like paper or wire.",
      zh: "毫米（mm）是最常用的公制小长度单位，等于一米的千分之一。它在工程制图、制造公差和降雨量测量中被广泛使用，这些场景对精度要求较高。一毫米约等于0.0394英寸，常用来描述纸张或金属丝等薄型材料的厚度。",
    },
    cm: {
      en: "The centimeter (cm) is a metric unit of length equal to one-hundredth of a meter, commonly used for everyday measurements around the world. It appears on rulers, in clothing sizes, and in medical records for body measurements. One centimeter is equivalent to approximately 0.3937 inches, providing a convenient scale between millimeters and meters.",
      zh: "厘米（cm）是公制长度单位，等于一米的百分之一，在全球日常生活中被广泛使用。它出现在尺子刻度、服装尺码以及人体测量记录中。一厘米约等于0.3937英寸，是毫米和米之间非常方便的中间刻度。",
    },
    m: {
      en: "The meter (m) is the base unit of length in the International System of Units, originally defined by the distance light travels in a vacuum in 1/299,792,458 of a second. It serves as the foundation for all metric length measurements and is used in construction, sports, and scientific research worldwide. One meter equals roughly 3.2808 feet or about 1.0936 yards.",
      zh: "米（m）是国际单位制中的基本长度单位，最初由光在真空中1/299,792,458秒内行进的距离来定义。它是所有公制长度测量的基础，广泛用于建筑、体育和科学研究。一米约等于3.2808英尺或1.0936码。",
    },
    km: {
      en: "The kilometer (km) equals 1,000 meters and is the standard unit for measuring long distances between cities, countries, and geographic features. Road signs in most countries display distances in kilometers, and running races commonly use kilometer markers. One kilometer is equivalent to about 0.6214 miles, making it easy to convert between metric and imperial distance scales.",
      zh: "千米（km）等于1000米，是衡量城市间、国家间和地理要素之间长距离的标准单位。大多数国家的道路标志都以千米显示距离，跑步比赛也常用千米作为标记。一千米约等于0.6214英里，便于公制与英制之间的距离换算。",
    },
    inch: {
      en: "The inch (in) is an imperial unit of length equal to exactly 25.4 millimeters, widely used in the United States, Canada, and the United Kingdom. It is the standard measurement for screen sizes, pipe diameters, and mechanical fasteners, and remains common in everyday use across North America. One inch equals exactly 2.54 centimeters.",
      zh: "英寸（in）是英制长度单位，精确等于25.4毫米，在美国、加拿大和英国广泛使用。它是屏幕尺寸、管道直径和机械紧固件的标准度量单位，在北美日常生活中极为常见。一英寸精确等于2.54厘米。",
    },
    foot: {
      en: "The foot (ft) is an imperial unit equal to 12 inches or 0.3048 meters, deeply embedded in American construction, aviation altitudes, and everyday measurement. In real estate, room dimensions and property lot sizes are almost always stated in feet across the United States. One foot equals exactly 30.48 centimeters.",
      zh: "英尺（ft）是英制长度单位，等于12英寸或0.3048米，深深根植于美国建筑、航空高度和日常度量中。在美国房地产行业，房间尺寸和地块面积几乎总是以英尺来表示。一英尺精确等于30.48厘米。",
    },
    yard: {
      en: "The yard (yd) is an imperial unit equal to 3 feet or 0.9144 meters, commonly used in the United States for measuring fabric, football fields, and medium-length distances. It provides a convenient middle ground between feet and miles for outdoor measurements. One yard equals exactly 0.9144 meters, which is close enough to a meter for quick estimates.",
      zh: "码（yd）是英制长度单位，等于3英尺或0.9144米，在美国常用于测量布料、橄榄球场和中短距离。它在英尺和英里之间提供了方便的中间刻度，适用于户外测量。一码精确等于0.9144米，与一米相差不大，便于快速估算。",
    },
    mile: {
      en: "The mile (mi) is an imperial distance unit equal to 5,280 feet or approximately 1.6093 kilometers, used primarily in the United States and United Kingdom for road distances. Speed limits on American highways are posted in miles per hour, and runners often use the mile as a benchmark distance. One mile equals roughly 1.609 kilometers.",
      zh: "英里（mi）是英制距离单位，等于5280英尺或约1.6093千米，主要在美国和英国用于表示道路距离。美国高速公路的限速以英里每小时表示，跑步者也常以英里作为基准距离。一英里约等于1.609千米。",
    },
  },

  weight: {
    mg: {
      en: "The milligram (mg) is a tiny metric unit of mass equal to one-thousandth of a gram, essential in pharmaceuticals and nutrition labeling. Medication dosages, vitamin content, and food additive quantities are typically expressed in milligrams. One milligram equals approximately 0.0000353 ounces, making it the go-to unit for measuring extremely small masses.",
      zh: "毫克（mg）是公制微小质量单位，等于一克的千分之一，在制药和营养标签中不可或缺。药物剂量、维生素含量和食品添加剂用量通常以毫克表示。一毫克约等于0.0000353盎司，是衡量极小质量的首选单位。",
    },
    g: {
      en: "The gram (g) is the base unit of mass in the metric system, defined as one-thousandth of a kilogram. It is the standard measurement for food portions, postal rates, and small objects in daily life across most of the world. One gram equals approximately 0.0353 ounces, and a standard paperclip weighs roughly one gram.",
      zh: "克（g）是公制质量的基本单位，定义为千克的千分之一。它是全球大多数地区食品分量、邮政资费和小型物品的标准度量单位。一克约等于0.0353盎司，一个标准回形针大约重一克。",
    },
    kg: {
      en: "The kilogram (kg) is the base unit of mass in the International System of Units, defined by the Planck constant since 2019. It is the most widely used mass unit globally for body weight, grocery items, and shipping, appearing on scales in homes and markets everywhere. One kilogram equals roughly 2.2046 pounds.",
      zh: "千克（kg）是国际单位制中的基本质量单位，自2019年起由普朗克常数定义。它是全球最广泛使用的质量单位，用于体重、杂货和物流运输，出现在家家户户和市场中的秤上。一千克约等于2.2046磅。",
    },
    tonne: {
      en: "The metric ton or tonne (t) equals 1,000 kilograms and is used for measuring heavy cargo, industrial output, and vehicle weights worldwide. Shipping containers, steel production, and greenhouse gas emissions are all commonly reported in tonnes. One tonne equals approximately 2,204.6 pounds or about 1.1023 short tons.",
      zh: "公吨（t）等于1000千克，全球用于衡量重型货物、工业产量和车辆重量。集装箱运输、钢铁产量和温室气体排放通常以公吨为单位报告。一公吨约等于2204.6磅或约1.1023短吨。",
    },
    oz: {
      en: "The ounce (oz) is an imperial unit of weight equal to about 28.35 grams, widely used in the United States for food packaging, postal services, and precious metals. In the kitchen, recipes often list ingredients in ounces, and gold and silver are traded in troy ounces. One ounce equals approximately 28.35 grams.",
      zh: "盎司（oz）是英制重量单位，约等于28.35克，在美国广泛用于食品包装、邮政和贵金属。厨房食谱中食材常以盎司列出，黄金和白银以金衡盎司进行交易。一盎司约等于28.35克。",
    },
    lb: {
      en: "The pound (lb) is an imperial unit of mass equal to exactly 0.45359237 kilograms, serving as the primary weight unit in the United States and parts of the British Commonwealth. Body weight, gym equipment, and packaged goods in America are almost always labeled in pounds. One pound equals 16 ounces or roughly 0.4536 kilograms.",
      zh: "磅（lb）是英制质量单位，精确等于0.45359237千克，是美国和部分英联邦国家的主要重量单位。美国的体重、健身器材和包装食品几乎总是以磅标注。一磅等于16盎司或约0.4536千克。",
    },
    st: {
      en: "The stone (st) is a British imperial unit equal to 14 pounds or about 6.35 kilograms, traditionally used in the United Kingdom and Ireland for body weight. When someone in the UK says they weigh 11 stone, they mean 154 pounds, a convention that persists in everyday conversation and medical records. One stone equals exactly 6.35029 kilograms.",
      zh: "英石（st）是英制单位，等于14磅或约6.35千克，传统上在英国和爱尔兰用于表示体重。当英国人说自己体重11英石时，意思是154磅，这一用法在日常交流和医疗记录中依然普遍。一英石精确等于6.35029千克。",
    },
    jin: {
      en: "The jin (斤) is a traditional Chinese unit of weight equal to 500 grams, or exactly half a kilogram. It remains the most common weight unit in Chinese markets, groceries, and daily life, where vegetables, meat, and fruit are sold by the jin. One jin equals 1.1023 pounds or exactly 500 grams.",
      zh: "斤是中国传统重量单位，等于500克，精确等于半千克。它至今仍是中国市场、杂货店和日常生活中最常见的重量单位，蔬菜、肉类和水果都以斤出售。一斤等于1.1023磅或精确500克。",
    },
  },

  temperature: {
    c: {
      en: "Celsius (°C) is the most widely used temperature scale worldwide, where 0°C marks the freezing point of water and 100°C its boiling point at standard atmospheric pressure. It serves as the default temperature unit in nearly every country except the United States, appearing in weather forecasts, cooking instructions, and scientific literature. To convert Celsius to Fahrenheit, multiply by 9/5 and add 32.",
      zh: "摄氏度（°C）是全球最广泛使用的温标，0°C标记水的冰点，100°C标记标准大气压下水的沸点。它是除美国外几乎所有国家的默认温度单位，出现在天气预报、烹饪说明和科学文献中。将摄氏度转换为华氏度，乘以9/5再加32即可。",
    },
    f: {
      en: "Fahrenheit (°F) is a temperature scale where 32°F marks the freezing point of water and 212°F its boiling point, primarily used in the United States for weather, cooking, and everyday temperature references. It offers finer granularity than Celsius, with each degree representing a smaller temperature change. To convert Fahrenheit to Celsius, subtract 32 and multiply by 5/9.",
      zh: "华氏度（°F）是一种温标，32°F标记水的冰点，212°F标记水的沸点，主要在美国用于天气、烹饪和日常温度参考。华氏度的每度变化比摄氏度更小，提供了更精细的温度刻度。将华氏度转换为摄氏度，减去32再乘以5/9即可。",
    },
    k: {
      en: "Kelvin (K) is the base unit of thermodynamic temperature in the International System of Units, where 0 K represents absolute zero, the theoretical point of zero thermal energy. Scientists use Kelvin in physics, chemistry, and astronomy because it starts at true zero with no negative values, making calculations straightforward. Zero degrees Celsius equals 273.15 Kelvin, and the two scales share the same size of degree increment.",
      zh: "开尔文（K）是国际单位制中热力学温度的基本单位，0 K代表绝对零度，即热能为零的理论极点。科学家在物理学、化学和天文学中使用开尔文，因为它从真正的零开始，没有负值，使计算更加直观。零摄氏度等于273.15开尔文，两种温标的每度间隔相同。",
    },
  },

  data: {
    bit: {
      en: "The bit is the most fundamental unit of digital information, representing a single binary value of either 0 or 1. Every piece of data stored or transmitted across the internet ultimately consists of bits, from a single text character to high-definition video streams. Eight bits make up one byte, which is why data storage is typically discussed in bytes rather than bits.",
      zh: "比特是数字信息最基本的单位，表示一个二进制值0或1。互联网上存储或传输的每一条数据最终都由比特组成，从单个文本字符到高清视频流。八个比特组成一个字节，这就是为什么数据存储通常以字节而非比特来讨论。",
    },
    b: {
      en: "The byte (B) is the standard unit of digital storage consisting of 8 bits, enough to represent a single character like a letter or number. File sizes, memory capacity, and storage devices are all measured in bytes or their multiples, making it the most commonly referenced unit in computing. One byte equals exactly 8 bits and can represent 256 distinct values.",
      zh: "字节（B）是数字存储的标准单位，由8个比特组成，足以表示一个字母或数字这样的单个字符。文件大小、内存容量和存储设备都以字节或其倍数来衡量，使其成为计算中最常引用的单位。一字节精确等于8比特，可以表示256个不同的值。",
    },
    kb: {
      en: "The kilobyte (KB) equals 1,024 bytes in binary computing terms and is used to measure small files like text documents, email messages, and thumbnail images. While the term sometimes refers to 1,000 bytes in networking contexts, operating systems consistently use the binary definition. One kilobyte can store roughly half a page of plain text.",
      zh: "千字节（KB）在二进制计算中等于1024字节，用于衡量文本文件、电子邮件和缩略图等小型文件。虽然在网络语境中有时指1000字节，但操作系统始终采用二进制定义。一千字节大约可以存储半页纯文本内容。",
    },
    mb: {
      en: "The megabyte (MB) equals 1,024 kilobytes or 1,048,576 bytes, commonly used to describe the size of photos, music files, and applications. A typical smartphone photo ranges from 2 to 10 MB, and a single song in MP3 format is roughly 3 to 5 MB. It remains one of the most frequently encountered units when managing personal digital storage.",
      zh: "兆字节（MB）等于1024千字节或1,048,576字节，常用于描述照片、音乐文件和应用程序的大小。一张典型的手机照片大约在2到10 MB之间，一首MP3格式的歌曲约为3到5 MB。在管理个人数字存储时，兆字节是最常遇到的单位之一。",
    },
    gb: {
      en: "The gigabyte (GB) equals 1,024 megabytes or roughly 1.07 billion bytes, representing the standard measurement for storage capacity on phones, laptops, and USB drives. A typical HD movie requires 2 to 4 GB of space, and most mobile data plans are measured in gigabytes per month. It bridges the gap between everyday file sizes and large-scale data storage.",
      zh: "千兆字节（GB）等于1024兆字节或约10.7亿字节，是手机、笔记本电脑和U盘存储容量的标准度量单位。一部高清电影通常需要2到4 GB的空间，大多数手机流量套餐以每月千兆字节计算。它在日常文件大小和大规模数据存储之间架起了桥梁。",
    },
    tb: {
      en: "The terabyte (TB) equals 1,024 gigabytes or approximately 1.1 trillion bytes, used for large-scale storage like hard drives, cloud backups, and enterprise databases. Modern external hard drives commonly offer 1 to 8 TB of capacity, enough to hold hundreds of thousands of photos or thousands of hours of video. One terabyte represents a massive amount of data by everyday consumer standards.",
      zh: "太字节（TB）等于1024千兆字节或约1.1万亿字节，用于硬盘、云备份和企业数据库等大规模存储场景。现代外置硬盘通常提供1到8 TB的容量，足以存储数十万张照片或数千小时的视频。以日常消费者的标准来看，一太字节代表着海量的数据。",
    },
    pb: {
      en: "The petabyte (PB) equals 1,024 terabytes or roughly 1.13 quadrillion bytes, representing storage volumes used by large tech companies, research institutions, and cloud platforms. Major streaming services, social media networks, and scientific datasets are measured in petabytes because of the sheer volume of user-generated content. One petabyte can store approximately 500 billion pages of standard text.",
      zh: "拍字节（PB）等于1024太字节或约1.13千万亿字节，代表着大型科技公司、研究机构和云平台使用的存储规模。由于用户生成内容的庞大数量，主要流媒体服务、社交网络和科学数据集都以拍字节计量。一拍字节大约可以存储5000亿页标准文本。",
    },
    kbit: {
      en: "The kilobit (Kbit) equals 1,000 bits and is primarily used to measure data transfer rates in networking, such as internet connection speeds. Internet service providers commonly advertise speeds in kilobits per second (Kbps) or megabits per second, making kilobits a key unit for understanding bandwidth. One kilobit equals 125 bytes, distinguishing it clearly from the kilobyte.",
      zh: "千比特（Kbit）等于1000比特，主要用于衡量网络中的数据传输速率，如互联网连接速度。互联网服务提供商通常以千比特每秒（Kbps）或兆比特每秒来宣传网速，使千比特成为理解带宽的关键单位。一千比特等于125字节，与千字节有明显区别。",
    },
    mbit: {
      en: "The megabit (Mbit) equals 1,000 kilobits or one million bits, most commonly seen in internet speed ratings where ISPs advertise plans in megabits per second (Mbps). It is important to distinguish megabits from megabytes, since a 100 Mbps connection delivers roughly 12.5 megabytes per second of actual download speed. This unit is essential for comparing and understanding network performance.",
      zh: "兆比特（Mbit）等于1000千比特或一百万比特，最常见于互联网速度评级中，运营商以兆比特每秒（Mbps）宣传套餐。区分兆比特和兆字节很重要，因为100 Mbps的连接实际下载速度约为每秒12.5兆字节。这个单位对于比较和理解网络性能至关重要。",
    },
    gbit: {
      en: "The gigabit (Gbit) equals 1,000 megabits or one billion bits, used to describe high-speed network connections and data center interconnects. Modern fiber-optic internet plans often reach gigabit speeds, and enterprise networks rely on gigabit-level throughput for handling large volumes of traffic. One gigabit equals 125 megabytes, highlighting the practical difference between bits and bytes.",
      zh: "千兆比特（Gbit）等于1000兆比特或十亿比特，用于描述高速网络连接和数据中心互联。现代光纤互联网套餐通常达到千兆比特速度，企业网络依赖千兆级吞吐量来处理大量流量。一千兆比特等于125兆字节，凸显了比特与字节之间的实际差异。",
    },
  },

  area: {
    sqmm: {
      en: "The square millimeter (mm²) is a metric unit of area equal to one-millionth of a square meter, used in precision engineering, microelectronics, and medical imaging. It is ideal for measuring the cross-sectional area of wires, the surface area of microchips, and other tiny surfaces. One square millimeter equals roughly 0.00155 square inches.",
      zh: "平方毫米（mm²）是公制面积单位，等于一平方米的百万分之一，用于精密工程、微电子和医学影像。它非常适合测量导线截面积、微芯片表面积和其他微小表面。一平方毫米约等于0.00155平方英寸。",
    },
    sqcm: {
      en: "The square centimeter (cm²) is a metric area unit equal to one ten-thousandth of a square meter, commonly used in medical reports, lab measurements, and small product specifications. Skin lesion sizes, fabric swatches, and circuit board components are often measured in square centimeters. One square centimeter equals exactly 0.155 square inches.",
      zh: "平方厘米（cm²）是公制面积单位，等于一平方米的万分之一，常用于医疗报告、实验室测量和小型产品规格。皮肤病灶大小、布料样品和电路板元件通常以平方厘米来计量。一平方厘米精确等于0.155平方英寸。",
    },
    sqm: {
      en: "The square meter (m²) is the SI base unit of area, equal to a square measuring one meter on each side, used worldwide for real estate, construction, and land surveying. Apartment sizes, office floor plans, and construction costs are almost universally quoted in square meters outside the United States. One square meter equals approximately 10.764 square feet.",
      zh: "平方米（m²）是国际单位制的基本面积单位，等于边长一米的正方形的面积，全球用于房地产、建筑和土地测量。除美国外，公寓面积、办公室平面图和建筑造价几乎都以平方米报价。一平方米约等于10.764平方英尺。",
    },
    sqkm: {
      en: "The square kilometer (km²) equals one million square meters and is used to measure large land areas such as cities, national parks, and countries. Geographic data, urban planning reports, and ecological studies rely on square kilometers as their standard area unit. One square kilometer equals approximately 0.3861 square miles or about 247.1 acres.",
      zh: "平方千米（km²）等于一百万平方米，用于衡量城市、国家公园和国家等大面积土地。地理数据、城市规划报告和生态研究都以平方千米作为标准面积单位。一平方千米约等于0.3861平方英里或约247.1英亩。",
    },
    ha: {
      en: "The hectare (ha) is a metric unit of area equal to 10,000 square meters or 100 ares, widely used in agriculture, forestry, and land management worldwide. Farms, vineyards, and nature reserves are typically described in hectares across Europe, Asia, and Oceania. One hectare equals approximately 2.471 acres, providing a convenient bridge between metric and imperial land measurements.",
      zh: "公顷（ha）是公制面积单位，等于10,000平方米或100公亩，在全球农业、林业和土地管理中被广泛使用。欧洲、亚洲和大洋洲的农场、葡萄园和自然保护区通常以公顷来描述。一公顷约等于2.471英亩，在公制与英制土地度量之间提供了方便的换算桥梁。",
    },
    acre: {
      en: "The acre is an imperial unit of area equal to 43,560 square feet or about 4,047 square meters, predominantly used in the United States, United Kingdom, and former British colonies for land measurement. Real estate listings, farmland boundaries, and suburban lot sizes in these regions are conventionally expressed in acres. One acre is roughly equivalent to 90% of a standard football pitch.",
      zh: "英亩是英制面积单位，等于43,560平方英尺或约4,047平方米，主要在美国、英国和前英属殖民地用于土地测量。这些地区的房产挂牌、农田边界和郊区地块面积通常以英亩表示。一英亩大约相当于一个标准足球场面积的90%。",
    },
    sqft: {
      en: "The square foot (ft²) is an imperial area unit equal to a square measuring one foot on each side, the standard measurement for home sizes, office space, and rental properties in the United States. Real estate listings in America almost always quote living space in square feet, making it one of the most practically relevant area units. One square foot equals exactly 0.0929 square meters.",
      zh: "平方英尺（ft²）是英制面积单位，等于边长一英尺的正方形面积，是美国住宅面积、办公空间和租赁物业的标准度量单位。美国的房产挂牌几乎总是以平方英尺来标注居住面积，使其成为最实用的面积单位之一。一平方英尺精确等于0.0929平方米。",
    },
    sqin: {
      en: "The square inch (in²) is a small imperial area unit equal to a square measuring one inch on each side, commonly used in engineering specifications, screen size descriptions, and pressure measurements. Piston areas, material stress calculations, and electronic component sizes are frequently expressed in square inches. One square inch equals exactly 6.4516 square centimeters.",
      zh: "平方英寸（in²）是小型英制面积单位，等于边长一英寸的正方形面积，常用于工程规格、屏幕尺寸描述和压力测量。活塞面积、材料应力计算和电子元件尺寸经常以平方英寸表示。一平方英寸精确等于6.4516平方厘米。",
    },
    sqmi: {
      en: "The square mile (mi²) is a large imperial area unit equal to 640 acres or about 2.59 square kilometers, used for measuring expansive territories like cities, counties, and national parks. Geographic data in the United States and United Kingdom frequently references square miles when describing regions, especially in population density calculations. One square mile equals exactly 2.58999 square kilometers.",
      zh: "平方英里（mi²）是大型英制面积单位，等于640英亩或约2.59平方千米，用于衡量城市、县和国家公园等广阔区域。美国和英国的地理数据在描述区域时常引用平方英里，特别是在人口密度计算中。一平方英里精确等于2.58999平方千米。",
    },
    mu: {
      en: "The mu (亩) is a traditional Chinese unit of area equal to approximately 666.67 square meters, used extensively in Chinese agriculture, rural land contracts, and property records. Farmland in China is almost always measured in mu, and government policies regarding grain production quotas reference this unit. One mu equals roughly 0.1647 acres or about 7,176 square feet.",
      zh: "亩是中国传统面积单位，约等于666.67平方米，在中国农业、农村土地承包和产权记录中被广泛使用。中国的农田几乎总是以亩来计量，政府关于粮食产量配额的政策也以亩为参考单位。一亩约等于0.1647英亩或约7,176平方英尺。",
    },
  },

  volume: {
    ml: {
      en: "The milliliter (mL) is a metric unit of volume equal to one-thousandth of a liter, widely used in medicine, cooking, and chemistry for measuring small liquid quantities. Cough syrup dosages, perfume bottles, and laboratory reagents are all commonly labeled in milliliters. One milliliter equals exactly one cubic centimeter, making it interchangeable with cm³ in scientific contexts.",
      zh: "毫升（mL）是公制体积单位，等于一升的千分之一，广泛用于医药、烹饪和化学中测量少量液体。止咳糖浆剂量、香水瓶和实验室试剂通常以毫升标注。一毫升精确等于一立方厘米，在科学语境中与cm³可互换使用。",
    },
    cl: {
      en: "The centiliter (cL) is a metric unit of volume equal to one-hundredth of a liter, commonly used in European countries for beverage and spirit bottle sizes. Wine and spirit labels in the EU frequently display volume in centiliters alongside milliliters. One centiliter equals exactly 10 milliliters or about 0.338 fluid ounces.",
      zh: "厘升（cL）是公制体积单位，等于一升的百分之一，在欧洲国家常用于饮料和烈酒瓶装规格。欧盟的葡萄酒和烈酒标签上经常同时标注厘升和毫升。一厘升精确等于10毫升或约0.338液盎司。",
    },
    dl: {
      en: "The deciliter (dL) is a metric unit of volume equal to one-tenth of a liter, used in medical lab reports and some European recipes. Blood test results in many countries express cholesterol and glucose levels in milligrams per deciliter, making this unit familiar to anyone reviewing health data. One deciliter equals exactly 100 milliliters or roughly 3.381 fluid ounces.",
      zh: "分升（dL）是公制体积单位，等于一升的十分之一，用于医学检验报告和一些欧洲食谱。许多国家的血液检测结果以每分升的毫克数表示胆固醇和血糖水平，使这个单位对查看健康数据的人来说很熟悉。一分升精确等于100毫升或约3.381液盎司。",
    },
    l: {
      en: "The liter (L) is the most widely used metric unit of volume, equal to 1,000 cubic centimeters or one cubic decimeter, serving as the standard for beverages, fuel, and household liquids worldwide. Gasoline prices, bottled water, and milk cartons all reference liters in most countries. One liter equals approximately 1.0567 US quarts or 0.2642 US gallons.",
      zh: "升（L）是使用最广泛的公制体积单位，等于1000立方厘米或一立方分米，是全球饮料、燃料和家庭液体的标准单位。大多数国家的汽油价格、瓶装水和牛奶盒都以升为参考。一升约等于1.0567美制夸脱或0.2642美制加仑。",
    },
    m3: {
      en: "The cubic meter (m³) is the SI base unit of volume, representing the space occupied by a cube one meter on each side, used in construction, shipping, and industrial processes. Water supply bills, concrete orders, and freight calculations all rely on cubic meters as their standard measurement. One cubic meter equals exactly 1,000 liters or about 264.2 US gallons.",
      zh: "立方米（m³）是国际单位制的基本体积单位，表示边长一米的立方体所占空间，用于建筑、航运和工业流程。供水账单、混凝土订单和货运计算都以立方米作为标准度量。一立方米精确等于1000升或约264.2美制加仑。",
    },
    gal: {
      en: "The US gallon (gal) is an imperial volume unit equal to exactly 3.7854 liters, the standard measurement for fuel, milk, and paint in the United States. Gasoline prices at American pumps are always quoted per gallon, and US vehicle fuel efficiency is measured in miles per gallon. One US gallon equals 4 US quarts or 8 US pints.",
      zh: "美制加仑（gal）是英制体积单位，精确等于3.7854升，是美国燃料、牛奶和涂料的标准度量单位。美国加油站的汽油价格总是以每加仑来报价，美国车辆的燃油效率也以每加仑英里数衡量。一美制加仑等于4美制夸脱或8美制品脱。",
    },
    gal_uk: {
      en: "The UK gallon (imperial gallon) equals exactly 4.54609 liters, about 20% larger than the US gallon, and remains the standard fuel measurement in the United Kingdom and some Commonwealth nations. British fuel efficiency is expressed in miles per imperial gallon, which yields higher numbers than the US equivalent. One UK gallon equals approximately 1.201 US gallons.",
      zh: "英制加仑（imperial gallon）精确等于4.54609升，比美制加仑大约20%，仍是英国和部分英联邦国家的标准燃料度量单位。英国的燃油效率以每英制加仑英里数表示，数值高于美国标准。一英制加仑约等于1.201美制加仑。",
    },
    qt: {
      en: "The US quart (qt) is an imperial volume unit equal to one-quarter of a US gallon or exactly 0.9464 liters, commonly used in American cooking and grocery packaging. Motor oil containers and ice cream tubs in the United States frequently use quart measurements. One US quart equals exactly 2 US pints or roughly 32 US fluid ounces.",
      zh: "美制夸脱（qt）是英制体积单位，等于美制加仑的四分之一或精确0.9464升，常用于美国烹饪和食品包装。美国的机油容器和冰淇淋桶经常以夸脱为计量单位。一美制夸脱精确等于2美制品脱或约32美制液盎司。",
    },
    pt: {
      en: "The US pint (pt) is an imperial volume unit equal to one-eighth of a US gallon or approximately 0.4732 liters, best known for sizing beer glasses and ice cream containers in America. The phrase 'a pint is a pound the world around' captures its colloquial significance, though a pint of water actually weighs about 1.043 pounds. One US pint equals exactly 16 US fluid ounces.",
      zh: "美制品脱（pt）是英制体积单位，等于美制加仑的八分之一或约0.4732升，以在美国用于标注啤酒杯和冰淇淋容器而闻名。虽然俗语说'一品脱就是一磅'，但一品脱水实际重约1.043磅。一美制品脱精确等于16美制液盎司。",
    },
    cup: {
      en: "The US cup is a volume unit equal to 8 US fluid ounces or approximately 0.2366 liters, the standard measurement in American recipes and cookbooks. When a recipe calls for 'one cup of flour' or 'half a cup of sugar,' it refers to this specific volume, not a drinking vessel of arbitrary size. One US cup equals exactly 236.588 milliliters.",
      zh: "美制杯是体积单位，等于8美制液盎司或约0.2366升，是美国食谱和烹饪书中的标准度量。当食谱要求'一杯面粉'或'半杯糖'时，指的是这个特定的体积，而非任意大小的饮用杯。一美制杯精确等于236.588毫升。",
    },
    floz: {
      en: "The US fluid ounce (fl oz) is a volume unit equal to approximately 29.574 milliliters, used to label beverages, cosmetics, and personal care products in the United States. Beverage cans, shampoo bottles, and skincare serums all display their contents in fluid ounces for American consumers. One fluid ounce equals exactly 1/128 of a US gallon or roughly 2 tablespoons.",
      zh: "美制液盎司（fl oz）是体积单位，约等于29.574毫升，用于标注美国的饮料、化妆品和个人护理产品。饮料罐、洗发水瓶和护肤精华都以液盎司为美国消费者标示内容物含量。一液盎司精确等于美制加仑的1/128或约2汤匙。",
    },
    tbsp: {
      en: "The tablespoon (tbsp) is a volume unit equal to 3 teaspoons or approximately 14.787 milliliters, primarily used in cooking recipes and nutritional labels. In the kitchen, one tablespoon of butter, oil, or sugar provides a consistent measure regardless of the spoon's physical size. One US tablespoon equals exactly 0.5 US fluid ounces.",
      zh: "汤匙（tbsp）是体积单位，等于3茶匙或约14.787毫升，主要用于烹饪食谱和营养标签。在厨房中，一汤匙黄油、油或糖提供了统一的度量标准，不受勺子实际大小的影响。一美制汤匙精确等于0.5美制液盎司。",
    },
    tsp: {
      en: "The teaspoon (tsp) is the smallest standard cooking volume unit, equal to approximately 4.929 milliliters, found in recipes worldwide for measuring small quantities of spices, extracts, and medicine. It serves as the building block for larger measurements, with three teaspoons making one tablespoon. One US teaspoon equals exactly 1/6 of a US fluid ounce.",
      zh: "茶匙（tsp）是最小的标准烹饪体积单位，约等于4.929毫升，在全球食谱中用于量取少量香料、提取物和药物。它是更大量度量的基础单位，三茶匙等于一汤匙。一美制茶匙精确等于1/6美制液盎司。",
    },
  },

  speed: {
    ms: {
      en: "Meters per second (m/s) is the SI base unit for speed and velocity, representing the distance in meters traveled during one second. It is the standard unit in physics, engineering, and scientific research, used to describe everything from falling objects to fluid flow rates. One meter per second equals exactly 3.6 kilometers per hour or approximately 2.237 miles per hour.",
      zh: "米每秒（m/s）是国际单位制中速度和速率的基本单位，表示每秒行进的米数。它是物理、工程和科学研究中的标准单位，用于描述从自由落体到流体流速的各种运动。一米每秒精确等于3.6千米每小时或约2.237英里每小时。",
    },
    kmh: {
      en: "Kilometers per hour (km/h) is the most common speed unit outside the United States, displayed on speedometers and road signs across Europe, Asia, and most of the world. Highway speed limits, weather reports for wind speeds, and vehicle performance figures in these regions all use km/h. One kilometer per hour equals approximately 0.2778 meters per second or about 0.6214 miles per hour.",
      zh: "千米每小时（km/h）是美国以外最常见的速度单位，出现在欧洲、亚洲和世界大多数地区的速度表和道路标志上。这些地区的高速公路限速、风速天气报告和车辆性能参数都使用千米每小时。一千米每小时约等于0.2778米每秒或约0.6214英里每小时。",
    },
    mph: {
      en: "Miles per hour (mph) is the standard speed unit in the United States, United Kingdom, and a few other countries, used for speed limits, vehicle speedometers, and weather forecasts. American road signs exclusively display speed limits in mph, and car enthusiasts commonly reference 0-60 mph times as a performance benchmark. One mile per hour equals exactly 1.60934 kilometers per hour.",
      zh: "英里每小时（mph）是美国、英国及其他少数国家的标准速度单位，用于限速、车速表和天气预报。美国的道路标志仅以英里每小时显示限速，汽车爱好者常用0-60英里每小时的加速时间作为性能基准。一英里每小时精确等于1.60934千米每小时。",
    },
    kn: {
      en: "The knot (kn) equals one nautical mile per hour or approximately 1.852 kilometers per hour, the universal speed unit for maritime and aviation navigation. Ship speeds, aircraft velocities, and wind speeds in meteorological reports all use knots as their standard measurement. One knot equals exactly 1.15078 miles per hour, reflecting the longer nautical mile compared to the statute mile.",
      zh: "节（kn）等于每小时一海里或约1.852千米每小时，是海上和航空导航的通用速度单位。船舶速度、飞机速率和气象报告中的风速都以节为标准度量。一节精确等于1.15078英里每小时，这反映了海里比法定英里更长。",
    },
    fts: {
      en: "Feet per second (ft/s) is an imperial speed unit commonly used in ballistics, fluid dynamics, and engineering calculations within the United States. Projectile velocities, pipe flow rates, and conveyor belt speeds are often expressed in ft/s in American technical documentation. One foot per second equals exactly 0.3048 meters per second or about 0.6818 miles per hour.",
      zh: "英尺每秒（ft/s）是英制速度单位，在美国的弹道学、流体动力学和工程计算中常用。弹丸速度、管道流速和传送带速度在美国技术文件中常以英尺每秒表示。一英尺每秒精确等于0.3048米每秒或约0.6818英里每小时。",
    },
    mach: {
      en: "Mach (Ma) is a dimensionless speed unit representing the ratio of an object's speed to the speed of sound in the surrounding medium. At sea level under standard conditions, Mach 1 equals approximately 343 meters per second or 1,235 kilometers per hour, though this varies with altitude and temperature. Supersonic aircraft travel above Mach 1, while hypersonic vehicles exceed Mach 5.",
      zh: "马赫（Ma）是无量纲速度单位，表示物体速度与周围介质中声速的比值。在标准海平面条件下，马赫1约等于343米每秒或1235千米每小时，但此值随海拔和温度变化而不同。超音速飞机的速度超过马赫1，高超音速飞行器则超过马赫5。",
    },
  },

  time: {
    ms_time: {
      en: "The millisecond (ms) is a time unit equal to one-thousandth of a second, critical in computing, telecommunications, and scientific experiments where precise timing matters. Network latency, camera shutter speeds, and reaction time measurements all operate on the millisecond scale. One millisecond equals exactly 0.001 seconds, and the human eye can barely perceive changes faster than about 10 milliseconds.",
      zh: "毫秒（ms）是时间单位，等于一秒的千分之一，在计算、电信和需要精确计时的科学实验中至关重要。网络延迟、相机快门速度和反应时间测量都以毫秒为刻度。一毫秒精确等于0.001秒，人眼几乎无法感知快于约10毫秒的变化。",
    },
    s: {
      en: "The second (s) is the base unit of time in the International System of Units, defined by the vibration frequency of cesium-133 atoms. It serves as the foundation for all time measurements, from clocks and watches to GPS satellites and atomic physics. One second equals exactly 1,000 milliseconds and is divided into 60 seconds per minute.",
      zh: "秒（s）是国际单位制中的基本时间单位，由铯-133原子的振动频率来定义。它是所有时间测量的基础，从钟表到GPS卫星和原子物理学都依赖它。一秒精确等于1000毫秒，60秒组成一分钟。",
    },
    min: {
      en: "The minute (min) is a time unit equal to 60 seconds, universally used for scheduling, cooking timers, and everyday timekeeping. Meeting durations, exercise intervals, and transportation schedules all rely on minutes as their primary unit. One minute equals exactly 60 seconds, and 60 minutes make up one hour.",
      zh: "分钟（min）是时间单位，等于60秒，在日程安排、烹饪计时和日常时间管理中被普遍使用。会议时长、运动间歇和交通时刻表都以分钟为主要单位。一分钟精确等于60秒，60分钟组成一小时。",
    },
    h: {
      en: "The hour (h) is a time unit equal to 60 minutes or 3,600 seconds, the standard measure for work shifts, travel times, and business hours worldwide. Payroll calculations, flight durations, and daily schedules are all structured around hours. One hour equals exactly 3,600 seconds, and 24 hours make up one day.",
      zh: "小时（h）是时间单位，等于60分钟或3600秒，是全球工作时间、旅行时间和营业时间的标准度量。工资计算、航班时长和日常日程都以小时为结构。一小时精确等于3600秒，24小时组成一天。",
    },
    d: {
      en: "The day (d) is a time unit equal to 24 hours or 86,400 seconds, representing one full rotation of the Earth on its axis. It is the fundamental cycle for human activity, organizing work schedules, sleep patterns, and calendar systems across every culture. One day equals exactly 86,400 seconds or 1,440 minutes.",
      zh: "天（d）是时间单位，等于24小时或86400秒，代表地球绕轴自转一周的完整周期。它是人类活动的基本周期，在每种文化中组织工作日程、睡眠节律和日历系统。一天精确等于86400秒或1440分钟。",
    },
    wk: {
      en: "The week (wk) is a time unit equal to 7 days or 168 hours, serving as the standard organizing period for business cycles, school schedules, and pay periods in most cultures. Project timelines, fitness plans, and recurring events are typically planned on a weekly basis. One week equals exactly 7 days or 604,800 seconds.",
      zh: "周（wk）是时间单位，等于7天或168小时，在大多数文化中是商业周期、学校日程和工资周期的标准组织周期。项目时间表、健身计划和周期性活动通常以周为基础进行安排。一周精确等于7天或604800秒。",
    },
    mo: {
      en: "The month (mo) is a time unit averaging approximately 30.44 days or 2,629,746 seconds, used for billing cycles, lease agreements, and financial planning. Calendar months vary from 28 to 31 days, but the average month provides a consistent reference for long-term calculations. One average month equals roughly 4.345 weeks or about 730.5 hours.",
      zh: "月（mo）是时间单位，平均约30.44天或2629746秒，用于计费周期、租赁协议和财务规划。日历月份从28到31天不等，但平均月份为长期计算提供了一致的参考。一个平均月约等于4.345周或约730.5小时。",
    },
    yr: {
      en: "The year (yr) is a time unit equal to approximately 365.25 days or 31,557,600 seconds, representing one full orbit of the Earth around the Sun. It is the primary unit for age, financial reporting, interest rates, and long-term contracts, with the quarter-day surplus handled by leap years. One year equals roughly 52.18 weeks or about 8,766 hours.",
      zh: "年（yr）是时间单位，约等于365.25天或31557600秒，代表地球绕太阳公转一周的完整周期。它是年龄、财务报告、利率和长期合同的主要单位，多出的四分之一天通过闰年来处理。一年约等于52.18周或约8766小时。",
    },
  },

  pressure: {
    pa: {
      en: "The pascal (Pa) is the SI base unit of pressure, defined as one newton per square meter, used in physics, engineering, and material science. While it is the scientific standard, everyday pressures are more commonly expressed in kilopascals or megapascals because one pascal represents an extremely small pressure. One pascal equals 0.00001 bar or about 0.000145 psi.",
      zh: "帕斯卡（Pa）是国际单位制中压力的基本单位，定义为一平方米上一牛顿的力，用于物理学、工程学和材料科学。虽然它是科学标准，但日常压力更常以千帕或兆帕表示，因为一帕斯卡代表极小的压力值。一帕斯卡等于0.00001巴或约0.000145磅力/平方英寸。",
    },
    kpa: {
      en: "The kilopascal (kPa) equals 1,000 pascals and is the most practical unit for everyday pressure measurements in metric countries. Tire pressure, building specifications, and weather reports in Canada, Australia, and Europe commonly use kilopascals. One kilopascal equals 0.01 bar or approximately 0.145 psi, making it a convenient middle ground between scientific and industrial scales.",
      zh: "千帕（kPa）等于1000帕斯卡，是公制国家日常压力测量中最实用的单位。加拿大、澳大利亚和欧洲的轮胎气压、建筑规格和天气预报常用千帕。一千帕等于0.01巴或约0.145磅力/平方英寸，在科学和工业刻度之间提供了方便的中间值。",
    },
    mpa: {
      en: "The megapascal (MPa) equals one million pascals and is the standard unit for high-pressure applications in structural engineering, materials testing, and hydraulic systems. Concrete strength is rated in megapascals, and steel tensile strength specifications routinely reference this unit. One megapascal equals 10 bar or approximately 145 psi, bridging metric and imperial pressure scales.",
      zh: "兆帕（MPa）等于一百万帕斯卡，是结构工程、材料测试和液压系统中高压应用的标准单位。混凝土强度以兆帕评级，钢材抗拉强度规格也经常使用此单位。一兆帕等于10巴或约145磅力/平方英寸，在公制和英制压力刻度之间架起桥梁。",
    },
    bar: {
      en: "The bar is a metric pressure unit equal to 100,000 pascals, widely used in meteorology, oceanography, and industrial applications because it closely approximates atmospheric pressure at sea level. Tire pressure gauges in Europe, scuba diving depth ratings, and weather maps all commonly reference bars or millibars. One bar equals approximately 0.9869 atmospheres or 14.504 psi.",
      zh: "巴（bar）是公制压力单位，等于100,000帕斯卡，广泛用于气象学、海洋学和工业应用，因为它接近海平面大气压。欧洲的轮胎气压表、水肺潜水深度评级和天气图都常用巴或毫巴作为参考。一巴约等于0.9869标准大气压或14.504磅力/平方英寸。",
    },
    atm: {
      en: "The standard atmosphere (atm) is a pressure unit defined as exactly 101,325 pascals, representing the average atmospheric pressure at sea level on Earth. It serves as a reference point in chemistry for gas law calculations and in engineering for rating pressure vessel capacities. One atmosphere equals approximately 1.01325 bar, 14.696 psi, or 760 mmHg.",
      zh: "标准大气压（atm）是压力单位，定义为精确的101,325帕斯卡，代表地球海平面的平均大气压。它在化学中作为气体定律计算的参考点，在工程中用于压力容器容量评级。一标准大气压约等于1.01325巴、14.696磅力/平方英寸或760毫米汞柱。",
    },
    psi: {
      en: "PSI (pounds per square inch) is an imperial pressure unit equal to about 6,894.76 pascals, the standard measurement for tire pressure, compressed air systems, and hydraulic equipment in the United States. Almost every American gas station air pump and pressure washer displays ratings in PSI, making it one of the most recognized pressure units worldwide. One PSI equals approximately 0.06895 bar or 6.895 kPa.",
      zh: "磅力/平方英寸（psi）是英制压力单位，约等于6894.76帕斯卡，是美国轮胎气压、压缩空气系统和液压设备的标准度量单位。几乎每个美国加油站的气泵和高压清洗机都以PSI显示评级，使其成为全球最广为人知的压力单位之一。一PSI约等于0.06895巴或6.895千帕。",
    },
    mmhg: {
      en: "The millimeter of mercury (mmHg) is a pressure unit equal to about 133.322 pascals, traditionally used in medicine for measuring blood pressure and in meteorology for barometric readings. A normal adult blood pressure of 120/80 mmHg is universally understood by healthcare professionals, making this unit a fixture in clinical settings. One mmHg equals approximately 0.01934 psi or 0.1333 kPa.",
      zh: "毫米汞柱（mmHg）是压力单位，约等于133.322帕斯卡，传统上用于医学中的血压测量和气象学中的气压读数。成年人正常血压120/80 mmHg被全球医疗专业人员所理解，使这个单位成为临床环境中的固定标配。一毫米汞柱约等于0.01934磅力/平方英寸或0.1333千帕。",
    },
    torr: {
      en: "The torr is a pressure unit named after Evangelista Torricelli, equal to approximately 133.322 pascals, used primarily in vacuum physics and high-altitude research. It is nearly identical to the millimeter of mercury, with one torr defined as exactly 1/760 of a standard atmosphere. Vacuum pumps, electron microscopes, and semiconductor manufacturing equipment commonly specify operating pressures in torr.",
      zh: "托（Torr）是以埃万杰利斯塔·托里拆利命名的压力单位，约等于133.322帕斯卡，主要用于真空物理学和高海拔研究。它与毫米汞柱几乎相同，一托被定义为精确等于标准大气压的1/760。真空泵、电子显微镜和半导体制造设备通常以托来标注工作压力。",
    },
  },

  energy: {
    j: {
      en: "The joule (J) is the SI base unit of energy, defined as the work done when a force of one newton moves an object one meter. It is the universal unit in physics for measuring kinetic energy, heat, and electrical energy, appearing in everything from textbook problems to nutritional science. One joule equals the energy released by dropping a small apple one meter, making it tangible despite its small magnitude.",
      zh: "焦耳（J）是国际单位制中能量的基本单位，定义为一牛顿的力使物体移动一米所做的功。它是物理学中测量动能、热能和电能的通用单位，出现在从教科书习题到营养科学的各种场景。一焦耳等于将一个小苹果提升一米所释放的能量，尽管量值很小，却很直观。",
    },
    kj: {
      en: "The kilojoule (kJ) equals 1,000 joules and is the standard unit for expressing food energy content and chemical reaction energies in countries using the metric system. Food labels in Australia, Europe, and many other regions display energy values in kilojoules alongside or instead of calories. One kilojoule equals approximately 238.8 calories or about 0.239 kilocalories.",
      zh: "千焦（kJ）等于1000焦耳，是公制国家表示食品能量含量和化学反应能量的标准单位。澳大利亚、欧洲和许多地区的食品标签以千焦显示能量值，有时替代或并列卡路里。一千焦约等于238.8卡路里或约0.239千卡。",
    },
    cal: {
      en: "The calorie (cal) is a small energy unit defined as the amount of heat needed to raise one gram of water by one degree Celsius, primarily used in physics and chemistry. In everyday language, 'calorie' usually refers to the kilocalorie (kcal), but the true calorie is 1/1,000th of that amount. One calorie equals exactly 4.184 joules, providing a direct bridge between thermal and mechanical energy.",
      zh: "卡路里（cal）是小型能量单位，定义为一克水升高一摄氏度所需的热量，主要用于物理学和化学。在日常用语中，'卡路里'通常指千卡（kcal），但真正的卡路里仅为其千分之一。一卡路里精确等于4.184焦耳，在热能和机械能之间提供了直接换算桥梁。",
    },
    kcal: {
      en: "The kilocalorie (kcal), commonly called the 'Calorie' on food labels, equals 1,000 calories or 4,184 joules, the standard unit for measuring dietary energy worldwide. When nutrition facts list '200 Calories,' they mean 200 kilocalories, representing the energy your body can extract from that food. One kilocalorie equals exactly 4.184 kilojoules, the figure used on food packaging in many countries.",
      zh: "千卡（kcal），在食品标签上常简称为'卡路里'，等于1000卡路里或4184焦耳，是全球衡量膳食能量的标准单位。当营养成分表列出'200卡'时，指的是200千卡，代表人体可从该食物中获取的能量。一千卡精确等于4.184千焦，这是许多国家食品包装上使用的换算值。",
    },
    kwh: {
      en: "The kilowatt-hour (kWh) equals 3,600,000 joules and is the standard billing unit for residential and commercial electricity consumption worldwide. Utility companies charge by the kilowatt-hour, and understanding this unit helps consumers evaluate appliance running costs and solar panel output. One kilowatt-hour represents the energy used by a 1,000-watt appliance running for one hour.",
      zh: "千瓦时（kWh）等于3,600,000焦耳，是全球住宅和商业电力消耗的标准计费单位。电力公司按千瓦时收费，理解这个单位有助于消费者评估家电运行成本和太阳能板产量。一千瓦时代表一台1000瓦的电器运行一小时所消耗的能量。",
    },
    btu: {
      en: "The BTU (British Thermal Unit) equals approximately 1,055.06 joules, defined as the heat needed to raise one pound of water by one degree Fahrenheit. It is the primary unit for rating heating and cooling equipment in the United States, appearing on air conditioner specifications, furnace ratings, and energy efficiency labels. One BTU equals about 0.2931 watt-hours or roughly 0.252 kilocalories.",
      zh: "英热单位（BTU）约等于1055.06焦耳，定义为一磅水升高一华氏度所需的热量。它是美国评价供暖和制冷设备的主要单位，出现在空调规格、炉具评级和能效标签上。一英热单位约等于0.2931瓦时或约0.252千卡。",
    },
    wh: {
      en: "The watt-hour (Wh) equals 3,600 joules, representing the energy consumed by a one-watt device operating for one hour. It is commonly used for small battery capacities, solar panel output ratings, and electric vehicle charging metrics where kilowatt-hours would be too large a unit. One watt-hour equals exactly 0.001 kilowatt-hours or about 3.412 BTU.",
      zh: "瓦时（Wh）等于3600焦耳，代表一瓦设备运行一小时所消耗的能量。它常用于小型电池容量、太阳能板输出评级和电动汽车充电指标，这些场景中千瓦时作为单位过大。一瓦时精确等于0.001千瓦时或约3.412英热单位。",
    },
  },
  power: {
    w: {
      en: "The watt (W) is the SI base unit of power, defined as one joule per second, measuring the rate of energy transfer. From light bulb brightness ratings to phone charger output, the watt appears in everyday product specifications worldwide. One watt equals exactly 1 joule per second, or about 0.001341 horsepower.",
      zh: "瓦特（W）是国际单位制功率基本单位，定义为一焦耳每秒，衡量能量传输速率。从灯泡亮度到手机充电器输出功率，瓦特出现在全球日常产品规格中。一瓦精确等于1焦耳每秒，或约0.001341马力。",
    },
    kw: {
      en: "The kilowatt (kW) equals 1,000 watts and is the standard unit for measuring the power output of engines, electric heaters, and industrial machinery. Electricity bills use kilowatt-hours (kW × hours), making the kilowatt the most familiar power unit for consumers. One kilowatt equals approximately 1.341 horsepower.",
      zh: "千瓦（kW）等于1000瓦，是衡量发动机、电暖器和工业机械功率输出的标准单位。电费账单使用千瓦时（kW × 小时），使千瓦成为消费者最熟悉的功率单位。一千瓦约等于1.341马力。",
    },
    mw: {
      en: "The megawatt (MW) equals one million watts, used to express the output of power plants, large industrial facilities, and data centers. A typical wind turbine generates 2–3 MW, while a large coal plant may produce 500–1,000 MW. One megawatt can power roughly 800–1,000 homes simultaneously.",
      zh: "兆瓦（MW）等于一百万瓦，用于表示发电厂、大型工业设施和数据中心的输出功率。一台风力发电机通常产生2-3兆瓦，而一座大型燃煤电厂可能产生500-1000兆瓦。一兆瓦大约可同时为800-1000户家庭供电。",
    },
    hp: {
      en: "Horsepower (hp) is an imperial unit of power equal to approximately 745.7 watts, originally defined by James Watt to compare steam engine output to draft horses. It remains the standard unit for rating car engines, lawnmowers, and boat motors, especially in the United States. One horsepower equals about 0.7457 kilowatts or 1.0139 metric horsepower.",
      zh: "马力（hp）是英制功率单位，约等于745.7瓦，最初由詹姆斯·瓦特定义，用于比较蒸汽机输出与挽马功率。它仍是评价汽车引擎、割草机和船用马达功率的标准单位，尤其在美国。一马力约等于0.7457千瓦或1.0139公制马力。",
    },
    ps: {
      en: "Metric horsepower (PS, Pferdestärke) equals approximately 735.5 watts, slightly less than imperial horsepower, and is the standard power unit for vehicle ratings throughout Europe and Asia. Car specifications in Germany, Japan, and China typically list engine output in PS. One PS equals about 0.9863 imperial horsepower or 0.7355 kilowatts.",
      zh: "公制马力（PS）约等于735.5瓦，略小于英制马力，是欧洲和亚洲车辆功率评定的标准单位。德国、日本和中国的汽车规格通常以PS列出引擎输出功率。一公制马力约等于0.9863英制马力或0.7355千瓦。",
    },
    btuh: {
      en: "BTU per hour (BTU/h) equals approximately 0.293 watts, the standard rating unit for air conditioners, heaters, and furnaces in North America. A typical window air conditioner rated at 10,000 BTU/h can cool a 400–500 square foot room, making this unit essential for HVAC system sizing. One BTU/h equals about 0.2931 watts.",
      zh: "英热单位每小时（BTU/h）约等于0.293瓦，是北美空调、加热器和炉具的标准额定功率单位。一台额定10000 BTU/h的窗式空调可冷却约37-46平方米的房间，是暖通空调系统选型的关键单位。一BTU/h约等于0.2931瓦。",
    },
    ftlbs: {
      en: "Foot-pounds per second (ft·lbf/s) equals approximately 1.356 watts, an imperial power unit occasionally used in mechanical engineering contexts. While less common than horsepower for engine ratings, it provides a direct connection between torque and rotational speed. One foot-pound per second equals about 1.356 watts or 0.00182 horsepower.",
      zh: "英尺磅每秒（ft·lbf/s）约等于1.356瓦，是偶尔用于机械工程领域的英制功率单位。虽然不如马力在引擎评级中常见，但它直接连接扭矩和转速。一英尺磅每秒约等于1.356瓦或0.00182马力。",
    },
    calps: {
      en: "Calories per second (cal/s) equals exactly 4.184 watts, used primarily in thermodynamics and physics to express heat transfer rates. While not a common everyday unit, it bridges thermal and mechanical power calculations in scientific research. One calorie per second equals exactly 4.184 watts or about 0.00561 horsepower.",
      zh: "卡路里每秒（cal/s）精确等于4.184瓦，主要用于热力学和物理学中表示热传递速率。虽然不是常见的日常单位，但它在科学研究中连接了热功率和机械功率的计算。一卡路里每秒精确等于4.184瓦或约0.00561马力。",
    },
  },
  fuel: {
    kml: {
      en: "Kilometers per liter (km/L) is the standard fuel efficiency metric used in most countries outside the US and UK, measuring how far a vehicle travels on one liter of fuel. A typical compact car achieves 12–18 km/L, while hybrids can exceed 25 km/L. One km/L equals approximately 2.352 miles per US gallon.",
      zh: "千米每升（km/L）是美国和英国以外大多数国家使用的标准燃油效率指标，衡量车辆每升燃料能行驶的距离。一辆典型紧凑型车的燃油效率约为12-18 km/L，混合动力车可超过25 km/L。一km/L约等于2.352美制英里每加仑。",
    },
    l100: {
      en: "Liters per 100km (L/100km) is the inverse fuel efficiency metric used in Europe and Australia, measuring how many liters of fuel a vehicle consumes over 100 kilometers. Lower numbers mean better efficiency — a car rated at 5 L/100km uses less fuel than one rated at 8 L/100km. This is the inverse of km/L: L/100km = 100 / km/L.",
      zh: "升每百公里（L/100km）是欧洲和澳大利亚使用的燃油效率反向指标，衡量车辆行驶100公里消耗的燃油升数。数值越低越省油——5 L/100km的车比8 L/100km的更省油。它是km/L的倒数：L/100km = 100 / km/L。",
    },
    mpg_us: {
      en: "Miles per gallon US (mpg) measures how many miles a vehicle can travel on one US gallon (3.785 liters) of fuel, the standard efficiency metric in the United States. US EPA fuel economy ratings display city and highway mpg figures for every new vehicle. One US mpg equals approximately 0.425 km/L or about 23.52 L/100km.",
      zh: "美制英里每加仑（mpg）衡量车辆每美制加仑（3.785升）燃油能行驶的英里数，是美国的标准燃油效率指标。美国EPA为每辆新车标注城市和高速公路mpg数据。一美制mpg约等于0.425 km/L或约23.52 L/100km。",
    },
    mpg_uk: {
      en: "Miles per gallon UK (imperial mpg) measures distance per imperial gallon (4.546 liters), used in the United Kingdom for fuel economy ratings. Because the imperial gallon is larger than the US gallon, the same car shows a higher mpg figure in the UK system. One UK mpg equals approximately 0.354 km/L or about 28.25 L/100km.",
      zh: "英制英里每加仑衡量车辆每英制加仑（4.546升）燃油能行驶的英里数，在英国用于燃油经济性评级。由于英制加仑大于美制加仑，同一辆车在英制系统下显示更高的mpg数值。一英制mpg约等于0.354 km/L或约28.25 L/100km。",
    },
  },
  frequency: {
    hz: {
      en: "The hertz (Hz) is the SI base unit of frequency, defined as one cycle per second, measuring how often a repeating event occurs. From AC power grid frequency (50 or 60 Hz) to audio tones and processor clock speeds, hertz is the universal language of frequency. One hertz equals exactly one cycle per second.",
      zh: "赫兹（Hz）是国际单位制频率基本单位，定义为每秒一个周期，衡量重复事件发生的频率。从交流电网频率（50或60赫兹）到音频和处理器时钟速度，赫兹是频率的通用语言。一赫兹精确等于每秒一个周期。",
    },
    khz: {
      en: "The kilohertz (kHz) equals 1,000 hertz, commonly used to describe audio frequencies, radio broadcasting bands, and early computer processor speeds. Human hearing ranges from about 20 Hz to 20 kHz, making this unit essential in audio engineering and music production. One kilohertz equals 1,000 cycles per second.",
      zh: "千赫兹（kHz）等于1000赫兹，常用于描述音频频率、无线电广播频段和早期计算机处理器速度。人类听觉范围约为20赫兹到20千赫兹，使该单位在音频工程和音乐制作中至关重要。一千赫兹等于每秒1000个周期。",
    },
    mhz: {
      en: "The megahertz (MHz) equals one million hertz, widely used for radio frequency bands, early CPU clock speeds, and wireless communication standards. FM radio broadcasts in the 88–108 MHz range, while early personal computers operated at just a few MHz. One megahertz equals 1,000,000 cycles per second.",
      zh: "兆赫兹（MHz）等于一百万赫兹，广泛用于无线电频段、早期CPU时钟速度和无线通信标准。FM无线电广播在88-108 MHz范围内，而早期个人电脑仅以几兆赫兹运行。一兆赫兹等于每秒100万个周期。",
    },
    ghz: {
      en: "The gigahertz (GHz) equals one billion hertz, the standard unit for modern CPU clock speeds, Wi-Fi frequencies, and 5G cellular bands. A typical laptop processor runs at 2–5 GHz, while Wi-Fi operates at 2.4 GHz or 5 GHz. One gigahertz equals 1,000 megahertz or one billion cycles per second.",
      zh: "吉赫兹（GHz）等于十亿赫兹，是现代CPU时钟速度、Wi-Fi频率和5G蜂窝频段的标准单位。典型笔记本电脑处理器运行在2-5 GHz，Wi-Fi工作在2.4 GHz或5 GHz。一吉赫兹等于1000兆赫兹或每秒十亿个周期。",
    },
    rpm: {
      en: "Revolutions per minute (rpm) measures rotational speed, expressing how many complete turns an object makes in one minute. It is the most common unit for engine speed, hard drive spin rates, and power tool specifications worldwide. One rpm equals exactly 1/60 hertz or approximately 0.01667 Hz.",
      zh: "转每分（rpm）衡量旋转速度，表示物体每分钟完成的完整转数。它是全球最常用的引擎转速、硬盘转速和电动工具规格单位。一转每分精确等于1/60赫兹或约0.01667 Hz。",
    },
    rps: {
      en: "Revolutions per second (rps) measures rotational speed as complete turns per second, equivalent to exactly one hertz. While less common than rpm in everyday specifications, rps is used in physics, engineering analysis, and some industrial equipment ratings. One rps equals exactly 60 rpm.",
      zh: "转每秒（rps）以每秒完整转数衡量旋转速度，精确等于一赫兹。虽然在日常规格中不如rpm常见，rps在物理学、工程分析和部分工业设备评级中使用。一转每秒精确等于60 rpm。",
    },
  },
  angle: {
    deg: {
      en: "The degree (°) is the most common unit for measuring angles, dividing a full circle into 360 equal parts. From navigation and construction to everyday geometry, degrees are the default angular unit worldwide. One degree equals π/180 radians or about 0.01745 radians.",
      zh: "度（°）是最常用的角度测量单位，将一个完整的圆分为360等份。从导航、建筑到日常几何，度是全球默认的角度单位。一度等于π/180弧度或约0.01745弧度。",
    },
    rad: {
      en: "The radian (rad) is the SI unit of angle measurement, defined as the angle subtended by an arc equal in length to the radius of the circle. It is the natural unit for trigonometric functions in mathematics and physics — sin, cos, and tan all assume radian input. One radian equals approximately 57.296 degrees.",
      zh: "弧度（rad）是国际单位制角度测量单位，定义为弧长等于圆半径时所对应的角度。它是数学和物理中三角函数的自然单位——sin、cos、tan都以弧度为输入。一弧度约等于57.296度。",
    },
    grad: {
      en: "The gradian (gon), also called the grad, divides a right angle into 100 equal parts, making a full circle 400 gradians. It is used primarily in surveying and some European military mapping systems, where the base-100 system simplifies decimal calculations. One gradian equals exactly 0.9 degrees.",
      zh: "梯度（gon），又称grad，将直角分为100等份，使一个完整圆为400梯度。它主要用于测绘和一些欧洲军事地图系统，其中百进制简化了小数计算。一梯度精确等于0.9度。",
    },
    arcmin: {
      en: "The arcminute (′) equals 1/60 of a degree, used in astronomy, cartography, and precision navigation where fine angular resolution is needed. Stars are cataloged by their coordinates in degrees and arcminutes, and telescope pointing accuracy is often specified in arcminutes. One arcminute equals 1/60 degree or about 0.000291 radians.",
      zh: "角分（′）等于1/60度，用于天文学、制图学和精密导航等需要精细角度分辨率的领域。恒星按度和角分的坐标编目，望远镜指向精度常以角分表示。一角分等于1/60度或约0.000291弧度。",
    },
    arcsec: {
      en: "The arcsecond (″) equals 1/3,600 of a degree, providing extremely fine angular resolution for astronomy, optics, and satellite imaging. The Hubble Space Telescope has a resolution of about 0.05 arcseconds, and stellar parallax measurements use milliarcsecond precision. One arcsecond equals 1/3600 degree or about 0.00000485 radians.",
      zh: "角秒（″）等于1/3600度，为天文学、光学和卫星成像提供极高角度分辨率。哈勃太空望远镜的分辨率约为0.05角秒，恒星视差测量使用毫角秒精度。一角秒等于1/3600度或约0.00000485弧度。",
    },
    turn: {
      en: "A turn (tr), also called a revolution, represents one complete rotation of 360 degrees or 2π radians. It is used in engineering contexts involving rotational mechanics, electric motor specifications, and angular velocity calculations where whole rotations are more intuitive than degrees or radians. One turn equals exactly 360 degrees.",
      zh: "圈（tr），又称转，代表360度或2π弧度的完整旋转。它用于涉及旋转力学的工程场景、电动机规格和角速度计算，这些场景中整圈旋转比度或弧度更直观。一圈精确等于360度。",
    },
  },
  force: {
    n: {
      en: "The newton (N) is the SI base unit of force, defined as the force needed to accelerate one kilogram of mass at one meter per second squared. Named after Isaac Newton, it is the fundamental unit in mechanics, structural engineering, and physics worldwide. One newton equals approximately 0.2248 pound-force.",
      zh: "牛顿（N）是国际单位制力的基本单位，定义为使一千克质量以每秒平方一米加速所需的力。以艾萨克·牛顿命名，是全球力学、结构工程和物理学的基本单位。一牛顿约等于0.2248磅力。",
    },
    kn: {
      en: "The kilonewton (kN) equals 1,000 newtons, used in structural engineering to express building loads, bridge capacities, and material strength ratings. A typical passenger car weighs about 10–15 kN, and building codes specify design loads in kN per square meter. One kilonewton equals approximately 224.8 pound-force.",
      zh: "千牛（kN）等于1000牛顿，用于结构工程中表示建筑荷载、桥梁承载力和材料强度评级。一辆典型乘用车重约10-15千牛，建筑规范以千牛每平方米规定设计荷载。一千牛约等于224.8磅力。",
    },
    lbf: {
      en: "Pound-force (lbf) is the standard imperial unit of force in the United States, defined as the gravitational force exerted on one pound of mass at sea level. It appears in bolt tension ratings, material testing, and mechanical engineering specifications throughout North America. One pound-force equals approximately 4.448 newtons.",
      zh: "磅力（lbf）是美国的标准英制力单位，定义为海平面上一磅质量所受的重力。它出现在螺栓张力评级、材料测试和北美的机械工程规格中。一磅力约等于4.448牛顿。",
    },
    kgf: {
      en: "Kilogram-force (kgf) is a non-SI unit defined as the gravitational force on one kilogram of mass at standard gravity, equal to exactly 9.80665 newtons. It is commonly used in some engineering fields and in countries transitioning from metric technical units to SI. One kilogram-force equals approximately 2.205 pound-force.",
      zh: "千克力（kgf）是非国际单位制单位，定义为一千克质量在标准重力下所受的重力，精确等于9.80665牛顿。它常用于某些工程领域和正在从公制技术单位向SI过渡的国家。一千克力约等于2.205磅力。",
    },
    dyn: {
      en: "The dyne (dyn) is a centimeter-gram-second (CGS) unit of force equal to exactly 0.00001 newtons, used primarily in physics for small-scale force calculations. It represents the force needed to accelerate one gram of mass at one centimeter per second squared, and appears in surface tension and electromagnetic force measurements. One dyne equals exactly 10 micro-newtons.",
      zh: "达因（dyn）是厘米-克-秒（CGS）制的力单位，精确等于0.00001牛顿，主要用于物理学中的小尺度力计算。它代表使一克质量以每秒平方一厘米加速所需的力，出现在表面张力和电磁力测量中。一达因精确等于10微牛顿。",
    },
    ozf: {
      en: "Ounce-force (ozf) equals approximately 0.278 newtons, the imperial unit for small force measurements in precision engineering, spring calibration, and micro-mechanical testing. It is particularly useful for measuring trigger pull weights, small spring tensions, and delicate instrument calibrations. One ounce-force equals about 1/16 of a pound-force.",
      zh: "盎司力（ozf）约等于0.278牛顿，是精密工程、弹簧校准和微机械测试中使用的英制小力单位。它特别适用于测量扳机拉力、小弹簧张力和精密仪器校准。一盎司力约等于1/16磅力。",
    },
  },
  torque: {
    nm: {
      en: "The newton-meter (N·m) is the SI unit of torque, measuring the rotational force produced when one newton of force is applied at a one-meter distance from the pivot point. It is the standard unit for engine torque specifications, bolt tightening requirements, and mechanical design worldwide. One newton-meter equals approximately 0.7376 pound-feet.",
      zh: "牛顿米（N·m）是国际单位制扭矩单位，衡量在一米距离的支点上施加一牛顿力所产生的旋转力。它是全球引擎扭矩规格、螺栓拧紧要求和机械设计的标准单位。一牛顿米约等于0.7376磅英尺。",
    },
    kNm: {
      en: "The kilonewton-meter (kN·m) equals 1,000 newton-meters, used in civil and structural engineering for large-scale torque specifications on bridges, cranes, and heavy industrial equipment. Foundation bolt specifications and wind turbine torque ratings are commonly expressed in kN·m. One kN·m equals approximately 737.6 pound-feet.",
      zh: "千牛米（kN·m）等于1000牛顿米，用于土木和结构工程中桥梁、起重机和重型工业设备的大规格扭矩。基础螺栓规格和风力涡轮机扭矩评级常以千牛米表示。一千牛米约等于737.6磅英尺。",
    },
    lbft: {
      en: "Pound-foot (lb·ft) is the imperial unit of torque used primarily in the United States and UK for automotive engine specifications and mechanical fastener tightening. Car enthusiasts discuss engine output in lb·ft, and torque wrenches in the US are calibrated in this unit. One pound-foot equals approximately 1.356 newton-meters.",
      zh: "磅英尺（lb·ft）是英制扭矩单位，主要用于美国和英国的汽车引擎规格和机械紧固件拧紧。汽车爱好者以磅英尺讨论引擎输出，美国的扭矩扳手以该单位校准。一磅英尺约等于1.356牛顿米。",
    },
    lbin: {
      en: "Pound-inch (lb·in) is an imperial torque unit for smaller precision applications, commonly used for electronics assembly, small engine specifications, and instrument calibration. Torque screwdrivers and precision fastener specifications in the US typically use lb·in. One pound-inch equals approximately 0.113 newton-meters or 1/12 of a pound-foot.",
      zh: "磅英寸（lb·in）是用于较小精密应用的英制扭矩单位，常用于电子组装、小型引擎规格和仪器校准。美国的扭矩螺丝刀和精密紧固件规格通常使用磅英寸。一磅英寸约等于0.113牛顿米或1/12磅英尺。",
    },
    kgfm: {
      en: "Kilogram-force meter (kgf·m) is a metric technical unit of torque commonly used in Japan, China, and other Asian countries for engine and motor specifications. While not part of the SI system, it remains standard in automotive specifications throughout East Asia. One kgf·m equals approximately 9.807 newton-meters or about 7.233 pound-feet.",
      zh: "千克力米（kgf·m）是公制技术扭矩单位，在日本、中国和其他亚洲国家常用于引擎和电机规格。虽然不属于国际单位制，它在东亚汽车规格中仍是标准。一千克力米约等于9.807牛顿米或约7.233磅英尺。",
    },
    ozin: {
      en: "Ounce-inch (oz·in) is a small imperial torque unit used for precision instruments, watchmaking, and micro-mechanical assembly where even pound-inches would be too large. Small servo motors, camera lens mechanisms, and delicate electronics fasteners are rated in oz·in. One ounce-inch equals approximately 0.00706 newton-meters.",
      zh: "盎司英寸（oz·in）是用于精密仪器、钟表制造和微机械组装的小型英制扭矩单位，这些场景中磅英寸也嫌太大。小型伺服电机、相机镜头机构和精密电子紧固件以盎司英寸评级。一盎司英寸约等于0.00706牛顿米。",
    },
  },
  shoe: {
    cm: {
      en: "Centimeters (cm) represent the actual foot length measurement, the universal reference point for all shoe size conversion systems. Measuring your foot in centimeters first is the most reliable way to find your correct size across US, UK, EU, and Japanese systems, as each region uses different numbering scales. A typical adult male foot measures 26–28 cm.",
      zh: "厘米（cm）代表实际脚长测量值，是所有鞋码换算系统的通用参考点。先以厘米测量脚长是找到US、UK、EU和日码正确尺码最可靠的方法，因为各地区使用不同的编号标准。成年男性脚长通常为26-28厘米。",
    },
    us_m: {
      en: "US Men's shoe sizes follow a scale where size 9 corresponds to a foot length of approximately 27 cm, with each half-size adding about 0.42 cm. The US system is used throughout North America and differs from UK sizes by approximately one full size (US 9 ≈ UK 8). Athletic shoe sizes may vary slightly between brands.",
      zh: "美码男鞋尺寸遵循一个标度，9码对应脚长约27厘米，每半码增加约0.42厘米。美码系统在北美广泛使用，与英码大约差一个整码（US 9 ≈ UK 8）。运动鞋尺码可能因品牌略有差异。",
    },
    us_w: {
      en: "US Women's shoe sizes run approximately 1.5 sizes larger in number than US Men's for the same foot length, with US Women's 9 corresponding to about 25.4 cm foot length. This offset often causes confusion when shopping for unisex or athletic shoes. US Women's 9 ≈ US Men's 7.5 ≈ EU 40 ≈ UK 6.5.",
      zh: "美码女鞋尺码数字比相同脚长的男码大约大1.5码，美码女9对应脚长约25.4厘米。这种偏移常在购买中性鞋或运动鞋时造成混淆。美码女9 ≈ 美码男7.5 ≈ 欧码40 ≈ 英码6.5。",
    },
    uk: {
      en: "UK shoe sizes are the basis for the US system but offset by approximately one size — UK 8 corresponds to a US Men's 9 and a foot length of about 27 cm. The UK system is used throughout Britain, Ireland, and many Commonwealth countries, and it closely matches the Indian shoe size system.",
      zh: "英码鞋码是美码系统的基础，但偏移约一个码——英码8对应美码男9，脚长约27厘米。英码系统在英国、爱尔兰和许多英联邦国家使用，与印度鞋码系统接近。",
    },
    eu: {
      en: "EU shoe sizes (also called Continental or Paris Point sizes) use a scale where each size increment equals 2/3 cm (6.67 mm) in foot length, making EU 42 approximately 26.7 cm. The EU system is used throughout continental Europe and is the most common international standard. Converting between EU and US/UK sizes requires knowing the foot length.",
      zh: "欧码鞋码（又称大陆码或巴黎点）使用一个每码增量等于2/3厘米（6.67毫米）脚长的标度，使欧码42约对应26.7厘米。欧码系统在整个欧洲大陆使用，是最常见的国际标准。欧码与美码/英码之间的换算需要知道脚长。",
    },
    jp: {
      en: "Japanese shoe sizes (also used in Korea) directly represent foot length in millimeters — JP 260 means a 26 cm foot, JP 270 means 27 cm. This makes the Japanese system the simplest and most intuitive, as the size number directly equals the foot measurement. Japanese sizes range typically from 230 (women's) to 290 (men's large).",
      zh: "日码鞋码（韩国也使用）直接以毫米表示脚长——JP 260表示26厘米脚长，JP 270表示27厘米。这使得日码系统最简单直观，因为尺码数字直接等于脚长测量值。日码范围通常从230（女款）到290（男款大码）。",
    },
  },
};