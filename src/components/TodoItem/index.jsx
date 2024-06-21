import { StyledTodoItem, StyledTodoInput } from "src/components/TodoItem/styled";
import Checkbox from "src/components/Checkbox";
import ControlButton from "src/components/ControlButton";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PATH from "src/PATH";

export default function TodoItem({ itemData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(itemData.value);

  const queryClient = useQueryClient();

  const putTodo = useMutation({
    mutationFn: (prevTodo) =>
      fetch(`${PATH}/${itemData.id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...prevTodo,
          value: editedText,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodo = useMutation({
    mutationFn: () =>
      fetch(`${PATH}/${itemData.id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleFinishEditing() {
    putTodo.mutate(itemData);
    setIsEditing(false);
  }

  return (
    <StyledTodoItem>
      <Checkbox itemData={itemData} disabled={isEditing} />
      <StyledTodoInput
        type="text"
        disabled={!isEditing}
        value={editedText}
        onChange={(event) => setEditedText(event.target.value)}
        completed={itemData.isCompleted}
      />

      <aside>
        {!itemData.isCompleted && !isEditing && (
          <ControlButton iconName="pen" onClick={handleStartEditing} />
        )}
        {!isEditing && (
          <ControlButton iconName="trash" onClick={() => deleteTodo.mutate()} />
        )}
        {!itemData.isCompleted && isEditing && (
          <ControlButton iconName="ok" onClick={handleFinishEditing} />
        )}
      </aside>
    </StyledTodoItem>
  );
}
