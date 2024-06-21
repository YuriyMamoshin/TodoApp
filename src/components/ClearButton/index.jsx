import { StyledClearButton } from "src/components/ClearButton/styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PATH from "src/PATH";

export default function ClearButton() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () =>
      fetch(PATH, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <StyledClearButton onClick={mutate}>Clear all tasks</StyledClearButton>
  );
}
