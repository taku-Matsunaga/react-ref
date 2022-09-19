import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { useState } from 'react'
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('')

  const toast = useToast()

  const addTodo = (e) => {
    e.preventDefault()

    if (!enteredTodo) {
      toast({
        title: '新しいタスクを入力してください',
        status: 'error',
        duration: 2000,
        isClosable: true
      })
      return
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo
    }

    createTodo(newTodo)

    setEnteredTodo('')
  }
  return (
    <form onSubmit={addTodo}>
      <HStack>
        <Input
          placeholder="新しいタスク"
          _placeholder={{ opacity: '0.3', color: 'gray.500' }}
          size="lg"
          variant="flushed"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          bgColor="white"
          p={3}
        />
        <Button colorScheme="blue" size="md" variant="outline" px={7} type="submit" bgColor="white">
          追加
        </Button>
      </HStack>
    </form>
  )
}

export default Form
