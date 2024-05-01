import type { GameType } from "$lib/utils";

export type CharacterType = {
	value: string;
	label: string;
};

export type CharacterState = {
	id: number;
	value: string;
	label: string;
};

export const characters: Record<GameType, CharacterType[]> =
{
	'genshin': [
		{ value: 'aether.webp', label: 'Aether' },
		{ value: 'albedo.png', label: 'Albedo' },
		{ value: 'alhaitham.png', label: 'Alhaitham' },
		{ value: 'aloy.png', label: 'Aloy' },
		{ value: 'amber.png', label: 'Amber' },
		{ value: 'ayaka.png', label: 'Ayaka' },
		{ value: 'ayato.png', label: 'Ayato' },
		{ value: 'baizhu.png', label: 'Baizhu' },
		{ value: 'barbara.png', label: 'Barbara' },
		{ value: 'beidou.png', label: 'Beidou' },
		{ value: 'bennett.webp', label: 'Bennett' },
		{ value: 'candace.png', label: 'Candace' },
		{ value: 'charlotte.webp', label: 'Charlotte' },
		{ value: 'chevreuse.webp', label: 'Chevreuse' },
		{ value: 'childe.png', label: 'Tartaglia' },
		{ value: 'chongyun.png', label: 'Chongyun' },
		{ value: 'collei.png', label: 'Collei' },
		{ value: 'cyno.png', label: 'Cyno' },
		{ value: 'dehya.gif', label: 'Dehya' },
		{ value: 'diluc.webp', label: 'Diluc' },
		{ value: 'diona.png', label: 'Diona' },
		{ value: 'dori.png', label: 'Dori' },
		{ value: 'eula.png', label: 'Eula' },
		{ value: 'faruzan.png', label: 'Faruzan' },
		{ value: 'fischl.png', label: 'Fischl' },
		{ value: 'freminet.png', label: 'Freminet' },
		{ value: 'furina.webp', label: 'Furina' },
		{ value: 'gaming.png', label: 'Gaming ' },
		{ value: 'ganyu.png', label: 'Ganyu' },
		{ value: 'gorou.png', label: 'Gorou' },
		{ value: 'hutao.png', label: 'Hu Tao' },
		{ value: 'itto.png', label: 'Itto' },
		{ value: 'jean.png', label: 'Jean' },
		{ value: 'kaeya.png', label: 'Kaeya' },
		{ value: 'kaveh.png', label: 'Kaveh' },
		{ value: 'kazuha.png', label: 'Kazuha' },
		{ value: 'keqing.png', label: 'Keqing' },
		{ value: 'kirara.png', label: 'Kirara' },
		{ value: 'kokomi.png', label: 'Kokomi' },
		{ value: 'kuki.webp', label: 'Kuki' },
		{ value: 'klee.png', label: 'Klee' },
		{ value: 'layla.webp', label: 'Layla' },
		{ value: 'lisa.png', label: 'Lisa' },
		{ value: 'lumine.png', label: 'Lumine' },
		{ value: 'lynette.png', label: 'Lynette' },
		{ value: 'lyney.png', label: 'Lyney' },
		{ value: 'mika.webp', label: 'Mika' },
		{ value: 'mona.png', label: 'Mona' },
		{ value: 'nahida.png', label: 'Nahida' },
		{ value: 'navia.webp', label: 'Navia' },
		{ value: 'neuvillette.webp', label: 'Neuvilette' },
		{ value: 'nilou.png', label: 'Nilou' },
		{ value: 'ningguang.png', label: 'Ningguang' },
		{ value: 'noelle.webp', label: 'Noelle' },
		{ value: 'qiqi.png', label: 'Qiqi' },
		{ value: 'raiden.png', label: 'Raiden' },
		{ value: 'razor.webp', label: 'Razor' },
		{ value: 'rosaria.png', label: 'Rosaria' },
		{ value: 'sara.png', label: 'Kujou Sara' },
		{ value: 'sayu.webp', label: 'Sayu' },
		{ value: 'shenhe.png', label: 'Shenhe' },
		{ value: 'heizou.png', label: 'Heizou' },
		{ value: 'sucrose.png', label: 'Sucrose' },
		{ value: 'thoma.png', label: 'Thoma' },
		{ value: 'tighnari.png', label: 'Tighnari' },
		{ value: 'venti.png', label: 'Venti' },
		{ value: 'wanderer.png', label: 'Wanderer' },
		{ value: 'wriothesley.webp', label: 'Wriothesley' },
		{ value: 'xiangling.png', label: 'Xiangling' },
		{ value: 'xianyun.png', label: 'Xianyun' },
		{ value: 'xiao.png', label: 'Xiao' },
		{ value: 'xingqiu.png', label: 'Xingqiu' },
		{ value: 'xinyan.png', label: 'Xinyan' },
		{ value: 'yae.png', label: 'Yae Miko' },
		{ value: 'yanfei.png', label: 'Yanfei' },
		{ value: 'yaoyao.webp', label: 'Yaoyao' },
		{ value: 'yelan.webp', label: 'Yelan' },
		{ value: 'yoimiya.png', label: 'Yoimiya' },
		{ value: 'yunjin.png', label: 'Yun Jin' },
		{ value: 'zhongli.png', label: 'Zhongli' }
	].sort((a, b) => (a.label < b.label ? -1 : 1)),
	'hsr': [
		{ value: 'qingque.png', label: 'Qingque' },
		{ value: 'herta.gif', label: 'Herta' },
		{ value: 'ruanmei.gif', label: 'Ruan Mei' }
	].sort((a, b) => (a.label < b.label ? -1 : 1))
};
