export interface CategoryContent {
  description: string;
  faq: Array<{ q: string; a: string }>;
}

export const categoryContent: Record<string, CategoryContent> = {
  length: {
    description: `Length measurement is one of the most fundamental concepts in science, engineering, and everyday life. From measuring the dimensions of a room to calculating the distance between cities, understanding length units is essential for accurate communication and computation.

The metric system, established in France in 1795, standardized length measurement around the meter, originally defined as one ten-millionth of the distance from the equator to the North Pole. Today the meter is defined by the speed of light in vacuum, making it one of the most precisely defined units in existence. Common metric units include millimeters, centimeters, meters, and kilometers.

The imperial system, still widely used in the United States and parts of the United Kingdom, includes inches, feet, yards, and miles. While most of the world has adopted the metric system, imperial units remain common in construction, aviation, and everyday usage in certain regions.

Converting between metric and imperial units requires precise factors: one inch equals exactly 25.4 millimeters, one foot equals 0.3048 meters, and one mile equals approximately 1.609 kilometers. Understanding these conversions is crucial for international trade, engineering projects, and scientific collaboration across borders.`,
    faq: [
      { q: `How many centimeters are in an inch?`, a: `One inch equals exactly 2.54 centimeters. This conversion factor is defined internationally and is used as the standard for all length conversions between metric and imperial systems.` },
      { q: `What is the difference between a meter and a yard?`, a: `A meter is the base unit of length in the metric system, equal to 100 centimeters. A yard is an imperial unit equal to 3 feet or 36 inches. One meter is approximately 1.094 yards, while one yard is approximately 0.914 meters.` },
      { q: `Why does the US still use miles instead of kilometers?`, a: `The United States adopted the imperial system during its colonial period and has retained it due to the enormous cost and disruption of converting infrastructure, road signs, and everyday usage. Despite metrication efforts in the 1970s, public resistance and implementation costs kept the imperial system in place.` },
      { q: `How accurate are online length converters?`, a: `Online length converters like ConvUnit use exact, internationally defined conversion factors. The results are mathematically precise, not approximations. For most practical purposes, the accuracy exceeds the precision needed for everyday use.` },
    ],
  },

  weight: {
    description: `Weight and mass measurement plays a vital role in cooking, shipping, science, and commerce. Whether you are following a recipe that lists ingredients in grams, calculating shipping costs by the pound, or measuring medication in milligrams, accurate weight conversion is indispensable.

The metric system uses the gram as its base unit, with common multiples including milligrams (0.001 g), kilograms (1,000 g), and metric tons (1,000,000 g). The kilogram was originally defined as the mass of one liter of water at its freezing point and has since been redefined using Planck constant for greater precision.

Imperial weight units include ounces, pounds, and stones, with one pound equal to 16 ounces and one stone equal to 14 pounds. These units are standard in the United States and the United Kingdom, though the UK has officially adopted metric units for most commercial purposes.

Cultural weight units also exist, such as the Chinese jin, which equals 500 grams and is still widely used in daily Chinese commerce. Converting between these systems requires knowing the exact conversion factors: one pound equals approximately 453.592 grams, and one ounce equals approximately 28.35 grams.`,
    faq: [
      { q: `How many grams are in a pound?`, a: `One pound equals approximately 453.592 grams. For most practical purposes, you can use 454 grams as a close approximation, though scientific and commercial applications require the exact figure.` },
      { q: `What is the difference between mass and weight?`, a: `Mass is the amount of matter in an object and remains constant regardless of location. Weight is the force exerted on that mass by gravity, which varies depending on gravitational pull. On Earth, the distinction is minimal for everyday purposes, but in science and space applications, the difference is critical.` },
      { q: `How many pounds are in a stone?`, a: `One stone equals 14 pounds. Stones are primarily used in the United Kingdom and Ireland for expressing human body weight. For example, a person weighing 11 stone weighs 154 pounds or approximately 69.9 kilograms.` },
      { q: `What is a Chinese jin and how does it compare to kilograms?`, a: `A jin is a traditional Chinese unit of weight that equals exactly 500 grams or 0.5 kilograms. It is still commonly used in Chinese markets and daily life, especially for food items. Two jin equals one kilogram.` },
    ],
  },

  temperature: {
    description: `Temperature conversion is essential in science, cooking, weather reporting, and industrial processes. The three main temperature scales each serve different purposes and regions, making accurate conversion a daily necessity.

The Celsius scale, developed by Swedish astronomer Anders Celsius in 1742, sets the freezing point of water at 0 degrees and the boiling point at 100 degrees under standard atmospheric pressure. It is the most widely used temperature scale worldwide and forms the basis of the metric temperature system.

The Fahrenheit scale, created by German physicist Daniel Gabriel Fahrenheit in 1724, sets water freezing at 32 degrees and boiling at 212 degrees. It remains the primary temperature scale in the United States for weather, cooking, and everyday use.

The Kelvin scale, used primarily in scientific contexts, starts at absolute zero (0 K), the theoretical lowest possible temperature where all thermal motion ceases. Zero Kelvin equals minus 273.15 degrees Celsius. Converting between these scales requires specific formulas: Fahrenheit equals Celsius times 9/5 plus 32, Kelvin equals Celsius plus 273.15, and Celsius equals Fahrenheit minus 32 times 5/9.`,
    faq: [
      { q: `How do I convert Celsius to Fahrenheit?`, a: `To convert Celsius to Fahrenheit, multiply the Celsius value by 9/5 and add 32. The formula is: Fahrenheit = (Celsius times 9/5) + 32. For example, 20 degrees Celsius equals (20 times 9/5) + 32 = 68 degrees Fahrenheit.` },
      { q: `What is absolute zero in Celsius and Fahrenheit?`, a: `Absolute zero is 0 Kelvin, which equals minus 273.15 degrees Celsius or minus 459.67 degrees Fahrenheit. It is the lowest possible temperature where all molecular motion theoretically stops. No substance can be cooled below this point.` },
      { q: `Why are there different temperature scales?`, a: `Different temperature scales were developed independently in different regions and eras. Celsius was designed around water properties, Fahrenheit around human body temperature and brine solutions, and Kelvin was designed for scientific use starting from absolute zero. Each scale serves its context well.` },
      { q: `At what temperature are Celsius and Fahrenheit equal?`, a: `Celsius and Fahrenheit are equal at minus 40 degrees. That is, minus 40 degrees Celsius equals minus 40 degrees Fahrenheit. This is a convenient reference point that comes from solving the equation where Celsius times 9/5 plus 32 equals Celsius.` },
    ],
  },

  volume: {
    description: `Volume measurement quantifies the three-dimensional space that a substance occupies, and it is crucial in cooking, chemistry, construction, and manufacturing. From measuring a teaspoon of vanilla extract to calculating the capacity of a swimming pool, volume conversions are a part of daily life.

The metric system uses the liter as its primary unit, with milliliters (1/1000 liter) and cubic centimeters being common subdivisions. One liter equals 1,000 milliliters or 1 cubic decimeter, making metric volume conversions straightforward through powers of ten.

Imperial volume units are more complex, with different systems for liquid and dry measurements. US liquid measures include fluid ounces, cups, pints, quarts, and gallons. The US gallon equals 128 fluid ounces or approximately 3.785 liters. The UK gallon is larger at approximately 4.546 liters, which can cause confusion in international contexts.

Understanding the difference between US and imperial volume units is particularly important in cooking and automotive applications. A US gallon of gasoline is approximately 3.785 liters, while a UK gallon is about 4.546 liters, a significant difference that affects fuel efficiency calculations and recipe measurements.`,
    faq: [
      { q: `How many liters are in a US gallon?`, a: `One US gallon equals approximately 3.785 liters. This is different from the UK imperial gallon, which equals approximately 4.546 liters. Always specify which gallon system you are using to avoid confusion.` },
      { q: `What is the difference between a US quart and an imperial quart?`, a: `A US liquid quart equals approximately 0.946 liters (32 US fluid ounces), while an imperial quart equals approximately 1.137 liters (40 imperial fluid ounces). The imperial quart is about 20 percent larger than the US quart.` },
      { q: `How many milliliters are in a cup?`, a: `In the US system, one standard cup equals 236.588 milliliters, often rounded to 240 ml in recipes and nutrition labels. In metric countries, one metric cup is defined as exactly 250 milliliters. Always check which system a recipe uses.` },
      { q: `Why are US and UK volume units different?`, a: `The US adopted the older English wine gallon (231 cubic inches) as its standard before the British reformed their system in 1824. The UK then created the imperial gallon based on the volume of 10 pounds of water at 62 degrees Fahrenheit. This historical divergence created two different measurement systems that persist today.` },
    ],
  },

  speed: {
    description: `Speed conversion is critical in transportation, aviation, maritime navigation, and athletic performance tracking. Different regions and industries use different speed units, making conversion tools essential for international communication and safety.

Kilometers per hour (km/h) is the standard speed unit in most countries that use the metric system, appearing on road signs and vehicle speedometers throughout Europe, Asia, and South America. Miles per hour (mph) remains the primary unit in the United States, the United Kingdom, and a few other nations.

Nautical miles per hour, known as knots, are the universal standard in aviation and maritime contexts. One knot equals exactly 1.852 km/h. This unit is based on the nautical mile, which corresponds to one minute of latitude on Earth surface, making it particularly useful for navigation.

Meters per second (m/s) is the SI unit for speed, commonly used in physics and engineering calculations. Converting between these units requires precise factors: 1 mph is approximately 1.609 km/h, 1 km/h is approximately 0.278 m/s, and 1 knot equals 1.852 km/h.`,
    faq: [
      { q: `How do I convert km/h to mph?`, a: `To convert kilometers per hour to miles per hour, divide the speed by 1.609. For example, 100 km/h divided by 1.609 equals approximately 62.14 mph. Conversely, to convert mph to km/h, multiply by 1.609.` },
      { q: `Why is speed measured in knots for aviation and maritime use?`, a: `Knots are based on the nautical mile, which corresponds to one minute of latitude on Earth. This makes distance and speed calculations straightforward for navigation using latitude and longitude, which is why knots remain the standard in aviation and maritime contexts worldwide.` },
      { q: `What is the speed of light in different units?`, a: `The speed of light in a vacuum is approximately 299,792 km/h, 186,282 mph, or 299,792,458 m/s. It is the universal speed limit according to the theory of relativity and serves as a fundamental constant in physics.` },
      { q: `How fast is 100 km/h in other units?`, a: `100 km/h equals approximately 62.14 mph, 27.78 m/s, or about 54 nautical miles per hour (54 knots). This is a common speed limit on highways in many countries.` },
    ],
  },

  energy: {
    description: `Energy conversion connects diverse scientific and engineering fields, from calculating the calories in food to determining the power output of electrical grids. Understanding energy units is essential for physics, nutrition, utility billing, and environmental science.

The joule (J) is the SI unit of energy, defined as the energy transferred when a force of one newton acts over a distance of one meter. For practical purposes, larger units like kilojoules (kJ) and megajoules (MJ) are more convenient. One kilojoule equals 1,000 joules.

Calories are widely used in nutrition, with one dietary calorie (kcal) equaling 4.184 kilojoules. In physics, the small calorie (cal) is the energy needed to heat one gram of water by one degree Celsius, while the dietary Calorie (with capital C) equals 1,000 small calories.

Other common energy units include the kilowatt-hour (kWh) for electrical energy billing, the British Thermal Unit (BTU) for heating and cooling systems, and the electronvolt (eV) for atomic and particle physics. Converting between these units requires precise factors: 1 kWh equals 3.6 MJ, 1 BTU is approximately 1,055 J, and 1 eV is approximately 1.602 times 10 to the power of minus 19 J.`,
    faq: [
      { q: `How do I convert calories to kilojoules?`, a: `To convert dietary calories (kcal) to kilojoules, multiply by 4.184. For example, a 500-calorie meal equals 500 times 4.184 equals 2,092 kilojoules. Note that dietary calories are actually kilocalories (kcal).` },
      { q: `What is the difference between a calorie and a kilocalorie?`, a: `In scientific terms, one calorie (cal) is the energy needed to raise 1 gram of water by 1 degree Celsius. A kilocalorie (kcal) equals 1,000 calories. In nutrition, when food labels say Calories (with capital C), they mean kilocalories. So a 200-Calorie snack actually provides 200 kcal or 200,000 cal.` },
      { q: `How many BTUs are in a kilowatt-hour?`, a: `One kilowatt-hour equals approximately 3,412 BTUs. This conversion is commonly used in HVAC systems and energy efficiency ratings. For example, a 12,000 BTU air conditioner uses about 3.5 kWh of energy.` },
      { q: `What unit should I use for electrical energy?`, a: `Kilowatt-hours (kWh) are the standard unit for electrical energy billing and consumption. One kWh represents the energy used by a 1,000-watt device running for one hour. Most household electricity bills are measured in kWh.` },
    ],
  },

  power: {
    description: `Power conversion is fundamental in engineering, automotive design, and energy management. Power measures the rate at which energy is transferred or work is done, and understanding different power units is crucial for comparing engines, appliances, and energy systems.

The watt (W) is the SI unit of power, defined as one joule per second. Common multiples include kilowatts (1,000 W), megawatts (1,000,000 W), and gigawatts (1,000,000,000 W). A typical household light bulb uses 40 to 100 watts, while a large power plant might generate several gigawatts.

Horsepower (hp) is widely used for engines and motors, especially in automotive contexts. One mechanical horsepower equals approximately 745.7 watts. The term originated from calculations comparing steam engine output to the work of draft horses in the 18th century.

BTU per hour (BTU/h) is commonly used for heating and cooling equipment ratings. One BTU/h equals approximately 0.293 watts. Understanding these conversions helps consumers compare products across different measurement systems and make informed purchasing decisions.`,
    faq: [
      { q: `How many watts are in one horsepower?`, a: `One mechanical horsepower equals approximately 745.7 watts (0.7457 kW). This means a 100-horsepower engine produces about 74,570 watts or 74.57 kilowatts of power.` },
      { q: `What is the difference between kW and kWh?`, a: `A kilowatt (kW) measures power, which is the rate at which energy is used. A kilowatt-hour (kWh) measures energy, which is the total amount consumed over time. Think of kW as speed and kWh as distance. A 2 kW heater running for 3 hours uses 6 kWh of energy.` },
      { q: `Why do we still use horsepower?`, a: `Horsepower persists due to tradition and familiarity, especially in automotive and mechanical engineering. It provides an intuitive reference point since people can visualize the power of a horse. Most of the world uses kilowatts for engine specifications, but horsepower remains common in the US and UK.` },
      { q: `How do I convert BTU/h to watts?`, a: `One BTU per hour equals approximately 0.293 watts. To convert BTU/h to watts, multiply by 0.293. For example, a 10,000 BTU/h air conditioner produces approximately 2,930 watts or 2.93 kW of cooling power.` },
    ],
  },

  pressure: {
    description: `Pressure conversion is essential in meteorology, engineering, medicine, and industrial processes. From tire pressure measured in PSI to atmospheric pressure in millibars, different fields use different pressure units that require accurate conversion.

The pascal (Pa) is the SI unit of pressure, defined as one newton per square meter. Because one pascal is a very small amount, practical applications commonly use kilopascals (kPa), megapascals (MPa), or hectopascals (hPa). Standard atmospheric pressure at sea level is approximately 101,325 pascals or 101.325 kPa.

The bar is a metric unit equal to 100,000 pascals, very close to standard atmospheric pressure. Meteorologists use millibars (mbar), where 1 bar equals 1,000 mbar. PSI (pounds per square inch) is the dominant unit in the United States for tire pressure, hydraulic systems, and industrial applications.

Atmospheres (atm) are used in chemistry and physics, where 1 atm represents standard atmospheric pressure. Millimeters of mercury (mmHg) are used in medicine for blood pressure measurements. Converting between these units requires precise factors: 1 atm equals 101.325 kPa equals 14.696 PSI equals 760 mmHg equals 1.01325 bar.`,
    faq: [
      { q: `How do I convert PSI to bar?`, a: `One PSI equals approximately 0.0689 bar. To convert PSI to bar, multiply by 0.0689. For example, 30 PSI equals approximately 2.067 bar. Conversely, to convert bar to PSI, multiply by 14.504.` },
      { q: `What is standard atmospheric pressure?`, a: `Standard atmospheric pressure at sea level is 101,325 pascals (101.325 kPa), which equals 1 atmosphere (atm), 760 mmHg, 1,013.25 mbar, or approximately 14.7 PSI. This value is used as a reference point in many scientific calculations.` },
      { q: `Why is blood pressure measured in mmHg?`, a: `Blood pressure is measured in millimeters of mercury (mmHg) because early sphygmomanometers used mercury columns to measure pressure. The standard reading of 120/80 mmHg means systolic pressure of 120 mmHg and diastolic pressure of 80 mmHg. This tradition continues in medical practice worldwide.` },
      { q: `What pressure should my car tires be at?`, a: `Most passenger car tires should be inflated to 30 to 35 PSI (approximately 2.07 to 2.41 bar). Check your vehicle door jamb placard or owner manual for the manufacturer recommended pressure. Proper tire pressure improves fuel efficiency, tire life, and safety.` },
    ],
  },

  data: {
    description: `Digital storage conversion has become increasingly important as data volumes grow exponentially. From measuring file sizes in kilobytes to managing petabytes of cloud storage, understanding data units is essential for anyone working with computers, smartphones, or the internet.

The basic unit of digital information is the bit (binary digit), which represents a single 0 or 1. Eight bits form one byte, the smallest addressable unit of memory. Data sizes scale in powers of two in binary systems (kibibytes, mebibytes) or powers of ten in the decimal system (kilobytes, megabytes), which can create confusion.

In the decimal system used by storage manufacturers, 1 KB equals 1,000 bytes, 1 MB equals 1,000,000 bytes, 1 GB equals 1,000,000,000 bytes, and 1 TB equals 1,000,000,000,000 bytes. In the binary system used by operating systems, 1 KiB equals 1,024 bytes, 1 MiB equals 1,048,576 bytes, and so on. This discrepancy explains why a 500 GB hard drive shows less capacity in your operating system.

Understanding these conversions helps with managing cloud storage plans, estimating download times, comparing file sizes, and making informed decisions about data management and backup strategies.`,
    faq: [
      { q: `Why does my 500 GB hard drive show less space in Windows?`, a: `Storage manufacturers use decimal units (1 GB equals 1,000,000,000 bytes), while Windows uses binary units (1 GiB equals 1,073,741,824 bytes). A 500 GB drive equals approximately 465.7 GiB in Windows. Additionally, some space is used by the file system and recovery partitions.` },
      { q: `What is the difference between a megabyte and a mebibyte?`, a: `A megabyte (MB) equals 1,000,000 bytes in the decimal system, while a mebibyte (MiB) equals 1,048,576 bytes (2 to the power of 20) in the binary system. The difference is about 4.9 percent. The binary prefixes (KiB, MiB, GiB) were standardized by the IEC in 1998 to eliminate this ambiguity.` },
      { q: `How much data can 1 GB hold?`, a: `Approximately 1 GB can hold about 200 to 250 photos, 230 songs at 128 kbps, or 500 e-books. For video, it holds about 5 to 10 minutes of standard definition or 2 to 3 minutes of HD video. Actual capacity varies depending on file quality and compression.` },
      { q: `What comes after a terabyte?`, a: `After terabyte (TB) comes petabyte (PB, 1,024 TB), then exabyte (EB), zettabyte (ZB), and yottabyte (YB). As of 2025, the global datasphere is estimated to exceed 100 zettabytes, and large cloud providers manage exabytes of data.` },
    ],
  },

  area: {
    description: `Area conversion is vital in real estate, agriculture, construction, and geography. Whether you are comparing land sizes between countries that use different measurement systems or calculating floor plans, understanding area units is essential.

The metric system uses the square meter as its base unit, with common multiples including square kilometers for large land areas and square centimeters for small surfaces. One square kilometer equals 1,000,000 square meters. The hectare (10,000 square meters) is widely used in agriculture and land measurement.

Imperial area units include square inches, square feet, square yards, and acres. One square foot equals approximately 0.0929 square meters, and one acre equals about 4,047 square meters or 0.4047 hectares. Square miles are used for large geographical areas, with one square mile equaling approximately 2.59 square kilometers.

Regional units add further complexity: the Chinese mu equals approximately 666.67 square meters, the Japanese tsubo equals about 3.306 square meters, and various other regional units persist in local practice. Converting between these systems accurately is crucial for international real estate transactions and land management.`,
    faq: [
      { q: `How many square meters are in an acre?`, a: `One acre equals approximately 4,046.86 square meters, or about 0.4047 hectares. An acre was originally defined as the amount of land a yoke of oxen could plow in one day. It remains the standard unit for land measurement in the United States and UK.` },
      { q: `What is a hectare and how does it compare to an acre?`, a: `A hectare is a metric unit of area equal to 10,000 square meters or 0.01 square kilometers. One hectare equals approximately 2.471 acres. Hectares are the standard unit for land measurement in most countries that use the metric system.` },
      { q: `How do I convert square feet to square meters?`, a: `To convert square feet to square meters, multiply by 0.0929. For example, a 1,000 square foot apartment equals approximately 92.9 square meters. To convert square meters to square feet, multiply by 10.764.` },
      { q: `Why are there so many different area units?`, a: `Area units evolved independently across different cultures and historical periods, often based on practical local references like the amount of land a farmer could work. The metric system standardized area measurement with the square meter, but traditional units persist due to legal, cultural, and practical reasons in various regions.` },
    ],
  },

  time: {
    description: `Time conversion connects units ranging from microseconds in computing to centuries in history. Accurate time measurement and conversion are fundamental to scheduling, scientific experiments, financial calculations, and everyday planning.

The second is the SI base unit of time, defined by the oscillation period of cesium-133 atoms. Larger time units are derived from the second through conventional relationships: 60 seconds per minute, 60 minutes per hour, 24 hours per day, and 7 days per week.

Months and years add complexity because they do not follow a simple decimal system. A calendar year has 365 days (or 366 in a leap year), while months range from 28 to 31 days. A lunar month is approximately 29.53 days. These irregularities make precise time conversions more nuanced than simple multiplication.

For specialized applications, millisecond (1/1,000 second), microsecond (1/1,000,000 second), and nanosecond (1/1,000,000,000 second) measurements are common in computing, physics, and engineering. Understanding these conversions is critical for performance benchmarking, scientific timing, and coordinating events across time zones.`,
    faq: [
      { q: `How many seconds are in a day?`, a: `There are 86,400 seconds in a standard day (24 hours times 60 minutes times 60 seconds). In a leap second day, which occurs occasionally to adjust for Earth slowing rotation, there can be 86,401 seconds.` },
      { q: `How many days are in a leap year?`, a: `A leap year has 366 days instead of the usual 365. Leap years occur every 4 years, except for century years not divisible by 400. So 2000 was a leap year, but 1900 was not. This rule keeps the calendar aligned with Earth orbit.` },
      { q: `What is a millisecond and why does it matter?`, a: `A millisecond is one-thousandth of a second (0.001 seconds). In computing, response times are often measured in milliseconds. A fast website loads in under 200 ms, and competitive gamers need reactions under 50 ms. In physics, milliseconds are used to measure chemical reactions and sound propagation.` },
      { q: `How do I convert weeks to hours?`, a: `One week equals 168 hours (7 days times 24 hours). To convert any number of weeks to hours, multiply by 168. For example, 2 weeks equals 336 hours. This conversion is useful for project planning and scheduling.` },
    ],
  },

  frequency: {
    description: `Frequency conversion is fundamental in electronics, telecommunications, audio engineering, and physics. Frequency measures how often a repeating event occurs per unit of time, typically expressed in hertz (Hz), which represents one cycle per second.

The hertz (Hz) is the SI unit of frequency, named after German physicist Heinrich Hertz. Common multiples include kilohertz (kHz, 1,000 Hz), megahertz (MHz, 1,000,000 Hz), and gigahertz (GHz, 1,000,000,000 Hz). These units are essential for describing radio frequencies, processor speeds, and audio tones.

In audio applications, the human hearing range spans approximately 20 Hz to 20,000 Hz (20 kHz). Musical notes correspond to specific frequencies: middle A on a piano is 440 Hz, and concert A is standardized to this frequency worldwide. Radio frequencies range from 3 kHz (very low frequency) to 300 GHz (extremely high frequency).

In computing, processor clock speeds are measured in gigahertz, with modern CPUs operating at 2 to 6 GHz. Understanding frequency conversion helps in selecting electronic components, designing circuits, tuning musical instruments, and configuring wireless communication systems.`,
    faq: [
      { q: `How do I convert Hz to kHz?`, a: `To convert hertz to kilohertz, divide by 1,000. For example, 5,000 Hz equals 5 kHz. To convert kHz to Hz, multiply by 1,000. The same pattern applies for larger units: MHz equals Hz divided by 1,000,000, GHz equals Hz divided by 1,000,000,000.` },
      { q: `What frequency range can humans hear?`, a: `Humans can typically hear sounds between 20 Hz and 20,000 Hz (20 kHz), though this range decreases with age. Bass sounds are below 250 Hz, midrange is 250 to 4,000 Hz, and treble extends to 20,000 Hz. Frequencies above human hearing are called ultrasound.` },
      { q: `What is the difference between Hz and MHz?`, a: `One megahertz (MHz) equals one million hertz (1,000,000 Hz). MHz is commonly used for radio frequencies, older processor speeds, and some wireless communication bands. For example, FM radio broadcasts between 88 and 108 MHz.` },
      { q: `Why is Wi-Fi measured in GHz?`, a: `Wi-Fi operates at 2.4 GHz and 5 GHz (and 6 GHz for Wi-Fi 6E). These frequencies are in the microwave range of the electromagnetic spectrum. Higher frequencies allow more data bandwidth but have shorter range and weaker wall penetration than lower frequencies.` },
    ],
  },

  force: {
    description: `Force conversion is critical in engineering, physics, construction, and mechanical design. Force describes the push or pull on an object that can cause it to accelerate, and different unit systems express this fundamental quantity in different ways.

The newton (N) is the SI unit of force, defined as the force needed to accelerate a mass of one kilogram at one meter per second squared. Named after Isaac Newton, it provides a consistent and universal measurement that integrates with other SI units seamlessly.

In imperial and US customary systems, the pound-force (lbf) is the primary unit. One pound-force is the force exerted by gravity on one pound of mass at Earth surface, equal to approximately 4.448 newtons. This unit is commonly used in the United States for engineering specifications, material strength ratings, and industrial applications.

The kilogram-force (kgf) or kilopond (kp) is a gravitational metric unit equal to the force exerted by one kilogram of mass under standard gravity. One kgf equals approximately 9.807 newtons. While technically obsolete in formal SI usage, kgf remains common in some engineering contexts, particularly in Asia and Europe.`,
    faq: [
      { q: `How many newtons are in a pound-force?`, a: `One pound-force (lbf) equals approximately 4.448 newtons. To convert from lbf to N, multiply by 4.448. To convert from newtons to lbf, divide by 4.448 or multiply by 0.2248.` },
      { q: `What is the difference between mass and force?`, a: `Mass measures the amount of matter in an object (measured in kilograms), while force measures the push or pull acting on that object (measured in newtons). On Earth, a 1 kg mass experiences a gravitational force of approximately 9.81 newtons. In space, the same mass would weigh zero newtons but still have 1 kg of mass.` },
      { q: `What is a kilogram-force and when is it used?`, a: `A kilogram-force (kgf) is the force exerted by a one-kilogram mass under standard gravity (9.80665 meters per second squared). One kgf equals approximately 9.807 newtons. Though technically non-SI, it remains in use for pressure gauges, material specifications, and some engineering standards, especially in Asia.` },
      { q: `How is force measured in everyday life?`, a: `Force is commonly experienced as weight (gravitational force on a mass). Bathroom scales measure the force exerted by your body and convert it to mass. Car brakes apply force to slow vehicles. Spring scales measure force directly. In all cases, the newton provides a universal standard for precise measurement.` },
    ],
  },

  torque: {
    description: `Torque conversion is essential in automotive engineering, mechanical design, and industrial applications. Torque measures the rotational force that causes an object to turn, and understanding its units is crucial for specifying engine performance, tightening bolts, and designing machinery.

The newton-meter is the SI unit of torque, representing the force of one newton applied at a perpendicular distance of one meter from the pivot point. This unit directly relates force and leverage, making it intuitive for engineering calculations.

In the United States and United Kingdom, torque is commonly measured in pound-feet or pound-inches. One pound-foot equals approximately 1.356 newton-meters. These units are standard in automotive specifications, where engine torque output is a key performance metric.

The distinction between torque and power is important: torque measures rotational force, while power (measured in watts or horsepower) measures how quickly that force can do work. An engine with high torque can move heavy loads from a standstill, while high power enables high top speeds. Understanding torque conversion helps in comparing vehicles, selecting tools, and designing mechanical systems.`,
    faq: [
      { q: `How do I convert newton-meters to pound-feet?`, a: `To convert newton-meters to pound-feet, divide by 1.356. For example, 200 newton-meters equals approximately 147.5 pound-feet. To convert pound-feet to newton-meters, multiply by 1.356. Car specifications often list both units for international audiences.` },
      { q: `What is the difference between torque and horsepower?`, a: `Torque measures rotational force (how hard the engine can push), while horsepower measures power (how quickly that force is delivered). The relationship is: Horsepower equals Torque times RPM divided by 5,252. High torque provides strong acceleration from low speeds, while high horsepower enables higher top speeds.` },
      { q: `Why is torque important in cars?`, a: `Torque determines how quickly a vehicle can accelerate, especially from a standstill. Higher torque means better low-speed pulling power, which is why diesel engines (which produce high torque at low RPM) are preferred for trucks and towing. Electric motors produce maximum torque from zero RPM, giving electric vehicles strong acceleration.` },
      { q: `How much torque is needed to tighten a lug nut?`, a: `Typical car lug nuts should be tightened to 80 to 100 pound-feet (108 to 136 newton-meters), depending on the vehicle. Always use a torque wrench rather than an impact wrench for final tightening to avoid over-tightening, which can warp brake rotors or strip threads.` },
    ],
  },

  fuel: {
    description: `Fuel efficiency conversion is crucial for comparing vehicle performance across different regions and measurement systems. Understanding these conversions helps consumers make informed decisions about vehicle purchases, fuel costs, and environmental impact.

Three primary systems measure fuel efficiency: miles per gallon (MPG) used in the US and UK, kilometers per liter (km/L) used in many Asian and South American countries, and liters per 100 kilometers (L/100 km) used in Europe, Australia, and Canada. These systems measure the same concept from different perspectives.

MPG and km/L measure distance per unit of fuel (higher is better), while L/100 km measures fuel per unit of distance (lower is better). Converting between these systems requires inverting some relationships: for example, converting US MPG to L/100 km involves dividing 235.21 by the MPG value.

The difference between US and imperial gallons adds further complexity. A US gallon is approximately 3.785 liters, while an imperial (UK) gallon is about 4.546 liters. This means 30 MPG (US) equals about 36 MPG (imperial), a significant difference that can affect vehicle comparisons across regions.`,
    faq: [
      { q: `How do I convert MPG to L/100 km?`, a: `To convert US MPG to L/100 km, divide 235.21 by the MPG value. For example, 30 MPG (US) equals 235.21 divided by 30 equals 7.84 L/100 km. For imperial MPG, divide 282.48 by the MPG value instead. Note that MPG is distance-per-fuel while L/100 km is fuel-per-distance, so the relationship is inverse.` },
      { q: `What is the difference between US MPG and UK MPG?`, a: `The US gallon equals approximately 3.785 liters, while the UK (imperial) gallon equals approximately 4.546 liters, about 20 percent larger. This means a car rated at 30 MPG in the US would be rated at approximately 36 MPG in the UK, even though it consumes the same amount of fuel per distance.` },
      { q: `Why do European cars show L/100 km instead of MPG?`, a: `European countries use the metric system and express fuel efficiency as liters per 100 kilometers (L/100 km). This inverse measure makes it easy to compare: lower numbers mean better efficiency. It also simplifies cost calculations by multiplying L/100 km by fuel price per liter to get cost per 100 km.` },
      { q: `What is considered good fuel efficiency?`, a: `In the US, a good fuel efficiency rating is 30+ MPG (7.8 L/100 km or less) for a compact car. Hybrids achieve 50+ MPG (4.7 L/100 km), and electric vehicles are rated in miles per kWh. Standards vary by vehicle class since what is good for an SUV differs from what is good for a compact car.` },
    ],
  },

  angle: {
    description: `Angle conversion is fundamental in mathematics, engineering, navigation, and computer graphics. Angles measure rotation and direction, and understanding different angle units is essential for trigonometry, surveying, robotics, and many other fields.

Degrees are the most commonly used angle unit, with a full circle equal to 360 degrees. This system dates back to ancient Babylonian mathematics and remains the standard in everyday contexts, navigation, and many engineering applications. One degree equals 60 minutes, and one minute equals 60 seconds.

Radians are the SI unit of angular measurement, defined such that a full circle equals 2 times pi radians (approximately 6.283). One radian equals approximately 57.296 degrees. Radians are preferred in mathematical analysis because they simplify calculus formulas and eliminate the need for conversion factors in derivative and integral calculations.

Gradians (or gon) divide a full circle into 400 units, making each quadrant exactly 100 gradians. This system is used primarily in surveying and some European engineering contexts. Converting between these units uses fixed ratios: 360 degrees equals 2 times pi radians equals 400 gradians.`,
    faq: [
      { q: `How do I convert degrees to radians?`, a: `To convert degrees to radians, multiply by pi divided by 180. For example, 90 degrees times pi divided by 180 equals pi divided by 2, which is approximately 1.5708 radians. To convert radians to degrees, multiply by 180 divided by pi.` },
      { q: `Why are there 360 degrees in a circle?`, a: `The 360-degree system originated with the ancient Babylonians and Sumerians, who used a base-60 number system. The number 360 was likely chosen because it is easily divisible by many numbers (2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, 360), making it practical for astronomical and geometric calculations.` },
      { q: `What are gradians and when are they used?`, a: `Gradians (also called gon or grade) divide a circle into 400 equal parts, so a right angle equals exactly 100 gradians. This system simplifies decimal calculations in surveying and some European engineering contexts. One gradian equals 0.9 degrees or pi divided by 200 radians.` },
      { q: `Why do mathematicians prefer radians?`, a: `Radians simplify mathematical formulas. In radians, the derivative of sin(x) is cos(x) directly, while in degrees it would require a correction factor. Many formulas in calculus, physics, and engineering are cleaner and more intuitive when angles are expressed in radians, making them the preferred unit in higher mathematics.` },
    ],
  },
};

export type CategoryContentKey = keyof typeof categoryContent;