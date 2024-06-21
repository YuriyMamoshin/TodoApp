import { StyledHeader, StyledHeaderInput, StyledHeaderButton } from "src/components/Header/styled";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PATH from "src/PATH";

export default function Header() {
  const [inputState, setInputState] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newTodo) =>
      fetch(PATH, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  function handleInput(inputData) {
    setInputState(inputData);
  }

  function createTodo() {
    return {
      id: new Date().getTime(),
      value: inputState,
      isCompleted: false,
    };
  }

  function handleAdd() {
    mutate(createTodo());
    setInputState("");
  }

  return (
    <StyledHeader>
      <StyledHeaderInput
        type="text"
        value={inputState}
        onChange={(event) => handleInput(event.target.value)}
        placeholder="Type here to add a task..."
      />
      <StyledHeaderButton onClick={handleAdd}>
        <img src="src/assets/icons/plus.svg" /> Add
      </StyledHeaderButton>
    </StyledHeader>
  );
}
