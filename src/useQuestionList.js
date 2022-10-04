import { useState } from 'react'

import exam20201 from './img/question/exam20201.png'
import motorNeuron from './img/answer/motorNeuron.png'
import recycleNeurotransmitter from './img/answer/recycleNeurotransmitter.png'
import stretchReflex from './img/answer/stretchReflex.png'
import NMJ from './img/answer/NMJ.png'
import skeletalMuscle from './img/answer/skeletalMuscle.png'
import excitationContractionCoupling from './img/answer/excitationContractionCoupling.png'
import alphaGammaLinkage from './img/answer/alphaGammaLinkage.png'
import electromyogram from './img/answer/electromyogram.png'
import exam20202 from './img/question/exam20202.png'
import sensoryReceptors from './img/answer/sensoryReceptors.png'
import photoreception from './img/answer/photoreception.png'
import nociception from './img/answer/nociception.png'
import hairCell from './img/answer/hairCell.png'
import dermatome from './img/answer/dermatome.png'
import exam20203 from './img/question/exam20203.png'
import mGluR6 from './img/answer/mGluR6.png'
import sensitization from './img/answer/sensitization.png'
import prismAdaptation from './img/answer/prismAdaptation.png'
import motorLearning from './img/answer/motorLearning.png'
import LTP from './img/answer/LTP.png'
import LTD from './img/answer/LTD.png'
import longMemory from './img/answer/longMemory.png'
import basalGanglia from './img/answer/basalGanglia.png'
import exam20204 from './img/question/exam20204.png'
import associationArea from './img/answer/associationArea.png'
import taste from './img/answer/taste.png'
import sleepingData from './img/answer/sleepingData.png'
import olfactory from './img/answer/olfactory.png'
import EEG from './img/answer/EEG.png'
import circadianClockControl from './img/answer/circadianClockControl.png'
import sarcomere from './img/answer/sarcomere.png'
import lightReflex from './img/answer/lightReflex.png'
import aphasia from './img/answer/aphasia.png'
import typeOfMuscle from './img/answer/typeOfMuscle.png'
import tetanus from './img/answer/tetanus.png'
import conduction from './img/answer/conduction.png'
import cerebralCortex from './img/answer/cerebralCortex.png'
import actionPotential from './img/answer/actionPotential.png'
import PIPathway from './img/answer/PIPathway.png'
import neuronDiameter from './img/answer/neuronDiameter.png'
import myelin from './img/answer/myelin.png'
import mechanoreceptor from './img/answer/mechanoreceptor.png'
import column from './img/answer/column.png'
import cAMP from './img/answer/cAMP.png'
import olfactorySynapse from './img/answer/olfactorySynapse.png'
import olfactoryExam from './img/answer/olfactoryExam.png'
import exam20211 from './img/question/exam20211.png'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2021本試',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '活動電位の発生について、脱分極してから静止電位に戻るまでの過程を説明しなさい。',
          answerImg: [actionPotential],
          answer:
            '脱分極を誘導した電位依存性Na⁺チャネルがすぐに不活化され、電位依存性（遅延整流性）K⁺チャネルが開き、再分極の後リークK⁺チャネルによって静止電位に戻っていく。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'アセチルコリンを合成する酵素は( 1 )、分解する酵素は( 2 )である。また、グルタミン酸を除去するものは( 3 )である。',
          answerImg: [recycleNeurotransmitter],
          answer:
            '(1)コリンアセチルトランスフェラーゼ、(2)アセチルコリンエステラーゼ、(3)グルタミン酸トランスポーター',
          commentary:
            'アセチルコリン（とモノアミンの一部）のみコリンへ分解されて再合成される。グルタミン酸・GABA・グリシン・モノアミンはトランスポーター（膜輸送体）により細胞内へ輸送され、再び小胞体へ蓄えられる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞内シグナル伝達のcAMP経路について、リガンドが結合してから特定のタンパク質がリン酸化されるまでの過程を説明しなさい。',
          answerImg: [cAMP],
          answer:
            'Gsのαサブユニットがアデニル酸シクラーゼを刺激し、アデニル酸シクラーゼによってcAMPが産生される。cAMPによりcAMP依存性プロテインキナーゼA(PKA)が活性化され、PKAがタンパク質のセリンやトレオニン残基に特異的に作用してリン酸化を行う。',
          commentary:
            'アデニル酸シクラーゼACを活性化するGタンパク質はGs。cAMPはセカンドメッセンジャー。リン酸化により遺伝子転写や、酵素活性などが調節される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '細胞内シグナル伝達のホスファチジルイノシトール経路について、リガンドが結合してから小胞体よりカルシウムイオンが放出されるまでの過程を説明しなさい。',
          answerImg: [PIPathway],
          answer:
            'GqなどのαサブユニットがホスホリパーゼC(PLC)を活性化し、PLCがイノシトールリン脂質をイノシトール3リン酸とジアシルグリセロールに加水分解する（ PIP₂ → IP₃ + DG ）。このうちIP₃が小胞体のIP₃受容体に結合することで、小胞体内から細胞質へCa²⁺が放出される。',
          commentary:
            'ホスホリパーゼCを活性化するGタンパク質はGq,G11。加水分解されたDGはCa²⁺とともにプロテインキナーゼC(PKC)を活性化する。→カルモジュリン依存性キナーゼとPKCが標的タンパク質をリン酸化することで生理作用を発揮する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '有髄神経線維でのみ生じる活動電位の素早い伝導は何か。また、末梢神経系の髄鞘を形成するグリア細胞は何か。',
          answerImg: [myelin],
          answer: '跳躍伝導、シュワン細胞',
          commentary:
            '中枢神経系の髄鞘はオリゴデンドロサイト（1対多）、末梢神経系ではシュワン細胞（1対1）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】皮膚感覚受容器は( 1 )と( 2 )により分類することができる。( 1 )が早いものはRA、遅いものはSAである。また、( 2 )が広いものがⅠ型、狭いものがⅡ型である。皮膚の機械受容器を分類すると、RA1は( 3 )、RA2は( 4 )、SA1は( 5 )、SA2は( 6 )があてはまる。',
          answerImg: [mechanoreceptor],
          answer:
            '(1)順応　(2)受容野　(3)マイスネル小体　(4)パチニ小体　(5)メルケル細胞　(6)ルフィニ小体',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】皮膚感覚受容器は適刺激によって、機械受容器・温度受容器・侵害受容器に分類することもできる。このうち、温度受容器には( 7 )チャネルが存在し、温度受容に関与する。(7)チャネルは温度だけでなく、( 8 )にも反応する。',
          answerImg: [nociception],
          answer: '(7)TRP、(8)化学物質',
          commentary:
            'TRPチャネルは温度や化学物質に反応するイオンチャネル。侵害受容器には他にもNa⁺チャネル、ATP受容体（組織障害にともない末梢細胞から放出されるATPで活性化）が発現している。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '体性感覚は( 1 )と( 2 )に分類することができる。',
          answerImg: [],
          answer: '表在感覚、深部感覚',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '一次体性感覚野の機能単位は何か',
          answerImg: [column],
          answer: '円柱構造（コラム）',
          commentary:
            '一次体性感覚野は中心後回ともよばれる。体部位局在性がある。視床からの入力は皮質Ⅳ層（やⅤ層）へ投射される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】痛みに関して、受容野が狭く、痛みがどこにあるのかを知らせる( 1 )ニューロンと、痛みの強度を知らせる( 2 )ニューロンが存在する。',
          answerImg: [nociception],
          answer: '(1)特異的侵害受容　(2)広作動域',
          commentary:
            '特異的侵害受容ニューロンNociceptive specific neuron(NS)は受容野が狭く、痛みがどこにあるのか知らせる（皮膚と内臓からの入力が収束するので、関連痛を引き起こす）。広作動域ニューロンWide dynamic range neuron(WDR)は痛みの強度を知らせる（繰り返し刺激により中枢性感作ワインドアップが生じる）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '【空欄を埋めよ】侵害刺激を受けると、まず機械受容器や温度受容器から( 3 )線維によって刺激が伝達され、鋭い痛みを感じる。その後、ポリモーダル侵害受容器から( 4 )線維によって刺激が伝達され、より持続性のうずくような( 5 )を感じる。また、内臓の痛みを同じ脊髄に入力する( 6 )内の皮膚の痛みとして感じることがある。これを( 7 )という。',
          answerImg: [nociception, neuronDiameter],
          answer: '(3)Aδ　(4)C　(5)二次痛　(6)デルマトーム　(7)関連痛',
          commentary:
            'A線維は有髄（αほど太く、δほど細い）、C線維は無髄。一次痛は鋭く、素早い痛みで、二次痛は持続的でうずくような、ときに灼熱痛と形容される疼痛。',
        },
        {
          detailInfo: '',
          questionImg: [exam20211],
          questionSentence:
            '嗅細胞における受容器電位発生メカニズムを説明する図を参考に、空欄を埋めて文章を完成させなさい。アルファベットは図中と一致している。　におい分子が受容体タンパク質（R）に受容され、これとカップルしている( 1 )が活性化される。この活性化は次に( 2 )に伝えられ、その結果、ATPから( 3 )が生まれる。(3)は、細胞膜に存在している( 4 )に直接働きかけて開口させることにより細胞内へ( 5 )や( 6 )が流入し、細胞を電気的に興奮させる。その(6)は( 7 )を活性化する。その結果、( 8 )が細胞外へ流出して受容器電位応答を増幅する。',
          answerImg: [olfactory],
          answer:
            '(1)Gタンパク質/Golf　(2)アデニル酸シクラーゼ　(3)cAMP　(4)cAMP作動性カチオンチャネル　(5)Na⁺　(6)Ca²⁺　(7)Cl⁻チャネル　(8)Cl⁻　',
          commentary:
            '嗅細胞ではGPCRがセカンドメッセンジャーであるcAMPを産生し、直接非選択性陽イオンチャネルを活性化する。個々のにおい分子に応答する受容体の組み合わせパターンの違いで、多くのにおいを識別している',
        },
        {
          detailInfo: '',
          questionImg: [olfactory],
          questionSentence:
            '図を参考に、嗅覚の順応のメカニズムを説明しなさい。また、順応の意義とは何か。',
          answerImg: [],
          answer:
            '【メカニズム】cAMP作動性カチオンチャネルから流入したCa²⁺がアデニル酸シクラーゼ活性を抑制したり、cAMPを分解する酵素PDEの活性を促進したり、イオンチャネルを細胞内から抑制したりすることによって、電流応答が減弱（順応）していく。【順応の意義】感度を下げずに感覚細胞のダイナミックレンジを広くすることで、濃度の高いにおいの中でも通常の濃度の時と同じように細かいにおいの変化をすぐに感知し、周囲の環境の変化をすぐに知ることで危険を回避することができる。',
          commentary:
            '感覚順応により、幅広い（100倍近い）濃度の差でも、感度を変えずに濃度の違いを認識する事ができる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '正しいものを選べ。',
          choices: [
            '１つのにおい分子が１種の受容体に結合する。',
            'ある受容細胞には複数の受容体が存在する。',
            '１つの受容体が複数のにおい分子に結合する。',
          ],
          answerImg: [olfactorySynapse],
          answer: '１つの受容体が複数のにおい分子に結合する。',
          commentary:
            '嗅細胞の嗅覚受容体はヒトの場合約350種類で構成されるが、それでも1万～10万種を超えるにおい分子を特定するには足りない。→（介在ニューロンの側方抑制などにより）応答する受容体の組み合わせパターンの違いによって、多くのにおいを識別している',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '嗅細胞において、におい刺激を与えた際に受容器電位が最も大きくなるのは、嗅細胞のどの位置に刺激を与えたときか。',
          answerImg: [olfactoryExam],
          answer: '線毛/繊毛',
          commentary:
            '嗅細胞のcAMP依存性陽イオンチャネルが繊毛部分に局在している→嗅覚受容体もおそらく繊毛部分に局在している。鼻腔では表面を粘膜が覆っており、嗅線毛はその中で浮いているためにおい分子をキャッチしやすい。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2020本試',
      groupContents: [
        {
          detailInfo: '(1)',
          questionImg: [],
          questionSentence:
            '一次運動野において、特に大きなものをベッツ細胞と呼ぶこともある出力細胞の名称を答えよ。',
          choices: [],
          answerImg: [],
          answer: '錐体細胞',
          commentary:
            '一次運動野からの出力細胞は錐体細胞と呼ばれ、出力先によってⅤ層の大型/中型錐体細胞・Ⅲ層の中型/小型錐体細胞・Ⅵ層の錐体細胞に分かれる。特に錐体路へ出力するⅤ層の大型錐体細胞はBetzの巨大錐体細胞とよばれる。',
        },
        {
          detailInfo: '(2)(3)',
          questionImg: [exam20201],
          questionSentence:
            '図で、ガラス電極を挿入して逆行性軸索輸送の速度を計測したところ、伝達物質が大脳皮質に到達するまでに延髄錐体で1.2ミリ秒、大脳脚で2.2ミリ秒かかった。延髄錐体と大脳脚の距離が12mmであるとき、この間のニューロンの伝達速度を求めよ（単答）。また、このニューロンはfast型かslow型か、根拠とともに答えよ（記述）。',
          choices: [],
          answerImg: [],
          answer:
            '伝達速度は12m/sec。　伝達速度が20m/secより遅いため、slow型。',
          commentary:
            '12mmの大脳脚-延髄錐体間を通過するのに1ミリ秒かかったので、伝達速度は12m/sec。軸索の伝達速度が20m/secより早ければ早い錐体路細胞fastPTN,遅ければ遅い錐体路細胞slowPTNとよばれる。',
        },
        {
          detailInfo: '(4)',
          questionImg: [],
          questionSentence:
            '骨格筋（錘外筋）に繋がっている運動神経線維の名称を答えよ。',
          choices: [],
          answerImg: [motorNeuron],
          answer: 'α運動ニューロン',
          commentary: '',
        },
        {
          detailInfo: '(5)',
          questionImg: [exam20201],
          questionSentence: '(a)で用いられる神経伝達物質は何か。',
          choices: [],
          answerImg: [],
          answer: 'グルタミン酸？',
          commentary:
            'グルタミン酸は、中枢神経で興奮性シナプス伝達を起こす代表的な神経伝達物質である。',
        },
        {
          detailInfo: '(6)',
          questionImg: [exam20201],
          questionSentence:
            '図で、筋細胞の膜電位が-70mVのとき、シナプス電流はどちら向きに流れるか、根拠とともに答えよ。（記述）',
          choices: [],
          answerImg: [],
          answer:
            'ニコチン型アセチルコリン受容体は非選択的陽イオンチャネルなので、内向き',
          commentary: '非選択的陽イオンチャネルの平衡電位は0mV',
        },
        {
          detailInfo: '(7)',
          questionImg: [exam20201],
          questionSentence: '(b)で用いられる神経伝達物質は何か。',
          choices: [],
          answerImg: [NMJ],
          answer: 'アセチルコリン',
          commentary:
            '活動電位が運動ニューロン終末まで伝わると、神経終末から神経伝達物質としてアセチルコリンがシナプス間隙に放出される。筋線維のシナプス後膜にはニコチン型アセチルコリン受容体が存在する',
        },
        {
          detailInfo: '(8)',
          questionImg: [],
          questionSentence:
            '骨格筋が脱分極し、再び静止電位に戻るまでの機序を答えよ。（記述）',
          choices: [],
          answerImg: [NMJ],
          answer:
            '受容体が神経伝達物質を受けると、非選択的陽イオンチャネルが活性化し脱分極を起こし、これが細胞膜と連続しているT細管によって骨格筋の隅々まで信号が伝わる。約5ミリ秒後には受容体に結合したアセチルコリンが分解され、チャネルが閉じ、膜電位は静止膜電位に戻る。',
          commentary: '',
        },
        {
          detailInfo: '(9)',
          questionImg: [exam20201],
          questionSentence:
            '(a)と(b)の神経伝達物質は異なる方法でシナプス間隙から除去される。その方法をそれぞれ文章で説明せよ。',
          choices: [],
          answerImg: [recycleNeurotransmitter],
          answer:
            '(a)グルタミン酸はシナプス前部や周囲グリア細胞へ回収される。(b)アセチルコリンはアセチルコリンエステラーゼAChEによって分解され、コリンとして再利用される。',
          commentary:
            'グルタミン酸の膜輸送体：グルタミン酸トランスポーターEAAT。シナプス前部へ回収された神経伝達物質は、小胞膜輸送体によって再度シナプス小胞へ充填される。',
        },
        {
          detailInfo: '(10)',
          questionImg: [exam20201],
          questionSentence:
            '(c)の器官の名称および役割について、文章で説明せよ。',
          choices: [],
          answerImg: [motorNeuron],
          answer:
            '(c)は多分筋紡錘で、伸展受容器として筋が引き伸ばされている度合いを中枢へ伝える。',
          commentary: '',
        },
        {
          detailInfo: '(11)',
          questionImg: [],
          questionSentence:
            '筋紡錘でみられる伸張反射について、文章で説明せよ。',
          choices: [],
          answerImg: [stretchReflex],
          answer:
            '伸張反射は筋紡錘→Ⅰa線維→α運動ニューロン→引き伸ばされた筋肉が収縮する経路（自原性興奮）でおこる単シナプス性反射である。',
          commentary: '',
        },
        {
          detailInfo: '(12)',
          questionImg: [],
          questionSentence:
            '伸張反射は単シナプス反射である。その理由を答えよ。',
          choices: [],
          answerImg: [stretchReflex],
          answer:
            '筋紡錘からの感覚線維の興奮をできるだけ素早くそのまま運動ニューロンへ伝える必要があるから？',
          commentary:
            '同時に拮抗筋を弛緩させる相反性抑制も発生するが、こちらは筋紡錘伸張による興奮信号を抑制信号へ変える必要があるため、必ず介在ニューロンが存在する。',
        },
        {
          detailInfo: '(13)',
          questionImg: [],
          questionSentence: 'T管（横行小管）の役割について、20-24字で説明せよ',
          choices: [],
          answerImg: [skeletalMuscle],
          answer: '膜の脱分極を骨格筋の深部まで速やかに伝達する。',
          commentary:
            'T細管は細胞膜とひとつづきの構造である。神経筋接合部からの脱分極を速やかに深部の筋小胞体などに伝える。',
        },
        {
          detailInfo: '(14)',
          questionImg: [],
          questionSentence: '筋小胞体の役割について、20-24字で説明せよ',
          choices: [],
          answerImg: [skeletalMuscle],
          answer: '脱分極に合わせて貯蔵Ca²⁺を細胞質に放出する。',
          commentary:
            '普段はATPaseによりCa²⁺を筋小胞体内に能動輸送する。骨格筋ではT細管DHP受容体の構造変化→筋小胞体リアノジン受容体からのCa²⁺放出、心筋ではT細管DHP受容体からのCa²⁺放出→筋小胞体リアノジン受容体からのCa²⁺放出(Ca²⁺-induced Ca²⁺ release)により収縮が開始する。',
        },
        {
          detailInfo: '(15)',
          questionImg: [],
          questionSentence: '興奮収縮連関について、文章で説明せよ',
          choices: [],
          answerImg: [excitationContractionCoupling],
          answer:
            '骨格筋の収縮は、筋細胞質の活動電位により引き起こされる。T細管を通じて活動電位が細胞内へ伝導され、triadで隣接する筋小胞体のCa²⁺放出チャネル（リアノジン受容体）を開き、筋小胞体から筋形質にCa²⁺が放出されることで、Ca²⁺がトロポニンに結合し収縮反応が引き起こされる。',
          commentary:
            'T細管、筋小胞体、トロポニンにCa²⁺が結合することによる収縮',
        },
        {
          detailInfo: '(12)(13)',
          questionImg: [exam20201],
          questionSentence:
            '(c)に入力する運動神経線維の名称を答えよ。また、この神経線維の役割を文章で説明せよ。',
          choices: [],
          answerImg: [motorNeuron],
          answer:
            'γ運動ニューロン...筋紡錘の両端の錘内筋線維を支配し、感度を調節している。',
          commentary: '',
        },
        {
          detailInfo: '(14)',
          questionImg: [],
          questionSentence:
            '筋紡錘に入力するγ運動ニューロンと、骨格筋を支配するα運動ニューロンとの、出力の関係をなんというか？',
          choices: [],
          answerImg: [alphaGammaLinkage],
          answer: 'α-γ連関',
          commentary:
            '骨格筋に合わせて筋紡錘の長さを変えることで、感度を一定範囲に保つ。',
        },

        {
          detailInfo: '(15)',
          questionImg: [exam20202],
          questionSentence:
            '図は誘発筋電図で、横軸は時間、縦軸は筋電位である。aの波をなんというか？',
          choices: [],
          answerImg: [electromyogram],
          answer: 'M波',
          commentary:
            '骨格筋を支配する神経を電気刺激すると、複合的な活動電位が誘発される（→誘発筋電図）。M波はα運動神経線維が刺激されたときにみられる早い波で、主に強い刺激を加えたときにみられる。',
        },
        {
          detailInfo: '(16)',
          questionImg: [exam20202],
          questionSentence: 'bの波をなんというか？',
          choices: [],
          answerImg: [electromyogram],
          answer: 'H波',
          commentary:
            '骨格筋を支配する神経を電気刺激すると、複合的な活動電位が誘発される（→誘発筋電図）。H波はⅠa群線維（筋紡錘→中枢）が刺激されたときにみられる遅い波で、主に弱い刺激を加えたときにみられる。',
        },
        {
          detailInfo: '(17)',
          questionImg: [exam20202],
          questionSentence: 'bの波が遅れて発生する理由を文章で説明せよ',
          choices: [],
          answerImg: [electromyogram],
          answer:
            'bの波(H波)はⅠa群線維→（脊髄前角）→α運動神経線維→筋肉の経路で伝わる活動電位で、aの波のα運動神経線維→筋肉の経路で伝わる波に比べて伝わる距離が長く、活動電位が遅れて伝わる。',
          commentary: '図は誘発筋電図。',
        },
        {
          detailInfo: '(18)',
          questionImg: [exam20202],
          questionSentence:
            '刺激強度を上げるとbの波が消失する理由について、以下の語句を用いて文章で説明せよ。　（語句）Ⅰa群線維・活動電位・運動線維・不応期',
          choices: [],
          answerImg: [electromyogram],
          answer:
            'bの波はⅠa群線維から運動線維を通り活動電位を伝える経路だが、刺激強度を挙げると運動線維自体が刺激されるようになり、その不応期にⅠa群線維からのbの波(H波)が到達すると消失してしまう。',
          commentary: '図は誘発筋電図。',
        },
        {
          detailInfo: '問題2(1)',
          questionImg: [exam20203],
          questionSentence:
            'マイスネル小体、ルフィニ終末、パチニ小体、メルケル細胞の受容野の広さ（広い or 狭い）、順応の早さ（早い or 遅い）、役割について、表の空欄を埋めよ。',
          choices: [],
          answerImg: [sensoryReceptors],
          answer:
            '（マイスネル小体）受容野狭い、順応早い、圧や低周波振動を感知する。（ルフィニ終末）受容野広い、順応遅い、皮膚の伸展変形を感知する。（パチニ小体）受容野広い、順応早い、深部圧・高周波振動を感知する。（メルケル細胞）受容野狭い、順応遅い、軽い接触を感知する。',
          commentary:
            '浅部にあるマイスネル小体RA1・メルケル細胞SA1は受容野が狭い1型、深部にあるパチニ小体RA2・ルフィニ小体SA2が受容野の広い2型。被膜で覆われたマイスネル小体とパチニ小体は圧・周波感知に優れ順応が早い。',
        },
        {
          detailInfo: '問題2(2)',
          questionImg: [],
          questionSentence: '皮膚分節（デルマトーム）とは何か、文章で説明せよ',
          choices: [],
          answerImg: [dermatome],
          answer: '一つの脊髄分節が感覚を伝える皮膚の領域のこと。',
          commentary: '',
        },
        {
          detailInfo: '問題2(3)',
          questionImg: [],
          questionSentence: '関連痛が生じる理由について、文章で説明せよ',
          choices: [],
          answerImg: [dermatome],
          answer:
            '皮膚デルマトームの領域由来の上方と内臓由来の情報が、同じニューロンに収束しており、脳に伝達される際に内臓ではなく皮膚からのものであると脳が誤認識してしまうことが原因。',
          commentary: '参考：関連痛',
        },
        {
          detailInfo: '問題2(4)',
          questionImg: [],
          questionSentence: '温度覚および痛覚の伝導路をなんというか？',
          choices: [],
          answerImg: [],
          answer: '外側脊髄視床路',
          commentary: '',
        },
        {
          detailInfo: '問題2(5)',
          questionImg: [],
          questionSentence:
            '二次痛の原因となる受容器の名称およびそこから出力される求心性線維の名称を答えよ',
          choices: [],
          answerImg: [nociception],
          answer: '受容器：ポリモーダル受容器、求心性線維：C線維（無髄）',
          commentary:
            '同じ侵害性刺激に対して別の侵害受容器が信号を伝達するのだが、有髄Aδ線維（→一次痛）と無髄C線維（→二次痛）で伝達速度が異なることが原因で痛みを複数感じることになる。',
        },
        {
          detailInfo: '問題2(6)',
          questionImg: [],
          questionSentence:
            '蝸牛の有毛細胞において、動毛が適方向に屈曲してから神経伝達物質が放出するまでの機序について、以下の書き出しに続く形で、文章で説明せよ。（解答）動毛が適方向に屈曲すると～、',
          choices: [],
          answerImg: [hairCell],
          answer:
            '動毛が適方向に屈曲すると機械受容器チャネルが開き、K⁺が細胞外の内リンパ液から細胞内へ流入し、脱分極が生じて、電位依存性Ca²⁺チャネルが開き、シナプス小胞から神経伝達物質が放出される。',
          commentary:
            '機械受容器はMETチャネル複合体とよばれる。内リンパ液はK⁺濃度が高い。',
        },
        {
          detailInfo: '問題2(7)',
          questionImg: [],
          questionSentence:
            '視細胞が暗所で脱分極する機序について、以下の語句を用いて文章で説明せよ。（語句）cGMP依存性チャネル、cGMP、グアニル酸シクラーゼ',
          choices: [],
          answerImg: [photoreception],
          answer:
            '光がない暗所では視物質ロドプシンが活性化されず、ホスホジエステラーゼが活性化されないので、グアニル酸シクラーゼによって合成されたcGMPが分解されず、cGMP依存性チャネルが開口しNa⁺やCa²⁺が流入し脱分極する。',
          commentary:
            'cGMP依存性チャネルは細胞内cGMP濃度の上昇によって開く、視細胞膜にあるイオンチャネルで、主にNa⁺とCa²⁺を通す。',
        },
        {
          detailInfo: '問題2(8)',
          questionImg: [],
          questionSentence:
            'ロドプシンが光刺激を受け取ってから視細胞が過分極応答するまでの機序について文章で説明せよ',
          choices: [],
          answerImg: [photoreception],
          answer:
            '光によりロドプシンがメタロドプシンⅡへと活性化され、メタロドプシンⅡがトランスデューシンのGDPをGTPに変えて活性化し、ホスホジエステラーゼが活性化されることで、cGMPが加水分解されるようになり、細胞内cGMP濃度が下がることでcGMP依存性チャネルが閉じ、Na⁺やCa²⁺が細胞内へ流入しなくなり、視細胞は過分極応答を示す。',
          commentary: '光が当たると過分極、当たらないと脱分極。',
        },
        {
          detailInfo: '問題2(9)',
          questionImg: [],
          questionSentence:
            'オン型双極細胞がグルタミン酸を受け取ってから過分極を生じるまでの機序について、文章で説明せよ',
          choices: [],
          answerImg: [mGluR6],
          answer:
            '視細胞からグルタミン酸放出が増加すると、mGlu6が活性化され、それによりG₀が活性化され、G₀がTRPM1チャネルを閉じる事で双極細胞は過分極する。',
          commentary:
            'オン型双極細胞は、光がオンの時に脱分極。視細胞は暗い場所で脱分極しグルタミン酸を放出する。mGluR6は代謝型グルタミン酸受容体。TRPチャネルは非選択的陽イオンチャネル。',
        },
        {
          detailInfo: '問題3(a)~(b)',
          questionImg: [],
          questionSentence:
            '記憶のうち、短期記憶は( a )とも呼ばれる。一方、長期記憶のうち陳述的記憶の中には、知識や意味といった事実に関する記憶である意味記憶や、場所や時間などの属性が付加した出来事に関する記憶である( b )記憶が存在する。空欄(a)(b)に入る適切な語句をかけ',
          choices: [],
          answerImg: [longMemory],
          answer: '(a)作業記憶/ワーキングメモリ　(b)エピソード記憶',
          commentary: '',
        },
        {
          detailInfo: '問題3(c)~(g)',
          questionImg: [],
          questionSentence:
            '非陳述的記憶の中には、条件刺激と無条件刺激を一定の時間間隔で対提示することにより成立する( c )や、動物の自発的反応により成立する( d )がある。また、非陳述的記憶にはこの他にも、同じ刺激の反復によって反応が減弱する( e )や、逆に増強する( f )が存在する。アメフラシのえら引っ込め反射を司る促通性介在ニューロンの神経伝達物質は( g )である。空欄(c)~(g)に入る適切な語句をかけ',
          choices: [],
          answerImg: [sensitization],
          answer:
            '(c)古典的条件づけ　(d)オペラント条件付け　(e)慣れ　(f)感作　(g)セロトニン',
          commentary: '',
        },
        {
          detailInfo: '問題3(h)~(p)',
          questionImg: [],
          questionSentence:
            'シナプス伝達の増強・減弱が長時間続く現象をそれぞれ、( h )・( i )という。これはシナプスの( j )と関わりが深い。(h)は、テタヌス刺激を加えることで( k )型受容体の( l )によるブロックが外れて( m )が細胞内に流入することで生じる。一方、小脳における(i)では、( n )と( o )をほぼ同時に活性化すると、(n)と( p )との間のシナプス伝達効率が一定期間低下する。空欄(h)~(p)に入る適切な語句をかけ',
          choices: [],
          answerImg: [LTP, LTD],
          answer:
            '(h)長期増強LTP　(i)長期抑圧LTD　(j)可塑性　(k)NMDA型受容体　(l)Mg²⁺　(m)Ca²⁺　(n)平行繊維　(o)登上線維　(p)プルキンエ細胞',
          commentary: '長期増強<->長期抑圧、シナプスの可塑性<->弾性',
        },
        {
          detailInfo: '問題4(1)',
          questionImg: [],
          questionSentence:
            '大脳基底核の直接系が働くと、ニューロン活動はどう変化するか',
          choices: [],
          answerImg: [basalGanglia],
          answer:
            '直接系（直接路）は視床の活動を抑制する基底核出力部を抑制する（二重抑制）ため、基底核出力部の活動は抑制され、視床や大脳皮質の活動は亢進する。',
          commentary: '大脳基底核は視床下核以外基本的に出力が抑制性。',
        },
        {
          detailInfo: '問題4(2)',
          questionImg: [],
          questionSentence:
            '大脳基底核の直接系が働くと、筋活動はどう変化するか',
          choices: [],
          answerImg: [basalGanglia],
          answer: '筋緊張低下、運動亢進、不随意運動（舞踏運動）など',
          commentary: '→ハンチントン病',
        },
        {
          detailInfo: '問題4(3)(4)',
          questionImg: [],
          questionSentence:
            '黒質緻密部における神経伝達物質を答えよ。また、この物質が不足することで起こる疾患を答えよ。',
          choices: [],
          answerImg: [basalGanglia],
          answer: 'ドーパミン、パーキンソン病',
          commentary: '治療時にはL-DOPAを使用',
        },

        {
          detailInfo: '問題4(5)',
          questionImg: [],
          questionSentence:
            '運動過多症のなかで、筋緊張の低下を伴う疾患は何か。',
          choices: [],
          answerImg: [basalGanglia],
          answer: 'ハンチントン病',
          commentary:
            '常染色体優性遺伝で、舞踏運動（顔面や四肢などに起こる速やかで不随意な異常運動）や痴呆などの精神症状を伴う。筋緊張が過度に低下している。線条体の異常により間接路（間接系）が機能しないのが原因。',
        },
        {
          detailInfo: '問題5(1)',
          questionImg: [exam20204],
          questionSentence:
            '図の横軸は試行回数、縦軸は誤差である。プリズム眼鏡を装着すると誤差が生じるが、試行回数を増やすと誤差が減少する。この現象をなんというか。',
          choices: [],
          answerImg: [prismAdaptation],
          answer: 'プリズム適応',
          commentary:
            '小脳の主要な機能のひとつ。外部や身体内部からの感覚入力に合わせて、運動の向きや大きさなどを調整していく',
        },
        {
          detailInfo: '問題5(2)',
          questionImg: [exam20204],
          questionSentence:
            'プリズム適応は、運動系の変化によって起こる。その根拠を文章で説明せよ',
          choices: [],
          answerImg: [motorLearning],
          answer:
            '右手はプリズム眼鏡装着後にプリズム適応の反動？で逆方向に誤差が生じているが、プリズム適応のなかった左手ではプリズム眼鏡装着後でも誤差が生じなかったから。',
          commentary:
            '運動の結果をフィードバックとして次の運動の制御に利用している（運動学習）',
        },
        {
          detailInfo: '問題5(3)',
          questionImg: [exam20204],
          questionSentence:
            'もし、プリズム適応が感覚系の変化によるものであるとすれば、結果はどうなると考えられるか。（図を用いても良いが、文章での説明は必須）',
          choices: [],
          answerImg: [],
          answer:
            'もし視覚情報を補正して適応しているのであれば、右手試行時のプリズム適応が左手で試行する場合にも補正されるため、プリズム適応装着後の左手での試行が右手と同じように逆方向に誤差が生じるようになる。',
          commentary: '',
        },
        {
          detailInfo: '問題6',
          questionImg: [],
          questionSentence:
            '(1)両側の扁桃体を破壊した時に生じる症状を5つ挙げ、(2)これらの症状をまとめた疾患名を答え、(3)症状から考えられる扁桃体の機能、および(4)その根拠となる扁桃体の機能の実証例について、それぞれ記述せよ。',
          choices: [],
          answerImg: [],
          answer:
            '(1)口唇傾向（手に取ったものを全て口に持って行ってしまう）・視覚失認症・性欲亢進・短期記憶障害・尿便失禁・食欲亢進・情動の欠如（温和化）・精神盲（視覚性失認）の中から5つ　(2)クリーヴァー・ビューシー症候群　(3)感覚刺激の価値評価（報酬性か嫌悪性）に関与している？　(4)猫に対して25秒間の扁桃体の電気刺激を行うと、唸り声を発し頭部を下げ、耳伏せ、瞳孔拡大、立毛が見られるようになり、35秒間の電気刺激後では情動性のより高い反応であるヒッシングを発する。',
          commentary: '',
        },
        {
          detailInfo: '問題7(a)~(g)',
          questionImg: [],
          questionSentence:
            '頭頂連合野は、空間情報「( a )」や、「( b )」を扱い、( c )に関与する。この領域の損傷により、( d )、( e )、( f )が生じる。特に、右側の頭頂連合野損傷により、空間左半分の( g )が起こる。空欄(a)~(g)に入る適切な語句をかけ',
          choices: [],
          answerImg: [associationArea],
          answer:
            '(a)どこに　(b)どこへ　(c)外界へのアクション　(d)視覚性運動失調　(e)失読や失書　(f)構成失行　(g)半側空間無視',
          commentary:
            '視覚性運動失調：視覚入力と運動出力を調和させることが困難（暗闇で自分の膝に触れるなど、視覚に依存しない課題は遂行できる）。構成失行：ものの各部分の空間内での位置関係を知覚できない（ものを認識することはできるが、上手く絵に描けない）。半側空間無視：損傷の対側の空間における事象に全く注意を払わない。その他、頭頂連合野には書字中枢（頭頂葉角回）があり、ここやその周辺皮質を損傷すると、失書（自発的に文字を書くことも書き取りもできない失書）・左右失認・手指失認・失算を伴うゲルストマン症候群を発症する。',
        },
        {
          detailInfo: '問題7(h)~(o)',
          questionImg: [],
          questionSentence:
            '側頭連合野は、上部で( h )覚認知を、下部で( i )覚認知、特に( j )「( k )」を扱う。病巣により感覚性( l )、( m )障害、(i)覚失認、( n )健忘、言語障害が生じる。言語野の一つである( o )野が存在する。空欄(h)~(o)に入る適切な語句をかけ',
          choices: [],
          answerImg: [associationArea],
          answer:
            '(h)聴覚　(i)視覚　(j)形態視覚　(k)なにが　(l)失音楽　(m)(環境音の)認知障害？　(n)前向性健忘　(o)ウェルニッケ',
          commentary:
            '側頭連合野は一次聴覚野を除いた側頭葉の領域である。海馬などにも近い。視覚物体失認の患者は、絵を模写できるが、それが何であるかをいえない。日本人では左側頭葉下部の破壊で漢字の失読失書を起こす。',
        },
        {
          detailInfo: '問題7(p)~(w)',
          questionImg: [],
          questionSentence:
            '前頭連合野は( p )計画の組み立て、その( q )の判断、視覚的目標への( r )運動の制御、( s )形成、( t )記憶に関与する。言語野の一つである( u )野がある。病巣に伴い(s)の変化、(p)のプログラミングの障害、( v )注意障害、運動性( w )、(t)記憶障害が起こる。空欄(p)~(w)に入る適切な語句をかけ',
          choices: [],
          answerImg: [associationArea],
          answer:
            '(p)行動　(q)実行　(r)眼球運動　(s)性格　(t)作業　(u)ブローカー　(v)視覚的注意　(w)失語',
          commentary:
            '前頭連合野は前頭葉で運動皮質よりも前の部分である。視覚的注意の障害：絵を見せてその中に描かれている内容を求めると、その一部が気になり、絵を分析的・系統的に見ることができない。ブローカー野は左半球の第三前頭回後方に位置し、運動性言語野とよばれる。→フィニアスゲージの症例',
        },
        {
          detailInfo: '問題8(1)(2)',
          questionImg: [],
          questionSentence:
            '哺乳類の概日時計システムに関して、内因性リズムの位相を環境に同調させる3要素と、それぞれについてそれを担う器官を答えよ。',
          choices: [],
          answerImg: [circadianClockControl],
          answer:
            '網膜の光受容器（入力系）、視交叉上核の時計発振系、松果体のリズム発現系（出力系/例えばメラトニン分泌）',
          commentary:
            'これら三要素が内因性リズムの位相を環境の明暗周期に同調させる。網膜では第三の光受容細胞であるメラノプシン発現網膜神経節細胞が輝度を感知し、視交叉上核では網膜からの光シグナルで中枢時計の光リセットが行われ、松果体では中枢時計の影響を受け夜間にメラトニンの合成・分泌が行われる。',
        },
        {
          detailInfo: '問題8(3)',
          questionImg: [],
          questionSentence:
            '哺乳類の概日時計システムに関して、内因性リズムの位相を環境に同調させる3要素の、各要素間の連絡について簡潔に説明せよ。',
          choices: [],
          answerImg: [circadianClockControl],
          answer:
            '網膜→視交叉上核はグルタミン酸などの興奮性アミノ酸（神経伝達物質）、視交叉上核→松果体は交感神経系ノルアドレナリン放出によって連絡が行われる。',
          commentary:
            '網膜-視床下部路と上顎神経節がそれぞれ連絡経路として活躍する。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(1)脳波の観点から述べよ。',
          choices: [],
          answerImg: [EEG],
          answer:
            'レム睡眠では低電位で不規則なθ波やPGO spikesが見られるが、ノンレム睡眠（徐波睡眠）では眠りに特徴的な紡錘突発波と徐波が見られる',
          commentary:
            'ノンレム睡眠では低周波大振幅の脳波、レム睡眠は高周波不規則の脳波。θ波（高周波不規則）は浅いノンレム睡眠とレム睡眠でみられ、レム睡眠では海馬の記憶再編成の過程で生じるといわれている。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(2)呼吸の観点から述べよ。',
          choices: [],
          answerImg: [sleepingData],
          answer: 'レム睡眠ではノンレム睡眠と比較して、呼吸数が10%~20%増加する',
          commentary:
            'レム睡眠中は首から下の筋肉は弛緩しているが、ストーリー性の夢を見ているため歯ぎしり・寝言・夜尿などを伴い急激な自律神経変化が起こる。呼吸数は増加する。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(3)脈拍の観点から述べよ。',
          choices: [],
          answerImg: [sleepingData],
          answer: 'レム睡眠はノンレム睡眠と比較して、脈拍数が10%程度増加する',
          commentary:
            'レム睡眠中は首から下の筋肉は弛緩しているが、ストーリー性の夢を見ているため歯ぎしり・寝言・夜尿などを伴い急激な自律神経変化が起こる。脈拍数は増加する。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(4)血圧の観点から述べよ。',
          choices: [],
          answerImg: [sleepingData],
          answer:
            'レム睡眠はノンレム睡眠と比較して、血圧が急激に変化するようになる(±10mmHg)',
          commentary:
            'レム睡眠中は首から下の筋肉は弛緩しているが、ストーリー性の夢を見ているため歯ぎしり・寝言・夜尿などを伴い急激な自律神経変化が起こる。血圧は前後のノンレム睡眠と比較して急激に上がるか、急激に下がる。',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(5)筋活動の観点から述べよ。',
          choices: [],
          answerImg: [],
          answer:
            'レム睡眠では首や胴部の筋肉の弛緩（筋緊張の消失）・急速眼球運動REMがみられる。ノンレム睡眠では睡眠が深いほど筋緊張の減少がみられるが、急速眼球運動はみられない。',
          commentary: '',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(1)目覚めの観点から述べよ。',
          choices: [],
          answerImg: [EEG],
          answer:
            'レム睡眠中に目覚めると気分が良く、はつらつとしているが、ノンレム睡眠中に目覚めるとぼおっとしていて、記憶喪失のような状態になる。',
          commentary:
            'レム睡眠中は覚醒状態・浅いノンレム睡眠でみられるθ波主体のため、目覚めが良い？',
        },
        {
          detailInfo: '問題9',
          questionImg: [],
          questionSentence:
            'レム睡眠とノンレム睡眠の違いについて、(7)夢の観点から述べよ。',
          choices: [],
          answerImg: [],
          answer:
            'レム睡眠中はストーリーをもった視覚的な夢中心であるのに対して、ノンレム睡眠中は瞬間的に映像・考え・空想などが現れることが多い。',
          commentary:
            'レム睡眠中は脳が覚醒に近い状態にあり記憶の再構成が行われている。ノンレム睡眠中は大脳皮質神経細胞が一斉に抑制されている（前障が一部を選択的に発火させる）',
        },

        {
          detailInfo: '問題10',
          questionImg: [],
          questionSentence:
            '本能行動に関わるホルモンについて、次のうちから5つ選び、それぞれの産生部位・受容部位および作用機序について文章で説明せよ。[アディポネクチン、アルファフェトタンパク質、エストラジオール、エポキシエイコサトリエン酸、オキシトシン、オレキシン、キスペプチン、グレリン、テストステロン、レプチン]',
          choices: [],
          answerImg: [],
          answer:
            'それぞれボタンを押すと確認できます→アディポネクチン、アルファフェトタンパク質、エストラジオール、エポキシエイコサトリエン酸、オキシトシン、オレキシン、キスペプチン、グレリン、テストステロン、レプチン',
          commentary:
            'オキシトシンはオレキシンと名前が似ているが効果が真逆（オキシトシンは摂食抑制/オレキシンは摂食促進）',
        },
        {
          detailInfo: '問題11',
          questionImg: [],
          questionSentence:
            '嗅覚と味覚の受容メカニズムの違いを文章で説明せよ。',
          choices: [],
          answerImg: [olfactory, taste],
          answer:
            '嗅覚ではにおい分子が結合したGPCR（Gs）によって、細胞内cAMPが増加し、cAMP依存型陽イオンチャネルが開口することで脱分極・細胞内Ca²⁺増加が起こり、Cl⁻チャネルが活性化することで活動電位が発生する。活動電位は篩板を抜け嗅球の糸球体で僧房細胞・房飾細胞などの二次ニューロンへ伝達される。一方味覚のうち旨味・甘味・苦味は味物質がGPCRに受容されるとPLCが活性化され、IP₃が産生され、IP₃が小胞体のIP₃受容体に結合しCa²⁺を放出させ、非選択的陽イオンチャネルが開口し、脱分極が起こる。活動電位によりセロトニンが伝達物質として味蕾のすぐ基底部で二次ニューロンへ伝達される。',
          commentary:
            '塩味・酸味はイオンチャネル型受容体→電位依存型Ca²⁺チャネルによってシナプス小胞内の神経伝達物質が開口分泌される。',
        },
        // {
        //   detailInfo: '問題7',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2016本試',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '骨格筋について間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '横紋筋である',
            '随意筋である',
            '多核である',
            '運動ニューロンが支配している',
            'サルコメアがある',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '筋線維について間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            'I帯は屈折率低い',
            'A帯には太いフィラメントがある',
            '太いフィラメントはミオシンである',
            '細いフィラメントはアクチンである',
            '筋線維が集まって筋原線維になる',
          ],
          answerImg: [sarcomere],
          answer: '筋線維が集まって筋原線維になる',
          commentary:
            '筋原線維が集まって筋線維（複数の筋原線維 + T細管 + 筋小胞体）になる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '反射の特徴について間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '意識しなくても起こる',
            '同じパターンの反応が起こる',
            '感覚刺激の発生が必要',
            '刺激があれば必ずおこる',
            '脊椎動物でもおこる',
          ],
          answerImg: [],
          answer: '感覚刺激の発生が必要？',
          commentary: '根拠不明',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '脳幹の働きとして間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '頭部顔面の運動パターン',
            '頚反射',
            '歩行',
            '姿勢',
            '眼球運動',
          ],
          answerImg: [],
          answer: 'すべて正しい',
          commentary:
            '頭部に関わる反射は脳幹を経由する。また、姿勢の調節には前庭器入力が必要。歩行運動の基本的なリズムとパターンを作る神経回路は脊髄内に存在するが、歩行神経回路を駆動する領域は脳幹に存在する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '瞳孔対光反射に直接関係ないものを全て選べ（全て関係ある場合もある）',
          choices: ['網膜', '毛様体', '視蓋前域', '動眼神経核', 'EW核'],
          answerImg: [lightReflex],
          answer: '動眼神経核',
          commentary: '動眼神経副核：Edinger-Westphal核',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'ウェルニッケ失語の患者で良好なものを全て選べ（全て良好でない場合もある）',
          choices: ['呼称', '復唱', '理解', '自発発話', '読字'],
          answerImg: [aphasia],
          answer: '自発発話',
          commentary:
            'ウェルニッケ野は感覚性言語野とも呼ばれ、視覚や聴覚からの言語情報を理解できない。多弁で流暢に話すが、その内容が意味のないものになる。呼称や復唱も傷害される。ちなみにウェルニッケ脳症とはビタミンB₁不足による乳頭体の異常で、ウェルニッケ野とは無関係。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '味覚に関して間違っているものを全て選べ（全て正しい場合もある）',
          choices: [
            '甘味は代謝型受容体である',
            '苦味は代謝型受容体である',
            '酸味はイオンチャネル型受容体である',
            '塩味は代謝型受容体である',
            '旨味は代謝型受容体である',
          ],
          answerImg: [taste],
          answer: '塩味は代謝型受容体である',
          commentary: '塩味はイオンチャネル型受容体である',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '視床下部腹内側核が損傷したとき起こるものを全て選べ（全て起こらない場合もある）',
          choices: ['尿崩症', '無食', '過食', '性欲亢進', '体温上昇'],
          answerImg: [],
          answer: '過食',
          commentary:
            '視床下部腹内側VMHは満腹中枢とも呼ばれ、グルコース受容ニューロンがグルコースに反応して摂食抑制を行う。また、雌の性行動を亢進する。尿崩症の原因となるバソプレシンは視床下部室傍核・視索上核から分泌される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '次のうち潜在記憶でないものを全て選べ（全て正しい場合もある）',
          choices: [
            '意味記憶',
            '手続き記憶',
            'プライミング',
            'オペラント条件付け',
            '感作',
          ],
          answerImg: [longMemory],
          answer: '意味記憶',
          commentary: '陳述できる記憶は非潜在記憶',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '痛覚を伝える早い線維を全て選べ（全て正しい場合もある）',
          choices: ['Aα', 'Aβ', 'Aδ', 'B', 'C'],
          answerImg: [sensoryReceptors],
          answer: 'Aδ',
          commentary: 'Aは有髄線維、Cは無髄線維。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'Kluver-Bucy症候群の症状として不適なものを全て選べ（全て正しい場合もある）',
          choices: ['口唇傾向', '性欲亢進', '情動性反応', '温和になる'],
          answerImg: [],
          answer: '情動性反応',
          commentary:
            'クリーヴァー・ビューシー症候群は扁桃体が破壊されることによる疾患で、口唇傾向（手に取ったものを全て口に持って行ってしまう）・視覚失認症・短期記憶障害・尿便失禁・食欲亢進・情動の欠如（温和化）・精神盲（視覚性失認）・性欲亢進を伴う。',
        },
        {
          detailInfo: '問題2(1)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(1)運動ニューロンで生じる活動電位の生成機構について説明せよ。',
          answerImg: [actionPotential],
          answer:
            '電位依存性のNa⁺チャネルが開いてNa⁺が流入し、周囲の更なるNa⁺チャネルの活性化が引き起こされ、これによりさらに細胞膜の脱分極が進む。こうした機構ではNa⁺チャネルが連鎖的に活性化し、膜電位は一気にそのピークへ向かい、活動電位が発生する。一度活性化したNa⁺チャネルはすぐ不活性化されるので、Na⁺の流入はその後止まり、代わって電位依存性のK⁺チャネルが開き、外向きにK⁺が流れることで細胞膜は再分極し、内向き整流性K⁺チャネルの働きにより静止電位となって安定する。',
          commentary:
            'Na⁺やCa²⁺チャネルが主に脱分極方向へ、K⁺チャネルなどが再分極へ寄与する。',
        },
        {
          detailInfo: '問題2(2)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(2)活動電位の軸索伝導には、（有髄・無髄に関わらず）3つの様式がある。3つとも答えよ。',
          answerImg: [conduction],
          answer: '不減衰伝導・両方向伝導・絶縁伝導',
          commentary:
            '一度発生した活動電位は途中で消滅することはない（不減衰伝導）。活動電位は細胞膜を両方向に伝わりうる（両方向性伝導）。活動電位が隣接する神経線維間で乗り移ることはない（絶縁伝導）有髄線維では跳躍伝導も見られる。',
        },
        {
          detailInfo: '問題2(3)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(3)有髄線維における興奮伝導に跳躍伝導がある。跳躍伝導がどのような伝導か説明せよ',
          answerImg: [conduction],
          answer:
            '髄鞘（ミエリン）が絶縁体となるため、局所電流がランビエ絞輪間で流れることになる。このため局所電流による活動電位の発生も、ランビエ絞輪の部分で飛び飛びに起こることになり、無髄線維に比べて早く活動電位が伝えられる。',
          commentary: '',
        },
        {
          detailInfo: '問題2(4)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(4)神経筋接合部では終板電位が生じるメカニズムを以下の文に続けて説明せよ。（解答）活動電位が軸索終末まで到達すると、...',
          answerImg: [NMJ],
          answer:
            '活動電位が軸索終末まで到達すると、軸索終末のCa²⁺チャネルが開き、Ca²⁺が流入することで、シナプス小胞が細胞膜に結合しアセチルコリンが放出され、運動終板にあるニコチン型アセチルコリン受容体に結合すると、Na⁺チャネルが開き、脱分極が生じる。',
          commentary: '',
        },
        {
          detailInfo: '問題2(5)',
          questionImg: [],
          questionSentence:
            '運動ニューロンが興奮するとその興奮は軸索を伝わり軸索終末まで到達する。すると、神経筋接合部では終板電位を生じ、筋線維が閾値に達すると筋線維が興奮して、その結果筋線維は収縮する。(5)筋収縮が生じるメカニズムを以下の文に続けて説明せよ。（解答）筋線維が興奮すると、...',
          answerImg: [skeletalMuscle, excitationContractionCoupling],
          answer:
            'T管を通して、活動電位が細胞内に伝導する。triadで隣接する筋小胞体で、DHP受容体の構造変化によってCa²⁺放出チャネル（リアノジン受容体）が開き、Ca²⁺が細胞内に放出される。Ca²⁺がトロポニンに結合し、ATPを分解しながらアクチンがミオシンに滑り込むことによって、クロスブリッジがスライドし、筋収縮が生じる。',
          commentary: '',
        },
        {
          detailInfo: '問題2(6)(a)~(f)',
          questionImg: [],
          questionSentence:
            '次の文の空欄を埋めよ：筋収縮には、一回の活動電位に従って発生する( a )、適当な間隔で2個の刺激によって大きな収縮が生じる( b )、非伝導性の収縮で様々の化学物質、薬物や低温度などによっておこる可逆的な収縮( c )、不可逆的な持続収縮で筋のタンパク質が変性し筋実質が短縮状態になった( d )がある。(c)と(d)の代表的なものとしてそれぞれ(e)(f)がある。',
          answerImg: [tetanus],
          answer:
            'a.単収縮　b.加重　c.拘縮　d.硬直　e.カフェイン拘縮　f.死硬直',
          commentary: '',
        },
        {
          detailInfo: '問題2(6)(g)~(o)',
          questionImg: [],
          questionSentence:
            '次の文の空欄を埋めよ：筋長を変化させずに収縮することを( g )収縮といい、筋力を一定に保って収縮させることを( h )収縮という。運動ニューロンとそれが支配する筋線維群をまとめて( i )と呼ばれている。(i)を大別するとS型とF型に分けられる。S型では運動ニューロンの伝達速度が( j )、発生する筋力が( k )が、繰り返し収縮することに対し( l )。一方、F型（特にFF型）では運動ニューロンの伝達速度が( m )、発生する筋力が( n )、繰り返し収縮することに対して( o )',
          answerImg: [typeOfMuscle],
          answer:
            'g.等尺性　h.等張性　i.運動単位　j.遅く　k.弱い　l.強い　m.早く　n.強い　o.弱い',
          commentary:
            'S型はⅠ型(type 1)とも呼ばれ、遅筋に分類される。F型はⅡ型(type 2)とも呼ばれ、速筋に分類される。',
        },

        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     'について間違っているものを全て選べ（全て正しい場合もある）',
        //   choices: ["","","","",""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
