import { StyledCheckbox } from "src/components/Checkbox/styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PATH from "src/PATH";

export default function Checkbox({ itemData, disabled }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (prevTodo) =>
      fetch(`${PATH}/${itemData.id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...prevTodo,
          isCompleted: !prevTodo.isCompleted,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  function handleChange() {
    mutate(itemData);
  }

  return (
    <StyledCheckbox>
      <label>
        <input
          type="checkbox"
          checked={itemData.isCompleted}
          onChange={handleChange}
          disabled={disabled}
        />
        <img
          src={`src/assets/icons/${
            itemData.isCompleted ? "checked" : "unchecked"
          }.svg`}
        />
      </label>
    </StyledCheckbox>
  );
}
