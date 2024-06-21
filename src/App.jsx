import Header from "src/components/Header";
import TodoContainer from "src/components/TodoContainer";
import ClearButton from "src/components/ClearButton";
import { useQuery, useMutation } from "@tanstack/react-query";
import PATH from "src/PATH";
import TodoItem from "src/components/TodoItem";
import { StyledApp } from "src/styled";

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch(PATH).then((res) => res.json()),
  });

  return (
    <>
      {isLoading && <h2>It's loading!</h2>}
      {isError && <h2>{JSON.stringify(error)}</h2>}
      {!isLoading && !isError && (
        <StyledApp>
          <Header></Header>
          <TodoContainer>
            {data.map((item) => (
              <TodoItem key={item.id} itemData={item} />
            ))}
          </TodoContainer>
          <ClearButton />{" "}
        </StyledApp>
      )}
    </>
  );
}

export default App;