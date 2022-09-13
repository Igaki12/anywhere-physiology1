import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['概日リズム', 'circadian rhythm', 'フリーランリズム'],
      explanation:
        '周期が24時間の内因性リズム。ヒトの場合は24.48hr。環境因子（主に青色の光）に同調させて昼夜変化に一致させる。ヒトの場合は朝6時前後に約3～6時間の光照射(5000ルクス～10000ルクス)を受けることで、実時間と一致するようになる。※食事により末梢時計（例えば膵臓）は同調されるが、視交叉上核は同調されない。',
    },
    {
      term: ['Clock', 'BMAL1'],
      explanation:
        'PERやCryの転写調節因子で、時計転写因子とよばれる（24時間周期で繰り返す）。non-circadian gene（ホルモン酵素など）の転写を促進することで概日リズムを体内環境に反映させる。',
    },
    {
      term: ['視交叉上核', 'SCN'],
      explanation:
        'ヒトの場合、時計発振系を担う。網膜などからの光入力を受け、松果体などへ信号を送りメラトニンなどの調節を行う。破壊されると概日リズムが消失し、培養した器官でもリズムを発現する等の理由から概日リズムを司る中枢といわれている。',
    },
    {
      term: ['メラトニン'],
      explanation:
        '夜間に松果体でトリプトファンから分泌されるホルモン。体内環境を夜型に変化させる（主に夜間に分泌される）。',
    },
    {
      term: ['網膜視床下部路', 'RHT'],
      explanation:
        '網膜からの視神経の一部が直接視交叉上核に投射する。神経伝達物質はグルタミン酸などの興奮性アミノ酸。主として明の情報がつたわる。',
    },
    {
      term: ['膝状体視床下部路', 'GHT'],
      explanation:
        '網膜からの視神経の一部が外側膝状体でのシナプスを経て直接視交叉上核に投射する。神経伝達物質はニューロペプチドYやエンケファリン。しゅとして暗の情報が伝わる。',
    },
    {
      term: ['セロトニン'],
      explanation:
        '興奮作用をもつ概日リズム内因子。メラトニンの合成元であるため、夜間に減少する。雄性行動を抑制する作用もある。',
    },
    {
      term: ['睡眠位相後退症候群'],
      explanation:
        '休暇によって概日リズムが乱れる疾患。昼間（朝）の光照射療法が有効',
    },
    {
      term: ['時差ボケ'],
      explanation:
        '現地時刻に合わせた食事時刻の変更を数日前から実行（視交叉上核非依存性リズムの調節）したり、現地夜時刻に合わせたメラトニン投与が有効。',
    },
    {
      term: ['聴性脳幹反応', 'ABR', 'Auditory Brain Response'],
      explanation:
        '法的脳死判定に利用される（必須ではない）。脳波測定によって得られる誘発電位のひとつ。',
    },
    {
      term: ['REM睡眠', 'Rapid eye movement', 'レム睡眠'],
      explanation:
        '高周波不規則な脳波（脳が覚醒状態）を出す睡眠の状態。首や胴部の筋肉は弛緩し、ストーリーを持った視覚的な夢を見ていることが多い。９０分周期でノンレム睡眠（高振幅徐波）と交互に4~5回繰り返し、睡眠時間がたつにつれレム睡眠が優性になり、REM睡眠時に目覚めると快適に目覚めることができる。',
    },
    {
      term: ['前障', 'claustrum'],
      explanation:
        '大脳新皮質の深部にあるシート状の神経構造。ノンレム睡眠時の高振幅徐波の制御に関与していることが最近の研究から判明した。刺激すると前頭皮質神経細胞の活動が一斉に抑制される。',
    },
    {
      term: ['PGO wave', 'Ponto-geniculo-occipital wave', '橋網様核'],
      explanation:
        'レム睡眠時の（運動麻痺やREMの高振幅徐波のブロック）制御をしているスパイクの一つ。橋網様核のコリン作動性細胞が形成しており、覚醒時には覚醒時に活動する縫線核などにより抑制される。',
    },
    {
      term: [
        'モノアミン・アセチルコリン・オレキシン作動性投射系',
        '上行性覚醒系',
      ],
      explanation:
        '脳の広い部分を網目のようにおおう投射経路が特徴的な覚醒の神経機構。ヒスタミンも含まれ、花粉症の薬などを飲むと眠くなるのはこのため。',
    },
    {
      term: ['オレキシン'],
      explanation:
        '摂食・覚醒調節作用を有する神経ペプチド。視床下部外側部のニューロンのみが産生し、中枢神経全域へ投射される。覚醒時にオレキシン神経活動は活発になり、活動が抑制されるとノンレム睡眠へと移行する。オレキシンニューロンは睡眠中枢から抑制され、覚醒中枢を刺激する（睡眠・覚醒のスイッチflip-flop仮説）。オレキシンやその受容体が欠損するとナルコレプシーという睡眠障害を伴う。また摂食行動促進作用・雄性行動促進作用も存在する。',
    },
    {
      term: [
        'ナルコレプシー',
        'Narcolepsy',
        'SOREMP',
        'sleep onset REM period',
        'YNT-185',
      ],
      explanation:
        'オレキシン欠乏・オレキシン受容体機能欠損。睡眠発作・情動性脱力発作・睡眠麻痺（金縛り/入眠時レム期）・入眠時幻覚。REM睡眠を浴せ右する作用のある三環系抗うつ剤が治療に有用。人では思春期に好発し、後天的に自己免疫疾患などによる視床下部オレキシンニューロンの破壊によって生じるという説が有力である。',
    },
    {
      term: ['成長ホルモン', 'Growth hormone'],
      explanation:
        '睡眠期開始の深いノンレム睡眠に同期してまとめて分泌される。体の成長・修復・新生に関与',
    },
    {
      term: ['プロラクチン'],
      explanation:
        '睡眠期の開始に同期して睡眠中ずっと分泌される。ストレス耐性・授乳に関与する。',
    },
    {
      term: ['甲状腺刺激ホルモン'],
      explanation:
        '夜間に同期して分泌される。体の新陳代謝に関与する。どちらかというと概日リズムに即している。',
    },
    {
      term: ['性腺刺激ホルモン'],
      explanation:
        '思春期に特有（パルス状）な夜間分泌パターンをしめす。性腺が発達すると昼夜問わずパルス状分泌を示す。',
    },
    {
      term: ['コルチゾール', 'CRH', 'ACTH'],
      explanation:
        '夜間から分泌開始するが、ピークは早朝。日内変動を示し、概日リズムに即する。ACTHは睡眠の終了に関与することもわかってきた。',
    },
    {
      term: ['基底外側辺縁経路'],
      explanation: '大脳辺縁系2大神経構造。神経肺内側核を通る',
    },
    {
      term: ['Papez回路'],
      explanation:
        '大脳辺縁系2大神経構造。支障前核群を通る。記憶や性行動の調節に関与する。海馬体→脳弓→乳頭体→支障前核群→帯状回後部→海馬傍回後部',
    },
    {
      term: ['延髄最後野'],
      explanation: '血液脳関門を欠く。摂食に関わる本能的な行動に関わる。',
    },
    {
      term: ['中心視索前核', 'MnPO'],
      explanation:
        '第三脳室腹側部AV3Vのひとつ。飲水行動に関わる中枢的な役割を果たす。',
    },
    {
      term: ['第三脳室腹側部', 'AV3V'],
      explanation:
        '第三脳室で浸透圧を感知し飲水行動を引き起こす。終板脈管器官OVLT、脳弓下器官SFO、中心視索前核MnPOで構成される。',
    },
    {
      term: ['Naxチャネル', 'Nax channel'],
      explanation:
        '脳室周囲器官グリア細胞（上衣細胞とアストロサイト）のNaxチャネルがセンサーとなってNa⁺レベルを監視し、Na⁺濃度が高くなると開口し抑制シグナルを投射ニューロンへ送ることで塩分接種を抑制したりNa⁺利尿を活発化させる。',
    },
    {
      term: ['エポキシエイコサトリエン酸', 'EETs', 'TRPV4'],
      explanation:
        '体液中のNa⁺濃度が上昇すると、Naxチャネルが活性化し、内因性リガンドであるエポキシエイコサトリエン酸EETsが放出される。これがTRPV4チャネルを発現する神経細胞を活性化し、その結果水分摂取行動が誘発される。',
    },
    {
      term: ['摂食中枢', 'LHA', '視床下部外側野', '室傍核'],
      explanation:
        '摂食中枢は視床下部外側野LHに存在し、室傍核などと連携して摂食活動を促進する。グルコース濃度↑で抑制され、遊離脂肪酸濃度↑で発火促進され、視索前野の加温で発火抑制、加冷で発火促進されるなど、緻密に制御されている。そのほか、雄の交尾行動の発現作用もある。',
    },
    {
      term: ['満腹中枢', 'VMH', '視床下部腹内側核', '弓状核'],
      explanation:
        '満腹中枢は視床下部腹内側核VMHに存在して、弓状核などと連携して摂食活動を抑制する。グルコース濃度↑で発火促進、遊離脂肪酸濃度↑で抑制され、視索前野の加温で発火促進、加冷で発火抑制されるなど、緻密に制御されている。そのほか、メスの性行動発現促進作用も持ち、メスの性中枢でもある。',
    },
    {
      term: ['中枢に作用する重要な抑制因子', 'グルコース'],
      explanation:
        'グルコース、インスリン、アミリン、レプチン などは中枢（視床下部・脳幹）に作用し、食欲を抑制する。膵臓ではインスリンが分泌される',
    },
    {
      term: ['中枢に作用する重要な促進因子', '遊離脂肪酸'],
      explanation:
        '遊離脂肪酸、ニューロペプチドY、オレキシン、グレリン、アディポネクチンなどは中枢（視床下部・脳幹）に作用し、食欲を促進する。脳ではケトン体がエネルギーとして利用され始める。',
    },
    {
      term: ['アミリン', 'IAPP', '膵ラ島アミロイド蛋白'],
      explanation:
        'インスリンとともにランゲルハンス島β細胞から分泌されている37アミノ酸残基からなるペプチドである。遊離脂肪酸などと同じく摂食抑制作用を示す',
    },
    {
      term: ['レプチン', 'leptin', '飽食因子'],
      explanation:
        '脂肪細胞から分泌される146アミノ酸残基からなる蛋白。レプチンあるいはレプチン受容体が欠損する家系では著しい肥満症を呈する。レプチンが体脂肪率を反映して血中濃度が上昇すると、視床下部（脂肪組織-レプチン-視床下部系）の受容体へ伝達され、摂食抑制（味細胞での甘味感受性の低下など）・交感神経活動亢進・エネルギー消費亢進を行い体脂肪量を一定に保つフィードバックを形成する。アディポネクチンとほぼ同じ視床下部弓状核に受容体が存在するが、作用は正反対である。そのほか、レプチンは特に女性の思春期発動と性周期の調節に深く関与する（栄養状態が悪いと性成熟が遅れたり、体重減少性無月経を引き起こしたりする）。',
    },
    {
      term: ['アディポネクチン', 'adiponectin'],
      explanation:
        '小型脂肪細胞で分泌されるアディポサイトカイン（アディポカイン）の一種。肥大化した脂肪細胞からは分泌が少ない（レプチンが分泌される）。摂食行動促進・インシュリン感受性の亢進・動脈硬化抑制・抗炎症・心筋肥大抑制などの作用があり、健康物質として注目されている。アディポネクチン受容体はレプチン受容体と同じ視床下部弓状核（摂食中枢）とほぼ同じ部位に存在するが、作用は正反対である。',
    },
    {
      term: ['グレリン', 'ghrelin'],
      explanation:
        '視床下部弓状核や胃・腸（空腹時）で分泌される。グレリンはペプチド部分が脂肪酸と結合してないと食欲刺激活性を示さない。摂食行動の生理的信号物質で、成長ホルモン分泌亢進・摂食行動亢進・胃酸分泌刺激・脂肪の蓄積・心機能の改善の作用がある。弓状核NPYニューロンに受容体があり、インスリンと相反する作用を示す。そのほかGnRH分泌を抑制する作用ももつ。',
    },
    {
      term: ['インスリン', 'insulin'],
      explanation:
        '視床下部室傍核のNesfatin-1ニューロンの細胞内のカルシウム濃度を増加させて活性化することで摂食を抑制する。グレリンと相反する作用を示すが、グレリンより優越して作用を示す。',
    },
    {
      term: ['エストロゲン', 'プロゲステロン'],
      explanation:
        'ともに女性ホルモンで、血中エストロゲン濃度（発情期に卵巣から分泌）はロードーシス（メスの性行動）発現を促進、プロゲステロン（主に妊娠時に分泌）はエストロゲンの作用を抑制する。',
    },
    {
      term: ['内側視索前野', 'MPOA'],
      explanation:
        'オスの重要な性中枢で、性的ニ型核（♂ > ♀）。視床下部に存在し、血中アンドロゲンとともに雄性行動を促進する。そのほか、視索前野両側は親行動も制御している。',
    },
    {
      term: ['中脳中心灰白質', 'PAG'],
      explanation:
        '脳幹部で性行動に伴う快感や性行動の学習に重要な役割を担う中枢。雄の場合は交尾行動や外生殖器への刺激でPAGの活動が増加し、メスの場合はロードーシス反射の統合中枢としてはたらく。。',
    },
    {
      term: ['SRY', 'SOX9'],
      explanation:
        '雄への性分化を担う重要な因子。周生期にY染色体上のSRYが生殖原基を精巣に変え、SOX9がミュラー管発達を阻害したり外生殖器形成を促進することで胎児の性分化を促進する。SRYが無ければ生殖原基は自動的に女性型となる。',
    },
    {
      term: ['ロードーシス'],
      explanation:
        'メス型の性行動。エストロゲン血中濃度により促進される。周生期のアンドロゲン曝露により脳が男性化し関連経路が消失する（ロードーシスしない）。',
    },
    {
      term: ['マウンティング'],
      explanation:
        'オス型の性行動。アンドロゲン血中濃度により促進される。周生期のアンドロゲン曝露がないと脳が女性化し関連経路が形成されない（マウント行動を行わない）。',
    },
    {
      term: ['前視床下部間質核', 'INAH'],
      explanation:
        'ヒトの性的二型核SDN。胎生期の性ホルモンによるアポトーシスの抑制と誘導が行われ、神経核体積に有意な性差（♂ > ♀）が生じる。母親のストレス等により副腎由来のアンドロゲン分泌が増加すると負のフィードバックが活発となり、胎児脳の雄性化の減弱化が生じる。同性愛男性では小さい。',
    },
    {
      term: ['性同一性障害', 'Gender Identity Disorder', 'Gender Incongruence'],
      explanation:
        '生物学的な性は完全に正常であり、しかも自分の肉体がどちらの性別に属しているかを認識していながら、その反面で自分は別の性に属していると感じ、確信している状態。WHOでは「障害」ではなくなり、性別不合Gender Incongruenceへ変更された。',
    },
    {
      term: ['性成熟', '脳下垂体-性腺系'],
      explanation:
        '血中ステロイドホルモンに対する視床下部の感受性の低下により負のフィードバックが減弱化してGnRH（LHRH）分泌とそれに対するLH分泌反応の増大がおこり、両者のパルス状分泌が増大する。これが思春期における性成熟を促す。',
    },
    {
      term: ['キスペプチン', 'kisspeptin'],
      explanation:
        '脳下垂体からの生殖腺刺激ホルモン（特にヒトの雌）の強力な分泌促進作用をもつ。思春期の開始に重要であり、生殖腺→視床下部の負のフィードバックを正のフィードバックへ変え、LHサージなどにも関与する。具体的には視床下部弓状核・前腹側室周囲核にキスペプチンニューロンをもち。それぞれエストロゲンの負・正のフィードバックを仲介する。',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}
