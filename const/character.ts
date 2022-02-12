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
  { value: '/assets/aether.webp', label: 'Aether' },
  { value: '/assets/albedo.png', label: 'Albedo' },
  { value: '/assets/aloy.png', label: 'Aloy' },
  { value: '/assets/amber.png', label: 'Amber' },
  { value: '/assets/ayaka.png', label: 'Ayaka' },
  { value: '/assets/barbara.png', label: 'Barbara' },
  { value: '/assets/beidou.png', label: 'Beidou' },
  { value: '/assets/bennett.webp', label: 'Bennett' },
  { value: '/assets/childe.png', label: 'Tartaglia' },
  { value: '/assets/chongyun.png', label: 'Chongyun' },
  { value: '/assets/diluc.webp', label: 'Diluc' },
  { value: '/assets/diona.png', label: 'Diona' },
  { value: '/assets/eula.png', label: 'Eula' },
  { value: '/assets/fischl.png', label: 'Fischl' },
  { value: '/assets/ganyu.png', label: 'Ganyu' },
  { value: '/assets/gorou.png', label: 'Gorou' },
  { value: '/assets/hutao.png', label: 'Hu Tao' },
  { value: '/assets/itto.png', label: 'Itto' },
  { value: '/assets/jean.png', label: 'Jean' },
  { value: '/assets/kaeya.png', label: 'Kaeya' },
  { value: '/assets/kazuha.png', label: 'Kazuha' },
  { value: '/assets/keqing.png', label: 'Keqing' },
  { value: '/assets/kokomi.png', label: 'Kokomi' },
  { value: '/assets/klee.png', label: 'Klee' },
  { value: '/assets/lisa.png', label: 'Lisa' },
  { value: '/assets/lumine.png', label: 'Lumine' },
  { value: '/assets/mona.png', label: 'Mona' },
  { value: '/assets/ningguang.png', label: 'Ningguang' },
  { value: '/assets/noelle.webp', label: 'Noelle' },
  { value: '/assets/qiqi.png', label: 'Qiqi' },
  { value: '/assets/raiden.png', label: 'Raiden' },
  { value: '/assets/razor.webp', label: 'Razor' },
  { value: '/assets/rosaria.png', label: 'Rosaria' },
  { value: '/assets/sara.png', label: 'Kujou Sara' },
  { value: '/assets/sayu.webp', label: 'Sayu' },
  { value: '/assets/shenhe.png', label: 'Shenhe' },
  { value: '/assets/sucrose.png', label: 'Sucrose' },
  { value: '/assets/thoma.png', label: 'Thoma' },
  { value: '/assets/venti.png', label: 'Venti' },
  { value: '/assets/xiangling.png', label: 'Xiangling' },
  { value: '/assets/xiao.png', label: 'Xiao' },
  { value: '/assets/xingqiu.png', label: 'Xingqiu' },
  { value: '/assets/xinyan.png', label: 'Xinyan' },
  { value: '/assets/yanfei.png', label: 'Yanfei' },
  { value: '/assets/yoimiya.png', label: 'Yoimiya' },
  { value: '/assets/yunjin.png', label: 'Yun Jin' },
  { value: '/assets/zhongli.png', label: 'Zhongli' }
].sort((a, b) => a.label < b.label ? -1 : 1);
