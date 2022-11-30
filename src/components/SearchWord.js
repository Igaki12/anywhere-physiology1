import {
  Input,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
  Text,
  Tooltip,
  InputLeftElement,
  InputGroup,
  Wrap,
  WrapItem,
  Spacer,
  Box,
  Button,
  Divider,
  Modal,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Badge,
} from '@chakra-ui/react'
import { ArrowDownIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils'

export const SearchWord = ({
  toast,
  // addWordFilter,
  // deleteWordFilter,
  // showSettingDetail,
  questionList,
  // checkSelection,
  technicalTerm,
}) => {
  const [renderSign, setRenderSign] = useState()
  const [inputValue, setInputValue] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [predictionNum, setPredictionNum] = useState(0)
  // const settingDetail = showSettingDetail();
  const initialRef = useRef(null)
  // const addWordFilterTag = () => {
  //   if (
  //     inputEl.current &&
  //     inputEl.current.value &&
  //     inputEl.current.value.length > 0 &&
  //     questionList.reduce((prevGroup, group) => {
  //       return (
  //         prevGroup +
  //         group.groupContents.reduce((prev, question) => {
  //           if (
  //             question.detailInfo &&
  //             question.detailInfo.indexOf(inputEl.current.value) > -1
  //           )
  //             return prev + 1;
  //           else if (
  //             question.questionSentence &&
  //             question.questionSentence.indexOf(inputEl.current.value) > -1
  //           )
  //             return prev + 1;
  //           else if (
  //             question.answer &&
  //             question.answer.indexOf(inputEl.current.value) > -1
  //           )
  //             return prev + 1;
  //           else if (
  //             question.commentary &&
  //             question.commentary.indexOf(inputEl.current.value) > -1
  //           )
  //             return prev + 1;
  //           else if (
  //             question.choices &&
  //             question.choices.every(
  //               choice => choice.indexOf(inputEl.current.value) === -1
  //             ) === false
  //           )
  //             return prev + 1;
  //           else {
  //             return prev;
  //           }
  //         }, 0)
  //       );
  //     }, 0) > 0
  //   ) {
  //     addWordFilter(inputEl.current.value);
  //     toast({
  //       title: `絞り込みキーワード【${inputEl.current.value}】が追加されました`,
  //       description: `場所:${questionList.reduce((prevGroup, group) => {
  //         return (
  //           prevGroup +
  //           group.groupContents.reduce((prev, question) => {
  //             if (prev && prev.indexOf(group.groupTag) > -1) {
  //               return prev;
  //             }
  //             if (
  //               question.detailInfo &&
  //               question.detailInfo.indexOf(inputEl.current.value) > -1
  //             )
  //               return prev + '　' + group.groupTag;
  //             else if (
  //               question.questionSentence &&
  //               question.questionSentence.indexOf(inputEl.current.value) > -1
  //             )
  //               return prev + '　' + group.groupTag;
  //             else if (
  //               question.answer &&
  //               question.answer.indexOf(inputEl.current.value) > -1
  //             )
  //               return prev + '　' + group.groupTag;
  //             else if (
  //               question.commentary &&
  //               question.commentary.indexOf(inputEl.current.value) > -1
  //             )
  //               return prev + '　' + group.groupTag;
  //             else if (
  //               question.choices &&
  //               question.choices.every(
  //                 choice => choice.indexOf(inputEl.current.value) === -1
  //               ) === false
  //             )
  //               return prev + '　' + group.groupTag;
  //             else {
  //               return prev;
  //             }
  //           }, '')
  //         );
  //       }, '')}`,
  //       status: 'success',
  //       position: 'top-right',
  //       duration: 15000,
  //       isClosable: true,
  //     });
  //     inputEl.current.value = '';
  //   } else if (
  //     inputEl.current &&
  //     inputEl.current.value &&
  //     inputEl.current.value.length > 0
  //   ) {
  //     toast({
  //       position: 'top-right',
  //       title: '問題が見つかりません',
  //       description: `キーワード【${inputEl.current.value}】に一致する問題が見つかりませんでした。ヒント：全角/半角の区別、大文字/小文字の区別、漢字/ひらがな　など`,
  //       status: 'error',
  //       duration: 12000,
  //       isClosable: true,
  //     });
  //   } else {
  //     return;
  //   }
  // };
  return (
    <>
      {/* {inputEl.current &&
      inputEl.current.value &&
      inputEl.current.value.length > 0 ? (
        <Flex
          fontSize="lg"
          pl="4"
          pr="4"
          pt="1"
          pb="1"
          maxW={'sm'}
          textAlign={'center'}
          mt="4"
          mb="2"
          mr={'auto'}
          // color={'white'}
          bgColor={'teal.50'}
          // border="2px solid teal"
          borderRadius="full"
        >
          <SearchIcon mr={2} mt="1" />
          {inputEl.current.value}
          <Spacer />
          <Text fontWeight={'bold'} color={'gray.800'}>
            {questionList.reduce((prevGroup, group) => {
              return (
                prevGroup +
                group.groupContents.reduce((prev, question) => {
                  if (
                    question.detailInfo &&
                    question.detailInfo.indexOf(inputEl.current.value) > -1
                  )
                    return prev + 1;
                  else if (
                    question.questionSentence &&
                    question.questionSentence.indexOf(inputEl.current.value) >
                      -1
                  )
                    return prev + 1;
                  else if (
                    question.answer &&
                    question.answer.indexOf(inputEl.current.value) > -1
                  )
                    return prev + 1;
                  else if (
                    question.commentary &&
                    question.commentary.indexOf(inputEl.current.value) > -1
                  )
                    return prev + 1;
                  else if (
                    question.choices &&
                    question.choices.every(
                      choice => choice.indexOf(inputEl.current.value) === -1
                    ) === false
                  )
                    return prev + 1;
                  else {
                    return prev;
                  }
                }, 0)
              );
            }, 0)}
            {' hits'}
          </Text>
        </Flex>
      ) : (
        <></>
      )}

      <InputGroup pl="1" pr={1}>
        <InputLeftElement
          pointerEvents="none"
          focusBorderColor="pink.400"
          children={<SearchIcon color="gray.300" ml={2} />}
        />
        <Input
          type="text"
          placeholder="キーワードを設定しさらに絞り込む"
          ref={inputEl}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              console.log('Enter Key down');
              addWordFilterTag();
              setPredictionText();
              checkSelection();
            }
          }}
          onChange={() => {
            setPredictionText(inputEl.current.value);
          }}
          onBlur={() => {
            addWordFilterTag();
            setPredictionText();
            checkSelection();
          }}
        />
      </InputGroup>

      <Wrap spacing={1} m="3" mt={2}>
        {settingDetail.wordFilter.map((word, index) => (
          <WrapItem>
            <Tag
              size={'lg'}
              key={index + 'searchTag'}
              borderRadius="full"
              variant="solid"
              colorScheme="teal"
            >
              <TagLabel key={index + 'searchTagLabel'}>
                {word}
                {' ('}
                {questionList.reduce((prevGroup, group) => {
                  return (
                    prevGroup +
                    group.groupContents.reduce((prev, question) => {
                      if (
                        question.detailInfo &&
                        question.detailInfo.indexOf(word) > -1
                      )
                        return prev + 1;
                      else if (
                        question.questionSentence &&
                        question.questionSentence.indexOf(word) > -1
                      )
                        return prev + 1;
                      else if (
                        question.answer &&
                        question.answer.indexOf(word) > -1
                      )
                        return prev + 1;
                      else if (
                        question.commentary &&
                        question.commentary.indexOf(word) > -1
                      )
                        return prev + 1;
                      else if (
                        question.choices &&
                        question.choices.every(
                          choice => choice.indexOf(word) === -1
                        ) === false
                      )
                        return prev + 1;
                      else {
                        return prev;
                      }
                    }, 0)
                  );
                }, 0)}
                {')'}
              </TagLabel>
              <TagCloseButton
                key={index + 'searchTagCloseBtn'}
                onClick={() => {
                  deleteWordFilter(index);
                  toast({
                    title: `【${word}】タグが消去されました`,
                    status: 'success',
                    position: 'top-right',
                    duration: 9000,
                    isClosable: true,
                  });
                  setPredictionText(`TAG: ${word} was deleted.`);
                  checkSelection();
                  // saveSetting(settingDetail)
                }}
              />
            </Tag>
          </WrapItem>
        ))}
      </Wrap> */}
      {technicalTerm && technicalTerm.length > 0 ? (
        <Box
          minW={'sm'}
          maxW="sm"
          p="1"
          bgColor={'whiteAlpha.800'}
          pt="20px"
          pb={8}
        >
          <Box
            w={'100%'}
            mr="auto"
            ml="auto"
            borderRadius="sm"
            bgColor="gray.600"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            textAlign="center"
            mt="2"
            mb={2}
            pt="1"
          >
            頻出キーワードを確認　
            <ChevronDownIcon boxSize="1.5em" />
          </Box>
          <Wrap justify={'center'} pt="2" pb="2">
            {technicalTerm
              .reduce((prevTermBox, curTermBox) => {
                let newTag = {
                  term: curTermBox.term[0],
                  terms: curTermBox.term,
                  explanation: curTermBox.explanation,
                  isOpen: false,
                  count: questionList.reduce((prevGroup, group) => {
                    return (
                      prevGroup +
                      group.groupContents.reduce((prevQuestion, question) => {
                        return (
                          prevQuestion +
                          curTermBox.term.reduce((prevTerm, curTerm) => {
                            if (prevTerm > 0) {
                              return 1
                            } else {
                              if (
                                question.detailInfo &&
                                question.detailInfo.indexOf(curTerm) > -1
                              )
                                return 1
                              else if (
                                question.questionSentence &&
                                question.questionSentence.indexOf(curTerm) > -1
                              )
                                return 1
                              else if (
                                question.answer &&
                                question.answer.indexOf(curTerm) > -1
                              )
                                return 1
                              else if (
                                question.commentary &&
                                question.commentary.indexOf(curTerm) > -1
                              )
                                return 1
                              else if (
                                question.choices &&
                                question.choices.every(
                                  (choice) => choice.indexOf(curTerm) === -1,
                                ) === false
                              )
                                return 1
                              else {
                                return 0
                              }
                            }
                          }, 0)
                        )
                      }, 0)
                    )
                  }, 0),
                }
                let newTagArray = [...prevTermBox, newTag].sort(
                  (a, b) => b.count - a.count,
                )
                if (newTagArray.length > 15) {
                  return newTagArray.splice(0, 15)
                } else {
                  return newTagArray
                }
              }, [])
              .map((tag, tagIndex) => {
                return (
                  <WrapItem>
                    <Button
                      size={'md'}
                      key={tagIndex + 'searchTag2'}
                      borderRadius="full"
                      variant="outline"
                      colorScheme={'blue'}
                      onClick={() => {
                        toast({
                          title: `${tag.terms.join(' / ')}`,
                          description: `${tag.explanation}`,
                          status: 'info',
                          variant: 'left-accent',
                          duration: 30000,
                          isClosable: true,
                          position: 'top-right',
                        })
                      }}
                    >
                      {tag.term}
                      {' ('}
                      {tag.count}
                      {')'}
                    </Button>
                  </WrapItem>
                )
              })}
            {technicalTerm && technicalTerm.length > 15 ? (
              <WrapItem p={2}>...</WrapItem>
            ) : (
              <></>
            )}
          </Wrap>
          <Divider mt={'50px'} />
          <Button
            borderRadius={'full'}
            variant="solid"
            mt="3"
            mr="5%"
            ml="5%"
            w="90%"
            colorScheme="blue"
            onClick={onOpen}
          >
            <SearchIcon boxSize={'1.2em'} mr="1" ml="1" />
            他の単語について検索
          </Button>
          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>検索</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Input
                  ref={initialRef}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="keyword to search for..."
                  w="xs"
                  position={'fixed'}
                  bgColor="white"
                />

                <Box mt="50px">
                  {technicalTerm
                    .reduce((prevGroup, curGroup, groupIndex) => {
                      if (
                        inputValue &&
                        inputValue !== '' &&
                        (curGroup.term.find(
                          (term) =>
                            term.match(new RegExp(inputValue, 'i')) !== null,
                        ) ||
                          curGroup.explanation.match(
                            new RegExp(inputValue, 'i'),
                          ) !== null)
                      ) {
                        console.log(inputValue, prevGroup)
                        if (prevGroup && prevGroup.length < 10) {
                          return [
                            ...prevGroup,
                            {
                              term: curGroup.term,
                              explanation: curGroup.explanation,
                              isOpen: false,
                              count: questionList.reduce((prevGroup, group) => {
                                return (
                                  prevGroup +
                                  group.groupContents.reduce(
                                    (prevQuestion, question) => {
                                      return (
                                        prevQuestion +
                                        curGroup.term.reduce(
                                          (prevTerm, curTerm) => {
                                            if (prevTerm > 0) {
                                              return 1
                                            } else {
                                              if (
                                                question.detailInfo &&
                                                question.detailInfo.indexOf(
                                                  curTerm,
                                                ) > -1
                                              )
                                                return 1
                                              else if (
                                                question.questionSentence &&
                                                question.questionSentence.indexOf(
                                                  curTerm,
                                                ) > -1
                                              )
                                                return 1
                                              else if (
                                                question.answer &&
                                                question.answer.indexOf(
                                                  curTerm,
                                                ) > -1
                                              )
                                                return 1
                                              else if (
                                                question.commentary &&
                                                question.commentary.indexOf(
                                                  curTerm,
                                                ) > -1
                                              )
                                                return 1
                                              else if (
                                                question.choices &&
                                                question.choices.every(
                                                  (choice) =>
                                                    choice.indexOf(curTerm) ===
                                                    -1,
                                                ) === false
                                              )
                                                return 1
                                              else {
                                                return 0
                                              }
                                            }
                                          },
                                          0,
                                        )
                                      )
                                    },
                                    0,
                                  )
                                )
                              }, 0),
                            },
                          ]
                        }
                      }
                      return prevGroup
                    }, [])
                    .sort((a, b) => b.count - a.count)
                    .map((termGroup, termIndex) => (
                      <Button
                        key={termIndex}
                        colorScheme="blue"
                        variant="outline"
                        borderRadius="full"
                        m={'1'}
                        maxW="100%"
                        onClick={() => {
                          toast({
                            title: `${termGroup.term.join(' / ')}`,
                            description: `${termGroup.explanation}`,
                            status: 'info',
                            variant: 'left-accent',
                            duration: 30000,
                            isClosable: true,
                            position: 'top-right',
                          })
                        }}
                      >
                        {termGroup.term[0].length > 15
                          ? termGroup.term[0].slice(0, 15) + '...'
                          : termGroup.term[0]}
                      </Button>
                    ))}
                  {technicalTerm.reduce((prevTermBox, curTermBox, index) => {
                    if (
                      inputValue &&
                      inputValue !== '' &&
                      (curTermBox.term.find(
                        (term) =>
                          term.match(new RegExp(inputValue, 'i')) !== null,
                      ) ||
                        curTermBox.explanation.match(
                          new RegExp(inputValue, 'i'),
                        ) !== null)
                    ) {
                      return [...prevTermBox, curTermBox.term[0]]
                    }
                    return prevTermBox
                  }, []).length > 10
                    ? '　...'
                    : ''}
                  <Divider mt="50px" />
                  {questionList.map((group, groupIndex) => {
                    let resultList = group.groupContents.reduce(
                      (prevQuestion, curQuestion, questionIndex) => {
                        if (!inputValue) {
                          return []
                        }
                        if (
                          curQuestion.detailInfo &&
                          curQuestion.detailInfo.match(
                            new RegExp(inputValue, 'i'),
                          ) !== null
                        ) {
                          return [...prevQuestion, curQuestion]
                        } else if (
                          curQuestion.questionSentence &&
                          curQuestion.questionSentence.match(
                            new RegExp(inputValue, 'i'),
                          ) !== null
                        ) {
                          return [...prevQuestion, curQuestion]
                        } else if (
                          curQuestion.answer &&
                          curQuestion.answer.match(
                            new RegExp(inputValue, 'i'),
                          ) !== null
                        ) {
                          return [...prevQuestion, curQuestion]
                        } else if (
                          curQuestion.commentary &&
                          curQuestion.commentary.match(
                            new RegExp(inputValue, 'i'),
                          ) !== null
                        ) {
                          return [...prevQuestion, curQuestion]
                        } else if (
                          curQuestion.choices &&
                          curQuestion.choices.find(
                            (choice) =>
                              choice.match(new RegExp(inputValue, 'i')) !==
                              null,
                          )
                        ) {
                          return [...prevQuestion, curQuestion]
                        }
                        return prevQuestion
                      },
                      [],
                    )
                    return (
                      <>
                        <Flex m={1} mt="3">
                          <Badge
                            colorScheme="blue"
                            size="sm"
                            variant="solid"
                            borderRadius="full"
                            pr="2"
                            pl="2"
                            mr="2"
                          >
                            {group.groupTag}
                          </Badge>
                          <Text fontSize={'xs'}> {resultList.length} Hits</Text>
                        </Flex>
                        {resultList.map((question, questionIndex) => {
                          if (questionIndex > 5) {
                            return <></>
                          }
                          if (questionIndex === 5) {
                            return <Text>...</Text>
                          }
                          return (
                            <Box bgColor="gray.100" fontSize="xs" mb="1" p={1}>
                              {question.questionSentence}
                            </Box>
                          )
                        })}
                      </>
                    )
                  })}
                </Box>
              </ModalBody>

              <ModalFooter mt="10" mb="200px">
                <Button colorScheme="blue" mr={3}>
                  <ArrowDownIcon fontSize="1.2em" mr="0.5" ml="-1" />
                  問題を解く
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <></>
      )}
    </>
  )
}
