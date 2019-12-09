const db_id = {
	"cl":{
		"도적": "11",
		"드루이드": "8",
		"마법사": "1",
		"사냥꾼": "5",
		"사제": "10",
		"성기사": "6",
		"수도사": "9",
		"악마사냥꾼": "4",
		"전사": "12",
		"주술사": "7",
		"죽음의 기사": "3",
		"흑마법사": "2"
	},
	"sp":{
		"고양": 19,
		"고통": 4,
		"냉기": 8,
		"무기": 34,
		"무법": 32,
		"방어": 36,
		"보호": 16,
		"복수": 11,
		"복원": 20,
		"부정": 9,
		"분노": 35,
		"비전": 1,
		"사격": 13,
		"생존": 14,
		"수양": 28,
		"수호": 23,
		"신성": 29,
		"악마": 5,
		"암살": 31,
		"암흑": 30,
		"야성": 22,
		"야수": 12,
		"양조": 25,
		"운무": 26,
		"잠행": 33,
		"정기": 18,
		"조화": 21,
		"징벌": 17,
		"파괴": 6,
		"파멸": 10,
		"풍운": 27,
		"혈기": 7,
		"화염": 2,
		"회복": 24
	}
};

const parsed_summary =
{
	"skills": [
		{
			"classes_kr": "도적",
			"id": "185313",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "1784",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "185438",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "195452",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "1856",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "2094",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "196912",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "36554",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "921",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "408",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "196819",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "6770",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "121471",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "58423",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "212283",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "1833",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "53",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "197835",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "185314",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "1725",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "5277",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "231691",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "79152",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "76808",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "231718",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "114014",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "231716",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "245751",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "277950",
			"specialize_en": "subtlety",
			"classes_en": "rogue",
			"specialize_kr": "잠행"
		},
		{
			"classes_kr": "도적",
			"id": "51723",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "1784",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "1856",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "2094",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "79140",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "36554",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "921",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "408",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "32645",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "8679",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "1329",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "196819",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "703",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "6770",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "185565",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "2823",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "1943",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "1833",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "3408",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "14190",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "76803",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "79134",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "1725",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "5277",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "231691",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "1752",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "231719",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "14117",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "279877",
			"specialize_en": "assassination",
			"classes_en": "rogue",
			"specialize_kr": "암살"
		},
		{
			"classes_kr": "도적",
			"id": "193316",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "2098",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "185763",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "13877",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "199804",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "1856",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "193315",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "1784",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "2094",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "13750",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "14161",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "921",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "6770",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "195457",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "79096",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "8676",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "76806",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "1833",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "1776",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "199736",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "199754",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "35551",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "1725",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "61329",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "235484",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "231691",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "도적",
			"id": "279876",
			"specialize_en": "outlaw",
			"classes_en": "rogue",
			"specialize_kr": "무법"
		},
		{
			"classes_kr": "수도사",
			"id": "113656",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "115080",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "137639",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "107428",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "101546",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "122470",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "116670",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "116095",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "119381",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "116705",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "101545",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "115636",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "137025",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "218164",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "262840",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "157411",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "116092",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "137384",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "261917",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "128595",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "157445",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "261916",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "220357",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "231627",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "120227",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "124146",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "271232",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "231602",
			"specialize_en": "windwalker",
			"classes_en": "monk",
			"specialize_kr": "풍운"
		},
		{
			"classes_kr": "수도사",
			"id": "119582",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "116670",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "115308",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "124502",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "115203",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "115069",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "117906",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "119381",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "115176",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "116705",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "115072",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "216519",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "115181",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "121253",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "205523",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "245013",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "218164",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "120225",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "157445",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "231602",
			"specialize_en": "brewmaster",
			"classes_en": "monk",
			"specialize_kr": "양조"
		},
		{
			"classes_kr": "수도사",
			"id": "212051",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "191837",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "107428",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "115175",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "124682",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "101546",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "116670",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "231876",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "116849",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "119381",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "117907",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "115310",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "115450",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "116680",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "115151",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "243435",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "116645",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "231633",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "262840",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "231605",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "120224",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "274586",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "수도사",
			"id": "281231",
			"specialize_en": "mistweaver",
			"classes_en": "monk",
			"specialize_kr": "운무"
		},
		{
			"classes_kr": "마법사",
			"id": "31687",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "12472",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "190356",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "84714",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "190447",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "76613",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "112965",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "66",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "108853",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "235219",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "12982",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "30455",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "116",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "44614",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "120",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "231596",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "11426",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "231584",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "236662",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "231582",
			"specialize_en": "frost-death-knight",
			"classes_en": "mage",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "마법사",
			"id": "190319",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "12846",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "31661",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "195283",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "66",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "108853",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "133",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "86949",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "235313",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "2948",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "11366",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "157642",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "2120",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "117216",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "231568",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "231630",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "231567",
			"specialize_en": "fire",
			"classes_en": "mage",
			"specialize_kr": "화염"
		},
		{
			"classes_kr": "마법사",
			"id": "44425",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "110959",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "5143",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "195676",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "66",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "30451",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "12042",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "205025",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "235450",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "1449",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "12051",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "190740",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "31589",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "231564",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "마법사",
			"id": "231565",
			"specialize_en": "arcane",
			"classes_en": "mage",
			"specialize_kr": "비전"
		},
		{
			"classes_kr": "주술사",
			"id": "168534",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "51505",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "77756",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "198067",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "198103",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "61882",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "188443",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "60188",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "57994",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "51886",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "51490",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "196840",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "188389",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "8004",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "8042",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "188196",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "190488",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "190493",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "231722",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "187828",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "86108",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "231721",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "280609",
			"specialize_en": "elemental",
			"classes_en": "shaman",
			"specialize_kr": "정기"
		},
		{
			"classes_kr": "주술사",
			"id": "51505",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "212048",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "77756",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "198103",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "51564",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "5394",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "77226",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "98008",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "57994",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "61295",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "77130",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "108280",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "73920",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "1064",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "8004",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "77472",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "421",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "79206",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "16196",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "403",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "188838",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "231725",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "231785",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "86100",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "231721",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "231780",
			"specialize_en": "restoration",
			"classes_en": "shaman",
			"specialize_kr": "복원"
		},
		{
			"classes_kr": "주술사",
			"id": "33757",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "51533",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "198103",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "193796",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "201845",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "193786",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "196834",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "77223",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "187837",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "188070",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "57994",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "51886",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "17364",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "187874",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "60103",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "86629",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "58875",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "187880",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "231723",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "86099",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "주술사",
			"id": "157444",
			"specialize_en": "enhancement",
			"classes_en": "shaman",
			"specialize_kr": "고양"
		},
		{
			"classes_kr": "성기사",
			"id": "31884",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "1022",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "853",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "26573",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "6940",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "53600",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "85043",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "96231",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "184092",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "86659",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "53595",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "31935",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "31850",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "498",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "25780",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "76671",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "19750",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "213644",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "161800",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "231665",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "231657",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "229976",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "105424",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "275779",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "105805",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "86102",
			"specialize_en": "protection",
			"classes_en": "paladin",
			"specialize_kr": "보호"
		},
		{
			"classes_kr": "성기사",
			"id": "203539",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "203538",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "20271",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "1022",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "31884",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "853",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "96231",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "53385",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "85256",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "184662",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "184575",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "213644",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "183218",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "183435",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "267344",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "19750",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "267316",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "231663",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "231667",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "86539",
			"specialize_en": "retribution",
			"classes_en": "paladin",
			"specialize_kr": "징벌"
		},
		{
			"classes_kr": "성기사",
			"id": "212056",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "31884",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "1022",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "853",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "26573",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "6940",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "183997",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "53563",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "31821",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "82326",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "498",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "183998",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "53576",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "85222",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "20473",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "4987",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "19750",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "200327",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "231667",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "86103",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "231642",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "231644",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "272906",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "275773",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "성기사",
			"id": "289941",
			"specialize_en": "holy",
			"classes_en": "paladin",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "전사",
			"id": "1719",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "23881",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "46917",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "5246",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "184361",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "34428",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "184367",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "97462",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "190411",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "184364",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "18499",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "85288",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "5308",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "12950",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "76856",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "12323",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "231827",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "231842",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "86110",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "209694",
			"specialize_en": "fury",
			"classes_en": "warrior",
			"specialize_kr": "분노"
		},
		{
			"classes_kr": "전사",
			"id": "167105",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "163201",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "5246",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "1680",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "34428",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "97462",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "18499",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "118038",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "12294",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "7384",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "1464",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "227847",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "184783",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "1715",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "262111",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "260708",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "262304",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "279423",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "86101",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "231830",
			"specialize_en": "arms",
			"classes_en": "warrior",
			"specialize_kr": "무기"
		},
		{
			"classes_kr": "전사",
			"id": "1160",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "23920",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "2565",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "23922",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "5246",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "190456",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "34428",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "97462",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "198304",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "18499",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "46968",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "6572",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "71",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "6343",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "871",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "12975",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "20243",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "76857",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "231847",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "231834",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "전사",
			"id": "86535",
			"specialize_en": "protection",
			"classes_en": "warrior",
			"specialize_kr": "방어"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "196718",
			"specialize_en": "havoc",
			"classes_en": "demon-hunter",
			"specialize_kr": "파멸"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "162243",
			"specialize_en": "havoc",
			"classes_en": "demon-hunter",
			"specialize_kr": "파멸"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "185164",
			"specialize_en": "havoc",
			"classes_en": "demon-hunter",
			"specialize_kr": "파멸"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "178940",
			"specialize_en": "havoc",
			"classes_en": "demon-hunter",
			"specialize_kr": "파멸"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "278386",
			"specialize_en": "havoc",
			"classes_en": "demon-hunter",
			"specialize_kr": "파멸"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "281854",
			"specialize_en": "havoc",
			"classes_en": "demon-hunter",
			"specialize_kr": "파멸"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "178976",
			"specialize_en": "havoc",
			"classes_en": "demon-hunter",
			"specialize_kr": "파멸"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "203720",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "187827",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "228477",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "189110",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "204254",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "207684",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "178740",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "203513",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "204021",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "185245",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "203783",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "202137",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "203782",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "203747",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "204157",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "204596",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "212613",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "207197",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "281242",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "악마사냥꾼",
			"id": "226359",
			"specialize_en": "vengeance",
			"classes_en": "demon-hunter",
			"specialize_kr": "복수"
		},
		{
			"classes_kr": "흑마법사",
			"id": "105174",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "104316",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "77219",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "234153",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "265187",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "30146",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "30283",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "108415",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "196277",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "686",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "267102",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "264178",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "231811",
			"specialize_en": "demonology",
			"classes_en": "warlock",
			"specialize_kr": "악마"
		},
		{
			"classes_kr": "흑마법사",
			"id": "1122",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "77220",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "116858",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "348",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "234153",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "80240",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "29722",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "30283",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "17962",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "196406",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "686",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "5740",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "231793",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "231811",
			"specialize_en": "destruction",
			"classes_en": "warlock",
			"specialize_kr": "파괴"
		},
		{
			"classes_kr": "흑마법사",
			"id": "980",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "234153",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "30108",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "205180",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "231791",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "30283",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "27243",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "172",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "232670",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "77215",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "231792",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "흑마법사",
			"id": "231811",
			"specialize_en": "affliction",
			"classes_en": "warlock",
			"specialize_kr": "고통"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "42650",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "63560",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "46584",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "47541",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "197147",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "275699",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "49530",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "45524",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "43265",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "55090",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "48792",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "77575",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "48263",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "85948",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "51462",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "77515",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "178819",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "278223",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "86536",
			"specialize_en": "unholy-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "부정"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "49184",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "51128",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "59057",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "81229",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "51271",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "45524",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "196770",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "49020",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "47568",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "77514",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "674",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "48263",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "48792",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "49143",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "195621",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "178819",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "278223",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "86113",
			"specialize_en": "frost-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "냉기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "221562",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "49028",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "206930",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "81136",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "43265",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "108199",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "48263",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "48792",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "50842",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "55233",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "195182",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "77513",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "195292",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "86537",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "죽음의 기사",
			"id": "161797",
			"specialize_en": "blood-death-knight",
			"classes_en": "death-knight",
			"specialize_kr": "혈기"
		},
		{
			"classes_kr": "사제",
			"id": "212036",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "81749",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "589",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "186263",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "34433",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "47540",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "17",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "527",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "33206",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "132157",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "47536",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "73325",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "62618",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "194509",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "2061",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "19236",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "198068",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "8122",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "45243",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "271534",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "1706",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "2096",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "231682",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "262861",
			"specialize_en": "discipline",
			"classes_en": "priest",
			"specialize_kr": "수양"
		},
		{
			"classes_kr": "사제",
			"id": "212036",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "20711",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "47788",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "77485",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "596",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "139",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "2060",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "527",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "132157",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "64843",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "73325",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "33076",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "64901",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "2061",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "2050",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "19236",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "34861",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "8122",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "88625",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "45243",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "63733",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "1706",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "2096",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "14914",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "231687",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "262861",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "285485",
			"specialize_en": "holy",
			"classes_en": "priest",
			"specialize_kr": "신성"
		},
		{
			"classes_kr": "사제",
			"id": "589",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "186263",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "34433",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "48045",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "17",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "78203",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "15407",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "34914",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "232698",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "73325",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "47585",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "228260",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "15286",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "8092",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "228264",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "2061",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "8122",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "77486",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "213634",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "45243",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "228266",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "1706",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "15487",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "2096",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "185916",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "280752",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "231688",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "사제",
			"id": "190719",
			"specialize_en": "shadow",
			"classes_en": "priest",
			"specialize_kr": "암흑"
		},
		{
			"classes_kr": "드루이드",
			"id": "2908",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "191034",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "194153",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "2782",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "194223",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "24858",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "78674",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "29166",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "190984",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "93402",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "5215",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "78675",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "22812",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "197524",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "228545",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "77492",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "137013",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "231050",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "86104",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "231042",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "279708",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "197911",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "279619",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "231021",
			"specialize_en": "balance",
			"classes_en": "druid",
			"specialize_kr": "조화"
		},
		{
			"classes_kr": "드루이드",
			"id": "131768",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "22568",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "2908",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "5217",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "2782",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "106839",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "106951",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "5215",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "61336",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "16974",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "1822",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "106898",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "16864",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "22570",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "1079",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "228545",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "48484",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "77493",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "213764",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "106832",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "300349",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "231055",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "157447",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "231052",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "137011",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "231057",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "231063",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "231283",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "86097",
			"specialize_en": "feral",
			"classes_en": "druid",
			"specialize_kr": "야성"
		},
		{
			"classes_kr": "드루이드",
			"id": "33763",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "774",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "212040",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "48438",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "77495",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "2908",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "88423",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "102342",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "145205",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "29166",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "93402",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "740",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "5215",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "113043",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "18562",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "22812",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "145108",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "5176",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "137012",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "231050",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "86093",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "231040",
			"specialize_en": "restoration",
			"classes_en": "druid",
			"specialize_kr": "회복"
		},
		{
			"classes_kr": "드루이드",
			"id": "22842",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "2908",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "2782",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "192081",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "210706",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "5215",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "106839",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "155783",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "61336",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "22812",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "106898",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "6807",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "16931",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "228545",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "99",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "213764",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "273048",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "106832",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "231070",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "157447",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "300346",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "86096",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "301768",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "231065",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "288826",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "137010",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "231064",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "드루이드",
			"id": "270100",
			"specialize_en": "guardian",
			"classes_en": "druid",
			"specialize_kr": "수호"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187650",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "34477",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "53270",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "19577",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "185789",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187698",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "217200",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "34026",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "115939",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "147362",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "193530",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "19574",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "193455",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "2643",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "781",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "109304",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "5116",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "76657",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231548",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "56315",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231549",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231546",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "262837",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "262838",
			"specialize_en": "beast-mastery",
			"classes_en": "hunter",
			"specialize_kr": "야수"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187650",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "34477",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "56641",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "257044",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "186387",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187698",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "147362",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "19434",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "155228",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "781",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "109304",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "185358",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "257621",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "193468",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "5116",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "288613",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231549",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "260240",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231546",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "257620",
			"specialize_en": "marksmanship",
			"classes_en": "hunter",
			"specialize_kr": "사격"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187650",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "34477",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "19577",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "259495",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187698",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "266779",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "781",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "109304",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "186270",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "190925",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "195645",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "259491",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "263135",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "186289",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187707",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "187708",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "259489",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231549",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "294029",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231546",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "263186",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "231550",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		},
		{
			"classes_kr": "사냥꾼",
			"id": "262839",
			"specialize_en": "survival",
			"classes_en": "hunter",
			"specialize_kr": "생존"
		}
	],
	"wow_classes_tree": {
		"en": {
			"mage": [
				"arcane",
				"fire",
				"frost-death-knight"
			],
			"warlock": [
				"affliction",
				"demonology",
				"destruction"
			],
			"death-knight": [
				"blood-death-knight",
				"frost-death-knight",
				"unholy-death-knight"
			],
			"demon-hunter": [
				"havoc",
				"vengeance"
			],
			"hunter": [
				"beast-mastery",
				"marksmanship",
				"survival"
			],
			"paladin": [
				"holy",
				"protection",
				"retribution"
			],
			"shaman": [
				"elemental",
				"enhancement",
				"restoration"
			],
			"druid": [
				"balance",
				"feral",
				"guardian",
				"restoration"
			],
			"monk": [
				"brewmaster",
				"mistweaver",
				"windwalker"
			],
			"priest": [
				"discipline",
				"holy",
				"shadow"
			],
			"rogue": [
				"assassination",
				"outlaw",
				"subtlety"
			],
			"warrior": [
				"arms",
				"fury",
				"protection"
			]
		},
		"kr": {
			"도적": [
				"암살",
				"무법",
				"잠행"
			],
			"수도사": [
				"양조",
				"운무",
				"풍운"
			],
			"마법사": [
				"비전",
				"화염",
				"냉기"
			],
			"주술사": [
				"정기",
				"고양",
				"복원"
			],
			"성기사": [
				"신성",
				"보호",
				"징벌"
			],
			"전사": [
				"무기",
				"분노",
				"방어"
			],
			"악마사냥꾼": [
				"파멸",
				"복수"
			],
			"흑마법사": [
				"고통",
				"악마",
				"파괴"
			],
			"죽음의 기사": [
				"혈기",
				"냉기",
				"부정"
			],
			"사제": [
				"수양",
				"신성",
				"암흑"
			],
			"드루이드": [
				"조화",
				"야성",
				"수호",
				"회복"
			],
			"사냥꾼": [
				"야수",
				"사격",
				"생존"
			]
		}
	}
};

