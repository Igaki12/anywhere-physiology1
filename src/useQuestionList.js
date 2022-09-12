import { useState } from 'react'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2021',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'てすと',
          choices: [],
          answerImg: [],
          answer: 'てすと',
          commentary: 'てすと',
        },
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
