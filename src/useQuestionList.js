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

// import from './img/answer/.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
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
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   choices: [],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
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
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
