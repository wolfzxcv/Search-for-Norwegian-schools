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