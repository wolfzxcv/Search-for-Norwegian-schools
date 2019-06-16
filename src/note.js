Akershus: "02"
Aust-Agder: "09"
Buskerud: "06"
Finnmark Finnmárku: "20"
Hedmark: "04"
Hordaland: "12"
Møre og Romsdal: "15"
Nord-Trøndelag: "17"
Nordland: "18"
Oppland: "05"
Oslo: "03"
Rogaland: "11"
Sogn og Fjordane: "14"
Svalbard: "21"
Sør-Trøndelag: "16"
Telemark: "08"
Troms Romsa: "19"
Trøndelag: "50"
Utlandet: "25"
Vest-Agder: "10"
Vestfold: "07"
Østfold: "01"


/******************************/



const arrA = [
  { name: 'AAA', age: '15' },
  { name: 'BBB', age: '22' },
  { name: 'CCC', age: '31' },
  { name: 'DDD', age: '45' },
  { name: 'EEE', age: '47' },
  { name: 'FAKE', age: '55' }
];

const arrB = [
  {alder:'15', hobby: 'music'},
  {alder:'31', hobby: 'hiking'},
  {alder:'45', hobby: 'drawing'},
  {alder:'47', hobby: 'swimming'},
  {alder:'22', hobby: 'watching TV'}
]

// the result I want
const result = [
  {name: 'AAA', age: '15', hobby: 'music'},
  {name: 'BBB', age: '22', hobby: 'watching TV'},
  {name: 'CCC', age: '31', hobby: 'hiking'},
  {name: 'DDD', age: '45', hobby: 'drawing'},
  {name: 'EEE', age: '47', hobby: 'swimming'},
  {name: 'FAKE', age: '55' }
]

/*************Spoiler Alert*****************/

const result = arrA.map((A) => {
	const finder = arrB.find((B) => A.age === B.alder) || {};
	A.hobby = finder.hobby || '';
	return A;
});

console.log(result)