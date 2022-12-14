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
      term: ['セロトニン', 'serotonin'],
      explanation:
        'セロトニンは脳内の神経伝達物質のひとつで、概日リズム調整（興奮作用）や、味覚情報の伝達などを行う。メラトニンの合成元であるため、夜間に減少し雄性行動を抑制する作用もある。',
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
      term: ['オレキシン', 'orexin'],
      explanation:
        '覚醒調節作用を有する神経ペプチド。視床下部外側部のニューロンのみが産生し、中枢神経全域へ投射される。覚醒時にオレキシン神経活動は活発になり、活動が抑制されるとノンレム睡眠へと移行する。オレキシンニューロンは睡眠中枢から抑制され、覚醒中枢を刺激する（睡眠・覚醒のスイッチflip-flop仮説）。オレキシンやその受容体が欠損するとナルコレプシーという睡眠障害を伴う。また摂食行動促進作用・雄性行動促進作用も存在する。',
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
        '体液中のNa⁺濃度が上昇すると、Naxチャネルが活性化し、内因性リガンドであるエポキシエイコサトリエン酸EETsが脳室周囲器官グリア細胞（アストロサイトと上衣細胞）から放出される。これがTRPV4チャネルを発現する神経細胞へ受容され活性化し、その結果水分摂取行動が誘発される。',
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
        '大型脂肪細胞から分泌される146アミノ酸残基からなる蛋白。レプチンあるいはレプチン受容体が欠損する家系では著しい肥満症を呈する。レプチンが体脂肪率を反映して血中濃度が上昇すると、視床下部（脂肪組織-レプチン-視床下部系）の受容体へ伝達され、摂食抑制（味細胞での甘味感受性の低下など）・交感神経活動亢進・エネルギー消費亢進を行い体脂肪量を一定に保つフィードバックを形成する。アディポネクチンとほぼ同じ視床下部弓状核に受容体が存在するが、作用は正反対である。そのほか、レプチンは特に女性の思春期発動と性周期の調節に深く関与する（栄養状態が悪いと性成熟が遅れたり、体重減少性無月経を引き起こしたりする）。',
    },
    {
      term: ['アディポネクチン', 'adiponectin'],
      explanation:
        '小型脂肪細胞で分泌されるアディポサイトカイン（アディポカイン）の一種。肥大化した脂肪細胞からは分泌が少ない（レプチンが分泌される）。摂食行動促進・インシュリン感受性の亢進・動脈硬化抑制・抗炎症・心筋肥大抑制などの作用があり、健康物質として注目されている。アディポネクチン受容体AdipoR1はレプチン受容体と同じ視床下部弓状核（摂食中枢）とほぼ同じ部位に存在するが、作用は正反対である。',
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
        '視床下部から分泌され、脳下垂体からの生殖腺刺激ホルモン（特にヒトの雌）の強力な分泌促進作用をもつ。思春期の開始に重要であり、生殖腺→視床下部の負のフィードバックを正のフィードバックへ変え、LHサージなどにも関与する。具体的には視床下部弓状核・前腹側室周囲核にキスペプチンニューロンをもち、それぞれエストロゲンの負・正のフィードバックを仲介する。',
    },
    {
      term: ['自由再生テスト'],
      explanation:
        '自由な一文字を次々と提示して、それを覚えておくテスト。再生率は鍋底の形を示し、最初と最後の文字の再生率が高い→初頭効果primary effectと親近効果recency effect。　その他、妨害作業などの条件下では親近効果のみに効果を持つものがある。',
    },
    {
      term: ['作業記憶', 'working memory', '電話番号記憶'],
      explanation:
        '会話、読書、電話番号記憶、暗算など日常生活の認知活動に必要な情報をわずかな間だけ保持す。保存される情報の容量が限られている。容量は7±2(単位はチャンク；単語について理解が深いほどチャンク効率が良い。) とくに前頭葉などの大脳皮質が短期記憶に関連して活動している。',
    },
    {
      term: ['陳述的記憶', 'knowing what', 'declarative memory', '顕在記憶'],
      explanation:
        '長期記憶の2形式のうちのひとつで、意味記憶（知識など事実に関する記憶）・エピソード記憶（場所や時間などの属性が付加した出来事に関する記憶）に大別される。→海馬・大脳皮質（内側側頭野）が関連して活動する。',
    },
    {
      term: [
        '非陳述的記憶',
        'non-declarative memory',
        'knowing how',
        '潜在記憶',
      ],
      explanation:
        '長期記憶の2形式のうちのひとつで、手続き記憶（技能や習慣）・プライミング・連合学習（条件付け）・非連合学習などに大別される。比較的高等動物でなくても可能で、大脳皮質から線条体・小脳・脊髄・扁桃体などで行われている。',
    },
    {
      term: ['健忘症', 'amnesia'],
      explanation:
        '必要な情報を思い出せなくなる症状。原因（外傷性・心因性）、時間的な関係（順行性・逆行性）、内容（全健忘・部分健忘）による分類が存在する。例えば海馬を含む側頭葉内側部を除去すると発作は収まるが、新たに出来事を覚えられない等の症状が現れた（Henry Gustav Molaison:1953-2008）',
    },
    {
      term: ['間脳性健忘'],
      explanation:
        '視床背内側部＆乳頭体の損傷による健忘症。主な症状として順行性健忘・言語記憶障害が生じる。',
    },
    {
      term: ['コルサコフ症候群', 'Korsakoff’s syndrome'],
      explanation:
        'アルコール依存症とビタミンB₁（チミン）の欠乏によって起こる。主な症状として前向性健忘・逆行性健忘・失見当識（日時や自分のいる場所が分からない）・作話（架空の話を作る）',
    },
    {
      term: ['Papez回路', 'Papez', 'ペーペッツ'],
      explanation:
        '記憶回路（もとは情動回路と呼ばれた）で、→海馬体→脳弓→乳頭体→視床前核→帯状回→海馬傍回→の流れ。',
    },
    {
      term: ['非連合学習', 'non-associative learning', '慣れ', '感作'],
      explanation:
        '潜在記憶（非陳述的記憶）のひとつで、慣れ（馴化）habituationと感作（鋭敏化）sensitizationに区別される。「慣れ」とは連続した刺激に対する反応が薄れていく学習（伝達物質の放出量の減少で間を開けると回復する）のことで、「感作」は逆で刺激するほど反応が増大していく学習（かならず介在ニューロンが存在し代謝型受容体(Gs,Gq,G11)によって増強が行われる）のことである。長期的な慣れや感作はシナプス終末の形態的変化を伴う場合がある。',
    },
    {
      term: ['条件刺激', '条件反応', '条件付け'],
      explanation:
        '本能的な刺激（例えば食べ物）→反応（例えば唾液分泌）を無条件刺激・無条件反応と呼ぶのに対して、条件付け（学習）に基づく刺激→反応のことを条件刺激・条件反応とよぶ。条件付けは無条件刺激の0.5秒後に最も早く学習され、この感覚が長くなると条件付けは困難になる。条件反応はかならずしも無条件反応と類似するわけではなく、予期的反応になる場合もある。また、視覚・聴覚・触覚・内臓の不快反応に対して味覚刺激は条件反射が一度でできあがり、殆ど消去しない。孤束核・結合腕傍核・視床内側部・扁桃体が関係する。',
    },
    {
      term: ['オペラント条件付け', 'オペラント', 'operant conditioning'],
      explanation:
        '動物の自発的反応があって初めて成立する学習。自発行動（オペラント行動）の直後に報酬（強化子reinforcer）を与える（この操作を強化reinforcementとよぶ。）。動物に芸を仕込むときなど。',
    },
    {
      term: ['ヘブの学習法則', '学習法則', 'Hebbian Learning Rule'],
      explanation:
        '興奮入力が連続するとシナプスが強化。増強され、伝達効率が上がり、逆に興奮入力とその反応が同期されないとそのシナプスが弱化・抑圧されるシナプスの可塑性plasticityを利用した記憶のメカニズム。',
    },
    {
      term: ['テタヌス後増強', 'post-tetanic potentiation', 'PTP', 'テタヌス'],
      explanation:
        '高頻度の電気刺激（テタヌス）を与えるとシナプス応答が増強する、シナプスの可塑性の一つ。PTPの効果は短時間（数分～数十分）しか続かないので、長期増強に結びつくものではない。',
    },
    {
      term: ['長期増強', 'Long-term potentiation', 'LTP'],
      explanation:
        '数時間～数週間続くシナプス応答の増大。刺激はテタヌス刺激のような高頻度の刺激。LTPは長期記憶の基礎過程といわれている。→シナプスの可塑性だけではなく、神経回路の再構成も同時に行われいる。(特徴1)入力特異性：活性化された入力のみLTPが生じる。(特徴2)連合性：弱い入力と強い入力で同時に活性化されるとLTPが生じる。(特徴3)共同性：いくつかの弱い入力が同時に活性化するとLTPが生じる。発現にはシナプス後部のNMDA型グルタミン酸受容体が関与しており、シナプス前部の変化には逆行性シグナル伝達も関与しているとされている。シナプス刺激の強度とLTP発現時間には関連がある（早期・後期LTP）',
    },
    {
      term: ['長期抑圧', 'long-term depression', 'LTD'],
      explanation:
        'LTPを形成するテタヌス刺激ではなく、もっと低頻度のマイルドな刺激を続けると、以後同じ刺激にそれほど反応しなくなっていく。LTDは条件刺激を受けていないシナプスや、連合していないような刺激にも発生する。小脳には特有の小脳性LTD（苔状線維と登上線維が同時に興奮すると抑制される）も発生する。LTDが続くと実際にスパインが縮小する。',
    },
    {
      term: ['BCM理論', 'Bienenstock-Cooper-Munro theory'],
      explanation:
        '刺激によるNMDA受容体の活性化の程度（=細胞内に駆動されるCa²⁺の量）とシナプス伝達の長期的な変化には関係性がある。弱い活性化（微弱なCa²⁺）→LTD、強い活性化（多量のCa²⁺）→LTPを誘導する。',
    },
    {
      term: [
        'スパイクタイミング依存性可塑性',
        'STDP',
        'spike timing dependent plasticity',
      ],
      explanation:
        'シナプス伝達がcausal（前部→後部の順）だとLTPが起こり、興奮のタイミングがacausal（後部→前部などおかしな順）だと長期抑圧LTDを誘導する。postに対するpreの発火のタイミングが直前・直後だとLTP・LTDの誘導が最も高まる。',
    },
    {
      term: ['筋紡錘'],
      explanation:
        '筋線維の間に埋もれて存在する紡錘型の伸展受容器である。筋紡錘→中枢への線維：Ⅰa群感覚線維（一次終末を形成し筋の長さと伸長速度に応じて応答を変化させる。特に筋が急速に引き伸ばされたときに興奮する）・Ⅱ群線維（筋の長さに応じて興奮する）。　脊髄→筋紡錘の線維：γ運動ニューロン（筋紡錘の両端の錘内筋線維を支配し筋紡錘の感度を調節する）',
    },
    {
      term: ['帯状皮質'],
      explanation:
        '大脳皮質の中で最も深い領域の一つ。人間の顔に対する好みを司る（人間の顔に対して多様な反応を示す）。帯状皮質は他の領域と情報を共有するが、DecNef時にはほかの情報から切り離され、また、本人も自ら分かっていない。',
    },
    {
      term: ['DecNef'],
      explanation:
        'DecNefは多芸多才で、被験者は誘導された情報を意識できない。また、情報は他の領域に漏れることがない。意識に必要なのは前頭前野PFCと領域間の情報伝達に基づくモジュール選択？PTSDの治療に際して、従来の記憶消去（トラウマを「慣れ」によって治療するので、治療そのものが辛くDropOut率が高い。&「慣れ」抑制しているだけなので、何かが引き金となって再びフラッシュバックされる可能性がある）とは異なり、脳活動パターンと報酬とを結びつけることで、恐怖反応を低減させることができる。→強迫観念を軽減できる？',
    },
    {
      term: ['M細胞', 'パラソル', 'Parasol', 'M経路'],
      explanation:
        '網膜の大型の神経節細胞。視細胞→双極細胞・水平細胞・アマクリン細胞→神経節細胞→外側膝状体の経路で視覚情報を伝達する。特にM細胞は1層（対側から）・2層（同側から）の大細胞層へ線維を伸ばし、M経路と呼ばれ、動きに関する情報を伝える。',
    },
    {
      term: ['P細胞', 'ミジェット', 'Midget', 'P経路'],
      explanation:
        '網膜の小型の神経節細胞。視細胞→双極細胞・水平細胞・アマクリン細胞→神経節細胞→外側膝状体の経路で視覚情報を伝達する。特にP細胞は4,6層（対側から）・3,5層（同側から）の小細胞層へ線維を伸ばし、P経路と呼ばれ、詳細な形や色に関する情報を伝える。',
    },
    {
      term: ['アルファ-ガンマ連関', 'α-γ連関', 'alpha-gamma linkage'],
      explanation:
        '随意運動・反射運動いずれの場合にもα運動ニューロン（→骨格筋）とγ運動ニューロン（→筋紡錘）の両方に上位中枢から信号が与えられ、α経路とγ経路が同時に働く関係のこと。伸び縮みする骨格筋に合わせて筋紡錘の長さを変化させることで、筋紡錘の感覚終末部が脱負荷の状態になったり、過伸張の状態になるのを防ぐ。',
    },
    {
      term: ['興奮収縮連関', 'E-C coupling', 'Excitation-Contraction coupling'],
      explanation:
        '細胞膜の興奮が骨格筋の収縮を引き起こす仕組み。T細管により活動電位が細胞内へ伝導→triadで隣接する筋小胞体のCa²⁺放出チャネルを開く→筋小胞体から筋形質中にCa²⁺が放出される→Ca²⁺がトロポニンに結合し収縮反応が引き起こされる→→Ca²⁺がトロポニンから除去されポンプで筋小胞体へCa²⁺が取り込まれることにより、筋形質のCa²⁺濃度が低下し弛緩する。',
    },
    {
      term: [
        '誘発筋電図',
        'evoked electromyogram',
        'Hoffmann reflex',
        'H-reflex',
      ],
      explanation:
        '筋肉で生じる複合活動電位。脛骨神経などの神経を電気刺激すると、弱い刺激の場合はⅠa群線維（筋紡錘→中枢）のみが刺激され、Ⅰa群線維→α線維→筋肉の経路で遅いH波が記録される。強い刺激の場合はα線維（脊髄前角→筋肉）も刺激され、α線維→筋肉の経路で素早いM波が生じる。また、あまりにM波が強くなると不応期の関係でH波が消え、運動ニューロンの細胞体で跳ね返ったF波が遅れて生じるようになる。',
    },
    {
      term: ['関連痛', 'referred pain'],
      explanation:
        '痛みとなる原因が生じた部位と異なる部位に感じる痛み。同じレベルの脊髄に入力している皮膚デルマトームの領域に痛みを感じる。内臓由来の情報と皮膚由来の情報が同じニューロンに収束していることが原因だが、皮膚の痛みを内臓に感じることは殆どない。',
    },
    {
      term: ['オピオイド', 'opioid'],
      explanation:
        '麻薬性鎮痛薬やその関連合成鎮痛薬などのアルカロイドおよびモルヒネ様活性を有する内因性または合成ペプチド類の総称。鎮痛・胸酔作用がある。下行性モノアミン経路（下行性疼痛抑制系）を活性化させ、感覚入力の活動電位を下げることにより痛みを調節する。',
    },
    {
      term: ['ポリモーダル受容器', 'polymodal', 'ポリモーダル'],
      explanation:
        '伝導速度のもっとも遅い無髄のC神経線維の末梢端（侵害受容器）。強い機械刺激・化学物質刺激・温度刺激（高温・低温）を受容し活性化し、二次痛として脊髄後角の感覚ニューロンへ痛みを伝える。',
    },
    {
      term: [
        'METチャネル複合体',
        'mechano-electrical transducer channel',
        'MET',
      ],
      explanation:
        '感覚毛毛先端のtip linkにより物理的な伸展刺激に対して開口するK⁺イオンチャネル。有毛細胞が適方向（動毛/基底小体の方向）に屈曲すると、チャネルが開きK⁺が高濃度の内リンパ液から細胞内に流入し脱分極が生じる。逆方向に屈曲すると、チャネルが閉じK⁺の流入が止まり過分極となる（感覚毛を動かさなくても機械受容器チャネルは開いている）',
    },
    {
      term: [
        'アルファフェトタンパク質',
        'αフェトタンパク',
        'alpha fetoprotein',
      ],
      explanation:
        '胎児の肝臓などから分泌される糖タンパク。げっ歯類ではエストロゲンがαフェトタンパク質に結合し、前脳底部や視床下部のニューロンに存在するエストロゲンα受容体で受容されると、脳の性分化を促進し縄張り行動や攻撃行動といった雄型の行動を起こすようになる。しかし、このアロマターゼ仮説はヒト・霊長類では成立しない（αフェトタンパク質がエストロゲンと結合しない/霊長類ではアンドロゲンが脳の男性化を引き起こす）',
    },
    {
      term: ['エストラジオール', 'estradiol', 'E₂'],
      explanation:
        'エストロゲンの一種で、エストロゲンの中で最も強い生理活性を持つ。精巣や卵巣の内卵胞膜で産生されるテストステロンが、卵巣（げっ歯類では前脳底部・視床下部）のアロマターゼによってエストラジオールに芳香化される。エストロゲン受容体は様々な細胞の核の中に存在し、生殖機能の形成および細胞の増殖を促進する働きを持つ。',
    },
    {
      term: ['オキシトシン', 'oxytocin'],
      explanation:
        '下垂体後葉から分泌され、延髄孤束核のα-MSHニューロンで摂食を抑制したり、女性では乳腺筋上皮細胞に作用して射乳反射を誘導したり、子宮筋を収縮させて分娩促進したりする。その他、セロトニン作動性ニューロンの活動を促進して抗ストレス作用を示し、自閉症・うつ病などに効果があるといわれている。',
    },
    {
      term: ['テストステロン', 'testosterone'],
      explanation:
        '精巣ライディッヒ細胞で主に産生されるアンドロゲンの一種で、アンドロゲンの中で最も強い生理活性を持つ。ラットでは視床下部内側視索前野MPOAにテストステロン受容体が豊富に発現しており、マウント行動を発現したり、射精促進作用を有する。ヒトでも脳の性分化、男性生殖組織の発達に重要な役割を果たし、筋肉や骨量の増加、体毛成長などの作用も持つ。アンドロゲン受容体は様々な細胞の核内に存在する。',
    },
    {
      term: ['二次痛'],
      explanation:
        '一次痛のあとで、より持続性なうずくような、ときに灼熱痛と形容される痛み。ポリモーダル侵害受容器からC線維によって伝達される。',
    },
    {
      term: ['一次痛'],
      explanation:
        '鋭く素早い痛み。皮膚表面の機械侵害受容器や温度侵害受容器からAδ線維によって伝達される。',
    },
    {
      term: ['マイスネル小体', 'マイスネル', 'マイスナー', 'Meissner', 'RA1'],
      explanation:
        '順応が早く、受容野が狭いRA1型の皮膚浅層の機械受容器。薄い被膜で覆われ、小さな突起や凹凸、低周波低振幅の刺激（皮膚変位の速度）の感知に適している。低周波振動センサー。',
    },
    {
      term: ['メルケル細胞', 'Merkel', 'メルケル', 'SA1'],
      explanation:
        '順応が遅く、受容野が狭いSA1型の皮膚浅層の機械受容器。点字など、異なる形や大きさの物体（皮膚変位）を識別するのに適している。圧力センサー。',
    },
    {
      term: ['パチニ小体', 'パチニ', 'Pacini', 'RA2'],
      explanation:
        '順応が早く、受容野が広いRA2型の皮膚深層の機械受容器。数十層もの被包をもち、高周波の振動、皮膚変異の加速度を感知するのに適している。高周波振動センサー。',
    },
    {
      term: ['ルフィニ終末', 'ルフィニ', 'Ruffini', 'SA2', 'ルフィーニ'],
      explanation:
        '順応が遅く、受容野が広いSA2型の皮膚深層の機械受容器。特定の方向を向き、皮膚の伸展を感知するのに適している。皮膚伸張センサー。',
    },
    {
      term: ['ワインドアップ', 'wind-up', '中枢性感作'],
      explanation:
        'C線維から繰り返される侵害受容入力に反応した脊髄内での増幅機構。Mg²⁺ブロック解除によってNMDA受容体から流入するCa²⁺が増幅に関与する。中枢の広作動域ニューロンでみられる。',
    },
    {
      term: ['感覚順応', 'ダイナミックレンジ'],
      explanation:
        'ダイナミックレンジとは感覚細胞が刺激強度の変化を応答の変化に反映できる刺激強度の範囲のこと。通常この範囲は狭い（人間が対数スケールで刺激強度を感知するのに対して、活動電位は受容器の数に比例して発生するため）が、特に嗅細胞では、強い刺激では順応状態（応答抑制）、弱い刺激では非順応状態（応答抑制されない）となることで、感度を下げることなく感覚細胞のダイナミックレンジを広げている。',
    },
    {
      term: ['側方抑制', 'lateral inhibition'],
      explanation:
        '介在ニューロンにより、強い入力を受けた部分が周囲の（比較的）弱い入力を抑制する現象。強い入力だけが強調され、コントラストの効いた感覚情報を得ることができる。',
    },
    {
      term: ['味覚地図', '味受容体発現部位'],
      explanation:
        '味受容体は発現頻度に部位差があるが、どの部位の乳頭でも、5味全てが発現している。また、1つの味蕾で5味を感知する味細胞がそろっている。',
    },
    {
      term: ['TRPチャネル', 'transient receptor potential', 'TRP'],
      explanation:
        'Na⁺・K⁺・Ca²⁺などを透過する非選択的陽イオンチャネル。センサータンパク質としての機能（細胞内Ca²⁺濃度上昇・温度変化・pH変化・機会刺激・浸透圧変化・酸化ストレス・痛み・フェロモンなどによって活性化し、細胞内シグナルに変換する）、足場タンパクとしての機能（様々なタンパク質と結合して足場を形成し、シグナル複合体を形成する）をもつ。6つのサブファミリーを構成する。',
    },
    {
      term: ['聴覚伝導路', '聴覚路', '聴覚経路'],
      explanation:
        '音信号は蝸牛の有毛細胞→らせん神経節ニューロン→蝸牛神経核→上オリーブ核→（一部交叉）→下丘→視床（内側膝状体）→大脳一次聴覚野の経路で伝導される。左右の聴覚野それぞれに両側の信号が入力されるが、対側が優位である。高次中枢へ進むほど側方抑制が効いて、チューニングが鋭くなる。',
    },
    {
      term: ['前庭動眼反射', 'vestibule-ocular reflex'],
      explanation:
        '頭の動きと反対方向へ眼を動かすことにより視線を保持する。前庭神経核→外転神経核→動眼神経核が協調的に左右の外直筋と内直筋を弛緩・収縮させることで、急に首を振っても同じ視界を維持する事ができる。頭部の回転周波数が低すぎると滑らかな前庭動眼反射は起こらない。前庭性眼振（回転する風景を眼球が追いかけて回転している時に定期的におこる眼球運動のリセット）とは逆方向の眼球運動であり、前庭性眼振より緩やか（緩徐相）。',
    },
    {
      term: [
        'カロリックテスト',
        'カロリック',
        '温度眼振検査',
        'caloric',
        'COWS',
      ],
      explanation:
        '末梢前庭器官の機能が正常か否かを調べる検査。片方の耳に冷水/温水を注入すると、内リンパ液に対流が発生し、急速な眼振を引き起こす。正常時ではCOWS（Cold冷水 Opposite対側 / Warm温水 Same同側） の方向に眼振が生じる。眼振だけでなく前庭動眼反射VORも起こるが、緩やかな動きで逆方向。',
    },
    {
      term: ['眼振', 'nystagmus'],
      explanation:
        '回転する風景を眼球が追いかけて回転しているときに、定期的に起こる眼球運動のリセット。風景の動きと逆方向の眼球運動で、急速な運動（急速相）。回転し続ける風景を無限に追いかけることはできないため、一定間隔で眼球を真逆の方向へ動かす必要がある。前庭性眼振（頭部回転による前庭動眼反射に対する眼球運動のリセット）と、視機性眼振（電車の窓など、動く風景を追いかける眼球運動に対するリセット）がある。',
    },
    {
      term: ['内リンパ液', '内リンパ', '外リンパ'],
      explanation:
        '前庭階・鼓室階を満たす外リンパ液は細胞外液に似た電解質組成をもち、その電位は細胞外電位に等しい。蝸牛の中央階を満たす内リンパ液は高K⁺、低Na⁺、低Ca²⁺で、内リンパ液は外リンパ液に対して+80mVの正電位を持つ。この電解質組成と電位は蝸牛血管条の上皮細胞や線維芽細胞の能動輸送によって作り出され、コルチ器の有毛細胞へK⁺が流入するのに好都合である。',
    },
    {
      term: ['伸張反射', 'stretch reflex', 'myotatic reflex'],
      explanation:
        '筋紡錘が伸ばされたとき、同名筋（や協同筋）を素早く収縮することで、長さを一定に保ち姿勢や肢位を維持する反射を伸張反射とよぶ。引き伸ばされた筋を最も強く収縮させ（→自原性反射）、筋紡錘→α運動ニューロン→同名筋の介在ニューロンを介さない経路（→単シナプス性反射）が特徴。上位脳から抑制を受けており、脳性まひやパーキンソン病では緊張性伸張反射の亢進（固縮）がみられる。',
    },
    {
      term: [
        '中心窩視',
        'foveation',
        '衝動性眼球運動',
        'サッケード',
        'saccade',
        '追跡眼球運動',
        'pursuit eye movement',
        'smooth pursuit',
        '開散運動',
        'vergence',
      ],
      explanation:
        '視線保持のためではなく、対象物へ中心窩を向けるための眼球運動。具体的には衝動性眼球運動/サッケード（視覚的探索のときの非常に素早い眼球運動）、追跡眼球運動（ゆっくり動く視覚対象物の網膜像を動きに合わせて滑らかに中心窩付近に維持する随意性眼球運動）、輻輳・開散運動（異なる奥行きにある対象物に視線を移動させたときに起こる非共役性眼球運動）が挙げられる。',
    },
    {
      term: ['GABA', 'GAD'],
      explanation:
        'GABAは神経伝達物質のひとつで、グルタミン酸からグルタミン酸脱炭酸酵素GADによって合成される。イオンチャネル型のA受容体と代謝型のB受容体が存在し、いずれも抑制性シナプス伝達を担う。イオンチャネル型受容体はCl⁻チャネルで、細胞内Cl⁻濃度が高い幼弱期では脱分極応答を示す。代謝型B受容体は自己受容体autoreceptorとしてフィードバック抑制に関わる',
    },
    {
      term: ['情動', 'emotion'],
      explanation:
        '情動とは愛情・憎悪・嫌悪・喜悦・羞恥心・羨望・罪悪感・恐怖・不安などを指す。刺激に対する生理的反応や、意識的な経験（感情）の総称。',
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
