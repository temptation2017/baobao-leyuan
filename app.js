/* ================= 数据 ================= */
const ANIMALS = [
  {name:'小狗', en:'Dog', img:'assets/animals/dog.png', emoji:'🐶', audio:'assets/audio/a_dog.mp3', sound:'汪汪', fact:'狗狗喜欢和人玩，摇尾巴就是开心。'},
  {name:'小猫', en:'Cat', img:'assets/animals/cat.png', emoji:'🐱', audio:'assets/audio/a_cat.mp3', sound:'喵喵', fact:'猫咪喜欢晒太阳，呼噜呼噜表示舒服。'},
  {name:'小兔子', en:'Rabbit', img:'assets/animals/rabbit.png', emoji:'🐰', audio:'assets/audio/a_rabbit.mp3', sound:'蹦蹦跳', fact:'兔子爱吃胡萝卜，跑起来一蹦一蹦的。'},
  {name:'小熊', en:'Bear', img:'assets/animals/bear.png', emoji:'🐻', audio:'assets/audio/a_bear.mp3', sound:'嗷呜', fact:'小熊冬天会冬眠，睡一个长长的觉。'},
  {name:'大象', en:'Elephant', img:'assets/animals/elephant.png', emoji:'🐘', audio:'assets/audio/a_elephant.mp3', sound:'嘟——', fact:'大象的鼻子很长，能卷起东西。'},
  {name:'狮子', en:'Lion', img:'assets/animals/lion.png', emoji:'🦁', audio:'assets/audio/a_lion.mp3', sound:'吼！', fact:'狮子是草原之王，头发像围脖。'},
  {name:'猴子', en:'Monkey', img:'assets/animals/monkey.png', emoji:'🐵', audio:'assets/audio/a_monkey.mp3', sound:'吱吱', fact:'猴子爱爬树，尾巴能勾住树枝。'},
  {name:'小鸭', en:'Duck', img:'assets/animals/duck.png', emoji:'🦆', audio:'assets/audio/a_duck.mp3', sound:'嘎嘎', fact:'小鸭子会游泳，羽毛不怕水。'},
  {name:'青蛙', en:'Frog', img:'assets/animals/frog.webp', emoji:'🐸', audio:'assets/audio/a_frog.mp3', sound:'呱呱', fact:'青蛙从小蝌蚪长大，爱吃害虫。'},
  {name:'熊猫', en:'Panda', img:'assets/animals/panda.webp', emoji:'🐼', audio:'assets/audio/a_panda.mp3', sound:'嗯嗯', fact:'熊猫是中国国宝，最爱吃竹子。'},
  {name:'小马', en:'Horse', img:'assets/animals/horse.png', emoji:'🐴', audio:'assets/audio/a_horse.mp3', sound:'嘶', fact:'小马跑得很快，长大可以骑。'},
  {name:'小鸡', en:'Chick', img:'assets/animals/chick.png', emoji:'🐤', audio:'assets/audio/a_chick.mp3', sound:'叽叽', fact:'小鸡爱吃米，整天跟着鸡妈妈。'},
  {name:'小猪', en:'Pig', img:'assets/animals/pig.png', emoji:'🐷', audio:'assets/audio/a_pig.mp3', sound:'哼哼', fact:'小猪爱打滚，鼻子圆圆的。'},
  {name:'小羊', en:'Sheep', img:'assets/animals/sheep.png', emoji:'🐑', audio:'assets/audio/a_sheep.mp3', sound:'咩咩', fact:'小羊的毛卷卷的，摸起来软软的。'},
  {name:'小牛', en:'Cow', img:'assets/animals/cow.png', emoji:'🐮', audio:'assets/audio/a_cow.mp3', sound:'哞哞', fact:'小牛爱吃草，长大能产牛奶。'},
  {name:'老虎', en:'Tiger', img:'assets/animals/tiger.png', emoji:'🐯', audio:'assets/audio/a_tiger.mp3', sound:'嗷呜', fact:'老虎头上有个王字，是森林之王。'},
  {name:'长颈鹿', en:'Giraffe', img:'assets/animals/giraffe.png', emoji:'🦒', audio:'assets/audio/a_giraffe.mp3', sound:'嗯', fact:'长颈鹿脖子最长，能吃到高高的叶子。'},
  {name:'斑马', en:'Zebra', img:'assets/animals/zebra.png', emoji:'🦓', audio:'assets/audio/a_zebra.mp3', sound:'嘶嘶', fact:'斑马穿着条纹衣，每只花纹都不一样。'},
  {name:'企鹅', en:'Penguin', img:'assets/animals/penguin.png', emoji:'🐧', audio:'assets/audio/a_penguin.mp3', sound:'嘎嘎', fact:'企鹅住在南极，走路一摇一摆。'},
  {name:'袋鼠', en:'Kangaroo', img:'assets/animals/kangaroo.png', emoji:'🦘', audio:'assets/audio/a_kangaroo.mp3', sound:'呜呜', fact:'袋鼠妈妈有育儿袋，宝宝住在里面。'},
  {name:'黑熊', en:'Asian Black Bear', img:'assets/animals/asian-black-bear.webp', emoji:'🐻', audio:'assets/audio/a_c021.mp3', sound:'嗷呜', fact:'胸前有一弯小月牙。'},
  {name:'雪豹', en:'Snow leopard', img:'assets/animals/snow-leopard.webp', emoji:'🐆', audio:'assets/audio/a_c022.mp3', sound:'吼', fact:'住在高高的雪山上。'},
  {name:'猎豹', en:'Cheetah', img:'assets/animals/cheetah.webp', emoji:'🐆', audio:'assets/audio/a_c023.mp3', sound:'吼', fact:'跑得比汽车还快。'},
  {name:'云豹', en:'Clouded leopard', img:'assets/animals/clouded-leopard.webp', emoji:'🐆', audio:'assets/audio/a_c024.mp3', sound:'吼', fact:'牙齿长长像小剑。'},
  {name:'狼', en:'Wolf', img:'assets/animals/wolf.webp', emoji:'🐺', audio:'assets/audio/a_c025.mp3', sound:'嗷呜——', fact:'喜欢和家人一起生活。'},
  {name:'鹿', en:'Deer', img:'assets/animals/deer.webp', emoji:'🦌', audio:'assets/audio/a_c026.mp3', sound:'哟哟', fact:'公鹿头上长着大角。'},
  {name:'马', en:'Horse', img:'assets/animals/horse.webp', emoji:'🐴', audio:'assets/audio/a_c027.mp3', sound:'嘶——', fact:'跑起来像风一样快。'},
  {name:'驴', en:'Donkey', img:'assets/animals/donkey.webp', emoji:'🫏', audio:'assets/audio/a_c028.mp3', sound:'嗯啊', fact:'倔强但是很能干。'},
  {name:'水牛', en:'Water buffalo', img:'assets/animals/water-buffalo.webp', emoji:'🐃', audio:'assets/audio/a_c029.mp3', sound:'哞——', fact:'最爱泡在水里。'},
  {name:'美洲野牛', en:'American bison', img:'assets/animals/american-bison.webp', emoji:'🦬', audio:'assets/audio/a_c030.mp3', sound:'哞——', fact:'头大肩膀高力气大。'},
  {name:'疣猪', en:'Warthogs', img:'assets/animals/warthogs.webp', emoji:'🐷', audio:'assets/audio/a_c031.mp3', sound:'哼哼', fact:'脸上长着小疙瘩。'},
  {name:'骆驼', en:'Camel', img:'assets/animals/camel.webp', emoji:'🐫', audio:'assets/audio/a_c032.mp3', sound:'哼', fact:'驼峰里存着能量。'},
  {name:'刺猬', en:'Hedgehog', img:'assets/animals/hedgehog.webp', emoji:'🦔', audio:'assets/audio/a_c033.mp3', sound:'呼哧', fact:'缩成刺球保护自己。'},
  {name:'蝙蝠', en:'Bat', img:'assets/animals/bat.webp', emoji:'🦇', audio:'assets/audio/a_c034.mp3', sound:'吱吱', fact:'倒挂着睡觉会飞。'},
  {name:'穿山甲', en:'Pangolin', img:'assets/animals/pangolin.webp', emoji:'🐾', audio:'assets/audio/a_c035.mp3', sound:'呼哧', fact:'穿着盔甲吃蚂蚁。'},
  {name:'懒猴', en:'Sunda slow loris', img:'assets/animals/sunda-slow-loris.webp', emoji:'🐵', audio:'assets/audio/a_c036.mp3', sound:'吱吱', fact:'夜里慢慢爬的。'},
  {name:'水獭', en:'Eurasian Otter', img:'assets/animals/eurasian-otter.webp', emoji:'🦦', audio:'assets/audio/a_c037.mp3', sound:'吱吱', fact:'爱仰泳吃小鱼。'},
  {name:'海獭', en:'Sea Otter', img:'assets/animals/sea-otter.webp', emoji:'🦦', audio:'assets/audio/a_c038.mp3', sound:'吱吱', fact:'抱着石头砸贝壳。'},
  {name:'浣熊', en:'Raccoon', img:'assets/animals/raccoon.webp', emoji:'🦝', audio:'assets/audio/a_c039.mp3', sound:'吱吱', fact:'爱把食物洗洗再吃。'},
  {name:'座头鲸', en:'Humpback Whale', img:'assets/animals/humpback-whale.webp', emoji:'🐳', audio:'assets/audio/a_c040.mp3', sound:'呜——', fact:'会唱歌会跳跃。'},
  {name:'白鲸', en:'Beluga', img:'assets/animals/beluga.webp', emoji:'🐳', audio:'assets/audio/a_c041.mp3', sound:'嘤嘤', fact:'白白的爱笑。'},
  {name:'抹香鲸', en:'Sperm Whale', img:'assets/animals/sperm-whale.webp', emoji:'🐳', audio:'assets/audio/a_c042.mp3', sound:'呜——', fact:'头方方潜水最深。'},
  {name:'灰鲸', en:'Grey Whale', img:'assets/animals/grey-whale.webp', emoji:'🐳', audio:'assets/audio/a_c043.mp3', sound:'呜——', fact:'爱贴着海岸旅行。'},
  {name:'虎鲸', en:'Orca', img:'assets/animals/orca.webp', emoji:'🐋', audio:'assets/audio/a_c044.mp3', sound:'嘤嘤', fact:'黑白花纹很聪明。'},
  {name:'海豚', en:'Oceanic Dolphins', img:'assets/animals/oceanic-dolphins.webp', emoji:'🐬', audio:'assets/audio/a_c045.mp3', sound:'嘤嘤', fact:'会顶球会跳跃。'},
  {name:'鼠海豚', en:'Porpoises', img:'assets/animals/porpoises.webp', emoji:'🐬', audio:'assets/audio/a_c046.mp3', sound:'嘤嘤', fact:'小小个的海豚。'},
  {name:'海豹', en:'Earless Seals', img:'assets/animals/earless-seals.webp', emoji:'🦭', audio:'assets/audio/a_c047.mp3', sound:'嗷嗷', fact:'爱晒太阳拍肚皮。'},
  {name:'海狮', en:'Eared Seals', img:'assets/animals/eared-seals.webp', emoji:'🦭', audio:'assets/audio/a_c048.mp3', sound:'嗷嗷', fact:'会用鳍走路。'},
  {name:'海象', en:'Walrus', img:'assets/animals/walrus.webp', emoji:'🦭', audio:'assets/audio/a_c049.mp3', sound:'嗷嗷', fact:'胡子长长有獠牙。'},
  {name:'儒艮', en:'Dugong', img:'assets/animals/dugong.webp', emoji:'🦭', audio:'assets/audio/a_c050.mp3', sound:'呜——', fact:'像童话里的美人鱼。'},
  {name:'鸭嘴兽', en:'Platypus', img:'assets/animals/platypus.webp', emoji:'🐾', audio:'assets/audio/a_c051.mp3', sound:'呜呜', fact:'会生蛋的哺乳动物。'},
  {name:'针鼹', en:'Echidnas', img:'assets/animals/echidnas.webp', emoji:'🦔', audio:'assets/audio/a_c052.mp3', sound:'呼哧', fact:'满身刺也会生蛋。'},
  {name:'跳鼠', en:'Jerboas', img:'assets/animals/jerboas.webp', emoji:'🐭', audio:'assets/audio/a_c053.mp3', sound:'吱吱', fact:'后腿长长会跳。'},
  {name:'田鼠', en:'Common Vole', img:'assets/animals/common-vole.webp', emoji:'🐭', audio:'assets/audio/a_c054.mp3', sound:'吱吱', fact:'住在田野里。'},
  {name:'蹄兔', en:'Rock Hyrax', img:'assets/animals/rock-hyrax.webp', emoji:'🐾', audio:'assets/audio/a_c055.mp3', sound:'吱吱', fact:'大象的小小亲戚。'},
  {name:'白虎', en:'White Tiger', img:'assets/animals/white-tiger.webp', emoji:'🐯', audio:'assets/audio/a_c056.mp3', sound:'嗷呜', fact:'白白的老虎很漂亮。'},
  {name:'美洲狮', en:'Mountain Lion', img:'assets/animals/mountain-lion.webp', emoji:'🐆', audio:'assets/audio/a_c057.mp3', sound:'吼', fact:'也叫山狮跑得快。'},
  {name:'薮猫', en:'Serval', img:'assets/animals/serval.webp', emoji:'🐱', audio:'assets/audio/a_c058.mp3', sound:'喵呜', fact:'耳朵大腿长长。'},
  {name:'豹猫', en:'Mainland Leopard Cat', img:'assets/animals/mainland-leopard-cat.webp', emoji:'🐱', audio:'assets/audio/a_c059.mp3', sound:'喵呜', fact:'身上有豹子花纹。'},
  {name:'狞猫', en:'Caracal', img:'assets/animals/caracal.webp', emoji:'🐱', audio:'assets/audio/a_c060.mp3', sound:'喵呜', fact:'跳起来能抓飞鸟。'},
  {name:'长尾猴', en:'Guenons', img:'assets/animals/guenons.webp', emoji:'🐵', audio:'assets/audio/a_c061.mp3', sound:'吱吱', fact:'尾巴比身体还长。'},
  {name:'白面僧面猴', en:'White-faced Saki', img:'assets/animals/white-faced-saki.webp', emoji:'🐵', audio:'assets/audio/a_c062.mp3', sound:'吱吱', fact:'脸白白像戴面具。'},
  {name:'绿头鸭', en:'Mallard', img:'assets/animals/mallard.webp', emoji:'🦆', audio:'assets/audio/a_c063.mp3', sound:'嘎嘎', fact:'公鸭头绿得发亮。'},
  {name:'斑嘴鸭', en:'Eastern Spot-billed Duck', img:'assets/animals/eastern-spot-billed-duck.webp', emoji:'🦆', audio:'assets/audio/a_c064.mp3', sound:'嘎嘎', fact:'嘴上长着黄斑点。'},
  {name:'鸳鸯', en:'Mandarin Duck', img:'assets/animals/mandarin-duck.webp', emoji:'🦆', audio:'assets/audio/a_c065.mp3', sound:'嘎嘎', fact:'羽毛漂亮成双飞。'},
  {name:'大天鹅', en:'Whooper Swan', img:'assets/animals/whooper-swan.webp', emoji:'🦢', audio:'assets/audio/a_c066.mp3', sound:'嘎——', fact:'脖子长长爱唱歌。'},
  {name:'小天鹅', en:'Tundra Swan', img:'assets/animals/tundra-swan.webp', emoji:'🦢', audio:'assets/audio/a_c067.mp3', sound:'嘎——', fact:'叫声清脆像哨子。'},
  {name:'黑天鹅', en:'Black Swan', img:'assets/animals/black-swan.webp', emoji:'🦢', audio:'assets/audio/a_c068.mp3', sound:'嘎——', fact:'黑羽毛红嘴巴。'},
  {name:'疣鼻天鹅', en:'Mute Swan', img:'assets/animals/mute-swan.webp', emoji:'🦢', audio:'assets/audio/a_c069.mp3', sound:'嘶嘶', fact:'鼻子上有小疙瘩。'},
  {name:'大雁', en:'Canada Goose', img:'assets/animals/canada-goose.webp', emoji:'🪿', audio:'assets/audio/a_c070.mp3', sound:'嘎嘎', fact:'排成人字往南飞。'},
  {name:'灰雁', en:'Greylag Goose', img:'assets/animals/greylag-goose.webp', emoji:'🪿', audio:'assets/audio/a_c071.mp3', sound:'嘎嘎', fact:'家鹅的野生祖先。'},
  {name:'斑头雁', en:'Bar-headed Goose', img:'assets/animals/bar-headed-goose.webp', emoji:'🪿', audio:'assets/audio/a_c072.mp3', sound:'嘎嘎', fact:'能飞过喜马拉雅山。'},
  {name:'雪雁', en:'Snow Goose', img:'assets/animals/snow-goose.webp', emoji:'🪿', audio:'assets/audio/a_c073.mp3', sound:'嘎嘎', fact:'浑身雪白飞得远。'},
  {name:'母鸡', en:'Chicken', img:'assets/animals/chicken.webp', emoji:'🐔', audio:'assets/audio/a_c074.mp3', sound:'咯咯', fact:'会下蛋会护小鸡。'},
  {name:'火鸡', en:'Wild Turkey', img:'assets/animals/wild-turkey.webp', emoji:'🦃', audio:'assets/audio/a_c075.mp3', sound:'咕咕', fact:'尾巴像把大扇子。'},
  {name:'珠鸡', en:'Guineafowl', img:'assets/animals/guineafowl.webp', emoji:'🐔', audio:'assets/audio/a_c076.mp3', sound:'咕咕', fact:'满身珍珠小点点。'},
  {name:'鹌鹑', en:'Japanese Quail', img:'assets/animals/japanese-quail.webp', emoji:'🐤', audio:'assets/audio/a_c077.mp3', sound:'叽叽', fact:'小小个爱躲草丛。'},
  {name:'环颈雉', en:'Ring-necked Pheasant', img:'assets/animals/ring-necked-pheasant.webp', emoji:'🐔', audio:'assets/audio/a_c078.mp3', sound:'咕咕', fact:'脖子上有白项圈。'},
  {name:'红腹锦鸡', en:'Golden Pheasant', img:'assets/animals/golden-pheasant.webp', emoji:'🐔', audio:'assets/audio/a_c079.mp3', sound:'咕咕', fact:'像穿着红肚兜。'},
  {name:'白鹇', en:'Silver Pheasant', img:'assets/animals/silver-pheasant.webp', emoji:'🐔', audio:'assets/audio/a_c080.mp3', sound:'咕咕', fact:'白衣飘飘的山中仙子。'},
  {name:'蓝孔雀', en:'Indian Peafowl', img:'assets/animals/indian-peafowl.webp', emoji:'🦚', audio:'assets/audio/a_c081.mp3', sound:'啊——', fact:'开屏像把大扇子。'},
  {name:'绿孔雀', en:'Green Peafowl', img:'assets/animals/green-peafowl.webp', emoji:'🦚', audio:'assets/audio/a_c082.mp3', sound:'啊——', fact:'头上顶着小皇冠。'},
  {name:'山斑鸠', en:'Oriental Turtle-Dove', img:'assets/animals/oriental-turtle-dove.webp', emoji:'🕊️', audio:'assets/audio/a_c083.mp3', sound:'咕咕', fact:'脖子上有珍珠点。'},
  {name:'珠颈斑鸠', en:'Spotted Dove', img:'assets/animals/spotted-dove.webp', emoji:'🕊️', audio:'assets/audio/a_c084.mp3', sound:'咕咕', fact:'叫声像在说咕咕。'},
  {name:'冠鸠', en:'Crested Pigeon', img:'assets/animals/crested-pigeon.webp', emoji:'🕊️', audio:'assets/audio/a_c085.mp3', sound:'咕咕', fact:'头上顶着扇形冠。'},
  {name:'帝企鹅', en:'Emperor Penguin', img:'assets/animals/emperor-penguin.webp', emoji:'🐧', audio:'assets/audio/a_c086.mp3', sound:'嘎嘎', fact:'最高的企鹅爸爸孵蛋。'},
  {name:'王企鹅', en:'King Penguin', img:'assets/animals/king-penguin.webp', emoji:'🐧', audio:'assets/audio/a_c087.mp3', sound:'嘎嘎', fact:'脖子上有金色围脖。'},
  {name:'跳岩企鹅', en:'Moseley\'s Rockhopper Penguin', img:'assets/animals/moseley.webp', emoji:'🐧', audio:'assets/audio/a_c088.mp3', sound:'嘎嘎', fact:'眉毛长长会跳跃。'},
  {name:'帽带企鹅', en:'Chinstrap Penguin', img:'assets/animals/chinstrap-penguin.webp', emoji:'🐧', audio:'assets/audio/a_c089.mp3', sound:'嘎嘎', fact:'下巴有条黑线条。'},
  {name:'阿德利企鹅', en:'Adelie Penguin', img:'assets/animals/adelie-penguin.webp', emoji:'🐧', audio:'assets/audio/a_c090.mp3', sound:'嘎嘎', fact:'眼睛有白圈圈。'},
  {name:'老鹰', en:'Hawk', img:'assets/animals/hawk.webp', emoji:'🦅', audio:'assets/audio/a_c091.mp3', sound:'啾——', fact:'眼睛锐利飞得高。'},
  {name:'金雕', en:'Golden Eagle', img:'assets/animals/golden-eagle.webp', emoji:'🦅', audio:'assets/audio/a_c092.mp3', sound:'啾——', fact:'金色羽毛的大雕。'},
  {name:'白头海雕', en:'Bald Eagle', img:'assets/animals/bald-eagle.webp', emoji:'🦅', audio:'assets/audio/a_c093.mp3', sound:'啾啾', fact:'白头白尾很威风。'},
  {name:'游隼', en:'Peregrine Falcon', img:'assets/animals/peregrine-falcon.webp', emoji:'🦅', audio:'assets/audio/a_c094.mp3', sound:'啾啾', fact:'俯冲最快的鸟。'},
  {name:'红隼', en:'Eurasian Kestrel', img:'assets/animals/eurasian-kestrel.webp', emoji:'🦅', audio:'assets/audio/a_c095.mp3', sound:'叽叽', fact:'会在空中定点。'},
  {name:'秃鹫', en:'Cinereous Vulture', img:'assets/animals/cinereous-vulture.webp', emoji:'🦅', audio:'assets/audio/a_c096.mp3', sound:'嘶——', fact:'光头大力士。'},
  {name:'黑鸢', en:'Black Kite', img:'assets/animals/black-kite.webp', emoji:'🦅', audio:'assets/audio/a_c097.mp3', sound:'啾——', fact:'尾巴像剪刀。'},
  {name:'猫头鹰', en:'Owl', img:'assets/animals/owl.webp', emoji:'🦉', audio:'assets/audio/a_c098.mp3', sound:'咕咕', fact:'夜里眼睛亮晶晶。'},
  {name:'雪鸮', en:'Snowy Owl', img:'assets/animals/snowy-owl.webp', emoji:'🦉', audio:'assets/audio/a_c099.mp3', sound:'咕咕', fact:'白白的住在雪地。'},
  {name:'长耳鸮', en:'Long-eared Owl', img:'assets/animals/long-eared-owl.webp', emoji:'🦉', audio:'assets/audio/a_c100.mp3', sound:'呜呜', fact:'耳朵羽毛长长的。'},
  {name:'仓鸮', en:'Eastern Barn Owl', img:'assets/animals/eastern-barn-owl.webp', emoji:'🦉', audio:'assets/audio/a_c101.mp3', sound:'嘶嘶', fact:'脸像一颗爱心。'},
  {name:'鹦鹉', en:'Parrots', img:'assets/animals/parrots.webp', emoji:'🦜', audio:'assets/audio/a_c102.mp3', sound:'你好', fact:'会学人说话。'},
  {name:'葵花鹦鹉', en:'Sulphur-crested Cockatoo', img:'assets/animals/sulphur-crested-cockatoo.webp', emoji:'🦜', audio:'assets/audio/a_c103.mp3', sound:'啊啊', fact:'头上顶着小葵花。'},
  {name:'虎皮鹦鹉', en:'Budgerigar', img:'assets/animals/budgerigar.webp', emoji:'🦜', audio:'assets/audio/a_c104.mp3', sound:'叽叽', fact:'小小个爱热闹。'},
  {name:'非洲灰鹦鹉', en:'Gray Parrot', img:'assets/animals/gray-parrot.webp', emoji:'🦜', audio:'assets/audio/a_c105.mp3', sound:'你好', fact:'最会说话的鹦鹉。'},
  {name:'丹顶鹤', en:'Red-crowned Crane', img:'assets/animals/red-crowned-crane.webp', emoji:'🪶', audio:'assets/audio/a_c106.mp3', sound:'呦呦', fact:'头顶一点红。'},
  {name:'白鹤', en:'Siberian Crane', img:'assets/animals/siberian-crane.webp', emoji:'🪶', audio:'assets/audio/a_c107.mp3', sound:'呦呦', fact:'浑身雪白很珍贵。'},
  {name:'黑颈鹤', en:'Black-necked Crane', img:'assets/animals/black-necked-crane.webp', emoji:'🪶', audio:'assets/audio/a_c108.mp3', sound:'呦呦', fact:'住在高原上。'},
  {name:'白鹭', en:'Little Egret', img:'assets/animals/little-egret.webp', emoji:'🪶', audio:'assets/audio/a_c109.mp3', sound:'呱呱', fact:'白衣天使爱吃鱼。'},
  {name:'苍鹭', en:'Grey Heron', img:'assets/animals/grey-heron.webp', emoji:'🪶', audio:'assets/audio/a_c110.mp3', sound:'呱呱', fact:'灰灰的站着不动。'},
  {name:'夜鹭', en:'Black-crowned Night Heron', img:'assets/animals/black-crowned-night-heron.webp', emoji:'🪶', audio:'assets/audio/a_c111.mp3', sound:'呱呱', fact:'夜里出来找鱼吃。'},
  {name:'锦鲤', en:'Koi', img:'assets/animals/koi.webp', emoji:'🐠', audio:'assets/audio/a_c112.mp3', sound:'咕噜', fact:'花衣裳带来好运。'},
  {name:'孔雀鱼', en:'Guppy', img:'assets/animals/guppy.webp', emoji:'🐠', audio:'assets/audio/a_c113.mp3', sound:'咕噜', fact:'尾巴像孔雀开屏。'},
  {name:'泰国斗鱼', en:'Siamese Fighting Fish', img:'assets/animals/siamese-fighting-fish.webp', emoji:'🐠', audio:'assets/audio/a_c114.mp3', sound:'咕噜', fact:'好斗的大尾巴。'},
  {name:'地图鱼', en:'Oscar', img:'assets/animals/oscar.webp', emoji:'🐠', audio:'assets/audio/a_c115.mp3', sound:'咕噜', fact:'身上花纹像地图。'},
  {name:'红绿灯鱼', en:'Neon Tetra', img:'assets/animals/neon-tetra.webp', emoji:'🐠', audio:'assets/audio/a_c116.mp3', sound:'咕噜', fact:'红绿灯管会发光。'},
  {name:'斑马鱼', en:'Zebra Danio', img:'assets/animals/zebra-danio.webp', emoji:'🐠', audio:'assets/audio/a_c117.mp3', sound:'咕噜', fact:'条纹像小斑马。'},
  {name:'接吻鱼', en:'Kissing Gourami', img:'assets/animals/kissing-gourami.webp', emoji:'🐠', audio:'assets/audio/a_c118.mp3', sound:'咕噜', fact:'嘴对嘴像亲亲。'},
  {name:'大白鲨', en:'Great white shark', img:'assets/animals/great-white-shark.webp', emoji:'🦈', audio:'assets/audio/a_c119.mp3', sound:'哗啦', fact:'海洋里的大白。'},
  {name:'鲸鲨', en:'Whale Shark', img:'assets/animals/whale-shark.webp', emoji:'🦈', audio:'assets/audio/a_c120.mp3', sound:'哗啦', fact:'最大的鱼吃浮游。'},
  {name:'锤头鲨', en:'Hammerhead shark', img:'assets/animals/hammerhead-shark.webp', emoji:'🦈', audio:'assets/audio/a_c121.mp3', sound:'哗啦', fact:'头扁扁像锤子。'},
  {name:'虎鲨', en:'Bullhead Sharks', img:'assets/animals/bullhead-sharks.webp', emoji:'🦈', audio:'assets/audio/a_c122.mp3', sound:'哗啦', fact:'身上有虎斑纹。'},
  {name:'柠檬鲨', en:'Lemon Sharks', img:'assets/animals/lemon-sharks.webp', emoji:'🦈', audio:'assets/audio/a_c123.mp3', sound:'哗啦', fact:'黄黄的像柠檬。'},
  {name:'姥鲨', en:'Basking Shark', img:'assets/animals/basking-shark.webp', emoji:'🦈', audio:'assets/audio/a_c124.mp3', sound:'哗啦', fact:'第二大的鲨鱼。'},
  {name:'长尾鲨', en:'Thresher Sharks', img:'assets/animals/thresher-sharks.webp', emoji:'🦈', audio:'assets/audio/a_c125.mp3', sound:'哗啦', fact:'尾巴长长像鞭子。'},
  {name:'巨口鲨', en:'Megamouth Shark', img:'assets/animals/megamouth-shark.webp', emoji:'🦈', audio:'assets/audio/a_c126.mp3', sound:'哗啦', fact:'大嘴巴吃浮游。'},
  {name:'蝠鲼', en:'Spinetail Devil Ray', img:'assets/animals/spinetail-devil-ray.webp', emoji:'🐟', audio:'assets/audio/a_c127.mp3', sound:'哗啦', fact:'海中飞毯大扁平。'},
  {name:'电鳐', en:'Electric Rays', img:'assets/animals/electric-rays.webp', emoji:'🐟', audio:'assets/audio/a_c128.mp3', sound:'噼啪', fact:'会放电麻麻的。'},
  {name:'豆丁海马', en:'Pygmy Seahorse', img:'assets/animals/pygmy-seahorse.webp', emoji:'🐟', audio:'assets/audio/a_c129.mp3', sound:'咕噜', fact:'小到像颗豆子。'},
  {name:'中华鳖', en:'Chinese Softshell Turtle', img:'assets/animals/chinese-softshell-turtle.webp', emoji:'🐢', audio:'assets/audio/a_c130.mp3', sound:'静悄悄', fact:'就是甲鱼。'},
  {name:'黄喉拟水龟', en:'Yellow Pond Turtle', img:'assets/animals/yellow-pond-turtle.webp', emoji:'🐢', audio:'assets/audio/a_c131.mp3', sound:'静悄悄', fact:'喉咙黄黄的。'},
  {name:'黄缘闭壳龟', en:'Chinese Box Turtle', img:'assets/animals/chinese-box-turtle.webp', emoji:'🐢', audio:'assets/audio/a_c132.mp3', sound:'静悄悄', fact:'会把壳关起来。'},
  {name:'地图龟', en:'Northern Map Turtle', img:'assets/animals/northern-map-turtle.webp', emoji:'🐢', audio:'assets/audio/a_c133.mp3', sound:'静悄悄', fact:'背上有地图纹。'},
  {name:'红耳龟', en:'Red-eared Slider', img:'assets/animals/red-eared-slider.webp', emoji:'🐢', audio:'assets/audio/a_c134.mp3', sound:'静悄悄', fact:'耳朵红红的。'},
  {name:'蛇颈龟', en:'Austro-American Side-necked Turtles', img:'assets/animals/austro-american-side-necked-turtles.webp', emoji:'🐢', audio:'assets/audio/a_c135.mp3', sound:'静悄悄', fact:'脖子像条蛇。'},
  {name:'鳄龟', en:'Snapping Turtles', img:'assets/animals/snapping-turtles.webp', emoji:'🐢', audio:'assets/audio/a_c136.mp3', sound:'静悄悄', fact:'咬合力超强。'},
  {name:'大鳄龟', en:'Alligator Snapping Turtle', img:'assets/animals/alligator-snapping-turtle.webp', emoji:'🐢', audio:'assets/audio/a_c137.mp3', sound:'静悄悄', fact:'舌头会钓鱼。'},
  {name:'苏卡达陆龟', en:'African Spurred Tortoise', img:'assets/animals/african-spurred-tortoise.webp', emoji:'🐢', audio:'assets/audio/a_c138.mp3', sound:'静悄悄', fact:'第三大陆龟。'},
  {name:'红腿陆龟', en:'Red-footed Tortoise', img:'assets/animals/red-footed-tortoise.webp', emoji:'🐢', audio:'assets/audio/a_c139.mp3', sound:'静悄悄', fact:'腿红红的。'},
  {name:'豹纹陆龟', en:'Leopard Tortoise', img:'assets/animals/leopard-tortoise.webp', emoji:'🐢', audio:'assets/audio/a_c140.mp3', sound:'静悄悄', fact:'豹纹衣裳。'},
  {name:'辐射陆龟', en:'Radiated Tortoise', img:'assets/animals/radiated-tortoise.webp', emoji:'🐢', audio:'assets/audio/a_c141.mp3', sound:'静悄悄', fact:'背上有放射纹。'},
  {name:'印度星龟', en:'Indian Star Tortoise', img:'assets/animals/indian-star-tortoise.webp', emoji:'🐢', audio:'assets/audio/a_c142.mp3', sound:'静悄悄', fact:'背上全是小星星。'},
  {name:'赫曼陆龟', en:'Hermann\'s Tortoise', img:'assets/animals/hermann.webp', emoji:'🐢', audio:'assets/audio/a_c143.mp3', sound:'静悄悄', fact:'欧洲的小陆龟。'},
  {name:'四爪陆龟', en:'Afghan Tortoise', img:'assets/animals/afghan-tortoise.webp', emoji:'🐢', audio:'assets/audio/a_c144.mp3', sound:'静悄悄', fact:'只有四个脚趾。'},
  {name:'虎纹蛙', en:'Crowned Bullfrogs and Tiger Frogs', img:'assets/animals/crowned-bullfrogs-and-tiger-frogs.webp', emoji:'🐸', audio:'assets/audio/a_c145.mp3', sound:'呱呱', fact:'虎纹衣裳。'},
  {name:'牛蛙', en:'American Bullfrog', img:'assets/animals/american-bullfrog.webp', emoji:'🐸', audio:'assets/audio/a_c146.mp3', sound:'哞哞', fact:'叫声像牛叫。'},
  {name:'弹琴蛙', en:'East China Music Frog', img:'assets/animals/east-china-music-frog.webp', emoji:'🐸', audio:'assets/audio/a_c147.mp3', sound:'呱呱', fact:'叫声像弹琴。'},
  {name:'棘蛙', en:'Lesser Spiny Frog', img:'assets/animals/lesser-spiny-frog.webp', emoji:'🐸', audio:'assets/audio/a_c148.mp3', sound:'呱呱', fact:'胸前有小刺。'},
  {name:'大头蛙', en:'Kuhl\'s Creek Frog', img:'assets/animals/kuhl.webp', emoji:'🐸', audio:'assets/audio/a_c149.mp3', sound:'呱呱', fact:'头大大的。'},
  {name:'花姬蛙', en:'Beautiful Pygmy Frog', img:'assets/animals/beautiful-pygmy-frog.webp', emoji:'🐸', audio:'assets/audio/a_c150.mp3', sound:'呱呱', fact:'花纹像大理石。'},
  {name:'中国雨蛙', en:'Common Chinese Tree Frog', img:'assets/animals/common-chinese-tree-frog.webp', emoji:'🐸', audio:'assets/audio/a_c151.mp3', sound:'呱呱', fact:'下雨天出来。'},
  {name:'菜粉蝶', en:'Small White', img:'assets/animals/small-white.webp', emoji:'🦋', audio:'assets/audio/a_c152.mp3', sound:'静悄悄', fact:'白翅膀的菜园客。'},
  {name:'黄粉蝶', en:'Yellows and Sulphurs', img:'assets/animals/yellows-and-sulphurs.webp', emoji:'🦋', audio:'assets/audio/a_c153.mp3', sound:'静悄悄', fact:'黄衣小粉蝶。'},
  {name:'柑橘凤蝶', en:'Chinese Yellow Swallowtail', img:'assets/animals/chinese-yellow-swallowtail.webp', emoji:'🦋', audio:'assets/audio/a_c154.mp3', sound:'静悄悄', fact:'爱柑橘树。'},
  {name:'章鱼', en:'Typical Octopuses', img:'assets/animals/typical-octopuses.webp', emoji:'🐙', audio:'assets/audio/a_c155.mp3', sound:'咕噜', fact:'八条腿很聪明。'},
  {name:'长蛸', en:'Whiparm Octopus', img:'assets/animals/whiparm-octopus.webp', emoji:'🐙', audio:'assets/audio/a_c156.mp3', sound:'咕噜', fact:'腿长长的。'},
  {name:'短蛸', en:'Gold-spot Octopus', img:'assets/animals/gold-spot-octopus.webp', emoji:'🐙', audio:'assets/audio/a_c157.mp3', sound:'咕噜', fact:'腿短短的。'},
  {name:'船蛸', en:'Greater Argonaut', img:'assets/animals/greater-argonaut.webp', emoji:'🐙', audio:'assets/audio/a_c158.mp3', sound:'咕噜', fact:'抱着纸船。'},
  {name:'水母', en:'True Jellies', img:'assets/animals/true-jellies.webp', emoji:'🪼', audio:'assets/audio/a_c159.mp3', sound:'静悄悄', fact:'透明的小伞。'},
  {name:'海月水母', en:'Common Moon Jelly', img:'assets/animals/common-moon-jelly.webp', emoji:'🪼', audio:'assets/audio/a_c160.mp3', sound:'静悄悄', fact:'像轮明月。'},
  {name:'霞水母', en:'Cyaneid Jellies', img:'assets/animals/cyaneid-jellies.webp', emoji:'🪼', audio:'assets/audio/a_c161.mp3', sound:'静悄悄', fact:'晚霞颜色。'},
  {name:'澳洲斑点水母', en:'Australian Spotted Jelly', img:'assets/animals/australian-spotted-jelly.webp', emoji:'🪼', audio:'assets/audio/a_c162.mp3', sound:'静悄悄', fact:'满身斑点。'},
  {name:'僧帽水母', en:'Portuguese Man o\' War', img:'assets/animals/portuguese-man-o.webp', emoji:'🪼', audio:'assets/audio/a_c163.mp3', sound:'静悄悄', fact:'像顶僧帽。'},
  {name:'帆水母', en:'By-the-wind Sailor', img:'assets/animals/by-the-wind-sailor.webp', emoji:'🪼', audio:'assets/audio/a_c164.mp3', sound:'静悄悄', fact:'张着小帆。'},
  {name:'对虾', en:'Penaeoid Prawns', img:'assets/animals/penaeoid-prawns.webp', emoji:'🦐', audio:'assets/audio/a_c165.mp3', sound:'静悄悄', fact:'大个子虾。'},
  {name:'斑节对虾', en:'giant tiger prawn', img:'assets/animals/giant-tiger-prawn.webp', emoji:'🦐', audio:'assets/audio/a_c166.mp3', sound:'静悄悄', fact:'斑纹衣裳。'},
  {name:'南美白对虾', en:'Whiteleg Shrimp', img:'assets/animals/whiteleg-shrimp.webp', emoji:'🦐', audio:'assets/audio/a_c167.mp3', sound:'静悄悄', fact:'白衣虾。'},
  {name:'罗氏沼虾', en:'Giant river prawn', img:'assets/animals/giant-river-prawn.webp', emoji:'🦐', audio:'assets/audio/a_c168.mp3', sound:'静悄悄', fact:'大钳子。'},
  {name:'螳螂虾', en:'Peacock Mantis Shrimp', img:'assets/animals/peacock-mantis-shrimp.webp', emoji:'🦐', audio:'assets/audio/a_c169.mp3', sound:'咔嚓', fact:'出拳最快。'},
  {name:'清洁虾', en:'Ambon Cleaner Shrimp', img:'assets/animals/ambon-cleaner-shrimp.webp', emoji:'🦐', audio:'assets/audio/a_c170.mp3', sound:'静悄悄', fact:'给鱼洗澡。'},
  {name:'梭子蟹', en:'Swimming Crabs and Allies', img:'assets/animals/swimming-crabs-and-allies.webp', emoji:'🦀', audio:'assets/audio/a_c171.mp3', sound:'静悄悄', fact:'像个梭子。'},
  {name:'青蟹', en:'Mud Crabs', img:'assets/animals/mud-crabs.webp', emoji:'🦀', audio:'assets/audio/a_c172.mp3', sound:'静悄悄', fact:'青衣大钳。'},
  {name:'雪蟹', en:'Tanner Crabs', img:'assets/animals/tanner-crabs.webp', emoji:'🦀', audio:'assets/audio/a_c173.mp3', sound:'静悄悄', fact:'雪白的蟹。'},
  {name:'蜘蛛蟹', en:'Spider Crabs and Decorator Crabs', img:'assets/animals/spider-crabs-and-decorator-crabs.webp', emoji:'🦀', audio:'assets/audio/a_c174.mp3', sound:'静悄悄', fact:'腿长长。'},
  {name:'椰子蟹', en:'Coconut Crab', img:'assets/animals/coconut-crab.webp', emoji:'🦀', audio:'assets/audio/a_c175.mp3', sound:'咔嚓', fact:'能夹开椰子。'},
  {name:'寄居蟹', en:'Hermit Crabs', img:'assets/animals/hermit-crabs.webp', emoji:'🐚', audio:'assets/audio/a_c176.mp3', sound:'静悄悄', fact:'借住贝壳。'},
  {name:'龙虾', en:'Spiny Lobsters', img:'assets/animals/spiny-lobsters.webp', emoji:'🦞', audio:'assets/audio/a_c177.mp3', sound:'静悄悄', fact:'大钳子。'},
  {name:'锦绣龙虾', en:'Ornate Spiny Lobster', img:'assets/animals/ornate-spiny-lobster.webp', emoji:'🦞', audio:'assets/audio/a_c178.mp3', sound:'静悄悄', fact:'花衣裳。'},
  {name:'海星', en:'Sea Stars and Brittle Stars', img:'assets/animals/sea-stars-and-brittle-stars.webp', emoji:'⭐', audio:'assets/audio/a_c179.mp3', sound:'静悄悄', fact:'五角星。'},
  {name:'面包海星', en:'Pillow Cushion Star', img:'assets/animals/pillow-cushion-star.webp', emoji:'⭐', audio:'assets/audio/a_c180.mp3', sound:'静悄悄', fact:'胖胖的。'},
  {name:'太阳海星', en:'Solasterid Sun Stars', img:'assets/animals/solasterid-sun-stars.webp', emoji:'⭐', audio:'assets/audio/a_c181.mp3', sound:'静悄悄', fact:'好多只脚。'},
  {name:'蛇尾', en:'Brittle Stars', img:'assets/animals/brittle-stars.webp', emoji:'⭐', audio:'assets/audio/a_c182.mp3', sound:'静悄悄', fact:'细胳膊。'},
  {name:'海胆', en:'sea urchins and sea cucumbers', img:'assets/animals/sea-urchins-and-sea-cucumbers.webp', emoji:'🦔', audio:'assets/audio/a_c183.mp3', sound:'静悄悄', fact:'满身刺。'},
  {name:'海参', en:'Sea Cucumbers', img:'assets/animals/sea-cucumbers.webp', emoji:'🥒', audio:'assets/audio/a_c184.mp3', sound:'静悄悄', fact:'海里的人参。'},
  {name:'霸王龙', en:'Tyrannosaurus', img:'assets/animals/tyrannosaurus.webp', emoji:'🦖', audio:'assets/audio/a_c185.mp3', sound:'吼——', fact:'最有名的暴君。'},
  {name:'三角龙', en:'Triceratops', img:'assets/animals/triceratops.webp', emoji:'🦕', audio:'assets/audio/a_c186.mp3', sound:'哞', fact:'三只角的大盾。'},
  {name:'剑龙', en:'Stegosaurus', img:'assets/animals/stegosaurus.webp', emoji:'🦕', audio:'assets/audio/a_c187.mp3', sound:'静悄悄', fact:'背上长着剑板。'},
  {name:'腕龙', en:'Brachiosaurus', img:'assets/animals/brachiosaurus.webp', emoji:'🦕', audio:'assets/audio/a_c188.mp3', sound:'静悄悄', fact:'前腿比后腿长。'},
  {name:'雷龙', en:'Brontosaurus', img:'assets/animals/brontosaurus.webp', emoji:'🦕', audio:'assets/audio/a_c189.mp3', sound:'静悄悄', fact:'打雷一样走路。'},
  {name:'禽龙', en:'Iguanodon', img:'assets/animals/iguanodon.webp', emoji:'🦕', audio:'assets/audio/a_c190.mp3', sound:'静悄悄', fact:'拇指有尖刺。'},
  {name:'异特龙', en:'Allosaurus', img:'assets/animals/allosaurus.webp', emoji:'🦖', audio:'assets/audio/a_c191.mp3', sound:'吼——', fact:'侏罗纪猎手。'},
  {name:'伶盗龙', en:'Velociraptor', img:'assets/animals/velociraptor.webp', emoji:'🦖', audio:'assets/audio/a_c192.mp3', sound:'吼', fact:'聪明的迅猛龙。'},
  {name:'中华蜜蜂', en:'Chinese Honey Bee', img:'assets/animals/chinese-honey-bee.webp', emoji:'🐝', audio:'assets/audio/a_c193.mp3', sound:'嗡嗡', fact:'中国的蜜蜂。'},
  {name:'七星瓢虫', en:'Seven-spotted Lady Beetle', img:'assets/animals/seven-spotted-lady-beetle.webp', emoji:'🐞', audio:'assets/audio/a_c194.mp3', sound:'静悄悄', fact:'七颗星吃蚜虫。'},
  {name:'碧伟蜓', en:'Lesser Emperor', img:'assets/animals/lesser-emperor.webp', emoji:'🐞', audio:'assets/audio/a_c195.mp3', sound:'嗡嗡', fact:'绿衣大蜻蜓。'},
  {name:'黑蚱蝉', en:'Eastern horse cicada', img:'assets/animals/eastern-horse-cicada.webp', emoji:'🐞', audio:'assets/audio/a_c196.mp3', sound:'知了', fact:'夏天唱歌。'},
  {name:'麻雀', en:'Eurasian Tree Sparrow', img:'assets/animals/eurasian-tree-sparrow.webp', emoji:'🐦', audio:'assets/audio/a_c197.mp3', sound:'叽叽喳喳', fact:'最常见的小邻居。'},
  {name:'喜鹊', en:'Oriental Magpie', img:'assets/animals/oriental-magpie.webp', emoji:'🐦', audio:'assets/audio/a_c198.mp3', sound:'喳喳', fact:'报喜的黑白鸟。'},
  {name:'萤火虫', en:'Common Eastern Firefly', img:'assets/animals/common-eastern-firefly.webp', emoji:'🪲', audio:'assets/audio/a_c199.mp3', sound:'静悄悄', fact:'屁股会发光。'},
  {name:'蜂鸟', en:'Hummingbirds', img:'assets/animals/hummingbirds.webp', emoji:'🐦', audio:'assets/audio/a_c200.mp3', sound:'嗡嗡', fact:'最小的鸟会悬停。'},
  {name:'中华大刀螳', en:'Chinese Mantis', img:'assets/animals/chinese-mantis.webp', emoji:'🦗', audio:'assets/audio/a_c201.mp3', sound:'静悄悄', fact:'中国的大刀。'},
  {name:'红蜻', en:'Scarlet Skimmer', img:'assets/animals/scarlet-skimmer.webp', emoji:'🐞', audio:'assets/audio/a_c202.mp3', sound:'嗡嗡', fact:'红衣蜻蜓。'},
];
const STORIES = [
  {title:'宝宝和小熊找月亮', parentTip:'问问她：月亮像什么呀？', pages:[
    {t:'天黑啦。', e:'🌃', a:'assets/audio/s1_00.mp3'},
    {t:'月亮出来了，圆圆的，像一块大饼干。', e:'🌕', a:'assets/audio/s1_01.mp3'},
    {t:'宝宝和小熊，一起找月亮玩。', e:'👧🏻🐾🧸', a:'assets/audio/s1_02.mp3'},
    {t:'一颗星星眨眨眼：“你好呀，宝宝！”', e:'🌟', a:'assets/audio/s1_03.mp3'},
    {t:'小熊抬起头：“嗷——”它在打哈欠。', e:'🧸💤', a:'assets/audio/s1_04.mp3'},
    {t:'宝宝说：“小熊，你困了吗？”', e:'👧🏻❓', a:'assets/audio/s1_05.mp3'},
    {t:'小熊点点头：“嗯！”', e:'🧸👍', a:'assets/audio/s1_06.mp3'},
    {t:'月亮笑了：“晚安，宝宝。晚安，小熊。”', e:'🌙😊', a:'assets/audio/s1_07.mp3'},
    {t:'宝宝抱住小熊：“晚安，月亮。”', e:'👧🏻🤗🧸', a:'assets/audio/s1_08.mp3'},
    {t:'天上的星星，一颗一颗，慢慢睡着了。', e:'⭐😴', a:'assets/audio/s1_09.mp3'},
    {t:'故事讲完啦，宝宝也该睡觉了。', e:'💤', a:'assets/audio/s1_10.mp3'},
    {t:'晚安。🌙', e:'🌙', a:'assets/audio/s1_11.mp3'},
  ]},
  {title:'小兔子找胡萝卜', parentTip:'问问她：好东西要不要和妈妈分享？', pages:[
    {t:'早上好，太阳公公起床啦。', e:'☀️', a:'assets/audio/s2_00.mp3'},
    {t:'小兔子蹦蹦跳，肚子咕咕叫。', e:'🐰', a:'assets/audio/s2_01.mp3'},
    {t:'它跑到菜园里，东闻闻，西找找。', e:'🥬', a:'assets/audio/s2_02.mp3'},
    {t:'哇，一根大胡萝卜！', e:'🥕', a:'assets/audio/s2_03.mp3'},
    {t:'小兔子拔呀拔，嘿哟嘿哟。', e:'🐰💪', a:'assets/audio/s2_04.mp3'},
    {t:'胡萝卜出土啦，又大又甜。', e:'🥕✨', a:'assets/audio/s2_05.mp3'},
    {t:'小兔子分给妈妈一半。', e:'🐰❤️', a:'assets/audio/s2_06.mp3'},
    {t:'吃饱啦，午睡时间到。', e:'💤', a:'assets/audio/s2_07.mp3'},
  ]},
  {title:'大象和小蚂蚁', parentTip:'和她比一比：家里谁最大？谁最小？', pages:[
    {t:'森林里，住着大象。', e:'🌳', a:'assets/audio/s3_00.mp3'},
    {t:'大象走起路来，咚——咚——咚。', e:'🐘', a:'assets/audio/s3_01.mp3'},
    {t:'一只小蚂蚁，爬呀爬，爬呀爬。', e:'🐜', a:'assets/audio/s3_02.mp3'},
    {t:'大象说：“你好呀，小不点儿！”', e:'🐘', a:'assets/audio/s3_03.mp3'},
    {t:'小蚂蚁说：“你好呀，大块头！”', e:'🐜', a:'assets/audio/s3_04.mp3'},
    {t:'哗啦啦，下雨啦。', e:'🌧️', a:'assets/audio/s3_05.mp3'},
    {t:'小蚂蚁喊：“雨点太大啦！”', e:'🐜', a:'assets/audio/s3_06.mp3'},
    {t:'大象伸出大耳朵：“快到我这里来！”', e:'🐘', a:'assets/audio/s3_07.mp3'},
    {t:'小蚂蚁躲在耳朵下，干干的，暖暖的。', e:'🐜', a:'assets/audio/s3_08.mp3'},
    {t:'雨停了。小蚂蚁说：“谢谢你，大象！”', e:'🌈', a:'assets/audio/s3_09.mp3'},
    {t:'大象笑了：“我们是好朋友！”', e:'🐘', a:'assets/audio/s3_10.mp3'},
  ]},
  {title:'小狮子不生气了', parentTip:'问问她：你生气的时候，可以怎么做呀？', pages:[
    {t:'小狮子在玩球。', e:'🦁', a:'assets/audio/s4_00.mp3'},
    {t:'球滚呀滚，滚进了水坑。', e:'⚽', a:'assets/audio/s4_01.mp3'},
    {t:'小狮子跺跺脚：“哼！我生气了！”', e:'🦁', a:'assets/audio/s4_02.mp3'},
    {t:'它的脸，鼓得像大气球。', e:'😤', a:'assets/audio/s4_03.mp3'},
    {t:'小猴说：“别生气，深呼吸——”', e:'🐵', a:'assets/audio/s4_04.mp3'},
    {t:'呼——吸——呼——吸——', e:'🌬️', a:'assets/audio/s4_05.mp3'},
    {t:'小狮子也试试：呼——吸——', e:'🦁', a:'assets/audio/s4_06.mp3'},
    {t:'气消了，脸不鼓了。', e:'😊', a:'assets/audio/s4_07.mp3'},
    {t:'小狮子说：“对不起，刚才我太凶了。”', e:'🦁', a:'assets/audio/s4_08.mp3'},
    {t:'小猴笑了：“没关系！我们一起玩吧！”', e:'🐵', a:'assets/audio/s4_09.mp3'},
  ]},
  {title:'小鸭子排排队', parentTip:'和她一起数：家里有几只“小鸭子”（玩具）呀？', pages:[
    {t:'小鸭子，嘎嘎嘎。', e:'🦆', a:'assets/audio/s5_00.mp3'},
    {t:'后面又来一只，嘎嘎嘎。', e:'🦆', a:'assets/audio/s5_01.mp3'},
    {t:'一只小鸭子。', e:'1️⃣', a:'assets/audio/s5_02.mp3'},
    {t:'两只小鸭子。', e:'2️⃣', a:'assets/audio/s5_03.mp3'},
    {t:'又来一只，嘎嘎嘎！', e:'🦆', a:'assets/audio/s5_04.mp3'},
    {t:'三只小鸭子，排排队。', e:'3️⃣', a:'assets/audio/s5_05.mp3'},
    {t:'扑通！第一只跳下水。', e:'🌊', a:'assets/audio/s5_06.mp3'},
    {t:'扑通！第二只跳下水。', e:'🌊', a:'assets/audio/s5_07.mp3'},
    {t:'扑通！第三只跳下水。', e:'🌊', a:'assets/audio/s5_08.mp3'},
    {t:'一只、两只、三只，游呀游，真开心！', e:'🦆', a:'assets/audio/s5_09.mp3'},
  ]},
  {title:'小熊的蜂蜜罐', parentTip:'问问她：有好东西，要和谁分享呀？', pages:[
    {t:'森林里，住着一只小熊。', e:'🐻', a:'assets/audio/s6_00.mp3'},
    {t:'小熊有一罐蜂蜜，金黄金黄。', e:'🍯', a:'assets/audio/s6_01.mp3'},
    {t:'它抱着蜂蜜罐，舔一舔。', e:'🐻', a:'assets/audio/s6_02.mp3'},
    {t:'哇，好甜好甜呀！', e:'😋', a:'assets/audio/s6_03.mp3'},
    {t:'小兔子来了，鼻子动一动。', e:'🐰', a:'assets/audio/s6_04.mp3'},
    {t:'小熊说：“请你吃一口！”', e:'🍯', a:'assets/audio/s6_05.mp3'},
    {t:'小松鼠来了，眼睛亮晶晶。', e:'🐿️', a:'assets/audio/s6_06.mp3'},
    {t:'小熊说：“也请你吃一口！”', e:'🍯', a:'assets/audio/s6_07.mp3'},
    {t:'蜂蜜分给大家，更甜啦。', e:'❤️', a:'assets/audio/s6_08.mp3'},
  ]},
  {title:'小猫学钓鱼', parentTip:'问问她：做事情要怎么坐得住呀？', pages:[
    {t:'小猫咪咪，拿着小鱼竿。', e:'🐱', a:'assets/audio/s7_00.mp3'},
    {t:'它坐在河边，静静等鱼儿。', e:'🎣', a:'assets/audio/s7_01.mp3'},
    {t:'蝴蝶飞来了，咪咪想去追。', e:'🦋', a:'assets/audio/s7_02.mp3'},
    {t:'咪咪摇摇头：“我要专心。”', e:'🐱', a:'assets/audio/s7_03.mp3'},
    {t:'鱼竿动一动，哗啦啦！', e:'💦', a:'assets/audio/s7_04.mp3'},
    {t:'一条小鱼上钩啦！', e:'🐟', a:'assets/audio/s7_05.mp3'},
    {t:'咪咪开心地笑：“我做到啦！”', e:'😄', a:'assets/audio/s7_06.mp3'},
  ]},
  {title:'小狗的骨头', parentTip:'和她一起学小狗叫：汪汪汪！', pages:[
    {t:'小狗汪汪，鼻子灵灵的。', e:'🐶', a:'assets/audio/s8_00.mp3'},
    {t:'它在院子里，闻呀闻。', e:'👃', a:'assets/audio/s8_01.mp3'},
    {t:'这里刨刨，那里挖挖。', e:'🐾', a:'assets/audio/s8_02.mp3'},
    {t:'哇，找到一根大骨头！', e:'🦴', a:'assets/audio/s8_03.mp3'},
    {t:'汪汪叼着骨头跑回家。', e:'🐶', a:'assets/audio/s8_04.mp3'},
    {t:'它把骨头藏进小窝里。', e:'🏠', a:'assets/audio/s8_05.mp3'},
    {t:'汪汪做了一个香香的梦。', e:'💤', a:'assets/audio/s8_06.mp3'},
  ]},
  {title:'小猪盖房子', parentTip:'问问她：小猪的房子是什么做的呀？', pages:[
    {t:'小猪噜噜，想盖个房子。', e:'🐷', a:'assets/audio/s9_00.mp3'},
    {t:'它和了好多泥巴，啪嗒啪嗒。', e:'🟤', a:'assets/audio/s9_01.mp3'},
    {t:'一块一块，垒起来。', e:'🧱', a:'assets/audio/s9_02.mp3'},
    {t:'房子盖好啦，圆圆的。', e:'🏠', a:'assets/audio/s9_03.mp3'},
    {t:'下雨啦，噜噜躲进房子里。', e:'🌧️', a:'assets/audio/s9_04.mp3'},
    {t:'雨点敲门：咚咚咚。', e:'🚪', a:'assets/audio/s9_05.mp3'},
    {t:'噜噜在房子里，睡得香。', e:'💤', a:'assets/audio/s9_06.mp3'},
  ]},
  {title:'小猴摘香蕉', parentTip:'数一数：树上有几根香蕉呀？', pages:[
    {t:'小猴子皮皮，住在大树上。', e:'🐒', a:'assets/audio/s10_00.mp3'},
    {t:'它看见香蕉，黄黄的。', e:'🍌', a:'assets/audio/s10_01.mp3'},
    {t:'爬呀爬，爬到树顶上。', e:'🌳', a:'assets/audio/s10_02.mp3'},
    {t:'伸手够一够，还差一点。', e:'🐒', a:'assets/audio/s10_03.mp3'},
    {t:'皮皮荡起秋千，嗖——', e:'💨', a:'assets/audio/s10_04.mp3'},
    {t:'抓到啦！一大串香蕉！', e:'🍌', a:'assets/audio/s10_05.mp3'},
    {t:'皮皮分给猴妈妈一根。', e:'❤️', a:'assets/audio/s10_06.mp3'},
    {t:'香蕉真好吃，啊呜啊呜。', e:'😋', a:'assets/audio/s10_07.mp3'},
  ]},
  {title:'小青蛙唱歌', parentTip:'和她一起唱：呱呱呱！', pages:[
    {t:'池塘里，住着小青蛙。', e:'🐸', a:'assets/audio/s11_00.mp3'},
    {t:'晚上，小青蛙想唱歌。', e:'🌙', a:'assets/audio/s11_01.mp3'},
    {t:'它跳上荷叶，挺起胸脯。', e:'🍃', a:'assets/audio/s11_02.mp3'},
    {t:'呱呱呱，呱呱呱。', e:'🎵', a:'assets/audio/s11_03.mp3'},
    {t:'小鱼儿探出头来听。', e:'🐟', a:'assets/audio/s11_04.mp3'},
    {t:'萤火虫提着灯笼听。', e:'✨', a:'assets/audio/s11_05.mp3'},
    {t:'歌声停了，大家拍拍手。', e:'👏', a:'assets/audio/s11_06.mp3'},
    {t:'小青蛙鞠个躬：“谢谢！”', e:'🐸', a:'assets/audio/s11_07.mp3'},
  ]},
  {title:'小乌龟慢慢走', parentTip:'问问她：慢慢走，也能到终点吗？', pages:[
    {t:'小乌龟背着重重的壳。', e:'🐢', a:'assets/audio/s12_00.mp3'},
    {t:'它要去山顶看彩虹。', e:'🌈', a:'assets/audio/s12_01.mp3'},
    {t:'走呀走，慢慢走。', e:'🐢', a:'assets/audio/s12_02.mp3'},
    {t:'小鸟飞过：“你太慢啦！”', e:'🐦', a:'assets/audio/s12_03.mp3'},
    {t:'小乌龟笑笑：“我不停下。”', e:'😊', a:'assets/audio/s12_04.mp3'},
    {t:'一步一步，爬上山顶。', e:'⛰️', a:'assets/audio/s12_05.mp3'},
    {t:'哇，彩虹！好美呀！', e:'🌈', a:'assets/audio/s12_06.mp3'},
    {t:'慢慢走，也能看到彩虹。', e:'❤️', a:'assets/audio/s12_07.mp3'},
  ]},
  {title:'小松鼠的松果', parentTip:'问问她：松果藏在哪里啦？', pages:[
    {t:'秋天到了，松果熟了。', e:'🌰', a:'assets/audio/s13_00.mp3'},
    {t:'小松鼠跳下树，捡松果。', e:'🐿️', a:'assets/audio/s13_01.mp3'},
    {t:'一颗，两颗，三颗……', e:'🔢', a:'assets/audio/s13_02.mp3'},
    {t:'它把松果藏进树洞里。', e:'🌳', a:'assets/audio/s13_03.mp3'},
    {t:'一颗给妈妈，一颗给爸爸。', e:'❤️', a:'assets/audio/s13_04.mp3'},
    {t:'剩下的，留给冬天吃。', e:'❄️', a:'assets/audio/s13_05.mp3'},
    {t:'小松鼠抱着松果笑眯眯。', e:'😊', a:'assets/audio/s13_06.mp3'},
  ]},
  {title:'小刺猬背苹果', parentTip:'和她学小刺猬：滚一滚，苹果上背啦！', pages:[
    {t:'小刺猬在果园里散步。', e:'🦔', a:'assets/audio/s14_00.mp3'},
    {t:'苹果熟了，掉下来：咚！', e:'🍎', a:'assets/audio/s14_01.mp3'},
    {t:'小刺猬滚一滚，滚一滚。', e:'🦔', a:'assets/audio/s14_02.mp3'},
    {t:'苹果扎在背上啦！', e:'🍎', a:'assets/audio/s14_03.mp3'},
    {t:'一颗，两颗，三颗苹果。', e:'🔢', a:'assets/audio/s14_04.mp3'},
    {t:'它背着苹果，慢慢走回家。', e:'🏠', a:'assets/audio/s14_05.mp3'},
    {t:'刺猬妈妈说：“真能干！”', e:'❤️', a:'assets/audio/s14_06.mp3'},
  ]},
  {title:'小蝴蝶找花', parentTip:'问问她：蝴蝶最喜欢什么颜色的花呀？', pages:[
    {t:'小蝴蝶，穿着花衣裳。', e:'🦋', a:'assets/audio/s15_00.mp3'},
    {t:'它飞呀飞，找最香的花。', e:'💐', a:'assets/audio/s15_01.mp3'},
    {t:'红花说：“来我这里！”', e:'🌹', a:'assets/audio/s15_02.mp3'},
    {t:'黄花说：“来我这里！”', e:'🌼', a:'assets/audio/s15_03.mp3'},
    {t:'小蝴蝶闻闻这朵，闻闻那朵。', e:'🦋', a:'assets/audio/s15_04.mp3'},
    {t:'它停在最大的花上。', e:'🌸', a:'assets/audio/s15_05.mp3'},
    {t:'花蜜甜甜的，真幸福。', e:'😊', a:'assets/audio/s15_06.mp3'},
  ]},
  {title:'小蜜蜂采蜜', parentTip:'和她学蜜蜂飞：嗡嗡嗡！', pages:[
    {t:'小蜜蜂，嗡嗡嗡。', e:'🐝', a:'assets/audio/s16_00.mp3'},
    {t:'它飞到花园里采花蜜。', e:'🌸', a:'assets/audio/s16_01.mp3'},
    {t:'这朵花，采一采。', e:'🌼', a:'assets/audio/s16_02.mp3'},
    {t:'那朵花，采一采。', e:'🌹', a:'assets/audio/s16_03.mp3'},
    {t:'小篮子装满啦，沉甸甸。', e:'🧺', a:'assets/audio/s16_04.mp3'},
    {t:'它飞回蜂巢，酿蜂蜜。', e:'🍯', a:'assets/audio/s16_05.mp3'},
    {t:'甜甜的蜂蜜，大家一起尝。', e:'😋', a:'assets/audio/s16_06.mp3'},
  ]},
  {title:'小蚂蚁搬西瓜', parentTip:'问问她：大家一起搬，力量大不大？', pages:[
    {t:'草地上，有一块大西瓜。', e:'🍉', a:'assets/audio/s17_00.mp3'},
    {t:'小蚂蚁看见了，想搬回家。', e:'🐜', a:'assets/audio/s17_01.mp3'},
    {t:'它推一推，推不动。', e:'😣', a:'assets/audio/s17_02.mp3'},
    {t:'它喊来好多好朋友。', e:'🐜🐜', a:'assets/audio/s17_03.mp3'},
    {t:'一二三，嘿哟！一二三，嘿哟！', e:'💪', a:'assets/audio/s17_04.mp3'},
    {t:'西瓜动起来啦，慢慢走。', e:'🍉', a:'assets/audio/s17_05.mp3'},
    {t:'大家一起吃西瓜，真甜！', e:'😋', a:'assets/audio/s17_06.mp3'},
  ]},
  {title:'小鹿过河', parentTip:'问问她：小鹿是怎么过河的呀？', pages:[
    {t:'小鹿跳跳，想去河对岸。', e:'🦌', a:'assets/audio/s18_00.mp3'},
    {t:'河水哗哗流，跳跳有点怕。', e:'💦', a:'assets/audio/s18_01.mp3'},
    {t:'它看见一排小石头。', e:'🪨', a:'assets/audio/s18_02.mp3'},
    {t:'踩一块，稳稳的。', e:'🦌', a:'assets/audio/s18_03.mp3'},
    {t:'再踩一块，慢慢来。', e:'🐾', a:'assets/audio/s18_04.mp3'},
    {t:'跳一跳，跳过最后一块！', e:'✨', a:'assets/audio/s18_05.mp3'},
    {t:'跳跳过河啦，它回头笑。', e:'😄', a:'assets/audio/s18_06.mp3'},
  ]},
  {title:'小老鼠的奶酪', parentTip:'和她学小老鼠：吱吱吱！', pages:[
    {t:'小老鼠灰灰，肚子咕咕叫。', e:'🐭', a:'assets/audio/s19_00.mp3'},
    {t:'它闻到香香的味道。', e:'👃', a:'assets/audio/s19_01.mp3'},
    {t:'爬上柜子，东找找西找找。', e:'🐾', a:'assets/audio/s19_02.mp3'},
    {t:'哇，一大块黄奶酪！', e:'🧀', a:'assets/audio/s19_03.mp3'},
    {t:'灰灰抱住奶酪，咬一口。', e:'😋', a:'assets/audio/s19_04.mp3'},
    {t:'它留了一半给妹妹。', e:'❤️', a:'assets/audio/s19_05.mp3'},
    {t:'两个小老鼠，吃得肚子圆。', e:'🐭', a:'assets/audio/s19_06.mp3'},
  ]},
  {title:'小企鹅不怕冷', parentTip:'问问她：企鹅宝宝冷的时候怎么办呀？', pages:[
    {t:'南极好冷好冷，风呼呼吹。', e:'❄️', a:'assets/audio/s20_00.mp3'},
    {t:'小企鹅摇摇摆摆走路。', e:'🐧', a:'assets/audio/s20_01.mp3'},
    {t:'它滑下雪坡，哧溜——', e:'🛷', a:'assets/audio/s20_02.mp3'},
    {t:'冷的时候，大家抱一抱。', e:'🤗', a:'assets/audio/s20_03.mp3'},
    {t:'你靠着我，我靠着你。', e:'🐧🐧', a:'assets/audio/s20_04.mp3'},
    {t:'抱在一起，一点都不冷。', e:'❤️', a:'assets/audio/s20_05.mp3'},
    {t:'小企鹅在雪地上睡着了。', e:'💤', a:'assets/audio/s20_06.mp3'},
  ]},
  {title:'长颈鹿的围巾', parentTip:'问问她：围巾是谁织的呀？', pages:[
    {t:'长颈鹿的脖子长长的。', e:'🦒', a:'assets/audio/s21_00.mp3'},
    {t:'冬天到了，脖子好冷呀。', e:'❄️', a:'assets/audio/s21_01.mp3'},
    {t:'猴妈妈织了一条围巾。', e:'🧣', a:'assets/audio/s21_02.mp3'},
    {t:'围巾长长的，红红的。', e:'🧣', a:'assets/audio/s21_03.mp3'},
    {t:'围一圈，又围一圈。', e:'🦒', a:'assets/audio/s21_04.mp3'},
    {t:'长颈鹿说：“暖和多啦！”', e:'😊', a:'assets/audio/s21_05.mp3'},
    {t:'它低下头，让小鸟站一站。', e:'🐦', a:'assets/audio/s21_06.mp3'},
  ]},
  {title:'小河马刷牙', parentTip:'和她一起念：刷牙刷干净，张嘴啊——', pages:[
    {t:'小河马的嘴巴大大的。', e:'🦛', a:'assets/audio/s22_00.mp3'},
    {t:'它张开嘴：啊——', e:'😲', a:'assets/audio/s22_01.mp3'},
    {t:'牙医说：“牙齿要刷干净。”', e:'🪥', a:'assets/audio/s22_02.mp3'},
    {t:'拿起大牙刷，刷刷刷。', e:'✨', a:'assets/audio/s22_03.mp3'},
    {t:'上面刷，下面刷，里面刷。', e:'🪥', a:'assets/audio/s22_04.mp3'},
    {t:'泡泡飞出来，好多泡泡。', e:'🫧', a:'assets/audio/s22_05.mp3'},
    {t:'小河马的牙齿，白白的。', e:'😁', a:'assets/audio/s22_06.mp3'},
  ]},
  {title:'小袋鼠的口袋', parentTip:'问问她：袋鼠口袋里装了什么呀？', pages:[
    {t:'袋鼠妈妈有个大口袋。', e:'🦘', a:'assets/audio/s23_00.mp3'},
    {t:'口袋里，住着袋鼠宝宝。', e:'👶', a:'assets/audio/s23_01.mp3'},
    {t:'宝宝探出头，看一看。', e:'👀', a:'assets/audio/s23_02.mp3'},
    {t:'看见蝴蝶，笑一笑。', e:'🦋', a:'assets/audio/s23_03.mp3'},
    {t:'累了，就缩进口袋里。', e:'🦘', a:'assets/audio/s23_04.mp3'},
    {t:'口袋里暖暖的，香香的。', e:'❤️', a:'assets/audio/s23_05.mp3'},
    {t:'宝宝在口袋里睡着啦。', e:'💤', a:'assets/audio/s23_06.mp3'},
  ]},
  {title:'小猫头鹰的夜晚', parentTip:'问问她：猫头鹰为什么白天睡觉呀？', pages:[
    {t:'小猫头鹰，白天睡大觉。', e:'🦉', a:'assets/audio/s24_00.mp3'},
    {t:'天黑了，它睁开大眼睛。', e:'👀', a:'assets/audio/s24_01.mp3'},
    {t:'月亮出来了，星星眨眼。', e:'✨', a:'assets/audio/s24_02.mp3'},
    {t:'它飞到树枝上，看一看。', e:'🌳', a:'assets/audio/s24_03.mp3'},
    {t:'田野静悄悄，虫儿轻轻叫。', e:'🌙', a:'assets/audio/s24_04.mp3'},
    {t:'小猫头鹰守着夜晚。', e:'🦉', a:'assets/audio/s24_05.mp3'},
    {t:'天快亮了，它说：“晚安。”', e:'💤', a:'assets/audio/s24_06.mp3'},
  ]},
  {title:'宝宝自己吃饭', parentTip:'问问她：你会自己吃饭吗？真棒！', pages:[
    {t:'吃饭时间到，宝宝坐好啦。', e:'🍚', a:'assets/audio/s25_00.mp3'},
    {t:'小手拿起小勺子。', e:'🥄', a:'assets/audio/s25_01.mp3'},
    {t:'舀一勺米饭，啊呜一口。', e:'😋', a:'assets/audio/s25_02.mp3'},
    {t:'舀一勺青菜，啊呜一口。', e:'🥬', a:'assets/audio/s25_03.mp3'},
    {t:'一颗饭粒掉桌上，捡起来。', e:'🍚', a:'assets/audio/s25_04.mp3'},
    {t:'宝宝把饭吃得干干净净。', e:'✨', a:'assets/audio/s25_05.mp3'},
    {t:'妈妈说：“宝宝真能干！”', e:'👍', a:'assets/audio/s25_06.mp3'},
  ]},
  {title:'刷牙小超人', parentTip:'和她一起：刷刷刷，把牙虫赶跑！', pages:[
    {t:'晚上到，刷牙时间到。', e:'🌙', a:'assets/audio/s26_00.mp3'},
    {t:'挤一点牙膏，小小的。', e:'🪥', a:'assets/audio/s26_01.mp3'},
    {t:'上刷刷，下刷刷，左刷刷。', e:'✨', a:'assets/audio/s26_02.mp3'},
    {t:'牙虫说：“哎呀，我搬家啦！”', e:'🦷', a:'assets/audio/s26_03.mp3'},
    {t:'咕噜咕噜，吐泡泡。', e:'🫧', a:'assets/audio/s26_04.mp3'},
    {t:'照照镜子，牙齿亮晶晶。', e:'😁', a:'assets/audio/s26_05.mp3'},
    {t:'刷牙小超人，睡觉啦。', e:'💤', a:'assets/audio/s26_06.mp3'},
  ]},
  {title:'洗手歌', parentTip:'和她一起唱洗手歌，搓泡泡！', pages:[
    {t:'玩好玩具，洗洗小手。', e:'🧸', a:'assets/audio/s27_00.mp3'},
    {t:'打开水龙头，哗啦啦。', e:'🚰', a:'assets/audio/s27_01.mp3'},
    {t:'抹上香皂，搓泡泡。', e:'🫧', a:'assets/audio/s27_02.mp3'},
    {t:'手心搓，手背搓，指缝搓。', e:'🙌', a:'assets/audio/s27_03.mp3'},
    {t:'泡泡冲干净，小手香香。', e:'✨', a:'assets/audio/s27_04.mp3'},
    {t:'擦干小手，可以吃点心啦。', e:'🍪', a:'assets/audio/s27_05.mp3'},
  ]},
  {title:'自己穿衣服', parentTip:'问问她：你会自己穿哪件衣服呀？', pages:[
    {t:'早上起床，穿衣服啦。', e:'🌞', a:'assets/audio/s28_00.mp3'},
    {t:'宝宝拿起小毛衣。', e:'👕', a:'assets/audio/s28_01.mp3'},
    {t:'钻呀钻，头出来啦！', e:'😄', a:'assets/audio/s28_02.mp3'},
    {t:'伸左手，伸右手，都出来啦。', e:'🙌', a:'assets/audio/s28_03.mp3'},
    {t:'拉一拉，整整齐齐。', e:'✨', a:'assets/audio/s28_04.mp3'},
    {t:'宝宝照镜子：“我穿好啦！”', e:'🪞', a:'assets/audio/s28_05.mp3'},
    {t:'奶奶拍拍手：“真棒！”', e:'👏', a:'assets/audio/s28_06.mp3'},
  ]},
  {title:'收拾玩具啦', parentTip:'问问她：玩具的家在哪里呀？', pages:[
    {t:'玩好啦，玩具要回家。', e:'🧸', a:'assets/audio/s29_00.mp3'},
    {t:'积木回家，进盒子。', e:'📦', a:'assets/audio/s29_01.mp3'},
    {t:'小汽车回家，进车库。', e:'🚗', a:'assets/audio/s29_02.mp3'},
    {t:'娃娃回家，躺床上。', e:'🛏️', a:'assets/audio/s29_03.mp3'},
    {t:'地板上干干净净。', e:'✨', a:'assets/audio/s29_04.mp3'},
    {t:'宝宝拍拍手：“收拾好啦！”', e:'👏', a:'assets/audio/s29_05.mp3'},
    {t:'玩具们在盒子里说晚安。', e:'💤', a:'assets/audio/s29_06.mp3'},
  ]},
  {title:'睡觉时间到', parentTip:'问问她：睡觉前，我们要做哪几件事呀？', pages:[
    {t:'天黑了，星星出来了。', e:'✨', a:'assets/audio/s30_00.mp3'},
    {t:'宝宝换上睡衣，软软的。', e:'👕', a:'assets/audio/s30_01.mp3'},
    {t:'刷刷牙，洗洗脸。', e:'🪥', a:'assets/audio/s30_02.mp3'},
    {t:'爬上小床，盖好被子。', e:'🛏️', a:'assets/audio/s30_03.mp3'},
    {t:'抱着小熊，听个故事。', e:'🧸', a:'assets/audio/s30_04.mp3'},
    {t:'眼睛闭上，呼——呼——', e:'😴', a:'assets/audio/s30_05.mp3'},
    {t:'晚安，宝宝，做个好梦。', e:'💤', a:'assets/audio/s30_06.mp3'},
  ]},
  {title:'剪指甲不怕', parentTip:'问问她：指甲长长了，要怎么办呀？', pages:[
    {t:'指甲长长了，像小钩子。', e:'💅', a:'assets/audio/s31_00.mp3'},
    {t:'妈妈拿来指甲剪。', e:'✂️', a:'assets/audio/s31_01.mp3'},
    {t:'宝宝伸出手，不乱动。', e:'🖐️', a:'assets/audio/s31_02.mp3'},
    {t:'咔嚓，咔嚓，一只手指好啦。', e:'✨', a:'assets/audio/s31_03.mp3'},
    {t:'咔嚓，咔嚓，十只都好啦。', e:'🙌', a:'assets/audio/s31_04.mp3'},
    {t:'指甲短短的，干干净净。', e:'😊', a:'assets/audio/s31_05.mp3'},
    {t:'宝宝说：“一点都不疼！”', e:'👍', a:'assets/audio/s31_06.mp3'},
  ]},
  {title:'宝宝喝水啦', parentTip:'和她一起：咕咚咕咚，喝水啦！', pages:[
    {t:'玩得满头汗，口渴啦。', e:'😅', a:'assets/audio/s32_00.mp3'},
    {t:'宝宝拿起小水杯。', e:'🥤', a:'assets/audio/s32_01.mp3'},
    {t:'咕咚，咕咚，喝一口。', e:'💧', a:'assets/audio/s32_02.mp3'},
    {t:'再喝一口，咕咚咕咚。', e:'💧', a:'assets/audio/s32_03.mp3'},
    {t:'水喝够了，肚子圆圆的。', e:'😊', a:'assets/audio/s32_04.mp3'},
    {t:'宝宝说：“还要跑一跑！”', e:'🏃', a:'assets/audio/s32_05.mp3'},
    {t:'喝水长大个，身体棒棒。', e:'💪', a:'assets/audio/s32_06.mp3'},
  ]},
  {title:'穿鞋小能手', parentTip:'问问她：左脚的鞋，穿在哪只脚上呀？', pages:[
    {t:'出门啦，宝宝穿鞋子。', e:'👟', a:'assets/audio/s33_00.mp3'},
    {t:'左脚伸进左鞋，哎呀不对。', e:'🤔', a:'assets/audio/s33_01.mp3'},
    {t:'换一换，右脚伸进右鞋。', e:'👟', a:'assets/audio/s33_02.mp3'},
    {t:'粘上粘扣，啪嗒一声。', e:'✨', a:'assets/audio/s33_03.mp3'},
    {t:'站起来，跺跺脚。', e:'👣', a:'assets/audio/s33_04.mp3'},
    {t:'宝宝说：“我自己穿好啦！”', e:'😄', a:'assets/audio/s33_05.mp3'},
    {t:'穿对鞋子，走路稳稳的。', e:'👍', a:'assets/audio/s33_06.mp3'},
  ]},
  {title:'叠被子的小能手', parentTip:'和她一起：拉一拉，折一折，被子变方啦！', pages:[
    {t:'起床啦，先叠被子。', e:'🌞', a:'assets/audio/s34_00.mp3'},
    {t:'拉一拉这边，平平的。', e:'🛏️', a:'assets/audio/s34_01.mp3'},
    {t:'折一折那边，方方的。', e:'✨', a:'assets/audio/s34_02.mp3'},
    {t:'小手拍一拍，整整齐齐。', e:'👏', a:'assets/audio/s34_03.mp3'},
    {t:'枕头放上面，摆摆好。', e:'😊', a:'assets/audio/s34_04.mp3'},
    {t:'小床变得干干净净。', e:'🛏️', a:'assets/audio/s34_05.mp3'},
    {t:'妈妈说：“小能手，真棒！”', e:'👍', a:'assets/audio/s34_06.mp3'},
  ]},
  {title:'垃圾要回家', parentTip:'问问她：香蕉皮应该扔到哪里呀？', pages:[
    {t:'宝宝吃香蕉，剩下香蕉皮。', e:'🍌', a:'assets/audio/s35_00.mp3'},
    {t:'香蕉皮不能乱扔哦。', e:'❌', a:'assets/audio/s35_01.mp3'},
    {t:'宝宝拿着它，找垃圾桶。', e:'🗑️', a:'assets/audio/s35_02.mp3'},
    {t:'垃圾桶张开大嘴巴。', e:'😲', a:'assets/audio/s35_03.mp3'},
    {t:'扑通，香蕉皮回家啦。', e:'✨', a:'assets/audio/s35_04.mp3'},
    {t:'地面干干净净，真舒服。', e:'🌳', a:'assets/audio/s35_05.mp3'},
    {t:'小鸟说：“谢谢爱干净的宝宝！”', e:'🐦', a:'assets/audio/s35_06.mp3'},
  ]},
  {title:'红绿灯前停一停', parentTip:'和她一起念：红灯停，绿灯行！', pages:[
    {t:'过马路，牵好妈妈的手。', e:'🤝', a:'assets/audio/s36_00.mp3'},
    {t:'红灯亮了，停一停。', e:'🔴', a:'assets/audio/s36_01.mp3'},
    {t:'汽车跑过去，嗖嗖嗖。', e:'🚗', a:'assets/audio/s36_02.mp3'},
    {t:'绿灯亮了，看一看。', e:'🟢', a:'assets/audio/s36_03.mp3'},
    {t:'左边看看，右边看看。', e:'👀', a:'assets/audio/s36_04.mp3'},
    {t:'没有车，走过去。', e:'🚶', a:'assets/audio/s36_05.mp3'},
    {t:'宝宝说：“我会过马路啦！”', e:'👍', a:'assets/audio/s36_06.mp3'},
  ]},
  {title:'排队滑滑梯', parentTip:'问问她：玩滑梯的时候，要怎么做呀？', pages:[
    {t:'公园里，有大滑梯。', e:'🛝', a:'assets/audio/s37_00.mp3'},
    {t:'好多小朋友都想玩。', e:'👧👦', a:'assets/audio/s37_01.mp3'},
    {t:'宝宝排在小明的后面。', e:'🚶', a:'assets/audio/s37_02.mp3'},
    {t:'一个滑下去，轮到下一个。', e:'🛝', a:'assets/audio/s37_03.mp3'},
    {t:'轮到宝宝啦，坐稳啦。', e:'😄', a:'assets/audio/s37_04.mp3'},
    {t:'哧溜——滑下去啦！', e:'💨', a:'assets/audio/s37_05.mp3'},
    {t:'排队玩，大家都开心。', e:'❤️', a:'assets/audio/s37_06.mp3'},
  ]},
  {title:'会说谢谢的小嘴巴', parentTip:'问问她：别人帮了我们，要说什么呀？', pages:[
    {t:'阿姨递给宝宝一个苹果。', e:'🍎', a:'assets/audio/s38_00.mp3'},
    {t:'宝宝双手接过来。', e:'🙌', a:'assets/audio/s38_01.mp3'},
    {t:'宝宝笑眯眯：“谢谢阿姨！”', e:'😊', a:'assets/audio/s38_02.mp3'},
    {t:'阿姨的眼睛笑弯了。', e:'😄', a:'assets/audio/s38_03.mp3'},
    {t:'公交车上，爷爷让座。', e:'🚌', a:'assets/audio/s38_04.mp3'},
    {t:'宝宝说：“谢谢爷爷！”', e:'❤️', a:'assets/audio/s38_05.mp3'},
    {t:'会说谢谢的嘴巴，真甜。', e:'🍬', a:'assets/audio/s38_06.mp3'},
  ]},
  {title:'分享饼干', parentTip:'问问她：饼干分给好朋友，心里甜不甜呀？', pages:[
    {t:'妈妈烤了香香的饼干。', e:'🍪', a:'assets/audio/s39_00.mp3'},
    {t:'宝宝拿起一块，咬一口。', e:'😋', a:'assets/audio/s39_01.mp3'},
    {t:'好朋友乐乐看着她。', e:'👀', a:'assets/audio/s39_02.mp3'},
    {t:'宝宝递过去：“给你一块！”', e:'🍪', a:'assets/audio/s39_03.mp3'},
    {t:'乐乐说：“谢谢你！”', e:'😊', a:'assets/audio/s39_04.mp3'},
    {t:'两个人一起吃，咔嚓咔嚓。', e:'🍪', a:'assets/audio/s39_05.mp3'},
    {t:'分享的饼干，格外香。', e:'❤️', a:'assets/audio/s39_06.mp3'},
  ]},
  {title:'宝宝坐便盆', parentTip:'问问她：想尿尿的时候，要告诉谁呀？', pages:[
    {t:'宝宝的肚子咕噜噜。', e:'🤔', a:'assets/audio/s40_00.mp3'},
    {t:'“妈妈，我想尿尿！”', e:'📣', a:'assets/audio/s40_01.mp3'},
    {t:'宝宝跑向小便盆。', e:'🏃', a:'assets/audio/s40_02.mp3'},
    {t:'脱下裤子，坐好啦。', e:'✨', a:'assets/audio/s40_03.mp3'},
    {t:'等一等，哗啦啦。', e:'💧', a:'assets/audio/s40_04.mp3'},
    {t:'冲一冲，洗洗手。', e:'🙌', a:'assets/audio/s40_05.mp3'},
    {t:'宝宝说：“我长大啦！”', e:'👍', a:'assets/audio/s40_06.mp3'},
  ]},
  {title:'理发不可怕', parentTip:'和她学理发师：咔嚓咔嚓，头发变短啦！', pages:[
    {t:'头发长长了，遮住眼睛啦。', e:'💇', a:'assets/audio/s41_00.mp3'},
    {t:'宝宝坐上理发椅。', e:'💺', a:'assets/audio/s41_01.mp3'},
    {t:'围上围布，像个小超人。', e:'🦸', a:'assets/audio/s41_02.mp3'},
    {t:'咔嚓咔嚓，头发落下来。', e:'✂️', a:'assets/audio/s41_03.mp3'},
    {t:'痒痒的，宝宝咯咯笑。', e:'😄', a:'assets/audio/s41_04.mp3'},
    {t:'照照镜子，精神多啦！', e:'🪞', a:'assets/audio/s41_05.mp3'},
    {t:'宝宝说：“理发一点都不可怕！”', e:'👍', a:'assets/audio/s41_06.mp3'},
  ]},
  {title:'看医生不害怕', parentTip:'问问她：医生阿姨的听诊器，是做什么的呀？', pages:[
    {t:'宝宝有点咳嗽，咳咳咳。', e:'🤧', a:'assets/audio/s42_00.mp3'},
    {t:'妈妈带宝宝去看医生。', e:'🏥', a:'assets/audio/s42_01.mp3'},
    {t:'医生阿姨笑眯眯：“张嘴，啊——”', e:'😲', a:'assets/audio/s42_02.mp3'},
    {t:'听诊器凉凉的，贴在胸口。', e:'🩺', a:'assets/audio/s42_03.mp3'},
    {t:'“心跳咚咚，身体棒棒！”', e:'💪', a:'assets/audio/s42_04.mp3'},
    {t:'喝几天药，多喝水。', e:'💊', a:'assets/audio/s42_05.mp3'},
    {t:'宝宝说：“谢谢医生阿姨！”', e:'❤️', a:'assets/audio/s42_06.mp3'},
  ]},
  {title:'自己吃饭不挑嘴', parentTip:'问问她：青菜和胡萝卜，哪个是你的好朋友呀？', pages:[
    {t:'今天的菜，五颜六色。', e:'🥗', a:'assets/audio/s43_00.mp3'},
    {t:'红红的胡萝卜，脆脆的。', e:'🥕', a:'assets/audio/s43_01.mp3'},
    {t:'绿绿的青菜，香香的。', e:'🥬', a:'assets/audio/s43_02.mp3'},
    {t:'黄黄的玉米，甜甜的。', e:'🌽', a:'assets/audio/s43_03.mp3'},
    {t:'宝宝每样都尝一口。', e:'😋', a:'assets/audio/s43_04.mp3'},
    {t:'不挑食，长得高。', e:'💪', a:'assets/audio/s43_05.mp3'},
    {t:'妈妈竖起大拇指：“真棒！”', e:'👍', a:'assets/audio/s43_06.mp3'},
  ]},
  {title:'春天的种子', parentTip:'问问她：种子长大需要什么呀？', pages:[
    {t:'春天来了，宝宝种下一颗种子。', e:'🌱', a:'assets/audio/s44_00.mp3'},
    {t:'挖一个小坑，放进去。', e:'🕳️', a:'assets/audio/s44_01.mp3'},
    {t:'盖上土，浇浇水。', e:'💧', a:'assets/audio/s44_02.mp3'},
    {t:'太阳公公照一照。', e:'☀️', a:'assets/audio/s44_03.mp3'},
    {t:'等呀等，芽芽冒出来啦！', e:'🌱', a:'assets/audio/s44_04.mp3'},
    {t:'叶子长大啦，绿绿的。', e:'🍃', a:'assets/audio/s44_05.mp3'},
    {t:'开出一朵小花，香香的。', e:'🌸', a:'assets/audio/s44_06.mp3'},
  ]},
  {title:'夏天的西瓜', parentTip:'和她一起：咔嚓！西瓜切开啦！', pages:[
    {t:'夏天好热呀，知了在叫。', e:'🌞', a:'assets/audio/s45_00.mp3'},
    {t:'爸爸抱回一个大西瓜。', e:'🍉', a:'assets/audio/s45_01.mp3'},
    {t:'敲一敲，咚咚响，熟啦！', e:'✊', a:'assets/audio/s45_02.mp3'},
    {t:'咔嚓一刀，西瓜开啦。', e:'🔪', a:'assets/audio/s45_03.mp3'},
    {t:'红红的瓤，黑黑的籽。', e:'🍉', a:'assets/audio/s45_04.mp3'},
    {t:'宝宝咬一口，甜到心里。', e:'😋', a:'assets/audio/s45_05.mp3'},
    {t:'吃西瓜的夏天，真凉快。', e:'🍃', a:'assets/audio/s45_06.mp3'},
  ]},
  {title:'秋天的落叶', parentTip:'问问她：落叶是什么颜色的呀？', pages:[
    {t:'秋天到了，叶子变黄了。', e:'🍂', a:'assets/audio/s46_00.mp3'},
    {t:'风一吹，叶子飘下来。', e:'🍃', a:'assets/audio/s46_01.mp3'},
    {t:'像蝴蝶，飞呀飞。', e:'🦋', a:'assets/audio/s46_02.mp3'},
    {t:'宝宝伸手，接住一片。', e:'🙌', a:'assets/audio/s46_03.mp3'},
    {t:'踩在落叶上，沙沙响。', e:'👣', a:'assets/audio/s46_04.mp3'},
    {t:'把最美的叶子夹进书里。', e:'📖', a:'assets/audio/s46_05.mp3'},
    {t:'落叶是秋天的信。', e:'✉️', a:'assets/audio/s46_06.mp3'},
  ]},
  {title:'冬天的雪人', parentTip:'问问她：雪人的鼻子是什么做的呀？', pages:[
    {t:'下雪啦，白白的一片。', e:'❄️', a:'assets/audio/s47_00.mp3'},
    {t:'宝宝滚一个大雪球。', e:'⚪', a:'assets/audio/s47_01.mp3'},
    {t:'再滚一个小雪球，叠上去。', e:'⛄', a:'assets/audio/s47_02.mp3'},
    {t:'胡萝卜当鼻子，尖尖的。', e:'🥕', a:'assets/audio/s47_03.mp3'},
    {t:'纽扣当眼睛，圆圆的。', e:'👀', a:'assets/audio/s47_04.mp3'},
    {t:'围上红围巾，暖和啦。', e:'🧣', a:'assets/audio/s47_05.mp3'},
    {t:'雪人笑眯眯：“你好呀！”', e:'⛄', a:'assets/audio/s47_06.mp3'},
  ]},
  {title:'下雨啦', parentTip:'和她一起听：滴答滴答，小雨下啦！', pages:[
    {t:'乌云飘来了，天暗了。', e:'☁️', a:'assets/audio/s48_00.mp3'},
    {t:'滴答，滴答，下雨啦。', e:'🌧️', a:'assets/audio/s48_01.mp3'},
    {t:'宝宝撑起小花伞。', e:'☂️', a:'assets/audio/s48_02.mp3'},
    {t:'穿上小雨靴，踩水洼。', e:'👢', a:'assets/audio/s48_03.mp3'},
    {t:'啪嗒，啪嗒，水花跳起来。', e:'💦', a:'assets/audio/s48_04.mp3'},
    {t:'小青蛙唱起歌：呱呱。', e:'🐸', a:'assets/audio/s48_05.mp3'},
    {t:'雨停了，空气香香的。', e:'🌈', a:'assets/audio/s48_06.mp3'},
  ]},
  {title:'彩虹桥', parentTip:'数一数：彩虹有几种颜色呀？', pages:[
    {t:'雨停了，太阳出来了。', e:'🌤️', a:'assets/audio/s49_00.mp3'},
    {t:'天边挂起一道彩虹。', e:'🌈', a:'assets/audio/s49_01.mp3'},
    {t:'红、橙、黄、绿、青、蓝、紫。', e:'🎨', a:'assets/audio/s49_02.mp3'},
    {t:'像一座弯弯的桥。', e:'🌉', a:'assets/audio/s49_03.mp3'},
    {t:'小鸟从桥下飞过去。', e:'🐦', a:'assets/audio/s49_04.mp3'},
    {t:'宝宝挥挥手：“彩虹你好！”', e:'👋', a:'assets/audio/s49_05.mp3'},
    {t:'彩虹慢慢淡了，下次再见。', e:'✨', a:'assets/audio/s49_06.mp3'},
  ]},
  {title:'月亮船', parentTip:'问问她：月亮船要开到哪里去呀？', pages:[
    {t:'晚上的月亮，弯弯的。', e:'🌙', a:'assets/audio/s50_00.mp3'},
    {t:'像一只小小的船。', e:'⛵', a:'assets/audio/s50_01.mp3'},
    {t:'宝宝爬上月亮船。', e:'😴', a:'assets/audio/s50_02.mp3'},
    {t:'船儿摇呀摇，飘过星星海。', e:'✨', a:'assets/audio/s50_03.mp3'},
    {t:'星星眨眨眼，跟宝宝打招呼。', e:'⭐', a:'assets/audio/s50_04.mp3'},
    {t:'船儿飘到云朵边，软软的。', e:'☁️', a:'assets/audio/s50_05.mp3'},
    {t:'宝宝在月亮船上睡着了。', e:'💤', a:'assets/audio/s50_06.mp3'},
  ]},
  {title:'星星眨眼睛', parentTip:'问问她：你数过天上的星星吗？', pages:[
    {t:'天黑了，星星出来了。', e:'⭐', a:'assets/audio/s51_00.mp3'},
    {t:'一颗星星眨眼睛。', e:'✨', a:'assets/audio/s51_01.mp3'},
    {t:'两颗星星眨眼睛。', e:'🌟', a:'assets/audio/s51_02.mp3'},
    {t:'好多好多星星，数不清。', e:'🌌', a:'assets/audio/s51_03.mp3'},
    {t:'宝宝指着最亮的那颗。', e:'👆', a:'assets/audio/s51_04.mp3'},
    {t:'“那是我的星星！”', e:'😊', a:'assets/audio/s51_05.mp3'},
    {t:'星星陪着宝宝一起睡。', e:'💤', a:'assets/audio/s51_06.mp3'},
  ]},
  {title:'风儿吹气球', parentTip:'问问她：风把气球吹到哪里去啦？', pages:[
    {t:'宝宝拿着红气球。', e:'🎈', a:'assets/audio/s52_00.mp3'},
    {t:'一阵风吹来，呼——', e:'💨', a:'assets/audio/s52_01.mp3'},
    {t:'气球挣脱小手，飞起来啦。', e:'🎈', a:'assets/audio/s52_02.mp3'},
    {t:'飞过屋顶，飞过树梢。', e:'🌳', a:'assets/audio/s52_03.mp3'},
    {t:'气球对小鸟说：“你好！”', e:'🐦', a:'assets/audio/s52_04.mp3'},
    {t:'宝宝挥挥手：“再见，气球！”', e:'👋', a:'assets/audio/s52_05.mp3'},
    {t:'气球飞到云朵旁边去啦。', e:'☁️', a:'assets/audio/s52_06.mp3'},
  ]},
  {title:'云朵变变变', parentTip:'问问她：你看见的云，像什么呀？', pages:[
    {t:'天上的云，白白的。', e:'☁️', a:'assets/audio/s53_00.mp3'},
    {t:'这朵云，像小兔子。', e:'🐰', a:'assets/audio/s53_01.mp3'},
    {t:'那朵云，像大鲸鱼。', e:'🐳', a:'assets/audio/s53_02.mp3'},
    {t:'风一吹，云变样啦。', e:'💨', a:'assets/audio/s53_03.mp3'},
    {t:'变成小火车，呜呜呜。', e:'🚂', a:'assets/audio/s53_04.mp3'},
    {t:'变成棉花糖，软软的。', e:'🍬', a:'assets/audio/s53_05.mp3'},
    {t:'宝宝看云，看得入了迷。', e:'😊', a:'assets/audio/s53_06.mp3'},
  ]},
  {title:'太阳公公上班', parentTip:'和她一起：太阳公公，早上好！', pages:[
    {t:'天蒙蒙亮，公鸡叫：喔喔喔！', e:'🐓', a:'assets/audio/s54_00.mp3'},
    {t:'太阳公公起床啦。', e:'🌅', a:'assets/audio/s54_01.mp3'},
    {t:'它爬上山坡，笑呵呵。', e:'☀️', a:'assets/audio/s54_02.mp3'},
    {t:'花儿醒了，伸懒腰。', e:'🌸', a:'assets/audio/s54_03.mp3'},
    {t:'小鸟醒了，唱起歌。', e:'🐦', a:'assets/audio/s54_04.mp3'},
    {t:'宝宝醒了：“太阳公公早！”', e:'👋', a:'assets/audio/s54_05.mp3'},
    {t:'新的一天开始啦。', e:'✨', a:'assets/audio/s54_06.mp3'},
  ]},
  {title:'小水滴旅行', parentTip:'问问她：小水滴最后到哪里去啦？', pages:[
    {t:'小水滴住在云朵里。', e:'💧', a:'assets/audio/s55_00.mp3'},
    {t:'下雨啦，小水滴跳下来。', e:'🌧️', a:'assets/audio/s55_01.mp3'},
    {t:'落在小河里，哗啦啦。', e:'🏞️', a:'assets/audio/s55_02.mp3'},
    {t:'跟着河水跑呀跑。', e:'💦', a:'assets/audio/s55_03.mp3'},
    {t:'跑到大海里， 波浪 摇呀摇。', e:'🌊', a:'assets/audio/s55_04.mp3'},
    {t:'太阳晒一晒，小水滴飞起来。', e:'☀️', a:'assets/audio/s55_05.mp3'},
    {t:'飞回云朵里，睡大觉。', e:'☁️', a:'assets/audio/s55_06.mp3'},
  ]},
  {title:'雷声轰隆隆', parentTip:'问问她：打雷的时候，我们在哪里最安全呀？', pages:[
    {t:'乌云滚滚，天黑了。', e:'☁️', a:'assets/audio/s56_00.mp3'},
    {t:'轰隆隆，雷声响啦。', e:'⛈️', a:'assets/audio/s56_01.mp3'},
    {t:'宝宝钻进妈妈怀里。', e:'🤗', a:'assets/audio/s56_02.mp3'},
    {t:'妈妈说：“雷公公在敲鼓。”', e:'🥁', a:'assets/audio/s56_03.mp3'},
    {t:'闪电亮一亮，像拍照。', e:'⚡', a:'assets/audio/s56_04.mp3'},
    {t:'雨下过，天晴了。', e:'🌤️', a:'assets/audio/s56_05.mp3'},
    {t:'彩虹出来啦，不怕不怕。', e:'🌈', a:'assets/audio/s56_06.mp3'},
  ]},
  {title:'雾蒙蒙的早晨', parentTip:'问问她：雾散了以后，我们能看见什么呀？', pages:[
    {t:'早上起来，白茫茫。', e:'🌫️', a:'assets/audio/s57_00.mp3'},
    {t:'大树藏起来了，只看见影子。', e:'🌳', a:'assets/audio/s57_01.mp3'},
    {t:'小桥藏起来了，慢慢走。', e:'🌉', a:'assets/audio/s57_02.mp3'},
    {t:'宝宝喊：“雾，你好呀！”', e:'👋', a:'assets/audio/s57_03.mp3'},
    {t:'太阳出来了，雾散了。', e:'☀️', a:'assets/audio/s57_04.mp3'},
    {t:'大树出来了，小桥出来了。', e:'✨', a:'assets/audio/s57_05.mp3'},
    {t:'原来大家都在呀。', e:'😊', a:'assets/audio/s57_06.mp3'},
  ]},
  {title:'竹笋长高高', parentTip:'和她一起比：竹笋一天长这么高！', pages:[
    {t:'春雨下过，竹林湿漉漉。', e:'🌧️', a:'assets/audio/s58_00.mp3'},
    {t:'土里冒出尖尖头，是竹笋！', e:'🎋', a:'assets/audio/s58_01.mp3'},
    {t:'喝饱雨水，长一长。', e:'💧', a:'assets/audio/s58_02.mp3'},
    {t:'晒晒太阳，再长一长。', e:'☀️', a:'assets/audio/s58_03.mp3'},
    {t:'一天，两天，长得比宝宝还高。', e:'📏', a:'assets/audio/s58_04.mp3'},
    {t:'竹笋变竹子，直直的。', e:'🎋', a:'assets/audio/s58_05.mp3'},
    {t:'宝宝说：“你要长到天上去吗？”', e:'😄', a:'assets/audio/s58_06.mp3'},
  ]},
  {title:'秋天的菊花', parentTip:'问问她：菊花有哪几种颜色呀？', pages:[
    {t:'秋天到，菊花开。', e:'🌼', a:'assets/audio/s59_00.mp3'},
    {t:'黄菊花，像小太阳。', e:'☀️', a:'assets/audio/s59_01.mp3'},
    {t:'白菊花，像小雪球。', e:'⚪', a:'assets/audio/s59_02.mp3'},
    {t:'粉菊花，像小裙子。', e:'👗', a:'assets/audio/s59_03.mp3'},
    {t:'蜜蜂飞来闻一闻。', e:'🐝', a:'assets/audio/s59_04.mp3'},
    {t:'宝宝说：“菊花真漂亮！”', e:'😊', a:'assets/audio/s59_05.mp3'},
    {t:'菊花笑着点点头。', e:'🌼', a:'assets/audio/s59_06.mp3'},
  ]},
  {title:'冬天的冰花', parentTip:'问问她：冰花是画在什么地方的呀？', pages:[
    {t:'冬天的早上，好冷呀。', e:'❄️', a:'assets/audio/s60_00.mp3'},
    {t:'窗玻璃上，开满冰花。', e:'🪟', a:'assets/audio/s60_01.mp3'},
    {t:'这朵像小树，那朵像星星。', e:'✨', a:'assets/audio/s60_02.mp3'},
    {t:'宝宝哈一口气：哈——', e:'💨', a:'assets/audio/s60_03.mp3'},
    {t:'冰花化开一个小圆洞。', e:'⭕', a:'assets/audio/s60_04.mp3'},
    {t:'透过小洞，看见雪地。', e:'⛄', a:'assets/audio/s60_05.mp3'},
    {t:'冰花是冬爷爷画的画。', e:'🎨', a:'assets/audio/s60_06.mp3'},
  ]},
  {title:'海边的贝壳', parentTip:'问问她：贝壳里能听见什么声音呀？', pages:[
    {t:'宝宝来到大海边。', e:'🌊', a:'assets/audio/s61_00.mp3'},
    {t:'沙滩上，有好多贝壳。', e:'🐚', a:'assets/audio/s61_01.mp3'},
    {t:'这只白白的，那只粉粉的。', e:'✨', a:'assets/audio/s61_02.mp3'},
    {t:'捡一只，放进小桶里。', e:'🪣', a:'assets/audio/s61_03.mp3'},
    {t:'把贝壳贴在耳朵上听一听。', e:'👂', a:'assets/audio/s61_04.mp3'},
    {t:'“哗——哗——是大海在唱歌！”', e:'🌊', a:'assets/audio/s61_05.mp3'},
    {t:'贝壳是大海送的礼物。', e:'🎁', a:'assets/audio/s61_06.mp3'},
  ]},
  {title:'草地上的蒲公英', parentTip:'和她一起：呼——吹蒲公英啦！', pages:[
    {t:'草地上，开着蒲公英。', e:'🌼', a:'assets/audio/s62_00.mp3'},
    {t:'黄花谢了，变成小绒球。', e:'⚪', a:'assets/audio/s62_01.mp3'},
    {t:'宝宝摘起一朵，深吸一口气。', e:'😮', a:'assets/audio/s62_02.mp3'},
    {t:'呼——绒球飞起来啦！', e:'💨', a:'assets/audio/s62_03.mp3'},
    {t:'小伞兵们飞呀飞。', e:'🪂', a:'assets/audio/s62_04.mp3'},
    {t:'飞到哪里，就在哪里安家。', e:'🏠', a:'assets/audio/s62_05.mp3'},
    {t:'明年春天，长出新蒲公英。', e:'🌱', a:'assets/audio/s62_06.mp3'},
  ]},
  {title:'小火车呜呜呜', parentTip:'问问她：小火车要开到哪里去呀？', pages:[
    {t:'小火车，呜呜呜。', e:'🚂', a:'assets/audio/s63_00.mp3'},
    {t:'它拉着长长的车厢。', e:'🚃', a:'assets/audio/s63_01.mp3'},
    {t:'况且况且，跑过田野。', e:'🌾', a:'assets/audio/s63_02.mp3'},
    {t:'况且况且，钻过山洞。', e:'⛰️', a:'assets/audio/s63_03.mp3'},
    {t:'小羊抬头看：“慢点跑！”', e:'🐑', a:'assets/audio/s63_04.mp3'},
    {t:'小火车挥挥手：“我要去远方！”', e:'👋', a:'assets/audio/s63_05.mp3'},
    {t:'月亮出来了，火车到站啦。', e:'🌙', a:'assets/audio/s63_06.mp3'},
  ]},
  {title:'公共汽车到站啦', parentTip:'问问她：坐公交车，要给谁让座呀？', pages:[
    {t:'公共汽车开来了，叮咚。', e:'🚌', a:'assets/audio/s64_00.mp3'},
    {t:'“本站到了，请上车。”', e:'🔊', a:'assets/audio/s64_01.mp3'},
    {t:'宝宝拉着妈妈，排队上车。', e:'👩‍👧', a:'assets/audio/s64_02.mp3'},
    {t:'老爷爷上车，宝宝让座。', e:'💺', a:'assets/audio/s64_03.mp3'},
    {t:'“谢谢你，小朋友！”', e:'😊', a:'assets/audio/s64_04.mp3'},
    {t:'汽车开动啦，窗外树在跑。', e:'🌳', a:'assets/audio/s64_05.mp3'},
    {t:'下一站，公园到啦！', e:'🏞️', a:'assets/audio/s64_06.mp3'},
  ]},
  {title:'消防车真快', parentTip:'问问她：着火了要打什么电话呀？', pages:[
    {t:'呜——呜——消防车来啦！', e:'🚒', a:'assets/audio/s65_00.mp3'},
    {t:'红红的车身，亮亮的灯。', e:'🔴', a:'assets/audio/s65_01.mp3'},
    {t:'消防员叔叔穿好衣服。', e:'🧑‍🚒', a:'assets/audio/s65_02.mp3'},
    {t:'水管喷出水，哗啦啦。', e:'💦', a:'assets/audio/s65_03.mp3'},
    {t:'小火苗被浇灭啦。', e:'✨', a:'assets/audio/s65_04.mp3'},
    {t:'大家拍手：“谢谢消防员！”', e:'👏', a:'assets/audio/s65_05.mp3'},
    {t:'消防车慢慢开回消防站。', e:'🚒', a:'assets/audio/s65_06.mp3'},
  ]},
  {title:'救护车来了', parentTip:'问问她：救护车是去帮助谁的呀？', pages:[
    {t:'小熊的肚子疼，哎哟哎哟。', e:'🐻', a:'assets/audio/s66_00.mp3'},
    {t:'救护车来了，呜哇呜哇。', e:'🚑', a:'assets/audio/s66_01.mp3'},
    {t:'医生叔叔轻轻抱起小熊。', e:'🧑‍⚕️', a:'assets/audio/s66_02.mp3'},
    {t:'汽车开得快，又稳稳的。', e:'💨', a:'assets/audio/s66_03.mp3'},
    {t:'到了医院，小熊不疼了。', e:'🏥', a:'assets/audio/s66_04.mp3'},
    {t:'小熊说：“谢谢你们！”', e:'❤️', a:'assets/audio/s66_05.mp3'},
    {t:'救护车是救人的小英雄。', e:'🦸', a:'assets/audio/s66_06.mp3'},
  ]},
  {title:'大轮船出海', parentTip:'和她学轮船叫：呜——呜——', pages:[
    {t:'大轮船停在港口边。', e:'🚢', a:'assets/audio/s67_00.mp3'},
    {t:'呜——呜——要出发啦！', e:'📣', a:'assets/audio/s67_01.mp3'},
    {t:'轮船慢慢开进大海。', e:'🌊', a:'assets/audio/s67_02.mp3'},
    {t:'海浪摇呀摇，像摇篮。', e:'🛏️', a:'assets/audio/s67_03.mp3'},
    {t:'海鸥跟着飞，叽叽喳喳。', e:'🕊️', a:'assets/audio/s67_04.mp3'},
    {t:'轮船看见小岛，挥挥手。', e:'🏝️', a:'assets/audio/s67_05.mp3'},
    {t:'天黑了，轮船的灯亮了。', e:'💡', a:'assets/audio/s67_06.mp3'},
  ]},
  {title:'飞机飞上天', parentTip:'问问她：坐飞机能看见什么呀？', pages:[
    {t:'大飞机停在机场上。', e:'✈️', a:'assets/audio/s68_00.mp3'},
    {t:'宝宝系好安全带，坐稳啦。', e:'💺', a:'assets/audio/s68_01.mp3'},
    {t:'飞机跑呀跑，飞起来啦！', e:'🛫', a:'assets/audio/s68_02.mp3'},
    {t:'房子变小啦，像积木。', e:'🏠', a:'assets/audio/s68_03.mp3'},
    {t:'云朵在窗边，白白软软。', e:'☁️', a:'assets/audio/s68_04.mp3'},
    {t:'飞机飞过彩虹桥。', e:'🌈', a:'assets/audio/s68_05.mp3'},
    {t:'落地啦，旅行开始啦！', e:'🛬', a:'assets/audio/s68_06.mp3'},
  ]},
  {title:'挖掘机挖土', parentTip:'和她一起：轰隆隆，挖土啦！', pages:[
    {t:'挖掘机，黄黄的大个子。', e:'🚜', a:'assets/audio/s69_00.mp3'},
    {t:'它伸出长长的手臂。', e:'💪', a:'assets/audio/s69_01.mp3'},
    {t:'挖一斗土，举起来。', e:'🪨', a:'assets/audio/s69_02.mp3'},
    {t:'转个圈，倒进卡车里。', e:'🚛', a:'assets/audio/s69_03.mp3'},
    {t:'轰隆隆，轰隆隆，真有力气。', e:'💨', a:'assets/audio/s69_04.mp3'},
    {t:'坑挖好啦，要种大树。', e:'🌳', a:'assets/audio/s69_05.mp3'},
    {t:'挖掘机休息啦，明天见。', e:'🌙', a:'assets/audio/s69_06.mp3'},
  ]},
  {title:'警车巡逻', parentTip:'问问她：警察叔叔是做什么的呀？', pages:[
    {t:'天黑了，警车出门巡逻。', e:'🚓', a:'assets/audio/s70_00.mp3'},
    {t:'它慢慢开过小街道。', e:'🏘️', a:'assets/audio/s70_01.mp3'},
    {t:'看看商店，门锁好了。', e:'🔒', a:'assets/audio/s70_02.mp3'},
    {t:'看看路灯，亮亮的。', e:'💡', a:'assets/audio/s70_03.mp3'},
    {t:'小猫迷路了，警车送它回家。', e:'🐱', a:'assets/audio/s70_04.mp3'},
    {t:'小镇静悄悄，大家睡得香。', e:'💤', a:'assets/audio/s70_05.mp3'},
    {t:'警车说：“有我守着，放心睡。”', e:'🌙', a:'assets/audio/s70_06.mp3'},
  ]},
  {title:'送信的邮递员', parentTip:'问问她：邮递员叔叔送的是什么呀？', pages:[
    {t:'邮递员叔叔，骑着绿车子。', e:'🚲', a:'assets/audio/s71_00.mp3'},
    {t:'他的包里，装满了信。', e:'✉️', a:'assets/audio/s71_01.mp3'},
    {t:'这封信，送给奶奶。', e:'👵', a:'assets/audio/s71_02.mp3'},
    {t:'那封信，送给小明。', e:'👦', a:'assets/audio/s71_03.mp3'},
    {t:'小狗跟着跑，汪汪叫。', e:'🐶', a:'assets/audio/s71_04.mp3'},
    {t:'“信来啦！”大家都开心。', e:'😄', a:'assets/audio/s71_05.mp3'},
    {t:'信里装着想念和问候。', e:'❤️', a:'assets/audio/s71_06.mp3'},
  ]},
  {title:'图书馆里静悄悄', parentTip:'问问她：在图书馆，我们要怎么做呀？', pages:[
    {t:'图书馆里，好多好多书。', e:'📚', a:'assets/audio/s72_00.mp3'},
    {t:'宝宝踮起脚，轻轻走。', e:'👣', a:'assets/audio/s72_01.mp3'},
    {t:'抽出一本图画书。', e:'📖', a:'assets/audio/s72_02.mp3'},
    {t:'和妈妈坐下来，慢慢看。', e:'👩‍👧', a:'assets/audio/s72_03.mp3'},
    {t:'嘘——说话要小声哦。', e:'🤫', a:'assets/audio/s72_04.mp3'},
    {t:'书里的小熊在睡觉。', e:'🐻', a:'assets/audio/s72_05.mp3'},
    {t:'宝宝把书轻轻放回去。', e:'📚', a:'assets/audio/s72_06.mp3'},
  ]},
  {title:'去超市买东西', parentTip:'问问她：去超市，你想买什么呀？', pages:[
    {t:'宝宝推着小推车，去超市。', e:'🛒', a:'assets/audio/s73_00.mp3'},
    {t:'先买红红的苹果。', e:'🍎', a:'assets/audio/s73_01.mp3'},
    {t:'再买黄黄的香蕉。', e:'🍌', a:'assets/audio/s73_02.mp3'},
    {t:'牛奶放在最上面，小心哦。', e:'🥛', a:'assets/audio/s73_03.mp3'},
    {t:'排队结账，滴——滴——', e:'🧾', a:'assets/audio/s73_04.mp3'},
    {t:'宝宝帮忙提小袋子。', e:'🛍️', a:'assets/audio/s73_05.mp3'},
    {t:'买好东西，回家做饭啦。', e:'🏠', a:'assets/audio/s73_06.mp3'},
  ]},
  {title:'旋转木马', parentTip:'和她一起：木马转呀转，叮叮当当！', pages:[
    {t:'游乐场里，有旋转木马。', e:'🎠', a:'assets/audio/s74_00.mp3'},
    {t:'白马、红马、花马，排排站。', e:'🐴', a:'assets/audio/s74_01.mp3'},
    {t:'宝宝坐上小白马，抓紧啦。', e:'🙌', a:'assets/audio/s74_02.mp3'},
    {t:'音乐响起，叮叮当当。', e:'🎵', a:'assets/audio/s74_03.mp3'},
    {t:'木马转呀转，上上下下。', e:'🎠', a:'assets/audio/s74_04.mp3'},
    {t:'像是飞起来一样，好开心。', e:'😄', a:'assets/audio/s74_05.mp3'},
    {t:'转了一圈又一圈，不想下来。', e:'✨', a:'assets/audio/s74_06.mp3'},
  ]},
  {title:'动物园一日游', parentTip:'问问她：你在动物园最想看哪种动物呀？', pages:[
    {t:'今天去动物园玩！', e:'🦁', a:'assets/audio/s75_00.mp3'},
    {t:'先看大熊猫，吃竹子。', e:'🐼', a:'assets/audio/s75_01.mp3'},
    {t:'再看长颈鹿，脖子高高。', e:'🦒', a:'assets/audio/s75_02.mp3'},
    {t:'大象喷水，哗啦啦。', e:'🐘', a:'assets/audio/s75_03.mp3'},
    {t:'猴子荡秋千，嗖嗖嗖。', e:'🐒', a:'assets/audio/s75_04.mp3'},
    {t:'宝宝学老虎叫：嗷呜——', e:'🐯', a:'assets/audio/s75_05.mp3'},
    {t:'逛累了，下次再来玩。', e:'👋', a:'assets/audio/s75_06.mp3'},
  ]},
  {title:'面包房香喷喷', parentTip:'问问她：你最爱吃什么面包呀？', pages:[
    {t:'面包房里，香喷喷。', e:'🍞', a:'assets/audio/s76_00.mp3'},
    {t:'面包师傅起得早。', e:'👨‍🍳', a:'assets/audio/s76_01.mp3'},
    {t:'揉面团，捏一捏。', e:'🙌', a:'assets/audio/s76_02.mp3'},
    {t:'放进烤箱，叮——', e:'🔥', a:'assets/audio/s76_03.mp3'},
    {t:'面包出炉啦，金黄金黄。', e:'🥖', a:'assets/audio/s76_04.mp3'},
    {t:'宝宝咬一口，软软甜甜。', e:'😋', a:'assets/audio/s76_05.mp3'},
    {t:'“谢谢面包师傅！”', e:'❤️', a:'assets/audio/s76_06.mp3'},
  ]},
  {title:'农场挤牛奶', parentTip:'问问她：牛奶是从哪里来的呀？', pages:[
    {t:'农场里，住着花奶牛。', e:'🐄', a:'assets/audio/s77_00.mp3'},
    {t:'奶牛吃青草，哞——哞——', e:'🌿', a:'assets/audio/s77_01.mp3'},
    {t:'农场阿姨轻轻挤牛奶。', e:'🥛', a:'assets/audio/s77_02.mp3'},
    {t:'白白的牛奶，流进桶里。', e:'🪣', a:'assets/audio/s77_03.mp3'},
    {t:'牛奶煮一煮，香香的。', e:'♨️', a:'assets/audio/s77_04.mp3'},
    {t:'宝宝喝一口：“真好喝！”', e:'😋', a:'assets/audio/s77_05.mp3'},
    {t:'谢谢奶牛，谢谢阿姨。', e:'❤️', a:'assets/audio/s77_06.mp3'},
  ]},
  {title:'厨师做蛋糕', parentTip:'和她一起：搅一搅，拌一拌，蛋糕香啦！', pages:[
    {t:'厨师叔叔要做大蛋糕。', e:'👨‍🍳', a:'assets/audio/s78_00.mp3'},
    {t:'倒面粉，加鸡蛋，搅一搅。', e:'🥚', a:'assets/audio/s78_01.mp3'},
    {t:'放进烤箱，等一等。', e:'⏰', a:'assets/audio/s78_02.mp3'},
    {t:'蛋糕出炉，香喷喷。', e:'🎂', a:'assets/audio/s78_03.mp3'},
    {t:'抹上奶油，白白的。', e:'🍦', a:'assets/audio/s78_04.mp3'},
    {t:'摆上草莓，红红的。', e:'🍓', a:'assets/audio/s78_05.mp3'},
    {t:'点上蜡烛，生日快乐！', e:'🎉', a:'assets/audio/s78_06.mp3'},
  ]},
  {title:'园丁种花', parentTip:'问问她：花儿喝什么长大呀？', pages:[
    {t:'园丁爷爷在花园里。', e:'👴', a:'assets/audio/s79_00.mp3'},
    {t:'松松土，挖小坑。', e:'🌱', a:'assets/audio/s79_01.mp3'},
    {t:'放花苗，扶正它。', e:'🌷', a:'assets/audio/s79_02.mp3'},
    {t:'浇浇水，喝饱饱。', e:'💧', a:'assets/audio/s79_03.mp3'},
    {t:'太阳照一照，暖暖的。', e:'☀️', a:'assets/audio/s79_04.mp3'},
    {t:'花儿开了，红的黄的紫的。', e:'💐', a:'assets/audio/s79_05.mp3'},
    {t:'园丁爷爷笑开了花。', e:'😊', a:'assets/audio/s79_06.mp3'},
  ]},
  {title:'小渔船回家', parentTip:'问问她：渔船带回了什么呀？', pages:[
    {t:'小渔船出海捕鱼啦。', e:'⛵', a:'assets/audio/s80_00.mp3'},
    {t:'撒下网，等一等。', e:'🎣', a:'assets/audio/s80_01.mp3'},
    {t:'拉起来，好多小鱼！', e:'🐟', a:'assets/audio/s80_02.mp3'},
    {t:'太阳落山，天边红红的。', e:'🌅', a:'assets/audio/s80_03.mp3'},
    {t:'渔船摇呀摇，往家开。', e:'🚤', a:'assets/audio/s80_04.mp3'},
    {t:'岸上的灯，亮了。', e:'💡', a:'assets/audio/s80_05.mp3'},
    {t:'今晚有鲜鲜的鱼汤喝。', e:'🍲', a:'assets/audio/s80_06.mp3'},
  ]},
  {title:'会飞的公交车', parentTip:'问问她：如果公交车会飞，你想去哪里呀？', pages:[
    {t:'有一辆公交车，长了翅膀。', e:'🚌', a:'assets/audio/s81_00.mp3'},
    {t:'它飞起来啦，飞到云朵边。', e:'☁️', a:'assets/audio/s81_01.mp3'},
    {t:'小朋友们趴着窗户看。', e:'👀', a:'assets/audio/s81_02.mp3'},
    {t:'看见高山，看见大海。', e:'🌊', a:'assets/audio/s81_03.mp3'},
    {t:'看见奶奶家的小院子。', e:'🏡', a:'assets/audio/s81_04.mp3'},
    {t:'公交车慢慢降落。', e:'🛬', a:'assets/audio/s81_05.mp3'},
    {t:'“明天，还带你们飞！”', e:'✨', a:'assets/audio/s81_06.mp3'},
  ]},
  {title:'拖拉机下乡', parentTip:'和她学拖拉机：突突突，突突突！', pages:[
    {t:'拖拉机，突突突。', e:'🚜', a:'assets/audio/s82_00.mp3'},
    {t:'它拉着满满一车干草。', e:'🌾', a:'assets/audio/s82_01.mp3'},
    {t:'开过小桥，嘎吱嘎吱。', e:'🌉', a:'assets/audio/s82_02.mp3'},
    {t:'开过田野，金黄金黄。', e:'🌻', a:'assets/audio/s82_03.mp3'},
    {t:'小羊看见了，咩咩叫。', e:'🐑', a:'assets/audio/s82_04.mp3'},
    {t:'把草送到牛棚里。', e:'🐄', a:'assets/audio/s82_05.mp3'},
    {t:'拖拉机停下来，喝口水。', e:'💧', a:'assets/audio/s82_06.mp3'},
  ]},
  {title:'妈妈的吻', parentTip:'问问她：妈妈的吻，是什么味道的呀？', pages:[
    {t:'洗完澡，香香的。', e:'🛁', a:'assets/audio/s83_00.mp3'},
    {t:'妈妈抱着宝宝，讲故事。', e:'📖', a:'assets/audio/s83_01.mp3'},
    {t:'讲完故事，灯关了。', e:'💡', a:'assets/audio/s83_02.mp3'},
    {t:'妈妈在宝宝额头上亲一下。', e:'💋', a:'assets/audio/s83_03.mp3'},
    {t:'“晚安，我的小宝贝。”', e:'🌙', a:'assets/audio/s83_04.mp3'},
    {t:'宝宝的心里，暖暖的。', e:'❤️', a:'assets/audio/s83_05.mp3'},
    {t:'带着妈妈的吻，做个好梦。', e:'💤', a:'assets/audio/s83_06.mp3'},
  ]},
  {title:'爸爸的肩膀', parentTip:'问问她：坐在爸爸肩膀上，能看见什么呀？', pages:[
    {t:'爸爸的肩膀，高高的。', e:'👨', a:'assets/audio/s84_00.mp3'},
    {t:'宝宝骑上去，哇——', e:'😄', a:'assets/audio/s84_01.mp3'},
    {t:'看见树顶的小鸟窝。', e:'🐦', a:'assets/audio/s84_02.mp3'},
    {t:'看见远处的大风车。', e:'🎡', a:'assets/audio/s84_03.mp3'},
    {t:'爸爸走稳稳，宝宝抓牢牢。', e:'🙌', a:'assets/audio/s84_04.mp3'},
    {t:'“爸爸，你是我的大山！”', e:'⛰️', a:'assets/audio/s84_05.mp3'},
    {t:'爸爸笑了，笑得眼睛弯弯。', e:'😊', a:'assets/audio/s84_06.mp3'},
  ]},
  {title:'奶奶的摇椅', parentTip:'问问她：奶奶的摇椅，摇起来像什么呀？', pages:[
    {t:'奶奶坐在摇椅上，摇呀摇。', e:'🪑', a:'assets/audio/s85_00.mp3'},
    {t:'宝宝搬个小凳子，坐在旁边。', e:'👧', a:'assets/audio/s85_01.mp3'},
    {t:'奶奶讲起小时候的故事。', e:'📖', a:'assets/audio/s85_02.mp3'},
    {t:'讲小猫，讲小桥，讲月亮。', e:'🌙', a:'assets/audio/s85_03.mp3'},
    {t:'摇椅吱呀吱呀，像唱歌。', e:'🎵', a:'assets/audio/s85_04.mp3'},
    {t:'宝宝听着听着，靠在奶奶身边。', e:'🤗', a:'assets/audio/s85_05.mp3'},
    {t:'奶奶的故事，讲也讲不完。', e:'❤️', a:'assets/audio/s85_06.mp3'},
  ]},
  {title:'我的好朋友', parentTip:'问问她：你的好朋友是谁呀？', pages:[
    {t:'乐乐是我的好朋友。', e:'👧👦', a:'assets/audio/s86_00.mp3'},
    {t:'我们一起搭积木。', e:'🧱', a:'assets/audio/s86_01.mp3'},
    {t:'一起滑滑梯。', e:'🛝', a:'assets/audio/s86_02.mp3'},
    {t:'我摔倒了，乐乐扶我起来。', e:'🤝', a:'assets/audio/s86_03.mp3'},
    {t:'乐乐哭了，我给他擦眼泪。', e:'😢', a:'assets/audio/s86_04.mp3'},
    {t:'好东西，我们一起分享。', e:'🍪', a:'assets/audio/s86_05.mp3'},
    {t:'好朋友，手拉手。', e:'❤️', a:'assets/audio/s86_06.mp3'},
  ]},
  {title:'对不起，没关系', parentTip:'问问她：不小心碰到别人，要说什么呀？', pages:[
    {t:'跑跑跑，哎呀，撞到乐乐了。', e:'💥', a:'assets/audio/s87_00.mp3'},
    {t:'乐乐的积木倒了，哗啦啦。', e:'🧱', a:'assets/audio/s87_01.mp3'},
    {t:'宝宝说：“对不起，我不是故意的。”', e:'🙇', a:'assets/audio/s87_02.mp3'},
    {t:'乐乐说：“没关系！”', e:'😊', a:'assets/audio/s87_03.mp3'},
    {t:'两个人一起重新搭。', e:'🧱', a:'assets/audio/s87_04.mp3'},
    {t:'搭得比原来还高！', e:'🏰', a:'assets/audio/s87_05.mp3'},
    {t:'说声对不起，心里亮堂堂。', e:'✨', a:'assets/audio/s87_06.mp3'},
  ]},
  {title:'大声说爱你', parentTip:'问问她：你最爱谁呀？大声说出来！', pages:[
    {t:'早上起来，宝宝对妈妈说。', e:'🌞', a:'assets/audio/s88_00.mp3'},
    {t:'“妈妈，我爱你！”', e:'❤️', a:'assets/audio/s88_01.mp3'},
    {t:'吃完早饭，对爸爸说。', e:'🍳', a:'assets/audio/s88_02.mp3'},
    {t:'“爸爸，我爱你！”', e:'💗', a:'assets/audio/s88_03.mp3'},
    {t:'看见奶奶，也大声说。', e:'👵', a:'assets/audio/s88_04.mp3'},
    {t:'“奶奶，我爱你！”', e:'💖', a:'assets/audio/s88_05.mp3'},
    {t:'爱要说出来，大家都开心。', e:'😊', a:'assets/audio/s88_06.mp3'},
  ]},
  {title:'梦里去旅行', parentTip:'问问她：你想在梦里去哪里呀？', pages:[
    {t:'宝宝睡着了，做起梦来。', e:'💤', a:'assets/audio/s89_00.mp3'},
    {t:'梦里，她骑上大鲸鱼。', e:'🐳', a:'assets/audio/s89_01.mp3'},
    {t:'鲸鱼带着她，游过大海。', e:'🌊', a:'assets/audio/s89_02.mp3'},
    {t:'飞上天，摘下一颗星星。', e:'⭐', a:'assets/audio/s89_03.mp3'},
    {t:'星星放在口袋里，亮晶晶。', e:'✨', a:'assets/audio/s89_04.mp3'},
    {t:'鲸鱼说：“天亮了，回家吧。”', e:'🌅', a:'assets/audio/s89_05.mp3'},
    {t:'宝宝睁开眼，笑眯眯。', e:'😊', a:'assets/audio/s89_06.mp3'},
  ]},
  {title:'影子好朋友', parentTip:'问问她：影子什么时候会躲起来呀？', pages:[
    {t:'太阳出来了，影子也来了。', e:'🌞', a:'assets/audio/s90_00.mp3'},
    {t:'宝宝走，影子也走。', e:'👣', a:'assets/audio/s90_01.mp3'},
    {t:'宝宝跳，影子也跳。', e:'🦘', a:'assets/audio/s90_02.mp3'},
    {t:'宝宝挥挥手，影子挥挥手。', e:'👋', a:'assets/audio/s90_03.mp3'},
    {t:'躲到大树下，影子不见了。', e:'🌳', a:'assets/audio/s90_04.mp3'},
    {t:'跑到太阳下，影子又出来啦。', e:'✨', a:'assets/audio/s90_05.mp3'},
    {t:'影子是我的好朋友。', e:'❤️', a:'assets/audio/s90_06.mp3'},
  ]},
  {title:'泡泡飞上天', parentTip:'和她一起：泡泡泡泡，飞呀飞！', pages:[
    {t:'宝宝拿起泡泡棒。', e:'🫧', a:'assets/audio/s91_00.mp3'},
    {t:'蘸一蘸，吹一吹。', e:'💨', a:'assets/audio/s91_01.mp3'},
    {t:'泡泡出来啦，圆圆的。', e:'⭕', a:'assets/audio/s91_02.mp3'},
    {t:'大泡泡，小泡泡，排着队。', e:'🫧', a:'assets/audio/s91_03.mp3'},
    {t:'太阳照一照，五颜六色。', e:'🌈', a:'assets/audio/s91_04.mp3'},
    {t:'泡泡飞上天，越飞越高。', e:'☁️', a:'assets/audio/s91_05.mp3'},
    {t:'啪——泡泡说再见啦。', e:'👋', a:'assets/audio/s91_06.mp3'},
  ]},
  {title:'积木城堡', parentTip:'问问她：你的城堡里，住着谁呀？', pages:[
    {t:'宝宝拿出积木，哗啦啦。', e:'🧱', a:'assets/audio/s92_00.mp3'},
    {t:'先搭一块大地基。', e:'🟦', a:'assets/audio/s92_01.mp3'},
    {t:'一块，两块，往上搭。', e:'🟥', a:'assets/audio/s92_02.mp3'},
    {t:'搭个城门，搭个高塔。', e:'🏰', a:'assets/audio/s92_03.mp3'},
    {t:'插上小旗子，飘呀飘。', e:'🚩', a:'assets/audio/s92_04.mp3'},
    {t:'小熊住进城堡里。', e:'🐻', a:'assets/audio/s92_05.mp3'},
    {t:'宝宝拍手：“我的城堡好棒！”', e:'👏', a:'assets/audio/s92_06.mp3'},
  ]},
  {title:'画画的小手', parentTip:'问问她：你想画一个什么呀？', pages:[
    {t:'宝宝拿起蜡笔，沙沙沙。', e:'🖍️', a:'assets/audio/s93_00.mp3'},
    {t:'画个太阳，红红的。', e:'☀️', a:'assets/audio/s93_01.mp3'},
    {t:'画座房子，方方的。', e:'🏠', a:'assets/audio/s93_02.mp3'},
    {t:'画朵小花，香香的。', e:'🌸', a:'assets/audio/s93_03.mp3'},
    {t:'画上爸爸妈妈和宝宝。', e:'👨‍👩‍👧', a:'assets/audio/s93_04.mp3'},
    {t:'手拉手，笑哈哈。', e:'😄', a:'assets/audio/s93_05.mp3'},
    {t:'把画贴在墙上，真漂亮！', e:'🖼️', a:'assets/audio/s93_06.mp3'},
  ]},
  {title:'我是小歌手', parentTip:'和她一起：啦啦啦，唱起来！', pages:[
    {t:'宝宝拿起小话筒。', e:'🎤', a:'assets/audio/s94_00.mp3'},
    {t:'清清嗓子，咳咳。', e:'😊', a:'assets/audio/s94_01.mp3'},
    {t:'啦啦啦，唱起歌来。', e:'🎵', a:'assets/audio/s94_02.mp3'},
    {t:'唱小星星，唱小兔子。', e:'🐰', a:'assets/audio/s94_03.mp3'},
    {t:'爸爸妈妈当观众，拍拍手。', e:'👏', a:'assets/audio/s94_04.mp3'},
    {t:'唱完歌，鞠个躬。', e:'🙇', a:'assets/audio/s94_05.mp3'},
    {t:'“谢谢大家，我是小歌手！”', e:'✨', a:'assets/audio/s94_06.mp3'},
  ]},
  {title:'萤火虫的灯', parentTip:'问问她：萤火虫的灯，是什么颜色的呀？', pages:[
    {t:'夏天的夜晚，黑黑的。', e:'🌙', a:'assets/audio/s95_00.mp3'},
    {t:'草丛里，亮起小灯。', e:'💡', a:'assets/audio/s95_01.mp3'},
    {t:'一闪，一闪，是萤火虫！', e:'✨', a:'assets/audio/s95_02.mp3'},
    {t:'它们提着灯笼飞呀飞。', e:'🏮', a:'assets/audio/s95_03.mp3'},
    {t:'给晚回家的小虫照路。', e:'🐛', a:'assets/audio/s95_04.mp3'},
    {t:'宝宝轻轻看，不吵它们。', e:'🤫', a:'assets/audio/s95_05.mp3'},
    {t:'小灯慢慢飞远了，晚安。', e:'💤', a:'assets/audio/s95_06.mp3'},
  ]},
  {title:'纸飞机飞呀飞', parentTip:'问问她：纸飞机要飞到谁的手里呀？', pages:[
    {t:'宝宝折了一架纸飞机。', e:'✈️', a:'assets/audio/s96_00.mp3'},
    {t:'哈一口气，扔出去。', e:'💨', a:'assets/audio/s96_01.mp3'},
    {t:'纸飞机飞呀飞，摇摇摆摆。', e:'〰️', a:'assets/audio/s96_02.mp3'},
    {t:'飞过花丛，飞过小溪。', e:'🌸', a:'assets/audio/s96_03.mp3'},
    {t:'落在奶奶的脚边。', e:'👵', a:'assets/audio/s96_04.mp3'},
    {t:'奶奶捡起来，笑眯眯。', e:'😊', a:'assets/audio/s96_05.mp3'},
    {t:'纸飞机带着宝宝的问候。', e:'❤️', a:'assets/audio/s96_06.mp3'},
  ]},
  {title:'风筝和风', parentTip:'问问她：风筝飞得高，要谢谢谁呀？', pages:[
    {t:'春风吹，风筝飞。', e:'🪁', a:'assets/audio/s97_00.mp3'},
    {t:'宝宝拉着线，跑起来。', e:'🏃', a:'assets/audio/s97_01.mp3'},
    {t:'风筝摇摇摆摆，升上天。', e:'💨', a:'assets/audio/s97_02.mp3'},
    {t:'越飞越高，像只大鸟。', e:'🐦', a:'assets/audio/s97_03.mp3'},
    {t:'云朵说：“你飞得真高！”', e:'☁️', a:'assets/audio/s97_04.mp3'},
    {t:'线儿紧紧的，不能松手哦。', e:'🙌', a:'assets/audio/s97_05.mp3'},
    {t:'风筝是风的好朋友。', e:'❤️', a:'assets/audio/s97_06.mp3'},
  ]},
  {title:'沙滩城堡', parentTip:'问问她：沙滩城堡会被海浪怎么样呀？', pages:[
    {t:'宝宝在沙滩上玩沙子。', e:'🏖️', a:'assets/audio/s98_00.mp3'},
    {t:'装满一桶沙，扣下来。', e:'🪣', a:'assets/audio/s98_01.mp3'},
    {t:'拍一拍，一座小塔好啦。', e:'🏰', a:'assets/audio/s98_02.mp3'},
    {t:'再扣一个，连成城堡。', e:'✨', a:'assets/audio/s98_03.mp3'},
    {t:'插上贝壳当窗户。', e:'🐚', a:'assets/audio/s98_04.mp3'},
    {t:'海浪来了，哗——城堡不见了。', e:'🌊', a:'assets/audio/s98_05.mp3'},
    {t:'宝宝笑着说：“再盖一个！”', e:'😄', a:'assets/audio/s98_06.mp3'},
  ]},
  {title:'月亮婆婆讲故事', parentTip:'问问她：今晚想听月亮婆婆讲什么故事呀？', pages:[
    {t:'天黑了，月亮婆婆出来了。', e:'🌙', a:'assets/audio/s99_00.mp3'},
    {t:'她坐在云朵上，打开故事书。', e:'📖', a:'assets/audio/s99_01.mp3'},
    {t:'小星星们围过来听。', e:'⭐', a:'assets/audio/s99_02.mp3'},
    {t:'讲小熊，讲小船，讲大海。', e:'🌊', a:'assets/audio/s99_03.mp3'},
    {t:'声音轻轻的，柔柔的。', e:'🎵', a:'assets/audio/s99_04.mp3'},
    {t:'宝宝听着听着，眼睛闭上了。', e:'😴', a:'assets/audio/s99_05.mp3'},
    {t:'月亮婆婆说：“晚安，好孩子。”', e:'💤', a:'assets/audio/s99_06.mp3'},
  ]},
  {title:'小闹钟滴答', parentTip:'问问她：小闹钟每天早上做什么呀？', pages:[
    {t:'床头有个小闹钟。', e:'⏰', a:'assets/audio/s100_00.mp3'},
    {t:'滴答滴答，它走个不停。', e:'🎵', a:'assets/audio/s100_01.mp3'},
    {t:'早上七点，铃铃铃——', e:'🔔', a:'assets/audio/s100_02.mp3'},
    {t:'“宝宝起床啦，太阳晒屁股啦！”', e:'🌞', a:'assets/audio/s100_03.mp3'},
    {t:'宝宝揉揉眼睛，坐起来。', e:'😊', a:'assets/audio/s100_04.mp3'},
    {t:'伸个懒腰：“早上好！”', e:'🙌', a:'assets/audio/s100_05.mp3'},
    {t:'小闹钟是守时的好朋友。', e:'⏰', a:'assets/audio/s100_06.mp3'},
  ]},
];
const PALETTE = ['#FF5A5A','#FF9A3D','#FFD93D','#52C75A','#2EC4B6','#4FACFE','#7B4DFF','#FF7BAC','#8D5A3B','#444444','#B8B8B8','#FFFFFF'];
/* ================= 通用 ================= */
// 存储被禁用或写满时，当前会话仍可使用。
const memoryStorage = new Map();
const parkStorage = {
  getItem(key){
    if(memoryStorage.has(key)) return memoryStorage.get(key);
    try{ return localStorage.getItem(key); }catch(e){ return null; }
  },
  setItem(key, value){
    const text = String(value);
    memoryStorage.set(key, text);
    try{ localStorage.setItem(key, text); }catch(e){}
  }
};
function storedArray(key){
  try{ const value = JSON.parse(parkStorage.getItem(key) || '[]'); return Array.isArray(value) ? value : []; }
  catch(e){ return []; }
}
let stars = Math.max(0, parseInt(parkStorage.getItem('park_stars'), 10) || 0);
let curAudio = null;
let curAudioUrl = null, audioRequest = 0;
let narrator = parkStorage.getItem('park_narrator') === 'm' ? 'm' : 'f';
function setNarrator(v){
  if(!['f','m'].includes(v)) return;
  narrator = v;
  try{ parkStorage.setItem('park_narrator', v); }catch(e){}
  markNarrator();
}
function markNarrator(){
  const f = document.getElementById('nvF'), m = document.getElementById('nvM');
  if(f) f.setAttribute('aria-pressed', String(narrator === 'f'));
  if(m) m.setAttribute('aria-pressed', String(narrator === 'm'));
}
try{ markNarrator(); }catch(e){}
function voiceSrc(src){
  if(narrator !== 'm' || typeof src !== 'string') return src;
  if(/^assets\/audio\/(s\d|a_|ph\/|pm\/)/.test(src)) return src.replace(/\.mp3($|\?)/, '_m.mp3$1');
  return src;
}
function play(src, onEnd = null){
  stopAll();
  if(document.hidden) return;
  try{
    const vs = voiceSrc(src);
    const url = vs + (/^blob:/.test(vs) || String(vs).includes('?') ? '' : '?vv=2');
    const audio = new Audio(url);
    curAudio = audio;
    audio.onplay = audio.onpause = ()=>{ if(typeof syncPlayback === 'function') syncPlayback(); };
    audio.onended = ()=>{ if(typeof syncPlayback === 'function') syncPlayback(); if(curAudio === audio && onEnd) onEnd(); };
    if(vs !== src){
      audio.onerror = ()=>{
        if(curAudio !== audio) return;
        audio.onerror = null;
        audio.src = src + (String(src).includes('?') ? '' : '?vv=2');
        audio.play().catch(()=>{});
      };
    }
    audio.play().then(()=>{ if(typeof syncPlayback === 'function') syncPlayback(); }).catch(()=>{});
  }catch(e){}
}
function stopAll(){
  audioRequest++;
  if(curAudio){ curAudio.onended = null; curAudio.onerror = null; curAudio.pause(); curAudio = null; }
  if(curAudioUrl){ URL.revokeObjectURL(curAudioUrl); curAudioUrl = null; }
  try{ if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){}
}
/* 中文语音优选：优先用设备自带中文嗓音（iOS 上更自然）， fallback 系统默认 */
let zhVoice = null;
function pickZhVoice(){
  try{
    const vs = speechSynthesis.getVoices();
    zhVoice = vs.find(v=>/^zh/i.test(v.lang) && /ting|yun|mei|xiao|yao|chen/i.test(v.name))
      || vs.find(v=>/^zh/i.test(v.lang));
  }catch(e){}
}
try{ pickZhVoice(); speechSynthesis.onvoiceschanged = pickZhVoice; }catch(e){}
function say(text){
  if(document.hidden) return;
  try{
    if(window.VOICE_MAP && VOICE_MAP[text]){ play('assets/audio/' + VOICE_MAP[text] + '.mp3'); return; }
    stopAll();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN'; u.rate = 0.92; u.pitch = 1.05;
    if(zhVoice) u.voice = zhVoice;
    speechSynthesis.speak(u);
  }catch(e){}
}
function addStar(){
  stars++;
  parkStorage.setItem('park_stars', stars);
  document.querySelectorAll('.starN').forEach(el=>el.textContent = stars);
  document.getElementById('homeStars').textContent = stars;
  const ws = document.getElementById('wStars');
  if(ws) ws.textContent = stars;
}

/* ================= 首页小组件 ================= */
function renderHome(){
  const now = new Date(), h = now.getHours();
  const g = h<6 ? '夜深了' : h<9 ? '早上好' : h<12 ? '上午好' : h<14 ? '中午好' : h<18 ? '下午好' : '晚上好';
  const week = ['日','一','二','三','四','五','六'][now.getDay()];
  document.getElementById('greet').textContent = `${g}，宝宝`;
  document.getElementById('wDate').textContent = `${now.getMonth()+1}月${now.getDate()}日 周${week}`;
  // 首页推荐采用本地插画，不依赖外站照片是否可访问。
  const pool = ANIMALS.filter(a=>a.img && a.img.startsWith('assets/')).map(a=>({
    n:a.name, e:a.emoji, c:'动物朋友', s:a.sound, f:a.fact, img:a.img, en:a.en
  }));
  if(pool.length){
    const a = pool[Math.floor(Date.now()/864e5) % pool.length];
    document.getElementById('wDailyImg').src = a.img;
    document.getElementById('wDailyName').textContent = a.n;
    document.getElementById('wDailyEn').textContent = a.en || a.s || '';
    document.getElementById('wDaily').onclick = ()=>{ zooList = pool; openZooDetail(a, pool.indexOf(a)); };
  }
  document.getElementById('wStars').textContent = stars;
}
renderHome();
let screenVersion = 0;
const screenTasks = new Set(), mountedScreens = new Set();
function screenLater(callback, delay){
  const version = screenVersion;
  const timer = setTimeout(()=>{
    screenTasks.delete(timer);
    if(version === screenVersion) callback();
  }, delay);
  screenTasks.add(timer);
  return timer;
}
function clearScreenTasks(){
  screenVersion++;
  screenTasks.forEach(timer=>clearTimeout(timer));
  screenTasks.clear();
}
function mountScreen(id){
  if(mountedScreens.has(id)) return;
  switch(id){
    case 'animals': renderAnimals(); break;
    case 'shapes': renderShapes(); break;
    case 'colors': renderColors(); break;
    case 'candy': renderCandy(); break;
    case 'hanzipic': renderHanziCards(); break;
    case 'hanzi': renderHzHub(); break;
    case 'storylist': renderStoryChips(); renderStories(); break;
    case 'coloring': renderColorCats(); break;
  }
  mountedScreens.add(id);
}
function go(id){
  const target = document.getElementById(id);
  if(!target || !target.classList.contains('screen')) return;
  clearScreenTasks();
  stopAll();
  nightStopBreath();
  if(bubTimer){ clearInterval(bubTimer); bubTimer = null; }
  if(mr && mr.state === 'recording'){ try{ mr.stop(); }catch(e){} }
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  target.classList.add('active');
  mountScreen(id);
  if(id === 'home') renderHome();
  if(id === 'animals') updateAcount();
  if(id === 'hanzipic') updateHzCount();
  if(typeof enhanceScreen === 'function') enhanceScreen(target);
}
// 温柔收尾（家长门可改 10/15/20 分钟）
let restMin = [10,15,20].includes(+parkStorage.getItem('park_rest_min')) ? +parkStorage.getItem('park_rest_min') : 15;
let restTimer = null;
function scheduleRest(){
  if(restTimer) clearTimeout(restTimer);
  restTimer = setTimeout(()=>{
    clearScreenTasks(); stopAll(); nightStopBreath();
    if(typeof showOverlay === 'function') showOverlay('restModal'); else document.getElementById('restModal').classList.add('show');
  }, restMin*60*1000);
}
scheduleRest();
function closeRest(){ closeOverlay('restModal'); go('home'); scheduleRest(); }

/* ================= 动物卡 ================= */
const acar = document.getElementById('acar');
function renderAnimals(){
ANIMALS.forEach((a,i)=>{
  const card = document.createElement('div');
  card.className = 'acard';
  card.innerHTML = (a.img
      ? `<img loading="lazy" src="${a.img}" alt="${a.name}">`
      : `<div class="bigemoji">${a.emoji}</div>`)
    + `<h2>${a.name}</h2>`
    + (a.en ? `<button class="enbtn" aria-label="读英文"><span>${a.en}</span><img src="assets/icons/speaker.webp" alt=""></button>` : '')
    + `<div class="snd">“${a.sound}”</div><div class="fact">${a.fact}</div>`;
  const media = card.querySelector('img') || card.querySelector('.bigemoji');
  media.onclick = ()=>{
    media.classList.remove('bounce'); void media.offsetWidth; media.classList.add('bounce');
    if(a.audio) play(a.audio); else say(a.name);
  };
  const enbtn = card.querySelector('.enbtn');
  if(enbtn) enbtn.onclick = (ev)=>{ ev.stopPropagation(); sayEn(a.en); };
  acar.appendChild(card);
});
}
function updateAcount(){
  if(!acar.clientWidth) return;
  const i = Math.round(acar.scrollLeft / acar.clientWidth);
  document.getElementById('acount').textContent = `${i+1} / ${ANIMALS.length}`;
}
acar.addEventListener('scroll', updateAcount, {passive:true});

/* ================= 找一找（动物世界同类出题） ================= */
let findTarget = null;
function startZooQuiz(){
  const pool = zooList.filter(a=>a.img);
  if(pool.length < 3){ say('这个分类的照片还不够多，换个分类试试'); return; }
  startFind(pool);
}
function startFind(pool){
  let answered = false;
  const list = (pool && pool.length >= 3) ? pool : ANIMALS_ALL.filter(a=>a.img);
  const opts = [...list].sort(()=>Math.random()-.5).slice(0,3);
  findTarget = opts[Math.floor(Math.random()*3)];
  const tname = findTarget.n || findTarget.name;
  document.getElementById('findQ').textContent = `哪个是${tname}？`;
  document.getElementById('findFb').textContent = '';
  const g = document.getElementById('findGrid');
  g.innerHTML = '';
  opts.forEach(a=>{
    const nm = a.n || a.name, em = a.e || a.emoji;
    const b = document.createElement('div');
    b.className = 'fopt';
    b.innerHTML = a.img ? `<img src="${a.img}" alt="${nm}">` : `<div class="bigemoji">${em}</div>`;
    b.onclick = ()=>{
      if(answered) return;
      if(nm === tname){
        answered = true;
        b.classList.add('ok');
        document.getElementById('findFb').innerHTML = '<img class="starico" src="assets/icons/star.webp" alt="星"> 答对啦！';
        if(a.audio) play(a.audio); else say(`答对啦，${nm}`);
        addStar();
        screenLater(()=>startFind(list), 1800);
      } else {
        document.getElementById('findFb').textContent = '再试试';
        say('再试试');
      }
    };
    g.appendChild(b);
  });
  go('findit');
  askFind();
}
function askFind(){
  if(findTarget) say(`哪个是${findTarget.n || findTarget.name}？`);
}

/* ================= 数一数 ================= */
const COUNT_EMOJI = [['🍎','苹果'],['🐤','小鸡'],['⭐','星星'],['🍓','草莓'],['🐟','小鱼'],['🌼','小花'],['🍇','葡萄'],['🐶','小狗'],['🚗','小汽车'],['🎈','气球'],['🐚','贝壳'],['🌙','月亮'],['🍉','西瓜'],['🐰','小兔'],['🚂','小火车'],['⚽','皮球'],['🦋','蝴蝶'],['🍪','饼干'],['🐠','热带鱼'],['🍩','甜甜圈'],['🐢','乌龟'],['🍒','樱桃'],['🧸','小熊'],['🪁','风筝'],['🍐','梨'],['🍑','桃子'],['🍍','菠萝'],['🥝','猕猴桃'],['🍋','柠檬'],['🥥','椰子'],['🫐','蓝莓'],['🥕','胡萝卜'],['🌽','玉米'],['🍆','茄子'],['🥔','土豆'],['🍅','番茄'],['🥦','西兰花'],['🍞','面包'],['🧀','奶酪'],['🥚','鸡蛋'],['🍦','冰淇淋'],['🍰','蛋糕'],['🥛','牛奶'],['🍿','爆米花'],['🥟','饺子'],['🍜','面条'],['🧁','纸杯蛋糕'],['🐭','小老鼠'],['🐹','仓鼠'],['🦊','小狐狸'],['🐼','熊猫'],['🐨','考拉'],['🦁','小狮子'],['🐯','小老虎'],['🐸','青蛙'],['🐵','小猴子'],['🐔','母鸡'],['🐧','企鹅'],['🐦','小鸟'],['🦆','小鸭子'],['🦉','猫头鹰'],['🐝','小蜜蜂'],['🐌','蜗牛'],['🐞','瓢虫'],['🦀','小螃蟹'],['🐙','小章鱼'],['🐬','小海豚'],['🐳','小鲸鱼'],['🦕','小恐龙'],['🦄','独角兽'],['🐴','小马'],['🐷','小猪'],['🌵','仙人掌'],['🌴','棕榈树'],['🌳','大树'],['🌲','松树'],['🌱','小草'],['🌷','郁金香'],['🌻','向日葵'],['🌹','玫瑰花'],['🍄','小蘑菇'],['🌈','彩虹'],['☁️','白云'],['❄️','雪花'],['💧','小水滴'],['🌊','海浪'],['🎁','礼物'],['🎀','蝴蝶结'],['🧩','拼图'],['🪀','悠悠球'],['🎲','骰子'],['✈️','小飞机'],['🚀','小火箭'],['⛵','小帆船'],['🚲','小自行车'],['🏀','篮球'],['🎾','网球'],['🎺','小喇叭'],['🥁','小鼓'],['🖍️','蜡笔']];
const NUM_WORD = ['一','二','三','四','五','六','七','八','九','十'];
let countN = 0, countName = '';
function startCount(){
  let answered = false;
  countN = 1 + Math.floor(Math.random()*10);
  const pick = COUNT_EMOJI[Math.floor(Math.random()*COUNT_EMOJI.length)];
  const ce = pick[0]; countName = pick[1];
  document.getElementById('countQ').textContent = `有几个${countName}？`;
  document.getElementById('countFb').textContent = '';
  const box = document.getElementById('countItems');
  box.innerHTML = '';
  for(let i=0;i<countN;i++){
    const d = document.createElement('div');
    d.className = 'citem';
    d.textContent = ce;
    d.onclick = ()=>{
      d.classList.remove('bounce'); void d.offsetWidth; d.classList.add('bounce');
      say(NUM_WORD[i]);
    };
    box.appendChild(d);
  }
  const opts = new Set([countN]);
  while(opts.size<3){ opts.add(1+Math.floor(Math.random()*10)); }
  const arr = [...opts].sort(()=>Math.random()-.5);
  const ob = document.getElementById('countOpts');
  ob.innerHTML = '';
  arr.forEach(n=>{
    const b = document.createElement('button');
    b.className = 'copt';
    b.textContent = n;
    b.onclick = ()=>{
      if(answered) return;
      if(n===countN){
        answered = true;
        document.getElementById('countFb').innerHTML = '<img class="starico" src="assets/icons/star.webp" alt="星"> 答对啦！';
        say('答对啦！');
        addStar();
        screenLater(startCount, 1800);
      } else {
        document.getElementById('countFb').textContent = '再数数';
        say('再数数');
      }
    };
    ob.appendChild(b);
  });
  go('count');
  askCount();
}
function askCount(){ if(countN) say(`有几个${countName}？`); }

/* ================= 认形状 ================= */
const SHAPES = [
  {n:'圆形', c:'#FF6B6B', svg:'<circle cx="60" cy="60" r="48"/>'},
  {n:'正方形', c:'#FFA94D', svg:'<rect x="14" y="14" width="92" height="92" rx="12"/>'},
  {n:'三角形', c:'#FCC419', svg:'<polygon points="60,12 110,104 10,104"/>'},
  {n:'长方形', c:'#69DB7C', svg:'<rect x="8" y="32" width="104" height="56" rx="12"/>'},
  {n:'星形', c:'#4DABF7', svg:'<polygon points="60,8 74,44 112,44 81,66 93,102 60,79 27,102 39,66 8,44 46,44"/>'},
  {n:'心形', c:'#F783AC', svg:'<path d="M60 100 C20 70 8 45 20 28 C30 14 50 16 60 32 C70 16 90 14 100 28 C112 45 100 70 60 100 Z"/>'},
  {n:'椭圆形', c:'#9775FA', svg:'<ellipse cx="60" cy="60" rx="50" ry="33"/>'},
  {n:'菱形', c:'#3BC9DB', svg:'<polygon points="60,10 110,60 60,110 10,60"/>'},
  {n:'五边形', c:'#FF8787', svg:'<polygon points="60,8 110,45 91,102 29,102 10,45"/>'},
  {n:'六边形', c:'#E599F7', svg:'<polygon points="60,8 105,34 105,86 60,112 15,86 15,34"/>'},
  {n:'梯形', c:'#66D9E5', svg:'<polygon points="35,15 85,15 105,105 15,105"/>'},
  {n:'平行四边形', c:'#FFC078', svg:'<polygon points="40,15 105,15 80,105 15,105"/>'},
  {n:'月牙形', c:'#FCC419', svg:'<path d="M80 12 A48 48 0 1 0 80 108 A36 36 0 1 1 80 12 Z"/>'},
  {n:'十字形', c:'#B197FC', svg:'<polygon points="45,10 75,10 75,45 110,45 110,75 75,75 75,110 45,110 45,75 10,75 10,45 45,45"/>'},
  {n:'箭头形', c:'#63E6BE', svg:'<polygon points="10,45 65,45 65,20 110,60 65,100 65,75 10,75"/>'},
  {n:'水滴形', c:'#74C0FC', svg:'<path d="M60 12 C60 12 18 62 18 82 A42 42 0 0 0 102 82 C102 62 60 12 60 12 Z"/>'},
  {n:'扇形', c:'#FFD43B', svg:'<path d="M60 60 L110 60 A50 50 0 0 0 60 10 Z"/>'},
  {n:'半圆形', c:'#A9E34B', svg:'<path d="M10 90 A50 50 0 0 1 110 90 Z"/>'},
  {n:'橄榄形', c:'#94D82D', svg:'<path d="M60 15 C90 40 90 80 60 105 C30 80 30 40 60 15 Z"/>'},
  {n:'八边形', c:'#FFA8A8', svg:'<polygon points="40,8 80,8 112,40 112,80 80,112 40,112 8,80 8,40"/>'},
  {n:'七边形', c:'#FF6B6B', svg:'<polygon points="60.0,10.0 99.1,28.8 108.7,71.1 81.7,105.0 38.3,105.0 11.3,71.1 20.9,28.8"/>'},
  {n:'九边形', c:'#4DABF7', svg:'<polygon points="60.0,10.0 92.1,21.7 109.2,51.3 103.3,85.0 77.1,107.0 42.9,107.0 16.7,85.0 10.8,51.3 27.9,21.7"/>'},
  {n:'十边形', c:'#69DB7C', svg:'<polygon points="60.0,10.0 89.4,19.5 107.6,44.5 107.6,75.5 89.4,100.5 60.0,110.0 30.6,100.5 12.4,75.5 12.4,44.5 30.6,19.5"/>'},
  {n:'十二边形', c:'#FFD43B', svg:'<polygon points="60.0,10.0 85.0,16.7 103.3,35.0 110.0,60.0 103.3,85.0 85.0,103.3 60.0,110.0 35.0,103.3 16.7,85.0 10.0,60.0 16.7,35.0 35.0,16.7"/>'},
  {n:'六角星', c:'#B197FC', svg:'<polygon points="60.0,10.0 71.0,40.9 103.3,35.0 82.0,60.0 103.3,85.0 71.0,79.1 60.0,110.0 49.0,79.1 16.7,85.0 38.0,60.0 16.7,35.0 49.0,40.9"/>'},
  {n:'八角星', c:'#FFA94D', svg:'<polygon points="60.0,10.0 68.4,39.7 95.4,24.6 80.3,51.6 110.0,60.0 80.3,68.4 95.4,95.4 68.4,80.3 60.0,110.0 51.6,80.3 24.6,95.4 39.7,68.4 10.0,60.0 39.7,51.6 24.6,24.6 51.6,39.7"/>'},
  {n:'上箭头', c:'#63E6BE', svg:'<polygon points="10,45 65,45 65,20 110,60 65,100 65,75 10,75" transform="rotate(-90 60 60)"/>'},
  {n:'下箭头', c:'#F783AC', svg:'<polygon points="10,45 65,45 65,20 110,60 65,100 65,75 10,75" transform="rotate(90 60 60)"/>'},
  {n:'左箭头', c:'#74C0FC', svg:'<polygon points="10,45 65,45 65,20 110,60 65,100 65,75 10,75" transform="rotate(180 60 60)"/>'},
  {n:'半月形', c:'#E599F7', svg:'<path d="M60 12 A48 48 0 0 1 60 108 Z"/>'},
  {n:'娥眉月形', c:'#FFC078', svg:'<path d="M72 14 A46 46 0 1 0 72 106 A34 34 0 1 1 72 14 Z"/>'},
  {n:'正方体', c:'#8CE99A', svg:'<polygon points="60,12 96,32 60,52 24,32" fill-opacity=".55"/><polygon points="24,32 60,52 60,104 24,84" fill-opacity=".8"/><polygon points="96,32 60,52 60,104 96,84"/>'},
  {n:'圆柱体', c:'#66D9E5', svg:'<rect x="28" y="38" width="64" height="44"/><ellipse cx="60" cy="38" rx="32" ry="11"/><ellipse cx="60" cy="82" rx="32" ry="11" fill-opacity=".7"/>'},
  {n:'圆锥体', c:'#FCC419', svg:'<polygon points="60,14 94,92 26,92"/><ellipse cx="60" cy="92" rx="34" ry="10" fill-opacity=".7"/>'},
  {n:'球体', c:'#A9E34B', svg:'<circle cx="60" cy="60" r="44"/><ellipse cx="45" cy="42" rx="14" ry="9" fill="#fff" fill-opacity=".55" transform="rotate(-30 45 42)"/>'},
  {n:'字母A', c:'#FF8787', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">A</text>'},
  {n:'字母B', c:'#3BC9DB', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">B</text>'},
  {n:'字母C', c:'#D0BFFF', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">C</text>'},
  {n:'字母D', c:'#FFA8A8', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">D</text>'},
  {n:'字母E', c:'#94D82D', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">E</text>'},
  {n:'字母F', c:'#FF6B6B', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">F</text>'},
  {n:'字母G', c:'#4DABF7', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">G</text>'},
  {n:'字母H', c:'#69DB7C', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">H</text>'},
  {n:'字母I', c:'#FFD43B', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">I</text>'},
  {n:'字母J', c:'#B197FC', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">J</text>'},
  {n:'字母K', c:'#FFA94D', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">K</text>'},
  {n:'字母L', c:'#63E6BE', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">L</text>'},
  {n:'字母M', c:'#F783AC', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">M</text>'},
  {n:'字母N', c:'#74C0FC', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">N</text>'},
  {n:'字母O', c:'#E599F7', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">O</text>'},
  {n:'字母P', c:'#FFC078', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">P</text>'},
  {n:'字母Q', c:'#8CE99A', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">Q</text>'},
  {n:'字母R', c:'#66D9E5', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">R</text>'},
  {n:'字母S', c:'#FCC419', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">S</text>'},
  {n:'字母T', c:'#A9E34B', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">T</text>'},
  {n:'字母U', c:'#FF8787', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">U</text>'},
  {n:'字母V', c:'#3BC9DB', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">V</text>'},
  {n:'字母W', c:'#D0BFFF', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">W</text>'},
  {n:'字母X', c:'#FFA8A8', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">X</text>'},
  {n:'字母Y', c:'#94D82D', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">Y</text>'},
  {n:'字母Z', c:'#FF6B6B', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">Z</text>'},
  {n:'数字0', c:'#4DABF7', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">0</text>'},
  {n:'数字1', c:'#69DB7C', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">1</text>'},
  {n:'数字2', c:'#FFD43B', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">2</text>'},
  {n:'数字3', c:'#B197FC', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">3</text>'},
  {n:'数字4', c:'#FFA94D', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">4</text>'},
  {n:'数字5', c:'#63E6BE', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">5</text>'},
  {n:'数字6', c:'#F783AC', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">6</text>'},
  {n:'数字7', c:'#74C0FC', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">7</text>'},
  {n:'数字8', c:'#E599F7', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">8</text>'},
  {n:'数字9', c:'#FFC078', svg:'<text x="60" y="84" text-anchor="middle" font-size="74" font-weight="900" font-family="system-ui,sans-serif">9</text>'},
  {n:'云朵形', c:'#8CE99A', svg:'<circle cx="38" cy="68" r="17"/><circle cx="60" cy="56" r="22"/><circle cx="82" cy="68" r="17"/><rect x="26" y="66" width="68" height="20" rx="10"/>'},
  {n:'雪花形', c:'#74C0FC', svg:'<path d="M60 14 V106 M21 37 L99 83 M21 83 L99 37" stroke="#74C0FC" stroke-width="9" stroke-linecap="round" fill="none"/>'},
  {n:'闪电形', c:'#FCC419', svg:'<polygon points="68,10 30,68 55,68 48,110 90,50 62,50"/>'},
  {n:'树叶形', c:'#A9E34B', svg:'<path d="M60 10 C95 40 95 80 60 110 C25 80 25 40 60 10 Z"/><path d="M60 28 V92" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>'},
  {n:'花朵形', c:'#FF8787', svg:'<circle cx="60" cy="28" r="16"/><circle cx="91" cy="51" r="16"/><circle cx="79" cy="85" r="16"/><circle cx="41" cy="85" r="16"/><circle cx="29" cy="51" r="16"/><circle cx="60" cy="60" r="12" fill="#fff" fill-opacity=".65"/>'},
  {n:'太阳形', c:'#3BC9DB', svg:'<circle cx="60" cy="60" r="24"/><path d="M60 12 V24 M60 96 V108 M12 60 H24 M96 60 H108 M26 26 L34 34 M86 86 L94 94 M94 26 L86 34 M34 86 L26 94" stroke-width="8" stroke-linecap="round" fill="none" stroke="#3BC9DB"/>'},
  {n:'房子形', c:'#D0BFFF', svg:'<polygon points="60,12 108,58 100,58 100,108 20,108 20,58 12,58"/>'},
  {n:'船形', c:'#FFA8A8', svg:'<polygon points="18,68 102,68 82,100 38,100"/><rect x="56" y="22" width="8" height="46"/><polygon points="68,26 68,60 98,60"/>'},
  {n:'皇冠形', c:'#94D82D', svg:'<polygon points="20,88 28,44 48,64 60,28 72,64 92,44 100,88"/><rect x="20" y="88" width="80" height="10" rx="5"/>'},
  {n:'钻石形', c:'#FF6B6B', svg:'<polygon points="35,28 85,28 108,54 60,104 12,54"/><path d="M12 54 H108 M35 28 L48 54 L60 104 M85 28 L72 54 L60 104" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>'},
  {n:'盾牌形', c:'#4DABF7', svg:'<path d="M60 10 L100 28 V60 C100 86 80 100 60 108 C40 100 20 86 20 60 V28 Z"/>'},
  {n:'风筝形', c:'#69DB7C', svg:'<polygon points="60,10 90,55 60,100 30,55"/><path d="M30 55 H90 M60 10 V100" stroke="#fff" stroke-width="4" fill="none" opacity=".7"/>'},
  {n:'圆环形', c:'#FF8787', svg:'<circle cx="60" cy="60" r="38" fill="none" stroke="#FF8787" stroke-width="18"/>'},
  {n:'问号形', c:'#B197FC', svg:'<text x="60" y="92" text-anchor="middle" font-size="88" font-weight="900" font-family="system-ui,sans-serif">?</text>'},
  {n:'感叹号形', c:'#FFA94D', svg:'<text x="60" y="92" text-anchor="middle" font-size="88" font-weight="900" font-family="system-ui,sans-serif">!</text>'},
  {n:'波浪形', c:'#63E6BE', svg:'<path d="M10 60 q15-25 30 0 t30 0 t30 0" fill="none" stroke="#63E6BE" stroke-width="10" stroke-linecap="round"/>'},
  {n:'之字形', c:'#F783AC', svg:'<path d="M18 24 L58 24 L38 58 L78 58 L52 96" fill="none" stroke="#F783AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'},
  {n:'螺旋形', c:'#74C0FC', svg:'<path d="M60 60 m0 -4 a4 4 0 0 1 4 4 a9 9 0 0 1 -9 9 a16 16 0 0 1 -16 -16 a25 25 0 0 1 25 -25 a36 36 0 0 1 36 36 a48 48 0 0 1 -48 48" fill="none" stroke="#74C0FC" stroke-width="8" stroke-linecap="round"/>'},
  {n:'同心圆形', c:'#E599F7', svg:'<circle cx="60" cy="60" r="42" fill="none" stroke="#E599F7" stroke-width="9"/><circle cx="60" cy="60" r="26" fill="none" stroke="#E599F7" stroke-width="9"/><circle cx="60" cy="60" r="10"/>'},
  {n:'蘑菇形', c:'#FFC078', svg:'<path d="M14 58 a46 34 0 0 1 92 0 Z"/><rect x="48" y="58" width="24" height="42" rx="10"/><circle cx="42" cy="40" r="6" fill="#fff" opacity=".8"/><circle cx="70" cy="32" r="5" fill="#fff" opacity=".8"/>'},
  {n:'铃铛形', c:'#8CE99A', svg:'<path d="M60 18 c-22 0 -32 18 -32 40 v16 l-10 14 h84 l-10 -14 v-16 c0 -22 -10 -40 -32 -40 Z"/><circle cx="60" cy="100" r="8"/>'},
  {n:'气球形', c:'#66D9E5', svg:'<ellipse cx="60" cy="46" rx="30" ry="36"/><polygon points="54,82 66,82 60,92"/><path d="M60 92 q-8 10 2 16 q-10 6 -2 14" fill="none" stroke="#66D9E5" stroke-width="5" stroke-linecap="round"/>'},
  {n:'对话框形', c:'#FCC419', svg:'<rect x="16" y="24" width="88" height="54" rx="14"/><polygon points="40,78 40,100 64,78"/>'},
  {n:'苹果形', c:'#A9E34B', svg:'<path d="M60 36 c-8 -12 -30 -15 -38 1 c-8 18 4 44 20 54 c6 4 12 4 18 0 c6 4 12 4 18 0 c16 -10 28 -36 20 -54 c-8 -16 -30 -13 -38 -1 Z"/><path d="M60 32 q4 -14 16 -18" stroke="#8A5A2B" stroke-width="6" fill="none" stroke-linecap="round"/>'},
  {n:'四叶草形', c:'#FF8787', svg:'<circle cx="45" cy="45" r="17"/><circle cx="75" cy="45" r="17"/><circle cx="45" cy="75" r="17"/><circle cx="75" cy="75" r="17"/><path d="M60 92 q2 12 -8 16" stroke="#2B8A3E" stroke-width="6" fill="none" stroke-linecap="round"/>'},
  {n:'双心形', c:'#3BC9DB', svg:'<path d="M32 52 c-8 -10 -28 -6 -28 8 c0 12 16 22 28 30 c12 -8 28 -18 28 -30 c0 -14 -20 -18 -28 -8 Z"/><path d="M88 52 c-8 -10 -28 -6 -28 8 c0 12 16 22 28 30 c12 -8 28 -18 28 -30 c0 -14 -20 -18 -28 -8 Z" fill-opacity=".65"/>'},
  {n:'风车形', c:'#D0BFFF', svg:'<polygon points="60,60 60,14 92,32"/><polygon points="60,60 106,60 88,92" fill-opacity=".75"/><polygon points="60,60 60,106 28,88" fill-opacity=".55"/><polygon points="60,60 14,60 32,28" fill-opacity=".85"/>'},
  {n:'雨伞形', c:'#FFA8A8', svg:'<path d="M14 62 a46 46 0 0 1 92 0 Z"/><rect x="56" y="62" width="8" height="34" rx="4"/><path d="M64 96 a8 8 0 0 1 -16 0" fill="none" stroke="#FFA8A8" stroke-width="6"/>'},
  {n:'三角旗形', c:'#94D82D', svg:'<rect x="22" y="14" width="7" height="92" rx="3.5"/><polygon points="29,20 100,44 29,68"/>'},
];
function shapeSVG(s){ return `<svg viewBox="0 0 120 120"><g fill="${s.c}">${s.svg}</g></svg>`; }
function renderShapes(){
  const g = document.getElementById('shapeGrid');
  SHAPES.forEach(s=>{
    const d = document.createElement('div');
    d.className = 'shapeitem';
    d.innerHTML = shapeSVG(s) + `<div class="t">${s.n}</div>`;
    d.onclick = ()=>{
      d.classList.remove('bounce'); void d.offsetWidth; d.classList.add('bounce');
      say(s.n);
    };
    g.appendChild(d);
  });
}
let shapeTarget = null;
function startShapeQuiz(){
  let answered = false;
  const opts = [...SHAPES].sort(()=>Math.random()-.5).slice(0,3);
  shapeTarget = opts[Math.floor(Math.random()*3)];
  document.getElementById('shapeQ').textContent = `哪个是${shapeTarget.n}？`;
  document.getElementById('shapeFb').innerHTML = '';
  const box = document.getElementById('shapeOpts');
  box.innerHTML = '';
  opts.forEach(s=>{
    const b = document.createElement('button');
    b.className = 'shapeopt';
    b.innerHTML = shapeSVG(s);
    b.setAttribute('aria-label', s.n);
    b.onclick = ()=>{
      if(answered) return;
      if(s.n === shapeTarget.n){
        answered = true;
        b.classList.add('ok');
        document.getElementById('shapeFb').innerHTML = '<img class="starico" src="assets/icons/star.webp" alt="星"> 答对啦！';
        say(`答对啦，${s.n}`);
        addStar();
        screenLater(startShapeQuiz, 1800);
      } else {
        document.getElementById('shapeFb').textContent = '再试试';
        say('再试试');
      }
    };
    box.appendChild(b);
  });
  go('shapequiz');
  askShape();
}
function askShape(){ if(shapeTarget) say(`哪个是${shapeTarget.n}？`); }

/* ================= 认颜色 ================= */
const COLORS = [
  {n:'红色', c:'#E03131'},
  {n:'橙色', c:'#F76707'},
  {n:'黄色', c:'#FCC419'},
  {n:'绿色', c:'#2F9E44'},
  {n:'蓝色', c:'#1971C2'},
  {n:'紫色', c:'#7048E8'},
  {n:'粉色', c:'#F783AC'},
  {n:'棕色', c:'#8C5A2B'},
  {n:'白色', c:'#F1F3F5'},
  {n:'黑色', c:'#343A40'},
  {n:'灰色', c:'#ADB5BD'},
  {n:'金色', c:'#E8A90C'},
  {n:'天蓝色', c:'#74C0FC'},
  {n:'深蓝色', c:'#1864AB'},
  {n:'浅绿色', c:'#8CE99A'},
  {n:'深绿色', c:'#2B8A3E'},
  {n:'米色', c:'#F3E5C0'},
  {n:'肤色', c:'#FFD8A8'},
  {n:'浅紫色', c:'#D0BFFF'},
  {n:'青色', c:'#22B8CF'},
];
function renderColors(){
  const g = document.getElementById('colorGrid');
  COLORS.forEach(c=>{
    const d = document.createElement('div');
    d.className = 'colorcard';
    d.innerHTML = `<div class="cdot" style="background:${c.c}"></div><div class="cname">${c.n}</div>`;
    d.onclick = ()=>{
      d.classList.remove('bounce'); void d.offsetWidth; d.classList.add('bounce');
      say(c.n);
    };
    g.appendChild(d);
  });
}
let colorTarget = null;
function startColorQuiz(){
  let answered = false;
  const opts = [...COLORS].sort(()=>Math.random()-.5).slice(0,3);
  colorTarget = opts[Math.floor(Math.random()*3)];
  document.getElementById('colorQ').textContent = `哪个是${colorTarget.n}？`;
  document.getElementById('colorFb').innerHTML = '';
  const box = document.getElementById('colorOpts');
  box.innerHTML = '';
  opts.forEach(c=>{
    const b = document.createElement('button');
    b.className = 'coloropt';
    b.style.background = c.c;
    b.setAttribute('aria-label', c.n);
    b.onclick = ()=>{
      if(answered) return;
      if(c.n === colorTarget.n){
        answered = true;
        b.classList.add('ok');
        document.getElementById('colorFb').innerHTML = '<img class="starico" src="assets/icons/star.webp" alt="星"> 答对啦！';
        say(`答对啦，${c.n}`);
        addStar();
        screenLater(startColorQuiz, 1800);
      } else {
        document.getElementById('colorFb').textContent = '再试试';
        say('再试试');
      }
    };
    box.appendChild(b);
  });
  go('colorquiz');
  askColor();
}
function askColor(){ if(colorTarget) say(`哪个是${colorTarget.n}？`); }

/* ================= 认糖果 ================= */
const CANDIES = [
  {n:'棒棒糖', img:'assets/candy/lollipop.webp'},
  {n:'小熊软糖', img:'assets/candy/gummy.webp'},
  {n:'巧克力', img:'assets/candy/chocolate.webp'},
  {n:'棉花糖', img:'assets/candy/marshmallow.webp'},
  {n:'彩虹糖', img:'assets/candy/rainbow.webp'},
  {n:'太妃糖', img:'assets/candy/toffee.webp'},
  {n:'果冻', img:'assets/candy/jelly.webp'},
  {n:'奶糖', img:'assets/candy/milkcandy.webp'},
  {n:'糖葫芦', img:'assets/candy/tanghulu.webp'},
  {n:'酥糖', img:'assets/candy/susu.webp'},
  {n:'薄荷糖', img:'assets/candy/mint.webp'},
  {n:'水果硬糖', img:'assets/candy/hardcandy.webp'},
  {n:'草莓糖', img:'assets/candy/c013.webp'},
  {n:'紫葡萄糖', img:'assets/candy/c014.webp'},
  {n:'西瓜糖', img:'assets/candy/c015.webp'},
  {n:'菠萝糖', img:'assets/candy/c016.webp'},
  {n:'芒果糖', img:'assets/candy/c017.webp'},
  {n:'柠檬糖', img:'assets/candy/c018.webp'},
  {n:'橙子糖', img:'assets/candy/c019.webp'},
  {n:'青苹果糖', img:'assets/candy/c020.webp'},
  {n:'桃子糖', img:'assets/candy/c021.webp'},
  {n:'荔枝糖', img:'assets/candy/c022.webp'},
  {n:'蓝莓糖', img:'assets/candy/c023.webp'},
  {n:'樱桃糖', img:'assets/candy/c024.webp'},
  {n:'香蕉糖', img:'assets/candy/c025.webp'},
  {n:'哈密瓜糖', img:'assets/candy/c026.webp'},
  {n:'猕猴桃糖', img:'assets/candy/c027.webp'},
  {n:'椰子糖', img:'assets/candy/c028.webp'},
  {n:'柚子糖', img:'assets/candy/c029.webp'},
  {n:'百香果糖', img:'assets/candy/c030.webp'},
  {n:'杨梅糖', img:'assets/candy/c031.webp'},
  {n:'火龙果糖', img:'assets/candy/c032.webp'},
  {n:'榴莲糖', img:'assets/candy/c033.webp'},
  {n:'山竹糖', img:'assets/candy/c034.webp'},
  {n:'木瓜糖', img:'assets/candy/c035.webp'},
  {n:'李子糖', img:'assets/candy/c036.webp'},
  {n:'红枣糖', img:'assets/candy/c037.webp'},
  {n:'桂圆糖', img:'assets/candy/c038.webp'},
  {n:'石榴糖', img:'assets/candy/c039.webp'},
  {n:'桑葚糖', img:'assets/candy/c040.webp'},
  {n:'牛轧糖', img:'assets/candy/c041.webp'},
  {n:'花生牛轧糖', img:'assets/candy/c042.webp'},
  {n:'芝麻糖', img:'assets/candy/c043.webp'},
  {n:'花生糖', img:'assets/candy/c044.webp'},
  {n:'姜糖', img:'assets/candy/c045.webp'},
  {n:'杏仁糖', img:'assets/candy/c046.webp'},
  {n:'核桃糖', img:'assets/candy/c047.webp'},
  {n:'松子糖', img:'assets/candy/c048.webp'},
  {n:'腰果酥', img:'assets/candy/c049.webp'},
  {n:'奶酪糖', img:'assets/candy/c050.webp'},
  {n:'黄油糖', img:'assets/candy/c051.webp'},
  {n:'麦芽糖', img:'assets/candy/c052.webp'},
  {n:'龙须糖', img:'assets/candy/c053.webp'},
  {n:'糖画', img:'assets/candy/c054.webp'},
  {n:'糖人', img:'assets/candy/c055.webp'},
  {n:'麻糖', img:'assets/candy/c056.webp'},
  {n:'寸金糖', img:'assets/candy/c057.webp'},
  {n:'粽子糖', img:'assets/candy/c058.webp'},
  {n:'梨膏糖', img:'assets/candy/c059.webp'},
  {n:'桂花糖', img:'assets/candy/c060.webp'},
  {n:'玫瑰糖', img:'assets/candy/c061.webp'},
  {n:'糖瓜', img:'assets/candy/c062.webp'},
  {n:'关东糖', img:'assets/candy/c063.webp'},
  {n:'米花糖', img:'assets/candy/c064.webp'},
  {n:'糖雪球', img:'assets/candy/c065.webp'},
  {n:'陈皮糖', img:'assets/candy/c066.webp'},
  {n:'话梅糖', img:'assets/candy/c067.webp'},
  {n:'高粱饴', img:'assets/candy/c068.webp'},
  {n:'山楂卷', img:'assets/candy/c069.webp'},
  {n:'酸枣糕', img:'assets/candy/c070.webp'},
  {n:'金桔糖', img:'assets/candy/c071.webp'},
  {n:'冻米糖', img:'assets/candy/c072.webp'},
  {n:'小虫软糖', img:'assets/candy/c073.webp'},
  {n:'青蛙软糖', img:'assets/candy/c074.webp'},
  {n:'桃子软糖', img:'assets/candy/c075.webp'},
  {n:'可乐瓶软糖', img:'assets/candy/c076.webp'},
  {n:'牙齿软糖', img:'assets/candy/c077.webp'},
  {n:'眼睛软糖', img:'assets/candy/c078.webp'},
  {n:'汉堡软糖', img:'assets/candy/c079.webp'},
  {n:'披萨软糖', img:'assets/candy/c080.webp'},
  {n:'西瓜软糖', img:'assets/candy/c081.webp'},
  {n:'草莓软糖', img:'assets/candy/c082.webp'},
  {n:'戒指糖', img:'assets/candy/c083.webp'},
  {n:'奶嘴糖', img:'assets/candy/c084.webp'},
  {n:'钻石糖', img:'assets/candy/c085.webp'},
  {n:'星星软糖', img:'assets/candy/c086.webp'},
  {n:'心形软糖', img:'assets/candy/c087.webp'},
  {n:'葡萄软糖', img:'assets/candy/c088.webp'},
  {n:'酸条糖', img:'assets/candy/c089.webp'},
  {n:'彩虹绳糖', img:'assets/candy/c090.webp'},
  {n:'鸡蛋软糖', img:'assets/candy/c091.webp'},
  {n:'鲨鱼软糖', img:'assets/candy/c092.webp'},
  {n:'恐龙软糖', img:'assets/candy/c093.webp'},
  {n:'字母软糖', img:'assets/candy/c094.webp'},
  {n:'骨头糖', img:'assets/candy/c095.webp'},
  {n:'嘴唇糖', img:'assets/candy/c096.webp'},
  {n:'宝石糖', img:'assets/candy/c097.webp'},
  {n:'爆浆软糖', img:'assets/candy/c098.webp'},
  {n:'橡皮糖', img:'assets/candy/c099.webp'},
  {n:'星星棒棒糖', img:'assets/candy/c100.webp'},
  {n:'心形棒棒糖', img:'assets/candy/c101.webp'},
  {n:'螺旋棒棒糖', img:'assets/candy/c102.webp'},
  {n:'波板糖', img:'assets/candy/c103.webp'},
  {n:'糖拐杖', img:'assets/candy/c104.webp'},
  {n:'口哨糖', img:'assets/candy/c105.webp'},
  {n:'眼镜糖', img:'assets/candy/c106.webp'},
  {n:'奶瓶糖', img:'assets/candy/c107.webp'},
  {n:'跳跳糖', img:'assets/candy/c108.webp'},
  {n:'泡泡糖', img:'assets/candy/c109.webp'},
  {n:'口香糖', img:'assets/candy/c110.webp'},
  {n:'彩虹棉花糖', img:'assets/candy/c111.webp'},
  {n:'棉花糖串', img:'assets/candy/c112.webp'},
  {n:'夹心棉花糖', img:'assets/candy/c113.webp'},
  {n:'云朵棉花糖', img:'assets/candy/c114.webp'},
  {n:'粉末蘸糖', img:'assets/candy/c115.webp'},
  {n:'液体糖', img:'assets/candy/c116.webp'},
  {n:'喷雾糖', img:'assets/candy/c117.webp'},
  {n:'牙膏糖', img:'assets/candy/c118.webp'},
  {n:'白巧克力', img:'assets/candy/c119.webp'},
  {n:'黑巧克力', img:'assets/candy/c120.webp'},
  {n:'巧克力豆', img:'assets/candy/c121.webp'},
  {n:'巧克力球', img:'assets/candy/c122.webp'},
  {n:'巧克力棒', img:'assets/candy/c123.webp'},
  {n:'巧克力币', img:'assets/candy/c124.webp'},
  {n:'巧克力蛋', img:'assets/candy/c125.webp'},
  {n:'巧克力兔', img:'assets/candy/c126.webp'},
  {n:'巧克力伞', img:'assets/candy/c127.webp'},
  {n:'巧克力铅笔', img:'assets/candy/c128.webp'},
  {n:'夹心巧克力', img:'assets/candy/c129.webp'},
  {n:'松露巧克力', img:'assets/candy/c130.webp'},
  {n:'巧克力威化', img:'assets/candy/c131.webp'},
  {n:'生巧克力', img:'assets/candy/c132.webp'},
  {n:'巧克力爱心', img:'assets/candy/c133.webp'},
  {n:'巧克力玫瑰', img:'assets/candy/c134.webp'},
  {n:'果冻条', img:'assets/candy/c135.webp'},
  {n:'吸吸冻', img:'assets/candy/c136.webp'},
  {n:'布丁', img:'assets/candy/c137.webp'},
  {n:'椰果果冻', img:'assets/candy/c138.webp'},
  {n:'蒟蒻果冻', img:'assets/candy/c139.webp'},
  {n:'金平糖', img:'assets/candy/c140.webp'},
  {n:'玻璃糖', img:'assets/candy/c141.webp'},
  {n:'琥珀糖', img:'assets/candy/c142.webp'},
  {n:'冰糖', img:'assets/candy/c143.webp'},
  {n:'糖果手链', img:'assets/candy/c144.webp'},
  {n:'糖果项链', img:'assets/candy/c145.webp'},
  {n:'手表糖', img:'assets/candy/c146.webp'},
  {n:'唇膏糖', img:'assets/candy/c147.webp'},
  {n:'珍珠糖', img:'assets/candy/c148.webp'},
  {n:'彩针糖', img:'assets/candy/c149.webp'},
  {n:'糖球', img:'assets/candy/c150.webp'},
  {n:'金币糖', img:'assets/candy/c151.webp'},
  {n:'玫瑰花糖', img:'assets/candy/c152.webp'},
  {n:'小鱼糖', img:'assets/candy/c153.webp'},
  {n:'小猪糖', img:'assets/candy/c154.webp'},
  {n:'猫爪糖', img:'assets/candy/c155.webp'},
  {n:'熊猫糖', img:'assets/candy/c156.webp'},
  {n:'蝴蝶糖', img:'assets/candy/c157.webp'},
  {n:'寿桃糖', img:'assets/candy/c158.webp'},
  {n:'枇杷糖', img:'assets/candy/c159.webp'},
  {n:'罗汉果糖', img:'assets/candy/c160.webp'},
  {n:'咸柠糖', img:'assets/candy/c161.webp'},
  {n:'海盐糖', img:'assets/candy/c162.webp'},
  {n:'咖啡糖', img:'assets/candy/c163.webp'},
  {n:'抹茶糖', img:'assets/candy/c164.webp'},
  {n:'可乐糖', img:'assets/candy/c165.webp'},
  {n:'汽水糖', img:'assets/candy/c166.webp'},
  {n:'酸奶糖', img:'assets/candy/c167.webp'},
  {n:'奶片', img:'assets/candy/c168.webp'},
  {n:'维C糖', img:'assets/candy/c169.webp'},
  {n:'乌龙茶糖', img:'assets/candy/c170.webp'},
  {n:'辣椒糖', img:'assets/candy/c171.webp'},
  {n:'紫苏糖', img:'assets/candy/c172.webp'},
  {n:'蜂蜜糖', img:'assets/candy/c173.webp'},
  {n:'人参糖', img:'assets/candy/c174.webp'},
  {n:'南瓜糖', img:'assets/candy/c175.webp'},
  {n:'圣诞树糖', img:'assets/candy/c176.webp'},
  {n:'雪人糖', img:'assets/candy/c177.webp'},
  {n:'兔子糖', img:'assets/candy/c178.webp'},
  {n:'元宝糖', img:'assets/candy/c179.webp'},
  {n:'灯笼糖', img:'assets/candy/c180.webp'},
  {n:'爆米花糖', img:'assets/candy/c181.webp'},
  {n:'燕麦糖', img:'assets/candy/c182.webp'},
  {n:'玉米糖', img:'assets/candy/c183.webp'},
  {n:'瓜子糖', img:'assets/candy/c184.webp'},
  {n:'马卡龙', img:'assets/candy/c185.webp'},
  {n:'土耳其软糖', img:'assets/candy/c186.webp'},
  {n:'甘草糖', img:'assets/candy/c187.webp'},
  {n:'水果卷糖', img:'assets/candy/c188.webp'},
  {n:'焦糖糖', img:'assets/candy/c189.webp'},
  {n:'麻薯糖', img:'assets/candy/c190.webp'},
  {n:'羊羹', img:'assets/candy/c191.webp'},
  {n:'什锦糖', img:'assets/candy/c192.webp'},
  {n:'糖豆', img:'assets/candy/c193.webp'},
  {n:'方糖', img:'assets/candy/c194.webp'},
  {n:'水果软糖', img:'assets/candy/c195.webp'},
  {n:'夹心糖', img:'assets/candy/c196.webp'},
  {n:'奶枣', img:'assets/candy/c197.webp'},
  {n:'雪花酥', img:'assets/candy/c198.webp'},
  {n:'葡萄糖葫芦', img:'assets/candy/c199.webp'},
  {n:'草莓糖葫芦', img:'assets/candy/c200.webp'},
];
function candyImg(c){ return `<img class="candyimg" loading="lazy" src="${c.img}" alt="${c.n}">`; }
function renderCandy(){
  const g = document.getElementById('candyGrid');
  CANDIES.forEach(c=>{
    const d = document.createElement('div');
    d.className = 'candyitem';
    d.innerHTML = candyImg(c) + `<div class="t">${c.n}</div>`;
    d.onclick = ()=>{
      d.classList.remove('bounce'); void d.offsetWidth; d.classList.add('bounce');
      say(c.n);
    };
    g.appendChild(d);
  });
}
let candyTarget = null;
function startCandyQuiz(){
  let answered = false;
  const opts = [...CANDIES].sort(()=>Math.random()-.5).slice(0,3);
  candyTarget = opts[Math.floor(Math.random()*3)];
  document.getElementById('candyQ').textContent = `哪个是${candyTarget.n}？`;
  document.getElementById('candyFb').innerHTML = '';
  const box = document.getElementById('candyOpts');
  box.innerHTML = '';
  opts.forEach(c=>{
    const b = document.createElement('button');
    b.className = 'candyopt';
    b.innerHTML = candyImg(c);
    b.setAttribute('aria-label', c.n);
    b.onclick = ()=>{
      if(answered) return;
      if(c.n === candyTarget.n){
        answered = true;
        b.classList.add('ok');
        document.getElementById('candyFb').innerHTML = '<img class="starico" src="assets/icons/star.webp" alt="星"> 答对啦！';
        say(`答对啦，${c.n}`);
        addStar();
        screenLater(startCandyQuiz, 1800);
      } else {
        document.getElementById('candyFb').textContent = '再试试';
        say('再试试');
      }
    };
    box.appendChild(b);
  });
  go('candyquiz');
  askCandy();
}
function askCandy(){ if(candyTarget) say(`哪个是${candyTarget.n}？`); }

/* ================= 拼图 ================= */
let puzOrder = [], puzImgUrl = '', puzName = '', puzN = 2;
function puzShuffle(total){
  const N = Math.round(Math.sqrt(total));
  const order = [...Array(total).keys()];
  let e = total - 1;
  for(let k=0;k<50;k++){
    const r = Math.floor(e/N), c = e%N, cands = [];
    if(c > 0) cands.push(e-1);
    if(c < N-1) cands.push(e+1);
    if(r > 0) cands.push(e-N);
    if(r < N-1) cands.push(e+N);
    const p = cands[Math.floor(Math.random()*cands.length)];
    [order[p], order[e]] = [order[e], order[p]];
    e = p;
  }
  if(order.every((t,i)=>t === i)) return puzShuffle(total);
  return order;
}
function startPuzzle(n){
  if(n) puzN = n;
  const pool = localAnimalPool();
  const a = pool[Math.floor(Math.random()*pool.length)];
  puzImgUrl = a.img;
  puzName = a.n;
  puzOrder = puzShuffle(puzN*puzN);
  const tabs = document.getElementById('puzTabs');
  tabs.innerHTML = '';
  [[2,'4 块'],[3,'9 块']].forEach(([n2,label])=>{
    const b = document.createElement('button');
    b.className = 'cptab' + (n2 === puzN ? ' on' : '');
    b.textContent = label;
    b.onclick = ()=>startPuzzle(n2);
    tabs.appendChild(b);
  });
  document.getElementById('puzQ').textContent = `拼一拼：${puzName}`;
  document.getElementById('puzRef').src = puzImgUrl;
  document.getElementById('puzFb').innerHTML = '';
  renderPuzzle();
  go('puzzle');
}
function renderPuzzle(){
  const N = puzN, blank = N*N-1;
  const g = document.getElementById('puzGrid');
  g.style.gridTemplateColumns = `repeat(${N},1fr)`;
  g.innerHTML = '';
  puzOrder.forEach((t,pos)=>{
    const d = document.createElement('button');
    if(t === blank){
      d.className = 'ptile empty';
      d.disabled = true;
    } else {
      d.className = 'ptile';
      d.style.backgroundImage = `url(${puzImgUrl})`;
      d.style.backgroundSize = `${N*100}% ${N*100}%`;
      d.style.backgroundPosition = `${(t%N)/(N-1)*100}% ${(Math.floor(t/N))/(N-1)*100}%`;
      d.setAttribute('aria-label', `拼图块 ${t+1}`);
      d.onclick = ()=>puzMove(pos);
    }
    g.appendChild(d);
  });
}
function puzMove(pos){
  const N = puzN, blank = N*N-1, e = puzOrder.indexOf(blank);
  const dr = Math.abs(Math.floor(pos/N)-Math.floor(e/N)), dc = Math.abs(pos%N-e%N);
  if(dr + dc !== 1) return;
  [puzOrder[pos], puzOrder[e]] = [puzOrder[e], puzOrder[pos]];
  renderPuzzle();
  if(puzOrder.every((t,i)=>t === i)){
    document.getElementById('puzFb').innerHTML = '<img class="starico" src="assets/icons/star.webp" alt="星"> 拼好啦！';
    say('拼好啦，真棒');
    addStar();
    screenLater(()=>startPuzzle(), 2400);
  }
}

/* ================= 泡泡 ================= */
let bubN = 0, bubTimer = null;
function openBubbles(){
  bubN = 0;
  document.getElementById('bubN').textContent = '0';
  go('bubbles');
  if(!bubTimer) bubTimer = setInterval(spawnBub, 800);
}
function spawnBub(){
  if(!document.getElementById('bubbles').classList.contains('active')) return;
  const w = document.getElementById('bubWrap');
  if(w.childElementCount > 14) return;
  const s = 44 + Math.random()*56;
  const b = document.createElement('button');
  b.className = 'bub';
  b.setAttribute('aria-label', '泡泡');
  b.style.cssText = `left:${(Math.random()*88).toFixed(1)}%;bottom:-${Math.round(s+20)}px;width:${Math.round(s)}px;height:${Math.round(s)}px;animation-duration:${(5+Math.random()*3).toFixed(1)}s`;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) b.style.bottom = (8 + Math.random()*65)+'%';
  b.onclick = ()=>{
    if(b.classList.contains('pop')) return;
    b.classList.add('pop');
    bubN++;
    document.getElementById('bubN').textContent = bubN;
    screenLater(()=>b.remove(), 200);
  };
  b.addEventListener('animationend', ()=>b.remove());
  w.appendChild(b);
}


/* ================= 认汉字 ================= */
const HANZI = [
  {c:'日', py:'rì', w:'太阳', tip:'太阳圆圆的，中间有一点，就是日。', img:'assets/hanzi/h01.webp'},
  {c:'月', py:'yuè', w:'月亮', tip:'月亮弯弯像小船，就是月。', img:'assets/hanzi/h02.webp'},
  {c:'山', py:'shān', w:'大山', tip:'三座高高的山峰，就是山。', img:'assets/hanzi/h03.webp'},
  {c:'水', py:'shuǐ', w:'喝水', tip:'中间是水流，两边是水花，就是水。', img:'assets/hanzi/h04.webp'},
  {c:'火', py:'huǒ', w:'火焰', tip:'火苗往上窜，就是火。', img:'assets/hanzi/h05.webp'},
  {c:'木', py:'mù', w:'木头', tip:'大树有树干，也有树根，就是木。', img:'assets/hanzi/h06.webp'},
  {c:'林', py:'lín', w:'树林', tip:'两棵树并排站，就是树林。', img:'assets/hanzi/h07.webp'},
  {c:'森', py:'sēn', w:'森林', tip:'三棵树在一起，就是森林。', img:'assets/hanzi/h08.webp'},
  {c:'人', py:'rén', w:'家人', tip:'一个人迈开腿走路，就是人。', img:'assets/hanzi/h09.webp'},
  {c:'大', py:'dà', w:'大象', tip:'张开手臂比划“好大呀”，就是大。', img:'assets/hanzi/h10.webp'},
  {c:'天', py:'tiān', w:'天空', tip:'头顶上面就是天，就是天。', img:'assets/hanzi/h11.webp'},
  {c:'口', py:'kǒu', w:'开口', tip:'张开的嘴巴方方的，就是口。', img:'assets/hanzi/h12.webp'},
  {c:'手', py:'shǒu', w:'小手', tip:'小手张开，五根手指，就是手。', img:'assets/hanzi/h13.webp'},
  {c:'目', py:'mù', w:'目光', tip:'眼睛圆圆的，里面有眼珠，就是目。', img:'assets/hanzi/h14.webp'},
  {c:'耳', py:'ěr', w:'耳朵', tip:'耳朵听声音，就是耳。', img:'assets/hanzi/h15.webp'},
  {c:'足', py:'zú', w:'足球', tip:'小脚丫踩在地上，就是足。', img:'assets/hanzi/h16.webp'},
  {c:'心', py:'xīn', w:'爱心', tip:'心脏扑通扑通跳，就是心。', img:'assets/hanzi/h17.webp'},
  {c:'子', py:'zǐ', w:'孩子', tip:'小宝宝裹在小被子里，就是子。', img:'assets/hanzi/h18.webp'},
  {c:'马', py:'mǎ', w:'小马', tip:'马儿有鬃毛，还有四条腿，就是马。', img:'assets/hanzi/h19.webp'},
  {c:'牛', py:'niú', w:'小牛', tip:'牛有两只大大的角，就是牛。', img:'assets/hanzi/h20.webp'},
  {c:'羊', py:'yáng', w:'小羊', tip:'羊角弯弯卷卷的，就是羊。', img:'assets/hanzi/h21.webp'},
  {c:'鸟', py:'niǎo', w:'小鸟', tip:'小鸟有羽毛，还有长尾巴，就是鸟。', img:'assets/hanzi/h22.webp'},
  {c:'鱼', py:'yú', w:'小鱼', tip:'鱼儿嘴巴尖尖，尾巴摇摇，就是鱼。', img:'assets/hanzi/h23.webp'},
  {c:'龟', py:'guī', w:'乌龟', tip:'乌龟背着硬硬的壳，就是龟。', img:'assets/hanzi/h24.webp'},
  {c:'象', py:'xiàng', w:'大象', tip:'大象有长长的鼻子，就是象。', img:'assets/hanzi/h25.webp'},
  {c:'虎', py:'hǔ', w:'老虎', tip:'老虎张大嘴巴，真威风，就是虎。', img:'assets/hanzi/h26.webp'},
  {c:'鹿', py:'lù', w:'小鹿', tip:'小鹿头上有大大的角，就是鹿。', img:'assets/hanzi/h27.webp'},
  {c:'兔', py:'tù', w:'兔子', tip:'兔子耳朵长，尾巴短，就是兔。', img:'assets/hanzi/h28.webp'},
  {c:'犬', py:'quǎn', w:'小犬', tip:'小狗竖着耳朵，汪汪叫，就是犬。', img:'assets/hanzi/h29.webp'},
  {c:'禾', py:'hé', w:'禾苗', tip:'稻穗熟了，垂下来，就是禾。', img:'assets/hanzi/h30.webp'},
  {c:'米', py:'mǐ', w:'大米', tip:'米粒白白的，一颗颗，就是米。', img:'assets/hanzi/h31.webp'},
  {c:'竹', py:'zhú', w:'竹子', tip:'竹子一节一节，叶子垂下来，就是竹。', img:'assets/hanzi/h32.webp'},
  {c:'瓜', py:'guā', w:'西瓜', tip:'瓜藤上结着圆圆的瓜，就是瓜。', img:'assets/hanzi/h33.webp'},
  {c:'果', py:'guǒ', w:'水果', tip:'树上结满圆圆的果子，就是果。', img:'assets/hanzi/h34.webp'},
  {c:'豆', py:'dòu', w:'豆子', tip:'豆荚里装着圆豆子，就是豆。', img:'assets/hanzi/h35.webp'},
  {c:'贝', py:'bèi', w:'贝壳', tip:'贝壳有好看的纹路，就是贝。', img:'assets/hanzi/h36.webp'},
  {c:'玉', py:'yù', w:'玉米', tip:'玉石圆圆的，串成一串，就是玉。', img:'assets/hanzi/h37.webp'},
  {c:'石', py:'shí', w:'石头', tip:'山崖下面有块石头，就是石。', img:'assets/hanzi/h38.webp'},
  {c:'土', py:'tǔ', w:'土地', tip:'小苗从土里长出来，就是土。', img:'assets/hanzi/h39.webp'},
  {c:'金', py:'jīn', w:'金子', tip:'金子藏在土里，闪闪发亮，就是金。', img:'assets/hanzi/h40.webp'},
  {c:'刀', py:'dāo', w:'小刀', tip:'刀刃弯弯亮亮的，就是刀。', img:'assets/hanzi/h41.webp'},
  {c:'弓', py:'gōng', w:'弓箭', tip:'弓拉得弯弯的，就是弓。', img:'assets/hanzi/h42.webp'},
  {c:'门', py:'mén', w:'大门', tip:'两扇门板合起来，就是门。', img:'assets/hanzi/h43.webp'},
  {c:'户', py:'hù', w:'窗户', tip:'一扇小门，就是户。', img:'assets/hanzi/h44.webp'},
  {c:'车', py:'chē', w:'汽车', tip:'车子有轮子，跑得快，就是车。', img:'assets/hanzi/h45.webp'},
  {c:'舟', py:'zhōu', w:'小舟', tip:'小船漂在水面上，就是舟。', img:'assets/hanzi/h46.webp'},
  {c:'衣', py:'yī', w:'衣服', tip:'衣服有领子，还有袖子，就是衣。', img:'assets/hanzi/h47.webp'},
  {c:'网', py:'wǎng', w:'鱼网', tip:'渔网网住小鱼，就是网。', img:'assets/hanzi/h48.webp'},
  {c:'田', py:'tián', w:'田地', tip:'田地分成一块一块的，就是田。', img:'assets/hanzi/h49.webp'},
  {c:'雨', py:'yǔ', w:'下雨', tip:'天上落下小雨点，就是雨。', img:'assets/hanzi/h50.webp'},
  {c:'云', py:'yún', w:'白云', tip:'云朵飘在天上，软软的，就是云。', img:'assets/hanzi/h51.webp'},
  {c:'电', py:'diàn', w:'闪电', tip:'闪电咔嚓划破天空，就是电。', img:'assets/hanzi/h52.webp'},
  {c:'川', py:'chuān', w:'山川', tip:'三条小河哗哗流，就是川。', img:'assets/hanzi/h53.webp'},
  {c:'立', py:'lì', w:'站立', tip:'一个人稳稳站在地上，就是立。', img:'assets/hanzi/h54.webp'},
  {c:'休', py:'xiū', w:'休息', tip:'靠着大树歇一歇，就是休。', img:'assets/hanzi/h55.webp'},
  {c:'看', py:'kàn', w:'看书', tip:'手搭凉棚往远处看，就是看。', img:'assets/hanzi/h56.webp'},
  {c:'明', py:'míng', w:'明亮', tip:'太阳和月亮一起发亮，就是明。', img:'assets/hanzi/h57.webp'},
  {c:'一', py:'yī', w:'一个', tip:'伸出一根手指，就是一。', img:'assets/hanzi/h58.webp'},
  {c:'二', py:'èr', w:'两个', tip:'伸出两根手指，就是二。', img:'assets/hanzi/h59.webp'},
  {c:'三', py:'sān', w:'三个', tip:'伸出三根手指，就是三。', img:'assets/hanzi/h60.webp'},
  {c:'头', py:'tóu', w:'头发', tip:'圆圆的脑袋上长着头发，就是头。', img:'assets/hanzi/h61.webp'},
  {c:'面', py:'miàn', w:'洗脸', tip:'一张方方的脸，中间有眼睛，就是面。', img:'assets/hanzi/h62.webp'},
  {c:'眉', py:'méi', w:'眉毛', tip:'眼睛上面一排毛，就是眉毛。', img:'assets/hanzi/h63.webp'},
  {c:'鼻', py:'bí', w:'鼻子', tip:'高高的鼻子能闻香香的味道，就是鼻。', img:'assets/hanzi/h64.webp'},
  {c:'舌', py:'shé', w:'舌头', tip:'嘴巴里伸出的小舌头，就是舌。', img:'assets/hanzi/h65.webp'},
  {c:'牙', py:'yá', w:'牙齿', tip:'一颗颗白白的牙齿，就是牙。', img:'assets/hanzi/h66.webp'},
  {c:'身', py:'shēn', w:'身体', tip:'一个人挺着肚子站着，就是身。', img:'assets/hanzi/h67.webp'},
  {c:'毛', py:'máo', w:'毛毛', tip:'一根根弯弯的绒毛，就是毛。', img:'assets/hanzi/h68.webp'},
  {c:'皮', py:'pí', w:'皮球', tip:'一张展开的兽皮，就是皮。', img:'assets/hanzi/h69.webp'},
  {c:'骨', py:'gǔ', w:'骨头', tip:'一根骨头带着关节，就是骨。', img:'assets/hanzi/h70.webp'},
  {c:'血', py:'xuè', w:'流血', tip:'一滴红红的血，就是血。', img:'assets/hanzi/h71.webp'},
  {c:'肉', py:'ròu', w:'吃肉', tip:'一块切好的肉，有好看的纹理，就是肉。', img:'assets/hanzi/h72.webp'},
  {c:'爪', py:'zhuǎ', w:'爪子', tip:'尖尖的爪子能抓东西，就是爪。', img:'assets/hanzi/h73.webp'},
  {c:'角', py:'jiǎo', w:'牛角', tip:'弯弯的牛角，就是角。', img:'assets/hanzi/h74.webp'},
  {c:'尾', py:'wěi', w:'尾巴', tip:'小动物身后甩来甩去的尾巴，就是尾。', img:'assets/hanzi/h75.webp'},
  {c:'星', py:'xīng', w:'星星', tip:'小星星在天上眨眼睛，就是星。', img:'assets/hanzi/h76.webp'},
  {c:'晨', py:'chén', w:'早晨', tip:'太阳升起来，新的一天开始了，就是晨。', img:'assets/hanzi/h77.webp'},
  {c:'夜', py:'yè', w:'夜晚', tip:'天黑了，月亮出来了，就是夜。', img:'assets/hanzi/h78.webp'},
  {c:'光', py:'guāng', w:'阳光', tip:'太阳发出一道道光芒，就是光。', img:'assets/hanzi/h79.webp'},
  {c:'声', py:'shēng', w:'声音', tip:'耳朵听到美妙的声音，就是声。', img:'assets/hanzi/h80.webp'},
  {c:'风', py:'fēng', w:'大风', tip:'风吹得树叶哗哗响，就是风。', img:'assets/hanzi/h81.webp'},
  {c:'雪', py:'xuě', w:'下雪', tip:'雪花从天上飘下来，白白的，就是雪。', img:'assets/hanzi/h82.webp'},
  {c:'冰', py:'bīng', w:'冰块', tip:'水冻成了硬硬的冰，就是冰。', img:'assets/hanzi/h83.webp'},
  {c:'泉', py:'quán', w:'泉水', tip:'山石间流出的清清泉水，就是泉。', img:'assets/hanzi/h84.webp'},
  {c:'虹', py:'hóng', w:'彩虹', tip:'雨后天上挂着弯弯的彩虹，就是虹。', img:'assets/hanzi/h85.webp'},
  {c:'露', py:'lù', w:'露珠', tip:'清晨草叶上一颗颗小水珠，就是露。', img:'assets/hanzi/h86.webp'},
  {c:'霜', py:'shuāng', w:'白霜', tip:'冬天的早上，叶子上白白一层霜，就是霜。', img:'assets/hanzi/h87.webp'},
  {c:'沙', py:'shā', w:'沙子', tip:'海边细细软软的沙子，就是沙。', img:'assets/hanzi/h88.webp'},
  {c:'岛', py:'dǎo', w:'小岛', tip:'大海中间露出一个小山头，就是岛。', img:'assets/hanzi/h89.webp'},
  {c:'江', py:'jiāng', w:'长江', tip:'宽宽的大江，水流向远方，就是江。', img:'assets/hanzi/h90.webp'},
  {c:'河', py:'hé', w:'小河', tip:'弯弯的小河水在流淌，就是河。', img:'assets/hanzi/h91.webp'},
  {c:'湖', py:'hú', w:'湖水', tip:'平静的湖面像一面大镜子，就是湖。', img:'assets/hanzi/h92.webp'},
  {c:'海', py:'hǎi', w:'大海', tip:'大海一望无边，浪花朵朵，就是海。', img:'assets/hanzi/h93.webp'},
  {c:'浪', py:'làng', w:'浪花', tip:'海浪卷起白白的浪花，就是浪。', img:'assets/hanzi/h94.webp'},
  {c:'春', py:'chūn', w:'春天', tip:'太阳暖暖的，草儿发芽了，就是春天。', img:'assets/hanzi/h95.webp'},
  {c:'夏', py:'xià', w:'夏天', tip:'太阳火辣辣，知了在叫，就是夏天。', img:'assets/hanzi/h96.webp'},
  {c:'秋', py:'qiū', w:'秋天', tip:'禾苗黄了，果子熟了，就是秋天。', img:'assets/hanzi/h97.webp'},
  {c:'冬', py:'dōng', w:'冬天', tip:'天冷了，河水结冰了，就是冬天。', img:'assets/hanzi/h98.webp'},
  {c:'家', py:'jiā', w:'家人', tip:'房子里住着一家人，就是家。', img:'assets/hanzi/h99.webp'},
  {c:'屋', py:'wū', w:'屋子', tip:'有屋顶有墙的小屋子，就是屋。', img:'assets/hanzi/h100.webp'},
  {c:'窗', py:'chuāng', w:'窗户', tip:'方方的窗户，阳光照进来，就是窗。', img:'assets/hanzi/h101.webp'},
  {c:'床', py:'chuáng', w:'小床', tip:'木头做的床，是睡觉的地方，就是床。', img:'assets/hanzi/h102.webp'},
  {c:'桌', py:'zhuō', w:'桌子', tip:'平平的桌面四条腿，就是桌子。', img:'assets/hanzi/h103.webp'},
  {c:'椅', py:'yǐ', w:'椅子', tip:'有靠背的椅子，坐着看书，就是椅。', img:'assets/hanzi/h104.webp'},
  {c:'伞', py:'sǎn', w:'雨伞', tip:'伞面大大的，能挡雨，就是伞。', img:'assets/hanzi/h105.webp'},
  {c:'帽', py:'mào', w:'帽子', tip:'戴在头上的帽子，就是帽。', img:'assets/hanzi/h106.webp'},
  {c:'鞋', py:'xié', w:'鞋子', tip:'穿在脚上的鞋子，一双一双的，就是鞋。', img:'assets/hanzi/h107.webp'},
  {c:'袜', py:'wà', w:'袜子', tip:'软软的袜子穿在脚上，就是袜。', img:'assets/hanzi/h108.webp'},
  {c:'书', py:'shū', w:'书本', tip:'一本打开的书，里面有好多故事，就是书。', img:'assets/hanzi/h109.webp'},
  {c:'笔', py:'bǐ', w:'铅笔', tip:'长长的笔，能写字画画，就是笔。', img:'assets/hanzi/h110.webp'},
  {c:'纸', py:'zhǐ', w:'白纸', tip:'薄薄的白纸，能画画，就是纸。', img:'assets/hanzi/h111.webp'},
  {c:'剪', py:'jiǎn', w:'剪刀', tip:'两把小刀交叉，咔嚓剪纸，就是剪。', img:'assets/hanzi/h112.webp'},
  {c:'针', py:'zhēn', w:'缝针', tip:'细细的针，尾巴上有小孔穿线，就是针。', img:'assets/hanzi/h113.webp'},
  {c:'线', py:'xiàn', w:'毛线', tip:'一根长长的线，能织毛衣，就是线。', img:'assets/hanzi/h114.webp'},
  {c:'灯', py:'dēng', w:'台灯', tip:'灯亮起来，照得屋里亮堂堂，就是灯。', img:'assets/hanzi/h115.webp'},
  {c:'钟', py:'zhōng', w:'闹钟', tip:'圆圆的钟表，滴答滴答走，就是钟。', img:'assets/hanzi/h116.webp'},
  {c:'桥', py:'qiáo', w:'小桥', tip:'木头搭的桥，跨过小河，就是桥。', img:'assets/hanzi/h117.webp'},
  {c:'路', py:'lù', w:'马路', tip:'一条长长的路，通向远方，就是路。', img:'assets/hanzi/h118.webp'},
  {c:'村', py:'cūn', w:'村子', tip:'村子里有树木和房子，就是村。', img:'assets/hanzi/h119.webp'},
  {c:'市', py:'shì', w:'超市', tip:'热闹的地方，有好多商店，就是市。', img:'assets/hanzi/h120.webp'},
  {c:'店', py:'diàn', w:'商店', tip:'小小的店，卖好吃的，就是店。', img:'assets/hanzi/h121.webp'},
  {c:'园', py:'yuán', w:'花园', tip:'围起来的园子，开满鲜花，就是园。', img:'assets/hanzi/h122.webp'},
  {c:'井', py:'jǐng', w:'水井', tip:'方方的井口，深深的井水，就是井。', img:'assets/hanzi/h123.webp'},
  {c:'走', py:'zǒu', w:'走路', tip:'一个人迈开脚步走，就是走。', img:'assets/hanzi/h124.webp'},
  {c:'跑', py:'pǎo', w:'跑步', tip:'脚步快快的，就是跑。', img:'assets/hanzi/h125.webp'},
  {c:'跳', py:'tiào', w:'跳高', tip:'双脚离开地面跳起来，就是跳。', img:'assets/hanzi/h126.webp'},
  {c:'飞', py:'fēi', w:'飞翔', tip:'小鸟张开翅膀飞上天，就是飞。', img:'assets/hanzi/h127.webp'},
  {c:'游', py:'yóu', w:'游泳', tip:'在水里像小鱼一样游，就是游。', img:'assets/hanzi/h128.webp'},
  {c:'爬', py:'pá', w:'爬山', tip:'手脚并用往上爬，就是爬。', img:'assets/hanzi/h129.webp'},
  {c:'坐', py:'zuò', w:'坐下', tip:'两个人坐在地上休息，就是坐。', img:'assets/hanzi/h130.webp'},
  {c:'睡', py:'shuì', w:'睡觉', tip:'闭上眼睛垂下头，睡觉啦，就是睡。', img:'assets/hanzi/h131.webp'},
  {c:'吃', py:'chī', w:'吃饭', tip:'张开嘴巴吃东西，就是吃。', img:'assets/hanzi/h132.webp'},
  {c:'喝', py:'hē', w:'喝水', tip:'端起杯子喝水，就是喝。', img:'assets/hanzi/h133.webp'},
  {c:'笑', py:'xiào', w:'笑脸', tip:'开心得眼睛弯弯，就是笑。', img:'assets/hanzi/h134.webp'},
  {c:'哭', py:'kū', w:'哭脸', tip:'张大嘴巴哇哇哭，眼泪汪汪，就是哭。', img:'assets/hanzi/h135.webp'},
  {c:'唱', py:'chàng', w:'唱歌', tip:'张开嘴巴唱出好听的歌，就是唱。', img:'assets/hanzi/h136.webp'},
  {c:'听', py:'tīng', w:'听话', tip:'竖起耳朵认真听，就是听。', img:'assets/hanzi/h137.webp'},
  {c:'说', py:'shuō', w:'说话', tip:'嘴巴一张一合在说话，就是说。', img:'assets/hanzi/h138.webp'},
  {c:'读', py:'dú', w:'读书', tip:'打开书本念出声，就是读。', img:'assets/hanzi/h139.webp'},
  {c:'画', py:'huà', w:'画画', tip:'拿起笔，在纸上画出图画，就是画。', img:'assets/hanzi/h140.webp'},
  {c:'玩', py:'wán', w:'玩耍', tip:'手里拿着宝贝玩具，开心地玩，就是玩。', img:'assets/hanzi/h141.webp'},
  {c:'爱', py:'ài', w:'爱心', tip:'心里装着好朋友，就是爱。', img:'assets/hanzi/h142.webp'},
  {c:'学', py:'xué', w:'学习', tip:'小朋友在屋子里读书，就是学。', img:'assets/hanzi/h143.webp'},
  {c:'校', py:'xiào', w:'学校', tip:'学校里有大树和教室，就是校。', img:'assets/hanzi/h144.webp'},
  {c:'友', py:'yǒu', w:'朋友', tip:'两只手拉在一起，就是好朋友，就是友。', img:'assets/hanzi/h145.webp'},
  {c:'好', py:'hǎo', w:'你好', tip:'妈妈和宝宝在一起，就是好。', img:'assets/hanzi/h146.webp'},
  {c:'多', py:'duō', w:'很多', tip:'好多好多，数也数不清，就是多。', img:'assets/hanzi/h147.webp'},
  {c:'少', py:'shǎo', w:'很少', tip:'小小的一点点，就是少。', img:'assets/hanzi/h148.webp'},
  {c:'长', py:'cháng', w:'长发', tip:'长长的头发披下来，就是长。', img:'assets/hanzi/h149.webp'},
  {c:'高', py:'gāo', w:'高楼', tip:'高高的楼房，有好几层，就是高。', img:'assets/hanzi/h150.webp'},
  {c:'矮', py:'ǎi', w:'矮小', tip:'个子小小的，就是矮。', img:'assets/hanzi/h151.webp'},
  {c:'胖', py:'pàng', w:'胖乎乎', tip:'圆圆的肚子，就是胖乎乎，就是胖。', img:'assets/hanzi/h152.webp'},
  {c:'瘦', py:'shòu', w:'瘦瘦的', tip:'细细长长的，就是瘦瘦的，就是瘦。', img:'assets/hanzi/h153.webp'},
  {c:'快', py:'kuài', w:'很快', tip:'跑得飞快，像风一样，就是快。', img:'assets/hanzi/h154.webp'},
  {c:'慢', py:'màn', w:'慢慢', tip:'不着急，一步一步慢慢走，就是慢。', img:'assets/hanzi/h155.webp'},
  {c:'早', py:'zǎo', w:'早上', tip:'太阳升起来，就是早上，就是早。', img:'assets/hanzi/h156.webp'},
  {c:'晚', py:'wǎn', w:'晚上', tip:'太阳落山，天黑了，就是晚上，就是晚。', img:'assets/hanzi/h157.webp'},
  {c:'新', py:'xīn', w:'新衣服', tip:'崭崭新新的，就是新。', img:'assets/hanzi/h158.webp'},
  {c:'美', py:'měi', w:'美丽', tip:'打扮得漂漂亮亮，就是美。', img:'assets/hanzi/h159.webp'},
  {c:'香', py:'xiāng', w:'香喷喷', tip:'香味飘出来，香喷喷，就是香。', img:'assets/hanzi/h160.webp'},
  {c:'四', py:'sì', w:'四个', tip:'方方的框框，就是四。', img:'assets/hanzi/h161.webp'},
  {c:'五', py:'wǔ', w:'五个', tip:'一只手五个手指头，就是五。', img:'assets/hanzi/h162.webp'},
  {c:'六', py:'liù', w:'六个', tip:'一点一横下面八，就是六。', img:'assets/hanzi/h163.webp'},
  {c:'七', py:'qī', w:'七个', tip:'彩虹有七种颜色，就是七。', img:'assets/hanzi/h164.webp'},
  {c:'八', py:'bā', w:'八个', tip:'两条腿分开站，就是八。', img:'assets/hanzi/h165.webp'},
  {c:'九', py:'jiǔ', w:'九个', tip:'弯弯绕绕，就是九。', img:'assets/hanzi/h166.webp'},
  {c:'十', py:'shí', w:'十个', tip:'一横一竖十字路，就是十。', img:'assets/hanzi/h167.webp'},
  {c:'百', py:'bǎi', w:'一百', tip:'好多好多，数到一百，就是百。', img:'assets/hanzi/h168.webp'},
  {c:'千', py:'qiān', w:'一千', tip:'比一百还多得多，就是千。', img:'assets/hanzi/h169.webp'},
  {c:'万', py:'wàn', w:'一万', tip:'好大好大的数，就是万。', img:'assets/hanzi/h170.webp'},
  {c:'半', py:'bàn', w:'一半', tip:'东西分成两半，一人一半，就是半。', img:'assets/hanzi/h171.webp'},
  {c:'双', py:'shuāng', w:'双手', tip:'两只小鸟并排站，就是一双，就是双。', img:'assets/hanzi/h172.webp'},
  {c:'全', py:'quán', w:'全部', tip:'一个人站在屋檐下，大家全到齐，就是全。', img:'assets/hanzi/h173.webp'},
  {c:'猫', py:'māo', w:'小猫', tip:'田里的小兽喵喵叫，就是小猫，就是猫。', img:'assets/hanzi/h174.webp'},
  {c:'猪', py:'zhū', w:'小猪', tip:'圆滚滚的小猪，哼哼叫，就是猪。', img:'assets/hanzi/h175.webp'},
  {c:'鼠', py:'shǔ', w:'老鼠', tip:'小老鼠尖尖嘴，爱偷吃米，就是鼠。', img:'assets/hanzi/h176.webp'},
  {c:'猴', py:'hóu', w:'猴子', tip:'猴子爬树摘桃子，就是猴。', img:'assets/hanzi/h177.webp'},
  {c:'熊', py:'xióng', w:'大熊', tip:'大大的熊，力气也大，就是熊。', img:'assets/hanzi/h178.webp'},
  {c:'蛙', py:'wā', w:'青蛙', tip:'青蛙在水边呱呱叫，就是蛙。', img:'assets/hanzi/h179.webp'},
  {c:'蛇', py:'shé', w:'小蛇', tip:'弯弯曲曲的小蛇，吐着舌头，就是蛇。', img:'assets/hanzi/h180.webp'},
  {c:'蝶', py:'dié', w:'蝴蝶', tip:'蝴蝶扇着花翅膀，就是蝶。', img:'assets/hanzi/h181.webp'},
  {c:'蜂', py:'fēng', w:'蜜蜂', tip:'小蜜蜂采花蜜，嗡嗡嗡，就是蜂。', img:'assets/hanzi/h182.webp'},
  {c:'蚂', py:'mǎ', w:'蚂蚁', tip:'小蚂蚁搬粮食，排排队，就是蚂。', img:'assets/hanzi/h183.webp'},
  {c:'虾', py:'xiā', w:'大虾', tip:'弯着腰的大虾，就是虾。', img:'assets/hanzi/h184.webp'},
  {c:'蟹', py:'xiè', w:'螃蟹', tip:'螃蟹横着走，举着大钳子，就是蟹。', img:'assets/hanzi/h185.webp'},
  {c:'鸭', py:'yā', w:'鸭子', tip:'鸭子在水里嘎嘎叫，就是鸭。', img:'assets/hanzi/h186.webp'},
  {c:'鹅', py:'é', w:'白鹅', tip:'大白鹅伸长脖子唱歌，就是鹅。', img:'assets/hanzi/h187.webp'},
  {c:'鸡', py:'jī', w:'母鸡', tip:'母鸡咯咯叫，下鸡蛋，就是鸡。', img:'assets/hanzi/h188.webp'},
  {c:'燕', py:'yàn', w:'燕子', tip:'小燕子剪刀尾，春天飞回来，就是燕。', img:'assets/hanzi/h189.webp'},
  {c:'花', py:'huā', w:'花朵', tip:'草丛里开出花，就是花。', img:'assets/hanzi/h190.webp'},
  {c:'草', py:'cǎo', w:'小草', tip:'春天小草冒出头，就是草。', img:'assets/hanzi/h191.webp'},
  {c:'叶', py:'yè', w:'叶子', tip:'树上长出绿叶子，就是叶。', img:'assets/hanzi/h192.webp'},
  {c:'麦', py:'mài', w:'麦子', tip:'金黄的麦子熟了，就是麦。', img:'assets/hanzi/h193.webp'},
  {c:'茶', py:'chá', w:'茶叶', tip:'山上采下嫩茶叶，就是茶。', img:'assets/hanzi/h194.webp'},
  {c:'桃', py:'táo', w:'桃子', tip:'树上结桃子，粉粉的，就是桃。', img:'assets/hanzi/h195.webp'},
  {c:'梨', py:'lí', w:'梨子', tip:'梨树结梨子，甜甜的，就是梨。', img:'assets/hanzi/h196.webp'},
  {c:'虫', py:'chóng', w:'虫子', tip:'一条小虫扭啊扭，就是虫。', img:'assets/hanzi/h197.webp'},
  {c:'羽', py:'yǔ', w:'羽毛', tip:'两片羽毛轻飘飘，就是羽。', img:'assets/hanzi/h198.webp'},
  {c:'树', py:'shù', w:'大树', tip:'高高的大树，枝叶多，就是树。', img:'assets/hanzi/h199.webp'},
  {c:'舞', py:'wǔ', w:'跳舞', tip:'张开手臂转圈圈跳舞，就是舞。', img:'assets/hanzi/h200.webp'},
];
const hzcar = document.getElementById('hzcar');
function renderHanziCards(){
HANZI.forEach(h=>{
  const card = document.createElement('div');
  card.className = 'hzcard';
  card.innerHTML = `<img class="hzimg" loading="lazy" src="${h.img}" alt="${h.c}">`
    + `<div class="hzmain"><span class="hzpy">${h.py}</span><span class="hzchar">${h.c}</span></div>`
    + `<div class="hzword">${h.w}</div><div class="hztip">${h.tip}</div>`;
  const img = card.querySelector('.hzimg');
  img.onclick = ()=>{
    img.classList.remove('bounce'); void img.offsetWidth; img.classList.add('bounce');
    say(`${h.c}，${h.w}。${h.tip}`);
  };
  hzcar.appendChild(card);
});
}
function updateHzCount(){
  if(!hzcar.clientWidth) return;
  const i = Math.round(hzcar.scrollLeft / hzcar.clientWidth);
  document.getElementById('hzcount').textContent = `${i+1} / ${HANZI.length}`;
}
hzcar.addEventListener('scroll', updateHzCount, {passive:true});
let hzTarget = null;
function startHanziQuiz(){
  let answered = false;
  hzTarget = HANZI[Math.floor(Math.random()*HANZI.length)];
  const opts = [...HANZI.filter(h=>h!==hzTarget)].sort(()=>Math.random()-.5).slice(0,2).concat(hzTarget);
  opts.sort(()=>Math.random()-.5);
  document.getElementById('hzQ').textContent = `哪个是“${hzTarget.c}”？`;
  document.getElementById('hzFb').textContent = '';
  const box = document.getElementById('hzOpts');
  box.innerHTML = '';
  opts.forEach(h=>{
    const b = document.createElement('button');
    b.className = 'hzopt';
    b.textContent = h.c;
    b.onclick = ()=>{
      if(answered) return;
      if(h === hzTarget){
        answered = true;
        b.classList.add('ok');
        document.getElementById('hzFb').innerHTML = '<img class="starico" src="assets/icons/star.webp" alt="星"> 答对啦！';
        addStar();
        say(`答对啦！这是${h.c}，${h.w}。`);
        screenLater(startHanziQuiz, 1400);
      } else {
        say('再想想');
      }
    };
    box.appendChild(b);
  });
  go('hanziquiz');
  askHanzi();
}
function askHanzi(){ if(hzTarget) say(`哪个是${hzTarget.c}？`); }

/* ================= 认汉字：分级字库 ================= */
const HZP = {};
HANZI.forEach(x=>{ HZP[x.c] = x; });
let hzCurList = [], hzCurIdx = 0;
function renderHzHub(){
  const box = document.getElementById('hzGroups');
  box.innerHTML = '';
  HZ_GROUPS.forEach((g, gi)=>{
    const d = document.createElement('div');
    d.className = 'groupcard';
    d.innerHTML = `<div><div class="gn">${g.n}</div><div class="gs">${g.s}</div></div><div class="gc">${g.to - g.from} 字</div><div class="featgo">›</div>`;
    d.onclick = ()=>openHzGroup(gi);
    box.appendChild(d);
  });
}
function openHzGroup(gi){
  const g = HZ_GROUPS[gi];
  hzCurList = HZ_LIB.slice(g.from, g.to);
  document.getElementById('hzGridTitle').textContent = g.n;
  const box = document.getElementById('hzTiles');
  box.innerHTML = hzCurList.map((it, idx)=>`<div class="hztile" data-i="${idx}"><div class="hzc">${it[0]}</div><div class="hzp">${it[1]}</div></div>`).join('');
  box.scrollTop = 0;
  closeOverlay('hzDetail');
  go('hzgrid');
}
document.getElementById('hzTiles').addEventListener('click', e=>{
  const t = e.target.closest('.hztile');
  if(t) openHzDetail(+t.dataset.i);
});
function openHzDetail(idx){
  hzCurIdx = idx;
  hzdFill();
  showOverlay('hzDetail');
}
function hzdFill(){
  const it = hzCurList[hzCurIdx];
  const c = it[0];
  document.getElementById('hzdPy').textContent = it[1];
  document.getElementById('hzdChar').textContent = c;
  const rich = HZP[c];
  const img = document.getElementById('hzdImg'), w = document.getElementById('hzdWord'), tip = document.getElementById('hzdTip');
  if(rich){
    img.src = rich.img; img.style.display = 'block';
    w.textContent = rich.w; w.style.display = 'inline-block';
    tip.textContent = rich.tip; tip.style.display = 'block';
  } else {
    img.style.display = 'none'; w.style.display = 'none'; tip.style.display = 'none';
  }
}
document.getElementById('hzdClose').onclick = ()=>closeOverlay('hzDetail');
document.getElementById('hzDetail').addEventListener('click', e=>{ if(e.target.id === 'hzDetail') closeOverlay('hzDetail'); });
document.getElementById('hzdPrev').onclick = ()=>{ hzCurIdx = (hzCurIdx - 1 + hzCurList.length) % hzCurList.length; hzdFill(); };
document.getElementById('hzdNext').onclick = ()=>{ hzCurIdx = (hzCurIdx + 1) % hzCurList.length; hzdFill(); };
document.getElementById('hzdSpeak').onclick = ()=>{
  const it = hzCurList[hzCurIdx];
  const rich = HZP[it[0]];
  say(rich ? `${it[0]}，${rich.w}。${rich.tip}` : it[0]);
};
function hzDoSearch(){
  const q = document.getElementById('hzSearchInput').value.trim();
  const box = document.getElementById('hzSearchRes');
  box.innerHTML = '';
  if(!q) return;
  const found = [];
  [...q].forEach(ch=>{
    const hit = HZ_LIB.find(it=>it[0] === ch) || (HZP[ch] ? [ch, HZP[ch].py] : null);
    if(hit && !found.includes(hit)) found.push(hit);
  });
  if(!found.length){ box.innerHTML = '<p class="hzsearch-empty" role="status">还没有找到这个字。换个字试试，比如“日”或“月”。</p>'; return; }
  hzCurList = found;
  found.forEach((it, idx)=>{
    const d = document.createElement('div');
    d.className = 'hztile';
    d.style.width = '64px';
    d.innerHTML = `<div class="hzc">${it[0]}</div><div class="hzp">${it[1]}</div>`;
    d.onclick = ()=>showHzSearchResults(found,idx);
    box.appendChild(d);
  });
}
document.getElementById('hzSearchBtn').onclick = hzDoSearch;
document.getElementById('hzSearchInput').addEventListener('keydown', e=>{ if(e.key === 'Enter') hzDoSearch(); });

/* ================= 好习惯 ================= */
const HABITS = [
  {n:'刷牙', tip:'早晚刷牙，牙齿白白'},
  {n:'洗手', tip:'饭前便后洗洗手'},
  {n:'自己吃饭', tip:'大口吃饭长高高'},
  {n:'收拾玩具', tip:'玩完玩具送回家'},
  {n:'早早睡觉', tip:'睡好觉才能长个子'},
  {n:'自己穿衣服', tip:'衣服穿得整整齐齐'},
  {n:'说谢谢', tip:'谢谢要挂在嘴边'},
  {n:'不挑食', tip:'什么都吃身体棒'},
  {n:'自己穿鞋子', tip:'出门自己穿鞋子'},
  {n:'乖乖午睡', tip:'中午睡个小午觉'},
  {n:'多喝水', tip:'每天喝好多水'},
  {n:'说对不起', tip:'做错事要说对不起'},
  {n:'学会排队', tip:'排队不挤不抢'},
  {n:'不乱扔垃圾', tip:'垃圾扔进垃圾桶'},
  {n:'爱护图书', tip:'看书轻轻翻'},
  {n:'轻拿轻放', tip:'玩具轻拿轻放'},
  {n:'帮摆碗筷', tip:'帮妈妈摆碗筷'},
  {n:'见面问好', tip:'见面说声你好'},
  {n:'睡前晚安', tip:'睡觉说声晚安'},
  {n:'便后冲水', tip:'上完厕所冲冲水'},
];
function habitKey(){ const d = new Date(); return `habits_${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; }
function getHabits(){ return storedArray(habitKey()); }
function renderHabits(){
  const done = getHabits();
  const list = document.getElementById('habitList');
  list.innerHTML = '';
  HABITS.forEach((h,i)=>{
    const ok = done.includes(i);
    const b = document.createElement('button');
    b.className = 'hitem' + (ok ? ' done' : '');
    b.innerHTML = `<div class="hcheck">${ok ? '✓' : ''}</div><div><div class="t">${h.n}</div><div class="d">${h.tip}</div></div>`;
    b.onclick = ()=>{
      const cur = getHabits();
      if(cur.includes(i)){
        parkStorage.setItem(habitKey(), JSON.stringify(cur.filter(x=>x !== i)));
      } else {
        cur.push(i);
        parkStorage.setItem(habitKey(), JSON.stringify(cur));
        addStar();
        say(`${h.n}完成，真棒`);
      }
      renderHabits();
    };
    list.appendChild(b);
  });
  const n = getHabits().length;
  document.getElementById('habitSub').textContent = n === HABITS.length ? '今天的小习惯都完成啦' : `今日已完成 ${n} / ${HABITS.length}`;
}
function openHabits(){ renderHabits(); go('habits'); }

/* ================= 录音棚 ================= */
let stuSi = 0, mr = null, mChunks = [], recKey = null;
let dadOn = parkStorage.getItem('dad_voice') === '1';
function dadIdx(){ return storedArray('dad_keys'); }
function dadHas(k){ return dadIdx().includes(k); }
function idb(){
  return new Promise((res, rej)=>{
    const r = indexedDB.open('baobao', 1);
    r.onupgradeneeded = ()=>{ r.result.createObjectStore('recs'); };
    r.onsuccess = ()=>res(r.result);
    r.onerror = ()=>rej(r.error);
  });
}
async function idbPut(k, blob){
  const db = await idb();
  return new Promise((res, rej)=>{
    const tx = db.transaction('recs', 'readwrite');
    tx.objectStore('recs').put(blob, k);
    tx.oncomplete = ()=>res();
    tx.onerror = ()=>rej(tx.error);
  });
}
async function idbGet(k){
  const db = await idb();
  return new Promise((res, rej)=>{
    const tx = db.transaction('recs', 'readonly');
    const q = tx.objectStore('recs').get(k);
    q.onsuccess = ()=>res(q.result);
    q.onerror = ()=>rej(q.error);
  });
}
function toggleDad(){
  dadOn = !dadOn;
  parkStorage.setItem('dad_voice', dadOn ? '1' : '0');
  renderStudio();
  say(dadOn ? '已经换成你的录音啦' : '换回原来的声音');
}
function openStudio(i){
  stuSi = i;
  if(mr && mr.state === 'recording'){ try{ mr.stop(); }catch(e){} }
  renderStudio();
  go('studio');
}
function openStudioHome(){ openStudio(0); }
function renderStudio(){
  const s = STORIES[stuSi];
  document.getElementById('stuSub').textContent = `《${s.title}》共 ${s.pages.length} 页`;
  const tabs = document.getElementById('stuTabs');
  tabs.innerHTML = '';
  STORIES.forEach((x,i)=>{
    const b = document.createElement('button');
    b.className = 'cptab' + (i === stuSi ? ' on' : '');
    b.textContent = x.title;
    b.onclick = ()=>{ stuSi = i; if(mr && mr.state === 'recording'){ try{ mr.stop(); }catch(e){} } renderStudio(); };
    tabs.appendChild(b);
  });
  document.getElementById('dadSwitch').classList.toggle('on', dadOn);
  const list = document.getElementById('stuList');
  list.innerHTML = '';
  s.pages.forEach((p, pi)=>{
    const k = `dad_${stuSi}_${pi}`;
    const has = dadHas(k);
    const recing = recKey === k && mr && mr.state === 'recording';
    const d = document.createElement('div');
    d.className = 'stuitem';
    d.innerHTML = `<div class="pn">第 ${pi+1} 页</div><div class="pt">${p.t.slice(0, 20)}${p.t.length > 20 ? '…' : ''}</div>
      <div class="pbtns"><button class="stubtn${recing ? ' stop' : ''}">${recing ? '停止' : (has ? '重录' : '录音')}</button><button class="stubtn ghost2"${has ? '' : ' disabled'}>试听</button></div>`;
    const btns = d.querySelectorAll('button');
    btns[0].onclick = ()=>recToggle(k);
    btns[1].onclick = ()=>{ if(has) playDad(k); };
    list.appendChild(d);
  });
}
async function recToggle(k){
  if(mr && mr.state === 'recording'){ mr.stop(); return; }
  let stream;
  try{ stream = await navigator.mediaDevices.getUserMedia({audio:true}); }
  catch(e){ say('录音需要允许使用麦克风'); return; }
  mChunks = []; recKey = k;
  mr = new MediaRecorder(stream);
  mr.ondataavailable = e=>{ if(e.data && e.data.size) mChunks.push(e.data); };
  mr.onstop = async ()=>{
    stream.getTracks().forEach(t=>t.stop());
    try{
      const blob = new Blob(mChunks, {type: mr.mimeType || 'audio/mp4'});
      await idbPut(k, blob);
      const idx = dadIdx();
      if(!idx.includes(k)){ idx.push(k); parkStorage.setItem('dad_keys', JSON.stringify(idx)); }
      say('录好了，真棒');
    }catch(e){ say('保存失败，再试一次'); }
    mr = null; recKey = null;
    renderStudio();
  };
  mr.start();
  renderStudio();
}
async function playDad(k, onEnd = null){
  stopAll();
  const request = audioRequest;
  try{
    const blob = await idbGet(k);
    if(request !== audioRequest || document.hidden) return;
    if(!blob){ say('还没有录音'); return; }
    const url = URL.createObjectURL(blob);
    play(url, onEnd);
    curAudioUrl = url;
  }catch(e){ if(request === audioRequest) say('播放失败'); }
}

/* ================= 动物世界（近千物种） ================= */
let zooCat = ANIMAL_CATS[0], zooCur = null, zooList = [], zooIdx = 0;
function openZoo(){
  const tabs = document.getElementById('zooTabs');
  tabs.innerHTML = '';
  ANIMAL_CATS.forEach(c=>{
    const b = document.createElement('button');
    b.className = 'ztab' + (c===zooCat ? ' on' : '');
    b.textContent = c;
    b.onclick = ()=>{ zooCat = c; renderZoo(); };
    tabs.appendChild(b);
  });
  renderZoo();
  go('zoo');
}
function renderZoo(){
  [...document.getElementById('zooTabs').children].forEach(b=>b.classList.toggle('on', b.textContent===zooCat));
  const list = ANIMALS_ALL.filter(a=>a.c===zooCat);
  zooList = list;
  document.getElementById('zooCount').textContent = `${zooCat} · ${list.length} 种`;
  document.getElementById('zooQuizBtn').innerHTML = `<img class="btnico" src="assets/icons/find.webp" alt="">找一找：${zooCat}`;
  const g = document.getElementById('zooGrid');
  g.innerHTML = '';
  list.forEach((a,i)=>{
    const d = document.createElement('div');
    d.className = 'zcard';
    d.innerHTML = a.img
      ? `<img src="${a.img}" alt="${a.n}" loading="lazy"><div class="t">${a.n}</div>`
      : `<div class="e">${a.e}</div><div class="t">${a.n}</div>`;
    d.onclick = ()=>openZooDetail(a,i);
    g.appendChild(d);
  });
  g.scrollTop = 0;
}
const zdcar = document.getElementById('zdcar');
function renderZooDetail(){
  zdcar.innerHTML = '';
  zooList.forEach(a=>{
    const s = document.createElement('div');
    s.className = 'zdcard';
    s.innerHTML = `<div class="zdphoto">${a.img ? `<img loading="lazy" src="${a.img}" alt="${a.n}">` : `<div class="bigemoji">${a.e}</div>`}</div>`
      + `<div class="zdsec">`
      + `<div class="zdrow"><span class="k">分类</span><span class="v">${a.c}</span></div>`
      + `<div class="zdrow"><span class="k">叫声</span><span class="v">${a.s}</span></div>`
      + (a.en ? `<div class="zdrow"><span class="k">英文</span><span class="v">${a.en}</span><button class="enspk" title="读英文"><img src="assets/icons/speaker.webp" alt=""></button></div>` : '')
      + `</div>`
      + `<div class="zdsec"><h3>小知识</h3><p class="zdfact">${a.f}</p></div>`;
    const speakBtn = document.createElement('button');
    speakBtn.className = 'btn blue';
    speakBtn.style.cssText = 'width:100%;max-width:360px';
    speakBtn.innerHTML = '<span class="ic ic-spk"></span>朗读';
    speakBtn.onclick = ()=>say(`${a.n}。${a.s}。${a.f}`);
    s.appendChild(speakBtn);
    const realKey = window.REAL_AN && (REAL_AN[a.n] || REAL_AN[String(a.n).replace(/^小/, '')]);
    if(realKey){
      const sndBtn = document.createElement('button');
      sndBtn.className = 'btn';
      sndBtn.style.cssText = 'width:100%;max-width:360px;margin-top:10px';
      sndBtn.innerHTML = '<span class="ic ic-play"></span>听一听叫声';
      sndBtn.onclick = ()=>play('assets/audio/' + realKey);
      s.appendChild(sndBtn);
    }
    const en = s.querySelector('.enspk');
    if(en) en.onclick = ()=>sayEn(a.en);
    zdcar.appendChild(s);
  });
}
function openZooDetail(a,i){
  zooCur = a;
  zooIdx = (typeof i === 'number') ? i : Math.max(0, zooList.indexOf(a));
  renderZooDetail();
  document.getElementById('zdName').textContent = a.n;
  go('zoodetail');
  requestAnimationFrame(()=>{ zdcar.scrollTo({left: zooIdx * zdcar.clientWidth}); updateZdCount(); });
}
function updateZdCount(){
  if(!zooList.length || !zdcar.clientWidth) return;
  const i = Math.min(zooList.length - 1, Math.max(0, Math.round(zdcar.scrollLeft / zdcar.clientWidth)));
  zooIdx = i; zooCur = zooList[i];
  document.getElementById('zdcount').textContent = `${i+1} / ${zooList.length}`;
  if(zooCur) document.getElementById('zdName').textContent = zooCur.n;
}
zdcar.addEventListener('scroll', updateZdCount, {passive:true});
function zooSpeak(){ if(zooCur) say(`${zooCur.n}。${zooCur.s}。${zooCur.f}`); }
function sayEn(text){
  if(document.hidden) return;
  try{
    stopAll();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.85;
    const vs = speechSynthesis.getVoices();
    const v = vs.find(v=>v.lang && v.lang.toLowerCase().indexOf('en')===0);
    if(v) u.voice = v;
    speechSynthesis.speak(u);
  }catch(e){}
}
function speakEn(){ if(zooCur && zooCur.en) sayEn(zooCur.en); }

/* ================= 主题：彩色 / 纸质书 / 墨水屏 ================= */
const THEMES = ['color','paper','ink'];
const THEME_ICON = {color:'assets/icons/theme-paper.webp',paper:'assets/icons/theme-ink.webp',ink:'assets/icons/theme-color.webp'};
function curTheme(){
  if(document.body.classList.contains('paper')) return 'paper';
  if(document.body.classList.contains('ink')) return 'ink';
  return 'color';
}
function applyTheme(t){
  if(!THEMES.includes(t)) return;
  document.body.classList.remove('paper','ink');
  if(t==='paper'||t==='ink') document.body.classList.add(t);
  try{parkStorage.setItem('bb_theme', t);}catch(e){}
  if(typeof syncThemeUI === 'function') syncThemeUI();
}
function toggleTheme(){ applyTheme(THEMES[(THEMES.indexOf(curTheme())+1)%3]); }
(function initTheme(){
  try{
    const t = parkStorage.getItem('bb_theme');
    if(t==='paper'||t==='ink') applyTheme(t);
  }catch(e){}
})();

/* ================= 故事 ================= */
const STORY_CATS = [
  {id:'all', n:'全部'}, {id:'animal', n:'动物朋友'}, {id:'habit', n:'好习惯'},
  {id:'nature', n:'大自然'}, {id:'job', n:'交通职业'}, {id:'love', n:'爱与想象'}
];
function storyCatOf(i){
  const id = i + 1;
  if(id >= 6 && id <= 24) return 'animal';
  if(id >= 25 && id <= 43) return 'habit';
  if(id >= 44 && id <= 62) return 'nature';
  if(id >= 63 && id <= 82) return 'job';
  if(id >= 83) return 'love';
  return (id === 2 || id === 3 || id === 5) ? 'animal' : 'love';
}
let storyFilter = 'all';
function renderStoryChips(){
  const box = document.getElementById('storyChips');
  box.innerHTML = '';
  STORY_CATS.forEach(c=>{
    const n = c.id === 'all' ? STORIES.length : STORIES.filter((_,i)=>storyCatOf(i) === c.id).length;
    const b = document.createElement('button');
    b.className = 'chip' + (storyFilter === c.id ? ' on' : '');
    b.textContent = `${c.n} ${n}`;
    b.onclick = ()=>{ storyFilter = c.id; renderStoryChips(); renderStories(); };
    box.appendChild(b);
  });
}
function renderStories(){
  const slist = document.getElementById('slist');
  slist.innerHTML = '';
  STORIES.forEach((story,i)=>{
    if(storyFilter !== 'all' && storyCatOf(i) !== storyFilter) return;
    const item = document.createElement('article'); item.className = 'scard';
    const open = document.createElement('button'); open.className = 'story-open';
    open.setAttribute('aria-label','听故事：'+story.title);
    open.innerHTML = `<div class="covwrap"><img class="cov" loading="lazy" src="assets/icons/cover${i+1}.webp?v=3" alt=""></div><span class="t">${story.title}</span><span class="d">${story.pages.length} 页 · 约 1 分钟</span>`;
    open.onclick = ()=>openReader(i);
    const record = document.createElement('button'); record.className = 'micbtn';
    record.setAttribute('aria-label','给《'+story.title+'》录音'); record.innerHTML = uiIcon('mic');
    record.onclick = ()=>openStudio(i);
    item.append(open,record); slist.appendChild(item);
  });
}
function randomStory(){ openReader(Math.floor(Math.random() * STORIES.length)); }
// 夜空星星
const rs = document.getElementById('rstars');
for(let i=0;i<50;i++){
  const s = document.createElement('div');
  s.className = 'rstar';
  const sz = 2 + Math.random()*3;
  s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*70}%;width:${sz}px;height:${sz}px;animation-delay:${(Math.random()*3).toFixed(1)}s`;
  rs.appendChild(s);
}
let si = 0, cur = 0;
function openReader(i){
  si = i; cur = 0;
  document.getElementById('rtitle').textContent = STORIES[si].title;
  const rd = document.getElementById('rdots');
  rd.innerHTML = '';
  STORIES[si].pages.forEach((_,j)=>{
    const d = document.createElement('div');
    d.className = 'adot' + (j===0 ? ' on' : '');
    rd.appendChild(d);
  });
  go('reader');
  rGo(0);
}
function rGo(i){
  const pages = STORIES[si].pages;
  cur = Math.max(0, Math.min(pages.length-1, i));
  document.getElementById('remoji').textContent = pages[cur].e;
  document.getElementById('rtext').textContent = pages[cur].t;
  [...document.getElementById('rdots').children].forEach((d,j)=>d.classList.toggle('on', j===cur));
  document.getElementById('rprev').disabled = cur===0;
  document.getElementById('rnext').disabled = cur===pages.length-1;
  document.getElementById('readerProgress').textContent = '第 '+(cur+1)+' 页，共 '+pages.length+' 页';
  const last = cur===pages.length-1;
  document.getElementById('rtip').style.display = last ? 'block' : 'none';
  document.getElementById('rdonebar').style.display = last ? 'flex' : 'none';
  if(last) document.getElementById('rtip').innerHTML = '💡 给爸爸妈妈：' + STORIES[si].parentTip;
  rSpeak();
}
function rSpeak(){
  const onEnd = ()=>{
    const request = audioRequest;
    screenLater(()=>{
      if(request !== audioRequest) return;
      if(document.getElementById('reader').classList.contains('active') && cur < STORIES[si].pages.length - 1) rGo(cur + 1);
    }, 700);
  };
  const k = `dad_${si}_${cur}`;
  if(dadOn && dadHas(k)){ playDad(k, onEnd); return; }
  play(STORIES[si].pages[cur].a, onEnd);
}
function finishStory(){ if(!document.getElementById('reader').classList.contains('active')) return; addStar(); go('storylist'); }
function closeReader(){ go('storylist'); }

/* ================= 古诗 ================= */
let poemIdx = 0;
function openPoems(){ renderPoems(); go('poems'); }
function renderPoems(){
  const g = document.getElementById('poemGrid');
  g.innerHTML = '';
  POEMS.forEach((p, i)=>{
    const d = document.createElement('div');
    d.className = 'poemcard';
    const t = document.createElement('div'); t.className = 'pt'; t.textContent = p.t;
    const a = document.createElement('div'); a.className = 'pa'; a.textContent = p.a;
    d.appendChild(t); d.appendChild(a);
    d.onclick = ()=>openPoem(i);
    g.appendChild(d);
  });
}
function openPoem(i){
  poemIdx = Math.max(0, Math.min(POEMS.length - 1, i));
  const p = POEMS[poemIdx];
  document.getElementById('pvTitle').textContent = p.t;
  document.getElementById('pvAuthor').textContent = p.a;
  document.getElementById('pvLines').innerHTML = p.l.map(x=>`<div>${x}</div>`).join('');
  go('poemview');
  document.getElementById('pvPrev').disabled = poemIdx === 0;
  document.getElementById('pvNext').disabled = poemIdx === POEMS.length - 1;
}
function playPoem(){
  const onEnd = ()=>{
    const request = audioRequest;
    screenLater(()=>{
      if(request !== audioRequest) return;
      if(document.getElementById('poemview').classList.contains('active') && poemIdx < POEMS.length - 1){ openPoem(poemIdx + 1); playPoem(); }
    }, 900);
  };
  play('assets/audio/pm/pm' + poemIdx + '.mp3', onEnd);
}
function poemNav(d){ openPoem(poemIdx + d); }
function randomPoem(){ openPoem(Math.floor(Math.random() * POEMS.length)); playPoem(); }

/* ================= 涂色（点填画布） ================= */
const padCanvas = document.getElementById('padCanvas');
const padCtx = padCanvas.getContext('2d', {willReadFrequently:true});
let padLoadVersion = 0;
let padBase = null, padColor = PALETTE[2], padUndoStack = [], padEraserOn = false, padDoneFlag = false, padName = '';

function renderColorCats(){
  const box = document.getElementById('colorCats');
  box.innerHTML = '';
  COLORING_CATS.forEach(cat=>{
    const tpls = COLORING_TPL.filter(t=>t.c === cat);
    const d = document.createElement('div');
    d.className = 'hubcard';
    d.innerHTML = `<img loading="lazy" src="assets/coloring/${tpls[0].f}.webp" alt="${cat}"><div class="hn">${cat}</div><div class="hs">${tpls.length} 张图</div>`;
    d.onclick = ()=>openColorCat(cat);
    box.appendChild(d);
  });
}
function openColorCat(cat){
  document.getElementById('colorGridTitle').textContent = cat;
  const box = document.getElementById('tplGrid');
  box.innerHTML = '';
  COLORING_TPL.filter(t=>t.c === cat).forEach(t=>{
    const d = document.createElement('div');
    d.className = 'tplcard';
    d.innerHTML = `<img loading="lazy" src="assets/coloring/${t.f}.webp" alt="${t.n}"><div class="tn">${t.n}</div>`;
    d.onclick = ()=>openPad(t);
    box.appendChild(d);
  });
  go('colorgrid');
}
function openPad(t){
  padName = t.n;
  document.getElementById('padTitle').textContent = t.n;
  const loadVersion = ++padLoadVersion;
  padBase = null;
  document.getElementById('padFb').textContent = '正在准备画纸…';
  document.getElementById('padDoneBtn').disabled = true;
  padCtx.fillStyle = '#FFFFFF'; padCtx.fillRect(0, 0, padCanvas.width, padCanvas.height);
  document.getElementById('padUndoBtn').disabled = true;
  padUndoStack = []; padDoneFlag = false; padEraserOn = false;
  document.getElementById('padEraserBtn').classList.remove('on');
  go('colorpad');
  const img = new Image();
  img.onload = ()=>{
    if(loadVersion !== padLoadVersion || !document.getElementById('colorpad').classList.contains('active')) return;
    document.getElementById('padFb').textContent = '';
    document.getElementById('padDoneBtn').disabled = false;
    padCtx.fillStyle = '#FFFFFF';
    padCtx.fillRect(0, 0, padCanvas.width, padCanvas.height);
    padCtx.drawImage(img, 0, 0, padCanvas.width, padCanvas.height);
    padBase = padCtx.getImageData(0, 0, padCanvas.width, padCanvas.height);
  };
  img.onerror = ()=>{ if(loadVersion === padLoadVersion) document.getElementById('padFb').textContent = '画纸暂时没打开，换一张试试。'; };
  img.src = `assets/coloring/${t.f}.webp`;
}
function hexRgb(hex){
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
}
function padPushUndo(){
  document.getElementById('padUndoBtn').disabled = false;
  padUndoStack.push(padCtx.getImageData(0, 0, padCanvas.width, padCanvas.height));
  if(padUndoStack.length > 10) padUndoStack.shift();
}
function floodFill(sx, sy, rgb){
  if(!padBase || sx < 0 || sy < 0 || sx >= padCanvas.width || sy >= padCanvas.height) return;
  const w = padCanvas.width, h = padCanvas.height;
  const img = padCtx.getImageData(0, 0, w, h), d = img.data, bd = padBase.data;
  const isWall = i => bd[i] < 140;
  const si = (sy * w + sx) * 4;
  if(isWall(si)) return;
  if(d[si] === rgb[0] && d[si+1] === rgb[1] && d[si+2] === rgb[2]) return;
  padPushUndo();
  const seen = new Uint8Array(w * h);
  const stack = [[sx, sy]];
  while(stack.length){
    const pt = stack.pop();
    let x = pt[0]; const y = pt[1];
    if(seen[y * w + x]) continue;
    let i = (y * w + x) * 4;
    while(x >= 0 && !isWall(i) && !seen[y * w + x]){ x--; i -= 4; }
    x++; i += 4;
    let up = false, down = false;
    while(x < w && !isWall(i) && !seen[y * w + x]){
      seen[y * w + x] = 1;
      d[i] = rgb[0]; d[i+1] = rgb[1]; d[i+2] = rgb[2]; d[i+3] = 255;
      if(y > 0){
        const wu = isWall(i - w * 4) || seen[(y - 1) * w + x];
        if(!up && !wu){ stack.push([x, y-1]); up = true; } else if(wu) up = false;
      }
      if(y < h - 1){
        const wd = isWall(i + w * 4) || seen[(y + 1) * w + x];
        if(!down && !wd){ stack.push([x, y+1]); down = true; } else if(wd) down = false;
      }
      x++; i += 4;
    }
  }
  padCtx.putImageData(img, 0, 0);
}
padCanvas.addEventListener('pointerdown', e=>{
  const r = padCanvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - r.left) / r.width * padCanvas.width);
  const y = Math.floor((e.clientY - r.top) / r.height * padCanvas.height);
  floodFill(x, y, padEraserOn ? [255,255,255] : hexRgb(padColor));
});
(function buildPadPalette(){
  const pal = document.getElementById('palette2');
  PALETTE.forEach(c=>{
    const b = document.createElement('button');
    b.className = 'sw' + (c === padColor ? ' on' : '');
    b.style.background = c;
    b.setAttribute('aria-label', ({'#FF5A5A':'红色','#FF9A3D':'橙色','#FFD93D':'黄色','#52C75A':'绿色','#2EC4B6':'青绿色','#4FACFE':'蓝色','#7B4DFF':'紫色','#FF7BAC':'粉色','#8D5A3B':'棕色','#444444':'黑色','#B8B8B8':'灰色','#FFFFFF':'白色'})[c]);
    b.onclick = ()=>{ padColor = c; padEraserOn = false; document.getElementById('padEraserBtn').classList.remove('on'); pal.querySelectorAll('.sw').forEach(x=>x.classList.toggle('on', x === b)); };
    pal.appendChild(b);
  });
})();
document.getElementById('padUndoBtn').onclick = ()=>{
  const prev = padUndoStack.pop();
  if(prev) padCtx.putImageData(prev, 0, 0);
  document.getElementById('padUndoBtn').disabled = !padUndoStack.length;
};
document.getElementById('padEraserBtn').onclick = e=>{
  padEraserOn = !padEraserOn;
  e.currentTarget.classList.toggle('on', padEraserOn);
};
document.getElementById('padResetBtn').onclick = ()=>{
  if(padBase){ padPushUndo(); padCtx.putImageData(padBase, 0, 0); document.getElementById('padFb').textContent = ''; padDoneFlag = false; }
};
document.getElementById('padDoneBtn').onclick = ()=>{
  if(padDoneFlag || !padBase) return;
  padDoneFlag = true;
  addStar();
  document.getElementById('padFb').innerHTML = '涂完啦，太漂亮了！';
  say(padName + '涂完啦，太漂亮了');
};

/* ================= 家长门 ================= */
let gA = 0, gB = 0, gInput = '';
function openGate(){
  document.getElementById('gateTitle').textContent = '家长空间';
  document.getElementById('gateA').hidden = false;
  document.getElementById('gateClose').textContent = '返回乐园';
  gA = 3 + Math.floor(Math.random()*6);
  gB = 2 + Math.floor(Math.random()*5);
  gInput = '';
  document.getElementById('gateQ').textContent = `请算出 ${gA} + ${gB} = ?`;
  document.getElementById('gateA').textContent = '';
  document.getElementById('gateMsg').textContent = '';
  document.getElementById('gatePad').style.display = '';
  document.getElementById('gateOk').style.display = '';
  document.getElementById('gateDur').style.display = 'none';
  const pad = document.getElementById('gatePad');
  pad.innerHTML = '';
  [1,2,3,4,5,6,7,8,9,'clear',0,'backspace'].forEach(n=>{
    const b = document.createElement('button');
    b.textContent = n === 'clear' ? '清空' : n === 'backspace' ? '删除' : n;
    if(typeof n === 'string') b.className = 'key-action';
    b.onclick = ()=>gateInput(n);
    pad.appendChild(b);
  });
  syncSettings(); showOverlay('gateModal');
}
function gateCheck(){
  if(parseInt(gInput,10) === gA + gB){
    document.getElementById('gateTitle').textContent = '家长设置';
    document.getElementById('gateQ').textContent = '让每一段陪伴更从容。';
    document.getElementById('gateA').hidden = true;
    document.getElementById('gateClose').textContent = '完成设置';
    document.getElementById('gateA').textContent = '';
    document.getElementById('gatePad').style.display = 'none';
    document.getElementById('gateOk').style.display = 'none';
    document.getElementById('gateDur').style.display = 'block';
  } else {
    document.getElementById('gateMsg').textContent = '答案还不对，请再试一次。';
    gInput = '';
    document.getElementById('gateA').textContent = '';
  }
}
function closeGate(){ closeOverlay('gateModal'); }
function setRest(min){
  if(![10,15,20].includes(min)) return;
  restMin = min;
  parkStorage.setItem('park_rest_min', min);
  scheduleRest();
  syncSettings();
  showToast('已保存：每节 '+min+' 分钟');
}

/* ================= 记忆翻牌 ================= */
let memDiff = 6, memDeck = [], memFirst = -1, memLock = false, memFound = 0;
function openMemory(){ setMemDiff(6); go('memory'); }
function setMemDiff(n){
  clearScreenTasks(); stopAll();
  memDiff = n;
  const lv = [3,6,8];
  document.querySelectorAll('#memTabs .ztab').forEach((b,i)=>b.classList.toggle('on', lv[i]===n));
  startMemory();
}
function startMemory(){
  memFirst = -1; memLock = false; memFound = 0;
  const pool = localAnimalPool();
  const picks = [], used = new Set();
  while(picks.length < memDiff && picks.length < pool.length){
    const i = Math.floor(Math.random()*pool.length);
    if(!used.has(i)){ used.add(i); picks.push(pool[i]); }
  }
  memDeck = [];
  picks.forEach((a,k)=>{ memDeck.push({a,k}); memDeck.push({a,k}); });
  for(let i=memDeck.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=memDeck[i]; memDeck[i]=memDeck[j]; memDeck[j]=t; }
  const grid = document.getElementById('memGrid');
  grid.style.gridTemplateColumns = 'repeat(' + (memDiff<=3 ? 3 : 4) + ',1fr)';
  grid.innerHTML = memDeck.map((c,i)=>
    '<div class="memcard" id="mem'+i+'" onclick="flipMem('+i+')"><div class="mi">'+
    '<div class="mf mback"><img src="assets/icons/logo.webp" alt="翻牌"></div>'+
    '<div class="mf mfront"><img src="'+c.a.img+'" alt="'+c.a.n+'" loading="lazy"></div>'+
    '</div></div>').join('');
  document.getElementById('memFb').textContent = '记住小动物的位置，把相同的两张找出来';
}
function flipMem(i){
  if(memLock) return;
  const el = document.getElementById('mem'+i);
  if(!el || el.classList.contains('open') || el.classList.contains('done')) return;
  el.classList.add('open');
  const c = memDeck[i];
  say(c.a.n);
  if(memFirst < 0){ memFirst = i; return; }
  if(memFirst !== i && memDeck[memFirst].k === c.k){
    const f = document.getElementById('mem'+memFirst);
    memFirst = -1; memFound++;
    screenLater(()=>{ el.classList.add('done'); if(f) f.classList.add('done'); }, 350);
    if(memFound === memDiff){
      memLock = true;
      screenLater(()=>{
        addStar(); addStar(); addStar();
        document.getElementById('memFb').textContent = '太棒了，全部找到了！奖励 3 颗星';
        say('太棒了，全部找到了');
        memLock = false;
      }, 700);
    }
  } else {
    memLock = true;
    const f = document.getElementById('mem'+memFirst);
    memFirst = -1;
    screenLater(()=>{ el.classList.remove('open'); if(f) f.classList.remove('open'); memLock = false; }, 900);
  }
}
function peekMemory(){
  if(memLock) return;
  const rest = document.querySelectorAll('.memcard:not(.done)');
  if(!rest.length) return;
  memLock = true;
  rest.forEach(el=>el.classList.add('open'));
  say('看清楚，想一想');
  screenLater(()=>{ rest.forEach(el=>el.classList.remove('open')); memFirst = -1; memLock = false; }, 1600);
}

/* ================= 乐器小乐队 ================= */
let bandCtx = null, bandTab = 0, bandTaps = 0, bandNoise = null;
function bandAudio(){
  if(!bandCtx){ bandCtx = new (window.AudioContext || window.webkitAudioContext)(); }
  if(bandCtx.state === 'suspended') bandCtx.resume();
  return bandCtx;
}
function bandNoiseBuf(ctx){
  if(bandNoise) return bandNoise;
  const len = ctx.sampleRate * 0.5, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for(let i=0;i<len;i++) d[i] = Math.random()*2-1;
  bandNoise = buf; return buf;
}
const XYLO_NOTES = [
  {n:'哆',f:261.63,c:'#FF5A5A'},{n:'来',f:293.66,c:'#FF9F2E'},{n:'咪',f:329.63,c:'#FFD93D'},
  {n:'发',f:349.23,c:'#6BCB77'},{n:'唆',f:392.00,c:'#4D96FF'},{n:'拉',f:440.00,c:'#9B5DE5'},
  {n:'西',f:493.88,c:'#F15BB5'},{n:'哆',f:523.25,c:'#A86B3C'}
];
function xyloTone(f){
  const ctx = bandAudio(), t = ctx.currentTime;
  const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), g2 = ctx.createGain();
  o.type = 'sine'; o.frequency.value = f;
  o2.type = 'triangle'; o2.frequency.value = f * 2;
  g2.gain.value = 0.25;
  g.gain.setValueAtTime(0.85, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 1.4);
  o.connect(g); o2.connect(g2); g2.connect(g); g.connect(ctx.destination);
  o.start(t); o2.start(t); o.stop(t+1.5); o2.stop(t+1.5);
}
function drumHit(kind){
  const ctx = bandAudio(), t = ctx.currentTime;
  if(kind === 0){ // 大鼓：低音下扫
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.22);
    g.gain.setValueAtTime(1.0, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    o.connect(g); g.connect(ctx.destination);
    o.start(t); o.stop(t + 0.55);
  } else if(kind === 1){ // 小鼓：噪声+中音
    const src = ctx.createBufferSource(); src.buffer = bandNoiseBuf(ctx);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.8;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.9, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
    src.connect(bp); bp.connect(g); g.connect(ctx.destination);
    src.start(t); src.stop(t + 0.3);
    const o = ctx.createOscillator(), g2 = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = 210;
    g2.gain.setValueAtTime(0.5, t);
    g2.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
    o.connect(g2); g2.connect(ctx.destination);
    o.start(t); o.stop(t + 0.2);
  } else { // 铃鼓：高频抖动
    const src = ctx.createBufferSource(); src.buffer = bandNoiseBuf(ctx);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 6500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.55, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    src.connect(hp); hp.connect(g); g.connect(ctx.destination);
    src.start(t); src.stop(t + 0.25);
  }
}
function shakerHit(){
  const ctx = bandAudio(), t = ctx.currentTime;
  [0, 0.09].forEach(dt=>{
    const src = ctx.createBufferSource(); src.buffer = bandNoiseBuf(ctx);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 4200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.6, t + dt);
    g.gain.exponentialRampToValueAtTime(0.001, t + dt + 0.12);
    src.connect(hp); hp.connect(g); g.connect(ctx.destination);
    src.start(t + dt); src.stop(t + dt + 0.14);
  });
}
function bandHit(el){
  el.classList.add('hit');
  screenLater(()=>el.classList.remove('hit'), 140);
  bandTaps++;
  if(bandTaps >= 12){
    bandTaps = 0;
    addStar();
    document.getElementById('bandFb').textContent = '太好听了！奖励 1 颗星';
    say('太好听了');
  }
}
function openBand(){ setBandTab(0); go('band'); }
function setBandTab(n){
  clearScreenTasks(); stopAll();
  bandTab = n; bandTaps = 0;
  document.querySelectorAll('#bandTabs .ztab').forEach((b,i)=>b.classList.toggle('on', i===n));
  const st = document.getElementById('bandStage');
  if(n === 0){
    st.innerHTML = '<div class="xylo">' + XYLO_NOTES.map((x,i)=>
      '<button class="xbar" style="background:'+x.c+';height:'+(100-i*5)+'%" onclick="xyloTone('+x.f+');bandHit(this)">'+x.n+'</button>'
    ).join('') + '</div>';
    document.getElementById('bandFb').textContent = '敲敲彩色琴键，从"哆"一直敲到高音"哆"';
  } else if(n === 1){
    st.innerHTML = '<div class="drumset">' +
      '<button class="drumpad big" style="background:#FF6B6B" onclick="drumHit(0);bandHit(this)">大鼓<br><span style="font-size:13px">咚咚</span></button>' +
      '<button class="drumpad" style="background:#4D96FF" onclick="drumHit(1);bandHit(this)">小鼓<br><span style="font-size:13px">嗒嗒</span></button>' +
      '<button class="drumpad" style="background:#9B5DE5" onclick="drumHit(2);bandHit(this)">铃鼓<br><span style="font-size:13px">叮叮</span></button>' +
      '</div>';
    document.getElementById('bandFb').textContent = '拍一拍鼓面，每个鼓声音都不一样';
  } else {
    st.innerHTML = '<div class="shakers">' +
      '<button class="shaker" style="background:#FF9F2E" onclick="shakerHit();bandHit(this)">左手<br><span style="font-size:13px">摇一摇</span></button>' +
      '<button class="shaker" style="background:#6BCB77" onclick="shakerHit();bandHit(this)">右手<br><span style="font-size:13px">晃一晃</span></button>' +
      '</div>';
    document.getElementById('bandFb').textContent = '摇一摇沙锤，左手右手一起打拍子';
  }
}

/* ================= 认识情绪 ================= */
const EMOTIONS = [
  {id:'happy', name:'开心', line:'开心的时候，我们哈哈大笑，眼睛都眯成月牙啦！'},
  {id:'sad', name:'难过', line:'难过的时候想哭一哭，抱抱就会好起来。'},
  {id:'angry', name:'生气', line:'生气的时候小脸鼓鼓的，深呼吸三次，气就跑掉啦。'},
  {id:'scared', name:'害怕', line:'害怕的时候心跳砰砰响，抓住大人的手就不怕啦。'},
  {id:'surprised', name:'惊讶', line:'惊讶的时候眼睛瞪得圆圆的，嘴巴变成小圆圈！'},
  {id:'calm', name:'平静', line:'平静的时候心里安安静静，像湖面一样。'}
];
function faceSVG(mood){
  const base = '<circle cx="50" cy="52" r="40" fill="#FFD76E" stroke="#E8A94B" stroke-width="3"/>';
  const eye = '<g stroke="#5B3A1E" stroke-width="5" stroke-linecap="round" fill="none">';
  const dot = '<g fill="#5B3A1E">';
  let inner = '';
  if(mood==='happy'){
    inner = eye+'<path d="M28 44 Q35 34 42 44"/><path d="M58 44 Q65 34 72 44"/></g>'
      + '<ellipse cx="27" cy="64" rx="7" ry="5" fill="#FF9E9E" opacity=".85"/><ellipse cx="73" cy="64" rx="7" ry="5" fill="#FF9E9E" opacity=".85"/>'
      + '<path d="M30 60 Q50 84 70 60" stroke="#5B3A1E" stroke-width="5" stroke-linecap="round" fill="none"/>';
  } else if(mood==='sad'){
    inner = '<path d="M26 30 L40 37" stroke="#5B3A1E" stroke-width="4" stroke-linecap="round"/><path d="M74 30 L60 37" stroke="#5B3A1E" stroke-width="4" stroke-linecap="round"/>'
      + dot+'<circle cx="35" cy="48" r="5"/><circle cx="65" cy="48" r="5"/></g>'
      + '<path d="M72 56 q6 9 0 14 q-6 -5 0 -14" fill="#6DB6FF"/>'
      + '<path d="M32 76 Q50 64 68 76" stroke="#5B3A1E" stroke-width="5" stroke-linecap="round" fill="none"/>';
  } else if(mood==='angry'){
    inner = '<path d="M25 30 L43 41" stroke="#5B3A1E" stroke-width="5" stroke-linecap="round"/><path d="M75 30 L57 41" stroke="#5B3A1E" stroke-width="5" stroke-linecap="round"/>'
      + dot+'<circle cx="36" cy="52" r="5"/><circle cx="64" cy="52" r="5"/></g>'
      + '<path d="M34 74 L44 69 L54 75 L66 69" stroke="#5B3A1E" stroke-width="4" stroke-linecap="round" fill="none"/>';
  } else if(mood==='scared'){
    inner = '<circle cx="35" cy="46" r="10" fill="#fff" stroke="#5B3A1E" stroke-width="3"/><circle cx="65" cy="46" r="10" fill="#fff" stroke="#5B3A1E" stroke-width="3"/>'
      + dot+'<circle cx="35" cy="48" r="3.6"/><circle cx="65" cy="48" r="3.6"/></g>'
      + '<ellipse cx="50" cy="74" rx="7" ry="9" fill="#5B3A1E"/>';
  } else if(mood==='surprised'){
    inner = '<circle cx="35" cy="44" r="10" fill="#fff" stroke="#5B3A1E" stroke-width="3"/><circle cx="65" cy="44" r="10" fill="#fff" stroke="#5B3A1E" stroke-width="3"/>'
      + dot+'<circle cx="35" cy="46" r="3.6"/><circle cx="65" cy="46" r="3.6"/></g>'
      + '<ellipse cx="50" cy="74" rx="9" ry="11" fill="#8A4B2A" stroke="#5B3A1E" stroke-width="3"/>';
  } else {
    inner = eye+'<path d="M28 46 Q35 52 42 46"/><path d="M58 46 Q65 52 72 46"/></g>'
      + '<path d="M40 68 Q50 74 60 68" stroke="#5B3A1E" stroke-width="4" stroke-linecap="round" fill="none"/>';
  }
  return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">'+base+inner+'</svg>';
}
let emoQ = 0;
const EMO_QUIZ = [
  {t:'宝宝得到了最喜欢的糖果，他会怎么样？', a:'happy'},
  {t:'小朋友摔倒了，膝盖好痛，他的心情是？', a:'sad'},
  {t:'弟弟把姐姐搭好的积木推倒了，姐姐会？', a:'angry'},
  {t:'半夜打雷了，轰隆隆好响，宝宝觉得？', a:'scared'},
  {t:'妈妈突然从门后跳出来喊“抓到你啦”，宝宝？', a:'surprised'},
  {t:'宝宝躺在妈妈怀里，听着摇篮曲，他觉得？', a:'calm'},
  {t:'最心爱的玩具小熊找不到了，宝宝？', a:'sad'},
  {t:'生日蛋糕点着蜡烛，大家唱生日歌，宝宝？', a:'happy'}
];
function emoName(id){ const e = EMOTIONS.find(x=>x.id===id); return e ? e.name : ''; }
function openEmotion(){ setEmotionTab(0); go('emotion'); }
function setEmotionTab(n){
  clearScreenTasks(); stopAll();
  document.querySelectorAll('#emotionTabs .ztab').forEach((b,i)=>b.classList.toggle('on', i===n));
  document.getElementById('emotionLearn').style.display = n===0 ? '' : 'none';
  document.getElementById('emotionQuiz').style.display = n===1 ? '' : 'none';
  if(n===0) renderEmoCards();
  else { emoQ = 0; renderEmoQuiz(); }
}
function renderEmoCards(){
  document.getElementById('emotionGrid').innerHTML = EMOTIONS.map((e,i)=>
    '<div class="ecard" onclick="showEmo('+i+',this)">'+faceSVG(e.id)+'<div class="en">'+e.name+'</div></div>').join('');
  document.getElementById('emotionDetail').innerHTML = '<div class="eln">点一张表情卡，听听它的名字</div>';
}
function showEmo(i, el){
  const e = EMOTIONS[i];
  document.querySelectorAll('#emotionGrid .ecard').forEach(c=>c.classList.remove('on'));
  if(el) el.classList.add('on');
  document.getElementById('emotionDetail').innerHTML = faceSVG(e.id)+'<div class="enm">'+e.name+'</div><div class="eln">'+e.line+'</div>';
  say(e.name+'。'+e.line);
}
function renderEmoQuiz(){
  const q = EMO_QUIZ[emoQ];
  document.getElementById('eqText').textContent = '第 '+(emoQ+1)+' 题：'+q.t;
  document.getElementById('eqFb').textContent = '';
  const pool = EMOTIONS.filter(e=>e.id!==q.a).sort(()=>Math.random()-.5).slice(0,2);
  const opts = [EMOTIONS.find(e=>e.id===q.a)].concat(pool).sort(()=>Math.random()-.5);
  document.getElementById('eqOpts').innerHTML = opts.map(e=>
    '<div class="eopt" onclick="answerEmo(\''+e.id+'\',this)">'+faceSVG(e.id)+'<div class="en2">'+e.name+'</div></div>').join('');
}
function eqListen(){ say(EMO_QUIZ[emoQ].t); }
function answerEmo(id, el){
  const q = EMO_QUIZ[emoQ];
  if(id === q.a){
    el.classList.add('right');
    addStar();
    say('对啦，就是'+emoName(id)+'！');
    emoQ++;
    screenLater(()=>{
      if(emoQ >= EMO_QUIZ.length){
        const rounds = +(parkStorage.getItem('park_emotion_rounds')||0)+1;
        parkStorage.setItem('park_emotion_rounds', rounds);
        document.getElementById('eqText').textContent = '全部答对，太棒了！';
        document.getElementById('eqOpts').innerHTML = '';
        document.getElementById('eqFb').textContent = '你认识了 '+EMOTIONS.length+' 种情绪，马上再来一轮～';
        say('全部答对，你真是个懂情绪的小高手！');
        screenLater(()=>{ emoQ = 0; renderEmoQuiz(); }, 4000);
      } else renderEmoQuiz();
    }, 1200);
  } else {
    say('再想一想，他的心情是什么呢？');
    document.getElementById('eqFb').textContent = '再想一想～';
  }
}

/* ================= 影子找朋友 ================= */
let shdDiff = 3, shdPairs = [], shdSel = -1, shdFound = 0, shdLock = false;
function openShadow(){ setShdDiff(3); go('shadow'); }
function setShdDiff(n){
  clearScreenTasks(); stopAll();
  shdDiff = n;
  const lv = [2,3,4];
  document.querySelectorAll('#shdTabs .ztab').forEach((b,i)=>b.classList.toggle('on', lv[i]===n));
  startShadow();
}
function shdPick(){
  const pool = ANIMALS_ALL.filter(a=>a.img);
  const picks = [], used = new Set();
  while(picks.length < shdDiff && picks.length < pool.length){
    const i = Math.floor(Math.random()*pool.length);
    if(!used.has(i)){ used.add(i); picks.push(pool[i]); }
  }
  return picks;
}
function startShadow(){
  shdPairs = shdPick(); shdSel = -1; shdFound = 0; shdLock = false;
  document.getElementById('shdTop').innerHTML = shdPairs.map((a,i)=>
    '<div class="shdcard shdsil" id="shdT'+i+'" onclick="tapShd('+i+')"><img src="'+a.img+'" alt="影子" loading="lazy"><div class="shdname" id="shdN'+i+'">？</div></div>').join('');
  const order = shdPairs.map((a,i)=>i).sort(()=>Math.random()-.5);
  document.getElementById('shdBottom').innerHTML = order.map(i=>
    '<div class="shdcard" id="shdB'+i+'" onclick="tapShdColor('+i+')"><img src="'+shdPairs[i].img+'" alt="'+shdPairs[i].n+'" loading="lazy"><div class="shdname">'+shdPairs[i].n+'</div></div>').join('');
  document.getElementById('shdFb').textContent = '看看黑影子的轮廓，找到它的真身';
}
function tapShd(i){
  if(shdLock) return;
  const el = document.getElementById('shdT'+i);
  if(!el || el.classList.contains('done')) return;
  document.querySelectorAll('#shdTop .shdcard').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  shdSel = i;
  say('这是谁的影子呢？点一点下面的动物找一找');
}
function tapShdColor(i){
  if(shdLock) return;
  if(shdSel < 0){ say('先选一个黑影子，再找它的真身'); return; }
  const t = document.getElementById('shdT'+shdSel);
  if(i === shdSel){
    shdLock = true;
    t.classList.remove('sel','shdsil'); t.classList.add('done');
    document.getElementById('shdN'+shdSel).textContent = shdPairs[shdSel].n;
    const b = document.getElementById('shdB'+i);
    if(b) b.classList.add('done');
    addStar();
    const nm = shdPairs[shdSel].n;
    shdFound++;
    document.getElementById('shdFb').textContent = '找对啦，这是'+nm+'！';
    say('找对啦，这是'+nm);
    const done = shdFound === shdPairs.length;
    screenLater(()=>{
      shdSel = -1; shdLock = false;
      if(done){
        addStar(); addStar();
        const rounds = +(parkStorage.getItem('park_shadow_rounds')||0)+1;
        parkStorage.setItem('park_shadow_rounds', rounds);
        document.getElementById('shdFb').textContent = '全部找对，太厉害了！奖励 3 颗星';
        say('全部找对，你的眼睛真厉害');
        screenLater(()=>startShadow(), 3500);
      }
    }, 900);
  } else {
    say('再看一看，影子的轮廓长什么样呢？');
    document.getElementById('shdFb').textContent = '再看一看影子的轮廓～';
  }
}
function peekShadow(){
  if(shdLock) return;
  const rest = document.querySelectorAll('#shdTop .shdcard:not(.done)');
  if(!rest.length) return;
  shdLock = true;
  rest.forEach(el=>el.classList.remove('shdsil'));
  say('看清楚，记住它们的样子');
  screenLater(()=>{ rest.forEach(el=>{ if(!el.classList.contains('done')) el.classList.add('shdsil'); }); shdLock = false; }, 1600);
}

/* 颜色魔法师 v5.1 */
const MIX_PAINTS=[
  {id:'red',name:'红色',css:'#E8452C'},
  {id:'yellow',name:'黄色',css:'#F6C90E'},
  {id:'blue',name:'蓝色',css:'#3E7DE0'},
  {id:'white',name:'白色',css:'#FFFFFF'},
  {id:'black',name:'黑色',css:'#2B2B2B'}
];
const MIX_RULES={
  'black+blue':{name:'深蓝色',css:'#1F3A8C'},'black+red':{name:'深红色',css:'#8C1F28'},
  'black+white':{name:'灰色',css:'#9AA0A6'},'black+yellow':{name:'橄榄色',css:'#8A7B2D'},
  'blue+red':{name:'紫色',css:'#8E44AD'},'blue+white':{name:'浅蓝色',css:'#9BC8F0'},
  'blue+yellow':{name:'绿色',css:'#4CAF50'},'red+white':{name:'粉色',css:'#F29BB4'},
  'red+yellow':{name:'橙色',css:'#F5850B'},'white+yellow':{name:'奶黄色',css:'#F9E39A'},
  'red+red':{name:'红色',css:'#E8452C'},'yellow+yellow':{name:'黄色',css:'#F6C90E'},
  'blue+blue':{name:'蓝色',css:'#3E7DE0'},'white+white':{name:'白色',css:'#FFFFFF'},
  'black+black':{name:'黑色',css:'#2B2B2B'}
};
const MIX_KEY_ORDER=Object.keys(MIX_RULES);
let mixSel=[], mixStirs=0;
function getMixFound(){ return storedArray('park_mix_found'); }
function openMixlab(){
  mixSel=[]; mixStirs=0;
  const pal=document.getElementById('mixPal'); pal.innerHTML='';
  MIX_PAINTS.forEach(p=>{
    const b=document.createElement('button');
    b.className='mixsw'; b.style.background=p.css; b.setAttribute('aria-label',p.name);
    b.onclick=()=>pickPaint(p.id); pal.appendChild(b);
  });
  clearMix(true);
  document.getElementById('mixResDot').style.background='#fff';
  document.getElementById('mixResName').textContent='？';
  renderMixBook(); go('mixlab');
}
function pickPaint(id){
  if(mixSel.length>=2) return;
  mixSel.push(id);
  const p=MIX_PAINTS.find(x=>x.id===id); say(p.name);
  for(let i=0;i<mixSel.length;i++){
    const q=MIX_PAINTS.find(x=>x.id===mixSel[i]);
    document.getElementById('mixSlot'+i).innerHTML='<div class="mixdrop" style="background:'+q.css+'"></div>';
  }
}
function clearMix(silent){
  mixSel=[];
  for(let i=0;i<2;i++) document.getElementById('mixSlot'+i).textContent='❓';
  if(!silent) document.getElementById('mixFb').textContent='先点两种颜色，再按搅拌魔法';
}
function stirMix(){
  if(mixSel.length<2){
    say('再选一种颜色');
    document.getElementById('mixFb').textContent='再选一种颜色';
    return;
  }
  const pair=mixSel.slice().sort();
  const key=pair[0]+'+'+pair[1];
  const res=MIX_RULES[key];
  const pa=MIX_PAINTS.find(x=>x.id===pair[0]).name, pb=MIX_PAINTS.find(x=>x.id===pair[1]).name;
  const dot=document.getElementById('mixResDot');
  dot.style.background=res.css; dot.classList.remove('pop'); void dot.offsetWidth; dot.classList.add('pop');
  document.getElementById('mixResName').textContent=res.name;
  const found=getMixFound();
  const isNew=found.indexOf(key)<0;
  if(isNew){ found.push(key); parkStorage.setItem('park_mix_found', JSON.stringify(found)); }
  renderMixBook();
  const msg = pair[0]===pair[1] ? pa+'加'+pa+'，还是'+res.name+'！' : pa+'加'+pb+'，变成'+res.name+'啦！';
  document.getElementById('mixFb').textContent=(isNew?'🎉 新发现！':'')+msg;
  say((isNew?'新发现，':'')+msg);
  mixStirs++;
  if(found.length===MIX_KEY_ORDER.length){ addStar(); say('魔法食谱集齐了，你是调色大师'); }
  else if(isNew || mixStirs%3===0){ addStar(); }
  for(let i=0;i<2;i++) document.getElementById('mixSlot'+i).textContent='❓';
  mixSel=[];
}
function renderMixBook(){
  const g=document.getElementById('mixGrid'); if(!g) return; g.innerHTML='';
  const found=getMixFound(); let done=0;
  MIX_KEY_ORDER.forEach(k=>{
    const r=MIX_RULES[k]; const has=found.indexOf(k)>=0; if(has) done++;
    const d=document.createElement('div');
    d.className='mixrcp'+(has?'':' locked');
    d.innerHTML='<div class="mixrcpdot"'+(has?' style="background:'+r.css+'"':'')+'></div><div class="mixrcpt">'+(has?r.name:'？')+'</div>';
    g.appendChild(d);
  });
  document.getElementById('mixBookH').textContent='📖 魔法食谱（已发现 '+done+' / '+MIX_KEY_ORDER.length+'）';
}


/* 我会刷牙 v5.2 */
const HYG_SVGS={
cup:'<svg viewBox="0 0 64 64"><rect x="38" y="6" width="7" height="26" rx="3.5" fill="#F29BB4"/><rect x="36" y="2" width="11" height="10" rx="3" fill="#fff" stroke="#E8A96C" stroke-width="2.5"/><path d="M18 18h28l-3.4 32a5 5 0 0 1-5 5h-11.2a5 5 0 0 1-5-5z" fill="#7ED6F2" stroke="#3E7DE0" stroke-width="3"/><rect x="18" y="18" width="28" height="6" fill="#3E7DE0"/></svg>',
paste:'<svg viewBox="0 0 64 64"><g transform="rotate(-18 22 20)"><rect x="14" y="10" width="16" height="24" rx="5" fill="#F29BB4" stroke="#D96A8E" stroke-width="2.5"/><rect x="18" y="4" width="8" height="8" rx="2" fill="#8E44AD"/></g><rect x="30" y="42" width="24" height="8" rx="4" fill="#3E7DE0"/><ellipse cx="42" cy="46" rx="8" ry="4.5" fill="#fff"/><path d="M34 40c-2-7 3-12 9-11" stroke="#fff" stroke-width="4.5" stroke-linecap="round" fill="none"/></svg>',
brush:'<svg viewBox="0 0 64 64"><path d="M20 8h24c4.5 0 8 3.5 8 8v7c0 4-2 6-4 10.5C46 39 44 46 40 46c-4.5 0-3.5-10-8-10s-3.5 10-8 10c-4 0-6-7-8-12.5C14 29 12 27 12 23v-7c0-4.5 3.5-8 8-8z" fill="#fff" stroke="#D9CFC2" stroke-width="2.5"/><circle cx="26" cy="21" r="2.6" fill="#4A3F35"/><circle cx="38" cy="21" r="2.6" fill="#4A3F35"/><path d="M27 28c2.4 2.4 7.6 2.4 10 0" stroke="#4A3F35" stroke-width="2.2" fill="none" stroke-linecap="round"/><rect x="36" y="44" width="24" height="8" rx="4" fill="#3E7DE0" transform="rotate(-20 48 48)"/><circle cx="12" cy="12" r="3" fill="#F6C90E"/><circle cx="54" cy="12" r="2.4" fill="#F6C90E"/></svg>',
rinse:'<svg viewBox="0 0 64 64"><path d="M18 18h28l-3.2 30a5 5 0 0 1-5 5H26.2a5 5 0 0 1-5-5z" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="3"/><path d="M20 30c4-3.4 8 3.4 12 0s8 3.4 12 0" stroke="#3E7DE0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="51" cy="10" r="3" fill="#7ED6F2"/><circle cx="57" cy="20" r="2.2" fill="#7ED6F2"/></svg>',
spit:'<svg viewBox="0 0 64 64"><path d="M12 52c6 4.5 12-4.5 18 0s12-4.5 18 0" stroke="#E8A96C" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="22" cy="38" r="5" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="2"/><circle cx="35" cy="27" r="7" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="2"/><circle cx="47" cy="37" r="4" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="2"/><circle cx="28" cy="12" r="3" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="2"/><circle cx="44" cy="14" r="2.4" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="2"/></svg>',
towel:'<svg viewBox="0 0 64 64"><rect x="10" y="22" width="44" height="26" rx="8" fill="#F9E39A" stroke="#E8A96C" stroke-width="3"/><path d="M10 32h44" stroke="#E8A96C" stroke-width="2.5"/><path d="M24 41c3 3 9 3 12 0" stroke="#D96A8E" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="50" cy="12" r="3" fill="#F6C90E"/></svg>',
tap:'<svg viewBox="0 0 64 64"><rect x="12" y="10" width="10" height="24" rx="4" fill="#9AA0A6" stroke="#6B7280" stroke-width="2.5"/><rect x="12" y="6" width="24" height="9" rx="4.5" fill="#9AA0A6" stroke="#6B7280" stroke-width="2.5"/><rect x="28" y="2" width="7" height="9" rx="3" fill="#6B7280"/><path d="M22 15h10a6 6 0 0 1 6 6v5h-9v-4h-7z" fill="#9AA0A6" stroke="#6B7280" stroke-width="2.5"/><path d="M34 34c2.6 4.2 2.6 7.4 0 10.6-2.6-3.2-2.6-6.4 0-10.6z" fill="#3E7DE0"/><path d="M34 48c2 3.4 2 6 0 8.6-2-2.6-2-5.2 0-8.6z" fill="#7ED6F2"/></svg>',
wet:'<svg viewBox="0 0 64 64"><rect x="15" y="12" width="7" height="22" rx="3.5" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><rect x="25" y="12" width="7" height="22" rx="3.5" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><rect x="35" y="12" width="7" height="22" rx="3.5" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><rect x="45" y="14" width="7" height="20" rx="3.5" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><ellipse cx="33" cy="45" rx="13" ry="11" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><ellipse cx="19" cy="44" rx="4" ry="7" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5" transform="rotate(25 19 44)"/><path d="M52 2c2.6 4.2 2.6 7.4 0 10.6-2.6-3.2-2.6-6.4 0-10.6z" fill="#3E7DE0"/><path d="M59 10c2 3.4 2 6 0 8.6-2-2.6-2-5.2 0-8.6z" fill="#7ED6F2"/></svg>',
soap:'<svg viewBox="0 0 64 64"><rect x="10" y="26" width="38" height="20" rx="10" fill="#F29BB4" stroke="#D96A8E" stroke-width="3"/><path d="M19 33c3.5-2.4 8-2.4 11.5 0" stroke="#fff" stroke-width="2.5" fill="none" opacity=".75" stroke-linecap="round"/><circle cx="52" cy="16" r="5" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="2"/><circle cx="42" cy="9" r="3" fill="#BEE7FB" stroke="#3E7DE0" stroke-width="2"/></svg>',
rub:'<svg viewBox="0 0 64 64"><circle cx="17" cy="30" r="3.6" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><circle cx="25" cy="28" r="3.6" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><circle cx="33" cy="30" r="3.6" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><ellipse cx="25" cy="40" rx="10" ry="9" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><circle cx="33" cy="22" r="3.6" fill="#FFE4C4" stroke="#E8A96C" stroke-width="2.5"/><circle cx="41" cy="20" r="3.6" fill="#FFE4C4" stroke="#E8A96C" stroke-width="2.5"/><circle cx="49" cy="22" r="3.6" fill="#FFE4C4" stroke="#E8A96C" stroke-width="2.5"/><ellipse cx="41" cy="32" rx="10" ry="9" fill="#FFE4C4" stroke="#E8A96C" stroke-width="2.5"/><path d="M8 16c5-6 12-9 19-9" stroke="#F6C90E" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M56 50c-5 3.4-11 5-17 5" stroke="#F6C90E" stroke-width="3.5" fill="none" stroke-linecap="round"/></svg>',
rinse2:'<svg viewBox="0 0 64 64"><path d="M22 4v12M32 4v12M42 4v12" stroke="#3E7DE0" stroke-width="4.5" stroke-linecap="round"/><path d="M22 22c1.8 3 1.8 5.6 0 8.4M32 22c1.8 3 1.8 5.6 0 8.4M42 22c1.8 3 1.8 5.6 0 8.4" stroke="#7ED6F2" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="32" cy="46" rx="12" ry="10" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/></svg>',
dry:'<svg viewBox="0 0 64 64"><ellipse cx="32" cy="20" rx="11" ry="10" fill="#FFD9B3" stroke="#E8A96C" stroke-width="2.5"/><rect x="10" y="34" width="44" height="20" rx="8" fill="#F9E39A" stroke="#E8A96C" stroke-width="3"/><path d="M10 44h44" stroke="#E8A96C" stroke-width="2.5"/><path d="M25 28c2.5 2.5 6.5 2.5 9 0" stroke="#E8A96C" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>'
};
const HYG_TABS=[
  {name:'刷牙',steps:[
    {id:'cup',name:'拿起牙杯'},{id:'paste',name:'挤上牙膏'},{id:'brush',name:'刷呀刷'},
    {id:'rinse',name:'漱漱口'},{id:'spit',name:'吐掉泡泡'},{id:'towel',name:'擦干净嘴巴'}]},
  {name:'洗手',steps:[
    {id:'tap',name:'打开水龙头'},{id:'wet',name:'打湿小手'},{id:'soap',name:'抹上肥皂'},
    {id:'rub',name:'搓一搓'},{id:'rinse2',name:'冲干净'},{id:'dry',name:'擦干小手'}]}
];
let hygTab=0, hygOrder=[], hygNext=0;
function openHygiene(){ setHygTab(0); go('hygiene'); }
function setHygTab(t){
  clearScreenTasks(); stopAll();
  hygTab=t;
  document.getElementById('hygTab0').classList.toggle('on',t===0);
  document.getElementById('hygTab1').classList.toggle('on',t===1);
  startHygRound();
}
function startHygRound(){
  const tab=HYG_TABS[hygTab];
  hygOrder=tab.steps.slice();
  for(let i=hygOrder.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const tmp=hygOrder[i];hygOrder[i]=hygOrder[j];hygOrder[j]=tmp;}
  hygNext=0;
  const g=document.getElementById('hygGrid'); g.innerHTML='';
  hygOrder.forEach(function(s,idx){
    const d=document.createElement('div');
    d.className='hygcard'; d.id='hyg_'+s.id;
    d.innerHTML=HYG_SVGS[s.id]+'<div class="hn">'+s.name+'</div><div class="hord"></div>';
    d.onclick=function(){tapHyg(idx);};
    g.appendChild(d);
  });
  document.getElementById('hygLabel').textContent='按顺序点一点：'+tab.name+'第一步是什么呢？';
  document.getElementById('hygFb').textContent='点卡片听步骤名，按正确顺序点完';
  say(tab.name+'第一步是什么呢？按顺序点一点');
}
function tapHyg(idx){
  const tab=HYG_TABS[hygTab]; const s=hygOrder[idx];
  const el=document.getElementById('hyg_'+s.id);
  if(el.classList.contains('done')){ say(s.name); return; }
  const expect=tab.steps[hygNext];
  if(s.id===expect.id){
    el.classList.add('done');
    el.querySelector('.hord').textContent='第'+(hygNext+1)+'步';
    hygNext++; addStar();
    const label=document.getElementById('hygLabel'), fb=document.getElementById('hygFb');
    if(hygNext>=tab.steps.length){
      try{parkStorage.setItem('park_hyg_rounds',String((parseInt(parkStorage.getItem('park_hyg_rounds')||'0',10)||0)+1));}catch(e){}
      addStar(); addStar(); addStar();
      fb.textContent='太棒了！'+tab.name+'成功';
      label.textContent=tab.name+'完成了，真能干！';
      say('太棒了，'+tab.name+'成功！');
      screenLater(startHygRound,3500);
    }else{
      fb.textContent='对啦！下一步：'+tab.steps[hygNext].name;
      label.textContent='按顺序点一点：'+tab.name+'第'+(hygNext+1)+'步是什么呢？';
      say('对啦，下一步'+tab.steps[hygNext].name);
    }
  }else{
    say(s.name);
    el.classList.remove('wrong'); void el.offsetWidth; el.classList.add('wrong');
    document.getElementById('hygFb').textContent='再想想，这个不是第'+(hygNext+1)+'步哦';
    screenLater(function(){say('再想想，这个不是第'+(hygNext+1)+'步哦');},600);
  }
}
function hygHint(){
  const tab=HYG_TABS[hygTab]; const expect=tab.steps[hygNext];
  if(!expect) return;
  const el=document.getElementById('hyg_'+expect.id);
  el.classList.add('hint');
  say(expect.name+'是第'+(hygNext+1)+'步');
  screenLater(function(){el.classList.remove('hint');},1600);
}

/* 动物食堂 v5.3 */
const FEED_FOODS={
bone:{name:'大骨头',svg:'<svg viewBox="0 0 64 64"><g transform="rotate(-24 32 32)"><rect x="18" y="26" width="28" height="12" rx="6" fill="#FFF6E9" stroke="#E8CFA8" stroke-width="2.5"/><circle cx="16" cy="25" r="7" fill="#FFF6E9" stroke="#E8CFA8" stroke-width="2.5"/><circle cx="16" cy="39" r="7" fill="#FFF6E9" stroke="#E8CFA8" stroke-width="2.5"/><circle cx="48" cy="25" r="7" fill="#FFF6E9" stroke="#E8CFA8" stroke-width="2.5"/><circle cx="48" cy="39" r="7" fill="#FFF6E9" stroke="#E8CFA8" stroke-width="2.5"/></g></svg>'},
fish:{name:'小鱼',svg:'<svg viewBox="0 0 64 64"><path d="M8 32l12-13v26z" fill="#F29BB4"/><ellipse cx="32" cy="32" rx="17" ry="12" fill="#F6A96C" stroke="#E0864A" stroke-width="2.5"/><circle cx="38" cy="28" r="2.6" fill="#4A3F35"/><path d="M22 26c4 6 4 6 0 12" stroke="#E0864A" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>'},
carrot:{name:'胡萝卜',svg:'<svg viewBox="0 0 64 64"><path d="M26 22c-3 14-2 26 2 34 4-8 8-20 6-34z" fill="#F68B3E" stroke="#D96F22" stroke-width="2.5"/><path d="M28 14c-4-6-3-10 2-12 1 5 1 8 0 11 4-4 8-5 12-4-2 4-8 8-14 5z" fill="#58B368" stroke="#3E8F4E" stroke-width="2.5"/><path d="M26 32h6M26 40h7" stroke="#D96F22" stroke-width="2.5" stroke-linecap="round"/></svg>'},
bamboo:{name:'竹子',svg:'<svg viewBox="0 0 64 64"><rect x="24" y="8" width="16" height="50" rx="8" fill="#58B368" stroke="#3E8F4E" stroke-width="2.5"/><path d="M24 24h16M24 40h16" stroke="#3E8F4E" stroke-width="2.5"/><ellipse cx="40" cy="14" rx="8" ry="5" fill="#7ED6A0" stroke="#3E8F4E" stroke-width="2.5" transform="rotate(-25 40 14)"/><ellipse cx="24" cy="30" rx="8" ry="5" fill="#7ED6A0" stroke="#3E8F4E" stroke-width="2.5" transform="rotate(25 24 30)"/></svg>'},
banana:{name:'香蕉',svg:'<svg viewBox="0 0 64 64"><path d="M12 20c2 18 14 30 36 32 4 .5 7-2 6-5-1-2.5-4-3.5-7-3C30 42 20 32 18 18c-.6-3.6-5.6-2.4-6 2z" fill="#F6D54E" stroke="#D9A91E" stroke-width="2.5"/><rect x="8" y="12" width="8" height="10" rx="3" fill="#8B5E34"/></svg>'},
leaf:{name:'树叶',svg:'<svg viewBox="0 0 64 64"><path d="M32 6c14 8 18 24 10 40-6 8-14 10-22 8C10 44 12 26 32 6z" fill="#7ED6A0" stroke="#3E8F4E" stroke-width="2.5"/><path d="M32 10v44M32 24l10-6M32 24l-10-6M32 38l12-6M32 38l-12-6" stroke="#3E8F4E" stroke-width="2" stroke-linecap="round"/></svg>'},
grass:{name:'青草',svg:'<svg viewBox="0 0 64 64"><path d="M10 52c2-14 6-24 12-30-1 12-2 22 0 30M24 52c0-12 3-24 10-32 0 14 1 24 0 32M40 52c3-10 7-18 14-22-3 10-5 16-6 22" stroke="#58B368" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M8 52h48" stroke="#3E8F4E" stroke-width="4" stroke-linecap="round"/></svg>'},
honey:{name:'蜂蜜',svg:'<svg viewBox="0 0 64 64"><path d="M20 22h24v26a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6z" fill="#F6B84E" stroke="#D99A2E" stroke-width="2.5"/><rect x="16" y="14" width="32" height="9" rx="4.5" fill="#8B5E34"/><path d="M26 30c3-2.6 6 2.6 9 0s6 2.6 9 0" stroke="#D99A2E" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="32" cy="42" rx="7" ry="4.5" fill="#E89B2E" opacity=".55"/></svg>'},
worm:{name:'小虫子',svg:'<svg viewBox="0 0 64 64"><circle cx="18" cy="40" r="8" fill="#A8E06B" stroke="#6FA83E" stroke-width="2.5"/><circle cx="30" cy="34" r="8" fill="#C6F09A" stroke="#6FA83E" stroke-width="2.5"/><circle cx="42" cy="30" r="8" fill="#A8E06B" stroke="#6FA83E" stroke-width="2.5"/><circle cx="44" cy="27" r="2.4" fill="#4A3F35"/><path d="M50 22c3-3 5-3 8-2M48 16c2-4 4-5 8-4" stroke="#6FA83E" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>'},
rice:{name:'小米粒',svg:'<svg viewBox="0 0 64 64"><path d="M10 30h44c0 12-8 22-22 22S10 42 10 30z" fill="#7ED6F2" stroke="#3E7DE0" stroke-width="2.5"/><ellipse cx="32" cy="30" rx="22" ry="8" fill="#fff" stroke="#3E7DE0" stroke-width="2.5"/><circle cx="22" cy="27" r="3.4" fill="#F6D54E"/><circle cx="32" cy="25" r="3.4" fill="#F6D54E"/><circle cx="42" cy="27" r="3.4" fill="#F6D54E"/><circle cx="27" cy="31" r="3.4" fill="#F2C230"/><circle cx="37" cy="31" r="3.4" fill="#F2C230"/></svg>'}
};
const FEED_ANIMALS=[
{emoji:'🐶',name:'小狗',food:'bone'},{emoji:'🐱',name:'小猫',food:'fish'},
{emoji:'🐰',name:'小兔',food:'carrot'},{emoji:'🐼',name:'熊猫',food:'bamboo'},
{emoji:'🐵',name:'小猴',food:'banana'},{emoji:'🐘',name:'大象',food:'leaf'},
{emoji:'🦆',name:'小鸭',food:'grass'},{emoji:'🐝',name:'小蜜蜂',food:'honey'},
{emoji:'🐸',name:'小青蛙',food:'worm'},{emoji:'🐷',name:'小猪',food:'rice'}
];
const FEED_YUM=['真好吃，谢谢宝宝！','嗯，好吃好吃！','宝宝喂得真好！','啊呜啊呜，太好吃啦！'];
let feedOrder=[],feedIdx=0,feedTarget=null,feedOpts=[],feedStreak=0;
function feedShuf(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}return a;}
function openFeed(){feedOrder=feedShuf(FEED_ANIMALS.slice());feedIdx=0;feedStreak=0;startFeedRound();go('feed');}
function sayFeedWant(){if(feedTarget)say(feedTarget.name+'想吃'+FEED_FOODS[feedTarget.food].name);}
function renderFeedProg(){
  const p=document.getElementById('feedProg');p.innerHTML='';
  for(let i=0;i<5;i++){const d=document.createElement('div');d.className='feeddot'+(i<Math.floor(feedStreak/3)?' on':'');p.appendChild(d);}
}
function startFeedRound(){
  if(feedIdx>=feedOrder.length){feedOrder=feedShuf(feedOrder);feedIdx=0;}
  feedTarget=feedOrder[feedIdx];
  document.getElementById('feedAnimal').textContent=feedTarget.emoji;
  const ids=Object.keys(FEED_FOODS).filter(function(k){return k!==feedTarget.food;});
  feedOpts=feedShuf([feedTarget.food,feedShuf(ids)[0],feedShuf(ids)[1]]);
  const g=document.getElementById('feedGrid');g.innerHTML='';
  feedOpts.forEach(function(k){
    const d=document.createElement('div');
    d.className='feedcard';d.id='feed_'+k;
    d.innerHTML=FEED_FOODS[k].svg+'<div class="fn">'+FEED_FOODS[k].name+'</div>';
    d.onclick=function(){tapFeed(k);};
    g.appendChild(d);
  });
  document.getElementById('feedBubble').textContent=feedTarget.name+'想吃'+FEED_FOODS[feedTarget.food].name;
  document.getElementById('feedFb').textContent='点一盘食物喂给'+feedTarget.name;
  renderFeedProg();
  say(feedTarget.name+'饿了，想吃'+FEED_FOODS[feedTarget.food].name+'，喂喂它吧');
}
function tapFeed(k){
  if(k===feedTarget.food){
    const el=document.getElementById('feed_'+k);
    el.classList.add('correct');
    const an=document.getElementById('feedAnimal');
    an.classList.remove('munch');void an.offsetWidth;an.classList.add('munch');
    addStar();feedStreak++;feedIdx++;renderFeedProg();
    const msg=FEED_YUM[Math.floor(Math.random()*FEED_YUM.length)];
    document.getElementById('feedFb').textContent=msg;
    document.getElementById('feedBubble').textContent='谢谢宝宝，好好吃呀！';
    say(msg);
    if(feedStreak>=15){
      feedStreak=0;
      try{parkStorage.setItem('park_feed_rounds',String((parseInt(parkStorage.getItem('park_feed_rounds')||'0',10)||0)+1));}catch(e){}
      addStar();addStar();addStar();
      document.getElementById('feedBubble').textContent='动物们都吃饱啦！';
      document.getElementById('feedFb').textContent='哇，5 只小动物都吃饱了！';
      say('哇，小动物们都吃饱了，宝宝真能干！');
      screenLater(startFeedRound,3500);
    }else{
      screenLater(startFeedRound,1400);
    }
  }else{
    const el=document.getElementById('feed_'+k);
    el.classList.remove('wrong');void el.offsetWidth;el.classList.add('wrong');
    say(FEED_FOODS[k].name+'不是'+feedTarget.name+'想吃的哦');
    document.getElementById('feedFb').textContent='再想想，'+feedTarget.name+'想吃'+FEED_FOODS[feedTarget.food].name+'呀';
  }
}
function nextFeedAnimal(){feedIdx++;startFeedRound();}

/* 数字描红 v5.4：1-10 描红闯关（写前准备·手眼协调） */
var TRACE_N=0,TRACE_DRAWING=false,TRACE_LAST=null,TRACE_DONE=false,TRACE_GUIDE=[];
var TRACE_NAMES=['一','二','三','四','五','六','七','八','九','十'];
function openTrace(){go('trace');traceBuildDigits();tracePick(1,true);}
function traceBuildDigits(){
  var box=document.getElementById('traceDigits');box.innerHTML='';
  for(var i=1;i<=10;i++){var b=document.createElement('button');b.className='tracebtn';b.id='td_'+i;b.textContent=i;b.onclick=(function(n){return function(){tracePick(n);};})(i);box.appendChild(b);}
}
function tracePick(n,quiet){
  TRACE_N=n;TRACE_DONE=false;
  document.querySelectorAll('.tracebtn').forEach(function(b){b.classList.remove('on');});
  document.getElementById('td_'+n).classList.add('on');
  traceClear();traceDrawGuide();
  document.getElementById('traceFb').textContent='描一描数字 '+n+'（'+TRACE_NAMES[n-1]+'）';
  if(!quiet)say('描一描数字 '+n);
}
function traceDrawGuide(){
  var g=document.getElementById('traceGuide'),ctx=g.getContext('2d');
  g.width=g.clientWidth||340;g.height=g.clientHeight||452;
  var d=document.getElementById('traceDraw');d.width=g.width;d.height=g.height;
  ctx.clearRect(0,0,g.width,g.height);
  var fs=Math.floor(g.height*(TRACE_N===10?0.5:0.68));
  ctx.font='900 '+fs+'px "PingFang SC","Microsoft YaHei",sans-serif';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.lineWidth=Math.floor(g.width*0.16);ctx.strokeStyle='#E2DDCE';
  ctx.strokeText(TRACE_N,g.width/2,g.height/2);
  ctx.lineWidth=Math.max(6,Math.floor(g.width*0.028));ctx.strokeStyle='#F2C14E';
  ctx.setLineDash([14,12]);ctx.strokeText(TRACE_N,g.width/2,g.height/2);ctx.setLineDash([]);
  traceSampleGuide();
}
function traceSampleGuide(){
  var g=document.getElementById('traceGuide'),ctx=g.getContext('2d');
  var img=ctx.getImageData(0,0,g.width,g.height).data;TRACE_GUIDE=[];
  for(var y=7;y<g.height;y+=14)for(var x=7;x<g.width;x+=14){
    if(img[((Math.floor(y)*g.width)+Math.floor(x))*4+3]>70)TRACE_GUIDE.push([Math.floor(x),Math.floor(y)]);
  }
}
function tracePos(e){var c=document.getElementById('traceDraw'),r=c.getBoundingClientRect();return [(e.clientX-r.left)*(c.width/r.width),(e.clientY-r.top)*(c.height/r.height)];}
function traceStart(e){if(TRACE_DONE)return;TRACE_DRAWING=true;TRACE_LAST=tracePos(e);e.preventDefault();}
function traceMove(e){
  if(!TRACE_DRAWING||TRACE_DONE)return;e.preventDefault();
  var c=document.getElementById('traceDraw'),ctx=c.getContext('2d'),p=tracePos(e);
  ctx.strokeStyle='#3E6E9E';ctx.lineWidth=Math.max(18,Math.floor(c.width*0.06));ctx.lineCap='round';ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(TRACE_LAST[0],TRACE_LAST[1]);ctx.lineTo(p[0],p[1]);ctx.stroke();
  TRACE_LAST=p;
}
function traceEnd(){if(!TRACE_DRAWING)return;TRACE_DRAWING=false;traceCheck();}
function traceCheck(){
  var c=document.getElementById('traceDraw'),ctx=c.getContext('2d');
  var img=ctx.getImageData(0,0,c.width,c.height).data,hit=0;
  for(var i=0;i<TRACE_GUIDE.length;i++){
    var x=TRACE_GUIDE[i][0],y=TRACE_GUIDE[i][1];
    if(img[(y*c.width+x)*4+3]>70)hit++;
  }
  var ratio=TRACE_GUIDE.length?hit/TRACE_GUIDE.length:0;
  if(ratio>=0.42){
    TRACE_DONE=true;addStar();
    try{var k=parseInt(parkStorage.getItem('park_trace_done')||'0',10)||0;parkStorage.setItem('park_trace_done',String(k+1));}catch(e){}
    document.getElementById('traceFb').textContent='🎉 数字 '+TRACE_N+' 描得真棒！';
    say('数字 '+TRACE_N+'，写得真棒！');
    screenLater(function(){var n=TRACE_N>=10?1:TRACE_N+1;tracePick(n,true);say('再描一描数字 '+n);},2600);
  }
}
function traceClear(){var c=document.getElementById('traceDraw');c.getContext('2d').clearRect(0,0,c.width,c.height);}
function traceHear(){say('描一描数字 '+TRACE_N);}
(function(){var d=document.getElementById('traceDraw');d.addEventListener('pointerdown',traceStart);d.addEventListener('pointermove',traceMove);window.addEventListener('pointerup',traceEnd);d.addEventListener('pointercancel',traceEnd);})();

/* ================= 交通工具声音馆 ================= */
const VEHICLES = [
  {e:'\uD83D\uDE97', n:'小汽车', w:'嘀嘀', d:0.7},
  {e:'\uD83D\uDE8C', n:'公交车', w:'叭叭', d:1.0},
  {e:'\uD83D\uDE82', n:'火车', w:'呜呜', d:1.9},
  {e:'\u2708\uFE0F', n:'飞机', w:'轰隆隆', d:1.5},
  {e:'\uD83D\uDEA2', n:'轮船', w:'呜', d:1.6},
  {e:'\uD83D\uDE91', n:'救护车', w:'哔啵哔啵', d:2.2},
  {e:'\uD83D\uDE92', n:'消防车', w:'哇呜哇呜', d:1.8},
  {e:'\uD83D\uDEB2', n:'自行车', w:'叮铃铃', d:1.1},
  {e:'\uD83D\uDE9C', n:'拖拉机', w:'突突突', d:1.4},
  {e:'\uD83D\uDE81', n:'直升机', w:'哒哒哒', d:1.6}
];
let vehCtx = null, vehNoise = null, vehTab = 0, vehTaps = 0, vehLast = 0;
let vehQuizTarget = -1, vehQuizLock = false, vehQuizDone = 0;
function vehAudio(){
  if(!vehCtx){ vehCtx = new (window.AudioContext || window.webkitAudioContext)(); }
  if(vehCtx.state === 'suspended') vehCtx.resume();
  return vehCtx;
}
function vehNoiseBuf(ctx){
  if(vehNoise) return vehNoise;
  const len = Math.floor(ctx.sampleRate * 1.2), buf = ctx.createBuffer(1, len, ctx.sampleRate), ch = buf.getChannelData(0);
  for(let i=0;i<len;i++) ch[i] = Math.random()*2-1;
  vehNoise = buf; return buf;
}
function vehOsc(type, f0, f1, t0, dur, vol){
  const ctx = vehAudio(), t = ctx.currentTime + t0;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t);
  if(f1 && f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.03);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(ctx.destination);
  o.start(t); o.stop(t + dur + 0.05);
}
function vehBlast(fType, fr0, fr1, t0, dur, vol){
  const ctx = vehAudio(), t = ctx.currentTime + t0;
  const src = ctx.createBufferSource(); src.buffer = vehNoiseBuf(ctx); src.loop = true;
  const f = ctx.createBiquadFilter(); f.type = fType; f.Q.value = 1.2;
  f.frequency.setValueAtTime(fr0, t);
  if(fr1 !== fr0) f.frequency.exponentialRampToValueAtTime(fr1, t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.08);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  src.connect(f); f.connect(g); g.connect(ctx.destination);
  src.start(t); src.stop(t + dur + 0.05);
}
function vehSound(i){
  if(window.REAL_VEH && REAL_VEH[i]){ play('assets/audio/real/veh' + i + '.mp3'); return; }
  let k;
  switch(i){
    case 0: vehOsc('square', 440, 440, 0, 0.16, 0.45); vehOsc('square', 440, 440, 0.22, 0.16, 0.45); break;
    case 1: vehOsc('sawtooth', 196, 185, 0, 0.55, 0.4); vehOsc('sawtooth', 247, 233, 0, 0.55, 0.28); break;
    case 2: vehOsc('sine', 622, 660, 0, 0.9, 0.45); vehOsc('sine', 830, 880, 0, 0.9, 0.28);
            for(k=0;k<4;k++) vehBlast('lowpass', 320, 320, 1.05 + k*0.22, 0.12, 0.32); break;
    case 3: vehBlast('bandpass', 500, 2600, 0, 1.4, 0.5); break;
    case 4: vehOsc('sine', 98, 92, 0, 1.4, 0.65); vehOsc('sine', 147, 138, 0, 1.4, 0.22); break;
    case 5: for(k=0;k<3;k++){ vehOsc('sine', 660, 1180, k*0.72, 0.34, 0.45); vehOsc('sine', 1180, 660, k*0.72+0.36, 0.34, 0.45); } break;
    case 6: for(k=0;k<4;k++){ vehOsc('square', 720, 720, k*0.44, 0.2, 0.28); vehOsc('square', 960, 960, k*0.44+0.22, 0.2, 0.28); } break;
    case 7: vehOsc('sine', 2093, 2093, 0, 0.35, 0.35); vehOsc('sine', 2637, 2637, 0, 0.3, 0.18);
            vehOsc('sine', 2093, 2093, 0.45, 0.35, 0.35); vehOsc('sine', 2637, 2637, 0.45, 0.3, 0.18); break;
    case 8: vehOsc('square', 78, 70, 0, 1.15, 0.45); vehBlast('lowpass', 240, 240, 0, 1.15, 0.28);
            for(k=0;k<5;k++) vehOsc('square', 95, 60, k*0.23, 0.14, 0.35); break;
    case 9: vehBlast('lowpass', 900, 500, 0, 1.5, 0.45);
            { const ctx = vehAudio(), t = ctx.currentTime;
              const o = ctx.createOscillator(), g = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain();
              o.type = 'sawtooth'; o.frequency.value = 95; g.gain.value = 0.55;
              lfo.type = 'sine'; lfo.frequency.value = 13; lg.gain.value = 0.35;
              lfo.connect(lg); lg.connect(g.gain); o.connect(g); g.connect(ctx.destination);
              o.start(t); lfo.start(t); o.stop(t + 1.55); lfo.stop(t + 1.55); } break;
  }
}
const WEATHERS = [
  {e:'\u2600\uFE0F', n:'晴天', say:'大太阳', tip:'太阳公公照大地，暖洋洋的'},
  {e:'🌧\uFE0F', n:'雨天', say:'下大雨', tip:'滴答滴答下雨啦，出门要带雨具'},
  {e:'\u2744\uFE0F', n:'雪天', say:'下大雪', tip:'雪花飘飘真漂亮，穿得暖暖再出门'},
  {e:'🌬\uFE0F', n:'刮大风', say:'刮大风', tip:'呼呼的风吹起来，穿厚一点别着凉'},
];
const WTH_CLOTHES = [
  {e:'🧢', n:'遮阳帽', w:0}, {e:'😎', n:'太阳镜', w:0}, {e:'👕', n:'短袖', w:0},
  {e:'\u2602\uFE0F', n:'雨伞', w:1}, {e:'🧥', n:'雨衣', w:1}, {e:'🥾', n:'雨靴', w:1},
  {e:'🧣', n:'围巾', w:2}, {e:'🧤', n:'手套', w:2}, {e:'🧦', n:'厚袜子', w:2},
  {e:'🧶', n:'毛衣', w:3}, {e:'👖', n:'长裤', w:3}, {e:'🎩', n:'帽子', w:3},
];
var wthTab = 0, wthLast = -1, wthQuizWi = -1, wthQuizTarget = -1, wthQuizLock = false, wthQuizDone = 0, wthWear = [];
const SAFETY_LIGHTS = [
  {c:'#E14D4D', n:'红灯', big:'红灯停', say:'红灯亮了，停一停，不能过马路', tip:'停下脚步等一等'},
  {c:'#F2B233', n:'黄灯', big:'黄灯等一等', say:'黄灯亮了，等一等，马上就要换灯了', tip:'站在原地别着急'},
  {c:'#4CAF50', n:'绿灯', big:'绿灯行', say:'绿灯亮了可以走，左右看看再过马路', tip:'看着左右慢慢走'},
];
const SAFETY_Q = [
  {e:'🚦', q:'红灯亮了，宝宝应该怎么做？', opts:[{e:'\u270B',n:'站在路边等一等'},{e:'🏃',n:'跑过去'},{e:'\u26BD',n:'在马路上玩'}]},
  {e:'🟢', q:'绿灯亮了，过马路前先做什么？', opts:[{e:'👀',n:'左看、右看、再看左'},{e:'🙈',n:'闭着眼睛冲'},{e:'🐶',n:'先和狗狗玩'}]},
  {e:'🦓', q:'过马路要走哪里最安全？', opts:[{e:'🦓',n:'走斑马线'},{e:'🚗',n:'车多的地方'},{e:'🛣\uFE0F',n:'马路中间'}]},
  {e:'🧑\u200D🤝\u200D🧑', q:'过马路要拉着谁的手？', opts:[{e:'👨\u200D👩\u200D👧',n:'爸爸妈妈的手'},{e:'🧍',n:'自己一个人'},{e:'🧸',n:'抱着玩具熊'}]},
  {e:'\u26BD', q:'皮球滚到马路中间，宝宝应该？', opts:[{e:'📢',n:'叫大人帮忙捡'},{e:'🏃',n:'自己追过去'},{e:'😢',n:'跑到马路边哭'}]},
  {e:'🚸', q:'可以在马路上玩游戏吗？', opts:[{e:'🚫',n:'不可以，太危险'},{e:'\u26BD',n:'可以，很好玩'},{e:'\u23F0',n:'只玩一小会儿'}]},
  {e:'🚶', q:'走路的时候要走在哪里？', opts:[{e:'🚶',n:'走人行道上'},{e:'🚗',n:'走汽车道上'},{e:'🚴',n:'在车道上跑'}]},
];
var safeTab = 0, safeLast = -1, safeQuizQi = -1, safeQuizLock = false, safeQuizDone = 0;
function openWeather(){ setWthTab(0); go('weather'); }
function setWthTab(n){
  clearScreenTasks(); stopAll();
  wthTab = n;
  document.querySelectorAll('#wthTabs .ztab').forEach((b,i)=>b.classList.toggle('on', i===n));
  document.getElementById('wthQuizBtn').style.display = (n === 1) ? '' : 'none';
  if(n === 0){
    wthWear = [];
    document.getElementById('wthStage').innerHTML = '<div class="wthgrid">' + WEATHERS.map((w,i)=>
      '<div class="wthcard" onclick="wthTap('+i+',this)"><div class="wthemo">'+w.e+'</div><div class="wn">'+w.n+'</div><div style="font-size:12px;color:#8A7A5F;font-weight:700">'+w.tip+'</div></div>').join('') + '</div>';
    document.getElementById('wthFb').textContent = '点一点卡片，认识四种天气';
  } else {
    wthQuizDone = 0; wthWear = [];
    startWthQuiz();
  }
}
function wthTap(i, el){
  el.classList.remove('playing'); void el.offsetWidth; el.classList.add('playing');
  wthLast = i;
  const w = WEATHERS[i];
  document.getElementById('wthFb').textContent = w.n + '：' + w.tip;
  say(w.n + '，' + w.tip);
}
function wthQuizPick(){
  const wi = Math.floor(Math.random() * WEATHERS.length);
  const pool = WTH_CLOTHES.map((c,i)=>i).filter(i=>WTH_CLOTHES[i].w === wi);
  const target = pool[Math.floor(Math.random() * pool.length)];
  const others = WTH_CLOTHES.map((c,i)=>i).filter(i=>WTH_CLOTHES[i].w !== wi);
  const opts = [target];
  while(opts.length < 3){ const r = others[Math.floor(Math.random() * others.length)]; if(opts.indexOf(r) < 0) opts.push(r); }
  for(let k=opts.length-1;k>0;k--){ const j = Math.floor(Math.random()*(k+1)), t = opts[k]; opts[k] = opts[j]; opts[j] = t; }
  return {wi: wi, target: target, opts: opts};
}
function wthAsk(){
  const w = WEATHERS[wthQuizWi];
  const q = '今天' + w.say + '，宝宝出门穿什么最合适？';
  document.getElementById('wthFb').textContent = q;
  say(q);
}
function startWthQuiz(){
  wthQuizLock = false;
  const q = wthQuizPick(); wthQuizWi = q.wi; wthQuizTarget = q.target;
  wthWear = [];
  let dots = '';
  for(let k=0;k<5;k++) dots += '<div class="feeddot' + (k < wthQuizDone ? ' on' : '') + '"></div>';
  document.getElementById('wthStage').innerHTML =
    '<div class="wthquizq">今天' + WEATHERS[q.wi].say + '，宝宝出门穿什么最合适？</div>' +
    '<div class="wthdoll">🧒<span class="wthwear" id="wthWear"></span></div>' +
    '<div class="wthprog">' + dots + '</div>' +
    '<div class="vehgrid">' + q.opts.map(o=>
      '<div class="wthcard" onclick="wthAnswer('+o+',this)"><div class="wthemo">'+WTH_CLOTHES[o].e+'</div><div class="wn">'+WTH_CLOTHES[o].n+'</div></div>').join('') + '</div>';
  screenLater(()=>{ if(wthTab === 1) wthAsk(); }, 350);
}
function wthReplay(){
  if(wthTab === 1){ if(wthQuizTarget >= 0 && !wthQuizLock) wthAsk(); }
  else if(wthLast >= 0){ const w = WEATHERS[wthLast]; say(w.n + '，' + w.tip); }
}
function wthNewQuiz(){ startWthQuiz(); }
function wthAnswer(o, el){
  if(wthQuizLock) return;
  if(o === wthQuizTarget){
    wthQuizLock = true;
    el.classList.add('correct');
    addStar();
    wthQuizDone++;
    const c = WTH_CLOTHES[o];
    wthWear.push(c.e);
    document.getElementById('wthWear').textContent = wthWear.join('');
    document.getElementById('wthFb').textContent = '穿对了！' + c.n + '最合适';
    say('穿对啦，' + c.n + '最合适');
    if(wthQuizDone >= 5){
      const r = +(parkStorage.getItem('park_wth_rounds') || 0);
      parkStorage.setItem('park_wth_rounds', r + 1);
      addStar(); addStar(); addStar();
      screenLater(()=>{ say('全部穿对，太厉害了'); document.getElementById('wthFb').textContent = '全部穿对！再来一轮吧'; }, 1700);
      screenLater(()=>{ wthQuizDone = 0; if(wthTab === 1) startWthQuiz(); }, 3800);
    } else {
      screenLater(()=>{ if(wthTab === 1) startWthQuiz(); }, 1800);
    }
  } else {
    el.classList.add('wrong');
    screenLater(()=>el.classList.remove('wrong'), 520);
    document.getElementById('wthFb').textContent = '再想想，' + WEATHERS[wthQuizWi].say + '天穿什么最合适？';
    say('再想想');
  }
}
function openSafety(){ setSafeTab(0); go('safety'); }
function setSafeTab(n){
  clearScreenTasks(); stopAll();
  safeTab = n;
  document.querySelectorAll('#safeTabs .ztab').forEach((b,i)=>b.classList.toggle('on', i===n));
  document.getElementById('safeQuizBtn').style.display = (n === 1) ? '' : 'none';
  if(n === 0){
    safeLast = -1;
    document.getElementById('safeStage').innerHTML = '<div class="safegrid">' + SAFETY_LIGHTS.map((l,i)=>{
      const lamps = SAFETY_LIGHTS.map((x,k)=>'<i'+(k===i?' class="lit" style="color:'+x.c+';background:'+x.c+'"':'')+'></i>').join('');
      return '<div class="safecard" onclick="safeTap('+i+',this)"><div class="safetl">'+lamps+'</div><div class="wn">'+l.big+'</div><div class="st">'+l.tip+'</div></div>';
    }).join('') + '</div>';
    document.getElementById('safeFb').textContent = '点一点红绿灯，认识三种灯';
  } else {
    safeQuizDone = 0;
    startSafeQuiz();
  }
}
function safeTap(i, el){
  el.classList.remove('playing'); void el.offsetWidth; el.classList.add('playing');
  safeLast = i;
  const l = SAFETY_LIGHTS[i];
  document.getElementById('safeFb').textContent = l.n + '：' + l.say;
  say(l.say);
}
function safeQuizPick(){
  const qi = Math.floor(Math.random() * SAFETY_Q.length);
  const opts = SAFETY_Q[qi].opts.map((o,i)=>i);
  for(let k=opts.length-1;k>0;k--){ const j = Math.floor(Math.random()*(k+1)), t = opts[k]; opts[k] = opts[j]; opts[j] = t; }
  return {qi: qi, opts: opts};
}
function safeAsk(){
  const q = SAFETY_Q[safeQuizQi];
  document.getElementById('safeFb').textContent = q.q;
  say(q.q);
}
function startSafeQuiz(){
  safeQuizLock = false;
  const p = safeQuizPick(); safeQuizQi = p.qi;
  const q = SAFETY_Q[p.qi];
  let dots = '';
  for(let k=0;k<5;k++) dots += '<div class="feeddot' + (k < safeQuizDone ? ' on' : '') + '"></div>';
  document.getElementById('safeStage').innerHTML =
    '<div class="safeqimg">' + q.e + '</div>' +
    '<div class="safequizq">' + q.q + '</div>' +
    '<div class="safeprog">' + dots + '</div>' +
    '<div class="wthgrid">' + p.opts.map(o=>
      '<div class="safecard" style="min-height:118px" onclick="safeAnswer('+o+',this)"><div style="font-size:44px;line-height:1.1">'+q.opts[o].e+'</div><div class="wn">'+q.opts[o].n+'</div></div>').join('') + '</div>';
  screenLater(()=>{ if(safeTab === 1) safeAsk(); }, 350);
}
function safeReplay(){
  if(safeTab === 1){ if(safeQuizQi >= 0 && !safeQuizLock) safeAsk(); }
  else if(safeLast >= 0){ const l = SAFETY_LIGHTS[safeLast]; say(l.say); }
}
function safeNewQuiz(){ startSafeQuiz(); }
function safeAnswer(o, el){
  if(safeQuizLock) return;
  if(o === 0){
    safeQuizLock = true;
    el.classList.add('correct');
    addStar();
    safeQuizDone++;
    document.getElementById('safeFb').textContent = '答对了！你真是个安全小达人';
    say('答对啦，你真是个安全小达人');
    if(safeQuizDone >= 5){
      const r = +(parkStorage.getItem('park_safety_rounds') || 0);
      parkStorage.setItem('park_safety_rounds', r + 1);
      addStar(); addStar(); addStar();
      screenLater(()=>{ say('五道题全对，太厉害了'); document.getElementById('safeFb').textContent = '五道题全对！再来一轮吧'; }, 1700);
      screenLater(()=>{ safeQuizDone = 0; if(safeTab === 1) startSafeQuiz(); }, 3800);
    } else {
      screenLater(()=>{ if(safeTab === 1) startSafeQuiz(); }, 1800);
    }
  } else {
    el.classList.add('wrong');
    screenLater(()=>el.classList.remove('wrong'), 520);
    document.getElementById('safeFb').textContent = '再想想，怎样做才最安全？';
    say('再想想');
  }
}
function openVehicle(){ setVehTab(0); go('vehicle'); }
function setVehTab(n){
  clearScreenTasks(); stopAll();
  vehTab = n; vehTaps = 0;
  document.querySelectorAll('#vehTabs .ztab').forEach((b,i)=>b.classList.toggle('on', i===n));
  document.getElementById('vehQuizBtn').style.display = (n === 1) ? '' : 'none';
  if(n === 0){
    document.getElementById('vehStage').innerHTML = '<div class="vehgrid">' + VEHICLES.map((v,i)=>
      '<div class="vehcard" onclick="vehTap('+i+',this)"><div class="vehemo">'+v.e+'</div><div class="vn">'+v.n+'</div></div>').join('') + '</div>';
    document.getElementById('vehFb').textContent = '点一点车车，听听它是什么声音';
  } else {
    vehQuizDone = 0;
    startVehQuiz();
  }
}
function vehTap(i, el){
  el.classList.remove('playing'); void el.offsetWidth; el.classList.add('playing');
  vehLast = i;
  const v = VEHICLES[i], ms = Math.round(v.d * 1000) + 150;
  vehSound(i);
  document.getElementById('vehFb').textContent = v.n + '：' + v.w;
  vehTaps++;
  if(vehTaps >= 10){
    vehTaps = 0; addStar();
    document.getElementById('vehFb').textContent = '小耳朵真灵！奖励 1 颗星';
    screenLater(()=>say('小耳朵真灵'), ms);
  } else {
    screenLater(()=>say(v.n + '，' + v.w), ms);
  }
}
function vehQuizPick(){
  const idx = Math.floor(Math.random() * VEHICLES.length), opts = [idx];
  while(opts.length < 3){ const r = Math.floor(Math.random() * VEHICLES.length); if(opts.indexOf(r) < 0) opts.push(r); }
  for(let k=opts.length-1;k>0;k--){ const j = Math.floor(Math.random()*(k+1)), t = opts[k]; opts[k] = opts[j]; opts[j] = t; }
  return {target: idx, opts: opts};
}
function startVehQuiz(){
  vehQuizLock = false;
  const q = vehQuizPick(); vehQuizTarget = q.target;
  let dots = '';
  for(let k=0;k<5;k++) dots += '<div class="feeddot' + (k < vehQuizDone ? ' on' : '') + '"></div>';
  document.getElementById('vehStage').innerHTML =
    '<div class="vehquizplay" onclick="vehReplay()">&#128266;</div>' +
    '<div class="vehquizq">听一听，这是哪辆车车？</div>' +
    '<div class="vehprog">' + dots + '</div>' +
    '<div class="vehgrid">' + q.opts.map(o=>
      '<div class="vehcard" onclick="vehAnswer('+o+',this)"><div class="vehemo">'+VEHICLES[o].e+'</div><div class="vn">'+VEHICLES[o].n+'</div></div>').join('') + '</div>';
  document.getElementById('vehFb').textContent = '点大喇叭可以再听一遍';
  screenLater(()=>{ if(vehTab === 1) vehSound(vehQuizTarget); }, 350);
}
function vehReplay(){
  if(vehTab === 1){ if(vehQuizTarget >= 0 && !vehQuizLock) vehSound(vehQuizTarget); }
  else { const v = VEHICLES[vehLast]; vehSound(vehLast); document.getElementById('vehFb').textContent = v.n + '：' + v.w; }
}
function vehNewQuiz(){ startVehQuiz(); }
function vehAnswer(o, el){
  if(vehQuizLock) return;
  if(o === vehQuizTarget){
    vehQuizLock = true;
    el.classList.add('correct');
    addStar();
    vehQuizDone++;
    const nm = VEHICLES[o].n;
    document.getElementById('vehFb').textContent = '对啦，是' + nm + '！奖励 1 颗星';
    say('对啦，是' + nm);
    if(vehQuizDone >= 5){
      const r = +(parkStorage.getItem('park_vehicle_rounds') || 0);
      parkStorage.setItem('park_vehicle_rounds', r + 1);
      addStar(); addStar(); addStar();
      screenLater(()=>{ say('全部答对，太厉害了'); document.getElementById('vehFb').textContent = '全部答对！再来一轮吧'; }, 1700);
      screenLater(()=>{ vehQuizDone = 0; if(vehTab === 1) startVehQuiz(); }, 3800);
    } else {
      screenLater(()=>{ if(vehTab === 1) startVehQuiz(); }, 1800);
    }
  } else {
    el.classList.add('wrong');
    screenLater(()=>el.classList.remove('wrong'), 520);
    document.getElementById('vehFb').textContent = '再听听，是哪辆车车呀？';
    say('再听听');
  }
}


/* ================= 找不同 v5.8：手绘 SVG 双图眼力挑战（3 场景×3 处不同） ================= */
const DIFFS = [
{
  name: '小花园',
  a: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="190" fill="#CDEFFB"/><rect x="0" y="150" width="300" height="40" fill="#8ED081"/><ellipse cx="40" cy="152" rx="30" ry="10" fill="#9AD988"/><ellipse cx="150" cy="153" rx="36" ry="11" fill="#9AD988"/><ellipse cx="258" cy="152" rx="30" ry="10" fill="#9AD988"/><g stroke="#FFD94D" stroke-width="4" stroke-linecap="round"><line x1="70" y1="42" x2="76" y2="42"/><line x1="62.7" y1="59.7" x2="66.9" y2="63.9"/><line x1="45" y1="67" x2="45" y2="73"/><line x1="27.3" y1="59.7" x2="23.1" y2="63.9"/><line x1="20" y1="42" x2="14" y2="42"/><line x1="27.3" y1="24.3" x2="23.1" y2="20.1"/><line x1="45" y1="17" x2="45" y2="11"/><line x1="62.7" y1="24.3" x2="66.9" y2="20.1"/></g><circle cx="45" cy="42" r="20" fill="#FFD94D"/><circle cx="38" cy="38" r="2.6" fill="#5A4632"/><circle cx="52" cy="38" r="2.6" fill="#5A4632"/><path d="M38,48 Q45,54 52,48" stroke="#5A4632" stroke-width="2.5" fill="none" stroke-linecap="round"/><g fill="#FFFFFF" opacity="0.95"><ellipse cx="232" cy="34" rx="26" ry="14"/><ellipse cx="252" cy="30" rx="20" ry="12"/><ellipse cx="214" cy="32" rx="16" ry="10"/></g><line x1="60" y1="150" x2="60" y2="105" stroke="#4E9A51" stroke-width="5" stroke-linecap="round"/><ellipse cx="50" cy="130" rx="9" ry="5" fill="#6FAE6F" transform="rotate(-25 50 130)"/><g fill="#F26D6D"><circle cx="60" cy="82" r="9"/><circle cx="47.6" cy="99" r="9"/><circle cx="52.3" cy="105.5" r="9"/><circle cx="67.7" cy="105.5" r="9"/><circle cx="72.4" cy="99" r="9"/></g><circle cx="60" cy="95" r="7" fill="#FFD94D"/><line x1="150" y1="150" x2="150" y2="105" stroke="#4E9A51" stroke-width="5" stroke-linecap="round"/><ellipse cx="140" cy="130" rx="9" ry="5" fill="#6FAE6F" transform="rotate(-25 140 130)"/><g fill="#FFD94D"><circle cx="150" cy="82" r="9"/><circle cx="137.6" cy="99" r="9"/><circle cx="142.3" cy="105.5" r="9"/><circle cx="157.7" cy="105.5" r="9"/><circle cx="162.4" cy="99" r="9"/></g><circle cx="150" cy="95" r="7" fill="#F26D6D"/><line x1="240" y1="150" x2="240" y2="105" stroke="#4E9A51" stroke-width="5" stroke-linecap="round"/><ellipse cx="230" cy="130" rx="9" ry="5" fill="#6FAE6F" transform="rotate(-25 230 130)"/><g fill="#6DA8F2"><circle cx="240" cy="82" r="9"/><circle cx="227.6" cy="99" r="9"/><circle cx="232.3" cy="105.5" r="9"/><circle cx="247.7" cy="105.5" r="9"/><circle cx="252.4" cy="99" r="9"/></g><circle cx="240" cy="95" r="7" fill="#FFD94D"/><ellipse cx="104" cy="76" rx="8" ry="11" fill="#F2A0C0" transform="rotate(-20 104 76)"/><ellipse cx="120" cy="76" rx="8" ry="11" fill="#F2A0C0" transform="rotate(20 120 76)"/><line x1="112" y1="72" x2="112" y2="88" stroke="#5A4632" stroke-width="4" stroke-linecap="round"/><line x1="112" y1="72" x2="107" y2="66" stroke="#5A4632" stroke-width="2" stroke-linecap="round"/><line x1="112" y1="72" x2="117" y2="66" stroke="#5A4632" stroke-width="2" stroke-linecap="round"/><ellipse cx="197" cy="96" rx="8" ry="11" fill="#A0C4F2" transform="rotate(-20 197 96)"/><ellipse cx="213" cy="96" rx="8" ry="11" fill="#A0C4F2" transform="rotate(20 213 96)"/><line x1="205" y1="92" x2="205" y2="108" stroke="#5A4632" stroke-width="4" stroke-linecap="round"/><line x1="205" y1="92" x2="200" y2="86" stroke="#5A4632" stroke-width="2" stroke-linecap="round"/><line x1="205" y1="92" x2="210" y2="86" stroke="#5A4632" stroke-width="2" stroke-linecap="round"/></svg>`,
  b: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" onclick="diffMiss(event)"><rect x="0" y="0" width="300" height="190" fill="#CDEFFB"/><rect x="0" y="150" width="300" height="40" fill="#8ED081"/><ellipse cx="40" cy="152" rx="30" ry="10" fill="#9AD988"/><ellipse cx="150" cy="153" rx="36" ry="11" fill="#9AD988"/><ellipse cx="258" cy="152" rx="30" ry="10" fill="#9AD988"/><g stroke="#FFD94D" stroke-width="4" stroke-linecap="round"><line x1="70" y1="42" x2="76" y2="42"/><line x1="62.7" y1="59.7" x2="66.9" y2="63.9"/><line x1="45" y1="67" x2="45" y2="73"/><line x1="27.3" y1="59.7" x2="23.1" y2="63.9"/><line x1="20" y1="42" x2="14" y2="42"/><line x1="27.3" y1="24.3" x2="23.1" y2="20.1"/><line x1="45" y1="17" x2="45" y2="11"/><line x1="62.7" y1="24.3" x2="66.9" y2="20.1"/></g><circle cx="45" cy="42" r="20" fill="#FFD94D"/><circle cx="38" cy="38" r="2.6" fill="#5A4632"/><circle cx="52" cy="38" r="2.6" fill="#5A4632"/><g fill="#FFFFFF" opacity="0.95"><ellipse cx="232" cy="34" rx="26" ry="14"/><ellipse cx="252" cy="30" rx="20" ry="12"/><ellipse cx="214" cy="32" rx="16" ry="10"/></g><line x1="60" y1="150" x2="60" y2="105" stroke="#4E9A51" stroke-width="5" stroke-linecap="round"/><ellipse cx="50" cy="130" rx="9" ry="5" fill="#6FAE6F" transform="rotate(-25 50 130)"/><g fill="#F26D6D"><circle cx="60" cy="82" r="9"/><circle cx="47.6" cy="99" r="9"/><circle cx="52.3" cy="105.5" r="9"/><circle cx="67.7" cy="105.5" r="9"/><circle cx="72.4" cy="99" r="9"/></g><circle cx="60" cy="95" r="7" fill="#FFD94D"/><line x1="150" y1="150" x2="150" y2="105" stroke="#4E9A51" stroke-width="5" stroke-linecap="round"/><ellipse cx="140" cy="130" rx="9" ry="5" fill="#6FAE6F" transform="rotate(-25 140 130)"/><g fill="#B678E8"><circle cx="150" cy="82" r="9"/><circle cx="137.6" cy="99" r="9"/><circle cx="142.3" cy="105.5" r="9"/><circle cx="157.7" cy="105.5" r="9"/><circle cx="162.4" cy="99" r="9"/></g><circle cx="150" cy="95" r="7" fill="#F26D6D"/><line x1="240" y1="150" x2="240" y2="105" stroke="#4E9A51" stroke-width="5" stroke-linecap="round"/><ellipse cx="230" cy="130" rx="9" ry="5" fill="#6FAE6F" transform="rotate(-25 230 130)"/><g fill="#6DA8F2"><circle cx="240" cy="82" r="9"/><circle cx="227.6" cy="99" r="9"/><circle cx="232.3" cy="105.5" r="9"/><circle cx="247.7" cy="105.5" r="9"/><circle cx="252.4" cy="99" r="9"/></g><circle cx="240" cy="95" r="7" fill="#FFD94D"/><ellipse cx="104" cy="76" rx="8" ry="11" fill="#F2A0C0" transform="rotate(-20 104 76)"/><ellipse cx="120" cy="76" rx="8" ry="11" fill="#F2A0C0" transform="rotate(20 120 76)"/><line x1="112" y1="72" x2="112" y2="88" stroke="#5A4632" stroke-width="4" stroke-linecap="round"/><line x1="112" y1="72" x2="107" y2="66" stroke="#5A4632" stroke-width="2" stroke-linecap="round"/><line x1="112" y1="72" x2="117" y2="66" stroke="#5A4632" stroke-width="2" stroke-linecap="round"/><circle class="diffzone" cx="150" cy="95" r="26" onclick="diffTap(0,this)"/><circle class="diffzone" cx="205" cy="100" r="26" onclick="diffTap(1,this)"/><circle class="diffzone" cx="45" cy="50" r="18" onclick="diffTap(2,this)"/></svg>`,
  spots: [
    {say: '找到了！中间的花变成紫色了'},
    {say: '找到了！少了一只小蝴蝶'},
    {say: '找到了！太阳公公的嘴不见了'}
  ]
},
{
  name: '小厨房',
  a: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="190" fill="#FFF3D6"/><rect x="0" y="118" width="300" height="72" fill="#D9A066"/><rect x="0" y="118" width="300" height="8" fill="#C68B4E"/><ellipse cx="88" cy="140" rx="36" ry="13" fill="#FFFFFF" stroke="#E0D5C0" stroke-width="2"/><circle cx="88" cy="124" r="15" fill="#E14D4D"/><line x1="88" y1="110" x2="88" y2="102" stroke="#7A5C3E" stroke-width="3" stroke-linecap="round"/><ellipse cx="96" cy="105" rx="7" ry="4" fill="#6FAE6F" transform="rotate(30 96 105)"/><rect x="168" y="100" width="34" height="44" rx="8" fill="#6DA8F2"/><path d="M202,110 q16,8 0,26" stroke="#6DA8F2" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="172" y="104" width="26" height="8" rx="4" fill="#FFFFFF" opacity="0.85"/><ellipse cx="250" cy="148" rx="22" ry="15" fill="#F5B971"/><path d="M270,148 q14,-4 10,-20" stroke="#F5B971" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="232" cy="132" r="13" fill="#F5B971"/><polygon points="222,124 225,111 230,122" fill="#F5B971"/><polygon points="234,122 238,111 242,124" fill="#F5B971"/><circle cx="227" cy="130" r="2" fill="#5A4632"/><circle cx="237" cy="130" r="2" fill="#5A4632"/><circle cx="232" cy="135" r="1.6" fill="#E14D4D"/><line x1="218" y1="134" x2="210" y2="132" stroke="#8A7A5F" stroke-width="1.2"/><line x1="218" y1="137" x2="210" y2="139" stroke="#8A7A5F" stroke-width="1.2"/><line x1="246" y1="134" x2="254" y2="132" stroke="#8A7A5F" stroke-width="1.2"/><line x1="246" y1="137" x2="254" y2="139" stroke="#8A7A5F" stroke-width="1.2"/></svg>`,
  b: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" onclick="diffMiss(event)"><rect x="0" y="0" width="300" height="190" fill="#FFF3D6"/><rect x="0" y="118" width="300" height="72" fill="#D9A066"/><rect x="0" y="118" width="300" height="8" fill="#C68B4E"/><ellipse cx="88" cy="140" rx="36" ry="13" fill="#FFFFFF" stroke="#E0D5C0" stroke-width="2"/><circle cx="88" cy="124" r="15" fill="#6FAE6F"/><line x1="88" y1="110" x2="88" y2="102" stroke="#7A5C3E" stroke-width="3" stroke-linecap="round"/><ellipse cx="96" cy="105" rx="7" ry="4" fill="#6FAE6F" transform="rotate(30 96 105)"/><rect x="168" y="100" width="34" height="44" rx="8" fill="#F2994A"/><path d="M202,110 q16,8 0,26" stroke="#F2994A" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="172" y="104" width="26" height="8" rx="4" fill="#FFFFFF" opacity="0.85"/><ellipse cx="250" cy="148" rx="22" ry="15" fill="#F5B971"/><circle cx="232" cy="132" r="13" fill="#F5B971"/><polygon points="222,124 225,111 230,122" fill="#F5B971"/><polygon points="234,122 238,111 242,124" fill="#F5B971"/><circle cx="227" cy="130" r="2" fill="#5A4632"/><circle cx="237" cy="130" r="2" fill="#5A4632"/><circle cx="232" cy="135" r="1.6" fill="#E14D4D"/><line x1="218" y1="134" x2="210" y2="132" stroke="#8A7A5F" stroke-width="1.2"/><line x1="218" y1="137" x2="210" y2="139" stroke="#8A7A5F" stroke-width="1.2"/><line x1="246" y1="134" x2="254" y2="132" stroke="#8A7A5F" stroke-width="1.2"/><line x1="246" y1="137" x2="254" y2="139" stroke="#8A7A5F" stroke-width="1.2"/><circle class="diffzone" cx="88" cy="124" r="20" onclick="diffTap(0,this)"/><circle class="diffzone" cx="185" cy="122" r="26" onclick="diffTap(1,this)"/><circle class="diffzone" cx="274" cy="140" r="18" onclick="diffTap(2,this)"/></svg>`,
  spots: [
    {say: '找到了！苹果变成绿色的了'},
    {say: '找到了！杯子变成橙色的了'},
    {say: '找到了！小猫的尾巴不见了'}
  ]
},
{
  name: '海底世界',
  a: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="190" fill="#BDE3F7"/><rect x="0" y="158" width="300" height="32" fill="#F2E3B3"/><path d="M30,158 q-6,-20 4,-34 q8,-12 0,-26" stroke="#4E9A51" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M262,158 q6,-18 -4,-32 q-8,-12 0,-24" stroke="#4E9A51" stroke-width="7" fill="none" stroke-linecap="round"/><g stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.8"><circle cx="120" cy="122" r="5"/><circle cx="136" cy="102" r="7"/><circle cx="244" cy="56" r="6"/></g><polygon points="59,66 44,55 44,77" fill="#F2994A"/><ellipse cx="80" cy="66" rx="22" ry="14" fill="#F2994A"/><line x1="76" y1="57" x2="76" y2="75" stroke="#FFFFFF" stroke-width="3" opacity="0.7"/><line x1="86" y1="56" x2="86" y2="76" stroke="#FFFFFF" stroke-width="3" opacity="0.7"/><circle cx="90" cy="62" r="4" fill="#FFFFFF"/><circle cx="91" cy="62" r="2" fill="#2b2b2b"/><polygon points="219,100 233,91 233,109" fill="#6DA8F2"/><ellipse cx="200" cy="100" rx="20" ry="13" fill="#6DA8F2"/><circle cx="191" cy="96" r="3.5" fill="#FFFFFF"/><circle cx="192" cy="96" r="1.8" fill="#2b2b2b"/><polygon points="150,141 153,150 163,150 155,156 158,166 150,160 142,166 145,156 137,150 147,150" fill="#F2994A"/></svg>`,
  b: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" onclick="diffMiss(event)"><rect x="0" y="0" width="300" height="190" fill="#BDE3F7"/><rect x="0" y="158" width="300" height="32" fill="#F2E3B3"/><path d="M30,158 q-6,-20 4,-34 q8,-12 0,-26" stroke="#4E9A51" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M262,158 q6,-18 -4,-32 q-8,-12 0,-24" stroke="#4E9A51" stroke-width="7" fill="none" stroke-linecap="round"/><g stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.8"><circle cx="120" cy="122" r="5"/><circle cx="136" cy="102" r="7"/><circle cx="244" cy="56" r="6"/></g><polygon points="101,66 116,55 116,77" fill="#F2994A"/><ellipse cx="80" cy="66" rx="22" ry="14" fill="#F2994A"/><line x1="74" y1="57" x2="74" y2="75" stroke="#FFFFFF" stroke-width="3" opacity="0.7"/><line x1="84" y1="56" x2="84" y2="76" stroke="#FFFFFF" stroke-width="3" opacity="0.7"/><circle cx="70" cy="62" r="4" fill="#FFFFFF"/><circle cx="69" cy="62" r="2" fill="#2b2b2b"/><path d="M136,166 a14,14 0 0 1 28,0 z" fill="#F2A0C0"/><line x1="143" y1="156" x2="143" y2="166" stroke="#D9739B" stroke-width="2"/><line x1="150" y1="153" x2="150" y2="166" stroke="#D9739B" stroke-width="2"/><line x1="157" y1="156" x2="157" y2="166" stroke="#D9739B" stroke-width="2"/><circle class="diffzone" cx="200" cy="100" r="26" onclick="diffTap(0,this)"/><circle class="diffzone" cx="150" cy="158" r="20" onclick="diffTap(1,this)"/><circle class="diffzone" cx="80" cy="66" r="28" onclick="diffTap(2,this)"/></svg>`,
  spots: [
    {say: '找到了！蓝色的小鱼游走了'},
    {say: '找到了！海星变成贝壳了'},
    {say: '找到了！小鱼转了个方向'}
  ]
}
];
var diffTab = 0, diffFound = [false,false,false], diffLock = false;
function openDiffs(){ setDiffTab(0); go('diffs'); }
function setDiffTab(n){
  clearScreenTasks(); stopAll();
  diffTab = n; diffFound = [false,false,false]; diffLock = false;
  document.querySelectorAll('#diffTabs .ztab').forEach((b,i)=>b.classList.toggle('on', i===n));
  document.getElementById('diffStage').innerHTML =
    '<div class="diffpanel"><div class="dlab">上面的图</div>' + DIFFS[diffTab].a + '</div>' +
    '<div class="diffpanel"><div class="dlab">下面的图：点一点不一样的地方</div>' + DIFFS[diffTab].b + '</div>';
  renderDiffProg();
  diffSay('下面这幅图有三个地方和上面不一样，点一点找出来吧');
}
function renderDiffProg(){
  document.getElementById('diffProg').innerHTML = diffFound.map(f=>'<div class="feeddot'+(f?' on':'')+'"></div>').join('');
  if(!diffLock) document.getElementById('diffFb').textContent = '找到 ' + diffFound.filter(Boolean).length + ' / 3';
}
function diffSay(t){ document.getElementById('diffFb').textContent = t; say(t); }
function diffTap(i, el){
  if(diffLock || diffFound[i]) return;
  diffFound[i] = true; el.classList.add('hit');
  addStar(); renderDiffProg();
  diffSay(DIFFS[diffTab].spots[i].say);
  if(diffFound.every(Boolean)){
    diffLock = true;
    const r = +(parkStorage.getItem('park_diffs_rounds') || 0);
    parkStorage.setItem('park_diffs_rounds', r + 1);
    addStar(); addStar();
    screenLater(()=>{ diffSay('三个都找到了，你的眼睛真亮'); }, 1600);
    screenLater(()=>{ if(document.getElementById('diffs').classList.contains('active')) diffNext(); }, 3800);
  }
}
function diffMiss(e){
  if(diffLock) return;
  if(e.target && e.target.classList && e.target.classList.contains('diffzone')) return;
  diffSay('这里是一样的，再仔细找找');
}
function diffReplay(){ diffSay('下面这幅图有三个地方和上面不一样，点一点找出来吧'); }
function diffNext(){ setDiffTab((diffTab + 1) % DIFFS.length); }

/* ================= 晚安模式 v5.9：睡前准备打卡 + 呼吸引导 ================= */
const NIGHT_STEPS = [
  {e:'🧸', n:'收好玩具', say:'把玩具收好，明天再玩'},
  {e:'🪥', n:'刷刷牙', say:'刷刷牙，小牙齿干干净净'},
  {e:'🛁', n:'洗香香', say:'洗得香香的，真舒服'},
  {e:'👕', n:'换上睡衣', say:'换上软软的睡衣'},
  {e:'📖', n:'听个小故事', say:'听一个短短的小故事'},
  {e:'🤗', n:'抱抱说晚安', say:'抱抱，对妈妈说晚安'}
];
let nightTab = 0, nightDone = [], nightLock = false, nightBreathTimer = null, nightBreathRound = 0, nightBreathPhase = 0, nightLastSay = '';
function openNight(){ setNightTab(0); go('goodnight'); }
function setNightTab(n){
  clearScreenTasks(); stopAll();
  nightTab = n; nightStopBreath();
  document.querySelectorAll('#nightTabs .ztab').forEach((b,i)=>b.classList.toggle('on', i===n));
  document.getElementById('nightActBtn').textContent = (n === 0) ? '🔁 重新开始' : '💤 开始呼吸';
  if(n === 0){ nightRenderSteps(); }
  else { nightRenderBreath(); }
}
function nightSay(t){ nightLastSay = t; document.getElementById('nightFb').textContent = t; say(t); }
function nightReplay(){ if(nightLastSay) say(nightLastSay); }
function nightAction(){ if(nightTab === 0){ nightReset(); } else { nightBreathToggle(); } }
function nightRenderSteps(){
  document.getElementById('nightStage').innerHTML = '<div class="nightgrid">' + NIGHT_STEPS.map((s,i)=>
    '<div class="nightcard'+(nightDone[i]?' done':'')+'" onclick="nightTap('+i+',this)"><div class="ne">'+s.e+'</div><div class="nn">'+s.n+'</div></div>').join('') + '</div>';
  const d = nightDone.filter(Boolean).length;
  document.getElementById('nightFb').textContent = d === 0 ? '点一点，把睡前准备都做好' : '已经做好 ' + d + ' / 6';
}
function nightTap(i, el){
  if(nightLock || nightDone[i]) return;
  nightDone[i] = true; nightLock = true;
  el.classList.add('done');
  const d = nightDone.filter(Boolean).length;
  if(d >= 6){
    const r = +(parkStorage.getItem('park_night_rounds') || 0);
    parkStorage.setItem('park_night_rounds', r + 1);
    addStar();
    nightSay('准备都做好了，晚安，好梦');
    nightLullaby();
    screenLater(()=>{ nightLock = false; }, 2200);
  } else {
    nightSay(NIGHT_STEPS[i].say + '，已经做好 ' + d + ' / 6');
    screenLater(()=>{ nightLock = false; }, 600);
  }
}
function nightReset(){ nightDone = []; nightLock = false; nightRenderSteps(); nightSay('重新开始吧'); }
function nightLullaby(){
  try{
    const ctx = bandAudio(), t0 = ctx.currentTime + 0.05;
    const seq = [523.25, 440.00, 392.00, 329.63, 392.00, 523.25];
    seq.forEach((f, k)=>{
      const o = ctx.createOscillator(), g = ctx.createGain(), t = t0 + k * 0.42;
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.25, t + 0.08);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
      o.connect(g); g.connect(ctx.destination);
      o.start(t); o.stop(t + 0.6);
    });
  }catch(e){}
}
function nightRenderBreath(){
  let stars = '';
  for(let k=0;k<12;k++) stars += '<i class="tw" style="left:'+(3+Math.random()*94).toFixed(1)+'%;top:'+(4+Math.random()*86).toFixed(1)+'%;width:'+(3+Math.random()*4).toFixed(0)+'px;height:'+(3+Math.random()*4).toFixed(0)+'px;animation-delay:'+(Math.random()*2.6).toFixed(1)+'s"></i>';
  document.getElementById('nightStage').innerHTML =
    '<div class="nightsky">' + stars +
    '<div class="nightmoon" id="nightMoon">🌙</div>' +
    '<div class="nightword" id="nightWord">准备好了吗</div>' +
    '<div class="nighthint">跟着月亮一起，一呼一吸</div></div>' +
    '<div class="safeprog" id="nightDots">' + [0,1,2].map(k=>'<div class="feeddot'+(k<nightBreathRound?' on':'')+'"></div>').join('') + '</div>';
  document.getElementById('nightFb').textContent = '点下面按钮开始，和月亮一起呼吸';
}
function nightRenderBreathDots(){
  const box = document.getElementById('nightDots');
  if(box) box.innerHTML = [0,1,2].map(k=>'<div class="feeddot'+(k<nightBreathRound?' on':'')+'"></div>').join('');
}
function nightBreathToggle(){
  if(nightBreathTimer){ nightStopBreath(); document.getElementById('nightFb').textContent = '休息一下，随时可以再来'; return; }
  nightBreathRound = 0; nightBreathPhase = 0; nightRenderBreathDots();
  document.getElementById('nightActBtn').textContent = '⏹ 停止';
  nightSay('跟着月亮一起呼吸，吸气');
  nightBreathStep();
}
function nightBreathStep(){
  const moon = document.getElementById('nightMoon'), word = document.getElementById('nightWord');
  const gn = document.getElementById('goodnight');
  if(!moon || !word || !gn || !gn.classList.contains('active')){ nightStopBreath(); return; }
  if(nightBreathPhase % 2 === 0){ moon.classList.add('big'); word.textContent = '吸——'; }
  else { moon.classList.remove('big'); word.textContent = '呼——'; }
  nightBreathTimer = screenLater(()=>{
    nightBreathPhase++;
    if(nightBreathPhase % 2 === 0){
      nightBreathRound++; nightRenderBreathDots();
      if(nightBreathRound >= 3){
        nightStopBreath();
        addStar();
        const r = +(parkStorage.getItem('park_night_rounds') || 0);
        parkStorage.setItem('park_night_rounds', r + 1);
        nightSay('呼吸完了，身体放松了，晚安');
        return;
      }
    }
    nightBreathStep();
  }, 4000);
}
function nightStopBreath(){
  if(nightBreathTimer){ clearTimeout(nightBreathTimer); screenTasks.delete(nightBreathTimer); nightBreathTimer = null; }
  const b = document.getElementById('nightActBtn'); if(b && nightTab === 1) b.textContent = '💤 开始呼吸';
  const moon = document.getElementById('nightMoon'); if(moon) moon.classList.remove('big');
}

// 初始化星星显示
document.getElementById('homeStars').textContent = stars;
document.querySelectorAll('.starN').forEach(el=>el.textContent = stars);
// 切到后台或离开页面时停止声音，不自动恢复播放。
function pauseMedia(){
  stopAll(); nightStopBreath();
  if(bandCtx && bandCtx.state === 'running') bandCtx.suspend().catch(()=>{});
  if(vehCtx && vehCtx.state === 'running') vehCtx.suspend().catch(()=>{});
  if(mr && mr.state === 'recording'){ try{ mr.stop(); }catch(e){} }
}
document.addEventListener('visibilitychange', ()=>{ if(document.hidden) pauseMedia(); });
window.addEventListener('pagehide', pauseMedia);
