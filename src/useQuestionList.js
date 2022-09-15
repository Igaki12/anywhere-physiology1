import { useState } from 'react'

import exam20201 from './img/question/exam20201.png'
import motorNeuron from './img/answer/motorNeuron.png'
// import from './img/answer/.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2020本試',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '一次運動野において、特に大きなものをベッツ細胞と呼ぶこともある出力細胞の名称を答えよ。',
          choices: [],
          answerImg: [],
          answer: 'てすと',
          commentary: 'てすと',
        },
        {
          detailInfo: '',
          questionImg: [exam20201],
          questionSentence:
            '図で、ガラス電極を挿入して逆行性軸索輸送の速度を計測したところ、伝達物質が大脳皮質に到達するまでに延髄錐体で1.2ミリ秒、大脳脚で2.2ミリ秒かかった。延髄錐体と大脳脚の距離が12mmであるとき、この間のニューロンの伝達速度を求めよ。また、このニューロンはfast型かslow型か、根拠とともに答えよ（記述）',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '骨格筋（錘外筋）に繋がっている運動神経線維の名称を答えよ。',
          choices: [],
          answerImg: [motorNeuron],
          answer: 'α運動ニューロン',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [exam20201],
          questionSentence: '(a)で用いられる神経伝達物質は何か。',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [exam20201],
          questionSentence:
            '図で、筋細胞の膜電位が-70mVのとき、シナプス電流はどちら向きに流れるか、根拠とともに答えよ。（記述）',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [exam20201],
          questionSentence: '(b)で用いられる神経伝達物質は何か。',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '骨格筋が脱分極し、再び静止電位に戻るまでの機序を答えよ。（記述）',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [exam20201],
          questionSentence:
            '(a)と(b)の神経物質は異なる方法でシナプス間隙から除去される。その方法をそれぞれ文章で説明せよ。',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [exam20201],
          questionSentence:
            '(c)の器官の名称および役割について、文章で説明せよ。',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: [],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: [],
          answerImg: [],
          answer: '',
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
