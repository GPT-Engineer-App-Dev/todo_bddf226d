import { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, IconButton, useToast } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (input === "") {
      toast({
        title: "No input",
        description: "Please enter a todo item.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Todo App
        </Text>
        <HStack>
          <Input placeholder="Add a new todo" value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" />
        </HStack>
        <VStack spacing={2}>
          {todos.map((todo, index) => (
            <HStack key={index} w="full" justify="space-between">
              <Text>{todo}</Text>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
