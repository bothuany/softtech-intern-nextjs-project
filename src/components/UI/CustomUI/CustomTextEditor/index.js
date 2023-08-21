import dynamic from "next/dynamic";
import { useEffect } from "react";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const CustomTextEditor = (props) => {
  useEffect(() => {
    if (props.text) {
      const editor = document.getElementById(props.id);
      if (editor) {
        editor.innerHTML = props.text;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.text]);

  const handleChange = (content) => {
    if (props.onChange) {
      props.onChange(content);
    }
  };

  return (
    <div>
      <SunEditor
        setContents={props.text}
        onChange={handleChange}
        id={props.id}
        name={props.name}
        hideToolbar={false}
        width="100%"
        height="450px"
      />
    </div>
  );
};

export default CustomTextEditor;
