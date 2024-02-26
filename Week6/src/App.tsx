import { apiProvider } from "./ApiManagement/ApiProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "./Cards/Card";
import "./App.css";
import { DataType } from "./DataType";
import { useState } from "react";

type InputType = {
  title: string;
  description: string;
};


export enum Method {
  GET = "get"
}

const App = () => {
  const [input, setInput] = useState<InputType>({ title: "", description: "" });
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<DataType[]>({
    queryKey: [Method.GET],
    queryFn: apiProvider.getData,
  });

  const {mutate} = useMutation({
    mutationFn:apiProvider.addPost,
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:[Method.GET] // naming convetions
      })
    }
  });



  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    mutate({id:data && data?.length+1 , title:input.title , description:input.description})
  };

  return (
    <>
      <div className="add-post container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            id="title"
            value={input.title}
            className="input"
            name="title"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="description"
            id="title"
            value={input.description}
            className="input"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="container">
        {isLoading
          ? "Loading..."
          : data?.map((item: DataType) => (
              <Card
                title={item.title}
                description={item.description}
                key={item.id}
              />
            ))}
      </div>
    </>
  );
};

export default App;
