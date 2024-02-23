export type InputPropType = {isLoading?:boolean} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = ({ isLoading, ...rest }: InputPropType) => {
  return<>
    <input {...rest} />
    {isLoading && <span>loading....</span>}
  </>
};