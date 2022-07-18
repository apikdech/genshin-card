export type CharacterType = {
    value: string
    label: string
}

export type CharacterState = {
    id: string
    value: string
    label: string
}

export const characters: CharacterType[] = [
    { value: 'aether.webp', label: 'Aether' },
    { value: 'albedo.png', label: 'Albedo' },
    { value: 'aloy.png', label: 'Aloy' },
    { value: 'amber.png', label: 'Amber' },
    { value: 'ayaka.png', label: 'Ayaka' },
    { value: 'ayato.png', label: 'Ayato' },
    { value: 'barbara.png', label: 'Barbara' },
    { value: 'beidou.png', label: 'Beidou' },
    { value: 'bennett.webp', label: 'Bennett' },
    { value: 'childe.png', label: 'Tartaglia' },
    { value: 'chongyun.png', label: 'Chongyun' },
    { value: 'diluc.webp', label: 'Diluc' },
    { value: 'diona.png', label: 'Diona' },
    { value: 'eula.png', label: 'Eula' },
    { value: 'fischl.png', label: 'Fischl' },
    { value: 'ganyu.png', label: 'Ganyu' },
    { value: 'gorou.png', label: 'Gorou' },
    { value: 'hutao.png', label: 'Hu Tao' },
    { value: 'itto.png', label: 'Itto' },
    { value: 'jean.png', label: 'Jean' },
    { value: 'kaeya.png', label: 'Kaeya' },
    { value: 'kazuha.png', label: 'Kazuha' },
    { value: 'keqing.png', label: 'Keqing' },
    { value: 'kokomi.png', label: 'Kokomi' },
    { value: 'kuki.webp', label: 'Kuki Shinobu' },
    { value: 'klee.png', label: 'Klee' },
    { value: 'lisa.png', label: 'Lisa' },
    { value: 'lumine.png', label: 'Lumine' },
    { value: 'mona.png', label: 'Mona' },
    { value: 'ningguang.png', label: 'Ningguang' },
    { value: 'noelle.webp', label: 'Noelle' },
    { value: 'qiqi.png', label: 'Qiqi' },
    { value: 'raiden.png', label: 'Raiden' },
    { value: 'razor.webp', label: 'Razor' },
    { value: 'rosaria.png', label: 'Rosaria' },
    { value: 'sara.png', label: 'Kujou Sara' },
    { value: 'sayu.webp', label: 'Sayu' },
    { value: 'shenhe.png', label: 'Shenhe' },
    { value: 'heizou.png', label: 'Shikanoin Heizou' },
    { value: 'sucrose.png', label: 'Sucrose' },
    { value: 'thoma.png', label: 'Thoma' },
    { value: 'venti.png', label: 'Venti' },
    { value: 'xiangling.png', label: 'Xiangling' },
    { value: 'xiao.png', label: 'Xiao' },
    { value: 'xingqiu.png', label: 'Xingqiu' },
    { value: 'xinyan.png', label: 'Xinyan' },
    { value: 'yae.png', label: 'Yae Miko' },
    { value: 'yanfei.png', label: 'Yanfei' },
    { value: 'yelan.webp', label: 'Yelan' },
    { value: 'yoimiya.png', label: 'Yoimiya' },
    { value: 'yunjin.png', label: 'Yun Jin' },
    { value: 'zhongli.png', label: 'Zhongli' }
].sort((a, b) => a.label < b.label ? -1 : 1);
