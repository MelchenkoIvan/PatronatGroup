import React, { FC, useEffect, useState } from "react";

interface LocalStateType {
  loading: boolean;
  thumb: any;
}
interface PropsType {
  file: any;
}
const Thumb: FC<PropsType> = (props) => {
  const [state, setState] = useState<LocalStateType>({
    loading: false,
    thumb: undefined,
  });
  const readFile = () => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setState({ loading: false, thumb: reader.result });
    };

    reader.readAsDataURL(props.file);
  };
  useEffect(() => {
    setState({
      loading: true,
      thumb: readFile(),
    });
  }, [props.file]);
  if (!props.file) {
    return null;
  }

  if (state.loading) {
    return <p>loading...</p>;
  }
  return (
    <img
      src={state.thumb}
      alt={props.file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200}
    />
  );
};
export default Thumb;
